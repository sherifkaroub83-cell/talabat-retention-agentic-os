---
section: 5
title: AI Technology and Development
status: Drafted — self-reviewed, not yet independently verified
pipeline_run: 2026-07-23
supersedes_note: "Companion to (not a replacement of) vault/Projects/Business_Plan_Drafts/Section_05_AI_Technology_and_Development.md (superseded Egypt-retention draft, untouched). Fresh draft for the 2026-07-23 pivot."
---

# 5. AI Technology and Development

> **Pipeline provenance note:** Phase 9 pilot draft. Evidence from `Topics/AI.md`,
> `Topics/Recommendation Systems.md`, `Entities/Technology_Platforms.md`, `Strategic/AI
> Opportunities.md`, and `vault/Knowledge/Investment_Relationship_Map.md` N-06, per
> `.claude/skills/business-plan-drafting/SKILL.md`'s remapped Section 5 entry. Two distinct AI
> technologies are in scope here and kept explicitly separate throughout: (1) talabat's own embedded
> AI/personalisation capability, which the 2026 investment programme scales, and (2) the AI-enabled
> decision-support system this plan itself proposes for ranking and monitoring the programme's
> allocation — this OS. Per the remapped content map's caution, no "AI budget" figure is invented for
> either — N-06 is explicitly not a discrete dollar line in either bucket. **Pass 1, self-reviewed** —
> independent citation audit and QA still required.

## Answer, stated first

talabat does not need to build a new AI capability to execute this plan's core recommendation — the
customer-facing AI capability (recommendation ranking, offer timing, dispatch optimisation) it will
scale via the 2026 investment programme is already built, licensed, and generating a disclosed,
growing EBITDA contribution (>USD14mn FY2024 → >USD30mn FY2025). What this plan adds is a second,
distinct AI-enabled capability that talabat does *not* yet disclose having: a structured
decision-support layer for ranking and monitoring how the investment programme itself gets allocated.
This section describes both, keeps them clearly separate, and does not invent a budget figure for
either that the corpus doesn't disclose.

## 5.1 Description of AI Technology

**talabat's embedded AI (scaled by the investment programme):** machine-learning-driven personalisation
(item-level and cuisine-level recommendation ranking), offer/promotion timing (triggering talabat pro
and Rewards offers), and logistics dispatch optimisation — described in the corpus as producing
"AI-driven logistics improvements" credited with delivery-time and cost-efficiency gains (TLB-001, page
10) and personalisation credited with timing loyalty offers "at the right time for customers"
(`Topics/AI.md`; `Topics/Recommendation Systems.md`).

**This plan's decision-support AI (the Agentic OS):** a structured, multi-agent system that assembles
disclosed evidence, ranks candidate Investment Options against explicit criteria
(`vault/Architecture/Decision_Management_Layer.md`), builds range-bound financial scenarios rather than
point forecasts, and maintains a monitored KPI tree — the system that produced this plan's own
`OPT-001`–`005`, `DEC-009`, `Value_Driver_Tree_v2.md`, and `KPI_Tree_v2.md` artifacts. This is a
decision-support tool, not a customer-facing product — its output requires human approval before any
capital moves (see Section 11).

## 5.2 Build / Buy / Partner Decision — Structured Options Analysis

**talabat's embedded AI capability:** already a **partner** arrangement — talabat's technology stack is
licensed from Delivery Hero SE (`Entities/Technology_Platforms.md`), the parent company, giving talabat
access to Group-level AI capability without a standalone build. The 2026 investment programme's
Everyday App opex allocation (~USD75mn) funds *scaling* this existing capability (more markets, more
inventory, deeper personalisation), not building a new one from scratch — the build/buy/partner
decision for the underlying technology was effectively made before this programme existed, and this
plan does not propose revisiting it.

**Decision-support AI (this plan's own recommendation):** a **build** decision, made implicitly by
producing this plan — the alternative (buy a third-party capital-allocation/portfolio-management
platform, or partner with an external analytics firm) was not evaluated against real criteria here,
since the underlying task (ranking a small number of options against a disclosed, bounded corpus) does
not require the scale or generality a purchased platform would offer. This is a reasoned, if narrow,
build decision — not evidenced by a formal criteria comparison, and should be revisited if the
programme's evaluation scope grows materially beyond the current five candidate options.

## 5.3 Proprietary Algorithms, Data Models

No proprietary algorithm or patent is disclosed anywhere in the corpus for talabat's embedded AI
capability — it is described functionally (what it does: ranking, timing, dispatch), not
architecturally (`Topics/AI.md`'s Open Questions). This plan's decision-support system is not a novel
algorithm either — it is a structured evidence-ranking and citation-traceability *process*
(`vault/Architecture/Decision_Management_Layer.md`'s 11-criterion framework;
`vault/Architecture/Geographic_Evidence_Rules.md`'s tagging discipline), not a proprietary model. Neither
technology in scope here claims IP this plan can quantify or protect.

## 5.4 Infrastructure and Tools

talabat's own infrastructure is not itemized in the corpus beyond the Delivery Hero licensing
relationship. This plan's decision-support system runs on Claude Code / Cowork (documented in
`MEMORY.md`'s LLM decision log), with the vault-based knowledge/decision/forecast architecture described
throughout `vault/Architecture/`. **MCP note:** this project's own MCP integration decision remains
undecided (`MEMORY.md`) — this section describes the OS's actual tooling (agentic subagents invoked via
the pipeline in `Business_Plan_Generation_Pipeline.md`) honestly, without fabricating an MCP story.

## 5.5 Scalability and Adaptability

talabat's embedded AI capability has already demonstrated multi-market scalability (live across 7 of 8
countries for talabat pro personalisation by end-2024) — the investment programme's opex allocation
extends this further, not builds new scalability. This plan's own decision-support system is currently
scoped to five candidate Investment Options and six pilot Business Plan sections — genuinely narrow. Its
adaptability is structural, not yet demonstrated at scale: the same Investment Option schema, 11-criterion
comparison, and Geographic Evidence Rules discipline would extend to additional candidate initiatives or
future investment programmes without a redesign, but this has not been tested against a larger option set.

## 5.6 Research and Development Plans

For talabat's embedded AI: `Strategic/AI Opportunities.md` names talabat's own stated Group roadmap items
(evidenced intent) — this plan does not add new customer-facing AI R&D beyond what talabat has already
disclosed, since the programme's opex allocation is described as scaling, not inventing, capability. For
this plan's decision-support system: the two largest open R&D items are (1) resolving `DEC-009`'s
cross-market allocation question (problem 3 in Section 2.2) as better country-level evidence becomes
available, and (2) instrumenting the KPI Tree's Governance family (currently 7/7 newly-instrumented KPIs
with no baseline) so future allocation rounds can be evaluated against real performance data rather than
constructed ranges alone.

---

## Traceability (partial — full table due at Section 14)

| Claim | Source |
|---|---|
| AI-driven logistics improvements credited with delivery-time/cost gains | TLB-001, page 10 |
| talabat's stack licensed from Delivery Hero SE | `Entities/Technology_Platforms.md` |
| AI/personalisation EBITDA contribution USD14mn+→30mn+ | `Topics/EBITDA.md`; N-06 |
| N-06 not a discrete dollar line in either bucket | `Investment_Relationship_Map.md` |
| talabat pro live in 7/8 countries by end-2024 | TLB-001, page 11-12 |
| MCP decision undecided | `MEMORY.md` |

## See also
[[Section_02_Business_Description]] · [[Section_04_Value_Proposition]] · [[Investment_Relationship_Map]]
