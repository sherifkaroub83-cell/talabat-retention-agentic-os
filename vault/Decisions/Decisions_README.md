---
type: layer-index
status: active
created: "2026-07-21"
updated: "2026-07-23"
---

# Decisions Layer

Implements the Decision Management Layer designed in
[[Decision_Management_Layer]].
Read that document for the full five-tier evidence model and schema definitions. This folder is the
operative repository:

- [[Assumptions_Register]] — every numeric/qualitative assumption in
  use anywhere downstream of the raw corpus, with tier, source, and confidence. All 14 pre-pivot
  rows marked `superseded` 2026-07-23; new rows start at `ASM-015`.
- [`Decision_Log/`](Decision_Log/) — one file per management judgment call (`DEC-001`, `DEC-002`, ...).
  All 7 pre-pivot entries marked `status: superseded` 2026-07-23 (content preserved).
- [[_TEMPLATE-decision]] — template for new Decision Log entries.
- **(Added 2026-07-23)** [`Investment_Options_Register.md`](Investment_Options_Register.md) and
  [`Investment_Options/`](Investment_Options/) — candidate capital-allocation choices (`OPT-XXX`),
  scored per `Decision_Management_Layer.md`'s comparison framework.
- **(Added 2026-07-23)** [`Investment_Portfolio_Register.md`](Investment_Portfolio_Register.md) —
  the envelope-level rollup (USD175mn = ~120mn Everyday App + ~55mn Food-leadership).
- **(Added 2026-07-23)** [`_TEMPLATE-investment-option.md`](_TEMPLATE-investment-option.md) —
  template for new `OPT-` records.

**Current status:** the Decision Log and Assumptions Register are empty of *active* content (all
pre-pivot entries superseded, none yet re-logged against the new capital-allocation problem) — new
decisions/assumptions get logged as Business Plan drafting proceeds (Phase 9's pilot run onward).
The Investment Options Register is scaffolded and empty by design (see its own "Current status"
section); the Investment Portfolio Register already holds the two disclosed envelope components
(Everyday App, Food-leadership) since those are facts, not decisions this OS makes.

**Owned by:** the Decision Steward Agent (`.claude/agents/decision-steward.md`), invoked by the
`bp-orchestrator` agent whenever a pipeline stage surfaces an open question the corpus cannot answer.

## See also
[[Agentic_OS_Architecture]] · [[Decision_Management_Layer]]
