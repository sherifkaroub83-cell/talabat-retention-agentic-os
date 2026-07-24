---
type: validation
section: 10 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_10_Risk_Analysis.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md)
run_date: 2026-07-24
auditor: top-level session, acting in the evidence-citation-agent role (Tooling note: no `Agent` tool
  available this session — see the section draft's own Tooling note and `bp-orchestrator.md`'s "Known
  runtime constraint")
status: OPEN → PASS (self-verified, 2026-07-24) — 0 issues found in-session; independent Pass 2 re-check
  still required
---

# Citation Audit — Section 10 (v2, Group-wide capital-allocation draft)

No prior Section 10 draft exists under `Business_Plan_Drafts_v2/` — this is the first citation audit run
against this section. (A superseded companion exists at
`vault/Projects/Business_Plan_Drafts/Section_10_Risk_Analysis.md`, drafted for the retired Egypt-retention
problem, and pre-pivot `Citation_Audit_Section_10.md`/`QA_Review_Section_10_*.md` files exist for that same
retired problem under non-`_v2` filenames; per standing instruction none of these was read as an input to
this audit.)

## Method

Walked the section sentence by sentence; every number or named-fact claim traced to either (a) a direct
`(DocID, page N)` Facts/Sources/Topics citation, or (b) an `ASM-###` row with `status: Approved`. Cited
Topic/Strategic Notes (`Strategic Risks.md`, `Competitive Weaknesses.md`, `Capital Allocation and Investment
Governance.md`, `Food Leadership.md`, `Risks.md`, `Grocery and Retail.md`, `GCC vs non-GCC.md`,
`Corporate Structure.md`, `Delivery Operations.md`, `AI.md`) and prior pipeline outputs (`Scenarios_v2.md`,
`KPI_Tree_v2.md`, `DEC-008`, `DEC-009`, `OPT-001`–`005`, `Problem_Charter.md`) were re-read this session and
cross-checked against the section's use of them, not just presence of a citation string. Two items were
sourced via `Section_08_Operations_Plan.md` per this task's explicit instruction (the December 2022 breach
and the two leadership transitions) — both were independently re-verified against their own underlying
primary/Topic-Note citations (TLB-026 p.49; `Corporate Structure.md`/`Entities/Executives.md`), not merely
copied from Section 8's prose. Checked geography tagging against
`vault/Architecture/Geographic_Evidence_Rules.md` for every numeric claim. Checked that no `ASM-029`–`033`
dollar range is reproduced anywhere in the section (a full re-scan of §10.1-10.9), confirming `DEC-009`'s
mandatory disclosure sentence is correctly not triggered.

## Pass/Fail Table

| # | Claim (location) | Cited to | Verdict | Note |
|---|---|---|---|---|
| 1 | AI/personalisation EBITDA contribution USD14mn+ (FY2024) → USD30mn+ (FY2025); non-GCC model-tuning status undisclosed (§10.1, TECH-01) | TLB-002, p.15; `Topics/AI.md` Open Questions | PASS | Verified verbatim against `Topics/AI.md`, independently used with the identical figure/page in `Section_05_AI_Technology_and_Development.md` §5.4 and `Section_08_Operations_Plan.md` §8.1 — no restatement conflict. |
| 2 | December 2022 hack — 144,469 customers, market undisclosed, USD150,000 penalty; "vulnerable to... security breaches... at the parent company level" (§10.1, TECH-02; §10.5, REG-04) | TLB-026, p.49 | PASS | Verified against `Section_08_Operations_Plan.md` §8.5, which independently cites the identical figures, quote, and page (itself independently pulled from the raw source text and cross-verified in `Citation_Audit_Section_08_v2.md` item 6-7); this section correctly attributes the sourcing to Section 8 in its own Tooling note (13.2) rather than presenting it as freshly discovered. |
| 3 | Non-high-value M1 retention decline -4% y/y, UAE/Kuwait/Qatar (§10.2, MKT-01) | TLB-019, p.9 | PASS | Verified verbatim against `Topics/Food Leadership.md`'s Links to Sources and Business Implications sections, which cite the identical figure, page, and three-market scope. |
| 4 | Food GMV USD6.65bn vs. G&R GMV USD2.77bn, FY2025 (§10.2, MKT-01) | TLB-002, p.18 | PASS | Verified verbatim against `Topics/Food Leadership.md`'s "Why It Matters" section, which independently cites the identical figures and page (cross-referenced there to TLB-019 p.14 as an alternate source for the same figures). |
| 5 | ~90-95% 3PL/freelance rider sourcing (§10.2, MKT-02) | `Strategic/Competitive Weaknesses.md`; `Facts/Logistics_Facts.md` | PASS | Verified against `Strategic/Competitive Weaknesses.md` and independently cross-checked against `Section_08_Operations_Plan.md` §8.3's identical citation — no restatement conflict. |
| 6 | AdTech 2.1% (2021) → 3.4-3.5% of GMV (FY2025) vs. ~7% benchmark, reached only for UAE tMart (§10.2, MKT-03) | TLB-001, p.21; TLB-002, pp.10,14,19 | PASS | Verified verbatim against `Strategic/Competitive Weaknesses.md`, which cites the identical figures, benchmark, and UAE-only qualifier with identical pages. |
| 7 | Q1 2026 "regional conflict" (28 Feb–mid-April 2026 ceasefire); "transitory" framing; talabat's own resilience-measures language (§10.2, MKT-04) | TLB-020, pp.7,18 | PASS | Verified verbatim against `Strategic/Strategic Risks.md`'s Synthesis section, which independently quotes the identical "both effects are transitory" language and pages. |
| 8 | Group Adjusted EBITDA margin 6.7% (FY2024) → 6.5% (FY2025); FY2026 guided 4.4-4.8%; Q1 2026 actual 4.8%, EBITDA -9% y/y, Net Income -18% y/y (§10.3, FIN-01) | TLB-020, pp.4,10-11,14; `Strategic/Strategic Risks.md` | PASS | Verified verbatim against `Strategic/Strategic Risks.md`'s Synthesis (third paragraph), which cites the identical figures and page ranges. |
| 9 | Q1 2026 margin "compressed to 4.8% from 6.3% a year earlier" (§10.3, FIN-01) | `Problem_Charter.md` | PASS | Verified verbatim against `Problem_Charter.md`'s "Strategic problem" section. Cross-checked against item 8: both cite the same Q1 2026 4.8% actual figure with different, non-contradictory comparators (this item: year-on-year vs. Q1 2025's 6.3%; item 8: quarter-on-quarter vs. `Scenarios_v2.md`'s cited 6.0% Q4 2025 baseline) — the section's own Tooling note (13.7) explicitly flags and resolves this as a non-conflict, consistent with the citation-audit skill's rule that an unresolved internal discrepancy in a cited note is not automatically a failure provided it isn't silently re-merged into one number, which it is not here. |
| 10 | Egypt FX exposure risk statement; "GMV inflation-hedge dynamics" (§10.3, FIN-02) | TLB-020, p.14 | PASS | Verified verbatim against `Strategic/Strategic Risks.md`'s Synthesis (first paragraph), including the direct quote. |
| 11 | No disclosed ROI/payback/hurdle-rate criterion for either investment bucket (§10.3, FIN-03) | `Topics/Capital Allocation and Investment Governance.md` | PASS | Verified verbatim against the note's Open Questions: "No document discloses how the USD175 million total, or its ~USD120mn/~USD55mn split, was itself arrived at — no unit-economics model, ROI hurdle rate, or payback-period criterion is named anywhere in the corpus for this programme." |
| 12 | G&R (0.5%)-(0.7%)pp EBITDA margin drag (§10.3, FIN-04) | `Topics/Grocery and Retail.md` | PASS | Verified against `vault/Forecasts/Scenarios_v2.md`'s grocery & retail module, which independently cites the identical drag range and attributes it to `Grocery and Retail.md`. |
| 13 | GCC vs. non-GCC per-capita order-frequency gap, 1.28x vs. 0.13x (§10.3, FIN-04) | `Topics/GCC vs non-GCC.md` | PASS | Verified against `vault/Forecasts/Scenarios_v2.md`'s grocery & retail module downside cell, which independently cites the identical figures from the same note. |
| 14 | No internal capital-allocation committee/stage-gate/approval-threshold disclosed anywhere in the corpus (§10.4, ORG-01) | `Topics/Capital Allocation and Investment Governance.md` | PASS | Verified verbatim against the note's Overview and Open Questions, identical wording to `Section_08_Operations_Plan.md` §8.4's citation of the same note. |
| 15 | Section 8's 7S check independently rates Systems "Not ready" for the same reason (§10.4, ORG-01) | `Section_08_Operations_Plan.md` §8.4 | PASS | Verified directly against Section 8's own 7S table, Systems row — restated accurately, not overstated. |
| 16 | False-precision risk named as its own organizational/governance risk category, per `DEC-008`/`DEC-009`'s escalation rationale (§10.4, ORG-02) | `Topics/Risks.md`; `DEC-008`; `DEC-009` | PASS | Verified verbatim against `Topics/Risks.md`'s "New risk category the pivot introduces" section, and cross-checked the `DEC-008`/`DEC-009` characterization against both Decision Log files directly — `DEC-009`'s "Rationale" section explicitly discusses the compounded false-precision risk across five ranges, matching this section's description. |
| 17 | `ASM-029`–`033` mandatory disclosure sentence text ("Agentic OS analytical recommendation, not a disclosed talabat allocation") described accurately, not reproduced with a dollar figure (§10.4, ORG-02; §10.8 mitigation) | `DEC-009_investment-options-ranking-and-allocation-priority.md`; `Decisions/Assumptions_Register.md` rows ASM-029–033 | PASS | Verified the quoted sentence matches `DEC-009`'s Decision section verbatim. Confirmed by full re-scan of the section that no dollar figure from ASM-029–033 is reproduced anywhere — only the disclosure-rule text itself, which is a governance/process description, not a numeric claim requiring its own Approved-Assumption citation. |
| 18 | CEO transition Rodriguez → Gyssels (between TLB-018 Aug 2025 and TLB-009 Feb 2026); board-seat change Al Jbori → Al-Halabi (between TLB-004/TLB-026 and TLB-008), both unnarrated (§10.4, ORG-03) | `Corporate Structure.md`; `Entities/Executives.md`; `Strategic/Strategic Risks.md` | PASS | Verified verbatim against `Strategic/Strategic Risks.md`'s Synthesis (fourth paragraph) and independently cross-checked against `Section_08_Operations_Plan.md` §8.4's Staff row, which cites the identical transitions with identical source documents — no restatement conflict across the two sections. |
| 19 | Kuwait Competition Protection Authority investigation/litigation; UAE CCPD notices on Partner-subscription clauses; Iraq competition-authority inquiry (§10.5, REG-01) | TLB-001, pp.32,34; TLB-002, p.26; TLB-026, pp.46-47 | PASS | Verified verbatim against `Strategic/Competitive Weaknesses.md`, which independently cites identical jurisdictions, figures, and pages, cross-corroborated by `Facts/Competition_Facts.md` per `Citation_Audit_Section_08_v2.md` item 8. |
| 20 | Qatar MOCI commission-rate cap and delivery-registration-fee ban (§10.5, REG-02) | TLB-026, pp.46-47 | PASS | Verified verbatim against `Strategic/Competitive Weaknesses.md` and independently cross-checked against `Section_08_Operations_Plan.md` §8.5's identical citation of the same fact and pages. |
| 21 | Oman licensing dispute (§10.5, REG-03) | TLB-001, p.32 | PASS | Verified verbatim against `Strategic/Competitive Weaknesses.md`, identical citation used in `Section_08_Operations_Plan.md` §8.5. |
| 22 | Delivery Hero Group Inter-Company DTA (15 Oct 2021, amended 30 Oct 2024); Binding Corporate Rules; EU SCCs under GDPR (Reg. (EU) 2016/679) (§10.5, REG-04) | TLB-026, pp.156-157 | PASS | Verified verbatim against `Section_08_Operations_Plan.md` §8.5's identical citation (itself independently pulled from raw source text and verified in `Citation_Audit_Section_08_v2.md` item 5). |
| 23 | No jurisdiction-specific data-protection statute for any of talabat's eight markets is disclosed anywhere in the primary corpus (§10.5, REG-04) | Absence-of-disclosure finding, verified in `Section_08_Operations_Plan.md` §8.5 | PASS (correctly handled as a stated gap, not a citation failure) | This session cross-checked the finding against `Citation_Audit_Section_08_v2.md` item 26, which documents the underlying search (52 files matched a "data protection"/"privacy"/"GDPR"/"PDPL" scan, all reviewed) — this section correctly restates the finding rather than re-running the search, and does not invent any national-law citation. |
| 24 | Governance KPI family (G1-G7), all newly-instrumented, 0 corpus baseline (§10.4 ORG-01 mitigation; §10.8) | `vault/Forecasts/KPI_Tree_v2.md` | PASS | Verified directly against the file's Governance KPIs table and its "Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented" summary line, identical to `Section_08_Operations_Plan.md` §8.4's citation of the same table. |
| 25 | `OPT-001`–`005` risk/capability content cited narratively across §10.1-10.8 (no dollar ranges reproduced) | `vault/Decisions/Investment_Options/OPT-001...005...md`; `DEC-009` | PASS | Verified each cited risk/capability statement (OPT-005's measurement-quality weakness; OPT-001's margin-drag checkpoint; OPT-003's Qatar/UAE/Kuwait targeting; OPT-004's UAE-benchmark dependency; OPT-002's order-volume/fulfilment implication) directly against each option's own record and `DEC-009`'s 11-criterion table — no capability, tier, or rating is invented or restated with different content than the source record. Full re-scan of §10.1-10.9 confirms no dollar figure from `ASM-029`–`033` or any `OPT-` record is reproduced anywhere in this section, so `DEC-009`'s mandatory disclosure sentence is correctly not triggered by a reproduced number (only discussed as a governance rule, item 17 above). |
| 26 | Named executives — Alfakesh (CFO), Assadi (COO), Makarem (SVP Grocery & Retail), Vandepitte (Chair), Abu Amara (Head of GRC), AlGhrawi (VP Legal, GRC & Board Secretary) (§10.8) | `Entities/Executives.md` | PASS | Verified every named role and title directly against the Executives roster, identical to the roles independently used in `Section_08_Operations_Plan.md` §8.3 — no title or role is altered between the two sections' citations. |
| 27 | 11-criterion comparison and Tier 1/2/3 grouping of `OPT-001`–`005` (§10.1 TECH-01; §10.2 MKT-03; §10.3 FIN-04; §10.5 REG-02; §10.7 pre-mortem) | `DEC-009_investment-options-ranking-and-allocation-priority.md` | PASS | Verified each specific rating cited (OPT-005's "Low" measurement-quality rating; OPT-004's longer-horizon tiering; OPT-001's margin-drag/reversibility characterization; OPT-003's narrow-market-applicability framing) directly against `DEC-009`'s comparison table and written comparison section — no rating is misquoted. |
| 28 | Scenarios_v2.md downside case (top-level) and G&R/AI-personalisation module downside cells (§10.1 TECH-01; §10.3 FIN-01, FIN-04) | `vault/Forecasts/Scenarios_v2.md` | PASS | Verified each cited downside-case growth logic (margin compression deepening beyond guidance's low end; G&R margin drag widening in non-GCC/Egypt; AI-personalisation non-GCC data-thinness) directly against the corresponding module's Downside cell in `Scenarios_v2.md` — no logic is paraphrased inaccurately or given a confidence level the source module doesn't state. |

## Geographic Evidence Rules check

**Clean — no fix required this session.** Every numeric or directional claim in the section carries an
explicit geography tag, consistent with `vault/Architecture/Geographic_Evidence_Rules.md`:
- Group-level figures (EBITDA margin trend, AI EBITDA contribution, rider-sourcing %, DTA/GLSA mechanics,
  Governance KPI family, no-ROI-criterion finding, no-stage-gate-mechanism finding) are consistently tagged
  `Group`.
- The non-high-value M1 retention decline (MKT-01) is correctly tagged `market-comparison` (UAE, Kuwait,
  Qatar) — the section explicitly states extending it to Egypt/non-GCC would be an inference, not a
  disclosed fact, matching `Food Leadership.md`'s own Open Questions.
- The AdTech ~7%-of-GMV benchmark (MKT-03) is correctly tagged as a `country-specific` (UAE) ceiling
  referenced as an inferred extrapolation, not presented as a Group-wide guided target.
- The Egypt FX risk statement (FIN-02) is explicitly described as drawn from Group guidance materials
  rather than Egypt's own standalone segment P&L, avoiding the `Egypt-standalone` tag's stricter meaning
  (segment-reported financials) while still correctly flagging it as the one Egypt-named item in the
  guidance walk — consistent with how `Strategic Risks.md` itself frames the same evidence.
- The G&R margin-drag risk (FIN-04) is correctly tagged `Group, with an inferred-applicability caveat for
  non-GCC/Egypt specifically` — matching `Scenarios_v2.md`'s own module-downside geography tag verbatim,
  not a freshly-invented caveat.
- Each regulatory item (REG-01, REG-02, REG-03) is correctly tagged `country-specific` to its own named
  jurisdiction individually (Kuwait/UAE/Iraq; Qatar; Oman respectively) — none is presented as a Group-wide
  or bundled `market-comparison` finding.
- REG-04's data-breach item is correctly tagged `Group, with the specific affected market explicitly
  undisclosed` — the section does not guess or default to Egypt or any other single market, matching
  `Citation_Audit_Section_08_v2.md` item 6's identical finding for the same underlying fact.
- "MENA" is never used anywhere in the section as a stand-in for the 8-market footprint.
- No pre/post-FY2025 non-GCC figure is cited in this section at all — not implicated.

## Summary

- **28 claims/rows checked.**
- **28 pass**, 0 found-and-fixed, 0 open.
- **0 missing-citation failures** and **0 not-yet-approved-Assumption dependencies** — this section cites
  no `ASM-` row with a numeric value at all (it discusses the `DEC-009` disclosure-sentence *rule* in ORG-02,
  never reproducing an `ASM-029`–`033` dollar figure), so no unresolved Assumption-Register dependency exists.
- **0 same-tier evidence conflicts found** during assembly**, except the one apparent (and resolved,
  non-contradictory) comparator difference between `Problem_Charter.md` and `Strategic Risks.md`/
  `Scenarios_v2.md` on the Q1 2026 margin figure (item 9) — both figures are retained, each with its own
  stated comparator, per the section's own Tooling note (13.7).
- **0 new primary-source citations pulled directly by this session** — every citation in this section
  either already existed in a Topic/Strategic Note or was carried forward, independently re-verified, from
  `Section_08_Operations_Plan.md`'s own already-audited citations (items 2, 15, 18, 22, 23, 26).

## Verdict
**OPEN → PASS (self-verified, 2026-07-24).** No citation failure, no missing geography tag, and no
misapplied inference found in this audit. This is a self-check, not an independent Pass 2
re-verification — per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline, a genuinely
independent citation-audit re-check (a fresh `evidence-citation-agent` thread) is still required before
Section 10 can be marked citation-verified/✅ Done. **Recommendation for the Pass 2 reviewer:** items 8-9
(the two different Q1 2026 margin comparators) and item 16-17 (the `ORG-02` false-precision risk's
characterization of `DEC-008`/`DEC-009`) are the highest-value items to independently re-verify first,
since they involve the most interpretive synthesis rather than a direct single-source lookup.
