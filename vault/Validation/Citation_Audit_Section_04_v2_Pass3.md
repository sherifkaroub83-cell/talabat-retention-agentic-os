---
type: validation
section: 4 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_04_Value_Proposition.md
pipeline_stage: Independent Pass 3 re-verification of the Pass 2 fix (per bp-orchestrator.md "Known
  runtime constraint" — fresh thread, no memory of drafting or the 2026-07-24 fix session)
run_date: 2026-07-24
auditor: independent Pass 3 reviewer
status: FAIL — Pass 2's two hard failures and two moderate findings are genuinely fixed and hold up
  under independent re-check, BUT this fresh, full re-trace (not limited to the previously-flagged
  spots) finds ONE NEW hard citation failure Pass 2 missed, plus one new moderate finding
---

# Citation Audit — Section 4 (v2), Independent Pass 3

## Independence note
This is a fresh audit thread with no memory of the 2026-07-23 drafting session or the 2026-07-24 fix
session. `Citation_Audit_Section_04_v2_Pass2.md` was read first (per instructions) to know what was
supposedly fixed, but every claim in the current file — not just the four previously-flagged spots —
was re-traced against its actually-cited source from scratch. Tools used: Read, Grep, Glob.

## Method
Walked the current `Section_04_Value_Proposition.md` sentence by sentence. For every numeric/named-fact
claim, opened the specific cited vault note/node directly — `vault/Forecasts/Value_Driver_Tree_v2.md`,
`vault/Forecasts/KPI_Tree_v2.md`, `vault/Knowledge/Facts/Talabat_Pro.md`,
`vault/Knowledge/Facts/Advertising_Facts.md`, `vault/Knowledge/Business_Relationships.md`,
`vault/Knowledge/Investment_Relationship_Map.md`, `vault/Knowledge/Topics/*.md`,
`vault/Decisions/Assumptions_Register.md`, `vault/Decisions/Decision_Log/DEC-008...md` and
`DEC-009...md` (glob-verified exact filenames) — and confirmed the specific node ID / quote / figure
claimed is actually present, not just that the target document exists. Arithmetic (120+55=175,
120:55≈2.2:1, 323/246≈+31-32%) checked directly.

## Hard failures

### Failure 1 (NEW — not caught by Pass 2) — AI/personalisation EBITDA contribution cited to the wrong Topic note and the wrong Value Driver Tree node
**Text (§4.2):** "Group-level estimated EBITDA contribution rose from >USD14mn (FY2024) to >USD30mn
(FY2025) (`Topics/EBITDA.md`; `Value_Driver_Tree_v2.md` **N-06**)."
**Traceability table:** "AI/personalisation EBITDA contribution USD14mn→30mn+ | `Topics/EBITDA.md`; **N-06**"

I opened both cited targets directly:
- **`Value_Driver_Tree_v2.md` N-06** is "AI/personalisation capability deployment (cross-cutting both
  buckets)" (Stage 2 — Capability deployment). Its full text: "Not named as a discrete dollar line
  within either bucket, but is the mechanism management credits with timing talabat pro/Rewards offers
  and driving item-level recommendations — i.e. an embedded capability, not a separate budget line."
  **N-06 contains no dollar figure at all** — it is a qualitative capability-deployment node, not the
  EBITDA-contribution node.
- **`Topics/EBITDA.md`** — read in full. Its Overview, Why It Matters, and every Fact/Source/Business
  Implication bullet discuss the *Group* Adjusted EBITDA margin bridge (USD500mn FY2024 → USD615mn
  FY2025, the FY2026 margin step-down, the Everyday App/Food-leadership percentage-point attribution).
  **It contains no "$14mn" or "$30mn" figure anywhere** (confirmed by direct grep — the only "30mn"-like
  string on the page is a substring of "USD 130mn," the unrelated Q1 2026 EBITDA actual).

The actual $14mn→$30mn AI-personalisation figure lives in **`Topics/AI.md`** ("the personalisation/
ranking algorithm's estimated contribution rose from USD 14mn+ p.a. (FY2024) to USD 30mn+ p.a. (FY2025),"
TLB-001 p.23, TLB-002 p.16) and **`Facts/AI_Facts.md`** (lines 16, 27), and the correct Value Driver Tree
node is **N-09** ("AI/personalisation deployment: estimated EBITDA contribution rises from USD 14mn+
(FY2024) to USD 30mn+ (FY2025)," `[FACT → Facts/AI_Facts.md]`, TLB-001 p.23, TLB-002 p.15-16).

This is the same class of hard failure Pass 2 found and fixed for the multi-vertical mechanism
(wrong node cited, unrelated content at the target) — except here it survived Pass 2 uncaught. Notably,
Pass 2's own "Confirmed correct" section states this claim was "verified against `Topics/AI.md` and
N-09" — but the text Pass 2 was reviewing (unchanged on this point through the 2026-07-24 fix) actually
cites `Topics/EBITDA.md` and N-06, not what Pass 2's own writeup says it checked. Pass 2 appears to have
verified the *fact* against the *correct* sources without noticing the *citation in the draft* pointed
elsewhere — exactly the "target document exists, but is it the right node/document" gap the citation-audit
skill exists to catch. **Fix:** retarget both the §4.2 prose and the Traceability table row to
`Topics/AI.md` and `Value_Driver_Tree_v2.md` N-09 (not `Topics/EBITDA.md` / N-06).

## Moderate findings

### Finding 2 (NEW) — talabat pro 20-28%/26-32% uplift Traceability-table row cites a Business_Relationships.md chain that doesn't contain those ranges
**Traceability table:** "talabat pro 20-28% frequency / 26-32% retention uplift (GCC+Jordan cohort) |
`ASM-016`; `Business_Relationships.md` **Chain 4**"

I opened Chain 4 ("Talabat Pro → Retention → GMV") directly. It states a single point figure — "+28%
order frequency uplift" (TLB-001, page 18) — and does not contain a 20-28% range, nor any retention-uplift
percentage at all (no "26%," "32%," or "retention uplift" figure anywhere in Chain 4). The actual source
of the 20-28%/26-32% ranges is `Value_Driver_Tree_v2.md` N-15 (frequency) and N-20 (retention), each
citing TLB-001 p.18, TLB-015 p.78, TLB-019 p.11 — not Business_Relationships.md at all.

This is not a hard failure because `ASM-016` (also cited in the same table cell, confirmed `Approved` in
`Assumptions_Register.md`) independently and correctly restates these same two ranges as part of its own
Statement text, so the claim does trace to a valid Approved source. But the second citation in the cell
("Business_Relationships.md Chain 4") is simply wrong — a reader checking it for corroboration would find
only the +28% point figure, not the ranges actually claimed. This is the same class of imprecision as
Pass 2's Finding 3 (CARC/PostPaid mis-attributed to Chain 1). **Fix:** replace "`Business_Relationships.md`
Chain 4" with "`Value_Driver_Tree_v2.md` N-15/N-20" in this table row (the main §4.2 prose sentence
itself only cites `ASM-016` and needs no change).

### Finding 3 (minor, not a failure) — Advertising Group-wide penetration range spans two different years without an inline tag
**Text (§4.2):** "...talabat's own Group-wide penetration (3.3-3.5% of GMV) has not yet closed."

`Facts/Advertising_Facts.md` confirms 3.3% is the FY2024 figure (TLB-001, p.21) and 3.4-3.5% is the
FY2025 figure (TLB-002, pp.11/14/19) — two different periods folded into one range with no inline
period tag. The sentence sits immediately after "(FY2024→FY2025, +32% y/y)," so a careful reader can infer
the pairing, and both individual figures are independently correct at their respective years — this is
not a mislabeling of the kind Pass 2's Failure 2 found (no figure is attributed to the wrong period), just
an opportunity to tighten by writing "(3.3% FY2024 → 3.4-3.5% FY2025)." Flagged for completeness, not
scored as a failure.

## Confirmed correct — full fresh re-trace (not limited to Pass 2's four items)
- **Multi-vertical 13.0x vs. 3.8x order frequency** (`Topics/Multi-Verticality.md`; `Value_Driver_Tree_v2.md`
  N-14) — re-verified against N-14's exact text and `Topics/Multi-Verticality.md`. Pass 2's fix holds.
  **PASS.**
- **Multi-vertical GMV share 68%→73%→76% (Dec'24→Dec'25→Mar'26)** (`Value_Driver_Tree_v2.md` N-11) —
  re-verified against N-11's exact text. Pass 2's fix holds. **PASS.**
- **talabat pro GMV share 32%→49% (Q1 2025→Q1 2026)** — re-verified against `Facts/Talabat_Pro.md`
  (TLB-020 p.8, TLB-014 p.14) and `Value_Driver_Tree_v2.md` N-08, and against `Assumptions_Register.md`
  ASM-021's own restatement of "the disclosed 32%→49% (Q1 2025→Q1 2026) trend." Pass 2's date-period fix
  holds. **PASS.**
- **talabat pro 20-28% frequency uplift / 26-32% retention uplift, GCC+Jordan cohort** — re-verified
  against `Value_Driver_Tree_v2.md` N-15/N-20 and `Assumptions_Register.md` ASM-016 (confirmed `Approved`).
  Correctly geography-scoped in prose. **PASS** (see Finding 2 above for the one wrong secondary citation
  in the Traceability table only).
- **Rewards >15% frequency uplift within 30 days** (`Business_Relationships.md` Chain 1; TLB-001 p.19) —
  re-verified: Chain 1 contains exactly this figure and page citation. **PASS.**
- **PostPaid 14% frequency increase** (`Topics/FinTech.md`; TLB-001 p.18) — re-verified against
  `Topics/FinTech.md`'s exact wording ("PostPaid is associated with a 14% increase in order frequency
  post-adoption," TLB-001 p.18). **PASS.**
- **CARC USD89mn (2023) → USD155mn (2025)** (`Business_Relationships.md`'s cross-cutting evidence; TLB-001
  p.28; TLB-002 p.21) — re-verified against Chain 5's exact figures and pages. Pass 2's Finding 3 fix
  (no longer mis-attributed to Chain 1) holds. **PASS.**
- **Egypt PostPaid + CIB co-branded card** (`Topics/FinTech.md`) — re-verified, "first FinTech expansion
  outside the UAE" language confirmed. **PASS.**
- **Advertising & listing-fees revenue USD246mn→USD323mn (FY2024→FY2025, +32% y/y)** — re-verified against
  `Facts/Advertising_Facts.md` (TLB-002 p.20, TLB-009 p.4). **PASS.**
- **~7%-of-GMV UAE benchmark, already reached for talabat mart specifically, not yet Group-wide** — now
  cited to `Topics/Advertising.md` (not `Topics/Revenue Drivers.md` as in the Pass-2-flagged version). Read
  `Topics/Advertising.md` in full: it correctly frames both the aspirational global ~7% target (TLB-001
  p.21) and the UAE-achieved actual (TLB-002 p.10, TLB-014 p.19) in the same sentence. Pass 2's Finding 4
  fix holds. **PASS.**
- **UAE/Kuwait/Qatar non-high-value M1 retention -4% y/y, "competitive pressure"** (TLB-019 p.9) —
  re-verified verbatim against `Facts/Competition_Facts.md` line 106 and `Facts/Monthly_Active_Customers.md`
  line 75. **PASS.**
- **>4x monthly-spend gap, multi-vertical vs. food-only** — re-verified against `Topics/Customer
  Economics.md` (">4x spend gap tied to a ~3.4x frequency gap"). **PASS.**
- **No absolute CLV figure disclosed anywhere in the corpus** — re-verified against `Topics/Customer
  Lifetime Value.md`'s Open Questions. **PASS.**
- **No disclosed ROI/return figure for any bucket or initiative** — re-verified against
  `Investment_Relationship_Map.md`'s "What this note deliberately does not claim" ("No disclosed ROI or
  payback figure for either bucket"). **PASS.**
- **KPI Tree Governance family — 7 KPIs, all newly-instrumented** — re-verified against `KPI_Tree_v2.md`'s
  own summary line: "**Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented.**" Exact
  match. **PASS.**
- **`ASM-021`-`028` as the Assumption-tagged nodes projecting each mechanism's uplift forward** —
  re-verified: rows 56-63 of `Assumptions_Register.md` are exactly ASM-021 through ASM-028, all `Approved`.
  **PASS.**
- **DEC-008 characterization** ("the ~2.2:1 weighting is argued narratively only... not shown as a
  quantified financial exhibit... restriction applies through Section 9/12/13") — read `DEC-008`'s current
  (final, resolved) text directly: "The user selected Option 1 — Base case only... The Everyday App vs.
  Food-leadership ~2.2:1 allocation case is to be argued narratively... not shown as a quantified financial
  sub-case in Section 9's own exhibits." This is the final resolved decision text, not superseded
  escalation-prompt language. **PASS** — no instance of the repeated defect class (citing DEC-009's/DEC-008's
  superseded earlier tiering language) found in this section.
- **DEC-009 characterization** ("this plan's initiative-level ranking... engages with, rather than
  second-guesses, that top-level weighting") — read `DEC-009`'s current resolved text directly (funding
  sequence committed narratively; OPT-001–005 tiering; allocation ranges appendix/sensitivity-only). The
  section's brief, generic characterization is consistent with DEC-009's actual final resolution, not its
  earlier escalation-prompt-only language. **PASS.**
- **Everyday App : Food-leadership ~2.2:1 weighting as "a real, evidenced management judgment"** —
  re-verified against `Topics/2026 Investment Programme.md`: "The consistent 2.2:1 weighting toward
  Everyday App over Food leadership is itself a disclosed management judgment worth engaging with
  directly." **PASS.**
- **talabat's own qualitative rationale quote** ("investments rather than costs... expected to offset the
  margin impact over time," TLB-020, page 16) — re-verified verbatim against `Topics/Capital Allocation
  and Investment Governance.md`. **PASS.**
- **No competitor benchmark or internal capital-allocation methodology disclosed** — re-verified against
  `Topics/Capital Allocation and Investment Governance.md`'s Open Questions ("No document... describes an
  internal capital-allocation committee, an investment-approval threshold, a stage-gate process..."). **PASS.**
- **Arithmetic checks:** 175 = 120 + 55 (correct); 120:55 ≈ 2.18:1, rounds to "~2.2:1" (correct);
  (323-246)/246 ≈ 31.3%, consistent with the disclosed rounded "+32% y/y" figure taken directly from
  TLB-009 p.4 rather than independently computed (correct, not an independent miscalculation).

## Geography check
Re-checked every numeric claim against `vault/Architecture/Geographic_Evidence_Rules.md`. No Group/GCC
figure is presented as Egypt-proven; no Egypt figure is presented as Group-representative; no pre/post-
FY2025 non-GCC figure is used interchangeably. The one area requiring an inference step — talabat pro's
GCC+Jordan-cohort uplift figures applied directionally to Egypt/non-GCC — is correctly routed through
`ASM-016` (`Approved`, Low confidence, Geography tag "inferred-applicability") both in the prose and (aside
from Finding 2's wrong secondary citation) the Traceability table. UAE/Kuwait/Qatar M1 retention and Egypt
PostPaid/CIB are each stated at their correct actual (country-specific) geography, not generalized to
Group or vice versa. **No Geographic Evidence Rules failure pattern found.**

## Summary
- **1 new hard failure** (not caught by Pass 2): the AI/personalisation EBITDA contribution figure
  (USD14mn→30mn+) is cited to `Topics/EBITDA.md` and Value Driver Tree node **N-06**, neither of which
  contains that figure — the correct sources are `Topics/AI.md` and node **N-09**. This defect predates
  Pass 2 and was not part of the four items that 2026-07-24 fix session addressed, so it has never been
  fixed.
- **1 new moderate finding**: the Traceability table's citation of "`Business_Relationships.md` Chain 4"
  for the talabat pro 20-28%/26-32% uplift range is wrong (Chain 4 only contains the +28% point figure) —
  though the claim still traces correctly via the co-cited `ASM-016`.
- **1 minor, non-scored observation**: the "3.3-3.5% of GMV" Group-wide advertising-penetration range
  spans two different fiscal years without an inline tag (both individual figures are independently
  correct).
- **Pass 2's original two hard failures (wrong Value Driver Tree node IDs for the multi-vertical
  mechanism; talabat pro GMV-share date mislabeling) and two moderate findings (CARC/PostPaid
  Business_Relationships.md chain mis-citation; "~7%-of-GMV UAE benchmark" source mismatch) are all
  genuinely fixed and hold up under this independent re-check** — re-verified directly against the
  correct primary sources, not just trusted from the fix note.
- All other numeric/named-fact claims in the section (18 distinct claims independently re-verified above,
  plus the DEC-008/DEC-009 characterizations and the KPI Tree/Assumption Register citations) trace
  correctly to their cited source, are correctly geography-tagged, and are correctly routed through
  `Approved` Assumption Register rows where relevant.

## Verdict
**FAIL — not yet citation-clean.** The section is materially cleaner than the Pass 2 state (four defects
genuinely fixed, confirmed independently rather than taken on trust), but the citation-audit skill's
0%-tolerance rule means even one open hard failure blocks Stage 10. The one hard failure found here (Failure
1) requires a narrow, mechanical fix — retarget two citations (prose + table) from `Topics/EBITDA.md`/N-06
to `Topics/AI.md`/N-09 — not a re-argument of the underlying fact, which is itself correct and well-evidenced.
The one new moderate finding (Finding 2) should also be corrected in the same pass for full precision,
though it does not by itself block the gate (the claim already traces correctly via `ASM-016`). This
finding underscores the value of an independent Pass 3: Pass 2's own "Confirmed correct" section asserted
verification against the correct sources (`Topics/AI.md`, N-09) for this exact claim, while the actual
draft text it was reviewing pointed elsewhere — a reminder that "I checked the fact is true" and "I checked
the citation in the draft resolves to that fact" are not the same verification step.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_04_Value_Proposition.md`
- `vault/Validation/Citation_Audit_Section_04_v2_Pass2.md` (the audit this Pass 3 re-verifies)
- `vault/Forecasts/Value_Driver_Tree_v2.md` (N-06, N-09, N-11, N-14, N-15, N-20)
- `vault/Forecasts/KPI_Tree_v2.md`
- `vault/Knowledge/Topics/AI.md`, `vault/Knowledge/Topics/EBITDA.md`, `vault/Knowledge/Topics/Advertising.md`
- `vault/Knowledge/Facts/AI_Facts.md`, `vault/Knowledge/Facts/Advertising_Facts.md`,
  `vault/Knowledge/Facts/Talabat_Pro.md`, `vault/Knowledge/Facts/Competition_Facts.md`
- `vault/Knowledge/Business_Relationships.md`
- `vault/Knowledge/Investment_Relationship_Map.md`
- `vault/Decisions/Assumptions_Register.md` (ASM-016, ASM-021–028)
- `vault/Decisions/Decision_Log/DEC-008_section9-headline-bucket-split-presentation.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
