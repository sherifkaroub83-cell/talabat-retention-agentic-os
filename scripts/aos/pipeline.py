"""Pipeline kernel: execution graph, state manager, planner/scheduler.

State is derived live from the governing documents (pipeline doc + project
tracker) — the repository is the state store, so this module can never disagree
with the OS's own records. The planner emits the next runnable work items under
the pipeline's gate rules; it does not execute them (execution stays with
Claude Code sessions and their agents, per the OS design).
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PIPELINE_DOC = ROOT / "vault" / "Architecture" / "Business_Plan_Generation_Pipeline.md"
TRACKER = ROOT / "vault" / "Projects" / "Talabat-Group-AI-Investment-Allocation-Business-Plan.md"

STATUS_MAP = [("✅", "done"), ("🟡", "partial"), ("⬜", "todo"), ("🔴", "blocked")]


def _status_of(cell: str) -> str:
    for emoji, name in STATUS_MAP:
        if emoji in cell:
            return name
    return "unknown"


def stages() -> dict:
    """Execution graph: Parts A/B/C with per-stage status parsed from the pipeline doc."""
    doc = PIPELINE_DOC.read_text(encoding="utf-8", errors="replace")
    parts = {"A": [], "B": [], "C": []}
    part = None
    for line in doc.splitlines():
        if line.startswith("## Part A"):
            part = "A"
        elif line.startswith("## Part B"):
            part = "B"
        elif line.startswith("## Part C"):
            part = "C"
        m = re.match(r"^\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|", line)
        if m and part:
            cells = [c.strip() for c in line.strip("|").split("|")]
            parts[part].append({
                "n": m.group(1),
                "name": m.group(2).replace("**", "").strip(),
                "owner": cells[2] if len(cells) > 2 else "",
                "status": _status_of(cells[-1]) if part in ("A", "C") else "per-section",
            })
    return parts


def sections() -> list:
    """Section state from the active project tracker."""
    doc = TRACKER.read_text(encoding="utf-8", errors="replace")
    out = []
    for line in doc.splitlines():
        m = re.match(r"^\|\s*(\d{1,2})\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|", line)
        if m and 1 <= int(m.group(1)) <= 14:
            cell = m.group(3)
            if "independently verified" in cell:
                status = "done_iv"
            elif "self-reviewed" in cell:
                status = "done_sr"
            elif "✅" in cell:
                status = "done"
            elif "🟡" in cell:
                status = "drafted"
            else:
                status = _status_of(cell)
            out.append({"n": int(m.group(1)), "name": m.group(2), "status": status})
    return out


def plan() -> dict:
    """Planner/scheduler: next runnable work items under the gate rules.

    Gate logic encoded: Part C runs only when all 14 sections reach drafted-or-
    better; Stage 19 only when 14–18 pass; Section 1's Pass 2 should run last
    (it must reflect the final state of Sections 2–14).
    """
    g = stages()
    secs = sections()
    items = []

    for s in g["A"]:
        if s["status"] not in ("done",):
            items.append({"stage": s["n"], "action": f"Complete Part A stage {s['n']} — {s['name']}", "owner": s["owner"]})

    non_exec = [s for s in secs if s["n"] != 1]
    for s in non_exec:
        if s["status"] in ("drafted", "done_sr"):
            items.append({"stage": "13.9/13.11", "action": f"Pass 2 verification — Section {s['n']} ({s['name']})",
                          "owner": "evidence-citation-agent + qa-review-agent"})
    s1 = next((s for s in secs if s["n"] == 1), None)
    if s1 and s1["status"] != "done_iv" and all(s["status"] == "done_iv" for s in non_exec):
        items.append({"stage": "13.9/13.11", "action": "Pass 2 verification — Section 1 (Executive Summary, gated last)",
                      "owner": "evidence-citation-agent + qa-review-agent"})

    if all(s["status"] in ("done_iv",) for s in secs):
        for s in g["C"]:
            if s["status"] != "done":
                items.append({"stage": s["n"], "action": f"Whole-plan stage {s['n']} — {s['name']}", "owner": s["owner"]})
                break  # stages 14-19 are sequential
    return {
        "sections_verified": sum(1 for s in secs if s["status"] == "done_iv"),
        "sections_total": len(secs),
        "next": items,
    }


def mermaid() -> str:
    """Execution graph as a mermaid flowchart with live statuses."""
    g = stages()
    secs = sections()
    icon = {"done": "✅", "partial": "🟡", "todo": "⬜", "blocked": "🔴", "per-section": "▸",
            "done_iv": "✅", "done_sr": "☑", "drafted": "🟡", "unknown": "?"}
    lines = ["flowchart TD", '  subgraph A["Part A — Setup"]']
    prev = None
    for s in g["A"]:
        nid = f"A{s['n']}"
        lines.append(f'    {nid}["{icon[s["status"]]} {s["n"]} {s["name"]}"]')
        if prev:
            lines.append(f"    {prev} --> {nid}")
        prev = nid
    lines.append("  end")
    verified = sum(1 for s in secs if s["status"] == "done_iv")
    lines.append(f'  B13["Part B — per-section loop 13.1–13.11<br/>{verified}/{len(secs)} independently verified"]')
    lines.append(f"  {prev} --> B13")
    prev = "B13"
    lines.append('  subgraph C["Part C — Whole-plan gates"]')
    for s in g["C"]:
        nid = f"C{s['n']}"
        lines.append(f'    {nid}["{icon[s["status"]]} {s["n"]} {s["name"]}"]')
        lines.append(f"    {prev} --> {nid}")
        prev = nid
    lines.append("  end")
    return "\n".join(lines)
