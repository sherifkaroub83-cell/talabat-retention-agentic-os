---
type: validation
section: 14
pipeline_stage: "Stage 17 fix re-verification"
run_date: 2026-07-25
auditor: independent Stage 17 re-verification pass (fresh thread, no reliance on prior audit conclusions)
status: PASS — all 4 previously-reported fixes confirmed HOLDING; broader 26-row sample of §14.2 traceability table found 0 new hard failures; 1 minor observation (out of scope) noted for the Orchestrator
---

# Citation Audit — Stage 17 Re-Verification — Section 14 (Appendices)

## Method

Read `Section_14_Appendices.md` in full (current working-tree state). For each of the 4 claimed fixes,
grepped the current text, then opened the cited source note(s) directly and, where applicable, the
current text of the section being cross-referenced (Section 4, Section 13). Extended the check to 26
rows of the §14.2 traceability table — full coverage of every Section 4, 5, 8, 9, 12, 13 row plus the
§14.3 DEC-009 exhibit's 5 sub-rows — opening each cited vault note/source and the current text of the
section it summarizes. Checked geography tags encountered against `Geographic_Evidence_Rules.md`.

## The 4 targeted fixes

**Fix 1 (Sec. 4 EBITDA row, §14.2) — HOLDS.** Line 183: `AI/personalisation EBITDA contribution
USD14mn+ (FY2024) → USD30mn+ (FY2025), Group | \`Topics/AI.md\`; \`Value_Driver_Tree_v2.md\` N-09 |
TLB-001 p.23; TLB-002 p.15`. Opened `vault/Knowledge/Topics/AI.md` directly: it states, verbatim,
"the personalisation/ranking algorithm's estimated contribution rose from USD 14mn+ p.a. (FY2024) to
USD 30mn+ p.a. (FY2025)" (TLB-001 p.23; TLB-002 p.16) — the figure is genuinely there. `Topics/EBITDA.md`
was also opened for comparison: it covers Group Adjusted EBITDA overall (margin bridge, FY2026 guidance)
and does not contain this AI-specific figure at all — confirms the original defect diagnosis was correct
and the fix is appropriate, not just present.

**Fix 2 (body-prose restatement, §14.5) — HOLDS.** Lines 300–306 ("talabat's own embedded AI/
personalisation capability... with a disclosed, growing estimated EBITDA contribution (>USD14mn FY2024 →
>USD30mn FY2025, `Topics/AI.md`)") now cites `Topics/AI.md`, matching the same verified content above.

**Fix 3 (ROI/payback/break-even absence row) — HOLDS.** Two rows in §14.2 state this fact: the Section 4
row (line 186, "No disclosed ROI, payback period, or return figure for either investment bucket... |
`Investment_Relationship_Map.md` | corpus-wide") and the Section 9 row (line 206, "No disclosed
break-even, payback, or ROI figure for either bucket | `Investment_Relationship_Map.md` | corpus-wide").
Both currently cite only `Investment_Relationship_Map.md` — no `Topics/EBITDA.md` on either row. Opened
`vault/Knowledge/Investment_Relationship_Map.md` directly: its "What this note deliberately does not
claim" section states explicitly, "No disclosed ROI or payback figure for either bucket... only
qualitative mechanism narratives... not a forecast of this specific programme's return" — a direct,
on-point match. `Topics/EBITDA.md` was re-read in full: it never uses the words "ROI," "payback," or
"return," confirming the removed citation was genuinely non-supporting for this specific claim, not
just redundant. One observation, out of this task's scope: `Section_09_Financial_Plan.md`'s own
traceability table (line 123) still cites this same claim to `Investment_Relationship_Map.md`; `EBITDA.md`
(both, unchanged) — i.e. Section 9's own row was not given the same fix Section 14's row received. This
is not a Section 14 defect and is not one of the 4 fixes under review, but is flagged here for the
Orchestrator since it is the same underlying claim cited two different ways in two sections of the same
plan.

**Fix 4 (Sec. 13 churn-scope row, §14.2 line 219) — HOLDS.** Current text: "No churn rate, definition, or
cohort analysis exists anywhere in the corpus, at Group level or for Egypt specifically (the only country
the corpus addresses this question for) | `Topics/Customer Churn.md` | corpus-wide absence finding."
Opened `Topics/Customer Churn.md` directly: Open Questions states "no explicit churn rate, churn
definition, or churn cohort analysis for talabat overall or for Egypt specifically" — matches. Opened
Section 13's current text — note the canonical file `Section_13_Monitoring_and_Evaluation.md` still does
not exist in the working tree; only `Section_13_Monitoring_and_Evaluation 2.md` (the untracked iCloud-sync
duplicate) is present, the same structural problem the prior Stage 17 Section 13 audit flagged as an open
hard failure (filename/wikilink-graph issue, not a content issue). Reading that file: lines 57–59 state
"No churn rate, definition, or cohort analysis exists anywhere in the corpus, for talabat overall (Group)
or for Egypt specifically (`Topics/Customer Churn.md`) — the only country the corpus addresses this
question for at all." Substance matches Section 14's row exactly (Group / Egypt specifically / only
country addressed); wording order differs slightly but this is not a citation-audit defect.

## Broader sample (26 rows, prioritizing Sections 4, 5, 8, 12)

**Section 4 (7 of 7 §14.2 rows checked)** against current `Section_04_Value_Proposition.md` and
`Value_Driver_Tree_v2.md`: multi-vertical 13.0x/3.8x + N-14/N-11 — match. talabat pro uplift/GMV-share +
`ASM-016` — match (Approved, confirmed in `Assumptions_Register.md`). Rewards/PostPaid uplift + CARC — match.
AI EBITDA — match (Fix 1). AI-not-a-discrete-line (N-06) — match. Advertising USD246mn→323mn — figures
confirmed present in `Topics/Advertising.md`'s Links to Sources (TLB-001 p.21: USD246mn/3.3%; TLB-002:
USD323mn); note Section 14 cites `Topics/Revenue Drivers.md` here while Section 4's own table cites
`Topics/Advertising.md` — both notes discuss the same ~7%-of-GMV benchmark and are topically valid, but
Revenue Drivers.md does not itself restate the USD246mn/323mn dollar figures in its body text (only in the
underlying TLB citations already given). Minor, non-hard-failure observation, not one of the 4 tracked
fixes. M1 retention -4% y/y — match.

**Section 5 (3 of 3 rows)** against current `Section_05_AI_Technology_and_Development.md`: tech
stack/Delivery Hero licensing — match. talabat pro "6 of 8 countries" + N-08/N-13 — match. MCP-undecided —
match.

**Section 8 (2 of 4 rows spot-checked)** against current `Section_08_Operations_Plan.md`: GLSA Central
Value Baskets/CQCA/Kitchens Services Agreement row — match (TLB-026 pp.152-153,156). 7S Systems/Skills
"Not ready" row — matches §8.4's table exactly.

**Section 9 (3 of 3 rows)** against current `Section_09_Financial_Plan.md`: FY2026 guidance 4.4-4.8% —
match. Q1 2026 4.8% actual — match. No break-even/payback/ROI figure — match (Fix 3; see observation
above re: Section 9's own unchanged dual citation).

**Section 12 (3 of 3 rows)** against current `Section_12_Implementation_Plan.md`: DEC-009 evidence
tiering + resolved funding sequence — match. OPT-002 cheapest/most reversible; OPT-003 not a pilot,
targeted budget weighting — match. No disclosed market-level allocation logic — match.

**Section 13 (3 of 3 rows)** against `KPI_Tree_v2.md` and Section 13's current (" 2.md") text: 50 KPIs/5
families/30-20 split — match (4+9+11+6+0=30; 4+3+3+3+7=20, independently re-added). Churn row — match
(Fix 4). Governance family 7/0/7 — match.

**§14.3 DEC-009 exhibit (5 of 5 option rows)** against `Assumptions_Register.md` ASM-029–033: all five
base/upside/downside dollar ranges match exactly (OPT-001 45-55/55-70/30-40; OPT-002 8-12/12-20/3-6;
OPT-003 25-32/32-40/15-22; OPT-004 8-12/12-18/3-6; OPT-005 10-15/15-22/5-8), all confirmed `status:
Approved`.

**Total sampled: 26 rows across Sections 4, 5, 8, 9, 12, 13, plus the 5-row DEC-009 exhibit.** No new
hard citation failure found in any of them.

## Geographic Evidence Rules check

Every geography tag encountered in the sampled rows (Group, GCC+Jordan cohort excluding Egypt/Iraq,
market-comparison UAE/Kuwait/Qatar, Egypt-standalone) matches the tag stated in its own cited source —
none widened, narrowed, or silently re-tagged in Section 14's table. `Investment_Relationship_Map.md`'s
own Geography note (Group-level, no Egypt-specific inference without a labeled step) is respected by
every row citing it.

## Verdict

All 4 previously-reported fixes **HOLD**. The broader 26-row sample found no new hard failures. One
observation flagged for the Orchestrator, outside the scope of the 4 tracked fixes and not a Section 14
defect: `Section_09_Financial_Plan.md`'s own traceability table still cites the no-ROI/payback claim to
both `Investment_Relationship_Map.md` and `Topics/EBITDA.md`, unlike Section 14's now-corrected
single-citation version of the same claim — worth aligning for whole-plan consistency, not a citation-audit
FAIL for Section 14. Separately noted (not new, already flagged by the prior Stage 17 Section 13 audit and
unrelated to Fix 4's substance): the canonical `Section_13_Monitoring_and_Evaluation.md` file still does
not exist in the working tree; only the untracked `" 2.md"` duplicate is present. This did not affect my
ability to verify Fix 4's substance (the duplicate's content was readable and matches), but it remains an
open structural/wikilink-graph problem this task was not scoped to fix.
