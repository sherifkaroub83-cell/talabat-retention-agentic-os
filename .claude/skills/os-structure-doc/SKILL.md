---
name: os-structure-doc
description: Procedure for producing the graded 3–5-page OS Structure Document describing the Agentic OS itself (layers, agents, skills, pipeline, evidence model, MCP, memory, LLM policy). Trigger when the user asks for the OS structure document or says "/os-doc". Used by publication-agent.
---

# OS Structure Document — 3–5 pages

**Deliverable:** the capstone's 3–5-page description of the Agentic OS. Nearly all content
already exists — this skill is an *assembly and compression* procedure, not a writing-from-
scratch one.

## Source map (in priority order)
| Section of the doc | Source |
|---|---|
| The six-layer structure + completeness | `vault/Architecture/Agentic_OS_Completeness_Assessment.md` (scorecard + layer evaluations) |
| Agents & skills roster | `vault/Architecture/Agentic_OS_Architecture.md` §3–4, updated by `_v2` |
| Pipeline & gates | `vault/Architecture/Business_Plan_Generation_Pipeline.md` (19 stages, gate rules) |
| Evidence model | The five-tier hierarchy (CLAUDE.md conventions + `Decision_Management_Layer.md`) |
| What execution proved | `Pilot4_System_Stability_Report.md` + the fail/fix/re-verify record |
| MCP layer | `DEC-011` + `scripts/vault_mcp/README.md` |
| Memory & LLM policy | `MEMORY.md` structure + `vault/Architecture/LLM_Layer.md` |
| Visuals | The console's OS Map and pipeline views (`app/agentic-os-console/`) — export as figures |

## Procedure
1. Draft 3–5 pages to `Outputs/OS_Structure_Document.md`: (1) what the OS is and its six
   layers; (2) how a claim travels corpus → plan (the pipeline + gates, one diagram); (3) what
   execution proved (pilots, two-pass protocol, real FAILs caught); (4) completeness state and
   roadmap. Answer-first, McKinsey standard, zero new claims — every sentence traceable to a
   named source above.
2. One figure minimum: the OS Map (console screenshot or redrawn). Figures follow the same
   design system as the deck.
3. Export DOCX/PDF via `scripts/export_business_plan.py` patterns into `Outputs/`.
4. This document describes the OS — it is not Business Plan content and needs no Template
   Compliance Gate; it does need a factual read-through against the sources (no drifted
   numbers: agent counts, note counts, stage counts change as the OS evolves — pull them fresh).
