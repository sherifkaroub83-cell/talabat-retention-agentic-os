---
name: forecast-builder
description: Procedure for turning a historical, disclosed Fact into a method-transparent forecast (base/upside/downside) and maintaining the Value Driver Tree. Trigger when the forecasting-agent needs a forward-looking number for Sections 9, 12, or 13, or the user says "forecast", "/forecast".
trigger: /forecast
---

# /forecast — Forecast Builder Skill

Used exclusively by `forecasting-agent`. Full design: `vault/Architecture/Forecasting_Layer.md`.

## Golden rule

Every number in `vault/Forecasts/` traces to exactly one historical anchor Fact plus one stated
growth-logic sentence. A percentage with no sentence behind it is not a forecast — it's a guess with
a decimal point.

## Procedure

1. **Anchor.** Identify the disclosed historical Fact this projection extends (cite the specific
   `Facts/<file>.md`). Prefer the most Egypt-specific, most recent disclosed figure available — as of
   this corpus, Egypt's FY2025 segment financials (`Facts/Revenue.md`) are the strongest anchor for
   Egypt-specific financial forecasting.
2. **State the logic.** Write one sentence: what mechanism drives the projected change (trend
   continuation, an already-observed pressure like FX/margin compression, or the plan's own proposed
   intervention taking effect). No forecast skips this step.
3. **Build three scenarios**, each with its own logic sentence and confidence level:
   - Base — most likely continuation of the disclosed trend.
   - Upside — the plan's recommended intervention succeeds as hypothesized.
   - Downside — a named risk (from `Strategic/Strategic Risks.md`) materializes further.
4. **Tag the driver tree.** Update `vault/Forecasts/Value_Driver_Tree.md`: Fact-tagged nodes cite
   `Facts/<file>.md`; Assumption-tagged nodes cite an `ASM-###` (created via handoff below).
5. **Hand off, don't self-register.** Propose each new assumption to `decision-steward` for
   Assumptions Register entry. If the scenario choice materially affects the plan's headline
   recommendation, flag it for a full Decision Log entry, not just a register row.

## Confidence calibration

- Extrapolating from ≥3 disclosed data points at consistent intervals → up to Medium-High.
- Extrapolating from exactly 2 disclosed data points (the current Egypt case: FY2025 + Q1 2026 only)
  → Medium at best — say so explicitly.
- Projecting an effect that depends on an unproven intervention (the plan's own recommendation
  working) → Low, always — this is the honest ceiling for any "upside" scenario tied to the plan's
  own thesis.

## Anti-patterns

- ❌ A driver-tree node with a number and no Fact/Assumption tag.
- ❌ Building only a "base case" — Section 9 explicitly requires three scenarios.
- ❌ Using a Group/GCC-level growth rate as the Egypt anchor without noting it's not Egypt-specific
  (same caution the drafting skill already applies to Section 4's retention-driver statistics).
- ❌ Registering your own assumption row instead of handing off to `decision-steward`.
