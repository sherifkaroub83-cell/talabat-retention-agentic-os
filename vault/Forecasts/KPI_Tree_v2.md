---
type: forecast
status: active
created: "2026-07-23"
updated: "2026-07-23"
built_by: kpi-agent
supersedes_note: "Companion to (not a replacement of) vault/Forecasts/KPI_Tree.md, which is marked
  status:superseded and left untouched as the historical Egypt-retention-problem record. This file is
  the fresh Group-wide capital-allocation KPI tree required by the 2026-07-23 pivot — see
  Problem_Charter.md."
---

# KPI Tree v2 — talabat Group 2026 Investment Programme

Derived from `vault/Forecasts/Value_Driver_Tree_v2.md` (45 nodes, N-01 through N-45) and
`vault/Forecasts/Scenarios_v2.md` (base/upside/downside + 8 scenario modules), cross-checked against
`vault/Decisions/Investment_Portfolio_Register.md` and, for the governance family specifically,
`vault/Knowledge/Topics/Capital Allocation and Investment Governance.md`. Every KPI below traces to a
named `Value_Driver_Tree_v2.md` node ID or an explicitly-stated governance evidence gap — none is
invented for topical completeness. Feeds Business Plan Section 4 (value mechanisms), Section 9
(financial plan), and Section 13 (KPIs), which must all resolve to the same underlying tree per the
drafting skill's value-driver-logic rule.

**Organized under five required families** (per task brief), not a flat driver-tree walk:
1. Portfolio KPIs — the USD175mn envelope itself (Stage 1-2 nodes, `Investment_Portfolio_Register.md`)
2. Customer & growth KPIs (Stage 3-8 nodes)
3. Financial KPIs (Stage 9-13 nodes)
4. Operational KPIs (capability/adoption stages, `Topics/Grocery and Retail.md`, `Topics/Logistics.md`)
5. Governance KPIs (`Topics/Capital Allocation and Investment Governance.md` — mostly newly-instrumented)

**Tagging convention** (unchanged from `KPI_Tree.md`):
- **Leading** — predicts a future retention/revenue/margin outcome (an input or early-signal metric).
- **Lagging** — confirms a realized outcome after the fact.
- **Baseline-exists** — talabat already discloses/tracks this at the stated geography; a Fact/node
  citation is given.
- **Newly-instrumented** — no corpus baseline at the stated geography; this becomes a metric the 2026
  investment programme (and any AI-enabled capability within it) must **start** measuring, not one it
  improves against a known number. Per `Topics/Customer Churn.md`'s inference-only status, **churn
  rate is the clearest and highest-stakes instance of this** — see C12 below.
- **Geography** — one tag per `vault/Architecture/Geographic_Evidence_Rules.md`: Group / GCC / non-GCC
  (pre- or post-FY2025) / Egypt (standalone) / country-specific / market-comparison / external /
  inferred-applicability. Most KPIs here are Group-level, matching the driver tree; Egypt-specific gaps
  are called out explicitly rather than silently assumed equivalent to Group figures.

**No numeric target is assigned to any newly-instrumented KPI in this file.** A target on a metric
with no baseline is a management judgment call requiring a `Decision Log` entry, not a figure this
agent derives or infers — see the Escalation Summary at the end.

---

## 1. Portfolio KPIs

Track the USD175mn envelope itself — spend-to-plan by bucket, capex vs. opex pacing. Grounded in
Value_Driver_Tree_v2.md Stage 1-2 (N-01 through N-06) and `Investment_Portfolio_Register.md`.

| ID | KPI | Node(s) | Lead/Lag | Baseline tag | Geography | Basis |
|---|---|---|---|---|---|---|
| P1 | Total programme spend-to-date vs. USD175mn Board-approved envelope | N-01 | Lagging | Baseline-exists (plan figure only) | Group | `Investment_Portfolio_Register.md` "Total envelope"; TLB-019 p.11, TLB-020 p.16. The USD175mn plan figure is disclosed; a running actual-spend-to-date figure is not itself reported anywhere in the corpus — the numerator, not the denominator, is what this OS must start tracking |
| P2 | Everyday App bucket spend-to-plan (~USD120mn = ~75mn opex + ~45mn capex) | N-02 | Lagging | Baseline-exists | Group | `Investment_Portfolio_Register.md`; TLB-020 p.12, p.16; TLB-014 p.16, p.19 |
| P3 | Food-leadership bucket spend-to-plan (~USD55mn, ~0.5pp of GMV) | N-03 | Lagging | Baseline-exists | Group | `Investment_Portfolio_Register.md`; TLB-020 p.16 |
| P4 | Everyday App capex-vs-opex pacing, tracked quarterly against the disclosed ~45mn:75mn annual split | N-02 | Leading | Newly-instrumented | Group | The 45mn/75mn split is a disclosed annual-plan ratio, not a quarterly actual-burn series — no source discloses quarter-by-quarter capex/opex pacing |
| P5 | Dark-store capex deployment phasing vs. plan (Everyday App) | N-04 | Leading | Baseline-exists (qualitative only) | Group | "Capex deployment for dark store network densification is progressing broadly on plan, with some natural phasing impact from Ramadan and the regional conflict" (TLB-020 p.12) — a qualitative Fact; no numeric phasing percentage is disclosed |
| P6 | AI/personalisation embedded-capability investment, tracked as a discrete line item | N-06 | Leading | Newly-instrumented | Group | Not named as a separate dollar line within either bucket — an embedded capability, not a budgeted line, per N-06's own logic |
| P7 | Food-leadership partner-commission-rate investment as % of the ~USD55mn bucket | N-05 | Leading | Newly-instrumented | Group | Mechanism (retaining/winning back/acquiring high-demand partners via commission investment) is named qualitatively; no dollar sub-split within the bucket is disclosed |
| P8 | Egypt-specific programme-exposure spend vs. the ≈USD19.3mn illustrative pro-rata proxy | N-44 (`ASM-020`) | Lagging | Newly-instrumented | inferred-applicability (Group → Egypt) | The ≈USD19.3mn figure is an explicitly labeled derived estimate (Egypt's ~11.0% FY2025 revenue share applied to the full USD175mn), not a disclosed or approved Egypt budget line |

**Portfolio family: 8 KPIs — 4 baseline-exists, 4 newly-instrumented.**

---

## 2. Customer & Growth KPIs

Order frequency, multi-vertical adoption, talabat pro penetration, retention/CLV proxies. Grounded
in Value_Driver_Tree_v2.md Stage 3-8 (N-07 through N-23).

| ID | KPI | Node(s) | Lead/Lag | Baseline tag | Geography | Basis |
|---|---|---|---|---|---|---|
| C1 | talabat pro subscriber GMV share (% of platform GMV) | N-08 | Leading | Baseline-exists | Group | TLB-020 p.8: ~32% (FY2024) → ~49% (Q1 2026) |
| C2 | Group order frequency (orders per active customer, annual) | N-16 | Leading | Baseline-exists | Group | TLB-001 p.15: 6.2x (Dec'23) → 6.7x (Dec'24) |
| C3 | Multi-vertical customer GMV share (% of GMV) | N-11 | Leading | Baseline-exists | Group | TLB-019 p.7, TLB-020 p.8: 68% (Dec'24) → 73% (Dec'25) → 76% (Mar'26), three consecutive rising points |
| C4 | Multi-vertical vs. food-only order-frequency multiple | N-14 | Leading | Baseline-exists (dated) | Group | TLB-012 p.9, TLB-013 p.6: 13.0x vs. 3.8x orders/month, dated July 2024 — not refreshed with a more recent figure anywhere in the corpus |
| C5 | talabat pro order-frequency uplift vs. matched non-subscribers | N-15 | Leading | Baseline-exists | GCC + Jordan only (excludes Egypt and Iraq by name) | TLB-001 p.18, TLB-015 p.78, TLB-019 p.11: 20-28% |
| C6 | talabat pro retention uplift vs. lookalike non-subscribers | N-20 | Lagging | Baseline-exists | GCC + Jordan only (same population as C5) | TLB-015 p.78, TLB-019 p.11: +26-32% |
| C7 | Multi-vertical M1 retention delta: mono-vertical vs. multi-vertical subscribers | N-21 | Lagging | Baseline-exists | Group (underlying subscriber base skews pre-Dec-2024 GCC/Jordan — treat with same caution as C5/C6) | TLB-019 p.10: +16pp (mono) vs. +20pp (multi) |
| C8 | CLV proxy: gross-profit-per-customer uplift, 30 days post-subscription | N-22 | Lagging | Baseline-exists | GCC + Jordan cohort | TLB-015 p.78: 136% uplift; no absolute LTV figure disclosed anywhere — a relative-uplift proxy only |
| C9 | Family Plan retention premium vs. solo plans | N-23 | Lagging | Baseline-exists | Group (not broken out by country) | TLB-018 p.6: >60% |
| C10 | Egypt/non-GCC talabat pro order-frequency and retention uplift | N-13 (`ASM-016`) | Leading + Lagging | Newly-instrumented | inferred-applicability (Group/GCC → Egypt/non-GCC) | No Egypt- or non-GCC-specific pro frequency/retention figure exists anywhere post-launch (Egypt live Feb 2025); applying the GCC+Jordan statistics (C5/C6) to Egypt is a labeled inference only, per `Geographic_Evidence_Rules.md` Failure Pattern #1 |
| C11 | Customer-journey conversion rate: Food → Grocery & Retail → talabat pro sign-up | N-18 | Leading | Newly-instrumented | Group | TLB-013 p.6 states the sequence as management's own framing of the customer journey; no measured conversion-rate funnel is disclosed |
| C12 | Churn / customer-attrition rate (voluntary churn to competition and involuntary lapse) | N-20, N-21, N-22 (retention/CLV stage — the closest driver-tree grounding; churn is the inverse of retention) | Lagging | Newly-instrumented | Group and Egypt | Per `Topics/Customer Churn.md`: no churn rate, churn definition, or churn cohort analysis exists anywhere in the corpus, Group or Egypt — every churn reference is qualitative ("partial or complete churn to competition," TLB-002 p.14) or inferred from a retention statement. This becomes a metric the 2026 investment programme must **start measuring from zero**, not one it improves against a known baseline |

**Customer & growth family: 12 KPIs — 9 baseline-exists, 3 newly-instrumented.**

---

## 3. Financial KPIs

GMV, revenue, gross profit, Adjusted EBITDA margin, cash generation. Grounded in
Value_Driver_Tree_v2.md Stage 9-13 (N-24 through N-41), plus the cross-cutting bridge nodes (N-42,
N-44).

| ID | KPI | Node(s) | Lead/Lag | Baseline tag | Geography | Basis |
|---|---|---|---|---|---|---|
| F1 | Group GMV growth (actual vs. FY2026 guided 11-14% cFX range) | N-24, N-27 | Lagging | Baseline-exists | Group | FY2025 actual USD9.5bn, +28% cFX (TLB-002); FY2026 guidance USD11.2-11.5bn (TLB-019 p.18, TLB-020 p.14, TLB-014 p.9) |
| F2 | GCC vs. non-GCC GMV growth split | N-25 | Lagging | Baseline-exists | GCC / non-GCC (post-FY2025 split — Jordan + Iraq only) | TLB-019 p.14, TLB-011 p.2: GCC +22% y/y vs. non-GCC +57% y/y; non-GCC now 21% of Group GMV vs. 16% a year earlier |
| F3 | Food vs. Grocery & Retail GMV split and growth rates | N-26 | Lagging | Baseline-exists | Group | TLB-002 p.18, TLB-019 p.14: Food USD6.65bn +20% y/y; G&R USD2.77bn +47% y/y (FY2025) |
| F4 | Group Revenue growth (actual vs. FY2026 guided 14-17% cFX range) | N-30 | Lagging | Baseline-exists | Group | TLB-019 p.18, TLB-020 p.14, TLB-014 p.9; note the 2026 move to IFRS Revenue-only reporting is a methodology change to flag when comparing to FY2025 actuals |
| F5 | Blended take rate (Revenue ÷ GMV) | N-28 | Lagging | Baseline-exists | Group | TLB-001 p.27, carried across the corpus: ≈40% |
| F6 | Advertising & listing-fees revenue (USD, and as % of GMV) | N-29 | Leading | Baseline-exists | Group | TLB-002 p.20, TLB-009 p.4: USD246mn (FY2024) → USD323mn (FY2025), +32% y/y. UAE talabat mart alone has already reached the ~7% of GMV medium-term benchmark — a country-specific level, not yet Group-wide |
| F7 | Group gross profit margin (% of GMV) | N-31 | Lagging | Baseline-exists | Group | TLB-002 p.17, p.20: pro forma FY2025 USD1,124mn, 11.9% margin of GMV |
| F8 | G&R product-mix EBITDA margin drag | N-32 | Lagging | Baseline-exists | Group | TLB-014 p.6, p.8: (0.5%)-(0.7%)pp; whether this persists, narrows, or reverses as G&R scales is undisclosed |
| F9 | Group Adjusted EBITDA margin (actual vs. guided bridge) | N-33, N-34, N-35 | Lagging | Baseline-exists | Group | FY2025 6.5% margin (+24% y/y); FY2026 guided step-down to 4.4-4.8% (Everyday App ≈-0.7pp, Food-leadership ≈-0.5pp); Q1 2026 actual 4.8% of GMV, -9% y/y (TLB-004, TLB-008, TLB-019, TLB-020, TLB-014) |
| F10 | Programme-attributable incremental GMV (illustrative FY2026 range) | N-42 (`ASM-017`) | Leading | Newly-instrumented | Group | An illustrative decomposition of the disclosed 11-14% cFX guidance range into a baseline/organic component and a programme-attributable delta — **not a disclosed or measured programme ROI**; must never be reported as "the programme delivers X% GMV growth" |
| F11 | Adjusted Free Cash Flow (USD, and as % of GMV) | N-38, N-40 | Lagging | Baseline-exists | Group | FY2025 USD559mn (+21% y/y, 5.9% of GMV, 91% cash conversion); FY2026 guided USD370-400mn (3.2-3.6% of GMV) (TLB-002 p.17, p.22; TLB-019 p.18, TLB-020 p.14, TLB-014 p.9) |
| F12 | Net cash position | N-39 | Lagging | Baseline-exists | Group | TLB-002 p.23: USD591mn end-2025, +83% y/y; zero external financial debt; programme fully funded by internal cash |
| F13 | Segment-level (GCC/non-GCC/Egypt) EBITDA and cash-generation contribution | N-36, N-41 | Lagging | Newly-instrumented | Group / GCC / non-GCC / Egypt | No segment-level EBITDA or cash-generation figure is disclosed anywhere in the corpus — only Revenue, Gross Profit, PBT, and Net Profit are disclosed at the Egypt segment level. This is a genuine reporting gap this KPI tree cannot baseline, not a number the AI solution merely needs to improve |
| F14 | FY2027+ Adjusted EBITDA margin recovery trajectory | N-37 (`ASM-019`) | Lagging | Newly-instrumented | Group | Management frames the FY2026 step-down as deliberate and temporary ("to capture higher long-term growth," TLB-020 p.16) but discloses no FY2027 guidance figure, timeline, or recovery target |

**Financial family: 14 KPIs — 11 baseline-exists, 3 newly-instrumented.**

---

## 4. Operational KPIs

Dark-store density/count, delivery/logistics performance, partner selection depth. Grounded in the
capability/adoption stages (Stage 2-3) and `Topics/Grocery and Retail.md`, `Topics/Logistics.md`.

| ID | KPI | Node(s) | Lead/Lag | Baseline tag | Geography | Basis |
|---|---|---|---|---|---|---|
| O1 | tMart dark-store count (# stores, all 8 markets) | N-07 | Leading | Baseline-exists | Group | TLB-002 p.12, p.14: 130 (end-2024) → 160 (2025) |
| O2 | tMart GMV growth rate | N-07 | Leading | Baseline-exists | Group | TLB-002 p.12, p.14, p.20: +45-47% y/y |
| O3 | G&R share of total revenue | N-07 | Lagging | Baseline-exists | Group | TLB-002 p.20: 31% (2025) vs. 28% (2024) |
| O4 | Grocery online-penetration rate vs. TAM | N-04 (capability-deployment justification for continued dark-store capex) | Leading | Baseline-exists (context only, no target) | Group | `Topics/Grocery and Retail.md`, TLB-014 p.19, TLB-020 p.16: ~3% online adoption of a USD150bn+ TAM; no target penetration rate or timeline the investment is meant to achieve is disclosed |
| O5 | Food partner retention/win-back/acquisition depth (# or % of high-demand partners retained) | N-10 | Lagging | Newly-instrumented | Group | TLB-020 p.16: mechanism (commission-rate investment to retain/win back/acquire high-demand food partners) is named qualitatively; no partner-retention percentage or count is disclosed anywhere |
| O6 | Delivery/logistics performance: average delivery time, on-time rate, system reliability | N-04, N-06 (cross-cutting capability link — dark-store densification capex funds tMart's fulfilment layer; AI/dispatch is part of N-06's embedded capability; see `Scenarios_v2.md`'s logistics module, `ASM-028`) | Lagging | Baseline-exists | Group | TLB-015 p.42, p.82: avg. delivery time ~37min (2020) → under 30min (2024-25); on-time rate ~67%→~78%; system reliability ~99.95%. Flagged as the weakest-evidenced link to the 2026 programme specifically — no dollar figure in either bucket is named against logistics |
| O7 | Egypt-specific dark-store count / G&R GMV metrics | N-07 (the node's own stated gap: "No country-level store count or G&R GMV split exists anywhere in the corpus, Egypt included") | Leading | Newly-instrumented | Egypt (standalone) | No country-level breakout exists for any G&R metric |
| O8 | Egypt-specific logistics performance (delivery time, on-time rate) | N-04, N-06 (gap, cross-referenced from `Topics/Logistics.md`) | Lagging | Newly-instrumented | Egypt (standalone) | `Topics/Logistics.md` Open Questions: no Egypt-specific average delivery time, on-time rate, or Rider Safety Score is disclosed; the closest adjacent fact is the 200-EV pilot programme (end-2025), which is not a performance metric |
| O9 | AI/personalisation data-infrastructure throughput (TB/day processed) | N-06 | Leading | Baseline-exists | Group | TLB-002 p.15: 235TB/day |

**Operational family: 9 KPIs — 6 baseline-exists, 3 newly-instrumented.**

---

## 5. Governance KPIs

Per `Topics/Capital Allocation and Investment Governance.md`, the corpus discloses almost no internal
governance mechanics for this programme (who evaluates, approves, or stage-gates a specific
investment) — only the headline USD175mn/120mn/55mn split and the resulting EBITDA margin bridge.
**Every KPI in this family is newly-instrumented; none has a corpus baseline.** These are proposed
tracking mechanisms this OS recommends the programme adopt, explicitly labeled as this project's own
proposal — never presented as a description of talabat's actual governance process.

| ID | KPI | Node(s) / gap | Lead/Lag | Baseline tag | Geography | Basis |
|---|---|---|---|---|---|---|
| G1 | % of programme spend passing a documented stage-gate before release | N-01 + governance gap | Leading | Newly-instrumented | Group | `Capital Allocation and Investment Governance.md`: "No document in the corpus describes an internal capital-allocation committee, an investment-approval threshold, a stage-gate process, or how a specific initiative... moves from proposal to funded line item." |
| G2 | Intra-year reallocation amount/frequency between Everyday App and Food-leadership buckets | N-02, N-03 + governance gap | Lagging | Newly-instrumented | Group | `Investment_Portfolio_Register.md` "Pilot funding / reserve / reallocation pool": not disclosed by talabat, not yet proposed by this OS |
| G3 | % of the USD175mn programme formally attributed to a named market/country | N-01 + governance gap | Lagging | Newly-instrumented | Group | `Investment_Portfolio_Register.md` "Market-level logic": not disclosed — "the single largest evidence gap the business plan's investment recommendation has to work around" |
| G4 | Approval-to-deployment cycle time (Board approval → funded line item) | N-01 + governance gap | Leading | Newly-instrumented | Group | `Capital Allocation and Investment Governance.md` Open Questions: no document discloses how the USD175mn total or its split was arrived at, or how a specific initiative moves from proposal to funded line item |
| G5 | ROI/payback-period hurdle-rate compliance rate | N-01 + governance gap | Lagging | Newly-instrumented | Group | `Capital Allocation and Investment Governance.md`: "No document discloses how the USD175 million total, or its ~USD120mn/~USD55mn split, was itself arrived at — no unit-economics model, ROI hurdle rate, or payback-period criterion is named anywhere in the corpus for this programme" |
| G6 | Quarterly-vs-annual EBITDA margin-bridge reconciliation completeness | N-34 (its own noted internal inconsistency) | Lagging | Newly-instrumented | Group | N-34: "the Q1 2026 actual bridge (TLB-020 p.12) uses a different sub-split than the FY2026 full-year bridge (TLB-019 p.19) — unreconciled in the corpus." This KPI proposes tracking whether/how that reconciliation is documented going forward |
| G7 | Number of documented capital-allocation approval/governance events per year (Board- or GA-level) | N-01 + governance gap | Lagging | Newly-instrumented | Group | The only visible approval event of any kind in the corpus is the DFM share-buyback General Assembly vote (TLB-021, 13 April 2026) — not the USD175mn investment programme itself; no equivalent disclosed approval event exists for the programme |

**Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented.**

---

## Summary table (all 50 KPIs)

| Family | KPI count | Baseline-exists | Newly-instrumented | Leading | Lagging |
|---|---|---|---|---|---|
| 1. Portfolio | 8 | 4 | 4 | 5 | 3 |
| 2. Customer & growth | 12 | 9 | 3 | 8 (C10 counted once) | 5 (C10 counted once) |
| 3. Financial | 14 | 11 | 3 | 3 | 11 |
| 4. Operational | 9 | 6 | 3 | 6 | 3 |
| 5. Governance | 7 | 0 | 7 | 3 | 4 |
| **Total** | **50** | **30** | **20** | — | — |

(C10 carries both a Leading and a Lagging component — counted once in the family total, noted
separately in the Leading/Lagging columns above.)

---

## Escalation summary — flagged for decision-steward / user, not resolved here

No numeric target is assigned to any of the 20 newly-instrumented KPIs above. The clearest and
highest-stakes case is **C12, churn/attrition rate**: this project has no baseline churn figure for
Egypt or Group anywhere in the corpus (`Topics/Customer Churn.md`), so any Section 13 statement of the
form "reduce churn by X%" would be inventing both the baseline and the target. This KPI tree instead
states plainly: churn rate becomes a metric the 2026 investment programme must **start** measuring
from zero, not one it improves against a known number — exactly as `KPI_Tree.md`'s K9 found for the
superseded Egypt-retention problem, now confirmed as a Group-wide gap too.

The **entire Governance family (G1-G7)** is the second load-bearing case: because
`Capital Allocation and Investment Governance.md` finds the corpus discloses almost no internal
governance mechanics, any stage-gate percentage, reallocation threshold, ROI hurdle rate, or
approval-cycle-time target this plan proposes is this OS's own recommended mechanism, not a
description or validation of talabat's actual process — consistent with the Problem Charter's
instruction that recommendations be staged proposals gated for human approval, not false-precision
claims.

Also flagged: **F10** (programme-attributable incremental GMV) and **F13**/**N-36**/**N-41**
(segment-level EBITDA/cash gaps) must never be presented in Section 9 or Section 13 as measured
programme returns or as an Egypt/GCC/non-GCC EBITDA figure — both are explicitly labeled illustrative
constructions or absence-of-disclosure statements in `Value_Driver_Tree_v2.md`, carried through here
without alteration.

Setting an actual target for any of the 20 newly-instrumented KPIs — churn (C12), the Governance
family (G1-G7), or any of P4/P6/P7/P8, C10/C11, F10/F13/F14, O5/O7/O8 — requires a dedicated Decision
Log entry (a management judgment call, per this agent's own rule), not a number this agent will derive
or infer. This mirrors `forecasting-agent`'s own escalation of the Scenarios_v2.md top-level
scenario-choice framing question rather than resolving it unilaterally.

---

## Links
[[Forecasting_Layer]] · [[Value_Driver_Tree_v2]] · [[Scenarios_v2]] ·
[[Investment_Portfolio_Register]] · [[Geographic_Evidence_Rules]] ·
[[Topics/Capital Allocation and Investment Governance]] · [[Topics/Customer Churn]] ·
[[Topics/Grocery and Retail]] · [[Topics/Logistics]] · [[Topics/Talabat Pro]] ·
[[Topics/Multi-Verticality]] · `Problem_Charter.md`
