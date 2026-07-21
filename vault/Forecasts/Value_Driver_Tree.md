---
type: forecast
status: scaffold
created: "2026-07-21"
---

# Value Driver Tree — talabat Egypt

**Not yet built.** See [`vault/Architecture/Forecasting_Layer.md`](../Architecture/Forecasting_Layer.md)
for the intended structure (anchored on FY2025 Egypt segment financials: revenue USD 509.9m, gross
profit USD 125.0m, net profit USD 44.4m — `Facts/Revenue.md`, `Topics/Segment Reporting.md`) and the
Fact-vs-Assumption tagging rule every node must carry.

This file becomes the live tree once the Forecasting Agent runs during Business Plan drafting
(Section 9/12/13 stages of `Business_Plan_Generation_Pipeline.md`). Building it now, before the
Decision layer exists to own the underlying growth assumptions, would mean forecasting without
anywhere to register the judgment calls behind it — the sequencing dependency this design phase
exists to avoid.
