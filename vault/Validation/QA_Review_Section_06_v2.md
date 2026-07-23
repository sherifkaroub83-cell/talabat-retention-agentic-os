---
type: validation
section: 6 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_06_Business_Model_and_Revenue_Streams.md
pipeline_stage: 13.11 (QA & Final Review, per .claude/skills/qa-review/SKILL.md)
run_date: 2026-07-23
reviewer: top-level session, acting in the qa-review-agent role (Tooling note: no `Agent` tool
  available this session — see the section draft's own Tooling note)
verdict: PASS (Pass 1 / self-reviewed) — status remains "Drafted — self-reviewed," not the unqualified
  ✅ Done, pending an independent Pass 2
---

# QA Review — Section 6 (v2, Group-wide capital-allocation draft)

## 1. Template completeness

Checked against `AI_Business_Plan_Template.md` §6's exact required sub-bullets:

| Required element | Present? | Location |
|---|---|---|
| Revenue generation methods (subscription fees, licensing, service contracts, custom AI solutions, internal cost savings) | Yes, reframed to talabat's actual disclosed streams — see below | §6.1 |
| Pricing strategy (tiered plans, enterprise pricing, value-based pricing) | Yes | §6.2 |
| Recurring vs. one-time revenue streams | Yes, reframed — see below | §6.3 |
| Unit economics per customer/deployment | Yes | §6.4 |
| Revenue streams MECE, no double counting, each traces to the value driver tree | Yes | §6.1 |
| State the unit economics: what one customer/transaction earns and costs | Yes | §6.4 |

**On the "revenue generation methods" reframing:** the template's literal list (subscription, licensing,
service contracts, custom AI solutions, internal cost savings) is written for a software/consulting
business model, not talabat's actual disclosed four-fee-line marketplace model. The section states this
explicitly (§6.3's "Reframing note") and substitutes talabat's own disclosed MECE breakdown — consistent
with how Section 2 reframed the template's generic "AI startup" language and Section 3 reframed the
template's "AI market size" ask. **Judged compliant, not a gap** — the alternative (inventing a
"licensing" or "service contract" revenue line talabat does not disclose) would violate the Anti-patterns
list.

**On "custom AI solutions"/"internal cost savings":** addressed directly in §6.5, which correctly notes
the proposed AI decision-support layer has no separate revenue line of its own (consistent with Section
2.5), rather than inventing one to satisfy the template's literal wording.

**Verdict: PASS**, both reframings handled by explicit disclosure and cross-reference, not by invented
content.

## 2. McKinsey Lens

- **Pyramid Principle:** the "Answer, stated first" section leads with the section's conclusion (the
  four-stream MECE system, which lines map to which ranked options, the per-customer spend-gap finding,
  and the open ASM-013 reclassification question) before any supporting detail. **PASS.**
- **SCQA:** not applicable (Section 1 only). **N/A.**
- **MECE:** two breakdowns are used and both state explicitly why they are MECE — the four-fee-type
  revenue-stream table (§6.1, "every disclosed revenue dollar belongs to exactly one of the five rows...
  no overlap, no gap") and the recurring/recurring-with-usage/no-one-time distinction (§6.3, explicitly
  framed against what the corpus actually discloses rather than the template's SaaS-oriented default
  categories). **PASS.**
- **Hypothesis-driven — does this section prove, refine, or kill Section 2's governing hypothesis?**
  Section 2's hypothesis claims an evidence-ranked framework raises the programme's realized GMV/EBITDA/
  CLV contribution because candidate initiatives have materially different evidence profiles. Section 6
  **refines** that hypothesis by grounding it in the actual revenue mechanics the programme is meant to
  move — showing exactly which fee lines each ranked option (`OPT-001`, `OPT-002`, `OPT-004`) would need
  to move, and quantifying the per-customer economic stakes (the >4x spend gap) behind the cross-sell
  thesis Section 2/4 argue narratively. **PASS.**
- **Value-driver traceability:** every revenue stream in §6.1 is explicitly traced to named
  `Value_Driver_Tree_v2.md` node IDs (N-05 through N-30, per stream), consistent with Section 4's
  mechanism anchors (multi-vertical, talabat pro) and Section 9's Stage 9/10 (GMV/Revenue) nodes — the
  same 3-5 mechanisms (multi-vertical adoption, talabat pro penetration, AI/personalisation-driven
  advertising) recur end to end. **PASS, cross-checked against `Section_09_Financial_Plan.md` in §6.6.**

## 3. Citation audit consumption

Read `vault/Validation/Citation_Audit_Section_06_v2.md` in full. Status: **FIXED (self-verified
re-check)** — 1 issue found and corrected in-session (a missing inline geography tag, not a missing or
incorrect citation), 0 missing-citation failures, 0 not-yet-approved-Assumption dependencies (`ASM-013`
and `ASM-015` are both `Approved`). One genuinely new same-tier evidence conflict was found and correctly
flagged rather than silently resolved (the TLB-019 p.13 %-of-GMV-by-fee-type range vs. the Q1 2026 mix
table). **No open failure blocks approval.**

**Verdict: PASS** (no open citation failure).

## 4. Staleness

No Research Note (`vault/Research/Notes/`) is cited anywhere in this section — Part A Stage 5 (targeted
research against the new problem) remains open, and the section correctly does not draw on any superseded
pre-pivot Research Note. **N/A / clean.**

## 5. Anti-patterns

Checked every item in `.claude/skills/business-plan-drafting/SKILL.md`'s Anti-patterns list against this
section:

| Anti-pattern | Found in this section? |
|---|---|
| Untraceable claim | No — see citation audit, 0 failures |
| Group/GCC figure presented as Egypt-specific without inference label | No — the section repeatedly and explicitly states no Egypt-level revenue-stream or unit-economics figure exists in the corpus, rather than silently applying Group figures to Egypt |
| "MENA" as stand-in for the 8-market footprint | No — not used anywhere in the section |
| Pre/post-FY2025 non-GCC figures blended | N/A — this section cites no non-GCC segment figure at all |
| ~2.2:1 split shown as a quantified Section 9/12/13 headline exhibit | N/A — not Section 9/12/13, and the split is never referenced in this section |
| `Assumptions_Register.md` status misquoted | No — `ASM-013` and `ASM-015` are both correctly stated as `Approved`; `ASM-004` is correctly stated as `requires-revision`, not `Approved`, and is explicitly not used as a citable fact |
| Country/GCC/non-GCC allocation split presented as disclosed | No — this section makes no allocation-split claim; it documents revenue mechanics, not the allocation decision itself |
| `ASM-029`–`033` OPT-level dollar ranges shown as headline commitment, or shown without the mandatory disclosure sentence | No — no `ASM-029`–`033` figure appears anywhere in this section |
| Refusing to name a recommended sequence | N/A — Section 6 is revenue-mechanics analysis, not the allocation recommendation section; it correctly defers the funding-sequence commitment to `DEC-009`/Section 9/12, citing `OPT-001`/`002`/`004` rather than restating the sequence |
| OS's own recommendation represented as automatic management decision | No — the section makes no allocation recommendation |
| Governance controls described as if disclosed talabat process | N/A — not discussed in this section |
| Numbers not tracing to a `Value_Driver_Tree_v2.md` node | No — every revenue stream traces to a named node ID, checked in §6.6 |
| Section 11 boilerplate disconnected from Section 10 | N/A |
| Executive Summary drafted first | N/A |
| Flagged gap resolved by drafting around it silently | No — every named gap (no Egypt fee-type breakdown, no Egypt commission/take-rate figure, talabat pro's uncited Egypt price point, the TLB-019 p.13 discrepancy, the FY-level Subscription/Other-Income split not being restatable) is stated explicitly in the section's own prose |

**Verdict: PASS**, no anti-pattern instance found.

## 6. Problem Consistency Gate

```markdown
---
report: Problem Consistency Gate
run_date: 2026-07-23
scope: Section 6
verdict: PASS
---
```

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Business problem statement matches `Problem_Charter.md` in substance | Pass | Section frames revenue-stream analysis explicitly around which lines the USD175mn programme's ranked options (`OPT-001`, `OPT-002`, `OPT-004`) are positioned to move, not Egypt retention |
| 2 | Geographic scope matches the charter (Group across 8 markets, Egypt as worked example, not "MENA," not Egypt-only) | Pass | All revenue-stream figures are Group-level with explicit country-specific call-outs (Qatar, Oman, UAE tMart) where disclosed; Egypt is named only to state that no Egypt-level breakdown exists; "MENA" never used |
| 3 | Decision question matches the charter (how to allocate the USD175mn programme) | Pass | §6.1/§6.2/§6.6 explicitly tie revenue-stream findings to `OPT-001`, `OPT-002`, `OPT-004` — the actual allocation-ranking mechanism |
| 4 | Investment envelope cited matches disclosed figures, no invented sub-splits presented as disclosed | Pass | Section cites the disclosed USD175mn/120mn/55mn split only via cross-reference (§6.5) and introduces no new sub-split of its own |
| 5 | Evidence-category discipline respected (Facts/inferences/Decisions/Assumptions/Forecasts/synthetic never blended) | Pass | Only two Assumption rows are cited (`ASM-013`, `ASM-015`, both Approved), correctly labeled; every other number is a direct Fact citation; no synthetic data used or needed |
| 6 | Output requirements match the charter (14-section template, ranges/scenarios, not false precision) | Pass | Section makes no point-estimate allocation claim; the one explicit open question (FY-level Subscription/Other-Income split) is stated as unresolved, not force-precisioned |
| 7 | No active file cites a superseded artifact as current | Pass | No pre-pivot `DEC-`/`ASM-` row (`ASM-001`–`012`, `014`) is cited; `ASM-004` is cited only to correctly note its `requires-revision` status, not as settled evidence |
| 8 | Any pre-pivot reference clearly marked historical | Pass | The frontmatter `supersedes_note` is the only reference to the old problem, correctly framed as historical |

**Verdict: PASS** (8/8).

## 7. Financial Integrity Gate

Section 6 carries genuine financial figures (revenue-by-stream, take rate, gross margin, CARC), so the
full 11-check gate applies, not a reduced subset:

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Allocation totals reconcile (bucket-level figures sum to USD175mn, or discrepancy explained) | Pass | Section cites no bucket-level dollar allocation of its own; the USD175mn/120mn/55mn split is referenced only by cross-reference to `Investment_Portfolio_Register.md`, unmodified |
| 2 | Scenario arithmetic internally consistent | N/A | Section 6 contains no base/upside/downside scenario content — that is Section 9's role |
| 3 | Units consistent within each exhibit | Pass | §6.1's table consistently uses USD millions for dollar figures and % of GMV for ratios, with no silent mixing |
| 4 | Currency stated and consistent | Pass | All dollar figures are USD; the one AED-denominated figure (food-only/multi-vertical monthly spend) is presented with its USD conversion given directly by the source note, not independently constructed, and both currencies are explicitly labeled |
| 5 | Time periods stated and not silently mixed | Pass | FY2024 vs. FY2025 vs. Q1 2025 vs. Q1 2026 figures are each explicitly labeled by period throughout; §6.1 explicitly flags that the Subscription/Other-Income decomposition is Q1-basis only and not restatable at FY level, rather than silently applying it to the FY figures |
| 6 | Percentage logic correct (%-of-GMV not confused with %-of-revenue; pp vs. % not confused) | Pass | All ratios are consistently stated as "% of GMV"; the EBITDA-margin drag is correctly stated in percentage points ("(0.5)-(0.7)pp"), not confused with a plain percentage |
| 7 | No double counting | Pass | The section explicitly notes tMart's ~95% take-rate revenue and the Subscription-fee revenue are two distinct components of one combined reporting line, not summed as if independent; no investment dollar or uplift effect is counted toward two outcomes as additive |
| 8 | No additive stacking of overlapping uplift statistics | N/A | Section 6 does not cite or combine retention/frequency uplift percentages (that is Section 4/9's content) |
| 9 | Revenue, GMV, gross profit, and EBITDA never mixed or substituted for one another | Pass | The section explicitly and repeatedly distinguishes take rate (GMV-to-revenue conversion) from gross margin from EBITDA-margin drag — most pointedly in §6.2's tMart caution ("this ~95% figure is a GMV-to-revenue conversion rate, not a gross-margin figure... the two figures measure different things and are not force-reconciled here") |
| 10 | Every point-estimate figure is either a disclosed fact or a labeled Approved assumption, no unlabeled false precision | Pass | Every dollar/percentage figure is a direct Fact citation or one of the two Approved Assumptions (`ASM-013`, `ASM-015`); the section explicitly declines to force a single figure where the corpus discloses two conflicting ones (§6.1's TLB-019 p.13 discrepancy) |
| 11 | `DEC-008` respected (Section 9/12/13 headline exhibits Group base-case only; ~2.2:1 split narrative-only) | N/A | Section 6 is not one of `DEC-008`'s named sections (9/12/13) and does not reference the ~2.2:1 split at all |

**Verdict: PASS** (10 checks pass, 2 correctly N/A).

## 8. Geographic Evidence Gate

```markdown
---
report: Geographic Evidence Gate
run_date: 2026-07-23
scope: Section 6
verdict: PASS
---
```

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Every numeric/directional claim carries a geography tag | Pass | Verified in the citation audit; one omission (item #12, CPG ratio) was found and fixed in-session before this gate ran |
| 2 | No Group/GCC figure presented as Egypt-specific without inference label | Pass | No instance found; the section instead repeatedly states the absence of any Egypt-level figure |
| 3 | No Egypt-specific figure presented as Group-representative | Pass | No Egypt-specific figure is cited anywhere in this section at all |
| 4 | Pre/post-FY2025 non-GCC figures not used interchangeably | N/A | No non-GCC segment figure is cited in this section |
| 5 | Time period of every geography-tagged claim stated and matches source | Pass | See Financial Integrity Gate check #5 above |
| 6 | No unsupported metric transfer across geography | Pass | Country-specific figures (Qatar, Oman, UAE tMart) are kept scoped to their named country and never generalized to Group or to Egypt |
| 7 | Every `inferred-applicability` claim labeled as inference in the prose itself | N/A | Section 6 makes no `inferred-applicability` claim anywhere |
| 8 | "MENA" never used as a stand-in for the 8-market footprint | Pass | Confirmed — not used |
| 9 | External market-research figures not blended arithmetically with talabat's own figures without stated reconciliation | Pass | The one external benchmark cited (the "2% industry" CPG-investment-ratio comparator, TLB-015 p.108) is presented as a named external comparator, not blended arithmetically into any talabat figure |

**Verdict: PASS** (7 applicable checks pass, 2 correctly N/A).

## Overall Verdict

**PASS (Pass 1 / self-reviewed).** All eight QA checklist items pass or are correctly marked N/A with
justification; all three 2026-07-23 gates (Problem Consistency, Financial Integrity — full 11-check gate,
Geographic Evidence) pass. Per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline, this review
was performed by the same session that drafted the section — **status is capped at "Drafted —
self-reviewed," not the unqualified ✅ Done**, pending a genuinely independent Pass 2 (a fresh,
separately-invoked citation audit and QA review). Do not flip Section 6's tracker cell to ✅ Done on the
strength of this review alone. The one carried-forward, not-yet-fixed item outside this section's own
scope — the TLB-019 p.13 %-of-GMV-by-fee-type discrepancy in the underlying `Facts/Revenue.md` file
itself — should be routed to whichever future process maintains the Facts layer, since correcting a
Facts-file transcription is outside a Business Plan section's own drafting scope.
