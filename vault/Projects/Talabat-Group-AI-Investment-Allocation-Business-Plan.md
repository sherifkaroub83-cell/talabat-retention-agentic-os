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

🟢 **All 14 sections drafted; independent Pass 2 review complete for all 14, and independent Pass 3
re-verification now complete for the 7 sections Pass 2 had to fix (updated 2026-07-24).** All 14 sections
exist under `vault/Projects/Business_Plan_Drafts_v2/`. **8 sections are ✅ Done (independently
verified)**: 1 (0 defects), 2 (1 minor fix), 3 (1 minor fix), 6 (0 defects), 9 (Pass 2 found and fixed 1
unit-mixing defect; Pass 3 independently reconfirmed the fix and found 0 new defects), 10 (0 defects), 11
(0 defects), 13 (1 minor fix). **6
sections are 🟡 Fixed, re-verification pending** (not marked Done until a further independent pass
re-clears them, per this project's two/three-pass discipline): 4 (Pass 2's 2 hard + 2 moderate findings
fixed; Pass 3 found 1 new hard failure — EBITDA figure mis-cited to the wrong document/node — fixed), 5
(Pass 2's 3 defects fixed; Pass 3 found 1 new hard failure — a DEC-009 mischaracterization — fixed), 7
(Pass 2's 1 finding fixed and Pass 3 confirmed it correct; Pass 3 found 1 new moderate finding — a
cross-section citation and an unreconciled-figures claim — fixed), 8 (Pass 2's 1 finding fixed; Pass 3
found 1 new hard failure — the CQCA described as still active when the source discloses it was terminated
31 Dec 2024 — fixed), 12 (Pass 2's 2 defects fixed and Pass 3 confirmed them correct; Pass 3 found 1 new
hard failure — an uncited, contradicted "beyond ~USD55mn" claim — fixed), 14 (Pass 2's 3 inherited
defects fixed and Pass 3 confirmed them correct across all 60 traceability rows; Pass 3 found 1 new
stale cross-section claim about Section 9 — fixed with a dated addendum). **A cross-cutting pattern
worth naming: every one of these 6 sections had at least one genuine, previously-uncaught defect survive
Pass 2 and only surface at Pass 3** — most commonly a citation pointing to a real, plausible-sounding but
wrong node/document (Sections 4 and 5 independently share the identical `Topics/EBITDA.md`-instead-of-
`Topics/AI.md` mis-citation), plus one further DEC-009 mischaracterization (Section 5, distinct from the
7/12/14 "OPT-003 needs to pilot" pattern Pass 2 already caught) and one stale cross-section claim (Section
14 about Section 9). This is the strongest evidence yet in this project that each additional independent
pass earns its keep. **No whole-plan gate (Problem Consistency, Financial Integrity, Geographic Evidence,
whole-plan Citation Audit, Template Compliance) has run yet — this is the next task**, once the 6
Pass-3-fixed sections above are re-cleared by a Pass 4 (or folded directly into Stage 17's whole-plan
citation audit). The 14 section drafts under `vault/Projects/Business_Plan_Drafts/` (no `_v2` suffix)
reflect the old Egypt-retention problem and remain historical, not valid inputs to this tracker.

## 14-section checklist (GSB Template v2.0 — status against the new problem)

| # | Section | Status | Notes |
|---|---|---|---|
| 1 | Executive Summary (SCQA) | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_01...` — Pass 2 verdict PASS, 0 defects; specifically re-checked and confirmed it did not inherit any of the since-fixed defects from Sections 4, 5, 9, or 12 (all drafted/fixed after this section was first written); no DEC-008/DEC-009-restricted dollar figure leaks into the headline |
| 2 | Business Description | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_02...` — Pass 2 verdict PASS WITH MINOR FIXES; one stale ASM status reference fixed 2026-07-24 |
| 3 | Market Analysis | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_03...` — Pass 2 verdict PASS WITH MINOR FIXES; 1 new defect found (a non-GCC "18-21% of Group GMV" figure silently blended a FY2025 data point with a Q1 2026 data point), fixed 2026-07-24, cross-checked against `Facts/GMV_Facts.md`; the 2 issues Pass 1 self-reported as fixed (chained order-frequency figures, TAC/GMV arithmetic) were independently re-verified and confirmed to hold |
| 4 | Value Proposition | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_04...` — Pass 2 (FAIL, 2 hard + 2 moderate) fixed and Pass 3-reconfirmed; Pass 3 ([[Citation_Audit_Section_04_v2_Pass3]]) found 1 new hard failure (AI/personalisation EBITDA figure mis-cited to `Topics/EBITDA.md`/N-06 instead of `Topics/AI.md`/N-09) and 1 new moderate finding (pro-uplift range mis-cited to `Business_Relationships.md` Chain 4 instead of `Value_Driver_Tree_v2.md` N-15/N-20); both fixed 2026-07-24; awaiting Pass 4/Stage 17 re-confirmation |
| 5 | AI Technology and Development | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_05...` — Pass 2 (FAIL, 3 defects) fixed and Pass 3-reconfirmed; Pass 3 ([[Citation_Audit_Section_05_v2_Pass3]]) found 1 new hard failure (§5.6 mischaracterized `DEC-009` as governing the still-open cross-market allocation question, when `DEC-009` is resolved and covers a different question) and 1 new moderate finding (same `Topics/EBITDA.md`-vs-`Topics/AI.md` mis-citation as Section 4); both fixed 2026-07-24; awaiting Pass 4/Stage 17 re-confirmation |
| 6 | Business Model and Revenue Streams | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_06...` — Pass 2 verdict PASS, 0 defects; the Facts/Revenue.md TLB-019 p.13 reconciliation candidate was independently re-derived and confirmed correctly flagged, not force-reconciled |
| 7 | Marketing and Sales Strategy | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_07...` — Pass 2 (PASS WITH MINOR FIXES) fixed and Pass 3-reconfirmed correct (DEC-009/OPT-003 characterization independently re-checked against DEC-009's own text); Pass 3 ([[Citation_Audit_Section_07_v2_Pass3]]) found 1 new moderate finding (§7.6 pointed to the wrong Section 6 subsection and silently asserted "no contradiction" between two unreconciled same-tier disclosed figures), fixed 2026-07-24; awaiting Pass 4/Stage 17 re-confirmation |
| 8 | Operations Plan | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_08...` — Pass 2 (PASS WITH MINOR FIXES) fixed and Pass 3-reconfirmed; Pass 3 ([[Citation_Audit_Section_08_v2_Pass3]]) found 1 new hard failure (§8.1/§8.2 described the CQCA as still active, when TLB-026 p.156 discloses it was terminated effective 31 Dec 2024 and replaced by GLSA sub-licensing from 1 Jan 2025) and 1 new moderate finding (German-law citation missing GLSA's own p.153 clause); both fixed 2026-07-24; awaiting Pass 4/Stage 17 re-confirmation |
| 9 | Financial Plan | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_09...` — headline case resolved by [[DEC-008_section9-headline-bucket-split-presentation\|DEC-008]]: base case only; funding sequence per [[DEC-009_investment-options-ranking-and-allocation-priority\|DEC-009]]; Pass 2 (FAIL, pp-vs-% unit mixing) fixed 2026-07-24; Pass 3 ([[Citation_Audit_Section_09_v2_Pass3]]) independently recomputed all arithmetic from the raw Q1 2026 press release, reconfirmed DEC-008/DEC-009 compliance, and found 0 new defects — PASS |
| 10 | Risk Analysis | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_10...` — 17 risks with named owners, High×High quadrant: FIN-01 (margin step-down), MKT-01 (Food-leadership competitive pressure), ORG-01 (no disclosed stage-gate mechanism); Pass 2 verdict PASS, 0 defects, all 26 traceable claims independently re-verified 2026-07-24 |
| 11 | CSR & Responsible AI | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_11...` — ties every control to a named Section 10 risk (ORG-01/02/03), cites DEC-008/DEC-009 as real executed precedent for the no-false-precision control; Pass 2 verdict PASS, 0 defects — specifically confirmed it avoided the stale DEC-009 tiering trap found in Sections 7/12/14 |
| 12 | Implementation Plan (Three Horizons) | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_12...` — Pass 2 (FAIL, 2 defects) fixed and Pass 3-reconfirmed (DEC-009/OPT-003 sequencing independently re-checked against DEC-009's own text; OPT-002's date-label fix confirmed landed); Pass 3 ([[Citation_Audit_Section_12_v2_Pass3]]) found 1 new hard failure (an H2 bullet claimed Food-leadership spend "beyond the disclosed ~USD55mn" might be needed, contradicted by OPT-003's own allocation range, which stays within the bucket even at its upside case), fixed 2026-07-24 by reworking the bullet to match OPT-003's own range language; awaiting Pass 4/Stage 17 re-confirmation |
| 13 | Monitoring and Evaluation (KPIs) | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_13...` — sourced from `KPI_Tree_v2.md`'s 50 KPIs; Pass 2 verdict PASS WITH MINOR FIXES (missing Review Cadence section; imprecise KPI baseline periods; overbroad churn-scope claim), all fixed 2026-07-24 |
| 14 | Appendices + traceability note | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_14...` — traceability table (60 rows); DEC-009's allocation-range sensitivity exhibit built here with the mandatory disclosure sentence; Pass 2 (PASS WITH MINOR FIXES, 3 inherited defects) fixed and Pass 3-reconfirmed correct across all 60 rows; Pass 3 ([[Citation_Audit_Section_14_v2_Pass3]]) found 1 new stale cross-section claim (§13.3/§14.8 asserted Section 9 "still" describes `ASM-015`–`028` as `Proposed` and `DEC-009` as open — no longer true since Section 9's own Pass 2/3 fix), corrected 2026-07-24 with a dated addendum in both locations rather than a silent edit; awaiting Pass 4/Stage 17 re-confirmation |

**Legend:** ✅ Done (independently verified) · 🟡 Drafted, needs verification · ⬜ Not started

## Open decisions (needed before/while drafting)
- `DEC-008` (approved 2026-07-23) — Section 9 headline case is base-case-only. **Resolved.**
- `DEC-009` (approved 2026-07-23, middle path) — funding sequence stated narratively; allocation ranges
  never a headline exhibit. **Resolved.**
- `ASM-015`–`ASM-033` — all `Approved` as of 2026-07-23. **Resolved.**
- `OPT-001`–`005` exist in `vault/Decisions/Investment_Options_Register.md`. **Resolved.**
- **No open decisions currently block continued drafting.** All 14 sections have now been through
  independent Pass 2 review, and the 7 sections Pass 2 had to fix (4, 5, 7, 8, 9, 12, 14) have been
  through independent Pass 3 as well — Section 9 cleared with 0 new defects; the other 6 each had one
  further genuine defect that Pass 3 caught and this session fixed. Next actions: (1) run either a
  targeted Pass 4 on the 6 still-🟡 sections (4, 5, 7, 8, 12, 14) or fold their re-confirmation directly
  into Stage 17's whole-plan citation audit; (2) run the Part C whole-plan gates per
  `Business_Plan_Generation_Pipeline.md` Stages 14-19 (Problem Consistency, Financial Integrity,
  Geographic Evidence, whole-plan Citation Audit, Template Compliance) — this is what finally clears the
  6 remaining sections to ✅ Done; (3) resolve any issues the whole-plan gates find, repeating until all
  pass; (4) execute the Publication pipeline, verify the export toolchain, and produce the final DOCX/PDF
  plus the Formatting QA Report and Publication QA Report.

## Links
- [[Agentic_OS_Architecture]] · [[Business_Plan_Generation_Pipeline]] · [[Investment_Relationship_Map]] ·
  [[Value_Driver_Tree_v2]] · [[Scenarios_v2]] · [[KPI_Tree_v2]]
- `Problem_Charter.md` · `vault/Architecture/Repository_Impact_Assessment.md` ·
  `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md` — the superseded predecessor tracker
- [[MOC-Second-Brain]] · [[Talabat MOC]] · [[Project Administration]]
