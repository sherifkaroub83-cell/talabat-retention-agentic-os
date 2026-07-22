---
type: validation
section: 6
pipeline_stage: 9
date: "2026-07-22"
result: FAIL (2 hard failures, 3 acknowledged non-blocking limitations)
---

# Citation Audit — Section 6 (Business Model and Revenue Streams)

## Tooling note (read first)
Performed by a genuinely top-level-invoked `evidence-citation-agent` thread, launched directly from the
top-level session per the `citation-audit` skill, with `Read`, `Grep`, `Glob`, and `Write` available and
no memory of any prior conversation. Every numeric or named-fact claim in
`vault/Projects/Business_Plan_Drafts/Section_06_Business_Model_and_Revenue_Streams.md` was traced
independently against the underlying source layer — not taken on the draft's own citation text — to
either (a) a `(TLB-XXX, page N)` citation verified against `vault/Knowledge/Facts/Revenue.md` and the
raw `Facts/_raw/` fragments, or (b) an `ASM-###` row in `vault/Decisions/Assumptions_Register.md` with
`status: Approved`. Per the task brief, the FY2024/FY2025 revenue-by-line table was checked directly
against `Facts/Revenue.md` (not the section's own citation), the `DEC-006`-sourced decomposition was
checked directly against `DEC-006_subscription-revenue-line-reclassification.md`, the MECE/"monetized
twice" claim was checked against `Strategic/Revenue Model.md` and `ASM-008`, the pricing-strategy claims
were checked against `Topics/Quick Commerce.md`, `Topics/Talabat Pro.md`, and `Topics/Advertising.md`
(cross-checked for consistency with `Section_04_Value_Proposition.md`'s own AdTech citation), the
unit-economics claims were checked against `Facts/Revenue.md`, `Section_09_Financial_Plan.md` §9.4, and
`Topics/Talabat Pro.md`, and the Egypt-specific data-gap statements were checked against
`Topics/Segment Reporting.md`'s Open Questions. A vault-wide `Grep` was additionally run for the Egypt
talabat pro price point (`EGP 79`) because the section makes an absence claim about it, per this
project's standing discipline that absence claims must be independently re-verified, not trusted on the
draft's word.

## Method
Read directly and cross-checked, not taken on faith from Section 6's own prose:
`vault/Projects/Business_Plan_Drafts/Section_06_Business_Model_and_Revenue_Streams.md` (full text),
`vault/Knowledge/Facts/Revenue.md` (full file, all 29-document entries),
`vault/Decisions/Decision_Log/DEC-006_subscription-revenue-line-reclassification.md` (full text),
`vault/Decisions/Assumptions_Register.md` (all 13 rows, especially ASM-004, ASM-008, ASM-010, ASM-011,
ASM-013), `vault/Knowledge/Strategic/Revenue Model.md` (full text), `vault/Knowledge/Topics/Quick
Commerce.md`, `vault/Knowledge/Topics/Talabat Pro.md`, `vault/Knowledge/Topics/Advertising.md`,
`vault/Knowledge/Topics/Pricing.md`, `vault/Knowledge/Topics/Segment Reporting.md`,
`vault/Knowledge/Entities/Countries.md`, `vault/Knowledge/Facts/_raw/TLB-015_facts.md`,
`vault/Knowledge/_source_text/October-2024_Capital-Markets-Day_talabat.txt` (raw extraction, to verify
the 136% gross-profit-uplift cohort context), `vault/Projects/Business_Plan_Drafts/Section_04_Value_
Proposition.md` (§Mechanism 3, for the AdTech-citation consistency check), `vault/Projects/Business_Plan_
Drafts/Section_09_Financial_Plan.md` (§9.4 and its Assumption/traceability tables), `vault/Projects/
Business_Plan_Drafts/Section_10_Risk_Analysis.md` (§10.1 Technical/Market Risks, for the commission-cap/
licensing-dispute cross-check), `vault/Projects/Business_Plan_Drafts/Section_03_Market_Analysis.md` (the
competitor table, for the EGP 79/month precedent), and `vault/Research/Notes/RES-004_egypt-official-
newsroom-operational-datapoints.md`. Targeted `Grep` sweeps were run for `39.8`/`39.80` (to trace the
precise unit-economics decimal), `509.9`/`509,936` and `145.3`/`145,343` (to trace the Egypt segment-revenue
citation), `EGP 79`/`79/month` (the pricing-absence-claim check), and `136%`/`Egypt and Iraq` (the
gross-profit-uplift exclusion check).

## Findings by claim group

| # | Claim group | Trace target | Result |
|---|---|---|---|
| 1 | §6.1 table — FY2024 four-line revenue figures and growth rates | `Facts/Revenue.md` TLB-001 p.27 entry, verbatim-matched (Commission $1,062mn/+25%; Subscription $952mn/+44%; Delivery $696mn/+29%; Advertising $246mn/+27%) | PASS |
| 2 | §6.1 table — FY2025 four-line revenue figures and growth rates | `Facts/Revenue.md` TLB-002 p.20 and TLB-009 p.4 entries, both verbatim-matched (Commission $1,297mn/+22%; Subscription $1,397mn/+47%; Delivery $859mn/+24%; Advertising $323mn/+32%) | PASS |
| 3 | DEC-006 decomposition — Subscription fees 1.0%/0.5% of GMV, USD 25.77mn; Own grocery & other income 15.2%/12.6% of GMV, USD 408.42mn | `DEC-006_subscription-revenue-line-reclassification.md` Decision text and `ASM-013`, both verbatim-matched; independently cross-checked against `Facts/Revenue.md` TLB-010 p.16 and TLB-011 p.4 | PASS |
| 4 | DEC-006 scope-limit statement ("available only Q1 2025/Q1 2026, not restated for full-year") | `DEC-006`'s Decision, point 4, and its "one genuine gap remains" paragraph, verbatim-matched | PASS — correctly stated, not overstated or understated |
| 5 | MECE justification and "monetized twice" spillover (20-28% frequency uplift) | `Strategic/Revenue Model.md` Synthesis section ("subscription is... 'monetized twice'... 20-28% order-frequency uplift"), verbatim-matched; `ASM-008` (Approved, Forecast tier) verbatim-matched for the 20-28%/26-32% figures | PASS |
| 6 | Commission pricing — "lower commission rates" as Q1 2026 mix-shift factor, 12.8%/13.4% of GMV | `Facts/Revenue.md` TLB-011 p.4 (percentages) and TLB-014 p.15 ("lower commission rates" narrative), both verbatim-matched | PASS |
| 7 | Commission pressure linked to Qatar commission cap / Oman licensing disputes | `Section_10_Risk_Analysis.md` §10.1 ("a Qatar commission-rate cap; Oman licensing disputes"), verbatim-matched | PASS |
| 8 | Subscription pricing — talabat pro launch history (March 2022, Egypt Feb 2025) | `Topics/Talabat Pro.md` Overview, verbatim-matched (TLB-001 p.19, TLB-002 p.14) | PASS |
| 9 | Principal/owned-inventory pricing — tMart ~95% take rate | `Topics/Quick Commerce.md` Overview, verbatim-matched (TLB-002, pages 12, 14, 20) | PASS |
| 10 | Advertising pricing — 2.1%→3.4-3.5% of GMV, ~7%-of-GMV UAE talabat mart benchmark | `Topics/Advertising.md` and `Strategic/Revenue Model.md`, both confirm the substance; citation set (TLB-001 p.21; TLB-002 p.10) is consistent with `Section_04_Value_Proposition.md`'s own §Mechanism 3 citation — see Limitations for a citation-completeness note | PASS on substance — **incomplete citation set inherited from `Strategic/Revenue Model.md`, non-blocking (see Limitations)** |
| 11 | "No document in the corpus discloses Egypt-specific pricing (talabat pro's EGP price point...)" | Contradicted by `ASM-004` (Approved, External Research tier, built on `RES-004`), which discloses "t pro EGP 79/month," already cited with proper labeling in `Section_03_Market_Analysis.md`'s competitor table | **FAIL — false absence claim, see dedicated check below** |
| 12 | Egypt segment revenue — "USD 509.9mn FY2025, audited; USD 145.3mn Q1 2026, ~81% YoY growth, TLB-010, page 20" | `Facts/Revenue.md` — the USD 145.3mn/~81% YoY figures are genuinely at TLB-010 p.20; the USD 509.9mn FY2025 figure is **not** at TLB-010 p.20 — it is at TLB-002 p.111 and TLB-008 p.61 | **FAIL — number attributed to the wrong source document, see dedicated check below** |
| 13 | Unit economics — "39.8% of GMV in FY2024, rising toward 40-41% in FY2025" | `Facts/Revenue.md` — TLB-001 p.27 and TLB-002 p.20 literally state "40%" (rounded), not "39.8%"; the precise "39.80%" figure is stated only by TLB-029 (`Facts/Revenue.md` TLB-029 entry) | PASS on substance — **imprecise citation, inherited verbatim from `Strategic/Revenue Model.md`, non-blocking (see Limitations)** |
| 14 | Egypt take-rate proxy cross-reference to Section 9 §9.4 / `ASM-010` (≈USD 1.24bn implied Egypt GMV, 41%-of-GMV ratio, Low confidence) | `Section_09_Financial_Plan.md` §9.4 traceability table (`ASM-010`, "Egypt implied-GMV/take-rate proxy (~USD1.24bn)... Low") and `Assumptions_Register.md` ASM-010 row, both verbatim-matched | PASS |
| 15 | 136% gross-profit-per-customer uplift, 30 days post-subscription | `Topics/Talabat Pro.md` and `Facts/Talabat_Pro.md` — TLB-015, page 78 verbatim-matched | PASS |
| 16 | "Egypt and Iraq are explicitly excluded from the cohorts this figure is drawn from, per `Topics/Talabat Pro.md`'s Open Questions" | Independently verified true (TLB-015 p.77: "Live in 6 of 8 countries — all except Egypt and Iraq," same Capital Markets Day slide as the 136% figure at p.78/104) but `Topics/Talabat Pro.md`'s actual Open Questions bullet names only the 2.1x/28%/32% figures, not the 136% figure specifically | PASS on substance — **citation points to the wrong sub-section of the right note, non-blocking (see Limitations)** |
| 17 | Egypt revenue-mix/GMV/take-rate data gap statements | `Topics/Segment Reporting.md` Open Questions ("No document... discloses an Egypt-specific GMV figure") and `Strategic/Revenue Model.md`'s Egypt-Specific Considerations, both verbatim-matched — gap neither overstated nor understated | PASS |

## Uncited/false-absence-claim check (Claim #11) — the task's central test

§6.2's closing paragraph states: "No document in the corpus discloses Egypt-specific pricing (talabat
pro's EGP price point, Egypt commission rates, or Egypt AdTech CPC rates) — this section names the four
pricing models structurally, as disclosed at Group level, without inventing an Egypt figure."

This is **false for one of its three named items**. `vault/Decisions/Assumptions_Register.md` row
`ASM-004` (status: **Approved**, Tier: External Research, built on `RES-004_egypt-official-newsroom-
operational-datapoints.md`) explicitly states the value "**t pro EGP 79/month**" as a citable,
properly-labeled Egypt-specific price point, sourced from talabat's own official corporate newsroom (28
Apr 2026 and 18 Feb 2025 press releases, both already collected in `Input_Data/04_Strategy_News/`).
This is not a hypothetical or rejected assumption — it is **already in active use** in
`Section_03_Market_Analysis.md`'s competitor-comparison table: "t pro: EGP 79/month or EGP 799/year;
commission structure not disclosed for Egypt specifically... Primary (TLB-XXX) + labeled secondary
(RES-004)." Section 6's blanket denial directly contradicts a fact this same business plan has already
approved and cited elsewhere.

The likely root cause: `Topics/Pricing.md`'s Open Questions section still describes the EGP 79/month
figure as "(uncited)" and recommends it "should be flagged to the user/instructor... rather than
referenced informally" — this is **stale**. That Open Question predates (or was never reconciled with)
`RES-004`'s creation and `ASM-004`'s approval (both dated 2026-07-22, per the Assumptions Register), the
same class of Knowledge-layer staleness `DEC-006` itself flagged for `Strategic/Revenue Model.md`. The
drafting session for Section 6 appears to have followed `Topics/Pricing.md`'s stale framing rather than
checking the Assumptions Register directly.

The other two items in the same sentence — "Egypt commission rates" and "Egypt AdTech CPC rates" — are
independently verified as genuinely undisclosed anywhere in the vault (no `ASM-###` row, `RES-###` note,
or Facts/Sources citation covers either), so only the EGP-price-point clause is false, not the whole
sentence.

**Fix needed:** either (a) cite `ASM-004`/`RES-004` for the EGP 79/month figure, explicitly labeled
External Research tier per that row's own discipline — e.g. "talabat pro's Egypt price point is disclosed
outside the audited primary corpus, at EGP 79/month or EGP 799/year (`ASM-004`, External Research tier,
sourced from talabat's official newsroom, not yet vault-ingested into Facts/Sources)" — matching how
Section 3 already handles this exact figure, or (b) narrow the claim precisely to "no primary `TLB-XXX`
document discloses Egypt-specific pricing" and separately acknowledge the labeled External-Research-tier
price point exists rather than omitting it. Silently dropping an already-approved, already-cited-elsewhere
fact is the same defect class as "silent suppression," which this project's own stage-7 procedure treats
as equivalent in severity to silent selection.

## Wrong-document citation check (Claim #12)

§6.1's "Egypt-specific gap" paragraph reads: "Egypt's only disclosed figures are total segment revenue
(USD 509.9mn FY2025, audited; USD 145.3mn Q1 2026, ~81% YoY growth, TLB-010, page 20;
`Topics/Segment Reporting.md`)."

Independently re-verified against `Facts/Revenue.md`: **TLB-010, page 20 supports only the Q1 2026 figure**
("Egypt segment revenue Q1 2026: USD 145,343,355... Q1 2025 (restated): USD 80,346,126 — approx. 81%
y/y growth in segment revenue, TLB-010, page 20"). It contains no FY2025 full-year figure at all — TLB-010
is a Q1 2026 quarterly financial statement, not an annual one. The USD 509.9mn **FY2025** figure is
disclosed at **TLB-002, page 111** ("Egypt USD 509,936,177") and **TLB-008, page 61** ("Segment revenue...
Egypt USD 509,936,177"), neither of which is cited here. `Topics/Segment Reporting.md` (also cited) does
not itself restate the 509.9mn figure in its own body text either — only `Entities/Countries.md` does
("Disclosed FY2025 Egypt figures: external revenue USD 509.9m..."), and that note is not cited in this
sentence. As written, a reader following the given citation to TLB-010, page 20 would find no support for
the FY2025 annual figure — this is the exact "number attributed to the wrong source document" defect
pattern the task brief flagged, occurring here in prose rather than a table cell, produced when two
different reporting-period figures were merged into a single trailing citation.

**Fix needed:** split the citation to match each figure's actual source — "(USD 509.9mn FY2025, audited,
TLB-002 page 111 / TLB-008 page 61; USD 145.3mn Q1 2026, ~81% YoY growth, TLB-010 page 20;
`Topics/Segment Reporting.md`)."

## Anti-pattern check (Group/GCC statistics presented as Egypt-proven) — zero-tolerance item

1. **Four-line revenue structure and growth rates (§6.1)** — presented as Group-level throughout, with an
   explicit, dedicated "Egypt-specific gap, stated plainly" paragraph immediately following the table that
   states no Egypt fee-type breakdown exists and that the mix-shift argument "is a Group-level mechanism...
   not something directly observed for Egypt." **Labeled — pass.**
2. **Unit economics (39.8%→40-41% take rate, 136% gross-profit uplift)** — both explicitly headed "The
   corpus discloses this at the Group/blended level, not per-Egypt-customer" and "a Group/GCC-level figure,
   not Egypt-measured (Egypt and Iraq are explicitly excluded...)" respectively. **Labeled — pass.**
3. **Pricing models (§6.2)** — explicitly closed with "No document in the corpus discloses Egypt-specific
   pricing... without inventing an Egypt figure" (the sentence found false above for one clause, but the
   *labeling intent* — not presenting Group figures as Egypt-proven — is present and correctly applied to
   the parts of the sentence that are accurate). **Labeled — pass on the anti-pattern dimension** (the
   defect found above is a false-absence-claim/citation-accuracy failure, not a Group-stat-as-Egypt-proof
   violation).

**No instance found of a Group-level/GCC-level statistic presented as if Egypt-proven anywhere in Section
6.** This is a clean pass on the drafting skill's most emphasized anti-pattern, consistent with the other
audited sections.

## Limitations acknowledged (not counted as hard failures)

1. **AdTech growth citation set is incomplete, inherited verbatim from `Strategic/Revenue Model.md`.** The
   "2.1% of GMV (2021)" figure is actually sourced to **TLB-015, page 26**, and the "3.4-3.5% of GMV
   (FY2025)" figure is more precisely sourced to **TLB-002, pages 11, 14, 19** (per `Topics/Advertising.md`)
   — Section 6 cites only "TLB-001, page 21; TLB-002, page 10" for the whole sentence, the identical
   citation set used verbatim in `Strategic/Revenue Model.md`'s own Synthesis paragraph. This is not an
   error Section 6 introduced independently. **Recommended fix (non-blocking):** add `TLB-015, page 26` and
   `TLB-002, pages 11/14/19`, ideally at the source note.
2. **The "39.8%" FY2024 take-rate figure is cited to TLB-001/TLB-002, which state the rounded "40%," not
   the precise "39.80%."** The precise decimal is stated only by TLB-029 (`Facts/Revenue.md` TLB-029 entry:
   "39.80% of GMV"). The two figures are consistent (39.80% rounds to 40%), and the same imprecision is
   inherited verbatim from `Strategic/Revenue Model.md`'s identical sentence and citation. Because the
   broader citation `Facts/Revenue.md` (the whole file, which does contain the TLB-029 entry) is also given
   alongside the specific TLB-001/TLB-002 page citations, this is judged non-blocking rather than a hard
   failure — but it should still be tightened. **Recommended fix (non-blocking):** add `TLB-029` explicitly
   for the "39.8%" precision.
3. **The 136% gross-profit-uplift exclusion claim cites the wrong sub-section of the right note.** Section
   6 attributes "Egypt and Iraq are explicitly excluded from the cohorts this figure is drawn from" to
   `Topics/Talabat Pro.md`'s **Open Questions** section — but that section's actual Open Questions bullet
   names only the 2.1x adoption / 28% frequency / 32% retention figures as excluding Egypt and Iraq, not
   the 136% figure specifically. The underlying claim is independently re-verified **true** (TLB-015, page
   77: "Live in 6 of 8 countries — all except Egypt and Iraq," the same Capital Markets Day slide, pages
   77-78/104, that discloses the 136% figure — confirmed directly against the raw extracted source text),
   but the citation points to a sub-section of the note that does not itself make this specific claim.
   **Recommended fix (non-blocking):** re-point the citation to `Facts/Talabat_Pro.md` (TLB-015, page 77)
   directly rather than `Topics/Talabat Pro.md`'s Open Questions.

## Result

**FAIL.** Two hard failures found:
1. §6.2 states flatly that "no document in the corpus discloses Egypt-specific pricing (talabat pro's
   EGP price point...)" — this is contradicted by `ASM-004` (Approved, External Research tier), which
   discloses "t pro EGP 79/month" and is already cited with proper tier-labeling in Section 3's own
   competitor table. This is a false absence claim, not merely an uncited one — the fact exists, is
   approved, and is already in use elsewhere in this same business plan.
2. §6.1's Egypt-specific-gap paragraph cites "TLB-010, page 20" for the USD 509.9mn FY2025 Egypt segment
   revenue figure — that page supports only the Q1 2026 quarterly figure (USD 145.3mn); the FY2025 figure
   is disclosed at TLB-002, page 111 and TLB-008, page 61, neither of which is cited. This is the "number
   attributed to the wrong source document" defect pattern the task brief specifically flagged, occurring
   here in prose where two different reporting periods' figures were merged under one trailing citation.

**All six items the task asked to be checked with particular care were independently re-verified:** (1)
the §6.1 revenue-by-line table figures check out exactly against `Facts/Revenue.md`; (2) the DEC-006
decomposition figures and the Q1-2025/Q1-2026-only scope limit are both accurately stated; (3) the MECE
claim and the "monetized twice" spillover claim both trace cleanly to `Strategic/Revenue Model.md` and
`ASM-008`; (4) the pricing-strategy claims are accurate except for the EGP-price-point false-absence claim
above, and the AdTech benchmark citation is consistent with Section 4's own citation (with a shared,
non-blocking completeness gap inherited from the same Strategic note both sections draw on); (5) the
unit-economics claims — the 39.8%→40-41% take rate, the ASM-010/Section 9 §9.4 cross-reference, and the
136% uplift figure with its Egypt/Iraq-exclusion caveat — are all substantively accurate, with two
non-blocking citation-precision gaps; (6) the Egypt data-gap statements accurately reflect
`Topics/Segment Reporting.md`'s Open Questions, neither overstating nor understating the gap. The anti-
pattern check (Group-level statistics presented as Egypt-proven) passes cleanly — every Group/GCC figure
in Section 6 carries an explicit scoping label. Three additional non-blocking limitations are carried
forward rather than silently dropped, per this skill's own discipline — none independently block Stage 10,
but none substitute for the two hard failures either. Per this skill's rule and the standing 0%-tolerance
instruction, Section 6 cannot proceed to Stage 10 until both hard failures are fixed and this audit is
re-run.

## Links
- `.claude/skills/citation-audit/SKILL.md` — the procedure this audit followed (not a vault graph node, per project convention)
- [[Section_06_Business_Model_and_Revenue_Streams|vault/Projects/Business_Plan_Drafts/Section_06_Business_Model_and_Revenue_Streams.md]]
- [[Section_03_Market_Analysis]] · [[Section_04_Value_Proposition]] · [[Section_09_Financial_Plan]] · [[Section_10_Risk_Analysis]]
- [[DEC-003_section2-governing-hypothesis]] · [[DEC-006_subscription-revenue-line-reclassification]] · [[Assumptions_Register]] (ASM-004, ASM-008, ASM-010, ASM-011, ASM-013)
- [[RES-004_egypt-official-newsroom-operational-datapoints]]
- `vault/Knowledge/Facts/Revenue.md` · `vault/Knowledge/Strategic/Revenue Model.md` ·
  `vault/Knowledge/Topics/Quick Commerce.md` · `vault/Knowledge/Topics/Talabat Pro.md` ·
  `vault/Knowledge/Topics/Advertising.md` · `vault/Knowledge/Topics/Pricing.md` ·
  `vault/Knowledge/Topics/Segment Reporting.md` · `vault/Knowledge/Entities/Countries.md`
- [[Citation_Audit_Section_05|Citation Audit — Section 5]] — precedent for the "number attributed to the
  wrong source document when content is restructured/merged" defect class, and for treating inherited
  Knowledge-layer citation imprecisions as non-blocking limitations rather than hard failures

---

# Targeted re-audit — fix verification (2026-07-22)

## Scope
Independent re-verification of the two hard-failure fixes claimed applied to
`vault/Projects/Business_Plan_Drafts/Section_06_Business_Model_and_Revenue_Streams.md` since the FAIL
report above, plus a sanity sweep for any new uncited/overclaiming defect introduced by the edits. Read
fresh (no reliance on the fix description's own framing): the current section file in full,
`vault/Knowledge/Facts/Revenue.md` in full (TLB-002 and TLB-008 entries specifically), the full
`vault/Decisions/Assumptions_Register.md` (ASM-004 row), `vault/Research/Notes/RES-004_egypt-official-
newsroom-operational-datapoints.md` in full, `vault/Knowledge/Entities/Countries.md` (Egypt reporting-
treatment section), and `vault/Projects/Business_Plan_Drafts/Section_03_Market_Analysis.md`'s
competitor table (to re-confirm the "same labeling discipline Section 3 already uses" claim the fix
makes about itself). A `Grep` sweep was run across the current section file for
`does not disclose|No document|no document|not disclosed|only as labeled` to independently surface any
remaining or new absence-style claims, rather than trusting the fix's own description of what changed.

## Fix #1 — Egypt segment-revenue citation split (§6.1)

**Verified correct.** The section now reads: "Egypt's only disclosed figures are total segment revenue
(USD 509.9mn FY2025, audited, TLB-002, page 111; TLB-008, page 61; USD 145.3mn Q1 2026, ~81% YoY growth,
TLB-010, page 20; `Topics/Segment Reporting.md`)."

Independently re-checked against `Facts/Revenue.md`:
- **TLB-002, page 111** literally states: "Revenue by country (audited, since-inception period): ...
  Egypt USD 509,936,177..." and "Egypt segment external revenue (audited): USD 509,936,177..." — both at
  page 111. Confirmed.
- **TLB-008, page 61** literally states: "Segment revenue (external, since inception): GCC
  USD 3,795,385,553; Egypt USD 509,936,177..." and "Revenue by country (material countries, since
  inception): ... Egypt USD 509,936,177..." — both at page 61. Confirmed.
- **TLB-010, page 20** literally states: "Egypt segment revenue Q1 2026: USD 145,343,355... Q1 2025
  (restated): USD 80,346,126... approx. 81% y/y growth in segment revenue" — confirmed to support only
  the Q1 2026 figure, exactly as the original audit found.

The fix now matches each number to a source page that actually contains it. This closes hard failure #2
from the original report. **PASS.**

**One pre-existing, non-blocking observation surfaced during re-verification (not a new defect, not
attributable to this fix):** both TLB-002 p.111 and TLB-008 p.61 describe the USD 509,936,177 figure as a
"since-inception" cumulative audited figure (the entity's audited life runs 3 Sept 2024–31 Dec 2025 per
TLB-002 p.78 / TLB-008 p.10), not a strict calendar-year-2025-only figure — the stub period 3 Sept–31 Dec
2024 is technically included, and no document in the corpus separately discloses an Egypt figure for a
"calendar FY2025 only" window. However, this "FY2025" label for this exact figure is an established,
already-approved vault-wide convention independently observed in `Entities/Countries.md` ("Disclosed
FY2025 Egypt figures: external revenue USD 509.9m...") and in `ASM-003` ("Bottom-up: USD 509.9m (FY2025
Egypt segment revenue, TLB-002/TLB-008)") — it predates this fix and was already implicitly accepted by
the original audit (Claim #12 above did not flag it). Re-litigating this labeling convention is out of
scope for this targeted re-audit; noted here only so it isn't silently passed over, consistent with this
project's non-blocking-limitations discipline.

## Fix #2 — EGP 79/month false-absence-claim fix (§6.2)

**Independently re-verified as accurate where applied — but incompletely applied.**

**a) The specific fix (closing paragraph, lines ~112–118) is correct.** It now reads: "No primary
TLB-XXX corpus document discloses Egypt-specific pricing for Egypt commission rates or Egypt AdTech CPC
rates. One Egypt price point is available, but only as labeled External Research, not from the audited
primary corpus: talabat pro's Egypt price is EGP 79/month, per `ASM-004` (`RES-004_egypt-official-
newsroom-operational-datapoints`, sourced from talabat's official newsroom, explicitly outside the
audited TLB-XXX regime — the same figure and same labeling discipline Section 3 already uses)."

Checked directly against source:
- `Assumptions_Register.md` row **ASM-004**: `status: Approved`, `Tier: External Research`, Source
  `[[RES-004_egypt-official-newsroom-operational-datapoints]]`, Value includes "t pro EGP 79/month,"
  Confidence Medium-High. Confirmed exactly as cited.
- `RES-004_egypt-official-newsroom-operational-datapoints.md` Finding item 2 confirms: "talabat Egypt
  launches 't pro' (18 Feb 2025): EGP 79/month or EGP 799/year..." — first-party talabat corporate
  newsroom source, explicitly labeled outside the audited `TLB-XXX` regime in its own Limitations
  section ("Not part of the vault's audited primary citation regime — must be cited separately and
  explicitly labeled"). The section's rewrite matches this labeling discipline precisely and does not
  overclaim — notably, it cites only "EGP 79/month" (matching `ASM-004`'s own Value field verbatim) and
  does not additionally assert the EGP 799/year annual figure that `RES-004` also discloses but `ASM-004`
  does not carry forward into its Value field — a conservative, not an inflated, restatement.
- `Section_03_Market_Analysis.md`'s competitor table independently confirmed to already state "t pro:
  EGP 79/month or EGP 799/year... Primary (TLB-XXX) + labeled secondary (RES-004)" — the "same labeling
  discipline Section 3 already uses" claim the fix makes about itself is accurate.
- The narrowed claim about commission and AdTech rates ("No primary TLB-XXX corpus document discloses
  Egypt-specific pricing for Egypt commission rates or Egypt AdTech CPC rates") is re-confirmed accurate
  — no `ASM-###` row, `RES-###` note, or Facts/Sources citation anywhere in the vault covers either.

This specific instance closes the false-absence-claim defect from the original audit. Considered in
isolation: **PASS.**

**b) A second, unfixed instance of the identical false-absence claim was found elsewhere in the same
subsection, one bullet above the fix.** The Subscription-pricing bullet (§6.2, third sentence of the
"Subscription (tiered, recurring membership fee)" bullet) still reads, unchanged: "Pricing is value-based
against the delivery-fee savings and discount value a frequent orderer would otherwise pay
per-transaction — **the corpus does not disclose Egypt's specific pro price point, only that it exists
market-by-market**."

This is the exact same false claim the original audit flagged and the fix was supposed to resolve — it
was simply never touched in this location. The `Grep` sweep for absence-style language
(`does not disclose|No document|no document|not disclosed`) surfaced exactly three hits in the current
file: the §6.1 "no document in the corpus breaks out Egypt's revenue by these four fee-type lines"
(accurate, unrelated to pricing), this unfixed Subscription-bullet sentence, and the corrected §6.2
closing paragraph. The section as it now stands **directly contradicts itself within the same
subsection**: the Subscription bullet tells the reader Egypt's pro price point is not disclosed anywhere
in the corpus, and two paragraphs later the closing paragraph correctly tells the reader it *is*
disclosed, at EGP 79/month, via `ASM-004`. A reader working through §6.2 top to bottom encounters the
false version first and the corrected version second, with no cross-reference reconciling them.

This is not a new defect introduced by the edit (the sentence itself predates the fix and simply wasn't
touched by it), but it means **the false-absence-claim hard failure from the original audit is only
partially closed** — the specific sentence flagged in the original Claim #11 excerpt (the closing
paragraph) is fixed, but the same underlying false claim persists, unaddressed, in a second location in
the same section, which the fix's own change-description did not mention checking for.

**Fix needed:** edit the Subscription bullet's trailing clause to remove or correct the false absence
claim, consistent with the closing paragraph's now-accurate framing — e.g. replace "the corpus does not
disclose Egypt's specific pro price point, only that it exists market-by-market" with something like
"Egypt's specific pro price point is not in the audited primary corpus, but is disclosed as labeled
External Research at EGP 79/month (`ASM-004`/`RES-004`; see below)" or simply delete the clause and let
the closing paragraph carry the qualification once, without duplicating (and this time contradicting) it
earlier in the same subsection.

## Sanity check — no new uncited claims introduced by the edits

Re-read the full section end to end against the diff implied by the two fix descriptions. No new numeric
or named-fact claim was introduced by either edit beyond the citations already checked above (the split
TLB-002/TLB-008 citation, and the ASM-004/RES-004 citation). No other sentence in the section was found
altered in a way that changes its truth-value or citation target. The only outstanding issue found by
this re-audit is the unfixed duplicate sentence in the Subscription bullet documented above — not a new
claim, but a stale one the fix should have caught and did not.

## Result of re-audit

**FAIL.** One of the two original hard failures is fully and correctly fixed (Fix #1, the Egypt
segment-revenue citation split — TLB-002 page 111 and TLB-008 page 61 both independently confirmed to
state the USD 509,936,177 FY2025 Egypt figure; TLB-010 page 20 independently confirmed to support only
the Q1 2026 figure). The second (Fix #2, the EGP 79/month false-absence claim) is correctly fixed **where
applied** — the ASM-004/RES-004 citation in §6.2's closing paragraph is accurate, properly tier-labeled,
and consistent with Section 3's own precedent — but the fix was **incomplete**: an identical false
statement ("the corpus does not disclose Egypt's specific pro price point") remains live in the
Subscription-pricing bullet immediately above it, now creating a direct internal self-contradiction
within §6.2 rather than a single clean false claim. Per this skill's 0%-tolerance rule for untraceable or
false numeric/named-fact claims, this remaining instance is itself a hard failure — the same defect class
as the original Claim #11, merely relocated rather than resolved.

**Section 6 still cannot proceed to Stage 10.** One targeted fix remains: correct or remove the
Subscription bullet's "the corpus does not disclose Egypt's specific pro price point, only that it exists
market-by-market" clause so it is consistent with (and ideally simply defers to, rather than duplicates)
the now-accurate closing paragraph. No other issue was found; once this single sentence is corrected, this
audit should be re-run to confirm before Stage 10 proceeds. The three non-blocking limitations from the
original report (AdTech citation completeness, the 39.8%/40% precision gap, and the 136%-uplift
sub-section pointer) remain open as previously characterized — none is a hard failure, but none should be
silently dropped either.

## Links (addendum)
- `vault/Knowledge/Facts/Revenue.md` (TLB-002 p.111, TLB-008 p.61, TLB-010 p.20 — re-verified directly)
- `vault/Decisions/Assumptions_Register.md` (ASM-004 row — re-verified directly)
- `vault/Research/Notes/RES-004_egypt-official-newsroom-operational-datapoints.md` (re-verified directly)
- `vault/Knowledge/Entities/Countries.md` (Egypt reporting-treatment section — cross-check for the
  "since-inception vs. FY2025" observation)
- [[Section_03_Market_Analysis]] (competitor table — re-confirmed as the labeling-discipline precedent)
- [[Section_06_Business_Model_and_Revenue_Streams|vault/Projects/Business_Plan_Drafts/Section_06_Business_Model_and_Revenue_Streams.md]] — specifically the Subscription-pricing bullet in §6.2, still containing the unfixed clause
