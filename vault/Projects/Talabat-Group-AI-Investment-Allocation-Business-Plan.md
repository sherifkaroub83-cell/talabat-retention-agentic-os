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

🟡 **All 14 sections drafted; independent Pass 2 review complete for all 14; Pass 3 complete for the 7
sections Pass 2 had to fix; Stage 17 whole-plan citation audit now complete across all 14 sections,
including a follow-up pass on Section 13 after a repository incident (updated 2026-07-25).** All 14
sections exist under `vault/Projects/Business_Plan_Drafts_v2/`. **Stage 17 incident:** the first audit
round found `Section_13_Monitoring_and_Evaluation.md` genuinely missing from the repository — a real
deletion accidentally committed in the prior session, not just the recurring iCloud working-tree artifact
— restored from the last good commit, then given its own dedicated follow-up Stage 17 pass once stable;
that pass also surfaced a cross-section propagation gap (see Section 13's row below) and a recurring
iCloud sync artifact that repeatedly renamed the restored file (4 occurrences total this session — a live
environmental issue, not a content defect; flagged for the user's attention). **Stage 17 found 9 hard
failures in total** across both rounds (Sections 1 ×3, 3, 4 ×2, 8, 14 ×2), all now fixed 2026-07-25, plus
propagated a recurring `Topics/EBITDA.md`→`Topics/AI.md` mis-citation to every instance found (4
occurrences across Sections 3 and 14, beyond the 2 already fixed in Sections 4/5 during Pass 3). **None of
Stage 17's fixes has yet been independently re-verified** — per this project's two/three-pass discipline,
this is the next required step before Stage 18/19 can run. Current per-section status: **5 sections ✅
Done (independently verified)**: 2 (1 minor fix; Stage 17 found 1 open moderate framing note), 6 (0 hard
defects; 1 open moderate self-check wording issue), 9 (Pass 2+Pass 3, 0 defects; Stage 17 also 0 defects),
10 (0 defects, Stage 17 also 0 defects), 11 (0 defects, Stage 17 also 0 defects). **9 sections are 🟡
Fixed, re-verification pending**: 1 (Stage 17 found 3 hard failures across two rounds — a wrong-section
GMV citation, a mis-attributed EBITDA-margin comparator, and a stale churn-scope claim inconsistent with
Section 13's own corrected text — all fixed), 3 (Stage 17 found 1 hard failure — the recurring
`Topics/EBITDA.md` mis-citation — plus 1 moderate, both fixed), 4 (Pass 3 fixed; Stage 17 found 2 further
hard failures — an uncited pro GMV-share claim and an uncited, range-vs-point EBITDA-margin conflict with
Section 3 — fixed), 5 (Pass 3 fixed; Stage 17 found 0 new defects), 7 (Pass 3 fixed; Stage 17 found 0 hard
failures), 8 (Pass 3 fixed; Stage 17 found 1 hard failure — a false "established in Section 5.4"
cross-reference — fixed), 12 (Pass 3 fixed; Stage 17 found 0 hard failures, 1 open documentation-sync
note), 13 (Stage 17's own dedicated pass found the file's content citation-clean, but found its
churn-scope fix had never propagated to Sections 1/14 — fixed there, not here — plus the recurring
file-naming sync issue, also fixed), 14 (Pass 3 fixed; Stage 17 found 2 hard failures across two rounds —
the recurring EBITDA mis-citation stale in the traceability table, fixed across 3 instances, and the same
stale churn-scope claim found via Section 13's pass — both fixed). **Two cross-cutting patterns worth
naming:** (1) the `Topics/EBITDA.md`-vs-`Topics/AI.md` mis-citation recurred independently four separate
times (Sections 4 and 5 fixed it in Pass 3; Stage 17 then found it freshly alive in Section 3 and
stale/unpropagated in Section 14's traceability table) — one root cause, now fixed everywhere in a single
coordinated pass; (2) Section 13's own within-section fixes (Pass 2) didn't automatically propagate to
the two other sections restating the same facts (Sections 1 and 14) — a second concrete instance of the
class of defect Session 10 first found (Section 14 making a stale claim about Section 9). **No whole-plan
gate (Problem Consistency, Financial Integrity, Geographic Evidence, Template Compliance) has run yet —
next actions:** (1) run a fresh independent pass to re-confirm all of Stage 17's fixes across Sections 1,
3, 4, 8, 13, 14; (2) then proceed to Stages 14-16 and 18-19. The 14 section drafts under
`vault/Projects/Business_Plan_Drafts/` (no
`_v2` suffix) reflect the old Egypt-retention problem and remain historical, not valid inputs to this
tracker.

## 14-section checklist (GSB Template v2.0 — status against the new problem)

| # | Section | Status | Notes |
|---|---|---|---|
| 1 | Executive Summary (SCQA) | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_01...` — Pass 2 verdict PASS, 0 defects. Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections01-02]], 2026-07-25) found 2 hard failures: a USD9.5bn FY2025 GMV figure mis-attributed to `Section_02...§2.1` (which actually states a different figure/year), and a "6.0% Q4 2025" comparator mis-attributed to `Problem_Charter.md`/Section 10 instead of Sections 9/3; both fixed 2026-07-25; awaiting re-confirmation |
| 2 | Business Description | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_02...` — Pass 2 verdict PASS WITH MINOR FIXES; one stale ASM status reference fixed 2026-07-24. Stage 17 audit found 1 open moderate note (EBITDA-margin guidance framed as a single point "6.0%→4.6%" where most other sections use the disclosed range "4.4-4.8%" — not miscited, just an inconsistent framing, left open) |
| 3 | Market Analysis | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_03...` — Pass 2 verdict PASS WITH MINOR FIXES, fixed 2026-07-24. Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections03-04]], 2026-07-25) found 1 hard failure (AI/personalisation EBITDA figure mis-cited to `Topics/EBITDA.md` instead of `Topics/AI.md` — part of a 4-instance recurring pattern across the plan) and 1 moderate finding (pro-uplift figure mis-cited to the wrong Topic notes); both fixed 2026-07-25; awaiting re-confirmation |
| 4 | Value Proposition | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_04...` — Pass 2 (FAIL, 2 hard + 2 moderate) and Pass 3 (1 hard + 1 moderate) findings fixed and reconfirmed. Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections03-04]], 2026-07-25) found 2 further hard failures: the pro GMV-share claim (32%→49%) carried no citation at all, and the FY2026 EBITDA margin was stated as an uncited single point ("6.0%→4.6%") conflicting with Section 3's correctly-cited disclosed range ("4.4-4.8%"); both fixed 2026-07-25; awaiting re-confirmation |
| 5 | AI Technology and Development | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_05...` — Pass 2 (3 defects) and Pass 3 (1 hard + 1 moderate) findings fixed and reconfirmed. Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections05-06]], 2026-07-25) found 0 new defects — both Pass 3 fixes held under fresh re-verification; one self-resolving stale note (§5.5's "all 14 sections" count) tied to the Section 13 file incident, not a defect in Section 5's own reasoning; awaiting Pass 4/Stage 17 re-confirmation of the Pass 3 fixes |
| 6 | Business Model and Revenue Streams | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_06...` — Pass 2 verdict PASS, 0 defects; the Facts/Revenue.md TLB-019 p.13 reconciliation candidate was independently re-derived and confirmed correctly flagged, not force-reconciled. Stage 17 audit found 1 open moderate note (§6.6's self-check overclaims that all 5 revenue streams trace to Stage 9/10 nodes — only 2 of 5 actually do; a wording defect, not a sourcing defect) |
| 7 | Marketing and Sales Strategy | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_07...` — Pass 2 and Pass 3 findings fixed and reconfirmed (DEC-009/OPT-003 characterization independently re-checked against DEC-009's own text). Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections07-08]], 2026-07-25) found 0 hard failures — PASS; awaiting Pass 4/Stage 17 re-confirmation of the Pass 3 fixes |
| 8 | Operations Plan | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_08...` — Pass 2 and Pass 3 findings fixed and reconfirmed. Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections07-08]], 2026-07-25) found 1 further hard failure: §8.1/§8.6 falsely claimed the 235TB/day figure was "already established in Section 5.4," when Section 5 §5.4 explicitly says infrastructure isn't itemized; fixed 2026-07-25 (figure remains correctly, independently cited to TLB-002 p.15); awaiting re-confirmation |
| 9 | Financial Plan | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_09...` — headline case resolved by [[DEC-008_section9-headline-bucket-split-presentation\|DEC-008]]: base case only; funding sequence per [[DEC-009_investment-options-ranking-and-allocation-priority\|DEC-009]]; Pass 2 (FAIL, pp-vs-% unit mixing) fixed 2026-07-24; Pass 3 independently recomputed all arithmetic and reconfirmed 0 defects. Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections09-10]], 2026-07-25) independently re-traced every claim from scratch and found 0 new defects — PASS |
| 10 | Risk Analysis | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_10...` — 17 risks with named owners, High×High quadrant: FIN-01 (margin step-down), MKT-01 (Food-leadership competitive pressure), ORG-01 (no disclosed stage-gate mechanism); Pass 2 verdict PASS, 0 defects, all 26 traceable claims independently re-verified 2026-07-24. Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections09-10]], 2026-07-25) found 0 new defects — PASS, and specifically confirmed no section besides the already-fixed Section 14 carries a stale claim about another section's status |
| 11 | CSR & Responsible AI | ✅ Done (independently verified) | `Business_Plan_Drafts_v2/Section_11...` — ties every control to a named Section 10 risk (ORG-01/02/03), cites DEC-008/DEC-009 as real executed precedent for the no-false-precision control; Pass 2 verdict PASS, 0 defects. Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections11-12]], 2026-07-25) found 0 defects — PASS, and independently corroborated that Sections 7/12/14 (not 11) were the ones that fell into the DEC-009-tiering trap |
| 12 | Implementation Plan (Three Horizons) | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_12...` — Pass 2 and Pass 3 findings fixed and reconfirmed (DEC-009/OPT-003 sequencing and OPT-002's date-label fix both independently re-checked). Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections11-12]], 2026-07-25) found 0 hard failures — PASS; 1 open documentation-sync note (in-body provenance text hasn't caught up with the YAML frontmatter, which is correct); awaiting Pass 4/Stage 17 re-confirmation of the Pass 3 fixes |
| 13 | Monitoring and Evaluation (KPIs) | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_13...` — sourced from `KPI_Tree_v2.md`'s 50 KPIs; Pass 2 verdict PASS WITH MINOR FIXES, fixed 2026-07-24, previously ✅ Done. **2026-07-25: found genuinely deleted from the repository** (a real commit, not the usual iCloud working-tree artifact) during the Stage 17 whole-plan audit; restored, then given its own dedicated Stage 17 pass ([[Citation_Audit_WholePlan_Stage17_Section13]]) once stable. Own text confirmed citation-clean, all 3 Pass 2 fixes genuinely present — but found its churn-scope fix had never propagated to Sections 1/14, which still carried the old, contradicting wording (fixed 2026-07-25 in those two sections). Also: the file itself was repeatedly renamed by a recurring iCloud sync artifact while being re-filed (4 occurrences total this session) — re-filed under its correct name; flagged as a live environmental issue, not a content defect. Awaiting re-confirmation |
| 14 | Appendices + traceability note | 🟡 Fixed, re-verification pending | `Business_Plan_Drafts_v2/Section_14...` — traceability table (60 rows); DEC-009's allocation-range sensitivity exhibit built here with the mandatory disclosure sentence; Pass 2 and Pass 3 findings fixed and reconfirmed across all 60 rows. Stage 17 whole-plan audit ([[Citation_Audit_WholePlan_Stage17_Sections13-14]], 2026-07-25) found 1 further hard failure — the traceability table's Section 4 EBITDA row (plus 2 further instances in the same file) still cited `Topics/EBITDA.md`, the exact citation Section 4's own Pass 3 fix retargeted inside Section 4 but which never propagated here — fixed 2026-07-25 across all 3 instances; 1 moderate churn-scope over-generalization left open; awaiting re-confirmation |

**Legend:** ✅ Done (independently verified) · 🟡 Drafted, needs verification · ⬜ Not started

## Open decisions (needed before/while drafting)
- `DEC-008` (approved 2026-07-23) — Section 9 headline case is base-case-only. **Resolved.**
- `DEC-009` (approved 2026-07-23, middle path) — funding sequence stated narratively; allocation ranges
  never a headline exhibit. **Resolved.**
- `ASM-015`–`ASM-033` — all `Approved` as of 2026-07-23. **Resolved.**
- `OPT-001`–`005` exist in `vault/Decisions/Investment_Options_Register.md`. **Resolved.**
- **No open decisions currently block continued drafting.** All 14 sections have been through independent
  Pass 2 review; the 7 sections Pass 2 had to fix went through Pass 3 as well; Stage 17 (the whole-plan
  citation audit, `Business_Plan_Generation_Pipeline.md`'s Part C) has now run across all 14 sections —
  found and fixed 7 hard failures (Sections 1, 3, 4×2, 8, 14; 1 of the 7 was a missing-file citation
  resolved by restoring Section 13's accidentally-deleted file), including propagating one recurring
  `Topics/EBITDA.md`→`Topics/AI.md` mis-citation to all 4 places it appeared across the plan. **Next
  actions:** (1) run Section 13's own Stage 17 audit — it couldn't be checked this round because its file
  was missing at the time; (2) run a fresh independent pass to re-confirm Stage 17's 6 in-draft fixes
  (Sections 1, 3, 4, 8, 14) actually hold; (3) run the remaining Part C whole-plan gates — Stages 14-16
  (Problem Consistency, Financial Integrity, Geographic Evidence) and Stage 18 (Template Compliance) —
  this is what finally clears every section to ✅ Done; (4) resolve any issues those gates find, repeating
  until all pass; (5) execute the Publication pipeline, verify the export toolchain, and produce the final
  DOCX/PDF plus the Formatting QA Report and Publication QA Report.

## Links
- [[Agentic_OS_Architecture]] · [[Business_Plan_Generation_Pipeline]] · [[Investment_Relationship_Map]] ·
  [[Value_Driver_Tree_v2]] · [[Scenarios_v2]] · [[KPI_Tree_v2]]
- `Problem_Charter.md` · `vault/Architecture/Repository_Impact_Assessment.md` ·
  `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md` — the superseded predecessor tracker
- [[MOC-Second-Brain]] · [[Talabat MOC]] · [[Project Administration]]
