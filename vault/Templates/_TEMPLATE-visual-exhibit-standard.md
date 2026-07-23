---
type: template
title: Visual Exhibit Standard
updated: "2026-07-23"
---

# Visual Exhibit Standard

Governs every chart, diagram, or image embedded in the Business Plan (as distinct from Markdown
tables, which the drafting/formatting skills already handle). Added 2026-07-23 on explicit user
approval — "controlled visual support... the Business Plan should NOT become a slide deck, it should
remain an executive report."

## Principles (non-negotiable)

1. **Visuals only where they materially improve understanding.** Not every section needs one. A table
   is often the right answer — don't add a chart to a section a table already serves.
2. **Target ~8–12 exhibits for the complete 14-section plan.** Not one per section, not zero.
3. **No decorative graphics.** Every image must carry analytical content — a real number, a real
   comparison, a real structure — never a stock illustration or a cover-page flourish beyond what
   `executive-document-formatting/SKILL.md` §4.1 already allows.
4. **Every chart originates from evidence, a calculation, or a scenario output already in the vault** —
   never from data invented for the chart. `scripts/generate_exhibits.py` refuses to run without a
   `source` field on every data series.
5. **Figures are automatically numbered**, sequentially across the whole document (Figure 1, Figure 2,
   ...), not restarted per section — `scripts/export_business_plan.py` assigns the number at assembly
   time from each figure's position in the final document, not from its filename.
6. **Every figure carries a source/assumption note** in its caption — a Fact citation
   (`Sources/TLB-XXX, page N`) or an Assumption ID (`ASM-XXX`), exactly like a Business Plan sentence
   would. Any figure that would otherwise cite `ASM-029`–`033` must also carry the DEC-009 mandatory
   disclosure sentence (see `Publication_Layer.md`'s "DEC-009 allocation-range exhibit rule").
7. **No unsupported precision.** A chart may not imply more decimal precision than its underlying
   source/assumption actually supports.
8. **No duplicated presentation.** If a table already shows a number set clearly, don't also chart it
   unless the chart adds a genuinely different form of understanding (a trend over time, a comparison
   shape, a structural breakdown) that the table doesn't.

## Exhibit types (pick the form that fits the analytical job, not the reverse)

| Type | Use for |
|---|---|
| Table | Precise multi-column figures, side-by-side comparisons with more than ~4 series |
| Line chart | A single metric's trend over time (2+ periods) |
| Bar / stacked bar chart | Comparing discrete categories, or a composition breakdown |
| Portfolio / prioritization matrix | Two-axis positioning (e.g. evidence strength vs. reversibility) |
| Value-driver tree diagram | The investment → capability → behaviour → GMV → EBITDA → cash chain |
| Process / architecture diagram | A sequence or system structure (e.g. build/buy/partner stack) |
| Roadmap / timeline | Three Horizons sequencing |
| Risk heat map | Probability × impact positioning |
| KPI dashboard | A compact multi-metric snapshot |
| Scenario comparison | Base/upside/downside bars or ranges side by side |
| Investment-allocation exhibit | The USD175mn envelope structure, or (per DEC-009) the labeled sensitivity exhibit |

## Current exhibit plan (target ~8–12; built as sections reach drafting, not all at once)

| # | Section | Exhibit | Type | Status |
|---|---|---|---|---|
| 1 | 1 / 9 | USD175mn 2026 investment programme structure (~120mn Everyday App / ~55mn Food-leadership) | Investment-allocation exhibit | Built (demo) — `Figure_01_investment_programme_structure.png` |
| 2 | 3 | GCC vs non-GCC GMV/growth comparison | Bar chart | Planned |
| 3 | 4 / 9 | Value driver tree (investment → capability → behaviour → GMV → EBITDA → cash) | Value-driver tree diagram | Planned |
| 4 | 9 | Base/upside/downside FY2026 guidance scenario comparison | Scenario comparison | Built (demo) — `Figure_02_scenario_comparison.png` |
| 5 | 9 / 12 / 14 | OPT-001–005 allocation-range sensitivity exhibit (DEC-009 — appendix/sensitivity only, mandatory disclosure sentence) | Investment-allocation exhibit | Planned |
| 6 | 9 / 12 | Investment options comparison (11-criterion tiering) | Prioritization matrix | Planned |
| 7 | 10 | Risk probability-impact heat map | Risk heat map | Planned |
| 8 | 12 | Three Horizons implementation roadmap | Roadmap / timeline | Planned |
| 9 | 13 | KPI tree snapshot (5 families, baseline vs. newly-instrumented split) | KPI dashboard | Planned |
| 10 | 5 | AI/personalisation build-buy-partner architecture | Process / architecture diagram | Planned (optional — evaluate need when Section 5 QA runs) |

"Built (demo)" rows were generated during the Final Execution Readiness pass to prove the
`generate_exhibits.py` pipeline actually works end to end — see
`vault/Projects/Business_Plan_Drafts_v2/Exhibits/Exhibits_Manifest.md`. They are **not yet embedded**
in any Section_XX draft body — embedding happens during that section's next drafting/QA pass, per the
pipeline's own content-vs-formatting separation (this template doesn't authorize editing a section's
prose on its own). "Planned" rows are recommendations, not commitments — a section's own QA pass may
determine a table serves better, per Principle 1 above.

## Procedure (for `bp-orchestrator`/whoever adds an exhibit during drafting or QA)

1. Confirm the exhibit is analytically necessary (Principle 1) — if a table already does the job, stop.
2. Add a row to `scripts/generate_exhibits.py`'s `EXHIBITS` list with real, sourced data (Fact citation
   or Assumption ID) — never placeholder numbers.
3. Run `python3 scripts/generate_exhibits.py` — it writes the PNG and appends to
   `Exhibits_Manifest.md`, refusing to run if any series lacks a `source`.
4. Insert `<!-- FIGURE: Figure_NN_<slug> -->` at the point in the Section_XX draft where the exhibit
   belongs, with one sentence of surrounding prose introducing it (action title, not "see chart below").
5. `scripts/export_business_plan.py` resolves the marker to the actual image, caption, and sequential
   figure number at assembly time — do not hand-number figures in the Markdown source.

## See also
`vault/Architecture/Publication_Layer.md` · `.claude/skills/executive-document-formatting/SKILL.md` ·
`.claude/skills/business-plan-drafting/SKILL.md` · `scripts/generate_exhibits.py` ·
`scripts/export_business_plan.py`
