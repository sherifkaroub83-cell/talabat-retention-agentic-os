"""Tests for the event bus and validation harness aggregation."""

import sys
import unittest
from pathlib import Path

import os
import tempfile

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
os.environ["AOS_EVENTS_PATH"] = str(Path(tempfile.mkdtemp()) / "events-test.jsonl")
from scripts.aos import events  # noqa: E402


class EventBusTests(unittest.TestCase):
    def test_emit_and_read_roundtrip(self):
        ev = events.emit("test-suite", "note", "tests/test_events.py", "roundtrip check")
        rows = events.read(type="note", limit=5)
        self.assertTrue(any(r["ts"] == ev["ts"] and r["detail"] == "roundtrip check" for r in rows))

    def test_event_shape(self):
        ev = events.emit("test-suite", "note", "shape")
        for key in ("ts", "actor", "type", "ref", "detail"):
            self.assertIn(key, ev)
        self.assertRegex(ev["ts"], r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$")

    def test_invalid_type_rejected(self):
        with self.assertRaises(ValueError):
            events.emit("test-suite", "not-a-type", "x")

    def test_read_filters(self):
        events.emit("test-suite", "note", "filter-check")
        self.assertTrue(all(e["type"] == "note" for e in events.read(type="note")))
        self.assertEqual(events.read(since="2999-01-01"), [])

    def test_stats(self):
        events.emit("test-suite", "note", "stats-check")
        s = events.stats()
        self.assertGreaterEqual(s["total"], 1)
        self.assertIn("note", s["by_type"])


if __name__ == "__main__":
    unittest.main()
