---
type: validation
sections: 1-2
pipeline_stage: "17 (whole-plan citation audit)"
run_date: 2026-07-25
auditor: independent Stage 17 reviewer
status: FAIL — 2 hard failures (both traceable to Section 1), 3 moderate findings; Section 2 has no hard failure of its own
---

# Stage 17 Whole-Plan Citation Audit — Sections 1 (Executive Summary) and 2 (Business Description)

## Method

Read Section 1 and Section 2 in full, fresh (no reliance on prior Pass 1/2/3 findings). For every
numeric or named-fact claim, re-traced to the specifically cited vault note/section/source and
confirmed the exact figure — not just document existence — is present there. Cross-referenced
`Problem_Charter.md`, `vault/Decisions/Investment_Portfolio_Register.md`,
`vault/Decisions/Assumptions_Register.md`, `vault/Decisions/Decision_Log/DEC-009...md`,
`vault/Knowledge/Topics/EBITDA.md`, `vault/Knowledge/Topics/GMV.md`, `vault/Knowledge/Topics/Customer
Churn.md`, and the raw source text under `vault/Knowledge/_source_text/` (including page-marker
verification for one contested figure). For the cross-section checks (the main point of Stage 17), read
the **current** text of every section Section 1 or Section 2 makes a claim about — Sections 3, 4, 5, 8,
9, 10, 11, 12, 14 — in full, not summaries, and compared the specific claim against what each section
currently says (not what it said when Section 1/2 were first drafted). Confirmed the actual on-disk
contents of `vault/Projects/Business_Plan_Drafts_v2/` via `Glob` rather than trusting frontmatter claims
about companion sections' status.

## Hard failures

**H1 — Section 1 cites `Section_13_Monitoring_and_Evaluation.md`, which does not currently exist under
`Business_Plan_Drafts_v2/`.** Section 1's Traceability table ("No churn rate/baseline anywhere in the
corpus | `Section_13_Monitoring_and_Evaluation.md`, 'Churn — the Single Biggest Customer-Side Gap'") and
its Evidence-gaps paragraph both cite this file and an internal heading within it. A `Glob` for
`vault/Projects/Business_Plan_Drafts_v2/Section_13*` returns **no results** — the only
`Section_13_Monitoring_and_Evaluation.md` on disk is the superseded, non-`_v2` Egypt-retention draft,
which per this project's own standing rule is not a valid citation target for `_v2` content. `git status`
at session start showed the `_v2` file as deleted (`D`) with an untracked duplicate
(`Section_13_Monitoring_and_Evaluation 2.md`) in its place; neither now exists. `SESSION_LOG.md`'s Session
10 entry documents this exact file as a recurring iCloud-sync artifact ("recurred twice more during the
session… re-cleaned each time") — this is evidently a third/fourth recurrence, not yet re-cleaned as of
this audit. Section 1's own frontmatter claims an independent 2026-07-24 re-check "against the current…
content of Sections 2, 4, 5, 9, 10, 12, **13**" — that claim cannot currently be verified for Section 13,
because there is nothing to check it against. The underlying fact itself (no disclosed churn baseline
anywhere in the corpus) remains true and independently confirmed via `vault/Knowledge/Topics/Customer
Churn.md`, so this is a citation-infrastructure failure, not evidence of a fabricated claim — but per the
0%-untraceable-claim rule, a claim tracing to a non-existent file is a hard failure until the file is
restored. **Fix needed:** restore `Section_13_Monitoring_and_Evaluation.md` under `Business_Plan_Drafts_v2/`
from version control (it is tracked and was merely deleted by the sync artifact, not authored away), then
re-confirm the "Churn — the Single Biggest Customer-Side Gap" heading and content are unchanged.

**H2 — Section 1's "Business Name and Overview" GMV figure cites the wrong section content.** The
paragraph states: "generating GMV of USD 9.5 billion in FY2025 … *(Group; `Section_02_Business_
Description.md` §2.1)*." Section 2 §2.1 does **not** state this figure — it states "generating GMV of USD
7,428mn in **FY2024** (+23% YoY)" (cited there to TLB-001, page 6/26 and `Topics/GMV.md`), a different
figure from a different year. The USD 9.5bn FY2025 figure is genuine and correctly disclosed elsewhere —
Section 1's own "Situation" paragraph cites it correctly to `Problem_Charter.md`, and Section 3 §3.1
independently corroborates it (TLB-019, pages 5, 13; USD 9,421mn, +28% y/y) — but the specific citation
attached to this later restatement of the figure points to a section/subsection that contains a different,
older number, not the one claimed. This is exactly the "claim traces to the wrong node/document" defect
class Stage 17 exists to catch. **Fix needed:** re-cite this sentence to `Problem_Charter.md` (or
`Section_03_Market_Analysis.md` §3.1 / TLB-019) instead of `Section_02_Business_Description.md` §2.1, or
restate it using Section 2 §2.1's actual FY2024 figure if the intent was to describe the business "as
introduced in Section 2" rather than the plan's current headline scale.

## Moderate findings

**M1 — Section 1 attributes the "6.0% in Q4 2025" comparator to sources that do not state it.** The
Complication paragraph reads: "…4.8% of GMV in Q1 2026 — down from 6.3% a year earlier and from 6.0% in
Q4 2025 … *(Group; `Problem_Charter.md`; `Section_10_Risk_Analysis.md` §10.3, `FIN-01`)*." `Problem_
Charter.md` gives only the year-on-year comparator ("compressed to 4.8% from 6.3% a year earlier"), and
Section 10 §10.3's `FIN-01` body text gives "6.7% (FY2024) to 6.5% (FY2025)" and the Q1 2026 actual/y-o-y
figures, but does **not** state "6.0% in Q4 2025" anywhere in its own running text (that specific
quarter-on-quarter comparator is correctly stated in `Section_09_Financial_Plan.md` §9.3/§9.4 and in
`Section_03_Market_Analysis.md` §3.3). The fact itself is real and correctly disclosed (TLB-020) — this is
a citation-precision issue (attributing a true figure to two sources that don't individually state it),
not a fabrication. **Fix needed:** add `Section_09_Financial_Plan.md` §9.3/§9.4 (or Section 3 §3.3) to the
citation for the "6.0% in Q4 2025" clause specifically.

**M2 — Same FY2026 EBITDA guidance stated two different ways across Sections 1 and 2, with no
cross-reference.** Section 2 §2.3 (and its own Traceability table) states: "the FY2026 Adjusted EBITDA
margin bridge, **6.0%→4.6% of GMV guided**" (TLB-020, page 16). Verified directly against the raw source
text (`_source_text/20260512_talabat-Q1-2026-Results-Presentation.txt`, page-marker-confirmed page 16):
talabat's own text reads "a calculated temporary step-down in Adj. EBITDA margins from 6.0% of GMV
(Q4'25A) to **a guided mid-range of 4.6%**" — so Section 2's figure is genuine, accurately quoted, and
correctly cited; it is talabat's own stated midpoint. However, Section 1 (Answer, Complication, Key
Objectives sections) and Section 9/10 consistently use the **full guided range, 4.4-4.8% of GMV**, for the
same FY2026 guidance, and Section 2's single-point "4.6%" figure is never reconciled or cross-referenced
against that range anywhere in either section. This is the duplicate-claim-different-value pattern Stage
17 is designed to catch: both values are individually well-sourced (one is the range, one is its
disclosed midpoint, from the same underlying guidance), but a reader moving between Section 2 and
Section 1/9/10 has no signal they are the same guidance stated two ways rather than two different guided
figures. **Fix needed:** either restate Section 2 §2.3 using the 4.4-4.8% range (matching the rest of the
plan's headline convention under `DEC-008`) or add a one-clause gloss ("talabat's own stated guided
mid-range; the full guided range is 4.4-4.8%, per Section 9 §9.3") so the two framings are visibly the
same fact.

**M3 — Section 1's "zero defects, independently re-checked" self-assessment predates confirmatory passes
that were still outstanding on several of the sections it relies on.** Section 1's frontmatter and
2026-07-24 addendum assert a clean independent re-check against the "current (post-Pass-2-fix) content of
Sections 2, 4, 5, 9, 10, 12, 13." At the time of that addendum, Sections 4, 5, 8, 12, and 14 each carried
(and, as of this audit, still carry) their own frontmatter stating they are explicitly **not yet** "Done"
— each is "Drafted… Pass 3 found [N] new defect(s), fixed… **not yet reconfirmed by a fourth independent
pass; treat as Done only once Stage 17's whole-plan citation audit re-clears it**." This Stage 17 pass is
the confirming re-check those sections are waiting on. This audit independently re-verified, from
scratch, the specific facts Section 1 draws from Sections 9, 10, and 12 (FY2026 guidance range, top-three
risks, OPT-003 Horizon-1 placement) and found them consistent with each section's current text — so no
new defect was found *because* of this dependency — but Section 1's own "zero defects found" framing
overstates the independence of that earlier check relative to sections still formally pending Stage 17
confirmation. Not a citation failure in Section 1 itself; noted for the record.

## Cross-section reference checks

| # | Claim in Section 1 or 2 | Referenced section | Verification result |
|---|---|---|---|
| 1 | Top three risks: `FIN-01`, `MKT-01`, `ORG-01` (High×High quadrant) | `Section_10_Risk_Analysis.md` §10.6 | **PASS** — exact match to the current Probability-Impact Matrix's High×High cell. |
| 2 | `OPT-003` described as a **near-term priority alongside `OPT-002`** (not H2-gated/monitoring-only) | `Section_12_Implementation_Plan.md`, Three Horizons | **PASS** — current Horizon 1 text: "Fund now, within the existing bucket: `OPT-003`… this is **not a pilot**." Matches Section 1's claim and Section 1's own addendum note that this reflects the post-Pass-2/3-fix placement. |
| 3 | FY2026 guidance base case: GMV +11-14% cFX, Revenue +14-17% cFX, Adj. EBITDA 4.4-4.8% of GMV, FCF 3.2-3.6% of GMV | `Section_09_Financial_Plan.md` §9.3 | **PASS** — exact match to the current scenario table. |
| 4 | No disclosed ROI/payback/return figure for either bucket | `Section_09_Financial_Plan.md` §9.1, §9.4 | **PASS** — matches §9.1's "no quantified return at any point in this chain" and §9.4's break-even discussion. |
| 5 | Human/team approval required before capital moves | `Section_11_CSR_and_Responsible_AI.md` §11.3 | **PASS** — matches "Governance structure 3 — the human-approval gate itself…every stage-gate review…requires explicit human/team sign-off." |
| 6 | No disclosed internal capital-allocation stage-gate mechanism | `Section_08_Operations_Plan.md` §8.4 | **PASS** — matches the current Systems row ("Not ready — the largest gap… No internal capital-allocation committee, approval threshold, or stage-gate process… is disclosed anywhere in the corpus"). Note: Section 8's own frontmatter still marks itself pending Stage 17 re-confirmation (see M3) — the specific content cited is nonetheless present and unchanged. |
| 7 | Grocery/retail penetration 1-3% of a USD104-150bn+ addressable category | `Section_03_Market_Analysis.md` §3.1 | **PASS** — matches "foodservice penetration ~20–25%; grocery/retail penetration ~1–3%" and the USD104bn/USD150bn+ dual-TAM discussion. |
| 8 | Non-high-value M1 retention -4% y/y in UAE, Kuwait, Qatar | `Section_03_Market_Analysis.md` §3.3 (Threats) | **PASS** — matches exactly, including the "UAE, Kuwait, and Qatar specifically" geography scoping. |
| 9 | AI/personalisation EBITDA contribution >USD14mn (FY2024) → >USD30mn (FY2025), already built and licensed from Delivery Hero SE | `Section_05_AI_Technology_and_Development.md` §5.1-5.2 | **PASS** — matches Section 5's Answer paragraph and §5.2 build/buy/partner finding verbatim in substance. |
| 10 | USP is a transparent, evidence-traceable allocation framework where every recommended dollar resolves to a named Fact, Decision, or labeled Assumption | `Section_04_Value_Proposition.md` §4.1 | **PASS** — matches §4.1's USP statement closely. |
| 11 | Governing hypothesis reference | `Section_02_Business_Description.md` §2.3 | **PASS** — Section 2 §2.3 does state the governing hypothesis as described. |
| 12 | Five initiatives' illustrative cost ranges exist only as a labeled sensitivity exhibit in Section 14, each carrying the mandatory disclosure sentence | `Section_14_Appendices.md` §14.3 | **PASS** — matches; sentence is the exhibit's header blockquote and is also appended to each `ASM-029`–`033` Statement in `Assumptions_Register.md`, confirmed directly. |
| 13 | "Business Name and Overview" GMV of USD 9.5bn FY2025 attributed to Section 2 §2.1 | `Section_02_Business_Description.md` §2.1 | **FAIL — see Hard failure H2.** Section 2 §2.1 states a different figure (USD 7,428mn, FY2024). |
| 14 | "6.0% in Q4 2025" comparator attributed (in part) to Section 10 §10.3 | `Section_10_Risk_Analysis.md` §10.3 | **FAIL — see Moderate finding M1.** Figure not present in the cited text; correct source is Section 9 §9.3/§9.4 or Section 3 §3.3. |
| 15 | No churn rate/baseline anywhere in the corpus | `Section_13_Monitoring_and_Evaluation.md` | **FAIL — see Hard failure H1.** File does not currently exist under `Business_Plan_Drafts_v2/`. |
| 16 | ASM-015–028 status "Approved as of 2026-07-23" | `vault/Decisions/Assumptions_Register.md` | **PASS** — confirmed directly: "All fourteen rows moved `Proposed` → `Approved` 2026-07-23." |
| 17 | `DEC-009` "approved 2026-07-23, middle path" | `vault/Decisions/Decision_Log/DEC-009...md` | **PASS** — confirmed: `status: approved`, `resolved_date: "2026-07-23"`, "Resolved 2026-07-23, by direct user/team instruction (middle path)." |

## Confirmed correct

- Problem Charter figures (GMV USD9.5bn +28% cFX, revenue USD3.9bn, Adj. EBITDA USD615mn/6.5%, 7.5mn
  active customers, DFM listing 29 November 2024, eight markets) — all reproduced accurately in Section
  1's Situation paragraph, correctly cited to `Problem_Charter.md`.
- Section 1's and Section 2's geography tagging on the claims spot-checked (Group/external for the TAM
  figures; market-comparison for the UAE/Kuwait/Qatar retention figure) is consistent with
  `Geographic_Evidence_Rules.md`'s tag definitions and with how Section 3 itself tags the same claims —
  no unlabeled geography transfer found in either section.
- Section 2's own internal MECE decomposition (§2.2), governing hypothesis (§2.3), and Current Business
  Stage (§2.6) are internally consistent and consistent with `DEC-009`'s resolved status as reflected in
  Section 2's own 2026-07-23 addendum.
- No duplicate/conflicting numeric claim was found between Sections 1 and 2 beyond the EBITDA
  range-vs-midpoint framing noted in M2 (the FY2024-vs-FY2025 GMV figures are each explicitly year-labeled
  and are not a "same claim, different value" conflict on their own — the defect is the mis-citation in
  H2, not the coexistence of two correctly-labeled figures from different years).

## Summary

Section 2 (Business Description) has **no hard citation-audit failure of its own** in this pass; its one
moderate finding (M2) is a legitimate, accurately-sourced figure that is simply presented inconsistently
with the rest of the plan's headline-range convention. Section 1 (Executive Summary) has **two hard
failures**: one a citation to a currently-nonexistent file (`Section_13_Monitoring_and_Evaluation.md`,
an infrastructure/sync-artifact problem, not a fabricated claim, but blocking under the 0%-tolerance rule
until the file is restored), and one a citation pointing to the wrong section/content for a real, correctly
disclosed figure (the FY2025 GMV restatement in "Business Name and Overview"). All cross-section reference
checks that could be verified against currently-existing section content passed cleanly, including the
two claims (top-three-risks list, `OPT-003` Horizon-1 placement) that are exactly the class of defect
("Section N makes a now-false claim about Section M's status") this stage exists to catch — neither has
gone stale.

## Verdict

**Section 1 — FAIL.** Two hard failures (H1, H2) block Stage 10 progression until fixed: restore
`Section_13_Monitoring_and_Evaluation.md` from version control, and correct the mis-cited GMV figure's
source in "Business Name and Overview." One moderate citation-precision finding (M1) should be fixed in
the same pass.

**Section 2 — PASS WITH MODERATE FINDING.** No hard failure. M2 (EBITDA range-vs-midpoint framing) should
be reconciled with Sections 1/9/10's convention before final publication, but does not block progression
on its own.

Neither section was edited as part of this audit — investigation and reporting only, per this task's
scope.
