---
type: layer-index
status: active
created: "2026-07-21"
---

# Forecasts Layer

Implements the Forecasting Layer designed in
[[Forecasting_Layer]]. Read that document
for the Value Driver Tree structure, the Fact-vs-Assumption tagging rule, and the scenario schema.

- [[Value_Driver_Tree]] — the master tree.
- [[Scenarios]] — base/upside/downside projections keyed to the tree.
- [[KPI_Tree]] — built from the tree by the KPI & Metrics Agent, feeds Section 13.

**Current status:** layer scaffolded, empty. No forecasting has been performed yet — this happens
during Business Plan drafting (Phase 7+), not during this architecture-design phase.

**Owned by:** the Forecasting Agent (`.claude/agents/forecasting-agent.md`); KPI tree owned by the
KPI & Metrics Agent (`.claude/agents/kpi-agent.md`).

## See also
[[Agentic_OS_Architecture]] · [[Forecasting_Layer]]
