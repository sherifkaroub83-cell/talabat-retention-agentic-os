---
type: forecast
status: superseded
superseded_date: "2026-07-23"
superseded_reason: "Built entirely for the Egypt-retention problem (DEC-003-dependent) — pivot to Group-wide capital allocation requires a structurally different tree. See Problem_Charter.md and vault/Architecture/Repository_Impact_Assessment.md"
created: "2026-07-21"
updated: "2026-07-22"
built_by: kpi-agent (Pilot 3, vault/Architecture/Pilot_Validation_Plan.md)
---

# KPI Tree — talabat Egypt

First live build of this file. Derived strictly from [[Value_Driver_Tree]]'s seven registered nodes
(the Root Fact node + `ASM-007` through `ASM-012`), cross-checked against the ranked mechanisms in
`Strategic/Customer Retention Drivers.md` and constrained to DEC-003's confirmed intervention
(extending talabat's Group AI roadmap — new recommendation form factors, cross-sell timing/incentive
optimisation, deepened adtech-embedded personalisation — into Egypt). Every KPI below traces to a
named driver-tree node; none is invented for topical completeness. Feeds Section 13 (Monitoring and
Evaluation) and must stay consistent with the same nodes used in Section 4 (value mechanisms) and
Section 9 (financial plan), per the drafting skill's value-driver-logic rule.

**Tagging convention:**
- **Leading** — predicts a future retention/revenue outcome (an input or early-signal metric).
- **Lagging** — confirms a realized outcome after the fact.
- **Baseline-exists** — talabat already discloses/tracks this for Egypt; a Fact citation is given.
- **Newly-instrumented** — no Egypt baseline anywhere in the corpus; this becomes a metric the
  proposed AI solution must *start* measuring, not one it improves against a known number.

**No numeric target is assigned to any newly-instrumented KPI in this file.** Per this agent's own
rule, a target on a metric with no baseline is a management judgment call, not a derivable fact —
every such case below is flagged as an open item for a future Decision Log entry rather than resolved
here. This mirrors how `forecasting-agent` declined to pick Section 9's headline scenario itself
(resolved instead via `DEC-005`).

---

## Root node — Egypt Segment Revenue FY2025 (+ companions)

Traces to: **Root Fact node**, `Value_Driver_Tree.md`.

| ID | KPI | Leading/Lagging | Baseline tag | Basis |
|---|---|---|---|---|
| R1 | Egypt segment revenue (USD, quarterly and annual) | Lagging | Baseline-exists | `[FACT → Facts/Revenue.md]`, TLB-002 p.111 (FY2025 USD509.9m); TLB-010 p.20 (Q1 2026 USD145.3m, +81% YoY) |
| R2 | Egypt gross margin % (gross profit ÷ revenue) | Lagging | Baseline-exists | Derived ratio from two disclosed Fact components: gross profit USD125.0m, revenue USD509.9m — `[FACT → Facts/Revenue.md]`, TLB-002 p.111 |
| R3 | Egypt profit before tax (PBT) | Lagging | Baseline-exists | `[FACT → Facts/Revenue.md]`, TLB-002 p.111 (FY2025 USD39.7m); `[FACT → Topics/Profitability.md]`, TLB-010 (Q1 2026 USD9.4m vs. Q1 2025 USD0.5m restated) |
| R4 | Delivery cost as % of Egypt revenue (~22%) | Lagging | Baseline-exists | `[FACT → Strategic/Cost Structure.md]`, sourcing TLB-002 p.111 (delivery cost USD113.13m) |

**Note on directional context, not a target:** talabat's own disclosed FY2026 Group guidance
(14-17% cFX revenue growth, TLB-019 p.18, TLB-020 p.14) is the base case's growth-logic anchor in
`Scenarios.md`. That guidance figure is a company disclosure, not a target this KPI tree is setting —
it is cited here only as the context Section 13 should report R1 against, consistent with the base
case being Section 9's headline baseline per `DEC-005`.

All four root KPIs are the only KPIs in this tree with an existing Egypt-specific numeric baseline —
every other node below has none.

---

## 1a. Active Customer growth (Egypt)

Traces to: **ASM-007** (Approved), `Value_Driver_Tree.md` §1a.

| ID | KPI | Leading/Lagging | Baseline tag | Basis |
|---|---|---|---|---|
| K5 | Active customers in Egypt (count) and period-over-period growth rate | Leading | Newly-instrumented | No Egypt customer-count figure exists anywhere in the corpus at any date — `Facts/Monthly_Active_Customers.md` and `Facts/Orders_Facts.md` both confirmed to lack an Egypt breakout (per ASM-007's own logic) |

**Open item:** ASM-007 itself carries no numeric projection — it names this as a data gap, not a
trend. Consistent with that, K5 carries no growth-rate target. Establishing the count itself is the
first instrumentation step; any target (e.g., "X% QoQ active-customer growth") requires a future
Decision Log entry.

---

## 1b. Order Frequency uplift (Egypt) — the DEC-003 intervention channel

Traces to: **ASM-008** (Approved), `Value_Driver_Tree.md` §1b; DEC-003 (Approved, ASM-005).

| ID | KPI | Leading/Lagging | Baseline tag | Basis |
|---|---|---|---|---|
| K6 | Orders per active customer per month (Egypt) | Leading | Newly-instrumented | No Egypt order-count/active-customer baseline exists; the closest evidence is Group-level multi-vertical 3.8x (food-only) vs. 13.0x (multi-vertical) orders/month, `Strategic/Customer Retention Drivers.md`, TLB-012 p.7 — explicitly not Egypt-broken-out |
| K7 | talabat pro adoption rate (Egypt, % of active customers) | Leading | Newly-instrumented | Egypt-specific pro adoption is undisclosed; only a Group figure exists (~50% of platform GMV from pro subscribers by Q1 2026, TLB-020 p.8) — `Strategic/Customer Retention Drivers.md`'s Egypt-Specific Considerations state pro's headline adoption figures exclude Egypt (launched Feb 2025) |
| K8 | 12-month customer retention rate (Egypt, pro subscribers vs. lookalike non-subscribers) | Lagging | Newly-instrumented | No Egypt retention-rate figure disclosed; Group analog is 26-32% (TLB-019 p.11; TLB-015 p.78/p.104), explicitly measured on six GCC/Jordan markets live before Dec 2024, **excluding Egypt and Iraq by name** — `Strategic/Customer Retention Drivers.md` |
| K9 | Churn rate to competition (Egypt) | Lagging | Newly-instrumented | **No churn rate is disclosed anywhere in the corpus, for Egypt or Group** — `Topics/Customer Churn.md` confirms every churn reference is qualitative/inferred, and there is no equivalent `Facts/Churn.md`. This is the KPI DEC-003's own causal claim ("strengthen customer retention against competitive churn") is ultimately judged against, so it must be tracked — but it starts from zero, not from a known number the AI solution is expected to improve |

**Escalation flag — do not resolve here:** K9 (churn rate) is the clearest instance of this file's
own rule. No numeric churn-reduction target is set for K9. Setting one (e.g., "reduce churn to
competition by X percentage points") is a management judgment call requiring a dedicated Decision Log
entry, not a figure this agent can derive from the corpus — flagged for `decision-steward`/user
attention ahead of Section 13 drafting, exactly as `DEC-005` resolved the headline-scenario choice
rather than leaving it implicit. K7 and K8 (pro adoption, retention rate) carry the same no-target
treatment for the same reason — both import Group-level figures explicitly flagged as excluding
Egypt at time of measurement.

---

## 2. AOV / Pricing (Egypt)

Traces to: **ASM-009** (Approved), `Value_Driver_Tree.md` §Branch 2.

| ID | KPI | Leading/Lagging | Baseline tag | Basis |
|---|---|---|---|---|
| K10 | Average order value (Egypt) — local-currency (EGP) and USD-reported | Lagging | Newly-instrumented | Zero disclosed Egypt AOV figure at any point in the corpus — the only adjacent anchor is directional FX/inflation-hedge language for GMV, not a measured AOV number (`Strategic/Strategic Risks.md`, TLB-020 p.14) |

No target set: ASM-009 itself is directional-mechanism-only (inflation drift vs. FX offset), not a
measured trend — K10 inherits that same no-numeric-target treatment.

---

## 3a. Take rate / implied-GMV proxy (Egypt)

Traces to: **ASM-010** (Approved), `Value_Driver_Tree.md` §3a.

| ID | KPI | Leading/Lagging | Baseline tag | Basis |
|---|---|---|---|---|
| K11 | Egypt GMV (USD) | Lagging | Newly-instrumented | No Egypt GMV figure is disclosed anywhere in the corpus (`Topics/Segment Reporting.md`, `Facts/GMV_Facts.md` both confirm the gap); the ≈USD1.24bn figure in the driver tree is an illustrative Group-ratio proxy for Section 9 sizing only, not a measured Egypt number |
| K12 | Egypt take rate (revenue ÷ GMV) | Lagging | Newly-instrumented | Cannot be computed as a true ratio until K11 (Egypt GMV) is actually measured; the current 41%-of-GMV figure used in ASM-010 is a Group ratio imported for illustration, not an Egypt-measured take rate |

---

## 3b. Advertising penetration (Egypt) — the DEC-003 adtech channel

Traces to: **ASM-011** (Approved), `Value_Driver_Tree.md` §3b; DEC-003 (Approved, ASM-005).

| ID | KPI | Leading/Lagging | Baseline tag | Basis |
|---|---|---|---|---|
| K13 | Egypt advertising & listing-fees revenue, as % of Egypt segment revenue | Leading | Newly-instrumented | No Egypt-specific advertising revenue is disclosed anywhere. A Group-level baseline exists as reference context only — Advertising & listing fees revenue grew USD246m (FY2024) → USD323m (FY2025), +32% y/y, `[FACT → Facts/Revenue.md]`, TLB-002 p.20, TLB-009 p.4 — but that Group figure is not an Egypt baseline and must not be presented as one |
| K14 | Active/paying advertisers on the Egypt platform (count) | Leading | Newly-instrumented | No figure of any kind (Egypt or Group) is disclosed for this metric in the corpus |

No target set: ASM-011 is explicitly directional only ("toward, not necessarily to" the Group
trajectory) — no percentage target is asserted in the driver tree, and none is asserted here.

---

## 4a. Egypt bottom-up investment estimate

Traces to: **ASM-012** (Approved), `Value_Driver_Tree.md` §4a; DEC-004 (Approved, ASM-006).

| ID | KPI | Leading/Lagging | Baseline tag | Basis |
|---|---|---|---|---|
| K15 | Actual Egypt AI-roadmap-extension investment spend (USD), tracked against the ≈USD13.2m illustrative pro-rata proxy | Lagging | Newly-instrumented | DEC-004 confirms no Egypt-specific dollar allocation exists within any disclosed Group investment figure; the ≈USD13.2m figure is this project's own derived proxy (11.0% revenue-share × USD120m Everyday App component), not a tracked or approved budget line |

---

## Cross-node — Section 9 investment-return framing (per DEC-005)

Traces to: **ASM-008 + ASM-011 + Root Fact node** (composite; not an orphan metric — every component
node is named above).

| ID | KPI | Leading/Lagging | Baseline tag | Basis |
|---|---|---|---|---|
| K16 | Incremental Egypt revenue attributable to the DEC-003 AI-roadmap-extension intervention (upside-case revenue delta vs. base-case revenue) | Leading | Newly-instrumented | Per `DEC-005`, Section 9 presents the base case as the headline baseline and the upside case as the projected return/delta attributable to the DEC-003 investment, not a competing central estimate. This delta is not a disclosed figure — it becomes measurable only once actual post-intervention Egypt revenue (R1) is tracked against the base-case trajectory over FY2026 |

---

## Summary table

| # | KPI | Node | Leading/Lagging | Baseline tag |
|---|---|---|---|---|
| R1 | Egypt segment revenue (USD) | Root | Lagging | Baseline-exists |
| R2 | Egypt gross margin % | Root | Lagging | Baseline-exists |
| R3 | Egypt profit before tax | Root | Lagging | Baseline-exists |
| R4 | Delivery cost as % of Egypt revenue | Root | Lagging | Baseline-exists |
| K5 | Active customers in Egypt + growth rate | ASM-007 | Leading | Newly-instrumented |
| K6 | Orders per active customer per month (Egypt) | ASM-008 | Leading | Newly-instrumented |
| K7 | talabat pro adoption rate (Egypt) | ASM-008 | Leading | Newly-instrumented |
| K8 | 12-month customer retention rate (Egypt) | ASM-008 | Lagging | Newly-instrumented |
| K9 | Churn rate to competition (Egypt) | ASM-008 | Lagging | Newly-instrumented |
| K10 | Average order value (Egypt) | ASM-009 | Lagging | Newly-instrumented |
| K11 | Egypt GMV (USD) | ASM-010 | Lagging | Newly-instrumented |
| K12 | Egypt take rate (revenue ÷ GMV) | ASM-010 | Lagging | Newly-instrumented |
| K13 | Egypt advertising revenue as % of segment revenue | ASM-011 | Leading | Newly-instrumented |
| K14 | Active/paying advertisers (Egypt) | ASM-011 | Leading | Newly-instrumented |
| K15 | Actual Egypt AI-roadmap investment spend | ASM-012 | Lagging | Newly-instrumented |
| K16 | Incremental Egypt revenue from DEC-003 intervention (upside delta) | ASM-008 + ASM-011 + Root | Leading | Newly-instrumented |

**Totals: 16 KPIs.** Leading: 6 (K5, K6, K7, K13, K14, K16). Lagging: 10 (R1-R4, K8, K9, K10, K11,
K12, K15). Baseline-exists: 4 (R1-R4, all root-node companions to the one disclosed Egypt financial
anchor). Newly-instrumented: 12 (every node below the root — a direct, expected consequence of how
thin Egypt-specific disclosure is outside the segment P&L headline, exactly as `Value_Driver_Tree.md`
itself already found for every downstream node).

---

## Escalation summary — flagged for decision-steward / user, not resolved here

No numeric target is assigned to any of the 12 newly-instrumented KPIs above. The clearest and
highest-stakes case is **K9, churn rate to competition (Egypt)**: this project has no baseline churn
figure for Egypt or Group anywhere in the corpus (`Topics/Customer Churn.md`), so any Section 13
statement of the form "reduce churn by X%" would be inventing both the baseline and the target. This
KPI tree instead states plainly: churn rate becomes a metric the proposed AI solution must **start**
measuring from zero, not one it improves against a known number. Setting an actual target — for K9 or
any of K5, K7, K8, K10, K13, K14, K15, K16 — requires a dedicated Decision Log entry (a management
judgment call, per this agent's own rule), not a number this agent will derive or infer. This mirrors
`forecasting-agent`'s treatment of the Section 9 headline-scenario choice, which correctly escalated
to `DEC-005` rather than picking a scenario unilaterally.

## Tooling note
This build used exactly the three tools listed in this agent's frontmatter (`Read`, `Write`, `Grep`).
`Read` was used for all five source files (`Value_Driver_Tree.md`, `Scenarios.md`, `Customer
Retention Drivers.md`, `DEC-003`, and `Customer Churn.md`) and for this file's prior scaffold content
before overwriting it; `Write` produced this file. `Grep` was available but not needed — all source
paths were already known from the task brief, so no exploratory search was required. No tool
availability surprises encountered in this invocation (unlike Pilot 2's `AskUserQuestion`
subagent-unavailability finding for `decision-steward`).

## Links
[[Forecasting_Layer]] · [[Value_Driver_Tree]] · [[Scenarios]] ·
[[Strategic/Customer Retention Drivers]] · [[Topics/Customer Churn]] ·
[[DEC-003_section2-governing-hypothesis]] · [[DEC-004_2026-investment-total]] ·
[[DEC-005_section9-headline-scenario]]
