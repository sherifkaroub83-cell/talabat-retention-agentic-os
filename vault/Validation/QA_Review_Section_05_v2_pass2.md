---
type: validation
section: 5
pass: 2
status: FAIL
date: "2026-07-24"
built_by: qa-review-agent
draft_reviewed: vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md
---

# QA Review — Section 5 (AI Technology and Development), v2 draft, Pass 2 (independent)

## Tooling note (read first)

Genuinely independent Pass 2 per `Agentic_OS_Architecture_v2` Change 2: this review was formed
**before** reading any prior QA artifact. All checks below were run directly against the governing
documents (`AI_Business_Plan_Template.md` §5, `.claude/skills/business-plan-drafting/SKILL.md`,
`Problem_Charter.md`, `vault/Architecture/Geographic_Evidence_Rules.md`, `DEC-004`, `DEC-010`,
`DEC-011`, `vault/Forecasts/Value_Driver_Tree_v2.md`, and the underlying Knowledge notes), not
against the draft's own citations taken on faith. Per the qa-review rules, this review approves or
rejects only — no prose was edited; fixes return to the Orchestrator.

## Verdict

**FAIL — 6 blocking findings, 4 non-blocking.** The section's architecture is sound (all six
template sub-bullets structurally present; answer-first; the two-AI-capabilities separation is
honest and well-executed; no DEC-008/DEC-009 violations; no invented AI budget). It fails on
citation accuracy (two wrong-document citations), one factual timing misstatement, one claim made
false by a decision taken after drafting (DEC-011), the absence of the required v2 citation audit,
and the missing explicit-criteria options analysis the template's McKinsey Lens mandates.

## Blocking findings

### B1 — No independent citation audit exists for the v2 draft (skill step 3 unsatisfiable)
`vault/Validation/Citation_Audit_Section_05.md` (2026-07-22) audits the **superseded v1
Egypt-retention draft** at `Business_Plan_Drafts/` — and itself resulted FAIL. No
`Citation_Audit_Section_05_v2.md` exists. The qa-review skill's step 3 ("any open failure blocks
approval") cannot be satisfied; the draft's own provenance note concedes "independent citation
audit and QA still required." **Fix:** run the `evidence-citation-agent` on the v2 draft before
resubmission to QA.

### B2 — N-06 cited to the wrong document (provenance note + traceability row 4)
The draft cites "`vault/Knowledge/Investment_Relationship_Map.md` N-06". That file contains **no
numbered nodes**. Node N-06 ("AI/personalisation capability deployment, cross-cutting both
buckets") lives in `vault/Forecasts/Value_Driver_Tree_v2.md` (Fact tier; TLB-001 p.22-23, TLB-002
p.15-16). This is the identical wrong-document defect `Citation_Audit_Section_02_v2.md` caught
(items #8/#22) and corrected in Section 2 — the drafting skill's own Section 5 content-map entry
carries the same mispointer, which explains but does not excuse the error. **Fix:** retarget both
appearances to `Value_Driver_Tree_v2.md` N-06 (the "not a separate dollar line" substance is also
quoted in `Investment_Portfolio_Register.md`, a valid secondary anchor).

### B3 — USD14mn+ → USD30mn+ AI/personalisation EBITDA contribution cited to `Topics/EBITDA.md`, which does not contain it
Neither the figure nor any AdTech/personalisation-contribution claim appears anywhere in
`Topics/EBITDA.md`. The figure's actual homes are `Topics/AI.md` and `Topics/Personalization.md`
(with `Entities/Technology_Platforms.md` carrying the USD14mn+ line, TLB-001; and
`Value_Driver_Tree_v2.md` N-06 carrying the consolidated citation). Violates the drafting skill's
golden rule: the cited vault note must actually carry the claim. **Fix:** re-cite the Answer
paragraph and traceability row 3 to `Topics/AI.md` / `Topics/Personalization.md` (or N-06), and
tag the figure's geography — `Topics/AI.md` Open Questions states it is a whole-company/regional
figure, never country-level.

### B4 — §5.4's MCP claim is now false: DEC-011 (approved 2026-07-24) built the MCP layer
The draft states "this project's own MCP integration decision remains undecided (`MEMORY.md`)."
That was true at pipeline_run 2026-07-23; as of 2026-07-24, `DEC-011` (status: approved) decided
to **pursue** — the read-only `vault-mcp` server (`scripts/vault_mcp/server.py`) is built and
registered in `.mcp.json`, per `CLAUDE.md`. The template sub-bullet explicitly covers "agentic
tooling / MCP where relevant," so §5.4 now misdescribes the OS's actual tooling — and the correct
story (query-only MCP surface that cannot bypass the pipeline's gates) actively strengthens the
section's Responsible-AI framing. **Fix:** rewrite the §5.4 MCP note and traceability row 6
against `DEC-011`. (`MEMORY.md` line 147 is itself stale — flagged to the Orchestrator separately;
not a Section 5 edit.)

### B5 — §5.5 misdates and mislabels the talabat pro 7-of-8 milestone (Geographic Evidence Gate failure)
Draft: "live across 7 of 8 countries for talabat pro personalisation by end-2024." Per TLB-001
p.11-12's own quote, the "seven of the eight countries" milestone follows the **Egypt launch,
February 2025** ("At the time of writing, talabat pro was recently launched in Egypt...") —
`Geographic_Evidence_Rules.md` Failure Pattern 1 states flatly that talabat pro did not launch in
Egypt until February 2025, and `Relationship_Map.md` dates the 7/8 statement to Feb 2025. The
end-2024 dating rides an internal inconsistency in `Facts/Talabat_Pro.md` rather than the primary
quote. Additionally, 7/8 measures **talabat pro availability**, not "personalisation" — a claim
substitution. **Fix:** restate as "available in seven of eight countries following the February
2025 Egypt launch (TLB-001, p.11-12); Iraq remains the exception," and drop or separately evidence
the personalisation framing.

### B6 — Build/buy/partner presented without the required explicit-criteria comparison
The template sub-bullet requires "build / buy / partner decision **with criteria and rationale**";
the Section 5 McKinsey Lens names the criteria: cost, speed, capability, data confidentiality —
"a structured options analysis... not a tools list." §5.2's heading promises a "Structured Options
Analysis" but delivers none: the talabat-side decision is (legitimately) inherited, but the
OS-side build decision self-describes as "not evaluated against real criteria here" and "not
evidenced by a formal criteria comparison." The honesty is commendable; the requirement is still
unmet, and the fix is small. **Fix:** add a compact criteria table applying cost / speed /
capability-fit / data-confidentiality to build-vs-buy-vs-partner for the decision-support system
(the draft's own reasoning — bounded corpus, five options, no need for platform generality —
already supplies the cell contents), and keep the stated revisit trigger.

## Non-blocking findings

1. **§5.2 cross-bucket caveat:** the embedded AI capability is tied solely to the ~USD75mn
   Everyday App opex line; N-06 and `OPT-005` state it is embedded across **both** buckets
   (primarily Everyday App opex, lesser Food-leadership). Add the caveat in-sentence to avoid
   implying an Everyday-App-only AI attribution. (Arithmetic itself is clean — see gates below.)
2. **Inline geography tags:** the Answer paragraph's EBITDA-contribution figures and §5.1's
   logistics claim carry no inline geography tag; per `Geographic_Evidence_Rules.md` ("state the
   geography tag inline"), tag both **(Group)**. No promotion/demotion misuse found; no "MENA";
   no non-GCC conflation.
3. **MECE statement:** the two-capability breakdown (embedded customer-facing AI vs.
   decision-support AI) is a genuinely MECE split but the draft never says why (distinct owners,
   distinct users, distinct funding logic; jointly exhaustive over the AI in scope). One sentence
   satisfies the McKinsey Lens requirement to state MECE explicitly.
4. **Hypothesis linkage could be explicit:** the section connects correctly in substance to
   Section 2.3's governing hypothesis (the decision-support layer *is* the hypothesis's subject;
   embedded-AI scaling ties to OPT-005/N-06), but never names it. One cross-reference sentence
   would close the loop. Note: the operative hypothesis is Section 2.3's fresh capital-allocation
   hypothesis — `DEC-003` is `status: superseded` (2026-07-23) and the draft is right not to cite it.

## Gate results (section scope)

| Gate | Result | Notes |
|---|---|---|
| Template completeness | **FAIL (B6)** | All six sub-bullets structurally present (§5.1–5.6, incl. data models in §5.3); criteria comparison missing from build/buy/partner |
| McKinsey Lens | PASS with notes | Answer-first present; MECE split sound but unstated (NB-3); hypothesis link implicit (NB-4) |
| Citation audit consumption | **FAIL (B1)** | No v2 audit exists; v1 audit targets the superseded draft |
| Staleness | **FAIL (B4)** | No external Research Notes cited (trivial pass there); DEC-011 post-dates the draft and falsifies §5.4's MCP claim |
| Anti-patterns | **FAIL (B2, B3)** | Two claims not traceable to the cited vault note; otherwise clean — no MENA, no invented AI budget, no undisclosed-split presentation, no automatic-decision framing |
| Problem Consistency Gate | PASS | Pivoted problem throughout; two AI capabilities kept separate; no unmarked pre-pivot residue; supersedes note present |
| Financial Integrity Gate | PASS | 175 = 120 + 55 (DEC-010); 120 = ~75 opex + ~45 capex (DEC-004, TLB-020) — the §5.2 ~USD75mn is the genuine disclosed opex sub-component, correctly labeled; no AI dollar line invented; DEC-008 not implicated (no scenario exhibits). NB-1 caveat recommended |
| Geographic Evidence Gate | **FAIL (B5)** | 7-of-8 milestone misdated to end-2024 vs. the Feb 2025 Egypt launch; plus NB-2 inline-tag hygiene |

## Convergence/divergence with prior reviews (read after findings were formed)

No v2 Pass 1 QA artifact exists to converge with — Pass 1 was the draft's own in-file self-review
(provenance note), which correctly anticipated B1 ("independent citation audit and QA still
required"). `QA_Review_Section_05.md` and `Citation_Audit_Section_05.md` both target the
superseded v1 draft and were not used as inputs. Convergent external signal: B2's wrong-document
N-06 pattern was independently caught for Section 2 by `Citation_Audit_Section_02_v2.md` — this
review found it in Section 5 before consulting that file's fix record, confirming it is a
systematic content-map defect (the drafting skill's Section 5 entry itself mispoints N-06 and the
14→30mn figure), worth an Orchestrator-level fix to the skill file, not just per-section patches.

## Disposition

Section 5 remains 🟡 in `vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md`
(row 5 — status cell not flipped). Handed back to the Orchestrator with the six blocking fixes
above; B2/B3/B5 are line-level citation/wording corrections, B4 is a short rewrite against
DEC-011, B6 is one added table, B1 is a pipeline step (run the v2 citation audit), after which
this section is a strong candidate to pass on resubmission.
