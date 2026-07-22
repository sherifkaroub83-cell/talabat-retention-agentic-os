---
type: architecture
status: approved
created: "2026-07-21"
---

# Business Plan Generation Pipeline — 11 Stages

Task 8 of the OS Architecture Design Phase. This redesigns the *process* the `business-plan-drafting`
skill runs — the skill's 14-section content map (which vault notes feed which section) is unchanged
and still the reference for *what* goes in each section; this document defines *how* a section moves
from "requested" to "Done," closing the old flow's core weakness: it went straight from "gap
identified" to "write it anyway, labeled," with no resolution step in between.

Run by `bp-orchestrator`, per section, per `Agentic_OS_Architecture.md` §3.1's delegation map.

## The 11 stages

| # | Stage | Owner | Reads | Writes |
|---|---|---|---|---|
| 1 | **Intake & Scoping** | Orchestrator | `AI_Business_Plan_Template.md`, `business-plan-drafting` skill | Confirms section, required sub-bullets |
| 2 | **Evidence Assembly** | Orchestrator | `Knowledge/Facts`, `Topics`, `Strategic` per the skill's vault map | A working evidence list for the section |
| 3 | **Gap Detection** | Orchestrator | The assembled evidence vs. the template's required sub-bullets | Gap list, typed: external / forecast / decision |
| 4 | **External Research Resolution** | `research-agent` | `Research_Register.md` | Research Notes, register updates |
| 5 | **Forecast & Assumption Generation** | `forecasting-agent` | `Facts/`, `Strategic/Revenue Model.md` etc. | `Value_Driver_Tree.md`, `Scenarios.md` updates |
| 6 | **Decision Escalation** | `decision-steward` | All evidence tiers, open questions from stages 4–5 or 7 | `Decision_Log/DEC-XXX.md`, Assumptions Register rows |
| 7 | **Evidence Ranking & Conflict Resolution** | `evidence-citation-agent` | Competing evidence found in stages 2–5 | Ranked evidence set; escalations to stage 6 where needed |
| 8 | **Drafting (McKinsey Lens)** | Orchestrator | The resolved evidence + registered assumptions only | Section prose |
| 9 | **Citation Verification** | `evidence-citation-agent` | The draft | `Citation_Audit_Section_N.md` |
| 10 | **Cross-Section Consistency & KPI Alignment** | `kpi-agent` (financial/KPI sections) or Orchestrator (others) | Value Driver Tree, other section drafts | Consistency notes; `KPI_Tree.md` updates |
| 11 | **QA & Final Review** | `qa-review-agent` | The draft, the citation audit, the template | `QA_Review_Section_N.md`; flips status to ✅ |

## Gate rules

- **Stage 8 cannot start** while any gap typed in stage 3 as external/forecast/decision is still
  unresolved for that specific claim — a section may draft the parts it *can* fully evidence while a
  narrower gap is still in flight, but the specific claim depending on an open gap must wait.
- **Stage 11 is the only stage that can move a section to ✅ Done.** Stage 9 passing alone only
  earns 🟡 (drafted, needs verification) — matching the legend already defined in the Project
  tracker.
- **Section 1 (Executive Summary) skips stages 2–7 and 10** — it runs stage 1 (scoping: "have all 13
  other sections reached at least 🟡?"), then hands straight to `exec-summary-agent` for stage 8-
  equivalent synthesis, then stages 9 and 11 as normal.
- **A stage may report "not applicable"** for a given section (e.g. stage 5 Forecast Generation is
  not applicable to Section 11 CSR) — the Orchestrator records this explicitly rather than silently
  skipping, so the pipeline log shows every section actually passed through 11 stages, not that some
  were shortcut.

## Relationship to the old flow

The prior `business-plan-drafting` skill (pre-redesign) had, in effect, only stages 1, 2, 8-lite (draft
with inline "Caution:" flags), and a manual reread. It never had a mechanism to *resolve* a flagged
gap — only to flag it in prose and proceed. This pipeline doesn't remove that honesty (flagged gaps
are still flagged, in the Assumption Register's confidence column and in Decision records) — it adds
the four missing stages (4, 5, 6, 7) that let a flagged gap actually get resolved, ranked, or
escalated before the section is written, and two verification stages (9, 11) that didn't exist at
all before.

## Status

Design only — **no section has been run through this pipeline yet.** First execution begins in the
implementation roadmap's drafting phase, not during this architecture-design phase. See
[[Implementation_Roadmap]].

## See also
[[Agentic_OS_Architecture]] · [[Project Administration]]
