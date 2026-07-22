---
type: validation
section: 7
pipeline_stage: 11
date: "2026-07-22"
result: "FAIL — one confirmed cross-reference misattribution (the section's central 'Answer, stated first' claim wrongly names Section 4 as the source of the 25%-MAU/50%-GMV 80/20 finding, which independently traces only to Section 3 §3.4 and to Value_Driver_Tree node ASM-008's actual content, not the 80/20 figure) plus one template-literalism gap in the funnel table's acquisition-stage numbering. Both are small, mechanical, fully resolvable from material already on hand — no new Research/Forecast/Decision work required. Citation audit fully closed (PASS, four fix rounds, independently re-verified here). No DEC-003 drift found. Positioning's 'what we are NOT targeting' requirement is genuinely and strongly satisfied. First QA pass for this section."
reviewer: qa-review-agent, freshly-invoked thread, no memory of the drafting session or the citation-audit session
---

# QA & Final Review — Section 7 (Marketing and Sales Strategy)

## Tooling note and independence statement (read first)

**Tools actually available to this thread: `Read`, `Grep`, `Write`.** No `Edit`, `Agent`, `WebSearch`,
`WebFetch`, or `Glob`. This is the same toolset Sections 2, 5, 6, 9, and 10's QA reviews report holding.

**Independence confirmed.** This is a separately-invoked thread with no memory of the drafting session or
the citation-audit session (original FAIL + three targeted re-audit addenda). This review is built entirely
from files read directly for this pass: `vault/Projects/Business_Plan_Drafts/Section_07_Marketing_and_Sales_Strategy.md`
(full text), `AI_Business_Plan_Template.md` (§7 in full, read at the repository root, not the vault),
`.claude/skills/business-plan-drafting/SKILL.md` (§7 entry, Known evidence gaps, Anti-patterns list),
`.claude/skills/qa-review/SKILL.md`, `vault/Validation/Citation_Audit_Section_07.md` (original FAIL plus
all three re-audit addenda, in full — 868 lines, read in two passes), `vault/Decisions/Decision_Log/
DEC-003_section2-governing-hypothesis.md` (in full), `vault/Decisions/Assumptions_Register.md` (rows
ASM-001 through ASM-013, to independently check what ASM-008/010/011 actually contain), `vault/Projects/
Business_Plan_Drafts/Section_03_Market_Analysis.md` (the 80/20 paragraph, lines 90–120) and
`vault/Projects/Business_Plan_Drafts/Section_04_Value_Proposition.md` (in full) for the cross-reference
accuracy check the task specifically asked for, `vault/Validation/QA_Review_Section_06.md` (for report-format
and rigor precedent), and `vault/Research/Notes/RES-001_egypt-named-competitors.md` /
`RES-004_egypt-official-newsroom-operational-datapoints.md` (front-matter only, for the staleness check). A
targeted `Grep` sweep was run against the section text for `80/20`, `25%`, `churn`, to independently verify
rather than assume the cross-reference and DEC-003-drift findings below, and against Sections 3/4 for the
same terms to locate where the 80/20 finding actually lives.

## Checklist

### 1. Template completeness

Checked every required sub-bullet in `AI_Business_Plan_Template.md` §7 against the draft:

| Required sub-bullet | Present? |
|---|---|
| Positioning — how the AI product stands out, and segments deliberately not pursued | **Yes, strongly.** The USP paragraph (inherited from Section 4 §4.1, correctly cited) plus a three-item "What this plan deliberately does NOT pursue, and why" list (price-only acquisition war vs. Breadfast/Rabbit/elmenus; new-customer mass acquisition as the primary lever; a generic loyalty-points scheme) — each with a named reason, not a bare assertion. This is exactly the "positioning is a choice" instruction the template's own Lens callout asks for, done well. |
| Customer Acquisition — channels with expected funnel conversion at each stage | **Partial — see Finding 2.** The Channels paragraph honestly states the corpus discloses no Egypt-specific channel-spend/mix data, then names what structural channels are disclosed (Partner-side organic discovery, q-commerce store-density/affordability levers). The synthetic funnel table then supplies a number for three of the funnel's stages — but explicitly declines to number the first (awareness/install → first order) stage at all ("not modeled — outside this plan's scope"), which is a literal, checkable shortfall against the template's own "awareness to conversion to retention, with a number at each stage" wording. See Finding 2 for why this is a fixable, not fatal, gap. |
| Customer Acquisition — sales funnel and customer journey mapping | Yes — the Food → Grocery & Retail → talabat pro journey, correctly labeled Group-level/not-yet-Egypt-proven (Fix 4, independently re-verified below), mechanically reinforced by the ~6-order personalisation threshold and the frequency/GMV anchor statistics. |
| Partnerships — collaborations with tech companies, data providers, or resellers | Yes, substantively, with an honest negative: Delivery Hero (infrastructure/tech partner), CIB (Egypt-specific FinTech partnership, live), Partner co-funding (reseller-adjacent, Group-wide figure correctly labeled), GEMs (named only as internal precedent, explicitly scoped out of DEC-003's Option 2 consumer-facing boundary), and an explicit statement that no third-party AI/data-provider partnership is disclosed anywhere in the corpus — a genuine gap named openly rather than invented. |
| Retention — customer support, training, community-building | Present as an explicit, honest gap statement (no support-model detail disclosed at Group or Egypt level), correctly routed forward to Section 8 rather than invented — consistent with the drafting skill's own instruction to flag gaps rather than silently fill them. Not "substantive" in the sense of containing new content, but substantively honest, which is the correct response to a genuine corpus gap. |
| Retention — regular updates and enhancements to the AI solution | Yes — correctly answered by cross-reference to Section 5 §5.6's R&D roadmap (the same three DEC-003 mechanisms), avoiding a duplicate restatement, consistent with this plan's established cross-section discipline. |

**One sub-bullet (funnel conversion "at each stage") is only partially satisfied on a literal reading of the
template's own wording — see Finding 2.** Every other required sub-bullet is present and substantive, not a
bare heading.

### 2. McKinsey Lens

`AI_Business_Plan_Template.md`'s Section 7 Lens instruction, checked directly, not paraphrased: *"Structure
acquisition as funnel economics — awareness to conversion to retention, with a number at each stage — and
concentrate spend where Section 3's 80/20 analysis says the value is. Positioning is a choice; state what
you are NOT targeting and why."*

- **Pyramid Principle: Pass on structure, but the opening "Answer, stated first" paragraph contains the
  section's one confirmed factual defect — see Finding 1.** The conclusion is stated before supporting
  detail, correctly. The defect is in what the conclusion cites, not in its placement or structure.

- **MECE:** No formal MECE-labeled breakdown exists in this section (unlike Section 6's revenue streams or
  Section 3's segmentation) — the template does not itself demand a MECE-justified taxonomy for Section 7,
  and none of Positioning's three "not pursued" items, Customer Acquisition's funnel stages (a genuinely
  sequential, non-overlapping progression by construction), or Partnerships' five items reads as a competing
  or overlapping categorization scheme. **Not applicable in the way it is for Sections 3/6/9/10; no MECE
  defect found.**

- **Hypothesis-driven / DEC-003 consistency — Pass, independently re-checked, no drift.** Re-read
  `DEC-003_section2-governing-hypothesis.md` in full and walked every intervention-bearing claim in Section 7
  against it directly. The "Answer, stated first" paragraph explicitly frames the section's marketing motion
  as executing DEC-003's Option 2 (roadmap extension), not Option 1 (churn-prediction) or Option 3
  (subscription-uplift-only). A `Grep` sweep for "churn" across the full section text returns exactly one
  hit, in the GEMs bullet, and it is a guard clause explicitly *excluding* Option 1 framing ("consistent
  with `DEC-003`'s confirmed Option 2 scope (not Option 1's churn/win-back framing)"), not a drift into it.
  The Regular-updates paragraph names the identical three DEC-003 mechanisms Section 4 and Section 5 §5.6
  use ("new-form-factor recommendations, cross-sell timing/incentive optimisation, deepened adtech-embedded
  personalisation"). **No DEC-003 drift found anywhere in the section.**

- **Value-driver traceability (Section 4/9/13 consistency, per the skill's own checklist item 2.5) — mostly
  clean, but this is where Finding 1 lives.** Section 7 correctly cross-references Section 4 twice for "the
  same personalisation/timing mechanisms" and correctly cross-references Section 5 §5.6 for the R&D roadmap
  — both accurate. The defect is narrower and specific: Section 7 additionally attributes the section's
  **80/20 concentration finding** (~25% of MAUs / ~50% of GMV) to **Section 4**, when independent, direct
  inspection of `Section_04_Value_Proposition.md` (full text) and `Assumptions_Register.md`'s `ASM-008` row
  (Section 4's own cited Value-Driver-Tree node) shows neither contains this statistic — see Finding 1 in
  full below.

- **Task item (a) — does the synthetic funnel table satisfy "a number at each stage" while staying honestly
  labeled?** **Labeling: yes, cleanly** — independently re-confirmed consistent with the citation audit's own
  finding (heading, prose, a column literally titled "Illustrative conversion (synthetic)," every cell
  prefixed "Illustrative: ~X%," and a closing bolded prohibition on citing the numbers elsewhere as real).
  **Completeness: no, not fully** — the first stage (App install/registration → first order) carries no
  number at all, only "*not modeled — outside this plan's scope (acquisition, not retention)*." The template's
  own wording is "awareness to conversion to retention, with a number at each stage" — a four-stage table that
  numbers three of four stages and explicitly declines the first is a genuine, checkable partial answer to
  this specific instruction, not a stylistic quibble. See Finding 2 for the fix, which does not require
  fabricating a fourth number if the alternative (explicitly tying the omission to the plan's own
  already-stated Positioning rationale) is taken instead.

- **Task item (b) — does Positioning genuinely state what is NOT targeted and why?** **Yes, unambiguously.**
  Three named exclusions (price-only acquisition war against Breadfast/Rabbit/elmenus; new-customer mass
  acquisition as the primary lever; a generic loyalty-points scheme), each with a specific, evidenced reason
  — not a generic disclaimer. This is the strongest-executed sub-requirement in the section.

- **Task item (c) — does the section concentrate spend where Section 3's (or Section 4's) 80/20 analysis
  says the value is, and is the cross-reference accurate?** **The strategic conclusion is right; the
  citation is wrong, and it is wrong specifically about which section the finding lives in — this is Finding
  1, detailed below, not a minor imprecision.** The template names "Section 3's 80/20 analysis" by number.
  Independent, direct inspection of `Section_03_Market_Analysis.md` (lines 100–113, "The 20% driving 80% of
  value") confirms this exact finding — ~25% of MAUs / ~roughly half of platform GMV, TLB-019 p.7, TLB-014
  p.14, TLB-020 p.8 — is stated there, verbatim-matching the citations Section 7 uses. A full-text `Grep` of
  `Section_04_Value_Proposition.md` for "25%" and "quarter" returns **zero matches**; Section 4's actual
  quantified content (Mechanism 2) is the *different* 20–28% order-frequency-uplift / 26–32%
  retention-uplift / 13.0-vs-3.8-orders/month / +16pp-to-+20pp-retention figures, cited to a different TLB
  set (TLB-023 p.8, TLB-001 p.18, TLB-019 p.11, TLB-015 p.78/p.104, TLB-012 p.7, TLB-019 p.10) and to a
  different Value-Driver-Tree node (`ASM-008`, independently re-read in `Assumptions_Register.md`, whose own
  Value column states "20-28% order-frequency uplift / 26-32% retention uplift... applied directionally to
  Egypt" — no MAU/GMV concentration figure anywhere in that row). Section 7 nonetheless states, twice, that
  this is "Section 4's 80/20 finding":
  - "Answer, stated first" (closing sentence): "...in favor of retention-of-existing-base economics, which
    **Section 4's 80/20 finding** shows is where the value already concentrates."
  - Positioning ("Not new-customer mass acquisition as the primary lever" bullet, opening clause):
    "[[Section_04_Value_Proposition|**Section 4**]]'s 80/20 finding — a Group-level ~25% of MAUs... already
    accounts for roughly half of platform GMV (TLB-019, page 7; TLB-014, page 14; TLB-020, page 8)..."
  Both instances cite the exact TLB set that traces to Section 3 §3.4, not to anything in Section 4 — this
  is not a case of the same fact being independently re-derived in both sections (which would be
  unremarkable); it is one fact, stated once, in Section 3, mislabeled as belonging to Section 4 in both
  places Section 7 invokes it. Notably, the **same** "Answer, stated first" paragraph gets this right one
  sentence earlier — "The McKinsey Lens for this section — concentrate spend where **Section 3's** 80/20
  analysis says the value is..." — making the closing sentence's "Section 4's 80/20 finding" an internal
  inconsistency within the same paragraph, not merely an isolated slip. **This is the section's single
  confirmed defect and the reason for this review's FAIL verdict.**

  **Why this matters, not just as a citation nicety:** the template names Section 3 specifically as the
  source of the 80/20 discipline this section is supposed to concentrate spend against — attributing the
  finding to the wrong section undermines exactly the kind of end-to-end value-driver traceability
  `.claude/skills/business-plan-drafting/SKILL.md` and this project's own QA discipline (see
  `QA_Review_Section_06.md`'s comparable Value-Driver-Tree-tracing finding) treat as load-bearing, not
  cosmetic. A reader or grader following the citation to Section 4 to verify the 80/20 figure would not
  find it there.

  **Fix needed (small, mechanical, two locations, no new evidence work required):**
  1. "Answer, stated first," closing sentence: change "which Section 4's 80/20 finding shows..." to "which
     **Section 3's** 80/20 finding (§3.4) shows...", matching the same paragraph's own earlier, correct
     reference to "Section 3's 80/20 analysis."
  2. Positioning bullet: change "[[Section_04_Value_Proposition|Section 4]]'s 80/20 finding" to
     "[[Section_03_Market_Analysis|Section 3]] §3.4's 80/20 finding," keeping the TLB-019/TLB-014/TLB-020
     citations unchanged (they are correct — they were simply attached to the wrong section link). Section
     4 can still be cross-referenced immediately after, correctly, as the section that names the
     *mechanisms* (Mechanism 2 specifically) that operationalize capturing that value — the two facts are
     complementary, not interchangeable, and should not be merged under one section's name.

- **Task item (d) — DEC-003 drift.** **None found.** See the Hypothesis-driven bullet above.

### 3. Citation audit consumption

Read `vault/Validation/Citation_Audit_Section_07.md` in full, including all three targeted re-audit addenda
(868 lines total). Original result: **FAIL**, 2 hard failures (a Group-wide foodservice-penetration figure
presented without an Egypt qualifier; a wrong-page CIB citation). First re-audit: both original failures
confirmed fixed, but found a **third** instance of the same anti-pattern (an unlabeled "low single-digit"
grocery/retail-penetration statistic) introduced adjacent to the first fix. Second re-audit: the third
instance confirmed fixed, but found a **fourth** instance — the section's foundational Food → Grocery &
Retail → talabat pro journey claim, stated as unqualified fact in two locations, despite the very note cited
for it instructing the claim be framed as an extrapolation, not an Egypt-verified funnel. Third re-audit
(the "exhaustive sweep," explicitly run because three consecutive rounds had each found one new instance):
the fourth fix confirmed correctly and substantively applied at both locations (with one minor,
non-blocking, subsection-misattribution-within-the-correct-document precision note, not treated as
blocking); a deliberately harder, full-section, line-by-line sweep of every remaining claim, including the
two subsections least scrutinized by the prior three passes, found **no fifth instance** of the pattern.
**Final result: PASS. "Section 7 is ready for Stage 11 QA review. No open citation-audit failure remains."**

I independently re-verified this closure rather than accepting it on the audit's own word: re-read the
current section text in full for the specific claims the audit's four fix rounds touched (the 20-25%
foodservice-penetration sentence, the "low single-digit" grocery/retail sentence, the CIB citation, and the
two customer-journey qualifier locations) and confirm each carries the labeling the third re-audit's Part 1
and Part 2 describe. **No open citation-audit failure blocks this review.**

**One note for the record, not itself a citation-audit failure:** this review's own Finding 1 (the Section
3-vs-Section 4 misattribution of the 80/20 finding) is a different defect class than anything the citation
audit checked — the audit's mandate is whether a cited number/fact is real and accurately sourced to its
underlying TLB document, not whether a cross-reference to *another section of this plan* names the correct
section. Both instances of "Section 4's 80/20 finding" cite fully accurate, real TLB numbers (TLB-019 p.7,
TLB-014 p.14, TLB-020 p.8) — which is exactly why the citation audit's four rounds, thorough as they were,
correctly did not flag this as a citation-accuracy failure. It is a McKinsey-Lens/value-driver-traceability
defect, squarely this review's job to catch, not a gap in the citation audit's own diligence.

### 4. Staleness check

Section 7 cites `ASM-002` (named Egypt competitors, traces to `RES-001_egypt-named-competitors.md`) and
`ASM-004` (Egypt q-commerce distribution centre, traces to `RES-004_egypt-official-newsroom-operational-datapoints.md`).
Both Research Notes carry `retrieved: "2026-07-22"` — the same calendar date as this section's own
`pipeline_run: 2026-07-22` — but, per the identical situation already flagged in Sections 3, 5, and 6's QA
reviews for these same two notes, they were originally produced during Section 3's earlier Pilot 1 drafting
session, not this section's own session. Per `.claude/skills/qa-review/SKILL.md`'s staleness rule ("any
Research Note cited that predates the current drafting session gets flagged for re-verification, not an
automatic fail"), **RES-001 and RES-004 are flagged here for re-verification, consistent with the identical
treatment already given both notes in Sections 3, 5, and 6.** `DEC-003` (Decision-layer, carried over as
background/consistency evidence, not a new primary claim) carries no staleness concern under the same
precedent those three reviews established.

### 5. Anti-patterns checklist (against `.claude/skills/business-plan-drafting/SKILL.md`)

- **Untraceable claim:** None found. Citation audit closed clean across four fix rounds, independently
  spot-checked above. **Pass.**
- **Silently resolving a documented internal discrepancy:** Not applicable — none of the three named
  repo-wide discrepancies (Egypt category-share, the 2026 investment total, the Subscription-line
  reclassification) is touched by this section's content. **Pass.**
- **Presenting Group/GCC-level statistics as Egypt-proven — the anti-pattern this section's citation audit
  found four separate times.** Per the task brief's specific instruction, this review ran its own
  normal-diligence re-read of the current section text for any further instance, not relying solely on the
  citation audit's own exhaustive third-pass sweep. Every Group-level statistic in the current text carries
  an explicit, adjacent qualifier: the 20-25% foodservice-penetration figure ("Group-wide, 8-country
  statistic... not an Egypt-measured one"), the "low single-digit" grocery/retail figure ("**Group-level,
  not Egypt-specific**"), the customer-journey arc ("a Group-level narrative, not yet Egypt-proven"), the
  3.8-vs-13.0 and 73%-of-GMV journey statistics ("neither is Egypt-specific"), the Partner-funded-savings
  figures ("Group-wide"... "no Egypt-specific... figure is disclosed"), talabat Rewards/PostPaid uplift
  ("not Egypt-specific"), and the Regular-updates R&D items ("Group-disclosed, not-yet-Egypt-attributed").
  **No further unlabeled instance found; consistent with the citation audit's own final, exhaustive
  clearance.** **Pass.**
- **Section 9/13 numbers not traced back to Section 4 value mechanisms:** Not directly applicable (Section 7
  does not build Section 9/13 numbers), but the same discipline it protects is what Finding 1 catches for
  this section's own cross-section citation — a Section-3 fact mislabeled as a Section-4 fact undermines the
  same end-to-end traceability this anti-pattern exists to protect. **See Finding 1; flagged, not silently
  passed over.**
- **Treating Section 11 as boilerplate:** Not applicable to Section 7.
- **Drafting the Executive Summary first:** Not applicable to Section 7.
- **Resolving a flagged gap silently instead of routing it through Research/Forecast/Decision:** Checked
  every gap Section 7 names openly — no Egypt-specific acquisition-channel spend/mix; no funnel-conversion
  data (hence the labeled-synthetic table); no customer-support-model detail; no third-party AI/data-provider
  partnership; no Egypt-specific Partner-funding figure to validate feasibility. All are stated openly, none
  is silently filled with an invented figure presented as real. **Pass.**

## Result

**FAIL — one required fix, small and mechanical, fully resolvable from material already on hand (no new
Research/Forecast/Decision work needed), plus one recommended tightening:**

1. **(Required) Correct the Section 3/Section 4 misattribution of the 80/20 concentration finding.** Two
   locations: the "Answer, stated first" paragraph's closing sentence ("which Section 4's 80/20 finding
   shows is where the value already concentrates" → "which **Section 3's** 80/20 finding (§3.4) shows...")
   and the Positioning "Not new-customer mass acquisition as the primary lever" bullet's opening clause
   ("[[Section_04_Value_Proposition|Section 4]]'s 80/20 finding" → "[[Section_03_Market_Analysis|Section
   3]] §3.4's 80/20 finding"). The underlying TLB-019/TLB-014/TLB-020 citations are correct and should not
   change — only the section attribution. This directly closes the template's own explicit instruction to
   concentrate spend "where **Section 3's** 80/20 analysis says the value is," which the section's own
   opening sentence already states correctly once, one sentence before it states it incorrectly. Section 4
   remains a valid, separate cross-reference for the *mechanisms* (Mechanism 2) that act on this
   concentration — that reference should stay, alongside the corrected Section 3 attribution, not in place
   of it.
2. **(Recommended, non-blocking) Strengthen the funnel table's treatment of the acquisition-onset stage.**
   The template's literal wording asks for "a number at each stage" from awareness through retention; the
   current table numbers three of four stages and marks the first "not modeled — outside this plan's
   scope." Given the Positioning section already builds a well-evidenced case for deprioritizing top-of-funnel
   acquisition, the cleanest fix is a one-sentence addition tying that "not modeled" decision explicitly back
   to the already-stated Positioning rationale (e.g., "consistent with this section's Positioning choice to
   deprioritize top-of-funnel acquisition spend, not a data gap"), rather than fabricating an illustrative
   number for a funnel leg the plan deliberately does not prioritize. This is offered as the stronger fix,
   but is not, on its own, severe enough to block approval the way Finding 1 is — flagged for the record
   per this review's practice of not silently passing over close calls.

**Everything else in Section 7 passes on independent review:** the citation audit is fully closed with no
open hard failure across four fix rounds, independently re-verified here rather than taken on the audit's
own word (§3); Positioning's "what we are NOT targeting and why" requirement is the most strongly executed
sub-requirement in the section (§1, §2 task item b); the synthetic funnel table's labeling is unambiguous
and its anchors are real (§2 task item a, labeling half); no DEC-003 drift was found anywhere, including the
one place (the GEMs bullet) that explicitly and correctly guards against Option 1 framing (§2, task item d);
no further instance of the Group-vs-Egypt anti-pattern was found on an independent re-read, consistent with
the citation audit's own exhaustive third-pass clearance (§5); Partnerships and Retention are both present
and substantive, including honest, correctly-routed gap statements where the corpus is genuinely silent
(§1).

**Disposition:** Section 7 stays at 🟡 (drafted, needs verification) — it is **not** eligible to move to ✅
Done in the Project tracker (`vault/Projects/Talabat-Egypt-AI-Retention-Business-Plan.md`, row 7, currently
showing stale "⬜ Not started" text that predates this drafting/citation-audit/QA cycle) until Finding 1 is
addressed (Finding 2 is recommended but non-blocking) and this section is re-submitted for review. Per this
review's scope (approve or reject, do not rewrite prose), I am not editing the draft or the Project tracker
myself — reporting this verdict back to the top-level session/Orchestrator for that action.

## Links
- `.claude/skills/qa-review/SKILL.md` — the procedure this review followed (not a vault graph node, per project convention)
- [[Section_07_Marketing_and_Sales_Strategy|vault/Projects/Business_Plan_Drafts/Section_07_Marketing_and_Sales_Strategy.md]]
- [[Citation_Audit_Section_07]] (original FAIL + three re-audit addenda, all independently re-checked above)
- [[Section_03_Market_Analysis]] §3.4 (lines 100–113) — independently confirmed as the actual source of the 80/20 finding
- [[Section_04_Value_Proposition]] (full text, `Grep`-checked for "25%"/"quarter" — zero matches, confirming Finding 1)
- [[DEC-003_section2-governing-hypothesis]]
- [[Assumptions_Register]] (`ASM-008` row, independently re-read to confirm Section 4's actual Value-Driver-Tree content does not include the 80/20 MAU/GMV figure)
- [[Section_05_AI_Technology_and_Development]] §5.6 (cross-checked, consistent)
- [[QA_Review_Section_06]] — precedent for this report's format and rigor
- `vault/Research/Notes/RES-001_egypt-named-competitors.md` · `vault/Research/Notes/RES-004_egypt-official-newsroom-operational-datapoints.md` — staleness flags, consistent with prior treatment in Sections 3, 5, 6
