"""Tests for the repository freshness checker (memory-layer automation)."""

import importlib.util
import subprocess
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / "scripts" / "check_freshness.py"


def load():
    spec = importlib.util.spec_from_file_location("check_freshness", SCRIPT)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


class FreshnessTests(unittest.TestCase):
    def test_moc_links_clean(self):
        mod = load()
        mod.findings.clear()
        mod.check_validation_moc_links()
        self.assertEqual(mod.findings, [], "Validation notes missing from MOC index")

    def test_stale_frontmatter_clean(self):
        mod = load()
        mod.findings.clear()
        mod.check_stale_frontmatter()
        self.assertEqual(mod.findings, [])

    def test_cli_runs(self):
        # mtime-based console check is environment-dependent (CI checkouts reset
        # mtimes), so assert only that the script executes and reports coherently.
        r = subprocess.run([sys.executable, str(SCRIPT)], capture_output=True, text=True)
        self.assertIn(r.returncode, (0, 1))
        out = r.stdout
        self.assertTrue("all clear" in out or "finding" in out)


if __name__ == "__main__":
    unittest.main()
