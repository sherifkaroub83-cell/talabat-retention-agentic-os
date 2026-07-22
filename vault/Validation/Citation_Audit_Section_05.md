---
type: validation
section: 5
pipeline_stage: 9
date: "2026-07-22"
result: FAIL (3 hard failures, 6 acknowledged non-blocking limitations)
---

# Citation Audit — Section 5 (AI Technology and Development)

## Tooling note (read first)
Performed by a genuinely top-level-invoked `evidence-citation-agent` thread, launched directly from the
top-level session (not nested inside `bp-orchestrator`), per Phase 8 of the roadmap — the sixth Business
Plan section drafted. This session had `Read`, `Grep`, `Glob`, and `Write` available and no memory of any
prior conversation. The procedure below follows `.claude/skills/citation-audit/SKILL.md` exactly: every
number, named-entity fact, and specific claim in
`vault/Projects/Business_Plan_Drafts/Section_05_AI_Technology_and_Development.md` was walked and traced to
either (a) a direct `(TLB-XXX, page N)` citation independently verified against the underlying
Facts/Strategic/Topics/Entities consolidation layer (not taken on the draft's own word), or (b) an
`ASM-###` row in `vault/Decisions/Assumptions_Register.md` with `status: Approved`. Per the task brief, the
build/buy/partner table (§5.2) was checked for accuracy of characterization even though it is structural
analysis, not a raw corpus citation; the "no MCP disclosed" claim (§5.4) was independently re-verified by a
fresh `Grep` sweep of the whole `vault/Knowledge/` tree rather than trusted on the draft's word, per the
task's explicit instruction that absence claims must trace to the notes documenting the absence, the same
standard `Citation_Audit_Section_03.md` applied (item #19) and passed there because a documenting note
existed.

## Method
Read directly and cross-checked, not taken on faith from Section 5's own prose:
`vault/Projects/Business_Plan_Drafts/Section_05_AI_Technology_and_Development.md` (full text),
`vault/Knowledge/Facts/AI_Facts.md`, `vault/Knowledge/Topics/AI.md`,
`vault/Knowledge/Strategic/AI Opportunities.md`, `vault/Knowledge/Entities/Technology_Platforms.md`,
`vault/Knowledge/Topics/Profitability.md`, `vault/Decisions/Decision_Log/DEC-003_section2-governing-hypothesis.md`,
`vault/Decisions/Decision_Log/DEC-004_2026-investment-total.md`, `vault/Decisions/Assumptions_Register.md`
(all 12 rows), `vault/Projects/Business_Plan_Drafts/Section_04_Value_Proposition.md` (full text, for the
§5.6 three-mechanisms cross-check), `vault/Projects/Business_Plan_Drafts/Section_10_Risk_Analysis.md`
(Technical Risks / Model Transfer Risk section and the probability-impact matrix), `MEMORY.md` (for the
MCP-decision framing claim in the pipeline provenance note). Targeted `Grep` sweeps were run across
`vault/Knowledge/` for: `MCP`/"Model Context Protocol"/`agentic`/`LLM`/"large language model"/`GPT`/`Claude`/
`copilot` (the absence check), `AWS`/`Azure`/`GCP`/"cloud platform" (the cloud-vendor absence check),
`patent` (the IP-claim check), and `back-end`/`backend`/"GPS tracking"/"dispatch algorithm" (the historical
partner-split check) — including a pass over `vault/Knowledge/_source_text/` (the raw extracted PDF text)
to check for facts that exist in the corpus but were never carried into the Facts/Sources consolidation
layer, since a negative claim can be falsified by either layer.

## Findings by claim group

| # | Claim group | Trace target | Result |
|---|---|---|---|
| 1 | Four AI application areas (personalisation, logistics, advertising, internal ops) | `Topics/AI.md` Overview, verified against `Facts/AI_Facts.md` — TLB-001 p.10/13/22-23 and TLB-002 p.15-16 verbatim-matched for personalisation, advertising, and part of internal ops | PASS on substance — **two sub-items imprecisely covered by the cited page range, see Limitations (non-blocking, inherited from `Topics/AI.md`)** |
| 2 | 235TB/day (TLB-002 p.16) and ~13TB/day (TLB-015) data-scale figures | `Facts/AI_Facts.md` — TLB-002 p.16 verbatim-matched (235TB); TLB-015 p.21 verbatim-matched (13TB), also independently corroborated at TLB-026 p.131 | PASS on substance — **TLB-015 citation carries no page number, see Limitations (non-blocking)** |
| 3 | Six-order activation threshold and cuisine-to-item-level shift | `Facts/AI_Facts.md` — TLB-001 p.22-23 verbatim; TLB-002 p.15 verbatim (Meal for One); TLB-026 confirmed as the correct document (p.131) | PASS on substance — **TLB-026 citation carries no page number, see Limitations (non-blocking)** |
| 4 | "Right time" offer-timing quote (TLB-023 p.8) and cross-sell logic (TLB-026 p.121) | `Facts/AI_Facts.md`, both verified verbatim at the exact cited pages | PASS |
| 5 | Fraud-detection mention (as an internal-ops application, no dollar figure attached in the draft) | `Facts/AI_Facts.md` — fraud detection is sourced to TLB-015 p.21 and TLB-026 p.67, not to any page in the cited range (TLB-001 p.10/13/22-23; TLB-002 p.15-16) | **Imprecise, inherited from `Topics/AI.md` — non-blocking, see Limitations** |
| 6 | Three named AI roadmap items (new form factors, cross-sell timing/incentive optimisation, deepened adtech personalisation — TLB-015 p.89, TLB-002 p.10) | `Strategic/AI Opportunities.md`, verified verbatim against both cited pages | PASS |
| 7 | EBITDA-trail figures ($14mn+→$30mn+ FY24→FY25) and "the only directly quantified AI-EBITDA trail in the corpus" superlative, §5.2 Option A table cell | `Facts/AI_Facts.md` (TLB-001 p.23, TLB-002 p.15) and `Topics/Profitability.md` — both substantively support the claim, but **neither is cited anywhere in the cell or its surrounding text** | **FAIL — uncited numeric claim + uncited superlative, see dedicated check below** |
| 8 | "Already funded within the ~USD120mn Everyday App envelope" applied specifically to "the personalisation algorithm, dispatch logic, and adtech targeting," §5.2 Option A table cell | `DEC-004_2026-investment-total.md`, read directly — DEC-004 names the ~USD120mn envelope's funding purposes as "talabat mart dark-store scaling, the talabat pro loyalty programme, and new-vertical expansion," not this specific AI-capability list | **FAIL — over-extended Decision citation, see dedicated check below** |
| 9 | Historical partner/build split ("dispatch algorithms, real-time GPS tracking, back-end solutions, TLB-001/TLB-026") | `Entities/Technology_Platforms.md` and raw Facts files — dispatch algorithms/GPS tracking verified at TLB-001 p.16/23-24; "back-end solutions" as a specific phrase is sourced only to TLB-002 (pp.7,16), not TLB-001 or TLB-026 | PASS on substance — **partial citation-set mismatch, see Limitations (non-blocking)** |
| 10 | "Option A is the direct technical consequence of DEC-003" | `DEC-003_section2-governing-hypothesis.md`, read directly — Option 2's Decision text is "extend talabat's already-stated Group AI roadmap into Egypt," matching Section 5's characterization exactly | PASS |
| 11 | Proprietary personalisation/ranking algorithm, distinct from Delivery-Hero-licensed stack | `Entities/Technology_Platforms.md`, verified verbatim | PASS |
| 12 | "No patent is disclosed anywhere in the corpus" | `Facts/`, `Sources/`, and `_source_text/` layers — **the corpus actually goes further: the raw text of TLB-026 (International Offering Memorandum) states "As of the date of this Offering Memorandum, we do not hold any patents," an affirmative disclosure never ingested into the Facts/Sources consolidation layer** | PASS on substance (claim is not false) — **understates available evidence; a Knowledge-layer gap, not a Section 5 drafting fault, see Limitations** |
| 13 | "The corpus does not name a specific cloud platform (no disclosed reference to AWS, Azure, or GCP)" | Vault-wide `Grep` for AWS/Azure/GCP/"cloud platform" — zero hits anywhere in `vault/Knowledge/` | PASS on substance — **uncited absence claim, same defect class as Claim #14, non-blocking (see Limitations)** |
| 14 | "The corpus discloses no reference to Model Context Protocol, agentic frameworks, or LLM-based tooling anywhere in talabat's own disclosed technology stack" (§5.4) | Vault-wide `Grep` for MCP/"Model Context Protocol"/agentic/LLM/"large language model"/GPT/Claude/copilot | **FAIL — uncited absence claim, not traceable to any documenting note, see dedicated check below** |
| 15 | Egypt-specific infrastructure (largest MENA q-commerce DC, ~27,000 sqm, AI demand forecasting; 1,500-person Global Tech & Shared Services hub, 74%/30%) | `ASM-004`, `Status: Approved`, verified verbatim against the Assumptions Register row | PASS |
| 16 | §5.6 R&D roadmap items mapped to Section 4's Mechanisms 1, 2, 3 | `Section_04_Value_Proposition.md`, read directly | PASS — see dedicated cross-section check below |
| 17 | DEC-003/Option 2 consistency (build/buy/partner recommendation and R&D plans) | `DEC-003_section2-governing-hypothesis.md`, read directly | PASS — see dedicated check below |

## Uncited-claim check (Claim #7) — the class of defect this audit was specifically told to stress-test

Section 5.2's Option A table cell (Capability column) reads: "Proven at Group level (the only directly
quantified AI-EBITDA trail in the corpus, $14mn+→$30mn+ FY24→FY25) but **not yet confirmed to perform
equivalently on Egypt's population**..." No citation of any kind — no `(TLB-XXX, page N)`, no note
reference — is attached to either the `$14mn+→$30mn+` figures or the "only directly quantified... trail"
superlative. Independently re-verified: the figures are real and accurate (TLB-001, page 23: "USD 14mn+
incremental EBITDA p.a."; TLB-002, page 15: "USD 30mn+ incremental EBITDA p.a.," per `Facts/AI_Facts.md`),
and the superlative is genuinely stated in substance in `Topics/Profitability.md` ("the corpus's only
directly quantified AI financial-impact figures (USD 14mn+ to USD 30mn+ incremental EBITDA) are
profitability, not revenue or GMV, figures"). Critically, **§5.1's own body text never states these EBITDA
figures at all** — the mechanism paragraph in §5.1 covers the six-order threshold, the cuisine-to-item
shift, and offer-timing/cross-sell, but not the dollar figures — so this table cell cannot be read as a
correctly-scoped restatement of an already-cited fact elsewhere in the same document; it is the figure's
only appearance in Section 5, and it is fully uncited. This is the exact defect class — a number-bearing
claim whose citation was dropped when content was restructured into a table/comparison format rather than
a "What it is / Quantified" paragraph pair — that `Citation_Audit_Section_04.md`'s Claim #3 flagged as a
hard failure for the identical underlying figure and the identical superlative, in a different section.
**Fix needed:** add `(TLB-001, page 23; TLB-002, page 15; `Topics/Profitability.md`)` to this table cell.

## Over-extended-citation check (Claim #8)

The same table cell's Cost column reads: "Low — no new model development; the personalisation algorithm,
dispatch logic, and adtech targeting already exist and are already funded within the ~USD120mn Everyday App
envelope (`DEC-004`)." Independently re-read `DEC-004_2026-investment-total.md` in full: its Decision
section states the ~USD120mn Everyday App component funds "talabat mart dark-store scaling, the talabat pro
loyalty programme, and new-vertical expansion" (TLB-020, page 12, page 16) — DEC-004's own text never names
"the personalisation algorithm, dispatch logic, and adtech targeting" as the things this envelope funds.
This is a plausible synthesis (talabat pro's offer-timing does run on the personalisation algorithm; tMart
dark-store scaling does depend on dispatch logic) but it is Section 5's own inference, not DEC-004's stated
content, and it is presented as flat fact ("already funded within... `DEC-004`") rather than flagged as an
inference the way DEC-004 itself carefully distinguishes Fact-tier from inference-tier claims within its own
text. Citing `DEC-004` for a claim DEC-004's own Decision text does not make is the same misattribution
pattern `Citation_Audit_Section_10.md` found for the 1,500-person hub figure (cited to the wrong section)
and `Citation_Audit_Section_04.md`'s Claim #10 (one citation asked to support two distinct facts, only one
of which it actually supports). **Fix needed:** either re-word to flag this explicitly as this section's own
synthesis ("this plan infers, though DEC-004 does not state, that talabat pro's and tMart's already-funded
capabilities depend on the same personalisation/dispatch infrastructure...") or narrow the claim to what
DEC-004 actually funds (talabat pro loyalty programme, tMart dark-store scaling, new verticals) without
asserting the specific AI-mechanism equivalence as settled fact.

## Absence-claim check (Claim #14) — the task's central test

Section 5.4 states: "the corpus discloses no reference to Model Context Protocol, agentic frameworks, or
LLM-based tooling anywhere in talabat's own disclosed technology stack — every disclosed AI application is a
conventional ML/ranking system, not an agentic architecture." No citation is attached.

Independently re-verified by a fresh `Grep` sweep of `vault/Knowledge/` (Facts, Strategic, Topics, Entities,
Sources, and `_source_text/` layers) for `MCP`, "Model Context Protocol", `agentic`, `LLM`, "large language
model", `GPT`, `Claude`, `copilot`:
- **"LLM" appears only twice**, both in board-member biographies (TLB-001 and the International Offering
  Memorandum) referring to a **Master of Laws** law degree ("He holds an LLM in International Business...")
  — unrelated to Large Language Models. Correctly excluded as a false positive.
- **"ChatGPT" appears once**, in the International Offering Memorandum's risk-factors section, as an
  **external competitive-discovery-channel risk** ("new channels such as ChatGPT could direct customers
  towards other platforms") — this is a statement about a risk to talabat's own customer-acquisition
  channel, not a disclosure that talabat itself uses ChatGPT, an LLM, or any agentic tooling in its own
  stack. Section 5.4's claim is specifically scoped to "talabat's own disclosed technology stack," which
  this mention does not describe — the claim survives this check on its precise wording, but it is a close
  enough call (a project scoped to "MCP-integration decision remains undecided," per `MEMORY.md`) that it
  is worth recording explicitly rather than silently passing over.
- **No hit for "MCP," "Model Context Protocol," "agentic," "GPT" (beyond ChatGPT), or "copilot"** anywhere
  in the vault's Knowledge layer, including the raw `_source_text/` extraction.

The claim is therefore **substantively true** — but per the task's explicit instruction (and the standard
`Citation_Audit_Section_03.md` set for absence claims, item #19: an absence claim must trace to the note(s)
that document the absence, not be left as a bare assertion), this claim fails that test. Unlike Section 3's
precedent, **no existing vault note's Open Questions section states this specific absence anywhere** —
`Topics/AI.md`'s Open Questions cover a different gap (whether Egypt runs the same models as the GCC), and
`Facts/AI_Facts.md`/`Strategic/AI Opportunities.md` are silent on MCP/agentic/LLM by omission only, not by
explicit documented finding. Section 5.4 provides zero citation for this specific claim, and there is
nothing in the vault to point to that already makes this exact finding. **Fix needed:** add an explicit
citation, e.g. `(Facts/AI_Facts.md, Topics/AI.md — no MCP/agentic/LLM reference in either consolidated
note; independently verified by vault-wide Grep, this audit)`, and — as a non-blocking, out-of-this-audit's-
write-scope recommendation — add a line to `Topics/AI.md`'s Open Questions section explicitly logging this
checked absence, so a future section citing the same fact has a documented trace target rather than having
to re-run the Grep sweep independently, per how `DEC-004`'s audit handled a comparable out-of-scope
Knowledge-layer housekeeping recommendation.

## Cross-section accuracy check (§5.6 vs. Section 4's three mechanisms)

Read `Section_04_Value_Proposition.md` in full and compared directly against Section 5's §5.6 mapping.
Section 4 names, in order: **Mechanism 1** — richer recommendation formats (cuisine-to-item shift, TLB-002
p.15; "new form factors," TLB-015 p.89); **Mechanism 2** — cross-sell timing and incentive optimisation
(talabat pro/Rewards offer-timing, TLB-023 p.8); **Mechanism 3** — deepened adtech-embedded personalisation
(TLB-002 p.10). Section 5's §5.6 names the same three roadmap items in the same order — "new-form-factor
recommendations" (TLB-015 p.89), "cross-sell timing/incentive optimisation" (same source), "deepened
adtech-embedded personalisation" (TLB-002 p.10) — and states these are "respectively, Mechanisms 1, 2, and 3
of Section 4's value creation argument." **The mapping is exact and accurate** — no mechanism is
reordered, split, or conflated, and the citation set for each item matches what Section 4 itself cites for
the corresponding mechanism. **PASS.**

## DEC-003 consistency check

Checked every intervention-driven claim in Section 5 against `DEC-003_section2-governing-hypothesis.md`,
read directly:
- **§5.2's Decision** ("Option A... is the direct technical consequence of DEC-003's already-user-confirmed
  governing hypothesis (extend the Group AI roadmap into Egypt, not build a new capability or license
  one)") is an accurate restatement of DEC-003's Option 2 Decision text.
- **§5.6's three R&D items** are exactly DEC-003's Decision-sentence list ("new-form-factor recommendations,
  cross-sell timing/incentive optimisation, and deepened adtech-embedded personalisation") — no fourth item
  introduced, no re-framing toward Option 1 (churn-prediction/early-tenure intervention, `Future AI
  Opportunities.md`) or Option 3 (subscription-uplift-only optimisation, `How Talabat Creates Value.md`)
  found anywhere in Section 5.

**No drift into DEC-003's unchosen Option 1 or Option 3 framings found anywhere in Section 5.**

## Anti-pattern check (Group/GCC statistics presented as Egypt-proven) — zero-tolerance item

1. **235TB/day and ~13TB/day data-scale figures** — not explicitly labeled "Group-level" at first mention
   in §5.1, but §5.5 restates the same figures with an explicit label: "this is a Group-wide, not
   Egypt-specific, trend." Consistent with the precedent `Citation_Audit_Section_04.md` set (a label
   present at least once in the document is sufficient; missing re-labeling on repeat is a non-blocking
   style point, not a hard failure). **Labeled — pass.**
2. **EBITDA-trail figures ($14mn+→$30mn+)** — explicitly headed "Proven at **Group level**" in the same
   table cell that carries the citation defect above; the scoping label itself is present and correct even
   though the citation is missing (two separate defects, only one of which is an anti-pattern issue, and it
   passes). **Labeled — pass.**
3. **Egypt-specific infrastructure (DC, Global Tech & Shared Services hub)** — the hub's *physical location*
   is genuinely Egypt-specific (per `ASM-004`), while its *functional output* (74% of shared services, 30%
   of app features) is explicitly labeled "Group-wide" inline. No conflation found. **Labeled — pass.**

**No instance found of a Group-level/GCC-level statistic presented as if Egypt-proven anywhere in Section
5.** This is a pass on the drafting skill's most emphasized anti-pattern, consistent with Sections 2, 3, 4,
9, and 10's own results.

## Limitations acknowledged (not counted as hard failures)

1. **The four-application-area citation set (TLB-001 p.10/13/22-23; TLB-002 p.15-16) does not fully cover
   two of its four listed items.** "Logistics" (predictive dispatch, dynamic route optimisation) is
   actually disclosed at **TLB-002, page 8**, not page 15-16; "fraud detection" (one of three named
   internal-ops examples) is disclosed only at **TLB-015, page 21** and **TLB-026, page 67**, neither of
   which is in the cited range. Both imprecisions are inherited **verbatim** from `Topics/AI.md`'s own
   Overview paragraph, which uses the identical citation set for the identical four-item list — this is not
   an error Section 5 introduced independently. **Recommended fix (non-blocking):** add `TLB-002, page 8`
   for logistics and `TLB-015, page 21; TLB-026, page 67` for fraud detection, ideally at the source
   (`Topics/AI.md`) so the fix propagates to any future section drawing on the same note.
2. **Two citations are missing page numbers (correct document, no page given).** The six-order threshold's
   `(TLB-001, page 22–23; TLB-026)` and the data-scale paragraph's `(TLB-015)` both cite a document without
   a page. Independently verified: the underlying facts are genuinely on **TLB-026, page 131** (six-order
   threshold restated; 13TB/day) and **TLB-015, page 21** (13TB/day) or **page 87** (2 R&D centres, same
   sentence). **Recommended fix (non-blocking):** add the specific page numbers.
3. **"Back-end solutions" is attributed to the wrong citation pairing.** §5.2 cites `TLB-001/TLB-026` for
   "dispatch algorithms, real-time GPS tracking, back-end solutions" as a single clause. Independently
   verified: "dispatch algorithms, real-time GPS tracking" is genuinely disclosed at **TLB-001, page 16,
   23-24**; the specific phrase "back-end solutions" is disclosed only at **TLB-002, pages 7, 16** ("Access
   to Delivery Hero's global tech-stack and back-end solutions..."). TLB-026's raw source text does discuss
   "back-end technology solutions... provided by Delivery Hero" (Offering Memorandum, IP/Reliance risk
   factors) but this was not carried into the Facts consolidation layer with a page citation, so it cannot
   currently be verified as supporting the clause either. **Recommended fix (non-blocking):** add
   `TLB-002, pages 7, 16` to the citation for this clause.
4. **§5.3's "no patent is disclosed" claim understates available evidence.** The raw extracted text of
   TLB-026 (International Offering Memorandum) states affirmatively: "As of the date of this Offering
   Memorandum, we do not hold any patents." This is a stronger, directly citable fact than a bare absence —
   but it was never carried into `Facts/_raw/TLB-026_facts.md` or any Facts/Sources note, so it is not
   currently accessible to Section 5's drafting from the semantic layer it is supposed to draw from. This is
   a **Knowledge-layer ingestion gap**, not a Section 5 citation-accuracy fault — flagged here per this
   project's standing discipline of not silently dropping a real finding, consistent with how `DEC-004`'s
   audit flagged an out-of-scope Knowledge-layer update recommendation without treating it as a citation
   failure.
5. **Two other absence claims share the MCP claim's defect pattern but were not counted as separate hard
   failures.** §5.1's "no disclosed reference to LLMs, transformer models, or computer vision specifically"
   and §5.4's "no disclosed reference to AWS, Azure, or GCP specifically" are both independently verified
   true (vault-wide `Grep`, zero hits) but carry no citation and trace to no documenting note, the identical
   defect to Claim #14. These are lower-stakes than the MCP claim (no standing project decision hinges on
   them, unlike MCP's status per `MEMORY.md`), so they are recorded as a non-blocking limitation rather than
   independently counted — but the same fix (add a citation or an Open Questions line) applies equally to
   both if this section is revised.
6. **The Traceability summary's claim "cited per-cell above" overstates the actual state of §5.2's table.**
   Given Claims #7 and #8 above, at least two cells in the Build/Buy/Partner table are not, in fact, cited —
   this summary line should be corrected once the underlying cells are fixed, consistent with how
   `Citation_Audit_Section_04.md`'s Limitation 3 treated an analogous summary/body mismatch.

## Result

**FAIL.** Three hard failures found:
1. §5.2's Option A table cell states the `$14mn+→$30mn+` EBITDA-trail figures and the "only directly
   quantified AI-EBITDA trail in the corpus" superlative with **no citation anywhere** — independently
   verified as true and traceable to `TLB-001 p.23`/`TLB-002 p.15` and `Topics/Profitability.md`
   respectively, but the draft does not point there, and §5.1's own body text never states these figures
   either, so there is no earlier citation in the same document for this cell to be reasonably relying on.
2. The same table's Cost column cites `DEC-004` for a specific claim — that the ~USD120mn Everyday App
   envelope funds "the personalisation algorithm, dispatch logic, and adtech targeting" — that `DEC-004`'s
   own Decision text does not make; DEC-004 names different funding categories (tMart dark-store scaling,
   talabat pro loyalty programme, new-vertical expansion) and never states the AI-capability equivalence
   Section 5 asserts as settled fact.
3. §5.4's "no MCP/agentic/LLM tooling disclosed" claim carries no citation of any kind and — unlike the
   comparable absence claim `Citation_Audit_Section_03.md` passed — does not trace to any existing vault
   note that documents this specific absence. The claim is independently verified true (a fresh vault-wide
   `Grep` found only two irrelevant false positives — "LLM" as a law degree, "ChatGPT" as an external
   competitive-channel risk factor, not talabat's own tooling), but nothing in the draft or the vault points
   a reader to that verification.

**Notably, the two cross-section integration checks the task brief asked to be verified most carefully — the
§5.6-to-Section-4 three-mechanisms mapping, and DEC-003/Option-2 consistency across both the build/buy/
partner recommendation and the R&D plans — both check out as fully accurate, with no drift toward DEC-003's
unchosen Option 1 or Option 3.** The anti-pattern check (Group-level statistics presented as Egypt-proven)
also passes cleanly across all three flagged figure groups. The failure is concentrated specifically in
§5.2's comparison table — exactly the place the task brief flagged as "largely structural analysis, not a
corpus citation per se" — which is precisely where a numeric claim's citation was most likely to be dropped
when content was restructured into cells rather than cited prose, the same defect class
`Citation_Audit_Section_04.md` and `Citation_Audit_Section_10.md` both found in their own sections. Six
additional non-blocking limitations are carried forward rather than silently dropped, per this skill's own
discipline — none would independently block Stage 10, but none of them substitute for the three hard
failures either. Per this skill's rule and the standing 0%-tolerance instruction, Section 5 cannot proceed
to Stage 10 until all three hard failures are fixed and this audit is re-run.

## Links
- `.claude/skills/citation-audit/SKILL.md` — the procedure this audit followed (not a vault graph node, per project convention)
- [[Section_05_AI_Technology_and_Development|vault/Projects/Business_Plan_Drafts/Section_05_AI_Technology_and_Development.md]]
- [[Section_04_Value_Proposition]] · [[Section_10_Risk_Analysis]]
- [[DEC-003_section2-governing-hypothesis]] · [[DEC-004_2026-investment-total]] · [[Assumptions_Register]] (ASM-004, ASM-005, ASM-006)
- `vault/Knowledge/Facts/AI_Facts.md` · `vault/Knowledge/Topics/AI.md` ·
  `vault/Knowledge/Strategic/AI Opportunities.md` · `vault/Knowledge/Entities/Technology_Platforms.md` ·
  `vault/Knowledge/Topics/Profitability.md`
- [[Citation_Audit_Section_03|Citation Audit — Section 3]] · [[Citation_Audit_Section_04|Citation Audit — Section 4]] ·
  [[Citation_Audit_Section_10|Citation Audit — Section 10]]
- [[Pilot_Validation_Plan]]
