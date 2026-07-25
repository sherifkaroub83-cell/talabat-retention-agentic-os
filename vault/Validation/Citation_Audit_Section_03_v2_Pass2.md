---
type: validation
report: Citation Audit (Pass 2 — independent)
section: 3 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_03_Market_Analysis.md
run_date: 2026-07-24
pass: 2 (independent)
verdict: PASS WITH MINOR FIXES (1 defect found and fixed)
---

# Citation Audit — Section 3 (v2, Group-wide capital-allocation draft) — Pass 2 (independent)

**Independence note.** Fresh review, not a re-read of Pass 1's own self-review
(`Citation_Audit_Section_03_v2.md`). Confirmed git checkout at commit `6e7224b6...`
(branch `claude/talabat-inputs-directory-7azjx2`) before starting. Task-specific instruction re-verified
first: Pass 1's own self-review claimed to have found and fixed two issues (chained order-frequency
figures; a TAC/GMV arithmetic error) at drafting time — both were independently re-checked below, not
just trusted.

## Method
Re-read Section 3 in full, then cross-checked every numeric claim directly against the underlying
`vault/Knowledge/Facts/*.md` consolidated-fact files (`GMV_Facts.md`, `Marketplace_Facts.md`,
`Competition_Facts.md`, `Orders_Facts.md`, `Q-Commerce.md`, `Revenue.md`), `Entities/Countries.md`,
`Topics/GCC vs non-GCC.md`, and, where the Facts files themselves quote source text, the raw extracted
source text under `vault/Knowledge/_source_text/`. Also cross-checked `Value_Driver_Tree_v2.md` for any
node-ID citation (none found in this section) and `DEC-009`/`Investment_Options_Register.md` for the
`OPT-00N` cross-references in §3.3–§3.5.

## Re-verification of Pass 1's self-reported fixes

1. **Order-frequency figures (§3.1 "Bottom-up").** Pass 1 claimed to have stopped chaining "6.7x
   (Dec'24), 6.2x (Dec'23), 6.5x (Jul'24)" into one implied trend. Independently re-checked against
   `Facts/Orders_Facts.md`: TLB-002 gives "Average orders per active user per month: 6.7, a 5% increase in
   frequency y/y" (an annual-average-with-%-change figure); TLB-001 gives "6.7x in December 2024 vs 6.2x
   in December 2023" (a December point-in-time calculation); TLB-015 gives "6.5x per active customer (July
   2024)" (a separate point-in-time figure). These are three different measurement bases. The current
   section text presents all three separately with the explicit caveat "not necessarily the same
   measurement basis" — **confirmed fixed, holds up under independent re-check.**
2. **TAC/GMV arithmetic (§3.1 "Reconciliation").** Pass 1 claimed to have corrected a denominator error
   (originally "~11x" using the wrong denominator). Independently recomputed: USD 104bn TAC ÷ USD 9.5bn
   Group GMV ≈ 10.9x — the current text's ">10x talabat's entire Group GMV across both verticals combined"
   is arithmetically correct. Separately, USD 104bn ÷ USD 2.77bn G&R-GMV (TLB-002 figure) ≈ 37.5x, and
   USD 104bn ÷ USD 3.5bn G&R-GMV (TLB-014 figure) ≈ 29.7x — the current text correctly does **not** state
   either of these ratios as "the" G&R-specific multiple, instead noting the G&R GMV figure itself carries
   two disclosed values. **Confirmed fixed, holds up under independent re-check.**

## New defect found in this Pass 2 (not caught by Pass 1)

**The "18–21% of Group GMV" non-GCC figure silently blended two different reporting periods**, appearing
three times (Answer; §3.3 Opportunities; §3.4). Independently traced both numbers to source:
- **18%** = FY2025 full-year figure: `Facts/GMV_Facts.md`, TLB-019: "GMV by geography FY2025: ... Non-GCC
  USD 1,719mn (+57% y/y, 18% contribution)."
- **21%** = Q1 2026 quarterly figure: `Topics/GCC vs non-GCC.md`, sourced to TLB-011: "Q1 2026 non-GCC GMV
  +52% y/y at 21% of Group GMV, up from 16% a year earlier (TLB-011, page 2)."

These are not the same measurement period — 18% is a FY2025 annual figure, 21% is a Q1 2026 quarterly
figure with its own, different growth rate (+52% y/y, not the +57% y/y the section paired it with). The
original text presented "18–21%" as if it were a single coherent range, without disclosing that the two
numbers come from different periods — the same kind of silent period-mixing this section's own stated
discipline explicitly avoids elsewhere (e.g. the order-frequency figures, the GCC 82%/81% GMV-table
tension). This is a genuine, independently-found Financial Integrity / Geographic Evidence Gate issue
(time period silently mixed under one label) that Pass 1's self-review did not catch.

**Fixed in this Pass 2**, directly in `Section_03_Market_Analysis.md`, at all three occurrences: each now
states "18% of Group GMV in FY2025, rising to 21% by Q1 2026" (or equivalent explicit phrasing) with both
citations (TLB-019 p.14; TLB-011 p.2) attached, and a new row was added to the Traceability table making
this explicit as its own citable claim, separate from the FY2025-only growth-rate row it had previously
been folded into.

## Full re-verification of all other claims (spot-checked directly against Facts/primary text, not just re-trusting Pass 1)

| Claim | Independently re-verified against | Result |
|---|---|---|
| 192mn population / 75mn addressable population | `Entities/Countries.md` ("combined population of over 192 million and an addressable population of approximately 75 million," per TLB-002); `Facts/Marketplace_Facts.md` TLB-014 ("75mn addressable population") | Pass |
| Category share 1x+–10x+ | `Facts/Competition_Facts.md` (TLB-001 "2x-10x+"; TLB-002 "Bahrain 1x+... Qatar 10x+"; TLB-014 "1x+ (Iraq)... to 10x+") | Pass — fair compression across three documents |
| Foodservice ~20-25%; grocery/retail ~1-3% | `Facts/Marketplace_Facts.md` (TLB-001 "~20-25%... ~1-2%"; TLB-002 "roughly 20-25%... 2-3%") | Pass — fair compression, non-overstated |
| Grocery TAC ~USD104bn, ~3% adoption | `Facts/Q-Commerce.md` (TLB-014: "Grocery TAC c.$104bn in 2025, with only 3% customer adoption and $3.5bn 2025 GMV") | Pass |
| G&R "USD150bn+ TAM" | `Facts/Q-Commerce.md` (TLB-014 and TLB-020 both state this verbatim) | Pass |
| tMart TAC <1.5% (Redseer) | `Facts/Q-Commerce.md` (TLB-019: "<1.5% TAC... per Redseer analysis") | Pass |
| FY2025 GMV USD9.5bn, ~7.7mn customers, ~585mn orders, ~84k Partners | `Facts/GMV_Facts.md` (TLB-019, TLB-002) | Pass |
| GCC 82% of pro-forma FY2025 GMV (USD6,332mn) vs. TLB-019's 81%/USD7,702mn — tension | `Facts/GMV_Facts.md` (TLB-002: "82% of GMV vs. 85% in 2024"; TLB-019: "GCC USD 7,702mn... 81% contribution") | Pass, tension genuinely exists and is correctly flagged, not silently resolved |
| Food USD6,652mn vs. G&R USD2,768mn FY2025 | `Facts/GMV_Facts.md` (TLB-019/TLB-002) | Pass |
| talabat pro GMV share 32%→49% (Q1'25→Q1'26) | `vault/Forecasts/Value_Driver_Tree_v2.md` N-08 ("subscriber GMV share rises from ~32% (Q1 2025) to ~49% (Q1 2026)") | Pass — correct, current time-period labels |
| Multi-vertical GMV share 68%→73%→76% (Dec'24→Dec'25→Mar'26) | `Value_Driver_Tree_v2.md` N-11 (identical dates) | Pass |
| Jordan/Iraq never individually disclosed | `Topics/GCC vs non-GCC.md` Open Questions | Pass |
| AI/personalisation EBITDA >USD14mn→>USD30mn | `Topics/EBITDA.md`; `Value_Driver_Tree_v2.md` N-06 | Pass |
| Egypt segment FY2025 (revenue/gross profit/net profit) | `Facts/Marketplace_Facts.md` (TLB-002, page 111 — exact figures match) | Pass |
| Egypt ~81% y/y Q1 2026 revenue growth | `Entities/Countries.md` ("Q1 2026 segment revenue USD 145.3m... vs. restated Q1 2025 USD 80.3m... ~81% YoY") | Pass |
| Non-high-value M1 retention -4% y/y, UAE/Kuwait/Qatar | `Facts/Competition_Facts.md` (TLB-019: "Non-high-value customer M1 retention declined -4% y/y in competitive markets (UAE, Kuwait, Qatar)") | Pass |
| Group EBITDA margin 6.0%→4.4-4.8% guided, 4.8% actual Q1'26 | `Topics/Risks.md`; source text `20260512_talabat-Q1-2026-Results-Presentation.txt` (line 418: "4.4%-4.8%") | Pass |
| Only Deliveroo/Careem/noon/Jahez/Snoonu named in corpus | `Facts/Competition_Facts.md` (TLB-026 only) | Pass |
| Meituan comparator, external/non-MENA | `Facts/Competition_Facts.md` (TLB-015: "72% category share (2022) and 90.0x monthly orders per capita vs talabat group average 0.4x") | Pass, correctly tagged external |
| Egypt category share 10x+ vs. 1x+→4x+ (unreconciled) | `Facts/Competition_Facts.md` (TLB-001/TLB-002 "10x+"; TLB-014 "1x+ (Iraq, at IPO) to 10x+... Egypt at 1x+ (IPO) rising to 4x+ (YE'25)") | Pass, genuine unreconciled conflict, correctly presented as such |
| GCC vs. non-GCC per-capita order frequency 1.28x vs. 0.13x | `Facts/Orders_Facts.md` (TLB-015/TLB-026: "Monthly orders per capita: GCC 1.28x, Non-GCC 0.13x") | Pass |
| No `Value_Driver_Tree_v2.md` node-ID citation anywhere in this section | Direct text search (`N-\d\d` pattern) | Confirmed — zero matches; the node-ID mis-citation defect that recurred in Sections 4 and 5 does not apply here because this section never cites a node ID |

## Geographic Evidence Rules check

Confirmed clean, with one exception now fixed (the 18%/21% period-mixing issue above, which is also a
Geographic Evidence Gate issue — a geography-tagged claim whose time period did not match its own stated
range). No other Failure Pattern 1–6 instance found. "MENA" is never used as a stand-in anywhere in the
section (confirmed by text search). The pre-/post-FY2025 non-GCC segment-reporting boundary is respected
throughout — every non-GCC figure used is the post-carve-out (Jordan+Iraq-only) definition.

## Summary

- **38 traceability-table rows checked** (plus the newly-added 39th row for the 18%/21% figure).
- **37 pass cleanly** on independent re-verification (including the two issues Pass 1 claimed to have
  fixed, both re-confirmed as genuinely fixed).
- **1 new defect found and fixed in this Pass 2**: the "18–21% of Group GMV" figure silently blended a
  FY2025 annual data point with a Q1 2026 quarterly data point.
- **0 missing-citation failures.**

## Verdict

**PASS WITH MINOR FIXES.** One defect found and fixed directly in `Section_03_Market_Analysis.md`,
cross-checked against `Facts/GMV_Facts.md` and `Topics/GCC vs non-GCC.md`. All other claims, including
both of Pass 1's self-reported fixes, independently re-verified and confirmed accurate.

## See also
[[Section_03_Market_Analysis]] · [[QA_Review_Section_03_v2_Pass2]] · `.claude/skills/citation-audit/SKILL.md`
