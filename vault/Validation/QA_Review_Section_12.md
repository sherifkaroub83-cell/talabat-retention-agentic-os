---
type: validation
section: 12
pipeline_stage: 11
date: "2026-07-22"
result: "FAIL — three specific, bounded, actionable defects: (1) the template-required 'Marketing rollout plan' is not genuinely present in Section 12 itself, only a one-sentence deferral to Section 7 with no horizon-specific sequencing/timing content of its own; (2) the H2→H3 transition has no operationalized evidence-based go/no-go gate, despite the section's own Answer-first paragraph asserting that principle applies to both transitions (only H1→H2 is actually gated); (3) Section 10's own single highest-priority mitigation (the Financial Risk / base-case-trajectory KPI checkpoint, rated High/High, named the pre-mortem's 'single highest-priority mitigation') is never carried into Section 12's go/no-go framing, even though Section 12 explicitly claims to operationalize Section 10's risk-management discipline. DEC-003 consistency and the churn-prediction exclusion are clean — no residual issue found anywhere in the section."
reviewer: qa-review-agent, freshly-invoked top-level thread, no memory of the drafting or citation-audit sessions
---

# QA & Final Review — Section 12 (Implementation Plan, Three Horizons)

## Scope and independence note

Freshly-invoked thread with no memory of any prior conversation. Files read directly, not taken on any
other agent's summary: `vault/Projects/Business_Plan_Drafts/Section_12_Implementation_Plan.md` (full
text), `AI_Business_Plan_Template.md`'s §12 entry and McKinsey Lens instruction directly,
`vault/Validation/Citation_Audit_Section_12.md` (full text, including the two addenda closing it out),
`vault/Decisions/Decision_Log/DEC-003_section2-governing-hypothesis.md` (full text), `.claude/skills/
business-plan-drafting/SKILL.md`, `.claude/skills/qa-review/SKILL.md`, and the Project tracker. Per the
task's explicit instruction, the citation audit's three prior hard failures (all fixed, independently
re-verified, PASS) were **not** re-litigated — this review focuses on completeness, McKinsey Lens
substance, and DEC-003 consistency. To pressure-test specific cross-section claims independently rather
than accept them as written, also read in full: `Section_10_Risk_Analysis.md` (all of §10.1–§10.4, not
just the rows Section 12 cites), `Section_08_Operations_Plan.md` (Development/Maintenance Workflow, Key
Team Roles), `Section_07_Marketing_and_Sales_Strategy.md` (Positioning, Customer Acquisition,
Partnerships), and `vault/Knowledge/Strategic/Future AI Opportunities.md` (to independently verify the
churn-prediction exclusion). Ran targeted `Grep` sweeps of the current Section 12 draft for `churn`,
`go/no-go|kill criteri|checkpoint`, and `MECE` to test claims directly rather than trust the draft's own
framing.

## 1. Template completeness

`AI_Business_Plan_Template.md` §12 requires four items:

| Required item | Present? |
|---|---|
| Three Horizons roadmap with milestones (pilot, launch, scaling phases) | **Yes, substantively.** H1 (pilot scope/launch/go-no-go), H2 (full-cohort rollout), H3 (cross-vertical scaling) each have a real "What" and a real milestone list, not placeholder headings. |
| Development timelines and dependencies | **Yes, on dependencies; thin but honestly handled on timelines.** H1→H2 dependency is explicit and strong (see §2 below). The literal "development timeline" sub-item (SDLC/release cadence) is a stated corpus gap, consistent with `Section_08_Operations_Plan.md`'s own gap statement — not fabricated, and H2 is named as the milestone that establishes the cadence for the first time. This mirrors an accepted pattern from Section 7 (synthetic funnel) and Section 8 (SDLC gap) and is acceptable on its own. |
| Marketing rollout plan | **No — functionally missing, see §2(c) below.** The only content is one sentence deferring entirely to Section 7 with no horizon-specific sequencing, timing, or dependency logic of Section 12's own. |
| Team expansion and recruitment goals | **Thin but acceptable, see §2(b) below.** Honestly gapped, with one actionable H3 milestone (formalize dedicated-function decision); no illustrative headcount/role numbers even labeled-synthetic, unlike Section 7's precedent of using a labeled-synthetic table to satisfy a similarly ungrounded template requirement. Non-blocking. |

Three of four required items are genuinely present and substantive. The fourth (marketing rollout plan)
is not — see the detailed finding below.

## 2. McKinsey Lens — the five specific questions this review was asked to pressure-test

**(a) Does each horizon genuinely "generate the evidence that justifies the next" — is H2 explicitly
conditional on H1's evidence, and H3 on H2's?**

**Partially — a real, blocking asymmetry.** H1→H2 is explicitly and concretely gated: H2's "What" states
"but only if H1's pilot clears its go/no-go checkpoints; this section does not commit to H2
unconditionally," and H1's own milestones name a specific two-part checkpoint ("go/no-go checkpoints
against the GCC benchmark on both aggregate performance and segment-level fairness — not a single
end-of-pilot review"). This is genuine, falsifiable dependency logic, not a sequencing assertion.

**H2→H3 is not gated the same way.** A full-file `Grep` for `go/no-go|kill criteri|checkpoint` returns
exactly two hits, both inside the H1 milestones block — there is no equivalent checkpoint, evidence
threshold, or stated condition anywhere in H2 or H3 that would need to be cleared before H3's
cross-vertical extension begins. H3's "What" text says the extension is "building on the same customer
base H2 already onboarded" — this is sequencing (H3 follows H2 in time and reuses H2's base) but not an
evidentiary gate (H3 does not say what H2 result would need to hold, or what would cause H3 to be
deferred or killed). This directly contradicts the section's own "Answer, stated first" paragraph, which
asserts "**H3** extends the same mechanisms cross-vertically and evaluates new options, **only once
H1/H2 have produced real Egypt evidence**" — a claim the section's own milestone content does not
actually operationalize for the H2→H3 transition. This is the same class of defect the template's
McKinsey Lens instruction is written specifically to prevent ("sequence by dependency and by proof")
and it is inconsistent with how rigorously H1→H2 is handled two paragraphs earlier in the same document.

**Required fix:** Add an explicit H2→H3 go/no-go checkpoint to H2's or H3's milestones — e.g., a stated
threshold on H2's full-cohort rollout results (against the base-case trajectory Section 9/10 already
define, or against the standing segment-fairness review cadence H2 already schedules) that must be met
before H3's cross-vertical extension begins. This does not require new Research/Forecast work — the
evidence base already exists in Section 9 §9.4 (≈USD53.9m break-even threshold) and Section 10 §10.4
(the base-case-trajectory go/no-go checkpoint, see (e) below) and simply needs to be threaded into H3's
own gating language the way Section 10's Model Transfer Risk and Algorithmic bias/fairness mitigations
are already threaded into H1's.

**(b) Is "team expansion and recruitment goals" genuinely addressed, or does the honest gap-statement
approach leave it functionally unanswered?**

**Thin, but not functionally unanswered — acceptable, non-blocking.** H3's team-expansion bullet
correctly states the corpus discloses no Egypt-specific AI/data-science headcount figure (verified
directly against `Section_08_Operations_Plan.md`'s Key Team Roles subsection, which makes the identical
disclosure gap), cites the one real quantified organizational fact that exists (`ASM-004`'s 1,500-person
Global Tech & Shared Services hub), and gives the reader one concrete, actionable next step: "formalizing
whether Egypt scaling requires a dedicated local function... rather than continuing to draw on the shared
hub indefinitely." This resolves the H1 organizational-ownership-ambiguity dependency in a specific
direction (scale requires resolving it), which is a real decision point, not a non-answer. This is
consistent with — and no thinner than — Section 8's own accepted treatment of the identical gap (which
also declined to invent headcount).

**One non-blocking observation:** unlike Section 7, which used a clearly-labeled *synthetic* illustrative
table to satisfy a template requirement the corpus could not otherwise support (the funnel-conversion
table), Section 12 does not offer even an illustrative, explicitly-labeled headcount/role estimate for
the "recruitment goals" half of this requirement — the section addresses "team expansion" (the
structural decision) but not "recruitment goals" (roles, approximate numbers, or timing) in any form,
quantified or qualitative. This is a legitimate template-literalism gap but a minor one given the
project's precedent of accepting honest non-fabrication over invented headcount (Section 8's Key Team
Roles was accepted the same way). **Recommended, not required:** add one sentence naming what
"formalizing a dedicated function" would minimally require (e.g., illustrative role categories —
data science/ML engineering, monitoring/fairness-review staff — explicitly labeled as this plan's own
illustrative construction, not a disclosed target), consistent with the project's standing synthetic-data
instruction.

**(c) Is "marketing rollout plan" genuinely addressed via the Section 7 cross-reference, or does
deferring leave a template-required element effectively missing?**

**Effectively missing — this is the clearest blocking finding in the review.** The entire marketing
rollout content is one sentence inside H2's milestone list: "Marketing rollout: this section does not
re-derive Section 7's positioning and channel strategy — H2 is where Section 7's retention-over-
acquisition positioning and its Partner/CIB-card-anchored channel mix become operational at Egypt scale,
cross-referenced not restated." Read `Section_07_Marketing_and_Sales_Strategy.md` directly and confirmed
its positioning and channel content is real and correctly characterized — the citation itself is
accurate. But unlike the section's own treatment of the other three required items:

- The **Development timelines** bullet, facing the identical "corpus doesn't disclose this" problem, still
  names a concrete Section-12-owned action ("H2's own milestone is establishing that cadence for the
  first time").
- The **Team expansion** bullet, per (b) above, still names a concrete Section-12-owned decision point
  (formalize the dedicated-function question).
- The **Marketing rollout** bullet names no Section-12-owned action, decision, or sequencing logic at
  all — it does not say what marketing activity (if any) accompanies the H1 pilot (a real question, since
  a clean pilot read typically wants no confounding marketing push on the pilot cohort — an experimental-
  design point Section 12 is well-positioned to make and does not), what specifically "becomes
  operational" in H2 versus continuing unchanged from H1, or how H3's cross-vertical extension into
  Groceries & Retail changes the channel mix or messaging Section 7 already describes for Food. It
  reads as a heading satisfied by citation alone, not by content — the specific anti-pattern the
  template's "not just a heading" bar exists to catch.

**Required fix:** Add genuine Section-12-owned sequencing content — even briefly — mapping marketing
activity across the three horizons: e.g., (i) H1: no incremental marketing spend on the pilot cohort, to
avoid confounding the go/no-go read on model performance; (ii) H2: Section 7's retention-over-acquisition
positioning and Partner/CIB-card channel mix activate at full Egypt scale, timed to the full-cohort
rollout; (iii) H3: channel messaging extends to the Grocery & Retail cross-sell, consistent with Section
7's own "not a new acquisition effort" framing already cited in H3. This does not require re-deriving
Section 7's content (correctly avoided) — it requires *sequencing* it against Section 12's own horizons,
which is the specific job the template's "marketing rollout plan" line item asks Section 12 itself to do.

**(d) Any DEC-003 drift, especially residual churn-prediction language?**

**None found — clean.** Re-read `DEC-003_section2-governing-hypothesis.md` in full and independently
re-read `Strategic/Future AI Opportunities.md` in full to verify Section 12's characterization of both. A
full-file `Grep` of the current Section 12 draft for `churn` (case-insensitive) returns exactly five
hits, and all five are confined to two places: the provenance note's description of what this section
deliberately does *not* adopt, and H3's "What this section explicitly does NOT propose as an H3 'new
option'" paragraph. No churn-prediction, churn-reduction, or churn-risk language appears anywhere in the
Answer-stated-first section, H1, or H2 — i.e., the exclusion is stated once, explicitly, with reasoning,
and never inadvertently reintroduced elsewhere in the document (no residual framing). The exclusion
paragraph itself is also accurately reasoned: it correctly characterizes `Future AI Opportunities.md`'s
Strategic Implications as proposing exactly this capability as its own recommended next step (verified
directly against that note's text, not taken on Section 12's word), correctly identifies this as DEC-003's
rejected Option 1 (verified directly against DEC-003's Options list), and correctly cites the same
naming-not-silently-omitting discipline `Section_03_Market_Analysis.md`'s corrected GEMs bullet already
established for this project (a precedent the citation audit's Finding #11 already confirmed is accurate
on its own specific claim). This is a genuinely well-handled exclusion, not a rhetorical fig leaf — it
does real interpretive work (extracting only the market-timing argument, redirecting it toward Option 2)
rather than simply refusing to mention Option 1.

**(e) Does the roadmap's milestone structure give real "kill criteria" or go/no-go substance, consistent
with Section 10's risk mitigation table, or does it read as vague?**

**Real for H1, absent for H2/H3, and narrower than Section 10's own priority ranking even where it is
present.** H1's go/no-go checkpoints (GCC-benchmark aggregate performance + segment-level fairness) are
genuinely specific and directly traceable, verified against `Section_10_Risk_Analysis.md` §10.4's
mitigation table, to the **Model Transfer Risk** and **Algorithmic bias/fairness risk** mitigation rows —
both real, both accurately characterized.

However, Section 10 §10.2's probability–impact matrix rates a *different* risk as the single highest-
severity cell in the entire register: "Upside case underperforms base case," Financial category,
**High/High** (versus Model Transfer Risk's Medium/High and Algorithmic bias/fairness's Medium/Medium).
Section 10 §10.3's pre-mortem explicitly names the mitigation for this specific risk — "instrumenting the
newly-baseline KPIs... as early as possible" with "an explicit go/no-go checkpoint against the base-case
trajectory before scaling investment further" — as "**the single highest-priority mitigation**" in the
whole risk register, ahead of the two risks Section 12's H1 checkpoint actually operationalizes. Section
12's own Answer-stated-first paragraph claims broadly that "this roadmap does not introduce new
sequencing logic, it operationalizes what Sections 10 and 11 already established as the plan's own
risk-management discipline" — but on independent check, it operationalizes two of Section 10's mitigation
rows, not the one Section 10 itself flags as highest-priority. This is not a citation-accuracy error (Section 12 does not misquote or misattribute anything it does cite) — it is a completeness/substance gap: the plan's own risk analysis names a specific, higher-priority go/no-go checkpoint that Section 12's roadmap should logically carry forward, and does not.

**Required fix:** Add the base-case-trajectory / newly-baselined-KPI go/no-go checkpoint (Section 10
§10.4's Financial Risk mitigation row) into H1's (or the H1→H2 transition's) go/no-go criteria alongside
the two already present, or explicitly and specifically state why it is deliberately scoped out (the
current text does not do either — it silently limits itself to the two lower-severity risks while its own
framing paragraph implies full alignment with Section 10). This is a bounded fix: the content already
exists verbatim in Section 10 and simply needs to be cross-referenced into Section 12's own checkpoint
language, the same way the other two mitigations already are.

**Additional observation (non-blocking):** no MECE statement is made anywhere in Section 12 for the
Three Horizons breakdown itself (a full-file `Grep` for `MECE` returns zero hits), unlike Section 10's
explicit "a risk is never about more than one of these five at once" MECE justification for its risk
categories. Time-boxed horizons (0–6mo / 6–18mo / 18mo+) are inherently mutually exclusive and
collectively exhaustive by construction, so this is a much lower-stakes omission than a categorical
breakdown would be, and is not required as a blocking fix — but one sentence stating this explicitly
would bring Section 12 in line with this project's own established rigor on every other MECE breakdown
in the plan (Sections 3, 6, 10).

## 3. Citation audit consumption

Read `vault/Validation/Citation_Audit_Section_12.md` in full, including both addenda. **Result: PASS.**
The original audit found three hard failures (all wrong-section/misattributed cross-references: a
Section 2/Section 3 GEMs-bullet provenance error, an invented "DEC-003's Option A," and a Section 8/
Section 10 attribution mix-up on the "before Section 12's implementation roadmap is drafted" phrase). Two
were fixed and verified correct on the first re-audit pass; the third (the Section 8/10 attribution) was
only partially fixed on the first pass — the body text was corrected but the Traceability-summary table
row was not — and required a second, narrower fix, confirmed in a final closeout check dated the same
day. The audit is now fully closed, PASS, with zero hard failures outstanding and one previously-
acknowledged non-blocking limitation (the "Partner/CIB-card-anchored channel mix" summarizing label,
judged a fair synthesis, no action required). Per the task's instruction, this review did not re-run the
citation audit's own checks, but did independently spot-verify the DEC-003/churn-prediction claim (§2(d)
above) and the Section 10 mitigation cross-references (§2(e) above), both of which the citation audit also
covers — no discrepancy found between this review's independent read and the audit's findings.

## 4. Staleness check

Section 12 cites no items from `vault/Research/Notes/` — consistent with the citation audit's own Method
section, which documents cross-referencing prior Business Plan sections, `Assumptions_Register.md`
(`ASM-004`, `ASM-008`, `ASM-012`, all Fact/Forecast-tier, all `Approved`), and `Strategic/Future AI
Opportunities.md` / `DEC-003`, none of which carry a session-dependent staleness concept the way a
Research Note would. All cited material was either created in the same 2026-07-22 drafting session or is
a Fact-tier/Decision-tier record with no staleness window. No Research Note staleness concern to flag —
the same outcome as Sections 9, 10, and 11's reviews.

## 5. Anti-patterns checklist (`.claude/skills/business-plan-drafting/SKILL.md`)

- **Untraceable claim:** No new instance found independent of the citation audit's (now-closed) findings.
  All cross-section claims spot-checked in §2 above (churn-prediction exclusion, Section 10 mitigation
  rows) trace accurately. **Pass.**
- **Silently resolving a documented internal discrepancy:** Not applicable — Section 12 does not touch
  the Egypt category-share, 2026-investment-total, or Subscription-line-reclassification discrepancies.
  **Pass.**
- **Presenting Group/GCC-level statistics as Egypt-proven:** Checked directly — the grocery/retail
  "low single-digit" TAM penetration figure (TLB-014, p.19) is carried with its "Group-level" qualifier
  intact in H3, matching Section 3's own labeling exactly (independently re-verified, matching the
  citation audit's Finding #8). `ASM-004` and `ASM-012` are both cited as labeled Forecast/illustrative
  constructions, not inflated into disclosed Egypt figures. **Pass.**
- **Section 9/13 numbers not traced back to Section 4 value mechanisms:** Section 12 correctly cites
  Section 4 §4.2's `ASM-008` for H2's mechanism sequencing (verified directly against
  `Section_04_Value_Proposition.md` in the citation audit, not re-litigated here) and does not invent new
  numbers disconnected from that tree. **Pass.**
- **Treating Section 11 as boilerplate disconnected from Section 10's actual risks:** Not the anti-pattern
  named specifically for this section, but the adjacent discipline (connecting to something real, not
  decoration) is where this review's §2(e) finding lives — Section 12 genuinely connects to two of
  Section 10's risk mitigations, but not to the one Section 10 itself ranks highest-priority, while
  claiming broad alignment. **Partial fail**, same underlying discipline as the §2(e)/§2(a) findings
  above, not a separate new defect.
- **Resolving a flagged gap by drafting around it silently instead of routing it through the pipeline:**
  Checked specifically for the marketing-rollout and team-expansion gaps. Team expansion is handled
  correctly (named, not routed, consistent with Section 8's precedent for the identical gap — no external
  research would resolve an internal, undisclosed talabat staffing plan). Marketing rollout is not a case
  of silently resolving a gap with a wrong number — it is a case of **under-filling** a requirement that
  did not actually need new Research/Forecast/Decision work to satisfy, since the sequencing content it
  is missing could be derived entirely from Section 7 and Section 12's own already-established horizon
  logic. This is a drafting-completeness gap, not a routing violation. **Pass on routing, fail on
  completeness (see §2c).**

## Result

**FAIL.** Three specific, bounded, actionable defects, none requiring new Research/Forecast/Decision work
— all are drafting-completeness and internal-consistency fixes using evidence this plan already has on
hand:

1. **Marketing rollout plan is not genuinely present in Section 12** (§1, §2c) — only a one-sentence
   deferral to Section 7 with no horizon-specific sequencing of its own. **Fix:** add explicit,
   Section-12-owned marketing sequencing across H1/H2/H3 (e.g., no incremental spend on the H1 pilot
   cohort to preserve a clean read; Section 7's positioning/channel mix activating at H2's full-cohort
   scale; H3's messaging extension into Grocery & Retail), building on — not re-deriving — Section 7's
   already-cited content.
2. **The H2→H3 transition has no operationalized go/no-go gate** (§2a), despite the section's own
   Answer-first paragraph claiming both transitions are evidence-gated; only H1→H2 actually is. **Fix:**
   add an explicit evidence threshold or checkpoint to H2's or H3's milestones that must be met before
   H3's cross-vertical extension proceeds.
3. **Section 10's own highest-priority mitigation (the Financial Risk / base-case-trajectory KPI
   checkpoint) is not carried into Section 12's go/no-go framing** (§2e), even though Section 12 claims
   to operationalize Section 10's risk-management discipline in full. **Fix:** add this specific
   checkpoint to H1's (or the H1→H2 transition's) go/no-go criteria, or explicitly and specifically state
   why it is deliberately scoped out.

**What passes cleanly, independently verified:** the H1→H2 dependency gate itself is genuine and
well-evidenced (§2a); team expansion, while thin, gives the reader a real actionable decision point and
is consistent with this project's own accepted precedent for the identical gap in Section 8 (§2b); the
DEC-003 governing-hypothesis consistency and the churn-prediction (Option 1) exclusion are clean, with no
residual framing found anywhere in the section on a full-file sweep — this was the specific pressure-test
this review was asked to run most carefully, and it holds up (§2d); the citation audit is fully closed,
PASS, with all three original hard failures fixed and independently re-verified (§3); no Research Note
staleness concern (§4); and the anti-patterns sweep found no untraceable claims, no silent discrepancy
resolution, and no Group-as-Egypt-proven violation (§5).

**Disposition:** Section 12 stays at 🟡 (drafted, needs verification) — it is **not** eligible to move to
✅ Done in the Project tracker until the three fixes above are made and this section is re-submitted for
review. Per this review's scope, I am not editing the draft myself — reporting this verdict back to the
Orchestrator.

## Links
- `.claude/skills/qa-review/SKILL.md` — the procedure this review followed
- [[Section_12_Implementation_Plan|vault/Projects/Business_Plan_Drafts/Section_12_Implementation_Plan.md]]
- [[Citation_Audit_Section_12]]
- [[Section_10_Risk_Analysis]] §10.1–§10.4 · [[Section_08_Operations_Plan]] · [[Section_07_Marketing_and_Sales_Strategy]] · [[Section_04_Value_Proposition]] §4.2
- [[DEC-003_section2-governing-hypothesis]] · [[Future AI Opportunities]]
- `vault/Decisions/Assumptions_Register.md` (`ASM-004`, `ASM-008`, `ASM-012`)
- [[QA_Review_Section_11]] · [[QA_Review_Section_10_Final]] — precedent for this report's format and rigor
- [[Business_Plan_Generation_Pipeline]]
