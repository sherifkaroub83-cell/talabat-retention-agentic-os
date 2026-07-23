---
name: executive-document-formatting
description: Formats and paginates the already-approved, fully-drafted 14-section Business Plan into submission-ready DOCX and PDF deliverables. Presentation and layout only — never touches business content, numbers, claims, citations, decisions, or conclusions, and never changes section count, numbering, titles, or order. Requires a PASS from the Template Compliance Gate before running. Use only after all 14 Section_XX drafts are Done (independently verified) and, ideally, after the whole-plan McKinsey Lens pressure test.
trigger: /format-business-plan
---

# Executive Document Formatting Skill

Full architectural context: `vault/Architecture/Publication_Layer.md`. This skill is that layer's
only operative procedure. It is modeled structurally on `.claude/skills/business-plan-drafting/
SKILL.md` (same YAML-frontmatter convention, same vault-map discipline) but sits at the opposite end
of the pipeline: drafting produces content, this skill never produces or alters content — it produces
*presentation* of content someone else already approved.

## The one rule that governs everything below

**If an action would change what a reader could conclude from the plan, it is out of scope for this
skill — flag it and stop, do not perform it.** If an action only changes how the same conclusion is
displayed, it is in scope. Every checklist item below is an application of this one rule to a
specific document element; when a new formatting question arises that isn't covered here, decide it
against this rule first, not against convenience.

---

## 0. Structural boundary — a second, distinct rule from §1's content boundary

**`AI_Business_Plan_Template.md`'s fourteen sections — count, numbering, titles, order — are an
architectural contract, not a writing suggestion.** This skill may compress, tighten, and improve the
prose inside and between sections. It may **never** rename a section, merge two sections, delete a
section, reorder sections, or replace the template's structure with an alternative one (a shorter
consulting format, a different section count, a different heading scheme) — no matter how much better
the alternative reads. If a request asks for a document that is not a faithful, fourteen-section,
correctly-ordered export of the template, that request is for a different deliverable, not a
Business Plan export, and must be named and stored as such rather than produced under this skill.

**Gate requirement:** this skill does not run — and does not produce a DOCX/PDF — until
`.claude/skills/template-compliance-gate/SKILL.md` has validated the specific candidate document and
returned PASS. See `vault/Architecture/Publication_Layer.md` §2. This is a hard block, not an
advisory check.

This distinction exists because it was violated once already: see
`vault/Architecture/Publication_Layer.md`'s 22/07/2026 retrospective entry, where a "board-ready"
request was fulfilled by writing a new 12-section document instead of formatting the template-
compliant 14-section one. The content was accurate; the structure was not compliant. §1 below governs
*what this skill may say*; this section governs *what shape the result must keep*. Both must hold.

## 1. Scope boundary — read this section twice before touching anything

### Permitted (formatting/presentation only)

- Cover page design, title block, document-control block, table of contents generation
- Typography: font selection, heading hierarchy (H1/H2/H3 styles), body-text style, line spacing,
  paragraph spacing, widow/orphan control
- Color: a restrained, professional palette (talabat-orange accent, used structurally — section
  dividers, callout borders, table headers — never decoratively)
- Heading numbering that **mirrors, never renumbers**, the section/subsection numbers already present
  in each `Section_XX_*.md` draft (e.g. a draft's own "11.1", "11.2", "11.3" become Word Heading 2
  styles numbered exactly 11.1/11.2/11.3 — this skill does not invent, merge, split, or reorder
  subsections)
- Callout-box styling for every "Answer, stated first" block (one consistent visual treatment across
  all 14 sections — this is a Pyramid Principle requirement the template itself imposes, and giving it
  one consistent box style *is* formatting, not content)
- Table formatting: consistent header shading/borders, caption numbering ("Table N. <verbatim
  existing text>"), column-width/wrap fixes
- Figure/exhibit formatting: caption numbering ("Figure N. <verbatim existing action title>") —
  action titles themselves (e.g. "Churn is concentrated in prepaid youth segments") are content and
  are copied verbatim, never rewritten, even if a formatter would phrase it differently
- Numeral formatting consistency: thousands separators, currency symbol placement, percentage-sign
  spacing — applied uniformly, never changing which digits appear
- Citation *style* consistency: this plan's inline `(DocID, page N)` convention (e.g. `TLB-002, page
  15`) is preserved verbatim and simply formatted consistently (font, parenthesis style); this skill
  never adds, removes, or re-targets a citation
- Headers/footers: running section title, page number, a "Draft — AASTMT MBA Capstone, Group G02"
  classification line, document date
- Page-flow control: page breaks before each of the 14 major sections, a distinct back-matter
  treatment for Section 14 (Appendices)
- Cross-reference formatting: internal `[[wikilink]]`-style references in the source drafts become
  proper Word/PDF cross-references or a consistent plain-text "see Section N" form — this is a display
  transformation of an existing link, not a new claim

### Prohibited (content — flag, do not fix)

- Changing, rounding, correcting, or "improving" any number, percentage, date, or financial figure
- Adding, removing, merging, or reordering any claim, sentence, bullet, or section/subsection
- Rewording any sentence beyond whitespace/typography — including apparent typos, since a typo fix
  can silently change meaning and this skill has no authority to judge that
- Adding, removing, or re-targeting any citation, footnote, or source reference
- Resolving any open item, gap, or "explicit gap statement" already on record (e.g. Section 14's team
  résumé gap, Section 13's deferred numeric kill-criteria) — these stay exactly as drafted
- Fabricating any asset the corpus/repository does not contain (see §2 — no talabat logo file exists
  in this repository as of this task; the cover page must not fabricate one)
- Overriding a section's `status:` frontmatter field, or promoting a section that is not **Done
  (independently verified)** into the formatted output
- Making any judgment call a Decision Log entry would normally own (e.g. deciding which of two
  conflicting figures to display) — if formatting somehow surfaces such a conflict, that is a content
  defect to flag to the orchestrating session, not something this skill resolves itself

### The "flag, don't fix" discipline

Any content-shaped problem noticed while formatting (a broken internal reference, an apparent
inconsistency between two sections, a citation that looks malformed) is recorded in the Formatting
QA Report's **Content Flags (informational only)** section — see §7 — and left untouched in the
document. This skill has no write access to section content and must not simulate having any by
"fixing" it during export.

---

## 2. Required inputs (read before formatting)

- All 14 `vault/Projects/Business_Plan_Drafts/Section_01_Executive_Summary.md` through
  `Section_14_Appendices.md` — **every one must carry `status: ... Done (independently verified)`
  in its frontmatter**; if any section is missing this exact status, stop and report which
  section(s) block the run rather than formatting a partial or self-reviewed plan.
- `vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md` — the active master tracker
  as of the 2026-07-23 pivot (`Talabat-Egypt-AI-Retention-Business-Plan.md` is its superseded
  predecessor, historical reference only), to confirm the same 14/14 status and to pull the
  document-control metadata (project name, owner, date, course).
- `AI_Business_Plan_Template.md` — the verbatim graded specification. This skill checks the formatted
  output preserves the template's own required structure (14 sections, McKinsey Lens callouts where
  the drafts already carry them) — it does not re-check content completeness, which is
  `qa-review-agent`'s job and already done.
- `CLAUDE.md` — for the project's naming/owner metadata and standing instructions.
- A repository-wide check for existing brand/logo image assets (`find . -iname "*logo*"`) before
  designing the cover page — as of this task's authoring, **no image logo asset exists in this
  repository**, only a text note (`vault/Knowledge/Entities/Brands.md`). The cover page must therefore
  use a typographic treatment of "talabat" (the name, styled in the brand's disclosed orange, per
  `Brands.md`) rather than an invented logo graphic, and the Formatting QA Report must flag the
  missing logo asset as an open item for the human team to supply if a graphic mark is wanted.

## 3. Pipeline position — where this sits, and what it does not change

This skill is **not** a 12th stage of the `Business_Plan_Generation_Pipeline.md`'s 11-stage,
per-section content pipeline — that pipeline governs how one section's *content* is produced and
verified, and this document does not alter it. Formatting is a **plan-level, cross-section, terminal
step** that only becomes eligible once every section has already exited that pipeline at ✅ Done
(independently verified).

Sequence (see `vault/Architecture/Publication_Layer.md` for the full diagram):

```
14/14 sections Done (independently verified)
        ↓
Whole-plan McKinsey Lens pressure test  (separate, not part of this skill — a prerequisite it checks for, not performs)
        ↓
executive-document-formatting  (this skill)  →  Formatting QA Report  →  DOCX + PDF export
```

This skill's own procedure, run in full each invocation:

1. **Gate check** — confirm 14/14 sections carry `Done (independently verified)`; confirm (and note,
   not block on, since the pressure test is a separate deliverable) whether a whole-plan pressure-test
   record exists yet.
2. **Assemble** — read all 14 drafts plus the tracker's document-control metadata, in template order
   (never re-ordered).
3. **Apply formatting standards** — §4 below, section by section, mechanically.
4. **Self-check against §1's prohibited list** — a diff-style review confirming no content token
   changed, only styling/layout.
5. **Produce the Formatting QA Report** — §7, with a PASS / PASS WITH MINOR FIXES / FAIL verdict.
6. **Export** — only on PASS or PASS WITH MINOR FIXES (fixes applied first) — DOCX and PDF to the
   paths in §6.

## 4. Formatting standards

### 4.1 Cover page
- Title: "AI-Driven Customer Retention Strategy for talabat Egypt" (or the plan's actual working
  title as it appears in the tracker — copied verbatim, not composed fresh)
- Subtitle: "AI Business Plan — GSB Template v2.0 (McKinsey Edition)"
- Course/programme line, team designation (Group G02), submission date, instructor name — pulled from
  `CLAUDE.md`/the tracker, not invented
- Typographic "talabat" brand treatment per §2 (no fabricated logo)
- A single accent-color rule or band using the disclosed talabat orange

### 4.2 Typography
- One heading font, one body font (a standard, widely-embedded professional pairing — e.g. a sans
  heading face over a serif or sans body face); no more than 3 total type styles in the whole document
- Body text: 11pt, 1.15–1.5 line spacing, justified or left-aligned consistently throughout (pick one)
- Heading sizes strictly decreasing H1 > H2 > H3, applied via real paragraph styles (Word "Heading 1/
  2/3"), never manual bold-and-bigger — this is what makes the TOC and PDF bookmarks generate
  correctly (see §5)

### 4.3 Color
- talabat orange as the only accent color, used structurally: section-divider bands, callout-box left
  borders, table header fills — never as body-text color, never applied inconsistently between
  sections
- All body text in a single near-black for print legibility; no low-contrast color combinations

### 4.4 Headings
- H1 = the 14 major sections, numbered exactly "1." through "14." matching the template's own numbers
- H2/H3 = each section's existing subsection numbers, copied exactly (e.g. Section 11's "11.1", "11.2",
  "11.3"), never renumbered or restructured even where a formatter might prefer a different break

### 4.5 Paragraphs
- Consistent spacing-before/-after across the whole document; no manual line breaks inside a
  paragraph; widow/orphan control on

### 4.6 Callouts ("Answer, stated first" boxes)
- One consistent box style (bordered, tinted background, talabat-orange left rule) applied to every
  section's opening "Answer, stated first" block, since the template's own Pyramid Principle
  instruction is that this is the one paragraph a time-pressed reader must see — formatting must make
  it visually unmissable, uniformly, not just leave it as an unstyled paragraph

### 4.7 Tables
- Consistent header row shading and borders across every table in the document
- Sequential caption numbering "Table N." with the table's existing caption text preserved verbatim
- Column widths adjusted for readability only — no cell content changed

### 4.8 Figures/exhibits
- Sequential caption numbering "Figure N." with the existing McKinsey-Lens action title preserved
  verbatim (never rewritten to a formatter's preferred phrasing)

### 4.9 Numbers
- Consistent thousands separators, currency symbol placement (USD/EGP as already used in the draft),
  percentage formatting — applied uniformly; the underlying digits never change

### 4.10 Citations
- The existing inline `(DocID, page N)` style is preserved verbatim and formatted consistently
  (parenthesis style, font); this skill adds no footnote/endnote apparatus the drafts don't already
  use, and never edits a citation's target

### 4.11 Headers and footers
- Running header: current section title
- Footer: page number, "Draft — AASTMT MBA Capstone, Group G02" classification line, document date

### 4.12 Document control block (on the cover or a dedicated page 2)
- Document title, version, status ("Draft — pending instructor submission" until the user says
  otherwise), prepared by/for, date, distribution note

### 4.13 Table of contents
- Auto-generated from the real Heading 1/2/3 styles (§4.2/§4.4), with page numbers — never hand-typed,
  since a hand-typed TOC drifts from the real document on the next edit

### 4.14 Page flow / body vs. appendix
- A page break immediately before each of the 14 major sections
- Section 14 (Appendices) gets a distinct back-matter treatment (e.g. a divider page reading
  "Appendices") but stays inside the same document — the template defines it as section 14 of one
  plan, not a separate file

---

## 5. DOCX technical requirements

- Real paragraph styles for every heading level (Word "Heading 1/2/3") — never manual bold/font-size
  overrides — this is required for the TOC (§4.13) and for accessibility (screen readers rely on
  style, not visual weight)
- Embedded, widely-available fonts (or a documented substitution) so the file renders identically on
  a grader's machine
- Alt-text on any figure/exhibit image, if the plan contains one, describing what the exhibit shows
- No content in a text box or image that a copy-paste/screen-reader pass would miss — headings, body
  text, and captions must be real document text, not flattened images

## 6. PDF technical requirements

- Exported from the finished DOCX (not independently recreated) so DOCX and PDF never diverge
- Fonts embedded (no reliance on viewer-side font substitution)
- Bookmarks/outline generated from the same Heading 1/2/3 structure, matching the TOC
- Tagged/accessible PDF where the export toolchain supports it

## Required output paths (documented now for future use — **not produced by this task**)

- `Outputs/Talabat_Egypt_AI_Retention_Business_Plan.docx`
- `Outputs/Talabat_Egypt_AI_Retention_Business_Plan.pdf`
- `vault/Validation/Formatting_QA_Report.md` — mirrors the existing `Citation_Audit_Section_N.md` /
  `QA_Review_Section_N.md` convention of living in `vault/Validation/` as this project's audit trail,
  rather than in `Outputs/` alongside the deliverables themselves

## 7. Formatting QA Report

Every invocation produces `vault/Validation/Formatting_QA_Report.md` from
`vault/Templates/_TEMPLATE-formatting-qa-report.md`. Required structure (see the template for the
exact schema):

1. **Run metadata** — date, sections covered (must be 14/14), source-draft status confirmation
2. **Gate check result** — did all 14 sections carry `Done (independently verified)`; was a
   whole-plan pressure-test record found (informational — does not block a formatting run, but a
   FAIL/absent pressure test is itself noted, not silently passed over)
3. **Standards checklist** — one row per §4 subsection (4.1–4.14) plus §5/§6, each marked
   Pass / Pass with fix / Fail, with what was found
4. **Content Flags (informational only)** — anything content-shaped noticed but *not* touched,
   per the "flag, don't fix" rule in §1
5. **Verdict** — exactly one of:
   - **PASS** — every checklist row passed, export may proceed
   - **PASS WITH MINOR FIXES** — cosmetic issues found and corrected in this same run (each one
     logged: what, where, before/after), export may proceed
   - **FAIL** — a standards item cannot be resolved without a content decision (e.g. an unresolvable
     ambiguity in how to number a table), export must not proceed until resolved
6. **Export record** — file paths written and file sizes/page counts, once export actually runs
   (left blank/not-applicable for this task, since no export is being performed now)

---

## Known open items (do not resolve — carry forward)

- **No logo/brand image asset exists in this repository** — the cover page must use the typographic
  treatment in §4.1 until/unless the team supplies one.
- **The whole-plan McKinsey Lens pressure test has not yet been run** — this skill checks for its
  record and notes the gap; it does not perform that test itself (see §3).
- Every section-level open item already on record (Section 14's team-résumé gap, Section 13's
  deferred numeric kill-criteria, DEC-007's forward pointer to a future `DEC-008`) is preserved
  verbatim in the formatted output — this skill's job is never to close them.

## Anti-patterns (do not do these)

- Do not "clean up" a sentence's wording while formatting a paragraph — that is content, not layout.
- Do not invent a logo, chart, or exhibit the drafts don't already contain, to make the document
  "look more finished."
- Do not renumber a section's subsections to a scheme this skill finds more elegant.
- Do not silently drop a section's open-item/gap statement because it looks unpolished next to the
  rest of the document — an honest gap, clearly formatted, is still more credible than a silently
  smoothed-over one.
- Do not export DOCX/PDF, and do not begin any formatting run, until all 14 sections are confirmed
  Done (independently verified) — a partial-plan export is not this skill's job to produce.
- Do not treat "Pass with minor fixes" as a license to make judgment calls about content — "minor
  fixes" in the verdict means cosmetic/mechanical formatting fixes only, never a content edit.

## See also
`vault/Architecture/Publication_Layer.md` · `vault/Architecture/Business_Plan_Generation_Pipeline.md`
· `.claude/skills/business-plan-drafting/SKILL.md` · `.claude/skills/qa-review/SKILL.md` ·
`.claude/skills/template-compliance-gate/SKILL.md` ·
`vault/Templates/_TEMPLATE-formatting-qa-report.md`
