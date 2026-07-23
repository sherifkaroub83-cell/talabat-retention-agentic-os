# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Activated 20 July 2026** for the AASTMT MBA capstone, Group G02. **Pivoted 23 July 2026** from
> the original Egypt-only retention problem to: *talabat Group — AI-enabled capital allocation and
> performance management for the 2026 USD 175 million investment programme* (Everyday App +
> Food-leadership initiatives, across talabat's eight operating markets, Egypt included as a worked
> example). Owner: Sherif Samy Karoub. See `MEMORY.md` for project facts, `Problem_Charter.md` for
> the current problem statement (**status: proposed, pending instructor re-approval — see the charter
> itself**), `vault/Architecture/Repository_Impact_Assessment.md` for why the pivot happened and what
> it touched, and `AI_Business_Plan_Template.md` for the graded 14-section GSB v2.0 (McKinsey
> Edition) specification the final deliverable must follow — unchanged and immutable by this pivot;
> draft against it using the `business-plan-drafting` skill (`.claude/skills/business-plan-drafting/`).
> **Before drafting any section**, read `vault/Architecture/Agentic_OS_Architecture.md` — the
> capstone's primary product is the Agentic OS itself, not the plan (the plan is one execution of
> it). Drafting runs through an 11-stage pipeline (`vault/Architecture/Business_Plan_Generation_Pipeline.md`)
> via the `bp-orchestrator` agent, not free-form writing, and must pass the Problem Consistency,
> Financial Integrity, and Geographic Evidence gates (see `vault/Architecture/Agentic_OS_Architecture.md`)
> plus the Template Compliance Gate before any publication step.

## What this project is

This is a **document/research project** scaffold, not a software codebase. Out of the box it contains
no source corpus — only the template structure: an Obsidian "second brain" `vault/`, the tracking
files listed below, a `/session-end` skill, and a nightly-maintenance script. Treat tasks here as
document analysis, extraction, synthesis, and deliverable authoring rather than software development.

If code is later added (scripts, notebooks, a web app), update this file with the real build/lint/test
commands at that time. Do not assume any toolchain exists today.

## Source corpus

`Input_Data/` is the dropzone for the project's source material.

- **Source type:** Markdown extracts of public web/PDF sources (each with source URL, publisher, and retrieval date in the header) + native PDFs to be added (talabat annual reports, earnings decks, IPO documents — URLs listed in `Input_Data/_CORPUS_INDEX.md`)
- **Count & location:** 9 files in `Input_Data/`, organized as `01_Company_Filings/`, `02_Market_Research/`, `03_Competitors/`, `04_Strategy_News/`; `_CORPUS_INDEX.md` is the manifest
- **Ordering / structure:** order not meaningful; filenames are date-prefixed (YYYY-MM-DD). Primary sources (official talabat IR/newsroom) outrank secondary (market-report overviews, press). Known data gaps and verification flags are listed at the bottom of `_CORPUS_INDEX.md` — respect them when citing (notably: InstaShop = USD 32m in 2025, not USD 360m; Egypt-only financials must be estimated from the non-GCC segment with stated logic)

## Working with the sources

- **Extract before reading.** Convert binary sources (PDF/DOCX) to text/Markdown first; never read
  large binaries with text tools directly. The proven path is PyMuPDF (`fitz`) → text under
  `vault/Knowledge/_source_text/` (see the ingestion recipe in `template_Activate.md`). The
  `pdf-extract` skill is an optional alternative **if it is installed in this environment**.
- Source documents in `Input_Data/` are **read-only inputs** — do not modify them.

## Conventions

If you set up working directories, follow this convention:

- `Input_Data/` — source documents (read-only)
- `Outputs/` — generated artifacts and deliverables (create if absent)
- `vault/` — the Obsidian second brain (knowledge notes, identity, MOC, daily logs)
- `vault/Architecture/` — Agentic OS design specs (agent/skill roster, the three decision-support
  layers below, the drafting pipeline, the roadmap) — see `Agentic_OS_Architecture.md`
- `vault/Decisions/`, `vault/Research/`, `vault/Forecasts/` — the Decision Management, External
  Research, and Forecasting layers (scaffolded 21/07/2026, populated only once drafting begins —
  see the Implementation Roadmap). **Evidence tiers, in order:** Repository Facts
  (`Knowledge/Facts`) → External Research (`Research/`) → Forecasts (`Forecasts/`) → Management
  Decisions (`Decisions/`) → Business Plan (`Outputs/`). A tier may only cite tiers above it; no
  number reaches `Outputs/` without resolving to a Facts citation or an `Approved` row in
  `Decisions/Assumptions_Register.md`.
- `.claude/agents/` — 8 named subagents running the Business Plan pipeline (`bp-orchestrator`,
  `research-agent`, `forecasting-agent`, `decision-steward`, `evidence-citation-agent`, `kpi-agent`,
  `exec-summary-agent`, `qa-review-agent`)

## Standing instructions

These persist across sessions — follow them unless the user says otherwise:

- **Goal:** an instructor-approved **AI Business Plan** (GSB 14-section template v2.0, McKinsey Edition; 15–25 pages) recommending how talabat should allocate its 2026 USD 175 million investment programme across Everyday App and Food-leadership initiatives, plus the **OS structure document** (3–5 pages) and the **group presentation deck** (5 slides per member × 6). All exported to `Outputs/`. Due per course calendar; original charter submission 26/07/2026 to Dr. Hossam Daoud — **the pivoted charter's re-approval status is not yet resolved, see `Problem_Charter.md`.**
- **Write to McKinsey standards:** SCQA executive summary, Pyramid Principle, MECE breakdowns, hypothesis-driven analysis, value-driver-tree financials, figures grounded at the level talabat actually discloses them (Group, GCC, non-GCC, or country).
- **Ground claims in the sources.** When synthesizing or writing deliverables, cite which source
  document(s) a point comes from; don't introduce outside facts as if they came from the corpus.
- **Never mix evidence categories.** Facts (disclosed), analytical inferences (reasoned from facts), decisions (approved strategic choices), assumptions (undisclosed planning inputs), forecasts (scenario outputs), and synthetic examples (illustrative only) are distinct and must never be blended or presented as one another — never a Group-level metric as country-specific, never an assumption as a fact, never a historical uplift as a guaranteed future result.
- **Synthetic data is allowed only as a clearly-labeled last resort.** Where proprietary operational
  data is genuinely unavailable (e.g. individual-customer-level data), synthetic data or
  primary research (surveys/interviews) may be used to illustrate a framework — but must
  be explicitly labeled as such wherever it appears, and never presented as, or blended with, real
  disclosed company data. (Decision recorded 21/07/2026, revised problem charter.)
- **Scope: talabat Group across its eight operating markets, evidence used at the level it's actually reported.** Egypt remains a genuine worked example (the corpus's richest single-country data point) but is not the boundary of the analysis. Never use "MENA" as a stand-in for talabat's own market set where a more precise label (Group, GCC, non-GCC, or a named country) is available — see the Geographic Evidence Rules in `vault/Architecture/Agentic_OS_Architecture.md`.
- **Write generated artifacts to `Outputs/`**, never into `Input_Data/`. Create `Outputs/` if absent.
- **Extract before reading** — get text/Markdown first; never read the binaries as raw text.
- **Propose, don't execute, on destructive vault work** — hand the user a changelist to approve
  before merges/deletes/rewrites of their notes. Superseded content (see the 2026-07-23 pivot) is
  marked, never deleted.
- This file is project-scoped memory: when a durable project decision or convention is established,
  record it here so future sessions inherit it.

## Project tracking files

Read these at the start of a session and keep them current:

- `MEMORY.md` — project facts, corpus reference, and standing instructions.
- `PROJECT_PROGRESS.md` — high-level status snapshot and milestone table. Update when a milestone moves.
- `SESSION_LOG.md` — append a short entry (newest on top) at the end of each session.
- The `/session-end` skill (`.claude/skills/session-end/`) automates updating all three at session close.
