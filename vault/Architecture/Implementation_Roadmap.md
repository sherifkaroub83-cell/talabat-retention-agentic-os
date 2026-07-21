---
type: architecture
status: proposed
created: "2026-07-21"
---

# Implementation Roadmap — OS Architecture Design Phase → Finished Business Plan

Task 11 of the OS Architecture Design Phase. Phases below extend the capstone's own five-phase
structure (`PROJECT_PROGRESS.md`) — everything here sits inside **Phase 4 — Analysis & Business
Plan**, broken into buildable, git-branch-scoped increments.

| Phase | Objective | Deliverables | Dependencies | Completion criteria | Git branch | Expected outputs |
|---|---|---|---|---|---|---|
| **6 — OS Architecture Design** *(this document's own phase — complete)* | Design the Decision/Research/Forecast layers and the 11-stage pipeline before any drafting | `vault/Architecture/*.md` (5 docs), 8 agent files, 6 new/redesigned skills, 3 scaffolded vault layers | Phase 3 (ingestion + semantic layer) | All 12 OS Architecture Design Phase tasks delivered; user reviews and merges | `feature/agentic-os-architecture` | This document and its companions |
| **7 — Pilot Drafting (load-bearing sections)** | Run the 11-stage pipeline end to end on the 4 sections everything else depends on: Business Description (2), Market Analysis (3), Financial Plan (9), Risk Analysis (10) | 4 section drafts + their Citation Audit and QA Review reports; first real entries in `Assumptions_Register.md`, `Decision_Log/`, `Research_Register.md`, `Value_Driver_Tree.md` | Phase 6 merged to `main` | All 4 sections reach ✅ Done (passed QA); at least one real Decision Log entry exists resolving a known discrepancy (Egypt category-share, the 2026 investment total, or the Subscription reclassification) | `feature/bp-pilot-sections` | Draft content in the Project tracker; populated Decisions/Research/Forecasts layers |
| **8 — Remaining Section Drafting** | Sections 4–8, 11, 12, 14 (all sections not in the Phase 7 pilot, excluding Section 1) | 9 section drafts + reports | Phase 7 (reuses its now-populated Assumption Register/Decision Log where sections overlap, e.g. Section 4 and 13 share value mechanisms with Section 9) | All 13 non-Section-1 sections ✅ Done | `feature/bp-remaining-sections` | Draft content for Sections 4-8, 11, 12, 14 |
| **9 — Executive Summary, Cross-Section QA, Traceability** | Run `exec-summary-agent` (gated on Phase 8 completion); run a whole-plan consistency pass; compile the Appendix traceability note | Section 1 draft; whole-plan QA pass; `Outputs/Traceability_Note.md` | Phase 8 complete (all 13 sections ≥ 🟡) | Section 1 ✅ Done; traceability note covers every claim → note → source | `feature/bp-executive-summary` | `Outputs/` draft of the full 14-section plan |
| **10 — Finalize & Export** | Style/format pass to PDF or Word, 15–25 page target; OS structure document (3–5 pp); 30-slide group deck (5 × 6 members) | `Outputs/AI_Business_Plan.pdf` (or .docx), `Outputs/OS_Structure_Document.md`, `Outputs/Presentation_Deck.md` (or slide export) | Phase 9 complete | All three artifacts exported to `Outputs/`; matches capstone Phase 5 exit criteria | `feature/finalize-deliverables` | Final graded submission set |

## Sequencing rationale

- **Phase 7 before Phase 8, not all-at-once:** Sections 2/3/9/10 are the ones the drafting skill's
  existing "Plan of attack" already names as load-bearing (hypothesis, market, financials, risk).
  Running the full pipeline on these first means the Decisions/Research/Forecasts layers get
  populated with the highest-value entries early (e.g. the Value Driver Tree, built for Section 9,
  is directly reused by Sections 4, 12, and 13 later) — later phases move faster because the hardest
  ambiguities were resolved first, not deferred.
- **Section 1 is structurally last (Phase 9), never earlier** — this isn't a scheduling choice, it's
  the `exec-summary-agent`'s hard gate (§3.7 of `Agentic_OS_Architecture.md`).
- **Each phase is its own branch**, following the project's established convention (see the
  Obsidian Graph Cleanup and prior merges in `SESSION_LOG.md`) — merge to `main` only after the user
  reviews, consistent with the standing "propose-then-approve" rule for anything non-trivial.

## Deliverable coverage gap — OS Structure Document & Group Presentation

The 8-agent pipeline above (`bp-orchestrator` and its seven specialists) is scoped entirely to the
**AI Business Plan**. The Guide's other two required deliverables (§6: OS Structure, Presentation)
have no agent or skill coverage anywhere in this design — a gap this section closes at the planning
level only. **No content for either deliverable is produced by this section; nothing here builds
them.**

| Deliverable | Owner | Required inputs | Expected outputs | Completion criteria |
|---|---|---|---|---|
| **OS Structure Document** (Guide §6, Deliverable 1) | OS owner, assisted by a new `os-structure-authoring` skill — **planned, not yet built**, scoped for Phase 10 | [[Agentic_OS_Architecture]] (six-component mapping); `MEMORY.md` (LLM/MCP decisions + rationale); `CLAUDE.md` (governance guardrails); the Decision Log once populated (what was adapted from ProjectX and why) | `Outputs/OS_Structure_Document.md` (or `.pdf`), 3–5 pages | Matches Guide §6 Deliverable 1 exactly: covers all six components (Brain, Memory, Agents, Skills, MCP, LLMs), what was adapted from ProjectX and why, LLM/MCP decisions with rationale, governance guardrails in force; confirms the corpus's public/non-confidential status per `_CORPUS_INDEX.md` |
| **Group Presentation** (Guide §6, Deliverable 3) | OS owner + all 6 team members — each member owns their own 5 slides; no single agent can own this, since it must reflect real, individually-attributable role work, not AI-generated summary | The finished AI Business Plan (Phase 9 output); each member's actual assigned role (currently blocked — see "Team role assignments" in the Project tracker's Open Decisions); the OS Structure Document (sibling deliverable above) | `Outputs/Presentation_Deck.pdf`, 30 slides (5 × 6 members) | Matches Guide §6 Deliverable 3 exactly: one coherent story across problem → OS built → data revealed → core recommendation → next steps; every member's 5 slides map to their actual assigned role; every member can defend any part of the project in live Q&A |

**Dependency callout:** the Presentation deliverable is *structurally* blocked on the still-open
"assign roles among the 6 members" decision (Project tracker, Open Decisions) — not just an
individual-contribution scoring risk, but a literal input this table can't otherwise fill in.

## What the OS Architecture Design Phase (this document) explicitly does NOT include

Per the user's explicit instruction governing this entire design effort: **no Business Plan section
has been drafted, no Assumption has been registered, no Decision has been logged, and no Research
item has been resolved.** All layers built in this phase (`vault/Decisions/`, `vault/Research/`,
`vault/Forecasts/`) are scaffolded and empty by design — populating them is Phase 7's job, not this
one's. `vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md`'s checklist remains 0/14.

## See also
[[Agentic_OS_Architecture]] · [[Project Administration]]
