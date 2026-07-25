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
(**status: Active — governing problem for the Agentic OS**) and
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
- `ASM-015`–`ASM-033` in `vault/Decisions/Assumptions_Register.md` (all `Approved` as of 2026-07-23),
  `DEC-008` (approved 2026-07-23 — Section 9's headline case is base-case-only, the Everyday App/
  Food-leadership split argued narratively, not as a quantified sub-case), `DEC-009` (approved
  2026-07-23, middle path — recommended funding sequence stated narratively; `OPT-001`–`005` allocation
  ranges shown only as a labeled sensitivity/appendix exhibit, never a headline financial commitment)

## Status

🟡 **Pivot architecture complete; Business Plan drafting partially underway (updated 2026-07-23,
Final Execution Readiness pass — this section had gone stale after the Phase 9 pilot actually ran and
was not previously updated to reflect it).** **6 of 14 sections are drafted** under
`vault/Projects/Business_Plan_Drafts_v2/` (Sections 2, 4, 5, 9, 12, 13 — the Phase 9 pilot), each
`status: Drafted — self-reviewed, not yet independently verified` in its own frontmatter; none has
passed independent Pass 2 QA or the Problem Consistency/Financial Integrity/Geographic Evidence gates
yet. The 14 section drafts under `vault/Projects/Business_Plan_Drafts/` (no `_v2` suffix) reflect the
old Egypt-retention problem and remain historical, not valid inputs to this tracker.

## 14-section checklist (GSB Template v2.0 — status against the new problem)

| # | Section | Status | Notes |
|---|---|---|---|
| 1 | Executive Summary (SCQA) | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_01...` — drafted last, gated on all 13 others; SCQA Answer spot-checked against Sections 2-14's actual content; no DEC-008/DEC-009-restricted dollar figure leaks into the headline; independent Pass 2 still required |
| 2 | Business Description | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_02...` — Pass 2 (2026-07-24): citation audit PASS (0 hard), QA FAIL (3 blocking) → fixed → independent re-verification PASS 2026-07-25 (`QA_Review_Section_02_v2_pass2_reverify.md`); non-blocking R1–R3 in backlog |
| 3 | Market Analysis | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_03...` — 2 real issues (chained order-frequency figures, TAC/GMV arithmetic) found and fixed self-review; independent Pass 2 still required |
| 4 | Value Proposition | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_04...` |
| 5 | AI Technology and Development | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_05...` |
| 6 | Business Model and Revenue Streams | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_06...` — flags a new Facts/Revenue.md reconciliation candidate (TLB-019 p.13 fee-mix range vs. TLB-011/advertising figures), not used, not force-reconciled; independent Pass 2 still required |
| 7 | Marketing and Sales Strategy | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_07...` — funnel-conversion figures explicitly labeled `[SYNTHETIC — illustrative estimate]`, not corpus-derived; independent Pass 2 still required |
| 8 | Operations Plan | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_08...` — fresh 7S synthesis; surfaced new primary-source citations (TLB-026 pp.46-49, 152-157: GLSA/CQCA/Kitchens agreements, Dec-2022 data-breach disclosure, DH inter-company DTA) not yet in any Topic Note, flagged for Pass 2 priority re-check; independent Pass 2 still required |
| 9 | Financial Plan | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_09...` — headline case resolved by [[DEC-008_section9-headline-bucket-split-presentation\|DEC-008]]: base case only; funding sequence per [[DEC-009_investment-options-ranking-and-allocation-priority\|DEC-009]] |
| 10 | Risk Analysis | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_10...` — 17 risks with named owners, High×High quadrant: FIN-01 (margin step-down), MKT-01 (Food-leadership competitive pressure), ORG-01 (no disclosed stage-gate mechanism); independent Pass 2 still required |
| 11 | CSR & Responsible AI | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_11...` — ties every control to a named Section 10 risk (ORG-01/02/03), cites DEC-008/DEC-009 as real executed precedent for the no-false-precision control; independent Pass 2 still required |
| 12 | Implementation Plan (Three Horizons) | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_12...` |
| 13 | Monitoring and Evaluation (KPIs) | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_13...` — sourced from `KPI_Tree_v2.md`'s 50 KPIs |
| 14 | Appendices + traceability note | 🟡 Drafted, needs verification | `Business_Plan_Drafts_v2/Section_14...` — 40-row traceability table; DEC-009's allocation-range sensitivity exhibit built here with the mandatory disclosure sentence; independent Pass 2 still required |

**Legend:** ✅ Done (independently verified) · 🟡 Drafted, needs verification · ⬜ Not started

## Open decisions (needed before/while drafting)
- `DEC-008` (approved 2026-07-23) — Section 9 headline case is base-case-only. **Resolved.**
- `DEC-009` (approved 2026-07-23, middle path) — funding sequence stated narratively; allocation ranges
  never a headline exhibit. **Resolved.**
- `ASM-015`–`ASM-033` — all `Approved` as of 2026-07-23. **Resolved.**
- `OPT-001`–`005` exist in `vault/Decisions/Investment_Options_Register.md`. **Resolved.**
- **No open decisions currently block continued drafting.** Next actions: (1) draft the 8 remaining
  sections (1, 3, 6, 7, 8, 10, 11, 14); (2) run independent Pass 2 citation audit + QA review (incl. the
  three new gates) on all 6 existing sections, none of which has passed it yet.

## Links
- [[Agentic_OS_Architecture]] · [[Business_Plan_Generation_Pipeline]] · [[Investment_Relationship_Map]] ·
  [[Value_Driver_Tree_v2]] · [[Scenarios_v2]] · [[KPI_Tree_v2]]
- `Problem_Charter.md` · `vault/Architecture/Repository_Impact_Assessment.md` ·
  `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md` — the superseded predecessor tracker
- [[MOC-Second-Brain]] · [[Talabat MOC]] · [[Project Administration]]
