---
section: 14
title: Appendices
status: Done — citation audit PASS (zero hard failures, first pass), QA review PASS (first pass)
pipeline_run: 2026-07-22
superseded: true
superseded_date: "2026-07-23"
superseded_reason: "Built for the original Egypt-retention problem, superseded by the 2026-07-23 pivot to talabat Group-wide capital allocation — see Problem_Charter.md and vault/Architecture/Repository_Impact_Assessment.md"
---

> **SUPERSEDED 2026-07-23.** This section draft was built against the original Egypt-retention
> problem, itself superseded by the 2026-07-23 pivot to talabat Group-wide capital allocation (see
> `Problem_Charter.md`). Preserved unchanged below as historical record (see the frontmatter `status` field for the
> original citation-audit/QA outcome under the old problem). Not a valid input to any new drafting —
> active drafting for the current problem lives under `vault/Projects/Business_Plan_Drafts_v2/`.

# 14. Appendices

> **Pipeline provenance note:** drafted directly by the top-level session acting as `bp-orchestrator`'s
> Stage 8 role, Phase 8 of the roadmap. Per the template's own framing, this appendix is "the ghost deck:
> the backup evidence behind every headline claim" — it compiles and indexes evidence already built
> elsewhere in this plan; it does not introduce new argument or new numbers. This is a working draft in
> `vault/Projects/`, not yet promoted to `Outputs/`.

## Answer, stated first

This appendix has five required parts. Four compile evidence already built in this plan or the vault
(traceability index, technical specifications, legal/compliance documents, the one real internal AI
case study). The fifth — team-member resumes — is stated as an honest, unresolved gap: it concerns real
individuals, not corpus facts, and this section does not fabricate professional biography for the six
named capstone team members, consistent with this project's standing discipline against inventing content
without evidence, applied here to people rather than business claims.

---

## 14.1 Traceability Note (claim → vault note → source document)

This plan's evidence hierarchy, per `CLAUDE.md`'s standing instruction: **Repository Facts**
(`vault/Knowledge/Facts/`) → **External Research** (`vault/Research/`) → **Forecasts**
(`vault/Forecasts/`) → **Management Decisions** (`vault/Decisions/`) → **Business Plan**
(`vault/Projects/Business_Plan_Drafts/`, eventually `Outputs/`). No number in this plan cites a tier below
it without resolving upward to a Fact citation or an Approved Decision/Assumption row.

**Master indexes (do not duplicate here — link to the authoritative copy):**

- **Document-level source index (29 primary corpus documents, TLB-001 through TLB-029):**
  [[Source Register]] MOC — pairs each source with its Knowledge Note and raw-facts extraction fragment.
- **Decision Log (7 decisions, all `Approved`):** [[DEC-001_egypt-category-share-figure]],
  [[DEC-002_egypt-market-size-definition]], [[DEC-003_section2-governing-hypothesis]] (the plan's governing
  hypothesis — every section stays consistent with this), [[DEC-004_2026-investment-total]],
  [[DEC-005_section9-headline-scenario]], [[DEC-006_subscription-revenue-line-reclassification]],
  [[DEC-007_section13-review-cadence-kill-criteria]].
- **Assumptions Register (14 rows, all `Approved`):** [[Assumptions_Register]] — every numeric estimate,
  Group-ratio import, or labeled inference cited anywhere in Sections 2–13 has a row here.
- **External Research Register (4 entries):** [[RES-001_egypt-named-competitors]] through
  [[RES-004_egypt-official-newsroom-operational-datapoints]] — secondary-corpus/official-newsroom evidence,
  explicitly labeled lower-confidence than the audited primary corpus wherever cited.
- **Forecast Layer:** [[Value_Driver_Tree]] and [[Scenarios]] (feeding Section 9), [[KPI_Tree]] (feeding
  Section 13).

**Per-section traceability (each Business Plan section carries its own Traceability summary table,
mapping every claim class in that section to its resolving source and citation status):** Sections 2, 3,
4, 5, 6, 7, 8, 9, 10, 11, 12, and 13 each end with a "Traceability summary (for Appendix/Section 14 use)"
table. This appendix indexes them rather than reproducing sixteen tables' worth of content:
[[Section_02_Business_Description|Section 2]] · [[Section_03_Market_Analysis|Section 3]] ·
[[Section_04_Value_Proposition|Section 4]] · [[Section_05_AI_Technology_and_Development|Section 5]] ·
[[Section_06_Business_Model_and_Revenue_Streams|Section 6]] · [[Section_07_Marketing_and_Sales_Strategy|
Section 7]] · [[Section_08_Operations_Plan|Section 8]] · [[Section_09_Financial_Plan|Section 9]] ·
[[Section_10_Risk_Analysis|Section 10]] · [[Section_11_CSR_and_Responsible_AI|Section 11]] ·
[[Section_12_Implementation_Plan|Section 12]] · [[Section_13_Monitoring_and_Evaluation|Section 13]].

**Validation trail (every fail/fix/re-verify cycle, per section):** [[Citation_Audit_Section_02]] through
[[Citation_Audit_Section_13]] and [[QA_Review_Section_02]] through [[QA_Review_Section_13]] (Section 10
alone has two independent QA passes, [[QA_Review_Section_10_Pass1]]/[[QA_Review_Section_10_Pass2]], plus
a comparison note, [[QA_Review_Section_10_Comparison]]). This is the evidentiary record that every claim
in Sections 2–13 was independently checked, not merely drafted and left unverified.

**Known open items carried forward, not silently dropped:**

- **The one genuinely deferred decision:** per `DEC-007`, setting an actual numeric kill-criteria threshold
  for the seven kill-criteria-bearing KPIs (K5–K9, K13–K14) becomes possible only once
  [[Section_12_Implementation_Plan|Section 12]]'s H1 pilot produces real Egypt baseline data — this is a
  future Decision Log entry (`DEC-008` or later), explicitly not resolved in this plan.
- **Team role assignments** (which of the six capstone members owns which of the guide's five defined
  roles) remain unassigned — see §14.2.
- **The MCP-integration decision for this capstone's own Agentic OS** (distinction credit vs. fragility)
  remains open past its original Phase 2 deadline — noted here for completeness since it concerns this
  plan's own drafting process, not talabat's business.

## 14.2 Resumes of Key Team Members

This capstone is produced by a six-member AASTMT MBA team (Group G02), not a company with disclosed
employees — there is no corpus source this section could cite for "team member resumes" in the template's
literal sense, and this section does not fabricate professional biography for real, named individuals.
That would be a materially different, and more serious, act than any labeled-synthetic business figure
elsewhere in this plan (Section 7's illustrative funnel table, Section 10's synthetic probability–impact
ratings) — those are framework-exposition devices about a business; a fabricated resume would be an
invented biographical claim about a real person.

**What is honestly known:** a six-person roster exists (project tracking record, not reproduced here in
full to avoid embedding personal identifiers in a document intended for grading distribution); role
assignment against the project guide's five defined roles (OS Architect, Data & Research Lead, Business
Plan Lead, Strategy & Risk Lead, Integration & Delivery Lead) remains **unassigned** for five of six
members as of this drafting session. **This is a required, not optional, action item for the human team
before final submission to `Outputs/`** — resumes/CVs must be supplied by each member individually; this
capstone's Agentic OS has no legitimate way to generate them.

## 14.3 Technical Specifications of the AI Product

This section compiles rather than restates [[Section_05_AI_Technology_and_Development|Section 5]]'s full
technical treatment. Summary: talabat's AI/ML capability spans four disclosed functional areas
(personalisation, logistics, advertising, internal operations); processes 235TB/day of data (TLB-002, page
15); activates its personalisation/ranking algorithm after ~6 orders from a given customer; is
substantially inherited from parent Delivery Hero's shared technology stack (dispatch/logistics
infrastructure) with a proprietary personalisation/ranking layer built on top; and discloses no specific
cloud platform, no patent filing, and no MCP/agentic/LLM-based tooling anywhere in the corpus. This plan's
recommendation (`DEC-003`'s Option 2) redeploys this existing capability to Egypt rather than building or
licensing new technology — see [[Section_05_AI_Technology_and_Development|Section 5]] §5.2's full
build/buy/partner analysis for the complete specification and rationale.

## 14.4 Case Studies or Pilot Program Results

**No completed Egypt pilot exists at the time of this drafting** — this plan's own recommended pilot
([[Section_12_Implementation_Plan|Section 12]]'s Horizon 1) has not yet launched, so there are no pilot
*results* to report here. This section does not invent them. Two genuine, already-evidenced reference
points exist instead:

- **GEMs (internal precedent, not an Egypt pilot).** talabat's own AI-supported Partner-level tool flags
  Restaurants with "low/declining customer acquisition or retention rates" for targeted win-back
  (TLB-026, page 138, first cited in [[Section_03_Market_Analysis|Section 3]] §3.4) — the closest real,
  operating "case study" of AI-driven retention-adjacent tooling inside talabat today, on the Partner side
  rather than the consumer side this plan targets.
- **The planned H1 pilot design (not yet executed).** [[Section_12_Implementation_Plan|Section 12]]'s
  Horizon 1 specifies the pilot's scope, instrumentation, and go/no-go checkpoints in detail — this is the
  plan's *proposed* case study, explicitly framed as a future evidence-generation step, not a completed
  program with reportable results.

## 14.5 Legal and Compliance Documents

No dedicated legal/compliance filing is included as a standalone appendix item, because the corpus
discloses none specific to an Egypt AI-retention programme. The relevant disclosed compliance framework is
compiled in [[Section_08_Operations_Plan|Section 8]]'s Security and Compliance subsection: a Group-wide
data-protection and cybersecurity framework, a specialised information security team, "regional data
protection professionals," and the one specifically named law in the entire corpus — the **Data Protection
Regulation 2021 in the ADGM** (Abu Dhabi Global Market, where Talabat Holding PLC is incorporated). No
Egypt-specific data protection law (e.g., Egypt's Personal Data Protection Law, Law No. 151 of 2020) is
named anywhere in the corpus — Section 8 states this gap plainly, and this appendix does not add a legal
citation the corpus does not support.

---

## Traceability summary (for this section's own record)

| Claim class | Resolved via | Status |
|---|---|---|
| Master indexes (Source Register, Decision Log, Assumptions Register, Research Register, Forecast Layer) | `Source Register`, `DEC-001`–`DEC-007`, `Assumptions_Register.md`, `RES-001`–`RES-004`, `Value_Driver_Tree.md`, `Scenarios.md`, `KPI_Tree.md` | Direct citation, indexed not duplicated |
| Per-section traceability tables | Sections 2–13's own Traceability summary tables | Indexed by reference |
| Validation trail | `Citation_Audit_Section_02`–`13`, `QA_Review_Section_02`–`13` | Indexed by reference |
| Deferred numeric kill-threshold decision | `DEC-007_section13-review-cadence-kill-criteria`'s own Impact section, which explicitly instructs this section to carry it forward | Direct citation, explicit open item |
| Team resumes | None — explicit, honest gap; a required human action item, not a corpus-derivable fact | Explicit gap statement, not filled |
| Technical specifications | `Section_05_AI_Technology_and_Development.md` §5.1/§5.2 | Cross-referenced, not re-derived |
| Case studies/pilot results | `Section_03_Market_Analysis.md` §3.4 (GEMs), `Section_12_Implementation_Plan.md` H1 | Cross-referenced; explicit statement that no completed pilot results exist |
| Legal/compliance documents | `Section_08_Operations_Plan.md` (Security and Compliance) | Cross-referenced, not re-derived |

## Links
- [[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]]
- [[Source Register]] · [[Value_Driver_Tree]] · [[Scenarios]] · [[KPI_Tree]] · [[Assumptions_Register]]
- [[Section_02_Business_Description]] · [[Section_03_Market_Analysis]] · [[Section_04_Value_Proposition]] · [[Section_05_AI_Technology_and_Development]] · [[Section_06_Business_Model_and_Revenue_Streams]] · [[Section_07_Marketing_and_Sales_Strategy]] · [[Section_08_Operations_Plan]] · [[Section_09_Financial_Plan]] · [[Section_10_Risk_Analysis]] · [[Section_11_CSR_and_Responsible_AI]] · [[Section_12_Implementation_Plan]] · [[Section_13_Monitoring_and_Evaluation]]
- [[Business_Plan_Generation_Pipeline]]
