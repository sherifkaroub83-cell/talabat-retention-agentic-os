# Session Log

Chronological record of working sessions. Append a new entry at the **top** at the end of each
session. Keep entries short — what was done, what changed, what's next. The `/session-end` skill
writes these entries for you.

---

## Session 2 — 2026-07-21

**Focus:** Ingest the 29-document native-PDF primary-source corpus into a structured knowledge base.

**Done:**
- Pulled latest repo changes (merged `origin/main`, which added 29 talabat Holding plc PDFs/XLSX
  to `Input_Data/00_Inbox/`); pushed the working branch's own commits to `origin`
- Phase 1: reorganized all 29 documents into `Input_Data/01_Annual_Reports/` through
  `07_Supplementary_Data/`
- Installed PyMuPDF + Tesseract OCR in-session; extracted text from all 29 documents (1,158 PDF
  pages total), OCR'ing the one scanned filing (TLB-007, Q3 2025 financials)
- Phase 2: built `Input_Data/CORPUS_INDEX.md` (Doc ID, category, dates, publisher, pages,
  reliability, geographic scope, Egypt-specificity, business relevance)
- Phase 3: dispatched 8 parallel background agents to produce a Source Knowledge Note + raw
  facts/entities fragment for every document, under a shared briefing/citation-discipline spec
  (`vault/Knowledge/_source_text/_INGESTION_BRIEFING.md`)
- Phase 4: consolidated the 29 raw fragments into 14 topic-based fact files
  (`vault/Knowledge/Facts/`), every fact retaining its `(DocID, page N)` citation
- Phase 5: deduplicated entities across all 29 documents into 9 roster files
  (`vault/Knowledge/Entities/`)
- Phase 6: built `vault/Knowledge/Relationship_Map.md` (Mermaid diagram + cited narrative)
- Phase 7: updated `MEMORY.md`, `PROJECT_PROGRESS.md` (this file)
- Phase 8: produced `vault/Knowledge/_VALIDATION_REPORT.md`
- Committed and pushed in stages throughout (never left partially-written background-agent output
  uncommitted alongside stable work)

**Decisions:**
- Kept the new native-PDF corpus's `CORPUS_INDEX.md` separate from the existing Markdown-corpus
  `_CORPUS_INDEX.md` (different corpora, both still valid)
- Declined to amend/re-sign a pre-existing commit's authorship to satisfy the GitHub "Verified"
  badge, since that commit wasn't produced in this session and rewriting it would misattribute the
  user's own work — pushed with original authorship instead (user confirmed this choice)

**Key findings:**
- **Correction to a standing project assumption:** Egypt is no longer only estimable from the
  non-GCC bundle — it became its own standalone reportable segment starting FY2025, with disclosed
  revenue/GP/net profit (see MEMORY.md for figures and citations)
- CEO transition (Tomaso Rodriguez → Toon Gyssels) and a board composition change are visible in
  the corpus but not explained by any single document — flagged as open questions
- talabat pro launched in Egypt February 2025; documents before that date show it explicitly
  excluded from Egypt

**Next:**
- Fold `vault/Knowledge/Facts/` and `Relationship_Map.md` into the GSB 14-section AI Business Plan
  draft (Phase 4 of the capstone)
- Assign team roles; submit charter 26/07

---

## Session 1 — 2026-07-20

**Focus:** Project bootstrap — problem selection, corpus collection, charter, OS activation.

**Done:**
- Collected and indexed a 9-document public corpus on Talabat (Egypt focus) into `Input_Data/`
  (official IR results, market research overviews, competitor landscape, Egypt strategy news)
- Selected the business problem: AI-driven customer retention for talabat Egypt vs Breadfast /
  Rabbit / elmenus
- Drafted `Problem_Charter_DRAFT.md` (Group G02, Dr. Hossam Daoud, submission 26/07/2026)
- Activated the ProjectX template: CLAUDE.md, MEMORY.md, PROJECT_PROGRESS.md, vault identity files
  (user/identity; soul unchanged), project tracker, MOC

**Decisions:**
- Talabat Egypt retention chosen over margin-recovery / basket-economics / dark-store candidates
- LLM: Claude subscription (public data, native tooling); MCP: undecided, due end of Phase 2
- InstaShop price correction adopted corpus-wide: USD 32m (2025), not USD 360m (2020 DH deal)

**Next:**
- Assign team roles; submit charter 26/07
- Download 10 native PDFs from `_CORPUS_INDEX.md`; run ingestion into `vault/Knowledge/`

---

<!-- Template for new entries (newest on top):

## Session N — YYYY-MM-DD

**Focus:**

**Done:**
-

**Decisions:**
-

**Next:**
-

-->
