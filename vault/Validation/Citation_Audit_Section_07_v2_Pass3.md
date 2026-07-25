---
type: validation
section: 7 (v2 — Group-wide capital-allocation draft) — INDEPENDENT PASS 3
target: vault/Projects/Business_Plan_Drafts_v2/Section_07_Marketing_and_Sales_Strategy.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md) — Pass 3
run_date: 2026-07-24
auditor: independent Pass 3 re-verification agent (separate invocation from both the drafting session
  and the Pass 2 session; no memory of either — treated as a fresh, skeptical audit of the CURRENT file
  content, not a check of a diff)
status: PASS WITH ONE MODERATE FIX NEEDED (repeated-defect DEC-009 characterization confirmed correctly
  fixed; one new, smaller cross-section-check defect found, not previously flagged)
---

# Citation Audit — Section 7 (v2), Independent Pass 3

Companion to (does not replace) `Citation_Audit_Section_07_v2.md` (Pass 1) and
`Citation_Audit_Section_07_v2_Pass2.md` (Pass 2). This Pass 3 was specifically commissioned to
independently re-verify whether Pass 2's reported fix to §7.5 (the DEC-009 "OPT-003 needs to pilot"
repeated-defect pattern, also found and fixed in Sections 12 and 14) actually holds up, and to run a
completely fresh trace of every other numeric/named-fact claim in the section as it exists today.

## Method

Read fresh, line by line: the current `Section_07_Marketing_and_Sales_Strategy.md`, both prior audit
reports, `DEC-009_investment-options-ranking-and-allocation-priority.md` in full (Comparison framework,
Tiering, Sub-decisions, Escalation prompt, and — critically — the **Decision** section itself),
`Investment_Options_Register.md`, `OPT-002...md` and `OPT-003...md` in full, `Geographic_Evidence_Rules.md`,
`Value_Driver_Tree_v2.md` (all 45 nodes, focusing on N-10, N-11, N-13), `Assumptions_Register.md`
(confirmed `ASM-016`, `ASM-024` status), `Strategic/Customer Retention Drivers.md`,
`Topics/Customer Journey.md`, `Topics/Promotions.md`, `Topics/Multi-Verticality.md`, `Topics/FinTech.md`,
`Topics/Food Leadership.md`, `Topics/Competition.md`, `Topics/AI.md`, `Entities/Technology_Platforms.md`,
`Facts/Retention.md`, `Facts/Customer_Growth.md`, `Facts/Competition_Facts.md`, and the relevant portions
of `Section_06_Business_Model_and_Revenue_Streams.md` and `Section_12_Implementation_Plan.md` cited by
Section 7's own cross-section check (§7.6).

## Part 1 — DEC-009 characterization (the specific repeated-defect focus of this pass)

**DEC-009's actual resolved text, read directly (lines 148-169 of the Decision Log entry):**
> "1. **Funding sequence: YES, commit to one — narratively...** OPT-002 and OPT-003 as the near-term,
> low-risk/high-fit priority; OPT-001 and OPT-005 continue-at-pace; OPT-004 as the longer-horizon build.
> This is the plan's actual recommendation, not a footnote."

This resolved Decision text **supersedes** DEC-009's own earlier, purely descriptive 11-criterion
"Tiering" section (which separately places OPT-002 in "Tier 3 — ...best suited to piloting rather than
scale commitment" and OPT-003 in "Tier 2 — strong, narrowly-scoped") for sequencing purposes — the
Decision section itself frames the tiering as substance feeding the resolved sequence, not a competing,
still-live characterization.

**OPT-003's own record, read directly:** "Pilot recommendation: **Not a pilot** — this is an
already-evidenced, already-operating mechanism (subscription/incentive infrastructure exists). Recommend
a targeted budget weighting toward these three markets within the existing bucket."

**OPT-002's own record, read directly:** "Pilot recommendation: **Strong pilot candidate**... Recommend a
bounded 2-quarter pilot in Egypt specifically... before any Iraq scale-up decision."

**Current §7.5 text, checked word-for-word against the above:** §7.5 states that `DEC-009`'s "resolved
funding-sequence recommendation (not merely its earlier, purely descriptive 11-criterion tiering) names
both jointly as the near-term priority pair," that `OPT-002` is "best suited to a bounded pilot," and that
`OPT-003` is "an already-evidenced, already-operating mechanism that DEC-009 and OPT-003's own option
record recommend funding now... explicitly 'not a pilot.'" This is an exact, correct match to DEC-009's
Decision-section text and to each option's own record — **not** a restatement of the superseded Tier 2/3
framing. The only remaining "Tier 2/3" text anywhere in the file is in the dated 2026-07-24 addendum note
at the top of the document, which correctly narrates the *history* of the defect and its fix — it does not
restate the error as current fact.

**Cross-checked against §7.2** (a related claim): §7.2 states OPT-002's Egypt-first sequencing is
"consistent with `OPT-002`'s own recommended pilot design" — matches OPT-002's record exactly (bounded
2-quarter Egypt pilot before Iraq).

**Cross-checked against Section 12** (the section whose Horizon 1 placement §7.5 references): read
`Section_12_Implementation_Plan.md`'s Horizon 1 section directly — it places `OPT-002` as "**Pilot**" and
`OPT-003` as "**Fund now, within the existing bucket**... **not a pilot**," both within Horizon 1 (0-6
months), matching §7.5's characterization exactly ("Section 12's Three Horizons framing places both in
Horizon 1 on this basis (one piloted, one funded directly)").

**Verdict on the specific repeated-defect question: the fix holds. §7.5's current DEC-009 characterization
is correct** — independently re-derived from DEC-009's own Decision-section text, OPT-002's and OPT-003's
own records, and cross-checked against Section 12's implementation of the same resolution. This is not
merely trusting the Pass 2 fix note's summary; it is re-derived from the primary DEC-009/OPT-002/OPT-003
source text directly, per this pass's brief.

## Part 2 — Full fresh trace of every other numeric/named-fact claim

| # | Claim (location) | Cited to | Independent re-check | Verdict |
|---|---|---|---|---|
| 1 | "Rather than matching competitor discounts and vouchers... invest in the CVP" (§7.1) | TLB-020, p.16 | Matches `Topics/Food Leadership.md`, `Topics/Competition.md` verbatim | PASS |
| 2 | "Retain high and medium value customers against partial or complete churn" (§7.1) | TLB-002, p.14 | Matches `Facts/Retention.md` TLB-002 entry verbatim | PASS |
| 3 | Non-high-value M1 retention -4% y/y (UAE, Kuwait, Qatar) (§7.1, §7.4) | TLB-019, p.9 | Matches `OPT-003...md` and `Topics/Competition.md`/`Food Leadership.md` | PASS |
| 4 | "A more competitive environment (new entrants and incumbents)" FY2026 headwind (§7.1) | TLB-019, p.18 | Verbatim single-source quote confirmed in `Facts/Competition_Facts.md` line 107 — not a merge of two different documents' language, despite reading initially like one | PASS |
| 5 | Brand narrative arc 2016→2021→2025 (§7.1) | TLB-016, p.7 | Matches `Topics/Customer Journey.md` verbatim | PASS |
| 6 | CARC USD89mn(2023, 1.5% GMV)→USD155mn(2025, 1.6% GMV); USD89mn 2025 vouchering (§7.1, §7.2) | TLB-001 p.28; TLB-002 p.21 | Matches `Facts/Retention.md` (155mn/1.6%, "combines...vouchering (USD89mn) and customer marketing (USD67mn)") and `Facts/_raw/TLB-001_facts.md` (2023: 89mn/1.5%) exactly. Arithmetic checked: 89/1.5%≈5.93bn (2023 GMV, consistent with disclosed 2023 segment GMV ≈6.06bn); 155/1.6%≈9.69bn (consistent with disclosed FY2025 Group GMV ≈9.5bn) | PASS |
| 7 | Partner-funded savings 7% of GMV Q1 2026, all-time high; >AED1,567.7mn trailing 12mo (§7.2, §7.3) | TLB-020 p.7; TLB-023 p.6 | Matches `Topics/Promotions.md` verbatim | PASS |
| 8 | Customer journey Food→G&R→pro sign-up; ~6-order personalisation threshold (§7.2) | TLB-013 p.6; TLB-002 p.15 | Matches `Topics/Customer Journey.md` verbatim | PASS |
| 9 | Multi-vertical vs. food-only frequency (13.0 vs. 3.8/month, July 2024) (§7.2) | TLB-012 p.9; TLB-013 p.6 | Matches `Topics/Multi-Verticality.md` | PASS |
| 10 | Multi-vertical GMV share 68%→73%→76% (Dec'24→Dec'25→Mar'26) (§7.2) | TLB-019 p.7; TLB-020 p.8 | Matches `Topics/Multi-Verticality.md` and `Value_Driver_Tree_v2.md` N-11 exactly; correct 3-period label, not the collapsed date-mislabeling pattern found elsewhere in this project | PASS |
| 11 | Synthetic acquisition-funnel table (§7.2) | None — explicitly synthetic | Every cell in the "Illustrative conversion" column still carries an inline **[SYNTHETIC — ...]** flag; boxed disclosure states no real % is disclosed; traceability table's own row is labeled "SYNTHETIC... not an Approved Assumption; not cited elsewhere." Labeling discipline intact | PASS |
| 12 | talabat PostPaid GCC-only through CMD 2024; Egypt first non-GCC follow-on (§7.2, §7.3) | TLB-015 pp.25,74,103; TLB-002 pp.14,19 | Matches `Topics/FinTech.md` verbatim | PASS |
| 13 | OPT-002 Egypt-first-then-Iraq sequencing "consistent with OPT-002's own recommended pilot design" (§7.2) | `OPT-002...md` | Matches OPT-002's own "Pilot recommendation" section exactly (bounded 2-quarter Egypt pilot before Iraq) | PASS |
| 14 | Partner commission-rate-investment language (§7.3) | TLB-020 p.16; TLB-014 p.19 | Matches `Topics/Food Leadership.md` | PASS |
| 15 | ADCB co-branded card (UAE); CIB co-branded card (Egypt) (§7.3) | TLB-001 pp.9,13; TLB-002 pp.14,19 | Matches `Topics/FinTech.md` | PASS |
| 16 | Partner-funded free-delivery economics shared dependency, OPT-002/OPT-003 (§7.3) | TLB-026, p.134 | Matches both options' own "Dependencies" sections verbatim | PASS |
| 17 | talabat pro uplift figures (20-28% frequency; 26-32% retention; 136% GP/customer, excl. Egypt/Iraq) (§7.4) | TLB-001 p.18; TLB-015 pp.78,104; TLB-019 p.11 | Matches `Strategic/Customer Retention Drivers.md` and `Value_Driver_Tree_v2.md` N-15/N-20/N-22 exactly, including the GCC+Jordan scoping | PASS |
| 18 | Mono- vs. multi-vertical M1 retention delta (+16pp/+20pp) (§7.4) | TLB-019, p.10 | Matches `Strategic/Customer Retention Drivers.md` and N-21 | PASS |
| 19 | Rewards 18% adoption, >15% frequency uplift, "reducing churn" (§7.4) | TLB-026 p.134; TLB-015 p.79 | Matches | PASS |
| 20 | PostPaid 14% frequency increase (§7.4) | TLB-001, pp.9,18 | Matches | PASS |
| 21 | Family Plan >60% retention premium (§7.4) | TLB-018, p.6 | Matches N-23 | PASS |
| 22 | AI/personalisation EBITDA contribution USD14mn+→30mn+ (§7.4) | TLB-001 p.23; TLB-002 p.15 | Matches N-09 and `Strategic/Customer Retention Drivers.md` | PASS |
| 23 | `ASM-016` cited for Group/GCC+Jordan uplift applied to Egypt/non-GCC by inference (§7.1, §7.4) | `Assumptions_Register.md` | Status independently re-confirmed `Approved` (Decision tier, Low confidence) | PASS |
| 24 | AI/ML stack inherited from Delivery Hero SE, not a separate vendor partnership (§7.3) | `Topics/AI.md`; `Entities/Technology_Platforms.md` | Matches both notes verbatim | PASS |
| 25 | §7.5: OPT-002/OPT-003 positioning against DEC-009's resolved sequence and each option's own record | `DEC-009` (Decision section); `OPT-002...md`; `OPT-003...md` | **Re-verified independently from primary source text — see Part 1 above.** Correct; no residual "Tier 2/3"/"pilot before scaling" mischaracterization anywhere in current prose (only in the addendum's historical narration of the prior defect) | PASS |
| 26 | §7.6 cross-check vs. Section 6 (CARC figures, "no contradiction") | `Section_06...md` | **DEFECT FOUND — see below** | **FAIL** |
| 27 | §7.6 cross-check vs. `DEC-008` (no `ASM-018` 2.2:1 split shown) | `DEC-008` | Confirmed — no such figure appears anywhere in Section 7 | PASS |
| 28 | §7.6 cross-check vs. `DEC-009`/`ASM-029`-`033` (no OPT-level dollar range reproduced) | `DEC-009` | Confirmed — no dollar range appears; only narrative references to OPT-002/OPT-003 by name | PASS |
| 29 | §7.6 cross-check vs. Section 12 (Three Horizons placement of OPT-002/OPT-003) | `Section_12...md` | Independently re-read Section 12's Horizon 1 text directly — matches §7.5's characterization exactly (see Part 1) | PASS |

### Item 26 — new defect found this pass (not previously flagged in Pass 1 or Pass 2)

**§7.6 states:** "the CARC figures cited here (USD 89mn → USD 155mn, 2023→2025) and the
vouchers-as-contra-revenue figure (USD 120mn, FY2025) are the same figures Section 6 cites in its
unit-economics discussion (§6.4) — no contradiction, no double-counting."

Two problems, independently confirmed against the current text of `Section_06_Business_Model_and_Revenue_Streams.md`:

1. **Wrong subsection.** The "Vouchers and other discounts" contra-revenue line (USD (120)mn, FY2025) is
   in Section 6's **§6.1** MECE revenue-stream table ("less: Vouchers and other discounts *(contra-revenue)*
   | — | USD (120)mn |"), not §6.4 (Unit Economics), which is where the CARC 89mn→155mn figures actually
   live. §7.6 attributes both figures to the same subsection when they are in two different ones.

2. **Unsupported "no contradiction" claim on genuinely different, unreconciled figures.** The CARC
   internal metric's "talabat-funded vouchering" component for 2025 is **USD 89mn** (`Facts/Retention.md`,
   TLB-002 p.21). The Management-Revenue-to-IFRS-Revenue reconciliation's "vouchers and other discounts"
   contra-revenue line for FY2025 is **USD 120mn** (Section 6 §6.1, TLB-001 p.27/TLB-002 p.20/TLB-009 p.4).
   These are two different, same-period (FY2025), same-geography (Group), Fact-tier disclosed figures both
   describing "vouchers" — and nowhere in the corpus, in either Topic Note, or in Section 6 itself is a
   reconciling explanation given for why they differ (89mn vs. 120mn). Section 6 itself never attempts to
   reconcile them either (its §6.1 table and §6.4 CARC discussion simply sit side by side without
   cross-referencing each other). §7.6's assertion that these are consistent ("no contradiction, no
   double-counting") is therefore an unsupported synthesis claim, not a verified reconciliation — per the
   evidence-ranking skill, a same-tier numeric disagreement like this should either be reconciled with a
   stated basis (e.g., "the contra-revenue line includes X that the CARC vouchering figure excludes") or
   flagged as an open, unreconciled question — not silently characterized as harmonious.

   Note also: Section 7's own body text (§7.1-§7.5) never actually cites the USD 120mn figure anywhere —
   it only appears in this §7.6 cross-check sentence, making the sentence's framing ("the... figure...
   cited here") additionally imprecise, since Section 7 does not use that figure itself.

**Severity: Moderate**, not a hard citation-traceability failure (both underlying numbers — 89mn and
120mn — are correctly, verifiably sourced to real TLB citations; this is not an invented or misattributed
number). It is a synthesis/cross-check-accuracy defect: a claim that two disclosed figures don't conflict,
made without engaging with the fact that they are different values for what reads as the same underlying
concept, plus a wrong subsection pointer (§6.4 instead of §6.1).

**Fix needed (not applied this pass, per instructions):** Rewrite the §7.6 sentence to (a) correct the
subsection reference to §6.1, and (b) either state plainly that the CARC-embedded vouchering figure
(USD89mn) and the Management-Revenue contra-revenue "vouchers and other discounts" line (USD120mn) are two
different, unreconciled FY2025 disclosures — not asserted to be the same population of spend — and flag
this as an open reconciliation question per the evidence-ranking skill's same-tier-conflict escalation
rule, or drop the sentence's "no contradiction" framing entirely if the cross-check's real point is just
that no double-counting occurs *within Section 7's own text* (which is true, since Section 7 never uses
the 120mn figure itself).

## Geographic Evidence Rules check (independently re-run)

Clean. Every numeric/directional claim carries an explicit geography tag: Group, GCC+Jordan (explicitly
excluding Egypt/Iraq by name where the pro/retention uplift figures are used), country-specific
(UAE/Egypt individually), market-comparison (UAE/Kuwait/Qatar), and inferred-applicability (citing
`ASM-016` by name in both §7.1's "Caution — market applicability" and §7.4's "Caution — geography"). No
Group/GCC figure is presented as Egypt-proven; no Egypt figure is presented as Group-representative; no
pre/post-FY2025 non-GCC ambiguity appears (Section 7 does not cite the non-GCC bucket at all). "MENA" is
never used as a stand-in for talabat's 8-market footprint.

## Summary

- **29 items independently re-checked** against current primary source text (DEC-009, OPT-002, OPT-003,
  Topic Notes, Facts files, Value Driver Tree v2, Assumptions Register, and the two cross-referenced
  sections, 6 and 12).
- **28 pass. 1 new defect found (item 26)** — not previously flagged in Pass 1 or Pass 2, moderate
  severity, confined to the §7.6 cross-section-check paragraph, not the section's substantive marketing
  and sales strategy content.
- **The specific repeated-defect question this pass was commissioned to re-verify — §7.5's DEC-009/OPT-003
  characterization — is confirmed correctly fixed**, independently re-derived from DEC-009's own Decision
  section, OPT-002's and OPT-003's own records, and Section 12's Horizon 1 implementation of the same
  resolution, not merely trusted from the Pass 2 fix note's summary.
- No wrong Value Driver Tree node IDs. No stale date-labeling defects. No synthetic-data leakage into a
  real-data context. No Assumption Register citation traces to a non-Approved row.

## Verdict

**PASS WITH ONE MODERATE FIX NEEDED.** The section's core citation discipline, the synthetic-funnel
labeling, the geography tagging, and — specifically — the previously-fixed DEC-009/OPT-003
characterization in §7.5 all hold up under this independent fresh re-verification. One new, moderate
defect (item 26, the §7.6 cross-check's imprecise subsection reference and unsupported "no contradiction"
claim about two different, unreconciled FY2025 voucher-related figures) should be corrected before this
section is treated as fully cleared. This does not block on the 0%-tolerance untraceable-numeric-claim
rule (both underlying figures are traceable to real citations) but should be fixed as a synthesis-accuracy
matter per the evidence-ranking skill's same-tier-conflict discipline.
