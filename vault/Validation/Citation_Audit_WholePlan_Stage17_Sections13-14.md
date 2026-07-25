---
type: validation
sections: 13-14
pipeline_stage: "17 (whole-plan citation audit)"
run_date: 2026-07-25
auditor: independent Stage 17 reviewer
status: Section 13 BLOCKED (source file missing from working tree) — Section 14 PASS WITH ONE HARD FINDING (stale cross-reference) and minor notes
---

# Whole-Plan Citation Audit — Stage 17 — Sections 13 & 14

## Method

Per the assignment: (1) full citation trace of every numeric/named-fact claim in Section 13, and a
thorough sample of Section 14's ~60-row traceability table; (2) a cross-section reference check —
specifically, does the CURRENT text of the section each Section 14 row summarizes still say what the
row claims, given Sections 4, 5, 7, 8, 9, 12 were independently fixed (Pass 2/Pass 3) after Section 14
was last drafted.

**Section 13 could not be audited from its primary source.** `vault/Projects/Business_Plan_Drafts_v2/
Section_13_Monitoring_and_Evaluation.md` — the file this task explicitly names as my assignment — does
not exist anywhere in the current working tree. Confirmed by three independent methods: `Glob` for
`vault/Projects/Business_Plan_Drafts_v2/*.md` (13 sections present, 13 absent), `Glob`/`Grep` for
`**/Section_13_Monitoring*` (only the old, pre-pivot, superseded `Business_Plan_Drafts/` copy — not the
`_v2` copy — is found), and a direct `Read` attempt on the exact path (file-not-found). The task brief's
own git-status snapshot showed the `_v2` file as `D` (deleted) with an untracked ` 2.md` iCloud-sync
duplicate in its place; that duplicate is also now absent. This is the same recurring iCloud
sync-artifact class documented in `SESSION_LOG.md` Session 10 ("Section_13_Monitoring_and_Evaluation.md
had been deleted with an untracked ` 2.md` duplicate left in its place... recurred twice more during the
session and was re-cleaned each time") — evidently it recurred a further time and, this time, neither
copy survived into this thread's working-tree snapshot. Per this task's explicit instruction not to edit
either section file, I did not attempt to reconstruct or restore it. Where a Section 13 claim needed
verification for Section 14's own traceability-table check, I traced it instead to the underlying
`KPI_Tree_v2.md` (Section 14's own cited vault note for every Section 13 row) and to the last confirmed
Section 13 text as reflected in `Citation_Audit_Section_13_v2_Pass2.md` / `QA_Review_Section_13_v2_Pass2.md`
(2026-07-24), flagged explicitly below as secondary evidence, not a substitute for reading the file.

**Section 14** was read in full (all ~430 lines, current working-tree state) and checked against:
`vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/KPI_Tree_v2.md`,
`vault/Decisions/Assumptions_Register.md`, `vault/Decisions/Decision_Log/DEC-009...md`,
`vault/Decisions/Investment_Options_Register.md`, `vault/Knowledge/Topics/EBITDA.md`,
`vault/Knowledge/Topics/AI.md`, and — for the cross-section check — the **current** text of Sections 2,
3, 4, 5, 6, 7, 8, 9, 10, 11, 12 (each read or grep-verified directly, not assumed from memory or from
prior audit reports). Of the traceability table's 60 rows (§14.2, one row per section 2-14 plus the
DEC-009 exhibit row), **43 were individually re-traced to their cited vault note/source and to the
current text of the section they summarize**; the remaining rows (concentrated in Sections 2, 3, 6, 10,
11, which were not part of any Pass 2/3 fix cycle and were independently Pass-2-cleared or, for Section
11, independently Done-verified with an explicit cross-check against Section 14 itself) were spot-checked
by grep against their section's current text rather than individually walked, since the fixed sections
(4, 5, 7, 8, 9, 12) were judged the highest-risk set per the task brief and got full individual
verification. `vault/Architecture/Geographic_Evidence_Rules.md` was applied to every geography tag
encountered.

---

## Hard failures

### H1 — Section 14 §14.2 row for Section 4 cites the wrong vault note; the claim is not supported there (stale post-Pass-3 cross-reference)

Row (§14.2, Sec. 4): *"AI/personalisation EBITDA contribution USD14mn+ (FY2024) → USD30mn+ (FY2025),
Group | `Topics/EBITDA.md`; `Value_Driver_Tree_v2.md` N-09 | TLB-001 p.23; TLB-002 p.15"*.

`Topics/EBITDA.md` (read in full) is about Group Adjusted EBITDA overall (the FY2024→FY2025 margin
build, the FY2026 margin bridge) — it **does not contain the AI/personalisation-specific USD14mn→30mn+
EBITDA-contribution figure at all**. The figure actually lives in `Topics/AI.md` ("the personalisation/
ranking algorithm's estimated contribution rose from USD 14mn+ p.a. (FY2024) to USD 30mn+ p.a. (FY2025),"
TLB-001 p.23, TLB-002 p.16). This is exactly the defect independently found and fixed **inside Section 4
itself** during the 2026-07-24 Pass 3 review (`SESSION_LOG.md` Session 10: "Section 4 — EBITDA figure
mis-cited to `Topics/EBITDA.md`/N-06 instead of `Topics/AI.md`/N-09 (hard)"). Section 4's current text
(§4.2) now correctly cites `Topics/AI.md`; `Value_Driver_Tree_v2.md` N-09" for this exact figure. Section
14's own table row, however, was never updated to match — it still shows the pre-fix `Topics/EBITDA.md`
citation. This is precisely the cross-section-drift failure mode Stage 17 exists to catch: Section 4 was
fixed after Section 14's Pass 2/Pass 3 addenda were written, and the fix was not propagated into Section
14's summary of it. **Fix needed:** change the vault-note cell in this row from `Topics/EBITDA.md` to
`Topics/AI.md` (keep `Value_Driver_Tree_v2.md` N-09, which is correct).

No other row was found citing a vault note that, on inspection, does not contain the claimed figure —
this is the only hard failure of that specific kind found in Section 14.

### H2 — Section 13's assigned source file is absent from the repository

Not a content defect discoverable by reading the file (there is no file to read) but a hard blocker for
Stage 17 sign-off regardless: per the pipeline's own rule ("Stage 19 cannot begin unless Stages 14, 15,
16, and 18 all show PASS, and Stage 17 shows zero open citation failures"), a section with no retrievable
source text cannot be certified as passing citation audit — its status must read **BLOCKED**, not PASS,
until the file is confirmed restored (e.g. via `git checkout` of the last good commit, or by re-running
Section 13's drafting stage) and re-verified by a fresh independent pass. I did not attempt to fix or
restore it myself (out of scope: investigation and reporting only, no edits this round).

---

## Moderate findings

### M1 — Section 13's own known precision gaps (carried forward from Pass 2, not confirmed resolved)

`Citation_Audit_Section_13_v2_Pass2.md` and `QA_Review_Section_13_v2_Pass2.md` (2026-07-24, the most
recent record of the file's actual content) recorded a **PASS WITH MINOR FIXES** verdict with three
required fixes: (a) add the missing time periods to the talabat-pro-GMV-share and multi-vertical-GMV-share
table cells; (b) narrow the churn "Group or any country level" generalization to match
`Topics/Customer Churn.md`'s actual scope ("Group or Egypt"); (c) add the missing **review-cadence**
statement (a template-completeness FAIL on its own — the McKinsey Lens instruction requires "the review
cadence **and** the kill criteria," and only the kill-criteria half was present). The QA reviewer
explicitly instructed: "Do not flip the tracker status cell — hand back to the Orchestrator for the
review-cadence addition and the two precision fixes, then re-submit for a fresh Pass 2 review." **Whether
these three fixes were ever applied cannot be determined** — the file that would show it is missing. Note
also that `vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md` (the master tracker,
line 101) currently marks Section 13 **"✅ Done (independently verified)"**, which is inconsistent with
the Pass 2 reviewer's own explicit instruction not to flip that status cell until the fix-and-resubmit
cycle completed. This master-tracker/QA-instruction mismatch is a second, independent finding — flagged
here because it bears directly on whether Section 13 is safe to treat as Done, but it is a defect in the
tracker file, not in Section 13 or 14 themselves.

### M2 — Churn geography-generalization risk propagates into Section 14's own table, unqualified

Section 14's row 13 states: *"No churn rate, definition, or cohort analysis exists anywhere in the
corpus, Group or country level | `Topics/Customer Churn.md` | corpus-wide absence finding."* Verified:
`Topics/Customer Churn.md`'s Open Questions are explicit about the absence for "talabat overall or for
Egypt specifically" — it does not independently confirm the absence for each of the other seven
countries individually (UAE, Kuwait, Qatar, Bahrain, Oman, Jordan, Iraq). This is the same broader-than-
source generalization Pass 2 already flagged inside Section 13 itself (finding #9 in
`Citation_Audit_Section_13_v2_Pass2.md`). Section 14's table inherits the identical over-broad phrasing
("Group or country level") rather than the narrower, source-matching "Group or Egypt." Not a fabrication
(the inference — "if Group-level data doesn't exist, no country breakout of it can" — is reasonable) but,
per the citation-audit skill's own discipline, it should be qualified as an inference rather than stated
as directly confirmed. **Fix needed:** narrow to "Group or Egypt" or add an inline inference qualifier,
matching whatever fix is eventually applied to Section 13 itself.

### M3 — No numeric double-statement conflicts found between Sections 13 and 14

Checked specifically per the task's instruction to flag "any statistic appearing in both your two
sections with a different value in each." Every Section-13-attributable figure in Section 14's table (50
KPIs / 5 families / 30 baseline-exists / 20 newly-instrumented; Portfolio 8/4/4; Customer & growth
12/9/3; Financial 14/11/3; Operational 9/6/3; Governance 7/0/7; the pro-GMV-share and multi-vertical-GMV-
share figures) was cross-checked directly against `KPI_Tree_v2.md`'s own summary table and family
sub-totals and matches exactly (4+9+11+6+0=30; 4+3+3+3+7=20, per `KPI_Tree_v2.md`'s own arithmetic,
independently re-added here). No conflicting duplicate figure was found. This does not resolve M1's
open question (whether Section 13's own text, now unreadable, still matches this), but it confirms
Section 14's own numbers are internally consistent with the shared underlying source both sections draw
from.

---

## Cross-section reference checks

**Section 4 (fixed Pass 2 + Pass 3).** Two Section 14 rows summarize Section 4. Multi-vertical
13.0x/3.8x + N-14/N-11 node IDs: matches Section 4's current §4.2 text exactly (Pass 2's node-ID fix
holds). AI/personalisation EBITDA USD14mn+→30mn+ + `Topics/EBITDA.md`: **does not match** — see **H1**
above; Section 4 itself now correctly cites `Topics/AI.md`.

**Section 5 (fixed Pass 2 + Pass 3).** Three rows (tech stack/Delivery Hero licensing, talabat pro live
in "6 of 8 countries" + N-08/N-13, MCP-integration-undecided). All three match Section 5's current text
exactly, including the corrected "6 of 8" figure (Pass 2's fix) and the DEC-009 mischaracterization fix
(Pass 3) — Section 14 makes no claim that touches the corrected DEC-009 passage, so that particular Pass
3 fix had nothing to propagate.

**Section 7 (fixed Pass 2 + Pass 3).** Four rows checked (CVP-over-discounting quote, customer-journey
sequence, synthetic-funnel labeling, FinTech GCC-then-Egypt sequencing). All four match Section 7's
current text exactly, including the post-Pass-3 corrected §7.5/§7.6 language on `DEC-009`'s resolved
near-term-priority pairing (OPT-002/OPT-003), which Section 14 does not independently restate for Section
7's rationale but does not contradict either.

**Section 8 (fixed Pass 2 + Pass 3).** One row (GLSA Central Value Baskets, CQCA, Kitchens Services
Agreement). Verified against raw source text (`_source_text/Talabat-Holding-plc_International-Offering-
Memorandum.txt`, CQCA termination clause) and against Section 8's current §8.1/§8.2, which now correctly
states the CQCA in past tense (terminated 31 Dec 2024, replaced by GLSA sub-licensing from 1 Jan 2025 —
Pass 3's fix). Section 14's row is a neutral list of agreement names with no tense claim, so it was not
rendered stale by that fix and needed no update.

**Section 9 (Pass 2 fixed, Pass 3 confirmed 0 new defects, ✅ Done).** Three rows (FY2026 guidance range,
Q1 2026 4.8% margin, no disclosed ROI/payback figure). All three match Section 9's current text exactly,
including the `Topics/EBITDA.md` citation on the no-ROI-figure row — correctly cited here, since that row
(unlike H1's) is exactly the kind of absence-of-disclosure claim `Topics/EBITDA.md` does state.

**Section 12 (fixed Pass 2 + Pass 3).** Two rows plus §14.8's own cross-check paragraph, all describing
`DEC-009`'s resolved near-term-priority pairing of OPT-002/OPT-003 and OPT-003's "not a pilot, targeted
budget weighting" status. All match Section 12's current Three Horizons text exactly, including the
Pass-3-fixed H2 bullet (OPT-003 spend "does not" go beyond the disclosed ~USD55mn envelope) — Section
14's own text does not restate the pre-fix "beyond ~USD55mn" framing anywhere, so no propagation defect
found here.

**Sections 2, 3, 6, 10, 11 (not part of the Pass 2/3 fix cycle).** Spot-checked rather than exhaustively
walked. Section 2 (USD175mn=120+55 split, GMV, DFM listing, EBITDA margin): matches. Section 3 (GMV/
orders/Partners, category-share range, dual-TAM figures, GCC/non-GCC split, pro/multi-vertical GMV-share
trends, the flagged Egypt category-share inconsistency): matches, including the correctly-carried-forward
unresolved same-tier conflict. Section 6 (revenue-by-fee-type, take rate, ASM-013 decomposition, G&R
margin drag, CARC): matches. Section 10 (17 material risks / 5 categories, EBITDA margin trajectory,
governance gap, CEO/board transitions): matches exactly, including the precise "17 risks / 5 categories"
count. Section 11 (EV fleet counts, emissions figures): matches; Section 11's own frontmatter separately
confirms it was independently re-checked against Section 14 with 0 defects.

**Section 14's own internal consistency (§14.8, its self-performed cross-section check).** The Pass 3
addendum correctly states Section 9's `ASM-015`-`028`/`DEC-009` staleness is now resolved — verified
directly against Section 9's current frontmatter and body text, which do state `Approved`/resolved
throughout. No remaining stale claim of that type found anywhere else in Section 14.

---

## Confirmed correct

- Section 14's own frontmatter/provenance narrative (the Pass 2 and Pass 3 addenda, and their description
  of what was fixed and when) accurately reflects the current state of the sections it discusses, with
  the single exception of H1.
- `ASM-013`, `ASM-015`–`ASM-020`, `ASM-029`–`ASM-033` are all confirmed `status: Approved` in
  `Assumptions_Register.md`, matching every Section 14 citation to them.
- `DEC-009` is confirmed `status: approved`, resolved 2026-07-23, middle path — its Decision text matches
  every section's characterization of the near-term-priority pairing (OPT-002/OPT-003), continue-at-pace
  items (OPT-001/OPT-005), and longer-horizon item (OPT-004).
- All five `OPT-001`–`OPT-005` records confirmed `status: candidate` — matches §14.6's claim that no
  option has moved past candidate status.
- No geography-transfer violation found anywhere in Section 14's table: every `inferred-applicability`,
  `market-comparison`, `GCC`/`non-GCC` (post-FY2025), and `Egypt (standalone)` tag reproduced in the table
  matches the tag stated in the row's own cited source, per `Geographic_Evidence_Rules.md`.
- No fabricated citation, invented figure, or Proposed (non-Approved) Assumption cited as settled was
  found anywhere in Section 14.

---

## Summary

Section 14 is close to whole-plan-clean but not there yet: one genuine hard cross-reference failure (H1 —
a stale vault-note citation left behind by Section 4's own Pass 3 fix, exactly the class of defect Stage
17 exists to catch) and one moderate over-broad-generalization carried over from Section 13's own
unresolved Pass 2 finding (M2). Both are small, mechanical fixes (swap one vault-note name; narrow one
phrase), not structural problems with the table's argument or sourcing discipline, which otherwise held
up well across 43 individually re-traced rows plus a spot-check of the rest.

Section 13 cannot be given a citation-audit verdict of any kind this round: its assigned source file does
not exist in the current working tree. This is an environment/repository-state problem (a recurring
iCloud-sync deletion artifact already documented in `SESSION_LOG.md` Session 10), not a content defect —
but it is a hard blocker regardless, since Stage 17 requires zero *open* citation failures and "the file
is missing" cannot be resolved to a pass.

## Verdict

- **Section 13: BLOCKED.** Cannot proceed to Stage 18/19 until the source file is restored (recommend
  `git checkout` of the last commit containing it, or a fresh drafting pass) and re-audited by an
  independent Stage 17 (or targeted Pass 4) pass. Its last known content (Pass 2, 2026-07-24) carried
  three open, unresolved precision/completeness fixes (review cadence missing; two missing time periods;
  the churn over-broad generalization) that were never confirmed applied.
- **Section 14: PASS WITH ONE HARD FIX REQUIRED (H1) AND ONE MODERATE FIX (M2).** Not yet clear for Stage
  18/19 as-is; both are narrow, mechanical corrections to the §14.2 table, not a re-draft. Re-verification
  after the fixes is required per this project's two-pass discipline before either section can carry an
  unqualified "PASS" into Stage 18.
