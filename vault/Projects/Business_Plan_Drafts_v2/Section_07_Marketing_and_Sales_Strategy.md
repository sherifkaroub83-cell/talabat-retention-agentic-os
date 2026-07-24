---
section: 7
title: Marketing and Sales Strategy
status: Drafted — self-reviewed (Pass 1); citation audit run in-session ([[Citation_Audit_Section_07_v2]]); independent Pass 2 citation re-check and QA review (incl. the three new gates) still required before ✅ Done
pipeline_run: 2026-07-23
supersedes_note: "No prior Section 7 draft exists under vault/Projects/Business_Plan_Drafts/ (no _v2 suffix) — this is the first drafting pass on Section 7 under either the old or new problem. It is drafted fresh against the 2026-07-23 pivot's Group-wide capital-allocation problem, per Problem_Charter.md, and is not a companion revision of any earlier file."
---

# 7. Marketing and Sales Strategy

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
> - **13.1 Intake & Scoping** — this session, directly, against `AI_Business_Plan_Template.md` §7 and
>   `.claude/skills/business-plan-drafting/SKILL.md`'s Section 7 entry (positioning incl. what's NOT
>   targeted; acquisition channels with funnel conversion numbers; sales funnel/journey mapping;
>   partnerships; retention tactics).
> - **13.2 Evidence Assembly** — this session, directly, pulling `Topics/Customer Journey.md`,
>   `Topics/Promotions.md`, `Strategic/Customer Retention Drivers.md`, `Topics/Food Leadership.md`,
>   `Topics/FinTech.md`, `Topics/Competition.md`, `Topics/Multi-Verticality.md`, `Topics/Everyday App.md`,
>   plus Part A's assembled investment evidence (`vault/Decisions/Investment_Options_Register.md`,
>   `OPT-002`, `OPT-003`, `DEC-009`, `vault/Forecasts/Value_Driver_Tree_v2.md`).
> - **13.3 Gap Detection** — this session, directly. One gap flagged and handled per the skill's own
>   pre-written Section 7 "Caution": **no funnel-stage conversion data (awareness → trial → conversion %)
>   exists anywhere in the corpus at any geography level.** Per `CLAUDE.md`'s standing synthetic-data
>   instruction, this section uses clearly-labeled, explicitly-flagged synthetic/illustrative funnel
>   assumptions for the acquisition-funnel numbers specifically — never blended with, or presented as,
>   corpus-derived data — see §7.2's boxed disclosure and every individual figure's inline flag. No other
>   external/forecast/decision-type gap required escalation for this section.
> - **13.4 External Research Resolution (`research-agent` role)** — determined **not applicable**: Part A
>   Stage 5 (targeted research against the new problem) remains open, and the one genuine gap this section
>   has (funnel conversion data) is a data type — internal, customer-level conversion telemetry — that no
>   public research pull could resolve either; it is handled by explicit synthetic labeling instead, per
>   the skill's own instruction not to invent numbers and cite them as if from the corpus.
> - **13.5 Forecast & Assumption Generation (`forecasting-agent` role)** — determined **not applicable**:
>   the synthetic funnel figures in §7.2 are explicitly *not* registered as `ASM-` rows or treated as
>   forecast inputs — they illustrate a framework qualitatively and are flagged as such every time they
>   appear, consistent with `CLAUDE.md`'s rule that synthetic data must never be blended with, or elevated
>   to the same status as, disclosed/approved figures. `ASM-016` (Group/GCC+Jordan pro and multi-vertical
>   uplift figures applied to Egypt/non-GCC by inference, `status: Approved`) and `ASM-024` (Rewards/
>   PostPaid uplift figures assumed to hold through FY2026, `status: Approved`) are cited as-is, already
>   registered by Part A; no new Assumption row was needed for this section.
> - **13.6 Decision Escalation (`decision-steward` role)** — determined **not applicable**: no new
>   judgment call requiring a `DEC-` record arose; this section draws on the already-resolved `OPT-002`/
>   `OPT-003`/`DEC-009` funding-sequence recommendation rather than proposing a new allocation choice of
>   its own.
> - **13.7 Evidence Ranking & Conflict Resolution (`evidence-citation-agent` role)** — this session,
>   directly: no same-tier evidence conflict was found during assembly for this section (unlike Section 6's
>   TLB-019 discrepancy). One pre-existing, already-documented open question is carried forward without
>   re-litigation: Egypt's category-share figure remains inconsistent across source documents
>   (`Topics/Competition.md`, `Topics/Egypt.md` Open Questions) — not itself a marketing-strategy claim
>   this section needs to resolve, and not used here.
> - **13.8 Drafting (McKinsey Lens)** — this session, directly (below).
> - **13.9 Citation Verification (`evidence-citation-agent` role)** — this session, directly, per
>   `.claude/skills/citation-audit/SKILL.md`; output at
>   `vault/Validation/Citation_Audit_Section_07_v2.md`, **Pass 1/self-reviewed**.
> - **13.10 Cross-Section Consistency & KPI Alignment** — this session, directly (Section 7 is not a
>   primarily financial/KPI section, so the Orchestrator role applies per the pipeline's own delegation
>   map): cross-checked against `Section_06_Business_Model_and_Revenue_Streams.md`'s CARC/promotions cost
>   figures and `Value_Driver_Tree_v2.md`'s Stage 3-4 nodes; no contradiction found (see §7.6).
> - **13.11 QA & Final Review (`qa-review-agent` role)** — this session, directly, per
>   `.claude/skills/qa-review/SKILL.md`, including the Problem Consistency, Financial Integrity, and
>   Geographic Evidence gates; output at `vault/Validation/QA_Review_Section_07_v2.md`, **Pass 1/self-reviewed**.
>
> Per `Business_Plan_Generation_Pipeline.md`'s gate rules, self-reviewed 13.9/13.11 earn this section
> **"Drafted — self-reviewed," not the unqualified "✅ Done."** A genuinely independent Pass 2 (a fresh,
> separately-invoked citation audit and QA review) is still required before this section is
> submission-final.

---

## Answer, stated first

talabat's own disclosed marketing posture is not price-led acquisition but **customer-value-proposition
(CVP) investment** — management states explicitly that Food-leadership capital goes toward CVP "rather
than matching competitor discounts and vouchers" *(Group; TLB-020, page 16)* — and this plan's marketing
and sales strategy for the 2026 investment programme adopts that same positioning by design, not by
default: acquisition and retention spend should be concentrated on the evidenced, product-embedded
mechanisms already ranked in `Strategic/Customer Retention Drivers.md` (talabat pro, multi-vertical
cross-sell, Rewards, PostPaid, Family Plan) rather than broad vouchering, and should be sequenced across
markets the way talabat itself already sequenced FinTech (GCC-first, Egypt as the first disclosed
non-GCC follow-on) rather than assumed uniform across all eight markets at once. The genuine, unresolved
gap this section must handle openly is that **no funnel-stage conversion data (awareness → trial →
subscription) exists anywhere in the corpus at any geography level** — the customer-journey *sequence*
(Food → Grocery & Retail → talabat pro sign-up) is real, disclosed evidence, but the *percentage* of
customers who move between those stages is not disclosed anywhere; this section states that gap plainly
and uses explicitly-labeled synthetic figures, never corpus-cited ones, to illustrate funnel economics as
a framework. Partnerships and retention tactics both draw on the same ranked mechanism set: talabat pro,
Rewards, PostPaid, and the co-branded bank cards, positioned as product-embedded loyalty investment, with
`OPT-002` (talabat pro acceleration in Egypt/Iraq) and `OPT-003` (Food-leadership CVP targeted at UAE/
Kuwait/Qatar) as the plan's own ranked, evidence-grounded candidates for where marketing/sales-adjacent
capital should go first.

---

## 7.1 Positioning — What talabat Is, and Deliberately Is Not, Competing On

**The stated positioning.** talabat frames itself as transitioning "from a multi-vertical food-delivery
platform to the region's Everyday App" *(Group; TLB-020, page 16, cited in `Section_02_Business_Description.md`
§2.1)*, a narrative arc management itself traces across three successive brand statements — "Delivering
food to your doorstep" (2016) → "Delivering food and a lot more" (2021) → "It's not just talabat app, it's
your app" (2025) *(Group; TLB-016, page 7; `Topics/Customer Journey.md`)*. Against a competitive backdrop
management itself names as intensifying — "a more competitive environment (new entrants and incumbents)"
is a stated FY2026 headwind *(Group; TLB-019, page 18; `Topics/Competition.md`)*, with non-high-value
customer M1 retention having declined 4% year-over-year specifically in UAE, Kuwait, and Qatar
*(market-comparison: UAE, Kuwait, Qatar; TLB-019, page 9)* — talabat's own stated response is not to
match on price.

**What is deliberately NOT targeted: price/voucher competition.** Management's own words: the Food-
leadership investment goes toward the consumer value proposition "rather than matching competitor
discounts and vouchers" *(Group; TLB-020, page 16)*. This is a positioning choice this plan's marketing
strategy adopts explicitly, not a gap it works around — talabat-funded vouchering is tracked as a cost
line within Customer Acquisition and Retention Costs (CARC), not as a loyalty investment: USD 89mn of the
USD 155mn 2025 CARC total (1.6% of GMV) was voucher spend *(Group; TLB-002, page 21; `Topics/Promotions.md`)*.
The segment deliberately not pursued through discounting is **price-sensitive, low-frequency, single-
vertical customers acquired primarily through vouchers** — the corpus's own evidence is that this is
exactly the segment where competitive pressure is eroding retention fastest (the -4pp non-high-value M1
decline above), suggesting voucher-led acquisition of this segment is not just off-brand but evidenced to
be a comparatively weak retention bet relative to the CVP alternative.

**What is targeted instead: medium- and high-value customers, via product-embedded CVP.** talabat's own
2026 board-level objective is to "retain high and medium value customers against partial or complete churn
to competition" *(Group; TLB-002, page 14, cited in `Strategic/Customer Retention Drivers.md`)*, delivered
through talabat pro subscription, multi-vertical cross-sell, and targeted incentives — the five ranked
mechanisms `Strategic/Customer Retention Drivers.md` identifies as the corpus's strongest evidenced
retention levers (talabat pro > multi-vertical engagement > Rewards/PostPaid > Family Plan, with AI/
personalisation as the infrastructure that times and targets all five, not a sixth parallel lever). **So
what:** this positioning directly supports the plan's own ranked options — `OPT-003` (Food-leadership CVP/
partner-retention targeted at UAE, Kuwait, Qatar) is this positioning statement operationalized at the
market level where the competitive-pressure evidence actually exists, and `OPT-002` (talabat pro
acceleration in Egypt/Iraq) extends the same CVP-over-discounting logic to the two newest, least-
instrumented markets.

**Caution — market applicability.** The competitive-pressure evidence motivating this positioning (the
-4pp non-high-value retention decline) is disclosed only for UAE, Kuwait, and Qatar *(market-comparison;
TLB-019, page 9)*. Applying "CVP-over-discounting" as talabat's *general* strategic posture is well-
evidenced at Group level (the quote itself is not market-scoped), but the specific *quantified problem*
this posture is designed to solve is not evidenced for Egypt or other non-GCC markets — an
**inferred-applicability** extension if this plan recommends the same CVP emphasis there, stated
explicitly rather than assumed (`Topics/Food Leadership.md` Open Questions).

## 7.2 Customer Acquisition — Channels, Funnel, and Journey Mapping

**Disclosed channels (Fact, Group level).** The corpus discloses acquisition and retention spend by cost
category, not by discrete marketing channel (no disclosed breakdown of paid search, social, in-app referral,
or offline spend exists anywhere in the corpus). What is disclosed: total Customer Acquisition and
Retention Costs (CARC) rose from USD 89mn (1.5% of GMV, 2023) to USD 155mn (1.6% of GMV, 2025), of which
USD 89mn (2025) was talabat-funded vouchering specifically *(Group; TLB-001, page 28; TLB-002, page 21;
`Topics/Promotions.md`)*; separately, Partner-funded savings (not a talabat marketing-spend line, but a
channel-adjacent customer-facing incentive) reached an all-time-high 7% of GMV in Q1 2026, totaling more
than AED 1,567.7mn over a trailing 12-month period *(Group; TLB-020, page 7; TLB-023, page 6)*. **So what
for the P&L:** because talabat's own cost taxonomy already separates "vouchering" (a discount cost) from
the CARC total, this plan's acquisition strategy inherits that same discipline — proposing that any
2026-programme acquisition spend be tracked and evaluated the same way, as an investment with a measurable
frequency/retention return, not merely a discount cost (`Topics/Promotions.md` Business Implications).

**The disclosed customer journey (Fact, Group level, qualitative sequence — not a quantified funnel).**
talabat's own investor materials describe an explicit sequence: "Food → Grocery & Retail → talabat pro
sign-up" *(Group; TLB-013, page 6; `Topics/Customer Journey.md`)*. This is reinforced by a concrete
mechanical trigger: talabat's AI/personalisation models require roughly six orders to build a usable
customer profile, after which customers "benefit from relevant deals, and ultimately drive higher
retention and order frequency" *(Group; TLB-002, page 15)*. Once a customer becomes multi-vertical, the
behavioural gap is large and well-evidenced: multi-vertical customers order 13.0 times/month versus 3.8
times/month for food-only customers *(Group, July 2024 basis; TLB-012, page 9; TLB-013, page 6;
`Topics/Multi-Verticality.md`)*, and multi-vertical customers' share of total platform GMV has risen from
68% (Dec 2024) to 73% (Dec 2025) to 76% (Mar 2026) *(Group; TLB-019, page 7; TLB-020, page 8)* — three
consecutive rising data points, the strongest behaviour-change trend disclosed anywhere in the corpus
(`vault/Forecasts/Value_Driver_Tree_v2.md` N-11).

> **The genuine, unfixed gap this section must state openly.** talabat discloses the *sequence* of the
> customer journey and *behavioural deltas between segments* (frequency, GMV share) — it does not disclose
> what percentage of customers actually move from one journey stage to the next (e.g., what share of
> first-time orderers place a 6th order; what share of 6-order customers become multi-vertical; what
> share of multi-vertical customers convert to talabat pro), at any geography level, Group or otherwise
> (`Topics/Customer Journey.md` Open Questions: "the vault does not disclose a formal, quantified journey/
> funnel model"). **No number below in this box is a talabat-disclosed or corpus-derived figure.**

**Illustrative acquisition funnel — SYNTHETIC, framework-only, explicitly not corpus data.**

| Funnel stage | Anchor to real, disclosed evidence | Illustrative conversion (stage-to-stage) |
|---|---|---|
| Awareness → App download / first visit | Not disclosed (no stated basis) | **[SYNTHETIC — illustrative estimate, not derived from talabat's disclosed data]** |
| Download → Trial (first order placed) | Not disclosed (no stated basis) | **[SYNTHETIC, illustrative: ~25–35%]** |
| Trial → Reaches ~6-order personalisation threshold | Real, disclosed mechanical threshold (Group; TLB-002, p.15) — but no disclosed % of trialists who reach it | **[SYNTHETIC, illustrative: ~15–25% of first-time orderers]** |
| 6-order threshold → Multi-vertical adoption (Food + G&R) | Real, disclosed journey sequence (Group; TLB-013, p.6) — but no disclosed conversion % | **[SYNTHETIC, illustrative: ~30–40%]** |
| Multi-vertical → talabat pro sign-up | Real, disclosed journey terminus (Group; TLB-013, p.6) — but no disclosed conversion % | **[SYNTHETIC, illustrative: ~10–20%]** |

Every percentage in the right-hand column is a **synthetic, illustrative planning assumption constructed
for this section only**, per `CLAUDE.md`'s standing instruction that synthetic data may be used to
illustrate a framework where proprietary/operational data is genuinely unavailable — provided it is
explicitly labeled and never blended with, or presented as, real disclosed company data. These figures
are **not** registered in `Assumptions_Register.md` and **must not** be treated as forecast inputs to
Section 9's financial case, which correctly excludes them; they exist here solely to give the qualitative
journey sequence above a funnel *shape* for planning discussion. If the 2026 programme funds any of the
options below, instrumenting these actual stage-to-stage conversion rates (currently entirely unmeasured,
per KPI Tree gap, `Topics/Customer Journey.md` Open Questions) should itself be an early, low-cost
deliverable — the plan cannot recommend a specific acquisition-spend allocation against this funnel today
because the funnel's own real conversion rates are unknown, not because the concept is inapplicable.

**Sequencing across markets — a disclosed precedent, not an invented one.** talabat's own FinTech rollout
provides a directly evidenced template for how a marketing/acquisition initiative might sequence across
non-Egypt, non-GCC markets: talabat PostPaid was disclosed as "live" only in the five GCC markets through
the 2024 Capital Markets Day, with non-GCC expansion explicitly flagged as "subject to regulatory
approvals" *(GCC; TLB-015, pages 25, 74, 103)* — Egypt was the first disclosed non-GCC follow-on, launching
PostPaid and a co-branded card with Commercial International Bank (CIB), described as talabat's "first
FinTech expansion outside the UAE" *(Egypt standalone, FY2025; TLB-002, pages 14, 19)*. **So what:** this
GCC-first-then-Egypt pattern is a real, evidenced precedent for how the plan sequences `OPT-002` (pro
acceleration in Egypt and Iraq) — piloting in Egypt (the larger, richer-data non-GCC market) before Iraq,
consistent with `OPT-002`'s own recommended pilot design (`vault/Decisions/Investment_Options/
OPT-002_talabat-pro-acceleration-egypt-iraq.md`).

## 7.3 Partnerships

**Restaurant/retail Partners — the disclosed core of the partnership base.** Food-leadership's stated
partner-side investment is explicit: "on the partner side, we invest in retaining, winning back, and
acquiring high-demand food partners... reflected in commission rate investments" *(Group; TLB-020, page
16; TLB-014, page 19; `Topics/Food Leadership.md`)* — a qualitative mechanism with no disclosed
partner-retention percentage or count anywhere in the corpus (`vault/Forecasts/Value_Driver_Tree_v2.md`
N-10). This is directly relevant to marketing/sales strategy because Partner economics fund a meaningful
share of customer-facing promotional value: Partner-funded savings reached an all-time-high 7% of GMV in
Q1 2026 *(Group; TLB-020, page 7)* — distinct from, and larger in scale than, talabat's own voucher spend.

**Banking/FinTech Partners.** The ADCB co-branded credit card (UAE) bundles a "tailored version" of
talabat pro with cashback and free delivery, described as having "strengthened customer retention and
engagement" *(country-specific, UAE; TLB-001, pages 9, 13)*; the CIB co-branded card in Egypt is the
non-GCC parallel, launched alongside PostPaid *(Egypt standalone; TLB-002, pages 14, 19; `Topics/FinTech.md`)*.
These are genuine sales-and-marketing partnerships in the literal template sense (collaborations with a
data/financial-services provider extending reach and embedded loyalty), distinct from the restaurant/
retail Partner relationships above.

**Caution — the Partner-funding tension this section does not paper over.** `OPT-002` (pro acceleration in
Egypt/Iraq) and `OPT-003` (Food-leadership CVP in UAE/Kuwait/Qatar) both draw on the same underlying
Partner-funded free-delivery/commission-concession economics
(`vault/Decisions/Investment_Options/OPT-002...md`, `OPT-003...md`, "Dependencies"), since talabat pro's
delivery benefit is itself Partner-funded *(Group; TLB-026, page 134)*. A marketing/sales strategy that
scales both options simultaneously without recognizing this shared capacity constraint would be treating
two draws on the same Partner-economics pool as independent, which the underlying evidence does not
support — this section flags the dependency rather than silently assuming both can scale at full pace at
once.

**No named technology/data-provider partnerships beyond the embedded AI/ML stack.** Consistent with
Section 5's build/buy/partner analysis, talabat's AI/personalisation capability is inherited from parent
Delivery Hero SE's shared technology stack rather than sourced from an external data-provider partnership
(`Topics/AI.md`; `Entities/Technology_Platforms.md`, cited in `Section_02_Business_Description.md` §2.5) —
this plan does not invent a separate "AI vendor partnership" the corpus does not evidence.

## 7.4 Retention — Support, Community, and Product Enhancement

**The ranked mechanism set, restated for the sales-and-marketing lens.** `Strategic/Customer Retention
Drivers.md`'s own synthesis ranks five product-embedded retention levers by strength of corpus evidence:
(1) talabat pro — a 20-28% order-frequency uplift and 26-32% retention uplift versus matched
non-subscribers, and a 136% gross-profit-per-customer uplift in the 30 days following subscription
*(GCC + Jordan, six markets live before December 2024; explicitly excludes Egypt and Iraq by name; TLB-001,
page 18; TLB-015, pages 78, 104; TLB-019, page 11)*; (2) multi-vertical engagement, which amplifies pro's
effect rather than operating independently — mono-vertical subscribers show a +16pp M1 retention lift
versus mono-vertical non-subscribers, multi-vertical subscribers show +20pp *(GCC + Jordan; TLB-019, page
10)*; (3) talabat Rewards, an 18%-adoption, >15%-order-frequency-uplift-within-30-days mechanism that
talabat's own language links directly to "reducing churn" *(Group; TLB-026, page 134; TLB-015, page 79)*;
(4) talabat PostPaid, a 14% order-frequency-increase-post-adoption mechanism described as "accretive to
order frequency and customer retention" *(Group; TLB-001, pages 9, 18)*; (5) Family Plan, a >60% retention
premium over solo-plan subscribers, on the narrowest evidence base of the five (single document, single
household-size segment, no adoption-rate or country breakout) *(Group; TLB-018, page 6)*.

**Caution — geography, stated exactly as `Strategic/Customer Retention Drivers.md`'s own discipline
requires.** None of the five uplift figures above are confirmed for Egypt: they are measured on the six
GCC/Jordan markets live before talabat pro's February 2025 Egypt launch, and are applied to Egypt or
non-GCC generally only as a labeled inference (`ASM-016`, `status: Approved`, Low confidence — Geographic
Evidence Rules' named Failure Pattern #1). This plan's retention-strategy recommendation for `OPT-002`
therefore rests on **the Group/GCC "what works" playbook, imported into Egypt/Iraq as a working
hypothesis, not an Egypt-validated ranking** — stated here exactly as the source note itself requires.

**AI/personalisation as infrastructure, not a sixth lever.** The mechanism that times and targets all five
retention levers above is the same AI/personalisation layer discussed in Section 5 — its estimated EBITDA
contribution rose from USD 14mn+ (FY2024) to USD 30mn+ (FY2025) *(Group; TLB-001, page 23; TLB-002, page
15)*. **So what:** the retention tactics in this section (targeted rewards timing, personalised offer
surfacing after the 6-order threshold, subscription-conversion nudges) are not a menu of independent
initiatives competing for budget — they are applications of one underlying capability (`OPT-005`, AI/
personalisation scaling), consistent with how `Strategic/Customer Retention Drivers.md` frames the
relationship.

**Community-building and regular product enhancement.** The corpus discloses no dedicated customer
community/forum product (no loyalty community, ambassador programme, or user-generated-content mechanic
is named anywhere in the 29-document primary corpus) — this section states that gap rather than inventing
one. What is disclosed as a regular-enhancement cadence is talabat pro's own product evolution (Family
Plan tiering, DineOut Deals integration bundled into the subscription) and the co-branded card
partnerships above, both already-operating retention product lines that this plan's ranked options
(`OPT-002`, `OPT-003`) propose accelerating rather than replacing with a new mechanism the corpus gives no
basis for.

## 7.5 Where This Positions the Plan's Own Ranked Options

Restated plainly: this section's positioning (CVP over discounting), acquisition approach (product-
embedded journey stages plus a labeled synthetic funnel model, sequenced on the disclosed GCC-first-then-
Egypt FinTech precedent), partnership base (restaurant/retail Partners, banking co-brand cards), and
retention tactic ranking (pro > multi-vertical > Rewards/PostPaid > Family Plan, AI as infrastructure) are
not new claims invented for this section — they are the marketing-and-sales-strategy expression of the
same evidence base `DEC-009` already used to rank `OPT-001`–`OPT-005`. Specifically: `OPT-002` (pro
acceleration, Egypt/Iraq) and `OPT-003` (Food-leadership CVP, UAE/Kuwait/Qatar) are this section's two
most directly relevant candidates — both are Tier 2/3 in `DEC-009`'s tiering (near-term, high-feasibility
or high-reversibility priorities), consistent with a marketing strategy that should pilot before scaling,
per Section 12's Three Horizons framing.

## 7.6 Cross-section consistency check (Stage 13.10, self-performed)

Checked against `Section_06_Business_Model_and_Revenue_Streams.md`: the CARC figures cited here (USD 89mn
→ USD 155mn, 2023→2025) and the vouchers-as-contra-revenue figure (USD 120mn, FY2025) are the same figures
Section 6 cites in its unit-economics discussion (§6.4) — no contradiction, no double-counting; this
section discusses CARC as an acquisition/retention *strategy* input, Section 6 discusses it as a *cost
line against revenue*, and neither restates the other's number differently. Checked against
`Strategic/Customer Retention Drivers.md` and `Section_04_Value_Proposition.md`'s value-mechanism ranking
(if drafted): the same five-mechanism ranking (pro > multi-vertical > Rewards/PostPaid > Family Plan) is
used here as in Section 4's value-driver-tree anchor, preserving the "same 3-5 mechanisms end to end"
McKinsey Lens requirement. Checked against `DEC-008`: no `ASM-018` (2.2:1 Everyday App:Food-leadership
split) figure is shown anywhere in this section, headline or otherwise — not implicated. Checked against
`DEC-009`/`ASM-029`–`033`: this section references `OPT-002`/`OPT-003` narratively and by name only; no
`OPT-`-level dollar range from `ASM-030`/`ASM-031` is reproduced here, so the mandatory disclosure sentence
requirement is not triggered in this section (it belongs to Section 9/12/14 where the ranges themselves
are shown). No contradiction found.

---

## Traceability (partial — full table due at Section 14)

| Claim | Source |
|---|---|
| "Rather than matching competitor discounts and vouchers... invest in the consumer value proposition" | TLB-020, page 16 |
| "Retain high and medium value customers against partial or complete churn to competition" | TLB-002, page 14 |
| Non-high-value M1 retention -4% y/y (UAE, Kuwait, Qatar) | TLB-019, page 9 |
| "A more competitive environment (new entrants and incumbents)" FY2026 headwind | TLB-019, page 18 |
| Brand narrative arc (2016 → 2021 → 2025) | TLB-016, page 7 |
| CARC USD89mn (1.5% of GMV, 2023) → USD155mn (1.6% of GMV, 2025); USD89mn 2025 vouchering | TLB-001, p.28; TLB-002, p.21 |
| Partner-funded savings 7% of GMV (Q1 2026, all-time high); >AED1,567.7mn trailing 12 months | TLB-020, p.7; TLB-023, p.6 |
| Customer journey: Food → Grocery & Retail → talabat pro sign-up | TLB-013, p.6 |
| ~6-order AI-personalisation threshold | TLB-002, p.15 |
| Multi-vertical vs. food-only order frequency (13.0 vs. 3.8/month, July 2024) | TLB-012, p.9; TLB-013, p.6 |
| Multi-vertical GMV share 68%→73%→76% (Dec'24→Dec'25→Mar'26) | TLB-019, p.7; TLB-020, p.8 |
| No disclosed quantified journey/funnel conversion model anywhere in corpus | `Topics/Customer Journey.md` Open Questions |
| Illustrative acquisition-funnel conversion percentages | **SYNTHETIC — this section's own illustrative construction, not corpus-derived; not an Approved Assumption; not cited elsewhere** |
| talabat PostPaid GCC-only through CMD 2024; Egypt as first non-GCC expansion (PostPaid + CIB card) | TLB-015, pp.25,74,103; TLB-002, pp.14,19 |
| talabat pro uplift figures (20-28% frequency; 26-32% retention; 136% gross-profit-per-customer) | TLB-001 p.18; TLB-015 pp.78,104; TLB-019 p.11 |
| Mono- vs. multi-vertical M1 retention delta (+16pp/+20pp) | TLB-019, p.10 |
| talabat Rewards 18% adoption, >15% frequency uplift, "reducing churn" | TLB-026, p.134; TLB-015, p.79 |
| talabat PostPaid 14% frequency increase, "accretive to... retention" | TLB-001, pp.9,18 |
| Family Plan >60% retention premium (solo vs. 4-member) | TLB-018, p.6 |
| ADCB co-branded card (UAE) — cashback, free delivery, tailored pro | TLB-001, pp.9,13 |
| AI/personalisation EBITDA contribution USD14mn+ (FY24) → USD30mn+ (FY25) | TLB-001, p.23; TLB-002, p.15 |
| ASM-016 (Group/GCC+Jordan uplift figures applied to Egypt/non-GCC by inference) | `Assumptions_Register.md` ASM-016, Approved |
| OPT-002 / OPT-003 rationale and dependencies | `vault/Decisions/Investment_Options/OPT-002...md`, `OPT-003...md`; `DEC-009` |
| talabat's AI/ML stack inherited from Delivery Hero, not a separate vendor partnership | `Topics/AI.md`; `Entities/Technology_Platforms.md` |

## See also
[[Section_04_Value_Proposition]] · [[Section_06_Business_Model_and_Revenue_Streams]] ·
`vault/Knowledge/Topics/Customer Journey.md` · `vault/Knowledge/Topics/Promotions.md` ·
`vault/Knowledge/Strategic/Customer Retention Drivers.md` · `vault/Knowledge/Topics/Food Leadership.md` ·
`vault/Knowledge/Topics/FinTech.md` ·
`vault/Decisions/Investment_Options/OPT-002_talabat-pro-acceleration-egypt-iraq.md` ·
`vault/Decisions/Investment_Options/OPT-003_food-leadership-cvp-partner-retention-gcc3.md` ·
[[DEC-009_investment-options-ranking-and-allocation-priority]] ·
`vault/Architecture/Geographic_Evidence_Rules.md` · `Problem_Charter.md`
