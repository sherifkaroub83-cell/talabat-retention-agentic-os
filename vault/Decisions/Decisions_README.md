---
type: layer-index
status: active
created: "2026-07-21"
---

# Decisions Layer

Implements the Decision Management Layer designed in
[[Decision_Management_Layer]].
Read that document for the full five-tier evidence model and schema definitions. This folder is the
operative repository:

- [[Assumptions_Register]] — every numeric/qualitative assumption in
  use anywhere downstream of the raw corpus, with tier, source, and confidence.
- [`Decision_Log/`](Decision_Log/) — one file per management judgment call (`DEC-001`, `DEC-002`, ...).
- [[_TEMPLATE-decision]] — template for new Decision Log entries.

**Current status:** layer scaffolded, empty. No decisions have been logged and no assumptions have
been registered yet — this happens as Business Plan drafting proceeds (Phase 7+ per
`vault/Architecture/Implementation_Roadmap.md`), not during this architecture-design phase.

**Owned by:** the Decision Steward Agent (`.claude/agents/decision-steward.md`), invoked by the
`bp-orchestrator` agent whenever a pipeline stage surfaces an open question the corpus cannot answer.

## See also
[[Agentic_OS_Architecture]] · [[Decision_Management_Layer]]
