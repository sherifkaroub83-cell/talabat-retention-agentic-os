---
type: validation
sections: 3-4
pipeline_stage: "17 (whole-plan citation audit)"
run_date: 2026-07-25
auditor: independent Stage 17 reviewer
status: FAIL — 3 hard failures found (1 in Section 3, 2 in/across Section 4), not yet cleared for Stage 18
---

# Citation Audit — Whole-Plan Stage 17, Sections 3 & 4

## Method
Fresh, independent thread with no memory of prior drafting or fixing sessions. For each numeric/named-fact
claim in `Section_03_Market_Analysis.md` and `Section_04_Value_Proposition.md`, opened the actually-cited
vault note/node directly (not just confirmed the document exists) and checked the specific figure is
present at that citation. Sources checked: `vault/Forecasts/Value_Driver_Tree_v2.md`,
`vault/Knowledge/Facts/*.md`, `vault/Knowledge/Topics/*.md`, `vault/Knowledge/Business_Relationships.md`,
`vault/Knowledge/Investment_Relationship_Map.md`, `vault/Decisions/Assumptions_Register.md`,
`vault/Decisions/Decision_Log/DEC-008...md`, `DEC-009...md`, `vault/Decisions/Investment_Options_Register.md`,
`vault/Decisions/Investment_Options/OPT-001..005...md`, `vault/Architecture/Geographic_Evidence_Rules.md`.
For cross-section claims, opened the CURRENT text of every referenced section (`Section_02`, `Section_09`,
`Section_10`, `Section_12`) rather than trusting the citing section's characterization. Read
`Citation_Audit_Section_04_v2_Pass2.md` and `_Pass3.md` first (per task instructions) but independently
re-traced every claim from scratch, including ones both passes had already marked "Confirmed correct."

## Hard failures

### HF-1 (Section 3) — AI/personalisation EBITDA contribution cited to `Topics/EBITDA.md`, which contains no such figure
**Text (§3.3, Strengths; repeated in the Traceability table):** "an AI-personalised loyalty layer with a
growing, disclosed EBITDA contribution (>USD 14mn FY2024 → >USD 30mn FY2025, `Topics/EBITDA.md`)."

Opened `Topics/EBITDA.md` in full and grepped it for "14mn"/"30mn": the note is entirely about the *Group*
Adjusted EBITDA margin/dollar figures (USD 500mn FY2024 → USD 615mn FY2025) and the FY2026 margin bridge —
it contains **no $14mn or $30mn figure anywhere** (the only "30m"-like substring is inside "USD 130mn," the
unrelated Q1 2026 actual). This is the exact same defect class the section's own sibling, Section 4, had
before its 2026-07-24 Pass-3 fix (wrong node/document cited for this identical AI-EBITDA figure,
`Topics/EBITDA.md`/N-06 instead of `Topics/AI.md`/N-09) — but here it survives uncaught in Section 3, whose
own Pass 2 addendum claims "no other defect found." The correct sources are `Topics/AI.md` ("the
personalisation/ranking algorithm's estimated contribution rose from USD 14mn+ p.a. (FY2024) to USD 30mn+
p.a. (FY2025)," TLB-001 p.23, TLB-002 p.16), `Facts/AI_Facts.md`, and `Value_Driver_Tree_v2.md` N-09.
**Fix:** retarget both the §3.3 prose and the Traceability table row from `Topics/EBITDA.md` to
`Topics/AI.md` / `Value_Driver_Tree_v2.md` N-09.

### HF-2 (Section 4) — talabat pro GMV-share growth (32%→49%) stated with zero citation
**Text (§4.2, "Revenue lift — talabat pro"):** "talabat pro subscriber GMV share has grown from 32% (Q1
2025) to 49% (Q1 2026) of platform GMV. This is the direct evidence base for `OPT-002`..."

This sentence carries no inline citation, and the Traceability table has no row for it either (the table's
only "talabat pro" row covers the 20-28%/26-32% frequency/retention uplift, cited to `ASM-016` and
`Value_Driver_Tree_v2.md` N-15/N-20 — a different claim). The fact itself is independently verifiable and
accurate (`Facts/Talabat_Pro.md`, TLB-020 p.8 and TLB-014 p.14; `Value_Driver_Tree_v2.md` N-08; restated in
`ASM-021`), but as drafted the claim traces to nothing inside the section — a genuine stage-9 failure under
the citation-audit skill's own rule ("It must resolve to exactly one of: a direct (DocID, page N) citation
... or an ASM-### row"). Notably, both `Citation_Audit_Section_04_v2_Pass2.md` and `_Pass3.md` verified this
*fact* is true against outside sources without checking that the *draft sentence* itself carries a
citation — the same "checked the fact, not the citation" gap Pass 3 itself named as the lesson from its own
Failure 1. **Fix:** add "(`Facts/Talabat_Pro.md`, TLB-020 p.8; TLB-014 p.14; `Value_Driver_Tree_v2.md` N-08)"
to the sentence and a corresponding Traceability table row.

### HF-3 (Cross-section, Sections 3 vs. 4) — FY2026 guided Adjusted EBITDA margin stated as a single point
("4.6%") in Section 4, contradicting the disclosed range Section 3 correctly states
**Text (Section 4, §4.3):** "the corpus discloses the programme's *cost* precisely (the FY2026 Adjusted
EBITDA margin bridge, 6.0%→4.6% of GMV guided, realized 4.8% in Q1 2026)."
**Text (Section 3, §3.3 Threats):** "Group Adjusted EBITDA margin compression is already realized, not
merely guided — 6.0% (Q4 2025 baseline) stepping down to a 4.4–4.8% FY2026 guided range, with 4.8% already
the actual Q1 2026 result (TLB-020)."

Checked the primary source directly: `vault/Knowledge/Sources/TLB-020_q1-2026-results-presentation.md`
states "FY2026 guidance (12 May 2026, revised): ... Adj. EBITDA 4.4-4.8% of GMV (USD 510-540mn, unchanged)
... (p.14)" — talabat discloses a **range**, never a single "4.6%" figure. `Value_Driver_Tree_v2.md` N-34
("guided step-down from 6.0% ... to a guided ~4.4-4.8% FY2026 range") and Section 9's own headline financial
table ("Adj. EBITDA margin | 4.4-4.8% of GMV") both correctly use the range. Section 4's "4.6%" appears to be
inherited from `Investment_Relationship_Map.md`'s and `DEC-008`'s own informal "a guided mid-range of 4.6%"
paraphrase (itself imprecise — TLB-020 does not use the phrase "mid-range" or state 4.6%) — but Section 4
presents it as if it were the precise disclosed guided figure, with no citation attached to the "4.6%" figure
itself. This is exactly the kind of same-statistic-different-value conflict Stage 17 exists to catch: the
same disclosed fact (FY2026 guided Adjusted EBITDA margin step-down) is stated correctly as a range in
Section 3 and incorrectly as a single point in Section 4, and Section 4's version is also unsourced in its
own traceability table. **Fix:** change Section 4's "6.0%→4.6% of GMV guided" to "6.0%→4.4-4.8% of GMV
guided (TLB-020, page 14)," matching Section 3, `Value_Driver_Tree_v2.md` N-34, and Section 9.

## Moderate findings

### MF-1 (Section 3) — talabat pro GMV-share figure (32%→49%) cited to a Topic note that doesn't state it
**Text (§3.2, "80/20"):** "talabat pro subscribers, whose share of platform GMV rose from 32% (Q1 2025) to
49% (Q1 2026)... (Group; `Topics/Multi-Verticality.md`, `Topics/Talabat Pro.md`)."

`Topics/Talabat Pro.md` states only "subscribers accounting for roughly half of platform GMV by Q1 2026" —
it does not state the 32% Q1-2025 comparator or the exact 49% figure. `Topics/Multi-Verticality.md` doesn't
discuss talabat pro's GMV share at all (it covers the 68%→73%→76% multi-vertical trend instead, which is a
different statistic). The 32%/49% figures are real and correctly sourced elsewhere in the vault
(`Facts/Talabat_Pro.md`, TLB-020 p.8, TLB-014 p.14; `Value_Driver_Tree_v2.md` N-08) — but neither of the two
notes actually cited here contains the specific number, so a reader following this citation would not find
the claimed figure at its target. Same class of defect as HF-1/HF-2 above (target document exists, doesn't
contain the specific number), but here the number is at least independently traceable elsewhere in the
vault, so scored moderate rather than hard. **Fix:** cite `Facts/Talabat_Pro.md` (or
`Value_Driver_Tree_v2.md` N-08) directly alongside or instead of the two Topic notes.

## Cross-section reference checks

1. **Section 3 §3.3 Weaknesses → "the direct evidentiary link to Section 10's Risk Analysis."** Verified
   against the current `Section_10_Risk_Analysis.md`: rider-workforce labour-compliance risk is `MKT-02`,
   the AdTech monetization gap is `MKT-03`, and Kuwait/UAE/Iraq/Qatar/Oman regulatory exposure is
   `REG-01`–`REG-04` — all present and consistent with Section 3's Weaknesses paragraph. **PASS.**

2. **Section 3 §3.2 → "the natural anchor for Section 4's value-driver logic"** (talabat pro subscribers and
   multi-vertical customers as the two cohorts the investment thesis is built on). Verified against the
   current `Section_04_Value_Proposition.md`: its Answer paragraph and §4.2 do lead with multi-vertical
   engagement (13.0x vs. 3.8x) and talabat pro as the first two of five value mechanisms. **PASS.**

3. **Section 3 §3.5 → Section 2's "problem 2" (within-bucket, cross-initiative allocation) and "problem 3"
   (cross-market allocation).** Verified against the current `Section_02_Business_Description.md` §2.2:
   problem 2 is literally labeled "Within-bucket, cross-initiative allocation (open — this plan's primary
   contribution)" and problem 3 "Cross-market allocation (open — the largest disclosed gap)" — exact match
   to Section 3's characterization. **PASS.**

4. **Section 3 §3.5 → `DEC-009`'s "approved ranking."** Verified against the current
   `DEC-009_investment-options-ranking-and-allocation-priority.md`: `status: approved`, resolved 2026-07-23
   (middle path). **PASS.**

5. **Section 3's dual citation of `Investment_Portfolio_Register.md` (§3.5) and `Investment_Options_Register.md`
   (See also)** — confirmed both files exist and are distinct, legitimate artifacts (the Portfolio Register
   is the envelope-level/disclosed-components rollup; the Options Register is the `OPT-XXX` index) — not a
   citation error, no conflict. **PASS.**

6. **Section 4 intro/§4.1 → `DEC-008`'s restriction that the ~2.2:1 split is narrative-only "through Section
   9/12/13."** Verified against current `DEC-008` (Decision text: "Section 9's (and by extension Section
   12/13's) headline financial exhibits will show only [the Group base case]") and grepped
   `Section_09_Financial_Plan.md`, `Section_12_Implementation_Plan.md` for "2.2:1"/`ASM-018`: Section 9
   explicitly states the 2.2:1 split "is **not** shown here as a quantified sub-case"; Section 12 explicitly
   states "the ~2.2:1 bucket split appears" nowhere in it; Section 13 does not mention it at all (silently
   compliant). **PASS** — restriction is honored in all three referenced sections as currently drafted.

7. **Section 4 §4.3 → "Section 9 shows the (appropriately bounded) financial consequence."** Verified
   against current `Section_09_Financial_Plan.md` §9.3: shows Group-level base/upside/downside FY2026
   scenarios only, sourced to talabat's own disclosed guidance, with no bucket-level breakout — consistent
   with Section 4's characterization. **PASS.**

8. **Section 4 §4.1 → the ~2.2:1 weighting as "a real, evidenced management judgment" per
   `Topics/2026 Investment Programme.md`.** Verified: that note states "The consistent 2.2:1 weighting
   toward Everyday App over Food leadership is itself a disclosed management judgment worth engaging with
   directly." **PASS.**

9. **Both sections' `OPT-001`–`OPT-005` references, cross-checked against each other and against
   `Investment_Options_Register.md`.** OPT-001 (talabat mart densification), OPT-002 (talabat pro
   acceleration, Egypt/Iraq), OPT-003 (Food-leadership CVP, UAE/Kuwait/Qatar), OPT-004 (advertising
   monetization gap), OPT-005 (AI/personalisation scaling) are described identically in both Section 3 and
   Section 4 and match the current Register's titles exactly. **PASS — no drift between the two sections'
   descriptions of the same options.**

10. **Statistic cross-check across the two sections (Stage 17's specific mandate).** Multi-vertical GMV
    share (68%→73%→76%), talabat pro GMV share (32%→49%, Q1'25→Q1'26), AI/personalisation EBITDA
    (>USD14mn→>USD30mn), advertising revenue (USD246mn→USD323mn), UAE/Kuwait/Qatar M1 retention (-4% y/y)
    all appear in both sections with **identical values** — no drift found on any of these. **The one
    exception is the FY2026 guided Adjusted EBITDA margin figure, flagged as HF-3 above** (Section 3: correct
    4.4-4.8% range; Section 4: incorrect single-point 4.6%).

## Confirmed correct (independently re-verified, not just trusted from Pass 2/3)
- Section 4's four previously-flagged-and-fixed defects (wrong Value Driver Tree node IDs for multi-vertical
  mechanism; talabat pro GMV-share date mislabeling; CARC/PostPaid chain mis-citation; AI EBITDA
  `Topics/EBITDA.md`/N-06 mis-citation) all remain fixed and correct in the current text. **PASS**, confirmed
  independently against `Value_Driver_Tree_v2.md` N-11/N-14/N-15/N-20/N-09, `Topics/AI.md`, and
  `Business_Relationships.md` Chain 1/Chain 5.
- Section 3's market-sizing figures (grocery TAC ~USD104bn/3% adoption, "USD150bn+ TAM," tMart TAC
  penetration <1.5%) — verified against `Facts/Q-Commerce.md`, matching TLB-014 p.5, TLB-014 p.19/TLB-020
  p.16, TLB-019 p.11 exactly. **PASS.**
- Section 3's GCC/non-GCC/Egypt FY2025 segment revenue and gross profit table — verified against
  `Facts/Marketplace_Facts.md` and `Facts/Revenue.md` (TLB-002/TLB-008 p.61/p.111): GCC USD3,795.4mn/
  USD1,231.1mn, non-GCC USD346.5mn/USD61.7mn, Egypt USD509.9mn/USD125.0mn all match. **PASS.**
- Section 4's ">4x monthly-spend gap" — verified against `Topics/Customer Economics.md`. **PASS.**
- Section 4's "no absolute CLV figure disclosed" — verified against `Topics/Customer Lifetime Value.md`
  Open Questions. **PASS.**
- Section 4's "no competitor benchmark or internal capital-allocation methodology disclosed" — verified
  against `Topics/Capital Allocation and Investment Governance.md` Open Questions. **PASS.**
- Section 4's KPI Governance-family "7 KPIs, all newly-instrumented" — verified against `KPI_Tree_v2.md`'s
  own summary line. **PASS.**
- Geography tagging: no Group/GCC figure presented as Egypt-proven, no Egypt figure presented as
  Group-representative, no pre/post-FY2025 non-GCC figure used interchangeably, in either section. `ASM-016`
  correctly gates every GCC+Jordan-cohort talabat pro figure's applicability to Egypt/non-GCC in both
  sections. **No Geographic Evidence Rules failure pattern found** in either Section 3 or Section 4.

## Summary
- **3 hard failures**: one wrong-document citation in Section 3 (AI-personalisation EBITDA figure cited to
  `Topics/EBITDA.md`, which doesn't contain it — the same defect class Section 4 already had and fixed, now
  found live and unfixed in Section 3); one completely uncited numeric claim in Section 4 (talabat pro
  32%→49% GMV-share growth, missed by two prior independent passes); and one cross-section numeric conflict
  (Section 4 states the FY2026 guided EBITDA margin as a single "4.6%" point, contradicting the disclosed
  4.4-4.8% range that Section 3, `Value_Driver_Tree_v2.md`, and Section 9 all state correctly).
- **1 moderate finding**: Section 3's talabat pro GMV-share citation points to Topic notes that don't
  actually contain the cited figures (the figures are correct and traceable elsewhere in the vault).
- **10 cross-section reference checks performed, 9 pass cleanly**; the 10th (statistic cross-check) surfaces
  HF-3.
- All other numeric/named-fact claims across both sections trace correctly to their cited source, are
  correctly geography-tagged, and are correctly routed through `Approved` Assumption Register rows where
  relevant.

## Verdict
**FAIL.** Per the citation-audit skill's 0%-tolerance rule, Sections 3 and 4 cannot proceed to Stage 18 with
these three open hard failures. All three fixes are narrow and mechanical (retarget one citation in Section
3; add one citation in Section 4; correct one figure from a single point to the disclosed range in Section
4) — none requires re-arguing the underlying evidence or conclusions of either section. Recommend routing
back to the drafting/fix session rather than escalating to `decision-steward` (none of the three findings is
a genuine same-tier evidence conflict requiring adjudication — they are citation-trail and transcription
defects with unambiguous correct answers already present elsewhere in the vault).

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_03_Market_Analysis.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_04_Value_Proposition.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_10_Risk_Analysis.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_12_Implementation_Plan.md`
- `vault/Validation/Citation_Audit_Section_04_v2_Pass2.md`, `_Pass3.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md` (N-08, N-09, N-11, N-14, N-15, N-20, N-34)
- `vault/Knowledge/Topics/AI.md`, `Topics/EBITDA.md`, `Topics/Talabat Pro.md`, `Topics/Multi-Verticality.md`,
  `Topics/Customer Economics.md`, `Topics/Customer Lifetime Value.md`,
  `Topics/Capital Allocation and Investment Governance.md`
- `vault/Knowledge/Facts/Talabat_Pro.md`, `Facts/AI_Facts.md`, `Facts/Q-Commerce.md`,
  `Facts/Marketplace_Facts.md`, `Facts/Revenue.md`, `Facts/GMV_Facts.md`
- `vault/Knowledge/Sources/TLB-020_q1-2026-results-presentation.md`
- `vault/Knowledge/Investment_Relationship_Map.md`
- `vault/Decisions/Assumptions_Register.md` (ASM-016, ASM-021)
- `vault/Decisions/Decision_Log/DEC-008_section9-headline-bucket-split-presentation.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
- `vault/Decisions/Investment_Options_Register.md`, `vault/Decisions/Investment_Portfolio_Register.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`
