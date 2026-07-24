---
id: DEC-011
status: approved
date: "2026-07-24"
owner: Sherif Samy Karoub (user) — direct instruction "proceed all" on the completeness-assessment plan
supersedes: none
---

# DEC-011 — Pursue the MCP (Agentic Tools) layer: build the read-only `vault-mcp` server

## Tooling note (read first)
Drafted directly by the top-level session during execution of the
[[Agentic_OS_Completeness_Assessment]] step plan. The open question — "MCP integration: pursue
distinction credit or skip?" — had been tracked in `PROJECT_PROGRESS.md`'s Blockers list since
Phase 2, past its original deadline. On 2026-07-24 the user instructed the session to "proceed all"
on the assessment's 9-step plan, whose Step 1 is exactly this decision; that instruction is the
human approval this record captures.

## Question
Should the Agentic OS add an MCP layer (a Model Context Protocol server exposing the vault's
governed knowledge as callable tools), or skip it and continue with built-in file tools only?

## Options considered
1. **Skip** — the OS demonstrably works without it (four pilots, zero failures); MCP adds a
   component to maintain.
2. **Pursue (chosen)** — a small **read-only** stdio server (`scripts/vault_mcp/`) exposing
   pipeline status, Decision/Assumption/Option lookups, Facts search, and Forecast-layer
   structures as tools.

## Decision
**Pursue — build `vault-mcp`, read-only, registered project-locally in `.mcp.json`.** Write
access stays with the ordinary file tools under the existing propose-then-approve conventions;
the MCP surface is deliberately query-only so it can never bypass the pipeline's gates.

## Rationale
- Closes the one structurally absent layer of the six-layer OS model (assessed 15% —
  [[Agentic_OS_Completeness_Assessment]]).
- Earns the capstone's **MCP distinction credit**, the original Phase 2 motivation.
- Gives the Agentic OS Console a future live-data path (the same queries that serve agents can
  regenerate the console's `data.js` snapshot), closing the console-staleness gap.
- Zero-dependency implementation (Python stdlib JSON-RPC over stdio) keeps the maintenance
  cost near nil and adds no supply-chain surface.

## Consequences
- `PROJECT_PROGRESS.md` Blockers: the MCP open question is resolved by this record.
- New standing component: `scripts/vault_mcp/server.py` + root `.mcp.json`; smoke-test
  procedure documented in `scripts/vault_mcp/README.md`.
- Tool results are evidence-neutral: a tool answer is a *pointer* to governed records, never a
  new evidence tier; citation discipline is unchanged.

## See also
[[Agentic_OS_Completeness_Assessment]] · [[Agentic_OS_Architecture_v2]] · `scripts/vault_mcp/`
