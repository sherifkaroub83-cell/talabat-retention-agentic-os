---
type: forecast
status: superseded
superseded_date: "2026-07-23"
superseded_reason: "Built entirely for the Egypt-retention problem (DEC-003-dependent) — pivot to Group-wide capital allocation requires a structurally different tree. See Problem_Charter.md and vault/Architecture/Repository_Impact_Assessment.md"
created: "2026-07-21"
updated: "2026-07-22"
built_by: forecasting-agent (Pilot 3, vault/Architecture/Pilot_Validation_Plan.md)
---

# Value Driver Tree — talabat Egypt

First live build of this tree. Anchored on talabat Egypt's FY2025 audited segment financials — the
strongest Egypt-specific figure in the corpus — per [[Forecasting_Layer]] and
`.claude/skills/forecast-builder/SKILL.md`. Every node below is tagged `[FACT → Facts/<file>.md]`
(disclosed, immutable, cites a page) or `[ASSUMPTION → pending decision-steward registration, see
"Proposed assumptions" below]` (projected, method-stated, not yet an `ASM-###` — this agent does not
self-register; `decision-steward` assigns the ID). Do not treat any unlabeled number here as
disclosed — it isn't.

**Golden rule applied throughout:** every projected node traces to (a) a named historical anchor Fact
and (b) one stated growth-logic sentence. No bare percentage appears without both.

**Governing hypothesis constraint (DEC-003, ASM-005 — Approved):** the plan's committed intervention is
extending talabat's already-announced Group AI roadmap (new recommendation form factors, cross-sell
timing/incentive optimisation, deepened adtech-embedded personalisation) into Egypt — NOT a net-new
churn-prediction build, NOT subscription-uplift-only optimisation. Every "intervention-driven" node in
this tree (Order Frequency, Advertising Penetration) is written to reflect that mechanism specifically.

---

## Root node

### Egypt Segment Revenue — FY2025
**USD 509.9m** (audited, external revenue) `[FACT → Facts/Revenue.md]` (TLB-002 p.111, TLB-008 p.61,
p.111)

Two disclosed Egypt data points exist in the whole corpus for this root metric: FY2025 (USD 509.9m,
annual) and Q1 2026 (USD 145.3m, quarterly, +81% YoY vs. restated Q1 2025 USD 80.3m — TLB-010 p.20).
**This is exactly two points at inconsistent intervals (one annual, one quarterly)** — per the
forecast-builder skill's confidence calibration, any trend-continuation projection from this base caps
at **Medium confidence**, never higher, and that ceiling is inherited by every downstream node that
depends on revenue-growth continuation.

Companion FY2025 anchors on the same segment (all `[FACT → Facts/Revenue.md]`, TLB-002 p.111):
- Gross profit: USD 125.0m (USD 124.996m)
- Net profit: USD 44.4m (USD 44.35m)
- Profit before tax: USD 39.7m (USD 39.73m)
- Delivery cost: USD 113.13m (~22% of segment revenue) `[FACT → Strategic/Cost Structure.md, sourcing
  TLB-002 p.111]`
- D&A: USD 6.21m `[FACT → Strategic/Cost Structure.md, sourcing TLB-002 p.111]`

Q1 2026 companion anchor: profit before tax USD 9.4m vs. USD 0.5m Q1 2025 (restated) `[FACT →
Topics/Profitability.md, sourcing TLB-010]`.

---

## Branch 1 — Orders (Active Customers × Order Frequency)

**No Egypt-specific Orders figure or Active-Customer count exists anywhere in the corpus**
(`Facts/Orders_Facts.md` and `Facts/Monthly_Active_Customers.md` were checked directly — neither
contains an Egypt breakout; the only Egypt-adjacent customer datapoint is the unsourced-to-a-number
newsroom claim that Egypt is talabat's "largest user base by GMV-adjacent ranking," TLB-019, already
folded into `Topics/Egypt.md` and not repeated here as a number). Per the task brief's instruction, this
branch is **not built as a disclosed FACT tree** — instead of inventing an Orders/AOV decomposition
that would misrepresent the corpus, this branch is built as two explicitly-labeled Assumption nodes
that decompose the *revenue growth rate itself* (not units), which is the only decomposition the
evidence actually supports.

### 1a. Active Customer growth (Egypt)
`[ASSUMPTION → ASM-007, Decisions/Assumptions_Register.md, Approved]`

**Logic:** Egypt is disclosed as talabat's largest user base and third-largest GMV market (TLB-019
p.5, per `Topics/Segment Reporting.md`), and the FY2025→Q1 2026 revenue trend (+81% YoY) is
management-attributed in part to underlying volume growth, not price alone (TLB-014 p.15 notes Group
revenue outpacing GMV growth is driven by mix/adtech, implying the Egypt-specific volume component of
its own growth is not separately decomposed anywhere). No Egypt active-customer count is disclosed at
any point, so this node cannot be built as a customer-count trend line — it is carried qualitatively
only, flagged as a data gap the tree cannot fill responsibly.

**Confidence: Low** — zero disclosed data points for the underlying customer count (a stronger
statement of the same gap `Facts/Monthly_Active_Customers.md` and `Facts/Orders_Facts.md` already
confirm); this node exists to name the gap, not to project through it.

### 1b. Order Frequency uplift (Egypt) — the DEC-003 intervention channel
`[ASSUMPTION → ASM-008, Decisions/Assumptions_Register.md, Approved]`

**Logic:** DEC-003's governing hypothesis (ASM-005, Approved) commits the plan to extending talabat's
Group AI roadmap — new recommendation form factors, cross-sell timing/incentive optimisation, deepened
adtech-embedded personalisation — into Egypt. The closest quantified Group-level evidence for this
mechanism's effect is the AI/personalisation layer's estimated EBITDA contribution rising from
USD14mn+ (FY2024) to USD30mn+ (FY2025) (`Strategic/Customer Retention Drivers.md`, TLB-001 p.23,
TLB-002 p.15) and talabat pro's 20-28% order-frequency uplift / 26-32% retention uplift
(`Strategic/Customer Retention Drivers.md`, TLB-023 p.8, TLB-001 p.18, TLB-019 p.11, TLB-015 p.78/p.104).
**Both figures are Group/GCC-level and explicitly exclude Egypt at time of measurement** (`Strategic/
Customer Retention Drivers.md` Egypt-Specific Considerations: talabat pro's headline uplift figures are
measured on six GCC/Jordan markets live before Dec 2024, excluding Egypt and Iraq by name — Egypt pro
launched Feb 2025). Applying this range to Egypt as the plan's intervention-effect assumption is an
explicit, labeled extrapolation from Group evidence to an unproven Egypt-specific outcome — not a
disclosed Egypt figure.

**Confidence: Low** — this is precisely the forecast-builder skill's named ceiling case ("projecting an
effect that depends on an unproven intervention... Low, always"), compounded by the Group-vs-Egypt gap
this node itself flags rather than silently imports.

---

## Branch 2 — AOV / Pricing (Egypt)

`[ASSUMPTION → ASM-009, Decisions/Assumptions_Register.md, Approved]`

**Logic:** No Egypt-specific AOV figure is disclosed anywhere in the corpus. The only Egypt pricing-
adjacent anchor is the FX/inflation risk language in `Strategic/Strategic Risks.md` (TLB-020 p.14):
"Egypt FX exposure: YtD depreciation incorporated in guidance. GMV inflation-hedge dynamics provide
partial offset for further depreciation" — i.e., management's own stated logic is that EGP-denominated
order values rise with local inflation even as USD-reported figures are pressured by depreciation. This
node therefore assumes AOV (in local terms) drifts upward with inflation while USD-reported AOV is
partially offset by depreciation — the same net logic management applies to GMV, extended here to AOV
as the closest available driver-tree leaf, since no disclosed AOV number exists to anchor a numeric
projection directly.

**Confidence: Low** — no disclosed Egypt AOV data point at all (zero, not two); this node projects a
directional mechanism (inflation vs. FX offset) stated by management for GMV, not a measured AOV
trend, and is the weakest-evidenced node in the tree.

---

## Branch 3 — Take Rate / Commission (Egypt)

### 3a. Take rate proxy
`[FACT → Facts/Revenue.md]` (TLB-002 p.111, structural) + `[ASSUMPTION → ASM-010,
Decisions/Assumptions_Register.md, Approved]` (derived ratio)

**No Egypt GMV figure exists anywhere in the corpus** (`Topics/Segment Reporting.md` and
`Facts/GMV_Facts.md` both confirm this explicitly — GMV is disclosed at Group, GCC, and Non-GCC-
ex-Egypt level but never for Egypt standalone). A true take-rate (revenue ÷ GMV) therefore **cannot be
calculated for Egypt as a Fact** — building one would require dividing a disclosed Egypt revenue figure
by an undisclosed Egypt GMV figure, silently inventing the denominator. Per the task brief, this node is
instead built as an explicitly-labeled derived/estimated Assumption: applying the Group's disclosed
FY2025 revenue-to-GMV conversion ratio (41% of GMV, pro forma Management Revenue basis — TLB-002 p.20)
to Egypt's disclosed revenue (USD 509.9m) as an *illustrative* implied-GMV proxy (≈ USD 1.24bn),
explicitly flagged as a Group-ratio import, not an Egypt-measured take rate. This proxy is for
Section 9 sizing illustration only and must never be cited as a disclosed Egypt GMV or take-rate figure.

**Confidence: Low** — anti-pattern risk explicitly named in the forecast-builder skill ("using a
Group/GCC-level growth rate as the Egypt anchor without noting it's not Egypt-specific") avoided here
only by this explicit flag; the underlying ratio itself carries no Egypt-specific evidence at all.

### 3b. Advertising penetration (Egypt) — the DEC-003 adtech channel
`[ASSUMPTION → ASM-011, Decisions/Assumptions_Register.md, Approved]`

**Logic:** DEC-003's governing hypothesis explicitly names "deepened adtech-embedded personalisation"
as one of its three Egypt-bound mechanisms. Group-level evidence: Advertising and listing fees revenue
grew from USD 246m (FY2024) to USD 323m (FY2025), +32% y/y (`Facts/Revenue.md`, TLB-002 p.20,
TLB-009 p.4), and revenue growth outpacing GMV growth in Q1 2026 was driven in part by "adtech margins"
(`Facts/Revenue.md`, TLB-014 p.15). No Egypt-specific advertising/listing-fee figure exists anywhere in
the corpus — this node projects that continuing to deploy the Group adtech-personalisation capability in
Egypt (per DEC-003) lifts Egypt's advertising-revenue share of total Egypt revenue toward (not
necessarily to) the Group's disclosed trajectory, as a directional assumption only, not a numeric
extrapolation with a stated target percentage.

**Confidence: Low** — same DEC-003 unproven-intervention ceiling as node 1b, compounded by zero
disclosed Egypt-specific advertising data of any kind.

---

## Branch 4 — Cost / Investment (Egypt) — feeds Section 9's investment case

### 4a. Egypt-specific bottom-up investment estimate
`[ASSUMPTION → ASM-012, Decisions/Assumptions_Register.md, Approved]`

**Logic:** DEC-004 (Approved, ASM-006) confirms the Group's 2026 investment programme totals
USD175mn (Board-approved) = ~USD120mn Everyday App (~USD75mn opex + ~USD45mn capex; funds talabat mart,
talabat pro, new verticals) + ~USD55mn Food-leadership (competitive defense) — and explicitly states
**no Egypt-specific dollar allocation exists within any of these figures**, naming a bottom-up Egypt
estimate as a Forecasting Agent task. This node builds that estimate using the only defensible,
labeled method available: Egypt's FY2025 segment revenue (USD 509.9m) as a share of total disclosed
FY2025 audited since-inception revenue (USD 4,651.86m, `Facts/Marketplace_Facts.md`/`Facts/Revenue.md`,
TLB-008 p.10) is ~11.0%. Applying this revenue-share proxy to the Everyday App component only (~USD120m
— the sub-programme DEC-004 identifies as most directly relevant to the AI-roadmap/retention mechanisms
this plan recommends, not the Food-leadership competitive-defense component) yields an **illustrative**
Egypt-attributable Everyday App investment proxy of **≈ USD13.2m** (11.0% × USD120m).

**This is explicitly a derived estimate, not a disclosed or approved Egypt budget figure** — talabat
does not allocate investment pro-rata to revenue share in any disclosed methodology; this is the
capstone's own illustrative construction, built only because DEC-004 names the absence of an Egypt
figure as a gap this agent should fill with a labeled method, not leave silent.

**Confidence: Low** — a single-ratio pro-rata proxy with no disclosed allocation methodology behind it;
should be presented in Section 9 as an illustrative sizing anchor for discussion, not a budget request.

---

## Tree summary (Fact vs. Assumption node count)

| # | Node | Tier | Confidence |
|---|---|---|---|
| Root | Egypt Segment Revenue FY2025 (USD509.9m) + companions (gross profit, net profit, PBT, delivery cost, D&A) | FACT | High (disclosed); Medium at best for any trend continuation off only 2 points |
| 1a | Active Customer growth (Egypt) | ASSUMPTION (qualitative only — no numeric projection built) | Low |
| 1b | Order Frequency uplift (Egypt, DEC-003 channel) | ASSUMPTION | Low |
| 2 | AOV / Pricing (Egypt, FX/inflation logic) | ASSUMPTION | Low |
| 3a | Take rate / implied-GMV proxy (Egypt) | ASSUMPTION (derived from Fact + Group ratio) | Low |
| 3b | Advertising penetration (Egypt, DEC-003 adtech channel) | ASSUMPTION | Low |
| 4a | Egypt bottom-up investment estimate | ASSUMPTION (derived from Fact + Group ratio) | Low |

**6 new proposed assumption nodes**, all capped at Low confidence except where noted; the root Fact
node's own trend-continuation ceiling is Medium (2 disclosed data points, inconsistent intervals). No
node in this tree exceeds Medium confidence anywhere — this is a direct, intended consequence of how
thin Egypt-specific disclosure still is outside the segment P&L headline figures themselves.

---

## Assumptions registered — decision-steward handoff complete

Per Step 5 of `.claude/skills/forecast-builder/SKILL.md` ("hand off, don't self-register"), the six
proposed assumptions below were handed to `decision-steward` and have since been registered as
`ASM-007` through `ASM-012` in `vault/Decisions/Assumptions_Register.md`, all `Status: Approved`
(data-derivation/methodology calls within `decision-steward`'s documented discretion — not strategic
framing choices; see the Assumptions Register and `Decision_Log/` for the full rationale class
comparison against DEC-001/002/004). The table below is retained as the historical record of what was
proposed; the placeholder codes originally used here (`FCT-AGT-0#`) have been fully superseded by the
real IDs and no longer appear anywhere in this file or in `Scenarios.md`.

| Registered ID | Statement | Tier | Confidence | Depends on |
|---|---|---|---|---|
| ASM-007 | Egypt active-customer growth cannot be numerically projected — no disclosed Egypt customer-count data point exists anywhere in the corpus at any date; flagged as an open data gap, not filled with an invented number | Assumption (gap-flag only) | Low | Facts/Monthly_Active_Customers.md, Facts/Orders_Facts.md (both confirmed to lack Egypt breakout) |
| ASM-008 | Egypt order-frequency uplift from the DEC-003 AI-roadmap-extension intervention is projected by extrapolating talabat pro's Group/GCC 20-28% frequency uplift and 26-32% retention uplift into Egypt, explicitly flagged as Group-level evidence excluding Egypt at time of measurement, not an Egypt-proven effect | Assumption | Low | Strategic/Customer Retention Drivers.md; DEC-003/ASM-005 |
| ASM-009 | Egypt AOV is assumed to drift with local inflation, partially offset in USD terms by EGP depreciation, per management's own stated GMV inflation-hedge logic — extended here to AOV since no disclosed Egypt AOV figure exists to project directly | Assumption | Low | Strategic/Strategic Risks.md (TLB-020 p.14) |
| ASM-010 | Egypt implied-GMV/take-rate proxy (~USD1.24bn implied GMV) is constructed by applying the Group's FY2025 41%-of-GMV revenue-conversion ratio to Egypt's disclosed FY2025 revenue (USD509.9m); explicitly labeled as a Group-ratio import, not an Egypt-measured take rate, since no Egypt GMV figure is disclosed anywhere in the corpus | Assumption (derived) | Low | Facts/Revenue.md (TLB-002 p.20, p.111); Topics/Segment Reporting.md, Facts/GMV_Facts.md (confirming the Egypt GMV gap) |
| ASM-011 | Egypt advertising-revenue penetration is assumed to trend directionally toward the Group's adtech-driven revenue growth pattern (Advertising & listing fees +32% y/y FY2025; adtech margins cited as a Q1 2026 Group revenue-growth driver) as the DEC-003 "deepened adtech-embedded personalisation" mechanism is extended to Egypt — no target percentage is asserted, direction only | Assumption | Low | Facts/Revenue.md (TLB-002 p.20, TLB-009 p.4, TLB-014 p.15); DEC-003/ASM-005 |
| ASM-012 | Egypt's bottom-up 2026 Everyday App investment estimate (≈USD13.2m) is derived by applying Egypt's ~11.0% share of FY2025 total disclosed revenue to the Group's disclosed ~USD120m Everyday App investment component (excluding the ~USD55m Food-leadership component); explicitly labeled as an illustrative pro-rata construction, not a disclosed or approved Egypt budget line | Assumption (derived) | Low | DEC-004/ASM-006; Facts/Revenue.md (TLB-008 p.10, p.61, p.111) |

**Escalation note (resolved):** none of these six registered assumptions individually met the
"materially affects the plan's headline recommendation" bar on its own — each is a component
driver-tree leaf. `Scenarios.md`'s separate escalation flag regarding **which scenario (base/upside/
downside) becomes the plan's headline Section 9 case** was the one item `forecasting-agent` flagged for
full Decision Log treatment; see `Decision_Log/DEC-005_section9-headline-scenario.md` for its
resolution.

## Links
[[Forecasting_Layer]] · [[Scenarios]] · [[Facts/Revenue]] · [[Strategic/Cost Structure]] ·
[[Strategic/Customer Retention Drivers]] · [[Strategic/Strategic Risks]] ·
[[DEC-003_section2-governing-hypothesis]] · [[DEC-004_2026-investment-total]]
