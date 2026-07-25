"""Tests for the kernel→console export (M4 live-bridge contract)."""

import json
import re
import subprocess
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KERNEL_JS = ROOT / "app" / "agentic-os-console" / "src" / "js" / "kernel.js"


class ExportConsoleTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        r = subprocess.run([sys.executable, "scripts/aos/export_console.py"],
                           cwd=ROOT, capture_output=True, text=True, timeout=120)
        assert r.returncode == 0, r.stderr
        text = KERNEL_JS.read_text(encoding="utf-8")
        cls.kernel = json.loads(re.search(r"export const KERNEL = (.*);\s*$", text, re.S).group(1))

    def test_workflow_rail_has_seven_stages(self):
        ids = [s["id"] for s in self.kernel["workflow"]]
        self.assertEqual(ids, ["goal", "planning", "execution", "validation", "review", "approval", "publish"])
        for s in self.kernel["workflow"]:
            self.assertIn(s["status"], ("done", "active", "todo"))

    def test_sections_and_validation_aligned(self):
        self.assertEqual(len(self.kernel["sections"]), 14)
        verified = [s["n"] for s in self.kernel["sections"] if s["status"] == "done_iv"]
        for n in verified:
            v = self.kernel["validation"][str(n)]
            self.assertTrue(v, f"verified section {n} lacks validation artifacts")
            self.assertEqual(v["qa"]["verdict"], "PASS", f"section {n}")

    def test_plan_and_budget_present(self):
        self.assertIsInstance(self.kernel["plan"], list)
        self.assertGreaterEqual(self.kernel["waveBudget"], 1)

    def test_events_embedded(self):
        self.assertIsInstance(self.kernel["events"], list)


if __name__ == "__main__":
    unittest.main()
