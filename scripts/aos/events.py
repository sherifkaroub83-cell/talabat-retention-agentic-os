"""Event bus: append-only event log (episodic memory substrate).

M3 of the AOS Design Specification. Events are observational — the governing
documents remain canonical; the log powers replay, metrics, agent health, and
the console timeline. Store: vault/_state/events.jsonl (tracked, text,
append-only; never rewritten).

Event shape: {"ts": iso8601, "actor": str, "type": str, "ref": str, "detail": str}
Types (open set): stage_transition, agent_run, verdict, decision, approval,
fix_cycle, milestone, validation, publish.
"""

import json
import os
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
STATE = ROOT / "vault" / "_state"


def _log_path() -> Path:
    """AOS_EVENTS_PATH overrides the store (tests use a temp file)."""
    override = os.environ.get("AOS_EVENTS_PATH")
    return Path(override) if override else STATE / "events.jsonl"

VALID_TYPES = {"stage_transition", "agent_run", "verdict", "decision", "approval",
               "fix_cycle", "milestone", "validation", "publish", "note"}


def emit(actor: str, type: str, ref: str, detail: str = "") -> dict:
    """Append one event. Returns the event as written."""
    if type not in VALID_TYPES:
        raise ValueError(f"unknown event type '{type}' (valid: {sorted(VALID_TYPES)})")
    log = _log_path()
    log.parent.mkdir(parents=True, exist_ok=True)
    ev = {"ts": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
          "actor": actor, "type": type, "ref": ref, "detail": detail}
    with log.open("a", encoding="utf-8") as f:
        f.write(json.dumps(ev, ensure_ascii=False) + "\n")
    return ev


def read(since: str = None, type: str = None, limit: int = 100) -> list:
    """Read events, newest last. Optional ISO-date lower bound and type filter."""
    log = _log_path()
    if not log.exists():
        return []
    out = []
    for line in log.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line:
            continue
        try:
            ev = json.loads(line)
        except json.JSONDecodeError:
            continue  # a corrupt line never breaks the reader
        if since and ev.get("ts", "") < since:
            continue
        if type and ev.get("type") != type:
            continue
        out.append(ev)
    return out[-limit:]


def stats() -> dict:
    """Per-actor and per-type counts — the metrics primitive."""
    from collections import Counter
    evs = read(limit=100000)
    return {"total": len(evs),
            "by_type": dict(Counter(e["type"] for e in evs)),
            "by_actor": dict(Counter(e["actor"] for e in evs))}
