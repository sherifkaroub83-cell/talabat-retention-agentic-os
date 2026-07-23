---
type: layer-index
status: active
created: "2026-07-23"
---

# Investment Options Register

Index of every `OPT-XXX` Investment Option record under `vault/Decisions/Investment_Options/`, per
the schema defined in `vault/Architecture/Decision_Management_Layer.md`'s "Investment Option"
section. Parallel structure to `Assumptions_Register.md` and `Decision_Log/` — an Investment
Option is a *candidate* capital-allocation choice; a `DEC-` record is what resolves a comparison
between two or more of them.

## Current status

**Scaffolded, empty of candidate options.** This is an architecture-phase deliverable (Phase 4 of
the 2026-07-23 pivot) — populating it with actual candidate initiatives (e.g. "accelerate talabat
pro adoption in a specific market" or "expand dark-store density in a specific market") is content
work that belongs to Business Plan drafting (Sections 9/12, Phase 9's pilot run), not architecture
design. Inventing candidate options now, before the Forecasting layer (Phase 5) and a real drafting
pass exist to evidence them, would risk exactly the false-precision and unlabeled-assumption
problems the pivot's standing instructions warn against.

What *is* already evidenced, and belongs here structurally rather than as an `OPT-` record, is the
two disclosed top-level buckets themselves — see `Investment_Portfolio_Register.md`'s "Disclosed
components" table. Those are not candidates to be scored against each other (talabat has already
allocated between them); the open decision this OS exists to support is allocation *within* and
*across markets inside* each bucket, which is where genuine `OPT-` candidates will be registered
once drafting begins.

## Register (populate as options are proposed)

| Option ID | Name | Category | Geography | Status | Confidence | Owner | Review date |
|---|---|---|---|---|---|---|---|
| *(none yet)* | | | | | | | |

## See also
- `vault/Architecture/Decision_Management_Layer.md` — schema and scoring framework
- `vault/Decisions/Investment_Portfolio_Register.md` — envelope-level rollup
- `vault/Decisions/_TEMPLATE-investment-option.md` — template for new `OPT-` records
- `vault/Decisions/Decision_Log/` — where comparisons between options get resolved
