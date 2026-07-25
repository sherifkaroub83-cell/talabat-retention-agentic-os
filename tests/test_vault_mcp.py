"""Unit + protocol tests for the vault-mcp server (read-only MCP layer)."""

import importlib.util
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("vault_mcp_server", ROOT / "scripts" / "vault_mcp" / "server.py")
server = importlib.util.module_from_spec(spec)
spec.loader.exec_module(server)


class ToolTests(unittest.TestCase):
    def test_every_tool_returns_nonempty_text(self):
        for name, tool in server.TOOLS.items():
            args = {}
            req = tool["schema"].get("required", [])
            if "id" in req:
                args = {"id": "DEC-011"}
            if "query" in req:
                args = {"query": "talabat pro"}
            out = tool["fn"](args)
            self.assertIsInstance(out, str, name)
            self.assertGreater(len(out), 20, name)

    def test_lookup_decision_finds_dec011(self):
        out = server.lookup_decision({"id": "DEC-011"})
        self.assertIn("DEC-011", out)
        self.assertIn("status: approved", out)

    def test_lookup_unknown_id_is_graceful(self):
        out = server.lookup_decision({"id": "DEC-999"})
        self.assertIn("No decision record", out)

    def test_search_facts_bounded(self):
        out = server.search_facts({"query": "GMV", "max_results": 3})
        self.assertLessEqual(len(out), server.MAX_CHARS + 100)

    def test_pipeline_status_covers_all_parts(self):
        out = server.get_pipeline_status({})
        for part in ("Part A", "Part B", "Part C"):
            self.assertIn(part, out)


class ProtocolTests(unittest.TestCase):
    def rpc(self, method, params=None, mid=1):
        return server.handle({"jsonrpc": "2.0", "id": mid, "method": method, "params": params or {}})

    def test_initialize(self):
        resp = self.rpc("initialize")
        self.assertEqual(resp["result"]["serverInfo"]["name"], "vault-mcp")
        self.assertIn("protocolVersion", resp["result"])

    def test_tools_list_matches_registry(self):
        resp = self.rpc("tools/list")
        names = {t["name"] for t in resp["result"]["tools"]}
        self.assertEqual(names, set(server.TOOLS))

    def test_tools_call_roundtrip(self):
        resp = self.rpc("tools/call", {"name": "get_allocation", "arguments": {}})
        self.assertFalse(resp["result"]["isError"])
        self.assertIn("175", resp["result"]["content"][0]["text"])

    def test_unknown_tool_is_result_not_error(self):
        resp = self.rpc("tools/call", {"name": "nope", "arguments": {}})
        self.assertTrue(resp["result"]["isError"])

    def test_unknown_method_is_jsonrpc_error(self):
        resp = self.rpc("bogus/method")
        self.assertIn("error", resp)

    def test_notification_returns_none(self):
        self.assertIsNone(server.handle({"jsonrpc": "2.0", "method": "notifications/initialized"}))


if __name__ == "__main__":
    unittest.main()
