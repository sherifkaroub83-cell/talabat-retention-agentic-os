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

    def test_persona_images_are_local_assets_not_external_cdn(self):
        # The Qais/crew persona art must ship as local files alongside index.html --
        # never a googleusercontent.com or other external image URL. Each of the 4
        # crew members gets its own distinct photo file (not one shared composite
        # cropped via CSS background-position).
        self.assertIn("assets/qais-hero.jpg", self.html)
        for asset in ("zaid.jpg", "layla.jpg", "amir.jpg", "hana.jpg"):
            self.assertIn(f"assets/{asset}", self.html)
        self.assertNotRegex(self.html, r'(googleusercontent\.com|lh3\.google)')
        for asset in ("qais-hero.jpg", "zaid.jpg", "layla.jpg", "amir.jpg", "hana.jpg"):
            self.assertTrue((UI_HTML.parent / "assets" / asset).is_file(), asset)

    def test_crew_tiles_use_real_data_not_fabricated_stats(self):
        # Each persona tile (Zaid/Layla/Amir/Hana) must render figures pulled from the
        # same DATA object as the rest of the page, not invented numbers.
        for token in ("DATA.vault.totalNotes", "DATA.corpus.total", "DATA.decisions.length",
                      "DATA.options.length", "DATA.forecasts.gmv", "DATA.forecasts.confidence"):
            self.assertIn(token, self.html)

    def test_no_duplicate_style_attributes(self):
        # A duplicate style="..." style="..." on one element silently drops the second
        # declaration per HTML parsing rules -- caught a real bug in the knowledge() view.
        self.assertNotRegex(self.html, r'style="[^"]*"\s+style="')

    def test_no_fabricated_version_string(self):
        # The sidebar previously hardcoded a fake "v3.5.0 Active" build label with no
        # basis in any repo artifact. It must now be populated from the real snapshot
        # date at load time, not hardcoded in the static markup.
        self.assertNotRegex(self.html, r'id="core-version">\s*v\d')
        self.assertIn("DATA.meta.snapshotDate", self.html)
        self.assertIn("core-version", self.html)

    def test_mobile_menu_toggle_present_and_ordered_correctly(self):
        # A hamburger toggle must exist so all 6 views stay reachable when the sidebar
        # slides off-screen below 640px -- and the unconditional ".menu-toggle{display:none}"
        # rule must appear BEFORE the @media block that re-enables it, since two rules of
        # equal specificity resolve by source order (a real ordering bug found and fixed
        # in this file: the override was accidentally placed after the media query).
        self.assertIn('id="menu-toggle"', self.html)
        self.assertIn("menu-toggle", self.html)
        unconditional_idx = self.html.index(".menu-toggle { display: none; }")
        media_idx = self.html.index("@media (max-width: 640px)")
        self.assertLess(unconditional_idx, media_idx,
                         "unconditional .menu-toggle rule must precede the 640px media query")

    def test_crew_tiles_are_keyboard_accessible(self):
        # Crew tiles are real navigation (onclick sets location.hash), so they must be
        # focusable and operable from the keyboard, not just the mouse.
        tiles = re.findall(r'<div class="crew-tile[^"]*"[^>]*>', self.html)
        self.assertEqual(len(tiles), 4)
        for tile in tiles:
            self.assertIn('role="button"', tile)
            self.assertIn('tabindex="0"', tile)
            self.assertIn("onkeydown=", tile)

    def test_purple_text_color_meets_wcag_aa_contrast(self):
        # --purple (#7701d0) is ~2.4:1 on the obsidian background -- fine for borders/glows,
        # but was also used as *text* color (nav active label, chip-purple, .text-purple),
        # failing WCAG AA (4.5:1). A lighter --purple-ink token must be used for text roles.
        def luminance(hexcol):
            hexcol = hexcol.lstrip("#")
            r, g, b = (int(hexcol[i:i + 2], 16) / 255 for i in (0, 2, 4))
            def f(c):
                return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
            r, g, b = f(r), f(g), f(b)
            return 0.2126 * r + 0.7152 * g + 0.0722 * b

        def contrast(a, b):
            la, lb = luminance(a), luminance(b)
            la, lb = max(la, lb), min(la, lb)
            return (la + 0.05) / (lb + 0.05)

        m = re.search(r"--purple-ink:\s*(#[0-9a-fA-F]{6})", self.html)
        self.assertIsNotNone(m, "--purple-ink token not found")
        self.assertGreaterEqual(contrast(m.group(1), "#051424"), 4.5)
        self.assertIn(".text-purple { color: var(--purple-ink); }", self.html)
        self.assertIn("color: var(--purple-ink); border-right-color: var(--purple);", self.html)
        self.assertIn(".chip-purple { color: var(--purple-ink);", self.html)

    def test_no_dead_css_selectors(self):
        # .callout and .kbd were defined but never referenced by any rendered element.
        self.assertNotRegex(self.html, r"\n\.callout \{")
        self.assertNotRegex(self.html, r"\n\.kbd \{")

    def test_qais_and_crew_pulse_animations_respect_reduced_motion(self):
        # Qais's avatar and each crew tile's live-status dot animate continuously
        # (core-pulse / soft-pulse); both must be disabled under
        # prefers-reduced-motion, same as every other decorative animation on the page.
        self.assertIn("@keyframes core-pulse", self.html)
        self.assertIn("animation: core-pulse", self.html)
        rules = re.findall(
            r"@media \(prefers-reduced-motion: reduce\) \{([^}]*)\}", self.html)
        motion_rule = next((r for r in rules if ".thinking-border" in r), None)
        self.assertIsNotNone(motion_rule, "main reduced-motion override block not found")
        self.assertIn(".qais-avatar", motion_rule)
        self.assertIn(".crew-live", motion_rule)

    def test_crew_tiles_have_live_status_dot(self):
        # Each of the 4 crew tiles carries a decorative "live" status dot (a genuine
        # UI affordance, not a fabricated data claim -- analogous to the topbar's
        # real "OS operationally stable" indicator), and it must be hidden from
        # assistive tech since it conveys no information beyond page-load animation.
        tiles = re.findall(r'<div class="crew-tile[^"]*"[^>]*>.*?</div>\s*</div>', self.html, re.S)
        self.assertEqual(len(tiles), 4)
        for tile in tiles:
            self.assertIn('class="crew-live" aria-hidden="true"', tile)


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

    def test_every_agent_has_a_distinct_arabic_name(self):
        arabic_range = re.compile(r"[؀-ۿ]")
        seen_ar, seen_en = set(), set()
        for a in self.data["agents"]:
            self.assertIn("name", a, a)
            self.assertIn("nameAr", a, a)
            self.assertTrue(a["name"], a)
            self.assertRegex(a["nameAr"], arabic_range, f"{a['id']} nameAr has no Arabic script")
            self.assertNotIn(a["name"], seen_en, "duplicate English name")
            self.assertNotIn(a["nameAr"], seen_ar, "duplicate Arabic name")
            seen_en.add(a["name"])
            seen_ar.add(a["nameAr"])

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
