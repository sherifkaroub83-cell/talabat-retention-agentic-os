"""Tests for the aos kernel: registries, execution graph, planner."""

import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from scripts.aos import pipeline, registry  # noqa: E402


class RegistryTests(unittest.TestCase):
    def test_agent_registry(self):
        agents = registry.agents()
        ids = {a["id"] for a in agents}
        self.assertGreaterEqual(len(agents), 9)
        for required in ("bp-orchestrator", "qa-review-agent", "evidence-citation-agent",
                         "decision-steward", "publication-agent"):
            self.assertIn(required, ids)
        for a in agents:
            self.assertTrue(a["model"], a["id"])  # every agent carries a model route

    def test_skill_registry(self):
        skills = {s["id"] for s in registry.skills()}
        self.assertGreaterEqual(len(skills), 13)
        for required in ("business-plan-drafting", "citation-audit", "qa-review",
                         "deck-builder", "console-data-refresh"):
            self.assertIn(required, skills)

    def test_mcp_registry_includes_vault_mcp(self):
        servers = registry.mcp_tools()
        vm = next((s for s in servers if s["server"] == "vault-mcp"), None)
        self.assertIsNotNone(vm)
        self.assertGreaterEqual(len(vm["tools"]), 9)

    def test_model_router_policy(self):
        r = registry.model_router()
        self.assertIn("qa-review-agent", r["routes"])
        self.assertEqual(r["routes"]["qa-review-agent"], "inherit")


class PipelineTests(unittest.TestCase):
    def test_execution_graph_has_19_stages(self):
        g = pipeline.stages()
        self.assertEqual(len(g["A"]), 12)
        self.assertEqual(len(g["B"]), 11)  # 13.1-13.11
        self.assertEqual(len(g["C"]), 6)   # 14-19

    def test_part_a_statuses_parsed(self):
        g = pipeline.stages()
        self.assertTrue(all(s["status"] in ("done", "partial", "todo", "blocked", "unknown") for s in g["A"]))
        self.assertEqual(next(s for s in g["A"] if s["n"] == "1")["status"], "done")

    def test_sections_tracker_parsed(self):
        secs = pipeline.sections()
        self.assertEqual(len(secs), 14)
        self.assertTrue(all(s["status"] in ("done_iv", "done_sr", "done", "drafted", "todo", "unknown") for s in secs))

    def test_planner_respects_gates(self):
        p = pipeline.plan()
        self.assertEqual(p["sections_total"], 14)
        # Part C items may appear only when every section is independently verified
        c_items = [i for i in p["next"] if str(i["stage"]).isdigit() and int(i["stage"]) >= 14]
        if any(s["status"] != "done_iv" for s in pipeline.sections()):
            self.assertEqual(c_items, [])

    def test_mermaid_renders(self):
        m = pipeline.mermaid()
        self.assertIn("flowchart TD", m)
        self.assertIn("Part C", m)


if __name__ == "__main__":
    unittest.main()
