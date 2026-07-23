---
type: moc
title: Second Brain — Map of Content
updated: "2026-07-20"
---

# 🗺️ MOC — Second Brain

The index for this vault. Start here. This brain is built from a public-source corpus on **Talabat
(Egypt focus)** — official IR filings, market research, competitor coverage, strategy news — and is
oriented toward the **G02 AI Business Plan on AI-driven customer retention for talabat Egypt**.

## Identity
- [[user]] — who I am
- [[soul]] — how the AI should behave
- [[identity]] — what the AI is to me

## Knowledge base
Ingestion is complete. The 29-document primary corpus (`Input_Data/01_Annual_Reports/` through
`07_Supplementary_Data/`) has been fully processed into a semantic knowledge graph — start at:

- [[Talabat MOC]] — the domain-level entry point (Business Model, Finance, Customer, Technology,
  AI, Operations, Market Intelligence sub-MOCs)

The earlier 9-document secondary corpus (`Input_Data/01_Company_Filings/` through
`04_Strategy_News/`) remains available but was not carried into this semantic layer's citation
regime — see [[Competition]]'s Open Questions for why that boundary is kept deliberate.

## Active work
- [[Talabat-Group-AI-Investment-Allocation-Business-Plan]] — the active capstone deliverable tracker
  (post-2026-07-23 pivot; see `Problem_Charter.md`)
- [[Talabat-Egypt-AI-Retention-Business-Plan]] — the superseded predecessor tracker, preserved as
  historical record (all 14 sections reached ✅ Done against the original problem)
- [[Project Administration]] — team, milestones, decisions, and links to the repo-root tracking files

## Reading arc
No prescribed order. Recommended path for new team members: `_CORPUS_INDEX.md` → Q4/FY2025 press
release (numbers) → Q1 2026 press release (strategy shift) → competitive landscape → market
research → Egypt strategy news.

## Maintenance
- Nightly consolidation runs the [[nightly-consolidation-prompt]] (propose-only changelist → `_maintenance/changelists/`).
- Source extracts live in `Knowledge/_source_text/` (raw text; do not edit).
- New entities mentioned in Daily/Meetings → create files in `People/`, `Companies/`, `Projects/`.
- Consolidation is **propose-then-approve** — never auto-merge or auto-delete notes.
