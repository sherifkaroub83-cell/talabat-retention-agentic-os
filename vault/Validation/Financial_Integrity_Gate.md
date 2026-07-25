---
report: Financial Integrity Gate
run_date: 2026-07-25
scope: "whole plan (14 sections)"
verdict: PASS
---

# Financial Integrity Gate — 2026-07-25 (independent re-run)

**Scope of this run:** Sections 1-14 of `vault/Projects/Business_Plan_Drafts_v2/` (Section 1 Executive
Summary through Section 14 Appendices), read in full, fresh, with no reliance on any prior gate run's
conclusions. This run specifically re-verifies the fix reported for the prior FAIL (run_date 2026-07-25,
now superseded and recoverable from git history): `Section_02_Business_Description.md` §2.3 and its
Traceability table previously stated the FY2026 Adjusted EBITDA margin guidance as an uncited single point
("6.0%→4.6% of GMV") where Sections 1, 3, 4, 9, 10, 12, and 14 correctly used the disclosed range
("4.4-4.8% of GMV").

**Section 2 fix — independently confirmed to HOLD.** Current `Section_02_Business_Description.md` §2.3
reads: "...the programme's own disclosure already separates a quantified cost (the FY2026 Adjusted EBITDA
margin bridge, **4.4-4.8% of GMV guided**) from an entirely undisclosed return..." — and its own
Traceability table (partial) now reads: "FY2026 EBITDA margin bridge 4.4-4.8% of GMV guided | TLB-020,
page 16; `Topics/EBITDA.md`; `Section_09_Financial_Plan.md` §9.3" — i.e. it now also cites Section 9's
headline exhibit, not just `Topics/EBITDA.md` alone, as the fixing session reported. A plan-wide grep for
"4.6%" across all 14 current section drafts returns matches only inside Section 2's and Section 4's own
frontmatter status lines (both describing the historical defect and its fix as provenance record, not live
body content) — no live occurrence of the single-point "6.0%→4.6%" framing remains anywhere in the plan.
Sections 1, 3, 4, 9, 10, 12, and 14 were independently re-read in full for this run (not merely
spot-checked) and all state "4.4-4.8% of GMV" identically for this same disclosed fact.

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Allocation totals reconcile (any bucket-level figures sum to the stated USD175mn total, or the discrepancy is explained) | Pass | USD175mn = ~USD120mn Everyday App + ~USD55mn Food-leadership stated identically in Sections 1, 2, 3 (context), 9, 11, 14, and independently confirmed against `Investment_Portfolio_Register.md` (lines 23-24, 40) and TLB-020 p.16. Section 14 §14.3's five `OPT-001`–`005` base-case cost ranges (Everyday App-attributed: OPT-001/002/004/005 ≈ USD71-94mn against a ~USD120mn bucket; Food-leadership: OPT-003 USD25-32mn against a ~USD55mn bucket) fit within, and are not asserted to exhaustively sum to, either bucket — both the non-additive (AI/personalisation and advertising overlap) and partial-coverage caveats are stated verbatim, matching `Investment_Portfolio_Register.md`. No section states a different sub-split. |
| 2 | Scenario arithmetic is internally consistent (base/upside/downside figures move in a coherent direction relative to each other and to their stated drivers) | Pass | Section 9 §9.3's base/upside/downside table (GMV, revenue, EBITDA margin, FCF margin all moving in the same direction per scenario) is not restated with different figures anywhere else in the plan. Section 1 and Section 10's downside framing ("-9% y/y" EBITDA, absolute-dollar, not percentage-point) matches Section 9's downside cell exactly — re-verified by direct read of all three sections this run, not inherited from any prior report. |
| 3 | Units are consistent within each exhibit (no silent mixing of USD millions with GMV percentage-points, or absolute figures with growth rates, without a stated conversion) | Pass | No instance found, on a fresh full read of all 14 sections, of USD mn silently mixed with GMV-percentage figures in one exhibit. Section 6 §6.2's tMart "~95% take rate" is explicitly flagged on first use as a GMV-to-revenue conversion rate, not a margin, and this caveat is not contradicted elsewhere (Section 6 §6.4 repeats the same distinction against the separately-disclosed (0.5)-(0.7)pp G&R EBITDA-margin-drag figure). |
| 4 | Currency is stated and consistent (USD throughout unless a local-currency figure is explicitly flagged, per the corpus's own EGP/AED conventions) | Pass | USD is the default currency throughout all 14 sections. The only local-currency figures found on this fresh read — AED 194/AED 814 monthly spend (Section 6 §6.4, paired with USD 53/USD 222 on first use) and AED 1,567.7mn Partner savings (Section 7 §7.2, paired with the "7% of GMV" USD-denominated context) — are explicitly paired with a USD-equivalent or traceable AED origin, never restated in USD later without that origin. |
| 5 | Time periods are stated and not silently mixed (FY2024 vs. FY2025 vs. FY2026 guidance vs. Q1 2026 actuals are never blended into one figure without saying so) | Pass | FY2024/FY2025 historicals, FY2026 guidance, Q4 2025 (6.0%) and Q1 2026 (4.8%) actuals are kept separate and explicitly labeled across Sections 1, 3, 9, and 10. Section 10 §10.3 explicitly carries both a year-on-year comparator (`Problem_Charter.md`'s "4.8% from 6.3% a year earlier") and a quarter-on-quarter comparator (this section's own "6.0% Q4 2025 baseline") for the identical Q1 2026 4.8% print, stated as two non-contradictory framings, not merged. Section 3's non-GCC "18% (FY2025) → 21% (Q1 2026)" figure is presented as two dated data points throughout (Sections 1, 3), never a blended range. |
| 6 | Percentage logic is correct (a percentage-of-GMV figure is not treated as a percentage-of-revenue figure, or vice versa; no percentage-point vs. percentage confusion) | Pass | GMV-percentage figures (EBITDA margin, advertising penetration, CARC, G&R margin drag) and revenue-percentage figures (take rate, fee-type mix) are kept distinct throughout, re-verified section by section. Section 9/10's "-9% year-on-year" (absolute EBITDA-dollar decline) is not conflated with a "-9pp" percentage-point framing anywhere in the current text of either section. |
| 7 | No double counting (a single investment dollar or a single uplift effect is not counted toward two different outcomes as if additive) | Pass | No section constructs an additive dollar total beyond Section 14 §14.3's explicitly non-additive exhibit (Check 1 above). Section 6 §6.1 flags, rather than silently resolves, the "Subscription fee & Other Income" combined-line attribution tension between `OPT-002` and `OPT-001` as an open question. Section 7 §7.6 similarly flags, rather than silently resolves or double-counts, the unreconciled CARC-vouchering (USD89mn) vs. Section 6's contra-revenue "Vouchers and other discounts" (USD(120)mn) figures — stated as an open corpus reconciliation gap, not asserted to be additive or identical. |
| 8 | No additive stacking of overlapping retention/frequency uplift statistics (e.g. talabat pro's uplift and Rewards' uplift are not simply summed without justification) | Pass | talabat pro (20-28% frequency / 26-32% retention uplift), multi-vertical engagement (13.0x vs. 3.8x order frequency), Rewards (+15%), and PostPaid (+14%) are each cited individually across Sections 3, 4, 6, and 7, and are never summed into a combined percentage anywhere in the plan. Section 7 §7.4 explicitly separates the mono-vertical (+16pp) vs. multi-vertical (+20pp) subscriber uplifts as a stated interaction effect, not an additive stack. |
| 9 | Revenue, GMV, gross profit, and EBITDA are never mixed or substituted for one another in a single claim | Pass | Section 6 §6.1's MECE revenue-stream table and §6.4's unit-economics discussion keep GMV, revenue, gross profit, and EBITDA as four distinct lines throughout; Section 9 §9.3's scenario table keeps GMV growth, revenue growth, Adjusted EBITDA margin, and FCF margin as four separate columns. No section substitutes one for another in a single claim, confirmed on this fresh read. |
| 10 | Every financial figure presented as a single point estimate is either a disclosed fact or explicitly labeled as an approved assumption/forecast with its confidence level — no unlabeled false precision | Pass | The Section 2 defect from the prior run is confirmed fixed (see above) and not reintroduced anywhere. A fresh scan of all 14 sections found no other unlabeled single-point construction: Section 9 §9.5's `ASM-015`–`028` are each confidence-rated; Section 14 §14.3's `OPT-001`–`005` ranges are ranges (not points) and carry the mandatory "not a disclosed talabat allocation" sentence; `ASM-020`'s Egypt ≈USD19.3mn pro-rata figure is explicitly labeled "illustrative worked-example only, not a budget line" (Section 9 §9.5); Section 7's synthetic funnel percentages are explicitly labeled SYNTHETIC throughout, not blended with disclosed figures. |
| 11 | `DEC-008`'s constraint is respected where applicable (Section 9/12/13 headline exhibits show the Group base case only; the Everyday App/Food-leadership bucket split, if referenced at all, is narrative-only, never a quantified sub-case) | Pass | Section 9 §9.3's headline table is Group-level only, with an explicit no-breakout statement. Section 12 references the funding sequence narratively, with no dollar figures. Section 13 carries no bucket-level or 2.2:1 quantified breakdown. Section 14 §14.3 remains the sole, explicitly-labeled home for the `OPT-001`–`005` sensitivity exhibit. `ASM-018`'s ~2.2:1 split is argued narratively only in Section 4 §4.1, per `DEC-008`, never as a quantified exhibit. |

## Verdict

**PASS.** All eleven checks pass at whole-plan scope on this fresh, independent re-run. The Section 2
defect identified in the prior run (2026-07-25) is confirmed genuinely fixed — both the §2.3 body text and
the Traceability table now state "4.4-4.8% of GMV guided," matching Sections 1, 3, 4, 9, 10, 12, and 14
exactly, and the traceability row now additionally cites `Section_09_Financial_Plan.md` §9.3 alongside
TLB-020/`Topics/EBITDA.md`. A full re-read of all 14 sections found no new hard-precision, unit-mixing,
double-counting, or DEC-008-violation defect that this run's fixing-session account did not already
disclose. No further finding is raised.

## See also
- `vault/Decisions/Investment_Portfolio_Register.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`
- `DEC-008`
- `.claude/agents/qa-review-agent.md`
