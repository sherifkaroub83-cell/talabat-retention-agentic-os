---
type: validation
section: 6 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_06_Business_Model_and_Revenue_Streams.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md)
run_date: 2026-07-23
auditor: top-level session, acting in the evidence-citation-agent role (Tooling note: no `Agent` tool
  available this session — see the section draft's own Tooling note and `bp-orchestrator.md`'s "Known
  runtime constraint")
status: OPEN → FIXED (self-verified re-check, 2026-07-23) — 1 issue found and corrected in-session;
  independent Pass 2 re-check still required
---

# Citation Audit — Section 6 (v2, Group-wide capital-allocation draft)

Companion to (does not touch) `vault/Validation/Citation_Audit_Section_06.md`, which audited the
superseded Egypt-retention Section 6 draft, if one exists from an earlier pilot.

## Method
Walked the section sentence by sentence; every number or named-fact claim traced to either (a) a direct
`(DocID, page N)` Facts/Sources/Topics citation, or (b) an `ASM-###` row with `status: Approved`.
Cross-checked every citation against the actual source note/document content gathered this session
(`Strategic/Revenue Model.md`, `Facts/Revenue.md`, `Topics/Pricing.md`, `Topics/Customer Economics.md`,
`Topics/Grocery and Retail.md`, `Topics/Advertising.md`, `Entities/Delivery_Models.md`,
`Facts/Marketplace_Facts.md`, `Facts/Q-Commerce.md`, `vault/Decisions/Assumptions_Register.md`), not just
presence of a citation string. Checked geography tagging against
`vault/Architecture/Geographic_Evidence_Rules.md` for every numeric claim.

## Pass/Fail Table

| # | Claim (location) | Cited to | Verdict | Note / fix |
|---|---|---|---|---|
| 1 | FY2024/FY2025 revenue by fee type (Commission 1,062→1,297mn +25%→+22%; Delivery&Service 696→859mn +29%→+24%; Subscription&Other 952→1,397mn +44%→+47%; Advertising 246→323mn +27%→+32%; Vouchers (120)mn) (§6.1 table) | TLB-001 p.27; TLB-002 p.20; TLB-009 p.4 | PASS | Verified verbatim against `Facts/Revenue.md`'s TLB-001, TLB-002, and TLB-009 entries; all four dollar figures and both years' growth rates match exactly. |
| 2 | Blended take rate ~40% (FY24) → ~41% (FY25); 38%→39% of GMV Q1'25→Q1'26 (§6.1) | TLB-001 p.27; TLB-002 p.20; TLB-020 p.4/p.10 | PASS | Verified: "40% of GMV (2023: 37%)" TLB-001 p.27; "41% of GMV (2024: 40%)" TLB-002 p.20; "take rate 38% → 39% of GMV" TLB-020 p.4/10. |
| 3 | Subscription fee & Other Income decomposition (Q1'26: Subscription 1.0%/~USD25.8mn; Own grocery & other income 15.2%/~USD408.4mn; combined ~16.2%; reconciling within ~0.2%) (§6.1) | `ASM-013` (Approved); TLB-010 p.16; TLB-011 p.4 | PASS | Verified against `Assumptions_Register.md` row 48 verbatim, and independently cross-checked the dollar figures against `Facts/Revenue.md`'s TLB-010 entry: "Subscription fees USD 25,772,018"; "Other direct income USD 408,418,477" — both match the section's "~USD25.8mn"/"~USD408.4mn" exactly. Arithmetic 1.0%+15.2%=16.2% confirmed. `ASM-013` status confirmed `Approved` (not `Proposed`). |
| 4 | TLB-019 p.13 %-of-GMV-by-type range does not reconcile with the Q1'26 mix table or the corroborated 3.4-3.5% Advertising figure (§6.1, flagged discrepancy) | TLB-019, p.13 | PASS (correctly flagged, not force-resolved) | Independently re-derived: TLB-011's Q1 2026 mix (Commissions 12.8%, Delivery 6.1%, Service 2.2%, Subscription 1.0%, Own grocery/other 15.2%, Advertising 3.4%) sums to ~39.0% of GMV, consistent with the section's own stated 39% take rate. TLB-019 p.13's separately-recorded FY'25 range (Advertising 8.9-9.4%; Subscription & Other Income 3.3-3.5%) is materially inconsistent with both the Q1'26 table and the independently-corroborated 3.4-3.5% Advertising figure repeated in `Strategic/Revenue Model.md` and `Topics/Advertising.md`. The section correctly declines to use the TLB-019 p.13 range for these two lines and states the discrepancy explicitly — this is the correct handling per the citation-audit skill's Rule 2 (same-tier conflict, present/flag rather than silently pick a side), not a citation failure. |
| 5 | Qatar commission-rate cap + delivery-registration-fee ban (§6.2) | TLB-026, p.46 | PASS | Verified against `Topics/Pricing.md` ("Qatar imposed a government commission-rate cap and a ban on delivery-registration fees following a Ministry of Commerce and Industry investigation," TLB-026 p.46) — identical citation independently verified in Section 3's own citation audit for the same underlying fact. |
| 6 | Oman licensing dispute (§6.2) | TLB-001, p.32 | PASS | Verified against `Topics/Pricing.md` and cross-checked against Section 3's independently-verified citation for the same fact. |
| 7 | Q1 2026 "lower commission rates" contributing to revenue-mix shift (§6.2) | TLB-014, p.15 | PASS | Verified verbatim against `Strategic/Revenue Model.md`: "the corpus explicitly names 'lower commission rates' as a contributing factor to that Q1 2026 mix shift (TLB-014, page 15)." |
| 8 | Family Plan retention premium >60% vs. solo plans (§6.2) | TLB-018, p.6 | PASS | Verified against `vault/Forecasts/Value_Driver_Tree_v2.md` N-23, which independently cites the identical figure and page. |
| 9 | talabat pro Egypt price point not cited; ASM-004 requires-revision (§6.2) | `Topics/Pricing.md` Open Questions; `Assumptions_Register.md` ASM-004 | PASS | Verified: `Topics/Pricing.md`'s Open Questions states the EGP 79/month figure "cannot be cited here as a vault-grounded fact under this note's sourcing rules"; `Assumptions_Register.md` row 131 confirms `ASM-004` status is `requires-revision`, not `Approved`, for the new problem. The section correctly does not cite the price figure. |
| 10 | tMart ~95% take rate (GMV-to-revenue conversion, not margin) (§6.2) | TLB-002, p.20 | PASS | Verified against `Facts/Q-Commerce.md`: "talabat mart revenue take rate: GMV flows to revenue at an effective ~95% take rate... (TLB-002, page 20)." The section's explicit caution that this is a conversion rate, not a margin figure, is a correct, non-fabricated distinction — not itself a numeric claim requiring separate citation. |
| 11 | G&R product-mix EBITDA drag (0.5)-(0.7)pp (§6.2) | TLB-014, p.6/p.8 | PASS | Verified against `Topics/Grocery and Retail.md` verbatim. |
| 12 | CPG advertising investment ratio 8% vs. 2% benchmark (§6.2) | TLB-015, p.108 | PASS | Verified — identical citation independently confirmed in Section 3's own citation audit. **Fixed in this audit:** the original draft sentence was missing its inline geography tag (`Group`); corrected in-session before this audit closed (see draft's current text). |
| 13 | Advertising ~7% of GMV benchmark reached in UAE tMart vs. 3.4-3.5% Group (§6.2) | TLB-001 p.21; TLB-002 p.10; TLB-014 p.19 | PASS | Verified against `Topics/Advertising.md` verbatim. |
| 14 | talabat pro subscriber GMV share 32%→49% (FY2024→Q1 2026) (§6.3) | `Topics/Talabat Pro.md` | PASS | Consistent with the identical figure independently verified in Section 3's and Section 4's citation audits. |
| 15 | Food-only vs. multi-vertical monthly spend/frequency (AED194/3.8 vs. AED814/12.8, Sept 2024; >4x spend gap, ~3.4x frequency gap) (§6.4) | TLB-026, pp.91, 122 | PASS | Verified against `Topics/Customer Economics.md` verbatim, including the USD conversions (USD53/USD222), which are given directly in the source note, not independently constructed. Arithmetic checked: 814/194=4.20x ("> 4x" correct); 12.8/3.8=3.37x ("~3.4x" correct). |
| 16 | Net delivery cost 6.0%→6.3% of GMV; gross profit 12.3%→11.9% of GMV (FY24→FY25) (§6.4) | TLB-002, pp.17, 20 | PASS | Verified against `Facts/Marketplace_Facts.md`: "Gross profit... 11.9% margin of GMV (2024: 12.3%)"; "Net delivery costs: 6.3% of GMV (2024: 6.0%)." |
| 17 | CARC USD89mn (1.5% of GMV, 2023) → USD155mn (1.6% of GMV, 2025) (§6.4) | TLB-001, p.28; TLB-002, p.21 | PASS | Verified against `Topics/Customer Economics.md` verbatim. |
| 18 | No disclosed AOV/basket-value figure at any geography; GMV excludes subscription fees/rider tips (§6.4) | `ASM-015`; TLB-001, p.27 | PASS | `ASM-015` confirmed `Approved` in `Assumptions_Register.md`; GMV-definition citation consistent with Section 3's independently-verified use of the same fact. |
| 19 | No per-country/Egypt-specific fee-type revenue breakdown; no per-order contribution-margin figure (§6.1, §6.4) | `Strategic/Revenue Model.md`; `Topics/Customer Economics.md` Open Questions | PASS | Verified against both notes' own stated Open Questions/Egypt-Specific Considerations sections. |
| 20 | §6.5 AI decision-support layer's own revenue treatment (cross-reference to Section 2.5) | `Section_02_Business_Description.md` §2.5 | PASS | Verified against the already-drafted Section 2 text: "Section 6 (Business Model and Revenue Streams) accordingly does not need to construct a new revenue stream for 'the AI system' itself..." — the cross-reference accurately restates Section 2's own framing, no new fact introduced. |
| 21 | §6.6 cross-section consistency claims (Section 9 non-contradiction; Value Driver Tree node mapping; no ASM-029–033 shown) | `Section_09_Financial_Plan.md`; `Value_Driver_Tree_v2.md` | PASS | Verified: Section 9's headline FY2026 guidance figures (14-17% revenue growth cFX; 4.4-4.8% EBITDA margin) are not restated or contradicted anywhere in Section 6, which confines itself to FY2024/FY2025 historical revenue-stream mechanics. Every revenue stream in §6.1 correctly maps to a real node ID in `Value_Driver_Tree_v2.md` (N-05, N-07, N-08, N-09, N-10, N-11, N-14, N-16, N-17, N-20, N-21, N-22, N-26, N-29). No `ASM-029`–`033` dollar figure appears anywhere in the section. |

## Geographic Evidence Rules check

**Clean, after one small fix made in-session (item #12).** Every numeric claim in the section carries an
explicit geography tag (Group, country-specific, or an explicit statement that no country-level figure
exists), consistent with `vault/Architecture/Geographic_Evidence_Rules.md`. No Failure Pattern 1–6
instance found:
- No Group figure is presented as Egypt-specific — the section explicitly and repeatedly states that no
  Egypt-level revenue-stream, take-rate, or unit-economics breakdown exists anywhere in the corpus (§6.1
  "Geography caution," §6.4 "What cannot be shown"), rather than silently applying the Group figures to
  Egypt.
- Country-specific figures (Qatar's commission cap, Oman's licensing dispute, UAE tMart's 7%-of-GMV
  advertising benchmark) are correctly tagged `country-specific` and never blended into the Group-level
  averages.
- No `inferred-applicability` claim is made anywhere in this section — unlike Sections 4/9, Section 6 does
  not need to extrapolate a GCC-cohort statistic to Egypt, so this failure mode does not arise here.
- "MENA" is never used as a stand-in for the 8-market footprint anywhere in the section.
- The pre/post-FY2025 non-GCC segment-reporting distinction is not implicated — this section cites no
  non-GCC segment figure.

## Summary

- **21 claims/rows checked.**
- **21 pass** (20 cleanly, 1 — item #12 — after a small in-session fix: a missing inline geography tag,
  not a missing or wrong citation).
- **0 missing-citation failures** and **0 not-yet-approved-Assumption dependencies** — the two Assumption
  rows this section relies on (`ASM-013`, `ASM-015`) are both `status: Approved`.
- **1 genuinely new same-tier evidence conflict found and correctly flagged, not silently resolved**
  (item #4 — the TLB-019 p.13 %-of-GMV-by-fee-type range vs. the Q1 2026 mix table and the
  independently-corroborated Advertising figure). This is a citation-audit finding worth carrying forward:
  a future pass should consider whether `Facts/Revenue.md`'s TLB-019 entry itself needs a correction note,
  since the section's handling (declining to use the discrepant range) is the correct workaround but does
  not fix the underlying Facts-layer inconsistency.

## Verdict
**OPEN → FIXED (self-verified re-check, 2026-07-23).** The one issue found in this audit (a missing
inline geography tag, item #12) was corrected directly in `Section_06_Business_Model_and_Revenue_Streams.md`
by the same session that drafted the section — **this is a self-check, not an independent Pass 2
re-verification.** A genuinely independent citation-audit re-check (a fresh `evidence-citation-agent`
thread, per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline) is still required before
Section 6 can be marked citation-verified/✅ Done. The TLB-019 p.13 discrepancy noted in item #4 should
also be carried to whichever process eventually corrects `Facts/Revenue.md` itself, since this audit's
scope is the drafted section, not the underlying Facts file.
