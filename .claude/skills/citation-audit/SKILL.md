---
name: citation-audit
description: Mechanical trace-check that every number or named-fact claim in a drafted Business Plan section resolves to a Facts/Sources citation or an Approved Assumption Register entry. No user-facing trigger — invoked internally by the evidence-citation-agent at pipeline stage 9 (Citation Verification).
---

# Citation Audit Skill

Full design: `vault/Architecture/Decision_Management_Layer.md`, `Agentic_OS_Architecture.md` §3.5.

## Procedure

1. Walk the drafted section sentence by sentence. For every number, named entity fact, or specific
   claim, ask: where does this come from?
2. It must resolve to exactly one of:
   - A direct `(DocID, page N)` citation traceable through `vault/Knowledge/Facts/` or `Sources/`.
   - An `ASM-###` row in `vault/Decisions/Assumptions_Register.md` with `status: Approved`.
3. Anything that resolves to neither is a **failure** — list it with the exact sentence and the fix
   needed (either find the citation, or route it through Research/Forecast/Decision first).
4. Anything that resolves to an Assumption row with `status: Proposed` (not yet approved) is also a
   **failure** — the drafting stage moved ahead of the decision it depends on.
5. Write `vault/Validation/Citation_Audit_Section_N.md` with a clear pass/fail list.

## Rules

- 100% of numeric claims must pass — no partial credit, no "mostly cited."
- A citation to a note that itself has an unresolved internal discrepancy (flagged in that note's
  Open Questions) is not automatically a failure, but the audit must note that the discrepancy
  wasn't independently re-resolved here — cross-check it was already handled by a `DEC-XXX` record.
- Group/GCC-level statistics cited as if Egypt-specific are a failure, not a style note.
