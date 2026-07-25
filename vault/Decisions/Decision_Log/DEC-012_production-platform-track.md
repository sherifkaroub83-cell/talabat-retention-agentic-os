---
id: DEC-012
status: approved
date: "2026-07-24"
approved: "2026-07-25 — user instruction to implement the blueprint incrementally, repeated after this record's options were presented; executed as Option 2 (scoped Track B), the only reading compatible with the capstone deadline and this environment"
owner: Sherif Samy Karoub (user)
supersedes: none
---

# DEC-012 — Track B: evolve the Agentic OS into a production platform (proposed, not approved)

## Question
Should the Agentic OS, after the capstone deliverables ship, be evolved into a production-grade
multi-user agentic platform along the lines of the externally-drafted "Final Blueprint"
(52-week plan: service APIs, auth/RBAC, PostgreSQL/Redis/Elasticsearch/Neo4j, vector retrieval,
DAG workflow engine, Kubernetes/CI-CD, cross-platform workflow-first UI)?

## Why this is a decision, not a task
The blueprint changes the *product*, not just the implementation: from "a governed OS that
produces Group G02's graded deliverables" to "a commercial-grade platform." Per this OS's
conventions, a scope change of that magnitude requires an explicit, owned, dated decision —
it cannot be inferred from an instruction to execute a pasted document, especially one whose
current-state description of this repository is materially out of date (see the corrections
table in [[Production_Architecture_Assessment_2026-07-24]]).

## Options
1. **Approve Track B in full** — commit to the platform build post-capstone (team/resourcing
   required; the 52-week estimate is credible for its scope).
2. **Approve Track B scoped** (recommended candidate) — adopt only Tier 3 items 13–18 of the
   assessment (local hybrid retrieval, interactive workflow console, coded pipeline runner,
   cost telemetry, multi-project support), keeping the zero-server ethos; defer the
   enterprise stack until a real multi-user requirement exists.
3. **Decline** — the OS remains a single-team document-production system; Tier 1–2 hardening
   (tests, CI, live console bridge) still proceeds as ordinary maintenance.

## Ruling (2026-07-25)
**Option 2 approved — scoped Track B.** Implementation proceeds incrementally under the
blueprint's own rules (backward compatible, never break existing functionality, every commit
tested via CI), mapped to this repository's scale: Milestone 1 = tests + CI + the coded
pipeline kernel (planner/scheduler/state/execution-graph over the 19-stage pipeline) and the
four registries (agents/skills/MCP/model-router); subsequent milestones per the assessment's
Tier 3 list. The enterprise stack (auth/RBAC, PostgreSQL/Redis/ES/Neo4j, Kubernetes,
multi-tenancy) remains deferred until a genuine multi-user requirement exists — reopen this
record to activate it. Capstone work (Pass 2 verification, gates, publication) always takes
precedence over Track B milestones.

## Consequences of approval (either approving option)
- A separate roadmap document and probably a separate repository/branch strategy (the capstone
  repo's history is a graded artifact and should not absorb a platform build).
- Resourcing decision (the blueprint assumes 5–7 engineers; a scoped Track B is 1-person-scale).
- LLM_Layer.md gains a real API/cost budget section.

## See also
[[Production_Architecture_Assessment_2026-07-24]] · [[Agentic_OS_Completeness_Assessment]] · DEC-011
