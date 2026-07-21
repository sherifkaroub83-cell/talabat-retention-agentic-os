---
type: architecture
status: design-approved
created: "2026-07-21"
---

# Forecasting Layer

Task 7 of the Phase 6 architecture design. Separates **historical fact** (already disclosed, cited,
immutable — `vault/Knowledge/Facts/`) from **forecast assumption** (projected, method-stated,
scenario-tagged — this layer), so Section 9 (Financial Plan) and Section 13 (KPIs) never blur the
two.

## Why this has to be separate from Facts/

The existing Facts layer is deliberately conservative — every line traces to `(DocID, page N)`. A
forecast, by definition, does not trace to a document; it traces to an *anchor fact* plus a *stated
growth logic*. Mixing the two would silently launder a projection as a disclosed number — exactly
the failure mode `CLAUDE.md`'s synthetic-data rule is meant to prevent. Keeping Forecasts in its own
folder makes "is this real or projected?" answerable by which folder a claim lives in, not by
careful reading.

## Repository structure

```
vault/Forecasts/
├── README.md                  — this layer's index
├── Value_Driver_Tree.md        — the master tree; every node tagged Fact or Assumption
├── Scenarios.md                — base / upside / downside, keyed to driver-tree nodes
└── KPI_Tree.md                  — built by the KPI Agent from the driver tree (Section 13 feed)
```

### Value Driver Tree — structure

Anchored on talabat Egypt's actual disclosed FY2025 segment financials (revenue USD 509.9m, gross
profit USD 125.0m, net profit USD 44.4m — `Facts/Revenue.md`, `Topics/Segment Reporting.md`), because
this is the strongest real Egypt-specific anchor in the whole corpus. Every node below the anchor is
either:
- **Fact** — sourced directly, tagged `[FACT → Facts/<file>.md]`
- **Assumption** — projected, tagged `[ASSUMPTION → ASM-###]`, and only ever created via the
  `forecast-builder` skill (never hand-typed into the tree without a registered assumption behind it)

```
Egypt Revenue (FY2025 FACT: $509.9m)
├── Orders (FACT-anchored: Facts/Orders_Facts.md)
│   ├── Active Customers [ASSUMPTION: growth rate]
│   └── Order Frequency [ASSUMPTION: retention-intervention uplift]
├── AOV [ASSUMPTION: pricing/inflation pass-through]
└── Take Rate / Commission [FACT-anchored: Facts/Revenue.md, marketplace vs q-commerce mix]
        └── Advertising penetration [ASSUMPTION: AdTech uplift, Group-level evidence only — see
            Strategic/Customer Retention Drivers.md caution on Group-vs-Egypt data]
```

Each leaf assumption gets its own `ASM-###` row in `vault/Decisions/Assumptions_Register.md` — the
tree itself only references IDs, it doesn't duplicate the number.

### Scenarios — structure

For each forecast horizon relevant to Section 9/12/13 (e.g. FY2026, FY2027):

| Scenario | Growth logic | Key assumption IDs | Confidence |
|---|---|---|---|
| Base | Continuation of FY2025→Q1 2026 disclosed trend (~81% YoY Egypt segment growth moderating) | ASM-### | Medium (extrapolation of 2 disclosed data points) |
| Upside | Retention intervention (the plan's own recommendation) delivers on its stated hypothesis | ASM-### | Low (depends on unproven intervention) |
| Downside | FX/inflation pressure (already a named risk in `Strategic/Strategic Risks.md`) compresses margin further, as already observed Q1 2026 (4.8% vs 6.3% Adj. EBITDA margin) | ASM-### | Medium (extrapolates an already-observed trend) |

**Rule:** every scenario must be traceable to a stated logic sentence, not just three numbers with
labels. This is what makes it a forecast rather than a guess.

## Interactions

- Written to by: Forecasting Agent (`forecasting-agent`), using the `forecast-builder` skill.
- Assumption rows registered via: Decision Steward Agent (a growth-rate choice is itself a
  management decision when it materially affects the recommendation — e.g. choosing the upside
  scenario as the plan's headline case would get its own Decision Log entry).
- Consumed by: KPI & Metrics Agent (builds `KPI_Tree.md` from this), Orchestrator (Section 9/12/13
  drafting stages).
- Verified by: Evidence & Citation Agent — checks every Fact-tagged node still resolves to a real
  Facts citation, and every Assumption-tagged node resolves to a registered, Approved assumption.

**Current status:** layer scaffolded, empty (no driver tree built, no scenarios run). This happens
during Business Plan drafting (Phase 7+ per `Implementation_Roadmap.md`), not during this
architecture-design phase — building it now would mean forecasting before the Decision layer that's
supposed to own the underlying growth-rate judgment calls even exists.

## See also
[[Agentic_OS_Architecture]] · [[Project Administration]]
