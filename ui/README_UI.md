# Aegis OS Command Center

Obsidian/cyan/purple glassmorphic command-center UI for the talabat Agentic
Operating System. Rebuilt to match the "Aegis OS | Obsidian Command Center"
design language (progress ring, glass cards, glow/pulse motion, neural-map
evidence hierarchy, QA gate checklist) while every figure on screen traces to
real repository state — no fabricated financial precision, no invented
metrics.

## Quick Start

```bash
cd ui/
python3 -m http.server 8300
# open http://localhost:8300/index.html
```

Or just double-click `index.html` — it is a single, fully self-contained
file: no build step, no npm install, no CDN dependency (no Tailwind CDN, no
Google Fonts). It renders identically online or fully offline. Font stacks
fall back to system fonts that approximate Hanken Grotesk / JetBrains Mono;
add `<link>` tags for the real webfonts if you have network access and want
exact typography.

## Navigation (5 views, matching the reference designs)

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
  pending state), and an honest export-readiness card: the published DOCX/PDF
  is flagged **stale** (it predates the Stage 17 citation fixes) rather than
  falsely claiming "export ready."

## Data model

All content is embedded as one JSON blob in
`<script id="aegis-data" type="application/json">` — no external fetch, no
build step. To refresh it after repo state moves:

1. Re-derive each field from the same sources the AOS kernel uses
   (`python3 scripts/aos/cli.py status`, `vault/Decisions/Decision_Log/`,
   `vault/Validation/*_Gate.md`) — see `scripts/aos/export_console.py` for
   the equivalent procedure used by `app/agentic-os-console`.
2. Replace the JSON block in `index.html` (search for
   `id="aegis-data"`).
3. Re-run `python3 -m unittest tests/test_ui_aegis_command_center.py -v` —
   it asserts the embedded data matches the live AOS kernel (section counts,
   gate statuses, agent roster, decision dates) and that no dishonest
   "export ready" claim slipped in while a gate is still pending.

## Tests

`tests/test_ui_aegis_command_center.py` (stdlib `unittest`, no new
dependencies — mirrors `tests/test_aos.py`):

- structural: no leftover data placeholder, no external CDN `<script src>`/
  `<link href>`, all 5 nav views present, JSON blob parses.
- data-correctness: sections/Part A/Part C/agents match
  `scripts/aos/pipeline.py` and `scripts/aos/registry.py` exactly; gates show
  5 done + 1 pending (never all 6, since Stage 19 hasn't run); decisions are
  dated and sequential DEC-001..014; forecast figures are disclosed ranges,
  never single fabricated points; the publication note is honest about the
  stale export.

Run with the rest of the suite: `python3 -m unittest discover -s tests`.

## Design system

- Obsidian background `#050506`, glass cards (`backdrop-filter: blur`,
  translucent surface, hover glow).
- Intelligence cyan `#00F0FF` + neural purple `#9D4EDD` accents; ready green
  `#00FF66` for pass states, pivot amber `#FFB800` for pending/attention.
- Animated perspective grid backdrop, progress ring, shimmer/pulse/thinking-
  border motion — all CSS-only (no WebGL shaders, so it never risks a broken
  canvas context and needs no GPU).
- `prefers-reduced-motion` respected — all decorative animation disables.
- Hash-routed SPA (`#/architecture`, `#/knowledge`, `#/decision`,
  `#/forecast`, `#/publication`), vanilla JS, no framework.

## What changed from the previous draft

The prior `index.html` (Tailwind-CDN based, "talabat Agentic Command
Center") is superseded by this build. It required `cdn.tailwindcss.com` and
`fonts.googleapis.com`, both of which 403 in network-restricted sandboxes and
had to be shimmed locally to test. This version has zero external
dependencies and was verified end-to-end (all 5 views, zero console errors)
in exactly that kind of restricted environment.
