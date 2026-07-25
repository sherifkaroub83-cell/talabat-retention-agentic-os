# talabat Agentic OS Console

A professional command console for the **talabat Agentic OS** — the AASTMT MBA capstone's
AI-enabled capital-allocation and performance-management operating system for talabat's 2026
USD 175 million investment programme.

One codebase, three delivery channels:

| Channel | What you get | How |
|---|---|---|
| **Web / PWA** | Installable app on Windows, macOS, Android, iOS, Linux — today, no toolchain | Serve `src/`, click *Install* in the browser |
| **Desktop (native)** | Windows `.msi`/`.exe`, macOS `.dmg`/`.app`, Linux `.deb`/`.AppImage` | Tauri 2 — see `BUILD.md` |
| **Mobile (native)** | Android `.apk`/`.aab`, iOS `.ipa` | Tauri 2 mobile — see `BUILD.md` |

## What the console shows

Eight views over the repository's governing documents:

- **Command Center** — the governing problem, FY2025 group KPIs, the $120m/$55m allocation
  donut, execution status, capstone milestones, and the three deliverables.
- **Pipeline** — all 19 stages of the Business Plan Generation Pipeline (Part A setup,
  Part B per-section 11-stage loop with its gate rules, Part C whole-plan gates), with live
  statuses and owning agents.
- **Plan Sections** — the GSB 14-section board with per-section status and verification notes.
- **Quality Gates** — the four whole-plan gates plus the two-pass verification protocol.
- **Agents** — the eight-agent roster with missions, skills, stage assignments, and success criteria.
- **Evidence** — the five-tier evidence hierarchy, the 37-document corpus breakdown, and the
  standing evidence-discipline rules.
- **Decisions** — Decision Log (DEC-001–010), registers, and the five investment options.
- **Forecasts** — Value Driver Tree v2 (45 nodes), Scenarios v2, KPI Tree v2 (50 KPIs).

## Architecture

```
app/agentic-os-console/
├── src/                  # the app — no framework, no build step, no runtime dependency
│   ├── index.html
│   ├── css/app.css       # design system (dark-first, talabat orange, light theme toggle)
│   ├── js/data.js        # repository state snapshot — the single data source
│   ├── js/app.js         # shell, hash router, 8 views, inline-SVG charts
│   ├── manifest.webmanifest, sw.js   # PWA install + offline cache
│   └── assets/           # icons (SVG master + PNG renders)
├── src-tauri/            # Tauri 2 shell: Windows / macOS / Linux / Android / iOS
├── BUILD.md              # per-platform build instructions
└── package.json
```

The UI is deliberately dependency-free (plain DOM + SVG ES modules): nothing to install,
nothing to compile, no supply-chain surface — it runs identically in a browser, in the PWA,
and inside the Tauri WebView.

The categorical chart palette (`#E85D1F · #3B82D6 · #2FA06A · #9A6BE0`) was validated for
OKLCH lightness band, chroma floor, color-vision-deficiency ΔE separation, and contrast on
both the dark and light surfaces. Status is never conveyed by color alone (icon + label chips).

## Run it locally

```bash
cd app/agentic-os-console
npm run dev          # → http://localhost:8123  (or: python3 -m http.server 8123 --directory src)
```

## Updating the data

`src/js/data.js` is a hand-generated snapshot of the repository's governing documents
(`Problem_Charter.md`, `PROJECT_PROGRESS.md`, `vault/Architecture/*`, `vault/Decisions/*`,
`vault/Forecasts/*`, `vault/Projects/*`), stamped with its snapshot date. When the repo state
moves (a section passes Pass 2, a gate runs, a decision lands), update the relevant entries
and bump `meta.snapshotDate` — and bump `CACHE` in `sw.js` so installed PWAs pick up the change.
