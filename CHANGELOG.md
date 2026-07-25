# Changelog

All notable changes to the talabat Agentic OS. Format: keep-a-changelog-ish; dates are
Africa/Cairo project dates. Governing decisions in `vault/Decisions/Decision_Log/`.

## [0.6.0] — 2026-07-25 · Track B Milestone 4: Workflow-first console (phase 1)

### Added
- **Workflow view** (`#/workflow`): the Goal → Planning → Execution → Validation → Review →
  Approval → Publish rail rendered from live kernel state — per-stage panels (Execution =
  real planner queue with owners + wave budget; Validation = per-section citation/QA verdict
  board incl. re-verify marks; Approval = human-decision queue; Publish = deliverable
  blockers), event-log Execution timeline, and a docked **Inspector** panel (≥1100px; slide-over
  below; `I` toggles, `1–7` jump stages).
- **`scripts/aos/export_console.py`** — the kernel→console bridge: generates
  `src/js/kernel.js` (workflow state, plan, validation verdicts, events, metrics) from the
  governing documents; never hand-edited.
- `tests/test_export_console.py` — suite now 44; sw cache v7 (kernel.js precached).

## [0.5.0] — 2026-07-25 · Track B Milestone 3: Event bus + validation harness (per AOS_Design_Specification_v1, approved)

### Added
- **`scripts/aos/events.py`** — the event bus: append-only `vault/_state/events.jsonl`
  (episodic-memory substrate powering replay, metrics, agent health, console timeline);
  typed events, corrupt-line-tolerant reader, per-actor/type stats; `AOS_EVENTS_PATH`
  override for tests/CI.
- **`scripts/aos/validate.py`** — `aos validate`: one-command verdict (unit tests + MCP
  selftest + freshness + pipeline state; freshness mtime findings WARN unless AOS_STRICT=1);
  emits a validation event.
- **`scripts/aos/config.py`** — kernel wave budget (MAX_CONCURRENT_AGENTS=4, the 2026-07-24/25
  session-limit lesson encoded).
- CLI: `--json` on every verb (the console bridge contract) + `events`, `emit`, `metrics`,
  `validate` verbs; SIGPIPE fix.
- vault-mcp tools #11–12: `get_events`, `get_validation_status` (per-section Pass 2 state
  derived from Validation artifacts).
- Tests: event bus + **subprocess-level MCP integration test** (real stdio round-trip) —
  suite now 40, all green; CI runs `aos validate` as its final gate.
- `Facts/Revenue.md` TLB-029 denominator qualifier (DEC-014's follow-up flag closed).

## [0.4.0] — 2026-07-25 · Track B Milestone 2: Memory layer (Phase 2)

### Added
- **`scripts/aos/memory.py`** — the memory layer: BM25-ranked hybrid retrieval over the whole
  vault (frontmatter-type and path filters, citation-bearing snippets), the live wikilink
  knowledge graph (neighbors, 2-hop related, orphan detection), and the context manager
  (`context(topic)` → bounded pointer set: ranked notes + graph neighborhood + governing
  decisions). Zero dependencies; results are pointers into the governed tiers, never a new
  evidence tier.
- CLI verbs: `search`, `related`, `context`, `orphans`.
- vault-mcp tool #10: `search_ranked` — ranked retrieval exposed to every agent/session.
- `tests/test_memory.py` — retrieval ranking/filters, graph, context boundedness (suite now
  34 tests).

### Changed
- Console v6: Sections 6–7 verified (6/14), DEC-014 in the Decision Log, activity events.

### Capstone track (parallel)
- Sections 6 and 7 → ✅ Done (independently verified) after full Pass 2 → fix → re-verify
  cycles; `DEC-013` (container re-issuance) and `DEC-014` (TLB-019 fee-mix label-shift proven
  by 16-value arithmetic reconstruction, Facts layer corrected at root); ASM-016/024
  register bookkeeping. Pass 2 for Sections 8–14/1 paused by the user mid-batch-2.

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
