---
type: forecast
status: draft
created: "2026-07-21"
updated: "2026-07-22"
built_by: forecasting-agent (Pilot 3, vault/Architecture/Pilot_Validation_Plan.md)
---

# Scenarios — talabat Egypt (FY2026)

First live build of this file, keyed to the nodes in [[Value_Driver_Tree]]. Per
`.claude/skills/forecast-builder/SKILL.md`, every scenario below carries its own growth-logic
sentence (not a bare percentage), a confidence level, and the driver-tree assumptions it depends on
(registered by `decision-steward` as `ASM-007` through `ASM-012`, all `Status: Approved` — see
`vault/Decisions/Assumptions_Register.md`). Horizon: FY2026, the horizon Section 9 (Financial Plan)
needs.

**Anchor for all three scenarios:** Egypt FY2025 segment revenue **USD 509.9m** `[FACT →
Facts/Revenue.md]` (TLB-002 p.111), with Q1 2026 (+81% YoY to USD145.3m vs. restated Q1 2025
USD80.3m, TLB-010 p.20) as the only other disclosed Egypt data point. **Two data points, inconsistent
intervals (annual + quarterly) — the forecast-builder skill's calibration rule caps any trend-
continuation reading of this pair at Medium confidence, never higher**, and every scenario below
respects that ceiling explicitly.

---

## Base case — trend moderation

**Growth logic:** Egypt segment revenue continues on its disclosed FY2025→Q1 2026 growth trajectory
(+81% YoY at the Q1 2026 print), but moderates toward the Group's own FY2026 guided revenue growth
range of 14-17% cFX (TLB-019 p.18, TLB-020 p.14) as the high base-effect of Egypt's still-recent
segment-reporting debut and talabat pro's Feb-2025 Egypt launch anniversary washes out of the
year-over-year comparison. This is a continuation-of-disclosed-trend logic, not an intervention-
dependent one — it assumes no incremental effect yet from the DEC-003 AI-roadmap extension beyond
whatever is already embedded in the Q1 2026 print.

**Depends on:** root revenue Fact node; ASM-007 (customer-growth gap, carried qualitatively);
ASM-009 (AOV/FX logic).

**Confidence: Medium** — this is the ceiling case explicitly named in the forecast-builder skill's
calibration rule ("extrapolating from exactly 2 disclosed data points... Medium at best"); it is not
elevated further despite the strength of the Q1 2026 print, precisely because two points is two
points regardless of how large the observed growth rate looks.

---

## Upside case — DEC-003 intervention succeeds

**Growth logic:** The plan's own recommended intervention (DEC-003/ASM-005, Approved: extending
talabat's Group AI roadmap — new-form-factor recommendations, cross-sell timing/incentive
optimisation, deepened adtech-embedded personalisation — into Egypt) succeeds as hypothesized,
lifting Egypt order frequency and advertising-revenue penetration toward the pattern already observed
at Group level (talabat pro's 20-28% frequency uplift / 26-32% retention uplift; AI/personalisation's
estimated EBITDA contribution rising USD14mn+→USD30mn+ FY2024→FY2025; Advertising & listing fees
+32% y/y FY2025) — on top of the base-case trend moderation, not replacing it. **This scenario is
explicitly the DEC-003 Option 2 mechanism (recommendation quality, cross-sell timing, adtech
personalisation) — it is NOT a churn-prediction outcome and NOT a subscription-uplift-only framing;
those were DEC-003's rejected Option 1 and Option 3.**

**Depends on:** ASM-008 (order-frequency uplift via AI-roadmap extension); ASM-011 (advertising
penetration via adtech extension); ASM-010 (implied-GMV proxy, for sizing only).

**Confidence: Low** — per the forecast-builder skill's calibration rule, "projecting an effect that
depends on an unproven intervention... Low, always — this is the honest ceiling for any upside
scenario tied to the plan's own thesis." Compounded here by the fact that every quantified input
(talabat pro uplift, AI-EBITDA contribution) is Group/GCC-level evidence explicitly excluding Egypt at
time of measurement (`Strategic/Customer Retention Drivers.md`) — not merely unproven timing, but
evidence drawn from a different (though related) population than the one the plan is forecasting for.

---

## Downside case — FX/margin pressure deepens

**Growth logic:** The already-observed Q1 2026 Group-level margin compression pattern (Adjusted
EBITDA margin 4.8% vs. 6.3% prior-year comparator restatement basis referenced in the task brief;
Group Adjusted EBITDA -9% YoY, Net Income -18% YoY even as GMV/revenue grew — `Strategic/Strategic
Risks.md`, TLB-020 p.4, p.10-11) deepens further, and the one Egypt-specific macro risk named in the
corpus — "Egypt FX exposure: YtD depreciation incorporated in guidance. GMV inflation-hedge dynamics
provide partial offset for further depreciation" (`Strategic/Strategic Risks.md`, TLB-020 p.14) —
worsens beyond what guidance already prices in, compressing Egypt's USD-reported revenue growth and
segment profitability even if local-currency, unit-level performance holds up. This scenario
extrapolates an already-observed, named, disclosed risk (not an invented one).

**Depends on:** ASM-009 (AOV/FX logic); root revenue Fact node; the delivery-cost Fact anchor
(USD113.13m, ~22% of Egypt revenue FY2025) as the cost base most exposed to FX-driven input-cost
pressure.

**Confidence: Medium** — this is an extrapolation of an already-observed, named, Group-level and
partially Egypt-named trend (the FX risk statement is the single most Egypt-specific risk language in
the corpus, per `Strategic/Strategic Risks.md`), which the forecast-builder skill's own worked example
treats as Medium-confidence territory ("extrapolates an already-observed trend"). Not Low, because
unlike the upside case this does not depend on an unproven intervention succeeding — it depends on a
named risk continuing, which is a different (and generally more defensible) kind of extrapolation.
Not High, because the magnitude of Egypt's FX depreciation is nowhere quantified in the corpus
(`Strategic/Strategic Risks.md` Open Questions), so the *direction* is well-evidenced but the *size* of
the downside is not.

**Important tension to carry into Section 9, not smooth over:** `Strategic/Strategic Risks.md`
explicitly notes that Egypt's own segment trajectory (PBT swinging from USD0.5m to USD9.4m, Q1
2025→Q1 2026) runs in the *opposite* direction from the Group-wide margin compression this downside
case extrapolates — Egypt may be one of the markets funding the Group's investment step-down through
improving unit economics, not one being squeezed by it. This downside case is therefore a genuine risk
scenario, not the single most likely reading of Egypt's own recent trend; it should be presented in
Section 9 as a named risk case, not implied to be equally likely as the base case.

---

## Scenario summary table

| Scenario | Growth logic (one line) | Key assumption IDs | Confidence |
|---|---|---|---|
| Base | Continuation of the disclosed FY2025→Q1 2026 Egypt trend, moderating toward Group FY2026 guided growth (14-17% cFX) as base effects wash out | ASM-007, ASM-009 | Medium (2-point extrapolation ceiling) |
| Upside | DEC-003's Group-AI-roadmap-extension intervention (recommendations, cross-sell timing, adtech personalisation) succeeds in Egypt as it has at Group level | ASM-008, ASM-011, ASM-010 | Low (unproven intervention + Group-not-Egypt evidence) |
| Downside | Already-observed Group margin compression and the named Egypt FX-depreciation risk deepen beyond what FY2026 guidance already prices in | ASM-009, root revenue Fact, delivery-cost Fact | Medium (extrapolates a named, already-observed, partly Egypt-specific risk; direction evidenced, magnitude is not) |

---

## Escalation flag for decision-steward / user — resolved

**Originally flagged per Step 5 of the forecast-builder skill and the task brief's explicit
instruction not to resolve this myself:** which of these three scenarios becomes Section 9's
**headline case** is a choice that plausibly meets the "materially affects the plan's headline
recommendation" bar for a full Decision Log entry, not just an Assumptions Register row — because:
- The base case (Medium confidence, no intervention credit) would understate the financial case for
  the very AI-retention investment this entire capstone is built to recommend, if used as the sole
  headline number.
- The upside case (Low confidence, intervention-dependent) is the only scenario that actually reflects
  DEC-003's committed thesis paying off — but presenting it as the headline case risks overstating a
  Low-confidence, Egypt-unproven projection as if it were the plan's central estimate.
- Common practice (and arguably the more defensible McKinsey-standard approach per `CLAUDE.md`'s
  writing standard) would be to present the base case as Section 9's headline financial baseline and
  the upside case explicitly as "the return on the recommended investment" (i.e., the delta between
  base and upside is the investment's projected value-add) rather than picking one scenario as *the*
  number — but that framing choice is itself a presentation decision this agent is not authorized to
  make unilaterally, since it shapes how the plan's core financial argument reads.

**Resolved by `decision-steward`:** see `Decision_Log/DEC-005_section9-headline-scenario.md`
(status `approved`, no user escalation required — judged a data-presentation/methodology call within
`decision-steward`'s documented discretion, not a strategic framing choice under DEC-003's bar, since
it does not change which intervention the plan recommends). **Decision:** Section 9 presents the base
case as the headline financial baseline, the upside case explicitly as the projected return/delta
attributable to the DEC-003 AI-roadmap-extension investment (not as a competing central estimate), and
the downside case as a named risk scenario, not implied equally likely to the base case, per this
file's own "Important tension to carry into Section 9" note above.

## Links
[[Forecasting_Layer]] · [[Value_Driver_Tree]] · [[Strategic/Strategic Risks]] ·
[[Strategic/Customer Retention Drivers]] · [[DEC-003_section2-governing-hypothesis]] ·
[[DEC-004_2026-investment-total]]
