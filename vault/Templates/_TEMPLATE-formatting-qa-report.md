---
type: template
title: Formatting QA Report template
updated: "2026-07-22"
---

# _TEMPLATE-formatting-qa-report

Copy this file to `vault/Validation/Formatting_QA_Report.md` (overwrite on re-run — this is a
point-in-time verdict on the current export, not an append-only log; prior runs are recoverable from
git history) each time `.claude/skills/executive-document-formatting/SKILL.md` runs. Do not edit this
template in place — see `vault/MOC/Templates and Methods.md`'s "copy, don't edit" convention.

```markdown
---
report: Formatting QA Report
run_date: YYYY-MM-DD
sections_covered: 14/14
verdict: PASS | PASS WITH MINOR FIXES | FAIL
---

# Formatting QA Report — <run date>

## 1. Run metadata

- Date of this run:
- Sections covered: (must be 14/14; list any excluded and why)
- Source-draft status confirmation: every `Section_XX_*.md` frontmatter `status:` value, as read at
  run time — copy the literal string, don't summarize (e.g. "Done — citation audit PASS ..., QA
  review PASS ..." vs. a bare "Done" are different claims)

## 2. Gate check result

- All 14 sections carry `Done (independently verified)`? Yes/No — list any that don't
- Whole-plan McKinsey Lens pressure-test record found? Yes/No, with the file checked and its date
  (informational — does not block this run; its absence is noted, not silently passed over)

## 3. Standards checklist

One row per skill §4 subsection, plus DOCX (§5) and PDF (§6) technical requirements.

| # | Standard | Result | Notes |
|---|---|---|---|
| 4.1 | Cover page | Pass / Pass with fix / Fail | |
| 4.2 | Typography | | |
| 4.3 | Color | | |
| 4.4 | Headings | | |
| 4.5 | Paragraphs | | |
| 4.6 | Callouts | | |
| 4.7 | Tables | | |
| 4.8 | Figures/exhibits | | |
| 4.9 | Numbers | | |
| 4.10 | Citations | | |
| 4.11 | Headers/footers | | |
| 4.12 | Document control block | | |
| 4.13 | Table of contents | | |
| 4.14 | Page flow / body vs. appendix | | |
| 5 | DOCX technical requirements | | |
| 6 | PDF technical requirements | | |

## 4. Content Flags (informational only — never acted on by this skill)

Anything content-shaped noticed while formatting but deliberately left untouched, per the skill's
"flag, don't fix" rule. Empty table = nothing flagged this run.

| # | Where found (section/subsection) | What was noticed | Why it's a content question, not a formatting one |
|---|---|---|---|
| | | | |

## 5. Verdict

**One of: PASS / PASS WITH MINOR FIXES / FAIL**

- If PASS WITH MINOR FIXES: list every cosmetic fix applied in this same run (what, where,
  before/after) — these must be mechanical/cosmetic only; anything content-shaped goes in §4 instead,
  never here.
- If FAIL: state exactly which checklist item(s) cannot be resolved without a content decision, and
  what decision is needed before a re-run can pass.

## 6. Export record

(Left as "Not applicable — no export performed this run" until an authorized export actually happens.)

- `Outputs/Talabat_Egypt_AI_Retention_Business_Plan.docx` — written? path, size, page count
- `Outputs/Talabat_Egypt_AI_Retention_Business_Plan.pdf` — written? path, size, page count

## See also
- [[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]]
- `.claude/skills/executive-document-formatting/SKILL.md`
- [[Publication_Layer]]
```

## See also
[[Publication_Layer]] · [[Templates and Methods]] · [[Validation and Audit]]
