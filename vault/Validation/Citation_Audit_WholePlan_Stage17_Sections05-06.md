---
type: validation
sections: 5-6
pipeline_stage: "17 (whole-plan citation audit)"
run_date: 2026-07-25
auditor: independent Stage 17 reviewer
status: "PASS with findings — no hard citation failures found in Section 5 or Section 6's substantive
  numeric/named-fact claims; one moderate self-consistency defect in Section 6 (§6.6 overstates its own
  Value Driver Tree node coverage); one moderate repository-state finding (Section 5's 'all 14 Business
  Plan sections' self-description is now stale — Section 13's file is currently absent from
  Business_Plan_Drafts_v2/, a whole-plan-relevant fact outside these two sections' own content)"
---

# Citation Audit — Whole-Plan Stage 17, Sections 5 & 6

## Method
Fresh, independent read of the current text of `Section_05_AI_Technology_and_Development.md` and
`Section_06_Business_Model_and_Revenue_Streams.md` (no reliance on prior Pass 2/Pass 3 reports beyond
using them to know what was previously found — every claim re-traced from scratch). Sources opened
directly: `vault/Forecasts/Value_Driver_Tree_v2.md` (full file), `vault/Knowledge/Topics/AI.md`,
`vault/Knowledge/Entities/Technology_Platforms.md`, `vault/Forecasts/KPI_Tree_v2.md`,
`vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md` (full text),
`vault/Decisions/Decision_Log/DEC-008_section9-headline-bucket-split-presentation.md`,
`vault/Decisions/Assumptions_Register.md` (ASM-004, ASM-013, ASM-015 rows), `vault/Knowledge/Facts/Revenue.md`,
`vault/Knowledge/Facts/Customer_Growth.md`, `vault/Knowledge/Facts/Retention.md`,
`vault/Knowledge/Facts/_raw/TLB-002_facts.md`, `_raw/TLB-026_facts.md`,
`vault/Knowledge/Strategic/Revenue Model.md`, `vault/Knowledge/Topics/Advertising.md`,
`vault/Knowledge/Topics/Customer Economics.md`, `vault/Knowledge/Topics/Grocery and Retail.md`,
`vault/Knowledge/Topics/Talabat Pro.md`, `vault/Knowledge/Topics/Pricing.md`. Cross-section targets opened
in full or via targeted grep: `Section_02_Business_Description.md`, `Section_03_Market_Analysis.md`,
`Section_09_Financial_Plan.md`, `Section_11_CSR_and_Responsible_AI.md`. Confirmed the current directory
listing of `vault/Projects/Business_Plan_Drafts_v2/` directly (`Glob`) rather than trusting any section's
self-description of how many sections exist.

## Hard failures
**None found in Section 5 or Section 6.** Every numeric/named-fact claim traced in both sections resolves
to the specific cited document/page or the specific cited Value Driver Tree node/Assumption row, and the
specific figure/fact quoted is actually present there (not just the document). No claim traces to a
`Proposed` (non-Approved) Assumption row presented as usable. No Geographic Evidence Rules violation found
(Section 5: all Group-level claims correctly scoped, the one Egypt-adjacent claim — "6 of 8 countries,
excluding Egypt and Iraq" — correctly labeled as an operational-rollout fact, not an Egypt-specific one;
Section 6: the Group-level revenue mix is never presented as Egypt-representative, and Egypt's data gap is
explicitly stated in §6.1's "Geography caution" and §6.4's "What cannot be shown").

Section 5's DEC-009 characterization (the specific hard failure Pass 3 found on 2026-07-24) was
independently re-checked against the full current text of `DEC-009` and `Section_02_Business_Description.md`
§2.2: the current §5.6 text correctly states DEC-009 is "already resolved" and settles "problem 2"
(within-bucket initiative funding sequence), distinct from the still-open "problem 3" (cross-market
allocation). This fix holds. Section 5's traceability-table EBITDA citation now correctly points to
`Topics/AI.md` (not `Topics/EBITDA.md`) for the USD14mn+→30mn+ figure — this fix also holds.

## Moderate findings

### M1 (Section 6) — §6.6's self-check overstates the section's own Value Driver Tree node coverage
§6.6 states: "every revenue stream in §6.1 is traced to a specific Stage 9/10 node (N-26 through N-30)."
Checked directly against §6.1's own table: only 2 of the 5 rows actually cite a Stage 9/10 node — Commission
fees cites N-26 (Food GMV), Advertising cites N-29 (Advertising revenue). Delivery & Service fees (cites
only N-08, N-14/N-16 — Stages 3/5), Subscription fee & Other Income (cites N-07, N-08, N-20/21/22 — Stages
3/8), and Vouchers (cites only N-12 — Stage 4) cite **no** Stage 9/10 node at all. This is structurally
unavoidable, not a citation slip: `Value_Driver_Tree_v2.md`'s Stage 10 only contains three nodes (N-28
blended take rate, N-29 Advertising specifically, N-30 FY2026 guidance) — there is no dedicated VDT node
for Commission, Delivery & Service, or Subscription revenue individually, so three of §6.1's five rows
could never satisfy the "Stage 9/10 node" claim as literally stated. The underlying revenue figures
themselves are not in question (each is independently and correctly sourced to TLB primary documents
directly, verified below) — this is a Section 6 internal self-consistency defect in the Stage 13.10
cross-check paragraph's own wording, not a defect in the cited facts. **Fix needed:** reword §6.6 to state
accurately that §6.1's rows are traced to "the relevant Stage 9/10 revenue/GMV node where one exists
(N-26, N-29) and, for the remaining streams, the cross-cutting Stage 2-8 capability/behaviour nodes that
drive them" — not a blanket "every stream... N-26 through N-30" claim.

### M2 (Section 5) — "all 14 Business Plan sections" self-description is stale again, one day after being fixed
§5.5 reads: "This plan's own decision-support system is currently scoped to five candidate Investment
Options and, as of this drafting round, all 14 Business Plan sections." This was the exact sentence Pass 3
(2026-07-24) flagged as stale (previously read "six pilot Business Plan sections") and had fixed to "all
14." Independently re-verified via `Glob` against the actual current contents of
`vault/Projects/Business_Plan_Drafts_v2/`: **only 13 section files currently exist** — Section 13
(Monitoring and Evaluation) is absent. This matches the git status noted at the start of this session
(`Section_13_Monitoring_and_Evaluation.md` deleted; a differently-named untracked duplicate
`Section_13_Monitoring_and_Evaluation 2.md` was recorded in that git status but does not actually exist on
disk as of this audit). This is not a defect Section 5's own drafting introduced — it is a repository-state
change that happened *after* Section 5 was last touched, exactly the class of staleness Stage 17 exists to
catch. Neither Section 5 nor Section 6 makes any other direct reference to "Section 13" by number, so this
does not propagate into a second broken cross-reference within these two sections — but it is a
whole-plan-relevant fact the Orchestrator should know before treating any section's "all 14 sections drafted"
claim as current, and before running Stage 17 on the remaining section pairs. **Recommendation:** do not
fix this by editing Section 5's wording alone; first confirm with the Orchestrator whether Section 13
should be restored from git history or redrafted, then update every section that makes an "all 14 sections"
or similar count claim in one pass.

## Cross-section reference checks
Every place Section 5 or Section 6 makes a claim about another section's content, a Decision's status, or
a figure also used elsewhere in the plan, checked against the CURRENT text of the referenced section:

1. **Section 5 §5.1 → Section 11** ("human approval before any capital moves (see Section 11)").
   Checked `Section_11_CSR_and_Responsible_AI.md` directly: contains matching language ("gated for human
   approval before any capital actually moves"; "requires explicit human/team sign-off before any capital
   reallocation executes"). **PASS.**

2. **Section 5 §5.6 → DEC-009's status and scope** ("DEC-009, which is already resolved and settles a
   different question: initiative-level funding sequence and allocation-range presentation within each
   bucket, problem 2"). Checked `DEC-009`'s full current text: `status: approved`, resolved 2026-07-23,
   "Both open questions are now settled" — funding sequence (narrative, not headline) and allocation-range
   presentation (labeled sensitivity/appendix exhibit only). Matches exactly. **PASS** (this is the fix
   Pass 3 required, independently reconfirmed).

3. **Section 5 §5.6 → Section 2.2's "problem 3" / "problem 2" labels** ("cross-market allocation question
   (problem 3 in Section 2.2)... a different question... problem 2"). Checked
   `Section_02_Business_Description.md` §2.2 directly: problem 2 = "Within-bucket, cross-initiative
   allocation (open — this plan's primary contribution)... Five evidence-grounded candidate initiatives...
   ranked in DEC-009"; problem 3 = "Cross-market allocation (open — the largest disclosed gap)." Both
   labels match Section 5's usage exactly. **PASS.**

4. **Section 5 §5.2/§5.5 → Value_Driver_Tree_v2.md N-02/N-08/N-13** (Everyday App opex ~USD75mn; 6/8
   countries by end-2024 excl. Egypt/Iraq). Re-opened `Value_Driver_Tree_v2.md` directly: N-02 states
   "~USD 120 million (~USD 75mn opex + ~USD 45mn capex)"; N-08/N-13 corroborate the excl.-Egypt/Iraq,
   pre-Dec-2024 GCC+Jordan population. **PASS.**

5. **Section 5 traceability table → Topics/AI.md and Value_Driver_Tree_v2.md N-09** (AI EBITDA
   USD14mn+→30mn+). Re-opened both: `Topics/AI.md`'s "Why It Matters" states the figure verbatim; VDT N-09
   states it identically with the same TLB-001/TLB-002 citations. **PASS** (Pass 3's fix holds).

6. **Section 6 (frontmatter/§6.6) → Section 9's headline case** (FY2026 revenue growth 14-17% cFX, EBITDA
   margin bridge, `DEC-008` governing Section 9's headline case not Section 6). Checked
   `Section_09_Financial_Plan.md` directly: base case row states "11-14% [GMV], 14-17% [Revenue] cFX,
   Adjusted EBITDA of 4.4-4.8% of GMV (down from 6.0% in Q4 2025)," explicitly per `DEC-008`. Matches
   Section 6's description exactly; no contradiction, no figure restated inconsistently. **PASS.**

7. **Section 6 §6.1/§6.2 → Section 3's independently corroborated 3.4-3.5%-of-GMV Advertising figure and
   ~7% UAE tMart benchmark.** Checked `Section_03_Market_Analysis.md` directly: contains "8% CPG advertising
   investment ratio vs. a typical 2% industry [benchmark]," "Group-wide advertising revenue at 3.4–3.5% of
   GMV," and "3.4–3.5% of GMV vs. the ~7% benchmark reached only in UAE tMart" — matches Section 6's figures
   exactly, no value mismatch between the two sections. **PASS.**

8. **Section 6 §6.5 → Section 2.5's business-model framing** ("Consistent with Section 2.5's framing: the
   AI-enabled capital-allocation decision-support system... is an internal capability, not a separately-sold
   product"). Checked `Section_02_Business_Description.md` §2.5 directly: states the same thing verbatim in
   substance, including "Section 6 (Business Model and Revenue Streams) accordingly does not need to
   construct a new revenue stream for 'the AI system' itself." Matches, and is itself a correct forward
   cross-reference from Section 2 into Section 6. **PASS.**

9. **Section 6 §6.1 → DEC-009 / OPT-001/002/004 identities** ("OPT-002 talabat pro acceleration;
   OPT-004 advertising monetization gap closure"; "OPT-001's talabat mart densification carries an
   explicit, disclosed EBITDA drag"). Checked `DEC-009`'s options table directly: OPT-001 = dark-store
   densification, OPT-002 = pro Egypt/Iraq, OPT-004 = advertising gap. Matches Section 6's usage exactly,
   and the "EBITDA drag" claim matches VDT N-32 (G&R product-mix margin drag). **PASS.**

10. **Section 6 §6.6 → Value_Driver_Tree_v2.md node coverage claim.** See **Moderate Finding M1** above —
    the specific "N-26 through N-30, every stream" wording does not hold up against §6.1's own table.
    **FAIL (moderate, self-consistency, not a sourcing error).**

11. **Section 6 §6.6 → "No ASM-029–033 OPT-level dollar range is shown anywhere in this section."**
    Grepped Section 6's full text for "ASM-029" through "ASM-033" and for any dollar range matching the
    Investment Options' cost ranges in the Assumptions Register: none appear. Claim holds. **PASS.**

## Confirmed correct (full citation trace, beyond the cross-section checks above)
- Section 6.1 revenue-by-fee-type table (Commission/Delivery & Service/Subscription & Other
  Income/Advertising/Vouchers, FY2024 and FY2025 dollar figures and growth rates) — verified verbatim
  against `Facts/Revenue.md`'s TLB-001, TLB-002, TLB-009 entries. **PASS.**
- Blended take rate ~40%→~41% (FY24→FY25); 38%→39% Q1'25→Q1'26 — verified against TLB-001 p.27, TLB-002
  p.20, TLB-011 p.4 (via `Facts/Revenue.md`). **PASS.**
- ASM-013 (Q1 2026 Subscription 1.0%/~USD25.8mn; Own grocery & other income 15.2%/~USD408.4mn) — verified
  against `Facts/Revenue.md`'s TLB-011 mix table and the Assumptions Register row, `status: Approved`.
  **PASS.**
- TLB-019 p.13 flagged discrepancy (Commission 14.2-16.2%, Delivery & Service 12.8-14.8%, Advertising
  8.9-9.4%, Subscription & Other Income 3.3-3.5%) — verified verbatim against `Facts/Revenue.md`'s TLB-019
  entry; correctly flagged as non-reconciling rather than silently used. **PASS.**
- Qatar commission-rate cap + delivery-registration-fee ban, TLB-026 page 46 — verified verbatim against
  `Facts/_raw/TLB-026_facts.md` line 104 ("Ministry of Commerce and Industry investigation," matches
  exactly). **PASS.**
- Oman licensing dispute, TLB-001 page 32 — verified against `Facts/Competition_Facts.md` and
  `Facts/_raw/TLB-001_facts.md`. **PASS.**
- Family Plan retention premium >60%, TLB-018 page 6 — verified verbatim. **PASS.**
- CPG advertising investment ratio 8% vs. 2% benchmark, TLB-015 page 108 — verified verbatim against
  `Facts/Advertising_Facts.md`. **PASS.**
- tMart ~95% take rate (GMV-to-revenue conversion, not margin), TLB-002 page 20 — verified verbatim
  against `Facts/_raw/TLB-002_facts.md`. **PASS.**
- CARC USD89mn (1.5% of GMV, 2023) → USD155mn (1.6% of GMV, 2025), TLB-001 p.28 / TLB-002 p.21 — verified
  against `Facts/Customer_Growth.md` and `Facts/_raw/TLB-002_facts.md` (page 21 confirmed exactly). **PASS.**
- Net delivery cost 6.0%→6.3%, gross profit 12.3%→11.9% of GMV — verified against `Facts/_raw/TLB-002_facts.md`
  (page 20). **PASS.**
- Food-only AED194/3.8 orders vs. multi-vertical AED814/12.8 orders, TLB-026 pp.91/122 — verified verbatim
  against `Facts/_raw/TLB-026_facts.md` line 27. **PASS.**
- ASM-004 (talabat pro Egypt price point, `status: requires-revision`, not Approved) — verified against
  `Assumptions_Register.md`'s superseded-assumptions review table. Section 6 correctly states the gap and
  correctly does not cite an Egypt price figure. **PASS.**
- No Egypt-specific fee-type revenue breakdown — verified against `Strategic/Revenue Model.md`'s
  "Egypt-Specific Considerations" section, present verbatim. **PASS.**
- talabat pro subscriber GMV share 32%→49% (Q1 2025→Q1 2026) — verified against `Topics/Talabat Pro.md`
  and VDT N-08. **PASS.**
- Section 5: talabat's stack licensed from Delivery Hero SE — verified against `Entities/Technology_Platforms.md`.
  **PASS.**
- Section 5: KPI Tree Governance family "7/7 newly-instrumented KPIs with no baseline" — verified verbatim
  against `KPI_Tree_v2.md` line 162. **PASS.**

## Summary
No hard citation failures in either section. Two moderate findings: (1) Section 6's §6.6 self-check
overstates its own Value Driver Tree node coverage (structurally impossible to satisfy as worded, since
VDT's Stage 10 has no dedicated per-stream node for 3 of the 4 revenue lines) — a wording fix, not a
sourcing fix, since every underlying figure is independently well-sourced; (2) Section 5's "all 14 Business
Plan sections" self-description, freshly fixed by Pass 3 on 2026-07-24, is stale again as of this audit
because Section 13's draft file is currently missing from `Business_Plan_Drafts_v2/` — a repository-state
change external to Section 5's own content, flagged here rather than fixed, per this audit's no-edit
mandate, and worth the Orchestrator's attention before other sections' "14 sections" claims are trusted.
All eleven cross-section reference checks performed either passed on direct re-verification against the
currently-drafted target section, or are captured as Moderate Finding M1/M2 above. No figure appears with
a different value across Section 5 and Section 6 (the two sections do not share any of the same underlying
metric, so no direct numeric conflict was possible to find — checked explicitly per the task brief's
prompt to compare Section 6's revenue figures against Section 5's AI/EBITDA figures).

## Verdict
**Neither section has an open hard citation failure** and both may proceed past Stage 17 on citation
grounds. Section 6 should have §6.6's node-coverage sentence reworded before final publication (moderate,
non-blocking per the citation-audit skill's hard-failure threshold, but should not be left uncorrected).
Section 5's "all 14 sections" sentence should not be re-edited in isolation — it is a symptom of a
repository-level fact (Section 13 missing) that needs Orchestrator-level resolution first.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_06_Business_Model_and_Revenue_Streams.md`
- `vault/Validation/Citation_Audit_Section_05_v2_Pass2.md`, `_Pass3.md`
- `vault/Validation/Citation_Audit_Section_06_v2_Pass2.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/KPI_Tree_v2.md`
- `vault/Decisions/Decision_Log/DEC-008_section9-headline-bucket-split-presentation.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
- `vault/Decisions/Assumptions_Register.md`
- `vault/Knowledge/Facts/Revenue.md`, `Facts/Customer_Growth.md`, `Facts/Advertising_Facts.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_03_Market_Analysis.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_11_CSR_and_Responsible_AI.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`
