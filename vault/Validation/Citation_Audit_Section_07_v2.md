---
type: validation
section: 7 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_07_Marketing_and_Sales_Strategy.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md)
run_date: 2026-07-23
auditor: top-level session, acting in the evidence-citation-agent role (Tooling note: no `Agent` tool
  available this session — see the section draft's own Tooling note and `bp-orchestrator.md`'s "Known
  runtime constraint")
status: OPEN → PASS (self-verified, 2026-07-23) — 0 issues found in-session; independent Pass 2 re-check
  still required
---

# Citation Audit — Section 7 (v2, Group-wide capital-allocation draft)

No prior Section 7 draft exists (old-problem or new-problem) — this is the first citation audit run
against this section.

## Method
Walked the section sentence by sentence; every number or named-fact claim traced to either (a) a direct
`(DocID, page N)` Facts/Sources/Topics citation, or (b) an `ASM-###` row with `status: Approved`. Numbers
that are explicitly flagged as synthetic/illustrative were checked separately for the specific rule this
audit exists to enforce for this section: that every synthetic figure carries its bold, explicit
`[SYNTHETIC — ...]` label at first appearance and is never presented adjacent to, or in the same table row
type as, a corpus-derived figure without visibly distinguishing the two. Cross-checked every citation
against the actual source note/document content gathered this session (`Topics/Customer Journey.md`,
`Topics/Promotions.md`, `Strategic/Customer Retention Drivers.md`, `Topics/Food Leadership.md`,
`Topics/FinTech.md`, `Topics/Competition.md`, `Topics/Multi-Verticality.md`, `Topics/Everyday App.md`,
`vault/Decisions/Investment_Options/OPT-002...md`, `OPT-003...md`, `vault/Decisions/Assumptions_Register.md`),
not just presence of a citation string. Checked geography tagging against
`vault/Architecture/Geographic_Evidence_Rules.md` for every numeric claim.

## Pass/Fail Table

| # | Claim (location) | Cited to | Verdict | Note |
|---|---|---|---|---|
| 1 | "Rather than matching competitor discounts and vouchers... invest in the consumer value proposition" (§7.1, §7.3) | TLB-020, p.16 | PASS | Verified verbatim against `Topics/Food Leadership.md`'s Overview: "Rather than matching competitor discounts or vouchers, management states the investment goes toward customer value proposition (CVP)... (TLB-020, page 16)." Identical wording independently corroborated in `Strategic/Customer Retention Drivers.md`. |
| 2 | "Retain high and medium value customers against partial or complete churn to competition" (§7.1) | TLB-002, p.14 | PASS | Verified verbatim against `Strategic/Customer Retention Drivers.md`: "'retain high and medium value customers against partial or complete churn to competition' (TLB-002, page 14)." |
| 3 | Non-high-value M1 retention -4% y/y, UAE/Kuwait/Qatar (§7.1) | TLB-019, p.9 | PASS | Verified against `Topics/Food Leadership.md` Open Questions and `OPT-003...md` Rationale — identical figure and page, both independently citing the same fact. |
| 4 | "A more competitive environment (new entrants and incumbents)" FY2026 headwind (§7.1) | TLB-019, p.18 | PASS | Verified against `Topics/Competition.md`: "FY2026 guidance cites 'a more competitive environment (new entrants and incumbents)' as a named headwind (TLB-019, page 18)." |
| 5 | Brand narrative arc, three phases (§7.1) | TLB-016, p.7 | PASS | Verified against `Topics/Customer Journey.md` and `Topics/Everyday App.md`, both citing identical wording and page. |
| 6 | CARC USD89mn (1.5% GMV, 2023) → USD155mn (1.6% GMV, 2025); USD89mn 2025 vouchering (§7.1, §7.2) | TLB-001, p.28; TLB-002, p.21 | PASS | Verified against `Topics/Promotions.md`: "talabat-funded vouchering is tracked... USD 89mn in 2025 vouchering spend, part of a total CARC of USD 155mn / 1.6% of GMV (TLB-002, page 21)." 2023 baseline figure independently verified in Section 6's own citation audit (item 17), same source pages. |
| 7 | Partner-funded savings 7% of GMV (Q1 2026, all-time high); >AED1,567.7mn trailing 12 months (§7.2, §7.3) | TLB-020, p.7; TLB-023, p.6 | PASS | Verified verbatim against `Topics/Promotions.md`: "Partner-funded savings... reached an 'all-time high of 7% of GMV' in Q1 2026 (TLB-020, page 7)... totaled more than AED 1,567.7 million over a 12-month period (TLB-023, page 6)." |
| 8 | Customer journey: Food → Grocery & Retail → talabat pro sign-up (§7.2) | TLB-013, p.6 | PASS | Verified verbatim against `Topics/Customer Journey.md` Overview. |
| 9 | ~6-order AI-personalisation threshold (§7.2) | TLB-002, p.15 | PASS | Verified verbatim against `Topics/Customer Journey.md`: "it takes roughly six orders for talabat's machine-learning models to build a personalized profile... (TLB-002, page 15)." |
| 10 | Multi-vertical vs. food-only frequency (13.0 vs. 3.8/month, July 2024) (§7.2) | TLB-012, p.9; TLB-013, p.6 | PASS | Verified against `Topics/Multi-Verticality.md` verbatim, including the July 2024 dating. |
| 11 | Multi-vertical GMV share 68%→73%→76% (Dec'24→Dec'25→Mar'26) (§7.2) | TLB-019, p.7; TLB-020, p.8 | PASS | Verified against `Topics/Multi-Verticality.md` verbatim. |
| 12 | No disclosed quantified journey/funnel conversion model anywhere in corpus (§7.2, boxed gap statement) | `Topics/Customer Journey.md` Open Questions | PASS | Verified: "The vault does not disclose a formal, quantified journey/funnel model... the sequence is stated qualitatively, not as a measured conversion funnel." Directly supports the section's gap-handling. |
| 13 | Illustrative acquisition-funnel conversion percentages (§7.2 table) | Explicitly labeled `[SYNTHETIC]`, no corpus citation given | PASS (correctly labeled, not a citation failure) | Confirmed: every numeric cell in the funnel table carries an inline `[SYNTHETIC — illustrative estimate, not derived from talabat's disclosed data]` tag or equivalent, and the boxed paragraph immediately above the table states explicitly "No number below in this box is a talabat-disclosed or corpus-derived figure." This is the correct handling per the skill's own instruction ("use clearly-labeled synthetic/estimated data... never blend an estimate with a disclosed figure silently") — not a citation failure, because no citation is claimed. Checked specifically that these figures are **not** registered as `ASM-` rows in `Assumptions_Register.md` (confirmed — no `ASM-034` or later row exists for a funnel-conversion figure) and are explicitly stated as excluded from Section 9's financial case. |
| 14 | talabat PostPaid GCC-only through CMD 2024; Egypt first non-GCC expansion (PostPaid + CIB card) (§7.2) | TLB-015, pp.25,74,103; TLB-002, pp.14,19 | PASS | Verified against `Topics/FinTech.md` verbatim, including the "subject to regulatory approvals" quote and "first FinTech expansion outside the UAE" quote. |
| 15 | talabat pro uplift figures (20-28% frequency; 26-32% retention; 136% gross-profit-per-customer) (§7.4) | TLB-001 p.18; TLB-015 pp.78,104; TLB-019 p.11 | PASS | Verified against `Strategic/Customer Retention Drivers.md` verbatim, including the GCC+Jordan-only scoping and explicit Egypt/Iraq exclusion. |
| 16 | Mono- vs. multi-vertical M1 retention delta (+16pp/+20pp) (§7.4) | TLB-019, p.10 | PASS | Verified against `Strategic/Customer Retention Drivers.md` verbatim. |
| 17 | talabat Rewards 18% adoption, >15% frequency uplift within 30 days, "reducing churn" (§7.4) | TLB-026, p.134; TLB-015, p.79 | PASS | Verified against `Topics/Promotions.md` and `Strategic/Customer Retention Drivers.md`, both citing identical figures and pages. |
| 18 | talabat PostPaid 14% frequency increase, "accretive to... retention" (§7.4) | TLB-001, pp.9,18 | PASS | Verified against `Topics/FinTech.md` and `Strategic/Customer Retention Drivers.md`, both citing identical figures and pages. |
| 19 | Family Plan >60% retention premium (solo vs. 4-member) (§7.4) | TLB-018, p.6 | PASS | Verified against `Strategic/Customer Retention Drivers.md` and, independently, Section 6's own citation audit (item 8) for the identical figure and page. |
| 20 | ADCB co-branded card (UAE) — cashback, free delivery, tailored pro (§7.3) | TLB-001, pp.9,13 | PASS | Verified against `Topics/Promotions.md`: "the co-branded ADCB credit card (cashback and free delivery, bundling a 'tailored version' of talabat pro, TLB-001, page 13)." |
| 21 | AI/personalisation EBITDA contribution USD14mn+ (FY24) → USD30mn+ (FY25) (§7.4) | TLB-001, p.23; TLB-002, p.15 | PASS | Verified against `Strategic/Customer Retention Drivers.md` verbatim; identical figure independently corroborated in `Problem_Charter.md`'s own "Why this problem matters" section. |
| 22 | ASM-016 (Group/GCC+Jordan uplift figures applied to Egypt/non-GCC by inference) (§7.4) | `Assumptions_Register.md` ASM-016 | PASS | Verified row 51 directly: `status: Approved`, confidence Low, "Used in" column includes Section 4, 9, 12, 13 — Section 7 is a new citation of an already-Approved row, consistent with the register's rule that any section may cite an Approved assumption. |
| 23 | OPT-002 / OPT-003 rationale and dependencies, including the shared Partner-funded-economics dependency (§7.1, §7.3, §7.5) | `vault/Decisions/Investment_Options/OPT-002...md`, `OPT-003...md`; `DEC-009` | PASS | Verified against both `OPT-` records directly, including the "Dependencies" section language ("Shares Partner-funded free-delivery economics capacity with OPT-003...") reproduced accurately. `DEC-009`'s tiering language ("Tier 2... Tier 3... OPT-002... OPT-003") is accurately summarized, not overstated (the section does not claim either option is Tier 1). |
| 24 | talabat's AI/ML stack inherited from Delivery Hero, not a separate vendor partnership (§7.3) | `Topics/AI.md`; `Entities/Technology_Platforms.md`; `Section_02_Business_Description.md` §2.5 | PASS | Verified against Section 2's own already-drafted text, which states the identical framing; no new fact introduced, correctly cross-referenced rather than re-cited independently. |
| 25 | §7.6 cross-section consistency claims (Section 6 CARC/voucher figures; Section 4 mechanism ranking; DEC-008/DEC-009 non-implication) | `Section_06_Business_Model_and_Revenue_Streams.md`; `Strategic/Customer Retention Drivers.md` | PASS | Verified: Section 6 §6.1 cites the identical USD(120)mn FY2025 vouchers-and-discounts contra-revenue figure and the identical CARC trajectory (§6.4) — no numeric conflict. No `ASM-018` or `ASM-029`-`033` figure appears anywhere in Section 7, so the claimed non-implication of `DEC-008`/`DEC-009`'s placement restrictions is correct. |

## Geographic Evidence Rules check

**Clean — no fix required this session.** Every numeric claim in the section carries an explicit geography
tag, consistent with `vault/Architecture/Geographic_Evidence_Rules.md`:
- Group-level figures (CARC, journey sequence, 6-order threshold, multi-vertical frequency/GMV share,
  Rewards/PostPaid/Family Plan/ADCB uplift figures, AI/personalisation EBITDA contribution) are
  consistently tagged `Group`.
- The GCC + Jordan-only scoping of talabat pro's uplift figures, and its explicit Egypt/Iraq exclusion, is
  stated every time the figures are used (§7.4), not just once — including the explicit `ASM-016`
  `inferred-applicability` framing when those figures are extended to Egypt/Iraq via `OPT-002`.
- The UAE/Kuwait/Qatar competitive-pressure evidence is correctly tagged `market-comparison` and never
  generalized to Egypt or non-GCC without the explicit caution in §7.1 ("Caution — market applicability").
- The Egypt-standalone FinTech precedent (PostPaid + CIB card) is correctly tagged `Egypt standalone,
  FY2025` and not conflated with the pre-launch GCC-only baseline, which is separately tagged `GCC`.
- The country-specific ADCB card (UAE) is correctly scoped and not generalized to other markets.
- "MENA" is never used anywhere in the section as a stand-in for the 8-market footprint.
- No pre/post-FY2025 non-GCC figure is cited in this section at all — not implicated.
- **The synthetic funnel figures are correctly exempted from geography tagging** (they carry no
  geography claim at all — they are explicitly not corpus data of any geography) and are instead
  distinguished by the `[SYNTHETIC]` label, which is the correct treatment for this data category (the
  Geographic Evidence Rules govern how *disclosed/inferred* evidence is geography-tagged; they do not
  themselves govern synthetic/illustrative data, which `CLAUDE.md`'s separate standing instruction
  covers, and which this audit checked under item #13 above).

## Summary

- **25 claims/rows checked.**
- **25 pass**, 0 found-and-fixed, 0 open.
- **0 missing-citation failures** and **0 not-yet-approved-Assumption dependencies** — the one Assumption
  row this section relies on (`ASM-016`) is `status: Approved`.
- **0 same-tier evidence conflicts found** (unlike Section 6's TLB-019 discrepancy) — no competing figure
  for any claim in this section was found during assembly.
- **The section's single genuine evidence gap (funnel-stage conversion data) is handled correctly**: every
  synthetic figure is explicitly labeled, kept out of the Assumptions Register, and explicitly excluded
  from Section 9's financial case — confirmed by direct inspection of both the section text and
  `Assumptions_Register.md`.

## Verdict
**OPEN → PASS (self-verified, 2026-07-23).** No citation failure, no missing geography tag, and no
mislabeled or blended synthetic figure found in this audit. This is a self-check, not an independent Pass
2 re-verification — per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline, a genuinely
independent citation-audit re-check (a fresh `evidence-citation-agent` thread) is still required before
Section 7 can be marked citation-verified/✅ Done.
