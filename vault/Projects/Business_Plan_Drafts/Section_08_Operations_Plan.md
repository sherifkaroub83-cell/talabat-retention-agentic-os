---
section: 8
title: Operations Plan
status: Done — citation audit PASS (independently re-verified), QA review PASS (one fix cycle, independently re-verified)
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

# 8. Operations Plan

> **Pipeline provenance note:** drafted directly by the top-level session acting as `bp-orchestrator`'s
> Stage 8 role, Phase 8 of the roadmap. The corpus is thin on internal operating mechanics precisely where
> this section needs it most (development workflow, team structure, internal decision process) — this
> section names those gaps plainly, per `Strategic/Decision-Making Process.md`'s own stated limitation,
> rather than inventing organizational detail the corpus does not support. This is a working draft in
> `vault/Projects/`, not yet promoted to `Outputs/`.

## Answer, stated first

The template's own McKinsey Lens warns that "an AI plan that ignores the organization that must run it is
the most common failure pattern in the case literature." Run against the 7S framework, this plan's
operating-model picture is asymmetric: **Systems** and **Strategy** are well-evidenced (existing AI
infrastructure, a stated 2026 objective naming retention explicitly), but **Structure**, **Staff**, and
**Style** are the corpus's thinnest areas — governance is visibly concentrated at the Delivery Hero SE
level, no internal capital-approval process is disclosed, and Egypt has no confirmed local decision-making
seat. This section names those misalignments honestly rather than assuming an organizational readiness the
corpus does not evidence, consistent with the project's standing discipline of stating gaps rather than
filling them silently.

---

## Infrastructure Needs (data storage, cloud computing, hardware)

Cross-referencing rather than re-deriving [[Section_05_AI_Technology_and_Development|Section 5]] §5.4: the
corpus does not name a specific cloud platform (no disclosed reference to AWS, Azure, or GCP) — only the
scale of data processed (235TB/day, TLB-002, page 15) and the shared Delivery Hero technology stack it
runs on. Egypt-specific infrastructure already in place, directly relevant to this plan's redeployment
premise: the largest quick-commerce distribution centre in MENA (Cairo–Suez Road, ~27,000 sqm, running
in-house AI demand forecasting, `ASM-004`) and a 1,500-person Global Tech & Shared Services hub delivering
74% of shared services and 30% of app features Group-wide ([[Section_05_AI_Technology_and_Development|
Section 5]] §5.2). No Egypt-specific hardware, data-centre, or cloud-spend figure is disclosed beyond
this — this section does not invent one.

## Development and Maintenance Workflow

The corpus discloses no software development lifecycle, release cadence, or maintenance process at either
Group or Egypt level — no sprint cadence, CI/CD framework, or model-retraining schedule is named anywhere
in the 29-document corpus. This is a genuine, stated gap, not an oversight: `Strategic/Decision-Making
Process.md`'s own thesis is that the corpus shows decision-*outputs* (what gets funded, where) far more
clearly than decision- or development-*mechanics*. This plan does not fabricate a workflow the corpus does
not support; it flags the gap as an input [[Section_12_Implementation_Plan|Section 12]]'s Three Horizons
roadmap must plan around, not resolve here.

## Key Team Roles and the Skills Gap vs. Today

The corpus names no Egypt-specific data-science, engineering, or product-management headcount, nor a
Group-level breakdown of AI-specific roles. The closest disclosed evidence is structural, not
role-specific: the 1,500-person Global Tech & Shared Services hub (`ASM-004`) is the only quantified
technology-organization figure in the corpus, and it is explicitly a *shared*, Group-wide resource, not an
Egypt-dedicated team. [[Section_10_Risk_Analysis|Section 10]]'s Organizational Risks category already
names this precisely as "AI-capability ownership ambiguity" — because the corpus never confirms whether
Egypt-specific AI deployment would be owned by a dedicated Egypt team or the shared Group Tech hub, this
plan cannot state with confidence who inside talabat would actually execute the recommended roadmap
extension. This section does not re-derive that finding; it names it as the central skills-gap question
this plan's implementation depends on answering, which [[Section_12_Implementation_Plan|Section 12]] must
address as a Horizon 1 organizational prerequisite, not a technology one.

## 7S Alignment Check

Per the template's explicit instruction to test the operating model against Strategy, Structure, Systems,
Shared values, Skills, Style, and Staff, and name misalignments honestly:

| Element | Where the organization IS ready | Where it is NOT ready | What closes the gap |
|---|---|---|---|
| **Strategy** | A named 2026 corporate objective explicitly matches this plan's thesis: "retain high and medium value customers against partial or complete churn to competition" (TLB-002, page 14, per `Strategic/Decision-Making Process.md`) — this plan is not proposing a strategy talabat hasn't already adopted at Group level. | The objective is stated Group-wide; no Egypt-specific strategic statement exists to confirm Egypt is prioritized within it. | `DEC-003`'s confirmed governing hypothesis is this plan's own answer — extend the objective to Egypt specifically, the gap Section 2 already establishes. |
| **Structure** | Egypt operates through two named, real legal entities — Delivery Hero Egypt SAE and Delivery Hero Dmart Egypt LLC (`Topics/Corporate Structure.md`) — giving this plan concrete implementation vehicles to anchor recommendations to, rather than an abstract "Egypt business unit." | Governance is visibly concentrated at the Delivery Hero SE level: the Board Chair, Vice-Chair, and a Non-Executive Director simultaneously hold Delivery Hero SE C-suite roles. The corpus never states whether either Egypt entity has local board representation, an advisory committee, or delegated decision rights (`Strategic/Decision-Making Process.md`'s Open Questions). | This plan's investment ask should be framed to satisfy Group-level approval criteria, per `Strategic/Decision-Making Process.md`'s own Strategic Implications, not assume a country-level approval path exists. |
| **Systems** | The AI/ML infrastructure this plan redeploys already exists and runs at scale (235TB/day, `[[Section_05_AI_Technology_and_Development\|Section 5]]`) — the strongest-evidenced element in the entire 7S check. | No disclosed development workflow or model-maintenance cadence (see above). | Named as a Section 12 implementation prerequisite, not fabricated here. |
| **Shared values** | talabat's own customer-value-proposition framing (Quality, Convenience, Value, `Topics/Customer Journey.md`) and its stated preference for "loyalty/CVP investment rather than matching competitor discounts/vouchers" (TLB-020, page 16) are directly consistent with this plan's retention-over-acquisition positioning ([[Section_07_Marketing_and_Sales_Strategy|Section 7]]). | No disclosed statement of company values or culture specific to AI use, data ethics, or Egypt operations. | Addressed structurally by [[Section_11_CSR_and_Responsible_AI|Section 11]], not this section. |
| **Skills** | The Global Tech & Shared Services hub (`ASM-004`) demonstrates real, at-scale AI/ML capability already exists within the organization. | No Egypt-specific skills inventory or gap analysis is disclosed; ownership of Egypt AI deployment is unconfirmed (Section 10's AI-capability ownership ambiguity, above). | This is the single largest unresolved 7S gap this plan identifies — it cannot be closed from the corpus alone and is named as an explicit implementation risk, not assumed away. |
| **Style** | The venue pattern for strategic communication (Capital Markets Day, Annual Report, quarterly results — `Strategic/Decision-Making Process.md`) shows a consistent, disciplined external-communication style talabat already follows. | No document describes internal leadership style, decision-making culture, or how a country-level initiative is actually evaluated and approved (no capital-allocation committee, investment threshold, or stage-gate process is disclosed anywhere in the corpus). | Named as a genuine structural unknown per `Strategic/Decision-Making Process.md`'s own Strategic Implications — this plan's "how this gets approved" content is a reasoned proposal built on visible structure, not a description of a documented talabat process, because none is disclosed. |
| **Staff** | ~90-95% of talabat's delivery workforce operates via third-party logistics/freelance arrangements, already flagged by [[Section_10_Risk_Analysis|Section 10]] as a Delivery-reliability dependency risk (`Strategic/Competitive Weaknesses.md`, TLB-001, pages 34, 47) — a known, named workforce structure this plan does not need to re-diagnose. | No Egypt-specific rider-sourcing breakdown is disclosed; whether Egypt's delivery-workforce model differs from the GCC's is unconfirmed (`Strategic/Competitive Weaknesses.md`'s Open Questions, already carried by Section 10). | Not resolvable from the corpus; carried forward as an explicit execution-quality precondition for the AI-personalisation-driven loyalty this plan recommends. |

**Two further structural findings this check surfaces, both already named by [[Section_10_Risk_Analysis|
Section 10]] and not re-derived here:** an unexplained CEO transition (Rodriguez → Gyssels) and board-seat
change (Al Jbori → Al-Halabi), both occurring without narration in the corpus (`Strategic/Decision-Making
Process.md`; `Topics/Corporate Structure.md`) — a governance-stability caveat this plan's multi-year
sponsorship assumption cannot fully verify.

## Security and Compliance Measures (data protection law, privacy regulations)

talabat's Annual Report 2025 discloses a Group-wide data-protection and cybersecurity framework, not an
Egypt-specific one: a specialised information security team overseeing "incident response, application
security and compliance with data protection regulations" (TLB-002, page 27); a stated commitment to
"international standards for privacy and security in our FinTech initiatives and e-commerce operations"
(TLB-002, page 25); and an explicitly named compliance risk — "non-compliance with data protection laws"
— citing the **Data Protection Regulation 2021 in the ADGM** (Abu Dhabi Global Market, where Talabat
Holding PLC is incorporated) as the specific named example, alongside a stated practice of maintaining
"regional data protection professionals who oversee adherence to jurisdiction-specific legal requirements"
(TLB-002, page 29). **No Egypt-specific data protection law (e.g., Egypt's Personal Data Protection Law,
Law No. 151 of 2020) is named anywhere in the corpus** — this section does not assert Egypt-law compliance
detail the corpus does not disclose; it states the Group framework exists and that "jurisdiction-specific"
professionals are a stated practice, without claiming Egypt-specific evidence of what that practice
concretely looks like. Given this plan's AI mechanisms process customer order and personalisation data,
this Group framework — and its stated but Egypt-unconfirmed jurisdiction-specific extension — is the
compliance baseline any Egypt-specific implementation in [[Section_12_Implementation_Plan|Section 12]]
must build from, not around.

---

## Traceability summary (for Appendix/Section 14 use)

| Claim class | Resolved via | Status |
|---|---|---|
| Infrastructure needs | `Section_05_AI_Technology_and_Development.md` §5.2/§5.4, `ASM-004` | Cross-referenced, not re-derived |
| Development/maintenance workflow gap | `Strategic/Decision-Making Process.md` | Explicit gap statement, not filled |
| Team roles / skills gap | `Section_10_Risk_Analysis.md` (AI-capability ownership ambiguity), `ASM-004` | Cross-referenced, not re-derived |
| 7S alignment check | `Strategic/Decision-Making Process.md`, `Topics/Corporate Structure.md`, TLB-002 p.14, TLB-020 p.16, `Section_07_Marketing_and_Sales_Strategy.md`, `Section_10_Risk_Analysis.md`, `Strategic/Competitive Weaknesses.md` | Direct citation + cross-reference, structured as a table per the template's own instruction |
| Security and compliance | TLB-002, pages 25, 27, 29 | Direct citation; explicit absence statement for Egypt-specific data-protection law |

## Links
- [[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]]
- [[Section_05_AI_Technology_and_Development]] · [[Section_07_Marketing_and_Sales_Strategy]] · [[Section_10_Risk_Analysis]]
- [[DEC-003_section2-governing-hypothesis]]
- [[Business_Plan_Generation_Pipeline]]
