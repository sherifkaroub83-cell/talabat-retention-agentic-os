---
type: forecast
status: active
created: "2026-07-23"
updated: "2026-07-23"
built_by: forecasting-agent
supersedes_note: "Companion to (not a replacement of) vault/Forecasts/Scenarios.md, which is marked status:superseded and left untouched as the historical Egypt-retention-problem record. This file is the fresh Group-wide capital-allocation scenario set required by the 2026-07-23 pivot — see Problem_Charter.md."
---

# Scenarios v2 — talabat Group 2026 Investment Programme (FY2026)

Keyed to `vault/Forecasts/Value_Driver_Tree_v2.md`. Per `.claude/skills/forecast-builder/SKILL.md`,
every scenario below carries its own growth-logic sentence (never a bare percentage), a confidence
level, a geography tag, and the driver-tree/assumption IDs it depends on. Horizon: FY2026, the
programme's live budget year. **No single-point ROI or return figure appears anywhere in this file** —
the corpus discloses the programme's cost side (the EBITDA margin bridge) but not a disclosed return
figure, so every forecast node here is expressed as a range with a stated confidence level.

**Anchor for the top-level scenarios:** the disclosed FY2026 Group guidance range itself — GMV growth
11-14% cFX (USD 11.2-11.5bn), Revenue growth 14-17% cFX (USD 4.4-4.5bn), Adjusted EBITDA 4.4-4.8% of
GMV (USD 510-540mn), Free Cash Flow 3.2-3.6% of GMV (USD 370-400mn) — `Facts/Revenue.md`,
`Facts/Marketplace_Facts.md` (TLB-019 p.18, TLB-020 p.14, TLB-014 p.9). This is already talabat's own
disclosed range, not a single figure this agent invented — the top-level scenarios below interpret
*where within, at, or outside* that disclosed range FY2026 actually lands, and why.

---

## Top-level scenarios

### Base case — guidance holds, investment return not yet separable from guidance
**Growth logic:** talabat's FY2026 guidance (GMV +11-14% cFX, Revenue +14-17% cFX, Adj. EBITDA
4.4-4.8% of GMV, FCF 3.2-3.6% of GMV) already reflects the deliberate margin step-down the USD175mn
programme funds (TLB-020 p.16). The base case assumes the Group lands within this disclosed range,
without attempting to isolate how much of the range is "organic" versus "programme-driven" — because
the corpus itself does not make that separation (N-42/`ASM-017`). This is the most defensible reading:
it takes management's own disclosed range at face value rather than constructing an independent
point estimate around it.
**Depends on:** N-24-N-27 (GMV Fact nodes), N-30 (Revenue guidance), N-34 (EBITDA margin bridge), N-40
(FCF guidance).
**Geography: Group.**
**Confidence: Medium** — this is management's own disclosed guidance range, issued and reaffirmed
across three documents (TLB-009 Feb 2026, TLB-011/TLB-020/TLB-014 May 2026), not an extrapolation this
agent constructed; capped at Medium rather than High because guidance itself is forward-looking and
unaudited, and because the FY2026 deceleration versus FY2025's 28% actual GMV growth is itself only
qualitatively explained ("larger base, more competitive environment, macro headwinds, instashop
dilution," TLB-019 p.18) rather than decomposed by cause.

### Upside case — Everyday App + Food-leadership mechanisms compound faster than guidance embeds
**Growth logic:** the programme's own named mechanisms are already trending in the right direction
ahead of any programme-specific credit: multi-vertical GMV share rose in three consecutive periods
(68%→73%→76%, Dec'24→Dec'25→Mar'26, N-11), talabat pro's subscriber GMV share rose from ~32% to ~49%
over the same window (N-08), and AI/personalisation's estimated EBITDA contribution roughly doubled
FY2024→FY2025 (N-09). If these already-observed trends continue at their recent pace rather than
moderating to the rate implicit in the low end of guidance, GMV growth could land toward or above the
top of the disclosed 11-14% cFX range, with Revenue and EBITDA tracking correspondingly toward the top
of their own guided ranges. This is a continuation-of-observed-trend logic, not a new intervention —
it assumes the programme sustains, rather than merely maintains, momentum already visible in the
corpus.
**Depends on:** N-11 (multi-vertical GMV share trend), N-08 (pro GMV share trend), N-09 (AI/
personalisation EBITDA trend), N-42 (`ASM-017`, programme-attributable GMV range), N-37 (`ASM-019`,
margin-recovery inference).
**Geography: Group**, with the caveat that the underlying pro/retention uplift statistics feeding this
trend (N-15, N-20, N-22) are GCC+Jordan-measured, not confirmed for Egypt or Iraq (`ASM-016`).
**Confidence: Low** — per the forecast-builder skill's calibration rule, this depends on already-strong
trends *continuing at their recent pace rather than moderating*, which is a stronger claim than trend
continuation alone; it is also the scenario most exposed to the unreconciled Q1-2026-vs-FY2026 margin
bridge discrepancy noted at N-34.

### Downside case — margin compression deepens and behaviour-change trends moderate faster than guidance assumes
**Growth logic:** Q1 2026 Adjusted EBITDA already fell to 4.8% of GMV (-9% y/y) against a 6.0% Q4 2025
baseline (N-35), and the FY2026 guided range's low end (4.4% of GMV) implies further compression is
already anticipated by management. This downside case assumes the compression deepens beyond the low
end of guidance — e.g. if the G&R product-mix margin drag (N-32: (0.5%)-(0.7%)pp) proves larger or more
persistent than currently guided, or if the Everyday App/Food-leadership margin bridge's own
unreconciled quarterly-vs-annual attribution (N-34's Open Question) signals cost lines are running
ahead of the annual bridge's assumptions. This scenario extrapolates an already-observed, disclosed
pressure (not an invented one), consistent with management's own "meaningful dry powder" language for
Food-leadership defense (TLB-014 p.9) implying the risk is real enough to reserve capital against.
**Depends on:** N-35 (Q1 2026 actual EBITDA), N-32 (G&R margin drag), N-34 (margin bridge and its
unreconciled quarterly/annual attribution).
**Geography: Group.**
**Confidence: Medium** — extrapolates an already-observed, disclosed Group-level trend (the Q1 2026
actual print), not an unproven intervention; direction is well-evidenced (margin is already compressing
on the low side of expectations at Q1), but the corpus does not disclose how much further compression
would represent "worse than guidance" versus "guidance already prices this in," so magnitude is less
certain than direction.

---

## Module: talabat pro / loyalty

**Evidence base:** `vault/Knowledge/Topics/Talabat Pro.md`, `Facts/Talabat_Pro.md` — strong, most
directly quantified retention lever in the corpus.

- **Base:** pro subscriber GMV share continues its rising trajectory from ~49% (Q1 2026) at a
  moderating pace as GCC penetration approaches saturation, landing in an illustrative 50-55% range by
  FY2026-end. **Logic:** continuation of the disclosed 32%→49% (FY2024→Q1 2026) trend, moderated for
  the fact that a share metric approaching 50% has structurally less room to grow at the same absolute
  pace as it did from a lower base. `[ASSUMPTION → ASM-021]`. **Depends on:** N-08. **Geography:
  Group.** **Confidence: Medium** — three-ish data points at reasonably consistent intervals, but the
  range itself (50-55%) is this agent's construction, not disclosed.
- **Upside:** Egypt and Iraq's later-launched pro cohorts (Feb 2025, Sept 2025) mature through their
  early-adoption curve during 2026, pulling Group-wide subscriber share toward the upper half or above
  the base-case range, on the logic that newly-launched markets typically show the steepest early
  adoption growth (the UAE pilot itself grew subscriber penetration at a 129% CAGR per TLB-015 p.?).
  **Depends on:** ASM-021, ASM-016 (Egypt/non-GCC applicability inference). **Geography:
  inferred-applicability (Group trend extended to Egypt/Iraq specifically).** **Confidence: Low** — no
  Egypt- or Iraq-specific pro adoption figure exists anywhere in the corpus post-launch to confirm this.
- **Downside:** GCC pro penetration is already near-saturated (subscriber GMV share already ~49% of a
  market where GCC is 82% of GMV), and Partner-funded free-delivery economics (pro's benefit is
  Partner-funded per TLB-026 p.134) tighten if Partners resist further commission concessions amid the
  same competitive pressure Food-leadership is funded to counter — capping FY2026 subscriber-GMV-share
  growth below the base case. **Depends on:** ASM-021; N-05 (Food-leadership partner-side commission
  investment, a competing claim on the same Partner economics). **Geography: Group.** **Confidence:
  Low** — the Partner-funding tension is a logical inference from two separately-disclosed facts, not
  itself a disclosed risk statement.

## Module: multi-vertical adoption

**Evidence base:** `vault/Knowledge/Topics/Multi-Verticality.md`, `Facts/Orders_Facts.md`,
`Facts/GMV_Facts.md` — the corpus's most consistently quantified customer-behaviour metric.

- **Base:** multi-vertical GMV share continues its three-period rising trend (68%→73%→76%,
  Dec'24→Dec'25→Mar'26) toward an illustrative 78-80% by FY2026-end, a smaller absolute step than the
  prior periods given the share is approaching a ceiling. `[ASSUMPTION → ASM-022]`. **Depends on:**
  N-11. **Geography: Group.** **Confidence: Medium** — three consecutive rising data points at roughly
  consistent (quarterly-ish) intervals is the strongest trend-continuation case in this tree, per the
  forecast-builder skill's calibration rule.
- **Upside:** the Everyday App investment's explicit rationale — "improving frequency, basket size, and
  retention" via multi-verticality (TLB-020 p.16) — accelerates conversion along the disclosed Food →
  G&R → talabat pro journey (N-18) faster than the base-case trend implies, pushing multi-vertical GMV
  share toward or above 80% and lifting order frequency toward the upper end of the disclosed 13.0x
  multi-vertical multiple (N-14). **Depends on:** ASM-022, N-18, N-14. **Geography: Group.**
  **Confidence: Low** — depends on the investment's own thesis working as hypothesized, the
  forecast-builder skill's named Low-confidence ceiling for any upside tied to the plan's own
  intervention logic.
- **Downside:** the corpus does not disclose the cost of converting a food-only customer to
  multi-vertical (`Multi-Verticality.md` Open Questions), so if that conversion cost proves higher than
  implicitly assumed in the Everyday App budget, multi-vertical share growth could plateau near current
  levels (~76-77%) rather than continuing its recent trajectory, while G&R's structurally lower margin
  (N-32) still drags EBITDA even without matching GMV upside. **Depends on:** ASM-022, N-32.
  **Geography: Group.** **Confidence: Low** — the conversion-cost gap is a genuine unknown, not an
  already-observed pressure, so this is closer to a data-gap-driven downside than an evidenced trend.

## Module: AI personalisation

**Evidence base:** `vault/Knowledge/Topics/AI.md`, `vault/Knowledge/Topics/Personalization.md`,
`Facts/AI_Facts.md` — the only lever in the corpus with a directly quantified, multi-year EBITDA trail.

- **Base:** the personalisation/ranking algorithm's estimated EBITDA contribution continues its
  FY2024→FY2025 trajectory (USD14mn+ → USD30mn+, roughly doubling) at a moderating rate, landing in an
  illustrative USD 35-45mn range for FY2026. `[ASSUMPTION → ASM-023]`. **Depends on:** N-09.
  **Geography: Group.** **Confidence: Medium** — two consecutive annual data points showing a
  consistent direction, but the exact doubling rate is unlikely to sustain indefinitely as the
  contribution scales off a larger base, hence the moderation.
- **Upside:** continued investment in personalisation granularity (the disclosed shift from
  cuisine-level to item-level recommendations, TLB-002 p.15) plus the 235TB/day data infrastructure
  (N-06) compounds faster than the base case, pushing the FY2026 EBITDA contribution toward or above
  the top of the illustrative range, consistent with fraud-detection's own disclosed ~USD6mn/year
  saving (TLB-015 p.21) showing AI-driven efficiency gains are not limited to personalisation alone.
  **Depends on:** ASM-023, N-06. **Geography: Group.** **Confidence: Low** — no disclosed FY2026
  target or roadmap commitment for this specific figure exists; this is trend extrapolation compounded
  by an unproven acceleration assumption.
- **Downside:** the corpus does not disclose whether talabat's AI/ML models are tuned separately for
  non-GCC markets or run on the same Delivery Hero-inherited regional models (`AI.md` Open Questions);
  if personalisation effectiveness is structurally weaker in newer, thinner-data markets (Egypt, Iraq),
  the FY2026 EBITDA contribution could fall short of the base-case range as those markets' growing GMV
  share (N-25: non-GCC now 21% of Group GMV) dilutes the average effectiveness of a Group-level
  estimate. **Depends on:** ASM-023, N-25. **Geography: Group, with an inferred-applicability caveat
  for non-GCC markets specifically.** **Confidence: Low** — this is a plausible mechanism, not an
  observed one; the corpus states the data gap but not a measured effectiveness shortfall.

## Module: targeted incentives

**Evidence base:** `vault/Knowledge/Topics/Promotions.md`, `Facts/Retention.md`,
`Facts/Customer_Growth.md` — talabat Rewards, PostPaid, and CARC spend.

- **Base:** talabat Rewards' >15% order-frequency uplift for first-time redeemers and PostPaid's ~14%
  order-frequency increase (per the Products entity list) continue to hold at broadly similar magnitude
  through FY2026, funded by CARC continuing its disclosed rising trajectory (USD89mn 2023 → USD103mn
  2024 → USD155mn 2025, 1.6% of GMV) at a similar or modestly higher share of GMV.
  `[ASSUMPTION → ASM-024]`. **Depends on:** `Promotions.md` Rewards/PostPaid figures; CARC trend.
  **Geography: Group.** **Confidence: Medium** — CARC is a three-year, consistently-rising disclosed
  cost line, a reasonably strong trend-continuation base; the frequency-uplift figures themselves are
  each single-point disclosures (no multi-period trend), which caps the combined confidence at Medium
  rather than higher.
- **Upside:** talabat's own stated shift toward "increased incentives to retain medium and high-value
  customers" (TLB-011 p.2) and the Food-leadership CVP-over-discounting framing (N-05) together imply
  targeted, AI-timed incentives (leveraging the same personalisation layer in N-09) outperform the
  base-case frequency-uplift figures, since a personalised offer is a more efficient use of the same
  CARC dollar than an untargeted voucher. **Depends on:** ASM-024, N-05, N-09. **Geography: Group.**
  **Confidence: Low** — the corpus states the *intent* to prioritize targeting over discounting but
  discloses no measured before/after comparison of targeted versus untargeted incentive effectiveness.
- **Downside:** it is unclear from the corpus whether the Rewards frequency-uplift figure is causal or
  reflects self-selection by already-engaged customers (`Promotions.md` Open Questions) — if the true
  causal effect is smaller than the disclosed correlation implies, FY2026 incentive-driven frequency
  gains could underperform the base case even as CARC spend continues rising, i.e. a declining
  marginal-return scenario. **Depends on:** ASM-024. **Geography: Group.** **Confidence: Low** — the
  causal-vs-correlation gap is a named, unresolved evidence limitation, not an observed trend.

## Module: advertising

**Evidence base:** `vault/Knowledge/Topics/Advertising.md`, `Facts/Advertising_Facts.md` — a
consistently disclosed, multi-year revenue line with a named benchmark ceiling.

- **Base:** advertising & listing-fees revenue continues its FY2024→FY2025 growth (USD246m→USD323m,
  +32% y/y) at a moderating rate given the base effect of a larger prior-year figure, landing in an
  illustrative USD 390-430mn range for FY2026 (roughly 3.3-3.6% of the guided GMV range).
  `[ASSUMPTION → ASM-025]`. **Depends on:** N-29. **Geography: Group.** **Confidence: Medium** — a
  multi-year (2021-2025) disclosed growth trajectory (USD84mn→USD323mn) gives this the strongest
  historical base of any module here, though the exact FY2026 range remains this agent's construction.
- **Upside:** advertising revenue accelerates toward the ~7% of GMV medium-term benchmark management
  has already validated for talabat mart in the UAE specifically (TLB-001 p.21, TLB-002 p.10), if that
  UAE-proven benchmark is reached at the Group level faster than the base case implies, pushing FY2026
  advertising revenue toward or above the top of the illustrative range. **Depends on:** ASM-025;
  the UAE talabat-mart 7%-of-GMV figure. **Geography: the benchmark itself is country-specific
  (UAE); applying it as a Group-level target is an inferred-applicability extrapolation.**
  **Confidence: Low** — no source states a timeline or commitment for the Group to reach the UAE-proven
  benchmark; this is a labeled ceiling reference, not a guided target.
- **Downside:** the GEMs product's actual effectiveness at winning back churned Partner customers is
  unquantified (`Advertising.md` Open Questions), and if Partner-side ad spend softens as Food-leadership
  commission investment (N-05) competes for the same Partner economic relationship, advertising revenue
  growth could decelerate faster than the base case, falling below the illustrative range.
  **Depends on:** ASM-025, N-05. **Geography: Group.** **Confidence: Low** — a plausible tension between
  two disclosed but separately-tracked Partner-economics levers, not itself an observed conflict.

## Module: grocery & retail

**Evidence base:** `vault/Knowledge/Topics/Grocery and Retail.md`,
`vault/Knowledge/Topics/Quick Commerce.md`, `Facts/Q-Commerce.md`, `Facts/GMV_Facts.md` — the largest
single named Everyday App line item (talabat mart ≈USD45mn capex).

- **Base:** G&R GMV continues its FY2025 growth rate (47% y/y to USD2.77bn) at a moderating pace as the
  base grows larger, alongside the already-disclosed (0.5%)-(0.7%)pp EBITDA margin drag persisting at a
  similar magnitude through FY2026. `[ASSUMPTION → ASM-026]`. **Depends on:** N-07, N-26, N-32.
  **Geography: Group.** **Confidence: Medium** — a strong, consistent multi-period disclosed GMV growth
  trend for G&R, though the FY2026 range and the assumption that the margin drag holds steady rather
  than narrowing or widening are this agent's constructions, not disclosed.
- **Upside:** the disclosed USD150bn+ grocery TAM against only ~3% current online adoption (TLB-014
  p.19, TLB-020 p.16) represents substantial headroom management itself cites as the justification for
  continued G&R capital allocation; if store densification (N-04, ~USD45mn capex) converts headroom
  faster than the base case, G&R GMV growth could exceed 47% y/y while the margin drag narrows as tMart
  scales toward the efficiency levels implied by its ~95% effective take rate. **Depends on:** ASM-026,
  N-04. **Geography: Group.** **Confidence: Low** — TAM headroom is real and disclosed, but conversion
  *rate* against that headroom is not guided or historically established beyond the current growth
  trend, so assuming acceleration (not just continuation) is the Low-confidence step.
- **Downside:** the corpus does not disclose whether the current (0.5%)-(0.7%)pp margin drag narrows,
  persists, or widens as G&R scales (`Grocery and Retail.md` Open Questions); if it widens as store
  density increases in lower-maturity non-GCC/Egypt markets (where per-capita order frequency is ~10x
  lower than GCC per `GCC vs non-GCC.md`), G&R GMV growth could continue while EBITDA drag deepens
  beyond the base case, i.e. a growth-without-profitability scenario. **Depends on:** ASM-026;
  `GCC vs non-GCC.md`'s 1.28x vs 0.13x per-capita order-frequency gap. **Geography: Group, with an
  inferred-applicability caveat for non-GCC/Egypt specifically.** **Confidence: Low** — the maturity-gap
  mechanism is evidenced (the frequency gap itself is a disclosed Fact) but its effect on G&R margin
  specifically is not measured anywhere in the corpus.

## Module: Food-leadership

**Evidence base:** `vault/Knowledge/Topics/Food Leadership.md`, `Facts/Competition_Facts.md`,
`Facts/Retention.md` — the smaller-funded (~USD55mn) but larger-GMV-vertical half of the programme.

- **Base:** Food GMV continues its FY2025 growth rate (20% y/y to USD6.65bn) at a broadly similar pace
  through FY2026, with the ~USD55mn CVP/partner-retention investment sustaining (not necessarily
  reversing) the already-observed competitive pressure — specifically the disclosed non-high-value M1
  retention decline of -4% y/y in UAE, Kuwait, and Qatar (TLB-019 p.9) — without that pressure spreading
  further. `[ASSUMPTION → ASM-027]`. **Depends on:** N-05, N-26. **Geography: Group for the GMV
  trajectory; the competitive-pressure evidence itself is scoped only to UAE, Kuwait, Qatar
  (country-specific/market-comparison), not Group-wide or Egypt-specific.** **Confidence: Medium** — the
  GMV growth continuation is a reasonably strong trend read (consistent with prior periods), though the
  assumption that CVP investment merely holds the competitive line rather than reversing or worsening it
  is this agent's judgment call, not a disclosed outcome.
- **Upside:** management's stated preference for CVP investment over discount-matching (TLB-020 p.16)
  succeeds well enough that the non-high-value retention decline in UAE/Kuwait/Qatar narrows or
  reverses, and "meaningful dry powder" (TLB-014 p.9, TLB-020 p.14) is deployed if a competitive
  escalation occurs, defending Food GMV growth at or above the base case despite competitive intensity.
  **Depends on:** ASM-027, the dry-powder language. **Geography: country-specific (UAE, Kuwait, Qatar)
  for the retention metric; Group for the GMV outcome.** **Confidence: Low** — "dry powder" is
  explicitly a contingent, undeployed reserve with no disclosed trigger condition or dollar amount
  (`Food Leadership.md` Open Questions), so crediting its effectiveness before it is even quantified is
  the Low-confidence step.
- **Downside:** the competitive-pressure evidence motivating Food-leadership is scoped only to UAE,
  Kuwait, and Qatar — whether Egypt or other non-GCC markets face comparable pressure is not evidenced
  anywhere in the corpus (`Food Leadership.md` Open Questions); if unmeasured competitive pressure is
  in fact building in non-GCC markets where Food-leadership spend has historically been under-targeted
  (no disclosed market-level allocation exists at all, N-01), Food GMV growth could underperform the
  base case in markets the ~USD55mn bucket was never evidenced to be defending. **Depends on:** ASM-027.
  **Geography: inferred-applicability (source: UAE/Kuwait/Qatar; target: non-GCC, Egypt included).**
  **Confidence: Low** — this is a genuine, named evidence gap (absence of non-GCC competitive data), not
  an observed downside trend.

## Module: logistics

**Evidence base:** `vault/Knowledge/Topics/Logistics.md`, `Facts/Logistics_Facts.md`. **This module is
the weakest-evidenced of the eight** — logistics performance data exists and is credited qualitatively
with EBITDA-margin support, but the corpus never ties a specific dollar figure within either the
Everyday App or Food-leadership bucket to logistics investment by name (the closest connection is
inferred: Everyday App's dark-store densification capex funds tMart's fulfilment layer, and the Problem
Charter's own summary of Food-leadership names "delivery reliability" as a component area, though the
underlying Food Leadership topic note itself does not repeat that phrase with a page citation). This
module is built, not skipped, because genuine (if qualitative) evidence exists — but every cell below is
explicitly flagged as directional-only, with no numeric FY2026 target constructed, unlike the other
seven modules.

- **Base:** the already-observed, multi-year delivery-time and on-time-rate improvement trend (average
  delivery time ~37 min in 2020 to under 30 min by 2024-2025; on-time rate ~67%→~78%; system reliability
  ~99.95%, TLB-015 p.42, p.82) continues at a similar pace through FY2026, continuing to provide
  qualitative EBITDA-margin support (TLB-012 p.21, TLB-016 p.13) alongside, not separately quantified
  from, the other margin drivers already in the bridge (N-34). `[ASSUMPTION → ASM-028]`. **Depends on:**
  `Logistics.md`'s delivery-time/on-time-rate trend; N-34. **Geography: Group.** **Confidence: Low** —
  even the base case here is directional only; no numeric FY2026 logistics KPI target exists in the
  corpus to anchor a range against.
- **Upside:** continued AI-driven dispatch/route-optimisation investment (N-06) pushes delivery
  reliability and speed further, providing incremental (unquantified) EBITDA-margin support beyond the
  base case — plausible given the stated logistics-efficiency-to-margin link, but with no disclosed
  magnitude to bound an upside range. **Depends on:** ASM-028, N-06. **Geography: Group.** **Confidence:
  Low** — directional only; this is the module where the "no false-precision point estimate" rule is
  most binding, since even a range would overstate what the evidence supports.
- **Downside:** no fact directly links logistics KPIs to churn or retention (`Logistics.md` Open
  Questions) — the connection is asserted qualitatively by management, not measured — so if logistics
  investment continues without a demonstrated retention payoff, the margin-support logic could weaken
  without any corresponding customer-behaviour benefit materializing, a downside that is really a
  statement about measurement absence more than an observed negative trend. **Depends on:** ASM-028.
  **Geography: Group.** **Confidence: Low.**

---

## Scenario summary table

| Scenario / Module | Base logic (one line) | Upside logic (one line) | Downside logic (one line) | Confidence (B/U/D) |
|---|---|---|---|---|
| Top-level | Disclosed FY2026 guidance range holds, return not separated from guidance | Already-observed multi-vertical/pro/AI trends compound faster than guidance embeds | Q1 2026 margin compression deepens beyond guidance's low end | Med/Low/Med |
| talabat pro/loyalty | Pro GMV share moderates toward 50-55% | Egypt/Iraq cohorts mature faster than GCC did | GCC saturation + Partner-funding tension caps growth | Med/Low/Low |
| Multi-vertical adoption | GMV share continues toward 78-80% | Everyday App thesis accelerates conversion | Unknown conversion cost caps growth near current levels | Med/Low/Low |
| AI personalisation | EBITDA contribution moderates toward USD35-45mn | Granularity + infrastructure compounds faster | Non-GCC data-thinness dilutes average effectiveness | Med/Low/Low |
| Targeted incentives | Rewards/PostPaid uplift holds, CARC keeps rising | AI-timed targeting outperforms untargeted spend | Causal effect may be smaller than disclosed correlation | Med/Low/Low |
| Advertising | Revenue moderates toward USD390-430mn | UAE's 7%-of-GMV benchmark reached Group-wide | Partner-economics tension with Food-leadership softens growth | Med/Low/Low |
| Grocery & retail | GMV growth moderates, margin drag holds steady | TAM headroom converts faster, drag narrows | Non-GCC maturity gap widens drag as density increases | Med/Low/Low |
| Food-leadership | Food GMV growth holds, competitive pressure contained | CVP investment reverses retention decline; dry powder deployed | Unmeasured non-GCC competitive pressure goes undefended | Med/Low/Low |
| Logistics | Delivery-time/reliability trend continues (directional only) | AI dispatch investment adds incremental margin support | No disclosed KPI-to-retention link; payoff unconfirmed | Low/Low/Low |

---

## Escalation flag for decision-steward

**Flagged, not resolved here, per Step 5 of the forecast-builder skill:** whether the plan's headline
Section 9/12/13 financial case should present the **top-level base case alone**, or the base case
alongside the **Everyday App vs. Food-leadership module split** (using `ASM-018`'s illustrative 2.2:1
investment-proportional weighting) as two separately-labeled sub-cases, is a framing choice that
plausibly meets the "materially affects the plan's headline recommendation" bar — because:
- Presenting only the top-level base case is the most defensible reading of the disclosed guidance, but
  risks understating the specific case for *why* Everyday App receives ~2.2x Food-leadership's funding,
  which is exactly the ratio question the capital-allocation plan needs to engage with.
- Presenting the bucket-level split as if it were a disclosed or measured breakdown (rather than the
  explicitly-labeled `ASM-018` illustrative construction it is) would risk exactly the false-precision
  error the standing instructions forbid.
- This is analogous to the resolved `DEC-005` precedent in the superseded Egypt tree (base case as
  headline, upside as the investment's projected delta) — `decision-steward` should determine whether
  the same resolution logic applies here or whether the Group-wide, two-bucket structure of this
  problem warrants a different presentation choice.

---

## New assumptions introduced in this pass (ASM-015 through ASM-028)

Per Step 5 of the forecast-builder skill ("hand off, don't self-register"), the fourteen assumptions
below are proposed for `decision-steward` to register in `vault/Decisions/Assumptions_Register.md`.
Numbering continues from the pre-pivot register (`ASM-001`–`014`, all superseded 2026-07-23).

| Proposed ID | Statement | Geography | Confidence | Introduced in |
|---|---|---|---|---|
| ASM-015 | Basket/AOV is assumed to move directionally with the multi-vertical GMV-share trend (68%→73%→76%), since no disclosed AOV or basket-value figure exists at Group or country level anywhere in the corpus — a proxy mechanism, not a measured basket/AOV trend | Group | Low | Value_Driver_Tree_v2.md, N-19 |
| ASM-016 | Group/GCC+Jordan talabat pro frequency (20-28%), retention (26-32%), and multi-vertical M1 retention-delta (+16pp/+20pp) statistics are applied to Egypt and non-GCC markets generally as a labeled inference, not a disclosed Egypt/non-GCC figure, since these markets are explicitly excluded from the underlying measurement population | inferred-applicability (Group/GCC → Egypt/non-GCC) | Low | Value_Driver_Tree_v2.md, N-13; used across the talabat pro, multi-vertical, AI personalisation, and grocery & retail modules in Scenarios_v2.md |
| ASM-017 | The disclosed FY2026 GMV growth guidance range (11-14% cFX) is illustratively decomposed into a baseline/organic component (toward the low end) and a programme-attributable component (the delta toward the high end), since the corpus does not itself separate guidance into these two components | Group | Low | Value_Driver_Tree_v2.md, N-42; Scenarios_v2.md top-level scenarios |
| ASM-018 | Everyday App's and Food-leadership's respective shares of any incremental GMV effect are assumed, for scenario-modeling purposes only, to be proportional to their investment shares (~120mn:55mn, ≈2.2:1) — an illustrative construction, not a disclosed or measured causal split | Group | Low | Value_Driver_Tree_v2.md, N-43; Scenarios_v2.md escalation flag |
| ASM-019 | FY2026's guided EBITDA margin step-down is assumed to see a directional partial recovery in FY2027+ toward, but not necessarily reaching, the pre-programme 6.0-6.5% range, with timing and magnitude explicitly unstated, based on management's own "temporary step-down" framing | Group | Low | Value_Driver_Tree_v2.md, N-37; Scenarios_v2.md top-level upside scenario |
| ASM-020 | Egypt's (worked-example) bottom-up exposure to the full USD175mn 2026 programme is estimated at ≈USD19.3m by applying Egypt's ~11.0% share of FY2025 disclosed Group revenue to the full programme total — an illustrative pro-rata proxy, not a disclosed or approved Egypt budget line | inferred-applicability (Group → Egypt) | Low | Value_Driver_Tree_v2.md, N-44 |
| ASM-021 | talabat pro subscriber GMV share is projected to reach an illustrative 50-55% of platform GMV by FY2026-end, continuing the disclosed 32%→49% (FY2024→Q1 2026) trend at a moderating pace | Group | Medium | Scenarios_v2.md, talabat pro/loyalty module |
| ASM-022 | Multi-vertical customer GMV share is projected to reach an illustrative 78-80% by FY2026-end, continuing the disclosed 68%→73%→76% (Dec'24→Dec'25→Mar'26) trend at a moderating pace | Group | Medium | Scenarios_v2.md, multi-vertical adoption module |
| ASM-023 | AI/personalisation's estimated EBITDA contribution is projected to reach an illustrative USD35-45mn range for FY2026, continuing the disclosed USD14mn+→USD30mn+ (FY2024→FY2025) trajectory at a moderating rate | Group | Medium | Scenarios_v2.md, AI personalisation module |
| ASM-024 | talabat Rewards' and PostPaid's disclosed order-frequency uplift figures (>15% and ~14% respectively) are assumed to hold at broadly similar magnitude through FY2026, funded by CARC continuing its disclosed rising trajectory (USD89mn→103mn→155mn, 2023-2025) at a similar or modestly higher share of GMV | Group | Medium | Scenarios_v2.md, targeted incentives module |
| ASM-025 | Advertising & listing-fees revenue is projected to reach an illustrative USD390-430mn range for FY2026, continuing the disclosed USD246mn→USD323mn (FY2024→FY2025, +32% y/y) trajectory at a moderating rate | Group | Medium | Scenarios_v2.md, advertising module |
| ASM-026 | G&R GMV growth is projected to continue its disclosed FY2025 rate (47% y/y) at a moderating pace through FY2026, with the disclosed (0.5%)-(0.7%)pp Adjusted EBITDA margin drag assumed to persist at a similar magnitude rather than narrowing or widening | Group | Medium | Scenarios_v2.md, grocery & retail module |
| ASM-027 | Food GMV growth is projected to continue its disclosed FY2025 rate (20% y/y) through FY2026, with the ~USD55mn Food-leadership CVP/partner-retention investment assumed to sustain (not necessarily reverse) the already-observed non-high-value M1 retention decline (-4% y/y, UAE/Kuwait/Qatar) rather than letting it spread further | Group (GMV); country-specific/market-comparison (UAE, Kuwait, Qatar) for the underlying retention metric | Medium | Scenarios_v2.md, Food-leadership module |
| ASM-028 | Logistics performance (delivery time, on-time rate, reliability) is assumed to continue its disclosed multi-year improvement trend through FY2026, providing directional-only (unquantified) EBITDA-margin support alongside the other named drivers already in the FY2026 margin bridge — no numeric FY2026 logistics KPI target is constructed, given the absence of any disclosed dollar-tie between logistics and either named 2026 investment bucket | Group | Low | Scenarios_v2.md, logistics module |

**All fourteen IDs (`ASM-015`–`ASM-028`) are proposed, not yet registered** — handed to
`decision-steward` for `Assumptions_Register.md` entry per the forecast-builder skill's Step 5. The
top-level scenario-choice escalation flag above (headline base case vs. bucket-split presentation) is
separately flagged for a possible full Decision Log entry, not just a register row, per the same skill
step.

## Links
[[Value_Driver_Tree_v2]] · [[Investment_Relationship_Map]] · [[Business_Relationships]] ·
[[Forecasting_Layer]] · [[Geographic_Evidence_Rules]] · [[Talabat Pro]] · [[Multi-Verticality]] ·
[[AI]] · [[Personalization]] · [[Promotions]] · [[Advertising]] · [[Grocery and Retail]] ·
[[Quick Commerce]] · [[Food Leadership]] · [[Logistics]] · `Problem_Charter.md`
