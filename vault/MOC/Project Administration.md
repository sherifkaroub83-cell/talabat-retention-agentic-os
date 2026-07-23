---
type: moc
title: Project Administration
updated: "2026-07-21"
---

# 🗺️ Project Administration

Capstone project-management content — team, milestones, decisions. Distinct from [[Talabat MOC]] (the business knowledge itself).

## Inside the vault
- [[Talabat-Group-AI-Investment-Allocation-Business-Plan]] — the active capstone deliverable tracker
  (post-2026-07-23 pivot; open decisions, plan of attack)
- [[Talabat-Egypt-AI-Retention-Business-Plan]] — the superseded predecessor tracker, historical record
- [[MOC-Second-Brain]] — the whole-vault root index

## Agentic OS architecture (OS Architecture Design Phase, 21/07/2026 — design only; reviewed and merged to main)
- [[Agentic_OS_Architecture]] — the architecture root doc: current-state assessment, 14 missing
  capabilities, 8 agent designs, 6 skill designs, workflow diagram, gap analysis
- [[Decision_Management_Layer]] · [[External_Research_Layer]] · [[Forecasting_Layer]] — the three
  new evidence layers designed between the corpus and the plan
- [[Business_Plan_Generation_Pipeline]] — the 19-stage drafting process (redesigned 2026-07-23:
  plan-level setup + the original 11-sub-stage per-section loop + whole-plan consistency gates)
- [[Implementation_Roadmap]] — **superseded 2026-07-23** — phased rollout with git branches, dependencies,
  and completion criteria, built for the original Egypt-retention problem's 14-section drafting
  sequence; preserved as historical record only, see its banner. Active drafting now follows the
  19-stage `Business_Plan_Generation_Pipeline.md` and `Talabat-Group-AI-Investment-Allocation-Business-Plan.md`'s
  own status table
- [[OS_Architecture_Design_Phase_Validation_Report|OS Architecture Design Phase Validation Report]] — validation report confirming design-only scope
- [[Decisions_README|Decisions layer]] · [[Research_README|Research layer]] · [[Forecasts_README|Forecasts layer]]
  — the three layers' own folder-index notes; Decisions and Research now hold real content (Phase 7), Forecasts still empty
- Operative, not vault graph nodes: `.claude/agents/` (8 files), `.claude/skills/` (6 new + 1 redesigned)

## Phase 7/8 — Operational execution and evidence-based evolution (22/07/2026)
- [[Phase7_Pilot_Execution_Report_Section_03]] — the first real, non-simulated pipeline execution
- [[Agentic_OS_Architecture_v2]] — the evidence-based Version 2 architecture evolution: every change traced to specific execution evidence, everything execution validated left unchanged
- [[Lessons_Learned_Phase7]] · [[Pilot_Validation_Plan]] — formal lessons-learned record and the next three planned pilots (Sections 2, 9, 10)
- [[Pilot2_Execution_Report_Section_02]] — Pilot 2 (Section 2, Business Description): confirms the Change 1 top-level-invocation fix works; produces the project's first real human-confirmed strategic Decision ([[DEC-003_section2-governing-hypothesis]]) and first genuinely independent Stage 11 QA pass, which caught a real cross-section defect in Section 3
- [[Pilot3_Execution_Report_Section_09]] — Pilot 3 (Section 9, Financial Plan): first real test of the Forecast Layer (`forecasting-agent`, `kpi-agent`); produces this project's first real fail/fix/re-verify cycle — independent QA issued a genuine FAIL, caught two template-completeness gaps, both fixed and independently re-verified

## Outside the vault (repo root — not part of the Obsidian graph, linked here as plain paths for navigation only)
- `../PROJECT_PROGRESS.md` — milestone status snapshot
- `../SESSION_LOG.md` — chronological session record
- `../MEMORY.md` — project-scoped facts and standing decisions
- `../CLAUDE.md` — project instructions for Claude Code sessions
- `../Problem_Charter.md` — the G02 capstone charter (Status: Active — governing problem for the Agentic OS)

These five files live at the repository root, one level above `vault/`, so they are **not** Obsidian graph nodes and can't carry `[[wiki-links]]` to/from vault notes — that's a structural fact about this project's folder layout, not a gap to fix. This MOC is the closest thing to a bridge between them and the vault.

## See also
- [[Validation and Audit]] · [[Source Register]] · [[Templates and Methods]] — the other administrative MOCs
