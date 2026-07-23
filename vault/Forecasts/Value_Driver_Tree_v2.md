---
type: forecast
status: active
created: "2026-07-23"
updated: "2026-07-23"
built_by: forecasting-agent
supersedes_note: "Companion to (not a replacement of) vault/Forecasts/Value_Driver_Tree.md, which is marked status:superseded and left untouched as the historical Egypt-retention-problem record. This file is the fresh Group-wide capital-allocation tree required by the 2026-07-23 pivot — see Problem_Charter.md."
---

# Value Driver Tree v2 — talabat Group 2026 Investment Programme

Built for the pivoted business question: how should talabat allocate its 2026 USD 175 million
investment programme (Everyday App ~USD120m + Food-leadership ~USD55m) across markets and initiative
categories to maximise profitable growth, CLV, retention, and long-term platform economics
(`Problem_Charter.md`). Primary scaffold: `vault/Knowledge/Investment_Relationship_Map.md`. Schema
convention (node ID / Fact-vs-Assumption tag / confidence / geography tag) reused from the superseded
`vault/Forecasts/Value_Driver_Tree.md`, populated with the new chain's content.

**Golden rule applied throughout** (`.claude/skills/forecast-builder/SKILL.md`): every projected node
traces to a named historical anchor Fact plus one stated growth-logic sentence. Every node — Fact or
Assumption — carries exactly one geography tag per `vault/Architecture/Geographic_Evidence_Rules.md`:
**Group**, **GCC**, **non-GCC (pre/post-FY2025)**, **Egypt (standalone)**, **country-specific**,
**market-comparison**, **external**, or **inferred-applicability**. Fact-tagged nodes cite
`Facts/<file>.md`; Assumption-tagged nodes cite `[ASSUMPTION → ASM-###]` (proposed here, not
self-registered — handed to `decision-steward` per Step 5 of the forecast-builder skill).

**Required chain shape** (per task brief, already evidenced in prose+diagram form in
`Investment_Relationship_Map.md`): Investment → capability deployment → adoption/operational change →
customer/partner behaviour → order frequency → multi-vertical usage → basket/AOV → retention/CLV →
GMV → revenue → gross profit → EBITDA → cash flow. Thirteen stages below, each with Fact nodes (what
the corpus discloses) and, where the chain requires a forward projection the corpus does not itself
supply, Assumption nodes (tagged `ASM-015` onward — the pre-pivot register runs `ASM-001`–`014`, all
superseded).

**Central evidence-gap this tree does not paper over:** the corpus discloses the programme's *cost*
side (the FY2026 Adjusted EBITDA margin bridge — Everyday App ~-0.7pp, Food leadership ~-0.5pp) but not
its *return* side (no disclosed GMV or EBITDA uplift attributable to the programme, by bucket or in
total). Every node downstream of Stage 3 (customer/partner behaviour) that purports to connect the
programme to a financial outcome is therefore an Assumption, not a Fact, however strong the surrounding
qualitative evidence is.

---

## Stage 1 — Investment

### N-01. 2026 Board-approved investment programme — USD 175 million total
`[FACT → Facts/Marketplace_Facts.md]` (TLB-014 p.16, TLB-020 p.16; TLB-019 p.11 for the earliest
disclosure of the total)
**Geography: Group.** Board-approved February 2026, fully funded by internal cash, structured across
two named buckets. Not broken out by country or market anywhere in the corpus.

### N-02. Everyday App bucket — ~USD 120 million (~USD 75mn opex + ~USD 45mn capex)
`[FACT → Facts/Marketplace_Facts.md]` (TLB-014 p.16, p.19; TLB-020 p.12, p.16; TLB-011 p.2 for the
first precise USD120m figure)
**Geography: Group.**

### N-03. Food-leadership bucket — ~USD 55 million (~0.5pp of GMV)
`[FACT → Facts/Marketplace_Facts.md]` (TLB-020 p.16)
**Geography: Group.** Explicitly excludes the effect of the product-mix shift toward Grocery & Retail —
i.e. this bucket defends Food, it does not fund G&R growth.

---

## Stage 2 — Capability deployment

### N-04. Everyday App capability: talabat mart dark-store densification, talabat pro loyalty scaling, new verticals
`[FACT → Facts/Q-Commerce.md, Facts/Talabat_Pro.md]` (TLB-020 p.12, p.16; TLB-014 p.19)
**Geography: Group.** "Capex deployment for dark store network densification is progressing broadly on
plan, with some natural phasing impact from Ramadan and the regional conflict" (TLB-020 p.12).

### N-05. Food-leadership capability: consumer value proposition (selection, experience, affordability) + partner retention/win-back/acquisition + commission-rate investment
`[FACT → Facts/Retention.md, Facts/Competition_Facts.md]` (TLB-020 p.16; TLB-014 p.19)
**Geography: Group.** "Rather than matching competitor discounts and vouchers, we invest in the
consumer value proposition... On the partner side, we invest in retaining, winning back, and acquiring
high-demand food partners... reflected in commission rate investments" (TLB-020 p.16).

### N-06. AI/personalisation capability deployment (cross-cutting both buckets)
`[FACT → Facts/AI_Facts.md]` (TLB-001 p.22-23, TLB-002 p.15-16; 235TB/day data processing, TLB-002 p.15)
**Geography: Group.** Not named as a discrete dollar line within either bucket, but is the mechanism
management credits with timing talabat pro/Rewards offers and driving item-level recommendations —
i.e. an embedded capability, not a separate budget line.

---

## Stage 3 — Adoption / operational change

### N-07. G&R product-mix shift: tMart store count 130 (end-2024) → 160 (2025, all 8 markets); tMart GMV +45-47% y/y; G&R = 31% of total revenue (2025) vs 28% (2024)
`[FACT → Facts/Q-Commerce.md]` (TLB-002 p.12, p.14, p.20)
**Geography: Group.** No country-level store count or G&R GMV split exists anywhere in the corpus,
Egypt included.

### N-08. talabat pro adoption: subscriber GMV share rises from ~32% to ~49% of platform GMV (y/y through Q1 2026)
`[FACT → Facts/Talabat_Pro.md]` (TLB-020 p.8)
**Geography: Group.** Full 8-market rollout complete 2025 (Egypt live Feb 2025, Iraq Sept 2025).

### N-09. AI/personalisation deployment: estimated EBITDA contribution rises from USD 14mn+ (FY2024) to USD 30mn+ (FY2025)
`[FACT → Facts/AI_Facts.md]` (TLB-001 p.23, TLB-002 p.15-16)
**Geography: Group.** Activates once a customer has placed ~6 orders (TLB-001 p.22-23).

### N-10. Food partner retention/selection-depth investment — qualitative only, no quantified partner-retention rate disclosed
`[FACT → Facts/Competition_Facts.md]` (TLB-020 p.16) — **gap flag, not a numeric Fact**
**Geography: Group.** The corpus states the mechanism (retaining/winning back/acquiring high-demand
partners via commission investment) but discloses no partner-retention percentage or count this
investment is expected to move.

---

## Stage 4 — Customer/partner behaviour

### N-11. Multi-vertical customer behaviour: multi-vertical GMV share rises 68% (Dec 2024) → 73% (Dec 2025) → 76% (Mar 2026)
`[FACT → Facts/GMV_Facts.md, Facts/Orders_Facts.md]` (TLB-019 p.7, TLB-020 p.8)
**Geography: Group.** Three consecutive rising data points — the strongest behaviour-change trend in
the corpus.

### N-12. Medium/high-value customer retention via subscription + targeted incentives (Food-leadership mechanism)
`[FACT → Facts/Retention.md]` (TLB-014 p.19, TLB-020 p.16) — qualitative mechanism, no numeric target
**Geography: Group.**

### N-13. Egypt/non-GCC applicability of Group behaviour-change evidence
`[ASSUMPTION → ASM-016]`
**Geography: inferred-applicability (source: Group/GCC; target: Egypt and non-GCC generally).**
**Logic:** the Group-level talabat pro frequency uplift (20-28%), retention uplift (26-32%), and
multi-vertical M1 retention delta (+16pp mono / +20pp multi) are measured on the six GCC/Jordan markets
live before December 2024 and **explicitly exclude Egypt and Iraq** (`Facts/Talabat_Pro.md`, TLB-012
p.17, TLB-013 p.8, TLB-016 p.9) — Egypt's pro programme launched February 2025. Applying this evidence
to Egypt (as this plan's worked example) or to non-GCC generally is a labeled inference, not a
disclosed Egypt/non-GCC figure. **Confidence: Low** — this is exactly the Geographic Evidence Rules'
named Failure Pattern #1.

---

## Stage 5 — Order frequency

### N-14. Multi-vertical vs. food-only order frequency: 13.0 vs. 3.8 orders/month (July 2024)
`[FACT → Facts/Orders_Facts.md]` (TLB-012 p.9, TLB-013 p.6)
**Geography: Group.** Not refreshed with a more recent figure anywhere in the corpus (the GMV-share
trend in N-11 is current through March 2026; this frequency multiple is dated July 2024).

### N-15. talabat pro order-frequency uplift: 20-28% vs. matched non-subscribers
`[FACT → Facts/Talabat_Pro.md]` (TLB-001 p.18, TLB-015 p.78, TLB-019 p.11)
**Geography: GCC + Jordan (six markets live before Dec 2024); excludes Egypt and Iraq by name.**
Applicability to Egypt/non-GCC generally is `ASM-016` (Stage 4), not restated here.

### N-16. Group order frequency: 6.2x (Dec 2023) → 6.7x (Dec 2024) per active customer
`[FACT → Facts/Orders_Facts.md]` (TLB-001 p.15)
**Geography: Group.** Coincides with talabat pro adoption growing 2.1x over the same period
(TLB-001 p.12, p.21) — a correlation the corpus states directly but does not causally isolate.

---

## Stage 6 — Multi-vertical usage

### N-17. Multi-vertical customers exceed one-third of the user base, driving over 70% of total GMV
`[FACT → Facts/GMV_Facts.md, Facts/Monthly_Active_Customers.md]` (TLB-002 p.14; 28% multi-vertical
penetration Dec 2023 rising per TLB-026 p.128)
**Geography: Group.**

### N-18. Customer journey sequence: Food → Grocery & Retail → talabat pro sign-up
`[FACT → Facts/Talabat_Pro.md]` (TLB-013 p.6) — qualitative, stated as management's own framing of the
customer journey, not a measured conversion-rate funnel
**Geography: Group.** The corpus does not state whether this sequence holds at a similar rate across
all 8 markets or is a GCC-observed pattern generalized in company messaging (`Multi-Verticality.md`
Open Questions).

---

## Stage 7 — Basket / AOV

### N-19. Basket size named as an Everyday App outcome, but not quantified anywhere in the corpus
`[ASSUMPTION → ASM-015]`
**Geography: Group (proxy only; no Egypt or country-level figure exists).**
**Logic:** management states directly that "improving frequency, basket size, and retention position
talabat to scale its Everyday App" (TLB-020 p.16, TLB-014 p.19), naming basket size as one of three
outcome variables — but no disclosed AOV, basket-value, or basket-size figure exists anywhere in the
corpus, Group or country level. This node assumes basket size moves directionally in the same
direction as the multi-vertical GMV-share trend (N-11) — since a multi-vertical order typically
combines a Food + G&R basket, plausibly raising average basket value — but this is an inferred
mechanism, not a measured AOV trend, and should never be presented as a quantified basket/AOV figure.
**Confidence: Low** — zero disclosed AOV data points, the weakest-evidenced stage in this tree (mirrors
the same gap the superseded v1 tree found for Egypt AOV specifically, now confirmed as a Group-wide gap
too, not an Egypt-only one).

---

## Stage 8 — Retention / CLV

### N-20. talabat pro retention uplift: +26% to +32% vs. lookalike non-subscribers
`[FACT → Facts/Talabat_Pro.md]` (TLB-015 p.78, TLB-019 p.11)
**Geography: GCC + Jordan (six markets live before Dec 2024); excludes Egypt and Iraq by name** (same
population as N-15).

### N-21. Multi-vertical M1 retention delta: mono-vertical subscribers +16pp vs. multi-vertical subscribers +20pp
`[FACT → Facts/Talabat_Pro.md]` (TLB-019 p.10)
**Geography: Group** (the retention-delta comparison itself is not stated as excluding any market, but
the underlying subscriber base it's drawn from is dominated by the same pre-Dec-2024 GCC/Jordan cohort
as N-15/N-20 — treat with the same caution).

### N-22. CLV proxy: 136% gross-profit-per-customer uplift in the 30 days post-subscription
`[FACT → Facts/Talabat_Pro.md]` (TLB-015 p.78)
**Geography: GCC + Jordan cohort** (same population caveat as N-15/N-20). No absolute LTV figure is
disclosed anywhere in the corpus — this remains a relative-uplift proxy only, per
`vault/Knowledge/Business_Relationships.md` Chain 1's own caveat, now carried into this tree.

### N-23. Family Plan retention premium: >60% vs. solo plans
`[FACT → Facts/Talabat_Pro.md]` (TLB-018 p.6)
**Geography: Group** (not broken out by country; unclear whether live/performing similarly in Egypt,
per `Talabat Pro.md` Open Questions).

---

## Stage 9 — GMV

### N-24. Group GMV: FY2025 USD 9.5bn, +28% cFX y/y
`[FACT → Facts/GMV_Facts.md]` (TLB-002; consistent with `Problem_Charter.md`)
**Geography: Group.**

### N-25. GCC vs. non-GCC GMV growth: GCC +22% y/y vs. non-GCC +57% y/y (FY2025); non-GCC now 21% of Group GMV vs. 16% a year earlier (Q1 2026)
`[FACT → Facts/GMV_Facts.md]` (TLB-019 p.14; TLB-011 p.2)
**Geography: GCC / non-GCC (post-FY2025 split — Jordan + Iraq only, Egypt excluded from this non-GCC
bucket from FY2025 onward per `Geographic_Evidence_Rules.md`).**

### N-26. Food GMV vs. G&R GMV: Food USD 6.65bn +20% y/y; G&R USD 2.77bn +47% y/y (FY2025)
`[FACT → Facts/GMV_Facts.md]` (TLB-002 p.18, TLB-019 p.14)
**Geography: Group.**

### N-27. FY2026 guided GMV growth: 11-14% cFX (USD 11.2-11.5bn) — a disclosed deceleration from FY2025's 28%
`[FACT → Facts/Revenue.md]` (TLB-019 p.18, TLB-020 p.14, TLB-014 p.9, TLB-011 p.1) — the corpus
attributes the deceleration to "a larger base, more competitive environment, macro headwinds, and
instashop dilution" (TLB-019 p.18), not separated by market
**Geography: Group.** This is already a disclosed range, not a single point — the correct anchor for
the top-level Scenarios (`Scenarios_v2.md`) rather than a fresh point estimate.

---

## Stage 10 — Revenue

### N-28. Revenue ≈ 40% blended take rate of GMV
`[FACT → Facts/Revenue.md]` (TLB-001 p.27, carried across the corpus)
**Geography: Group.**

### N-29. Advertising & listing-fees revenue: USD 246m (FY2024) → USD 323m (FY2025), +32% y/y
`[FACT → Facts/Advertising_Facts.md]` (TLB-002 p.20, TLB-009 p.4)
**Geography: Group.** UAE talabat mart specifically already reached the ~7% of GMV medium-term
benchmark (TLB-001 p.21, TLB-014 p.19) — a country-specific figure, not yet a Group-wide achieved level.

### N-30. FY2026 guided Revenue growth: 14-17% cFX (USD 4.4-4.5bn)
`[FACT → Facts/Revenue.md]` (TLB-019 p.18, TLB-020 p.14, TLB-014 p.9)
**Geography: Group.** Note: talabat moves to IFRS Revenue-only reporting from 2026 — this guided range
is on that new basis, a methodology change the plan should flag when comparing FY2025 actuals to FY2026
guidance.

---

## Stage 11 — Gross profit

### N-31. Group gross profit (pro forma FY2025): USD 1,124mn, 11.9% margin of GMV
`[FACT → Facts/Marketplace_Facts.md]` (TLB-002 p.17, p.20)
**Geography: Group.**

### N-32. G&R product-mix margin drag: (0.5%)–(0.7%)pp of Adjusted EBITDA margin, reflecting G&R's lower commission/take-rate than Food
`[FACT → Facts/Marketplace_Facts.md]` (TLB-014 p.6, p.8)
**Geography: Group.** No source discloses G&R gross margin broken out from tMart vs. Local Shops
specifically, nor whether this drag persists, narrows, or reverses as G&R scales
(`Grocery and Retail.md` Open Questions).

---

## Stage 12 — EBITDA

### N-33. Group Adjusted EBITDA: FY2025 USD 615mn, 6.5% margin, +24% y/y (FY2024: ~USD500mn, 6.7% margin)
`[FACT → Facts/Marketplace_Facts.md, Facts/GMV_Facts.md]` (TLB-004 p.3, TLB-008 p.3)
**Geography: Group.**

### N-34. FY2026 margin bridge: guided step-down from 6.0% (Q4 2025 baseline) to a guided ~4.4-4.8% FY2026 range; Everyday App/tMart ≈ -0.7pp, Food-leadership ≈ -0.5pp
`[FACT → Facts/Marketplace_Facts.md]` (TLB-019 p.19, TLB-020 p.12, p.16; TLB-014 p.6)
**Geography: Group.** No document explains how the percentage-point attributions were calculated, and
the Q1 2026 actual bridge (TLB-020 p.12) uses a different sub-split than the FY2026 full-year bridge
(TLB-019 p.19) — unreconciled in the corpus (`EBITDA.md` Open Questions). Management frames this
explicitly as "a calculated temporary step-down... to capture higher long-term growth" (TLB-020 p.16),
not a permanent margin reset.

### N-35. Q1 2026 actual: Adjusted EBITDA USD 130mn, 4.8% of GMV, -9% y/y
`[FACT → Facts/Marketplace_Facts.md]` (TLB-020 p.4, p.11-12)
**Geography: Group.**

### N-36. No segment-level (GCC/non-GCC/Egypt) EBITDA figure is disclosed anywhere in the corpus
`[FACT → Facts/EBITDA.md]` (gap statement, not a numeric Fact) — cross-referenced from `EBITDA.md`
**Geography: n/a (absence-of-disclosure statement).** Only Revenue, Gross Profit, Profit Before Tax,
and Net Profit are disclosed at the Egypt segment level (`Facts/Revenue.md`, TLB-002 p.111) — no
Egypt-specific EBITDA margin exists to compare against the Group bridge above.

### N-37. FY2027+ EBITDA margin recovery trajectory
`[ASSUMPTION → ASM-019]`
**Geography: Group.**
**Logic:** management frames the FY2026 step-down as deliberate and temporary, "to capture higher
long-term growth" (TLB-020 p.16), implying — but not stating a timeline or target level for — a
subsequent partial margin recovery once the programme's capability build-out matures. No source
discloses a FY2027 guidance figure or a stated recovery target. This node assumes a directional partial
recovery toward, but not necessarily reaching, the pre-programme 6.0-6.5% range, with timing and
magnitude explicitly unstated. **Confidence: Low** — this is an inference from management's own framing
language, not a disclosed multi-year guide.

---

## Stage 13 — Cash flow

### N-38. Adjusted Free Cash Flow: FY2025 USD 559mn (+21% y/y, 5.9% of GMV), 91% cash conversion
`[FACT → Facts/Marketplace_Facts.md]` (TLB-002 p.17, p.22)
**Geography: Group.**

### N-39. Programme fully funded by internal cash; zero external financial debt; net cash USD 591mn end-2025 (+83% y/y)
`[FACT → Facts/Marketplace_Facts.md]` (TLB-002 p.23; TLB-020 p.16)
**Geography: Group.**

### N-40. FY2026 guided Free Cash Flow: USD 370-400mn (3.2-3.6% of GMV)
`[FACT → Facts/Marketplace_Facts.md]` (TLB-019 p.18, TLB-020 p.14, TLB-014 p.9)
**Geography: Group.** Already a disclosed range, consistent with the "no single-point forecast" rule.

### N-41. No segment-level (GCC/non-GCC/Egypt) cash-generation figure is disclosed anywhere in the corpus
`[FACT → Facts/Marketplace_Facts.md]` (gap statement, cross-referenced from `Cash Generation.md`)
**Geography: n/a (absence-of-disclosure statement).**

---

## Cross-cutting Assumption nodes (the investment→return bridge the corpus does not itself supply)

These four nodes sit conceptually across Stages 3-12 — they are what actually connects N-01/02/03 (the
disclosed investment) to N-24-N-41 (the disclosed downstream financial spine), since the corpus itself
does not supply that connective tissue as a Fact.

### N-42. Programme-attributable incremental GMV range (FY2026)
`[ASSUMPTION → ASM-017]`
**Geography: Group.**
**Logic:** the disclosed FY2026 GMV growth guidance (N-27: 11-14% cFX) is a single all-in Group growth
figure — it is not decomposed into a "baseline organic" component and a "2026-investment-programme-
attributable" component anywhere in the corpus. This node constructs an illustrative range by treating
the low end of guidance (11%) as approximating baseline/organic continuation (absent the programme) and
the delta up to the high end (14%) as the outer bound of what the programme could plausibly be
contributing, given that the programme is explicitly funded to accelerate multi-vertical/frequency
behaviour already trending upward (N-11, N-16). **This is an illustrative decomposition of a disclosed
range, not a disclosed or measured programme ROI** — it must never be cited as "the programme delivers
X% GMV growth." **Confidence: Low** — no disclosed methodology links the guidance range to the
programme specifically; the decomposition is this agent's own construction.

### N-43. Everyday App vs. Food-leadership relative GMV-driver weighting (illustrative)
`[ASSUMPTION → ASM-018]`
**Geography: Group.**
**Logic:** because no disclosed initiative-level ROI exists for either bucket, this node assumes — for
scenario-modeling purposes only — that each bucket's share of any incremental GMV effect is
proportional to its investment share (~120:55, ≈2.2:1). This is **not** a disclosed or measured causal
split; talabat does not allocate return pro-rata to spend in any disclosed methodology. It exists only
so `Scenarios_v2.md`'s Everyday App / Food-leadership module split has a stated, labeled construction
method rather than an implicit one. **Confidence: Low.**

### N-44. Egypt (worked example) bottom-up programme-exposure proxy
`[ASSUMPTION → ASM-020]`
**Geography: inferred-applicability (source: Group; target: Egypt, standalone).**
**Logic:** carrying forward the same revenue-share method the superseded v1 tree used (its `ASM-012`,
now itself superseded with the rest of that tree): Egypt's FY2025 disclosed segment revenue (USD 509.9m,
`Facts/Revenue.md`, TLB-002 p.111) as a share of total disclosed FY2025 Group revenue (~11.0%) applied
to the full USD175mn programme (both buckets, not Everyday App alone this time, since the new problem
is Group-wide capital allocation, not an Egypt-only AI-retention build) yields an **illustrative**
Egypt-attributable programme-exposure proxy of **≈ USD 19.3m**. **This is explicitly a derived estimate
for worked-example illustration in Section 9, not a disclosed or approved Egypt budget line** — talabat
does not disclose a country-level programme allocation anywhere in the corpus. **Confidence: Low** — a
single-ratio pro-rata proxy with no disclosed allocation methodology behind it.

### N-45. Basket/AOV, frequency, and retention nodes (N-14 through N-23) as the joint mechanism connecting Stage 3 behaviour to Stage 9 GMV
No new tag — this is a structural cross-reference, not a new node. It records that Stages 5-8
collectively are the "customer/partner behaviour → GMV" bridge the required chain shape calls for, and
that every numbered node in those stages is either a Fact (dated, geography-scoped, per above) or
`ASM-015`/`ASM-016` (the two Assumption nodes already tagged in those stages).

---

## Tree summary (Fact vs. Assumption node count)

| Stage | Fact nodes | Assumption nodes | Notes |
|---|---|---|---|
| 1. Investment | N-01, N-02, N-03 | — | All Group |
| 2. Capability deployment | N-04, N-05, N-06 | — | All Group |
| 3. Adoption/operational change | N-07, N-08, N-09 | — | N-10 is a Fact-tagged gap-flag, not numeric |
| 4. Customer/partner behaviour | N-11, N-12 | N-13 (ASM-016) | Egypt-applicability inference |
| 5. Order frequency | N-14, N-15, N-16 | — | N-15 is GCC+Jordan-only, not Group |
| 6. Multi-vertical usage | N-17, N-18 | — | |
| 7. Basket/AOV | — | N-19 (ASM-015) | Weakest-evidenced stage, zero disclosed AOV data |
| 8. Retention/CLV | N-20, N-21, N-22, N-23 | — | N-20/N-22 are GCC+Jordan-only |
| 9. GMV | N-24, N-25, N-26, N-27 | — | N-27 already a disclosed range |
| 10. Revenue | N-28, N-29, N-30 | — | N-30 already a disclosed range |
| 11. Gross profit | N-31, N-32 | — | |
| 12. EBITDA | N-33, N-34, N-35, N-36 | N-37 (ASM-019) | |
| 13. Cash flow | N-38, N-39, N-40, N-41 | — | N-40 already a disclosed range |
| Cross-cutting bridge | — | N-42 (ASM-017), N-43 (ASM-018), N-44 (ASM-020) | The investment→return connective tissue itself |

**41 numbered Fact nodes + 6 Assumption nodes = 45 nodes total** (counting N-01 through N-44, with N-45
a structural cross-reference rather than a new node; N-10 and N-36/N-41 counted as Fact-tagged
gap-statements, not numeric Facts). Six new proposed assumptions (`ASM-015`–`ASM-020`) introduced in
this tree; eight further module-specific assumptions (`ASM-021`–`ASM-028`) are introduced in
`Scenarios_v2.md`'s scenario modules, not here — see that file's closing section for the complete list
of fourteen new IDs this pass introduces.

---

## Links
[[Investment_Relationship_Map]] · [[Business_Relationships]] · [[Forecasting_Layer]] ·
[[Scenarios_v2]] · [[Geographic_Evidence_Rules]] · [[2026 Investment Programme]] ·
[[Everyday App]] · [[Food Leadership]] · [[Multi-Verticality]] · [[EBITDA]] · [[Cash Generation]] ·
[[GCC vs non-GCC]] · `Problem_Charter.md`
