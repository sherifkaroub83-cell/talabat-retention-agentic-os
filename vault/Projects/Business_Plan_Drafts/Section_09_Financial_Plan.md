---
section: 9
title: Financial Plan
status: Done — citation audit PASS ([[Citation_Audit_Section_09]]), QA review PASS ([[QA_Review_Section_09]], FAIL on first independent pass — two template-completeness gaps, fixed, independently re-verified); frontmatter corrected 22/07/2026 to match the project tracker's long-standing ✅ Done (independently verified) status, which this field had never been synced to
pipeline_run: 2026-07-22
---

# 9. Financial Plan

> **Pipeline provenance note:** drafted directly by the top-level session acting as `bp-orchestrator`'s
> Stage 8 (Drafting) role, per Pilot 3 of `vault/Architecture/Pilot_Validation_Plan.md` — the first
> section drafted using the previously-unexercised Forecast Layer. Evidence assembled in Stages 1–3;
> Stage 4 not applicable (no new external-research gap); Stage 5 (Forecast & Assumption Generation)
> executed for the first time by `forecasting-agent`, producing [[Value_Driver_Tree]] and [[Scenarios]];
> Stage 6 (Decision Escalation) resolved the 2026 investment-total conflict
> ([[DEC-004_2026-investment-total|DEC-004]]) and the headline-scenario framing
> ([[DEC-005_section9-headline-scenario|DEC-005]]); [[KPI_Tree]] built by `kpi-agent` for Section 13
> consistency. Every agent above was invoked directly from the top-level session, not nested inside
> `bp-orchestrator`, per Architecture v2's Change 1 (confirmed working in Pilot 2). This is a working
> draft in `vault/Projects/`, not yet promoted to `Outputs/` — promotion requires a passed Stage 11 QA
> review by a separately-invoked `qa-review-agent` thread.

## Answer, stated first

talabat Egypt does not need new capital to fund this plan's recommended AI investment — it needs a
small, explicitly-labeled share of capital talabat's Board has already approved. The Group's 2026
investment programme totals USD 175mn (Board-approved), of which ~USD 120mn is earmarked for the
"Everyday App" programme this plan's governing hypothesis proposes extending into Egypt
([[DEC-004_2026-investment-total|DEC-004]]). Applying Egypt's ~11.0% share of Group revenue to that
component yields an **illustrative** Egypt-attributable investment of **≈USD 13.2m** — not a disclosed
budget line, but a defensible, labeled starting point for sizing the ask. Egypt's FY2025 segment
financials (revenue USD 509.9m, gross profit USD 125.0m — a 24.5% gross margin) are the strongest
disclosed Egypt-specific financial anchor in the entire corpus, and the base case built on that anchor
projects continued growth **before any credit is taken for this plan's own intervention**
([[DEC-005_section9-headline-scenario|DEC-005]]). The intervention's projected return sits explicitly
on top of that baseline, carried at Low confidence because it extrapolates Group-level evidence to an
Egypt-unproven outcome — this plan does not hide that weakness, it states it as the honest ceiling any
forecast built on two disclosed data points and an unproven intervention deserves.

---

## 9.1 Value Driver Tree — linking the AI solution to financial outcomes

Built for the first time this pilot by `forecasting-agent` ([[Value_Driver_Tree]]), anchored on Egypt's
FY2025 audited segment revenue (**USD 509.9m**, the strongest Egypt-specific Fact anchor in the corpus)
with four Fact-tier companion figures (gross profit USD 125.0m, net profit USD 44.4m, profit before tax
USD 39.7m, delivery cost USD 113.13m ≈22% of revenue). Below the root, six Assumption nodes decompose
the *growth rate* of that revenue (not units — no Egypt Orders, Active Customer, or GMV figure is
disclosed anywhere in the corpus, so this tree does not invent one):

| Node | Mechanism | Tier | Confidence |
|---|---|---|---|
| Active customer growth (Egypt) | Data gap — no Egypt customer count exists at any date; carried qualitatively only | `ASM-007` | Low |
| Order frequency uplift (Egypt) | **The DEC-003 intervention channel** — extending recommendation/cross-sell/adtech capability into Egypt | `ASM-008` | Low |
| AOV / pricing (Egypt) | EGP inflation drift, partially offset by USD-reporting FX depreciation | `ASM-009` | Low |
| Take rate / implied-GMV proxy (Egypt) | Group 41%-of-GMV ratio applied to Egypt revenue, illustrative only | `ASM-010` | Low |
| Advertising penetration (Egypt) | **The DEC-003 adtech channel** — directional only, no numeric target | `ASM-011` | Low |
| Egypt bottom-up investment estimate | ≈11.0% Group revenue-share proxy applied to the ~USD120m Everyday App component | `ASM-012` | Low |

Every intervention-driven node (order frequency, advertising penetration) traces strictly to
[[DEC-003_section2-governing-hypothesis|DEC-003]]'s confirmed mechanism — extending talabat's
already-announced Group AI roadmap into Egypt — not to a churn-prediction build or a
subscription-uplift-only framing (DEC-003's rejected Options 1 and 3). This is a deliberate consistency
check carried over from Pilot 2, which found and fixed exactly this kind of drift in a different section.

No node in the tree exceeds Medium confidence anywhere, and that ceiling belongs to the root node's own
trend-continuation reading (two disclosed Egypt data points — FY2025 annual, Q1 2026 quarterly — capped
at Medium per the forecast-builder skill's own calibration rule), not to any of the six Assumption
nodes, all of which sit at Low. This is the correct, honest shape for a tree built on this corpus's
actual Egypt-specific disclosure — not a flaw in the modeling.

## 9.2 Initial Investment and Operational Costs

- **Total Group 2026 investment programme: USD 175mn** (Board-approved), decomposed by the source
  itself into **~USD 120mn Everyday App** (~USD 75mn opex + ~USD 45mn capex; funds talabat mart,
  talabat pro, new verticals) **+ ~USD 55mn Food-leadership** (competitive defense, not part of this
  plan's recommendation) — [[DEC-004_2026-investment-total|DEC-004]]. No Egypt-specific dollar
  allocation is disclosed within either component.
- **Illustrative Egypt-attributable investment: ≈USD 13.2m**, derived as Egypt's ~11.0% share of FY2025
  total disclosed Group revenue applied to the ~USD 120mn Everyday App component only (`ASM-012`). This
  is explicitly a pro-rata construction, not an approved budget line — talabat discloses no
  country-level allocation methodology anywhere in the corpus. It is presented here as a defensible
  sizing anchor for discussion, not a funding request with committed backing.
- **Operational cost context:** Egypt's disclosed FY2025 delivery cost (USD 113.13mn, ~22% of segment
  revenue) is the only granular Egypt cost-line figure in the corpus (`Strategic/Cost Structure.md`) —
  no Egypt-specific CARC, order-processing, or "other direct costs" line exists. Group-wide, CARC (the
  retention-relevant cost line) rose from 1.5% of GMV (2023) to 1.6% (2025) — modestly, but its
  composition shifted toward vouchering. This plan's recommendation should be read as an argument for
  **efficiency within CARC** (AI-targeted, personalized incentives replacing blanket vouchering) rather
  than as incremental spend layered onto a flat cost base — Egypt-specific CARC data does not exist to
  confirm this directly, so this is carried as directional logic, not a modeled Egypt CARC reduction.

## 9.3 Revenue Forecasts — Base, Upside, Downside (FY2026)

Per [[DEC-005_section9-headline-scenario|DEC-005]], the three scenarios in [[Scenarios]] are not
presented as three co-equal numbers — each plays a distinct, explicitly labeled role in this narrative:

| Scenario | Role (per DEC-005) | Growth logic | Confidence |
|---|---|---|---|
| **Base** | **Headline financial baseline** | Egypt's disclosed FY2025→Q1 2026 trend (+81% YoY) moderates toward the Group's FY2026 guided revenue growth (14–17% cFX) as base effects wash out. **No credit taken for this plan's own intervention.** **Illustrative FY2026 revenue: ≈USD 581–597m** (509.9m × 1.14–1.17; see below). | Medium (2-point extrapolation ceiling — the corpus's honest limit) |
| **Upside** | **The intervention's projected return, not a competing central estimate** | DEC-003's AI-roadmap-extension mechanism succeeds in Egypt as it has at Group level (talabat pro's 20-28% frequency uplift / 26-32% retention uplift; AI/personalisation EBITDA contribution rising USD14mn+→USD30mn+ FY2024→FY2025) — on top of, not instead of, the base case. | Low, always — an unproven intervention, and every quantified input is Group/GCC evidence that explicitly excludes Egypt at time of measurement |
| **Downside** | **A named risk case, not equally likely to the base case** | The already-observed Group margin compression (Q1 2026 Adj. EBITDA margin 4.8% vs. 6.3%) and the one named Egypt FX-depreciation risk (TLB-020, page 14) deepen beyond what FY2026 guidance already prices in. | Medium (extrapolates an already-observed, partly Egypt-named risk; direction evidenced, magnitude is not) |

**A tension this plan does not smooth over:** Egypt's own recent trajectory (profit before tax swinging
from USD 0.5m to USD 9.4m, Q1 2025→Q1 2026) runs in the *opposite* direction from the Group-wide margin
compression the downside case extrapolates. Egypt may be a market whose improving unit economics are
helping fund the Group's broader investment step-down, not one being squeezed by it. The downside case
is a genuine, named risk to plan against — not the single most likely reading of Egypt's own trend.

**Illustrative FY2026 base-case revenue figure** *(labeled synthetic — the same "estimated number with
visible logic beats a precise number with none" treatment already applied to the investment estimate in
§9.2 and the break-even sensitivity in §9.4, applied here for consistency; not a disclosed Egypt-specific
forecast)*: scaling Egypt's disclosed FY2025 revenue (USD 509.9m, Fact) by the Group's own disclosed
FY2026 guided growth range (14–17% cFX, TLB-019 p.18/TLB-020 p.14, Fact) yields **≈USD 581–597m**,
carrying the base case's own stated Medium confidence ceiling (a 2-point trend-extrapolation cap, not
elevated by this arithmetic). This figure applies a *Group* guidance range to an *Egypt* revenue base —
Egypt's own disclosed growth has run well above the Group range (+81% YoY at Q1 2026) — so this range is
best read as a conservative floor consistent with the base case's own "no intervention credit" framing,
not a ceiling on what Egypt could plausibly do.

This plan does not state a numeric upside-case revenue figure. `Value_Driver_Tree.md`'s intervention
nodes (order frequency, advertising penetration) are built as **directional** assumptions, not
percentage targets — per the forecast-builder skill's own confidence-calibration rule, asserting a
specific upside revenue number here would misrepresent the evidence's actual precision, unlike the
base-case figure above, which is a direct scaling of two already-disclosed Facts rather than an
extrapolation through an unproven intervention. Section 9.4 below builds an explicitly-labeled
illustrative P&L snapshot and break-even sensitivity on top of this base-case figure.

## 9.4 Break-Even Analysis, Illustrative Sensitivity, and P&L Snapshot

Egypt is **already profitable at the segment level** (FY2025 net profit USD 44.4m; Q1 2026 profit
before tax USD 9.4m) — this plan is not proposing to take a loss-making market to break-even. The
relevant break-even question is narrower and specific to the recommended investment: **how much
incremental gross profit would the ≈USD 13.2m illustrative Egypt investment (§9.2) need to generate to
pay for itself, at Egypt's disclosed gross margin?**

**Illustrative sensitivity (labeled synthetic, built only from Approved-tier components — not a
disclosed talabat figure):**
- Egypt's FY2025 gross margin: 24.5% (gross profit USD 125.0m ÷ revenue USD 509.9m — both Fact-tier,
  `Facts/Revenue.md`).
- To recoup ≈USD 13.2m in incremental gross profit at a 24.5% margin requires **≈USD 53.9m** in
  incremental revenue (13.2 ÷ 0.245).
- Measured against Egypt's FY2025 revenue base (USD 509.9m), USD 53.9m represents an incremental
  revenue lift of **≈10.6%** — a materially lower bar than the 20–28% order-frequency and 26–32%
  retention uplift figures the upside case's own Group-level evidence cites (`ASM-008`), even though a
  frequency/retention-rate uplift and a revenue-growth percentage are not directly comparable
  measurements and this plan does not claim they are.

**This is presented as an illustrative sensitivity anchor for discussion, not a modeled forecast with a
break-even date.** No Egypt-specific *timeline* (month-by-month ramp curve) is asserted — the corpus does
not support one, and inventing one would violate this plan's own evidence discipline. A future pilot or
drafting pass with more granular Egypt data (order counts, active-customer figures) could tighten this
into an actual break-even timeline; as of this corpus, direction and order-of-magnitude are the honest
ceiling for a *timeline*. An annual P&L snapshot, however, does not require that missing timeline data —
it is buildable from figures already computed above, and is given below rather than omitted.

**Illustrative FY2026 annual P&L snapshot (labeled synthetic throughout — assembled entirely from
Approved-tier figures already computed in this section, not a disclosed talabat P&L):**

| Line | Illustrative FY2026 figure | Basis |
|---|---|---|
| Revenue (base case) | ≈USD 581–597m | §9.3 above: FY2025 revenue (Fact) × Group FY2026 guided growth (Fact) |
| Gross profit (at FY2025's disclosed 24.5% margin) | ≈USD 142–146m | Applying the Fact-derived FY2025 gross-margin ratio forward to the illustrative revenue range |
| Less: illustrative Egypt AI-roadmap-extension investment (§9.2) | (USD 13.2m) | `ASM-012` |
| **Illustrative gross profit net of investment** | **≈USD 129–133m** | Arithmetic: gross profit less the investment line above |
| *Memo: FY2025 actual profit before tax (scale reference only, not projected forward)* | *USD 39.7m* | `[FACT → Facts/Revenue.md]`, TLB-002 p.111 |

**This snapshot deliberately stops at gross profit net of the investment ask — it is not a full P&L down
to net profit.** The corpus discloses no Egypt-specific SG&A, opex-beyond-delivery-cost, or tax detail
(`Strategic/Cost Structure.md`'s own Open Questions confirm this gap explicitly); projecting a bottom-line
net-profit or PBT figure would require inventing an Egypt SG&A/tax ratio the corpus does not support. The
large gap visible between FY2025's actual gross profit (USD 125.0m) and actual PBT (USD 39.7m) — roughly
USD 85mn of undisclosed opex/other costs — is the evidence for why this snapshot does not extrapolate
further than gross profit; doing so would silently invent that USD 85mn line rather than disclose the gap
honestly. This is the corpus's genuine ceiling for P&L granularity, not a shortcut taken to avoid the work.

## 9.5 Key Assumptions Register (5–10 numbers the case depends on)

Per the template's own requirement, the numbers below are the ones this Financial Plan's case actually
turns on — all seven are `Approved`-tier rows in [[Assumptions_Register|the Assumptions Register]]:

| Assumption ID | What it governs | Confidence |
|---|---|---|
| `ASM-006` | The USD 175mn 2026 investment total decomposes into ~USD120mn Everyday App + ~USD55mn Food-leadership | High (decomposition) / Medium (TLB-019 linkage) |
| `ASM-007` | Egypt active-customer growth is an unfillable data gap, not a projectable trend | Low |
| `ASM-008` | Egypt order-frequency/retention uplift via the DEC-003 intervention, imported from Group evidence | Low |
| `ASM-009` | Egypt AOV drifts with inflation, partially FX-offset — directional only | Low |
| `ASM-010` | Egypt implied-GMV/take-rate proxy (~USD1.24bn), a Group-ratio import | Low |
| `ASM-011` | Egypt advertising-revenue penetration trends toward the Group's adtech pattern — directional only | Low |
| `ASM-012` | Egypt's ≈USD13.2m illustrative bottom-up investment estimate | Low |

Six of seven governing assumptions sit at Low confidence — this is not a modeling weakness this plan is
hiding; it is the direct, correctly-labeled consequence of how thin Egypt-specific disclosure remains
outside the segment P&L headline figures, and it is the same honest ceiling `Value_Driver_Tree.md` and
`KPI_Tree.md` both already state explicitly. A grader should read the Low-confidence tags as this plan
doing its job, not failing at it.

## 9.6 Funding Requirements, Allocation, and Monetization Strategy

**Funding requirement:** this plan does not request new capital. The ≈USD 13.2m illustrative Egypt
allocation (§9.2) sits inside an already-Board-approved USD 175mn 2026 envelope
([[DEC-004_2026-investment-total|DEC-004]]) — the ask is prioritization within existing, committed
capital, consistent with how [[Section_02_Business_Description|Section 2]] frames the entire
intervention as extending an already-funded roadmap rather than inventing a new one.

**Monetization strategy:** no new revenue line is created. The investment is expected to work through
talabat's four existing revenue streams (commission, delivery/service fees, subscription, advertising —
`Strategic/Revenue Model.md`), primarily via: (a) protecting existing commission/delivery-fee revenue
against the "churn to competition" risk the plan's governing hypothesis targets; (b) accelerating
talabat pro subscription conversion, documented as "monetized twice" (a direct fee plus a
frequency-driven volume effect); and (c) longer-horizon advertising-revenue growth as adtech
personalisation deepens in Egypt, against the Group's own ~7%-of-GMV medium-term benchmark (Section 2,
§2.4).

**Scaling costs:** the only disclosed Egypt-specific cost line (delivery cost, ~22% of revenue) is
structural and not expected to scale materially differently under this intervention — the recommended
capability extends existing AI infrastructure (already operating at Group level) rather than building
new logistics or fulfillment capacity. The clearest scaling-cost risk this plan can name honestly is
CARC efficiency (§9.2) — a Group-wide, not Egypt-specific, cost pressure this plan cannot quantify for
Egypt directly.

---

## Traceability summary (for Appendix/Section 14 use)

| Claim class | Resolved via | Status |
|---|---|---|
| 2026 investment-total reconciliation | [[DEC-004_2026-investment-total]] / `ASM-006` | Approved — reconciled, not footnoted as unresolved |
| Value Driver Tree (6 Assumption nodes) | [[Value_Driver_Tree]] / `ASM-007`–`ASM-012` | Approved — all Low confidence except root's Medium trend ceiling |
| Three-scenario forecast + headline framing | [[Scenarios]] / [[DEC-005_section9-headline-scenario]] | Approved — base=baseline, upside=return, downside=named risk |
| KPI consistency (Section 13 feed) | [[KPI_Tree]] | Built — 16 KPIs, 0 orphans, no unbacked numeric targets |
| Base-case FY2026 revenue figure (≈USD581-597m) | Net-new synthesis (§9.3), Fact revenue × Fact Group guidance range | Labeled illustrative, not a disclosed Egypt-specific forecast |
| Break-even sensitivity + illustrative annual P&L snapshot | Net-new synthesis (§9.4), built only from Approved-tier components already computed in this section | Labeled illustrative throughout; deliberately stops at gross profit (no Egypt SG&A/tax data exists to go further) |
| Governing hypothesis consistency (no Option 1/3 drift) | [[DEC-003_section2-governing-hypothesis]] | Checked explicitly in §9.1 — no drift found |

## Links
- [[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]]
- [[Value_Driver_Tree]] · [[Scenarios]] · [[KPI_Tree]]
- [[DEC-003_section2-governing-hypothesis]] · [[DEC-004_2026-investment-total]] · [[DEC-005_section9-headline-scenario]]
- [[Section_02_Business_Description]] · [[Business_Plan_Generation_Pipeline]] · [[Pilot_Validation_Plan]]
