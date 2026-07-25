---
name: console-data-refresh
description: Procedure for refreshing the Agentic OS Console's data snapshot (app/agentic-os-console/src/js/data.js) when repository state moves — section statuses, pipeline stages, decisions, registers, structure scores. Trigger when the user asks to update/refresh the console, or when scripts/check_freshness.py reports a CONSOLE finding.
---

# Console Data Refresh

The console renders `src/js/data.js` — a dated snapshot, not live reads. Stale snapshot = a
console that misreports the OS. `scripts/check_freshness.py` flags when this is needed.

## Procedure
1. **Diff reality against the snapshot**, key by key (the file is grouped and commented):
   | data.js key | Source of truth |
   |---|---|
   | `sections` | `vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md` table |
   | `pipeline.partA/partC` statuses | `vault/Architecture/Business_Plan_Generation_Pipeline.md` tables |
   | `decisions`, `options`, `registers` | `vault/Decisions/` (Decision_Log, Investment_Options, Assumptions_Register) |
   | `forecasts` | `vault/Forecasts/*_v2.md` |
   | `structure` | `vault/Architecture/Agentic_OS_Completeness_Assessment.md` scorecard |
   | `activity` | `SESSION_LOG.md` (append noteworthy events, newest last) |
   | `milestones`, `gates`, `deliverables` | `PROJECT_PROGRESS.md` |
   Where the vault-mcp server is available, use its tools (`get_sections_status`,
   `get_pipeline_status`, `lookup_decision`) instead of re-parsing by hand.
2. **Edit `data.js`**: update changed entries only; bump `meta.snapshotDate` to today.
3. **Bump `CACHE`** in `src/sw.js` (e.g. `aos-console-v2` → `v3`) so installed PWAs update.
4. **Verify**: serve locally (`npm run dev`), screenshot Command Center + any changed view;
   run `python3 scripts/check_freshness.py` — the CONSOLE finding must clear.
5. Commit with a message naming what state moved (e.g. "console: S9 → Done (Pass 2)").
