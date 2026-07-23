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

**Populated — 5 candidate options, 2026-07-23.** Per Phase 9 of the pivot roadmap (the limited
Section 2/4/5/9/12/13 pilot) and Stages 3/10/11 of `Business_Plan_Generation_Pipeline.md` Part A,
`decision-steward` has drawn five genuinely evidence-grounded candidate options from the Phase 3
Topic Notes and Phase 5 Forecasting layer (`Investment_Relationship_Map.md`, `Value_Driver_Tree_v2.md`,
`Scenarios_v2.md`) — not invented from nothing. Each is scored against the 11-criterion framework and
compared in `DEC-009` (status: `proposed`, pending user/team confirmation on funding sequence and
headline-presentation questions). Every option's cost range is this OS's own proposed judgment
(`ASM-029`–`ASM-033`, Decision tier, Low confidence, `Proposed` status), never a disclosed
initiative-level figure — see each `OPT-` record's own "Cost" section.

The two disclosed top-level buckets themselves (Everyday App ~USD120mn, Food-leadership ~USD55mn)
remain structural entries in `Investment_Portfolio_Register.md`'s "Disclosed components" table, not
`OPT-` records — talabat has already allocated between them. The five options below are candidates
for allocation *within* and *across markets inside* each bucket, plus two cross-cutting Enabling-
capability candidates that do not map cleanly to either bucket alone.

## Register

| Option ID | Name | Category | Geography | Status | Confidence | Owner | Review date |
|---|---|---|---|---|---|---|---|
| OPT-001 | Continue/moderately accelerate talabat mart dark-store densification | Everyday App | Group | candidate | Medium | decision-steward | Q3 2026 |
| OPT-002 | Accelerate talabat pro adoption in Egypt and Iraq | Everyday App | inferred-applicability (Group/GCC → Egypt, Iraq) | candidate | Low | decision-steward | 2 quarters post-pilot |
| OPT-003 | Target Food-leadership CVP/partner-retention investment at UAE, Kuwait, Qatar | Food-leadership | country-specific/market-comparison (UAE, Kuwait, Qatar) | candidate | Medium | decision-steward | Q4 2026 |
| OPT-004 | Close the advertising monetization gap vs. the UAE benchmark | Enabling capability | Group (benchmark itself country-specific, UAE) | candidate | Medium | decision-steward | Q1 2027 |
| OPT-005 | Scale the AI/personalisation embedded capability | Enabling capability | Group (inferred-applicability caveat, non-GCC/Egypt) | candidate | Medium | decision-steward | Q1 2027 |

**Ranking and comparison:** see [[DEC-009_investment-options-ranking-and-allocation-priority|DEC-009]]
for the full 11-criterion High/Medium/Low comparison table and written tiering — status `proposed`,
not yet approved; the funding-sequence and headline-presentation questions require real user/
team confirmation before this register's ranking can be cited as settled.

## See also
- `vault/Architecture/Decision_Management_Layer.md` — schema and scoring framework
- `vault/Decisions/Investment_Portfolio_Register.md` — envelope-level rollup
- `vault/Decisions/_TEMPLATE-investment-option.md` — template for new `OPT-` records
- `vault/Decisions/Decision_Log/` — where comparisons between options get resolved
