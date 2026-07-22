---
section: 5
title: AI Technology and Development
status: drafted — pending citation verification and QA (pipeline stage 9/11)
pipeline_run: 2026-07-22
---

# 5. AI Technology and Development

> **Pipeline provenance note:** drafted directly by the top-level session acting as `bp-orchestrator`'s
> Stage 8 role, Phase 8 of the roadmap. Per `.claude/skills/business-plan-drafting/SKILL.md`'s own
> caution for this section: this project's own MCP-integration decision remains undecided (see
> `MEMORY.md`) — this section does not fabricate an MCP story for talabat's technology stack as a
> result; it describes what the corpus actually discloses about talabat's AI tooling, honestly, and
> states plainly where the corpus is silent rather than inventing detail. This is a working draft in
> `vault/Projects/`, not yet promoted to `Outputs/`.

## Answer, stated first

talabat does not need new AI technology to execute this plan — it needs to point technology it already
owns, has already partly shipped, and already funds (`DEC-004`'s ~USD120mn Everyday App envelope) at
Egypt specifically. The build/buy/partner decision this section works through is not "build vs. buy" in
the conventional sense; talabat's own history already answers that question (partner with Delivery Hero
for shared infrastructure, build proprietary personalisation on top). The live decision for this plan is
narrower: **redeploy the existing owned capability to Egypt, versus building a new Egypt-specific
capability, versus licensing a third-party vendor** — and redeployment wins decisively on cost and speed,
which is precisely what `DEC-003` already committed the plan to.

---

## 5.1 Description of AI Technology

talabat's AI/ML capability is a horizontal layer spanning four disclosed application areas, not a single
model: **customer-facing personalisation** (recommendations and loyalty-offer timing), **logistics**
(predictive dispatch, dynamic route optimisation), **advertising** (AI-driven ad-targeting, automated
ad-buying), and **internal operations** (invoice matching, sales-lead qualification, fraud detection) —
TLB-001, page 10, 13, 22–23; TLB-002, page 15–16. The corpus does not name specific model architectures
(no disclosed reference to LLMs, transformer models, or computer vision specifically) — every disclosed
AI application is a machine-learning / recommendation-ranking system, and this section does not overstate
the corpus by inventing model-architecture detail it does not disclose.

**Data scale:** talabat processes over 235 terabytes of data daily as of FY2025 (TLB-002, page 16), up
from ~13 terabytes/day as of mid-2024 (TLB-015) — an order-of-magnitude growth in the underlying data
pipeline in roughly a year, the clearest disclosed evidence of the platform's technical scaling
trajectory.

**The mechanism this plan's governing hypothesis depends on** (per `DEC-003`) is the proprietary
personalisation/ranking algorithm: it activates after approximately six orders from a given customer
(TLB-001, page 22–23; TLB-026), has evolved from cuisine-level to item-level recommendation granularity
(the "Meal for One" example, TLB-002, page 15), and is the same model that decides when to surface a
talabat pro or talabat Rewards offer (TLB-023, page 8) and which vertical to cross-sell (TLB-026,
page 121).

## 5.2 Build / Buy / Partner Decision — Structured Options Analysis

talabat's own disclosed history is a hybrid: the **foundational infrastructure is partnered** (licensed
from parent Delivery Hero SE — dispatch algorithms, real-time GPS tracking, back-end solutions,
TLB-001/TLB-026), while the **personalisation/ranking layer on top is proprietary and talabat-built**
(`Entities/Technology_Platforms.md`). This plan does not revisit that historical choice — it is a
disclosed fact, not a decision this capstone is making. The live decision, per this plan's governing
hypothesis, is how to bring that already-built layer to Egypt specifically:

| Option | Cost | Speed | Capability | Data confidentiality |
|---|---|---|---|---|
| **A — Redeploy existing owned capability to Egypt** (this plan's chosen path, per `DEC-003`) | Low — no new model development; the personalisation algorithm, dispatch logic, and adtech targeting already exist and are already funded within the ~USD120mn Everyday App envelope (`DEC-004`) | Fast — infrastructure to run it already exists in Egypt (largest MENA q-commerce distribution centre with in-house AI demand forecasting; a 1,500-person Global Tech & Shared Services hub delivering 74% of shared services and 30% of app features Group-wide, `ASM-004`) | Proven at Group level (the only directly quantified AI-EBITDA trail in the corpus, $14mn+→$30mn+ FY24→FY25) but **not yet confirmed to perform equivalently on Egypt's population** — the exact risk `Section_10_Risk_Analysis.md` names as Model Transfer Risk | High — no new third-party data-sharing relationship required; data stays within talabat/Delivery Hero's existing infrastructure |
| **B — Build a new, Egypt-specific AI capability from scratch** | High — new model development, new training data pipeline, no existing EBITDA trail to build a business case on | Slow — no disclosed talabat precedent for building a market-specific model from zero | Unknown — untested, no corpus evidence either way | High, same as Option A |
| **C — License/partner with a new third-party AI vendor for Egypt** | Medium-to-high — new vendor relationship, new integration cost, ongoing licensing fees not currently incurred | Medium — vendor onboarding and integration typically slower than redeploying an internal system already running elsewhere | Vendor-dependent, unproven for talabat's specific use case | Lower — introduces a new external party with access to Egypt customer/order data, a genuine confidentiality and governance question the corpus gives no basis to evaluate |

**Decision: Option A.** This is not a new judgment call this section is making independently — it is the
direct technical consequence of `DEC-003`'s already-user-confirmed governing hypothesis (extend the
Group AI roadmap into Egypt, not build a new capability or license one). This section's contribution is
showing *why* that choice wins on the template's own required criteria (cost, speed, capability, data
confidentiality), not re-litigating the choice itself.

## 5.3 Proprietary Algorithms, Data Models

The corpus discloses one clearly proprietary, talabat-owned algorithm relevant to this plan: the
**personalisation/ranking algorithm** (`Entities/Technology_Platforms.md`), distinct from the
Delivery-Hero-licensed dispatch/logistics stack. No patent is disclosed anywhere in the corpus — this
section does not assert one exists. The algorithm's proprietary status is evidenced structurally (it is
described as talabat's own ML system, separately from the explicitly-licensed Delivery Hero
infrastructure) rather than through any IP filing disclosed in the corpus.

## 5.4 Infrastructure and Tools

**Cloud/data infrastructure:** the corpus does not name a specific cloud platform (no disclosed reference
to AWS, Azure, or GCP specifically) — only the scale of data processed (235TB/day) and the shared
Delivery Hero technology stack it runs on. This section does not invent a specific vendor the corpus
does not disclose.

**Egypt-specific infrastructure already in place** (directly relevant to Option A's speed/cost
advantage): the largest quick-commerce distribution centre in MENA (Cairo–Suez Road, ~27,000 sqm, up to
1 million items/day, running in-house AI demand forecasting and stock-positioning models — `ASM-004`,
official newsroom source, explicitly labeled outside the audited primary corpus per its own citation
discipline) and the 1,500-person Global Tech & Shared Services hub.

**Agentic tooling / MCP:** the corpus discloses no reference to Model Context Protocol, agentic
frameworks, or LLM-based tooling anywhere in talabat's own disclosed technology stack — every disclosed
AI application is a conventional ML/ranking system, not an agentic architecture. This plan's own
recommendation (Option A) does not require introducing agentic tooling to deliver value; it is a scope
question genuinely outside what this capstone's evidence base can responsibly speak to, and per this
project's own standing note, is left honestly unaddressed rather than fabricated.

## 5.5 Scalability and Adaptability

The 235TB/day data-processing figure (up from ~13TB/day in roughly a year) is the strongest disclosed
evidence of the platform's demonstrated ability to scale — this is a Group-wide, not Egypt-specific,
trend, but it directly supports Option A's core premise: the infrastructure has already absorbed an
order-of-magnitude data-volume increase without a disclosed capability failure, which is relevant
evidence (not proof) that adding Egypt's incremental volume is a scaling problem the platform has already
solved for, not one it would face for the first time. Adaptability specifically for Egypt (currency,
language, local behavior patterns) is not addressed anywhere in the corpus — flagged as a genuine open
item for Section 12's implementation planning, not resolved here.

## 5.6 Research and Development Plans

talabat has itself named three forward AI roadmap items, all Group-level and none yet Egypt-attributed
(`Strategic/AI Opportunities.md`): **new-form-factor recommendations** (TLB-015, page 89, content
unspecified in the corpus), **cross-sell timing/incentive optimisation** (same source), and **deepened
adtech-embedded personalisation** ("particularly within our rapidly growing adtech business," TLB-002,
page 10). These three items are, respectively, Mechanisms 1, 2, and 3 of
[[Section_04_Value_Proposition|Section 4]]'s value creation argument — this plan's R&D "ask" is not a
new research agenda, it is prioritizing Egypt in the sequencing of an R&D roadmap talabat has already
disclosed.

---

## Traceability summary (for Appendix/Section 14 use)

| Claim class | Resolved via | Status |
|---|---|---|
| AI technology description (4 application areas, data scale) | `Topics/AI.md`, TLB-001 p.10/13/22-23, TLB-002 p.15-16 | Direct citation |
| Build/buy/partner options analysis | `DEC-003_section2-governing-hypothesis`, `DEC-004_2026-investment-total`, `ASM-004`; Option A chosen as the direct consequence of DEC-003, not re-litigated | Structural analysis, cited per-cell above |
| Proprietary algorithm | `Entities/Technology_Platforms.md` | Direct citation; no patent claim asserted |
| Infrastructure/tools, incl. MCP | `ASM-004`; MCP/agentic tooling explicitly stated as undisclosed in the corpus, not fabricated | Direct citation + explicit gap statement |
| Scalability | TLB-002 p.16, TLB-015 (13TB/day) | Direct citation, Group-level |
| R&D plans | `Strategic/AI Opportunities.md`; cross-referenced to [[Section_04_Value_Proposition|Section 4]]'s three mechanisms | Direct citation, no new claim |

## Links
- [[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]]
- [[Section_02_Business_Description]] · [[Section_04_Value_Proposition]] · [[Section_10_Risk_Analysis]]
- [[DEC-003_section2-governing-hypothesis]] · [[DEC-004_2026-investment-total]]
- [[Business_Plan_Generation_Pipeline]]
