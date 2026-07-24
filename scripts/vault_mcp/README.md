# vault-mcp — read-only MCP server for the Agentic OS

Exposes the vault's governed knowledge as Model Context Protocol tools, per
`DEC-011` (2026-07-24). Registered project-locally in the repo root `.mcp.json`;
Claude Code picks it up automatically when a session starts in this repository.

**Read-only by design.** Writes stay with the ordinary file tools under the
propose-then-approve conventions — this surface can never bypass pipeline gates.
Tool results are *pointers* to governed records, never a new evidence tier;
citation discipline is unchanged.

## Tools

| Tool | Args | Returns |
|---|---|---|
| `get_pipeline_status` | — | All 19 stage states parsed from the pipeline doc |
| `get_sections_status` | — | 14-section states from the active tracker |
| `lookup_decision` | `id` | A Decision Log record (e.g. `DEC-009`) |
| `lookup_assumption` | `id` | Assumptions Register row(s) (e.g. `ASM-029`) |
| `lookup_option` | `id` | An Investment Option record (e.g. `OPT-002`) |
| `search_facts` | `query`, `max_results?` | Matching notes in Facts/Topics/Strategic/Research |
| `get_kpi_tree` | — | Head of `KPI_Tree_v2.md` |
| `get_scenarios` | — | Head of `Scenarios_v2.md` |
| `get_allocation` | — | The $175m = $120m + $55m decomposition + governing decisions |

## Test

```bash
python3 scripts/vault_mcp/server.py --selftest        # every tool must PASS
# protocol-level smoke test:
printf '%s\n%s\n%s\n' \
  '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{}}' \
  '{"jsonrpc":"2.0","id":2,"method":"tools/list"}' \
  '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"lookup_decision","arguments":{"id":"DEC-011"}}}' \
  | python3 scripts/vault_mcp/server.py
```

Zero dependencies (Python 3.8+ stdlib). Transport: newline-delimited JSON-RPC 2.0
over stdio.
