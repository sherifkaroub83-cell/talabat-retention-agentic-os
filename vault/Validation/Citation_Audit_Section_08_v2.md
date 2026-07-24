---
type: validation
section: 8 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_08_Operations_Plan.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md)
run_date: 2026-07-24
auditor: top-level session, acting in the evidence-citation-agent role (Tooling note: no `Agent` tool
  available this session — see the section draft's own Tooling note and `bp-orchestrator.md`'s "Known
  runtime constraint")
status: OPEN → PASS (self-verified, 2026-07-24) — 0 issues found in-session; independent Pass 2 re-check
  still required
---

# Citation Audit — Section 8 (v2, Group-wide capital-allocation draft)

No prior Section 8 draft exists under `Business_Plan_Drafts_v2/` — this is the first citation audit run
against this section. (A superseded companion exists at
`vault/Projects/Business_Plan_Drafts/Section_08_Operations_Plan.md`, drafted for the retired
Egypt-retention problem; per standing instruction it was not read as an input and is not a citation
source for this audit.)

## Method

Walked the section sentence by sentence; every number or named-fact claim traced to either (a) a direct
`(DocID, page N)` Facts/Sources/Topics citation, or (b) an `ASM-###` row with `status: Approved`. Cited
Topic Notes (`Corporate Structure.md`, `Strategic/Decision-Making Process.md`, `Capital Allocation and
Investment Governance.md`, `Logistics.md`, `Delivery Operations.md`, `AI.md`, `Competitive Weaknesses.md`,
`Entities/Executives.md`) were re-read this session and cross-checked against the section's use of them,
not just presence of a citation string. **One genuine new evidence pull this session:** the section's
security/compliance claims (§8.5) and the GLSA/CQCA/Kitchens Services Agreement claims (§8.1-8.2) were not
found pre-synthesized in any existing Topic Note, so they were traced directly to the primary source raw
text (`vault/Knowledge/_source_text/Talabat-Holding-plc_International-Offering-Memorandum.txt`), with page
numbers read from that file's own `===== PAGE NN =====` markers. This convention was cross-checked for
consistency against `Facts/Competition_Facts.md`'s independently-established TLB-026 page citations for
the Qatar/Oman/Kuwait/UAE regulatory content (both sets of citations agree the antitrust/Qatar-cap passage
sits at TLB-026 pages 46-47, confirming the marker-based page numbering used here matches the vault's
existing citation convention for this document). Checked geography tagging against
`vault/Architecture/Geographic_Evidence_Rules.md` for every numeric claim.

## Pass/Fail Table

| # | Claim (location) | Cited to | Verdict | Note |
|---|---|---|---|---|
| 1 | GLSA "Central Value Baskets" (data/logistics/customer-mgmt/audit/quick-commerce/FinTech tools) for Bahrain, Egypt, Iraq, Oman, Jordan, Qatar (§8.1) | TLB-026, pp.152-153 | PASS | Verified directly against the raw source text at the "Global Licensing and Services Agreement with Delivery Hero" heading (line 10662, PDF page marker 152) and its continuation (page marker 153) — the six named GLSA-Recipient markets and the itemized tool list are quoted accurately, not paraphrased beyond the source's own wording. |
| 2 | Separate GLSA UAE / GLSA Kuwait agreements exist (§8.1) | TLB-026, p.156 | PASS | Verified: the CQCA passage (page marker 156) refers to "the GLSA, the GLSA Kuwait and the GLSA UAE" as three distinct instruments — correctly inferred as confirming UAE/Kuwait have their own parallel agreements, stated as an inference from the text's own phrasing, not overclaimed as a separately-titled clause the section quotes in full. |
| 3 | CQCA (tMart-specific services) and Kitchens Services Agreement (UAE, Bahrain, Kuwait, Qatar, Jordan) (§8.1, §8.2) | TLB-026, p.156 | PASS | Verified directly against the raw source text, page marker 156 — both agreements, their named recipient markets, and their service lists (catalogue/assortment intelligence, purchase management, supplier portal, inventory management, store management, rider management, advertising/promotion tools for CQCA; the Kitchens Services description) are quoted accurately. |
| 4 | GLSA/CQCA/Kitchens Services Agreements governed by German law, disputes in German courts (§8.2) | TLB-026, p.156 | PASS | Verified directly against the raw source text, same page marker. |
| 5 | Delivery Hero Group Inter-Company DTA (15 Oct 2021, amended 30 Oct 2024); Binding Corporate Rules Policy; EU Standard Contractual Clauses under Regulation (EU) 2016/679 (GDPR) incorporated by reference (§8.2, §8.5) | TLB-026, pp.156-157 | PASS | Verified directly against the raw source text spanning page markers 156-157 — the DTA's date, amendment date, Binding Corporate Rules requirement, and the specific EU regulation number/date for the Standard Contractual Clauses are quoted accurately from the source. |
| 6 | December 2022 hack, external attacker (Norway-based), 144,469 customers' personal data accessed in one unnamed market, competent data-protection regulator informed and investigated, USD150,000 penalty paid (§8.5) | TLB-026, p.49 | PASS | Verified directly against the raw source text, page marker 49 — figure, date, and penalty amount quoted accurately; correctly noted that the specific market is not named in the disclosure (the section states this explicitly rather than guessing which of the 8 markets). |
| 7 | "Vulnerable to any security breaches or data protection issues... at the parent company level" (§8.5) | TLB-026, p.49 | PASS | Verified as a near-verbatim quote from the same page-49 passage, immediately preceding the hack disclosure in the source text. |
| 8 | Antitrust/competition-law exposure — Kuwait Competition Protection Authority, UAE Competition and Consumer Protection Department, Iraq competition-authority inquiry (§8.5) | TLB-001, pp.32,34; TLB-002, p.26; TLB-026, pp.46-47 | PASS | Verified against `Facts/Competition_Facts.md`, which independently cites the identical figures and pages for these three jurisdictions' antitrust exposure, cross-confirming both the facts and the page numbers used here. |
| 9 | Qatar MOCI commission-rate price cap and delivery-registration-fee ban (§8.5) | TLB-026, pp.46-47 | PASS | Verified against `Facts/Competition_Facts.md` ("Qatar: restaurant-owner complaints led to a Ministry of Commerce and Industry investigation and imposition of a commission-rate price cap plus a ban on delivery registration fees, TLB-026, page 46") and directly against the raw source text at page marker 46 — identical facts, identical page. |
| 10 | Oman licensing dispute (§8.5) | TLB-001, p.32 | PASS | Verified against `Facts/Competition_Facts.md`: "Regulatory risk examples: government-imposed commission-rate caps in Qatar; licensing disputes in Oman (TLB-001, page 32)." |
| 11 | 235TB/day data-processing infrastructure (§8.1) | TLB-002, p.15 | PASS | Verified against `Topics/AI.md` verbatim; identical figure and page independently used in `Section_05_AI_Technology_and_Development.md` §5.4, no restatement conflict. |
| 12 | Cairo as one of talabat's two core tech hubs (§8.1) | TLB-023, p.7 | PASS | Verified against `Topics/Logistics.md` Business Implications, which cites the identical fact and page. |
| 13 | Zone Elite Investment LLC — UAE logistics associate, equity-accounted (§8.1) | `Topics/Logistics.md`; `Corporate Structure.md` | PASS | Verified both notes name Zone Elite Investment LLC as the UAE logistics associate; no numeric claim attached, entity fact only. |
| 14 | Board composition — Vandepitte (Chair, also DH SE COO), Krause (Vice-Chair, also DH SE General Counsel), Popp (Non-Executive Director, also DH SE interim CFO) (§8.4) | `Corporate Structure.md`; TLB-026 | PASS | Verified against `Corporate Structure.md` and `Entities/Executives.md`, both citing identical role pairings, sourced to TLB-026 and cross-corroborated by TLB-008/TLB-001/TLB-004. |
| 15 | Egypt's two legal entities (Delivery Hero Egypt SAE, Delivery Hero Dmart Egypt LLC), no disclosed local board/decision rights (§8.4) | `Corporate Structure.md` Open Questions | PASS | Verified verbatim against `Corporate Structure.md`'s Open Questions section. |
| 16 | CEO transition Rodriguez → Gyssels (between TLB-018 Aug 2025 and TLB-009 Feb 2026); board-seat change Al Jbori → Al-Halabi (between TLB-004/TLB-026 and TLB-008), both unnarrated (§8.3, §8.4) | `Corporate Structure.md`; `Entities/Executives.md` | PASS | Verified verbatim against both notes, including the explicit "no document narrates either change" caveat, preserved accurately in this section rather than presented as resolved. |
| 17 | Named executives — Alfakesh (CFO), Assadi (COO), Makarem (SVP Grocery & Retail), Vecchio (VP People & Strategy / New Ventures incl. loyalty), Abu Amara (Head of GRC), El Kadri (Head of Internal Audit), AlGhrawi (VP Legal, GRC & Board Secretary) (§8.3) | `Entities/Executives.md` | PASS | Verified every named role and title directly against the Executives roster; the claim that no Chief Data Officer / Head of Data Science / capital-allocation function is named anywhere in the roster was independently confirmed by re-reading the entire `Entities/Executives.md` file in full this session — no such role appears. |
| 18 | ~90-95% 3PL/freelance rider sourcing (§8.3) | `Strategic/Competitive Weaknesses.md`; `Facts/Logistics_Facts.md` | PASS | Verified against `Strategic/Competitive Weaknesses.md`, which states this figure as a Group-wide, talabat-acknowledged structural dependency. |
| 19 | tMart store count 130 (end-2024) → 160 (2025) (§8.1, §8.3) | TLB-002, pp.12,14 | PASS | Verified against `OPT-001_talabat-mart-dark-store-densification.md`'s "Evidence" section, which cites the identical figures and pages. |
| 20 | "These are investments rather than costs..." / CVP-over-discounting framing (§8.4) | TLB-020, p.16 | PASS | Verified verbatim against `Topics/Capital Allocation and Investment Governance.md` and `Section_07_Marketing_and_Sales_Strategy.md` §7.1, both independently citing identical wording and page. |
| 21 | Decision-Making Process "venue pattern" (Capital Markets Day / Annual Report / quarterly results) (§8.4) | `Strategic/Decision-Making Process.md` | PASS | Verified verbatim against the note's own Synthesis section. |
| 22 | No internal capital-allocation committee, approval threshold, or stage-gate process disclosed anywhere in the corpus (§8.4, §8.5, Tooling note) | `Topics/Capital Allocation and Investment Governance.md` | PASS | Verified verbatim against the note's Overview and Open Questions ("No document in the corpus describes an internal capital-allocation committee, an investment-approval threshold, a stage-gate process..."). |
| 23 | KPI Tree Governance family (G1-G7), all seven newly-instrumented, none with a corpus baseline (§8.4) | `vault/Forecasts/KPI_Tree_v2.md` | PASS | Verified directly against the file's Governance KPIs table and its "Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented" summary line. |
| 24 | Per-option required capabilities / stage gates for `OPT-001`–`005` (§8.1, §8.3, §8.4) | `vault/Decisions/Investment_Options/OPT-001...005...md` | PASS | Verified each cited capability/stage-gate statement (dark-store real estate/inventory systems for OPT-001; local-market calibration and Partner relationships for OPT-002; commission-rate negotiation for OPT-003; Partner-facing ad-sales capability for OPT-004; data-science/ML engineering and per-market model tuning for OPT-005) directly against each option's own "Required capabilities," "Risks," and "Stage gates" sections — no capability or gate is invented or restated with different content than the source record. No dollar range from any `OPT-` record is reproduced anywhere in this section (confirmed by a full re-scan of §8.1-8.6), so `DEC-009`'s mandatory disclosure sentence is correctly not triggered. |
| 25 | Problem Charter's no-customer-level-data / human-approval-gated principle (§8.4, §8.5) | `Problem_Charter.md` | PASS | Verified verbatim against the charter's "Role of AI in this plan" section. |
| 26 | No jurisdiction-specific data-protection statute for any of talabat's eight markets is disclosed anywhere in the primary corpus (§8.5, Caution paragraph) | Absence-of-disclosure finding, this session's own verification | PASS (correctly handled as a stated gap, not a citation failure) | This session searched `vault/Knowledge/` for "data protection," "privacy," "GDPR," and "PDPL" (52 files matched, all reviewed by category) and specifically re-read `Topics/AI.md`, `Strategic/Competitive Weaknesses.md`, and `Facts/Competition_Facts.md` in full — none names a jurisdiction-specific data-protection statute for any of the 8 markets; the only disclosed data-governance mechanism found anywhere in the corpus is the parent-level DTA/SCC/GDPR-reference framework (item 5 above). This is the correct treatment of a genuine evidence gap per the citation-audit skill's own standard (a stated absence, not an invented citation) — directly analogous to how Section 7's citation audit (item 12) handled the funnel-conversion-data gap. |

## Geographic Evidence Rules check

**Clean — no fix required this session.** Every numeric or entity claim in the section carries an
explicit geography tag, consistent with `vault/Architecture/Geographic_Evidence_Rules.md`:
- Group-level figures (235TB/day, DTA/GLSA mechanics, KPI Governance family, board composition,
  "investments not costs" framing, capital-allocation governance gap) are consistently tagged `Group`.
- The GLSA-Recipient market list (Bahrain, Egypt, Iraq, Oman, Jordan, Qatar) is correctly tagged
  `market-comparison`, not silently generalized to all 8 markets — the section explicitly notes UAE and
  Kuwait have their own separate instruments rather than omitting them.
- The Kitchens Services Agreement's named markets (UAE, Bahrain, Kuwait, Qatar, Jordan) are correctly
  tagged `market-comparison`, distinct from the GLSA's market list (which excludes UAE/Kuwait and
  includes Egypt/Iraq/Oman) — the section does not conflate the two agreements' market scopes.
- Cairo's tech-hub status and Zone Elite Investment LLC (UAE) are correctly tagged `country-specific`
  (Egypt, UAE respectively) and not generalized to the Group.
- The antitrust/regulatory exposure items are correctly tagged per named jurisdiction (Kuwait, UAE, Iraq,
  Qatar, Oman individually) — no item is presented as a Group-wide regulatory finding.
- The December 2022 hack is correctly tagged `Group` with the specific affected market explicitly stated
  as undisclosed, rather than the section guessing or defaulting to Egypt or any other single market.
- "MENA" is never used anywhere in the section as a stand-in for the 8-market footprint.
- No pre/post-FY2025 non-GCC figure is cited in this section at all — not implicated.
- The "no jurisdiction-specific data-protection statute disclosed" finding (item 26) makes no geography
  claim of its own beyond stating the absence across all 8 markets uniformly — correctly handled as a gap
  statement, not a claim requiring a specific geography tag.

## Summary

- **26 claims/rows checked.**
- **26 pass**, 0 found-and-fixed, 0 open.
- **0 missing-citation failures** and **0 not-yet-approved-Assumption dependencies** — this section cites
  no `ASM-` row at all (it reproduces no dollar figure from `OPT-001`–`005`, so no Assumption-Register
  dependency exists for it).
- **0 same-tier evidence conflicts found** during assembly.
- **One genuine new primary-source citation added to the vault's working evidence base this session**
  (the GLSA/CQCA/Kitchens Services Agreement structure and the December 2022 hack/DTA disclosures,
  TLB-026 pages 46-49, 152-157) — not previously synthesized into any Topic Note; traced directly to the
  primary source and cross-verified against the vault's existing TLB-026 page-citation convention
  (item 9's cross-check against `Facts/Competition_Facts.md`).

## Verdict
**OPEN → PASS (self-verified, 2026-07-24).** No citation failure, no missing geography tag, and no
misapplied inference found in this audit. This is a self-check, not an independent Pass 2
re-verification — per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline, a genuinely
independent citation-audit re-check (a fresh `evidence-citation-agent` thread) is still required before
Section 8 can be marked citation-verified/✅ Done. **Recommendation for the Pass 2 reviewer:** the six
newly-pulled TLB-026 raw-text citations (items 1-7, 9) are the highest-value items to independently
re-verify first, since they are not yet cross-corroborated by an existing Topic Note the way most of this
section's other citations are.
