---
id: OPT-002
status: candidate
category: Everyday App
date: "2026-07-23"
updated: "2026-07-24"
owner: decision-steward
---

# OPT-002 — Accelerate talabat pro adoption specifically in Egypt and Iraq

## Rationale
talabat pro subscriber GMV share rose from ~32% to ~49% of platform GMV (Q1 2025→Q1 2026, Group), and
loyalty-programme scaling is one of the three named Everyday App recipients. But that trend, and the
strongest quantified uplift statistics behind it (order frequency +20-28%, retention +26-32%,
gross-profit-per-customer +136% 30 days post-subscription), are all measured on the six GCC/Jordan
markets live before December 2024 and **explicitly exclude Egypt (live Feb 2025) and Iraq (live Sept
2025)**. This option targets the two most recently launched, currently lowest-instrumented markets
specifically, on the logic (evidenced only by the UAE pilot's own early-adoption pattern) that
newly-launched cohorts typically show the steepest early growth — a real opportunity, but one this
OS can only support by labeled inference, not direct Egypt/Iraq evidence.

## Evidence
- **Fact (Group):** pro subscriber GMV share 32% → 49% (Q1 2025 → Q1 2026) (TLB-020 p.8).
- **Fact (Group):** full 8-market rollout complete 2025 (Egypt Feb 2025, Iraq Sept 2025) (N-08).
- **Fact (GCC + Jordan only, excludes Egypt/Iraq by name):** 20-28% order-frequency uplift; 26-32%
  retention uplift (TLB-001 p.18, TLB-015 p.78, TLB-019 p.11); 136% gross-profit-per-customer uplift,
  30 days post-subscription (TLB-015 p.78).
- **Fact (country-specific, UAE):** UAE pilot subscriber-penetration growth at a 129% CAGR (TLB-015).
- **Forecast (Low confidence, explicitly labeled inference):** `ASM-016` (Group/GCC+Jordan statistics
  applied to Egypt/non-GCC generally); `Scenarios_v2.md` talabat pro/loyalty module upside case.

## Geography
**Inferred-applicability** — target markets are Egypt and Iraq specifically (country-specific /
market-comparison); the source evidence supporting the expected mechanism is Group/GCC+Jordan. This
is precisely the Geographic Evidence Rules' named Failure Pattern #1 if the qualifier is ever
dropped — it is preserved here deliberately.

## Value drivers
Capability (N-04, pro loyalty scaling) → adoption (N-08) → order frequency (N-15 as evidence
proxy, GCC+Jordan) → retention/CLV (N-20, N-22 as evidence proxy) → GMV.

## Required capabilities
No new product build — talabat pro is already live in both markets. Requires marketing/incentive
spend, local-market offer calibration, and Partner-funded free-delivery economics support (pro's
benefit is Partner-funded per TLB-026 p.134) in two newer, less-established Partner relationships.

## Cost
Draws from Everyday App opex. Range is this OS's own proposed judgment (`ASM-030`); no disclosed
country-level pro-investment split exists anywhere in the corpus.

## Time to impact
Quarters — subscription-adoption ramps typically show early signal within 2-3 quarters, based on the
UAE pilot's own adoption curve (the only disclosed early-adoption reference point).

## Complexity
**Low-Medium** — this is a go-to-market/incentive-spend acceleration on an already-built, already-
live product, not new capability development.

## Dependencies
Shares Partner-funded free-delivery economics capacity with OPT-003 (Food-leadership commission-rate
investment) — both options draw on the same Partner economic relationship, a tension the Scenarios
downside case names explicitly.

## Risks
The entire evidence base for expected uplift magnitude is Low-confidence inference (`ASM-016`) — no
Egypt- or Iraq-specific pro adoption, frequency, or retention figure exists anywhere post-launch to
confirm the GCC+Jordan pattern will repeat. Partner-funded economics could tighten if Partners resist
further commission concessions amid the same competitive pressure Food-leadership is funded to
counter (a direct dependency risk with OPT-003).

## Confidence
**Low** — explicitly the Geographic Evidence Rules' named Failure Pattern #1; no post-launch Egypt/
Iraq data exists anywhere in the corpus to corroborate the extrapolation.

## Recommended allocation range
**USD 8-12mn (base) / USD 12-20mn (upside) / USD 3-6mn (downside)**, within Everyday App opex.
Basis: `ASM-030` — team judgment, unvalidated, pending `DEC-009`.

## Pilot recommendation
**Strong pilot candidate** — cheap, fast, and highly reversible relative to the other four options.
Recommend a bounded 2-quarter pilot in Egypt specifically (the larger of the two markets, richest
existing data point in the corpus) with a defined instrumentation plan for KPI C10 (currently
zero-baseline) before any Iraq scale-up decision.

## Stage gates
*(Original 2026-07-23 sketch — retained for the record, formalized and superseded by the verified
section below.)*
Egypt pro subscriber-GMV-share and order-frequency trend (C10) showing at least directional uplift,
even if smaller in magnitude than the GCC+Jordan benchmark, before scaling beyond the pilot budget or
extending to Iraq.

## Stage gates (verified 2026-07-24)
Verification pass per Pipeline Stage 12. The sketch above named the right KPI (C10) but lacked a
review point, an instrumentation precondition, and funding consequences. Review-cadence and
threshold discipline follows the carried-forward methodology of `DEC-007` (superseded pre-pivot
record; its method — quarterly review cadence, qualitative trajectory-relative criteria for
zero-baseline metrics, numeric thresholds only via a future Decision Log entry once a first real
baseline reading exists — remains this OS's standing monitoring discipline). Funding consequences
follow `DEC-009`'s approved sequence: OPT-002 is a **near-term priority specifically as a bounded
pilot** — its Low-evidence/High-reversibility profile means the gates below are cheap to fail and
must actually be allowed to fail.

1. **Gate 1 — Instrumentation precondition (measurement before money).** KPI: **C10**
   (Egypt/non-GCC talabat pro order-frequency and retention uplift — **newly-instrumented**,
   zero corpus baseline). Threshold: qualitative — C10 instrumentation is live and producing
   Egypt-specific readings within the pilot's first quarter; **threshold to be set at first
   baseline reading** via a dedicated Decision Log entry, never invented in advance. Review: first
   quarterly review after pilot launch. Consequence: not instrumented → **hold** all further pilot
   spend beyond the committed first tranche until instrumentation exists.
2. **Gate 2 — Directional uplift.** KPI: **C10**, with **C5** and **C6** (GCC+Jordan frequency and
   retention uplifts — baseline-exists, but for a *different geography*) used strictly as labeled
   comparators, never as Egypt targets (Geographic Evidence Rules Failure Pattern #1). Threshold:
   qualitative/directional — Egypt pro cohorts show at least directional frequency/retention uplift
   vs. non-subscriber comparison, even if smaller in magnitude than the GCC+Jordan benchmark; no
   numeric uplift target exists or is set here. Review: end of pilot quarter 2 (the record's own
   bounded 2-quarter pilot). Consequence: directional uplift present → **continue**; Egypt
   scale-up and/or Iraq extension become eligible via a new Decision Log entry. Flat or negative →
   **stop the pilot and reallocate** the remaining `ASM-030` budget within the Everyday App bucket
   per `DEC-009`'s sequence — high reversibility is precisely why this option was prioritized for
   piloting, and the consequence must be exercised, not waived.
3. **Gate 3 — Bucket containment.** KPI: **P2** (Everyday App bucket spend-to-plan —
   baseline-exists, Group). Threshold: pilot spend remains within the Everyday App bucket plan and
   within the `ASM-030` pilot range (itself an OS construction, labeled as such). Review: quarterly,
   alongside P2's normal tracking. Consequence: breach → **hold** further pilot disbursement pending
   a reallocation decision.

**Flagged KPI gaps: none.** C10 exists in KPI_Tree_v2 precisely to govern this option; no new KPI is
needed. (Iraq-specific instrumentation is a geographic extension of C10's stated scope, noted here
rather than added as a new tree node.)

## KPIs
C1, C5 (comparator only), C6 (comparator only), C10, P2 (`vault/Forecasts/KPI_Tree_v2.md`).

## Status
`candidate` — proposed 2026-07-23 by `decision-steward`.

## Review date
2 quarters after pilot launch.

## Links
- [[Investment_Relationship_Map]] · [[Value_Driver_Tree_v2]] · [[Scenarios_v2]] · [[KPI_Tree_v2]]
- `vault/Knowledge/Topics/Everyday App.md` · `vault/Knowledge/Topics/Multi-Verticality.md`
- [[Decision_Management_Layer|Decision Management Layer]]
- [[DEC-009_investment-options-ranking-and-allocation-priority]] · `DEC-007` (superseded; methodology carried forward)
