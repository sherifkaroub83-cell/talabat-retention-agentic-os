"""Tests for the aos memory layer: retrieval, knowledge graph, context manager."""

import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from scripts.aos import memory  # noqa: E402


class RetrievalTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.ix = memory.VaultIndex.get()

    def test_index_covers_vault(self):
        self.assertGreater(self.ix.N, 150)

    def test_search_finds_canonical_note(self):
        hits = self.ix.search("talabat pro subscription GMV share", k=5)
        self.assertTrue(hits)
        self.assertTrue(any("Talabat_Pro" in h["path"] or "Talabat Pro" in h["path"] for h in hits),
                        [h["path"] for h in hits])

    def test_search_ranked_and_bounded(self):
        hits = self.ix.search("investment programme", k=3)
        self.assertLessEqual(len(hits), 3)
        scores = [h["score"] for h in hits]
        self.assertEqual(scores, sorted(scores, reverse=True))

    def test_type_filter(self):
        hits = self.ix.search("pipeline", k=10, type_filter="architecture")
        self.assertTrue(all(h["type"] == "architecture" for h in hits))

    def test_path_filter_decisions(self):
        hits = self.ix.search("investment total", k=5, path_filter="Decision_Log")
        self.assertTrue(all("Decision_Log" in h["path"] for h in hits))


class GraphTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.ix = memory.VaultIndex.get()

    def test_neighbors_known_note(self):
        n = self.ix.neighbors("Agentic_OS_Architecture")
        self.assertNotIn("error", n)
        self.assertTrue(n["links_out"] or n["backlinks"])

    def test_unknown_note_suggests(self):
        n = self.ix.neighbors("definitely-not-a-note-xyz")
        self.assertIn("error", n)

    def test_related_two_hop(self):
        r = self.ix.related("Agentic_OS_Architecture")
        self.assertNotIn("error", r)
        self.assertIsInstance(r["hop2_ranked"], list)

    def test_orphan_scope(self):
        # Orphan detection runs and returns only in-scope, non-underscore notes.
        o = self.ix.orphans()
        self.assertTrue(all(p.startswith("vault/Knowledge") for p in o))


class ContextTests(unittest.TestCase):
    def test_context_is_bounded_pointers(self):
        c = memory.context("financial plan scenarios", k=4)
        self.assertLessEqual(len(c["notes"]), 4)
        self.assertIn("rule", c)
        for n in c["notes"]:
            self.assertTrue(n["path"].startswith("vault/") or n["path"].startswith("app/")
                            or "/" in n["path"])

    def test_context_surfaces_decisions(self):
        c = memory.context("2026 investment total reconciliation")
        self.assertTrue(any("DEC-" in p for p in c["decisions"]))


if __name__ == "__main__":
    unittest.main()
