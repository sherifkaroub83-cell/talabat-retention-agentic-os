---
report: Citation Audit
section: 11
run_date: 2026-07-24
pass: 1 (self-reviewed — no independent Agent-tool delegation available this session)
verdict: PASS
---

# Citation Audit — Section 11 (CSR & Responsible AI), v2 draft

**Tooling note.** Run in-context by the same session that drafted Section 11, following
`.claude/skills/citation-audit/SKILL.md`'s procedure directly — no `evidence-citation-agent` subagent
delegation was available (see `bp-orchestrator.md`'s "Known runtime constraint" and Section 11's own
Tooling note). This is a **Pass 1, self-reviewed** audit; a fresh, separately-invoked Pass 2 is required
before Section 11 can move past "Drafted — self-reviewed."

**Scope:** every numeric claim, named-fact claim, and quoted statement in
`vault/Projects/Business_Plan_Drafts_v2/Section_11_CSR_and_Responsible_AI.md`, walked sentence by sentence
per the skill's procedure.

## Claim-by-claim trace

| # | Claim | Resolves to | Status |
|---|---|---|---|
| 1 | Problem Charter Responsible-AI quote ("The AI does not claim to possess... internally verified") | Direct quote, `Problem_Charter.md`, "Role of AI in this plan" section | Pass |
| 2 | Investment Portfolio Register Owner-section quote ("This register is owned by the Decision Steward Agent...") | Direct quote, `Investment_Portfolio_Register.md`, "Owner" section | Pass |
| 3 | `DEC-008` resolution (Option 1; base case only; `ASM-018` narrative-only; disclosed FY2026 guidance figures GMV +11-14% cFX, Revenue +14-17% cFX, Adjusted EBITDA 4.4-4.8% of GMV, FCF 3.2-3.6% of GMV) | `DEC-008_section9-headline-bucket-split-presentation.md`, read in full this session | Pass |
| 4 | `DEC-009` resolution (middle path; funding sequence committed narratively; `ASM-029`–`033` restricted to labeled sensitivity/appendix exhibit; mandatory disclosure sentence quoted verbatim) | `DEC-009_investment-options-ranking-and-allocation-priority.md`, read in full this session | Pass |
| 5 | `ORG-01`, `ORG-02`, `ORG-03` definitions, probability/impact, mitigations, and owners | `Section_10_Risk_Analysis.md` §10.4, §10.8, read in full this session — wording checked against the source, not paraphrased from memory | Pass |
| 6 | `TECH-01` definition and mitigation (AI/personalisation effectiveness unconfirmed outside GCC+Jordan; `OPT-005` per-market pilot mitigation) | `Section_10_Risk_Analysis.md` §10.1, §10.8 | Pass |
| 7 | `MKT-02` definition (rider-workforce dependency, ~90-95% 3PL/freelance) | `Section_10_Risk_Analysis.md` §10.2 | Pass |
| 8 | Section 8 §8.4 stage-gate mechanism description (per-`OPT-` stage gates, examples: `OPT-002` Egypt pilot checkpoint, `OPT-001` margin-drag checkpoint; tracked against Governance family G1-G7) | `Section_08_Operations_Plan.md` §8.4, read in full this session | Pass |
| 9 | Section 8 §8.5 aggregate-only data-processing design finding | `Section_08_Operations_Plan.md` §8.5 | Pass |
| 10 | Geographic Evidence Rules nine-tag system; the superseded `Value_Driver_Tree.md` talabat pro Group/GCC→Egypt conflation case study (talabat pro launched Egypt Feb 2025; uplift measured Sept 2024) | `vault/Architecture/Geographic_Evidence_Rules.md`, "Failure patterns" §1, read in full this session | Pass |
| 11 | December 2022 data breach — 144,469 customers' personal data accessed, market undisclosed, USD150,000 penalty | TLB-026, page 49 — cross-checked against `Section_08_Operations_Plan.md` §8.5's and `Section_10_Risk_Analysis.md` `TECH-02`'s identical citation of the same figure | Pass |
| 12 | AI/personalisation EBITDA contribution: USD14mn+ (FY2024) → USD30mn+ (FY2025); non-GCC model-tuning status undisclosed | `Topics/AI.md`; TLB-002, page 15 — same citation used in `Section_10_Risk_Analysis.md` `TECH-01` | Pass |
| 13 | EV fleet: UAE 240 (Jan 2026); Egypt 200 (end 2025, Cairo, "scaling planned for 2026"); Jordan/Oman pilots active | `Facts/Logistics_Facts.md`; TLB-002, pages 42-44 — verified via direct grep of `Facts/Logistics_Facts.md` this session | Pass |
| 14 | Group 2025 emissions: 875,157 tCO2e total (Scope 1: 8,177; Scope 2: 8,847; Scope 3: 858,132); delivery vehicles ~43% of total | `Facts/Logistics_Facts.md`; TLB-002, pages 41-42 | Pass |
| 15 | Riders kept 100% of USD21.5mn+ tips earned in 2025 | `Facts/Logistics_Facts.md`; TLB-002, pages 33, 35 | Pass |
| 16 | 78,000+ riders trained via "tcamp," across Egypt, UAE, Bahrain, Kuwait, Oman (trailing-12-month figure) | TLB-026, pages 138, 144 — verified via direct grep of `Sources/TLB-001_annual-report-2024.md`, cross-referencing the matching TLB-026 figure | Pass |
| 17 | Egypt SME academy with German Chamber of Commerce, 200+ SMEs trained by July 2024; MSMEDA partnership | TLB-001, page 46 — verified via direct grep this session | Pass |
| 18 | Khalifa Fund partnership (UAE) | TLB-001, page 46 | Pass |
| 19 | Egypt Food Bank and Misr El Kheir foundation charitable partnerships | TLB-001, page 55 | Pass |
| 20 | No document in the corpus links the EV/tcamp/tips/SME-partnership programmes to the USD175mn 2026 investment programme | Absence-of-disclosure finding, consistent with `Investment_Portfolio_Register.md`'s own "Optional / not-yet-disclosed components" section — no positive claim being made, correctly stated as a gap, not a fact requiring a citation to a positive statement | Pass (absence-of-evidence claims do not require a positive citation, per the skill's own "say so explicitly" pattern already used in Sections 8/10) |
| 21 | No internal capital-allocation committee, approval threshold, or stage-gate process is disclosed | `Topics/Capital Allocation and Investment Governance.md` | Pass |
| 22 | KPI Governance family (G1-G7), all seven newly-instrumented, none with a corpus baseline | `vault/Forecasts/KPI_Tree_v2.md` §5, read in full this session | Pass |
| 23 | Named executives (Alfakesh — CFO; Abu Amara — Head of GRC; AlGhrawi — VP Legal, GRC & Board Secretary) as the proposed Systems-function anchor | `Entities/Executives.md`; `Section_08_Operations_Plan.md` §8.3 | Pass |
| 24 | CEO transition (Rodriguez → Gyssels) and board-seat change (Al Jbori → Al-Halabi), both unnarrated | `Section_10_Risk_Analysis.md` `ORG-03`, citing `Corporate Structure.md`/`Entities/Executives.md` — restated, not re-derived | Pass |

## Geography-tag check (per `Geographic_Evidence_Rules.md`)

Every numeric/directional claim in Section 11 carries an inline geography tag. Spot-checked:
- EV fleet figures correctly split UAE (country-specific) / Egypt (country-specific) / Jordan, Oman
  (market-comparison) — not blended into one figure.
- Group emissions and tips figures correctly tagged Group, not attributed to any single market.
- tcamp training figure correctly tagged market-comparison (five named markets), not "MENA" and not
  Group-wide.
- SME/charity partnerships correctly tagged country-specific (Egypt or UAE individually), never
  conflated with each other or presented as a Group programme.
- `TECH-01`'s restatement (Control 4) correctly carries the inferred-applicability caveat for non-GCC/
  Egypt, matching the risk's own tag in Section 10.
- No Group/GCC figure in this section is presented as Egypt-specific, and no Egypt-specific figure is
  presented as Group-representative.

No failure found.

## Assumption-status check

No `ASM-###` row's *numeric value* is reproduced in Section 11 (the section references `ASM-018` and
`ASM-029`–`033` only by ID, to describe their existence and placement restriction under `DEC-008`/`DEC-009`
— it does not restate their dollar ranges or the 2.2:1 ratio). All rows referenced by ID (`ASM-016`,
`ASM-018`, `ASM-029`–`033`) carry `status: Approved` in `Assumptions_Register.md` as of 2026-07-23,
confirmed by direct read this session. No `Proposed`-status row is cited.

## Discrepancy check

No unresolved corpus discrepancy is cited in this section that would require a cross-check against a
`DEC-XXX` record beyond what is already flagged: this section's account of `DEC-008`/`DEC-009` was checked
directly against the Decision Log entries themselves, not against another section's paraphrase (see
Section 11's own Stage 13.7 note).

## Verdict

**PASS.** All 24 traced claims resolve to a Facts/Sources citation, a directly-quoted Decision Log entry,
or a directly-quoted prior-section finding (itself already citation-audited). Zero open failures. Two
items (#20) are absence-of-disclosure findings, correctly stated as gaps rather than requiring a positive
citation. This is a Pass 1/self-reviewed audit — an independent Pass 2 re-check is still required before
Section 11 can be marked ✅ Done.

## See also
- `vault/Projects/Business_Plan_Drafts_v2/Section_11_CSR_and_Responsible_AI.md`
- `.claude/skills/citation-audit/SKILL.md`
- `vault/Decisions/Assumptions_Register.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`
