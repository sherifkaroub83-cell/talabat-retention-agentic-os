# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Activated 20 July 2026** for the AASTMT MBA capstone, Group G02: *Talabat Egypt — AI-driven
> customer retention*. Owner: Sherif Samy Karoub. See `MEMORY.md` for project facts and
> `Problem_Charter_DRAFT.md` for the approved problem statement.

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

## Standing instructions

These persist across sessions — follow them unless the user says otherwise:

- **Goal:** an instructor-approved **AI Business Plan** (GSB 14-section template v2.0, McKinsey Edition; 15–25 pages) recommending an AI-driven customer-retention strategy for talabat Egypt, plus the **OS structure document** (3–5 pages) and the **group presentation deck** (5 slides per member × 6). All exported to `Outputs/`. Due per course calendar; charter submission 26/07/2026 to Dr. Hossam Daoud.
- **Write to McKinsey standards:** SCQA executive summary, Pyramid Principle, MECE breakdowns, hypothesis-driven analysis, value-driver-tree financials, MENA-grounded market figures.
- **Ground claims in the sources.** When synthesizing or writing deliverables, cite which source
  document(s) a point comes from; don't introduce outside facts as if they came from the corpus.
- **Synthetic data is allowed only as a clearly-labeled last resort.** Where proprietary operational
  data is genuinely unavailable (e.g. individual-customer churn/feedback records), synthetic data or
  primary research (surveys/interviews) may be used to illustrate the retention framework — but must
  be explicitly labeled as such wherever it appears, and never presented as, or blended with, real
  disclosed company data. (Decision recorded 21/07/2026, revised problem charter.)
- **Scope: Egypt is the target market; MENA is backdrop context only.** The Agentic OS integrates
  information at the MENA-company level (talabat operates across 8 countries), but the deliverable
  analysis, retention strategy, and business plan stay scoped to talabat Egypt. Don't broaden the
  actual recommendation beyond Egypt without an explicit instruction to do so.
- **Write generated artifacts to `Outputs/`**, never into `Input_Data/`. Create `Outputs/` if absent.
- **Extract before reading** — get text/Markdown first; never read the binaries as raw text.
- **Propose, don't execute, on destructive vault work** — hand the user a changelist to approve
  before merges/deletes/rewrites of their notes.
- This file is project-scoped memory: when a durable project decision or convention is established,
  record it here so future sessions inherit it.

## Project tracking files

Read these at the start of a session and keep them current:

- `MEMORY.md` — project facts, corpus reference, and standing instructions.
- `PROJECT_PROGRESS.md` — high-level status snapshot and milestone table. Update when a milestone moves.
- `SESSION_LOG.md` — append a short entry (newest on top) at the end of each session.
- The `/session-end` skill (`.claude/skills/session-end/`) automates updating all three at session close.
