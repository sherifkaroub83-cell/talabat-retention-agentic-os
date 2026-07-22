---
section: 13
title: Monitoring and Evaluation
status: drafted — pending citation verification and QA (pipeline stage 9/11)
pipeline_run: 2026-07-22
---

# 13. Monitoring and Evaluation

> **Pipeline provenance note:** drafted directly by the top-level session acting as `bp-orchestrator`'s
> Stage 8 role, Phase 8 of the roadmap. Unblocked by [[DEC-007_section13-review-cadence-kill-criteria]],
> which resolved how this section answers the template's "review cadence and kill criteria" instruction
> without fabricating numeric targets against a corpus where 12 of `KPI_Tree.md`'s 16 KPIs have zero Egypt
> baseline. This is a working draft in `vault/Projects/`, not yet promoted to `Outputs/`.

## Answer, stated first

Every KPI in this section is a leaf of [[Value_Driver_Tree|the Value Driver Tree]] — none is invented for
topical completeness, per `KPI_Tree.md`'s own build discipline. Per `DEC-007`, review cadence and kill
criteria operationalize the go/no-go checkpoints [[Section_10_Risk_Analysis|Section 10]] §10.3/§10.4 and
[[Section_12_Implementation_Plan|Section 12]]'s H1/H2 sections already built, rather than fabricating
numeric thresholds this plan's evidence base cannot support. No metric here is "vanity" in the template's
own sense — each traces to a named driver-tree node, and where no Egypt baseline exists, this section
states that plainly rather than inventing one.

---

## 13.1 KPIs Mapped to the Value Driver Tree

`KPI_Tree.md` registers 16 KPIs, each traced to a specific [[Value_Driver_Tree]] node:

| # | KPI | Driver-tree node | Leading/Lagging | Baseline |
|---|---|---|---|---|
| R1 | Egypt segment revenue (USD) | Root Fact | Lagging | Exists (TLB-002 p.111; TLB-010 p.20) |
| R2 | Egypt gross margin % | Root Fact | Lagging | Exists |
| R3 | Egypt profit before tax | Root Fact | Lagging | Exists |
| R4 | Delivery cost as % of Egypt revenue | Root Fact | Lagging | Exists (~22%) |
| K5 | Active customers in Egypt + growth rate | ASM-007 | Leading | None |
| K6 | Orders per active customer per month (Egypt) | ASM-008 | Leading | None |
| K7 | talabat pro adoption rate (Egypt) | ASM-008 | Leading | None |
| K8 | 12-month customer retention rate (Egypt) | ASM-008 | Lagging | None |
| K9 | Churn rate to competition (Egypt) | ASM-008 | Lagging | None |
| K10 | Average order value (Egypt) | ASM-009 | Lagging | None |
| K11 | Egypt GMV (USD) | ASM-010 | Lagging | None |
| K12 | Egypt take rate (revenue ÷ GMV) | ASM-010 | Lagging | None |
| K13 | Egypt advertising revenue, % of segment revenue | ASM-011 | Leading | None |
| K14 | Active/paying advertisers (Egypt) | ASM-011 | Leading | None |
| K15 | Actual Egypt AI-roadmap investment spend | ASM-012 | Lagging | None |
| K16 | Incremental Egypt revenue from DEC-003 intervention | ASM-008+ASM-011+Root | Leading | None |

This section reproduces `KPI_Tree.md`'s registered set rather than re-deriving a parallel list — a second,
independently-invented KPI set here would violate the same cross-section-consistency discipline
independent QA has already enforced elsewhere in this plan (`QA_Review_Section_10_Comparison.md`,
`QA_Review_Section_12.md`).

**On the template's own named examples (CAC, MRR, churn rate, product usage):**

- **Churn rate** maps directly to **K9**. As `KPI_Tree.md` itself states, no churn figure — Egypt or
  Group — exists anywhere in the corpus (`Topics/Customer Churn.md`); K9 starts measurement from zero.
- **Product usage metrics** map to **K6** (orders per active customer per month) and **K7** (talabat pro
  adoption rate) — the two closest disclosed-mechanism analogs to "usage" for a marketplace/delivery
  platform, rather than a SaaS-style engagement metric the corpus has no equivalent for.
- **Customer Acquisition Cost (CAC)** is disclosed only at Group level, not Egypt-specific and not part of
  the registered KPI Tree: USD 44mn (2024) — TLB-001, page 28 — folded into total CARC (Customer
  Acquisition and Retention Costs) of USD 103mn / 1.4% of GMV (`Facts/Customer_Growth.md`). This plan does
  not add a new Egypt-CAC KPI outside `KPI_Tree.md`'s registered set — [[Section_07_Marketing_and_Sales_
  Strategy|Section 7]]'s positioning already deprioritizes acquisition spend as this plan's primary lever,
  so an Egypt-specific CAC target would measure a lever this plan is not centrally optimizing.
- **Monthly Recurring Revenue (MRR)** does not map cleanly onto talabat's disclosed revenue architecture.
  talabat's revenue is the four-line Commission/Delivery/Subscription/Advertising structure
  ([[Section_06_Business_Model_and_Revenue_Streams|Section 6]]), not a subscription-first business — only
  one of four lines (Subscription fees, narrowly) is a true recurring fee. This section does not force an
  MRR metric onto a business model it doesn't fit; the closest genuine analog is **K13** (Egypt
  advertising revenue as % of segment revenue) for the fastest-growing, most under-penetrated line, and
  the Subscription-fees component of R1 for the recurring-revenue-adjacent figure.

## 13.2 Leading vs. Lagging Indicator Split

Per `KPI_Tree.md`'s own tally: **6 Leading** (K5, K6, K7, K13, K14, K16) and **10 Lagging** (R1–R4, K8, K9,
K10, K11, K12, K15). Leading indicators are early-signal metrics this plan can act on before a financial
outcome is confirmed (customer growth, order frequency, pro adoption, advertiser count); lagging
indicators confirm a realized outcome after the fact (revenue, margin, retention, churn, take rate). Of
the four KPIs with an existing Egypt baseline (R1–R4), all four are lagging — a structural fact about what
talabat currently discloses (financial outcomes), not a gap in this plan's design: no leading indicator
has ever been disclosed for Egypt at any point in the corpus.

## 13.3 Tools and Methods for Performance Tracking

The corpus discloses no specific analytics or BI tooling used to track KPIs at Group or Egypt level — this
section states that gap plainly rather than inventing a tooling stack the corpus does not support,
consistent with [[Section_08_Operations_Plan|Section 8]]'s parallel finding that no development/monitoring
workflow is disclosed either. Two tracking regimes exist in practice, by necessity, given the baseline
split above:

- **R1–R4 (baseline exists):** already tracked via talabat's own disclosed segment-reporting cadence
  ([[Section_09_Financial_Plan|Section 9]]; `Facts/Revenue.md`) — this plan adds no new tracking mechanism
  for these four, only a review cadence (§13.4).
- **The 12 newly-instrumented KPIs:** tracking infrastructure for these does not yet exist and must be
  built. This is not a Section 13 deliverable in isolation — it is the same [[Section_12_Implementation_
  Plan|Section 12]] H1 pilot instrumentation work ("Pilot scope defined... and segment-fairness monitoring
  instrumented, before any customer sees a changed experience") already committed to. Section 13 does not
  duplicate that milestone; it names H1 as the point at which these 12 KPIs first become measurable.

## 13.4 Review Cadence and Kill/Pivot Criteria (per `DEC-007`)

- **Root KPIs (R1–R4):** quarterly review, matching talabat's own disclosed segment-reporting cadence,
  tracked against [[Section_09_Financial_Plan|Section 9]]'s base-case trajectory (the headline baseline
  per `DEC-005`) as this plan's primary financial monitoring signal.
- **Kill-criteria-bearing KPIs (K5, K6, K7, K8, K9, K13, K14):** the same seven KPIs [[Section_10_Risk_
  Analysis|Section 10]] §10.3/§10.4 already named the single highest-priority mitigation, and
  [[Section_12_Implementation_Plan|Section 12]] already adopted as the H1 go/no-go gate and the H2→H3
  gate. Section 13 does not build a third, competing structure — it states plainly that these are the
  same checkpoints:
  - **H1 checkpoint (0–6 months):** an explicit read against the GCC-benchmark aggregate/segment-fairness
    comparison (Section 10 §10.4; [[Section_11_CSR_and_Responsible_AI|Section 11]] §11.1) and a
    directional read on whether these seven KPIs move consistently with the DEC-003 investment thesis.
  - **H2→H3 checkpoint:** requires at least one full reporting cycle of Egypt-specific evidence on these
    same seven KPIs at H2 (full-cohort) scale before H3 begins.
  - **Kill criterion, stated qualitatively, not numerically, per `DEC-007`:** sustained evidence that
    these seven KPIs track toward or below Section 9's base-case trajectory, rather than toward the
    upside case DEC-003's investment is projected to deliver, is what should trigger a stop/reassess
    decision — a trajectory-relative test (base case vs. upside case), not a percentage or absolute-number
    threshold, because no absolute threshold can be derived from a corpus with zero Egypt baseline for any
    of these seven KPIs.
- **Monitoring-only KPIs (K10, K11, K12, K15, K16):** tracked and reported once instrumented, but carry no
  kill-criteria role — neither Section 10 nor Section 12 named them as gate KPIs, and this section does
  not invent a new gate they never established.
- **No numeric target or threshold is set anywhere in this section** for any of the 12 newly-instrumented
  KPIs, per `DEC-007`'s explicit ruling. Setting one becomes possible only once H1 produces genuine Egypt
  baseline data — flagged here, and carried forward to [[Section_14_Appendices|Section 14]], as an
  explicit open item for a future Decision Log entry, not a silently dropped gap.

## Feedback Loops for Continuous Improvement

Two feedback mechanisms already exist elsewhere in this plan; this section names them as the answer to
the template's "feedback loops" prompt rather than inventing a third:

- **Segment-fairness review gate:** [[Section_11_CSR_and_Responsible_AI|Section 11]] §11.3's proposed
  standing review, scheduled at each horizon transition (per [[Section_12_Implementation_Plan|Section
  12]]'s H2 milestone), is the mechanism through which K7/K8/K9's segment-level readings feed back into
  whether the AI mechanisms continue unchanged, are adjusted, or are paused for a specific customer
  segment — not only a compliance check, but the plan's operational continuous-improvement loop for
  fairness-sensitive metrics specifically.
- **R&D roadmap feedback:** [[Section_05_AI_Technology_and_Development|Section 5]] §5.6's three
  R&D-roadmap items (mapped 1:1 to [[Section_04_Value_Proposition|Section 4]]'s value mechanisms) are the
  mechanism through which leading-indicator KPI movement (K6, K7, K13, K14) should inform which mechanism
  gets prioritized next — this section does not restate Section 5 §5.6, only names it as where that
  feedback lands.

---

## Traceability summary (for Appendix/Section 14 use)

| Claim class | Resolved via | Status |
|---|---|---|
| 16 registered KPIs and driver-tree mapping | `KPI_Tree.md`, `Value_Driver_Tree.md` | Direct citation, reproduced not re-derived |
| CAC/MRR template-example mapping | `Facts/Customer_Growth.md` (TLB-001 p.28), `Section_06_Business_Model_and_Revenue_Streams.md`, `Section_07_Marketing_and_Sales_Strategy.md` | Direct citation + explicit non-fit statement for MRR |
| Leading/lagging split | `KPI_Tree.md` Summary table | Direct citation, reproduced not re-derived |
| Tooling gap | `Section_08_Operations_Plan.md` (development/monitoring workflow gap) | Cross-referenced, explicit gap statement |
| Review cadence and kill criteria | `DEC-007_section13-review-cadence-kill-criteria`, `Section_10_Risk_Analysis.md` §10.3/§10.4, `Section_12_Implementation_Plan.md` H1/H2, `DEC-005_section9-headline-scenario` | Cross-referenced, operationalized not re-derived |
| Feedback loops | `Section_11_CSR_and_Responsible_AI.md` §11.3, `Section_05_AI_Technology_and_Development.md` §5.6 | Cross-referenced, not re-derived |

## Links
- [[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]]
- [[Section_04_Value_Proposition]] · [[Section_05_AI_Technology_and_Development]] · [[Section_06_Business_Model_and_Revenue_Streams]] · [[Section_07_Marketing_and_Sales_Strategy]] · [[Section_08_Operations_Plan]] · [[Section_09_Financial_Plan]] · [[Section_10_Risk_Analysis]] · [[Section_11_CSR_and_Responsible_AI]] · [[Section_12_Implementation_Plan]]
- [[DEC-007_section13-review-cadence-kill-criteria]] · [[DEC-005_section9-headline-scenario]]
- [[KPI_Tree]] · [[Value_Driver_Tree]]
- [[Business_Plan_Generation_Pipeline]]
