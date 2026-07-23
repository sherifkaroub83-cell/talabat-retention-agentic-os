---
id: OPT-005
status: candidate
category: Enabling capability
date: "2026-07-23"
owner: decision-steward
---

# OPT-005 — Scale the AI/personalisation embedded capability

## Rationale
AI/personalisation is the only lever in the corpus with a directly quantified, multi-year EBITDA
trail — an estimated USD14mn+ (FY2024) → USD30mn+ (FY2025) contribution, roughly doubling — plus a
disclosed shift from cuisine-level to item-level recommendations and a 235TB/day data-processing
infrastructure. It is not a named discrete budget line within either the Everyday App or
Food-leadership bucket — it is embedded across both (N-06) — which makes it exactly the kind of
cross-cutting "Enabling capability" candidate this OS's Investment Option schema exists to surface
separately from the two headline buckets, rather than let it stay implicit inside both.

## Evidence
- **Fact (Group):** AI/personalisation estimated EBITDA contribution USD14mn+ (FY2024) → USD30mn+
  (FY2025) (TLB-001 p.22-23; TLB-002 p.15-16); activates once a customer has placed ~6 orders.
- **Fact (Group):** 235TB/day data-processing infrastructure (TLB-002 p.15).
- **Fact (Group):** fraud-detection ~USD6mn/year saving (TLB-015 p.21), showing AI-driven efficiency
  gains are not limited to personalisation alone.
- **Forecast (Medium confidence base, Low upside/downside):** `Scenarios_v2.md` AI personalisation
  module, `ASM-023` (base, USD35-45mn illustrative FY2026 range); granularity/infrastructure-
  compounding upside; non-GCC/Egypt data-thinness downside (tied to N-25's disclosed 21%-and-rising
  non-GCC GMV share).

## Geography
**Group.** With an explicit **inferred-applicability** caveat for non-GCC/Egypt specifically: the
corpus does not disclose whether talabat's AI/ML models are tuned separately for non-GCC markets or
run on the same Delivery Hero-inherited regional models (`AI.md` Open Questions) — a genuine,
unresolved risk to this option's Group-average return, not a confirmed one.

## Value drivers
Capability (N-06) → adoption/operational change (N-09) → cross-cutting support for order frequency,
targeted incentives (Scenarios targeted-incentives module), advertising (OPT-004), and G&R demand
forecasting (OPT-001) — the most cross-cutting of the five options in this register.

## Required capabilities
Continued data-science/ML engineering capacity; data-infrastructure scaling beyond the current
235TB/day; per-market model-tuning capability (currently unconfirmed whether this exists anywhere in
the corpus) to address the non-GCC-effectiveness risk directly.

## Cost
Cross-cutting; embedded primarily within Everyday App opex (and, to a lesser extent, Food-leadership,
since personalisation is credited with timing pro/Rewards offers per N-06). Range is this OS's own
proposed judgment (`ASM-033`). **Explicitly flagged as potentially overlapping with, not additive
to, spend already counted under OPT-001/OPT-002/OPT-004** — N-06 states directly that AI is "not
named as a discrete dollar line within either bucket... an embedded capability, not a separate
budget line." Presenting this range as a clean addition on top of the other four would risk
overstating the total programme envelope beyond the disclosed USD175mn.

## Time to impact
Already yielding disclosed results; incremental scaling continues a moderating-rate improvement over
a 1-2 year horizon.

## Complexity
**Medium** — a mature capability being scaled, not built from zero, but genuine data-science and
engineering capacity constraints apply, and per-market model tuning (if pursued) would be new work.

## Dependencies
Underpins OPT-001 (demand forecasting for dark-store replenishment), OPT-004 (ad-targeting
infrastructure), and the Scenarios targeted-incentives module (AI-timed offers).

## Risks
Whether models are tuned separately for non-GCC markets is an unresolved open question in the corpus
— if personalisation effectiveness is structurally weaker in newer, thinner-data markets, continued
investment could show diminishing Group-average returns as non-GCC GMV share grows (N-25: 21% of
Group GMV and rising). Measurement is the weakest of all five options: because AI is explicitly not
a discrete budget line, investment-to-return attribution is the most confounded of the five.

## Confidence
**Medium** for the base-case EBITDA-contribution trend continuation (two consecutive annual data
points, consistent direction); **Low** for both the upside (unproven acceleration) and the downside
(a plausible but unmeasured non-GCC effectiveness gap).

## Recommended allocation range
**USD 10-15mn (base) / USD 15-22mn (upside) / USD 5-8mn (downside)**, cross-cutting, embedded
primarily within Everyday App opex. Basis: `ASM-033` — team judgment, unvalidated, pending `DEC-009`.
Non-additive caveat above applies.

## Pilot recommendation
Recommend a targeted pilot specifically testing per-market model tuning in one non-GCC market (Egypt,
the richest existing data point) against the current shared-model baseline, directly addressing this
option's own named data-readiness gap.

## Stage gates
AI/personalisation EBITDA contribution (currently Group-level baseline-exists) continuing its
moderating-growth trend; a non-GCC-specific effectiveness metric (currently non-existent anywhere in
the corpus) established before any further non-GCC-targeted scaling is funded.

## KPIs
P6, O9, and (as a directional proxy only, not a clean attribution) F9/F10
(`vault/Forecasts/KPI_Tree_v2.md`).

## Status
`candidate` — proposed 2026-07-23 by `decision-steward`.

## Review date
Alongside next annual AI/personalisation EBITDA-contribution disclosure (approx. Q1 2027, FY2026
results).

## Links
- [[Investment_Relationship_Map]] · [[Value_Driver_Tree_v2]] · [[Scenarios_v2]] · [[KPI_Tree_v2]]
- `vault/Knowledge/Topics/AI.md` · `vault/Knowledge/Topics/Personalization.md`
- [[Decision_Management_Layer|Decision Management Layer]]
