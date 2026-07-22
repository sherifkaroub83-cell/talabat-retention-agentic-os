# Citation Audit — Section 4 (Value Proposition)

## Tooling note (read first)
Performed by a genuinely top-level-invoked `evidence-citation-agent` thread, launched directly from the
top-level session (not nested inside `bp-orchestrator`), per Phase 8 of the roadmap — the fifth Business
Plan section drafted, and the section explicitly designed to be dense with cross-section reference
(inheriting mechanisms from [[Value_Driver_Tree]]/[[KPI_Tree]], its USP from
[[DEC-003_section2-governing-hypothesis|DEC-003]]/[[Section_02_Business_Description|Section 2]], and its
ROI arithmetic and highest-severity-risk framing from [[Section_09_Financial_Plan|Section 9]] and
[[Section_10_Risk_Analysis|Section 10]] respectively, without re-deriving any of them). This session had
`Read`, `Grep`, `Glob`, and `Write` available and no memory of any prior conversation. The procedure below
follows `.claude/skills/citation-audit/SKILL.md` exactly: every numeric or named-fact claim in
`vault/Projects/Business_Plan_Drafts/Section_04_Value_Proposition.md` was walked and traced to either (a)
a direct `(TLB-XXX, page N)` citation independently verified against the underlying Facts/Strategic/Topics
consolidation layer (not taken on the draft's own word), or (b) an `ASM-###` row in
`vault/Decisions/Assumptions_Register.md` with `status: Approved`. Per the task brief, every cross-section
reference (to Sections 2, 9, 10, `Value_Driver_Tree.md`, `KPI_Tree.md`, `DEC-003`) was independently
re-read at its source rather than trusted from Section 4's own description of it — this is exactly the
class of check Section 10's audit found a real defect in (a misattributed cross-section citation), so it
was treated as the audit's central test here too.

## Method
Read directly and cross-checked, not taken on faith from Section 4's own prose:
`vault/Projects/Business_Plan_Drafts/Section_04_Value_Proposition.md` (full text),
`Section_02_Business_Description.md` (full text, especially §2.2, §2.3, §2.4), `Section_09_Financial_Plan.md`
(full text, especially §9.3, §9.4), `Section_10_Risk_Analysis.md` (full text, especially §10.2),
`vault/Forecasts/Value_Driver_Tree.md`, `vault/Forecasts/KPI_Tree.md`,
`vault/Decisions/Decision_Log/DEC-003_section2-governing-hypothesis.md`,
`vault/Decisions/Assumptions_Register.md` (all 12 rows), `vault/Knowledge/Strategic/Customer Retention
Drivers.md`, `Strategic/AI Opportunities.md`, `Strategic/Revenue Model.md`, `vault/Knowledge/Facts/AI_Facts.md`,
`Facts/Advertising_Facts.md`, `Facts/Revenue.md`, `vault/Knowledge/Topics/Customer Journey.md`,
`Topics/Profitability.md`. Targeted `Grep` sweeps were run across `vault/Knowledge/` for "TLB-013" (to
verify the Food → Grocery & Retail → talabat pro journey page citation) and for "only directly quantified"
/ "fraud detection" / "GEMs 3.6x" (to check whether Section 4's "only... financial trail" superlative is
itself supported anywhere in the vault, and whether a competing quantified AI-financial figure exists that
would contradict it).

## Findings by claim group

| # | Claim group | Trace target | Result |
|---|---|---|---|
| 1 | Recommendation-ranking upgrade (cuisine→item-level, TLB-002 p.15) and "new form factors" roadmap item (TLB-015 p.89) | `Strategic/AI Opportunities.md`, verified verbatim against `Facts/AI_Facts.md` (TLB-002: "recommendation system extended from cuisines to items... page 15"; TLB-015: "Forward roadmap: 'AI driven recommendations in new form factors'... page 89") | PASS |
| 2 | AI/personalisation EBITDA contribution (USD14mn+ FY2024 → USD30mn+ FY2025, TLB-001 p.23, TLB-002 p.15) | `Strategic/Customer Retention Drivers.md`, verified verbatim against `Facts/AI_Facts.md` | PASS |
| 3 | "The only directly quantified financial trail for any AI mechanism in the entire corpus" | **Not cited anywhere in Section 4** — independently traced to `Topics/Profitability.md` ("the corpus's only directly quantified AI financial-impact figures... are profitability, not revenue or GMV, figures"), which does state this in substance | **FAIL — uncited named-fact claim, see dedicated check below** |
| 4 | ML offer-timing mechanism (TLB-023 p.8) and Food → Grocery & Retail → talabat pro journey (TLB-013 p.6) | `Facts/AI_Facts.md` (TLB-023 p.8 verbatim) and `Topics/Customer Journey.md` (TLB-013 p.6 verbatim: "Food → Grocery & Retail → talabat pro sign-up") | PASS |
| 5 | talabat pro 20-28% order-frequency / 26-32% retention uplift (TLB-023 p.8, TLB-001 p.18, TLB-019 p.11, TLB-015 p.78/p.104) | `Strategic/Customer Retention Drivers.md`, verified verbatim against all four cited pages | PASS — anti-pattern check, see below |
| 6 | Multi-vertical 13.0x/3.8x order frequency (TLB-012 p.7) | `Strategic/Customer Retention Drivers.md`, verified verbatim | PASS |
| 7 | +16pp/+20pp M1 retention, mono- vs. multi-vertical (TLB-019 p.10) | `Strategic/Customer Retention Drivers.md`, verified verbatim | PASS |
| 8 | AI 2026 ambition "particularly within our rapidly growing adtech business" (TLB-002 p.10) and GEMs Partner win-back tool (TLB-026 p.138) | `Strategic/AI Opportunities.md` and `Facts/Advertising_Facts.md`, both verified verbatim | PASS |
| 9 | Advertising & listing fees revenue USD246m (FY2024) → USD323m (FY2025), +32% y/y (TLB-002 p.20, TLB-009 p.4) | `Facts/Revenue.md` — the FY2025 USD323m/+32% leg is directly supported at both cited pages; the FY2024 USD246m comparator is not explicitly present at either cited page in the consolidated Facts layer | PASS on substance — **imprecise citation pointer, see Limitations (non-blocking)** |
| 10 | ~7%-of-GMV medium-term benchmark "already reached in the UAE for talabat mart specifically" (cited TLB-001 p.21) | `Facts/Advertising_Facts.md` — TLB-001 p.21 states only the general ~7% benchmark target ("talabat currently well below this"); the UAE-already-reached fact is stated only at TLB-002 p.10 (and TLB-014 p.19) | **FAIL — misattributed citation, see dedicated check below** |
| 11 | "Current Group AdTech penetration sits at 3.4–3.5% of GMV" | Not cited anywhere in the sentence — independently traceable to `Facts/Advertising_Facts.md` (TLB-002 pp.11/14/19, TLB-011 p.4, TLB-014 p.14) but no citation appears in the draft | **FAIL — uncited numeric claim, see dedicated check below** |
| 12 | Mechanism 1 → `KPI_Tree.md` K6 / `ASM-008`; Mechanism 2 → K7, K8 / `ASM-008`; Mechanism 3 → K13, K14 / `ASM-011` | `vault/Forecasts/KPI_Tree.md`, read directly | PASS — see dedicated KPI cross-reference check below |
| 13 | USP "inherited directly from Section 2's governing hypothesis (DEC-003, Option 2)" | `DEC-003_section2-governing-hypothesis.md` and `Section_02_Business_Description.md`, both read directly | PASS — see dedicated DEC-003 consistency check below |
| 14 | Risk-reduction linkage: Section 10 scores the upside-case-underperforms-base-case risk as the single highest-severity item (High/High, `ASM-008`/`ASM-011`) | `Section_10_Risk_Analysis.md` §10.2, read directly | PASS — see dedicated cross-section accuracy check below |
| 15 | ROI arithmetic (≈USD13.2m investment; ≈USD53.9m break-even revenue at 24.5% gross margin; ≈10.6% incremental lift vs. USD509.9m FY2025 revenue) | `Section_09_Financial_Plan.md` §9.4, read directly — referenced, not re-derived | PASS — see dedicated "one message per exhibit" check below |
| 16 | Competitors named in Section 3 (Breadfast, Rabbit, elmenus, `ASM-002`) | `Assumptions_Register.md` row `ASM-002`, `Status: Approved`, cross-checked against `Section_02_Business_Description.md` §2.2 and `Section_10_Risk_Analysis.md` §10.1 for consistency | PASS |

## Misattributed-citation check (Claim #10) — the class of defect this audit was specifically told to stress-test

Section 4's Mechanism 3 "Quantified" paragraph reads: "...against a management-stated ~7%-of-GMV
medium-term benchmark already reached in the UAE for talabat mart specifically (TLB-001 p.21)..."

This single citation is asked to support two distinct facts:
1. The ~7%-of-GMV medium-term benchmark figure itself — **TLB-001 p.21 does support this** ("Global
   benchmark target for AdTech revenue is ~7% of GMV in the medium term (talabat currently well below
   this)," `Facts/Advertising_Facts.md`).
2. That this benchmark has **already been reached in the UAE for talabat mart specifically** — **TLB-001
   p.21 does not support this.** Re-read directly, TLB-001 p.21's own language is the opposite framing
   ("talabat currently well below this"). The UAE-already-reached fact is disclosed only at **TLB-002,
   page 10** ("In the UAE, advertising technology margins have already reached 7% of GMV for talabat
   mart," `Facts/Advertising_Facts.md`) and restated at TLB-014, page 19. TLB-002 p.10 is cited earlier in
   the same Mechanism 3 sub-section (in the "What it is" paragraph, for the "particularly within our
   rapidly growing adtech business" quote) — but the "Quantified" paragraph is a separate paragraph with
   its own citation set, and it does not re-cite TLB-002 p.10 for the UAE-specific claim it makes.

For comparison, `Section_02_Business_Description.md` §2.4 makes the identical claim ("already reached in
the UAE for talabat mart specifically") inside the *same bullet* that already cites TLB-002 p.10 for the
adjacent adtech quote — so Section 2's version resolves correctly by proximity. Section 4 restructured the
same content into two separate paragraphs (What it is / Quantified) and, in doing so, dropped the citation
that actually supports the UAE claim, leaving only a citation (TLB-001 p.21) that supports a different,
adjacent fact. **Fix needed:** add `TLB-002, page 10` (or `TLB-014, page 19`) as an explicit citation for
the "already reached in the UAE for talabat mart specifically" clause — TLB-001 p.21 should remain cited
for the general ~7% benchmark figure only, not be asked to cover both facts.

## Uncited-numeric-claim check (Claim #11)

The same sentence continues: "...current Group AdTech penetration sits at 3.4–3.5% of GMV, implying real
headroom even before considering Egypt's own unmeasured baseline." No citation of any kind is attached to
the 3.4–3.5% figure. Independently re-verified against `Facts/Advertising_Facts.md`: the figure is real
and accurately stated (TLB-002 pp.11/14/19: "3.4%–3.5% of GMV"; TLB-011 p.4: "3.4% Q1 2026"; TLB-014 p.14:
"3.4% of GMV (Q1'26) vs 3.3% (Q1'25)") — but nothing in Section 4's text points a reader to any of these.
This figure does not appear anywhere in `Section_02_Business_Description.md` (Section 2's parallel
AdTech-benefit bullet stops at the ~7% benchmark and does not state the current penetration level), so it
is not inherited from an already-cited source elsewhere in the same document either. **Fix needed:** add
an explicit citation (e.g., `TLB-002, pages 11/14/19` or `TLB-011, page 4`) immediately after the 3.4–3.5%
figure.

## Uncited-superlative-claim check (Claim #3)

Mechanism 1's "Quantified" paragraph closes: "...the only directly quantified financial trail for any AI
mechanism in the entire corpus." No citation is attached. This is a stronger claim than a simple number —
it is an assertion about the *composition of the entire corpus*, which a reader cannot verify from the
citation given (TLB-001 p.23, TLB-002 p.15, which support the USD14mn+→30mn+ figure itself, not the
"only" claim about it). Independently traced, the claim does exist in the vault almost verbatim —
`Topics/Profitability.md` states "the corpus's only directly quantified AI financial-impact figures (USD
14mn+ to USD 30mn+ incremental EBITDA) are profitability, not revenue or GMV, figures" — but Section 4
does not cite `Topics/Profitability.md` or any other source for this specific clause. This is not merely
an imprecise pointer (unlike Claim #9 below): there is no citation token at all next to the claim in the
draft. Worth noting for calibration, not as a substitute for the missing citation: a targeted `Grep` for
"fraud detection" and "GEMs 3.6x" found two other quantified AI-adjacent financial/return figures elsewhere
in the corpus (~USD6M/year fraud-detection savings, TLB-015 p.21; GEMs product ROAS of 3.6x, TLB-015 p.49)
— `Topics/Profitability.md`'s own "only" framing appears to read "financial trail" narrowly as
EBITDA-contribution figures specifically, not ROAS or cost-savings figures, which is a defensible but
non-obvious scoping choice this audit did not independently re-adjudicate (per this skill's own rule that
a citation to a note is not required to re-resolve that note's internal scoping choices). **Fix needed:**
add an explicit citation to `Topics/Profitability.md` for the "only... financial trail" clause, or remove
the superlative if it is not meant to be defended at that level of rigor.

## KPI cross-reference check (K6, K7, K8, K13, K14) — read directly against `KPI_Tree.md`

Every KPI ID Section 4 names was checked against `KPI_Tree.md`'s own node-tracing table, not taken on
Section 4's word:
- **K6** ("orders per active customer per month") — `KPI_Tree.md` traces K6 to `ASM-008`, described as
  "the closest evidence is Group-level multi-vertical 3.8x (food-only) vs. 13.0x (multi-vertical)
  orders/month." Section 4 attributes K6 to Mechanism 1 (recommendation formats) and "the order-frequency
  leg of `ASM-008`." **Accurate** — K6 is genuinely an `ASM-008` node, and order frequency is genuinely
  the leg Mechanism 1's recommendation-quality improvement would move.
- **K7** ("talabat pro adoption rate") — `KPI_Tree.md` traces K7 to `ASM-008`. Section 4 attributes K7 to
  Mechanism 2 (cross-sell timing). **Accurate.**
- **K8** ("12-month customer retention rate") — `KPI_Tree.md` traces K8 to `ASM-008`. Section 4 attributes
  K8 to Mechanism 2. **Accurate.**
- **K13** ("Egypt advertising & listing-fees revenue, as % of Egypt segment revenue") — `KPI_Tree.md`
  traces K13 to `ASM-011`. Section 4 attributes K13 to Mechanism 3 (adtech personalisation). **Accurate.**
- **K14** ("Active/paying advertisers on the Egypt platform") — `KPI_Tree.md` traces K14 to `ASM-011`.
  Section 4 attributes K14 to Mechanism 3. **Accurate.**

**All five KPI cross-references check out exactly against `KPI_Tree.md`'s own node-tracing table.** No
orphan, no misattributed KPI, no KPI attributed to the wrong mechanism found. One non-blocking observation:
the section's own frontmatter provenance note lists the KPI set as "K6, K7, K13, K14, K16" — omitting K8,
even though K8 is correctly named and correctly traced in the body text (Mechanism 2's "so what for the
P&L" bullet). This is a summary-list completeness gap in the provenance note, not a body-text citation
failure — see Limitations.

## DEC-003 consistency check (carried over from Pilot 2's discipline)

Checked every intervention-driven claim in Section 4 against `DEC-003_section2-governing-hypothesis.md`,
read directly:
- **§4.1 (USP)** states the USP "is inherited directly from Section 2's governing hypothesis (`DEC-003`,
  Option 2) — this section does not restate DEC-003, it quantifies the value that hypothesis creates once
  deployed." Re-read against `DEC-003`: Option 2 is indeed "extend talabat's already-stated Group AI
  roadmap into Egypt," and DEC-003's Decision text names this plan's committed intervention, causal claim,
  and scope, explicitly including Section 4 among the sections that "must build on" this option. Accurate.
- **All three mechanisms** (recommendation formats, cross-sell timing/incentive optimisation, adtech
  personalisation) are the exact three items DEC-003's Decision sentence names: "new-form-factor
  recommendations, cross-sell timing/incentive optimisation, and deepened adtech-embedded personalisation."
  No fourth mechanism is introduced, and none is a re-framing of Option 1 (churn-prediction/early-tenure
  intervention) or Option 3 (subscription-uplift-only optimisation) — Mechanism 2 explicitly frames
  subscription/pro offer-timing as one leg of a broader cross-sell/incentive-timing mechanism, not as a
  free-standing subscription-uplift-optimisation intervention, consistent with how `DEC-003`'s own
  Rationale permits citing Option 3's evidence as supporting, not primary.
- **The Risk-reduction paragraph** explicitly frames value creation and risk reduction as "the same
  argument read from two directions" without inventing a fourth, risk-reduction-specific mechanism —
  consistent with DEC-003's scope.

**No drift into DEC-003's unchosen Option 1 or Option 3 framings found anywhere in Section 4.**

## Cross-section accuracy check (the task's central test, alongside the misattributed-citation check above)

**Section 2 / DEC-003 reference — accurate** (see DEC-003 consistency check above).

**Section 9 reference — accurate.** Section 4 §4.3's ROI paragraph states it is "referenced, not
re-derived" and restates exactly three figures already computed in `Section_09_Financial_Plan.md` §9.4:
≈USD13.2m investment, ≈USD53.9m break-even revenue (at Egypt's 24.5% gross margin), ≈10.6% incremental
revenue lift. All three were independently re-read at their source in Section 9 §9.4 and match verbatim —
no new arithmetic is performed in Section 4, and the one qualifying caveat Section 4 adds ("a
frequency-uplift percentage and a revenue-growth percentage are not identical measurements") is itself a
close paraphrase of a caveat Section 9 §9.4 already states, not a new claim. **This half of the
integration test passes cleanly — see the dedicated "one message per exhibit" check below for the full
verification.**

**Section 10 reference — accurate.** Section 4's Risk-reduction paragraph states the three mechanisms'
combined effect is "this plan's answer to the risk Section 10 scores as the single highest-severity item in
the entire risk register: the upside case underperforming the base case (High probability, High impact,
`ASM-008`/`ASM-011`)." Re-read directly against `Section_10_Risk_Analysis.md` §10.2's probability-impact
matrix: "Upside case underperforms base case (intervention effect weaker than Group pattern in Egypt) |
Financial | **High** | **High**" is genuinely the sole High/High cell in the entire 11-row table (confirmed
by direct re-read of every row), and Section 10's own rationale text for that row does cite `ASM-008` and
`ASM-011`'s Low confidence as the underlying driver. Section 4's characterization is accurate and does not
overstate or understate what Section 10 actually says. **This half of the integration test also passes
cleanly.**

## "One message per exhibit" discipline check (§4.3's ROI paragraph)

Checked whether Section 4 genuinely references Section 9's arithmetic rather than re-deriving or restating
it with new computation, per the task's explicit instruction:
- ≈USD13.2m — stated once, tagged `ASM-012`, matching Section 9 §9.2/§9.4 exactly. No new computation.
- ≈USD53.9m — stated as "Section 9 §9.4 already builds the full illustrative sensitivity this section's
  value creation feeds," then simply restated. The underlying division (13.2 ÷ 0.245) is **not** shown or
  repeated in Section 4 — only the Section 9-computed output number appears.
- ≈10.6% — same treatment; the underlying division (53.9 ÷ 509.9) is not repeated in Section 4.
- The one original sentence Section 4 adds ("a materially lower bar than the 20–28% Group-level
  order-frequency uplift Mechanism 2 is modeled on, even though a frequency-uplift percentage and a
  revenue-growth percentage are not identical measurements") is a *comparison* between two already-cited
  figures (10.6% from Section 9, 20-28% from Mechanism 2's own citations), not a new computed figure — no
  new arithmetic operation is performed on either number.

**Section 4 does not re-derive Section 9's ROI arithmetic anywhere — the discipline holds.**

## Anti-pattern check (Group/GCC statistics presented as Egypt-proven) — zero-tolerance item

Checked every Group/GCC-level figure named in the task brief for an explicit inline or paragraph-level
scoping label:
1. **AI/personalisation EBITDA contribution ($14mn+→$30mn+)** — the paragraph is headed "**Quantified
   (Group-level, the only trail in the corpus; not yet Egypt-proven):**" — labeled.
2. **talabat pro 20-28%/26-32% uplift figures** — the paragraph is headed "**Quantified (Group/GCC-level,
   explicitly excluding Egypt at time of measurement — `Strategic/Customer Retention Drivers.md`):**" —
   labeled.
3. **Multi-vertical 13.0x/3.8x and +16pp/+20pp M1 retention** — sit inside the same Group/GCC-labeled
   paragraph as item 2 — labeled by inheritance, consistent with how Section 9's audit accepted
   paragraph-level labeling as sufficient.
4. **AdTech revenue $246m→$323m, +32%; ~7%-of-GMV benchmark; 3.4-3.5% penetration** — the paragraph is
   headed "**Quantified (Group-level):**" — labeled.
5. **§4.3's restated +16pp/+20pp M1 retention** — explicitly re-labeled inline a second time ("Group-level,
   not yet Egypt-proven"), and the restated 20-28% uplift figure is explicitly labeled "Group-level" a
   second time as well.

**No instance found of a Group-level/GCC-level statistic presented as if Egypt-proven anywhere in Section
4.** Every figure the task brief flagged carries an explicit scope label at least once, and the two
statistics repeated in §4.3 are re-labeled, not silently carried forward unlabeled. This is a pass on the
drafting skill's most emphasized anti-pattern, consistent with Sections 2, 3, and 9's own results.

## Limitations acknowledged (not counted as hard failures)

1. **AdTech $246m (FY2024) comparator citation is imprecise.** Section 4 cites `(TLB-002 p.20, TLB-009
   p.4)` for the full "$246m (FY2024) → $323m (FY2025), +32% y/y" claim. Independently re-checked against
   `Facts/Revenue.md`: both cited pages fully support the FY2025 leg (`$323m`, `+32%`), but neither
   explicitly states the FY2024 `$246m` comparator in the consolidated Facts layer — that figure is
   explicitly disclosed at TLB-001 p.27 ("Advertising and listing fees USD 246mn (+27% YoY)"), TLB-003
   p.3, and TLB-029. This exact citation pairing (`TLB-002 p.20, TLB-009 p.4`) is inherited verbatim from
   `Value_Driver_Tree.md` node 3b / `ASM-011`'s own citation, not independently introduced by Section 4 —
   the same class of non-blocking, inherited-imprecision defect Section 9's audit found and accepted
   (Limitation 1 there) for a different figure. **Recommended fix (non-blocking):** add `TLB-001, page 27`
   (or `TLB-003, page 3`) alongside the existing citation the next time this figure is drafted or the
   Forecast Layer is revised, since Section 4 will otherwise keep propagating the same gap Section 9
   already carries.
2. **`ASM-002`, `ASM-008`, `ASM-011`, and `ASM-012`'s "Used in (BP sections)" column in
   `Assumptions_Register.md` does not yet list Section 4**, even though Section 4 now directly cites all
   four rows (ASM-002 for the named competitors; ASM-008 for Mechanisms 1-2/K6-K8; ASM-011 for Mechanism
   3/K13-K14; ASM-012 for the ROI paragraph's ≈USD13.2m figure). All four rows are genuinely `Status:
   Approved` and their Statement fields match how Section 4 uses them — this is a register bookkeeping gap,
   not a citation-trace failure. **Recommended fix (non-blocking):** update the register's "Used in" column
   for these four rows to include "Section 4" now that this draft exists.
3. **Section 4's own frontmatter provenance note lists the KPI set as "K6, K7, K13, K14, K16," omitting
   K8**, even though K8 (12-month retention rate) is correctly named and correctly traced to `ASM-008` in
   the body text (Mechanism 2). The body-text citation is accurate; only the summary list in the
   provenance note is incomplete. **Recommended fix (non-blocking):** add K8 to the provenance note's list.
4. **§4.3's restated "+16pp to +20pp M1 retention" figure does not repeat its `(TLB-019, page 10)` citation
   inline** where it is restated a second time (it was correctly cited on first use in Mechanism 2). The
   figure is unambiguously the same claim restated, not a new one, and remains correctly labeled
   Group-level both times — this is a completeness style point, not a fresh untraceable claim.

## Result

**FAIL.** Three hard failures found, all concentrated in Mechanism 3's "Quantified" paragraph and Mechanism
1's "Quantified" paragraph — exactly the two places in the section where a number-bearing claim's citation
was separated from the "What it is" paragraph that had already correctly cited the same underlying source
elsewhere:
1. The claim that the ~7%-of-GMV AdTech benchmark is "already reached in the UAE for talabat mart
   specifically" is cited to `(TLB-001 p.21)`, which does not support that specific fact (it states the
   opposite — talabat is currently well below the benchmark). The correct citation is `TLB-002, page 10`
   (already used elsewhere in the same sub-section, just not re-cited here).
2. The claim "current Group AdTech penetration sits at 3.4–3.5% of GMV" carries no citation at all.
3. The claim "the only directly quantified financial trail for any AI mechanism in the entire corpus"
   carries no citation at all (independently verified as traceable to `Topics/Profitability.md`, but the
   draft does not point there).

**Notably, the two cross-section integration claims the task brief asked to be checked most carefully — the
Section 9 ROI-arithmetic reference and the Section 10 highest-severity-risk-cell reference — both check out
as fully accurate, as does the DEC-003/Option-2 consistency check and all five KPI cross-references
(K6, K7, K8, K13, K14).** The failure is concentrated in two AdTech-related sentences and one
corpus-composition superlative, all three of which are number- or fact-bearing claims left uncited or
mis-cited when Section 4 restructured Section 2's already-correct §2.4 phrasing into separate "What it is"
/ "Quantified" paragraphs. Four additional non-blocking limitations are carried forward rather than
silently dropped, per this skill's own discipline — none would independently block Stage 10, but none of
them substitute for the three hard failures either. Per this skill's rule and the standing 0%-tolerance
instruction, Section 4 cannot proceed to Stage 10 until all three hard failures are fixed and this audit is
re-run.

## Links
- `.claude/skills/citation-audit/SKILL.md` — the procedure this audit followed (not a vault graph node, per project convention)
- [[Section_04_Value_Proposition|vault/Projects/Business_Plan_Drafts/Section_04_Value_Proposition.md]]
- [[Section_02_Business_Description]] · [[Section_09_Financial_Plan]] · [[Section_10_Risk_Analysis]]
- [[Value_Driver_Tree]] · [[KPI_Tree]] · [[Assumptions_Register]] (ASM-002, ASM-005, ASM-008, ASM-011, ASM-012)
- [[DEC-003_section2-governing-hypothesis]]
- `vault/Knowledge/Strategic/Customer Retention Drivers.md` · `vault/Knowledge/Strategic/AI Opportunities.md` ·
  `vault/Knowledge/Strategic/Revenue Model.md` · `vault/Knowledge/Facts/AI_Facts.md` ·
  `vault/Knowledge/Facts/Advertising_Facts.md` · `vault/Knowledge/Facts/Revenue.md` ·
  `vault/Knowledge/Topics/Customer Journey.md` · `vault/Knowledge/Topics/Profitability.md`
- [[Citation_Audit_Section_09|Citation Audit — Section 9]] · [[Citation_Audit_Section_10|Citation Audit — Section 10]]
- [[Pilot_Validation_Plan]]

---

## Targeted re-audit — fix verification (2026-07-22)

**Scope of this entry:** a narrow, independent re-check of exactly the three hard failures and the two
non-blocking bookkeeping items recorded above, following the top-level session's stated fixes. This is not
a re-run of the full citation audit (KPI cross-references, DEC-003 consistency, cross-section accuracy to
Sections 9/10, and the anti-pattern check were not re-performed — they remain valid from the original run
above). Performed by a fresh, independent `evidence-citation-agent` thread with no memory of the original
audit run; every fix was re-derived from the underlying Facts/Topics layer directly, not accepted on the
strength of the prior audit's own wording or the top-level session's claim that it was fixed.

### Fix 1 — "already reached in the UAE for talabat mart specifically"
Current text in `Section_04_Value_Proposition.md` (Mechanism 3, "Quantified" paragraph): "...against a
management-stated ~7%-of-GMV medium-term benchmark (TLB-001, page 21) already reached in the UAE for
talabat mart specifically (TLB-002, page 10) — current Group AdTech penetration sits at 3.4–3.5% of GMV
(TLB-002, pages 11/14/19)..."

Independently re-read `vault/Knowledge/Facts/Advertising_Facts.md`, TLB-002 entry: "In the UAE, advertising
technology margins have already reached 7% of GMV for talabat mart. (TLB-002, page 10)" — this is a
verbatim match for the claim now attached to that citation. The general ~7% benchmark clause remains
correctly attributed to TLB-001 p.21 ("Global benchmark target for AdTech revenue is ~7% of GMV in the
medium term (talabat currently well below this)"), and the two facts are no longer sharing one citation.
**PASS.**

### Fix 2 — "current Group AdTech penetration sits at 3.4–3.5% of GMV"
Now cited to `(TLB-002, pages 11/14/19)` in the same sentence. Independently re-read
`Facts/Advertising_Facts.md`, TLB-002 entry: "Consolidated AdTech (advertising and listing fees) revenue:
USD 323mn (+32% y/y), 3.4%–3.5% of GMV. (TLB-002, pages 11, 14, 19)" — verbatim match, including the exact
page set. **PASS.**

### Fix 3 — "the only directly quantified financial trail for any AI mechanism in the entire corpus"
Now reads (Mechanism 1, "Quantified" paragraph): "...USD 30mn+ (FY2025) — TLB-001 p.23, TLB-002 p.15 — the
only directly quantified financial trail for any AI mechanism in the entire corpus (`Topics/Profitability.md`)."
Independently re-read `vault/Knowledge/Topics/Profitability.md`: "[[AI]] — the corpus's only directly
quantified AI financial-impact figures (USD 14mn+ to USD 30mn+ incremental EBITDA) are profitability, not
revenue or GMV, figures." This is a substantive match for the superlative now attached to it, and the
citation format (a note reference rather than a `TLB-XXX, page N` pointer) is consistent with how this
section already cites other synthesis notes (e.g., `Strategic/Customer Retention Drivers.md` in Mechanism
2). **PASS.**

### Full-document re-read (checking for new inconsistency, not just the edited sentences)
Read `vault/Projects/Business_Plan_Drafts/Section_04_Value_Proposition.md` in full, start to end. The
frontmatter provenance note (lines 10–17) now lists KPIs as "K6, K7, K8, K13, K14, K16," resolving Limitation
3 (K8 was previously omitted from this list despite being correctly cited in the Mechanism 2 body text).
No other content changed: §4.1 (USP), Mechanism 2's full paragraph, the risk-reduction paragraph, §4.3's
ROI-referencing logic, and the traceability summary table are all identical in substance to the version the
original audit passed on those points. No new uncited claim, no new misattribution, and no new drift from
`DEC-003` was introduced by the edits.

### Assumptions Register spot-check (Limitation 2)
Re-read `vault/Decisions/Assumptions_Register.md` directly:
- `ASM-002` — "Used in (BP sections)" = "Section 3, 4" — **includes Section 4.**
- `ASM-008` — "Used in (BP sections)" = "Section 4, 9, 12, 13" — **includes Section 4.**
- `ASM-011` — "Used in (BP sections)" = "Section 4, 9, 12, 13" — **includes Section 4.**
- `ASM-012` — "Used in (BP sections)" = "Section 4, 9" — **includes Section 4.**

All four rows remain `Status: Approved`, and their Statement/Value fields are unchanged from the original
audit's read of them (no fix touched the substance of any row, only the "Used in" column). **PASS.**

### Result

**PASS.** All three hard failures from the original audit (misattributed UAE/talabat-mart citation, uncited
3.4–3.5%-of-GMV figure, uncited "only directly quantified financial trail" superlative) are independently
confirmed resolved against the underlying Facts/Topics source layer, not merely against the prior audit's
own description of what a fix should look like. Both non-blocking bookkeeping items (Assumptions Register
"Used in" column for ASM-002/ASM-008/ASM-011/ASM-012; the frontmatter KPI list's missing K8) are also
confirmed resolved. No new citation defect was introduced by the edits anywhere else in the document. The
two remaining acknowledged Limitations from the original audit that were *not* in scope for this fix round
(Limitation 1 — the inherited-imprecision AdTech $246m FY2024 comparator citation; Limitation 4 — §4.3's
uncited repeat of the +16pp/+20pp figure) remain open as non-blocking, exactly as the original audit scoped
them, and do not affect this PASS determination. **Section 4 has zero open citation-audit failures and can
proceed to Stage 10/11.**
