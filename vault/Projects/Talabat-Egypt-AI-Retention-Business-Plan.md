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
**Architecture Version 2 shipped, evidence-based, 22/07/2026** (Phase 8; see
[[Agentic_OS_Architecture_v2]]) · **Operational validation ongoing (Pilot Validation Plan, 22/07/2026):
Pilots 1–3 complete — 3 of 14 sections drafted, all now Done (Sections 2 and 9 independently verified;
Section 3 self-reviewed + independently re-verified on one point). Pilot 3 (Section 9, Financial Plan)
was the first real test of the Forecast Layer — `forecasting-agent` and `kpi-agent` both ran for the
first time, building the Value Driver Tree, three scenarios, and the KPI Tree from empty scaffolds.
Independent QA review issued a genuine FAIL on first pass (two template-completeness gaps — no
forecasted revenue figure, no P&L projection), which were fixed and independently re-verified — the
project's first real fail/fix/re-verify cycle, proving the two-pass discipline catches real defects, not
just rubber-stamps drafts.** This is still the single largest remaining task on the project (40% of the
grade). Next: Pilot 4 (Section 10, Risk Analysis — deliberate two-pass QA comparison), per
[[Pilot_Validation_Plan]].

## Open decisions (needed before/while drafting)
- [ ] Team role assignments (6 members / 5 defined roles — charter approved as-is; mapping still open)
- [ ] MCP integration: yes/no (distinction credit vs. fragility) — undecided, past its Phase 2 deadline
- [x] Governing hypothesis wording for Section 2 — **resolved 2026-07-22 via
      [[DEC-003_section2-governing-hypothesis]]** (approved): the plan commits to **extending
      talabat's already-announced Group AI roadmap into Egypt** (new recommendation form factors,
      cross-sell timing/incentive optimisation, deepened adtech-embedded personalisation), not the
      net-new churn-prediction build or the subscription-uplift-only framing also drafted as
      candidates. `decision-steward`, running as a subagent, correctly judged this a genuine strategic
      framing choice requiring escalation and attempted `AskUserQuestion` — which is **not available
      inside a spawned subagent thread**, a hard tool error, not a silent skip. It refused to infer or
      default an answer and preserved the escalation prompt verbatim for the top-level session. The
      top-level session then ran that exact prompt via a real `AskUserQuestion` call and got a genuine
      user answer. Confirms the same runtime constraint identified in Phase 7 (`Agent`/`WebSearch`/
      `WebFetch` unavailable to subagents) extends to `AskUserQuestion` — see Pilot 2 execution report.
      Assumption Register row ASM-005 is `Approved`. Sections 4, 5, 9, 12, 13 must stay consistent with
      this intervention/causal-claim/scope per DEC-003's Impact section.
- [ ] Egypt market-size definition to adopt (IMARC online-food-delivery vs. Mordor foodservice
      vs. talabat's own disclosed Egypt segment financials, now available for FY2025 onward)
- [x] How to handle the three documented internal discrepancies (Egypt category-share figure,
      the 2026 investment programme's three different totals, the Subscription revenue-line
      reclassification) — resolve against primary sources or footnote explicitly; do not pick
      silently (see the skill's "Known evidence gaps" section). **Egypt category-share leg: ✅
      resolved for Section 3 via [[DEC-001_egypt-category-share-figure]] (2026-07-22, approved —
      present both figures footnoted, use 4x+ for qualitative framing). 2026 investment-total leg:
      ✅ resolved for Section 9 via [[DEC-004_2026-investment-total]] (2026-07-22, approved) — this
      one turned out to be genuinely reconcilable, not a true three-way conflict: TLB-020 itself
      decomposes its Board-approved USD175mn total into ~USD120mn Everyday App + ~USD55mn
      Food-leadership (55+120=175, exact match, disclosed by the source), with TLB-019's earlier
      ">USD100mn" treated as an earlier, lower-precision cut of the Everyday App component (a stated,
      Medium-confidence inference, kept separate from the High-confidence arithmetic). The
      Subscription-line reclassification remains open (belongs to Section 6, not yet piloted).**
- [x] Section 9's headline scenario framing (base/upside/downside) — **resolved 2026-07-22 via
      [[DEC-005_section9-headline-scenario]]** (approved): base case is the headline financial
      baseline (no intervention credit), the upside case is presented as the DEC-003 investment's
      projected return/delta (not a competing central estimate, Low confidence retained), downside is
      a named risk case, not implied equally likely to the base case. Judged a data-presentation/
      methodology call within `decision-steward`'s own authority (same class as DEC-001/002/004) —
      independently reviewed and concurred with by a separately-invoked `qa-review-agent` thread
      during Section 9's Stage 11 QA.
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
| 2 | Business Description | ✅ Done (independently verified) | `Strategic/Current Pain Points.md`, `Strategic/How Talabat Creates Value.md`, `Strategic/AI Opportunities.md`, `Strategic/Future AI Opportunities.md`, `Topics/Growth Strategy.md`, `MOC/Market Intelligence MOC.md`. Draft: [[Section_02_Business_Description]]. Pipeline artifacts: [[DEC-003_section2-governing-hypothesis]] (governing hypothesis, user-confirmed via a real top-level `AskUserQuestion` call), [[Citation_Audit_Section_02]], [[QA_Review_Section_02]]. First section drafted entirely under Architecture v2's top-level-invoked-specialist pattern (Pilot 2, [[Pilot_Validation_Plan]]) — `decision-steward`, `evidence-citation-agent`, and `qa-review-agent` were each invoked directly, not nested in `bp-orchestrator`. Passed Stage 11 QA by a **genuinely separately-invoked** `qa-review-agent` thread with no access to the drafting session's reasoning — the first true Pass 2-equivalent independent review in this project. That review also caught and drove the fix of a real cross-section inconsistency in Section 3 (see row 3). |
| 3 | Market Analysis | ✅ Done (self-reviewed + independently re-verified on one point) | `Topics/Egypt.md`, `Strategic/Competitive Advantages.md`, `Strategic/Competitive Weaknesses.md`, `Topics/Competition.md`, `Topics/UAE.md`, `Entities/Competitors.md`, `Facts/Competition_Facts.md`. Draft: [[Section_03_Market_Analysis]]. Pipeline artifacts: [[DEC-001_egypt-category-share-figure]], [[DEC-002_egypt-market-size-definition]], [[RES-001_egypt-named-competitors]]–[[RES-004_egypt-official-newsroom-operational-datapoints]], [[Citation_Audit_Section_03]], [[QA_Review_Section_03]]. Original Stage 11 QA (Pilot 1) was self-administered by `bp-orchestrator` — see [[Agentic_OS_Architecture_v2]] Change 2. **Pilot 2 update (2026-07-22):** Section 2's independent QA review resolved the prior review's own open Finding 2 and caught a real, hard-blocking defect — §3.3's GEMs-analogy bullet had drifted into DEC-003's *unchosen* churn/win-back framing (Option 1) instead of the user-confirmed roadmap-extension framing (Option 2). Fixed, then independently re-verified by a fresh `qa-review-agent` thread (addendum in [[QA_Review_Section_03]]) — PASS, no remaining churn/win-back framing anywhere in the section. This is the pilot's key proof point: independent review caught something self-review structurally could not have (Section 2 didn't exist yet when Section 3 was first reviewed). |
| 4 | Value Proposition | ⬜ Not started | `Strategic/Customer Retention Drivers.md` |
| 5 | AI Technology and Development | ⬜ Not started | `Topics/AI.md`, `Entities/Technology_Platforms.md` |
| 6 | Business Model and Revenue Streams | ⬜ Not started | `Strategic/Revenue Model.md`, `Facts/Revenue.md` |
| 7 | Marketing and Sales Strategy | ⬜ Not started | `Topics/Customer Journey.md`, `Topics/Promotions.md` (funnel data is a known gap) |
| 8 | Operations Plan | ⬜ Not started | `Strategic/Decision-Making Process.md` (7S check is net-new synthesis) |
| 9 | Financial Plan | ✅ Done (independently verified) | `Topics/Financial Performance.md`, `Topics/Segment Reporting.md`, `Strategic/Cost Structure.md`, `Strategic/Growth Drivers.md`, `Strategic/Customer Retention Drivers.md`. Draft: [[Section_09_Financial_Plan]]. First section built on the Forecast Layer — [[Value_Driver_Tree]] and [[Scenarios]] (`forecasting-agent`, first real use) and [[KPI_Tree]] (`kpi-agent`, first real use), all invoked top-level. Pipeline artifacts: [[DEC-004_2026-investment-total]] (2026-investment-total reconciliation), [[DEC-005_section9-headline-scenario]] (scenario framing), `ASM-006`–`ASM-012`, [[Citation_Audit_Section_09]], [[QA_Review_Section_09]]. **Genuinely independent Stage 11 QA issued a real FAIL on first pass** (two template-completeness gaps: no forecasted revenue figure, no P&L projection) — fixed from Approved-tier components already on hand, then independently re-verified by a fresh `qa-review-agent` thread (addendum in [[QA_Review_Section_09]]) — PASS. The project's first fail/fix/re-verify cycle, proving independent QA catches real gaps rather than rubber-stamping. |
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
