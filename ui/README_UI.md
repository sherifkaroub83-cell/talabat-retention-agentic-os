# Aegis OS Dashboard

Interactive command-center UI for the talabat Agentic Operating System.

## Quick Start

1. Download `index.html` from this folder
2. Open it in any modern browser (Chrome, Edge, Firefox, Safari)
3. No server required — fully self-contained

## Features

### Navigation
- **Dashboard** — Pipeline progress, agent status, knowledge stats, validation gates
- **Pipeline (19)** — Visual 19-stage business plan generation tracker
- **Agents (8)** — Fleet status with success rates and task counts
- **Skills (10)** — Registry with invocation counts and trigger commands
- **Knowledge** — Vault breakdown, evidence hierarchy, semantic links
- **Decisions** — Decision Log, Assumptions Register, Investment Options
- **Research** — Source quality, provider filters, research status
- **Forecasts** — Scenario modeling (Base / Upside / Downside), Value Driver Tree
- **Validation** — Citation audits, QA reviews, McKinsey Lens checklist
- **Projects** — Deliverable tracker, export status
- **Memory** — System memory files, identity configuration
- **Session Logs** — Chronological session history

### Design System
- Dark obsidian theme (`#050506`)
- Intelligence cyan (`#00F0FF`) + neural purple (`#9D4EDD`) accent palette
- Glassmorphism cards with backdrop blur
- JetBrains Mono for labels and data
- Hanken Grotesk for headlines
- Inter for body text
- Material Symbols icons

### Data Model
All data is embedded in `osData` JavaScript object. To sync with your vault:

1. Update `osData.pipeline.stages` to match your current progress
2. Update `osData.vault` counts from your latest audit
3. Update `osData.decisions.recent` with new Decision Log entries
4. Update `osData.businessPlan.sections` as sections complete

### Export Controls
Footer buttons trigger:
- **PDF Export** — Alerts Chromium workaround requirement
- **DOCX Bundle** — Alerts python-docx script path
- **Archive** — Alerts vault snapshot location

## Deployment Options

### Option A: Static File (Simplest)
```bash
cp ui/index.html /path/to/your/vault/
# Open in browser
```

### Option B: GitHub Pages
1. Commit `index.html` to repo root or `/docs` folder
2. Enable GitHub Pages in repo settings
3. Dashboard live at `https://sherifkaroub83-cell.github.io/talabat-retention-agentic-os/`

### Option C: Local Server (for future API integration)
```bash
cd ui/
python -m http.server 8080
# Open http://localhost:8080
```

## File Structure
```
ui/
├── index.html          # Single-file dashboard (89KB)
├── README_UI.md        # This file
└── data/               # Future: dynamic data connectors
    └── vault-sync.js   # Future: Obsidian vault → UI sync
```

## Roadmap
- [ ] Live vault sync via Obsidian Dataview API
- [ ] WebSocket pipeline stage updates
- [ ] Real agent status from Claude Code runtime
- [ ] MCP server integration for tool status
- [ ] Dark/light mode toggle
- [ ] Mobile responsive refinements
