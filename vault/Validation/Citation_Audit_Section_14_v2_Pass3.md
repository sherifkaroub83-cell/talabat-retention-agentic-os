---
type: validation
section: 14 (v2 — Group-wide capital-allocation draft) — INDEPENDENT PASS 3
target: vault/Projects/Business_Plan_Drafts_v2/Section_14_Appendices.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md) — Pass 3
run_date: 2026-07-24
auditor: independent Pass 3 re-verification, fresh thread, no memory of prior drafting or fixing
status: PASS WITH ONE NEW MODERATE-TO-HARD DEFECT (a stale, now-false cross-section claim about
  Section 9's current content) — all previously-fixed Pass 2 defects (VDT node IDs, "6/8" countries,
  DEC-009/OPT-003 tiering) independently re-confirmed correct against current source content
---

# Citation Audit — Section 14 (v2), Independent Pass 3

Companion to (does not replace) `Citation_Audit_Section_14_v2.md` (Pass 1, self-reviewed) and
`Citation_Audit_Section_14_v2_Pass2.md` (Pass 2, verdict PASS WITH MINOR FIXES, 3 defects fixed
2026-07-24). This is a genuinely fresh re-audit: every claim below was re-derived from the underlying
vault notes and companion section files as they exist right now, not from Pass 2's own summary of them.

## Scope and method

The table in `Section_14_Appendices.md` §14.2 actually contains **60 rows**, not the 40 the assignment
brief described (counted directly: 8 rows for Section 2, 10 for Section 3, 7 for Section 4, 3 for
Section 5, 6 for Section 6, 4 for Section 7, 4 for Section 8, 3 for Section 9, 4 for Section 10, 4 for
Section 11, 3 for Section 12, 3 for Section 13, 1 for Section 14 itself = 60). Every row was checked
against the **current** text of its originating section (all 12 companion `_v2` section files, Sections
2–13, were read in full) rather than trusted from Section 14's own paraphrase. In addition, the following
were opened and read directly, independent of what any Business Plan section says about them:
`vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md` (in full),
`vault/Forecasts/Value_Driver_Tree_v2.md` (in full), `vault/Decisions/Assumptions_Register.md` (in full),
`vault/Decisions/Investment_Portfolio_Register.md` (in full), `vault/Architecture/Geographic_Evidence_
Rules.md` (in full), and `vault/Decisions/Investment_Options/OPT-003_food-leadership-cvp-partner-
retention-gcc3.md`.

## DEC-009 — what it actually resolves, read cold

`DEC-009` (status: `approved`, resolved 2026-07-23, "middle path," a variant of the escalation prompt's
Option 3) resolves two questions: (1) **commit to a funding sequence, stated narratively, not as a
dollar-denominated headline** — `OPT-002` and `OPT-003` are named jointly as the **near-term priority
pair** (not `OPT-003` alone in a separately-tiered "Tier 2" with `OPT-002` grouped into a "Tier 3"
pilot-only bucket — that grouping is the *evidence-tiering* discussion earlier in the same file,
explicitly superseded by the Decision section's resolved sequence); `OPT-001`/`OPT-005` continue at
pace; `OPT-004` is the longer-horizon build. (2) **Allocation ranges (`ASM-029`–`033`) are shown only as
a labeled illustrative sensitivity/appendix exhibit, never a headline financial commitment**, with the
mandatory sentence "This is an Agentic OS analytical recommendation, not a disclosed talabat allocation"
required on every appearance. `OPT-003`'s own option record independently confirms: "**Not a pilot** —
this is an already-evidenced, already-operating mechanism... Recommend a targeted budget weighting
toward these three markets... plus a formally documented dry-powder deployment trigger."

**Section 14's current characterization of DEC-009 is correct and internally consistent**, checked in
three places:
- §14.2, row 12 (Section 12 row): "`DEC-009`'s underlying evidence tiering (OPT-001/OPT-005 strongest,
  continue-at-pace) vs. its resolved funding sequence: `OPT-002` and `OPT-003` jointly as the near-term
  priority pair; `OPT-004` a longer-horizon build" — matches `DEC-009`'s Decision text verbatim in
  substance. **PASS.**
- §14.2, row 13 (Section 12 row): "`OPT-002`... recommended H1 pilot; `OPT-003`... funds now via a
  targeted budget weighting, not a pilot" — matches `OPT-003`'s own record verbatim. **PASS.**
- §14.3's closing paragraph and §14.8's cross-check against `Section_12_Implementation_Plan.md`: both
  correctly state OPT-003 is funded now, not piloted, and OPT-004 begins in H2 — matches Section 12's
  current (Pass-2-cleared) Three Horizons text exactly, including "not a pilot... targeted budget
  weighting... dry-powder deployment trigger." **PASS.**

The repeated "OPT-003 needs to pilot" misreading independently documented in Sections 7, 12, and (via
Pass 2) 14 **does not recur anywhere in Section 14's current text**. This defect pattern is resolved.

## Re-confirmation of Pass 2's three fixes (independently re-derived, not merely re-read)

| # | Item | Independent re-check | Verdict |
|---|---|---|---|
| 1 | §14.2 Section 4 rows: multi-vertical order-frequency node = N-14; GMV-share trend = N-11 | Opened `Value_Driver_Tree_v2.md` directly: N-14 = "Multi-vertical vs. food-only order frequency: 13.0 vs. 3.8 orders/month"; N-11 = "Multi-vertical customer behaviour: multi-vertical GMV share rises 68%→73%→76%." Matches Section 14's row exactly, and matches `Section_04_Value_Proposition.md`'s own current traceability table row-for-row. | PASS |
| 2 | §14.2 Section 4/5 rows: AI/personalisation EBITDA figure = N-09; "not a discrete dollar line" = N-06 | Opened `Value_Driver_Tree_v2.md`: N-09 = "AI/personalisation deployment: estimated EBITDA contribution rises from USD14mn+ (FY2024) to USD30mn+ (FY2025)"; N-06 = "AI/personalisation capability deployment... Not named as a discrete dollar line within either bucket." Section 14 now correctly splits these into two citations. Matches Section 5's own current traceability row exactly. | PASS |
| 3 | §14.2 Section 5 row: "talabat pro live in 6 of 8 countries by end-2024 (excludes Egypt, Iraq)" | Confirmed against `Topics/Talabat Pro.md` ("rolled out market-by-market until it reached all eight operating countries in 2025, with Egypt live from February 2025 and Iraq from September 2025") and `Value_Driver_Tree_v2.md` N-13/N-15 (both state "six GCC/Jordan markets live before December 2024... explicitly exclude Egypt and Iraq"). "6 of 8" is correct; "7 of 8" would be wrong. Matches Section 5's own current text exactly, including its N-08/N-13 citation. **Note (not a new defect, flagged for awareness):** N-08 and N-13 are not, on their own, the most precise citation for this specific figure — N-08 is about pro *GMV-share* (32%→49%), and the "six markets, excludes Egypt/Iraq" sentence is stated most precisely at N-15, not N-08/N-13. This imprecision is real but is not a Section-14-specific defect: it is inherited character-for-character from Section 5's own Pass-2-cleared citation, so fixing it in Section 14 alone (without a matching fix in Section 5) would create a new, worse inconsistency. Flagged for whoever runs Section 5's *next* revision pass, not actioned here. | PASS (with the above note, not a new failure) |
| 4 | §14.2/§14.8 DEC-009 tiering language (formerly stale) | Re-confirmed above — see "DEC-009" section. | PASS |

## New finding (Pass 3)

### Finding 1 — Section 14's own text makes a specific, checkable claim about Section 9's *current* content that is now false, because Section 9 has since been independently corrected

**Text, §13.3 Gap Detection (provenance note near the top of the file):**
> "A cross-section staleness flag, not a Section 14 defect: `Section_09_Financial_Plan.md`'s own text
> still describes `ASM-015`–`028` as `status: Proposed` and `DEC-009`'s funding-sequence question as
> "unresolved" — both are now `Approved`/resolved per `Assumptions_Register.md` and `DEC-009`... flagged
> here for the next Pass 2/re-draft pass on Section 9."

**Text, §14.8 (repeats the same claim):**
> "One flagged, unresolved item carried forward rather than silently fixed: `Section_09_Financial_
> Plan.md`'s own text still frames `ASM-015`–`028` as `Proposed` and `DEC-009` as open... flagged here
> explicitly for whoever runs Section 9's own next revision pass..."

**Independent re-check against `Section_09_Financial_Plan.md`'s current text (read in full for this
pass):** this claim is no longer true. Section 9 has since undergone its own independent Pass 2 review
(`Citation_Audit_Section_09_v2_Pass2.md`, 2026-07-24) and its current §9.5 states plainly: "All fourteen
listed are `status: Approved` in `vault/Decisions/Assumptions_Register.md` (resolved 2026-07-23, alongside
`DEC-009`)." Section 9's §9.2 and §9.6 both state `DEC-009` as `approved`/resolved and recite its funding
sequence in the present tense, not as an open question. **No "Proposed" or "unresolved" framing of
`ASM-015`–`028` or `DEC-009` exists anywhere in Section 9's current file.**

This means Section 14 is currently making a specific, named-fact claim about the state of another
document that is demonstrably false as of this reading. This is exactly the risk this Pass 3 task was
asked to check for: Section 14 was frozen at a point in time (before Section 9's own Pass 2 fix landed)
and has not been updated to reflect it, in the same way Sections 4/5/12's pre-fix content was inherited
and fixed at Pass 2 — except this time the "staleness" isn't a wrong citation Section 14 relies on, it's
a wrong *claim about another section* that Section 14 itself asserts as evidence of its own diligence.
Leaving it in place risks a future reader (or a future audit) chasing a "Section 9 staleness" problem
that no longer exists, or worse, concluding Section 9 was never actually fixed.

**Verdict: FAIL (moderate-to-hard).** This is not a numeric-claim citation failure in the classic sense,
but it is a named-fact claim ("Section 9's own text still describes X") that traces to nothing currently
true. Per the citation-audit skill's rule to flag any claim that traces to nothing (here: to a state that
no longer exists), this must be corrected before Section 14 can be re-marked clean.

**Fix needed (specific, for the Orchestrator — not applied in this investigation-only pass):** Update
both the §13.3 provenance-note bullet and §14.8's closing paragraph to state that Section 9 has since
been independently corrected (cite `Citation_Audit_Section_09_v2_Pass2.md`, 2026-07-24) and that the
flag is now resolved / historical, rather than presenting it as a still-open item "for the next Pass
2/re-draft pass on Section 9." Do not simply delete the note — per this project's own discipline against
silently rewriting a record's history, the cleanest fix is to append a dated addendum (matching the
pattern already used elsewhere in this same file, e.g. the "Addendum, 2026-07-24" block) rather than
edit the original sentences in place.

## Full re-check of the remaining 59 rows (all sampled; no row skipped)

Every row of §14.2 was traced to its originating section's **current** file content (Sections 2–13, all
opened and read in full for this pass) and, where the row cites a Forecast/Decision/Assumption-layer
artifact directly, to that artifact itself (`Value_Driver_Tree_v2.md`, `Assumptions_Register.md`,
`Investment_Portfolio_Register.md`, `DEC-009`). Representative confirmations beyond the four items above:

- **ASM-029–033 ranges in §14.3** — independently re-summed and character-matched against
  `Assumptions_Register.md`'s current rows and `Investment_Portfolio_Register.md`'s own table: OPT-001
  USD45-55/55-70/30-40mn; OPT-002 USD8-12/12-20/3-6mn; OPT-003 USD25-32/32-40/15-22mn; OPT-004
  USD8-12/12-18/3-6mn; OPT-005 USD10-15/15-22/5-8mn — **exact match, all five rows, all three
  base/upside/downside cells.** All five carry `status: Approved` (Decision tier, Low confidence). **PASS.**
- **Both mandatory caveats (non-additive; partial-coverage) in §14.3** — reproduced verbatim from
  `Investment_Portfolio_Register.md`'s "Base / downside / upside allocation ranges" section, word for
  word. **PASS.**
- **Section 2 rows (USD175mn=120+55, FY2024 GMV, 8 markets, DFM listing, EBITDA margin, etc.)** — all
  eight rows checked against `Section_02_Business_Description.md`'s current traceability table and body
  text; all match (including the arithmetic check 75+45=120, 120+55=175). **PASS.**
- **Section 3 rows (10 rows: GMV/category-share/TAM/segment table/multi-vertical/Egypt category-share
  conflict/M1 retention/competitors)** — all match Section 3's current, independently-verified (0
  residual defects) text, including the corrected non-GCC "18%→21%, two dated points, not blended"
  framing from Section 3's own Pass 2 fix. **PASS.**
- **Section 6 rows (revenue by fee type, take rate, ASM-013 decomposition, unit economics, CARC)** — all
  match Section 6's current text, itself independently verified 0-defect at Pass 2. **PASS.**
- **Section 7 rows (CVP-over-discounting quote, customer journey, synthetic funnel disclosure, PostPaid
  GCC-then-Egypt sequencing)** — all match Section 7's current (Pass-2-fixed) text, including the
  corrected DEC-009 characterization. **PASS.**
- **Section 8 rows (GLSA/CQCA, December 2022 breach, DTA/GDPR, 7S Systems/Skills)** — all match Section
  8's current (Pass-2-fixed on an unrelated store-count citation) text; the store-count defect Section 8
  fixed is not reproduced anywhere in Section 14's table (Section 14 does not cite the store-count
  figure), so it is not implicated. **PASS.**
- **Section 9 rows (FY2026 guidance, Q1 2026 actual margin, no ROI/payback)** — the three *numeric*
  Section 9 rows in §14.2 are all correct and match Section 9's current text exactly, including the
  corrected "-9% y/y" (not "-9pp y/y," the defect Section 9's own Pass 2 fixed). Only the *narrative*
  cross-section staleness claim discussed in Finding 1 above is wrong — the actual cited figures are not.
- **Section 10 rows (17 risks, priority quadrant, EBITDA trajectory, CEO/board transitions)** — all match
  Section 10's current (0-defect, independently verified) text exactly, including the -9%/-18% y/y
  figures. **PASS.**
- **Section 11 rows (Responsible-AI quote, ORG-02 controls, EV fleet, emissions)** — all match Section
  11's current (0-defect, independently verified) text exactly. **PASS.**
- **Section 13 rows (50 KPIs/5 families/30-baseline/20-new, churn gap, Governance family)** — independently
  re-summed against `KPI_Tree_v2.md`'s own family table (Portfolio 4/4, Customer&growth 9/3, Financial
  11/3, Operational 6/3, Governance 0/7 → totals 30 baseline / 20 new, of 50) — **arithmetic confirmed
  exact.** Matches Section 13's current (Pass-2-fixed) text. **PASS.**

## Geographic Evidence Rules check (independently re-run against the rulebook itself, not just Pass 2's summary)

Read `Geographic_Evidence_Rules.md` in full and checked every geography tag stated inline in §14.2 (e.g.
"(Group)", "(GCC + Jordan, six markets pre-Dec 2024, excludes Egypt/Iraq)", "(market-comparison: UAE,
Kuwait, Qatar)") against the six named failure patterns. No instance found of: a Group/GCC figure
presented as Egypt-proven without an inference qualifier; an Egypt figure presented as Group-representative;
a pre/post-FY2025 non-GCC figure used interchangeably; or "MENA" used as a stand-in for the 8-market
footprint. The one inference-heavy row (talabat pro uplift figures, ASM-016) is correctly labeled
"GCC+Jordan cohort... excludes Egypt/Iraq" every time it appears in §14.2, never asserted as an
Egypt-proven fact. **Clean.**

## Repository-hygiene aside (not a Section 14 citation defect, flagged for the Orchestrator)

`git status` at the start of this session shows `Section_13_Monitoring_and_Evaluation.md` deleted and
replaced by an untracked `Section_13_Monitoring_and_Evaluation 2.md` (note the space and "2" — a
filesystem/sync artifact, not a deliberate rename). Section 14 does not link to Section 13 by filename
anywhere (its "See also" list omits Section 13, and §14.2's Section 13 rows cite `KPI_Tree_v2.md` and
`Topics/Customer Churn.md` directly, not the section file), so this does not currently break any Section
14 citation. It is worth resolving before the whole-plan compilation stage, since a stray " 2" suffix on
a canonical section filename is exactly the kind of thing that could silently break a future wikilink.

## Summary

- **All 60 rows of §14.2 checked** (the table has 60 rows, not the 40 described in this task's brief —
  noted above, not itself a defect), each against its originating section's *current* file content, not
  Section 14's memory of it.
- **All three of Pass 2's fixes independently re-derived and confirmed still correct**, including a
  from-scratch re-read of `DEC-009` to confirm Section 14's current DEC-009/OPT-003 characterization is
  accurate and the "OPT-003 needs to pilot" misreading does not recur anywhere in this section.
- **One new defect found**: Section 14's own provenance note and §14.8 assert Section 9 "still" carries
  stale `Proposed`/"unresolved" framing — this is no longer true; Section 9 was independently corrected
  the same day. This is a stale claim about another section's content, not merely inherited stale
  content, and needs a dated correction (not a silent edit) before this section is submission-final.
- ASM-029–033 dollar ranges, both mandatory caveats, and the mandatory DEC-009 disclosure sentence are
  all confirmed byte-for-byte consistent with `Assumptions_Register.md` and `Investment_Portfolio_
  Register.md`.
- Geographic Evidence Rules check: clean, independently re-run against the rulebook itself.

## Verdict

**PASS WITH ONE MODERATE-TO-HARD DEFECT.** Section 14's substantive citation content — the traceability
table's 60 rows, the DEC-009 allocation-range exhibit, and its arithmetic — is accurate and internally
consistent, and every defect Pass 2 found and fixed is independently re-confirmed correct against current
primary and secondary sources. However, this section cannot be marked clean until Finding 1 (the stale,
now-false claim about `Section_09_Financial_Plan.md`'s current content) is corrected. Per the 0%-tolerance
rule on unsupported/incorrect named-fact claims, this is an open citation-audit failure and this section
should not proceed to Stage 10/submission-final status until it is fixed and re-confirmed.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_14_Appendices.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md` (the section whose current state
  Section 14's stale claim is about)
- `vault/Validation/Citation_Audit_Section_09_v2_Pass2.md` (confirms Section 9's current Approved/resolved
  state)
- `vault/Validation/Citation_Audit_Section_14_v2_Pass2.md` (prior pass, superseded in part by this one)
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
- `vault/Decisions/Investment_Options/OPT-003_food-leadership-cvp-partner-retention-gcc3.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Decisions/Assumptions_Register.md`,
  `vault/Decisions/Investment_Portfolio_Register.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`
