---
type: layer-index
status: active
created: "2026-07-21"
---

# Research Layer

Implements the External Research Layer designed in
[[External_Research_Layer]]. Read
that document for the enumerated gap list, acceptable-provider rules, and Research Note schema.

- [[Research_Register]] — request/status table.
- [`Notes/`](Notes/) — one Research Note per resolved item (`RES-001`, `RES-002`, ...).
- [[_TEMPLATE-research-item]] — Research Note template.

**Current status:** layer scaffolded, empty. No external research has been conducted yet — items are
added to the register only when a Business Plan drafting stage actually hits a gap the corpus can't
fill (see the Orchestrator's Gap Detection stage in
`vault/Architecture/Business_Plan_Generation_Pipeline.md`), not during this architecture-design phase.

**Owned by:** the Research Agent (`.claude/agents/research-agent.md`).

## See also
[[Agentic_OS_Architecture]] · [[External_Research_Layer]]
