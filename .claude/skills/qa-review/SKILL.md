---
name: qa-review
description: The final-gate checklist for a Business Plan section - template completeness, McKinsey Lens pressure test, citation-audit consumption, research staleness check, the drafting skill's Anti-patterns list, and (added 2026-07-23) the Problem Consistency, Financial Integrity, and Geographic Evidence gates. No user-facing trigger — invoked internally by the qa-review-agent at pipeline stage 11.
---

# QA Review Skill

Full design: `vault/Architecture/Agentic_OS_Architecture.md` §3.8, `Business_Plan_Generation_Pipeline.md`.

## Checklist (run all eight, every section)

1. **Template completeness** — every required sub-bullet for this section in
   `AI_Business_Plan_Template.md` is present. List anything missing by name.
2. **McKinsey Lens:**
   - Pyramid Principle: conclusion in the first paragraph.
   - SCQA (Section 1 only): Situation → Complication → Question → Answer, in order.
   - MECE: every breakdown (segments, risks, revenue streams, cost drivers) — state explicitly why
     it's MECE, or fix it so it is.
   - Hypothesis-driven: does this section prove, refine, or kill the Section 2 governing hypothesis?
   - Value-driver traceability: do Section 4/9/13 use the same 3–5 mechanisms end to end?
3. **Citation audit consumption** — read `vault/Validation/Citation_Audit_Section_N.md`. Any open
   failure blocks approval outright.
4. **Staleness** — any Research Note (`vault/Research/Notes/`) cited that predates the current
   drafting session gets flagged for re-verification (not an automatic fail — acknowledge and note).
5. **Anti-patterns** — run every item in `.claude/skills/business-plan-drafting/SKILL.md`'s
   Anti-patterns list against this specific section.
6. **(Added 2026-07-23) Problem Consistency Gate** —
   `vault/Templates/_TEMPLATE-problem-consistency-gate.md`'s 8 checks, verifying this section reflects
   the same active business problem as `Problem_Charter.md`.
7. **(Added 2026-07-23) Financial Integrity Gate** (financial-bearing sections) —
   `vault/Templates/_TEMPLATE-financial-integrity-gate.md`'s 11 checks, verifying arithmetic and
   unit/currency/time-period consistency and `DEC-008` compliance.
8. **(Added 2026-07-23) Geographic Evidence Gate** —
   `vault/Templates/_TEMPLATE-geographic-evidence-gate.md`'s 9 checks, verifying every claim is
   correctly geography-tagged per `vault/Architecture/Geographic_Evidence_Rules.md`.

## Output

Write `vault/Validation/QA_Review_Section_N.md`: pass, or fail with a specific, actionable list of
what must change (not a vague "needs work"). On pass, the section's status cell in
`vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md` (the active tracker as of
the 2026-07-23 pivot) flips to ✅ Done.

## Rules

- You approve or reject — you do not rewrite the prose yourself. Hand fixes back to the Orchestrator.
- A section stays 🟡 (drafted, needs verification) until it has a passed review on file, never ✅ on
  the strength of a draft alone.
