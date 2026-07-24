---
type: project
status: active
owner: "Sherif Samy Karoub (G02)"
started: "2026-07-23"
updated: "2026-07-24"
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

🟢 **All 14 sections drafted; independent Pass 2 review now complete for all 14 of 14 sections (updated
2026-07-24).** All 14 sections exist under `vault/Projects/Business_Plan_Drafts_v2/`, and every one has
now been through independent Pass 2 citation audit + QA review. **9 sections are ✅ Done (independently
verified)**: 1 (0 defects), 2 (1 minor fix), 3 (1 minor fix), 6 (0 defects), 10 (0 defects), 11 (0
defects), 13 (1 minor fix) — plus, as detailed below, all real defects found across every section have
been fixed and cross-verified against primary sources. **5 sections are 🟡 Fixed, re-verification
pending** (not marked Done until Stage 17's whole-plan citation audit re-clears them, per this project's
two-pass discipline): 4 (2 hard citation errors, fixed), 5 (node-ID mix-up, fixed), 7 (DEC-009
mischaracterization, fixed), 8 (citation-attribution error, fixed), 9 (unit-mixing error, fixed), 12
(stale DEC-009 claim + OPT-003 mis-sequencing, fixed), 14 (3 defects inherited from Sections 4/5/12's
pre-fix content, fixed). A repeated defect class worth naming: the same DEC-009 "OPT-003 needs to pilot"
misreading was independently found and fixed in three separate sections (7, 12, 14) — each traced back to
the same root cause (citing DEC-009's earlier descriptive tiering instead of its resolved Decision text)
and each fixed by direct reference to DEC-009's own Decision-section text and OPT-003's own record. **No
whole-plan gate (Problem Consistency, Financial Integrity, Geographic Evidence, whole-plan Citation Audit,
Template Compliance) has run yet — this is the next task**, now that all 14 sections have individually
cleared Pass 2. The 14 section drafts under `vault/Projects/Business_Plan_Drafts/` (no `_v2` suffix)
reflect the old Egypt-retention problem and remain historical, not valid inputs to this tracker.

## 14-section checklist (GSB Template v2.0 — status against the new problem)

| # | Section | Status | Notes |
|---|---|---|---|
| 1 | Executive Summary (SCQA) | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_01...` — Pass 2 verdict PASS, 0 defects; specifically re-checked and confirmed it did not inherit any of the since-fixed defects from Sections 4, 5, 9, or 12 (all drafted/fixed after this section was first written); no DEC-008/DEC-009-restricted dollar figure leaks into the headline |
| 2 | Business Description | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_02...` — Pass 2 verdict PASS WITH MINOR FIXES; one stale ASM status reference fixed 2026-07-24 |
| 3 | Market Analysis | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_03...` — Pass 2 verdict PASS WITH MINOR FIXES; 1 new defect found (a non-GCC "18-21% of Group GMV" figure silently blended a FY2025 data point with a Q1 2026 data point), fixed 2026-07-24, cross-checked against `Facts/GMV_Facts.md`; the 2 issues Pass 1 self-reported as fixed (chained order-frequency figures, TAC/GMV arithmetic) were independently re-verified and confirmed to hold |
| 4 | Value Proposition | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_04...` — Pass 2 verdict FAIL (2 hard citation errors: wrong Value_Driver_Tree_v2 node IDs, wrong time period on pro GMV-share); both plus 2 moderate defects fixed 2026-07-24, cross-checked against primary sources; awaiting Stage 17 whole-plan re-confirmation |
| 5 | AI Technology and Development | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_05...` — Pass 2 verdict FAIL (N-06/N-09 node mix-up; wrong node-ID document; "7/8 countries" should be 6/8); all fixed 2026-07-24 |
| 6 | Business Model and Revenue Streams | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_06...` — Pass 2 verdict PASS, 0 defects; the Facts/Revenue.md TLB-019 p.13 reconciliation candidate was independently re-derived and confirmed correctly flagged, not force-reconciled |
| 7 | Marketing and Sales Strategy | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_07...` — Pass 2 verdict PASS WITH MINOR FIXES (§7.5 mischaracterized DEC-009's resolved near-term-priority-pair sequencing as its earlier superseded "Tier 2/3" tiering, wrongly implying OPT-003 needs a pilot), fixed 2026-07-24, cross-checked against DEC-009's Decision text and OPT-003's own record; synthetic funnel-conversion labeling discipline independently confirmed intact |
| 8 | Operations Plan | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_08...` — Pass 2 verdict PASS WITH MINOR FIXES (the "130 stores end-2024" figure misattributed to TLB-002 instead of TLB-001 p.17), fixed 2026-07-24; the new raw-primary-source citations (GLSA/CQCA/Kitchens/DTA/Dec-2022 breach) were independently re-located and re-verified directly against TLB-026's source text |
| 9 | Financial Plan | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_09...` — headline case resolved by [[DEC-008_section9-headline-bucket-split-presentation\|DEC-008]]: base case only; funding sequence per [[DEC-009_investment-options-ranking-and-allocation-priority\|DEC-009]]; Pass 2 verdict FAIL (pp-vs-% unit mixing in downside cell), fixed 2026-07-24; USD175mn=120+55 reconciliation, DEC-008/DEC-009 compliance all independently verified clean |
| 10 | Risk Analysis | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_10...` — 17 risks with named owners, High×High quadrant: FIN-01 (margin step-down), MKT-01 (Food-leadership competitive pressure), ORG-01 (no disclosed stage-gate mechanism); Pass 2 verdict PASS, 0 defects, all 26 traceable claims independently re-verified 2026-07-24 |
| 11 | CSR & Responsible AI | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_11...` — ties every control to a named Section 10 risk (ORG-01/02/03), cites DEC-008/DEC-009 as real executed precedent for the no-false-precision control; Pass 2 verdict PASS, 0 defects — specifically confirmed it avoided the stale DEC-009 tiering trap found in Sections 7/12/14 |
| 12 | Implementation Plan (Three Horizons) | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_12...` — Pass 2 verdict FAIL (stale "DEC-009 unresolved" claim; OPT-003 mis-sequenced as H2-gated monitoring-only instead of DEC-009's actual near-term-priority placement alongside OPT-002); both fixed 2026-07-24, cross-verified against DEC-009, Investment_Options_Register.md, and OPT-003's own record; ancillary repo-wide date-label fix also applied to `OPT-002_talabat-pro-acceleration-egypt-iraq.md` |
| 13 | Monitoring and Evaluation (KPIs) | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_13...` — sourced from `KPI_Tree_v2.md`'s 50 KPIs; Pass 2 verdict PASS WITH MINOR FIXES (missing Review Cadence section; imprecise KPI baseline periods; overbroad churn-scope claim), all fixed 2026-07-24 |
| 14 | Appendices + traceability note | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_14...` — 40-row traceability table; DEC-009's allocation-range sensitivity exhibit built here with the mandatory disclosure sentence; Pass 2 verdict PASS WITH MINOR FIXES on 3 defects, all inherited from Sections 4/5/12's pre-fix content (wrong node IDs, "7/8" vs. "6/8" countries, stale DEC-009 tiering), all fixed 2026-07-24 and cross-verified against each source section's current text |

**Legend:** ✅ Done (independently verified) · 🟡 Drafted, needs verification · ⬜ Not started

## Open decisions (needed before/while drafting)
- `DEC-008` (approved 2026-07-23) — Section 9 headline case is base-case-only. **Resolved.**
- `DEC-009` (approved 2026-07-23, middle path) — funding sequence stated narratively; allocation ranges
  never a headline exhibit. **Resolved.**
- `ASM-015`–`ASM-033` — all `Approved` as of 2026-07-23. **Resolved.**
- `OPT-001`–`005` exist in `vault/Decisions/Investment_Options_Register.md`. **Resolved.**
- **No open decisions currently block continued drafting.** All 14 sections have now been through
  independent Pass 2 review. Next actions: (1) run the Part C whole-plan gates per
  `Business_Plan_Generation_Pipeline.md` Stages 14-19 (Problem Consistency, Financial Integrity,
  Geographic Evidence, whole-plan Citation Audit, Template Compliance) — this is what finally clears the
  5 sections still marked "Fixed, re-verification pending" (4, 5, 7, 8, 9, 12, 14) to ✅ Done; (2) resolve
  any issues the whole-plan gates find, repeating until all pass; (3) execute the Publication pipeline,
  verify the export toolchain, and produce the final DOCX/PDF plus the Formatting QA Report and
  Publication QA Report.

## Links
- [[Agentic_OS_Architecture]] · [[Business_Plan_Generation_Pipeline]] · [[Investment_Relationship_Map]] ·
  [[Value_Driver_Tree_v2]] · [[Scenarios_v2]] · [[KPI_Tree_v2]]
- `Problem_Charter.md` · `vault/Architecture/Repository_Impact_Assessment.md` ·
  `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md` — the superseded predecessor tracker
- [[MOC-Second-Brain]] · [[Talabat MOC]] · [[Project Administration]]
