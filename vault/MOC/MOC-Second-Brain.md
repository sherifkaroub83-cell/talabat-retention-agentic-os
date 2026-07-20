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

## Knowledge notes
_Populated during ingestion — one cross-linked note per source document, grouped to mirror
`Input_Data/`:_

### Company filings (primary)
- _(pending ingestion: Q4/FY2025 results, Q1 2026 results)_

### Market research (secondary)
- _(pending ingestion: IMARC Egypt online food delivery, Mordor Egypt foodservice)_

### Competitors (secondary)
- _(pending ingestion: Egypt delivery competitive landscape)_

### Strategy & news (primary)
- _(pending ingestion: newsroom index, Egypt mega-DC, t pro Egypt launch)_

## Active work
- [[Talabat-Egypt-AI-Retention-Business-Plan]] — the capstone deliverable tracker

## Reading arc
No prescribed order. Recommended path for new team members: `_CORPUS_INDEX.md` → Q4/FY2025 press
release (numbers) → Q1 2026 press release (strategy shift) → competitive landscape → market
research → Egypt strategy news.

## Maintenance
- Nightly consolidation runs the [[nightly-consolidation-prompt]] (propose-only changelist → `_maintenance/changelists/`).
- Source extracts live in `Knowledge/_source_text/` (raw text; do not edit).
- New entities mentioned in Daily/Meetings → create files in `People/`, `Companies/`, `Projects/`.
- Consolidation is **propose-then-approve** — never auto-merge or auto-delete notes.
