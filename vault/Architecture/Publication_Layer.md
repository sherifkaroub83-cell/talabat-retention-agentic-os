---
type: architecture
status: approved
created: "2026-07-22"
scope: "Narrow extension to the validated Agentic OS: how a fully-drafted, independently-verified Business Plan becomes a submission-ready DOCX/PDF. Does not redesign the OS and is not Architecture Version 3 — see the explicit scope note at the end."
---

# Publication Layer

The Agentic OS's content pipeline (`Business_Plan_Generation_Pipeline.md`'s 11 stages) ends when a
section reaches **✅ Done (independently verified)**. As of this document's authoring, all 14
sections have reached that state (see `vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md`).
Nothing in the OS as designed so far turns that finished content into the two deliverables the
capstone is actually graded on: a submission-ready DOCX/PDF Business Plan. This document names that
gap and closes it narrowly — one new skill, one new template, no change to any existing agent, skill,
or pipeline stage.

## 1. Role of formatting in the OS

The Publication Layer is the terminal, plan-level step after the per-section content pipeline, not a
replacement for any stage inside it:

```
Per-section content pipeline (11 stages, unchanged)
        │
        ▼
14/14 sections ✅ Done (independently verified)
        │
        ▼
Whole-plan McKinsey Lens pressure test  ← a separate deliverable, not part of this layer;
        │                                  this layer checks for its record, does not perform it
        ▼
Template Compliance Gate  ← validation only; verifies the candidate document (direct
        │                    assembly, or any executive-edited version of it) still has
        │                    exactly 14 sections, correctly numbered/titled/ordered, per
        │                    AI_Business_Plan_Template.md. FAIL blocks everything below.
        ▼
Publication Layer
  ├── executive-document-formatting skill  → applies presentation standards, produces
  │                                            Formatting QA Report
  └── Export                                → Outputs/*.docx, Outputs/*.pdf
```

The distinction this layer exists to protect: **content correctness, structural compliance, and
presentation correctness are three different questions, verified by three different mechanisms, and
must stay separable.** The 11-stage pipeline (citation audit, QA review, decision escalation) owns
content correctness. The Template Compliance Gate owns structural compliance with
`AI_Business_Plan_Template.md` — a distinct property a content-correct, well-argued document can still
violate (see the retrospective note at the end of this document). This layer itself owns only whether
already-approved, structurally-compliant content is legible, consistent, and submission-grade in its
final document form.

> **The Publication Layer's contract, stated explicitly:** the Publication Layer owns presentation
> only. It does not own document structure. Document structure is defined exclusively by
> `AI_Business_Plan_Template.md`. The Publication Layer is prohibited from modifying that structure.

## 2. Input gate

The Publication Layer will not run against a partial, unverified, or structurally non-compliant plan.
Its gate conditions, checked before anything else:

- All 14 `Section_XX_*.md` drafts in `vault/Projects/Business_Plan_Drafts/` carry `status: ... Done
  (independently verified)` in frontmatter — not merely `Done (self-reviewed)`, and not `🟡 drafted`.
- The project tracker's own status table agrees (14/14).
- The whole-plan McKinsey Lens pressure test's existence is checked and *noted* — its absence does
  not block a formatting run (formatting and the pressure test are independent, both prerequisites to
  final submission, not sequentially dependent on each other), but the Formatting QA Report records
  whether it was found.
- **The Template Compliance Gate (`.claude/skills/template-compliance-gate/SKILL.md`) has run against
  the specific candidate document about to be exported and returned PASS.** This is a hard block, not
  a noted-but-non-blocking condition like the pressure test above — a FAIL here means the candidate
  document does not have fourteen correctly numbered, titled, and ordered sections, and nothing
  downstream may format or export it until that is fixed and the gate re-run.

If any section fails the gate, or the Template Compliance Gate returns FAIL, the process stops and
reports exactly what blocks the run, rather than formatting a document with an unverified section or a
structural violation silently included.

**This gate applies to every candidate document, not only the direct 14-draft assembly.** If a
publication task asks for an executive edit, a page-compressed version, or any other rewritten form of
the plan, that candidate must also pass the Template Compliance Gate before export — "the content is
accurate and reads well" is not a substitute for "the structure still matches
`AI_Business_Plan_Template.md`." See the retrospective note at the end of this document for why this
sentence exists.

## 3. The formatting skill

`.claude/skills/executive-document-formatting/SKILL.md` is this layer's only operative procedure.
Full detail lives there; the summary relevant to this architecture document:

- **Strict content/formatting separation**, enforced by an explicit permitted/prohibited action list
  and a "flag, don't fix" discipline for anything content-shaped noticed mid-format.
- **No new agent.** Unlike the content pipeline's eight named agents, this layer does not need a
  dedicated subagent — it is a single, self-contained procedure with no multi-stage delegation, no
  evidence ranking, and no judgment calls that require the Decision Log's machinery. If a future
  formatting run does surface a genuine judgment call (see §5), it is escalated to the existing
  `decision-steward`/user, not resolved by a new formatting agent.
- **Invocation:** `/format-business-plan`, run once the input gate (§2) is satisfied.

## 4. DOCX and PDF output

Two files, specified now for future use, **not produced by the task that authored this document**:

- `Outputs/Talabat_Egypt_AI_Retention_Business_Plan.docx`
- `Outputs/Talabat_Egypt_AI_Retention_Business_Plan.pdf`

Both are generated from the same assembled source (all 14 verified drafts, in template order); the
PDF is exported from the finished DOCX so the two never diverge. Technical requirements (real
paragraph styles, embedded fonts, accessible tagging, auto-generated TOC/bookmarks) are specified in
the skill file's §5/§6, not repeated here.

## 5. Formatting QA

Every formatting run produces `vault/Validation/Formatting_QA_Report.md`, from the reusable
`vault/Templates/_TEMPLATE-formatting-qa-report.md`. This deliberately mirrors the existing
`Citation_Audit_Section_N.md` / `QA_Review_Section_N.md` convention already established in
`vault/Validation/` — the Publication Layer gets the same kind of auditable, dated verdict record the
content pipeline already produces, not a bespoke format. The report's three-way verdict (PASS / PASS
WITH MINOR FIXES / FAIL) and its **Content Flags (informational only)** section are how the
content/formatting boundary stays auditable after the fact, not just asserted in the skill's own
instructions.

If a formatting run genuinely cannot proceed without a content judgment call (for example, an
internal inconsistency the formatting pass happens to notice, that no prior citation audit caught),
that is escalated exactly like any other open question in this project — to `decision-steward` or the
user — never resolved unilaterally by the formatting procedure.

## 6. Content-protection rules

Restated here at the architecture level (the skill file is the operative detail) because this is the
single property this whole layer exists to guarantee:

1. No number, claim, citation, decision, or conclusion changes between the last independently-verified
   section draft and the exported DOCX/PDF.
2. No open item or labeled gap already on record is silently resolved, hidden, or smoothed over by
   formatting.
3. No content is fabricated to make the document "look more finished" — including cover-page assets
   the repository does not contain (see the skill file's note on the absent logo image).
4. Every formatting run is independently checkable against the Formatting QA Report's standards
   checklist — presentation quality is verified, not just asserted.

## 7. Export readiness

A plan is export-ready only when: (a) the input gate (§2) passes, (b) the Formatting QA Report's
verdict is PASS or PASS WITH MINOR FIXES with the fixes applied, and (c) the user has explicitly
authorized export — per this project's standing "propose, don't execute" discipline for producing
final deliverables. This document does not itself authorize any export; it specifies the mechanism
that will run once authorized.

## 8. Assembly logic

The Business Plan is assembled strictly section-by-section, in the exact order
`AI_Business_Plan_Template.md` defines:

```
Section 1 → Section 2 → Section 3 → ... → Section 14
```

The assembler (`executive-document-formatting`, or any future publication procedure) may compress
prose, improve transitions, improve narrative flow, and improve executive readability *within and
between* sections that keep their template identity. It may not alter the template hierarchy: it may
not merge two sections into one, split one section into two, reorder sections, or substitute a
section's required title with a paraphrase. The Template Compliance Gate (§1, §2) is the mechanism
that checks this held true for whatever document assembly actually produced.

## Explicit scope boundary

**This is not Architecture Version 3.** It does not revisit, validate, or change anything in
`Agentic_OS_Architecture.md` or `Agentic_OS_Architecture_v2.md` — the eight content-pipeline agents,
the four-tier evidence model, the 11-stage pipeline, and the two-pass verification protocol are all
unchanged and out of scope here. This document adds exactly one new layer, downstream of all of them,
that turns their already-verified output into a submission-ready file.

**Update, 22/07/2026 — first real export.** On explicit user authorization, this layer ran for real:
[[Whole_Plan_McKinsey_Lens_Pressure_Test]] passed (PASS WITH MINOR FIXES, both fixes applied first),
the input gate passed 14/14, and `Outputs/Talabat_Egypt_AI_Retention_Business_Plan.docx`/`.pdf` were
produced with [[Formatting_QA_Report]] recording the run (verdict: PASS WITH MINOR FIXES — several
formatting-pipeline bugs found via systematic integrity scan and fixed; zero content, number, or
citation changed). One disclosed deviation from §4/§6 above: the PDF was produced via a headless-
Chromium print pipeline rather than DOCX→LibreOffice conversion, because LibreOffice does not function
in this execution environment (confirmed independent of this document) — see the Formatting QA
Report's Content Flags for full disclosure. This does not change this layer's design, only how this
one run's PDF technical requirement was satisfied.

**Update, 22/07/2026 (later the same day) — structural drift finding and corrective gate.** A
follow-on publication task asked for a "board-ready" edition of the plan. It was executed by writing a
new, 12-section document in a consulting structure — sections merged, renamed, and reordered relative
to `AI_Business_Plan_Template.md` — rather than by formatting the existing, template-compliant
14-section assembly. The resulting document (`Executive_Business_Plan.md`,
`Outputs/Talabat_Egypt_Executive_Business_Plan.docx`/`.pdf`) is content-accurate — every figure and
conclusion traces to the audited plan, nothing was fabricated — but it does not satisfy the graded
specification's structure, and nothing in this layer's design at the time checked for that distinct
failure mode. **Root cause:** every gate that existed (citation audit, QA review, the whole-plan
pressure test, the Formatting QA Report) checks whether content is *true and well-argued* or
*correctly presented*; none checked whether the document's *shape* still matched the template. **Fix:**
the Template Compliance Gate (§1, §2), added the same day, closes exactly this gap — see
`.claude/skills/template-compliance-gate/SKILL.md` for the full design and its own account of this
incident. This entry is a permanent record, not a correction of the executive document itself, which
this update does not modify, regenerate, or re-export.

## See also
[[Agentic_OS_Architecture]] · [[Agentic_OS_Architecture_v2]] · [[Business_Plan_Generation_Pipeline]] ·
[[Decision_Management_Layer]] · [[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]] ·
[[Project Administration]] · `.claude/skills/template-compliance-gate/SKILL.md` ·
`vault/Validation/Template_Compliance_Checklist.md` (produced on the gate's first real run, not yet
created — see [[_TEMPLATE-template-compliance-checklist]] for the template it will follow)
