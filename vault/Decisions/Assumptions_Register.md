---
type: register
status: active
created: "2026-07-21"
---

# Assumptions Register

Single source of truth for every assumption used anywhere downstream of the raw corpus (a forecast
growth rate, an adopted market-size figure, a funnel-conversion estimate, a resolved-conflict
figure). Schema defined in
[`vault/Architecture/Decision_Management_Layer.md`](../Architecture/Decision_Management_Layer.md).

**Rule:** no number may appear in the Business Plan (`Outputs/`) unless it either (a) is a direct
quote of a Fact/Source note citation, or (b) has a row here with an Assumption ID the plan cites.

**Current status:** empty. This register is populated as the Business Plan Generation Pipeline runs
(External Research, Forecasting, and Decision stages) — not during architecture design. See
`vault/Architecture/Implementation_Roadmap.md` for when drafting begins.

| Assumption ID | Statement | Value | Tier | Source | Confidence | Status | Used in (BP sections) | Last updated |
|---|---|---|---|---|---|---|---|---|
| *(none yet)* | | | | | | | | |
