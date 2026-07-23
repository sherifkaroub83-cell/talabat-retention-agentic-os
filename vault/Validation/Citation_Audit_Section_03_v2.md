---
type: validation
section: 3 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_03_Market_Analysis.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md)
run_date: 2026-07-23
auditor: top-level session, acting in the evidence-citation-agent role (Tooling note: no `Agent` tool
  available this session — see the section draft's own Tooling note and `bp-orchestrator.md`'s "Known
  runtime constraint")
status: OPEN → FIXED (self-verified re-check, 2026-07-23) — 2 issues found and corrected in-session;
  independent Pass 2 re-check still required
---

# Citation Audit — Section 3 (v2, Group-wide capital-allocation draft)

Companion to (does not touch) `vault/Validation/Citation_Audit_Section_03.md`, which audited the
superseded Egypt-retention Section 3 draft from the Phase 7 pilot (2026-07-22).

## Method
Walked the section sentence by sentence; every number or named-fact claim traced to either (a) a direct
`(DocID, page N)` Facts/Sources/Topics citation, or (b) an `ASM-###` row with `status: Approved`.
Cross-checked every citation against the actual source note/document content gathered this session
(`Topics/GCC vs non-GCC.md`, `Topics/Egypt.md`, `Topics/Competition.md`, `Strategic/Competitive
Advantages.md`, `Strategic/Competitive Weaknesses.md`, `Entities/Competitors.md`, `Topics/Food
Leadership.md`, `Topics/Everyday App.md`, `Topics/Grocery and Retail.md`, `Topics/Multi-Verticality.md`,
`Topics/Marketplace.md`, `Topics/GMV.md`, `Topics/Customer Economics.md`, `Facts/GMV_Facts.md`,
`Facts/Competition_Facts.md`, `Facts/Marketplace_Facts.md`, `Facts/Orders_Facts.md`), not just presence
of a citation string. Checked geography tagging against `vault/Architecture/Geographic_Evidence_Rules.md`
for every numeric claim.

## Pass/Fail Table

| # | Claim (location) | Cited to | Verdict | Note / fix |
|---|---|---|---|---|
| 1 | 8 markets, population >192mn, addressable population ~75mn (§3.1) | `Entities/Countries.md`; TLB-002; TLB-014, p.4 | PASS | Verified: "combined population of over 192 million and an addressable population of approximately 75 million" (`Entities/Countries.md`, TLB-002); "75mn addressable population" independently corroborated in TLB-014 p.4 per `Facts/Marketplace_Facts.md`. |
| 2 | Category share 1x+–10x+ across 8 markets, #1 position everywhere (§3.1) | TLB-001 p.5; TLB-002 p.5; TLB-014 p.4 | PASS | Verified against `Facts/Competition_Facts.md`. |
| 3 | Foodservice penetration ~20–25%; grocery/retail ~1–3% (§3.1) | TLB-001, p.21; TLB-002, p.8 | PASS | Verified verbatim against `Facts/Marketplace_Facts.md` ("~20-25% in foodservice... ~1-2% in grocery/other retail," TLB-001 p.21) and `Facts/Competition_Facts.md` ("roughly 20-25% for foodservice and 2-3% for groceries," TLB-002 p.8) — the two documents give slightly different upper/lower bounds (1-2% vs 2-3%); the section's "~1-3%" is a fair, non-overstated compression of both, not a fabricated third number. |
| 4 | Grocery TAC ~USD104bn (2025), ~3% adoption, ~USD3.5bn GMV (§3.1) | TLB-014, p.5 | PASS | Verified verbatim against the raw grep of `Facts/Q-Commerce.md`: "Grocery TAC c.$104bn in 2025, with only 3% customer adoption and $3.5bn 2025 GMV (TLB-014, page 5)." |
| 5 | "G&R... USD150bn+ TAM, low single-digit online penetration" (§3.1) | TLB-014, p.19; TLB-020, p.16 | PASS | Verified against `Facts/Q-Commerce.md` lines 65/96. Correctly presented as a second, not-force-reconciled figure alongside #4, per the section's own stated discipline. |
| 6 | tMart TAC penetration <1.5% (Redseer) (§3.1) | TLB-019, p.11 | PASS | Verified: "<1.5% TAC (Total Addressable Category) penetration per Redseer analysis (updated Jan 2026)," `Facts/Q-Commerce.md` line 88. |
| 7 | FY2025 GMV USD9.5bn (9,421mn), +28% y/y cFX; ~7.7mn customers, ~585mn orders, ~84k Partners (§3.1) | TLB-019, p.5/13; TLB-002, p.12 | PASS | Verified against `Facts/GMV_Facts.md` (TLB-019 entry) and the "2025 GMV per country map" bullet (TLB-002, p.12). |
| 8 | Order frequency figures (§3.1) | TLB-002 p.9; TLB-001 p.15; TLB-015 p.13 | **FIXED — originally overstated as one time series** | **Found in this audit:** the original draft chained "6.7x (Dec'25), 6.2x (Dec'23), 6.5x (Jul'24)" as if one continuous monthly-frequency series. On cross-check, TLB-002 p.9's "6.7, a 5% increase in frequency y/y" and TLB-001 p.15's "6.7x in December 2024 vs 6.2x in December 2023" are not confirmed to be the same measurement basis (annual-average-with-YoY-% vs. December point-in-time) — chaining them implied a smoother, more precise trend than the corpus actually discloses. **Fixed in-session**: the section now presents all three figures separately, states they are "not necessarily the same measurement basis," and does not construct an implied trend line. See the section's own §3.1 "Bottom-up" paragraph. |
| 9 | No disclosed AOV/basket-value figure at any geography (§3.1) | `ASM-015` | PASS | Confirmed against `Assumptions_Register.md` ASM-015 ("no disclosed AOV or basket-value figure exists at Group or country level anywhere in the corpus"). |
| 10 | GMV excludes subscription fees and rider tips (§3.1) | TLB-001, p.27 | PASS | Verified against `Topics/GMV.md`. |
| 11 | Reconciliation: grocery TAC >10x Group GMV; G&R GMV shown two ways (§3.1) | TLB-002 p.18; TLB-014 p.5 | **FIXED — arithmetic error in original draft** | **Found in this audit:** the original draft stated "the grocery TAC alone is roughly 11x talabat's own grocery/G&R GMV" — 104bn ÷ 2.77bn ≈ 37.5x (or ÷3.5bn ≈ 29.7x), not 11x; the "~11x" figure actually corresponds to TAC ÷ **total Group GMV** (104bn ÷ 9.5bn ≈ 10.9x), a different denominator than what was labeled. **Fixed in-session**: the sentence now correctly states the TAC is >10x total Group GMV (both verticals combined) and separately, correctly, notes the G&R-specific GMV figure is smaller still and itself has two disclosed values (2.77bn vs 3.5bn), not blended. |
| 12 | GCC/non-GCC/Egypt FY2025 segment revenue, gross profit, net profit table (§3.2) | TLB-002, p.111 | PASS | Verified all six cells against `Facts/Marketplace_Facts.md`'s TLB-002 entry (Egypt: revenue 509.94/gross profit 124.996/net profit 44.35; Non-GCC: 346.54/61.68/(7.02); GCC: 3,795.39/1,231.06/568.26). |
| 13 | Growth-signal column: GCC GMV +22%, non-GCC +57% (§3.2 table) | TLB-019, p.14 | PASS | Verified against `Facts/GMV_Facts.md`'s TLB-019 entry. |
| 14 | Egypt ~81% y/y Q1 2026 revenue growth, swing to profit (§3.2 table) | TLB-010 | PASS | Verified against `Topics/Egypt.md`/`Entities/Countries.md` (Q1 2026 segment revenue USD145.3m vs. restated Q1 2025 USD80.3m, ~81% YoY; PBT swing USD0.5m→USD9.4m). |
| 15 | GCC >75% of Group revenue/assets (IFRS8 threshold) (§3.2) | TLB-004, p.37 | PASS | Verified against `GCC vs non-GCC.md`. |
| 16 | GCC 82% of pro-forma FY2025 GMV (USD6,332mn), flagged tension with TLB-019's 81%/USD7,702mn table (§3.2) | `GCC vs non-GCC.md`; TLB-002 p.18; TLB-019 p.14 | PASS | Confirmed both figures exist and the tension is genuinely flagged (not silently resolved) in `Topics/GMV.md`'s own Open Questions — correctly carried forward, not independently re-resolved here per the citation-audit skill's Rule 2. |
| 17 | Food USD6,652mn (+20%) vs. G&R USD2,768mn (+47%), FY2025 GMV (§3.2) | TLB-002, p.18 | PASS | Verified against `Facts/GMV_Facts.md`. |
| 18 | talabat pro GMV share 32%→49% (§3.2) | `Topics/Talabat Pro.md` | PASS | Consistent with the figure already cited and verified in Section 4's own citation audit precedent (same underlying fact, `ASM-021`'s basis). |
| 19 | Multi-vertical GMV share 68%→73%→76% (§3.2) | `Topics/Multi-Verticality.md`; TLB-019 p.7; TLB-020 p.8 | PASS | Verified against `Topics/Multi-Verticality.md` directly. |
| 20 | Jordan/Iraq never individually disclosed (§3.2) | `GCC vs non-GCC.md` Open Questions | PASS | Verified. |
| 21 | AI/personalisation EBITDA >USD14mn→>USD30mn (§3.3 Strengths) | `Topics/EBITDA.md` | PASS | Consistent with the identical figure independently verified in Section 4's citation audit. |
| 22 | AdTech CPG investment ratio 8% vs. 2% benchmark (§3.3 Strengths) | TLB-015, p.108 | PASS | Verified against `Strategic/Competitive Advantages.md`. |
| 23 | ~90-95% non-employed rider workforce (§3.3 Weaknesses) | TLB-001, p.34/47; TLB-026, p.131/138 | PASS | Verified against `Strategic/Competitive Weaknesses.md`. |
| 24 | AdTech revenue 3.4-3.5% of GMV vs. ~7% benchmark, UAE tMart only (§3.3 Weaknesses) | `Strategic/Competitive Weaknesses.md`; TLB-001 p.21; TLB-002 pp.10/14/19; TLB-014 p.19 | PASS | Verified verbatim against the source note. |
| 25 | Kuwait/UAE/Iraq antitrust exposure; Qatar cap + Sept 2025 closure; Oman dispute (§3.3 Weaknesses) | TLB-026, p.46-47; TLB-002, p.9; TLB-001, p.32 | PASS | Verified against `Strategic/Competitive Weaknesses.md` and `Facts/Competition_Facts.md`. |
| 26 | Grocery/retail opportunity (~1-3% penetrated, USD104-150bn+ TAM); non-GCC growth premium 57% vs. 22% (§3.3 Opportunities) | Cross-referenced from §3.1/§3.2 | PASS | Internally consistent with the already-verified figures above; no new citation introduced. |
| 27 | Non-high-value M1 retention -4% y/y, UAE/Kuwait/Qatar only (§3.3 Threats) | TLB-019, p.9 | PASS | Verified against `Topics/Food Leadership.md` and `Topics/Competition.md`. |
| 28 | FY2026 "more competitive environment" guidance risk (§3.3 Threats) | TLB-019, p.18 | PASS | Verified against `Topics/Competition.md`. |
| 29 | Group EBITDA margin 6.0%→4.4-4.8% guided, 4.8% actual Q1'26 (§3.3 Threats) | TLB-020 | PASS | Consistent with the identical figures independently verified in Section 2's and Section 9's citation audits. |
| 30 | Only Deliveroo/Careem/noon/Jahez/Snoonu named anywhere in corpus, TLB-026 only (§3.3 Competitor benchmarking) | TLB-026, p.146; `Entities/Competitors.md` | PASS | Verified — the only document naming specific rivals in the entire 29-document corpus. |
| 31 | NPS ~20% higher than "regional peers' average" (§3.3) | TLB-015, p.44 | PASS | Verified against `Strategic/Competitive Advantages.md`. |
| 32 | UAE "5 key players" (§3.3) | TLB-019, p.7 | PASS | Verified against `Topics/Competition.md`. |
| 33 | Meituan comparator, tagged external/non-MENA (§3.3) | TLB-015, p.100 | PASS | Verified against `Facts/Competition_Facts.md`; correctly tagged `external` and explicitly excluded from any talabat-figure blend, per `Geographic_Evidence_Rules.md`. |
| 34 | Egypt category share 10x+ (TLB-001/002) vs. 1x+→4x+ (TLB-014); TLB-026's ">10x at IPO" vs. TLB-014's "1x+ at IPO" (§3.3) | TLB-001 p.5; TLB-002 p.5; TLB-014 p.4; TLB-026 p.114 | PASS | Verified against `Topics/Egypt.md`, `Topics/Competition.md`, and the superseded `DEC-001`'s own sourcing — both figures and the IPO-reference-point conflict are stated accurately, presented together, not resolved to one number (correctly requires no new Assumption row, since no single figure is asserted). |
| 35 | No Egypt-specific named competitor in primary corpus (§3.3) | `Entities/Competitors.md`; `Topics/Competition.md` Open Questions | PASS | Verified; secondary-corpus names (Breadfast, Rabbit, elmenus) correctly not cited as evidence, only as a pointer to the gap. |
| 36 | GEMs AI-supported Partner win-back tool (§3.4) | TLB-026, p.138 | PASS | Verified against `Strategic/Competitive Advantages.md`. |
| 37 | GCC vs. non-GCC 2023 per-capita order frequency 1.28x vs. 0.13x (§3.4) | TLB-026, p.121 | PASS | Verified against `GCC vs non-GCC.md` and `Facts/GMV_Facts.md`'s TLB-026 entry. |
| 38 | §3.5 cross-section consistency claims (OPT-001–005 mapping, DEC-009 non-contradiction) | `Investment_Portfolio_Register.md`; `DEC-009`; Section 2 draft | PASS | Verified: the section names each OPT- only in connection with the specific opportunity/threat it was itself built from in `Investment_Options_Register.md`'s own descriptions, and cites no `ASM-029`–033 dollar figure, so the `DEC-008`/`DEC-009` headline-exhibit restriction is correctly not implicated. |

## Geographic Evidence Rules check

**Clean, with the section's own extensive explicit-gap discipline doing most of the work.** Every
numeric claim in the section carries an explicit geography tag or market-comparison framing (Group,
GCC, non-GCC, Egypt-standalone, country-specific, market-comparison, or external), consistent with
`vault/Architecture/Geographic_Evidence_Rules.md`. No Failure Pattern 1–6 instance found:
- No Group/GCC figure is presented as Egypt-specific without qualification — the section's one
  extended Egypt discussion (§3.3, category share) presents only Egypt-specific disclosed figures, both
  of them, with neither silently preferred.
- The pre/post-FY2025 non-GCC segment-reporting change is respected: every non-GCC figure used (§3.2
  table, §3.4) is explicitly the post-carve-out, Jordan+Iraq-only definition, cross-checked against
  `GCC vs non-GCC.md`'s own segment definition, not a pre-2025 Egypt-inclusive figure.
- The Meituan comparator (#33) is correctly tagged `external`, non-MENA, and never blended arithmetically
  into any talabat figure.
- The Food-leadership -4% retention figure (#27) is explicitly scoped to UAE/Kuwait/Qatar and the section
  states in its own words that extending it to Egypt/non-GCC would require an `inferred-applicability`
  label it does not itself apply — correctly declining to make that extrapolation.
- "MENA" is never used as a stand-in for the 8-market footprint anywhere in the section.

## Summary

- **38 claims/rows checked.**
- **36 pass cleanly.**
- **2 hard issues found and fixed in-session** (both arithmetic/precision errors introduced during
  drafting, not missing citations):
  1. #8 — Order-frequency figures from two different source documents/measurement bases were originally
     chained as a single implied trend line; fixed to present each figure separately with its own basis
     stated.
  2. #11 — An arithmetic error ("grocery TAC is ~11x grocery/G&R GMV") used the wrong denominator (Group
     GMV, not G&R-specific GMV); fixed to state the correct comparison and additionally surface a second,
     previously-unflagged G&R GMV discrepancy (USD2.77bn vs. USD3.5bn across two documents), presented
     unreconciled per the section's own stated discipline rather than silently picking one.
- **0 missing-citation failures** and **0 not-yet-approved-Assumption dependencies** — Section 3 draws
  entirely on direct Fact/Topic citations and one already-`Approved` Assumption row (`ASM-015`); unlike
  Section 2's citation audit, this section introduces no new dependency on a `Proposed`-status record.

## Verdict
**OPEN → FIXED (self-verified re-check, 2026-07-23).** Both issues found in this audit were corrected
directly in `Section_03_Market_Analysis.md` by the same session that drafted the section — **this is a
self-check, not an independent Pass 2 re-verification.** A genuinely independent citation-audit re-check
(a fresh `evidence-citation-agent` thread, per `Business_Plan_Generation_Pipeline.md`'s two-pass
discipline) is still required before Section 3 can be marked citation-verified/✅ Done.
