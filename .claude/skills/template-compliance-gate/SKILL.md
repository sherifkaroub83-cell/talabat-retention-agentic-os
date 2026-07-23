---
name: template-compliance-gate
description: Validation-only gate that verifies a candidate Business Plan publication (the direct 14-section assembly, or any executive/board edit of it) still satisfies AI_Business_Plan_Template.md's structural contract — section count, numbering, titles, order, and subsection coverage — before the Publication Layer is allowed to format or export it. Never edits content. No user-facing trigger — invoked internally, immediately before executive-document-formatting or any other export path, and required after any content-compression or "executive editing" pass.
---

# Template Compliance Gate

Full architectural context: `vault/Architecture/Publication_Layer.md`. This gate exists because a real
incident showed the previous design had a hole: a document that reads well can still silently violate
the graded template's structure, and nothing checked for that before export. See "Why this gate
exists" below.

## The one rule that governs this gate

**`AI_Business_Plan_Template.md` is an architectural contract, not a writing suggestion.** Its fourteen
sections — count, numbering, titles, order — may only change if the template itself changes. No agent,
skill, publication process, formatting procedure, or executive-editing pass may change them. This
gate's only job is to check that contract has been honored. It never edits content, never rewrites
prose, and never fixes what it finds — it reports PASS or FAIL and, on FAIL, exactly which
requirement broke.

## Why this gate exists

On 2026-07-22, a publication task ("make this board-ready") was executed by writing an entirely new
document — a 12-section executive report — instead of formatting the existing 14-section, template-
compliant Business Plan. The content was accurate and the prose was strong, but the deliverable no
longer satisfied `AI_Business_Plan_Template.md`: sections were merged, renamed, reordered, and reduced
from fourteen to twelve. Nothing in the pipeline at the time checked structural compliance as a
distinct property from content correctness — citation audits, QA reviews, and the whole-plan pressure
test all check whether claims are *true and well-argued*, not whether the document's *shape* still
matches the graded specification. This gate closes that gap. It does not undo or edit the executive
document that prompted it — see `vault/Architecture/Publication_Layer.md` for that record — it exists
so no future publication pass can repeat it undetected.

## When this gate runs

Immediately before any Publication Layer activity — `executive-document-formatting`, or any other
future export/editing path — on **whatever document is the actual candidate for export**, whether
that is:
- the direct assembly of all 14 verified `Section_XX_*.md` drafts, or
- an executive-edited, page-compressed, or otherwise rewritten version of that assembly.

It also re-runs after any executive-editing pass that touches prose, since compression is exactly the
kind of change most likely to tempt a rewrite into merging or dropping a section. A FAIL blocks export
outright — the Publication Layer may not proceed until the gate passes or the violation is corrected
and the specific check re-run.

## What this gate verifies (all eleven, every run)

1. **Exactly fourteen sections exist** in the candidate document.
2. **Section numbering is identical** to `AI_Business_Plan_Template.md` (1 through 14, in that literal
   sequence — no renumbering, no letter-suffixed sections, no merged numbers like "4-5").
3. **Section titles exactly match** the template's own titles (e.g. "5. AI Technology and Development",
   not "AI Solution" or any other paraphrase — read the template fresh each run, never from memory or a
   cached summary, since the whole point is to catch drift from the source of truth).
4. **Section order exactly matches** the template's order.
5. **No required section has been merged** with another (each of the 14 must be independently
   identifiable as its own section, not folded into a neighboring one for brevity).
6. **No required section has been renamed** (a consulting-style relabeling — e.g. "Strategic
   Recommendation" standing in for "Business Description" — is a rename even if the content underneath
   is otherwise faithful).
7. **No required section has been deleted.**
8. **Every required subsection defined by the template is represented somewhere inside its own
   section** — check each section's required sub-bullets from `AI_Business_Plan_Template.md` against
   the candidate document; a sub-bullet may be compressed to a sentence or a table row, but it must be
   findable, not silently dropped during an editing pass.
9. **The Executive Summary's drafting provenance is intact:** confirm Section 1's own record (its
   "Pipeline provenance note" and the project tracker) shows it was gated on all thirteen other
   sections reaching Done before being drafted, per `Business_Plan_Generation_Pipeline.md`'s
   Section-1-specific gate rule — written last, and, in the candidate document, physically placed
   first.
10. **Page count is within the project requirement** (15–25 pages, per the drafting skill's own
    "Output & submission requirements" and the Project Guide's ceiling) for whatever export format is
    about to be produced.
11. **Executive editing, if any was applied, compressed content inside sections only** — diff the
    candidate document's section-by-section structure (not prose) against the last known-compliant
    14-section assembly; any structural difference (count, numbering, titles, order, merges, deletions)
    is a FAIL regardless of how good the prose reads.

## Executive editing vs. structural editing — the line this gate enforces

**Permitted (executive editing — no gate impact):** shortening paragraphs; improving wording,
readability, exhibits, tables, diagrams, and consulting style; removing repetition; reducing page
count; improving flow within and between sections that keep their template identity.

**Prohibited (structural editing — automatic FAIL):** renaming a section; merging two or more sections;
deleting a section; reordering sections; replacing a template heading with a paraphrase; introducing a
new section hierarchy (e.g. a 12-part consulting structure) in place of the template's 14 sections;
replacing the academic template's structure with any alternative structure, however well-argued the
alternative is.

If a future request asks for a differently-structured document (a shorter board summary, a slide deck,
a one-pager) that is **not** a fresh, faithful export of these fourteen sections, that request is a
distinct deliverable, not a rewritten Business Plan, and must be named and stored as such — never
represented as if it were the template-compliant plan.

## Procedure

1. Read `AI_Business_Plan_Template.md` fresh (never cached) — extract its fourteen section titles and
   order verbatim.
2. Read the candidate document being validated for export.
3. Run checks 1–11 above, in order, recording the specific evidence for each (not just a pass/fail
   flag — cite what was found for anything short of a clean pass).
4. Write `vault/Validation/Template_Compliance_Checklist.md` from
   `vault/Templates/_TEMPLATE-template-compliance-checklist.md`, overwritten each run (a point-in-time
   verdict on the current candidate document, recoverable via git history like the Formatting QA
   Report).
5. Report the verdict to whichever process invoked this gate. **PASS only if every one of the eleven
   checks passes.** A single structural failure is a FAIL, regardless of how minor it looks or how good
   the surrounding content is.

## Rules

- This gate never edits, rewrites, renames, merges, or reorders anything — it reports.
- This gate does not check citation accuracy, evidentiary correctness, or argument quality — that is
  the citation-audit skill's and the whole-plan pressure test's job, already done upstream. This gate
  checks shape, not truth.
- On FAIL, the specific violated check(s) are named explicitly enough that a human or a future
  publication pass knows exactly what to fix — "structure changed" is not an acceptable FAIL reason on
  its own.

## See also
`vault/Architecture/Publication_Layer.md` · `AI_Business_Plan_Template.md` ·
`vault/Architecture/Business_Plan_Generation_Pipeline.md` ·
`.claude/skills/business-plan-drafting/SKILL.md` ·
`.claude/skills/executive-document-formatting/SKILL.md` ·
`vault/Templates/_TEMPLATE-template-compliance-checklist.md`
