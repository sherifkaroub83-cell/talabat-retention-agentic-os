---
type: validation
section: 9
pipeline_stage: 9
date: "2026-07-22"
result: PASS (with 3 acknowledged limitations, 0 hard failures)
---

# Citation Audit — Section 9 (Financial Plan)

## Tooling note (read first)
Performed by a genuinely top-level-invoked `evidence-citation-agent` thread, launched directly from the
top-level session per Pilot 3 of `vault/Architecture/Pilot_Validation_Plan.md` (first real test of the
Forecast Layer, and the first Citation Audit to trace `ASM-###` rows back through their originating
Decision *and* Forecast artifacts, not just the Assumptions Register itself). This session had `Read`,
`Grep`, `Glob`, and `Write` available and no memory of any prior conversation. The procedure below follows
`.claude/skills/citation-audit/SKILL.md` exactly: every numeric or named-fact claim in
`vault/Projects/Business_Plan_Drafts/Section_09_Financial_Plan.md` was walked and traced to either (a) a
direct `(TLB-XXX, page N)` citation verified against the underlying `Facts/`/`Strategic/`/`Topics/`
consolidation layer, or (b) an `ASM-###` row in `vault/Decisions/Assumptions_Register.md` with
`status: Approved` — and, per this section's own instructions, every `ASM-006`–`ASM-012` row was then
additionally re-traced to its originating `DEC-004`/`DEC-005` Decision Log entry or `Value_Driver_Tree.md`/
`Scenarios.md`/`KPI_Tree.md` Forecast artifact, read directly rather than trusted from Section 9's own
summary of them.

## Method
Read directly and cross-checked, not taken on faith from Section 9's own prose: `vault/Forecasts/
Value_Driver_Tree.md`, `vault/Forecasts/Scenarios.md`, `vault/Forecasts/KPI_Tree.md`, `vault/Decisions/
Assumptions_Register.md` (all 12 rows, focused on ASM-006–012), `vault/Decisions/Decision_Log/DEC-003_
section2-governing-hypothesis.md`, `DEC-004_2026-investment-total.md`, `DEC-005_section9-headline-scenario.
md`. Underlying Fact-tier claims were independently re-verified against `vault/Knowledge/Facts/Revenue.md`,
`vault/Knowledge/Facts/Marketplace_Facts.md`, `vault/Knowledge/Facts/_raw/TLB-002_facts.md`, `vault/
Knowledge/Strategic/Cost Structure.md`, `vault/Knowledge/Strategic/Strategic Risks.md`, `vault/Knowledge/
Strategic/Customer Retention Drivers.md`, `vault/Knowledge/Strategic/Revenue Model.md`, `vault/Knowledge/
Topics/Profitability.md`, and `vault/Knowledge/Entities/Countries.md` — plus a direct `Grep` sweep of `vault/
Knowledge/` for the Q1 2026 Adjusted EBITDA margin figures (4.8% vs. 6.3%) and the CARC/GMV percentages to
confirm they are not paraphrase drift. This audit trusts the consolidated Facts/Strategic/Topics layer's own
citation discipline rather than re-deriving every figure from the raw source PDFs, consistent with Sections
2 and 3's audit method — the one exception is the Forecast/Decision layer itself, which the task brief
specifically instructed be read directly rather than trusted, and which this audit did.

## Findings by claim group

| # | Claim group | Trace target | Result |
|---|---|---|---|
| 1 | Egypt FY2025 segment financials (revenue USD509.9m, gross profit USD125.0m, net profit USD44.4m, PBT USD39.7m, delivery cost USD113.13m ≈22% of revenue) | TLB-002 p.111, verified verbatim against `Facts/Marketplace_Facts.md`, `Facts/_raw/TLB-002_facts.md` line 91, `Entities/Countries.md`, `Strategic/Cost Structure.md` (delivery-cost ratio independently recomputed: 113.13/509.9 = 22.19% ≈ 22%) | PASS — see Limitation 1 |
| 2 | Q1 2026 Egypt segment revenue (USD145.3m, +81% YoY) and PBT swing (USD0.5m→USD9.4m, Q1 2025→Q1 2026 restated) | TLB-010 p.20, verified verbatim against `Facts/Revenue.md` and `Topics/Profitability.md` | PASS |
| 3 | 2026 investment-total reconciliation (USD175mn Board-approved = ~USD120mn Everyday App [~USD75mn opex+~USD45mn capex] + ~USD55mn Food-leadership) | `[[DEC-004_2026-investment-total]]`/`ASM-006`, read directly — TLB-020 p.12/p.16 arithmetic (175=120+55) confirmed High confidence, directly disclosed within one source; TLB-019 linkage confirmed Medium confidence, correctly not conflated with the arithmetic itself | PASS |
| 4 | Illustrative Egypt-attributable investment (≈USD13.2m = ~11.0% Egypt revenue-share × ~USD120m Everyday App component) | `[[Value_Driver_Tree]]` node 4a / `ASM-012`, read directly — 509.9/4,651.86 = 10.96% ≈ 11.0% (recomputed, matches); 11.0% × 120 = 13.2 (recomputed, matches); explicitly labeled "illustrative" and "not a disclosed or approved Egypt budget line" in both the register row and the Forecast node | PASS |
| 5 | Value Driver Tree's six Assumption nodes (ASM-007 through ASM-012) — statement, tier, and confidence as characterized in Section 9's §9.1 table and §9.5 register table | `[[Value_Driver_Tree]]` and `Assumptions_Register.md`, both read directly. All six rows confirmed `Status: Approved`. Section 9's characterization of each ("data gap," "DEC-003 intervention channel," "EGP inflation drift," "Group 41%-of-GMV ratio," "DEC-003 adtech channel," "≈11.0% revenue-share proxy") matches the register's Statement field in substance, no paraphrase drift found on any of the six | PASS |
| 6 | FY2026 Group revenue-growth guidance (14-17% cFX) as the base case's growth-logic anchor | `[[Scenarios]]` base case, read directly — TLB-019 p.18, TLB-020 p.14, verified verbatim against `Facts/Revenue.md` (both TLB-019 and TLB-020 rows state "14-17% cFX (USD4.4-4.5bn)") | PASS |
| 7 | Upside case — talabat pro Group/GCC uplift (20-28% order-frequency / 26-32% retention) and AI/personalisation EBITDA contribution (USD14mn+→USD30mn+, FY2024→FY2025) | `[[Scenarios]]` upside case / `ASM-008`, read directly — verified verbatim against `Strategic/Customer Retention Drivers.md` (TLB-023 p.8, TLB-001 p.18, TLB-019 p.11, TLB-015 p.78/p.104 for uplift; TLB-001 p.23, TLB-002 p.15 for EBITDA contribution). Explicitly and correctly labeled "Group/GCC-level evidence that explicitly excludes Egypt at time of measurement" in the same row that cites the figures | PASS — anti-pattern check, see below |
| 8 | Downside case — Q1 2026 Group Adjusted EBITDA margin compression (4.8% vs. 6.3% prior-year) and Egypt FX-depreciation risk quote | `[[Scenarios]]` downside case, read directly — verified verbatim against `Strategic/Strategic Risks.md` and independently via `Grep` against TLB-011 p.2, TLB-020 p.4/p.11/p.14, TLB-014 p.9/p.11/p.16 (all consistent: 4.8% Q1 2026 vs. 6.3% Q1 2025 pro forma); the FX-risk quote ("Egypt FX exposure: YtD depreciation incorporated in guidance...") verified verbatim as TLB-020 p.14, the single most Egypt-specific risk sentence in the corpus | PASS |
| 9 | CARC (Customer Acquisition and Retention Costs) rose from 1.5% of GMV (2023) to 1.6% (2025), composition shifted toward vouchering | `Strategic/Cost Structure.md`, verified verbatim against TLB-001 p.28, TLB-002 p.21; correctly labeled "Group-wide" in Section 9's §9.2, not presented as an Egypt figure (no Egypt-specific CARC exists in the corpus, per `Cost Structure.md`'s own Open Questions) | PASS |
| 10 | Take-rate / implied-GMV proxy — Group 41%-of-GMV ratio applied to Egypt revenue (≈USD1.24bn implied GMV) | `[[Value_Driver_Tree]]` node 3a / `ASM-010`, read directly — 41% figure verified verbatim against `Facts/Revenue.md` (TLB-002 p.20: "41% of GMV (2024: 40%)"); 509.9m ÷ 0.41 ≈ 1.24bn recomputed and matches; explicitly labeled "Group-ratio import... not an Egypt-measured take rate" everywhere it appears | PASS |
| 11 | §9.4 illustrative break-even sensitivity (24.5% gross margin; ≈USD53.9m incremental revenue; ≈10.6% incremental revenue lift) | Net-new arithmetic synthesis, not a corpus citation — see dedicated arithmetic/labeling check below | PASS |
| 12 | KPI Tree summary claim ("16 KPIs, 0 orphans, no unbacked numeric targets") | `[[KPI_Tree]]`, read directly — summary table confirms exactly 16 KPIs (R1-R4, K5-K16); every KPI traces to a named driver-tree node (Root, ASM-007 through ASM-012, or a stated composite of them for K16) — no orphan found; explicit statement that "no numeric target is assigned to any newly-instrumented KPI" confirmed accurate | PASS |
| 13 | Four-revenue-stream monetization framing (commission, delivery/service fees, subscription, advertising) and the ~7%-of-GMV AdTech benchmark pointer to Section 2 §2.4 | `Strategic/Revenue Model.md` for the four-line framing (verified — "talabat's revenue is not four independent fee lines but..."); the ~7%-of-GMV benchmark verified verbatim in the same note (TLB-001 p.21, TLB-002 p.10, "already reached in the UAE for talabat mart specifically"); Section 2 §2.4's actual citation of this figure independently re-confirmed via `Citation_Audit_Section_02.md` Claim #12 | PASS |
| 14 | "Monetized twice" characterization of talabat pro subscription (direct fee + frequency-driven volume effect) | `Strategic/Revenue Model.md` ("subscription is the only line the corpus explicitly frames as having a second, indirect revenue effect: it is 'monetized twice'...") — inherited qualitative characterization, no new number introduced, consistent with the imprecision already flagged (non-blocking) in `Citation_Audit_Section_02.md` Limitation 4 | PASS (imprecision already carried forward from Section 2, not re-introduced here) |
| 15 | DEC-003 governing-hypothesis consistency check (§9.1 order-frequency/advertising-penetration nodes; §9.3 upside case; §9.6 monetization strategy) | `[[DEC-003_section2-governing-hypothesis]]`, read directly | PASS — dedicated check below |
| 16 | DEC-005 headline-scenario framing (base = baseline, upside = return/delta, downside = named risk) | `[[DEC-005_section9-headline-scenario]]`, read directly | PASS — Section 9's §9.3 table and surrounding prose implement DEC-005's Decision exactly: base labeled "headline financial baseline," upside labeled "the intervention's projected return, not a competing central estimate," downside labeled "a named risk case, not equally likely to the base case" |

## Arithmetic and labeling check — §9.4 illustrative break-even sensitivity

Independently recomputed, not just re-read:
- **24.5% gross margin:** 125.0 ÷ 509.9 = 0.24514 → 24.5%. **Correct.** (Both inputs are Fact-tier, TLB-002 p.111 — this ratio is a direct derived-Fact computation, the same treatment `KPI_Tree.md` gives it as KPI R2, "Baseline-exists" — not itself a synthetic/illustrative figure, only the sensitivity built *from* it is.)
- **≈USD53.9m incremental revenue:** 13.2 ÷ 0.245 = 53.878 → 53.9. **Correct.**
- **≈10.6% incremental revenue lift:** 53.9 ÷ 509.9 = 0.1057 → 10.6%. **Correct.**

All three figures check out arithmetically. Labeling consistency was checked at every occurrence, not just once:
- §9.4's opening line frames the question narrowly ("how much incremental gross profit would the ≈USD13.2m
  **illustrative** Egypt investment... need to generate to pay for itself").
- The sensitivity block itself is headed **"Illustrative sensitivity (labeled synthetic, built only from
  Approved-tier components — not a disclosed talabat figure)"** — both figures (53.9m, 10.6%) sit inside
  this explicitly-labeled block.
- The paragraph immediately following restates: "This is presented as an illustrative sensitivity anchor for
  discussion, not a modeled forecast with a break-even date."
- The Traceability summary table (bottom of the section) restates it a fourth time: "Break-even/sensitivity
  illustration | Net-new synthesis (§9.4)... | Labeled illustrative, not a disclosed figure."

**No instance found of the 53.9m or 10.6% figures appearing without their illustrative/synthetic label
attached or immediately governing context.** The upstream ≈USD13.2m investment figure that feeds this
sensitivity is similarly labeled every one of the four times it appears in the section (Answer-stated-first,
§9.2, §9.4, §9.6) — checked individually, no drift toward presenting it as an approved or disclosed budget
line in any of the four occurrences.

## DEC-003 consistency check (carried over from Pilot 2's discipline)

Checked every intervention-driven claim named in the task brief:
- **§9.1** — the Value Driver Tree table explicitly states "Every intervention-driven node (order
  frequency, advertising penetration) traces strictly to DEC-003's confirmed mechanism — extending
  talabat's already-announced Group AI roadmap into Egypt — not to a churn-prediction build or a
  subscription-uplift-only framing (DEC-003's rejected Options 1 and 3)." Re-read against `DEC-003`
  directly: this is an accurate characterization — Option 1 was churn-prediction/early-tenure intervention,
  Option 3 was subscription-uplift-only optimisation, and neither is what §9.1's nodes describe.
- **§9.3** — the upside case explicitly states "This scenario is explicitly the DEC-003 Option 2 mechanism
  (recommendation quality, cross-sell timing, adtech personalisation) — it is NOT a churn-prediction outcome
  and NOT a subscription-uplift-only framing." Matches `DEC-003`'s Decision text verbatim in substance.
- **§9.6** — monetization strategy lists three pathways: (a) protecting commission/delivery-fee revenue
  against "churn to competition" (the *impact* DEC-003's roadmap-extension targets, per DEC-003's own
  Decision sentence — not a re-framing as a churn-prediction *mechanism*); (b) accelerating talabat pro
  subscription conversion, framed as a beneficiary of the AI roadmap's cross-sell-timing capability, not as
  a standalone subscription-uplift-optimisation intervention; (c) adtech personalisation. None of the three
  substitutes DEC-003's chosen mechanism for Option 1 or Option 3 — (b) sits closest to the line since it
  names subscription conversion specifically, but DEC-003's own Rationale explicitly permits citing the
  Option 3 evidence "as supporting or contextual evidence... but not as the plan's primary recommended
  mechanism," and §9.6 does exactly that (subscription conversion is one of three monetization *channels*
  the AI-roadmap-extension investment flows through, not restated as the intervention itself).

**No drift into DEC-003's unchosen Option 1 (churn-prediction/win-back) or Option 3
(subscription-uplift-only) framings found.**

## Anti-pattern check (Group/GCC statistics presented as Egypt-proven)

Checked specifically, per this skill's named zero-tolerance item, for every figure the task brief flagged:
1. **talabat pro's 20-28%/26-32% uplift figures** — appear in §9.3's upside-case row, immediately paired
   with "Low, always — an unproven intervention, and every quantified input is Group/GCC evidence that
   explicitly excludes Egypt at time of measurement," and again in §9.4 as "the upside case's own
   Group-level evidence." Labeled every occurrence.
2. **AI/personalisation EBITDA contribution (USD14mn+→USD30mn+)** — appears only in §9.3's upside-case row,
   under the same "Group/GCC evidence... excludes Egypt" confidence explanation covering the whole row.
   Labeled.
3. **41%-of-GMV ratio** — appears once, in §9.1's driver-tree table, explicitly worded "Group 41%-of-GMV
   ratio applied to Egypt revenue, illustrative only." Labeled.
4. **CARC percentages (1.5%→1.6% of GMV)** — appears once, in §9.2, explicitly worded "Group-wide, CARC...
   rose from..." Labeled.

**No instance found of a Group-level/GCC-level statistic presented as if Egypt-proven anywhere in Section
9.** This is a pass on the drafting skill's most emphasized anti-pattern, consistent with Sections 2 and 3's
own results.

## Confidence-tier consistency check

Compared every confidence label in Section 9's §9.1 and §9.5 tables against the Assumptions Register and
`Value_Driver_Tree.md`/`Scenarios.md` directly: ASM-007 through ASM-012 are all stated Low in Section 9,
matching the register exactly (no silent upgrade). ASM-006 is stated "High (decomposition) / Medium (TLB-019
linkage)" in §9.5, matching the register's split-confidence field exactly (not flattened to a single "High").
The root Fact node's own confidence is correctly stated as capped at Medium for any trend-continuation
reading ("No node in the tree exceeds Medium confidence anywhere, and that ceiling belongs to the root
node's own trend-continuation reading... not to any of the six Assumption nodes, all of which sit at Low"),
matching `Value_Driver_Tree.md`'s own calibration language verbatim in substance. The base case (Medium),
upside case (Low), and downside case (Medium) confidence levels in §9.3's table match `Scenarios.md` exactly.
**No silent confidence upgrade found anywhere in Section 9.**

## Limitations acknowledged (not failures)

1. **Claim #1's companion Fact figures** (gross profit USD125.0m, net profit USD44.4m, PBT USD39.7m) are
   tagged `[FACT → Facts/Revenue.md]` in both `Value_Driver_Tree.md` (which Section 9 inherits this citation
   pointer from) and Section 9's own §9.1/§9.4 text. `Facts/Revenue.md` itself, re-read directly, states only
   Egypt's revenue-by-country figure at TLB-002 p.111 — it does not itself carry the gross profit/net
   profit/PBT figures. Those figures are correctly disclosed at TLB-002 p.111 (independently re-verified
   against `Facts/Marketplace_Facts.md`, `Facts/_raw/TLB-002_facts.md` line 91, and `Entities/Countries.md`,
   all of which state the identical figures), so the underlying `(TLB-002, page 111)` citation is accurate
   and traceable — only the specific vault-filename pointer ("Facts/Revenue.md") is imprecise; the correct
   filename is `Facts/Marketplace_Facts.md` or `Entities/Countries.md`. This imprecision originates in
   `Value_Driver_Tree.md` itself (the Forecast Layer's first live build) and was faithfully, not
   independently, inherited by Section 9. Not a citation failure — the trace resolves correctly elsewhere in
   the vault — but recommended fix (non-blocking): correct the filename pointer in `Value_Driver_Tree.md`
   the next time the Forecast Layer is revised, since Section 9 will otherwise keep propagating it.
2. **DEC-004 and DEC-005 were both marked `approved` by `decision-steward` without a user-run
   `AskUserQuestion` escalation**, each on the agent's own documented-discretion judgment (data-reconciliation
   and data-presentation calls, respectively, distinguished explicitly in both files from DEC-003's
   strategic-framing call, which *was* escalated). This audit verified both files' *internal* reasoning is
   consistent and complete (Options considered, Rationale, Approval sections all present and non-contradictory)
   and that ASM-006's register row matches DEC-004 exactly — but per this skill's own scope, verifying
   citation traceability is not the same as re-adjudicating whether `decision-steward`'s discretion was
   correctly self-assessed on these two calls. That governance question is explicitly named as escalable to
   a later `DEC-006`-or-later supersession in DEC-005's own Approval section if the top-level session or user
   judges otherwise — flagged forward to Stage 11 (`qa-review-agent`'s McKinsey Lens review) rather than
   resolved here, consistent with how `Citation_Audit_Section_02.md` treated DEC-003's self-attestation as a
   trust boundary rather than something this audit re-adjudicates.
3. **Section 9's §9.6 monetization-strategy bullet (b)** — "accelerating talabat pro subscription
   conversion" — sits closer to DEC-003's rejected Option 3 framing than any other sentence in the section,
   though on direct comparison against DEC-003's Rationale (which explicitly permits citing Option 3's
   evidence as supporting/contextual, not primary) it does not cross the line into re-presenting
   subscription-uplift-only as the plan's mechanism. Flagged as the single closest call in the section, not a
   failure — recommended fix (non-blocking): if this section is revised, consider re-wording (b) to more
   explicitly tie subscription conversion back to "cross-sell timing/incentive optimisation" (DEC-003's own
   phrase) rather than naming it as a free-standing monetization pathway.

## Result

**PASS.** Zero hard citation failures — no untraceable numeric or named-fact claim found; no
`Proposed`-status Assumption cited (ASM-006 through ASM-012 are all genuinely `Approved`, verified against
the register directly, not taken on Section 9's word); no Group-level/GCC-level statistic misrepresented as
Egypt-specific; the §9.4 illustrative break-even sensitivity's arithmetic is correct (24.5% / ≈USD53.9m /
≈10.6%, all independently recomputed) and remains explicitly labeled illustrative/synthetic at every one of
its occurrences, never presented as a disclosed or talabat-modeled figure; the DEC-003 governing-hypothesis
mechanism is preserved without drift into its rejected Option 1 or Option 3 framings anywhere in the section;
no confidence level is silently upgraded anywhere. Three acknowledged limitations are carried forward rather
than silently dropped, per this skill's own discipline — none of them block Section 9 from proceeding to
Stage 10.

## Links
- `.claude/skills/citation-audit/SKILL.md` — the procedure this audit followed (not a vault graph node, per project convention)
- [[Section_09_Financial_Plan|vault/Projects/Business_Plan_Drafts/Section_09_Financial_Plan.md]]
- [[Value_Driver_Tree]] · [[Scenarios]] · [[KPI_Tree]]
- [[DEC-003_section2-governing-hypothesis]] · [[DEC-004_2026-investment-total]] · [[DEC-005_section9-headline-scenario]]
- [[Assumptions_Register]] (ASM-006 through ASM-012)
- [[Citation_Audit_Section_02|Citation Audit — Section 2]] · [[Citation_Audit_Section_03|Citation Audit — Section 3]]
- [[Pilot_Validation_Plan]]
