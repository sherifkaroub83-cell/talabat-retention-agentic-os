---
section: 6
title: Business Model and Revenue Streams
status: Done (independently verified) — two parallel verification lineages, merged 2026-07-25. Branch lineage: independent Pass 2 QA + citation audit FAIL 2026-07-25 ([[QA_Review_Section_06_v2_pass2]], [[Citation_Audit_Section_06_v2_pass2]], lowercase artifacts) → all findings fixed same day (Fix record at end, incl. DEC-013 container re-issuance and DEC-014 fee-mix root-cause) → independent re-verification double-PASS ([[Citation_Audit_Section_06_v2_pass2_reverify]], [[QA_Review_Section_06_v2_pass2_reverify]]). Main lineage: its own Pass 2 PASS 2026-07-24 ([[Citation_Audit_Section_06_v2_Pass2]], [[QA_Review_Section_06_v2_Pass2]], capital-P artifacts) + Stage 17 whole-plan audit + Stages 14-16 gates PASS
pipeline_run: 2026-07-23
supersedes_note: "Companion to (not a replacement of) vault/Projects/Business_Plan_Drafts/Section_06_Business_Model_and_Revenue_Streams.md, which was drafted for the superseded Egypt-retention problem and stays untouched as historical record. This file is the fresh draft required by the 2026-07-23 pivot to the Group-wide capital-allocation problem; it reuses the same underlying vault evidence where the evidence itself is Group-level and unaffected by the pivot, but reframes every conclusion around the new decision question."
---

# 6. Business Model and Revenue Streams

> **Pipeline provenance note.** Drafted by the top-level session running Part B (Stage 13) of
> `vault/Architecture/Business_Plan_Generation_Pipeline.md` for the talabat Group 2026 capital-allocation
> problem (`Problem_Charter.md`).
>
> **Tooling note (read first).** This session's toolset is `Read`, `Write`, `Edit`, `Glob`, `Grep` only —
> no `Agent`, `WebSearch`, or `WebFetch` tool was available, reproducing the runtime constraint first
> documented in the Phase 7 pilot (`vault/Validation/Phase7_Pilot_Execution_Report_Section_03.md`) and
> recorded in `bp-orchestrator.md`'s "Known runtime constraint" section. Per that section's documented
> fallback, every specialist role below was executed **in-context by this same session**, reading each
> agent's own `.md` definition and skill file and following its documented procedure directly, rather than
> being delegated to an isolated subagent thread:
> - **13.1 Intake & Scoping** — this session, directly, against `AI_Business_Plan_Template.md` §6 and
>   `.claude/skills/business-plan-drafting/SKILL.md`'s Section 6 entry.
> - **13.2 Evidence Assembly** — this session, directly, pulling `Strategic/Revenue Model.md`,
>   `Facts/Revenue.md`, `Topics/Pricing.md`, `Topics/Customer Economics.md`, `Topics/Grocery and
>   Retail.md`, `Topics/Advertising.md`, `Entities/Delivery_Models.md`, `Facts/Marketplace_Facts.md`,
>   `Facts/Q-Commerce.md`, plus Part A's assembled investment evidence
>   (`vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Decisions/Investment_Portfolio_Register.md`,
>   `vault/Decisions/Investment_Options_Register.md`).
> - **13.3 Gap Detection** — this session, directly; gaps typed and handled per the skill's own
>   pre-written Section 6 "Caution" note (the `ASM-013` "Subscription fee & Other Income"
>   reclassification — still-valid per the register's Pivot Reclassification, re-established under
>   `DEC-013` (approved 2026-07-25); its original container `DEC-006` is superseded/historical)
>   plus one new discrepancy this session found and flags below (§6.1, footnote).
> - **13.4 External Research Resolution (`research-agent` role)** — determined **not applicable**: Part A
>   Stage 5 (targeted research against the new problem) remains open, and this section needs no fresh
>   external pull — every genuine gap (no Egypt-specific fee-type breakdown, no Egypt commission/take-rate
>   figure, talabat pro's actual Egypt price point sitting outside the cited corpus) is stated openly
>   rather than filled with an unverified research pull, consistent with `Topics/Pricing.md`'s own
>   Open Questions discipline.
> - **13.5 Forecast & Assumption Generation (`forecasting-agent` role)** — determined **not applicable**:
>   Section 6 documents talabat's disclosed, historical revenue mechanics, not a forward projection; no
>   new `ASM-` row was needed. The one existing Assumption this section leans on, `ASM-013`
>   (the "Subscription fee & Other Income" line's decomposition — still-valid per the register's
>   Pivot Reclassification, re-established under `DEC-013`, approved 2026-07-25), is cited as-is.
> - **13.6 Decision Escalation (`decision-steward` role)** — determined **not applicable at drafting
>   time** for new judgment calls; `ASM-013` (still-valid per the register's Pivot Reclassification,
>   re-established under `DEC-013`, approved 2026-07-25 — not its superseded original container
>   `DEC-006`) already resolves the one open reclassification question this section touches, and this
>   section carries it forward as an open question rather than re-litigating it. **Post-Pass-2 update
>   (2026-07-25):** the TLB-019 p.13 same-tier conflict flagged in §6.1 has now been routed to
>   `decision-steward` for a DEC record per the Pass 2 citation audit (SF-2) — see the flag paragraph
>   in §6.1.
> - **13.7 Evidence Ranking & Conflict Resolution (`evidence-citation-agent` role)** — this session,
>   directly: one new same-tier conflict was found during evidence assembly (a %-of-GMV-by-fee-type range
>   in `Facts/Revenue.md`'s TLB-019 entry that does not reconcile with the more granular, internally
>   consistent Q1 2026 mix table in the same Facts file) — both are named below, neither is silently
>   preferred, per the citation-audit skill's own rule against resolving same-tier conflicts by silent
>   selection.
> - **13.8 Drafting (McKinsey Lens)** — this session, directly (below).
> - **13.9 Citation Verification (`evidence-citation-agent` role)** — this session, directly, per
>   `.claude/skills/citation-audit/SKILL.md`; output at
>   `vault/Validation/Citation_Audit_Section_06_v2.md`, **Pass 1/self-reviewed**.
> - **13.10 Cross-Section Consistency & KPI Alignment (`kpi-agent` role — Section 6 carries financial
>   figures, so this runs as the financial/KPI-agent role per the pipeline's delegation map, not
>   "Orchestrator")** — this session, directly: cross-checked against `Section_09_Financial_Plan.md`'s
>   revenue-growth figures and against `Value_Driver_Tree_v2.md`'s Stage 10 (Revenue) nodes; no
>   contradiction found (see §6.6).
> - **13.11 QA & Final Review (`qa-review-agent` role)** — this session, directly, per
>   `.claude/skills/qa-review/SKILL.md`, including the Problem Consistency, Financial Integrity, and
>   Geographic Evidence gates; output at `vault/Validation/QA_Review_Section_06_v2.md`, **Pass 1/self-reviewed**.
>
> Per `Business_Plan_Generation_Pipeline.md`'s gate rules, self-reviewed 13.9/13.11 earn this section
> **"Drafted — self-reviewed," not the unqualified "✅ Done."** A genuinely independent Pass 2 (a fresh,
> separately-invoked citation audit and QA review) is still required before this section is
> submission-final.
>
> **Addendum, 2026-07-24 (independent Pass 2 review).** An independent citation audit and QA review
> ([[Citation_Audit_Section_06_v2_Pass2]], [[QA_Review_Section_06_v2_Pass2]]) re-verified every numeric
> claim in this section directly against `Facts/Revenue.md`, `vault/Forecasts/Value_Driver_Tree_v2.md`,
> `vault/Decisions/Assumptions_Register.md`, and the relevant Topic Notes — including a specific check
> that every `Value_Driver_Tree_v2.md` node ID cited (N-05 through N-30) matches that file's actual node
> definitions (this session's specific brief, given wrong-node-ID defects found in other sections' Pass 2
> reviews), and a specific check that the pro subscriber GMV-share figure correctly reads "Q1 2025→Q1
> 2026" throughout, not the "FY2024→Q1 2026" mislabeling found and fixed elsewhere in the repo this
> session. **0 defects found.** The §6.1 TLB-019 p.13 discrepancy this section already flags (rather than
> force-reconciling) was independently re-derived and confirmed correct: the Q1 2026 mix table sums to
> the section's own stated 39% take rate, while TLB-019 p.13's separate FY'25 range is materially
> inconsistent with it and with the corroborated 3.4-3.5% Advertising figure — the section's decision not
> to use the TLB-019 p.13 range is the correct handling, not an unresolved defect. This section is now
> **Done (independently verified)**.

---

## Answer, stated first

talabat's revenue is not four independent product lines but a single GMV-times-blended-take-rate system
(~40–41% of GMV FY2024–FY2025; 38%→39% Q1 2025→Q1 2026) in which four disclosed fee-type components — commission fees,
delivery & service fees, subscription fee & other income, and advertising & listing fees — respond to
different underlying volume, penetration, or pricing drivers, and are MECE by construction of talabat's
own Management Revenue reporting convention (every dollar of revenue is exactly one of the four, net of
a fifth, contra-revenue "vouchers and other discounts" line). The capital-allocation-relevant finding is
that the fastest-growing, most under-penetrated-relative-to-its-own-stated-benchmark lines — subscription
(driven by talabat pro penetration) and advertising (driven by Partner demand for a customer base that
must first be engaged) — are also the lines this plan's ranked candidate options (`OPT-002` talabat pro
acceleration; `OPT-004` advertising monetization gap closure) are best positioned to move, while G&R's
structurally lower take rate/margin (the reason `OPT-001`'s talabat mart densification carries an
explicit, disclosed EBITDA drag) means multi-vertical GMV growth is not uniformly as valuable per dollar
as the headline GMV figure implies. At the per-customer level, the >4x monthly-spend gap between
food-only (AED 194 / USD 53/month, 3.8 orders) and multi-vertical (AED 814 / USD 222/month, 12.8 orders)
customers is the clearest disclosed unit-economics argument for the plan's cross-sell-weighted allocation.
One open reporting question — the "Subscription fee & Other Income" combined line's decomposition into a
true subscription component and a tMart-dominated "other income" component (`ASM-013`, still-valid per
the register's Pivot Reclassification, re-established under `DEC-013`, approved 2026-07-25) — is
carried forward exactly as already resolved, not re-litigated here. These findings refine — rather than
merely restate — Section 2's governing hypothesis (§2.3: that an AI-enabled, evidence-ranked, stage-gated
allocation of the USD 175mn programme will outperform an undifferentiated one): they identify *which*
revenue lines a differentiated allocation should weight (subscription-penetration and advertising) and
supply the disclosed unit-economics reason why.

---

## 6.1 Revenue Generation Methods — MECE Streams Traced to the Value Driver Tree

**Why this is MECE.** talabat's own "Management Revenue" reporting convention already decomposes total
revenue into exactly four fee-type lines, net of one contra-revenue line — every disclosed revenue dollar
belongs to exactly one of the five rows below, no overlap, no gap *(Group; TLB-001, page 27; TLB-002,
page 20)*:

| Stream | FY2024 | FY2025 | Growth | Primary driver | Value Driver Tree node(s) |
|---|---|---|---|---|---|
| **Commission fees** | USD 1,062mn | USD 1,297mn | +25% → +22% | Food-vertical order volume (agent-model marketplace transaction — talabat earns commission without owning inventory); rate under some disclosed downward pressure | N-05, N-10 (Food-leadership capability), N-14/N-16 (order frequency), N-26 (Food GMV) |
| **Delivery & Service fees** | USD 696mn | USD 859mn | +29% → +24% | Order count and basket composition; structurally eroded per-order by talabat pro's free-delivery-above-threshold benefit even as pro raises order frequency | N-08 (pro adoption), N-14/N-16 |
| **Subscription fee & Other Income** *(combined line — see decomposition below)* | USD 952mn | USD 1,397mn | +44% → +47% | talabat pro subscriber-penetration (GMV share 32% (Q1 2025) → 49% (Q1 2026), Group; TLB-020 p.8; TLB-014 p.14) **plus** tMart's near-95%-take-rate owned-inventory "other income" component | N-07 (G&R product-mix shift), N-08, N-20/N-21/N-22 (retention/CLV uplift) |
| **Advertising & listing fees** | USD 246mn | USD 323mn | +27% → +32% | Partner demand for visibility — a lagging function of how engaged/frequently-ordering the customer base is, not an independent driver | N-09 (AI/personalisation), N-29, N-11/N-17 (multi-vertical usage), `OPT-004` |
| **less: Vouchers and other discounts** *(contra-revenue)* | — | USD (120)mn | — | Funded promotional/incentive spend | N-12 (targeted incentives) |

*(All dollar figures: Group, pro forma Management Revenue basis; TLB-001 page 27; TLB-002 page 20;
TLB-009 page 4.)* Together these lines convert GMV to revenue at a blended take rate of ~40% (FY2024) →
~41% (FY2025), rising to 39% of GMV in Q1 2026 from 38% a year earlier *(Group; TLB-001 page 27; TLB-002
page 20; TLB-020 pages 4, 10)*.

**The "Subscription fee & Other Income" decomposition (`ASM-013`, still-valid per the register's Pivot
Reclassification, re-established under `DEC-013`, approved 2026-07-25) — cited exactly as an open
reclassification, never silently resolved.** The combined line above is not itself two evenly-split
components: on a Q1 2026 basis, "Subscription fees" (talabat pro membership) was 1.0% of GMV
(~USD 25.8mn) while "Own grocery & other income" (predominantly tMart's near-95%-take-rate owned-inventory
revenue) was 15.2% of GMV (~USD 408.4mn) — a combined ~16.2% of GMV, reconciling with the audited Q1 2026
line items within ~0.2% *(Group, Q1 2026 basis only; TLB-010 page 16; TLB-011 page 4; `ASM-013` per `DEC-013`, High
confidence for the individual component figures, Medium confidence for the cross-document decomposition
logic itself)*. The two-way **%-of-GMV** split is disclosed only for Q1 2025/Q1 2026 *(TLB-011, page 4)*;
the **dollar** split of Subscription fees vs. Other direct income is additionally disclosed for Q2 2025
*(TLB-006, page 18)*, Q3 2025 *(TLB-007, page 19)*, and the audited 485-day since-inception period
*(TLB-008, page 52; TLB-002, page 105 — covering 3 September 2024–31 December 2025, **not** FY2025)* —
but no full-year FY2024/FY2025 pro-forma decomposition is disclosed, meaning the FY2025 "USD 1,397mn,
+47%" figure in the table above cannot itself be cleanly split into "true subscription" vs. "tMart other
income" at the annual level from disclosed data.
This is the section's single most load-bearing open question: **the fastest-growing revenue line in
talabat's own reporting convention is disclosed evidence for two different, only partially overlapping
investment theses — talabat pro penetration (`OPT-002`) and talabat mart densification (`OPT-001`) —
and the corpus does not let this plan cleanly attribute how much of the line's growth belongs to each.**

**A second, genuinely new discrepancy found during evidence assembly, flagged rather than force-reconciled.**
`Facts/Revenue.md`'s TLB-019 entry separately states a "Revenue by fee type (% of GMV, FY'25)" range —
Commission Fees 14.2–16.2%; Delivery & Service Fees 12.8–14.8%; Advertising & Listing Fees 8.9–9.4%;
Subscription Fees & Other Income 3.3–3.5% *(TLB-019, page 13)*. This range does **not** reconcile with the
Q1 2026 mix table cited above from the same Facts file (Advertising 3.4% vs. this range's 8.9–9.4%;
Subscription + Other income combined 16.2% vs. this range's 3.3–3.5%) — nor with the well-corroborated
3.4–3.5%-of-GMV advertising figure repeated independently in `Strategic/Revenue Model.md`,
`Topics/Advertising.md`, and this plan's own Section 3 citation-audited draft. **This section does not use
the TLB-019 page 13 %-of-GMV-by-type range for Advertising or Subscription for that reason** — it relies
instead on the internally-consistent, cross-corroborated Q1 2026 mix table (TLB-011) and the
independently-verified dollar/growth figures (TLB-002/TLB-009) above, and states the TLB-019 discrepancy
here explicitly so a future citation audit does not re-introduce it. Per the citation-audit skill's own
rule, this is presented as a found-and-flagged same-tier conflict, not silently resolved by picking one
side. **Pass 2 diagnosis (2026-07-25, `Citation_Audit_Section_06_v2_pass2.md` SF-2 — recorded here as a
diagnosis to be verified against the TLB-019 page 13 source slide, not as a resolution):** the discrepant
ranges appear to be a one-row **label shift** in extraction — recomputing FY2024/FY2025 fee-type revenue
÷ GMV from the disclosed dollars matches the recorded ranges in order, but each assigned to the *next*
row's label. The conflict has been routed to `decision-steward` for a DEC record and, if the diagnosis
is confirmed, a dated correction note on `Facts/Revenue.md` (mirroring the ASM-021 precedent); until
then it remains flagged, unused, and unresolved here.

**Geography caution — every figure above is Group-level.** No document in the corpus breaks out Egypt's
(or any other single market's) revenue by the four fee-type lines — Egypt's only disclosed figures are
total segment revenue and gross profit, not a commission/delivery/subscription/advertising split
(`Strategic/Revenue Model.md`, "Egypt-Specific Considerations"). Applying the Group-level mix-shift
mechanism described above to Egypt or any other single market would be an `inferred-applicability`
extrapolation; this section does not make that extrapolation.

## 6.2 Pricing Strategy

talabat's pricing is not one strategy but four distinct pricing mechanisms, one per revenue stream, each
priced differently and each subject to a different constraint:

- **Commission (agent-model, negotiated/rate-set)** — talabat sets a commission rate on Food and Local
  Shops orders, but this pricing power is not unconstrained: Qatar imposed a government commission-rate
  cap and a ban on delivery-registration fees following a Ministry of Commerce and Industry investigation
  *(country-specific, Qatar; TLB-026, page 46)*, Oman has seen a licensing dispute *(country-specific,
  Oman; TLB-001, page 32)*, and Q1 2026 results explicitly name "lower commission rates" as a contributing
  factor to that quarter's revenue-mix shift *(Group; TLB-014, page 15)* — i.e., commission-rate
  compression is an active, disclosed trend, not a hypothetical risk. **So what:** any allocation
  recommendation that assumes unconstrained commission-rate headroom to self-fund new investment would be
  contradicted by the corpus's own evidence.
- **Delivery & service fees (usage-based)** — priced per order/basket, with talabat pro's free-delivery
  benefit above a minimum basket acting as a deliberate, structural price discount for subscribers, in
  direct tension with this line's own per-order revenue *(Group; `Strategic/Revenue Model.md`)*.
- **Subscription (talabat pro — tiered, flat recurring fee)** — a Family Plan tier carries a disclosed
  >60% retention premium over solo plans *(Group; TLB-018, page 6)*, evidencing at least a two-tier
  structure (solo vs. Family Plan), though the corpus discloses no absolute price point for either tier
  in the cited primary corpus. **Explicit gap, stated per `Topics/Pricing.md`'s own discipline:**
  talabat pro's actual Egypt subscription price (reported in the project's separate, uningested secondary
  corpus) is not cited here because it has not been formally ingested into the vault's Facts/Sources
  layer with a proper citation (`ASM-004`, `status: requires-revision` for the new problem, not
  `Approved`) — this section states the gap rather than smuggling in an unverified number.
- **tMart / owned-inventory (principal-model, direct retail pricing)** — talabat sets retail prices
  directly on tMart's dark-store inventory, converting GMV to revenue at an effective ~95% take rate,
  structurally different from the agent-model commission above *(Group; TLB-002, page 20)*. **Caution:**
  this ~95% figure is a GMV-to-revenue *conversion* rate, not a gross-margin figure — it does not imply
  tMart is a 95%-margin business; the cost of owned inventory and fulfilment sits below this revenue line,
  and G&R's overall product mix is separately, explicitly disclosed as a (0.5)–(0.7)pp drag on Group
  Adjusted EBITDA margin *(Group; TLB-014, pages 6, 8; `Topics/Grocery and Retail.md`)* — the two figures
  measure different things and are not force-reconciled here.
- **Advertising (auction-based, value-priced to Partner ROI)** — sold via a smart-auction/self-service ads
  system (`Entities/Technology_Platforms.md`), with talabat's own CPG advertising-investment ratio (8%)
  *(Group; TLB-015, page 108)* running well above the 2% industry figure that the same source cites as its
  own comparator *(external industry benchmark, disclosed within TLB-015, page 108 — not a talabat Group
  metric; no arithmetic blending)*. Two distinct ~7% data points frame the monetization headroom — they
  carry **different denominators and are stated separately, never compared same-basis** (per Section 4's
  corrected treatment of the identical evidence): (1) a disclosed **global leading-peer benchmark** of ~7%
  of **total GMV**, which management has adopted as a medium-term target *(external/global benchmark;
  TLB-001, page 21; TLB-015, pages 26, 86, 105)*, against which talabat's Group-wide advertising revenue
  stands at 3.4–3.5% of total GMV *(Group; TLB-002, pages 11, 14, 19; TLB-011, page 4)*; and (2)
  separately — a country- and vertical-specific achieved level, not a Group-wide benchmark — UAE talabat
  mart adtech margins reached ~7% of **tMart GMV/sales** in Q4'25, double the company average
  *(country-specific, UAE, tMart denominator; TLB-002, page 10; TLB-019, page 7; TLB-014, page 19)* —
  proof the benchmark level is attainable within talabat's own footprint, not a same-basis comparison
  against the Group figure. **So what:** the gap between the global-peer ~7%-of-total-GMV benchmark and
  the Group's 3.4–3.5%, with the UAE tMart achievement as attainability evidence, is the direct evidence
  base for `OPT-004`.

## 6.3 Recurring vs. One-Time Revenue Streams

**Reframing note, consistent with Sections 2/3's own precedent.** The template's language ("subscription
fees, licensing, service contracts, custom AI solutions") describes a SaaS/professional-services revenue
mix that does not map cleanly onto talabat's own disclosed marketplace model — talabat discloses no
"one-time" revenue line in the traditional sense (no license sale, no setup fee, no custom-project
contract). This section states that mismatch explicitly rather than forcing an artificial "one-time"
category the corpus does not support. The MECE distinction talabat's own disclosure actually supports is:

- **Contractually recurring:** subscription fees only (talabat pro membership) — the smallest disclosed
  revenue component, at 1.0% of GMV (~USD 25.8mn) in Q1 2026 per the `ASM-013`/`DEC-013` decomposition,
  sitting *inside* the reported combined "Subscription fee & Other Income" line (which, at USD 1,397mn
  FY2025, is itself the **largest** of the four fee-type lines in dollar terms). It is the only revenue
  element whose growth is driven by a *penetration* variable (share of customers subscribed) rather than
  a pure transaction-volume variable. The +44% (FY2024) and +47% (FY2025) growth rates belong to the
  **combined line** — subscription plus tMart-dominated other income, the fastest-growing of the four
  lines in both years — not to the standalone subscription component, whose split from the combined line
  is disclosed only at Q1 2025/Q1 2026 scope (§6.1) *(Group; TLB-001, page 27; TLB-002, page 20;
  `Strategic/Revenue Model.md`)*.
- **Recurring-with-usage (repeats every transaction, no contractual lock-in):** commission fees, delivery
  & service fees, tMart owned-inventory ("other income") revenue, and advertising & listing fees — all
  scale with order volume, GMV, or Partner campaign spend, and stop the moment the underlying transaction
  stops, unlike a subscription's periodic charge that persists independent of that period's order count.
- **No disclosed one-time revenue category exists anywhere in the corpus**, at any geography level.

**So what for the P&L.** Because subscription is talabat's only contractually recurring revenue element,
and because subscriber GMV share has risen from 32% to 49% of platform GMV (Q1 2025→Q1 2026) *(Group;
TLB-020, page 8; TLB-014, page 14)*, the revenue model is structurally shifting toward a larger share of
demand sitting behind a recurring commitment even though the standalone subscription-fee component itself
remains the smallest disclosed revenue component (1.0% of GMV, Q1 2026) inside a combined reported line
that is the largest of the four — the leverage comes from what a subscribed customer does downstream
(order frequency, multi-vertical adoption), not from the subscription fee in isolation.

## 6.4 Unit Economics — What One Customer and One Order Earn and Cost

**Per-customer, per-month (the clearest disclosed unit-economics differentiator in the corpus).**
Food-only customers spent AED 194 (≈ USD 53)/month at 3.8 orders, while multi-vertical (Food + G&R)
customers spent AED 814 (≈ USD 222)/month at 12.8 orders — a >4x monthly-spend gap tied to a ~3.4x
order-frequency gap *(Group, September 2024 basis; TLB-026, pages 91, 122)*. **This is the single
strongest per-customer economic argument in the corpus for the plan's cross-sell-weighted allocation**
(`OPT-001`, `OPT-002`) over an allocation that treats every incremental order the same regardless of
vertical mix — multi-vertical customers spend roughly four times as much per month. **Caution:** the
disclosed comparison is **cross-sectional** — it measures what multi-vertical customers spend, not the
effect of converting a food-only customer; selection (higher-spend customers self-selecting into
multi-vertical usage) is not excluded by the source, so the realizable per-customer conversion uplift is
not itself disclosed. The comparison evidences the size of the prize, not a guaranteed uplift.

**Per-order / blended, Group level.** Revenue converts from GMV at a blended take rate of ~40–41%
FY2024–FY2025 (38%→39% Q1 2025→Q1 2026; §6.1); net
delivery cost runs 6.0% (FY2024) → 6.3% (FY2025) of GMV, and gross profit runs 12.3% (FY2024) → 11.9%
(FY2025) of GMV *(Group; TLB-002, pages 17, 20)* — i.e., the take rate is not falling toward gross profit
one-for-one; rising delivery/order-processing costs are compressing the gap. Customer acquisition and
retention costs (CARC) ran USD 89mn (1.5% of GMV, 2023) → USD 103mn (1.4% of GMV, 2024) → USD 155mn
(1.6% of GMV, 2025) — non-monotonic as a share of GMV (down, then up), so the series is shown at all
three disclosed points rather than endpoint-only *(Group; TLB-001, page 28; TLB-002, page 21)* — the
disclosed cost side of funding the frequency/spend uplift
described above, meaning any allocation recommendation should weigh acquisition/retention spend
*efficiency*, not just the existence of the behaviour-change mechanism, as a criterion (consistent with
`DEC-009`'s 11-criterion comparison).

**What cannot be shown.** No disclosed source breaks any of the above down by country — the AED 194/AED
814 comparison, the take-rate/cost-line ratios, and CARC are all Group-level only; the corpus does not
state whether they hold at the same magnitude in Egypt or any other single market (`Topics/Customer
Economics.md`, Open Questions). No per-order contribution-margin figure (revenue minus variable
delivery/payment-processing cost per order) is disclosed anywhere — only the aggregate gross-profit-margin-
of-GMV figures above, which this section does not attempt to decompose into a per-order figure the corpus
does not itself supply. No disclosed average-order-value (AOV) or basket-size figure exists at any
geography level (`ASM-015`) — GMV itself excludes subscription fees and rider tips by definition
*(TLB-001, page 27)*, so this section's per-customer spend figures are monthly-spend, not basket-size,
comparisons.

## 6.5 The Proposed AI Decision-Support Layer's Own Revenue Treatment (cross-reference)

Consistent with Section 2.5's framing: the AI-enabled capital-allocation decision-support system this
plan proposes is an internal capability, not a separately-sold product, and therefore does not add a new
revenue line to the MECE breakdown above. Its value is realized entirely through the four existing
streams' better allocation — specifically, by helping direct capital toward the mechanisms (`OPT-002`
talabat pro; `OPT-004` advertising) shown above to sit closest to the under-penetrated, fastest-growing
lines, rather than by monetizing the decision-support layer itself. This is a deliberate scope choice
carried forward from Section 2, not a gap in this section's own analysis.

## 6.6 Cross-section consistency check (Stage 13.10, self-performed, financial/KPI role)

Checked against `Section_09_Financial_Plan.md`: Section 9's headline case cites talabat's disclosed
FY2026 revenue-growth guidance (14–17% cFX) and the FY2026 Adjusted EBITDA margin bridge — neither figure
is restated or contradicted here, since this section deliberately confines itself to FY2024/FY2025
historical, disclosed revenue-stream mechanics (per `DEC-008`'s scope, which governs Section 9's headline
case, not this section) rather than projecting a FY2026 revenue-mix figure of its own. Checked against
`Value_Driver_Tree_v2.md`: every revenue stream in §6.1 is traced to a specific Stage 9/10 node (N-26
through N-30) and the cross-cutting Stage 2–4 capability/behaviour nodes that feed them, consistent with
the tree's own required chain shape. No `ASM-029`–`033` OPT-level dollar range is shown anywhere in this
section, so the `DEC-008`/`DEC-009` headline-exhibit placement restriction is not implicated. No conflict
found.

---

## Traceability (partial — full table due at Section 14)

| Claim | Source |
|---|---|
| FY2024/FY2025 revenue by fee type (Commission, Delivery & Service, Subscription & Other Income, Advertising & Listing, Vouchers) | TLB-001, p.27; TLB-002, p.20; TLB-009, p.4 |
| Blended take rate ~40% (FY24) → ~41% (FY25); 38%→39% of GMV Q1'25→Q1'26 | TLB-001 p.27; TLB-002 p.20; TLB-020 p.4/p.10 |
| ASM-013 (re-established under DEC-013): Subscription fee & Other Income decomposition (Q1 2026 basis: Subscription 1.0%/~USD25.8mn; Own grocery & other income 15.2%/~USD408.4mn) | `ASM-013`, still-valid per the register's Pivot Reclassification, re-established under `DEC-013` (approved 2026-07-25; original container `DEC-006` superseded/historical); TLB-010 p.16; TLB-011 p.4 |
| TLB-019 p.13 %-of-GMV-by-type range does not reconcile with TLB-011's Q1'26 mix table or the corroborated 3.4-3.5% Advertising figure — flagged, not used; Pass 2 diagnosis: probable one-row label shift in extraction, routed to decision-steward | TLB-019, p.13 (flagged discrepancy); `Citation_Audit_Section_06_v2_pass2.md` SF-2 |
| Qatar commission-rate cap + delivery-registration-fee ban | TLB-026, p.46 |
| Oman licensing dispute | TLB-001, p.32 |
| Q1 2026 "lower commission rates" contributing to revenue-mix shift | TLB-014, p.15 |
| Family Plan retention premium >60% vs. solo plans | TLB-018, p.6 |
| talabat pro Egypt price point not cited — uningested secondary corpus, ASM-004 requires-revision | `Topics/Pricing.md` Open Questions; `Assumptions_Register.md` ASM-004 |
| tMart ~95% take rate (GMV-to-revenue conversion, not margin) | TLB-002, p.20 |
| G&R product-mix EBITDA drag (0.5)-(0.7)pp | TLB-014, p.6/p.8 |
| CPG advertising investment ratio 8% (Group) vs. 2% (external industry comparator disclosed within the same source, not a talabat metric) | TLB-015, p.108 |
| Global leading-peer advertising benchmark ~7% of total GMV, management-adopted medium-term target (external/global benchmark) | TLB-001 p.21; TLB-015 pp.26, 86, 105 |
| UAE talabat mart adtech ~7% of tMart GMV/sales, Q4'25, double company average (country/vertical-specific, tMart denominator) | TLB-002 p.10; TLB-019 p.7; TLB-014 p.19 |
| Group advertising revenue 3.4-3.5% of total GMV | TLB-002 pp.11, 14, 19; TLB-011 p.4 |
| talabat pro subscriber GMV share 32% (Q1 2025) → 49% (Q1 2026) | TLB-020 p.8; TLB-014 p.14 (via `Facts/Talabat_Pro.md`) |
| Food-only vs. multi-vertical monthly spend/frequency (AED194/3.8 vs. AED814/12.8, Sept 2024) | TLB-026, pp.91, 122 |
| Net delivery cost 6.0%→6.3% of GMV; gross profit 12.3%→11.9% of GMV (FY24→FY25) | TLB-002, pp.17, 20 |
| CARC USD89mn (1.5% of GMV, 2023) → USD103mn (1.4% of GMV, 2024) → USD155mn (1.6% of GMV, 2025), non-monotonic as % of GMV | TLB-001, p.28; TLB-002, p.21 |
| No disclosed AOV/basket-value figure at any geography; GMV excludes subscription fees/rider tips | `ASM-015`; TLB-001, p.27 |
| No Egypt-specific fee-type revenue breakdown anywhere in corpus | `Strategic/Revenue Model.md`, "Egypt-Specific Considerations" |
| Everyday App / Food-leadership bucket investment programme (context) | `vault/Decisions/Investment_Portfolio_Register.md` |
| OPT-001/002/004 as the destinations of specific revenue-stream findings | `vault/Decisions/Investment_Options_Register.md`; `DEC-009` |

## See also
[[Section_02_Business_Description]] · [[Section_04_Value_Proposition]] ·
`vault/Knowledge/Strategic/Revenue Model.md` · `vault/Knowledge/Topics/Pricing.md` ·
`vault/Knowledge/Topics/Customer Economics.md` · `vault/Knowledge/Topics/Grocery and Retail.md` ·
`vault/Forecasts/Value_Driver_Tree_v2.md` · `vault/Decisions/Investment_Options_Register.md` ·
[[DEC-009_investment-options-ranking-and-allocation-priority]] ·
[[DEC-013_subscription-line-reclassification-reissuance]] · `vault/Architecture/Geographic_Evidence_Rules.md` ·
`Problem_Charter.md`

---

## Fix record (2026-07-25, post-Pass 2)

Fix cycle executed by the Orchestrator against the two independent Pass 2 reports —
`vault/Validation/QA_Review_Section_06_v2_pass2.md` (FAIL: B1–B4 blocking, N1–N5 non-blocking) and
`vault/Validation/Citation_Audit_Section_06_v2_pass2.md` (FAIL: HF-1, SF-1–SF-5) — plus one defect
imported from Section 7's QA review (CARC endpoint-only series). Edits confined to this file; the
tracker was not touched. No new figures introduced; every corrected number is a disclosed figure
already on file in the Facts layer or in `DEC-013`.

| Finding | Fix applied |
|---|---|
| B1 / HF-1 (also N4, SF re Pass 1 item 14) | All three occurrences of "32%→49% (FY2024→Q1 2026)" restated as 32% (Q1 2025) → 49% (Q1 2026): §6.1 table cell, §6.3 "So what" paragraph, traceability row. Citations moved off `Topics/Talabat Pro.md` to TLB-020 p.8 / TLB-014 p.14 directly (per ASM-021's 2026-07-24 correction and the fixed Sections 3/4). |
| B2 / SF-1 | §6.2 advertising bullet rewritten to align with Section 4's corrected two-data-point treatment: (1) the ~7% global leading-peer benchmark, denominator = total GMV, management-adopted medium-term target (TLB-001 p.21; TLB-015 pp.26/86/105), vs. Group 3.4–3.5% of total GMV; (2) separately, UAE tMart adtech ~7% of tMart GMV/sales, Q4'25, double company average (TLB-002 p.10; TLB-019 p.7; TLB-014 p.19) — denominators stated, never blended, "So what" re-pointed at the benchmark-vs-Group gap with UAE tMart as attainability evidence. Traceability row split into three separately-tagged rows. |
| B3 | All four container references corrected to "`ASM-013`, still-valid per the register's Pivot Reclassification, re-established under `DEC-013` (approved 2026-07-25)" per DEC-013's Impact section: provenance notes 13.3/13.5/13.6, Answer paragraph, §6.1 decomposition heading + confidence note, traceability row. No occurrence of "ASM-013 status: Approved" or of DEC-006-as-active-resolver remains; DEC-006 is referenced only as the superseded historical container. DEC-013 added to See also. |
| B4 | Both §6.3 occurrences reworded: subscription is now described as the smallest disclosed revenue component (1.0% of GMV / ~USD 25.8mn, Q1 2026, per ASM-013/DEC-013) inside the combined "Subscription fee & Other Income" line, which is explicitly identified as the largest of the four lines (USD 1,397mn FY2025). The +44%/+47% growth rates are re-attributed to the combined line, with the component split noted as Q1-scope only. |
| N1 | Answer paragraph and §6.4 take-rate summaries corrected from "~38–41% across FY2024–2025" to "~40–41% FY2024–FY2025 (38%→39% Q1 2025→Q1 2026)". |
| N2 | One sentence added at the end of the Answer explicitly naming Section 2's governing hypothesis (§2.3) and stating that this section refines it. |
| N3 | The 2% comparator in the 8%-vs-2% CPG comparison retagged as an external industry benchmark disclosed within TLB-015 p.108, not a talabat Group metric (body + traceability row); the 8% stays Group-tagged. |
| N4 | Folded into B1's fix (pro-series citations now TLB-020 p.8 / TLB-014 p.14). |
| N5 | Not fixable by editing this draft: a fresh, independently-invoked Pass 2 citation re-check of the changed passages is still required before ✅ Done. Frontmatter status updated to state this and to mark the Pass 1 audit's items 3/14 as superseded (this also clears the stale-audit-reference item). |
| SF-2 | TLB-019 p.13 footnote kept as flagged-not-resolved; Pass 2's one-row label-shift diagnosis appended to it, explicitly marked as a diagnosis pending verification, with routing to `decision-steward` for a DEC record and a Facts-layer correction note recorded in the flag paragraph and in provenance note 13.6. |
| SF-3 | §6.4 causal gloss removed: "a customer who becomes multi-vertical is worth roughly four times as much" replaced with the cross-sectional statement plus an explicit selection-effect caution — the realizable conversion uplift is stated as not disclosed. |
| SF-4 | Group 3.4–3.5% advertising figure re-cited to TLB-002 pp.11/14/19 and TLB-011 p.4 (body + new dedicated traceability row). |
| SF-5 | "Disclosed only for Q1 2025/Q1 2026" corrected: the %-of-GMV split remains Q1-only (TLB-011 p.4), but the dollar split's Q2 2025 (TLB-006 p.18), Q3 2025 (TLB-007 p.19), and audited 485-day since-inception (TLB-008 p.52 / TLB-002 p.105 — 3 Sep 2024–31 Dec 2025, not FY2025) disclosures are now acknowledged; the load-bearing no-full-year-decomposition conclusion is retained. |
| CARC (from Section 7 QA) | §6.4 and traceability row now show the full disclosed three-point series — USD 89mn (1.5%, 2023) → USD 103mn (1.4%, 2024) → USD 155mn (1.6%, 2025) — with the non-monotonic %-of-GMV path stated, replacing the endpoint-only presentation. |

Residual before ✅ Done: (a) fresh independent citation re-check of the changed passages (N5); (b)
Pass 2 QA re-review of the changed passages; (c) the SF-2 decision-steward DEC record and Facts-layer
correction live outside this file and remain open.
