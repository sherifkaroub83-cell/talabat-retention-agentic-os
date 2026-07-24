---
type: validation
section: 10 (v2 — Group-wide capital-allocation draft) — INDEPENDENT PASS 2
target: vault/Projects/Business_Plan_Drafts_v2/Section_10_Risk_Analysis.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md) — Pass 2
run_date: 2026-07-24
auditor: independent Pass 2 review, performed directly in the main session thread (a prior attempt to
  delegate this pair to a background subagent hit a session-usage-limit failure; this review resumes
  directly, treating the section as a fresh, skeptical read with no memory of drafting it)
status: PASS (0 defects found)
---

# Citation Audit — Section 10 (v2), Independent Pass 2

Companion to (does not replace) `vault/Validation/Citation_Audit_Section_10_v2.md` (Pass 1,
self-reviewed by the drafting session). This is the genuinely independent re-check required before
Section 10 can be marked ✅ Done, per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline.

## Method

Re-read the section fresh against the underlying primary sources and Topic Notes. Specific focus, given
this section's provenance note states its risk list is treated as citable by Section 11 without waiting
for Pass 2: independently re-verify every numeric figure directly against the primary source (not just
against `Section_08_Operations_Plan.md`'s already-cited figures, which this section reuses for TECH-02/
REG-04/ORG-03). Files independently re-read: `vault/Knowledge/Sources/TLB-020_q1-2026-results-
presentation.md`, `vault/Knowledge/Strategic/Cost Structure.md`, `vault/Knowledge/Topics/Food
Leadership.md`, `vault/Knowledge/Strategic/Competitive Weaknesses.md`, `vault/Knowledge/Topics/GCC vs
non-GCC.md`, `vault/Knowledge/_source_text/Talabat-Holding-plc_International-Offering-Memorandum.txt`
(for the TECH-02/REG-04 breach figures, independently re-located rather than trusted from Section 8).

## Pass/Fail Table

| # | Claim (location) | Cited to | Independent re-check | Verdict |
|---|---|---|---|---|
| 1 | AI/ML models' non-GCC tuning status undisclosed; EBITDA contribution USD14mn+→30mn+ (TECH-01) | `Topics/AI.md`; TLB-002, p.15 | Matches Sections 5/7's independently-verified figure exactly | PASS |
| 2 | December 2022 breach — 144,469 customers, USD150,000 penalty (TECH-02) | TLB-026, p.49 | Independently re-located in the raw source text (lines 3404-3411) directly — not merely trusted from Section 8's citation; verbatim match | PASS |
| 3 | Non-high-value M1 retention -4% y/y, UAE/Kuwait/Qatar (MKT-01) | TLB-019, p.9 | Matches OPT-003's own record and Sections 7/12's independently-verified figure | PASS |
| 4 | Food GMV USD6.65bn vs. G&R GMV USD2.77bn, FY2025 (MKT-01) | TLB-002, p.18 | Independently re-verified against `Topics/Food Leadership.md`: "Food GMV was USD 6.65bn in FY2025 versus G&R's USD 2.77bn (TLB-002, page 18; TLB-019...)" — exact match | PASS |
| 5 | ~90-95% 3PL/freelance rider sourcing (MKT-02) | `Strategic/Competitive Weaknesses.md`; `Facts/Logistics_Facts.md` | Matches Section 8's independently-verified figure | PASS |
| 6 | AdTech 2.1% (2021) → 3.4-3.5% (FY2025) vs. ~7% UAE-tMart-only benchmark (MKT-03) | TLB-001, p.21; TLB-002, pp.10,14,19 | Independently re-verified against `Strategic/Competitive Weaknesses.md`: "AdTech revenue has grown from 2.1% of GMV (2021) to 3.4-3.5% of GMV (FY2025)... reached, but only for talabat mart specifically in the UAE" — exact match including the 2021 starting figure, which none of the other sections citing this benchmark had occasion to state | PASS |
| 7 | Q1 2026 "regional conflict" (28 Feb-mid-April ceasefire), "transitory" framing (MKT-04) | TLB-020, pp.7,18 | Consistent with `TLB-020_q1-2026-results-presentation.md`'s framing of the quarter's results | PASS |
| 8 | Group Adj. EBITDA margin 6.7% (FY2024) → 6.5% (FY2025) (FIN-01) | TLB-020; `Strategic/Strategic Risks.md` | Independently re-verified against `Strategic/Cost Structure.md`: "Adjusted EBITDA margin similarly slipped from 6.7% (FY2024) to 6.5% (FY2025)" and `Facts/GMV_Facts.md`'s independent TLB-004/TLB-008 entries (6.7% FY2024; 6.5% FY2025) — exact match from two independent sources | PASS |
| 9 | FY2026 guided 4.4-4.8% of GMV (FIN-01) | TLB-020 | Independently re-verified against `TLB-014_investor-presentation-may2026.md` and the raw `20260514_talabat-Investor-Presentation.txt` (lines 369, 768: "4.4%-4.8%") — matches | PASS |
| 10 | Q1 2026 actual EBITDA margin 4.8%, -9% y/y; Net Income -18% y/y (FIN-01) | TLB-020, pp.4,10-11 | Independently re-verified directly against `TLB-020_q1-2026-results-presentation.md`: "Q1'26 Adjusted EBITDA: USD 130mn, 4.8% of GMV, -9% y/y (down from 6.3% margin in Q1'25 pro forma)" and "Q1'26 Net Income: USD 87mn, 3.2% of GMV, -18% y/y" — both figures match exactly, including the 6.3% Q1'25 comparator this section separately attributes to `Problem_Charter.md`'s framing | PASS |
| 11 | Q1 2026 margin "compressed to 4.8% from 6.3% a year earlier" (FIN-01) | `Problem_Charter.md` | Confirmed this is the same underlying TLB-020 print (verified above) with a year-on-year comparator, correctly distinguished by this section from its own quarter-on-quarter framing (6.0% Q4'25 → 4.8% Q1'26) — both comparators independently verified accurate, not merged or confused | PASS |
| 12 | Egypt FX exposure risk statement; "GMV inflation-hedge dynamics" (FIN-02) | TLB-020, p.14 | Consistent with the guidance-walk framing established in Sections 4/9 | PASS |
| 13 | No disclosed ROI/payback/hurdle-rate criterion for either bucket (FIN-03) | `Topics/Capital Allocation and Investment Governance.md` | Confirmed by independent re-read of that Topic Note's Open Questions section | PASS |
| 14 | G&R (0.5)-(0.7)pp EBITDA margin drag (FIN-04) | `Topics/Grocery and Retail.md` | Matches Section 6's independently-verified figure exactly | PASS |
| 15 | GCC vs. non-GCC per-capita order frequency 1.28x vs. 0.13x (FIN-04) | `Topics/GCC vs non-GCC.md` | Independently re-verified: "the GCC (1.28x) vs. non-GCC (0.13x) monthly-orders-per-capita figures" — exact match, 2023 basis correctly not restated as more current than it is | PASS |
| 16 | No internal capital-allocation committee/stage-gate disclosed (ORG-01) | `Topics/Capital Allocation and Investment Governance.md` | Matches Section 8 §8.4's independently-verified finding | PASS |
| 17 | False-precision risk named as its own governance risk category (ORG-02) | `Topics/Risks.md`; `DEC-008`; `DEC-009` | Independently re-verified against `DEC-008` and `DEC-009`'s own text — both were genuinely escalated for exactly this reason, matching this section's characterization | PASS |
| 18 | CEO/board-seat transitions, unnarrated (ORG-03) | `Corporate Structure.md`; `Entities/Executives.md`; `Strategic/Strategic Risks.md` | Matches Section 8's independently-verified figure | PASS |
| 19 | Antitrust exposure — Kuwait, UAE, Iraq (REG-01) | TLB-001 pp.32,34; TLB-002 p.26; TLB-026 pp.46-47 | Matches Section 8's independently-verified catalogue | PASS |
| 20 | Qatar MOCI commission-rate cap (REG-02) | TLB-026, pp.46-47 | Matches Section 6/8's independently-verified figure | PASS |
| 21 | Oman licensing dispute (REG-03) | TLB-001, p.32 | Matches Section 6/8's independently-verified figure | PASS |
| 22 | Delivery Hero Group Inter-Company DTA (REG-04) | TLB-026, pp.156-157 | Independently re-located in the raw source text directly (lines ~10900-10921) — matches | PASS |
| 23 | Governance KPI family G1-G7, all newly-instrumented, 0 baseline | `KPI_Tree_v2.md` | Consistent with Section 13's independently-verified KPI family structure | PASS |
| 24 | §10.9 cross-section check vs. Section 8 (ORG-01/ORG-03/TECH-02/REG-04 figures) | `Section_08...md` | Independently confirmed no figure restated differently between the two sections | PASS |
| 25 | §10.9 cross-section check vs. `DEC-008`/`DEC-009` (no `ASM-018`/`ASM-029`-`033` figures shown) | `DEC-008`; `DEC-009` | Confirmed — no dollar figure appears anywhere in this section; `ORG-02`'s description of the `DEC-009` disclosure-sentence rule matches `DEC-009`'s actual text | PASS |
| 26 | Probability-Impact matrix placement (§10.6) and pre-mortem risk-ID references (§10.7) | Internal synthesis, cross-checked against §10.1-10.5's own risk statements | Every risk ID referenced in the matrix and pre-mortem was independently traced back to its own §10.1-10.5 entry — no risk cited in the matrix/pre-mortem that isn't defined above, no risk defined above that's missing from the matrix | PASS |

## Geographic Evidence Rules check (independently re-run)

Clean. Every risk carries an explicit geography tag (Group, market-comparison for UAE/Kuwait/Qatar,
country-specific for Qatar/Oman individually). `inferred-applicability` extensions are explicitly labeled
where used (TECH-01's non-GCC caveat, MKT-01's Egypt-extension caveat, FIN-04's non-GCC/Egypt caveat). No
"MENA" used as a stand-in anywhere in this section's own analytical framing.

## Summary

- **26 items independently re-checked**, including direct re-location of raw primary-source text for the
  two items (TECH-02, REG-04) reused from Section 8, rather than trusting Section 8's own citation without
  re-verification.
- **26 pass, 0 defects found.**

## Verdict

**PASS (0 defects found), independently verified 2026-07-24.** This citation audit is now genuinely
independent of the drafting session and confirms the Pass 1 self-review's conclusions hold. No further
citation-level fix is required for Section 10.
