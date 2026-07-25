#!/usr/bin/env python3
"""vault-mcp — read-only MCP server for the talabat Agentic OS vault.

Exposes the vault's governed knowledge (pipeline status, decisions, assumptions,
investment options, facts, forecast structures) as Model Context Protocol tools.

Decision record: vault/Decisions/Decision_Log/DEC-011_mcp-layer-pursue.md
Deliberately read-only: writes stay with the ordinary file tools under the
propose-then-approve conventions, so this surface can never bypass pipeline gates.

Zero dependencies — Python 3.8+ stdlib only. Transport: newline-delimited
JSON-RPC 2.0 over stdio (the MCP stdio transport).

Smoke test:
    python3 scripts/vault_mcp/server.py --selftest
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
VAULT = ROOT / "vault"
MAX_CHARS = 4000  # bound every tool response

PROTOCOL_VERSION = "2024-11-05"
SERVER_INFO = {"name": "vault-mcp", "version": "1.0.0"}


# ---------------------------------------------------------------- helpers

def read(path: Path, limit: int = 200) -> str:
    try:
        lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
        return "\n".join(lines[:limit])
    except OSError as e:
        return f"[unreadable: {e}]"


def clamp(text: str) -> str:
    if len(text) > MAX_CHARS:
        return text[:MAX_CHARS] + f"\n… [truncated at {MAX_CHARS} chars]"
    return text


def table_rows(text: str):
    """Yield cell lists for markdown table body rows."""
    for line in text.splitlines():
        if line.startswith("|") and not re.match(r"^\|[\s\-:|]+\|$", line):
            cells = [c.strip() for c in line.strip("|").split("|")]
            yield cells


STATUS_EMOJI = {"✅": "done", "🟡": "in-progress/partial", "⬜": "not started", "🔴": "blocked"}


def emoji_status(cell: str) -> str:
    for e, label in STATUS_EMOJI.items():
        if e in cell:
            return label
    return cell[:40]


# ---------------------------------------------------------------- tools

def get_pipeline_status(args):
    doc = (VAULT / "Architecture" / "Business_Plan_Generation_Pipeline.md").read_text(
        encoding="utf-8", errors="replace")
    out = ["# Pipeline status (Business_Plan_Generation_Pipeline.md)"]
    part = None
    for line in doc.splitlines():
        if line.startswith("## Part"):
            part = line.lstrip("# ").strip()
            out.append(f"\n{part}")
        m = re.match(r"^\|\s*(\d+(?:\.\d+)?)\s*\|\s*\*\*(.+?)\*\*", line)
        if m and part:
            cells = [c.strip() for c in line.strip("|").split("|")]
            status = emoji_status(cells[-1]) if "Part A" in part or "Part C" in part else "per-section"
            out.append(f"  Stage {m.group(1)}: {m.group(2)} — {status}")
    return clamp("\n".join(out))


def get_sections_status(args):
    doc = (VAULT / "Projects" / "Talabat-Group-AI-Investment-Allocation-Business-Plan.md").read_text(
        encoding="utf-8", errors="replace")
    out = ["# Section status (active tracker, post-pivot)"]
    for cells in table_rows(doc):
        if len(cells) >= 3 and re.fullmatch(r"\d{1,2}", cells[0]):
            out.append(f"  Section {cells[0]:>2}: {cells[1]} — {cells[2]}")
    return clamp("\n".join(out))


def _lookup_record(directory: Path, rec_id: str, kind: str):
    rec_id = rec_id.upper().strip()
    for f in sorted(directory.glob("*.md")):
        if f.name.upper().startswith(rec_id):
            return clamp(f"# {f.relative_to(ROOT)}\n\n" + read(f, 80))
    names = ", ".join(f.name.split("_")[0] for f in sorted(directory.glob("*.md")))
    return f"No {kind} record matching '{rec_id}'. Available: {names}"


def lookup_decision(args):
    return _lookup_record(VAULT / "Decisions" / "Decision_Log", args.get("id", ""), "decision")


def lookup_option(args):
    return _lookup_record(VAULT / "Decisions" / "Investment_Options", args.get("id", ""), "investment-option")


def lookup_assumption(args):
    asm_id = args.get("id", "").upper().strip()
    doc = (VAULT / "Decisions" / "Assumptions_Register.md").read_text(encoding="utf-8", errors="replace")
    hits = [" | ".join(c) for c in table_rows(doc) if c and c[0].upper().startswith(asm_id)]
    if hits:
        return clamp(f"# Assumptions_Register.md — {asm_id}\n\n" + "\n\n".join(hits))
    return f"No assumption row matching '{asm_id}' (rows are ASM-001..ASM-047 era; check the register)."


def search_facts(args):
    query = args.get("query", "").strip()
    if not query:
        return "Provide a 'query' string."
    max_results = min(int(args.get("max_results", 8)), 20)
    rx = re.compile(re.escape(query), re.IGNORECASE)
    results = []
    for base in [VAULT / "Knowledge" / "Facts", VAULT / "Knowledge" / "Topics",
                 VAULT / "Knowledge" / "Strategic", VAULT / "Research" / "Notes"]:
        if not base.exists():
            continue
        for f in sorted(base.rglob("*.md")):
            try:
                text = f.read_text(encoding="utf-8", errors="replace")
            except OSError:
                continue
            matches = [ln.strip() for ln in text.splitlines() if rx.search(ln)]
            if rx.search(f.stem) or matches:
                snippet = "\n".join(f"    {m[:180]}" for m in matches[:3])
                results.append(f"- {f.relative_to(ROOT)}\n{snippet}" if snippet
                               else f"- {f.relative_to(ROOT)} (filename match)")
            if len(results) >= max_results:
                break
        if len(results) >= max_results:
            break
    header = f"# Facts/Topics/Strategic/Research search: '{query}' ({len(results)} hits)"
    note = ("\nEvidence rule: cite the note, and through it the (DocID, page) source. "
            "Tool results are pointers, not a new evidence tier.")
    return clamp(header + "\n" + ("\n".join(results) if results else "No matches.") + note)


def get_kpi_tree(args):
    return clamp("# vault/Forecasts/KPI_Tree_v2.md (head)\n\n" + read(VAULT / "Forecasts" / "KPI_Tree_v2.md", 120))


def get_scenarios(args):
    return clamp("# vault/Forecasts/Scenarios_v2.md (head)\n\n" + read(VAULT / "Forecasts" / "Scenarios_v2.md", 120))


def get_allocation(args):
    return (
        "# 2026 investment programme — USD 175m (Board-approved)\n"
        "- ~USD 120m Everyday App initiatives (~USD 75m opex + ~USD 45m capex): talabat pro, "
        "AI personalisation, multi-vertical cross-sell, grocery/retail expansion, new ventures\n"
        "- ~USD 55m Food-leadership initiatives: restaurant-partner growth, food CVP, delivery reliability\n"
        "Reconciliation governed by DEC-010 (reissuing DEC-004): USD175m total (TLB-020 p.16) "
        "decomposes 120+55; TLB-019 '>USD100m' is the earlier lower-precision Everyday-App-only figure.\n"
        "High confidence (175=120+55 directly disclosed); Medium (TLB-019 linkage inference).\n"
        "Allocation *within* buckets is the plan's decision question — see DEC-009 for the approved "
        "ranking/funding-sequence presentation rules (ranges never a headline exhibit)."
    )


TOOLS = {
    "get_pipeline_status": {
        "fn": get_pipeline_status,
        "description": "Current status of all 19 pipeline stages (Parts A/B/C) parsed from the governing pipeline document.",
        "schema": {"type": "object", "properties": {}, "required": []},
    },
    "get_sections_status": {
        "fn": get_sections_status,
        "description": "Status of the 14 Business Plan sections from the active (post-pivot) project tracker.",
        "schema": {"type": "object", "properties": {}, "required": []},
    },
    "lookup_decision": {
        "fn": lookup_decision,
        "description": "Fetch a Decision Log record by id (e.g. 'DEC-009').",
        "schema": {"type": "object", "properties": {"id": {"type": "string", "description": "Decision id, e.g. DEC-009"}}, "required": ["id"]},
    },
    "lookup_assumption": {
        "fn": lookup_assumption,
        "description": "Fetch Assumptions Register row(s) by id (e.g. 'ASM-029').",
        "schema": {"type": "object", "properties": {"id": {"type": "string", "description": "Assumption id, e.g. ASM-029"}}, "required": ["id"]},
    },
    "lookup_option": {
        "fn": lookup_option,
        "description": "Fetch an Investment Option record by id (e.g. 'OPT-002').",
        "schema": {"type": "object", "properties": {"id": {"type": "string", "description": "Option id, e.g. OPT-002"}}, "required": ["id"]},
    },
    "search_ranked": {
        "fn": lambda args: _search_ranked(args),
        "description": "BM25-ranked hybrid search over the whole vault (aos memory layer): returns scored note paths + citation-bearing snippets. Optional type filter (e.g. 'validation', 'architecture').",
        "schema": {"type": "object", "properties": {"query": {"type": "string"}, "k": {"type": "integer", "default": 8}, "type": {"type": "string"}}, "required": ["query"]},
    },
    "search_facts": {
        "fn": search_facts,
        "description": "Search the governed knowledge tiers (Knowledge/Facts, Topics, Strategic, Research/Notes) for a phrase; returns note paths + matching lines.",
        "schema": {"type": "object", "properties": {"query": {"type": "string"}, "max_results": {"type": "integer", "default": 8}}, "required": ["query"]},
    },
    "get_kpi_tree": {
        "fn": get_kpi_tree,
        "description": "Head of KPI_Tree_v2.md (the 50-KPI monitored tree feeding Section 13).",
        "schema": {"type": "object", "properties": {}, "required": []},
    },
    "get_scenarios": {
        "fn": get_scenarios,
        "description": "Head of Scenarios_v2.md (base/upside/downside × 8 modules).",
        "schema": {"type": "object", "properties": {}, "required": []},
    },
    "get_allocation": {
        "fn": get_allocation,
        "description": "The USD 175m = ~120m Everyday App + ~55m Food-leadership decomposition with its governing decisions and confidence levels.",
        "schema": {"type": "object", "properties": {}, "required": []},
    },
}


def _search_ranked(args):
    import sys
    sys.path.insert(0, str(ROOT))
    from scripts.aos import memory
    hits = memory.VaultIndex.get().search(
        args.get("query", ""), k=min(int(args.get("k", 8)), 20), type_filter=args.get("type"))
    lines = [f"# Ranked vault search: '{args.get('query', '')}' ({len(hits)} hits)"]
    for h in hits:
        lines.append(f"- [{h['score']}] {h['path']}" + (f" — {h['snippet']}" if h["snippet"] else ""))
    lines.append("\nPointers only — cite through the note to (DocID, page) or an Approved ASM.")
    return clamp("\n".join(lines))


# ---------------------------------------------------------------- protocol

def handle(msg):
    method = msg.get("method")
    mid = msg.get("id")

    if method == "initialize":
        return {"jsonrpc": "2.0", "id": mid, "result": {
            "protocolVersion": PROTOCOL_VERSION,
            "capabilities": {"tools": {}},
            "serverInfo": SERVER_INFO,
        }}
    if method in ("notifications/initialized", "notifications/cancelled"):
        return None
    if method == "ping":
        return {"jsonrpc": "2.0", "id": mid, "result": {}}
    if method == "tools/list":
        return {"jsonrpc": "2.0", "id": mid, "result": {"tools": [
            {"name": name, "description": t["description"], "inputSchema": t["schema"]}
            for name, t in TOOLS.items()
        ]}}
    if method == "tools/call":
        params = msg.get("params", {})
        name = params.get("name")
        tool = TOOLS.get(name)
        if not tool:
            return {"jsonrpc": "2.0", "id": mid, "result": {
                "content": [{"type": "text", "text": f"Unknown tool '{name}'. Tools: {', '.join(TOOLS)}"}],
                "isError": True}}
        try:
            text = tool["fn"](params.get("arguments") or {})
            return {"jsonrpc": "2.0", "id": mid, "result": {
                "content": [{"type": "text", "text": text}], "isError": False}}
        except Exception as e:  # tool errors are results, not protocol errors
            return {"jsonrpc": "2.0", "id": mid, "result": {
                "content": [{"type": "text", "text": f"Tool error: {e}"}], "isError": True}}
    if mid is not None:
        return {"jsonrpc": "2.0", "id": mid, "error": {"code": -32601, "message": f"Method not found: {method}"}}
    return None


def main():
    for raw in sys.stdin:
        raw = raw.strip()
        if not raw:
            continue
        try:
            msg = json.loads(raw)
        except json.JSONDecodeError:
            continue
        resp = handle(msg)
        if resp is not None:
            sys.stdout.write(json.dumps(resp) + "\n")
            sys.stdout.flush()


def selftest():
    ok = True
    for name, t in TOOLS.items():
        args = {"id": "DEC-009"} if "id" in t["schema"].get("required", []) else (
            {"query": "talabat pro"} if "query" in t["schema"].get("required", []) else {})
        try:
            out = t["fn"](args)
            print(f"[PASS] {name}: {len(out)} chars — {out.splitlines()[0][:90]}")
        except Exception as e:
            ok = False
            print(f"[FAIL] {name}: {e}")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    if "--selftest" in sys.argv:
        selftest()
    else:
        main()
