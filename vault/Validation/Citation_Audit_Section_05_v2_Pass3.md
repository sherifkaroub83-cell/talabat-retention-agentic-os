---
type: validation
section: 5 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md
pipeline_stage: Independent Pass 3 re-verification of Pass 2's reported fixes (fresh thread, no memory
  of any prior drafting or fixing session)
run_date: 2026-07-24
auditor: independent Pass 3 reviewer
status: FAIL — Pass 2's three defects are genuinely fixed and hold up under independent re-check, but a
  fresh, previously-uncaught hard failure was found in this pass (DEC-009 mischaracterized as still-open
  and conflated with a different open question), plus one moderate citation-mismatch finding
---

# Citation Audit — Section 5 (AI Technology and Development, v2), Independent Pass 3

## Independence note
This is a fresh audit thread with no memory of the Pass 2 session or its fix. `Citation_Audit_Section_05_v2_Pass2.md`
was read first (per task instructions) to know what was reportedly fixed, but every claim in the
**current** file text was re-traced against the actually-cited source directly — nothing was accepted
on Pass 2's word alone. Tools used: Read, Grep, Glob.

## Method
Re-opened every source cited in the current section text and traceability table, independently of Pass
2's citations: `vault/Forecasts/Value_Driver_Tree_v2.md` (full file, all node IDs N-01–N-45),
`vault/Knowledge/Sources/TLB-001_annual-report-2024.md`, `TLB-012`, `TLB-013`, `TLB-015`, `TLB-016`,
`TLB-026` (grepped directly for the "6 of 8" / "7 of 8" / "except Egypt and Iraq" language rather than
trusting Pass 2's quotes), `vault/Knowledge/Entities/Technology_Platforms.md`, `vault/Knowledge/Topics/AI.md`,
`vault/Knowledge/Topics/EBITDA.md`, `vault/Knowledge/Facts/AI_Facts.md`, `vault/Knowledge/Strategic/AI Opportunities.md`,
`vault/Architecture/Decision_Management_Layer.md`, `vault/Forecasts/KPI_Tree_v2.md`,
`vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md` (full text,
not just its frontmatter status), `vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md`
(to check the "problem 3" cross-reference independently), `vault/Projects/Business_Plan_Drafts_v2/Section_11_CSR_and_Responsible_AI.md`
(to check the "see Section 11" cross-reference), and `MEMORY.md`.

## Hard failures

### Failure 1 (fresh — not found by Pass 2) — Section 5.6 mischaracterizes `DEC-009` as still-open and conflates it with a different, genuinely-open question
**Text (§5.6):** "For this plan's decision-support system: the two largest open R&D items are (1)
resolving `DEC-009`'s cross-market allocation question (problem 3 in Section 2.2) as better
country-level evidence becomes available, and (2) instrumenting the KPI Tree's Governance family..."

I opened `DEC-009_investment-options-ranking-and-allocation-priority.md` in full. Its frontmatter reads
`status: approved`, `resolved_date: "2026-07-23"`. Its own "Decision" section states explicitly: **"Both
open questions are now settled"** — (1) commit to a funding sequence narratively (OPT-002/OPT-003
near-term priority, OPT-001/OPT-005 continue-at-pace, OPT-004 longer-horizon), and (2) show allocation
ranges only as a labeled sensitivity/appendix exhibit, never a headline. This is a fully resolved
decision, not an open one.

Separately, DEC-009's own two questions were never about **cross-market (country-level) allocation** —
they were about **which of the five OPT-001–005 candidate initiatives to prioritize for funding** and
**whether to show the resulting dollar ranges as a headline exhibit**. "Cross-market allocation" (problem
3 in Section 2.2) is a distinct, genuinely-still-open item: I opened `Section_02_Business_Description.md`
directly and confirmed its own §2.2 text: "**Cross-market allocation (open — the largest disclosed
gap).** No document in the corpus breaks either bucket out by country, GCC/non-GCC, or Egypt-standalone"
— this is a corpus evidence gap (no country-level breakdown of the USD175mn exists anywhere), not
anything DEC-009 resolves or was ever asked to resolve. Section 2's own addendum (added the same day as
the Section 5 "fix," 2026-07-23) explicitly warns against this exact error: *"a future drafting/QA pass
should... not treat DEC-009 as still-open in future revisions."* Section 5.6 does exactly that — it
treats DEC-009 as open, and additionally misattributes its subject matter to problem 3.

This is the specific defect class flagged in this audit's brief: characterizing DEC-009 using its
earlier/superseded framing (when it was `status: proposed` and problem 3 was still tangled up with it in
early drafting notes) rather than its final resolved text. **Fix:** rewrite to either (a) drop the
DEC-009 reference from this R&D item entirely and describe the genuinely-open item as "resolving the
cross-market/country-level allocation evidence gap (problem 3, Section 2.2; `Topics/GCC vs non-GCC.md`)
as better country-level data becomes available" with no DEC-009 citation, since DEC-009 does not bear on
it; or (b) if a DEC-009-related R&D item is still wanted here, describe it accurately — e.g., "monitoring
whether DEC-009's approved funding-sequence recommendation (OPT-002/003 priority) needs revision as
option-level KPI data (Section 12 stage gates) comes in" — but do not call DEC-009 "open" or equate it
with problem 3.

## Moderate findings

### Finding 1 — Traceability-table citation to `Topics/EBITDA.md` for the AI-specific EBITDA figure is the wrong Topic note
**Traceability table:** "AI/personalisation EBITDA contribution USD14mn+→30mn+ | `Topics/EBITDA.md`;
`Value_Driver_Tree_v2.md` N-09"

I opened `vault/Knowledge/Topics/EBITDA.md` in full and grepped it for "14mn"/"30mn"/AI-specific content:
it contains **none** — it documents Group-level Adjusted EBITDA (USD ~500mn FY2024 → USD 615mn FY2025,
margin 6.7%→6.5%) and the FY2026 margin bridge, a completely different metric at a completely different
order of magnitude from the AI/personalisation-specific USD14mn+→30mn+ contribution figure. The correct
Topic note for this specific figure is `Topics/AI.md`, whose "Why It Matters" section states verbatim:
"the personalisation/ranking algorithm's estimated contribution rose from USD 14mn+ p.a. (FY2024) to USD
30mn+ p.a. (FY2025)." The claim does not fail outright — the second citation, `Value_Driver_Tree_v2.md`
N-09, correctly and independently supports the figure (confirmed against N-09's own text: "AI/personalisation
deployment: estimated EBITDA contribution rises from USD 14mn+ (FY2024) to USD 30mn+ (FY2025)," `FACT →
Facts/AI_Facts.md`, TLB-001 p.23, TLB-002 p.15-16) — but a verifier following the first-listed citation
(`Topics/EBITDA.md`) to check the number will land on the wrong note and not find it there. **Fix:**
retarget this citation from `Topics/EBITDA.md` to `Topics/AI.md`.

### Finding 2 — "six pilot Business Plan sections" (§5.5) may be a stale self-description of the OS's own current scope
**Text (§5.5):** "This plan's own decision-support system is currently scoped to five candidate
Investment Options and six pilot Business Plan sections — genuinely narrow."

This is a claim about the Agentic OS's own state, not a talabat business fact, so it sits outside the
strict Facts/Assumption-Register citation chain this audit otherwise enforces — but it should still be
accurate. As of this Pass 3 run, `vault/Projects/Business_Plan_Drafts_v2/` contains draft files for
**all 14** of the 14 template sections (Sections 1–12 and 14, plus a duplicated-name Section 13 file per
the git status at session start), and `PROJECT_PROGRESS.md`/recent commits describe Pass 2 independent
review as complete across all 14 sections, not six. "Six pilot Business Plan sections" appears to
describe an earlier Phase 9 pilot cohort rather than the section's current actual scope. I could not find
a definitive current vault reference stating "six" as an authoritative, still-current count, so I am not
elevating this to a hard failure — but it reads as stale and should be reconfirmed or updated (either to
the current count, or reworded to avoid a specific number if the point is qualitative narrowness).

## Confirmed correct — Pass 2's three fixes independently re-verified as holding

### Fix 1 held — N-06/N-09 node assignment is now correct
Re-opened `Value_Driver_Tree_v2.md` directly: N-06 = "AI/personalisation capability deployment
(cross-cutting both buckets)... not a discrete dollar line" (matches the section's use of N-06 for that
claim); N-09 = "AI/personalisation deployment: estimated EBITDA contribution rises from USD 14mn+
(FY2024) to USD 30mn+ (FY2025)" (matches the section's use of N-09 for the dollar figures). Both the
provenance note (line 13: "N-06/N-09") and the traceability table (lines 120-121) now correctly separate
the two. **PASS.**

### Fix 2 held — source document attribution corrected
Both the provenance note and the traceability table now cite `vault/Forecasts/Value_Driver_Tree_v2.md`
for N-06 (not `Investment_Relationship_Map.md`). Confirmed `Investment_Relationship_Map.md` is cited
elsewhere in the section (the "See also" line and §5.1's decision-support description) but never again
paired with a node-ID number. **PASS.**

### Fix 3 held — "6 of 8 countries by end-2024, excluding Egypt and Iraq" is now correct and independently reconfirmed against primary sources
I did not rely on Pass 2's quotes — I grepped the five cited TLB source files directly:
- `TLB-015_capital-markets-day-2024.md` (Oct 2024 CMD): "live in 6 of 8 countries (all except Egypt and
  Iraq)" (p.77), and separately "6/8 countries rolled out... All countries except Egypt and Iraq" (p.77).
- `TLB-026_international-offering-memorandum.md` (19 Nov 2024): "As of the date of this Offering
  Memorandum, talabat pro is available in all our markets, except Egypt and Iraq." (p.133).
- `TLB-012` (Feb 2025), `TLB-013` (May 2025), `TLB-016` (Q4/FY2024 earnings call): each states talabat
  pro adoption/uplift metrics "excludes Egypt and Iraq," with pro live only in "UAE, Kuwait, Qatar,
  Bahrain, Jordan, Oman" as of Dec 2024 — six markets.
This is unanimous across five independent documents spanning Oct 2024–May 2025, all describing the
end-2024/Dec-2024 window. `Value_Driver_Tree_v2.md` N-08 ("Full 8-market rollout complete 2025 — Egypt
live Feb 2025, Iraq Sept 2025") and N-13 ("measured on the six GCC/Jordan markets live before December
2024... explicitly exclude Egypt and Iraq") both corroborate. The section's current text and
traceability-table row match this evidence exactly. **PASS — the fix is correct and better-supported
than I could establish from Pass 2's report alone; I independently confirmed the underlying quotes.**

## Other claims independently re-verified this pass (beyond Pass 2's list)
- "AI-driven logistics improvements have enhanced delivery times and optimised resource allocation"
  (TLB-001, page 10) — re-confirmed verbatim in `Facts/AI_Facts.md` and `TLB-001_annual-report-2024.md`
  line 102/12. **PASS.**
- "talabat's stack licensed from Delivery Hero SE" — re-confirmed against `Entities/Technology_Platforms.md`
  ("Delivery Hero technology stack... licensed from parent Delivery Hero SE," TLB-001, TLB-026). **PASS.**
- "Decision_Management_Layer.md's 11-criterion framework... all eleven ratings side by side" — re-counted
  the comparison table in `Decision_Management_Layer.md` directly: exactly 11 rows (Evidence strength
  through Measurement quality); text confirms "all eleven ratings side by side." **PASS.**
- KPI Tree Governance family "7/7 newly-instrumented KPIs with no baseline" — re-confirmed against
  `KPI_Tree_v2.md` line 162: "**Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented.**"
  **PASS.**
- MCP decision undecided — re-confirmed against `MEMORY.md` line 147: "MCP decision: none integrated
  yet; optional distinction credit — decide by end of Phase 2." **PASS.**
- `Strategic/AI Opportunities.md` roadmap-item claim (§5.6) — re-confirmed the note is Group-level
  ("None of these three roadmap items... carries an Egypt-specific commitment"), matching the section's
  use of it as Group-wide evidenced intent, not an Egypt-specific one. **PASS.**
- §5.1's "human approval before any capital moves (see Section 11)" cross-reference — checked
  `Section_11_CSR_and_Responsible_AI.md` directly: it does contain matching language ("gated for human
  approval before any capital actually moves," "requires explicit human/team sign-off before any capital
  reallocation executes"). The cross-reference is accurate. **PASS.**
- Everyday App opex allocation "~USD75mn" (§5.2) — re-confirmed against `Value_Driver_Tree_v2.md` N-02:
  "Everyday App bucket — ~USD 120 million (~USD 75mn opex + ~USD 45mn capex)." **PASS.**
- "Eight operating markets" (implied by the 6/8, 8-market references) — re-confirmed against
  `TLB-001_annual-report-2024.md` ("Egypt is one of talabat's eight countries of operation (UAE, Kuwait,
  Qatar, Egypt, Bahrain, Oman, Jordan, Iraq)") and `TLB-002` line 21. **PASS.**

## Geography check
Re-ran the geography check independently rather than trusting Pass 2's "Egypt appears only in
frontmatter" claim: grepped the current file body for "Egypt" and found it appears in exactly two
places — the frontmatter `supersedes_note` (naming the superseded pre-pivot draft) and the correctly
geography-tagged "6 of 8... excluding Egypt and Iraq" claim in §5.5 and its traceability-table row. Both
uses are correct: the 6/8 claim is explicitly and correctly scoped as a Group-level operational-rollout
fact that names which two of the eight markets were not yet live, not an Egypt-specific or GCC-presented-
as-Egypt claim. No instance of a Group/GCC figure being presented as Egypt-proven, no Egypt figure
presented as Group-representative, and no pre/post-FY2025 non-GCC figure used interchangeably. No
violation of `Geographic_Evidence_Rules.md`'s Failure Patterns 1-6 found in this section.

## Summary
- **Pass 2's three defects (N-06/N-09 mix-up, wrong source-document attribution for N-06, "7/8" vs "6/8"
  countries) are genuinely fixed and independently reconfirmed in this pass** — not just re-stated from
  Pass 2's report, but re-traced against the primary TLB source documents and the Value Driver Tree
  directly.
- **One fresh hard failure found**, not identified by Pass 2: §5.6 characterizes `DEC-009` as an "open"
  item and conflates its (resolved) scope with Section 2.2's separate, genuinely-still-open "problem 3"
  (cross-market allocation). `DEC-009` is `status: approved`, resolved 2026-07-23, and its own text states
  both its questions "are now settled." This is exactly the DEC-009-superseded-framing defect class this
  audit was asked to specifically check for.
- **One moderate finding**: the traceability table cites `Topics/EBITDA.md` (Group-level Adjusted EBITDA)
  for the AI-specific USD14mn+→30mn+ figure; the correct note is `Topics/AI.md`. The claim survives on
  its second citation (`Value_Driver_Tree_v2.md` N-09, correct), but the first citation misdirects.
- **One low-stakes observation**: "six pilot Business Plan sections" (§5.5) appears stale against the
  section drafts now on disk (all 14 sections drafted) — a self-referential OS-scope claim, not a
  talabat business fact, flagged for reconfirmation rather than as a citation failure.

## Verdict
**FAIL.** Per the citation-audit skill's zero-tolerance rule, this section cannot proceed to Stage 10
with an open hard failure. The good news: Pass 2's three defects did genuinely get fixed and independently
hold up under a from-scratch re-trace against primary sources — this was not a case of an inaccurate fix
note. The bad news: this pass found a new defect Pass 2 did not catch (the DEC-009 characterization),
confirming that each independent pass over this section continues to surface something the previous pass
missed. The fix required is narrow (rewrite one sentence in §5.6, retarget one traceability-table
citation) — not a redraft — but the section is not yet citation-clean.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md`
- `vault/Validation/Citation_Audit_Section_05_v2_Pass2.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_11_CSR_and_Responsible_AI.md`
- `vault/Knowledge/Topics/AI.md`, `vault/Knowledge/Topics/EBITDA.md`, `vault/Knowledge/Facts/AI_Facts.md`
- `vault/Knowledge/Sources/TLB-001_annual-report-2024.md`, TLB-012, TLB-013, TLB-015, TLB-016, TLB-026
- `vault/Architecture/Decision_Management_Layer.md`, `vault/Forecasts/KPI_Tree_v2.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`
