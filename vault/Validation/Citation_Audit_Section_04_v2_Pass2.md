---
type: validation
section: 4 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_04_Value_Proposition.md
pipeline_stage: Independent Pass 2 citation re-check (per bp-orchestrator.md "Known runtime constraint")
run_date: 2026-07-24
auditor: independent Pass 2 reviewer (fresh thread, no memory of drafting)
status: FAIL — two hard citation failures found (first citation audit ever run on this section); fixes
  are narrow and targeted, not a full redraft
---

# Citation Audit — Section 4 (v2), Independent Pass 2

## Independence note
No prior citation audit exists for this section (`Citation_Audit_Section_04_v2.md` was never created
— confirmed by search before starting). This is therefore the section's **first** citation audit, not
a re-check of someone else's work. Tools used: Read, Grep, Write.

## Method
Same as Section 2's Pass 2: walked the section sentence by sentence; opened every cited vault note
directly (`Topics/`, `Facts/`, `vault/Forecasts/Value_Driver_Tree_v2.md`, `Business_Relationships.md`,
`Assumptions_Register.md`, `Investment_Relationship_Map.md`, `KPI_Tree_v2.md`) and confirmed the
number/quote and, critically, the **specific node ID or chain** cited actually contains the claimed
content — not just that the target document exists.

## Hard failures

### Failure 1 — Wrong Value Driver Tree node IDs cited for the multi-vertical mechanism (§4.2, and repeated in the Traceability table)
**Text (§4.2):** "Multi-vertical customers show 13.0x order frequency vs. 3.8x for food-only customers
(`Topics/Multi-Verticality.md`), and multi-vertical GMV share has risen 68%→73%→76% across
Dec'24→Dec'25→Mar'26 (`Value_Driver_Tree_v2.md` **N-19/N-20**)."

**Traceability table, row 1:** "Multi-vertical 13.0x vs. 3.8x order frequency | `Topics/Multi-Verticality.md`;
`Value_Driver_Tree_v2.md` **N-19/N-20**"

I opened `vault/Forecasts/Value_Driver_Tree_v2.md` and checked N-19 and N-20 directly:
- **N-19** is "Basket size named as an Everyday App outcome, but not quantified anywhere in the
  corpus" (`ASSUMPTION → ASM-015`) — a completely different claim, about basket/AOV, not multi-vertical
  frequency or GMV share.
- **N-20** is "talabat pro retention uplift: +26% to +32% vs. lookalike non-subscribers" — also a
  completely different claim, about talabat pro's retention effect, not multi-vertical GMV share.

**Neither node contains the 13.0x/3.8x frequency figure or the 68%→73%→76% GMV-share trend.** The
correct nodes are:
- **N-14** — "Multi-vertical vs. food-only order frequency: 13.0 vs. 3.8 orders/month (July 2024)"
  (`FACT → Facts/Orders_Facts.md`, TLB-012 p.9, TLB-013 p.6) — the actual source of the frequency claim.
- **N-11** — "Multi-vertical customer behaviour: multi-vertical GMV share rises 68% (Dec 2024) → 73%
  (Dec 2025) → 76% (Mar 2026)" (`FACT → Facts/GMV_Facts.md, Facts/Orders_Facts.md`, TLB-019 p.7,
  TLB-020 p.8) — the actual source of the GMV-share trend.

This is a hard citation failure under the citation-audit skill (a claim citing the wrong document/node
— directly analogous to the wrong-document failure Section 2's Pass-1 audit found and fixed for N-06).
A reader following this citation to verify the claim would land on entirely unrelated content twice
(once for the underlying node numbers, once in the summary Traceability table, which repeats the same
error rather than catching it). **Fix:** retarget to N-14 (frequency) and N-11 (GMV-share trend) in
both locations.

### Failure 2 — talabat pro GMV-share growth mislabeled by time period (§4.2)
**Text (§4.2):** "talabat pro subscriber GMV share has grown from 32% to 49% of platform GMV
(**FY2024→Q1 2026**)."

I checked the two source documents directly:
- `Facts/Talabat_Pro.md`, TLB-020 entry: "GMV share of talabat pro subscribers: 49% (**Q1'26**) vs
  32% (**Q1'25**) — 'tPro subscribers represent around half of talabat platform GMV...'" (TLB-020,
  page 8).
- `Facts/Talabat_Pro.md`, TLB-014 entry: "talabat pro GMV share (talabat-only) rose to 49% of platform
  GMV in **Mar'26** from **32% in Mar'25**" (TLB-014, page 14).

Both primary sources agree: the disclosed 32%→49% comparison is **Q1 2025 (Mar'25) → Q1 2026
(Mar'26)** — a like-for-like, one-year, quarter-to-quarter comparison. It is **not** "FY2024→Q1 2026."
No source in the corpus discloses a FY2024 talabat pro GMV-share figure of 32% — the closest FY2024/
FY2025-period figure I could find, from `Facts/Talabat_Pro.md`'s TLB-019 entry, is a *different* metric
("GMV share of talabat pro subscribers: 25% ('1.9x growth')... one-quarter of the MAUs," Dec'25/FY2025
basis) — which doesn't match "32%" either, confirming the corpus does not support a FY2024 starting
point for this specific 32%→49% claim.

This mislabels the base period of a disclosed figure — the exact category the citation-audit skill
names as a hard failure when "a pre/post-FY2025 non-GCC figure [is] used interchangeably" or a fact is
transplanted to the wrong period, and it is also a live Financial Integrity Gate violation (check 5:
"Time periods are stated and not silently mixed"). **Fix:** correct the parenthetical to "(Q1
2025→Q1 2026)" or "(Mar'25→Mar'26)."

## Moderate findings (citation-chain imprecision, not wrong-fact errors)

### Finding 3 — CARC/PostPaid trend attributed to the wrong Business_Relationships.md chain (§4.2, Traceability table)
**Text (§4.2):** "...PostPaid adopters show a 14% frequency increase, funded by CARC rising from
USD89mn (2023) to USD155mn (2025) as a share of GMV (`Business_Relationships.md` **Chain 1**)."
**Traceability table:** "Rewards +15%, PostPaid +14% frequency uplift | `Business_Relationships.md`
**Chain 1**; TLB-001 p.18-19"

I opened `Business_Relationships.md` Chain 1 directly. It contains: talabat pro's 28% frequency uplift,
Rewards' >15% frequency uplift (TLB-001 p.19), and the multi-vertical/CLV cohort-model reference. **It
does not contain PostPaid's 14% figure or any CARC dollar trend at all.** The PostPaid 14% figure is
correctly evidenced elsewhere (`Topics/FinTech.md`, "PostPaid is associated with a 14% increase in
order frequency post-adoption," TLB-001 page 18 — consistent with the TLB-001 p.18 half of the
traceability table's dual page citation). The USD89mn(2023)→USD155mn(2025) CARC trend is not in Chain 1
either — it is in **Chain 5** ("CARC... rose from USD 89mn (1.5% of GMV, 2023) to USD 103mn (1.4% of
GMV, 2024) to USD 155mn (1.6% of GMV, 2025)"). Citing "Chain 1" for the whole sentence therefore
misattributes two of its three sub-claims to a chain that doesn't contain them. **Fix:** split the
citation — Rewards → Chain 1; PostPaid → `Topics/FinTech.md` (TLB-001 p.18); CARC trend → Chain 5 (or
Chain 2, which has the 2024/2025 two-point version).

**Secondary, minor accuracy note on the same sentence:** "CARC rising... **as a share of GMV**" implies
a monotonic increase in CARC's percentage of GMV. Per Chain 5's own figures, the percentage actually
dipped from 1.5% (2023) to 1.4% (2024) before rising to 1.6% (2025) — only the **dollar** figure rises
monotonically across all three years. The phrasing risks implying a cleaner trend than the underlying
percentage series shows. Not a hard failure (the dollar figures cited are correct), but worth tightening.

### Finding 4 — "~7%-of-GMV UAE benchmark" citation points to a note that frames the figure differently
**Text (§4.2):** "...against a disclosed ~7%-of-GMV UAE benchmark talabat's own Group-wide penetration
(3.3-3.5% of GMV) has not yet closed (`Topics/Revenue Drivers.md`)."

The corpus actually contains **two distinct ~7% figures** that are easy to conflate:
1. TLB-001, page 21: "Global benchmark target for AdTech revenue is ~7% of GMV in the medium term" —
   an **aspirational, non-geography-specific target** (`Facts/Advertising_Facts.md` line 12, 16).
2. TLB-002, page 10 / TLB-014, page 19: "In the UAE, advertising technology margins have **already
   reached** 7% of GMV for talabat mart" — a **UAE-achieved actual figure**
   (`Facts/Advertising_Facts.md` lines 22, 75; also `Value_Driver_Tree_v2.md` N-29: "UAE talabat mart
   specifically already reached the ~7% of GMV medium-term benchmark").

Section 4's own label — "**UAE** benchmark" — matches fact #2 (the UAE-achieved reading), which is the
more useful and more precise framing for this sentence's point. But the note it cites,
`Topics/Revenue Drivers.md`, frames the ~7% figure using fact #1's language ("Advertising is also
flagged as structurally under-monetized (3.3–3.5% of GMV against a **~7% global benchmark**, TLB-001
page 21...)") — i.e., the cited source describes the number as global/aspirational, not UAE-achieved.
This is a citation-source mismatch, not a false claim (the underlying "UAE reached ~7%" fact is real
and correctly stated) — but the pointer given doesn't actually support the specific framing used.
**Fix:** cite `Value_Driver_Tree_v2.md` N-29 or TLB-002 p.10 / TLB-014 p.19 directly for the "UAE
benchmark achieved" framing, rather than (or in addition to) `Topics/Revenue Drivers.md`.

## Confirmed correct (independently re-verified)
- Multi-vertical 13.0x vs. 3.8x order frequency and 68%→73%→76% GMV-share trend — **facts themselves
  are correct** (verified against `Topics/Multi-Verticality.md` and `Value_Driver_Tree_v2.md` N-14/N-11
  directly); only the node-ID pointer is wrong (Failure 1 above).
- talabat pro 20-28% frequency uplift / 26-32% retention uplift, correctly scoped to the GCC+Jordan
  cohort and correctly routed through `ASM-016` (confirmed `Approved`) for any Egypt/non-GCC
  applicability — verified against `Value_Driver_Tree_v2.md` N-15/N-20 and `Assumptions_Register.md`.
  **PASS.**
- AI/personalisation EBITDA contribution >USD14mn (FY2024) → >USD30mn (FY2025) — verified against
  `Topics/AI.md` and N-09. **PASS.**
- Advertising & listing-fees revenue USD246mn→USD323mn (FY2024→FY2025, +32% y/y) — verified against
  `Facts/Advertising_Facts.md`. **PASS.**
- UAE/Kuwait/Qatar non-high-value M1 retention -4% y/y, TLB-019 page 9 — verified against
  `Topics/Food Leadership.md`'s Open Questions, which scopes this figure to exactly UAE/Kuwait/Qatar.
  **PASS**, correctly geography-tagged in the section's own prose ("UAE/Kuwait/Qatar specifically").
- ">4x monthly-spend gap between multi-vertical and food-only customers" — verified against
  `Topics/Customer Economics.md` ("a >4x spend gap tied to a ~3.4x frequency gap"). **PASS.**
- "No absolute CLV figure disclosed anywhere in the corpus" — verified against
  `Topics/Customer Lifetime Value.md`'s Open Questions ("No source in the vault discloses an absolute
  LTV figure... all LTV evidence is relative"). **PASS.**
- "No disclosed ROI/return figure for any bucket" — verified against `Investment_Relationship_Map.md`'s
  "What this note deliberately does not claim" section. **PASS.**
- Egypt PostPaid + CIB co-branded card, "first FinTech expansion outside the UAE" — verified against
  `Topics/FinTech.md`. **PASS.**
- KPI Tree Governance family (7 KPIs, all newly-instrumented) — verified against `KPI_Tree_v2.md`'s
  summary table. **PASS.**
- `ASM-016`, `ASM-021`–`028` cited throughout, all confirmed `Approved` in `Assumptions_Register.md` —
  **no citation to a Proposed-status row.** Unlike Section 2, Section 4's prose does not anywhere
  describe these as pending approval, so it has no equivalent staleness issue. **PASS.**
- `DEC-008` narrative-only framing of the ~2.2:1 split (§4.1) — confirmed no quantified exhibit appears
  anywhere in Section 4; the 2.2:1 ratio is discussed only in prose, exactly as `DEC-008` (Option 1,
  approved) requires. **PASS.**

## Geography check
Every uplift statistic that is genuinely GCC+Jordan-cohort-scoped (pro frequency/retention) is
correctly labeled as such, with the applicability-to-Egypt/non-GCC inference correctly routed through
`ASM-016`. Group-level statistics (multi-vertical GMV share, advertising revenue, AI/personalisation
EBITDA) and country-specific statistics (UAE/Kuwait/Qatar M1 retention decline, Egypt PostPaid/CIB) are
each stated at their correct actual geography. **No Failure Pattern 1-6 instance found** — the
provenance note's blanket "every uplift statistic below is GCC+Jordan-cohort evidence... unless stated
otherwise" is broad, and individual claims do not each carry an inline geography tag (a soft
completeness gap against Geographic Evidence Gate check #1, addressed in the companion QA review), but
no claim is actually mislabeled to the wrong geography.

## Summary
- **2 hard failures**, both first identified by this Pass 2 audit (no prior citation audit existed for
  this section): wrong Value Driver Tree node IDs for the multi-vertical mechanism (twice); mislabeled
  time period for the talabat pro GMV-share growth figure.
- **2 moderate findings**: a Business_Relationships.md chain mis-citation (CARC/PostPaid attributed to
  Chain 1, which doesn't contain them) and a source-mismatch on the "~7%-of-GMV UAE benchmark" citation.
- All other numeric claims independently verified against their cited source and found accurate,
  correctly geography-tagged, and (where relevant) correctly routed through `Approved` Assumption rows.

## Verdict
**FAIL — not yet citation-clean.** Per the citation-audit skill's 0%-tolerance rule ("100% of numeric
claims must pass — no partial credit"), the two hard failures above must be fixed before this section
can be cited as verified. The fixes themselves are narrow (retarget two node-ID citations, correct one
date range) — this is not a finding that the section's underlying argument or evidence base is weak,
only that its citation trail currently misdirects a verifier in two places.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_04_Value_Proposition.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`
- `vault/Knowledge/Business_Relationships.md`
- `vault/Knowledge/Facts/Talabat_Pro.md`, `vault/Knowledge/Facts/Advertising_Facts.md`
- `vault/Decisions/Assumptions_Register.md`
