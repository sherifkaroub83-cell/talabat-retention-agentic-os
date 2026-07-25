"""aos validate — one-command verdict over the whole OS.

Bundles: unit tests, vault-mcp selftest, freshness checks, pipeline state.
Freshness mtime findings are WARN by default (unreliable on fresh checkouts);
set AOS_STRICT=1 to make any finding fail the verdict.
"""

import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def _run(cmd):
    r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=300)
    return {"cmd": " ".join(cmd), "exit": r.returncode,
            "tail": (r.stdout + r.stderr).strip().splitlines()[-3:]}


def validate(skip_tests: bool = False) -> dict:
    checks = {}
    if not skip_tests:
        checks["unit_tests"] = _run([sys.executable, "-m", "unittest", "discover", "-s", "tests", "-q"])
    checks["mcp_selftest"] = _run([sys.executable, "scripts/vault_mcp/server.py", "--selftest"])
    checks["freshness"] = _run([sys.executable, "scripts/check_freshness.py"])

    from scripts.aos import pipeline
    p = pipeline.plan()
    checks["pipeline"] = {"sections_verified": f"{p['sections_verified']}/{p['sections_total']}",
                          "next_items": len(p["next"])}

    strict = os.environ.get("AOS_STRICT") == "1"
    hard_fail = any(c.get("exit", 0) != 0 for k, c in checks.items()
                    if k in ("unit_tests", "mcp_selftest"))
    fresh_fail = checks["freshness"]["exit"] != 0
    verdict = "FAIL" if (hard_fail or (strict and fresh_fail)) else ("WARN" if fresh_fail else "PASS")

    result = {"verdict": verdict, "checks": checks}
    try:
        from scripts.aos import events
        events.emit("aos-validate", "validation", "repo", f"verdict={verdict}")
    except Exception:
        pass  # validation never fails because logging did
    return result
