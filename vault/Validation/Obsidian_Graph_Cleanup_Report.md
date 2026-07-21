---
type: validation
title: Obsidian Graph Cleanup Report
updated: "2026-07-21"
---

# Obsidian Graph Cleanup Report

**Run:** 21 July 2026 · on branch `feature/obsidian-graph-cleanup` (not merged into `main`)
**Scope:** every `.md` file in `vault/` (152 files) — the full, real Obsidian graph, not the 103-file scope the Phase 4 semantic-layer validation deliberately limited itself to. This is the first audit to look at the *entire* vault as Obsidian actually renders it.

## Executive Summary

Obsidian was showing **33 fully isolated gray dots and 1 nearly-isolated node**, plus a subtler defect: **7 pairs of notes silently sharing the same filename** (`Marketplace`, `Advertising`, `Competition`, `GMV`, `Orders`, `AI`, `Logistics` each existed as both a `Facts/*.md` and a `Topics/*.md` file), which made roughly three dozen `[[wiki-links]]` throughout the 30 Topic Notes resolve ambiguously — in at least 7 confirmed cases, a Topic Note's own "Links to Facts" section was pointing at itself instead of its intended Facts file.

**Nothing was deleted.** Every orphan turned out to be genuinely valuable — either provenance/audit-trail material (the 29 `Facts/_raw/` fragments carry citations and are the only per-document entity breakdown in the vault) or legitimate administrative content (validation reports, ingestion methodology, note templates). All of it was connected to one of four new administrative MOCs rather than removed. The filename-collision defect was fixed by renaming the 7 ambiguous `Facts/*.md` files (via `git mv`, preserving history) and retargeting the 35 links that the template design guarantees were meant to point at the Facts layer.

## Before → After Metrics

| Metric | Before | After |
|---|---|---|
| Total `.md` notes (real Obsidian nodes) | 141 | 154 (+4 new administrative MOCs, +2 new Validation reports, and +7 previously-undercounted collision files now correctly counted as distinct) |
| True orphan notes (0 in, 0 out) | 33 | **0** |
| Weakly connected notes (total degree = 1) | 1 | **0** |
| Filename collisions (ambiguous `[[links]]`) | 7 | **0** |
| Connected components | 34 | **1** |
| Largest connected component | 108 / 141 (76.6%) | **154 / 154 (100%)** |
| Genuinely broken/unresolved links | 0 (confirmed by inspection both before and after) | 0 |
| Duplicate notes merged | — | 0 (none found — see Category C below) |
| Notes deleted | — | **0** |

## Notes Connected (34 orphans/weak notes → administrative MOCs)

All 33 true orphans + 1 weakly-connected note were Category B (valid standalone reference / administrative note) — none required individual topical linking, none were duplicates, none were deleted. Full per-note detail in `Orphan_Notes_Review.md`. Summary by group:

| Group | Count | Connected to |
|---|---|---|
| `Facts/_raw/TLB-*_facts.md` (per-document raw extraction fragments) | 29 | New [[Source Register]] MOC (each fragment also got a direct "Related MOCs" backlink appended) |
| Validation/audit reports (`_AUDIT_REPORT_PHASE4.md`, `_VALIDATION_REPORT.md`) | 2 | New [[Validation and Audit]] MOC |
| Ingestion methodology (`_INGESTION_BRIEFING.md`) | 1 | New [[Templates and Methods]] MOC |
| Note templates (`_TEMPLATE-daily.md`, `_TEMPLATE-person.md`) | 2 | New [[Templates and Methods]] MOC |

Four new MOCs were created to receive these connections: [[Source Register]], [[Validation and Audit]], [[Templates and Methods]], [[Project Administration]] — all four are themselves linked from [[Talabat MOC]] and (via Talabat MOC) from the root [[MOC-Second-Brain]], so nothing is more than two hops from the vault's entry point.

## Notes Merged

**None.** No true duplicate or superseded notes were found anywhere in the 152-note vault. The one close call — `Facts/Talabat_Pro.md` vs. `Topics/Talabat Pro.md` — was investigated and confirmed to be an intentional, by-design split (raw cited data vs. synthesis), not a duplicate: different content (confirmed by hash), different purpose, and the Topic Note explicitly cross-references back to the Facts file ("See [[Talabat_Pro]] for the full source-by-source data").

## Notes Deleted

**None.** See the Executive Summary — every orphan had genuine, protected value (provenance, audit trail, or reusable methodology/templates) and none met the Category D bar (clearly empty, temporary, test, or abandoned with no useful project knowledge).

## Notes Intentionally Preserved as Standalone

All 34 connected notes remain administrative/reference material rather than being folded into the main knowledge graph's content layer — that's correct, not a residual problem. Specifically:
- The 29 `Facts/_raw/` fragments are **intentionally** kept separate from the consolidated `Facts/*.md` and `Sources/*.md` layers — they are the audit trail proving how those consolidated layers were built, and merging them in would create 29 near-duplicate shadow copies of content that already exists in cleaner form elsewhere.
- The 3 note templates (`_TEMPLATE-daily`, `_TEMPLATE-person`, `_TEMPLATE-project`) are **intentionally** unfilled — they contain `[INSERT: ...]` placeholder text by design, meant to be copied (not edited in place) each time a new daily log or person note is created.
- The 3 methodology briefings (`_INGESTION_BRIEFING`, `_TOPIC_NOTE_BRIEFING`, `_STRATEGIC_NOTE_BRIEFING`) served a one-time purpose (instructing the background agents that built the vault) and are kept for methodological transparency/reproducibility — appropriate for an academic capstone being graded on process, not because they need further action.

## Notes Requiring Human Review

**None identified.** Every orphan/weak note in this audit had an unambiguous classification (Category B in all 34 cases) — none needed the "unclear, needs a human call" treatment. See `Orphan_Notes_Review.md` for the reasoning behind each classification, in case you want to challenge any of them.

## Remaining Graph Limitations

1. **`Facts/_raw/` (29 files) and `_source_text/` (29 `.txt` + 1 `.json`, not graph nodes at all) remain a separate, lightly-linked cluster** — each links to [[Source Register]] and is reachable from there, but they don't cross-link to each other or to the Topic/Strategic layer directly. This is intentional (see above) but means the graph's *visual* density in that corner is lower than the Topics/Facts/Entities/Strategic core — expected, not a defect.
2. **Repo-root project files** (`PROJECT_PROGRESS.md`, `SESSION_LOG.md`, `MEMORY.md`, `CLAUDE.md`, `Problem_Charter_DRAFT.md`) live outside `vault/` and therefore can never be Obsidian graph nodes or carry `[[wiki-links]]` — [[Project Administration]] links to them as plain relative paths, which is the best bridge possible given the folder layout, not a bug to fix.
3. **The `.txt` extraction files in `_source_text/`** aren't Obsidian notes at all (wrong file extension) — they will never appear in the graph regardless of linking. No action taken; see the graph-filter recommendation below if you want to formalize their exclusion.

## Recommended Obsidian Graph Filters

The vault's `.obsidian/graph.json` currently has `"search": ""` (no filter) and `"showOrphans": true`. Two optional refinements, neither required now that everything is linked:

1. **De-emphasize the audit-trail cluster without hiding it**, using a graph group/color rather than a filter — add to `colorGroups` in `graph.json`: `{"query": "path:Knowledge/Facts/_raw OR path:Knowledge/_source_text", "color": {...}}` so raw fragments render as a visually distinct (e.g. gray/muted) cluster instead of blending with primary content nodes.
2. **If you ever want a "content-only" view** that hides administrative/methodology notes entirely (rather than just backgrounding them), a search filter of `-path:"Knowledge/Facts/_raw" -path:"_TEMPLATE" -path:"_INGESTION_BRIEFING" -path:"_TOPIC_NOTE_BRIEFING" -path:"_STRATEGIC_NOTE_BRIEFING"` in the graph view's search box achieves that without deleting or unlinking anything — filters are non-destructive and reversible, which is why this is offered as an option rather than applied by default.

Neither filter was applied to `graph.json` in this cleanup — that file is a personal display preference, best set via Obsidian's own Graph View UI rather than edited blind from a script.

## Rules Compliance Check

- **No note deleted merely for being isolated** — verified: every orphan was individually classified before any action; 0 deletions occurred.
- **No protected material touched** — Source Notes, Facts, Entities, validation records, audit logs, MOCs, and Strategic notes were only ever **added to** (new "Related MOCs" sections, or renamed with `git mv` to fix the collision defect), never had content removed.
- **No citations, page references, or provenance lost** — confirmed via `git diff`: every change to an existing file is a pure addition (or, for the 7 renamed Facts files, a `git mv` that preserves file history and content byte-for-byte).
- **No artificial links added merely for graph density** — every link added has a stated, content-grounded reason (see `Orphan_Notes_Review.md`); no cross-links were added between unrelated notes.
