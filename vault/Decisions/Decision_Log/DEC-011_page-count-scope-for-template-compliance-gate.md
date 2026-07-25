---
id: DEC-011
status: approved
date: "2026-07-25"
resolved_date: "2026-07-25"
resolved_by: "user (direct instruction, top-level session)"
resolution: "The 14-section citation-complete draft under vault/Projects/Business_Plan_Drafts_v2/ is designated the internal audit-trail/reference version and is exempt from the 15-25 page ceiling. A separate, distinct, condensed 15-25 page executive edition will be produced later as its own deliverable and is the document the page-count requirement actually governs."
owner: user
supersedes: none
---

# DEC-011 — Does the Template Compliance Gate's 15-25 page ceiling (check 10) apply to the full citation-complete draft, or to a separate executive edition?

## Question
Stage 18's Template Compliance Gate (`.claude/skills/template-compliance-gate/SKILL.md`) ran 2026-07-25
against the 14-section assembly under `vault/Projects/Business_Plan_Drafts_v2/` and found it
substantially over the project's 15-25 page requirement — an estimated ~34,300 words, ~62-69 pages, driven
by the accumulated citation apparatus (Pipeline provenance notes, per-claim traceability tables, addenda
documenting Pass 2/3/Stage 17 fixes) built up across this project's audit process. The gate's own design
warns explicitly against solving this by compressing structure (the 2026-07-22 incident that motivated the
gate in the first place was exactly this: an executive edit collapsed 14 sections into 12). The open
question was whether to (a) aggressively compress this draft's prose toward 15-25 pages now, risking
exactly that failure mode on content that has been through three-plus independent verification passes, or
(b) treat this draft as a distinct, audit-trail-preserving reference document and produce the page-count-
constrained version separately.

## Decision
**Option (b), by direct user instruction.** This draft stays as-is — the full internal reference/audit
version, citation apparatus and all — and is not subject to compression. A separate condensed 15-25 page
executive edition will be produced later as its own, distinctly-named deliverable, and *that* document is
what Template Compliance Gate check 10 (page count) actually governs. Section 12's heading was corrected
in the same session (removed "(Three Horizons)," which is the template's McKinsey Lens content
instruction, not part of its title — the one other Stage 18 finding) — with that fixed, Stage 18 is marked
**PASS for structural compliance**, with check 10 recorded as `N/A — deferred to the executive edition`,
not silently passed.

## Rationale
Matches the project's own established discipline elsewhere (`DEC-008`'s narrative-only headline
presentation, `DEC-009`'s labeled-sensitivity-exhibit-only allocation ranges): when two real requirements
are in tension, the answer is to satisfy both without corrupting either, not to pick one and silently drop
the other. Compressing this draft to 15-25 pages would risk re-triggering exactly the structural-drift
failure mode Stage 18 exists to catch, on content this project has invested four+ independent verification
rounds proving accurate. Producing a distinct executive edition preserves the full draft's evidentiary
integrity for grading/audit purposes while still delivering a page-count-compliant document for whatever
downstream use requires it.

## Impact
- `vault/Validation/Template_Compliance_Checklist.md` updated: check 3 flips to Pass (Section 12 heading
  fixed); check 10 recorded as `N/A — deferred to executive edition (DEC-011)`; overall verdict PASS.
- `vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md` updated to reflect Stage 18
  PASS and flag the executive edition as a distinct, not-yet-started deliverable.
- Future Publication Layer work on this full draft (DOCX/PDF export of the citation-complete version) is
  unaffected by the page-count requirement. Any future work producing the condensed executive edition must
  run its own Template Compliance Gate pass (check 10 applies in full there) before that document is
  treated as ready.

## Approval
**Approved 2026-07-25**, by direct user instruction in the top-level session.

## Links
- `vault/Validation/Template_Compliance_Checklist.md`
- `.claude/skills/template-compliance-gate/SKILL.md`
- [[DEC-008_section9-headline-bucket-split-presentation]] · [[DEC-009_investment-options-ranking-and-allocation-priority]]
- `vault/Architecture/Publication_Layer.md`
