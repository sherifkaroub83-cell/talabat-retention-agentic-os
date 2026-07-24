---
type: validation
section: 7 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_07_Marketing_and_Sales_Strategy.md
pipeline_stage: 13.11 (QA & Final Review, per .claude/skills/qa-review/SKILL.md)
run_date: 2026-07-23
reviewer: top-level session, acting in the qa-review-agent role (Tooling note: no `Agent` tool
  available this session — see the section draft's own Tooling note)
verdict: PASS (Pass 1 / self-reviewed) — status remains "Drafted — self-reviewed," not the unqualified
  ✅ Done, pending an independent Pass 2
---

# QA Review — Section 7 (v2, Group-wide capital-allocation draft)

## 1. Template completeness

Checked against `AI_Business_Plan_Template.md` §7's exact required sub-bullets:

| Required element | Present? | Location |
|---|---|---|
| Positioning — how the AI product/plan stands out | Yes | §7.1 |
| Positioning — the segments deliberately NOT pursued, and why | Yes | §7.1 ("What is deliberately NOT targeted: price/voucher competition") |
| Customer Acquisition — channels, with expected funnel conversion at each stage | Yes, with the genuine channel-level gap stated explicitly and the funnel handled via labeled synthetic figures | §7.2 |
| Sales funnel and customer journey mapping | Yes | §7.2 |
| Partnerships — collaborations with tech companies, data providers, or resellers | Yes, reframed to talabat's actual disclosed partnership types (restaurant/retail Partners, banking co-brand cards) — see below | §7.3 |
| Retention — customer support, training, community-building | Partially reframed — see below | §7.4 |
| Retention — regular updates and enhancements to the AI solution | Yes | §7.4 |

**On the "Partnerships" reframing:** the template's literal list (tech companies, data providers,
resellers) does not map cleanly onto talabat's actual disclosed partnership structure (restaurant/retail
Partners, banking co-brand cards, an inherited-not-partnered AI/ML stack). The section states this
explicitly (§7.3's closing paragraph, "No named technology/data-provider partnerships beyond the embedded
AI/ML stack") rather than inventing a vendor relationship the corpus doesn't evidence — consistent with
how Sections 2 and 6 handled equivalent template/reality mismatches. **Judged compliant, not a gap.**

**On "customer support, training, and community-building":** the corpus discloses no dedicated
support/community product (no forum, ambassador programme, or training curriculum named anywhere in the
primary corpus). §7.4 states this gap explicitly ("The corpus discloses no dedicated customer
community/forum product... this section states that gap rather than inventing one") and substitutes what
*is* disclosed (product-embedded retention mechanisms: pro, Rewards, PostPaid, Family Plan, co-branded
cards) as the functional equivalent of "training and community-building" in a marketplace context where
those concepts take a different concrete form than in a SaaS business. **Judged compliant, handled by
explicit disclosure, not by invented content — same standard applied to Section 6's equivalent
reframings.**

**Verdict: PASS**, all required sub-bullets present, two template/reality mismatches both handled by
explicit statement rather than invented content.

## 2. McKinsey Lens

- **Pyramid Principle:** the "Answer, stated first" section leads with the section's conclusion (CVP-over-
  discounting positioning, the genuine funnel-data gap and how it's handled, and the OPT-002/OPT-003
  connection) before any supporting detail. **PASS.**
- **SCQA:** not applicable (Section 1 only). **N/A.**
- **MECE:** the acquisition-funnel table (§7.2) presents a single, sequential stage structure (not a
  segmentation, so MECE in the classic segment sense doesn't strictly apply) — the section instead
  explicitly states why the *five-mechanism retention ranking* it reuses from `Strategic/Customer
  Retention Drivers.md` is a ranked list, not a MECE breakdown, avoiding a false MECE claim over content
  that is genuinely a ranking, not an exhaustive partition. The positioning statement's "targeted vs. NOT
  targeted" split (medium/high-value CVP-driven customers vs. price-sensitive voucher-driven customers) is
  presented as a two-way distinction grounded in the corpus's own -4pp non-high-value retention finding,
  not an invented, unstated segmentation. **PASS** (no breakdown in this section falsely claims MECE
  status it doesn't have).
- **Hypothesis-driven — does this section prove, refine, or kill Section 2's governing hypothesis?**
  Section 2's hypothesis claims an evidence-ranked framework raises the programme's realized GMV/EBITDA/
  CLV contribution because candidate initiatives have materially different evidence profiles. Section 7
  **refines** that hypothesis by showing exactly which marketing/sales mechanisms `OPT-002` and `OPT-003`
  would actually deploy (product-embedded CVP tools, not vouchering) and by surfacing a genuine, previously
  unstated operational dependency (shared Partner-funded economics between the two options) that a future
  drafting/QA pass on Section 9/12 should be aware of. **PASS.**
- **Value-driver traceability:** the section explicitly reuses the same five-mechanism ranking
  (talabat pro > multi-vertical > Rewards/PostPaid > Family Plan, AI as infrastructure) that
  `Strategic/Customer Retention Drivers.md` establishes and that Section 4 (Value Proposition, per the
  skill's own Section 4 vault map) is built on — the same 3-5 mechanisms recur end to end, consistent with
  the McKinsey Lens requirement. **PASS**, cross-checked against Section 6 in §7.6.

## 3. Citation audit consumption

Read `vault/Validation/Citation_Audit_Section_07_v2.md` in full. Status: **PASS (self-verified,
2026-07-23)** — 25 claims/rows checked, 25 pass, 0 missing-citation failures, 0 not-yet-approved-Assumption
dependencies (`ASM-016` is `Approved`). 0 same-tier evidence conflicts found. The section's one genuine
evidence gap (no funnel-stage conversion data anywhere in the corpus) is confirmed correctly handled: every
synthetic figure is explicitly labeled `[SYNTHETIC]`, none is registered as an `ASM-` row, and none is used
in any other section's financial case. **No open failure blocks approval.**

**Verdict: PASS** (no open citation failure).

## 4. Staleness

No Research Note (`vault/Research/Notes/`) is cited anywhere in this section — Part A Stage 5 (targeted
research against the new problem) remains open, and the section correctly does not draw on any superseded
pre-pivot Research Note, and correctly does not attempt to fill the funnel-conversion gap with an
unverified external research pull (stated explicitly in the section's own Tooling note, 13.4). **N/A /
clean.**

## 5. Anti-patterns

Checked every item in `.claude/skills/business-plan-drafting/SKILL.md`'s Anti-patterns list against this
section:

| Anti-pattern | Found in this section? |
|---|---|
| Untraceable claim | No — see citation audit, 0 failures; the only non-cited numbers (the funnel percentages) are explicitly labeled synthetic, not presented as traceable |
| Group/GCC figure presented as Egypt-specific without inference label | No — §7.4 explicitly restates the GCC+Jordan scoping and Egypt/Iraq exclusion every time the pro/multi-vertical uplift figures are used, and explicitly names `ASM-016` as the inference vehicle when applied to `OPT-002` |
| "MENA" as stand-in for the 8-market footprint | No — not used anywhere in the section |
| Pre/post-FY2025 non-GCC figures blended | N/A — this section cites no non-GCC segment figure at all |
| ~2.2:1 split shown as a quantified Section 9/12/13 headline exhibit | N/A — not Section 9/12/13, and `ASM-018` is never referenced in this section |
| `Assumptions_Register.md` status misquoted | No — `ASM-016` is correctly stated as `Approved`, Low confidence |
| Country/GCC/non-GCC allocation split presented as disclosed | No — this section makes no allocation-split claim of its own; it references `OPT-002`/`OPT-003`'s already-resolved ranking, correctly labeled as this OS's own analytical construction where relevant |
| `ASM-029`–`033` OPT-level dollar ranges shown as headline commitment, or shown without the mandatory disclosure sentence | No — no `ASM-029`–`033` figure appears anywhere in this section (confirmed in the citation audit and in §7.6) |
| Refusing to state a recommended funding sequence at all | N/A — Section 7 is marketing/sales strategy, not the allocation-recommendation section; it correctly defers to and cites `DEC-009`'s already-committed sequence rather than re-deciding it |
| OS's own recommendation represented as automatic management decision | No — the section makes no allocation-execution claim; it discusses strategy and cites already-approved rankings |
| Governance controls described as if disclosed talabat process | N/A — not discussed in this section |
| Numbers not tracing to a `Value_Driver_Tree_v2.md` node | No new financial/forecast number is introduced in this section that would require a node trace; the section correctly relies on Section 4/6/9's existing node-traced figures where financial figures are cited, and clearly separates the synthetic funnel figures (which are explicitly not value-driver-tree inputs) from any node-traced claim |
| Section 11 boilerplate disconnected from Section 10 | N/A |
| Executive Summary drafted first | N/A |
| Flagged gap resolved by drafting around it silently | No — the funnel-conversion-data gap is the section's single most prominent flagged item, boxed and stated in bold before the illustrative table, not resolved silently |
| **New for this section — inventing a number and citing it as if from the corpus (the skill's explicit Section 7 caution)** | No — checked with particular care given this section's specific named risk; every funnel percentage carries its `[SYNTHETIC]` tag at first appearance in the table itself (not just in surrounding prose), and the traceability table's own row for these figures states "SYNTHETIC — this section's own illustrative construction, not corpus-derived" rather than citing a `TLB-` document |

**Verdict: PASS**, no anti-pattern instance found, including the section's own named highest-risk pattern
(inventing and mis-citing funnel numbers).

## 6. Problem Consistency Gate

```markdown
---
report: Problem Consistency Gate
run_date: 2026-07-23
scope: Section 7
verdict: PASS
---
```

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Business problem statement matches `Problem_Charter.md` in substance | Pass | Section frames marketing/sales strategy explicitly around which mechanisms the USD175mn programme's ranked options (`OPT-002`, `OPT-003`) would deploy, not Egypt retention as a standalone problem |
| 2 | Geographic scope matches the charter (Group across 8 markets, Egypt as worked example, not "MENA," not Egypt-only) | Pass | All mechanism evidence is Group/GCC-level with explicit country-specific call-outs (UAE, Kuwait, Qatar, Egypt) where disclosed; Egypt is treated as one worked-example market among the plan's candidate options (`OPT-002`), not the section's boundary; "MENA" never used |
| 3 | Decision question matches the charter (how to allocate the USD175mn programme) | Pass | §7.1/§7.5 explicitly tie positioning and channel findings to `OPT-002`, `OPT-003` — the actual allocation-ranking mechanism established in Part A |
| 4 | Investment envelope cited matches disclosed figures, no invented sub-splits presented as disclosed | Pass | Section cites the disclosed CARC/Partner-funding figures only as historical marketing-spend context; it introduces no new sub-split of the USD175mn envelope of its own |
| 5 | Evidence-category discipline respected (Facts/inferences/Decisions/Assumptions/Forecasts/synthetic never blended) | Pass | This is the section's most load-bearing check, given its named synthetic-data risk: the citation audit (item 13) confirms every synthetic funnel figure is visibly, individually labeled and never appears in the same table cell or sentence as a Fact citation without the label; `ASM-016` is the only Assumption cited, correctly labeled `Approved`/Low confidence |
| 6 | Output requirements match the charter (14-section template, ranges/scenarios, not false precision) | Pass | The synthetic funnel figures are presented as illustrative ranges (e.g. "~25-35%"), not false-precision point figures, and are explicitly excluded from any forecast/financial claim |
| 7 | No active file cites a superseded artifact as current | Pass | No pre-pivot `DEC-`/`ASM-` row (`ASM-001`–`012`, `014`) is cited anywhere in this section |
| 8 | Any pre-pivot reference clearly marked historical | Pass | The frontmatter `supersedes_note` correctly states no prior Section 7 draft exists under either problem — no historical reference needed or made |

**Verdict: PASS** (8/8).

## 7. Financial Integrity Gate

Section 7 carries some genuine financial figures (CARC, Partner-funded savings, uplift percentages) but is
not one of `DEC-008`'s named headline-financial sections (9/12/13) — the reduced-relevance subset still
applies where checks are meaningful:

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Allocation totals reconcile (bucket-level figures sum to USD175mn, or discrepancy explained) | N/A | Section cites no bucket-level dollar allocation of its own |
| 2 | Scenario arithmetic internally consistent | N/A | Section 7 contains no base/upside/downside scenario content |
| 3 | Units consistent within each exhibit | Pass | The funnel table consistently uses "%" for illustrative conversion rates, distinctly labeled; the CARC/Partner-savings figures consistently use USD millions and % of GMV, with no silent mixing |
| 4 | Currency stated and consistent | Pass | All disclosed dollar figures are USD; the one AED-denominated figure (Partner-funded savings, >AED1,567.7mn) is presented exactly as the source states it, without an independently constructed USD conversion, consistent with how the source itself discloses it |
| 5 | Time periods stated and not silently mixed | Pass | 2023/2025 CARC figures, Q1 2026 Partner-savings figure, July 2024 frequency figure, and Dec'24/Dec'25/Mar'26 GMV-share trend are each explicitly labeled by period |
| 6 | Percentage logic correct (%-of-GMV not confused with %-of-revenue; pp vs. % not confused) | Pass | CARC and Partner-savings percentages are consistently "% of GMV"; the M1 retention delta is correctly stated in percentage points ("+16pp/+20pp," "-4pp") not confused with a plain percentage |
| 7 | No double counting | Pass | CARC's voucher component and Partner-funded savings are correctly described as two distinct, non-overlapping cost/value sources (talabat-funded vs. Partner-funded), not summed together |
| 8 | No additive stacking of overlapping uplift statistics | Pass | The five ranked retention-uplift figures (pro, multi-vertical, Rewards, PostPaid, Family Plan) are presented individually, each with its own scope, and the section explicitly states (per `Strategic/Customer Retention Drivers.md`) that pro's and multi-vertical's effects are not disclosed as separable — not stacked or summed into a combined uplift claim |
| 9 | Revenue, GMV, gross profit, and EBITDA never mixed or substituted for one another | Pass | The section consistently uses "% of GMV" for CARC/Partner-savings and "EBITDA contribution" (USD figure) for the AI/personalisation figure, without conflating the two |
| 10 | Every point-estimate figure is either a disclosed fact or a labeled Approved assumption, no unlabeled false precision | Pass | Every disclosed figure is a direct Fact citation or the one Approved Assumption (`ASM-016`); the synthetic funnel figures are the section's only non-Fact/non-Assumption numbers and are explicitly, individually labeled as such — the section's central financial-integrity discipline point |
| 11 | `DEC-008` respected (Section 9/12/13 headline exhibits Group base-case only; ~2.2:1 split narrative-only) | N/A | Section 7 is not one of `DEC-008`'s named sections (9/12/13) and does not reference the ~2.2:1 split at all |

**Verdict: PASS** (8 checks pass, 3 correctly N/A).

## 8. Geographic Evidence Gate

```markdown
---
report: Geographic Evidence Gate
run_date: 2026-07-23
scope: Section 7
verdict: PASS
---
```

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Every numeric/directional claim carries a geography tag | Pass | Verified in the citation audit; the synthetic funnel figures are correctly exempted (they make no geography claim, per Geographic Evidence Rules scope) |
| 2 | No Group/GCC figure presented as Egypt-specific without inference label | Pass | §7.4 explicitly labels the pro/multi-vertical uplift figures' extension to Egypt via `ASM-016`, every time |
| 3 | No Egypt-specific figure presented as Group-representative | Pass | The one Egypt-standalone figure cited (the PostPaid/CIB FinTech launch) is used only to illustrate a sequencing precedent, never generalized as a Group-representative statistic |
| 4 | Pre/post-FY2025 non-GCC figures not used interchangeably | N/A | No non-GCC segment figure is cited in this section |
| 5 | Time period of every geography-tagged claim stated and matches source | Pass | See Financial Integrity Gate check #5 above |
| 6 | No unsupported metric transfer across geography | Pass | The UAE/Kuwait/Qatar competitive-pressure evidence is explicitly not extended to Egypt or non-GCC (§7.1 "Caution — market applicability"); the country-specific ADCB card (UAE) is not generalized |
| 7 | Every `inferred-applicability` claim labeled as inference in the prose itself | Pass | §7.4's explicit statement: "This plan's retention-strategy recommendation for `OPT-002` therefore rests on the Group/GCC 'what works' playbook, imported into Egypt/Iraq as a working hypothesis, not an Egypt-validated ranking" |
| 8 | "MENA" never used as a stand-in for the 8-market footprint | Pass | Confirmed — not used |
| 9 | External market-research figures not blended arithmetically with talabat's own figures without stated reconciliation | N/A | No external (non-talabat-disclosed) market-research figure is cited anywhere in this section |

**Verdict: PASS** (7 applicable checks pass, 2 correctly N/A).

## Overall Verdict

**PASS (Pass 1 / self-reviewed).** All eight QA checklist items pass or are correctly marked N/A with
justification; all three 2026-07-23 gates (Problem Consistency, Financial Integrity, Geographic Evidence)
pass. This section's single most consequential review point — whether every synthetic funnel-conversion
number is visibly, individually labeled and never silently blended with corpus-derived data — was checked
specifically and repeatedly across the citation audit (item 13), the Anti-patterns table (the section's
own named highest-risk pattern), the Problem Consistency Gate (check 5), and the Financial Integrity Gate
(check 10): **confirmed clean in every instance.** Per `Business_Plan_Generation_Pipeline.md`'s two-pass
discipline, this review was performed by the same session that drafted the section — **status is capped
at "Drafted — self-reviewed," not the unqualified ✅ Done**, pending a genuinely independent Pass 2 (a
fresh, separately-invoked citation audit and QA review). Do not flip Section 7's tracker cell to ✅ Done
on the strength of this review alone.
