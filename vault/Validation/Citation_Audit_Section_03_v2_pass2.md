---
type: validation
section: 3
pass: 2
status: FAIL
date: "2026-07-24"
built_by: evidence-citation-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_03_Market_Analysis.md
pass1_report: vault/Validation/Citation_Audit_Section_03_v2.md
note: "Genuinely independent Pass 2 per the two-pass verification protocol (Agentic_OS_Architecture_v2, Change 2). The Pass 1 audit was NOT read until this pass's own trace was complete; convergence/divergence is recorded in the final section."
---

# Citation Audit — Section 3 (v2), Pass 2 (independent)

## Method

Walked the draft claim by claim and traced every numeric and named-fact claim to (a) a
`(DocID, page N)` citation verified against `vault/Knowledge/Facts/` (consolidated and `_raw/`),
`Sources/`, and where needed the extracted `_source_text/`; (b) an `Approved` row in
`vault/Decisions/Assumptions_Register.md`; (c) an approved Decision record; or (d) an explicit
synthetic label. Citations were verified against **content**, not presence of a citation string —
including re-deriving each figure's measurement period and geography composition per
`vault/Architecture/Geographic_Evidence_Rules.md`. The Pass 1 report was read only after this
trace was complete.

Files traced against (principal): `Facts/GMV_Facts.md`, `Facts/Orders_Facts.md`,
`Facts/Competition_Facts.md`, `Facts/Marketplace_Facts.md`, `Facts/Advertising_Facts.md`,
`Facts/Talabat_Pro.md`, `Facts/AI_Facts.md`, `Facts/_raw/TLB-001/004/010/014/019/020/026_facts.md`,
`Sources/TLB-014/019/020/026` notes, `_source_text/Talabat-Holding-plc_International-Offering-Memorandum.txt`,
`Topics/GCC vs non-GCC.md`, `Topics/GMV.md`, `Topics/Multi-Verticality.md`, `Topics/Talabat Pro.md`,
`Topics/EBITDA.md`, `Topics/Food Leadership.md`, `Topics/Egypt.md`, `Entities/Countries.md`,
`Entities/Competitors.md`, `Strategic/Competitive Advantages.md`, `Decisions/Assumptions_Register.md`
(ASM-015, ASM-021, ASM-029–033), `Decision_Log/DEC-001`, `DEC-009`.

## Verdict

**FAIL — 3 hard failures, 7 soft findings.** Section 3 cannot proceed to stage 10 / "✅ Done"
until the three hard failures are re-drafted and re-checked. All three are precision/labeling
failures on otherwise-sourced material — none requires new research; each has a specific fix below.

---

## Hard failures (blockers)

### H1 — talabat pro GMV-share baseline mislabeled "FY2024" (§3.2, and Traceability row)

> "talabat pro subscribers, whose share of platform GMV rose from 32% to 49% (FY2024→Q1 2026)"

The 32% figure is disclosed as **Q1 2025 / Mar'25**, not FY2024: "GMV share of talabat pro
subscribers: 49% (Q1'26) vs 32% (Q1'25)" (TLB-020, page 8) and "rose to 49% of platform GMV in
Mar'26 from 32% in Mar'25" (TLB-014, page 14, incl. footnote 5 definition). **No corpus source
discloses a 32% pro GMV share at FY2024.** The mislabel triples the apparent trend duration (a
~5-quarter shift presented as a ~17pp one-year move is materially different evidence for Section 4's
value-driver logic than a two-plus-year trend). The cited note (`Topics/Talabat Pro.md`) does not
contain a FY2024 baseline either.

- **Fix:** restate as "32% (Q1 2025) → 49% (Q1 2026) *(Group, talabat-only excl. instashop;
  TLB-020, page 8; TLB-014, page 14)*" here and in the Traceability table.
- **Escalation (decision-steward):** `ASM-021`'s Statement/Value cells carry the identical
  "(FY2024→Q1 2026)" label — the register row replicates the same period error and should be
  corrected/annotated so downstream sections (4, 9) do not inherit it.

### H2 — Pre-carve-out non-GCC per-capita figure applied to the post-carve-out segment without a composition qualifier (§3.4)

> "Non-GCC (+57% y/y GMV growth, still only 18–21% of Group GMV) … remains structurally
> under-penetrated relative to its GCC counterpart's maturity (2023 monthly orders per capita:
> GCC 1.28x vs. non-GCC 0.13x, a ~10x gap, TLB-026, page 121; `GCC vs non-GCC.md`)"

The figures themselves trace (TLB-026, page 121). But the 2023 "non-GCC" bucket is the
**pre-FY2025 definition — Jordan + Iraq + Egypt** — while the +57% / 18–21% figures in the same
sentence use the **FY2025-onward Jordan+Iraq-only** definition the draft itself establishes in
§3.2 ("Non-GCC (Jordan + Iraq only)"). Using both under one unqualified "non-GCC" label is exactly
the pre/post-FY2025 interchange `Geographic_Evidence_Rules.md` names as non-cosmetic and the
citation-audit skill classifies as a failure, not a style note. The source topic note handles this
correctly ("non-GCC markets — **Egypt included** — are earlier in their demand-maturity curve",
`GCC vs non-GCC.md` Business Implications); the draft dropped that qualifier.

- **Fix:** add the composition qualifier inline, e.g. "(2023 basis, when 'non-GCC' still included
  Egypt alongside Jordan and Iraq — the segment's pre-FY2025 definition; the +57%/18–21% figures
  use the FY2025-onward Jordan+Iraq-only definition)," or recast the 0.13x point as a labeled
  `inferred-applicability` claim about the current Jordan+Iraq segment. Same qualifier needed on
  the corresponding Traceability row.

### H3 — GEMs presented as "AI-supported" on a citation that does not say so (§3.4)

> "The GEMs product — an AI-supported tool that helps Partners win back customers with declining
> acquisition/retention rates — is a concrete, already-operationalized proof point that talabat's
> AI infrastructure already performs churn-risk targeting at the Partner level (TLB-026, page 138…)"

TLB-026 page 138 (verified in `_source_text/`) describes GEMs as an **advertising product**:
Restaurants offer a limited-time discount, pay per customer acquired/won back, and GEMs is
"recommended for Restaurant with low/declining customer acquisition or retention rates." **No
primary source describes GEMs as AI-supported**; no Facts note carries that attribute. The
"AI-supported" characterization originates only in synthesis notes (`Strategic/Competitive
Advantages.md`; `Topics/Advertising.md` Business Implications), themselves without a supporting
citation for the "AI" attribute. Since the sentence's load-bearing role is to evidence OPT-005's
technical feasibility ("AI infrastructure already performs churn-risk targeting"), this is an
analytical inference presented as a disclosed fact — a category-mixing failure under the standing
rules, and untraceable as cited.

- **Fix (either):** (a) describe GEMs per the disclosure (an AdTech win-back product targeted at
  Partners with declining acquisition/retention, TLB-026 p.138) and carry the AI link as a stated
  inference resting on the separately disclosed AdTech-AI evidence ("integration of AI-driven
  targeting and automated ad-buying processes," TLB-001, page 13; ad-placement algorithms and
  audience segmentation, TLB-026, pages 132–133); or (b) drop the "AI-supported" attribute. The
  upstream synthesis notes should also be flagged for the same unsupported attribute so it does
  not recur.

---

## Soft findings (resolvable claims; citation precision or unflagged same-tier tension)

| # | Finding | Fix |
|---|---|---|
| S1 | TLB-019 (page 7) discloses pro GMV share **25%** ("1.9x growth," Q4'25) — a same-tier disclosed figure in unexplained tension with the 32% (Q1'25) → 49% (Q1'26) series; unflagged, contrary to the dual-presentation discipline the draft applies elsewhere (§3.1, §3.3). | Flag it (likely a different metric basis — "one-quarter of the MAUs" — but the corpus does not say so); present, don't resolve. |
| S2 | §3.2 table: "swing to profit *(TLB-010)*" — resolvable (Egypt PBT USD 0.5mn Q1'25 → USD 9.4mn Q1'26 per `Entities/Countries.md`/TLB-010, page 20; FY2025 net profit USD 44.4mn, TLB-002, page 111), but the citation is pageless and "swing to profit" overstates a near-breakeven→profitable Q1 move. | Cite TLB-010, page 20 (and TLB-002, page 111 for the FY2025 swing) and date/phrase the swing precisely. |
| S3 | §3.3 Threats: the margin trio (6.0% Q4'25 baseline; 4.4–4.8% FY2026 guided; 4.8% Q1'26 actual) cited only "(TLB-020)" with no pages. All three verify: TLB-020 page 12 (bridge 6.0%→4.8%) and page 14 (4.4–4.8% guidance); guidance origin TLB-019, pages 18–19. | Add pages. |
| S4 | §3.3 Strengths: AI/personalisation EBITDA ">USD 14mn FY2024 → >USD 30mn FY2025" cited to `Topics/EBITDA.md`, which does not contain those figures. Facts home: `Facts/AI_Facts.md` (TLB-001, page 23; TLB-002, page 15). Both sources word these as management **estimates** ("estimated to generate/contribute"). | Re-point the citation; prefer "management-estimated EBITDA contribution" over "disclosed EBITDA contribution." |
| S5 | §3.3 Weaknesses: "Qatar commission-rate cap and delivery-fee ban" — the disclosure is a ban on **delivery registration fees** (TLB-026, page 46), a narrower fact than a general delivery-fee ban. | Tighten the paraphrase. |
| S6 | The 21% endpoint of "18–21% of Group GMV" (Answer, §3.3 Opportunities, §3.4) is never cited inline anywhere — 18% is TLB-019 page 14 (FY2025); 21% is TLB-011 page 2 (Q1 2026), resolvable via `GCC vs non-GCC.md`. | Add the TLB-011 citation at first numeric use. |
| S7 | Page precision: (a) rider workforce cited "TLB-026, pages 131, 138" — the ~95% 3PL fact is page 138 (page 51 carries the provider-concentration detail; page 131 does not carry the rider fact); (b) TLB-002 AdTech citations "pp.10/14/19" — the 3.4–3.5%-of-GMV figure is pages 11/14/19 per `Facts/Advertising_Facts.md` (page 10 carries the UAE tMart 7% figure). | Correct page references. |

## Observations (no action required for this gate)

- **Unreconciled GMV tables carried correctly:** the 82%/USD 6,332mn (TLB-002, page 18) vs.
  81%/USD 7,702mn (TLB-019, page 14) tension is flagged in `Topics/GMV.md` Open Questions and
  carried forward by the draft without silently picking a figure. Per skill Rule 2 it is noted
  here that no `DEC-XXX` record resolves this same-tier conflict; because the draft asserts
  neither as the sole figure, no new Assumption row is required — but if any later section needs
  a single GCC-share headline, that will require a `decision-steward` escalation first.
- **Dual grocery-TAM figures (USD 104bn vs USD 150bn+) and dual G&R GMV figures (USD 2.77bn vs
  USD 3.5bn)** are presented unreconciled, consistent with the DEC-002 non-force-reconciliation
  discipline. DEC-002 itself (Egypt market size, three-way labeling) is not implicated — no Egypt
  market-size figure appears in this section.
- **DEC-008/DEC-009 restrictions respected:** no `ASM-029`–`033` dollar range appears anywhere in
  the section; OPT references are narrative-only, matching the register descriptions.
- **Egypt category-share dual presentation** (10x+ vs 1x+→4x+; TLB-026 ">10x at IPO" vs TLB-014
  "1x+ at IPO") verifies exactly, including the Redseer/OC&C provider attributions, and follows
  superseded `DEC-001`'s precedent without asserting a headline figure — correctly requiring no
  fresh decision.
- **Internal-consistency note for the QA stage:** the "Answer" section says "Three of the plan's
  five ranked candidate Investment Options (`OPT-001`, `OPT-003`, `OPT-004`) map onto
  opportunity/threat pairs," while §3.3/§3.4 in fact map all five (also `OPT-002`, `OPT-005`).
  Not a citation failure; flag for stage 13.11.
- **Verified clean (spot list):** 192mn/75mn populations; 1x+–10x+ category share; 20–25% / ~1–3%
  penetration (fair compression of TLB-001 p.21's 1–2% and TLB-002 p.8's 2–3%, both cited);
  USD 104bn TAC/3%/USD 3.5bn (TLB-014 p.5); <1.5% Redseer (TLB-019 p.11); GMV 9.5bn/7.7mn/585mn/84k;
  all three order-frequency figures presented unblended with bases stated; ASM-015 (Approved);
  TLB-002 p.111 segment table (all nine cells); TLB-004 p.37 IFRS 8 threshold; +57%/+22% (TLB-019
  p.14); Food/G&R vertical split; 68%→73%→76% multi-vertical (TLB-019 p.7; TLB-020 p.8); 8%-vs-2%
  CPG ratio (TLB-015 p.108); ~90–95% rider workforce (values); antitrust/regulatory list; -4% M1
  scoped to UAE/Kuwait/Qatar with the extrapolation explicitly declined; named-competitor scarcity
  and the secondary-source design boundary (Breadfast/Rabbit/elmenus correctly not cited as
  evidence); NPS ~20%; UAE "5 key players"; Meituan tagged external/non-MENA; (0.5)–(0.7)pp G&R
  margin drag; ~USD 120mn / ~USD 55mn bucket figures.

## Geographic Evidence Gate summary

One failure (H2, pre/post-FY2025 non-GCC composition transfer). Otherwise clean: geography tags
are present on nearly all numeric claims; "MENA" is never used as a footprint stand-in; the
Meituan comparator is correctly external-tagged; the -4% retention figure is correctly scoped and
the Egypt/non-GCC extrapolation explicitly declined; Egypt-standalone vs Jordan+Iraq definitions
are correctly stated in §3.2.

---

## Convergence / divergence with Pass 1 (`Citation_Audit_Section_03_v2.md`) — read only after the trace above was complete

**Convergent:** both passes clear the large majority of claims (Pass 1's rows 1–17, 19–20, 22–35,
37-values, 38); this pass independently confirms the two issues Pass 1 found and fixed in-session
(order-frequency chaining; TAC/GMV denominator arithmetic) are genuinely fixed in the current
draft, with the additional G&R 2.77/3.5bn dual figure correctly surfaced.

**Divergent — all three Pass 2 hard failures were passed by Pass 1:**
1. Pass 1 row 18 passed the 32%→49% claim by consistency with Section 4's audit and "`ASM-021`'s
   basis" rather than tracing the period label to the Facts layer — the ASM row replicates the
   same "FY2024" mislabel, so the cross-reference could not catch it (H1). Pass 1 also did not
   surface TLB-019 p.7's 25% same-tier tension (S1).
2. Pass 1's Geographic check asserted "every non-GCC figure used (§3.2 table, §3.4) is explicitly
   the post-carve-out, Jordan+Iraq-only definition" — incorrect for the 2023 0.13x figure
   (TLB-026, page 121), which is pre-carve-out and Egypt-inclusive (H2).
3. Pass 1 row 36 verified GEMs "against `Strategic/Competitive Advantages.md`" — i.e., against the
   synthesis note that introduced the unsupported "AI-supported" attribute, not against the
   underlying disclosure (H3). Same pattern on row 21 (`Topics/EBITDA.md` cited as verifying
   figures it does not contain — S4).

The divergence pattern is itself the two-pass protocol's design case: Pass 1's failures cluster
where it verified against downstream synthesis/register artifacts instead of the Facts layer.

## Required before stage 10

1. Re-draft H1, H2, H3 in `Section_03_Market_Analysis.md` (Orchestrator; do not soften claims —
   relabel/qualify them as specified).
2. `decision-steward`: correct/annotate `ASM-021`'s period label (H1 escalation).
3. Optionally clear S1–S7 in the same edit pass (all are one-line fixes).
4. Targeted re-audit of the edited passages (not a full third pass).
