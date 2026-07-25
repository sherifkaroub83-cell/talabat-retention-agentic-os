#!/usr/bin/env python3
"""aos CLI — inspect and operate the Agentic OS kernel.

Usage:
    python3 scripts/aos/cli.py <command> [args] [--json]

Commands:
    status          sections + pipeline state
    plan            planner: next runnable work items (respects gate rules)
    agents          agent registry + model routes
    skills          skill registry
    mcp             MCP servers + tools
    graph           execution graph (mermaid)
    search <q>      BM25-ranked vault retrieval
    related <t>     knowledge-graph neighborhood
    context <t>     bounded context set for a task
    orphans         unlinked Knowledge notes
    events [type]   read the event log (newest last)
    emit <type> <ref> [detail...]   append an event
    metrics         event-log statistics (per actor / per type)
    validate        one-command verdict: tests + selftest + freshness + pipeline

--json on any command emits machine-readable output (the console bridge contract).
"""

import json
import signal
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from scripts.aos import config, events, memory, pipeline, registry, validate as validate_mod  # noqa: E402

try:  # piped output (| head) must not traceback
    signal.signal(signal.SIGPIPE, signal.SIG_DFL)
except (AttributeError, ValueError):
    pass


def main(argv):
    args = [a for a in argv[1:] if a != "--json"]
    as_json = "--json" in argv
    cmd = args[0] if args else "status"
    rest = args[1:]
    out = None  # structured result; printed as JSON or prettily below

    if cmd == "status":
        out = {"sections": pipeline.sections(), "stages": pipeline.stages(),
               "plan_summary": {k: v for k, v in pipeline.plan().items() if k != "next"}}
        if not as_json:
            p = out["plan_summary"]
            print(f"Sections independently verified: {p['sections_verified']}/{p['sections_total']}")
            for s in out["sections"]:
                print(f"  S{s['n']:>2} {s['status']:<8} {s['name']}")
            for part, sts in out["stages"].items():
                done = sum(1 for s in sts if s["status"] == "done")
                label = {"A": "Part A", "B": "Part B (per-section)", "C": "Part C"}[part]
                print(f"{label}: {done}/{len(sts)} done" if part != "B" else f"{label}: {len(sts)} sub-stages")
            return 0
    elif cmd == "plan":
        out = pipeline.plan()
        out["max_concurrent_agents"] = config.MAX_CONCURRENT_AGENTS
        if not as_json:
            if not out["next"]:
                print("Pipeline complete — hand off to Publication Layer.")
            for i, item in enumerate(out["next"], 1):
                print(f"{i:>2}. [stage {item['stage']}] {item['action']}  ({item['owner']})")
            print(f"\n(wave budget: max {out['max_concurrent_agents']} concurrent agents — scripts/aos/config.py)")
            return 0
    elif cmd == "agents":
        out = {"agents": registry.agents(), "router": registry.model_router()}
        if not as_json:
            for a in out["agents"]:
                print(f"{a['id']:<26} model={a['model']:<8} tools={','.join(a['tools'])}")
            print(f"\nrouting policy: {out['router']['policy']} — {out['router']['rule']}")
            return 0
    elif cmd == "skills":
        out = registry.skills()
        if not as_json:
            for s in out:
                print(f"{s['id']:<32} {s['path']}")
            return 0
    elif cmd == "mcp":
        out = registry.mcp_tools()
    elif cmd == "graph":
        print(pipeline.mermaid())
        return 0
    elif cmd == "search":
        out = memory.VaultIndex.get().search(" ".join(rest) or "talabat")
        if not as_json:
            for h in out:
                print(f"{h['score']:>6}  {h['path']}" + (f"\n        {h['snippet']}" if h["snippet"] else ""))
            return 0
    elif cmd == "related":
        out = memory.VaultIndex.get().related(" ".join(rest))
    elif cmd == "context":
        out = memory.context(" ".join(rest))
    elif cmd == "orphans":
        out = memory.VaultIndex.get().orphans()
        if not as_json:
            print("\n".join(out) if out else "No orphans in vault/Knowledge.")
            return 0
    elif cmd == "events":
        out = events.read(type=rest[0] if rest else None)
        if not as_json:
            for e in out:
                print(f"{e['ts']}  {e['type']:<16} {e['actor']:<22} {e['ref']}" +
                      (f" — {e['detail']}" if e.get("detail") else ""))
            return 0
    elif cmd == "emit":
        if len(rest) < 2:
            print("usage: aos emit <type> <ref> [detail...]")
            return 1
        out = events.emit("operator", rest[0], rest[1], " ".join(rest[2:]))
    elif cmd == "metrics":
        out = events.stats()
    elif cmd == "validate":
        out = validate_mod.validate()
        if not as_json:
            print(f"VERDICT: {out['verdict']}")
            for name, c in out["checks"].items():
                state = c.get("exit", "-")
                print(f"  {name:<14} exit={state}  {c.get('tail', c)!s:.120}")
            return 0 if out["verdict"] != "FAIL" else 1
        print(json.dumps(out, indent=2))
        return 0 if out["verdict"] != "FAIL" else 1
    else:
        print(__doc__)
        return 1

    print(json.dumps(out, indent=2, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
