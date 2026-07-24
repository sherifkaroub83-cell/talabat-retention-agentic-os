---
type: validation
section: 6 (v2 — Group-wide capital-allocation draft) — INDEPENDENT PASS 2
target: vault/Projects/Business_Plan_Drafts_v2/Section_06_Business_Model_and_Revenue_Streams.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md) — Pass 2
run_date: 2026-07-24
auditor: independent Pass 2 review agent (separate invocation from the drafting session; no memory of
  drafting this section — treated as a fresh, skeptical read)
status: PASS (0 defects found)
---

# Citation Audit — Section 6 (v2), Independent Pass 2

Companion to (does not replace) `vault/Validation/Citation_Audit_Section_06_v2.md` (Pass 1,
self-reviewed by the drafting session). This is the genuinely independent re-check required before
Section 6 can be marked ✅ Done, per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline.

## Method

Re-read the section fresh, line by line, against the actual current content of the underlying vault
files it cites — not against the Pass 1 audit's own conclusions. Files independently re-read in full for
this pass: `vault/Knowledge/Facts/Revenue.md`, `vault/Forecasts/Value_Driver_Tree_v2.md`,
`vault/Decisions/Assumptions_Register.md`, `vault/Knowledge/Topics/Customer Economics.md`,
`vault/Knowledge/Topics/Multi-Verticality.md`, `vault/Knowledge/Topics/Advertising.md`,
`vault/Knowledge/Topics/Pricing.md`, `vault/Knowledge/Topics/Grocery and Retail.md`,
`vault/Decisions/Investment_Options/OPT-001_talabat-mart-dark-store-densification.md`,
`vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md`. Specific focus areas, per this
Pass 2's brief: (1) every `Value_Driver_Tree_v2.md` node ID cited (N-05 through N-30) checked against
that file's actual node definitions — the recurring wrong-node-ID defect found in other sections' Pass 2
reviews; (2) the repo-wide "FY2024→Q1 2026" date-mislabeling defect found and fixed elsewhere this
session, specifically re-checked for the pro GMV-share figure and the multi-vertical GMV-share figure;
(3) the TLB-019 p.13 reconciliation-candidate handling flagged in the Project tracker, checked for
whether it was correctly avoided rather than silently force-reconciled.

## Pass/Fail Table

| # | Claim (location) | Cited to | Independent re-check | Verdict |
|---|---|---|---|---|
| 1 | FY2024/FY2025 revenue by fee type table (§6.1) | TLB-001 p.27; TLB-002 p.20; TLB-009 p.4 | Re-derived directly from `Facts/Revenue.md`'s TLB-001/TLB-002/TLB-009 entries — all four dollar figures and both years' growth rates match exactly (Commission 1,062→1,297mn +25%→+22%; Delivery&Service 696→859mn +29%→+24%; Subscription&Other 952→1,397mn +44%→+47%; Advertising 246→323mn +27%→+32%; Vouchers (120)mn) | PASS |
| 2 | Node mapping: Commission fees → N-05, N-10, N-14/N-16, N-26 | `Value_Driver_Tree_v2.md` | N-05 = "Food-leadership capability" (CVP + partner retention + commission-rate investment) — matches. N-10 = "Food partner retention/selection-depth investment" — matches. N-14/N-16 = order-frequency nodes — matches. N-26 = "Food GMV vs. G&R GMV" — matches | PASS |
| 3 | Node mapping: Delivery & Service fees → N-08, N-14/N-16 | `Value_Driver_Tree_v2.md` | N-08 = "talabat pro adoption" — matches (pro's free-delivery benefit is the stated mechanism). N-14/N-16 — matches | PASS |
| 4 | Node mapping: Subscription & Other Income → N-07, N-08, N-20/N-21/N-22 | `Value_Driver_Tree_v2.md` | N-07 = "G&R product-mix shift" (tMart) — matches the "other income" component. N-08 — matches. N-20/N-21/N-22 = pro retention uplift / multi-vertical M1 delta / CLV proxy — matches | PASS |
| 5 | Node mapping: Advertising & listing fees → N-09, N-29, N-11/N-17 | `Value_Driver_Tree_v2.md` | N-09 = "AI/personalisation deployment" — matches (ad-targeting mechanism). N-29 = "Advertising & listing-fees revenue" — exact match, this is the correct revenue node. N-11/N-17 = multi-vertical usage nodes — matches | PASS |
| 6 | Node mapping: Vouchers → N-12 | `Value_Driver_Tree_v2.md` | N-12 = "Medium/high-value customer retention via subscription + targeted incentives" — matches | PASS |
| 7 | Blended take rate ~40%→~41%; 38%→39% Q1'25→Q1'26 (§6.1) | TLB-001 p.27; TLB-002 p.20; TLB-020 p.4/10 | Re-verified against `Facts/Revenue.md`: "40% of GMV (2023: 37%)" TLB-001 p.27; "41% of GMV (2024: 40%)" TLB-002 p.20; "take rate 38% → 39% of GMV" TLB-020 p.4/10 | PASS |
| 8 | Subscription/Other Income decomposition (Q1'26, §6.1) | `ASM-013` (Approved); TLB-010 p.16; TLB-011 p.4 | Independently re-derived: TLB-010 "Subscription fees USD 25,772,018; Other direct income USD 408,418,477"; TLB-011 mix table "Subscription fees 1.0%; Own grocery & other income 15.2%". Arithmetic 1.0%+15.2%=16.2% confirmed. `ASM-013` status independently confirmed `Approved` (register row 48) | PASS |
| 9 | Pro GMV-share figure labeled "Q1 2025→Q1 2026" (§6.1, §6.3, table, traceability) | `Topics/Talabat Pro.md` | **Specifically checked for the repo-wide "FY2024→Q1 2026" mislabeling defect found elsewhere this session.** Every instance in this section (4 occurrences) correctly reads "Q1 2025→Q1 2026" or "32%→49%, Q1 2025→Q1 2026" — no instance of the wrong "FY2024→Q1 2026" pattern found anywhere in the file | PASS |
| 10 | TLB-019 p.13 discrepancy handling (§6.1) | TLB-019, p.13 | Independently re-derived TLB-011's Q1 2026 mix (12.8+6.1+2.2+1.0+15.2+3.4−1.7 = 39.0%), matching the section's stated 39% take rate. TLB-019 p.13's separate FY'25 range (Advertising 8.9–9.4%; Subscription & Other 3.3–3.5%) is confirmed materially inconsistent with this and with the corroborated 3.4–3.5% Advertising figure in `Topics/Advertising.md`. The section correctly declines to use the TLB-019 p.13 range — this is the correct handling of a genuine same-tier Facts-layer inconsistency, not a section-level citation defect | PASS (correctly flagged, not force-reconciled) |
| 11 | Qatar commission cap + delivery-fee ban; Oman licensing dispute (§6.2) | TLB-026 p.46; TLB-001 p.32 | Re-verified against `Topics/Pricing.md` verbatim | PASS |
| 12 | Q1 2026 "lower commission rates" (§6.2) | TLB-014, p.15 | Re-verified against `Facts/Revenue.md` TLB-014 entry: "offsetting lower commission rates" | PASS |
| 13 | Family Plan >60% retention premium (§6.2) | TLB-018, p.6 | Re-verified against `Value_Driver_Tree_v2.md` N-23, identical citation | PASS |
| 14 | talabat pro Egypt price point not cited; `ASM-004` requires-revision (§6.2) | `Topics/Pricing.md` Open Questions; `ASM-004` | Re-verified: `Topics/Pricing.md` states the EGP 79/month figure "cannot be cited here... not yet ingested"; register row 39 confirms `ASM-004` status is `requires-revision`, not `Approved` | PASS |
| 15 | tMart ~95% take rate, conversion not margin (§6.2) | TLB-002, p.20 | Re-verified against `Facts/Q-Commerce.md`/`Facts/Revenue.md`; the conversion-vs-margin distinction is correctly drawn against the separately-cited (0.5)-(0.7)pp EBITDA drag figure, which is a different, correctly-distinguished metric | PASS |
| 16 | G&R EBITDA drag (0.5)-(0.7)pp (§6.2) | TLB-014 p.6/p.8 | Re-verified against `Topics/Grocery and Retail.md` verbatim: "(0.5%)-(0.7%) drag on Adjusted EBITDA margin... (TLB-014, page 6, page 8)" | PASS |
| 17 | CPG ad ratio 8% vs. 2% benchmark (§6.2) | TLB-015, p.108 | Re-verified against `Topics/Advertising.md`: "the CPG advertising investment ratio (8% vs. a typical 2%)... (TLB-015, page 108)" | PASS |
| 18 | Advertising ~7% UAE tMart vs. 3.4-3.5% Group (§6.2) | TLB-001 p.21; TLB-002 p.10; TLB-014 p.19 | Re-verified against `Topics/Advertising.md` verbatim | PASS |
| 19 | Food-only vs. multi-vertical spend/frequency (AED194/3.8 vs. AED814/12.8, Sept 2024) (§6.4) | TLB-026, pp.91, 122 | Re-verified against `Topics/Customer Economics.md` verbatim, including USD conversions; arithmetic re-checked (814/194=4.20x, 12.8/3.8=3.37x) | PASS |
| 20 | Net delivery cost / gross profit % of GMV (§6.4) | TLB-002, pp.17, 20 | Re-verified against `Topics/Customer Economics.md`: "Net delivery cost runs 6.0-6.3% of GMV and gross profit 11.9-12.3% of GMV" | PASS |
| 21 | CARC USD89mn→USD155mn (§6.4) | TLB-001 p.28; TLB-002 p.21 | Re-verified against `Topics/Customer Economics.md` verbatim | PASS |
| 22 | No AOV/basket figure; GMV excludes subscription fees/tips (§6.4) | `ASM-015`; TLB-001 p.27 | `ASM-015` independently confirmed `Approved`, register row 50 | PASS |
| 23 | §6.6 cross-section check vs. Section 9 (14-17% revenue growth, 4.4-4.8% EBITDA margin) | `Section_09_Financial_Plan.md` | Independently confirmed Section 9 states exactly these figures (lines 24, 63, 77 of that file) — no contradiction, correctly not restated as a Section 6 forward projection | PASS |
| 24 | OPT-001 EBITDA-drag rationale cross-reference (Answer, stated first) | `OPT-001...md` | Re-verified against OPT-001's own record: "G&R growth is also explicitly margin-dilutive: a disclosed (0.5%)-(0.7%)pp Adjusted EBITDA margin drag" — matches | PASS |

## Geographic Evidence Rules check (independently re-run)

Clean. Every numeric claim carries an explicit geography tag; no Group figure presented as Egypt-specific
(the section repeatedly and explicitly states the absence of any Egypt-level fee-type/unit-economics
breakdown); country-specific figures (Qatar, Oman, UAE tMart) correctly scoped; "MENA" never used; no
non-GCC segment figure cited (not implicated); no `inferred-applicability` claim made (not needed in this
section).

## Summary

- **24 items independently re-checked**, spanning every citation, every Value Driver Tree node reference,
  and the two date-labeling/reconciliation risk areas this Pass 2 was specifically briefed to check.
- **24 pass, 0 defects found.**
- No wrong node IDs, no stale time-period labels, no missing geography tags, no unflagged same-tier
  conflicts.

## Verdict

**PASS (0 defects found), independently verified 2026-07-24.** This citation audit is now genuinely
independent of the drafting session and confirms the Pass 1 self-review's conclusions hold. No further
citation-level fix is required for Section 6.
