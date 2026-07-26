# Agentic OS Command Center

Obsidian/cyan/purple glassmorphic command-center UI for the talabat Agentic
Operating System. Rebuilt to match the refreshed "Agentic OS | Obsidian
Command Center" design language (Geist/Space Mono type, `#00dbe9`/`#7701d0`
accent palette, progress ring, glass cards, glow/pulse motion, neural-map
evidence hierarchy, QA gate checklist, Audit & Verification dashboard) while
every figure on screen traces to real repository state — no fabricated
financial precision, no invented metrics, no simulated telemetry.

## Quick Start

```bash
cd ui/
python3 -m http.server 8300
# open http://localhost:8300/index.html
```

Or just double-click `index.html` — it is a single, fully self-contained
file: no build step, no npm install, no CDN dependency (no Tailwind CDN, no
Google Fonts). It renders identically online or fully offline. Font stacks
fall back to system fonts that approximate Geist / Space Mono; add `<link>`
tags for the real webfonts if you have network access and want exact
typography.

## Navigation (6 views, matching the reference designs)

- **Architecture** (Command Center) — progress ring computed live from Part
  A / sections / whole-plan-gate completion, "Next Up" card, Decision
  Readiness chip, Knowledge/Forecast/Agent Roster summary cards.
- **Knowledge** — SVG neural map of the five-tier evidence hierarchy
  (Facts → Research → Forecasts → Decisions → Plan), the 14-section Pass 2
  audit table, and three real status cards (active focus, recent insight,
  known issue).
- **Decision** — Decision Log timeline (DEC-001–014, real dates/notes),
  Investment Options table (OPT-001–005, real bucket assignments, no
  fabricated dollar precision per DEC-009), register counts.
- **Forecast** — FY2026 guidance range chart (GMV/Revenue/EBITDA — all
  disclosed ranges, never invented single points), Value Driver Tree /
  Scenarios / KPI Tree summary, Base/Upside/Downside scenario cards.
- **Publication** — Whole-plan gate checklist (Stages 14–19, real PASS/
  pending state), and an honest export-readiness card naming which of the
  three published editions are rebuilt-and-verified vs. still carrying known
  open defects — never a blanket "export ready" claim while Stage 19 hasn't
  run.
- **Audit** (new) — Audit & Verification dashboard: the same `readiness()`
  percentage as Command Center reused as the headline "VERIFIED" figure
  (never a second, separately-fabricated audit score), all 6 whole-plan
  gates as meter cards, all 14 sections as a module-audit grid, a System Log
  built from real decision records and real gate PASS/PENDING events (no
  synthetic timestamps or hashes), and an Integrity Distribution chart
  grouping sections into S1–S4/S5–S8/S9–S12/S13–S14 plus a META bucket for
  the whole-plan gates.

## Real-time / dynamic behavior

The reference mockups lean on `setInterval`-driven fake telemetry (network
load, core temperature, node counts) to feel "live." This build does the
same *mechanically* — a `setInterval` tick every second — but only ever
re-renders **genuine** client-side real-time state: a local system clock
(`#sys-clock`) and a session-uptime counter (`#sys-uptime`) measured from
page load. No business metric (readiness %, gate status, decision count) is
ever jittered or randomized; those only change when the embedded data
snapshot is regenerated from the repo.

## Data model

All content is embedded as one JSON blob in
`<script id="os-data" type="application/json">` — no external fetch, no
build step. To refresh it after repo state moves:

1. Re-derive each field from the same sources the AOS kernel uses
   (`python3 scripts/aos/cli.py status`, `vault/Decisions/Decision_Log/`,
   `vault/Validation/*_Gate.md`) — see `scripts/aos/export_console.py` for
   the equivalent procedure used by `app/agentic-os-console`.
2. Replace the JSON block in `index.html` (search for `id="os-data"`).
3. Re-run `python3 -m unittest tests/test_ui_aegis_command_center.py -v` —
   it asserts the embedded data matches the live AOS kernel (section counts,
   gate statuses, agent roster, decision dates), that the Audit view derives
   its headline figure from `readiness()` rather than a hardcoded score, and
   that no dishonest "export ready" claim or fabricated telemetry slipped in.

## Tests

`tests/test_ui_aegis_command_center.py` (stdlib `unittest`, no new
dependencies — mirrors `tests/test_aos.py`):

- structural: no leftover data placeholder, no external CDN `<script src>`/
  `<link href>`, all 6 nav views present, JSON blob parses, rebrand is
  complete (no stray "Aegis OS"/"Obsidian Core" text).
- data-correctness: sections/Part A/Part C/agents match
  `scripts/aos/pipeline.py` and `scripts/aos/registry.py` exactly; gates show
  5 done + 1 pending (never all 6, since Stage 19 hasn't run); decisions are
  dated and sequential DEC-001..014; forecast figures are disclosed ranges,
  never single fabricated points; the publication note is honest about
  edition status; the Audit view's headline score reuses `readiness()`
  rather than a second hardcoded percentage; no fake telemetry strings
  (network load, core temp, `Math.random()`) appear anywhere in the file.

Run with the rest of the suite: `python3 -m unittest discover -s tests`.

## Design system

- Obsidian background `#051424`, glass cards (`backdrop-filter: blur`,
  translucent surface, hover glow).
- Intelligence cyan `#00dbe9` + neural purple `#7701d0` accents; ready green
  `#00FF66` for pass states, pivot amber `#FFB800` for pending/attention.
- Animated perspective grid backdrop, progress ring, shimmer/pulse/thinking-
  border motion — all CSS-only (no WebGL shaders, so it never risks a broken
  canvas context and needs no GPU).
- `prefers-reduced-motion` respected — all decorative animation disables.
- Hash-routed SPA (`#/architecture`, `#/knowledge`, `#/decision`,
  `#/forecast`, `#/publication`, `#/audit`), vanilla JS, no framework.

## What changed from the previous draft

The prior "Aegis OS" build (`#050506`/`#00F0FF`/`#9D4EDD`, Hanken Grotesk /
Inter / JetBrains Mono) is superseded by this "Agentic OS" refresh
(`#051424`/`#00dbe9`/`#7701d0`, Geist / Space Mono), which also adds the
Audit & Verification view and the genuine live-clock/uptime chrome. Zero
external dependencies retained; verified end-to-end (all 6 views, zero
console errors) via headless Chromium.
