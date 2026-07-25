# talabat-retention-agentic-os

**MBA Agentic OS Capstone Project** (AASTMT, AI for Business Organizations track, Group G02) — a
**talabat AI-Enabled Investment Allocation Agentic OS**: an AI-driven Agentic Operating System built
around one problem: **how talabat should allocate its 2026 USD 175 million investment programme
across Everyday App and Food-leadership initiatives to maximise profitable growth, customer lifetime
value, retention, and long-term platform economics across its eight operating markets.** The
repository name (`talabat-retention-agentic-os`) is now historical — it reflects the project's
original, narrower Egypt-retention framing (its own problem charter approved 21/07/2026) before the
2026-07-23 pivot to this broader, better-evidenced capital-allocation problem; the repository itself
was not renamed. Current problem statement: [`Problem_Charter.md`](Problem_Charter.md) (**status:
Active — governing problem for the Agentic OS**). Why the pivot happened and what it touched:
[`vault/Architecture/Repository_Impact_Assessment.md`](vault/Architecture/Repository_Impact_Assessment.md).
Project facts and current status: [`MEMORY.md`](MEMORY.md) · [`PROJECT_PROGRESS.md`](PROJECT_PROGRESS.md).
Start browsing the knowledge base at [`vault/MOC/Talabat MOC.md`](vault/MOC/Talabat%20MOC.md).

## Current publication status

The Group-wide AI Business Plan is complete on PR #6 (`codex/final-business-plan-publication`), pending
review and merge to `main`:

- 14/14 active v2 sections are present and independently verified.
- All whole-plan gates pass, including the whole-plan citation audit and template compliance.
- `Outputs/Business_Plan_Final.docx` opens successfully and contains all 14 section headings.
- `Outputs/Business_Plan_Final.pdf` opens successfully, contains all 14 section headings, and is 25 pages.
- `Outputs/Formatting_QA_Report.md` and `Outputs/Publication_QA_Report.md` record the final QA results.
- Historical Egypt-retention drafts and exports remain preserved as superseded artifacts.

This repository is built on the **Agentic Second-Brain OS** template (below): a Claude-Code-native
scaffold that turns a document corpus into a cross-linked knowledge vault and carries the work to a
finished deliverable. It has been activated and populated for this project — the generic
description below documents the underlying machinery, not an unactivated starting point.

---

## Why it's powerful

- **Brain-first knowledge capture.** Every source becomes a structured, cross-linked note in an
  Obsidian graph you can actually navigate — not a pile of PDFs.
- **Grounded & cited synthesis.** Notes preserve the source's exact figures and names; claims are
  tied back to the document they came from. No hallucinated facts.
- **Parallel ingestion + adversarial verify.** Documents are synthesized concurrently, then a second
  pass fact-checks each note against its source and fixes discrepancies — accuracy by construction.
- **Memory that survives sessions.** `CLAUDE.md`, `MEMORY.md`, `PROJECT_PROGRESS.md`, and
  `SESSION_LOG.md` keep context across conversations; the **`/session-end`** skill updates them for
  you in one command.
- **Nightly self-maintenance.** A read-only script proposes a changelist (orphans, duplicates, MOC
  gaps, strategic flags) for you to approve — it **never edits your notes on its own**.
- **Interview-driven, conflict-free setup.** No hardcoded identity or corpus. Each activation fills
  the placeholders from *your* answers, so the same template serves many users and projects.

---

## What's inside

| Path | What it is |
|------|------------|
| [`template_Activate.md`](template_Activate.md) | **Activation runbook** — the interview + setup procedure Claude follows |
| `CLAUDE.md` | Project instructions auto-loaded by Claude Code (placeholdered until activation) |
| `MEMORY.md` · `PROJECT_PROGRESS.md` · `SESSION_LOG.md` | Project facts · milestones · session history |
| `Input_Data/` | Drop your source documents here (read-only) |
| `Outputs/` | Final Business Plan DOCX/PDF, publication/formatting QA reports, and preserved historical exports |
| `Business_Plan_Generation_Contract.md` | Mandatory inputs, ordered workflow, and ten publication gates for every Business Plan run |
| `vault/Architecture/Business_Plan_Editorial_Standard.md` | Canonical Version 1.2 audience, voice, editorial, exhibit, KPI, and appendix standard |
| `vault/` | The Obsidian second brain — `soul.md`/`identity.md`/`user.md`, `MOC/`, `Knowledge/`, `Daily/`, entity folders |
| `vault/_maintenance/` | The nightly read-only audit prompt + dated changelists |
| `scripts/daily-brain-maintenance.ps1` | Runs the nightly propose-only audit (vault path auto-derived) |
| `.claude/skills/session-end/` | The `/session-end` session-wrap-up skill |

Full annotated map: see §3 of [`template_Activate.md`](template_Activate.md).

---

## Quick start

1. **Copy** this directory to a new project folder and open it in Claude Code.
2. Say **"activate this template."** Claude runs the interview (project, sources, deliverable, your
   profile, conventions).
3. **Drop your sources** into `Input_Data/` when asked.
4. Claude **extracts → synthesizes → verifies** the corpus into `vault/Knowledge/`, builds the map of
   content, and creates a project tracker.
5. Work the project; run **`/session-end`** to checkpoint. Export the final artifact to `Outputs/`.

---

## How it works

```
   Input_Data/            vault/Knowledge/            vault/ (MOC, Daily,        Outputs/
   (sources)   ──extract──▶ _source_text/  ──synth──▶ Projects, People)  ──▶  (deliverable)
                                 │            +verify        │
                                 └──────── cited notes ──────┘
                                          ▲                  │
                                  nightly audit        /session-end
                                  (propose-only)     (memory + progress)
```

The loop: **ingest → synthesize → track → maintain → deliver.** Every file in the repo serves one
stage of it.

---

## Worked use-case example

> *Illustrative only — fictional names and a domain deliberately different from anything shipped, to
> show the template is generic.*

**Scenario.** Priya, a product strategist, has **12 analyst PDFs** on the home-robotics market and
needs a **leadership brief** on where to place a new bet.

**Activation answers (the interview):**
- *Project:* "Home-Robotics Market Scan" · *Domain:* competitive intelligence on consumer robotics.
- *Goal:* a 10-page exec brief recommending one market segment to enter.
- *Sources:* 12 PDFs in `Input_Data/`, unordered, named by analyst firm.
- *Deliverable:* DOCX brief for the leadership team; recommendation-first.
- *Owner:* Priya — product strategist; style: direct, data-first.
- *AI role:* analyst + chief of staff; pressure-test the recommendation before sign-off.

**What the template produces:**
- `vault/Knowledge/` — **12 cross-linked notes**, one per report (summary, key data points with exact
  figures, each cited to its source), verified against the PDFs.
- `vault/MOC/MOC-Second-Brain.md` — the map, grouping notes by sub-market (vacuums, lawn, eldercare…).
- `vault/Projects/Home-Robotics-Market-Scan.md` — tracker with the open decision ("which segment?")
  and a plan of attack.
- `vault/Daily/<date>.md` — session log; `/session-end` keeps `PROJECT_PROGRESS.md` current.
- Nightly audit flags, e.g., two notes citing conflicting market-size numbers → Priya reconciles them.
- **`Outputs/Home-Robotics-Brief.docx`** — the final recommendation, every claim traceable to a note,
  every note traceable to a PDF.

Same machinery, any corpus: swap the 12 robotics PDFs for legal filings, research papers, customer
interviews, or course material — the flow is identical.

---

## Customization & extending

- **Add skills** with `skill-creator`, or hand-write `.claude/skills/<name>/SKILL.md` using
  `session-end` as a model.
- **Tune the AI** via `vault/soul.md` (behavior rules) and `vault/identity.md` (its role).
- **Adjust maintenance** by editing `vault/_maintenance/nightly-consolidation-prompt.md`.
- **Hand the project to someone else** with the *re-templatize* checklist in §7 of
  [`template_Activate.md`](template_Activate.md).

---

## Requirements & conventions

- **Claude Code** (this template is driven by it). **Obsidian** optional, to browse `vault/` as a graph.
- **PyMuPDF** (`pip install pymupdf`) for PDF extraction; Pandoc/`python-docx` for DOCX. Windows +
  PowerShell for the maintenance script (`scripts/daily-brain-maintenance.ps1`).
- **Standing conventions:** extract before reading · sources in `Input_Data/` are read-only · write
  artifacts to `Outputs/` · ground & cite every claim · **propose-then-approve** for destructive
  vault edits.

---

## File index

| File | Purpose |
|------|---------|
| `README.md` | This overview |
| `template_Activate.md` | Activation interview + setup runbook (for Claude) |
| `CLAUDE.md` | Auto-loaded project instructions |
| `MEMORY.md` / `PROJECT_PROGRESS.md` / `SESSION_LOG.md` | Memory · milestones · session log |
| `Problem_Charter.md` | G02's current problem statement (Active — governing problem for the Agentic OS) |
| `AI_Business_Plan_Template.md` | The graded 14-section GSB v2.0 (McKinsey Edition) plan specification |
| `vault/` | The Obsidian second brain |
| `vault/Architecture/` | Agentic OS design docs — agent/skill roster, Decision/Research/Forecasting layers, the 19-stage drafting pipeline, the implementation roadmap |
| `vault/Decisions/`, `vault/Research/`, `vault/Forecasts/` | The three evidence layers between "what the corpus says" and "what the plan claims" (scaffolded, populated once drafting begins) |
| `scripts/` | Nightly maintenance plus the deterministic final-publication builder |
| `.claude/agents/` | 8 named subagents that run the Business Plan pipeline (`bp-orchestrator` + 7 specialists) |
| `.claude/skills/` | Project skills — `session-end`, `business-plan-drafting`, plus 6 pipeline-support skills (`external-research`, `forecast-builder`, `decision-log`, `evidence-ranking`, `citation-audit`, `qa-review`) |
