---
type: validation
sections: 11-12
pipeline_stage: "17 (whole-plan citation audit)"
run_date: 2026-07-25
auditor: independent Stage 17 reviewer (fresh thread, no memory of prior drafting/fixing sessions)
status: PASS (0 hard failures; 1 moderate documentation-completeness finding in Section 12)
---

# Citation Audit — Whole-Plan Stage 17 — Sections 11 (CSR & Responsible AI) and 12 (Implementation Plan)

## Method

Read both section files in full from the current, live drafts under `Business_Plan_Drafts_v2/`. For
every numeric/named-fact claim, opened the specific cited source (Decision Log entry, Assumption Register
row, Topic Note, raw `_source_text` file, `Facts/_raw/` extract, or another section's current text) and
confirmed the specific figure/quote/status claimed is actually present there — not merely that the
document exists. Then, separately, enumerated every place either section makes a claim *about* another
section's content or status (Sections 2, 7, 8, 9, 10, 14; `DEC-008`; `DEC-009`) and re-read that other
section's **current** text to confirm the claim still holds, since several referenced sections have been
independently fixed (Pass 2/Pass 3) since Section 11/12 were last checked. Cross-checked all geography
tags against `vault/Architecture/Geographic_Evidence_Rules.md`. No edits made to either section file.

Primary sources opened: `DEC-008`, `DEC-009` (full text), `Investment_Portfolio_Register.md`,
`Assumptions_Register.md` (ASM-016, ASM-018, ASM-021, ASM-029–033 rows), `OPT-003` option record,
`KPI_Tree_v2.md` (Governance family G1-G7), `Section_02_Business_Description.md` (§2.2, §2.3),
`Section_07…v2_Pass2.md`, `Section_08_Operations_Plan.md` (§8.1–8.6, current post-Pass-3 text),
`Section_09_Financial_Plan.md` (frontmatter/provenance), `Section_10_Risk_Analysis.md` (full text, current
post-Pass-2 text), `Section_14…_v2_Pass2.md`, `Citation_Audit_Section_12_v2_Pass2.md` and `_Pass3.md`,
`Citation_Audit_Section_11_v2_Pass2.md`, raw source text `20260213_talabat-Q4-FY25-Results-Presentation.txt`
(page 9), `Facts/_raw/TLB-002_facts.md`, `20250404_Talabat-Annual-Report-2024-En.txt`,
`Talabat-Holding-plc_International-Offering-Memorandum.txt`, `Topics/Advertising.md`,
`Topics/Capital Allocation and Investment Governance.md`.

## Hard failures

**None found in either section.**

## Moderate findings

1. **Section 12 — stale in-body provenance note (documentation completeness, not a citation error).** The
   YAML frontmatter (lines 1–6) correctly documents all three fix rounds: Pass 2's two defects (stale
   "DEC-009 unresolved" claim; OPT-003 mis-sequenced as H2-gated monitoring-only) *and* Pass 3's one new
   defect (an H2 bullet's uncited/contradicted claim that Food-leadership spend might go "beyond the
   disclosed ~USD55mn"), all fixed 2026-07-24. However, the in-body "Pipeline provenance note" block
   (lines 11–23, the `>`-quoted text directly under the H1) only mentions Pass 2's two defects and does not
   mention Pass 3 or its fix. A reader who reads only the body note (not the YAML frontmatter) would not
   know a third fix round occurred. **The underlying prose itself is correct** — independently re-verified
   the current Horizon 2 and Horizon 3 text against `OPT-003`'s recommended allocation range (USD 25-32mn
   base / USD 32-40mn upside / USD 15-22mn downside, all within the ~USD55mn bucket) and confirmed the
   "beyond ~USD55mn" framing Pass 3 flagged is gone, replaced with the Pass-3-recommended "upside end of
   OPT-003's own recommended allocation range... still within the existing ~USD55mn... bucket" wording.
   This is a documentation-sync gap, not an open citation-audit failure; recommend the in-body note be
   updated to mention Pass 3 for consistency, but it does not block Stage 10.

## Cross-section reference checks

| # | Claim (location) | References | Current-text check | Result |
|---|---|---|---|---|
| 1 | Section 11 §11.1 Control 1 / addendum: "avoiding the exact DEC-009-tiering trap that caught Sections 7, 12, and 14" | Sections 7, 12, 14 (historical claim about their Pass 2 review findings) | `Citation_Audit_Section_07_v2_Pass2.md` item 25 (FAIL→FIXED, "matching the identical fix independently applied to Section_12_Implementation_Plan.md for the same underlying misreading") and `Citation_Audit_Section_14_v2_Pass2.md` item 4 (FAIL→FIXED, "the same error independently found and fixed in Sections 7 and 12") both independently corroborate this historical claim in their own words | **PASS** — accurate, and correctly phrased in past tense (does not assert these sections are currently broken) |
| 2 | Section 11 frontmatter/addendum: it did not inherit the stale content found in Section 14's own Pass 2 review "(Sections 4/5/12)" | Section 14's Pass 2 report | Re-read `Citation_Audit_Section_14_v2_Pass2.md` directly: items 1–2 (Section 4, stale node IDs), item 3 (Section 5, stale "7 of 8 countries"), items 4–6 (Section 12, stale DEC-009 tiering) — exactly the three sections named | **PASS** |
| 3 | Section 11 §11.1 Control 1: DEC-008 restricts Section 9's headline exhibits to the disclosed FY2026 guidance range; DEC-009 requires a committed funding sequence with ranges confined to a labeled sensitivity exhibit | `DEC-008`, `DEC-009` (Decision Log, read in full) | Both decisions' "Decision" sections match Section 11's description word-for-word, including the mandatory disclosure sentence | **PASS** |
| 4 | Section 11 §11.1 Control 1 (methodology note): checked DEC-008/DEC-009 word-for-word "not against Section_09…'s or Section_12…'s paraphrase of them" | Sections 9, 12 | This is a stated methodology choice (deliberately bypassing Sections 9/12), not a claim requiring their content to match — confirmed the framing is accurate (Section 11 does not, in fact, rely on Section 9/12 paraphrase anywhere) | **PASS** |
| 5 | Section 11 §11.1 Control 1: "Section 9's headline case restricted to talabat's own disclosed Group-level FY2026 guidance range (GMV +11-14% cFX; Revenue +14-17% cFX; Adjusted EBITDA 4.4-4.8% of GMV; FCF 3.2-3.6% of GMV)" | Section 9 (current text) | Section 9's current provenance note and Base-case row state the identical range and confirm Option 1/DEC-008 compliance; Section 9 status is ✅ Done (Pass 3, 0 new defects) | **PASS** |
| 6 | Section 11 §11.1/§11.5, Governance structures 1–2: restates `ORG-01`, `ORG-02`, `ORG-03`, `TECH-01`, `MKT-02` risk IDs, owners, and mitigation language from Section 10 | Section 10 (current, post-Pass-2, 0-defect text) | Re-read Section 10 §10.4/§10.8 in full: risk definitions, probability/impact ratings, mitigation wording, and named owners (Alfakesh, Abu Amara, AlGhrawi, Assadi, Vandepitte) all match Section 11's restatement exactly, no ID or wording altered | **PASS** |
| 7 | Section 11 §11.1/§11.3: restates Section 8 §8.4's proposed stage-gate mechanism (KPI family G1-G7, per-option checkpoints) and §8.3's named executives | Section 8 (current, post-Pass-3 text) | Re-read Section 8 §8.3/§8.4 in full (including the post-Pass-3 CQCA-tense fix, which does not touch the Systems/Skills rows Section 11 cites) — matches | **PASS** |
| 8 | Section 11 §11.2: December 2022 breach (144,469 customers, unnamed market, TECH-02/REG-04, TLB-026 p.49) | Section 10 §10.1/§10.5 (current text) | Section 10's TECH-02/REG-04 entries state the identical figures, page, and "vulnerable to... parent company level" language | **PASS** |
| 9 | Section 11 §11.5: Section 2's governing hypothesis argues the framework adds value "precisely because no internal stage-gate or return criterion is disclosed" | Section 2 (current text, §2.3-area hypothesis language) | Section 2's hypothesis section states the framework adds value against an undisclosed internal allocation logic — matches in substance; Section 2 was not otherwise altered by this check | **PASS** |
| 10 | Section 12 "Answer, stated first" / H1–H3: DEC-009 places OPT-002/OPT-003 as the joint near-term priority pair (not OPT-003 alone, not H2-gated) | `DEC-009` (full text) | Re-read DEC-009's "Decision" section directly: "OPT-002 and OPT-003 as the near-term, low-risk/high-fit priority" — matches Section 12's current framing exactly; this is the same fix independently reconfirmed by Section 12's own Pass 3 | **PASS** |
| 11 | Section 12 H2: OPT-003 upside case stays "within the existing ~USD55mn Food-leadership bucket"; "nothing... supports funding beyond the disclosed ~USD55mn envelope" | `OPT-003` option record | OPT-003's "Recommended allocation range": USD 25-32mn base / USD 32-40mn upside (dry powder deployed) / USD 15-22mn downside, "within the Food-leadership bucket" — confirms the current Section 12 wording is accurate and the Pass-3-flagged contradiction is gone | **PASS** |
| 12 | Section 12 "Dependencies and Timelines": "the same one flagged in Section 2.2: no market-level allocation logic is disclosed" | Section 2 §2.2 (current text) | Section 2 §2.2 problem 3 states "Cross-market allocation (open — the largest disclosed gap)... No document in the corpus breaks either bucket out by country" — matches | **PASS** |
| 13 | Section 12 traceability table: "Advertising ~7%-of-GMV UAE benchmark (talabat mart specifically) — `Topics/Advertising.md`; TLB-001, page 21" | `Topics/Advertising.md` | Confirms "~7% of GMV medium-term benchmark already reached in the UAE for talabat mart specifically" — this is the citation-completeness gap Pass 2 flagged as minor and Pass 3 confirmed fixed; re-confirmed present in the current traceability table | **PASS** |

No statistic was found stated with different values across Sections 11 and 12 (the two sections do not
share any of the same underlying figures — Section 11's EV/emissions/tips/tcamp/SME figures and Section
12's OPT-002/003/004 sequencing figures do not overlap).

## Confirmed correct (full citation trace, non-cross-section claims)

- Section 11 §11.2: EV fleet (UAE 240, Jan 2026; Egypt 200, end 2025, Cairo, scaling planned 2026;
  Jordan/Oman pilots) — independently re-located verbatim in `Facts/_raw/TLB-002_facts.md`.
- Section 11 §11.2: Group 2025 emissions 875,157 tCO2e (Scope 1: 8,177; Scope 2: 8,847; Scope 3: 858,132),
  delivery vehicles ~43% — exact match in `Facts/_raw/TLB-002_facts.md`.
- Section 11 §11.2: Riders kept 100% of USD21.5mn+ tips (2025) — exact match.
- Section 11 §11.2: 78,000+ riders trained via tcamp (Egypt, UAE, Bahrain, Kuwait, Oman) — exact match,
  independently re-located in the raw IOM source text (line 9813-9814).
- Section 11 §11.2: Egypt SME academy/German Chamber of Commerce (200+ SMEs by July 2024), MSMEDA, Khalifa
  Fund (UAE), Egypt Food Bank/Misr El Kheir — all four independently re-located verbatim in the raw
  2024 Annual Report source text.
- Section 11 §11.1 Control 4 / Section 10 TECH-01: AI/personalisation EBITDA USD14mn+ (FY2024) →
  USD30mn+ (FY2025) — consistent across both sections.
- Section 12: ASM-016 (GCC+Jordan pro uplift 20-28%/26-32%) — confirmed `Approved`, Low confidence, exact
  figures in `Assumptions_Register.md`.
- Section 12: TLB-019 p.9 non-high-value M1 retention -4% y/y, scoped to "competitive markets" (UAE,
  Kuwait, Qatar) — independently re-located in the raw Q4 FY25 results presentation text, page 9.
- Section 12: KPI Tree Governance family G1-G7, "0 baseline-exists, 7 newly-instrumented" — exact match in
  `KPI_Tree_v2.md`, cited identically by both Section 11 and Section 12.
- Section 12: Investment Portfolio Register ~USD55mn Food-leadership bucket and Owner-section quote cited
  by Section 11 — both confirmed verbatim in `Investment_Portfolio_Register.md`.
- Section 12: `Capital Allocation and Investment Governance.md` Open Questions quote ("No document in the
  corpus describes an internal capital-allocation committee...") — exact match.

## Summary

29 distinct claims/cross-references independently re-traced across the two sections (16 non-cross-section
citation traces + 13 cross-section reference checks). Zero hard failures. One moderate,
non-blocking documentation-sync finding in Section 12 (in-body provenance note omits mention of the Pass 3
fix round that the YAML frontmatter already documents — the underlying prose itself is correct and
matches the Pass-3-recommended wording exactly). All geography tags checked against
`Geographic_Evidence_Rules.md` and found correctly labeled (Group/GCC/country-specific/market-comparison/
inferred-applicability, as appropriate) in both sections — no unlabeled geography transfer found.

## Verdict

**PASS — both sections clear Stage 17.** Section 11 (CSR & Responsible AI): 0 defects, all 13 cross-section
references to Sections 2, 7, 8, 9, 10, 14 and to `DEC-008`/`DEC-009` verified accurate against each
referenced section's *current* text. Section 12 (Implementation Plan): 0 hard failures on independent
re-derivation — the Pass 3 fix (OPT-003's H2/H3 "beyond ~USD55mn" framing) is confirmed genuinely applied
and correctly worded; the only finding is the moderate in-body documentation-sync note above, which does
not constitute an open citation-audit failure per the 0%-tolerance rule (no claim traces to nothing or to
an unapproved assumption). Section 12's own frontmatter states it should be treated as Done "only once
Stage 17's whole-plan citation audit re-clears it" — this pass is that re-clearance; recommend Section 12's
status line be updated to reflect Stage 17 PASS (and optionally to sync the in-body note with the
frontmatter's Pass 3 mention) as a documentation housekeeping item, not a re-open of drafting.
