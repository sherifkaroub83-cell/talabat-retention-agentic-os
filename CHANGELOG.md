# Changelog

All notable changes to the talabat Agentic OS. Format: keep-a-changelog-ish; dates are
Africa/Cairo project dates. Governing decisions in `vault/Decisions/Decision_Log/`.

## [0.3.0] — 2026-07-25 · Track B Milestone 1: Architecture Foundation + Tests + CI

Per `DEC-012` (approved, scoped Track B — incremental production-OS evolution, capstone first).

### Added
- **`scripts/aos/` — the AOS kernel v0.1**: execution graph + state manager + planner/scheduler
  (`pipeline.py`, state derived live from the governing documents), four registries
  (`registry.py`: agents, skills, MCP tools, model router), and a CLI
  (`python3 scripts/aos/cli.py status|plan|agents|skills|mcp|graph`).
- **`tests/` — 23 unit/protocol tests** (stdlib unittest, zero dependencies): vault-mcp tools +
  JSON-RPC protocol, aos registries + graph + planner gate-logic, freshness checks.
- **`.github/workflows/ci.yml`** — CI on every push: unit tests, vault-mcp selftest, kernel
  smoke, console data-layer parse, content freshness (mtime checks advisory in CI).
- `DEC-013` — procedural re-issuance of DEC-006; ASM-013 re-established.

### Changed
- Console v5: DEC-012/DEC-013 in the Decision Log view; snapshot 2026-07-25.

## [0.2.0] — 2026-07-24/25 · Completeness plan + Pass 2 verification waves

- `DEC-011` + **vault-mcp** read-only MCP server (9 tools) registered in `.mcp.json`.
- `LLM_Layer.md` policy + per-agent model routing; `publication-agent` + `deck-builder`,
  `os-structure-doc`, `console-data-refresh` skills; `check_freshness.py` memory automation.
- Pipeline Stage 5 (RES-005..007) and Stage 12 (per-option gates) completed.
- **Pass 2 independent verification wave 1**: Sections 2–5 verified, fixed (33 findings incl.
  systemic root causes), re-verified → ✅ Done (independently verified). Wave 2 (Sections 6–7)
  verdicts in; fix cycles running.
- Structural completeness ≈67% → ≈93% (`Agentic_OS_Completeness_Assessment.md`).

## [0.1.0] — 2026-07-24 · Agentic OS Console

- `app/agentic-os-console/`: dependency-free 9-view console (Command Center, OS Map, Pipeline,
  Sections, Gates, Agents, Evidence, Decisions, Forecasts) with command palette, orchestration
  map, activity replay, readiness ring, "Ask the OS" assistant; PWA (installable on
  Windows/Android/macOS/iOS/Linux) + Tauri 2 native scaffold; validated chart palette.
