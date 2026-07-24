---
type: validation
section: 4
pipeline_stage: 9
date: "2026-07-24"
result: "FAIL — 3 hard citation-audit failures requiring drafting fixes (no new research needed); 3 non-blocking findings also logged"
---

# Citation Audit — Section 4 (Value Proposition), v2 draft — Stage 9

## Tooling / Independence note (read first)

Genuinely top-level-invoked, freshly-spawned thread with no memory of, and no access to, any drafting
session for this section. Per the task brief, this run deliberately did **not** read
`vault/Validation/Citation_Audit_Section_04.md` (it audits the superseded pre-pivot Egypt-retention draft
at `Business_Plan_Drafts/Section_04_Value_Proposition.md` — a different section for a different governing
problem) and did **not** read any `QA_Review_Section_04*` file (a later, separate pipeline stage). Tools
used: `Read`, `Grep`, `Glob`, `Write`. No `AskUserQuestion`, `Agent`, `WebSearch`/`WebFetch` were needed.
All findings below were derived by reading the target section itself, `vault/Architecture/Geographic_
Evidence_Rules.md`, `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/KPI_Tree_v2.md`,
`vault/Knowledge/Investment_Relationship_Map.md`, `vault/Decisions/Assumptions_Register.md`,
`DEC-008`, `DEC-009`, and the underlying Knowledge-layer Topic Notes and Facts files the section itself
cites (`Multi-Verticality.md`, `Talabat Pro.md`, `Customer Economics.md`, `FinTech.md`, `EBITDA.md`,
`Revenue Drivers.md`, `Food Leadership.md`, `Customer Lifetime Value.md`, `2026 Investment Programme.md`,
`Business_Relationships.md`, `Facts/Advertising_Facts.md`, `Facts/Orders_Facts.md`,
`Facts/Customer_Growth.md`) — not by trusting the section's own citation labels at face value. The
precedent format for this note follows `vault/Validation/QA_Review_Section_10_Pass2.md`.

## Target audited

`vault/Projects/Business_Plan_Drafts_v2/Section_04_Value_Proposition.md` — frontmatter confirms
`status: Drafted — self-reviewed, not yet independently verified`, `pipeline_run: 2026-07-23`. This is
the fresh, post-pivot (2026-07-23) draft, companion to (not a replacement of) the superseded
`Business_Plan_Drafts/Section_04_Value_Proposition.md`. No independent citation audit of this v2 draft
had been performed before this run.

## Cross-reference currency check (done first, per task brief)

All structural cross-references resolve to real, **current** post-pivot artifacts, not stale pre-pivot
ones:
- `Investment_Relationship_Map.md` — exists, `status: active`, built for the pivot. **Pass.**
- `vault/Forecasts/Value_Driver_Tree_v2.md` — exists, `status: active`, correct v2 artifact (the
  pre-pivot `Value_Driver_Tree.md` is marked superseded and is never cited by this section). **Pass.**
- `KPI_Tree_v2.md` (cited once, for the Governance-family claim) — exists, `status: active`, correct v2
  artifact. **Pass.**
- `DEC-008`, `DEC-009` — both exist, both `status: approved`, both dated 2026-07-23 (post-pivot). No
  reference anywhere in this section to the superseded `DEC-003`/`DEC-004`/`ASM-008`/`ASM-011` (the old
  Egypt-retention-hypothesis IDs). **Pass.**
- `ASM-016` — exists in `Assumptions_Register.md`, tier Forecast, **status: Approved**, confidence Low,
  correctly describes the GCC+Jordan-cohort talabat pro population and its exclusion of Egypt/Iraq.
  **Pass.**
- DEC-008's restriction on `ASM-018` (the 2.2:1 *GMV-effect* illustrative split) is correctly respected:
  §4.1 cites the ~2.2:1 figure only as the *disclosed investment-dollar* ratio (120mn:55mn, a simple,
  legitimate ratio of two Facts, N-02/N-03), never as `ASM-018` itself, and never as a quantified
  financial exhibit. This is the correct reading of DEC-008, which restricts the *return*-side illustrative
  split, not the *disclosed spend* ratio. **Pass — no violation found.**

## Hard failures (must be fixed before this section proceeds to Stage 10)

### Failure 1 — CARC figures cited to a source that does not contain them

§4.2 ("targeted incentives") states: "...PostPaid adopters show a 14% frequency increase, funded by CARC
rising from USD89mn (2023) to USD155mn (2025) as a share of GMV (`Business_Relationships.md` Chain 1)."

Re-reading `Business_Relationships.md` Chain 1 directly: it discusses talabat pro's 28% frequency uplift
and talabat rewards' >15% frequency increase — **it contains no CARC figure of any kind.** CARC only
appears in that same file's **Chain 2** ("CARC... USD 103mn (1.4% of GMV) in 2024, rising to USD 155mn
(1.6% of GMV) in 2025 (TLB-002, page 21)") — a different pair of data points than the ones the draft
states (89mn/2023 vs. 103mn/2024). The figures the draft actually uses (89mn/2023 → 155mn/2025) match
verbatim only `vault/Knowledge/Topics/Customer Economics.md` ("CARC rising from USD 89mn (1.5% of GMV,
2023) to USD 155mn (1.6% of GMV, 2025)"), itself built on `Facts/Customer_Growth.md` (TLB-001, page 28)
and `Business_Relationships.md` Chain 2 (TLB-002, page 21).

**This is a genuine mis-citation, not a completeness gap** — the cited document does not support the
claim as written. **Required fix:** change the citation from `Business_Relationships.md Chain 1` to
`Topics/Customer Economics.md` (or `Facts/Customer_Growth.md`, TLB-001 p.28, + `Business_Relationships.md`
Chain 2, TLB-002 p.21) for the CARC clause specifically.

### Failure 2 — ASM-021–028 misattributed to the wrong forecast artifact

§4.3 states: "...each mechanism's historical uplift statistic... is the input to `Value_Driver_Tree_v2.md`'s
Assumption-tagged nodes (`ASM-021`–`028`), which project forward directionally..."

`Value_Driver_Tree_v2.md`'s own closing summary states explicitly: "eight further module-specific
assumptions (`ASM-021`–`ASM-028`) are introduced in `Scenarios_v2.md`'s scenario modules, **not here**."
`Assumptions_Register.md` confirms this independently — every one of ASM-021 through ASM-028's Source
cells reads `[[Scenarios_v2]]`, never `[[Value_Driver_Tree_v2]]`. `Value_Driver_Tree_v2.md` itself only
contains `ASM-015`–`ASM-020`.

**This is a factual misattribution of which artifact hosts these assumption IDs** — a named-fact citation
error, not merely an imprecision. **Required fix:** change "`Value_Driver_Tree_v2.md`'s Assumption-tagged
nodes (`ASM-021`–`028`)" to "`Scenarios_v2.md`'s Assumption-tagged scenario modules (`ASM-021`–`028`)."

### Failure 3 — Advertising "~7%-of-GMV UAE benchmark" mislabels which fact is UAE-specific

§4.2 states: "...against a disclosed ~7%-of-GMV **UAE benchmark** talabat's own Group-wide penetration
(3.3-3.5% of GMV) has not yet closed (`Topics/Revenue Drivers.md`)."

The cited source, `Topics/Revenue Drivers.md`, itself describes this figure as "a ~7% **global** benchmark"
(TLB-001, page 21) — i.e., the cited document does not call this a UAE benchmark; it explicitly calls it
global/industry-wide. Cross-checking `Facts/Advertising_Facts.md` confirms there are genuinely **two
distinct facts** being conflated here:
- TLB-001, page 21: "**Global** benchmark target for AdTech revenue is ~7% of GMV in the medium term" — an
  aspirational, non-geography-specific industry target.
- TLB-002, page 10 / TLB-014, page 19: "**In the UAE**, advertising technology margins have already
  reached 7% of GMV **for talabat mart**" — a distinct, later, genuinely UAE-and-tMart-specific *achieved*
  figure (already reflected correctly in `Value_Driver_Tree_v2.md` N-29: "UAE talabat mart specifically
  already reached the ~7% of GMV medium-term benchmark... — a country-specific figure, not yet a
  Group-wide achieved level").

As written, the draft's phrase attaches the "UAE" geography tag to the **benchmark/target itself** (which
the corpus calls global), rather than to the **achievement** of that level (which is genuinely UAE- and
tMart-specific) — exactly the kind of geography-precision error `Geographic_Evidence_Rules.md` requires
flagging as a citation-audit failure, not a stylistic note, compounded by citing a source
(`Topics/Revenue Drivers.md`) that contradicts the "UAE benchmark" framing on its own terms. **Required
fix:** reword to something like "against a global ~7%-of-GMV AdTech benchmark that UAE talabat mart has
already reached (`Facts/Advertising_Facts.md`, TLB-002 p.10; TLB-014 p.19), while talabat's Group-wide
penetration (3.3-3.5% of GMV) has not yet closed the gap to that benchmark (TLB-001 p.21; `Topics/Revenue
Drivers.md`)" — citing both the global-target source and the UAE-achievement source separately, not
blending them under a single "UAE benchmark" label.

## Non-blocking findings (worth fixing, do not by themselves block Stage 10)

**Finding A — overbroad blanket geography disclaimer.** The pipeline-provenance note at the top states:
"Every uplift statistic below is GCC+Jordan-cohort evidence (`ASM-016`, Low confidence...) unless stated
otherwise — explicitly excludes Egypt and Iraq by name." Taken literally, this covers every statistic in
the section that doesn't individually restate its geography — but several of the statistics that follow
are actually **Group-level Facts**, not GCC+Jordan-cohort/Low-confidence items: the multi-vertical 13.0x
vs. 3.8x frequency comparison and the 68%→73%→76% GMV-share trend (`Value_Driver_Tree_v2.md` N-11/N-14,
tagged Group, Fact), the AI/personalisation EBITDA contribution (N-06/N-09, Group, Fact), the advertising
revenue growth (N-29, Group, Fact), and the UAE/Kuwait/Qatar M1 retention decline (a named 3-country Fact,
not GCC+Jordan-cohort). Only the talabat pro frequency/retention uplift figures are genuinely governed by
`ASM-016`. As written, a reader could reasonably conclude these other, higher-confidence Group-level Facts
carry the same Low-confidence/GCC+Jordan caveat, which is not accurate. **Suggested fix:** narrow the
disclaimer to state it applies specifically to the talabat pro-derived uplift statistics, not to every
number in the section.

**Finding B — missing explicit citation for the talabat pro GMV-share figure.** "talabat pro subscriber
GMV share has grown from 32% to 49% of platform GMV (FY2024→Q1 2026)" (§4.2) carries no inline citation
and is not listed in the section's own traceability table. The figure is independently verifiable and
accurate (`Value_Driver_Tree_v2.md` N-08; `KPI_Tree_v2.md` C1; TLB-020, page 8), so this is not a "traces
to nothing" failure in substance, but the section's own 0%-tolerance standard for numeric claims means it
should not be left uncited even provisionally. **Suggested fix:** add "(`Value_Driver_Tree_v2.md` N-08;
TLB-020, p.8)" inline and add a row to the traceability table.

**Finding C — duplicate wikilink target (vault-wide pattern, not unique to this section).**
`[[Section_02_Business_Description]]` in the "See also" section is ambiguous, since both
`Business_Plan_Drafts/Section_02_Business_Description.md` (superseded) and
`Business_Plan_Drafts_v2/Section_02_Business_Description.md` (current) share the identical filename. This
is a project-wide convention (every v1/v2 section pair does this), not something introduced by this
section specifically, so it is noted for awareness only and not counted as a failure of this audit.

## Anti-patterns checklist (`.claude/skills/business-plan-drafting/SKILL.md`)

- Untraceable claim — none found in the "traces to nothing" sense; the three hard failures above are
  **mis-citations** (wrong source named) or **misattributions** (wrong artifact named), not gaps with no
  underlying evidence at all.
- Group/GCC statistic presented as Egypt-proven — not found; every talabat pro uplift figure carries its
  GCC+Jordan-cohort/`ASM-016` caveat, and the Egypt PostPaid+CIB claim is correctly labeled as the
  section's one genuinely Egypt-specific data point.
- Assumption presented as fact — not found; `ASM-016` and the illustrative constructions (`ASM-018` via
  DEC-008's restriction) are correctly kept out of quantified-exhibit framing.
- Stale pre-pivot cross-references — none found (see currency check above).
- Silent geography conflation — Failure 3 above is exactly this pattern (a global benchmark relabeled as
  country-specific), caught, not silently passed.

## Result

**FAIL.** Three required fixes, all drafting-level corrections (no new research, no Decision Log
escalation needed):
1. Correct the CARC citation from `Business_Relationships.md Chain 1` to `Topics/Customer Economics.md`
   (or `Facts/Customer_Growth.md` + `Business_Relationships.md` Chain 2).
2. Correct "`Value_Driver_Tree_v2.md`'s Assumption-tagged nodes (`ASM-021`–`028`)" to
   "`Scenarios_v2.md`'s Assumption-tagged scenario modules (`ASM-021`–`028`)."
3. Reword the advertising benchmark claim to separate the global ~7% target (TLB-001 p.21) from the
   UAE-specific achievement of that level (TLB-002 p.10; TLB-014 p.19), and correct the citation
   accordingly.

Non-blocking Findings A–C should also be addressed before Section 14's full traceability table is built,
but do not by themselves prevent Stage 10 provided Failures 1–3 are fixed first. Per this project's
0%-tolerance rule, Section 4 **cannot proceed to Stage 10 (QA review)** until Failures 1–3 are resolved
and re-verified.

## Links
- [[Section_04_Value_Proposition|vault/Projects/Business_Plan_Drafts_v2/Section_04_Value_Proposition.md]]
- [[Value_Driver_Tree_v2]] · [[KPI_Tree_v2]] · [[Scenarios_v2]] · [[Investment_Relationship_Map]]
- [[Assumptions_Register]] · [[DEC-008_section9-headline-bucket-split-presentation]] ·
  [[DEC-009_investment-options-ranking-and-allocation-priority]]
- [[Geographic_Evidence_Rules]]
- `vault/Knowledge/Topics/Customer Economics.md` · `vault/Knowledge/Topics/Revenue Drivers.md` ·
  `vault/Knowledge/Topics/2026 Investment Programme.md` · `vault/Knowledge/Business_Relationships.md`
- `vault/Knowledge/Facts/Advertising_Facts.md` · `vault/Knowledge/Facts/Orders_Facts.md` ·
  `vault/Knowledge/Facts/Customer_Growth.md`
- `.claude/skills/citation-audit/SKILL.md` · `.claude/skills/business-plan-drafting/SKILL.md`
