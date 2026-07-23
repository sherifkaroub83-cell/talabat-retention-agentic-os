---
report: Final Comprehensive Readiness Review
run_date: "2026-07-23"
scope: "Repository-wide readiness review of the Agentic OS and its evidence layers around the governing problem: talabat Group allocation of the USD175 million 2026 investment programme across Everyday App and Food-leadership priorities"
drafting_verdict: "READY FOR FULL BUSINESS PLAN COMPLETION"
export_verdict: "NOT READY FOR EXPORT"
---

# Final Comprehensive Readiness Review — 2026-07-23

Method: six parallel, independent read-only investigations (governing-problem consistency + memory/
identity + hygiene; Second Brain + Decision Layer; agents + skills; forecast chain + financial
integrity + active section status; template/visual/publication readiness; a 40+-item traceability
sample), synthesized by this session, followed by safe corrections applied directly and recorded
below. No Business Plan content was drafted and no export was produced during this review.

## 1. Executive verdict

**Two separate verdicts, as instructed — "ready to complete drafting" and "ready to export" are not
the same question.**

- **Readiness to complete the remaining Business Plan sections: `READY FOR FULL BUSINESS PLAN
  COMPLETION`.** The architecture, evidence layers, agents, skills, and QA gates are sound and, after
  the corrections below, consistently point to the new governing problem with no remaining Category A
  contradiction found anywhere in the repository. The 8 not-yet-drafted sections are a completion gap,
  not a readiness gap — the pipeline that would draft them is intact and has already been proven on 6
  sections.
- **Readiness to export a final Business Plan: `NOT READY FOR EXPORT`.** Only 6 of 14 sections exist;
  none has passed independent (Pass 2) QA or any of the four gates; visual-exhibit generation capability
  doesn't exist yet; and the one real prior export (of the superseded Egypt plan) used a disclosed,
  non-standard substitute toolchain rather than the documented pipeline. The formatting skill's own
  entry gate already self-blocks export in this state — that is correct self-enforcement, not a defect.

## 2. Branch and commit reviewed

- Branch: `claude/talabat-inputs-directory-7azjx2`, working tree clean at review start.
- HEAD at review start: `53d90b1` ("Close old-problem leakage gaps in the Business Plan drafting
  path"). `origin/main` HEAD: `1197841` (PR #1 merge commit). Merge-base: `474e67b`. 1 ahead / 1 behind
  — expected, since PR #2 (containing `53d90b1`) was still open at review start.
- No destructive operation performed. This review's safe corrections (§16) were committed as a
  separate commit on top of `53d90b1`.

## 3. Governing-problem consistency

Repo-wide scan classified every retention/Egypt/old-plan reference A–E per the task's rubric. **Two
genuine Category A blockers were found and fixed:**

1. `vault/MOC/MOC-Second-Brain.md` — the vault's own "Start here" index opened by describing the whole
   brain as oriented toward "AI-driven customer retention for talabat Egypt," directly contradicting
   its own "Active work" section three lines below. **Fixed** — rewritten to state the current
   governing problem and explicitly note the original scope was superseded 2026-07-23.
2. `vault/Architecture/Implementation_Roadmap.md` — self-flagged by the project's own
   `Repository_Impact_Assessment.md` as needing a rewrite, but never touched; still `status: approved`
   with no supersede marker, and linked without caveat from the active `Project Administration` MOC.
   **Fixed** — added `superseded: true` frontmatter, a supersession banner, and a caveat on the
   inbound MOC link. Content below the banner preserved unchanged as historical record.

Everything else audited — all 8 agents, all 10 skills, the old tracker, old Decisions (`DEC-001`–007),
old Assumptions (`ASM-001`–014), old Forecasts, all 14 old Business Plan section drafts, all MOC
"Active work" sections, `CLAUDE.md`/`MEMORY.md`/`PROJECT_PROGRESS.md`/`Problem_Charter.md` — was
already correctly marked historical/superseded or correctly reframed. `Hello for test.txt` is
unrelated administrative noise, not a governing-problem issue (see §15).

## 4. Second Brain alignment

Structurally sound and now fully aligned after corrections. Findings:

- **12 of 16** checklist topics (2026 Investment Programme, Everyday App, Food Leadership, Grocery and
  Retail, FinTech, Multi-Verticality, Customer Economics, EBITDA, Cash Generation, GCC vs non-GCC,
  Investment governance, Geographic evidence rules) have a dedicated, well-cited Topic note.
- **4 topics** (Investment Options, Risks, Implementation, Monitoring) are covered only at the
  Decision/Forecast/Draft layer, not as standalone Topic-note syntheses — an architecturally
  defensible choice (those layers are the right home for decision-bound content) but flagged for the
  team to confirm graders won't expect uniform Topic-note coverage.
- **Fixed:** 6 new Topic notes (Everyday App, Food Leadership, Grocery and Retail, FinTech,
  Multi-Verticality, Capital Allocation and Investment Governance) were reachable but not linked from
  any MOC — now linked into `Business Model MOC.md`, `Customer MOC.md`, and `Finance MOC.md`.
- **Fixed:** `Talabat MOC.md` and `Market Intelligence MOC.md` both described Egypt as "the capstone's
  target market" — corrected to "a genuine worked example within talabat's eight-market Group scope."
- Historical/reusable separation is otherwise sound: old fact-notes remain citable evidence without
  being rewritten at scale, and agents are correctly instructed to re-derive conclusions rather than
  import old ones (verified directly, not assumed).

## 5. Memory and identity alignment

`CLAUDE.md`, `MEMORY.md`, `PROJECT_PROGRESS.md`, `Problem_Charter.md`, `README.md`, `vault/identity.md`,
and `vault/user.md` all independently verified to agree on: the governing problem, the eight-market
Group-wide scope, the USD175mn/~120mn/~55mn envelope, the drafting-status claim (verified directly
against the filesystem — exactly 6 files exist under `Business_Plan_Drafts_v2/`, matching every
tracking file's claim, no over-claim found), `DEC-008`/`DEC-009` statuses, the canonical drafting
folder, and the publication state (`Outputs/` correctly contains only the old Egypt export; nothing
claims the new plan is publication-ready). Instructor-approval-as-OS-gate language is confirmed removed
repo-wide (re-verified independently of the prior cleanup's own report).

**Fixed:** `SESSION_LOG.md` was several sessions stale — no entry existed for pivot Phases 3–9, the
instructor-approval cleanup, the `main` merge, or PR #2's leakage-gap fixes. Added Session 9,
summarizing all of it (see §16).

## 6. Agent and skill alignment

All 8 agents and all 10 skills reviewed individually. **8 of 10 numbered checks PASS outright**
(exclusive `Business_Plan_Drafts_v2/` targeting; explicit exclusion of the old folder; `_v2`-only
forecast files; Group tracker usage; 14-section Group-concept mapping in `business-plan-drafting`;
geographic-evidence discipline in citation agents; `session-end` fully generic; exact expected
skill/agent roster present, none missing or extra).

- **1 PARTIAL:** the Template Compliance Gate is enforced one layer up (at `bp-orchestrator` Stage 18 /
  as an `executive-document-formatting` prerequisite), not inside `qa-review-agent` itself, even though
  `qa-review-agent`'s own description implies it runs "all" gates. On inspection this looks like a
  deliberate architectural separation (whole-plan structural check vs. per-section content checks)
  rather than an oversight — not changed, since altering gate wiring is an architecture decision, not a
  path/status fix. Flagged in §19 for the team to confirm it's intentional.
- **1 FAIL, fixed:** `executive-document-formatting/SKILL.md` correctly excluded the old folder as a
  *read* source but still offered the old Egypt plan's title and `Outputs/Talabat_Egypt_*` filenames as
  the literal *default* cover title and output paths for a future export — meaning a real future run
  could have written the finished Group plan under the old Egypt filename, or silently overwritten
  nothing (since the paths differ) while still displaying the wrong title. **Fixed** — cover-title
  default now points to the active tracker's title, and output paths now default to
  `Talabat_Group_AI_Investment_Allocation_Business_Plan.{docx,pdf}`, with an explicit warning never to
  write to the old Egypt filenames.

## 7. Decision Layer readiness

- `DEC-001`–`007`: correctly `status: superseded`, uniform reason, dated.
- `DEC-008`: `status: approved`, resolved 2026-07-23 via real `AskUserQuestion` (Option 1 — base case
  only; the Everyday App:Food-leadership ~2.2:1 split may be referenced narratively, never as a
  quantified headline exhibit). Verified this restriction is actually honored in every section that
  cites it (Sections 4, 9, 12, 13).
- `DEC-009`: **`status: proposed` — still open.** Two substantive questions unresolved: whether to
  commit to a funding sequence across the 5 investment options, and whether to show the OS-constructed
  allocation ranges as a headline recommendation. This is a genuine human decision, not resolved by
  this review (see §19).
- Assumptions Register: 14 old rows (`ASM-001`–014), 19 new rows (`ASM-015`–033, all `Proposed`, zero
  `Approved` for the active problem). The register's own "Pivot Reclassification" section already,
  deliberately, documents why the 14 old rows' `Status` cells were left at `Approved` rather than moved
  to `Superseded` (a stated design choice: the blanket-superseded banner is separate from the row-level
  Status field, which the register explicitly says should not be altered) — **this review did not
  change that field**, since doing so would contradict the register's own already-recorded reasoning,
  not fix an oversight. It is flagged in §18 as a residual mechanical-filtering risk for anyone who
  queries the table by `Status` alone instead of reading the banner.
- **Fixed:** the `Used in (BP sections)` column was stale (`TBD — Phase 9 pilot`) for 7 rows
  (`ASM-015`–017, 019–021, 028) that are, in fact, already cited in the 6 drafted `_v2` sections —
  verified directly by grep against the section files, not assumed from the subagent reports. Updated
  to the real citing sections. `ASM-022`–027 genuinely remain uncited in any drafted section and were
  correctly left `TBD`.
- **Verified, no violation found:** no Proposed assumption is cited anywhere in the 6 drafted sections
  as if it were Approved; every citing section explicitly states the Proposed/Low-or-Medium-confidence
  caveat in-line.

## 8. Forecast Layer readiness

`Value_Driver_Tree_v2.md`'s full 13-stage, 44-node chain (Investment → capability → operating change →
behaviour → GMV → revenue → gross profit → EBITDA → cash → illustrative return bridge) was read in
full: every node is either Fact-cited with a page reference or Assumption-tagged with an ID, no bare
uncited number found. A 15-claim geography-tag spot-check across `Value_Driver_Tree_v2.md`,
`Scenarios_v2.md`, and `KPI_Tree_v2.md` found no mislabeled Group/GCC/country-level claim. No retained
Egypt-retention forecast is referenced as active anywhere in the `_v2` chain. Scenarios are internally
consistent (each carries its own growth-logic sentence, not a relabeled percentage). The USD175mn /
~120mn / ~55mn split reconciles arithmetically everywhere it is stated. No double-counted benefit
across the 5 investment options. No fabricated ROI/IRR/NPV/payback figure anywhere — every such gap is
explicitly and honestly flagged as absent rather than invented. Fact/calculation/assumption/gap
labeling is consistent throughout.

**Not fixed, flagged as an outstanding blocking item for full export-readiness (§17):** the Financial
Integrity Gate template exists (`vault/Templates/_TEMPLATE-financial-integrity-gate.md`) but has not
yet actually been run and filed as `vault/Validation/Financial_Integrity_Gate.md` — this requires
substantive gate execution, not a path/status correction, so it was left for the team/pipeline to run
rather than fabricated here.

## 9. Active Business Plan section status

**Exactly 6 of 14 required sections exist** in `vault/Projects/Business_Plan_Drafts_v2/` — confirmed
by direct `Glob`, not inferred from tracker claims: Sections 02, 04, 05, 09, 12, 13. **8 sections do
not exist yet**: 1, 3, 6, 7, 8, 10, 11, 14. All 6 existing sections carry `status: Drafted —
self-reviewed, not yet independently verified`. Only Section 02 has any independent citation-audit
artifact (`Citation_Audit_Section_02_v2.md`), and it is logged **OPEN**, not PASS — 3 hard citation
failures were found and fixed in the underlying draft, but the audit file's own status was never
updated to reflect a re-verification pass. No `vault/Validation/` file exists yet recording a QA
review, Problem Consistency Gate, Financial Integrity Gate, or Geographic Evidence Gate result for any
`_v2` section. This review does **not** claim more sections are complete than actually exist.

In the old (non-`_v2`) folder: all 14 numbered `Section_XX` files correctly carry `superseded: true`
and an inline banner. **One file was missing both: `Executive_Business_Plan.md`**, the assembled
executive rollup — the single most "headline-shaped" document in the old folder, opening directly with
a live-reading Board recommendation to fund Egypt-specific retention. **Fixed** — added the same
frontmatter/banner pattern used on the 14 numbered files.

## 10. Historical-content isolation

After the corrections in §16, historical content is now fully and consistently isolated: the old
tracker, all old Decisions/Assumptions/Forecasts, all 14 old section drafts plus the rollup file, and
`Implementation_Roadmap.md` all carry explicit supersession markers; no active agent or skill treats
any of them as a live input (verified per-file, not assumed); and the two MOC-level narrative
contradictions (§3, §4) that could have misled a human reader into treating the old scope as current
are corrected.

## 11. Template compliance

`AI_Business_Plan_Template.md`'s 14 sections, in order, were confirmed against the pipeline design.
The pipeline enforces section count/order/titles at Stage 18 (`template-compliance-gate`) specifically
because of a real prior incident (§13) where a non-compliant 12-section document slipped past every
other check — this gate exists and is wired in, but has not yet run at whole-plan scope (it can't,
with only 6/14 sections existing). Every McKinsey framework the capstone requires (Pyramid Principle,
SCQA, MECE, hypothesis-driven, 80/20, action titles, value-driver-tree consistency, Three Horizons,
assumptions transparency, traceability, risks/mitigations, monitoring/kill-criteria) is explicitly
present in `business-plan-drafting/SKILL.md`, with one exception: **7S is explicitly flagged in-file as
"still doesn't exist and needs fresh synthesis"** for Section 8 — an honestly labeled gap, not a hidden
one. Page-length guidance (15–25 pages) exists but is currently enforced only at the final export gate,
not per-section during drafting — worth watching as more sections are added (§18).

## 12. Visual-exhibit readiness

The 6 existing drafts contain 70 tables total and **zero non-tabular exhibits** (no Mermaid diagrams,
no charts, no images) — consistent with the old (superseded) plan's export, which was also 100%
tables. Both `business-plan-drafting` and `executive-document-formatting` discuss exhibit *discipline*
(action titles, numbering, captions) but **neither describes an actual generation method** — no chart
library, no diagram-rendering step, nothing. `executive-document-formatting` explicitly states it
"never invents a chart, graph, or exhibit the drafts don't already contain," so any real exhibit must
originate inside a Section_XX draft itself (e.g., as an embedded Mermaid block, which
`business-plan-drafting` nods toward via `Relationship_Map.md`'s existing diagrams but which no current
draft actually contains). Recommended per-section exhibit types were produced (full table in the
underlying agent report); the ~10 highest-value candidates are the USD175mn programme structure,
investment-options comparison, portfolio-allocation ranges, a Group growth/performance trend, a GCC vs
non-GCC comparison, the value-driver tree, a scenario comparison, an AI decision architecture diagram,
an implementation roadmap, and a risk heat map. **This is a real, unaddressed capability gap** — not
something this review's safe-correction authority can close, since it requires a tooling/approach
decision (see §19).

## 13. Publication and export readiness

Reviewed against the full 24-item checklist (detail in the underlying agent report). Most items are
**PRESENT at design level** in `Publication_Layer.md`/`executive-document-formatting/SKILL.md`, several
are **described but not verified executable** for the new plan specifically. Two findings materially
affect the export verdict:

1. **A real, documented incident** (2026-07-22): a "board-ready" request was fulfilled by writing an
   entirely new, non-compliant **12-section** document instead of the 14-section assembly, and it
   passed a Publication QA Report anyway, because nothing at the time checked document *shape*. The
   Template Compliance Gate was created same-day specifically to close this hole. This means the
   `Publication_QA_Report.md` that already exists in the repo is evidence *of that incident*, not
   evidence the new gate has ever been exercised on a compliant document.
2. **Technical dependencies are unverified for this plan.** No `.py`/`package.json`/`requirements.txt`
   exist in the repo. The Formatting QA Report for the one real prior export explicitly records that
   pandoc was not installed and LibreOffice did not function in this environment — the PDF that exists
   today was produced via a disclosed substitute (headless-Chromium print-to-PDF from an independently
   built HTML file), not the DOCX→LibreOffice path the skill itself specifies, meaning the existing
   DOCX and PDF are two independently rendered artifacts, not one derived from the other as designed.
   Font substitution was also required. None of this has been re-verified as working for the Group
   plan.

`executive-document-formatting`'s own required-inputs gate (§2) already self-blocks any export attempt
today, correctly — 6/14 sections exist, none independently verified. That is the system working as
designed, not a gap to fix. **Fixed** the one concrete leakage risk in this area: the old Egypt cover
title and output filenames (§6).

## 14. Traceability results

Sampled well beyond the required minimums. **20/20 factual claims** checked: 17 resolve cleanly to a
page-cited source note; 3 resolve only partially (FY2024 GMV figure, the 8-market roster, and the
Delivery-Hero AI-stack-inheritance claim were traced to the correct Topic/Facts-layer note but not
re-opened at the underlying source-note page-citation level in this pass — a sampling-coverage gap in
this audit, not a confirmed citation failure). **13/10 required assumptions** checked: 12 fully
resolve with documented rationale and correct Proposed/Approved labeling everywhere cited; 1
(`ASM-006`) has a cosmetic governance-ID hygiene gap (its source Decision, `DEC-004`, is marked
superseded, and the register itself already recommends re-issuing a new ID but hasn't yet) — no live
Business Plan claim actually depends on it, since Sections 2 and 9 cite the underlying source notes
directly. **All three headline financial figures** (USD175mn total, ~USD120mn Everyday App, ~USD55mn
Food-leadership) trace cleanly and consistently everywhere they appear. **All 5 investment options**
(`OPT-001`–005) trace their evidentiary claims to real, page-cited source notes, with cost ranges
correctly and separately labeled as this OS's own constructed judgment. **Zero genuine broken
traceability paths** were found across the full sample — no citation resolving to nothing, no
fabricated figure, no Assumption cited as if it were a disclosed Fact.

## 15. Repository-hygiene results

No broken wikilinks in a 20-link sample across 5 vault areas. No duplicate active trackers (exactly
one file carries `status: active`). No real unresolved merge-conflict markers (the one grep hit was
prose *describing* a conflict-marker check, not an actual marker). No orphaned exports in `Outputs/`.
**`Hello for test.txt`** — 0 bytes, single commit by a real team member (`afmra`, matching the
charter's roster), no references anywhere in the repo, functionally identical to an accidental
duplicate of `vault/Research/Notes/.gitkeep`. **Recommendation: delete.** **Not deleted by this
review** — per this repository's own established "propose, don't execute, on destructive work"
convention (already applied identically to this same file in the prior merge-readiness report),
deletion is left for the user/team's explicit sign-off.

## 16. Safe corrections applied

Committed separately from this report, commit message "Apply safe corrections from the Final
Comprehensive Readiness Review." All edits are path/status/navigation/metadata-level; no business
fact, citation, number, decision outcome, or assumption value was changed.

| File | Correction |
|---|---|
| `vault/MOC/MOC-Second-Brain.md` | Rewrote stale Egypt-retention opening description to state the current governing problem |
| `vault/MOC/Talabat MOC.md` | Corrected "Egypt — the capstone's target market" to "a genuine worked example," not the scope boundary |
| `vault/MOC/Market Intelligence MOC.md` | Same correction, bolded claim |
| `vault/MOC/Project Administration.md` | Added a supersession caveat to the `Implementation_Roadmap` link |
| `vault/MOC/Business Model MOC.md` | Linked 5 orphaned Topic notes (Everyday App, Food Leadership, Grocery and Retail, FinTech, Multi-Verticality) |
| `vault/MOC/Customer MOC.md` | Linked orphaned Customer Economics Topic note |
| `vault/MOC/Finance MOC.md` | Linked orphaned Capital Allocation and Investment Governance Topic note |
| `vault/Architecture/Implementation_Roadmap.md` | Added `superseded: true` frontmatter + banner; content preserved unchanged below it |
| `.claude/skills/executive-document-formatting/SKILL.md` | Cover-title default and output-path defaults repointed from the old Egypt plan to the active Group plan, with an explicit warning against the old filenames |
| `vault/Projects/Business_Plan_Drafts/Executive_Business_Plan.md` | Added the same `superseded: true` frontmatter + banner pattern already used on its 14 sibling section files |
| `vault/Decisions/Assumptions_Register.md` | Updated the stale `Used in (BP sections)` field on 7 rows (`ASM-015`–017, 019–021, 028) to the sections that actually cite them, verified by grep; row-level `Status` cells were deliberately **not** touched (see §7 — the register itself already documents why) |
| `SESSION_LOG.md` | Added Session 9, covering pivot Phases 3–9, the instructor-approval cleanup, the `main` merge, PR #1/#2, and this review |

## 17. Blocking gaps (for a complete, independently-verified, exported 14-section plan)

- 8 of 14 sections do not exist yet under `_v2` (1, 3, 6, 7, 8, 10, 11, 14).
- 0 of 14 sections have passed independent Pass 2 QA; only Section 02 even has a citation-audit
  artifact, and it is logged OPEN, not PASS.
- No Problem Consistency, Financial Integrity, or Geographic Evidence gate output exists yet for any
  `_v2` section; the Financial Integrity Gate template has not yet been run once.
- Template Compliance Gate cannot run meaningfully at whole-plan scope until all 14 sections exist.
- Visual-exhibit generation capability does not exist — no chart/diagram method is implemented anywhere
  in the toolchain.
- DOCX/PDF export tooling for the Group plan is unverified; the only prior real export used a
  disclosed non-standard substitute pipeline for a different (superseded) document.
- `DEC-009` is unresolved, and zero assumptions for the active problem are `Approved`.

## 18. Non-blocking gaps

- 4 of 16 Second Brain checklist topics (Investment Options, Risks, Implementation, Monitoring) exist
  only at the Decision/Forecast/Draft layer, not as standalone Topic notes — likely fine, worth a
  one-line confirmation from the team.
- Template Compliance Gate is architecturally wired one layer above `qa-review-agent` rather than
  inside it — looks intentional, not confirmed as such.
- Page-length guidance (15–25pp) is enforced only at the final export gate, not per-section during
  drafting.
- `ASM-006`/`DEC-004` governance-ID hygiene (no live claim depends on it).
- 3 traceability items resolved only to the Topic/Facts layer, not re-verified at the page-citation
  level, in this pass's sampling.
- `Hello for test.txt` — harmless, recommended for deletion, not deleted.
- The Assumptions Register's 14 old rows keep `Status: Approved` at the row level by the register's own
  deliberate design (only the file-level banner marks them superseded) — a documented choice, not a
  defect, but a residual risk for anyone who filters the table mechanically instead of reading the
  banner.

## 19. Human decisions required

1. **Resolve `DEC-009`** — commit to a funding sequence across the 5 investment options, and decide
   whether to present the OS-constructed allocation ranges as a headline recommendation.
2. **Run an approval pass on `ASM-015`–033** (19 Proposed assumptions) — nothing for the active problem
   is currently citable as settled.
3. **Decide a visual-exhibit generation approach** (e.g., Mermaid diagrams embedded directly in
   Section_XX drafts vs. some other method) before sections needing charts are finalized.
4. **Confirm whether the Template Compliance Gate's architectural placement** (outside `qa-review-agent`)
   is intentional, or whether it should be folded into per-section QA.
5. **Decide whether to delete `Hello for test.txt`.**
6. **DEC-009's own two open sub-questions**: whether Everyday-App/Food-leadership spend outside the
   five named options needs its own allocation treatment, and whether a pilot-funding/reserve
   mechanism should be proposed at all.

## 20. Exact next action sequence

1. Push this review's safe-correction commit (already applied locally).
2. Resolve `DEC-009` (human/team decision — item 1 above).
3. Run the assumption-approval pass on `ASM-015`–033.
4. Resume `bp-orchestrator` Part B for the 8 remaining sections (1, 3, 6, 7, 8, 10, 11, 14), in
   dependency order, Section 1 last.
5. Run genuinely independent Pass 2 QA (citation audit + QA review + the three new gates) on all 6
   existing sections and each newly drafted section as it completes — none of the 6 existing sections
   has passed this yet.
6. Decide and implement a visual-exhibit generation approach; add exhibits to sections as they're
   (re-)drafted or reviewed.
7. Once all 14 sections reach `Done (independently verified)`, run Part C (Stages 14–19): whole-plan
   Problem Consistency / Financial Integrity / Geographic Evidence gates, whole-plan citation audit,
   and the Template Compliance Gate.
8. Only after Stage 18 passes, attempt export — and verify DOCX/PDF tooling actually works in this
   environment before trusting the output, given the prior export's disclosed substitute pipeline.
