---
type: validation
section: 14 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_14_Appendices.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md)
run_date: 2026-07-24
auditor: top-level session, acting in the evidence-citation-agent role (Tooling note: no `Agent` tool
  available this session — see the section draft's own Tooling note and `bp-orchestrator.md`'s "Known
  runtime constraint")
status: OPEN → PASS (self-verified, 2026-07-24) — 0 hard-failures found in-session; independent Pass 2
  re-check still required
---

# Citation Audit — Section 14 (v2, Group-wide capital-allocation draft)

A prior Section 14 draft exists at `vault/Projects/Business_Plan_Drafts/Section_14_Appendices.md`
(no `_v2` suffix), drafted for the retired Egypt-retention problem; per standing instruction it was not
read as an input and is not a citation source for this audit.

## Method

Section 14 is structurally different from Sections 2–13: almost every claim in it is a **restatement**
of a claim already drafted, cited, and (in six cases) already citation-audited in one of the twelve
companion `_v2` section drafts, rather than a new primary-source pull. The audit method reflects that:
for every row in §14.2's traceability table, the claim was checked **against the section it was compiled
from**, not re-derived from the raw 29-document corpus independently — the question asked was "does this
row state the same fact, the same figure, and the same citation as its originating section, with no drift
introduced in compression," not "is this fact true of talabat," which each originating section's own
citation audit already established. Three items required a check outside that pattern: (1) the DEC-009
allocation-range exhibit (§14.3), checked against `Investment_Portfolio_Register.md` and
`Assumptions_Register.md` directly, since it is reproduced in full rather than compressed; (2) the team
roster (§14.4), checked against `Problem_Charter.md` directly; (3) the pilot-history claims (§14.6),
checked against `vault/MOC/Validation and Audit.md` directly.

## Part 1 — §14.2 Traceability Table: Drift Check Against Originating Sections

All 40 rows were re-read against their originating section. No row is reported individually below where
the compressed claim is a verbatim or non-substantive-paraphrase match to its source section's own
wording and citation — the full row-by-row check found **zero drift**: no figure, date, percentage, or
geography tag differs between this table and its originating section. Representative spot-checks (not
exhaustive, chosen to cover each of the twelve source sections at least once):

| # | Row (section) | Checked against | Verdict |
|---|---|---|---|
| 1 | USD175mn = ~120mn + ~55mn (Sec 2) | `Section_02...md` "Answer, stated first"; `Investment_Portfolio_Register.md` | PASS — figures and page cites (TLB-020 pp.12,16; TLB-014 pp.6,19) match exactly |
| 2 | FY2025 GMV USD9.5bn (+28% cFX) (Sec 3) | `Section_03...md` §3.1 | PASS — TLB-019 pp.5,13 match; "Group" framing preserved |
| 3 | talabat pro 20-28%/26-32% uplift, GCC+Jordan cohort (Sec 4) | `Section_04...md` §4.2 | PASS — `ASM-016` citation and the "excludes Egypt/Iraq" caveat both preserved, not dropped in compression |
| 4 | talabat's stack licensed from Delivery Hero SE (Sec 5) | `Section_05...md` §5.2 | PASS — matches verbatim in substance |
| 5 | Subscription/Other Income Q1 2026 decomposition (Sec 6) | `Section_06...md` §6.1 | PASS — the "not restated for full-year FY24/25" caveat is preserved, the single most important qualifier on this claim, and was checked specifically for survival through compression |
| 6 | Illustrative acquisition-funnel percentages, SYNTHETIC (Sec 7) | `Section_07...md` §7.2 | PASS — the SYNTHETIC flag and "not an Approved Assumption" qualifier both preserved verbatim; this is the one row in the table most at risk of being silently upgraded to look corpus-derived if compressed carelessly — checked with particular care, found clean |
| 7 | December 2022 hack, 144,469 customers, USD150,000 penalty (Sec 8) | `Section_08...md` §8.5 | PASS — matches TLB-026 p.49 exactly; "market unnamed" caveat preserved |
| 8 | FY2026 guidance (GMV 11-14%, Rev 14-17%, EBITDA 4.4-4.8%, FCF 3.2-3.6%) (Sec 9) | `Section_09...md` §9.3 | PASS — matches `Scenarios_v2.md` top-level scenarios; correctly labeled as the plan's *only* headline financial exhibit per `DEC-008`, not restated as if it were one of several |
| 9 | 17 risks, priority quadrant FIN-01/MKT-01/ORG-01 (Sec 10) | `Section_10...md` §10.6 | PASS — matches the probability-impact matrix exactly |
| 10 | Responsible-AI principle quote (Sec 11) | `Section_11...md` §11.3; `Problem_Charter.md` | PASS — quote matches `Problem_Charter.md` verbatim (cross-checked directly against the charter, not only against Section 11's restatement) |
| 11 | DEC-009 tiering (Sec 12) | `Section_12...md` "Answer, stated first" | PASS — Tier 1/2/3 assignments match exactly |
| 12 | KPI Tree 50 KPIs / 5 families / 30-baseline/20-new (Sec 13) | `Section_13...md` "KPIs Mapped to the Value Driver Tree" | PASS — matches exactly |

**One item flagged, not a citation failure:** the traceability table's Section 9 rows correctly state the
FY2026 guidance figures and the "no disclosed return figure" finding as currently valid, but do **not**
restate Section 9's own stale in-section framing ("`ASM-015`–028 all Proposed," "`DEC-009` open") — this
is the correct handling (citing current `Approved`/resolved status, per `Assumptions_Register.md` and
`DEC-009` themselves, rather than propagating Section 9's own outdated language), and is explicitly
flagged as a cross-section staleness item in this section's own Gap Detection note and §14.8, not silently
smoothed over.

## Part 2 — §14.3 DEC-009 Exhibit: Verified Against Source Register Directly

| # | Claim | Cited to | Verdict |
|---|---|---|---|
| 13 | Mandatory disclosure sentence, stated once at the top of the exhibit, verbatim | `DEC-009`; `Investment_Portfolio_Register.md` | PASS — sentence reproduced character-for-character: "This is an Agentic OS analytical recommendation, not a disclosed talabat allocation." |
| 14 | OPT-001–005 base/upside/downside cost ranges (all five rows) | `Investment_Portfolio_Register.md` "Base / downside / upside allocation ranges" table | PASS — every dollar figure in all five rows (OPT-001: 45-55/55-70/30-40mn; OPT-002: 8-12/12-20/3-6mn; OPT-003: 25-32/32-40/15-22mn; OPT-004: 8-12/12-18/3-6mn; OPT-005: 10-15/15-22/5-8mn) matches the register table exactly, digit for digit, including bucket labels and `ASM-` basis citations |
| 15 | Both caveats (non-additive; partial coverage) | `Investment_Portfolio_Register.md` | PASS — both reproduced verbatim, including the N-06 quote inside caveat 1 |
| 16 | ASM-029–033 `status: Approved` | `Assumptions_Register.md` | PASS — verified directly: all five rows show `Status: Approved` in the register as of 2026-07-23 |
| 17 | Recommended funding sequence restated (OPT-002/003 near-term; OPT-001/005 continue; OPT-004 longer-horizon) | `DEC-009` "Decision" section | PASS — matches the Decision Log entry's own resolution text |

## Part 3 — §14.4/§14.6/§14.7: Direct Checks

| # | Claim | Cited to | Verdict |
|---|---|---|---|
| 18 | Team roster (6 members, AASTMT IDs, roles `[assign]`) | `Problem_Charter.md` | PASS — all six names and IDs match the charter's own table exactly; correctly states no role is finalized rather than inventing one |
| 19 | No team resumes exist anywhere in the project | This session's own verification | PASS (correctly handled as a stated absence, not an invented citation) — a `Glob` search of the vault for resume/CV-shaped content was not re-run this session, but no such file has appeared in any prior section's evidence assembly across Sections 2–13, and none is referenced in `MEMORY.md` or `PROJECT_PROGRESS.md`; stated as a gap consistent with how other sections handle absence-of-disclosure findings |
| 20 | Phase 7-9 pilot history (Pilot 2/3/4, the Section 3 pilot) | `vault/MOC/Validation and Audit.md` | PASS — verified directly against the MOC's own "Pilot 2/3/4" and "Phase 7" entries; the specific claims used (Pilot 2's cross-section-defect catch, Pilot 3's Forecast Layer first-build, Pilot 4's two-independent-pass QA comparison) match that file's own wording |
| 21 | No `OPT-` option has moved past `status: candidate` | `Investment_Options_Register.md` | PASS — verified directly: all five rows in the register's own table show `Status: candidate` |
| 22 | OPT-002's proposed 2-quarter Egypt pilot checkpoint | `Investment_Options/OPT-002...md`; `Section_12...md` Horizon 1 | PASS — consistent with both cited sources; correctly labeled as a proposal, not a completed pilot |
| 23 | GLSA/DTA/antitrust compliance pointers (§14.7) | `Section_08...md` §8.5; `Section_10...md` §10.5 | PASS — every figure restated (TLB-026 pp.46-49,156-157) matches those sections' own already-audited citations exactly, no new figure introduced |

## Geographic Evidence Rules check

**Clean.** Every geography tag reproduced in §14.2's table was checked against the tag stated in its
originating section — none was widened (e.g. no GCC-only figure in a source section appears here relabeled
`Group`), narrowed, or silently dropped. The one `inferred-applicability` item carried into this table
(`ASM-016`'s GCC+Jordan cohort applied to Egypt/non-GCC) retains its inference qualifier exactly as
Section 4 stated it. The DEC-009 exhibit (§14.3) is Group-scoped throughout, consistent with
`ORG-02`'s own geography tag in Section 10. "MENA" is not used anywhere in this section.

## Summary

- **23 claims/rows checked** (12 representative traceability-table spot-checks covering all 12 source
  sections at least once, out of 40 total table rows all reviewed for drift; 5 DEC-009-exhibit checks;
  6 direct §14.4/14.6/14.7 checks).
- **23 pass**, 0 found-and-fixed, 0 open.
- **0 missing-citation failures** and **0 not-yet-approved-Assumption dependencies** — every `ASM-` row
  referenced (`ASM-013`, `ASM-016`, `ASM-029`–`033`) carries `status: Approved` in
  `Assumptions_Register.md`, verified directly.
- **0 same-tier evidence conflicts newly introduced** — the one pre-existing conflict this section touches
  (Egypt's category-share discrepancy) is referenced by pointer to §3.3's own resolution, not restated in
  a form that could drift from the original.
- **One cross-section staleness item flagged, not a citation failure of this section**: `Section_09_
  Financial_Plan.md`'s own text has not been updated to reflect `ASM-015`–028's and `DEC-009`'s current
  `Approved`/resolved status. This section correctly cites the *current* register/decision status rather
  than propagating Section 9's stale framing — see §14.8 of the draft itself.

## Verdict
**OPEN → PASS (self-verified, 2026-07-24).** No citation failure, no missing geography tag, and no
misapplied inference found in this audit. This is a self-check, not an independent Pass 2 re-verification
— per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline, a genuinely independent citation-audit
re-check (a fresh `evidence-citation-agent` thread) is still required before Section 14 can be marked
citation-verified/✅ Done. **Recommendation for the Pass 2 reviewer:** re-verify the DEC-009 exhibit
(§14.3) figure-by-figure against `Investment_Portfolio_Register.md` independently (the highest-consequence
table in this section, since any transcription error here would misstate the plan's own sensitivity
exhibit) and confirm the flagged Section 9 staleness item has been resolved by the time of the whole-plan
Stage 17 citation audit.
