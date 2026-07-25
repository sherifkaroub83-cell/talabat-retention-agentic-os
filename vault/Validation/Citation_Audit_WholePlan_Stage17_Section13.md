---
type: validation
section: 13
pipeline_stage: "17 (whole-plan citation audit)"
run_date: 2026-07-25
auditor: independent Stage 17 reviewer
status: FAIL — hard cross-section finding open (stale duplicated claim in Section 1 and Section 14); Section 13's own text and frontmatter status claim confirmed accurate
---

# Citation Audit — Whole-Plan Stage 17 — Section 13 (Monitoring and Evaluation)

## Method

1. Confirmed the restored file exists and is readable at
   `vault/Projects/Business_Plan_Drafts_v2/Section_13_Monitoring_and_Evaluation 2.md` — **note the
   filename**, see Hard Failure 1 below.
2. Traced every numeric/named-fact claim in the restored Section 13 body against
   `vault/Forecasts/KPI_Tree_v2.md` (primary source), `vault/Knowledge/Topics/Customer Churn.md`,
   `vault/Knowledge/Topics/Capital Allocation and Investment Governance.md`,
   `vault/Decisions/Decision_Log/DEC-007...md`, `DEC-008...md`, `vault/Decisions/Investment_Options_Register.md`,
   `vault/Decisions/Investment_Options/OPT-002...md`, `vault/MOC/Source Register.md` (for the
   "29-document corpus" figure), and `Section_12_Implementation_Plan.md` (for the OPT-002 H1→H2
   gate/uplift-range claim).
3. Compared the restored text against `vault/Validation/Citation_Audit_Section_13_v2_Pass2.md` and
   `vault/Validation/QA_Review_Section_13_v2_Pass2.md` (the two artifacts the file's own frontmatter
   cites as the source of its "3 fixes... all fixed 2026-07-24" claim) to confirm the restore pulled
   the post-fix version, not a pre-fix one.
4. Searched all 14 currently-drafted sections under `Business_Plan_Drafts_v2/` for any claim *about*
   Section 13's content, and any place Section 13's own claims (the churn-scope statement in
   particular) are duplicated or paraphrased elsewhere in the plan, per Stage 17's specific purpose.

## Hard failures

**1. File restored under the wrong filename — `Section_13_Monitoring_and_Evaluation 2.md`, not
`Section_13_Monitoring_and_Evaluation.md`.** Git status shows the canonical path as deleted (`D`) and
an untracked file `"Section_13_Monitoring_and_Evaluation 2.md"` in its place. Every wikilink in this
plan that points to `[[Section_13_Monitoring_and_Evaluation]]` (Section 1's Executive Summary,
Section 2, Section 14's traceability rows, Section 13's own `[[Section_09_Financial_Plan]]` /
`[[Section_12_Implementation_Plan]]` reciprocal links) currently resolves to a file that, under plain
git/filesystem semantics, does not exist at that path — only Obsidian's fuzzy alias-matching (not
guaranteed in a git-based CI/export pipeline) would paper over this. **Fix needed:** `git add` the
restored content under the correct filename `Section_13_Monitoring_and_Evaluation.md` and remove the
`" 2.md"` duplicate before this section can be considered re-integrated into the plan.

**2. Stale, pre-fix churn-scope claim duplicated in Section 1 and Section 14 — not propagated from
Section 13's Pass 2 fix.** Section 13's Pass 2 citation audit (`Citation_Audit_Section_13_v2_Pass2.md`
#9) and QA review (`QA_Review_Section_13_v2_Pass2.md` fix #3) both flagged the phrase "no churn rate...
at Group or **any country level**" as overbroad — the corpus (`Topics/Customer Churn.md`) only
confirms the absence for Group and Egypt specifically, not for all eight markets independently. This
was fixed **in Section 13's own text** (now reads: "...for talabat overall (Group) or for Egypt
specifically... — the only country the corpus addresses this question for at all," lines 57-59). **The
identical pre-fix overbroad phrasing was never propagated to the two other sections that state the
same fact:**
   - `Section_01_Executive_Summary.md` line 190: "no churn rate, definition, or baseline exists
     anywhere in the corpus, at Group or **any country level**" — cites
     `Section_13_Monitoring_and_Evaluation.md`, "Churn — the Single Biggest Customer-Side Gap" as its
     source (line 193), but the claim as stated no longer matches what that cited section actually
     says post-fix.
   - `Section_14_Appendices.md` line 219 (traceability table row 13): "No churn rate, definition, or
     cohort analysis exists anywhere in the corpus, **Group or country level**" — cited to
     `Topics/Customer Churn.md` directly.
   This is a geography-transfer citation-audit failure per the task brief's own framing: a Group/Egypt
   finding is being presented as if independently confirmed absent for all eight markets. **Fix
   needed:** re-draft both lines to match Section 13's corrected scope ("Group or Egypt specifically";
   optionally note the extension to the other seven markets is an inference, not a separately
   confirmed absence) — flagged back to the Orchestrator for re-drafting, not silently softened here.

## Moderate findings

None beyond the hard failures above — Section 13's own body, once restored, contains no new citation
defect (see Confirmed correct, below, for full claim-by-claim trace).

## Cross-section reference checks

| Cross-reference | Location | Verification result |
|---|---|---|
| "Section 13, 'Churn — the Single Biggest Customer-Side Gap'" cited for the churn-gap claim | `Section_01_Executive_Summary.md` line 193 | Heading exists verbatim in restored Section 13 (line 55). **But the claim text built around this citation (line 190) repeats the pre-fix overbroad "any country level" wording — see Hard Failure 2.** |
| Section 13 traceability rows (KPI count, churn gap, Governance family) | `Section_14_Appendices.md` lines 218-220 | Row 218 (50 KPIs/5 families/30-20 split) — **matches** `KPI_Tree_v2.md` exactly. Row 220 (Governance family 7/7 newly-instrumented) — **matches** `KPI_Tree_v2.md` and `Topics/Capital Allocation and Investment Governance.md` exactly. Row 219 (churn) — **repeats the same pre-fix overbroad phrasing as Section 1**; see Hard Failure 2. |
| "Section 13 shows how performance would be monitored against it [the base-case allocation]" | `Section_02_Business_Description.md` line 134 | Non-numeric, general characterization — accurate; restored Section 13 does present KPI monitoring against the base case (Review Cadence section). No defect. |
| Section 13's own citation of `DEC-008`'s scope (no bucket-level/2.2:1 breakdown) | Section 13 lines 15-16 | Confirmed against `DEC-008` (resolved 2026-07-23, Option 1 — Base case only; explicitly extends to "Section 12/13's" headline KPI framing). Accurate. |
| Section 13's citation of "Section 12's evidence-gated horizon structure," OPT-002 H1→H2 gate, GCC+Jordan 20-28%/26-32% uplift range | Section 13 lines 96-103 | Confirmed against `Section_12_Implementation_Plan.md` lines 63-68 ("OPT-002 go/no-go: contingent on H1's Egypt/Iraq pro-adoption evidence... 20-28%/26-32% range") and `KPI_Tree_v2.md` C5/C6. Exact match. |
| Section 13's citation of pre-pivot `DEC-007` as "methodology precedent only" | Section 13 line 101, traceability table line 114 | `DEC-007` frontmatter confirms `status: superseded`, superseded 2026-07-23 by the pivot. Section 13 correctly labels it historical/methodology-only in both the prose and the traceability table — no live-decision misattribution. |
| Section 13's own frontmatter `status` line claiming 3 fixes applied 2026-07-24 | Section 13 frontmatter (line 4) vs. body | All three claimed fixes verified present in the restored body: (a) Review Cadence section exists (lines 64-74); (b) KPI baseline periods now stated inline ("Q1 2025→Q1 2026," "Dec'24→Dec'25→Mar'26," lines 38); (c) churn-scope claim narrowed to "Group... or Egypt specifically... the only country the corpus addresses" (lines 57-59), matching the fix instructions in `Citation_Audit_Section_13_v2_Pass2.md` and `QA_Review_Section_13_v2_Pass2.md` exactly. **The restore pulled the post-fix version — frontmatter status claim is accurate for Section 13's own text.** |
| `Section_04_Value_Proposition.md`, `Section_08`, `Section_10`, `Section_11`, `Section_12` references to "KPI Tree" / Governance family | Cited directly to `KPI_Tree_v2.md`, not to Section 13's prose | Out of scope for a Section-13-specific stale-reference check — these are independent citations to the shared source file, not claims about Section 13's content. No defect attributable to Section 13. |

## Confirmed correct

- 50 KPIs / 5 families / 30 baseline-exists / 20 newly-instrumented — matches `KPI_Tree_v2.md` summary
  table exactly (4+9+11+6+0=30; 4+3+3+3+7=20).
- Per-family counts (Portfolio 8/4/4, Customer & growth 12/9/3, Financial 14/11/3, Operational 9/6/3,
  Governance 7/0/7) — all match `KPI_Tree_v2.md` family subtotals.
- talabat pro subscriber GMV share (32%→49%, Q1 2025→Q1 2026) — matches KPI_Tree_v2 C1 exactly, period
  included.
- Multi-vertical GMV share (68%→73%→76%, Dec'24→Dec'25→Mar'26) — matches KPI_Tree_v2 C3 exactly.
- Dark-store count (130→160 stores) — matches KPI_Tree_v2 O1 exactly.
- Churn finding (C12/`Topics/Customer Churn.md`) as stated **within Section 13 itself** — correctly
  scoped to Group and Egypt specifically, not all eight markets; the corrected wording matches the
  underlying topic note.
- Governance family — "talabat discloses zero internal capital-allocation governance mechanics
  anywhere in the 29-document corpus" — TLB-001 through TLB-029 confirmed as the full source-register
  count (`vault/MOC/Source Register.md`); claim matches `Topics/Capital Allocation and Investment
  Governance.md`'s Open Questions verbatim in substance.
- No numeric target assigned to any newly-instrumented KPI anywhere in the section — verified by
  reading the full text; matches `KPI_Tree_v2.md`'s own stated rule.
- `ASM-016`, `ASM-017` cited correctly (Approved status, correct node attribution — F10 to N-42, not
  N-06/N-09).
- Old pre-pivot draft (`vault/Projects/Business_Plan_Drafts/Section_13_Monitoring_and_Evaluation.md`)
  confirmed to still exist untouched, consistent with the `supersedes_note`.

## Summary

This was Section 13's first-ever Stage 17 pass. The restored file itself, once the filename issue is
set aside, is citation-clean — every one of the three defects its own Pass 2 review found (missing
Review Cadence section, imprecise KPI baseline periods, overbroad churn-scope claim) is genuinely fixed
in the restored text, confirmed by direct comparison against the Pass 2 audit/QA artifacts. However,
Stage 17's whole-plan lens catches exactly the failure mode it exists to catch: the churn-scope fix
was applied locally to Section 13 but never propagated to the two other places in the plan that state
the same fact in the plan's own words (Section 1's Executive Summary and Section 14's Appendices
traceability table), both of which still carry the pre-fix, overbroad "Group or any/[blank] country
level" phrasing. Separately, the restore itself landed at the wrong filename
(`"Section_13_Monitoring_and_Evaluation 2.md"` instead of the canonical path), which is a structural
integrity problem independent of citation content but blocks a clean re-integration of this section
into the plan's wikilink graph.

## Verdict

**FAIL — do not clear Section 13 to stage 10 as complete plan-wide until both hard failures are
resolved.** Section 13's own body content passes independently (0 open citation defects). The 0%
untraceable-numeric-claim bar is met for Section 13 in isolation, but the whole-plan consistency bar is
not: Section 1 and Section 14 both currently misstate the churn-evidence scope in a way that
contradicts Section 13's own (corrected) text, and the file's restored location breaks the plan's
wikilink graph. Escalate both to the Orchestrator for re-drafting/re-filing — not fixed in this
investigation-only pass.
