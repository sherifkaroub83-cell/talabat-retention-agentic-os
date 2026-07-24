---
type: validation
section: 13
pipeline_stage: 11
date: "2026-07-24"
result: "FAIL — three bounded, actionable fixes required (no new Research/Forecast/Decision work needed); all three new 2026-07-23 gates (Problem Consistency, Financial Integrity, Geographic Evidence) otherwise PASS"
reviewer: qa-review-agent, freshly-invoked thread, no memory of drafting or citation-audit sessions
---

# QA Review — Section 13 (Monitoring and Evaluation), v2 draft

## Tooling / Independence note (read first)

This is a genuinely top-level-invoked, freshly-spawned thread with no access to any drafting session's
reasoning and no memory of any prior pipeline stage for this section. Tools used: `Read`, `Grep`, `Write`.
No `AskUserQuestion`, `Agent`, `WebSearch`/`WebFetch` were needed. Per the task brief, `vault/Validation/
QA_Review_Section_13.md` (the pre-pivot Egypt-retention draft's QA review, including its Pass-2/closeout
addenda) was read **only** to extract one specific failure *pattern* to independently test for in this
file — an unreconciled dual-anchor kill criterion — and not as a verdict that applies to this v2 draft,
which answers a different governing problem. The required Stage-9 input, `vault/Validation/
Citation_Audit_Section_13_v2.md` (PASS, two non-blocking observations), was read in full and its
observations are acknowledged, not re-litigated, below. All substantive findings in this review were
derived by reading the current `Section_13_Monitoring_and_Evaluation.md` (v2) directly against
`AI_Business_Plan_Template.md` §13, `vault/Forecasts/KPI_Tree_v2.md` (full text, all five family tables and
the Summary table), `Problem_Charter.md`, `vault/Decisions/Decision_Log/DEC-008...md`,
`vault/Architecture/Geographic_Evidence_Rules.md`, `vault/Projects/Business_Plan_Drafts_v2/
Section_02_Business_Description.md`, `Section_04_Value_Proposition.md`, `Section_09_Financial_Plan.md`,
`Section_12_Implementation_Plan.md`, `vault/Decisions/Assumptions_Register.md` (direct row check for
`ASM-016`/`ASM-017`), and a targeted `Grep` sweep of the vault for "CAC"/"CARC"/"MRR" — not by trusting
this section's own citation language, the citation audit's summary, or the pre-pivot QA review's verdict.

## 1. Template completeness (`AI_Business_Plan_Template.md` §13)

Four required items:

| Required item | Present? |
|---|---|
| KPIs mapped to the value driver tree (CAC, MRR, churn rate, product usage metrics — named examples) | **Partial — see Finding 1.** Churn (C12) and product usage (C11, O9, C2) are substantively addressed. **CAC and MRR-equivalent are entirely absent** — not present anywhere in this section, and not present anywhere in `KPI_Tree_v2.md` either. |
| Leading vs. lagging indicator split | **Present, but the MECE statement is incomplete — see Finding 2.** |
| Tools and methods for performance tracking | Present — "Tracking Tools and Feedback Loops" names the vault-based mechanism (`Assumptions_Register.md`, `Investment_Options_Register.md`, Decision Log) as the OS's own tracking infrastructure, honestly scoped as this OS's mechanism rather than talabat's own disclosed system. |
| Feedback loops; kill/pivot criteria | Present. Feedback loops: same subsection as above. Kill/pivot criteria: present and, independently checked, **does not repeat the pre-pivot draft's dual-anchor ambiguity** — see §2 below. |

**Finding 1 — CAC and MRR-equivalent are missing, despite being named template examples and despite the
underlying corpus fact still being directly usable under the pivot.** `vault/Knowledge/Facts/
Customer_Growth.md` discloses a Group-level CAC/CARC figure (USD44mn CAC / USD103mn total CARC, 1.4% of
GMV, TLB-001 p.28; updated to USD67mn CAC in TLB-002 p.21) that is **already Group-level**, not an
Egypt-import — if anything, this fact is a *better* fit for the pivoted Group-wide problem than it was for
the superseded Egypt-only problem, since it requires no geography-transfer inference at all. The superseded
pre-pivot Section 13 draft addressed both metrics substantively (a real Group-CAC figure, correctly labeled
and reasoned as a deprioritized lever; an honest, reasoned non-fit explanation for MRR against talabat's
mostly-transactional revenue structure) — the current v2 draft addresses neither, and `KPI_Tree_v2.md`
itself (checked directly, all five family tables) contains no CAC, CARC, or MRR/recurring-revenue KPI
anywhere. This is a genuine completeness gap, not a research gap: the evidence needed to either include
these metrics or honestly reason through their non-fit already exists in the vault and was already used
successfully once. **Required fix:** add a short CAC treatment (the Group-level CAC/CARC figure, correctly
geography-tagged Group, with a stated reason for its role or non-role in this plan's KPI framework) and an
MRR-equivalent treatment (reasoned non-fit against talabat's four-line, mostly-transactional revenue
structure, naming the closest analogs — e.g. Financial-family F5/F6 or Customer & growth C1) to the
Portfolio/Financial rows or a short added note, consistent with the template's named examples and this
project's own established precedent.

**Finding 2 — the Leading/Lagging split's MECE claim is incomplete, and the section does not acknowledge a
real exception in its own source data.** Section 13's "Leading vs. Lagging Split" subsection describes the
pattern qualitatively ("Portfolio and Operational KPIs are predominantly leading... Financial KPIs are
predominantly lagging...") but never states explicitly that the split is (or is claimed to be) MECE, and
does not acknowledge that `KPI_Tree_v2.md`'s own Summary table records **C10 as carrying both a Leading and
a Lagging component** ("C10 carries both a Leading and a Lagging component — counted once in the family
total, noted separately in the Leading/Lagging columns above" — `KPI_Tree_v2.md` Summary table footnote).
That is a real, documented exception to strict mutual exclusivity in the tree this section reproduces, and
the McKinsey Lens instruction for this section ("Distinguish leading indicators... from lagging ones") plus
the QA skill's own MECE rule ("state explicitly why it's MECE, or fix it so it is") both require this be
addressed rather than passed over silently. **Required fix:** add one sentence explicitly stating the split
is MECE at the KPI level with one named, source-acknowledged exception (C10, which is dual-tagged in
`KPI_Tree_v2.md` itself and counted once in family totals but carries both a leading and a lagging role) —
this is a wording fix, not new research, since the underlying fact is already stated in the cited source.

## 2. Kill/pivot-criterion pattern check (specifically requested — the pre-pivot failure mode)

**Clean — no recurrence of the dual-anchor ambiguity.** The pre-pivot Section 13's original FAIL turned on
its kill criterion invoking two different, unreconciled comparison anchors (a "GCC-benchmark aggregate" and
a separate "Section 9 base-case trajectory") for the same seven KPIs, with neither the section nor DEC-007
stating which one actually governed the stop decision. This v2 draft's "Kill/Pivot Criteria" subsection uses
exactly **one** anchor for its one named kill-test candidate (`OPT-002`, the H1 Egypt/Iraq pro pilot): "if
Egypt/Iraq pro-adoption evidence at the H1→H2 gate falls materially short of the GCC+Jordan cohort's
20-28%/26-32% uplift range, the correct response is reassessment... on the original `ASM-016` inference."
This is independently cross-checked against `Section_12_Implementation_Plan.md`'s H2 "OPT-002 go/no-go"
bullet, which states the identical test in the identical terms ("If frequency/retention uplift approaches
the GCC+Jordan cohort's 20-28%/26-32% range, this supports scaling; if materially below, `ASM-016`'s
inference is not holding..."). Section 13 and Section 12 use the same single anchor, consistently, with no
second competing anchor introduced. **No fix required here.**

## 3. McKinsey Lens

- **Pyramid Principle.** Pass — "Answer, stated first" leads with the section's conclusion (faithful
  reproduction of the 50-KPI tree, the 30/20 baseline split, and the Governance family's zero-baseline
  finding as the single most important carry-forward) before supporting detail.
- **MECE.** The five-family breakdown (Portfolio/Customer & growth/Financial/Operational/Governance) is
  never explicitly asserted as MECE in this section, though it is a reasonable, non-overlapping functional
  partition on its face (a lower-stakes, non-blocking gap, consistent with how the pre-pivot review treated
  an analogous omission). The Leading/Lagging split's MECE gap is the higher-stakes issue — see Finding 2.
- **Hypothesis-driven framing.** Pass, independently verified against Section 2. Section 2.3's governing
  hypothesis text explicitly names Section 13 as showing "how performance would be monitored against it,"
  and Section 13's own framing (measure faithfully, invent no targets, flag the Governance family as this
  OS's own proposed mechanism) is a direct operationalization of Section 2's stated evidentiary discipline,
  not a disconnected restatement.
- **Value-driver traceability.** Pass. Section 13's Customer & growth family (C1 pro-GMV-share, C3
  multi-vertical-GMV-share, C5/C6 pro uplift, C8 CLV proxy, C9 Family Plan) maps onto the same mechanisms
  Section 4 names (pro, multi-vertical engagement, PostPaid/Rewards, Family Plan, AI/personalisation as
  infrastructure), independently confirmed by reading Section 4 directly rather than trusting Section 13's
  own assertion.

## 4. Financial Integrity Gate (11 checks — required, financial-bearing section)

| # | Check | Result |
|---|---|---|
| 1 | Allocation totals reconcile | Pass — no bucket-level allocation totals appear in this section at all (correctly deferred, per `DEC-008`). |
| 2 | Scenario arithmetic internally consistent | Pass — no scenario figures are constructed here; the only scenario-adjacent reference (Adj. EBITDA margin "baseline: guided range") matches Section 9's 4.4–4.8% guided range verbatim. |
| 3 | Units consistent within each exhibit | **Minor issue — see Finding 3 below** (Portfolio row's representative-KPI parenthetical). |
| 4 | Currency stated and consistent | Pass — USD throughout, no local-currency figures introduced. |
| 5 | Time periods not silently mixed | Pass — every cited trend (32%→49%, 68%→73%→76%, 130→160) carries its own dated citation via `KPI_Tree_v2.md`. |
| 6 | Percentage logic correct | Pass. |
| 7 | No double counting | Pass. |
| 8 | No additive stacking of overlapping uplift statistics | Pass — the GCC+Jordan 20-28%/26-32% range is used once, as a single benchmark, never summed with another uplift figure. |
| 9 | Revenue/GMV/gross profit/EBITDA never mixed or substituted | **Finding 3.** |
| 10 | No unlabeled false precision | Pass — no numeric target is assigned to any of the 20 newly-instrumented KPIs; F10 (programme-attributable incremental GMV) is correctly labeled "illustrative only." |
| 11 | `DEC-008`'s base-case-only constraint respected | Pass — the provenance note and body both state explicitly "no bucket-level or ~2.2:1 quantified breakdown appears here," correctly scoped to `DEC-008`'s stated extension to Section 13. |

**Finding 3 (check 3/9) — the Portfolio family's representative-KPI example misattributes its baseline
evidence.** The summary table's Portfolio row reads: "Spend-to-plan by bucket (baseline: **disclosed EBITDA
bridge**)." Checked directly against `KPI_Tree_v2.md`'s own P1/P2/P3 rows: their stated "Basis" is
`Investment_Portfolio_Register.md`'s disclosed dollar-plan figures (the USD175mn total and the
~USD120mn/~USD55mn bucket split, TLB-019/TLB-020/TLB-014) — **not** the EBITDA margin bridge, which is a
different, downstream KPI (F9, Financial family) tracking margin *impact*, not spend *pacing*. "Spend-to-plan"
is a cost/investment-tracking concept (USD against a USD budget); the "EBITDA bridge" is a margin-percentage
concept (a downstream financial effect of that spend). Citing the latter as the former's baseline conflates
two distinct financial concepts the Financial Integrity Gate specifically asks not to blend. This is a
narrow, one-line mischaracterization in the illustrative summary table, not a defect in `KPI_Tree_v2.md`
itself (P1–P3's own basis fields are correct) — the citation audit's own spot-check did not cover this
specific parenthetical (it verified C1/C3/O1's examples but not the Portfolio row's). **Required fix:**
correct the parenthetical to cite `Investment_Portfolio_Register.md`'s disclosed dollar-plan figures (e.g.
"baseline: disclosed ~USD120mn/~USD55mn bucket plan") rather than the EBITDA bridge.

## 5. Problem Consistency Gate

Ran the 8 checks from `vault/Templates/_TEMPLATE-problem-consistency-gate.md` directly against
`Problem_Charter.md` and this section's text (a full, dedicated `Problem_Consistency_Gate.md` artifact was
also produced from the template for this run — see note below).

| # | Check | Result |
|---|---|---|
| 1 | Matches the Group-wide USD175mn capital-allocation problem, not Egypt-retention | Pass |
| 2 | Geographic scope matches the charter (Group across 8 markets, Egypt as worked example) | Pass |
| 3 | Decision question matches (how to allocate the programme, not "how to reduce Egypt churn") | Pass |
| 4 | Investment envelope, where referenced, matches disclosed figures, no invented sub-splits | Pass — no envelope figure is even restated in this section; `DEC-008`'s restriction is correctly respected |
| 5 | Evidence-category discipline respected (Facts/Assumptions/Decisions/Forecasts never blended) | Pass — baseline-exists vs. newly-instrumented is stated explicitly per KPI; `ASM-016`/`ASM-017` correctly cited `Approved` (independently confirmed against `Assumptions_Register.md`) |
| 6 | Output requirements match (ranges/staged framework, not false-precision single figures) | Pass — no numeric target assigned to any newly-instrumented KPI |
| 7 | No active file cites a superseded artifact as current | Pass — `DEC-007` is explicitly labeled "superseded problem, methodology precedent only" |
| 8 | Any pre-pivot reference is clearly marked historical | Pass — same `DEC-007` citation |

**Verdict: PASS**, all 8 checks.

## 6. Geographic Evidence Gate

Ran the 9 checks from `vault/Templates/_TEMPLATE-geographic-evidence-gate.md` directly against
`vault/Architecture/Geographic_Evidence_Rules.md`.

| # | Check | Result |
|---|---|---|
| 1 | Every numeric/directional claim carries a geography tag | Pass, with a noted stylistic choice — this section's own summary table does not restate an inline geography tag for every representative KPI (e.g. "talabat pro subscriber GMV share (32%→49%)"), instead deferring explicitly to `KPI_Tree_v2.md` for the full geography-tag detail. Since every such figure is Group-level in the source tree and no country-specific claim is asserted here beyond what's already tagged upstream, this is acceptable summarization discipline, consistent with the citation audit's own finding — not a violation. |
| 2 | No Group/GCC figure presented as Egypt-specific without an inference qualifier | Pass — the kill-criterion's GCC+Jordan cohort range is explicitly named as a benchmark applied to Egypt/Iraq via "the original `ASM-016` inference," not asserted as an Egypt fact. |
| 3 | No Egypt-specific figure presented as Group-representative | Pass — none found. |
| 4 | Pre/post-FY2025 non-GCC figures not conflated | Pass — no non-GCC figure is cited in this section at all. |
| 5 | Time period of every geography-tagged claim stated and matches source | Pass. |
| 6 | No unsupported metric transfer | Pass — the GCC+Jordan uplift range is used as an explicit test/benchmark for Egypt/Iraq, not presented as a measured Egypt/Iraq figure. |
| 7 | Every inferred-applicability claim explicitly labeled as inference in prose | Pass — "the original `ASM-016` inference" is named explicitly in the prose itself, not only in a citation. |
| 8 | "MENA" never used as a stand-in | Pass — the term does not appear anywhere in this section. |
| 9 | External market-research figures not blended with talabat's own without reconciliation | Pass — no external (IMARC/Mordor-style) figures appear in this section. |

**Verdict: PASS**, all 9 checks.

## 7. Citation audit consumption

Read `Citation_Audit_Section_13_v2.md` in full (PASS, no hard failures). Its two non-blocking observations
are acknowledged, not re-opened as blocking issues by this review:
1. The churn claim ("no churn rate... at Group or any country level") generalizes slightly beyond
   `Topics/Customer Churn.md`'s literal Group/Egypt-only verification scope. Acknowledged — a wording
   tightening worth doing at the same time as the required fixes above, but not, on its own, blocking.
2. The "29-document corpus" figure is accurate but not inline-cited to `Source Register.md`. Acknowledged,
   non-blocking, as the audit itself concluded.

Neither observation is elevated to a required fix by this review; both may be folded into the same revision
pass as Findings 1–3 above for efficiency, but are not independently blocking.

## 8. Staleness check

Every citation in this section is to a Forecast-tier artifact (`KPI_Tree_v2.md`), a Topic Note (`Topics/
Customer Churn.md`, `Topics/Capital Allocation and Investment Governance.md`), a Decision-tier record
(`DEC-007`, correctly historical), or another Business Plan Draft v2 section (`Section_09`, `Section_12`) —
no `vault/Research/Notes/` (`RES-`) item is cited anywhere. All were built or confirmed current within this
same 2026-07-23 pivot/drafting cycle. **No staleness concern to flag.**

## 9. Anti-patterns checklist (`.claude/skills/business-plan-drafting/SKILL.md`)

- Untraceable claim — none found beyond Finding 3's mischaracterized-baseline issue (a wrong pairing, not an
  untraceable one — the EBITDA-bridge figure itself is real and correctly cited elsewhere, just misapplied
  here).
- Group/GCC statistic presented as Egypt-proven — none found; the GCC+Jordan kill-criterion benchmark is
  correctly inference-labeled.
- "MENA" used as a stand-in — not found.
- Pre/post-FY2025 non-GCC conflation — not applicable, no non-GCC figure cited.
- `DEC-008`'s 2.2:1 split shown as a quantified sub-case — not found; explicitly and correctly excluded.
- Assumption Register row status misquoted — checked directly; `ASM-016`/`ASM-017` correctly `Approved`.
- Section 9/13 numbers not tracing to a named `Value_Driver_Tree_v2.md` node — mostly clean; Finding 3 is
  the one instance where a Section 13 example pairs the wrong node's evidence with a KPI it doesn't belong to.
- Resolving a flagged gap silently instead of routing it through the pipeline — not found; the Governance
  family's zero-baseline status and the churn gap are both stated openly, not papered over.

## Result

**FAIL.** Three bounded, actionable fixes are required, none of which need new Research/Forecast/Decision
work — all are drafting-level corrections using evidence already in the vault:

1. **Add CAC and MRR-equivalent treatment** (or an explicit, reasoned non-fit statement for MRR) — both are
   named template examples for this section, both are entirely absent from this draft and from
   `KPI_Tree_v2.md`, and the underlying Group-level CAC/CARC fact (`Facts/Customer_Growth.md`) is directly
   usable, requiring no geography-transfer inference at all under the pivoted problem.
2. **State explicitly that the Leading/Lagging split is MECE, and acknowledge C10's dual Leading+Lagging tag**
   as a named, source-consistent exception — `KPI_Tree_v2.md`'s own Summary table already documents this
   footnote; Section 13 currently describes the pattern without making the MECE case or the exception explicit.
3. **Correct the Portfolio family's representative-KPI parenthetical** — "Spend-to-plan by bucket (baseline:
   disclosed EBITDA bridge)" should cite `Investment_Portfolio_Register.md`'s disclosed dollar-plan figures
   (per `KPI_Tree_v2.md`'s own P1–P3 basis fields), not the EBITDA margin bridge, which is a different KPI
   (F9) tracking a different financial concept (margin impact, not spend pacing).

**What already passes cleanly, independently verified:** the kill/pivot-criteria subsection does **not**
repeat the pre-pivot draft's dual-anchor ambiguity (§2); the Problem Consistency Gate (8/8), the Financial
Integrity Gate (10/11, one finding), and the Geographic Evidence Gate (9/9) are otherwise clean; hypothesis-
driven framing and value-driver traceability both hold on independent re-check against Sections 2 and 4;
the citation audit is fully PASS with only non-blocking observations already acknowledged above; no
staleness concern; no anti-pattern violation beyond Finding 3.

**Disposition:** Section 13 (v2) stays at 🟡 (drafted, needs verification) — **not** eligible to move to
✅ Done in the project tracker (`vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md`)
until the three fixes above are made and this section is re-submitted for review. Per this review's scope,
no prose has been rewritten here — handing back to the Orchestrator.

## Links
- [[Section_13_Monitoring_and_Evaluation|vault/Projects/Business_Plan_Drafts_v2/Section_13_Monitoring_and_Evaluation.md]]
- [[Citation_Audit_Section_13_v2]]
- `AI_Business_Plan_Template.md` §13
- [[KPI_Tree_v2]] · [[Value_Driver_Tree_v2]] · [[Scenarios_v2]]
- [[Section_02_Business_Description]] · [[Section_04_Value_Proposition]] · [[Section_09_Financial_Plan]] ·
  [[Section_12_Implementation_Plan]]
- `vault/Decisions/Assumptions_Register.md` (`ASM-016`, `ASM-017`, both `Approved`)
- [[DEC-008_section9-headline-bucket-split-presentation]] · [[DEC-007_section13-review-cadence-kill-criteria]]
  (superseded, methodology precedent only)
- `vault/Architecture/Geographic_Evidence_Rules.md`
- `Problem_Charter.md`
- `.claude/skills/qa-review/SKILL.md` · `.claude/skills/business-plan-drafting/SKILL.md`
- [[QA_Review_Section_13]] (pre-pivot draft's review — read only to check for the dual-anchor kill-criterion
  pattern per this task's brief; not otherwise used as an input or point of comparison)
