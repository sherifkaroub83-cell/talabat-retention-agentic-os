---
section: 8
title: Operations Plan
status: Drafted — Pass 2 and Pass 3 findings fixed and reconfirmed ([[Citation_Audit_Section_08_v2_Pass2]], [[Citation_Audit_Section_08_v2_Pass3]]); Stage 17 whole-plan citation audit ([[Citation_Audit_WholePlan_Stage17_Sections07-08]], 2026-07-25) found 1 further hard failure Pass 2/3 missed — §8.1 and §8.2 falsely claimed the 235TB/day data-processing figure was "already established in Section 5.4," when Section 5 §5.4 explicitly states infrastructure is not itemized in the corpus; fixed 2026-07-25 (the figure remains correctly and independently cited to TLB-002 p.15, the false cross-reference removed) — not yet reconfirmed by a fresh independent pass; treat as Done only once Stage 17 fully re-clears it
pipeline_run: 2026-07-24
supersedes_note: "Companion to (not a replacement of) vault/Projects/Business_Plan_Drafts/Section_08_Operations_Plan.md, which was drafted for the superseded Egypt-retention problem and stays untouched as historical record — not read as an input to this draft, per the standing instruction never to read from the non-_v2 drafts directory. This file is the fresh draft required by the 2026-07-23 pivot to the Group-wide capital-allocation problem (Problem_Charter.md)."
---

# 8. Operations Plan

> **Pipeline provenance note.** Drafted by the top-level session running Part B (Stage 13) of
> `vault/Architecture/Business_Plan_Generation_Pipeline.md` for the talabat Group 2026 capital-allocation
> problem (`Problem_Charter.md`).
>
> **Tooling note (read first).** This session's toolset is `Read`, `Write`, `Edit`, `Glob`, `Grep` only —
> no `Agent`, `WebSearch`, or `WebFetch` tool was available, reproducing the runtime constraint first
> documented in the Phase 7 pilot (`vault/Validation/Phase7_Pilot_Execution_Report_Section_03.md`) and
> recorded in `bp-orchestrator.md`'s "Known runtime constraint" section. Per that section's documented
> fallback, every specialist role below was executed **in-context by this same session**, reading each
> agent's own `.md` definition and skill file and following its documented procedure directly, rather than
> being delegated to an isolated subagent thread:
> - **13.1 Intake & Scoping** — this session, directly, against `AI_Business_Plan_Template.md` §8 and
>   `.claude/skills/business-plan-drafting/SKILL.md`'s Section 8 entry (infrastructure needs; dev/
>   maintenance workflow; key roles and skills gap; 7S alignment check; security/compliance).
> - **13.2 Evidence Assembly** — this session, directly, pulling `Topics/Corporate Structure.md`,
>   `Strategic/Decision-Making Process.md`, `Topics/Capital Allocation and Investment Governance.md`,
>   `Topics/Logistics.md`, `Topics/Delivery Operations.md`, `Topics/AI.md`, `Entities/Executives.md`,
>   `Strategic/Competitive Weaknesses.md`, plus Part A's assembled investment evidence
>   (`vault/Decisions/Investment_Options/OPT-001` through `OPT-005`, `DEC-009`,
>   `vault/Forecasts/KPI_Tree_v2.md`'s Governance family). **One genuine new primary-source pull made
>   during this stage:** the corpus's disclosed data-security/data-transfer/services-agreement
>   mechanics (the December 2022 data-breach disclosure; the Delivery Hero Group Inter-Company Data
>   Transfer Agreement; the Global Licensing and Services Agreement's "Central Value Baskets") exist in
>   the primary source (TLB-026, the International Offering Memorandum) but had not yet been
>   synthesized into any Topic Note — this section cites them directly to the raw source text
>   (`vault/Knowledge/_source_text/Talabat-Holding-plc_International-Offering-Memorandum.txt`) with page
>   numbers taken from that file's own `===== PAGE NN =====` markers, consistent with the vault's
>   existing page-citation convention for TLB-026 (verified by cross-checking against
>   `Facts/Competition_Facts.md`'s independently-established TLB-026 page citations for the same
>   document). This is new evidence assembly from an existing primary source, not new external research.
> - **13.3 Gap Detection** — this session, directly. Two gaps flagged and handled per the skill's own
>   pre-written Section 8 "Caution" plus this session's own reading: (1) **no internal capital-allocation
>   governance mechanics are disclosed anywhere in the corpus** (`Capital Allocation and Investment
>   Governance.md`) — any stage-gate/approval workflow this section proposes for "Systems" is this OS's
>   own construction, stated explicitly, per the same discipline as `Topics/Capital Allocation and
>   Investment Governance.md`'s own Business Implications; (2) **no jurisdiction-specific data-protection
>   statute (e.g., a named UAE, Egypt, or other market data-protection law) is disclosed anywhere in the
>   primary corpus** — only the parent-level, EU-oriented Data Transfer Agreement mechanism is disclosed;
>   this section states that gap openly in §8.5 rather than inventing eight national-law citations the
>   corpus does not support. Neither gap required Research/Forecast/Decision escalation: both are
>   evidence-absence findings this section states directly, following the same "say so explicitly" pattern
>   `Capital Allocation and Investment Governance.md` itself models — not a claim requiring external
>   resolution.
> - **13.4 External Research Resolution (`research-agent` role)** — determined **not applicable**: no
>   gap in this section requires external (non-corpus) research; both flagged gaps are absence-of-
>   disclosure findings within the existing 29-document corpus, correctly stated as gaps rather than
>   filled with outside sourcing per `CLAUDE.md`'s "ground claims in the sources" instruction.
> - **13.5 Forecast & Assumption Generation (`forecasting-agent` role)** — determined **not applicable**:
>   this section makes no new quantitative forecast; where it references `OPT-001`–`005`'s cost ranges it
>   does so narratively (capability/skills requirements only, no dollar figures reproduced), so no new
>   `ASM-` row was needed and the `DEC-009` mandatory-disclosure-sentence trigger (reproducing an
>   `ASM-029`–`033` dollar range) does not apply anywhere in this section.
> - **13.6 Decision Escalation (`decision-steward` role)** — this session, directly, in the narrow sense
>   of *flagging* rather than resolving: this section's proposed Systems mechanism (a stage-gate/
>   approval workflow for the USD175mn programme, §8.4) is explicitly labeled as this OS's own proposal
>   requiring human/team approval before adoption, not a decision this section resolves unilaterally —
>   consistent with `Capital Allocation and Investment Governance.md`'s own Business Implications and the
>   Responsible-AI principle Section 11 will develop further. No new `DEC-` record was created, because no
>   irreversible or headline-consequential judgment call was made here beyond what `Capital Allocation and
>   Investment Governance.md` and `KPI_Tree_v2.md`'s Governance-family framing had already flagged as
>   open.
> - **13.7 Evidence Ranking & Conflict Resolution (`evidence-citation-agent` role)** — this session,
>   directly: no same-tier evidence conflict was found during assembly for this section. One pre-existing
>   open item is carried forward without re-litigation: the corpus's two unexplained leadership
>   transitions (CEO Rodriguez→Gyssels; board seat Al Jbori→Al-Halabi), already flagged and unresolved in
>   `Corporate Structure.md` and `Decision-Making Process.md` — used here as a stated Staff/Structure
>   caveat (§8.4), not re-investigated.
> - **13.8 Drafting (McKinsey Lens)** — this session, directly (below).
> - **13.9 Citation Verification (`evidence-citation-agent` role)** — this session, directly, per
>   `.claude/skills/citation-audit/SKILL.md`; output at
>   `vault/Validation/Citation_Audit_Section_08_v2.md`, **Pass 1/self-reviewed**.
> - **13.10 Cross-Section Consistency & KPI Alignment** — this session, directly (Section 8 is not a
>   primarily financial/KPI section, so the Orchestrator role applies per the pipeline's own delegation
>   map): cross-checked against `Section_05_AI_Technology_and_Development.md`'s infrastructure/build-buy-
>   partner findings and `Section_02_Business_Description.md`'s governing hypothesis; no contradiction
>   found (see §8.6).
> - **13.11 QA & Final Review (`qa-review-agent` role)** — this session, directly, per
>   `.claude/skills/qa-review/SKILL.md`, including the Problem Consistency, Financial Integrity, and
>   Geographic Evidence gates; output at `vault/Validation/QA_Review_Section_08_v2.md`, **Pass 1/self-reviewed**.
>
> Per `Business_Plan_Generation_Pipeline.md`'s gate rules, self-reviewed 13.9/13.11 earn this section
> **"Drafted — self-reviewed," not the unqualified "✅ Done."** A genuinely independent Pass 2 (a fresh,
> separately-invoked citation audit and QA review) is still required before this section is
> submission-final.
>
> **Addendum, 2026-07-24 (independent Pass 2 review).** An independent citation audit and QA review
> ([[Citation_Audit_Section_08_v2_Pass2]], [[QA_Review_Section_08_v2_Pass2]]) re-verified every citation
> in this section, with particular depth on the raw-primary-source pulls this section introduced for the
> first time (GLSA, CQCA, Kitchens Services Agreement, Inter-Company DTA, the December 2022 breach — all
> independently re-located and re-read directly in `Talabat-Holding-plc_International-Offering-
> Memorandum.txt`, not merely trusted). **One defect found and fixed:** the "130 stores end-2024" figure
> in §8.1 was misattributed to TLB-002; it is TLB-001, page 17 (only the "~160, 2025" figure is TLB-002).
> Corrected in §8.1's body text and the traceability table. All other citations, the 7S rating
> justifications, and the executive-roster claims independently re-verified clean.

---

## Answer, stated first

talabat does not need to build new operational infrastructure to execute this plan's recommendation —
its technology and delivery infrastructure is already licensed and operating at Group scale through a
disclosed set of inter-company services agreements with parent Delivery Hero SE (the Global Licensing and
Services Agreement and its category-specific variants), and its logistics/dispatch stack already runs
across all eight markets. **What this plan's own 7S alignment check finds is a genuine, honestly-named
organizational gap, not an infrastructure one:** talabat's disclosed operating model is strong on Strategy
(the Everyday App/Food-leadership split and the CVP-over-discounting positioning are clear and
consistently communicated) and Style (a recognisable, repeated investor-communication cadence), adequate
but concentrated on Structure and Staff (governance and named executive roles are visible but centred on
Delivery Hero SE-overlapping seats, with two unexplained recent leadership transitions), and **not ready
on Systems** — no internal capital-allocation committee, approval threshold, or stage-gate process for
this specific USD175mn programme is disclosed anywhere in the 29-document corpus
(`Topics/Capital Allocation and Investment Governance.md`) — and shows a real **Skills** gap, since no
named data-science, capital-allocation, or portfolio-management function appears in the executive roster
this corpus discloses. This section names those misalignments honestly and proposes closing the Systems
gap with a stage-gate mechanism this OS explicitly labels as its own recommendation, gated for human
approval, not a description of how talabat actually runs its own capital-allocation process today.

---

## 8.1 Infrastructure Needs

**The technology layer is inherited, not built.** talabat's underlying infrastructure runs on capability
licensed from Delivery Hero SE rather than owned or engineered standalone by talabat itself, delivered
through a disclosed Global Licensing and Services Agreement (GLSA): members of the Group in Bahrain,
Egypt, Iraq, Oman, Jordan, and Qatar receive a defined "Central Value Basket" of data-management and
communication tools, logistics tools (including rider-recruitment tools), customer-management tools,
audit tools, quick-commerce tools (catalogue and assortment intelligence, purchase-management tools,
supplier portal, inventory-management tools, store management, rider-management tools, advertising and
promotion tools), FinTech tools (wallets, payment and fraud-protection solutions), and business-management
services spanning sales/operations and international marketing, including "customer loyalty and
subscription" support *(market-comparison: Bahrain, Egypt, Iraq, Oman, Jordan, Qatar; TLB-026, pages
152-153)* — with parallel, separately-named GLSA agreements covering UAE and Kuwait specifically (implied
by the corpus's reference to "the GLSA, the GLSA Kuwait and the GLSA UAE" as distinct instruments; TLB-026,
page 156). talabat pays Delivery Hero arm's-length compensation for this basket, calculated per specific
service line (TLB-026, page 153). **So what:** this is the concrete evidence base for Section 5.2's
build/buy/partner finding — the "partner" arrangement is not a general description, it is a named,
priced, multi-market services contract that already covers most of what OPT-001 through OPT-005 would
draw on operationally (inventory-management tools for OPT-001; loyalty/subscription support for OPT-002;
advertising/promotion tools for OPT-004; the shared data layer for OPT-005).

**Data-processing scale (Group, disclosed).** talabat processes over 235 terabytes of data daily to run
its AI/personalisation, dispatch, and ad-targeting capability *(Group; TLB-002, page 15)* — this figure is
not discussed in Section 5, whose own §5.4 states infrastructure is not itemized in the corpus beyond the
Delivery Hero licensing relationship, so it is stated here in full rather than cross-referenced; `OPT-005`'s
own record states this infrastructure would need to scale further to support continued AI/personalisation
investment (`vault/Decisions/Investment_Options/OPT-005_ai-personalisation-capability-scaling.md`).

**In-house technical capacity exists in Egypt specifically.** Cairo is named as one of talabat's two core
technology hubs building its logistics and service-technology stack *(country-specific, Egypt; TLB-023,
page 7)* — a structural asset directly relevant to `OPT-002` (pro acceleration in Egypt/Iraq), since it
means Egypt is not a purely consuming market for this infrastructure but one of the two places it is built.

**Dark-store/inventory infrastructure (OPT-001-specific).** talabat mart's principal-model operation
requires dark-store real-estate build-out and staffing across up to eight markets, plus inventory/
replenishment systems structurally distinct from the commission-based Local Shops model (`OPT-001`'s own
"Required capabilities"; Group; store count almost 130 end-2024 (TLB-001, page 17) → ~160, 2025 (TLB-002,
pages 12, 14)). The CQCA
(a category-specific GLSA variant) was the disclosed contractual mechanism through which tMart-specific
tools (catalogue/assortment intelligence, purchase management, supplier portal, store management) were
delivered to the operating entities through 31 December 2024; effective 1 January 2025, the CQCA
Recipients receive these same tools via GLSA/GLSA Kuwait/GLSA UAE sub-licensing instead, following the
CQCA Recipients' and Delivery Hero's 29 October 2024 agreement to terminate the CQCA as it applies to
those recipients *(Group; TLB-026, page 156)*.

**One equity-accounted logistics associate (country-specific, UAE).** Zone Elite Investment LLC is named
as talabat's UAE logistics associate (`Topics/Logistics.md`, `Corporate Structure.md`) — the only named
non-wholly-owned operational infrastructure entity in the corpus, relevant background for any UAE-specific
logistics-capacity assumption underlying `OPT-003` (Food-leadership CVP, targeted partly at UAE).

**This plan's own decision-support infrastructure.** As described in Section 5.1 and 5.4, the AI-enabled
decision-support layer this plan itself constitutes runs on the OS's existing agentic tooling and
version-controlled vault architecture — no new infrastructure line is proposed for it here; its "capex" is
analyst time and governance discipline, not hardware or cloud spend.

## 8.2 Development and Maintenance Workflow

**What is disclosed: a contractual services structure, not an internal software development lifecycle.**
No document in the corpus describes talabat's internal engineering process (sprint cadence, release
process, environment/staging structure, or code-ownership model) — this is a genuine gap, stated openly
rather than invented. What *is* disclosed is how the underlying capability is provided and paid for: the
GLSA (§8.1) sets the terms on which Delivery Hero supplies and talabat "localises and uses" the Central
Value Baskets *(Group/market-comparison; TLB-026, pages 152-153)*, the CQCA set equivalent terms for
tMart-specific tools through 31 December 2024, since when the same tools are delivered via GLSA
sub-licensing instead *(Group; TLB-026, page 156)*, and a further Kitchens Services Agreement (effective 1
January 2022, amended 29 October 2024) covers the Kitchens business specifically in the UAE, Bahrain,
Kuwait, Qatar, and Jordan *(market-comparison: UAE, Bahrain, Kuwait, Qatar, Jordan; TLB-026, page 156)*.
All three are governed by German law, with disputes resolved in German courts (GLSA: TLB-026, page 153;
CQCA and Kitchens Services Agreement: TLB-026, page 156) — a
detail worth naming because it confirms these are formal, arm's-length inter-company contracts, not an
informal shared-services arrangement. **So what:** "maintenance" of talabat's core technology, for the
purposes of this programme, is contractual and inter-company, not a talabat-internal release cycle this
plan can describe or optimise directly — any recommendation this plan makes about accelerating a
technology-dependent option (e.g. OPT-001's inventory tooling, OPT-005's model tuning) implicitly depends
on Delivery Hero's own service delivery under these agreements, a dependency this plan names rather than
assumes away.

**For this plan's own decision-support system:** the "development and maintenance workflow" is the
19-stage pipeline itself (`Business_Plan_Generation_Pipeline.md`) — new evidence enters through Stages
1-12 (Part A) and 13.2-13.7 (Part B), changes are version-controlled through the Decision Log and
Assumptions Register (a re-approval, not a silent edit, is required to change an `Approved` row), and the
git history of the vault is the audit trail. This is explicitly this OS's own proposed and already-
operating mechanism, not a description of a talabat process (already established Section 5.6, restated
here for completeness against Section 8's specific "development and maintenance workflow" requirement).

## 8.3 Key Team Roles and the Skills Gap vs. Today

**Named roles the corpus discloses that this programme would plausibly draw on.** talabat's executive
roster includes several roles directly relevant to executing and governing this programme: Khaled
Alfakesh, Chief Financial Officer since 2016, the most visible existing sponsor for a capital-allocation
discipline function; Pedram Assadi, Chief Operations Officer; Wassim Makarem, SVP Grocery & Retail,
described as "at the forefront of driving talabat's regional quick commerce initiatives" — the natural
existing owner for `OPT-001`; Stefano Vecchio, VP People & Strategy, who also oversees "New Ventures"
including talabat's loyalty programmes — the natural existing owner for `OPT-002`; and a governance-
adjacent cluster — Mohamd Abu Amara (Head of Governance, Risk & Compliance), Oussama El Kadri (Head of
Internal Audit), and Abdullah AlGhrawi (VP Legal, GRC & Board Secretary, the DFM buyback notice signatory)
*(Group; `Entities/Executives.md`, TLB-001, TLB-021)*.

**The disclosed skills gap.** No Chief Data Officer, Head of Data Science, or named capital-allocation/
portfolio-management function appears anywhere in the 29-document corpus (`Entities/Executives.md`) — the
closest visible candidates to sponsor this plan's proposed Systems mechanism (§8.4) are the CFO function
(Alfakesh) or the GRC cluster (Abu Amara / AlGhrawi), neither of which is disclosed as already owning
investment-option ranking or KPI stage-gate monitoring. **This is this plan's own recommendation, stated
explicitly as such:** locate the stage-gate/monitoring function near the existing GRC/CFO structure rather
than proposing an entirely new C-suite seat the corpus gives no evidence talabat is contemplating.

**Per-option capability requirements (drawn directly from each `OPT-` record, not invented here).**
`OPT-001` (dark-store densification) needs real-estate build-out/staffing capacity and principal-model
inventory/replenishment systems; `OPT-002` (pro acceleration, Egypt/Iraq) needs local-market offer
calibration and Partner-relationship management in the two newest, least-established markets; `OPT-003`
(Food-leadership CVP, UAE/Kuwait/Qatar) needs commission-rate negotiation capacity with high-demand
restaurant Partners; `OPT-004` (advertising gap) needs a Partner-facing ad-sales/adtech commercial
capability build not yet evidenced at Group scale beyond the UAE benchmark market; `OPT-005` (AI/
personalisation scaling) needs continued data-science/ML engineering capacity plus a per-market
model-tuning capability the corpus does not confirm exists today (`OPT-005`, "Required capabilities" and
"Risks"). None of these is a categorically new function — talabat already employs the data-science and
engineering capacity behind its Delivery Hero-inherited AI stack (Section 5) — the actual gap is
*capacity and specialization* for OPT-004 (Partner-facing commercial ad sales) and OPT-005 (per-market
model tuning), not an entirely absent capability.

**A disclosed structural workforce dependency, relevant to capacity planned against this programme.**
Roughly 90-95% of talabat's rider fleet is sourced through third-party logistics (3PL) providers or
freelance riders rather than directly employed *(Group; `Strategic/Competitive Weaknesses.md`,
`Facts/Logistics_Facts.md`)* — a real operational constraint worth naming here because several of this
programme's own options (`OPT-002`'s frequency uplift, `OPT-001`'s densification) are designed to increase
order volume, which increases load on exactly this externally-sourced delivery capacity; the corpus does
not disclose whether this capacity has confirmed headroom (`Delivery Operations.md` Open Questions), so
this plan states the dependency rather than assuming it away.

## 8.4 7S Alignment Check

The corpus does not contain a pre-built 7S analysis for talabat — this is genuine synthesis, built here
for the first time against the evidence assembled above and in the Topic Notes cited throughout this
plan. Each "S" is rated **Ready**, **Partially ready**, or **Not ready**, with the specific evidence and
gap-closing action named — no unsupported rating.

| S | Rating | Evidence | Gap-closing action |
|---|---|---|---|
| **Strategy** | Ready | The Everyday App (~USD120mn) / Food-leadership (~USD55mn) split and the CVP-over-discounting positioning are clearly disclosed and consistently communicated (`Section_02_Business_Description.md` §2.1; `Section_07_Marketing_and_Sales_Strategy.md` §7.1; TLB-020, page 16) | None required — this is the plan's strongest evidenced "S" |
| **Structure** | Partially ready | Board dominated by Delivery Hero SE officers (Vandepitte/Chair also DH SE COO; Krause also DH SE General Counsel; Popp also DH SE interim CFO — `Corporate Structure.md`, TLB-026); Egypt operates through two dedicated legal entities (Delivery Hero Egypt SAE, Delivery Hero Dmart Egypt LLC) with no disclosed local board or decision rights (`Corporate Structure.md` Open Questions) | This plan's recommendation is presented for Group-level approval, consistent with the visible governance concentration, rather than assuming a country-level approval path exists (`Decision-Making Process.md` Strategic Implications) |
| **Systems** | **Not ready** — the largest gap | No internal capital-allocation committee, approval threshold, or stage-gate process for the USD175mn programme is disclosed anywhere in the corpus (`Capital Allocation and Investment Governance.md`) | **This OS's own proposed mechanism, not a description of talabat's actual process:** a lightweight stage-gate — each `OPT-` option reviewed against its own named stage gate (already specified per option, e.g. `OPT-002`'s 2-quarter Egypt pilot checkpoint, `OPT-001`'s margin-drag checkpoint) before scale-up funding, tracked against `KPI_Tree_v2.md`'s Governance family (G1-G7, all seven newly-instrumented, none with a corpus baseline) — gated for human/team approval before any capital moves, per the Responsible-AI principle Section 11 develops further |
| **Shared Values** | Partially evidenced | Management's own stated framing — "these are investments rather than costs" (TLB-020, page 16) and CVP-over-discounting (TLB-020, page 16) — is a real, quotable value statement; no equivalent explicit value statement about AI ethics or data governance is disclosed beyond the DTA's compliance mechanics (§8.5) | This plan's Section 11 (Responsible AI) is the designated place to state the value this OS itself operates on (human-approval-gated recommendations, never a false-precision automatic decision) explicitly, since talabat's own disclosure does not state an equivalent value for its internal allocation process |
| **Skills** | Not ready | No named data-science, capital-allocation, or portfolio-management function in the disclosed executive roster (§8.3); OPT-004/OPT-005 both name a specific, currently-unconfirmed capability gap (Partner-facing ad sales; per-market AI model tuning) | Locate the proposed Systems function (above) near the existing CFO/GRC structure rather than inventing a new seat; pilot OPT-005's per-market model-tuning gap in Egypt specifically, per `OPT-005`'s own pilot recommendation |
| **Style** | Ready | A recognisable, repeated communication cadence — Capital Markets Day for medium-term targets, Annual Report for the year's strategic objective, quarterly results for dollar figures (`Decision-Making Process.md` "venue pattern") — and consistent language ("investments not costs," CVP-over-discounting) across TLB-014/019/020 | None required |
| **Staff** | Partially ready | Governance-adjacent named roles exist (GRC, Internal Audit, Legal/Board Secretary — §8.3) — but two leadership transitions are recorded in the corpus without any narrated explanation: CEO Tomaso Rodriguez → Toon Gyssels (between TLB-018, Aug 2025, and TLB-009, Feb 2026) and board seat Muhammad Hussain Ghati Al Jbori → Abdul Wahab Al-Halabi (between TLB-004/TLB-026 and TLB-008) (`Corporate Structure.md`, `Entities/Executives.md`) | Named explicitly here as a continuity caveat and carried forward into Section 10 (Risk Analysis) as an organizational risk, not resolved or explained by this plan, since no source in the corpus does so either |

**Honest bottom line.** The two "S"s where talabat's disclosed organization is least ready to run an
evidence-ranked capital-allocation discipline are **Systems** (no disclosed mechanics at all) and
**Skills** (no named owning function) — exactly the two gaps `Capital Allocation and Investment
Governance.md` and this plan's own governing hypothesis (`Section_02_Business_Description.md` §2.3)
identify as the reason this plan's decision-support layer has value to add in the first place. Structure
and Staff carry a real, stated continuity caveat rather than a full misalignment. Strategy and Style are
solid. This is not a rhetorical device — it is the direct, cited consequence of what the evidence already
assembled elsewhere in this plan shows, restated here in 7S form for the first time.

## 8.5 Security and Compliance Measures

**A disclosed security incident, not a hypothetical risk.** In December 2022, talabat was hacked by an
external attacker based in Norway, who gained access to the personal data of 144,469 customers in one of
talabat's markets (market unnamed in the disclosure); talabat informed the competent data-protection
regulator, which opened an investigation, and talabat paid a USD 150,000 penalty *(Group, specific market
not disclosed; TLB-026, page 49)*. The same risk-factor disclosure states plainly that because talabat's
technology infrastructure — including payment solutions and data storage — depends on Delivery Hero's
systems, talabat is "vulnerable to any security breaches or data protection issues that may occur at the
parent company level" *(Group; TLB-026, page 49)* — a direct, disclosed consequence of the same
partner/licensed-infrastructure model described in §8.1.

**The disclosed cross-entity data-governance mechanism.** The Delivery Hero Group Inter-Company Data
Transfer Agreement (the "DTA," dated 15 October 2021, amended 30 October 2024) governs the global
processing and transfer of personal data among Delivery Hero and its controlled subsidiaries and
affiliates, including named talabat Group entities. The DTA requires compliance with Delivery Hero's
"Binding Corporate Rules Policy," requires all parties to maintain "appropriate administrative, technical,
and physical measures for security, confidentiality, and integrity of personal data," and incorporates by
reference the European Commission's Standard Contractual Clauses under Regulation (EU) 2016/679 (the
GDPR) for transfers of personal data to third countries *(Group; TLB-026, pages 156-157)*. **So what:**
this is the only disclosed compliance mechanism in the corpus governing customer/Partner/employee personal
data across talabat's operations — a real, citable governance structure, not an evidence gap this plan has
to work around, unlike the capital-allocation Systems gap in §8.4.

**Caution — a real, stated limitation of this evidence.** The DTA/SCC/GDPR-reference framework is a
parent-level, EU-oriented mechanism governing *inter-company* data transfer; **no jurisdiction-specific
data-protection statute for any of talabat's eight operating markets (e.g. a named UAE, Egypt, or other
market data-protection law) is disclosed anywhere in the primary corpus.** This plan does not invent eight
national-law citations the corpus does not support — it states this as an open evidence gap, consistent
with the discipline `Capital Allocation and Investment Governance.md` and this section's own §8.4 apply to
the Systems gap. Any market-specific data-protection compliance programme this plan's Systems
recommendation (§8.4) implies for a given `OPT-` option's rollout market is this OS's own inference of
what would likely be needed, not a disclosed talabat compliance requirement.

**Regulatory and antitrust exposure (Group and country-specific, already disclosed).** Beyond data
protection specifically, the corpus discloses ongoing antitrust/competition-law exposure directly relevant
to any Food-leadership or Everyday App scale-up: Kuwait Competition Protection Authority investigations
and litigation, UAE Competition and Consumer Protection Department notices concerning Partner-subscription
contract clauses, and an Iraq competition-authority inquiry (no formal complaint) *(country-specific:
Kuwait, UAE, Iraq; TLB-001, page 32, 34; TLB-002, page 26; TLB-026, page 46-47)*, alongside a realized
regulatory action in Qatar — a Ministry of Commerce and Industry investigation that produced a
commission-rate price cap and a ban on delivery-registration fees, following restaurant-Partner complaints
*(country-specific, Qatar; TLB-026, pages 46-47)* — and a licensing dispute in Oman *(country-specific,
Oman; TLB-001, page 32)*. **So what for `OPT-003` specifically:** this option targets commission-rate
investment precisely in Qatar (one of its three named markets) — the same market where a regulator has
already imposed a commission-rate cap, meaning `OPT-003`'s execution needs to account for a real,
already-realized regulatory constraint on commission economics, not just a competitive-pressure dynamic.

**This plan's own decision-support system: a compliance-relevant design choice, not an afterthought.**
Consistent with `Problem_Charter.md`'s own statement that "the AI does not claim to possess talabat's
internal, customer-level data," this plan's decision-support layer operates entirely on Group/GCC/
segment-level disclosed aggregates, registered assumptions, and forecasts — it processes no individual
customer personal data at all, and therefore does not itself create a new data-protection exposure beyond
what talabat's existing DTA/GDPR-reference framework already governs. This is worth stating explicitly as
a security/compliance property of the recommended system itself, not just of talabat's underlying
operations.

## 8.6 Cross-section consistency check (Stage 13.10, self-performed)

Checked against `Section_05_AI_Technology_and_Development.md`: this section's infrastructure findings
(GLSA/CQCA/Kitchens Services Agreements as the licensed-not-built capability model; 235TB/day data
infrastructure; MCP status unchanged) are consistent with, and extend rather than contradict, Section 5's
build/buy/partner analysis — no infrastructure figure or claim is restated differently between the two
sections. Checked against `Section_02_Business_Description.md`: this section's Systems/Skills findings
directly support (rather than duplicate) the governing hypothesis's claim that talabat's disclosed capital
allocation "outputs, not mechanics" gap is real and load-bearing (§2.3) — this section is the operational-
readiness evidence for that same hypothesis, not a restatement of it. Checked against `DEC-008`/`DEC-009`:
no `ASM-018` (2.2:1 bucket-split) figure and no `ASM-029`–`033` dollar range is reproduced anywhere in
this section — where `OPT-` options are discussed, only their capability/skills requirements and stage
gates are cited, never their dollar ranges — so the mandatory disclosure sentence is not triggered here (it
belongs to Section 9/12/14, where the ranges themselves are shown). No contradiction found.

---

## Traceability (partial — full table due at Section 14)

| Claim | Source |
|---|---|
| No internal capital-allocation committee, approval threshold, or stage-gate process disclosed | `Topics/Capital Allocation and Investment Governance.md` |
| GLSA "Central Value Baskets" (data/logistics/customer-management/audit/quick-commerce/FinTech tools) for Bahrain, Egypt, Iraq, Oman, Jordan, Qatar | TLB-026, pages 152-153 |
| Separate GLSA UAE / GLSA Kuwait agreements exist | TLB-026, page 156 |
| CQCA (tMart-specific services) and Kitchens Services Agreement (UAE, Bahrain, Kuwait, Qatar, Jordan) | TLB-026, page 156 |
| All three governed by German law, disputes in German courts | GLSA: TLB-026, p.153; CQCA & Kitchens Services Agreement: TLB-026, p.156 |
| Delivery Hero Group Inter-Company DTA (15 Oct 2021, amended 30 Oct 2024); Binding Corporate Rules; EU SCCs under GDPR (Reg. (EU) 2016/679) | TLB-026, pages 156-157 |
| December 2022 hack — 144,469 customers' personal data accessed, USD150,000 penalty | TLB-026, page 49 |
| "Vulnerable to any security breaches or data protection issues... at the parent company level" | TLB-026, page 49 |
| Antitrust/competition-law exposure — Kuwait, UAE, Iraq | TLB-001, pages 32, 34; TLB-002, page 26; TLB-026, pages 46-47 |
| Qatar MOCI commission-rate price cap and delivery-registration-fee ban | TLB-026, pages 46-47 |
| Oman licensing dispute | TLB-001, page 32 |
| 235TB/day data-processing infrastructure | TLB-002, page 15 |
| Cairo as one of two core tech hubs | TLB-023, page 7 |
| Zone Elite Investment LLC (UAE logistics associate) | `Topics/Logistics.md`; `Corporate Structure.md` |
| Board composition and Delivery Hero SE officer overlap | `Corporate Structure.md`; TLB-026 |
| Egypt's two legal entities, no disclosed local decision rights | `Corporate Structure.md` Open Questions |
| CEO transition (Rodriguez → Gyssels) and board-seat change (Al Jbori → Al-Halabi), unnarrated | `Corporate Structure.md`; `Entities/Executives.md` |
| Named executive roles (Alfakesh, Assadi, Makarem, Vecchio, Abu Amara, El Kadri, AlGhrawi) | `Entities/Executives.md` |
| ~90-95% 3PL/freelance rider sourcing | `Strategic/Competitive Weaknesses.md`; `Facts/Logistics_Facts.md` |
| tMart store count almost 130 (end-2024) → ~160 (2025) | TLB-001, page 17; TLB-002, pages 12, 14 |
| "Investments rather than costs" / CVP-over-discounting framing | TLB-020, page 16 |
| Decision-Making Process "venue pattern" (CMD / Annual Report / quarterly results) | `Strategic/Decision-Making Process.md` |
| KPI Tree Governance family (G1-G7), all newly-instrumented | `vault/Forecasts/KPI_Tree_v2.md` |
| Per-option Required capabilities / stage gates (OPT-001–005) | `vault/Decisions/Investment_Options/OPT-001...005...md` |
| Problem Charter's no-customer-level-data principle | `Problem_Charter.md` |

## See also
[[Section_02_Business_Description]] · [[Section_05_AI_Technology_and_Development]] ·
`vault/Knowledge/Topics/Corporate Structure.md` · `vault/Knowledge/Strategic/Decision-Making Process.md` ·
`vault/Knowledge/Topics/Capital Allocation and Investment Governance.md` ·
`vault/Knowledge/Topics/Logistics.md` · `vault/Knowledge/Topics/Delivery Operations.md` ·
`vault/Knowledge/Entities/Executives.md` ·
`vault/Decisions/Investment_Options/OPT-001_talabat-mart-dark-store-densification.md` ·
`vault/Decisions/Investment_Options/OPT-002_talabat-pro-acceleration-egypt-iraq.md` ·
`vault/Decisions/Investment_Options/OPT-003_food-leadership-cvp-partner-retention-gcc3.md` ·
`vault/Decisions/Investment_Options/OPT-004_advertising-monetization-gap-closure.md` ·
`vault/Decisions/Investment_Options/OPT-005_ai-personalisation-capability-scaling.md` ·
[[DEC-009_investment-options-ranking-and-allocation-priority]] · [[KPI_Tree_v2]] ·
`vault/Architecture/Geographic_Evidence_Rules.md` · `Problem_Charter.md`
