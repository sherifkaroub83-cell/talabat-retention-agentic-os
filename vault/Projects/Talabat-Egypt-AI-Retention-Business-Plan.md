---
type: project
status: active
owner: "Sherif Samy Karoub (G02)"
started: "2026-07-20"
updated: "2026-07-21"
---

# Project — Talabat Egypt AI Retention Business Plan

The G02 capstone deliverable: a 15–25 page **AI Business Plan** recommending AI-driven customer
retention for talabat Egypt, written to the GSB 14-section template v2.0 (McKinsey Edition),
grounded claim-by-claim in the `Input_Data/` corpus via `vault/Knowledge/`. Companion deliverables:
OS structure document (3–5 pp) and a 30-slide group presentation (5 slides × 6 members).

## Source of method
- **Specification:** [`AI_Business_Plan_Template.md`](../../AI_Business_Plan_Template.md) — verbatim
  copy of the graded 14-section template, kept in-repo
- **Drafting procedure:** `.claude/skills/business-plan-drafting/SKILL.md` — maps every section to
  the specific vault notes that already exist to feed it; now the content map for the 11-stage
  pipeline in [[Business_Plan_Generation_Pipeline]],
  run by the `bp-orchestrator` agent
- **Architecture:** [[Agentic_OS_Architecture]]
  — 8 agents, 6 new skills, and three evidence layers (`Decisions/`, `Research/`, `Forecasts/`) that
  resolve gaps instead of just flagging them; sequencing in
  [[Implementation_Roadmap]]
- **Process:** capstone guide's 5-phase pipeline (charter → OS → ingest → analyze/draft → finalize)
- **Overlay / standards:** McKinsey concepts (Pyramid, SCQA, MECE, hypothesis-driven, value driver
  tree); Three Horizons roadmap; 7S readiness; Second Brain governance guardrails

## Status
🟢 Charter **approved** (Dr. Hossam Daoud, 21/07/2026) · OS activated · corpus ingested and fully
linked (154 vault notes, 0 orphans) · **Agentic OS architecture designed** (21/07/2026 —
Decision/Research/Forecasting layers, 8 agents, 11-stage pipeline; see `vault/Architecture/`) ·
**Drafting has begun — 1 of 14 sections drafted and QA-passed (Section 3, Market Analysis, 2026-07-22,
first real end-to-end 11-stage pipeline run; QA pass was self-administered — see the checklist row's
caveat).** This is still the single largest remaining task on the project (40% of the grade). Next:
continue roadmap Phase 7 (Sections 2, 9, 10), and re-verify Section 3 with an independent QA pass once
the orchestrator has the `Agent` tool available.

## Open decisions (needed before/while drafting)
- [ ] Team role assignments (6 members / 5 defined roles — charter approved as-is; mapping still open)
- [ ] MCP integration: yes/no (distinction credit vs. fragility) — undecided, past its Phase 2 deadline
- [ ] Governing hypothesis wording for Section 2 ("We believe [AI retention intervention] will
      [impact] because [logic]") — not yet authored; see the skill's Section 2 notes for raw material
- [ ] Egypt market-size definition to adopt (IMARC online-food-delivery vs. Mordor foodservice
      vs. talabat's own disclosed Egypt segment financials, now available for FY2025 onward)
- [ ] How to handle the three documented internal discrepancies (Egypt category-share figure,
      the 2026 investment programme's three different totals, the Subscription revenue-line
      reclassification) — resolve against primary sources or footnote explicitly; do not pick
      silently (see the skill's "Known evidence gaps" section). **Egypt category-share leg: ✅
      resolved for Section 3 via [[DEC-001_egypt-category-share-figure]] (2026-07-22, approved —
      present both figures footnoted, use 4x+ for qualitative framing). The 2026 investment total
      and Subscription-line discrepancies remain open (belong to Sections 9/6).**
- [x] Egypt market-size definition to adopt for Section 3 — **resolved 2026-07-22 via
      [[DEC-002_egypt-market-size-definition]]** (approved): bottom-up = talabat's own disclosed
      Egypt segment revenue; top-down ceiling = Mordor total foodservice; IMARC's online-food-
      delivery figure cited only as a flagged, unreconciled lower-bound reference. Section 9 may
      need its own separate pass on this question for financial-plan purposes — this decision does
      not bind Section 9.

## 14-section checklist (GSB Template v2.0 — status against `AI_Business_Plan_Template.md`)

| # | Section | Status | Primary vault sources (see skill for full mapping) |
|---|---|---|---|
| 1 | Executive Summary (SCQA) | ⬜ Not started | Write last — depends on 2–13 |
| 2 | Business Description | ⬜ Not started | `Strategic/Current Pain Points.md`, `Strategic/How Talabat Creates Value.md` |
| 3 | Market Analysis | ✅ Done (self-reviewed) | `Topics/Egypt.md`, `Strategic/Competitive Advantages.md`, `Strategic/Competitive Weaknesses.md`, `Topics/Competition.md`, `Topics/UAE.md`, `Entities/Competitors.md`, `Facts/Competition_Facts.md`. Draft: [[Section_03_Market_Analysis]]. Pipeline artifacts: [[DEC-001_egypt-category-share-figure]], [[DEC-002_egypt-market-size-definition]], [[RES-001_egypt-named-competitors]]–[[RES-004_egypt-official-newsroom-operational-datapoints]], [[Citation_Audit_Section_03]], [[QA_Review_Section_03]]. Passed Stage 11 QA (Pass 1 only — self-administered by `bp-orchestrator`, no `Agent` tool available this session to invoke an independent `qa-review-agent` thread; see [[Agentic_OS_Architecture_v2]] Change 2). **Pass 2 (independent verification) required before submission-final** — a fresh, separately-invoked QA pass. Also pending: re-check hypothesis-traceability once Section 2 exists (QA Finding 2). |
| 4 | Value Proposition | ⬜ Not started | `Strategic/Customer Retention Drivers.md` |
| 5 | AI Technology and Development | ⬜ Not started | `Topics/AI.md`, `Entities/Technology_Platforms.md` |
| 6 | Business Model and Revenue Streams | ⬜ Not started | `Strategic/Revenue Model.md`, `Facts/Revenue.md` |
| 7 | Marketing and Sales Strategy | ⬜ Not started | `Topics/Customer Journey.md`, `Topics/Promotions.md` (funnel data is a known gap) |
| 8 | Operations Plan | ⬜ Not started | `Strategic/Decision-Making Process.md` (7S check is net-new synthesis) |
| 9 | Financial Plan | ⬜ Not started | `Topics/Financial Performance.md`, `Topics/Segment Reporting.md` |
| 10 | Risk Analysis | ⬜ Not started | `Strategic/Strategic Risks.md`, `Strategic/Competitive Weaknesses.md` |
| 11 | CSR & Responsible AI | ⬜ Not started | Thinnest vault coverage — mostly net-new authoring |
| 12 | Implementation Plan (Three Horizons) | ⬜ Not started | `Strategic/AI Opportunities.md` (H1) vs. `Strategic/Future AI Opportunities.md` (H2/H3) |
| 13 | Monitoring and Evaluation (KPIs) | ⬜ Not started | `Strategic/Customer Retention Drivers.md` (no churn baseline exists — known gap) |
| 14 | Appendices + traceability note | ⬜ Not started | `vault/MOC/Source Register.md` — mechanically closest to ready |

**Legend:** ✅ Done (independently verified — Pass 2 QA by a separately-invoked agent thread) ·
✅ Done (self-reviewed — Pass 1 only, see [[Agentic_OS_Architecture_v2]] Change 2) ·
🟡 Drafted, needs verification · ⬜ Not started

## Plan of attack
(Now formalized as roadmap Phases 6–10 in `vault/Architecture/Implementation_Roadmap.md`.)
1. ~~Submit charter → approval~~ ✅ Approved 21/07/2026
2. Assign roles among the 6 members; close the MCP decision
3. ~~Collect + ingest corpus~~ ✅ Done — 29 docs, fully linked knowledge base
4. ~~Design the Agentic OS architecture~~ ✅ Done 21/07/2026 (OS Architecture Design Phase) — Decision/Research/Forecast
   layers, 8 agents, 11-stage pipeline; see `vault/Architecture/`
5. **Phase 7 (next):** run the pipeline on Sections 2, 3, 9, 10 first (hypothesis, market,
   financials, risk — the sections everything else depends on) via `bp-orchestrator`, on branch
   `feature/bp-pilot-sections`
6. Phase 8: draft the remaining sections (4–8, 11, 12, 14)
7. Phase 9: write the Executive Summary last (gated on all 13 others); whole-plan McKinsey Lens
   pressure test against `AI_Business_Plan_Template.md`; compile the traceability note
8. Phase 10: export to `Outputs/`; write the OS structure document; build the presentation deck;
   upload to Moodle

## Links
- [[MOC-Second-Brain]] · [[Talabat MOC]] · [[Project Administration]] · [[user]] · [[identity]]
