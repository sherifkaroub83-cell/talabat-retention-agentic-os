---
type: architecture
status: assessment
created: "2026-07-24"
scope: "Structural completeness review of the whole Agentic OS against the six-layer reference model. Read-only evaluation — proposes, does not execute."
---

# Agentic OS Completeness Assessment — the road to 100%

**Reference model (per owner's taxonomy):** an Agentic OS = **Agents · Skills · MCP (Agentic
Tools) · Memory · Brain (Second Brain) · LLMs**. This note scores each layer against what a
fully-built OS requires, cites the repository evidence for each score, and lays out the
step-by-step plan to close every gap. It complements — does not replace —
[[Agentic_OS_Architecture]] (v1 design) and [[Agentic_OS_Architecture_v2]] (post-pilot evolution),
which assess the OS against its *own* design; this note assesses it against the *generic* model.

The console (`app/agentic-os-console/`) renders the scorecard below on its **OS Map** view —
keep `src/js/data.js`'s `structure` array in sync with this table.

## Scorecard

| # | Layer | Score | One-line verdict |
|---|---|---|---|
| 1 | **Agents** | **90%** | 8 durable, MECE agents, execution-validated across 4 pilots — the strongest layer |
| 2 | **Skills** | **85%** | 12 skills incl. 4 gates; only Phase-5 output skills missing |
| 3 | **MCP · Agentic Tools** | **15%** | The one genuinely open layer — undecided since Phase 2, no server, no live tools |
| 4 | **Memory** | **90%** | All four memory files current + `/session-end` + nightly maintenance |
| 5 | **Brain (Second Brain)** | **80%** | 103-note cited graph, 5-tier evidence model; post-pivot research + Pass 2 pending |
| 6 | **LLMs** | **40%** | Works, but on a single undocumented subscription path — no policy, no fallback |
| — | **Overall (unweighted)** | **≈67%** | Operationally stable core; completeness gaps are known and bounded |

---

## Layer-by-layer evaluation

### 1 · Agents — 90%

**Exists (evidence):** 8 named subagents in `.claude/agents/` (`bp-orchestrator` + 7
specialists), designed MECE against the 14 missing capabilities (Architecture v1 §2–3);
execution-validated by Pilots 1–4 — 17 real invocations, zero failures
(`Pilot4_System_Stability_Report.md`); invocation pattern corrected from evidence (v2 Change 1:
flat top-level invocation); two-pass verification protocol (v2 Change 2).

**Missing:**
- A **publication/presentation agent** — Phase 5's deck (30 slides) and OS structure document
  have no owning agent (the `executive-document-formatting` skill exists but no agent binds it).
- **Per-agent model/effort policy** — agent definitions don't state which LLM tier or reasoning
  effort each stage warrants (QA/citation passes deserve the strongest model; formatting doesn't).
- Human **role assignment** (6 members ↔ 5 guide roles) — open since Phase 1; agents have owners
  on paper but no named humans.

### 2 · Skills — 85%

**Exists:** 12 project skills — `business-plan-drafting`, `session-end`, `external-research`,
`forecast-builder`, `decision-log`, `evidence-ranking`, `citation-audit`, `qa-review`,
`template-compliance-gate`, `executive-document-formatting`, plus export scripts in `scripts/`.
The gate skills encode the three post-pivot QA gates.

**Missing:**
- **`deck-builder`** — procedure for the 30-slide presentation (5 × 6 members), sourcing from
  finished sections, respecting the same citation discipline.
- **`os-structure-doc`** — procedure for the 3–5-page OS document (this assessment + the
  architecture notes + the console are its raw material).
- **`console-data-refresh`** — regenerate the console's `data.js` snapshot from the governing
  documents so the UI can't silently go stale.

### 3 · MCP (Agentic Tools) — 15% ← the critical gap

**Exists:** built-in Claude Code tools only (file tools, WebSearch/WebFetch for the research
agent). The MCP decision is **explicitly open and past its Phase 2 deadline**
(`PROJECT_PROGRESS.md`, Blockers). Score is not 0 because tool *use* is real and disciplined —
but nothing is *exposed as* tools.

**Missing — proposed `vault-mcp` server (read-only, ~1 session to build):**
| Tool | Returns |
|---|---|
| `get_pipeline_status()` | Part A/B/C stage states, per-section status |
| `lookup_decision(id)` / `lookup_assumption(id)` | DEC/ASM/OPT records, parsed from the registers |
| `search_facts(query)` | Matching `Knowledge/Facts` notes with citations |
| `get_kpi_tree()` / `get_scenarios()` | Forecast-layer structures |
| `verify_citation(claim)` | Whether a claim resolves to a Facts note or Approved ASM |

This closes three things at once: the taxonomy's missing layer, the capstone's **MCP
distinction credit** (still on the table), and the console's live-data feed (the same server
can emit `data.js`). Requires a Decision record (propose **DEC-011**) since "pursue or skip"
is a management call.

### 4 · Memory — 90%

**Exists:** `CLAUDE.md` (project memory, actively maintained), `MEMORY.md`, `PROJECT_PROGRESS.md`,
`SESSION_LOG.md` (10 sessions, newest-first), `/session-end` automation, nightly-maintenance
script, and vault identity files (`identity.md`, `soul.md`, `user.md`).

**Missing:**
- **Automated staleness detection** — Pilot 4's one recurring instability class (QA/Citation
  frontmatter going stale after addenda; new Validation files unlinked from MOCs) is handled by
  convention, not tooling. A check in the nightly script closes it.
- **Console snapshot freshness** — `data.js` is manually dated; tie it to the same check.

### 5 · Brain (Second Brain) — 80%

**Exists:** the OS's best-audited layer — 103-note connected graph (0 orphans, 937 semantic
links), 29 source notes, Facts/Topics/Strategic/Entities, 13 MOCs, and the five-tier evidence
hierarchy (Facts → Research → Forecasts → Decisions → Plan) with the "cite only upward" rule.
Decision (10 DEC · 47 ASM · 5 OPT), Forecast (45-node VDT v2, Scenarios v2, 50-KPI tree v2)
and Research layers all populated and versioned.

**Missing:**
- **Stage 5 research re-run** against the pivoted problem — the 4 existing Research Notes are
  superseded; the new problem has zero live external-research coverage.
- **Stage 12 completion** — per-option stage gates not yet re-verified against each OPT record.
- **Pass 2 independent verification** of all 14 v2 sections — the drafted tier of the Brain is
  only self-reviewed; submission-final status requires the independent pass.

### 6 · LLMs — 40%

**Exists:** the OS runs entirely on Claude via the Claude Code subscription — real, proven, but
a single undocumented path.

**Missing:**
- **An LLM layer policy note** (`vault/Architecture/LLM_Layer.md`): which execution paths exist
  (subscription session / API / local), which is authoritative, and what each agent needs.
- **Model-routing policy per agent** — strongest model for QA/citation/decision stages; lighter
  tiers acceptable for formatting/extraction. Record in each agent's frontmatter.
- **Fallback strategy** — what happens at quota/offline: an API key path (env-var config,
  never committed) and optionally a local model (e.g. Ollama) for draft-only work, clearly
  marked below the quality bar for verification stages.
- **Cost/usage governance** — even one line per session in `SESSION_LOG.md`.

---

## Step-by-step plan to 100%

Ordered so that each step unblocks the next; effort in working sessions. Steps 1–3 are
structural (the taxonomy's gaps); steps 4–6 are executional (the capstone's gaps); step 7 is
delivery.

| Step | Action | Layer(s) closed | Owner | Effort | Depends on |
|---|---|---|---|---|---|
| **1** | Record **DEC-011: MCP layer — pursue** (or explicitly skip, with rationale) via `decision-steward` | MCP | user + decision-steward | 0.25 | — |
| **2** | Build **`vault-mcp`** read-only server (tools table above); register in `.claude/settings`; smoke-test from a session | MCP 15→90% | dev session | 1 | 1 |
| **3** | Write **`LLM_Layer.md`** policy note + add model/effort frontmatter to all 8 agents + env-var API fallback doc | LLMs 40→85% | dev session | 0.5 | — |
| **4** | **Stage 5 re-run**: research-agent resolves the pivoted problem's Research Register items; **Stage 12**: kpi-agent re-verifies per-option stage gates | Brain 80→90% | research-agent, kpi-agent | 1 | — |
| **5** | **Pass 2 verification × 14 sections** (independent citation audit + QA + three gates per section, fresh threads) | Brain 90→95% | evidence-citation-agent, qa-review-agent | 2–3 | 4 |
| **6** | **Whole-plan gates 14–18**, then Stage 19 handoff → `executive-document-formatting` → final DOCX/PDF in `Outputs/` | Brain →100% | qa-review-agent → orchestrator | 1 | 5 |
| **7** | Add **`deck-builder`** + **`os-structure-doc`** skills (and a `publication-agent` binding them); produce the 30-slide deck + 3–5-page OS document | Skills 85→100%, Agents 90→100% | new agent | 1–1.5 | 6 |
| **8** | Add **staleness checks** to nightly maintenance (frontmatter dates, MOC links, console snapshot age); add **`console-data-refresh`** skill (or wire it to vault-mcp) | Memory 90→100% | dev session | 0.5 | 2 (ideal) |
| **9** | Close admin: map 6 members ↔ 5 roles; team walkthrough of the console + OS | Agents (human side) | user/team | 0.5 | — |

**Total: ~8–9 working sessions to a 100% six-layer OS**, with steps 4–6 being the same work
the capstone already requires (they are not overhead added by this assessment).

## What should NOT change

The pilots earned these; don't reopen them: the five-tier evidence hierarchy and its gate
rules; the 19-stage pipeline sequence; the flat invocation pattern; the two-pass verification
protocol; the decision/assumption schema. Structural completion means *adding the missing
layers around* this core, not redesigning it.

## See also
[[Agentic_OS_Architecture]] · [[Agentic_OS_Architecture_v2]] ·
[[Business_Plan_Generation_Pipeline]] · [[Implementation_Roadmap]] ·
`app/agentic-os-console/` (renders this scorecard on the OS Map view)
