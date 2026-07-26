"""Static-content correctness tests for the Agentic OS Command Center UI (ui/index.html).

Data-correctness only -- verifies the embedded repository snapshot (data.js-equivalent
JSON blob) matches real repo state and stays internally consistent. Does not render the
page (that's covered by a headless-browser smoke check when a browser is available;
see ui/README_UI.md). Stdlib-only, no new project dependencies, mirrors tests/test_aos.py.
"""

import json
import re
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UI_HTML = ROOT / "ui" / "index.html"
sys.path.insert(0, str(ROOT))
from scripts.aos import pipeline, registry  # noqa: E402


def _load_data():
    html = UI_HTML.read_text(encoding="utf-8")
    m = re.search(
        r'<script id="os-data" type="application/json">\s*(\{.*?\})\s*</script>',
        html, re.S,
    )
    assert m, "os-data JSON block not found in ui/index.html"
    return json.loads(m.group(1))


class UiFileTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = UI_HTML.read_text(encoding="utf-8")
        cls.data = _load_data()

    def test_no_leftover_placeholder(self):
        self.assertNotIn("__AEGIS_DATA_JSON__", self.html)
        self.assertNotIn("__OS_DATA_JSON__", self.html)

    def test_no_external_network_dependency(self):
        # Dependency-free by design: no CDN <script src="...">, no Google Fonts <link href="...">.
        # (A code comment may still *mention* fonts.googleapis.com as an optional upgrade note.)
        self.assertNotRegex(self.html, r'<(script|link)[^>]+(cdn\.tailwindcss\.com|fonts\.googleapis\.com|googleusercontent\.com)')

    def test_six_nav_views_present(self):
        for view in ("architecture", "knowledge", "decision", "forecast", "publication", "audit"):
            self.assertIn(f'data-view="{view}"', self.html)
            self.assertIn(f"#/{view}", self.html)

    def test_json_blob_is_valid_and_nonempty(self):
        self.assertIsInstance(self.data, dict)
        self.assertGreater(len(self.data), 5)

    def test_rebranded_to_agentic_os(self):
        # The interface was refreshed from "Aegis OS" branding to "Agentic OS" / "Agentic Core";
        # no stray old-brand text should remain user-facing.
        self.assertIn("Agentic OS", self.html)
        self.assertIn("Agentic Core", self.html)
        self.assertNotIn("Aegis OS", self.html)
        self.assertNotIn("Obsidian Core", self.html)

    def test_audit_view_has_no_separate_fabricated_score(self):
        # The Audit view must compute its headline "VERIFIED" figure from the same
        # readiness()/pipeline data as Command Center -- never a second, hardcoded
        # audit-specific percentage that could drift from the real gate state.
        audit_fn_match = re.search(r"audit\(\) \{(.*?)\n  \},\n\};", self.html, re.S)
        self.assertIsNotNone(audit_fn_match, "audit() view function not found")
        audit_body = audit_fn_match.group(1)
        self.assertIn("readiness()", audit_body)
        self.assertNotRegex(audit_body, r'"\d{1,3}%"|>\d{1,3}%<')

    def test_no_fabricated_live_telemetry(self):
        # Dynamism must come from a genuine local clock/uptime counter, never simulated
        # business metrics (fake network load, core temperature, node counts, hashes).
        for banned in ("NETWORK LOAD", "CORE TEMP", "THERMAL", "Math.random()"):
            self.assertNotIn(banned, self.html)


class DataAgainstRepoTests(unittest.TestCase):
    """Every figure in the UI must trace to the same repo state the AOS kernel reports."""

    @classmethod
    def setUpClass(cls):
        cls.data = _load_data()

    def test_sections_match_kernel(self):
        kernel_sections = pipeline.sections()
        self.assertEqual(len(self.data["sections"]), len(kernel_sections))
        self.assertEqual(len(self.data["sections"]), 14)
        verified_ui = sum(1 for s in self.data["sections"] if s["status"] == "done_iv")
        verified_kernel = sum(1 for s in kernel_sections if s["status"] == "done_iv")
        self.assertEqual(verified_ui, verified_kernel)

    def test_part_a_matches_kernel(self):
        stages = pipeline.stages()
        kernel_a_done = sum(1 for s in stages["A"] if s["status"] == "done")
        ui_a_done = sum(1 for s in self.data["pipeline"]["partA"] if s["status"] == "done")
        self.assertEqual(ui_a_done, kernel_a_done)
        self.assertEqual(len(self.data["pipeline"]["partA"]), 12)

    def test_part_c_matches_kernel(self):
        stages = pipeline.stages()
        kernel_c = {int(s["n"]): s["status"] for s in stages["C"]}
        ui_c = {s["n"]: s["status"] for s in self.data["pipeline"]["partC"]}
        self.assertEqual(kernel_c, ui_c)
        # Stages 14-18 must all be done, 19 must not be (this UI ships before publication).
        for n in range(14, 19):
            self.assertEqual(ui_c[n], "done", f"stage {n} should be done")
        self.assertEqual(ui_c[19], "todo")

    def test_agent_roster_matches_registry(self):
        registry_ids = {a["id"] for a in registry.agents()}
        ui_ids = {a["id"] for a in self.data["agents"]}
        self.assertTrue(ui_ids.issubset(registry_ids), ui_ids - registry_ids)
        self.assertEqual(len(self.data["agents"]), 9)

    def test_skill_count_matches_registry(self):
        self.assertGreaterEqual(len(registry.skills()), self.data["skills"])

    def test_gates_all_pass_except_publication(self):
        gates = self.data["gates"]
        self.assertEqual(len(gates), 6)
        passed = [g for g in gates if g["status"] == "done"]
        pending = [g for g in gates if g["status"] != "done"]
        self.assertEqual(len(passed), 5)
        self.assertEqual(len(pending), 1)
        self.assertEqual(pending[0]["name"], "Publication Handoff")

    def test_decisions_are_dated_and_sequential(self):
        decisions = self.data["decisions"]
        self.assertEqual(len(decisions), 14)
        ids = [d["id"] for d in decisions]
        self.assertEqual(ids, [f"DEC-{i:03d}" for i in range(1, 15)])
        for d in decisions:
            self.assertRegex(d["date"], r"^2026-07-\d\d$")

    def test_options_reference_real_register(self):
        opt_path = ROOT / "vault" / "Decisions" / "Investment_Options_Register.md"
        if opt_path.exists():
            text = opt_path.read_text(encoding="utf-8", errors="replace")
            for opt in self.data["options"]:
                self.assertIn(opt["id"], text)

    def test_forecast_figures_are_disclosed_ranges_not_fabricated_points(self):
        f = self.data["forecasts"]
        # Every headline figure must be a range ("X-Y") or explicitly qualified, never a
        # bare fabricated single point (the project's standing no-false-precision rule).
        for key in ("gmv", "revenue", "ebitda"):
            self.assertRegex(f[key], r"\d+(\.\d+)?-\d+(\.\d+)?", f"{key} must be a disclosed range")

    def test_publication_note_is_honest_about_stale_export(self):
        # Must not claim the export bundle is ready when it predates Stage 17 fixes --
        # accept any phrasing that says so, not one literal word.
        note = self.data["publicationNote"].lower()
        self.assertTrue(
            any(phrase in note for phrase in ("stale", "predates", "not yet been regenerated", "not yet regenerated")),
            note,
        )
        self.assertNotIn("export ready", note)


if __name__ == "__main__":
    unittest.main()
