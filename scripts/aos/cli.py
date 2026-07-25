#!/usr/bin/env python3
"""aos CLI — inspect the Agentic OS kernel.

Usage:
    python3 scripts/aos/cli.py status     # sections + pipeline state
    python3 scripts/aos/cli.py plan       # planner: next runnable work items
    python3 scripts/aos/cli.py agents     # agent registry + model routes
    python3 scripts/aos/cli.py skills     # skill registry
    python3 scripts/aos/cli.py mcp       # MCP registry
    python3 scripts/aos/cli.py graph      # execution graph (mermaid)
"""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[2]))
from scripts.aos import pipeline, registry  # noqa: E402


def main(argv):
    cmd = argv[1] if len(argv) > 1 else "status"
    if cmd == "status":
        p = pipeline.plan()
        print(f"Sections independently verified: {p['sections_verified']}/{p['sections_total']}")
        for s in pipeline.sections():
            print(f"  S{s['n']:>2} {s['status']:<8} {s['name']}")
        for part, sts in pipeline.stages().items():
            done = sum(1 for s in sts if s["status"] == "done")
            label = {"A": "Part A", "B": "Part B (per-section)", "C": "Part C"}[part]
            print(f"{label}: {done}/{len(sts)} done" if part != "B" else f"{label}: {len(sts)} sub-stages")
    elif cmd == "plan":
        p = pipeline.plan()
        if not p["next"]:
            print("Pipeline complete — hand off to Publication Layer.")
        for i, item in enumerate(p["next"], 1):
            print(f"{i:>2}. [stage {item['stage']}] {item['action']}  ({item['owner']})")
    elif cmd == "agents":
        r = registry.model_router()
        for a in registry.agents():
            print(f"{a['id']:<26} model={r['routes'][a['id']]:<8} tools={','.join(a['tools'])}")
        print(f"\nrouting policy: {r['policy']} — {r['rule']}")
    elif cmd == "skills":
        for s in registry.skills():
            print(f"{s['id']:<32} {s['path']}")
    elif cmd == "mcp":
        print(json.dumps(registry.mcp_tools(), indent=2))
    elif cmd == "graph":
        print(pipeline.mermaid())
    else:
        print(__doc__)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
