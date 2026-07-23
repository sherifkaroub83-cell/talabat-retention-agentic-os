---
type: project
status: active
owner: "Sherif Samy Karoub (G02)"
started: "2026-07-23"
updated: "2026-07-23"
predecessor: "vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md (superseded 2026-07-23)"
---

# Project — talabat AI-Enabled Investment Allocation Business Plan

The G02 capstone deliverable, post-pivot: a 15–25 page **AI Business Plan** recommending how talabat
should allocate its 2026 USD175mn investment programme across Everyday App (~USD120mn) and
Food-leadership (~USD55mn) initiatives, Group-wide across its 8 operating markets (Egypt as a worked
example, not the sole scope), written to the same GSB 14-section template v2.0 (McKinsey Edition),
grounded claim-by-claim in `vault/Knowledge/`. See `Problem_Charter.md` for the full problem statement
(**status: proposed, pending instructor re-approval**) and
`vault/Architecture/Repository_Impact_Assessment.md` for why this tracker replaces
`vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md`, which is preserved, not deleted, as the
historical record that the pipeline mechanics work end to end (all 14 of its sections reached ✅ Done
against the old problem).

## Source of method (unchanged by the pivot)
- **Specification:** [`AI_Business_Plan_Template.md`](../../AI_Business_Plan_Template.md) — the same
  graded 14-section template, immutable by this pivot
- **Drafting procedure:** `.claude/skills/business-plan-drafting/SKILL.md` — remapped 2026-07-23 for
  the new problem's evidence base; the 14-section structure itself is unchanged
- **Architecture:** [[Agentic_OS_Architecture]] — 8 agents (no 9th added; see
  `vault/Architecture/Repository_Impact_Assessment.md` §9), skills, and the Decision/Research/Forecast
  layers, now extended with the Investment Option/Portfolio structures
  (`vault/Decisions/Investment_Options_Register.md`, `vault/Decisions/Investment_Portfolio_Register.md`)
  and the Geographic Evidence Rules (`vault/Architecture/Geographic_Evidence_Rules.md`)
- **Process:** `vault/Architecture/Business_Plan_Generation_Pipeline.md`, redesigned 2026-07-23 into
  19 stages (Phase 7 of the pivot) — Part A plan-level setup, Part B the original per-section
  11-sub-stage loop, Part C whole-plan Problem Consistency / Financial Integrity / Geographic
  Evidence gates

## New foundational artifacts this tracker's drafting will draw on
- `vault/Knowledge/Investment_Relationship_Map.md` — the Investment → capability → behaviour → GMV →
  revenue → gross profit → EBITDA → cash-flow chain
- `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`,
  `vault/Forecasts/KPI_Tree_v2.md` — the rebuilt forecasting/KPI layer
- `vault/Decisions/Investment_Portfolio_Register.md`, `vault/Decisions/Investment_Options_Register.md`
- 13 new Topic Notes under `vault/Knowledge/Topics/` (Everyday App, 2026 Investment Programme, Food
  Leadership, Multi-Verticality, Grocery and Retail, Customer Economics, FinTech, GCC vs non-GCC,
  EBITDA, Cash Generation, Capital Allocation and Investment Governance, plus the pre-existing
  Customer Lifetime Value)
- `ASM-015`–`ASM-028` in `vault/Decisions/Assumptions_Register.md` (all `Proposed`, pending approval
  before citation) and `DEC-008` (approved 2026-07-23 — Section 9's headline case is base-case-only,
  the Everyday App/Food-leadership split argued narratively, not as a quantified sub-case)

## Status

🟡 **Architecture pivot in progress (Phases 1–7 of 9 complete as of 2026-07-23)** — see
`vault/Architecture/Repository_Impact_Assessment.md` for the full phase plan. **No Business Plan
drafting has occurred yet against this new problem** — the 14 section drafts under
`vault/Projects/Business_Plan_Drafts/` still reflect the old Egypt-retention problem and are not valid
inputs to this tracker (they are historical, not superseded-and-updated). Per the pivot's own
instructions, drafting will not resume broadly — it will first run a **limited pilot** on Sections 2,
4, 5, 9, 12, and 13 only (Phase 9 of the pivot roadmap), to validate problem framing, evidence
discipline, allocation logic, and template structure before any full-plan redraft.

## 14-section checklist (GSB Template v2.0 — status against the new problem)

| # | Section | Status | Notes |
|---|---|---|---|
| 1 | Executive Summary (SCQA) | ⬜ Not started | Gated on all other 13 per template convention |
| 2 | Business Description | ⬜ Not started | Pilot section (Phase 9 of pivot roadmap) |
| 3 | Market Analysis | ⬜ Not started | |
| 4 | Value Proposition | ⬜ Not started | Pilot section |
| 5 | AI Technology and Development | ⬜ Not started | Pilot section |
| 6 | Business Model and Revenue Streams | ⬜ Not started | |
| 7 | Marketing and Sales Strategy | ⬜ Not started | |
| 8 | Operations Plan | ⬜ Not started | |
| 9 | Financial Plan | ⬜ Not started | Pilot section — headline case resolved by [[DEC-008_section9-headline-bucket-split-presentation\|DEC-008]]: base case only |
| 10 | Risk Analysis | ⬜ Not started | |
| 11 | CSR & Responsible AI | ⬜ Not started | Must incorporate the Responsible-AI principle that capital-allocation recommendations require human approval, never presented as an automatic management decision |
| 12 | Implementation Plan (Three Horizons) | ⬜ Not started | Pilot section |
| 13 | Monitoring and Evaluation (KPIs) | ⬜ Not started | Pilot section — sourced from `KPI_Tree_v2.md`'s 50 KPIs |
| 14 | Appendices + traceability note | ⬜ Not started | |

**Legend:** ✅ Done (independently verified) · 🟡 Drafted, needs verification · ⬜ Not started

## Open decisions (needed before/while drafting)
- `DEC-008` (approved 2026-07-23) — Section 9 headline case is base-case-only.
- `ASM-015`–`ASM-028` remain `Proposed` — need an approval pass (instructor/team or documented
  OS-owner data-resolution, per `Decision_Management_Layer.md`) before any section cites them.
- No `OPT-` Investment Options exist yet in `vault/Decisions/Investment_Options_Register.md` — these
  need to be proposed during drafting (Sections 9/12), not invented in advance.
- Whether the Business Plan's headline recommendation should present a specific allocation split
  within each bucket, or stay at the bucket level with market-level ranges — an open framing question
  for Section 9/12 drafting, not yet decided.

## Links
- [[Agentic_OS_Architecture]] · [[Business_Plan_Generation_Pipeline]] · [[Investment_Relationship_Map]] ·
  [[Value_Driver_Tree_v2]] · [[Scenarios_v2]] · [[KPI_Tree_v2]]
- `Problem_Charter.md` · `vault/Architecture/Repository_Impact_Assessment.md` ·
  `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md` — the superseded predecessor tracker
- [[MOC-Second-Brain]] · [[Talabat MOC]] · [[Project Administration]]
