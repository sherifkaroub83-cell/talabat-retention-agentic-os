"""Integration test: vault-mcp as a real stdio subprocess (full protocol round-trip)."""

import json
import subprocess
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class McpSubprocessTests(unittest.TestCase):
    def test_full_stdio_roundtrip(self):
        msgs = [
            {"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {}},
            {"jsonrpc": "2.0", "method": "notifications/initialized"},
            {"jsonrpc": "2.0", "id": 2, "method": "tools/list"},
            {"jsonrpc": "2.0", "id": 3, "method": "tools/call",
             "params": {"name": "get_validation_status", "arguments": {"section": 2}}},
            {"jsonrpc": "2.0", "id": 4, "method": "tools/call",
             "params": {"name": "search_ranked", "arguments": {"query": "investment programme", "k": 3}}},
        ]
        stdin = "\n".join(json.dumps(m) for m in msgs) + "\n"
        r = subprocess.run([sys.executable, "scripts/vault_mcp/server.py"],
                           input=stdin, capture_output=True, text=True, timeout=60, cwd=ROOT)
        self.assertEqual(r.returncode, 0, r.stderr)
        responses = [json.loads(l) for l in r.stdout.strip().splitlines()]
        by_id = {resp.get("id"): resp for resp in responses}
        # initialize
        self.assertEqual(by_id[1]["result"]["serverInfo"]["name"], "vault-mcp")
        # tools/list includes the M3 tools
        names = {t["name"] for t in by_id[2]["result"]["tools"]}
        self.assertIn("get_events", names)
        self.assertIn("get_validation_status", names)
        self.assertGreaterEqual(len(names), 12)
        # validation status for a verified section reports PASS artifacts
        text3 = by_id[3]["result"]["content"][0]["text"]
        self.assertIn("Section 2", text3)
        self.assertIn("PASS", text3)
        # ranked search returns scored hits
        text4 = by_id[4]["result"]["content"][0]["text"]
        self.assertIn("Ranked vault search", text4)


if __name__ == "__main__":
    unittest.main()
