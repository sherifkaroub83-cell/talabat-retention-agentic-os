---
type: architecture
status: approved
created: "2026-07-24"
scope: "The LLM execution layer of the Agentic OS: paths, model routing, fallback, and cost governance. Added per Agentic_OS_Completeness_Assessment step 3."
---

# LLM Layer — execution paths, model routing, and governance

The sixth layer of the OS ([[Agentic_OS_Completeness_Assessment]]): which language models run
the OS, on what path, with what fallback, and under what cost discipline. Before this note the
layer existed but was undocumented — one subscription path, no stated policy.

## 1. Execution paths

| Path | What it is | Status | Authority |
|---|---|---|---|
| **Subscription session** (Claude Code, interactive or web) | The path every pilot and drafting session has actually used | **Primary — authoritative** | All pipeline stages, including the ones that gate content (13.9, 13.11, gates 14–18) |
| **API** (Anthropic API key via environment variable) | Headless/scripted runs — e.g. a scheduled citation-freshness sweep, or the console's future live-refresh | Configured on demand; **key lives in the environment, never in the repo** | Same models ⇒ same authority, but scripted runs still may not flip section statuses — a human-invoked session reviews their output |
| **Local model** (e.g. Ollama) | Offline/no-quota drafting aid | Optional, not installed | **Below the quality bar for any verification stage.** Draft-only; output enters the pipeline as an ordinary unverified draft |

## 2. Model routing per agent

Recorded as `model:` frontmatter in each `.claude/agents/*.md` (Claude Code honors this per
subagent). `inherit` = the session's model — the strongest available tier, which is what
verification work deserves.

| Agent | Model | Why |
|---|---|---|
| `bp-orchestrator` | inherit | Holds pipeline state; sequencing errors cascade |
| `qa-review-agent` | inherit | Final gate; Pilot 4 proved a strong second pass catches what a strong first pass missed — never economize here |
| `evidence-citation-agent` | inherit | Citation audits produced this project's only hard FAILs; precision work |
| `decision-steward` | inherit | Writes the records everything else cites |
| `forecasting-agent` | inherit | Method-transparent projections; arithmetic + framing rigor |
| `exec-summary-agent` | inherit | Whole-plan synthesis under SCQA |
| `research-agent` | inherit | Source-quality judgment; confidence scoring |
| `kpi-agent` | inherit | KPI↔driver-tree tracing; could drop a tier if quota demands — revisit only with evidence |
| `publication-agent` (new) | inherit | Formatting fidelity of the graded deliverable |

**Rule: economize on *scope*, never on the *verification stages*.** If quota pressure appears,
shorten runs or defer work — do not route 13.9/13.11/gates to a weaker model.

## 3. Fallback, in order
1. Subscription session (primary). 2. API key path (same models; export
`ANTHROPIC_API_KEY` in the environment — a leaked-key incident is a security event, log it).
3. Local model for draft-only work, output labeled and queued for normal verification. 4. Stop
— an unverified deliverable is worse than a late one (per the two-pass protocol's rationale).

## 4. Cost / usage governance
Each `SESSION_LOG.md` entry should end with one line: approximate session scale (e.g. "~17
agent invocations") — already the pilots' habit; now standing policy. No token-level
accounting is required for the capstone; the discipline is *visibility*, not budgeting.

## See also
[[Agentic_OS_Completeness_Assessment]] · [[Agentic_OS_Architecture_v2]] ·
`.claude/agents/` (the `model:` frontmatter this note governs)
