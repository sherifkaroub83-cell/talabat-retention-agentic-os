---
type: template
title: Business Plan Template Compliance Checklist template
updated: "2026-07-22"
---

# _TEMPLATE-template-compliance-checklist

Copy this file to `vault/Validation/Template_Compliance_Checklist.md` (overwrite on re-run — this is a
point-in-time verdict on the current candidate document, not an append-only log; prior runs are
recoverable from git history) each time `.claude/skills/template-compliance-gate/SKILL.md` runs, per
`vault/MOC/Templates and Methods.md`'s "copy, don't edit" convention.

```markdown
---
report: Business Plan Template Compliance Checklist
run_date: YYYY-MM-DD
candidate_document: <path to the document being validated for export>
verdict: PASS | FAIL
---

# Business Plan Template Compliance Checklist — <run date>

**Candidate document:** <path>
**Validated against:** `AI_Business_Plan_Template.md` (read fresh this run)

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Exactly fourteen sections exist | Pass / Fail | |
| 2 | Section numbering identical to the template | Pass / Fail | |
| 3 | Section titles exactly match the template | Pass / Fail | |
| 4 | Section order exactly matches the template | Pass / Fail | |
| 5 | No required section merged with another | Pass / Fail | |
| 6 | No required section renamed | Pass / Fail | |
| 7 | No required section deleted | Pass / Fail | |
| 8 | Every required subsection represented somewhere in its own section | Pass / Fail | |
| 9 | Executive Summary drafted last, placed first (provenance confirmed) | Pass / Fail | |
| 10 | Page count within the project requirement (15–25 pages) | Pass / Fail | |
| 11 | Any executive editing compressed content only, did not change structure | Pass / Fail | |

## Verdict

**PASS** only if all eleven checks pass. **FAIL** if any single structural requirement is violated —
name the exact check(s) that failed and what specifically was found (not just "structure changed").

## If FAIL

- Violated check(s):
- Specific finding:
- What must change before this candidate document can proceed to the Publication Layer:

This gate does not fix the violation itself — it reports it back to whichever process is producing the
candidate document.

## See also
- [[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]]
- `.claude/skills/template-compliance-gate/SKILL.md`
- [[Publication_Layer]]
```

## See also
[[Publication_Layer]] · [[Templates and Methods]] · [[Validation and Audit]]
