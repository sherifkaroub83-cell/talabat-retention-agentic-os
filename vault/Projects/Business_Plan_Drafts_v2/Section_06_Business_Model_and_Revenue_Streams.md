---
section: 6
title: Business Model and Revenue Streams
status: Drafted — self-reviewed (Pass 1); citation audit run in-session ([[Citation_Audit_Section_06_v2]]); independent Pass 2 citation re-check and QA review (incl. the three new gates) still required before ✅ Done
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
>   pre-written Section 6 "Caution" note (the `ASM-013`/`DEC-006` "Subscription fee & Other Income"
>   reclassification) plus one new discrepancy this session found and flags below (§6.1, footnote).
> - **13.4 External Research Resolution (`research-agent` role)** — determined **not applicable**: Part A
>   Stage 5 (targeted research against the new problem) remains open, and this section needs no fresh
>   external pull — every genuine gap (no Egypt-specific fee-type breakdown, no Egypt commission/take-rate
>   figure, talabat pro's actual Egypt price point sitting outside the cited corpus) is stated openly
>   rather than filled with an unverified research pull, consistent with `Topics/Pricing.md`'s own
>   Open Questions discipline.
> - **13.5 Forecast & Assumption Generation (`forecasting-agent` role)** — determined **not applicable**:
>   Section 6 documents talabat's disclosed, historical revenue mechanics, not a forward projection; no
>   new `ASM-` row was needed. The one existing Assumption this section leans on, `ASM-013`
>   (the "Subscription fee & Other Income" line's decomposition, `status: Approved`), is cited as-is.
> - **13.6 Decision Escalation (`decision-steward` role)** — determined **not applicable**: no new
>   judgment call arose; `ASM-013`/`DEC-006` already resolves the one open reclassification question this
>   section touches, and this section carries it forward as an open question rather than re-litigating it.
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

---

## Answer, stated first

talabat's revenue is not four independent product lines but a single GMV-times-blended-take-rate system
(~38–41% of GMV across FY2024–2025) in which four disclosed fee-type components — commission fees,
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
true subscription component and a tMart-dominated "other income" component (`ASM-013`/`DEC-006`) — is
carried forward exactly as already resolved, not re-litigated here.

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
| **Subscription fee & Other Income** *(combined line — see decomposition below)* | USD 952mn | USD 1,397mn | +44% → +47% | talabat pro subscriber-penetration (GMV share 32%→49%, Q1 2025→Q1 2026) **plus** tMart's near-95%-take-rate owned-inventory "other income" component | N-07 (G&R product-mix shift), N-08, N-20/N-21/N-22 (retention/CLV uplift) |
| **Advertising & listing fees** | USD 246mn | USD 323mn | +27% → +32% | Partner demand for visibility — a lagging function of how engaged/frequently-ordering the customer base is, not an independent driver | N-09 (AI/personalisation), N-29, N-11/N-17 (multi-vertical usage), `OPT-004` |
| **less: Vouchers and other discounts** *(contra-revenue)* | — | USD (120)mn | — | Funded promotional/incentive spend | N-12 (targeted incentives) |

*(All dollar figures: Group, pro forma Management Revenue basis; TLB-001 page 27; TLB-002 page 20;
TLB-009 page 4.)* Together these lines convert GMV to revenue at a blended take rate of ~40% (FY2024) →
~41% (FY2025), rising to 39% of GMV in Q1 2026 from 38% a year earlier *(Group; TLB-001 page 27; TLB-002
page 20; TLB-020 pages 4, 10)*.

**The "Subscription fee & Other Income" decomposition (`ASM-013`, `Approved`) — cited exactly as an open
reclassification, never silently resolved.** The combined line above is not itself two evenly-split
components: on a Q1 2026 basis, "Subscription fees" (talabat pro membership) was 1.0% of GMV
(~USD 25.8mn) while "Own grocery & other income" (predominantly tMart's near-95%-take-rate owned-inventory
revenue) was 15.2% of GMV (~USD 408.4mn) — a combined ~16.2% of GMV, reconciling with the audited Q1 2026
line items within ~0.2% *(Group, Q1 2026 basis only; TLB-010 page 16; TLB-011 page 4; `ASM-013`, High
confidence for the individual component figures, Medium confidence for the cross-document decomposition
logic itself)*. This two-way split is disclosed only for Q1 2025/Q1 2026, **not restated for full-year
FY2024/FY2025** — meaning the FY2025 "USD 1,397mn, +47%" figure in the table above cannot itself be
cleanly split into "true subscription" vs. "tMart other income" at the annual level from disclosed data.
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
side.

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
  running well above a stated 2% industry benchmark *(Group; TLB-015, page 108)* against a management-stated
  ~7%-of-GMV medium-term target already reached in the UAE for talabat mart specifically, versus 3.4–3.5%
  of GMV Group-wide *(country-specific, UAE tMart vs. Group; TLB-001, page 21; TLB-002, page 10; TLB-014,
  page 19)*. **So what:** the gap between the UAE-achieved benchmark and the Group average is the direct
  evidence base for `OPT-004`.

## 6.3 Recurring vs. One-Time Revenue Streams

**Reframing note, consistent with Sections 2/3's own precedent.** The template's language ("subscription
fees, licensing, service contracts, custom AI solutions") describes a SaaS/professional-services revenue
mix that does not map cleanly onto talabat's own disclosed marketplace model — talabat discloses no
"one-time" revenue line in the traditional sense (no license sale, no setup fee, no custom-project
contract). This section states that mismatch explicitly rather than forcing an artificial "one-time"
category the corpus does not support. The MECE distinction talabat's own disclosure actually supports is:

- **Contractually recurring:** subscription fees only (talabat pro membership) — the smallest of the four
  lines in dollar terms but the only one whose growth is driven by a *penetration* variable (share of
  customers subscribed) rather than a pure transaction-volume variable, and the fastest- or
  second-fastest-growing line across both years shown (+44% FY2024, +47% FY2025, combined with tMart's
  other-income growth in the same reported line) *(Group; `Strategic/Revenue Model.md`)*.
- **Recurring-with-usage (repeats every transaction, no contractual lock-in):** commission fees, delivery
  & service fees, tMart owned-inventory ("other income") revenue, and advertising & listing fees — all
  scale with order volume, GMV, or Partner campaign spend, and stop the moment the underlying transaction
  stops, unlike a subscription's periodic charge that persists independent of that period's order count.
- **No disclosed one-time revenue category exists anywhere in the corpus**, at any geography level.

**So what for the P&L.** Because subscription is talabat's only contractually recurring line, and because
subscriber GMV share has risen from 32% (Q1 2025) to 49% (Q1 2026) of platform GMV *(Group;
`Topics/Talabat Pro.md`)*, the revenue model is structurally shifting toward a larger share of demand
sitting behind a recurring commitment even though the dollar-denominated subscription fee line itself
remains the smallest of the four — the leverage comes from what a subscribed customer does downstream
(order frequency, multi-vertical adoption), not from the subscription fee in isolation.

## 6.4 Unit Economics — What One Customer and One Order Earn and Cost

**Per-customer, per-month (the clearest disclosed unit-economics differentiator in the corpus).**
Food-only customers spent AED 194 (≈ USD 53)/month at 3.8 orders, while multi-vertical (Food + G&R)
customers spent AED 814 (≈ USD 222)/month at 12.8 orders — a >4x monthly-spend gap tied to a ~3.4x
order-frequency gap *(Group, September 2024 basis; TLB-026, pages 91, 122)*. **This is the single
strongest per-customer economic argument in the corpus for the plan's cross-sell-weighted allocation**
(`OPT-001`, `OPT-002`) over an allocation that treats every incremental order the same regardless of
vertical mix — a customer who becomes multi-vertical is worth roughly four times as much per month, not
a marginal increment.

**Per-order / blended, Group level.** Revenue converts from GMV at a ~38–41% blended take rate (§6.1); net
delivery cost runs 6.0% (FY2024) → 6.3% (FY2025) of GMV, and gross profit runs 12.3% (FY2024) → 11.9%
(FY2025) of GMV *(Group; TLB-002, pages 17, 20)* — i.e., the take rate is not falling toward gross profit
one-for-one; rising delivery/order-processing costs are compressing the gap. Customer acquisition and
retention costs (CARC) rose from USD 89mn (1.5% of GMV, 2023) to USD 155mn (1.6% of GMV, 2025) *(Group;
TLB-001, page 28; TLB-002, page 21)* — the disclosed cost side of funding the frequency/spend uplift
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
| ASM-013/DEC-006: Subscription fee & Other Income decomposition (Q1 2026 basis: Subscription 1.0%/~USD25.8mn; Own grocery & other income 15.2%/~USD408.4mn) | `ASM-013` (Approved); TLB-010 p.16; TLB-011 p.4 |
| TLB-019 p.13 %-of-GMV-by-type range does not reconcile with TLB-011's Q1'26 mix table or the corroborated 3.4-3.5% Advertising figure — flagged, not used | TLB-019, p.13 (flagged discrepancy) |
| Qatar commission-rate cap + delivery-registration-fee ban | TLB-026, p.46 |
| Oman licensing dispute | TLB-001, p.32 |
| Q1 2026 "lower commission rates" contributing to revenue-mix shift | TLB-014, p.15 |
| Family Plan retention premium >60% vs. solo plans | TLB-018, p.6 |
| talabat pro Egypt price point not cited — uningested secondary corpus, ASM-004 requires-revision | `Topics/Pricing.md` Open Questions; `Assumptions_Register.md` ASM-004 |
| tMart ~95% take rate (GMV-to-revenue conversion, not margin) | TLB-002, p.20 |
| G&R product-mix EBITDA drag (0.5)-(0.7)pp | TLB-014, p.6/p.8 |
| CPG advertising investment ratio 8% vs. 2% benchmark | TLB-015, p.108 |
| Advertising ~7% of GMV benchmark reached in UAE tMart vs. 3.4-3.5% Group | TLB-001 p.21; TLB-002 p.10; TLB-014 p.19 |
| talabat pro subscriber GMV share 32%→49% (Q1 2025→Q1 2026) | `Topics/Talabat Pro.md` |
| Food-only vs. multi-vertical monthly spend/frequency (AED194/3.8 vs. AED814/12.8, Sept 2024) | TLB-026, pp.91, 122 |
| Net delivery cost 6.0%→6.3% of GMV; gross profit 12.3%→11.9% of GMV (FY24→FY25) | TLB-002, pp.17, 20 |
| CARC USD89mn (1.5% of GMV, 2023) → USD155mn (1.6% of GMV, 2025) | TLB-001, p.28; TLB-002, p.21 |
| No disclosed AOV/basket-value figure at any geography; GMV excludes subscription fees/rider tips | `ASM-015`; TLB-001, p.27 |
| No Egypt-specific fee-type revenue breakdown anywhere in corpus | `Strategic/Revenue Model.md`, "Egypt-Specific Considerations" |
| Everyday App / Food-leadership bucket investment programme (context) | `vault/Decisions/Investment_Portfolio_Register.md` |
| OPT-001/002/004 as the destinations of specific revenue-stream findings | `vault/Decisions/Investment_Options_Register.md`; `DEC-009` |

## See also
[[Section_02_Business_Description]] · [[Section_04_Value_Proposition]] ·
`vault/Knowledge/Strategic/Revenue Model.md` · `vault/Knowledge/Topics/Pricing.md` ·
`vault/Knowledge/Topics/Customer Economics.md` · `vault/Knowledge/Topics/Grocery and Retail.md` ·
`vault/Forecasts/Value_Driver_Tree_v2.md` · `vault/Decisions/Investment_Options_Register.md` ·
[[DEC-009_investment-options-ranking-and-allocation-priority]] · `vault/Architecture/Geographic_Evidence_Rules.md` ·
`Problem_Charter.md`
