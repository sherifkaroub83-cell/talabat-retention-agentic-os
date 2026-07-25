---
name: qa-review
description: Final gate for a Business Plan section or assembled plan - factual, financial, geographic, decision, editorial readability, completeness, template, and external-reader validation.
---

# QA Review Skill

Full design: `vault/Architecture/Agentic_OS_Architecture.md` §3.8, `Business_Plan_Generation_Pipeline.md`.

Before review, load `Business_Plan_Generation_Contract.md` and
`vault/Architecture/Business_Plan_Editorial_Standard.md`.

## Checklist (run all twelve, every section)

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
9. **Editorial Readability Gate** — test sentence length, answer-first prose, acronyms, raw body
   references, prohibited expressions, repeated limitations, and professional executive voice.
10. **Content Completeness Gate** — no empty heading, incomplete bullet, truncated sentence, broken
    table row, missing answer, or body/appendix misplacement.
11. **Decision Consistency Gate** — preserve active decisions and assumptions while keeping raw codes
    out of the main narrative.
12. **External Reader Test** — a reader without repository access can understand every paragraph,
    recommendation, limitation, and management action.

## Output

Write `vault/Validation/QA_Review_Section_N.md`: pass, or fail with a specific, actionable list of
what must change (not a vague "needs work"). On pass, the section's status cell in
`vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md` (the active tracker as of
the 2026-07-23 pivot) flips to ✅ Done.

## Rules

- You approve or reject — you do not rewrite the prose yourself. Hand fixes back to the Orchestrator.
- A section stays 🟡 (drafted, needs verification) until it has a passed review on file, never ✅ on
  the strength of a draft alone.
- A factual PASS is not an editorial PASS. Record editorial, completeness, and external-reader
  results separately in every QA artifact.
