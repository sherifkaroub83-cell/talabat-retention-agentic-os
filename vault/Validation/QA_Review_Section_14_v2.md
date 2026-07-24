---
type: validation
section: 14 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_14_Appendices.md
pipeline_stage: 13.11 (QA & Final Review, per .claude/skills/qa-review/SKILL.md)
run_date: 2026-07-24
reviewer: top-level session, acting in the qa-review-agent role (Tooling note: no `Agent` tool
  available this session — see the section draft's own Tooling note)
verdict: PASS (Pass 1 / self-reviewed) — status remains "Drafted — self-reviewed," not the unqualified
  ✅ Done, pending an independent Pass 2
---

# QA Review — Section 14 (v2, Group-wide capital-allocation draft)

## 1. Template completeness

Checked against `AI_Business_Plan_Template.md` §14's exact required sub-bullets:

| Required element | Present? | Location |
|---|---|---|
| Supporting research and data | Yes | §14.1 |
| Traceability notes (claim → vault note → source) | Yes — 40-row table covering all 12 drafted sections, the five Investment Options, and the USD175mn/120mn/55mn figures | §14.2 |
| Resumes of key team members | Handled by explicit, honest "not applicable" statement rather than fabrication | §14.4 |
| Technical specifications of the AI product | Yes — both AI systems in scope (talabat's embedded capability; this OS's own decision-support layer), kept explicitly separate, per Section 5's own distinction | §14.5 |
| Case studies or pilot program results | Yes, with the two categories (OS pipeline pilots vs. no talabat-side allocation pilot) kept explicitly separate | §14.6 |
| Legal and compliance documents | Handled by pointer to already-cited Section 8/10 compliance evidence plus an honest "no separate filing produced" statement | §14.7 |

**On "resumes of key team members":** the template requires this sub-bullet; §14.4 does not silently omit
it or invent biographical content to appear complete — it states plainly that no resume exists for any of
the six named team members, reproduces the roster from `Problem_Charter.md` for reference, and explains
why fabricating one would violate this project's own evidence discipline. **Judged compliant by honest
disclosure, the correct handling of a template requirement the underlying project genuinely cannot
satisfy** — the same standard applied to Section 7's funnel-conversion-data gap and Section 8's
jurisdiction-specific-law gap.

**On "legal and compliance documents":** no standalone legal/compliance filing exists for this capstone
project. §14.7 does not invent one — it points to the disclosed compliance evidence already compiled in
Sections 8 and 10 (without duplicating their citations wholesale) and states this plan's own
decision-support system's compliance posture explicitly as a design property, not a legal clearance claim.
**Judged compliant.**

**Verdict: PASS**, all six required elements present, two genuine template/project-reality gaps (resumes,
legal filings) both handled by explicit, honest disclosure rather than fabrication.

## 2. McKinsey Lens

- **Pyramid Principle:** the "Answer, stated first" section leads with the section's conclusion (this is
  the ghost deck; three things live only here — the traceability note, the DEC-009 exhibit, and an honest
  accounting of what doesn't exist) before any supporting detail. **PASS.**
- **SCQA:** not applicable (Section 1 only). **N/A.**
- **MECE:** §14.2's traceability table is organized by originating section (2 through 14), which is MECE
  by construction — every claim compiled belongs to exactly one section's own drafted content, no claim is
  attributed to two sections at once, and no section (2–13) is omitted from the table. The DEC-009 exhibit
  (§14.3) and the "not applicable" subsections (§14.4, partially §14.7) are each distinct template
  sub-bullets, not overlapping categories. **PASS.**
- **Hypothesis-driven — does this section prove, refine, or kill Section 2's governing hypothesis?**
  Section 14 does not advance new evidence about the hypothesis itself (an evidence-ranked, stage-gated
  framework raises the programme's realized value because cost is disclosed but return is not) — it is
  correctly **N/A** for this check: an appendix's job is to make the existing argument's evidence base
  inspectable, not to add a new argument. This is judged compliant, not a gap, consistent with how
  Section 5's build/buy/partner analysis was also judged not required to re-argue the hypothesis directly.
- **Value-driver traceability:** Section 14 does not introduce a new value mechanism — it reproduces the
  Section 4/9/13 mechanism set only where cited by other sections' own claims (e.g. the multi-vertical
  13.0x/3.8x figure, cited exactly as Section 4 stated it). **PASS**, no drift from the established 3-5
  mechanism set.

## 3. Citation audit consumption

Read `vault/Validation/Citation_Audit_Section_14_v2.md` in full. Status: **PASS (self-verified,
2026-07-24)** — 23 claims/rows checked (representative of the table's 40 rows plus the DEC-009 exhibit and
§14.4/14.6/14.7 direct checks), 23 pass, 0 missing-citation failures, 0 not-yet-approved-Assumption
dependencies. One cross-section staleness item (Section 9's own outdated `ASM-015`–028/`DEC-009` framing)
is flagged as a finding about *another* section, correctly not treated as a citation failure of Section 14
itself, since this section cites the current, correct `Approved`/resolved status rather than propagating
Section 9's stale language. **No open failure blocks approval.**

**Verdict: PASS** (no open citation failure).

## 4. Staleness

No Research Note (`vault/Research/Notes/`) is cited anywhere in this section. The one staleness finding
this section surfaces is not about a Research Note but about another drafted section
(`Section_09_Financial_Plan.md`'s own text lagging the current `Assumptions_Register.md`/`DEC-009`
status) — flagged explicitly in this section's Gap Detection note and §14.8, routed to "the next Pass
2/re-draft pass on Section 9" rather than silently fixed here (outside this section's own scope to edit
another section's draft). **Acknowledged and noted, not an automatic fail per the skill's own rule.**

## 5. Anti-patterns

Checked every item in `.claude/skills/business-plan-drafting/SKILL.md`'s Anti-patterns list against this
section:

| Anti-pattern | Found in this section? |
|---|---|
| Untraceable claim | No — see citation audit, 0 failures |
| Group/GCC figure presented as Egypt-specific without inference label | No — every geography tag in §14.2 was checked for drift against its originating section and found unchanged, including the one `inferred-applicability` row (`ASM-016`) |
| "MENA" as stand-in for the 8-market footprint | No — not used anywhere in the section |
| Pre/post-FY2025 non-GCC figures blended | N/A — this section reproduces no non-GCC segment figure directly (only pointers to sections that already handle this correctly) |
| ~2.2:1 split (`ASM-018`) shown as a quantified headline exhibit | No — `ASM-018` is not referenced anywhere in this section at all |
| `Assumptions_Register.md` status misquoted | No — `ASM-013`, `ASM-016`, and `ASM-029`–`033` are all correctly stated as `Approved`, verified directly against the register in the citation audit |
| Country/GCC/non-GCC allocation split presented as disclosed | No — the DEC-009 exhibit is labeled, both times it could matter (the mandatory sentence at the top of §14.3, and again in the "What this exhibit is not" paragraph), as this OS's own analytical construction, never a disclosed talabat split |
| **`ASM-029`–`033` OPT-level dollar ranges shown as headline commitment, or shown without the mandatory disclosure sentence — this section's own single highest-risk anti-pattern, since it is the designated home for exactly this exhibit** | No — checked with particular care: the mandatory sentence appears at the top of §14.3 exactly as `DEC-009` requires, both Portfolio Register caveats are reproduced verbatim, and the exhibit is explicitly framed as a *supporting* exhibit ("What this exhibit is not... it is not a substitute for the plan's actual recommendation") rather than the plan's headline case — the actual recommendation is pointed back to Section 9 §9.2 and Section 12, not restated here as if this appendix were itself making the recommendation |
| Refusing to state a recommended funding sequence at all | N/A — Section 14 is the Appendix, not the recommendation section; it correctly restates (in one paragraph, not as a headline claim) the sequence Section 9/12 already commit to, rather than either omitting it or re-deciding it here |
| OS's own recommendation represented as automatic management decision | No — §14.3's exhibit and §14.5's technical-spec description both stay within this plan's established human-approval-gate framing (Section 11); no new automatic-decision claim is introduced |
| Numbers not tracing to a `Value_Driver_Tree_v2.md` node | N/A — this section introduces no new financial/forecast number of its own; every figure is a restatement of an already-sourced claim from another section |
| Section 11 boilerplate disconnected from Section 10 | N/A — Section 14 does not restate Section 11's content; it correctly points to it only where directly relevant (§14.7's compliance-posture paragraph) |
| Executive Summary drafted first | N/A |
| Flagged gap resolved by drafting around it silently | No — three genuine gaps (no team resumes, no talabat-side pilot of the actual recommendation, Section 9's staleness) are each stated explicitly and prominently, not silently worked around or hidden |
| **Fabricating content to make the appendix look more complete than the project actually is (this section's own named risk, given the template's resume/legal-document/case-study requirements)** | No — checked specifically: §14.4 states no resumes exist rather than inventing biographical content; §14.6 keeps the OS's own real pipeline pilots visibly separate from the (nonexistent) talabat-side allocation pilot rather than blurring the two; §14.7 states no separate legal filing was produced rather than fabricating one |

**Verdict: PASS**, no anti-pattern instance found, including the section's own two named highest-risk
patterns (the DEC-009 exhibit's placement/labeling discipline, and the temptation to fabricate
completeness in the resume/legal/case-study sub-bullets).

## 6. Problem Consistency Gate

```markdown
---
report: Problem Consistency Gate
run_date: 2026-07-24
scope: Section 14
verdict: PASS
---
```

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Business problem statement matches `Problem_Charter.md` in substance | Pass | The entire section compiles evidence for the Group-wide USD175mn Everyday App/Food-leadership capital-allocation question; no Egypt-only retention framing appears anywhere |
| 2 | Geographic scope matches the charter (Group across 8 markets, Egypt as worked example, not "MENA," not Egypt-only) | Pass | §14.2's table spans Group/GCC/non-GCC/Egypt-standalone/country-specific/market-comparison tags exactly as each originating section stated them; Egypt appears repeatedly as a named worked example (EV fleet, PostPaid/CIB, OPT-002), never as the section's boundary; "MENA" not used |
| 3 | Decision question matches the charter (how to allocate the USD175mn programme) | Pass | The DEC-009 exhibit (§14.3) is the section's central artifact and is directly about this exact question |
| 4 | Investment envelope cited matches disclosed figures, no invented sub-splits presented as disclosed | Pass | The USD175mn/120mn/55mn figures are cited as disclosed (§14.2 row 1); the OPT-level ranges are repeatedly, explicitly labeled as this OS's own construction, never presented as disclosed |
| 5 | Evidence-category discipline respected (Facts/inferences/Decisions/Assumptions/Forecasts/synthetic never blended) | Pass | §14.2's table itself is organized to keep these distinct (the SYNTHETIC funnel row is flagged in bold exactly as Section 7 flagged it, not smoothed into a Fact-looking row); the DEC-009 exhibit is entirely Decision-tier and labeled as such throughout |
| 6 | Output requirements match the charter (14-section template, ranges/scenarios, not false precision) | Pass | The DEC-009 exhibit is itself the plan's own worked example of range-based, not false-precision, allocation disclosure — three columns (base/upside/downside) for every option, never a single point figure |
| 7 | No active file cites a superseded artifact as current | Pass | No pre-pivot `DEC-`/`ASM-` row is cited; the superseded companion `Business_Plan_Drafts/Section_14...md` is explicitly named as historical/not-read in the frontmatter |
| 8 | Any pre-pivot reference clearly marked historical | Pass | The frontmatter `supersedes_note` marks the old-problem companion as historical and not read |

**Verdict: PASS** (8/8).

## 7. Financial Integrity Gate

Section 14 is a financial-bearing section for this check specifically because it reproduces the
`ASM-029`–`033` dollar ranges in full (the only place in the whole plan permitted to do so as a headline
exhibit within its own appendix scope):

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Allocation totals reconcile (bucket-level figures sum to USD175mn, or discrepancy explained) | Pass | The exhibit does not claim the five ranges sum to USD175mn — both reproduced caveats (non-additive; partial coverage) explain exactly why they don't and shouldn't be summed; this is the correct handling, not a reconciliation failure |
| 2 | Scenario arithmetic internally consistent (base/upside/downside move coherently) | Pass | Every one of the five options' base/upside/downside ranges is internally ordered correctly (downside < base < upside) — verified digit-by-digit in the citation audit |
| 3 | Units consistent within each exhibit | Pass | All five OPT rows and all three scenario columns are stated in USD millions consistently; no unit mixing |
| 4 | Currency stated and consistent | Pass | USD throughout, consistent with the rest of the plan's convention |
| 5 | Time periods stated and not silently mixed | Pass | The exhibit is a single-point 2026-programme construction, not mixed with any other fiscal year's figures |
| 6 | Percentage logic correct | N/A | The exhibit contains no percentage-of-GMV or percentage-of-revenue figure — dollar ranges only |
| 7 | No double counting | Pass | Caveat 1 (non-additive) exists specifically to prevent a reader double-counting OPT-004/OPT-005 against OPT-001/OPT-002's Everyday App figures — the gate this check exists to enforce is the one caveat 1 is written to satisfy |
| 8 | No additive stacking of overlapping retention/frequency uplift statistics | N/A | This section reproduces no retention/frequency uplift statistic of its own; §14.2's table restates Section 4's uplift figures individually, never sums them |
| 9 | Revenue, GMV, gross profit, and EBITDA never mixed or substituted for one another | Pass | The DEC-009 exhibit uses only investment-cost dollar figures, not revenue/GMV/gross-profit/EBITDA figures; §14.2's table restates each financial line item's own section-of-origin unit without substitution |
| 10 | Every point-estimate figure is either a disclosed fact or an explicitly labeled approved assumption/forecast, no unlabeled false precision | Pass | Every OPT-range figure is explicitly `ASM-029`–`033`-sourced, `status: Approved`, Low confidence, and carries the mandatory disclosure sentence — no unlabeled point figure appears anywhere in this section |
| 11 | `DEC-008` respected (Section 9/12/13 headline exhibits Group base-case only; ~2.2:1 split narrative-only) | Pass | `ASM-018` (the 2.2:1 split) is not referenced anywhere in this section; `DEC-008` governs Sections 9/12/13, not 14, and this section does not reintroduce the restricted split |

**Verdict: PASS** (10 checks pass, 1 correctly N/A). This is the plan's most consequential Financial
Integrity Gate run to date for this specific exhibit, since Section 14 is the only place the full
`ASM-029`–`033` table is permitted to appear as a headline exhibit — both mandatory caveats and the
disclosure sentence were checked with particular care and found present and unaltered.

## 8. Geographic Evidence Gate

```markdown
---
report: Geographic Evidence Gate
run_date: 2026-07-24
scope: Section 14
verdict: PASS
---
```

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Every numeric/directional claim carries a geography tag | Pass | Verified row-by-row in the citation audit's traceability-table drift check; every restated claim carries the same tag as its originating section |
| 2 | No Group/GCC figure presented as Egypt-specific without inference label | Pass | The `ASM-016` row (§14.2) preserves its "GCC+Jordan cohort, excludes Egypt/Iraq" qualifier exactly |
| 3 | No Egypt-specific figure presented as Group-representative | Pass | Egypt-specific rows (EV fleet, PostPaid/CIB, Cairo tech hub via Section 8 pointers) are each used only in their own context, never generalized |
| 4 | Pre/post-FY2025 non-GCC figures not used interchangeably | N/A | No non-GCC segment figure is reproduced directly in this section (the GCC/non-GCC/Egypt segment row in §14.2 restates Section 3's already-correct FY2025-basis figures without altering the basis) |
| 5 | Time period of every geography-tagged claim stated and matches source | Pass | Verified in the Financial Integrity Gate check #5 above and the citation audit's drift check |
| 6 | No unsupported metric transfer across geography | Pass | No new metric transfer is introduced in this section — all transfers (e.g. `ASM-016`) were already established and labeled in their originating sections and are restated unchanged |
| 7 | Every `inferred-applicability` claim labeled as inference in the prose itself | Pass | The one such row (`ASM-016`) states "applied to Egypt/non-GCC markets generally as a labeled inference, not a disclosed... figure" directly in the table cell, not only in a footnote |
| 8 | "MENA" never used as a stand-in for the 8-market footprint | Pass | Confirmed — not used |
| 9 | External market-research figures not blended arithmetically with talabat's own figures without stated reconciliation | N/A | No external (non-talabat-disclosed) market-research figure is reproduced in this section |

**Verdict: PASS** (7 applicable checks pass, 2 correctly N/A).

## Overall Verdict

**PASS (Pass 1 / self-reviewed).** All template-required elements present, including the two the
underlying project genuinely cannot satisfy in full (team resumes, a talabat-side pilot of the actual
recommendation) — both handled by honest, explicit disclosure rather than fabrication, which this review
judges to be the correct discharge of the template requirement, not a gap. All applicable McKinsey Lens
checks pass or are correctly marked N/A with justification. All three 2026-07-23 gates (Problem
Consistency, Financial Integrity, Geographic Evidence) pass, with the Financial Integrity Gate given
particular scrutiny given this section's unique role as the DEC-009 exhibit's sole permitted headline
location. This section's single most consequential review point — whether the `ASM-029`–`033` exhibit
carries the mandatory disclosure sentence and both required caveats, and is framed as a supporting
exhibit rather than the plan's actual recommendation — was checked specifically in the Anti-patterns
table, the Financial Integrity Gate (checks 1, 7, 10, 11), and the Problem Consistency Gate (check 4):
**confirmed clean in every instance.** One cross-section finding (Section 9's own stale `ASM`/`DEC-009`
framing) is correctly flagged as a *Section 9* issue for a future revision pass, not treated as a defect
of Section 14 itself. Per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline, this review was
performed by the same session that drafted the section — **status is capped at "Drafted — self-reviewed,"
not the unqualified ✅ Done**, pending a genuinely independent Pass 2 (a fresh, separately-invoked
citation audit and QA review, with the DEC-009 exhibit as the priority re-verification item). Do not flip
Section 14's tracker cell to ✅ Done on the strength of this review alone.
