---
id: DEC-012
status: proposed
date: "2026-07-24"
owner: "[requires user approval — Sherif Samy Karoub]"
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

## Interim ruling (until the owner decides)
Tier 1 (capstone completion) and Tier 2 (tests/CI/live-bridge hardening) of
[[Production_Architecture_Assessment_2026-07-24]] are in scope as ordinary work. **No Tier 3+
item may start.** Nothing from the blueprint's Phase 0–7 plan is authorized.

## Consequences of approval (either approving option)
- A separate roadmap document and probably a separate repository/branch strategy (the capstone
  repo's history is a graded artifact and should not absorb a platform build).
- Resourcing decision (the blueprint assumes 5–7 engineers; a scoped Track B is 1-person-scale).
- LLM_Layer.md gains a real API/cost budget section.

## See also
[[Production_Architecture_Assessment_2026-07-24]] · [[Agentic_OS_Completeness_Assessment]] · DEC-011
