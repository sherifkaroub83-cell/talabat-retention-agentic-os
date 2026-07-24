---
type: validation
section: 5 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md
pipeline_stage: Independent Pass 2 citation re-check (per bp-orchestrator.md "Known runtime constraint")
run_date: 2026-07-24
auditor: independent Pass 2 reviewer (fresh thread, no memory of drafting)
status: FAIL — three hard/near-hard defects found (first citation audit ever run on this section);
  fixes are narrow and targeted, not a full redraft
---

# Citation Audit — Section 5 (AI Technology and Development, v2), Independent Pass 2

## Independence note
No prior citation audit exists for this section (`Citation_Audit_Section_05.md` under
`Business_Plan_Drafts_v2/` was never created — only a same-named file exists for the pre-pivot
`Business_Plan_Drafts/` v1 draft, which is out of scope). This is therefore the section's **first**
citation audit against the v2 (Group-wide) content. Tools used: Read, Grep, Write.

## Method
Walked the section sentence by sentence and traceability-table row by row. Opened every cited vault
note directly: `Topics/AI.md`, `Topics/Recommendation Systems.md`, `Entities/Technology_Platforms.md`,
`vault/Knowledge/Investment_Relationship_Map.md`, `vault/Forecasts/Value_Driver_Tree_v2.md`,
`vault/Knowledge/Facts/Talabat_Pro.md`, `vault/Knowledge/Sources/TLB-001_annual-report-2024.md`, the
five other TLB pro-launch-timing source notes (TLB-012, TLB-013, TLB-015, TLB-016, TLB-026),
`vault/Forecasts/KPI_Tree_v2.md`, `vault/Architecture/Decision_Management_Layer.md`, and `MEMORY.md` —
and confirmed not just that the target document exists, but that the **specific node ID or page**
cited actually contains the claimed content.

## Hard failures

### Failure 1 — "N-06" cited for the AI/personalisation EBITDA figure is the wrong node
**Traceability table:** "AI/personalisation EBITDA contribution USD14mn+→30mn+ | `Topics/EBITDA.md`; **N-06**"

I opened `vault/Forecasts/Value_Driver_Tree_v2.md` and checked N-06 directly: it is "AI/personalisation
capability deployment (cross-cutting both buckets)" — a Fact node stating AI "is not named as a
discrete dollar line within either bucket... an embedded capability, not a separate budget line." **It
does not contain the USD14mn+→30mn+ EBITDA figures.** The correct node is **N-09**: "AI/personalisation
deployment: estimated EBITDA contribution rises from USD 14mn+ (FY2024) to USD 30mn+ (FY2025)"
(`FACT → Facts/AI_Facts.md`, TLB-001 p.23, TLB-002 p.15-16) — this is the node that actually carries
the claimed dollar figures. (The underlying figures themselves are correct and independently confirmed
against `Topics/AI.md`'s "Why It Matters" section — only the node-ID pointer is wrong.) **Fix:**
retarget the traceability-table citation from N-06 to N-09.

### Failure 2 — "N-06" is attributed to the wrong source document throughout the section
The section's provenance note (top) and its next traceability-table row both cite "N-06" as belonging
to `vault/Knowledge/Investment_Relationship_Map.md`: "Evidence from ... and
`vault/Knowledge/Investment_Relationship_Map.md` N-06" (provenance note) and "N-06 not a discrete
dollar line in either bucket | `Investment_Relationship_Map.md`" (traceability table).

I opened `Investment_Relationship_Map.md` in full: **it contains no numbered node IDs anywhere** — it
is a prose-and-Mermaid-diagram document with named boxes (`Investment`, `Food`, `Everyday`,
`EverydayCap`, `EBITDA`, etc.), not an `N-01`...`N-45` numbering scheme. The node-ID scheme (`N-01`
through `N-45`) belongs exclusively to `vault/Forecasts/Value_Driver_Tree_v2.md`, whose own N-06 node
("AI/personalisation capability deployment... not a discrete dollar line") is exactly the content the
section is trying to cite. So the *content* pointed to is correct, but the *source document* named for
it is wrong in both places it appears — a reader following either citation to
`Investment_Relationship_Map.md` to find "N-06" will not find it there. **Root cause:** this traces
back to `.claude/skills/business-plan-drafting/SKILL.md`'s own Section 5 entry (line 116), which
itself instructs drafters to cite "`vault/Knowledge/Investment_Relationship_Map.md` node N-06" — the
skill file's own vault map is wrong, and Section 5 faithfully (but incorrectly) followed it. **Fix:**
retarget both citations to `vault/Forecasts/Value_Driver_Tree_v2.md` N-06; separately, the skill file's
Section 5 vault-map entry should be corrected so future drafting runs don't repeat this.

### Failure 3 — "talabat pro live in 7/8 countries by end-2024" is not supported by the cited page and conflicts with the vault's own established Facts
**Text (§5.5):** "talabat's embedded AI capability has already demonstrated multi-market scalability
(live across 7 of 8 countries for talabat pro personalisation by end-2024)."
**Traceability table:** "talabat pro live in 7/8 countries by end-2024 | TLB-001, page 11-12"

I checked TLB-001 p.11-12 directly: the quote is "At the time of writing, talabat pro was recently
launched in Egypt, marking a significant expansion with the programme now available in seven of the
eight countries in which we operate." This is explicitly framed **"at the time of writing"** — i.e.,
as of the Annual Report's publication (dated 17 April 2025, after Egypt's February 2025 launch) — not
as a snapshot "by end-2024." No page in TLB-001 states a 7-of-8 figure as of end-2024.

More importantly, five separate, more contemporaneous corpus documents (all dated between the IPO
Offering Memorandum, Nov 2024, and the Q4/FY2024 earnings materials, Feb 2025) unanimously state the
opposite:
- TLB-015 (Capital Markets Day, Oct 2024): "Live in 6 of 8 countries — all except Egypt and Iraq" (p.77).
- TLB-026 (International Offering Memorandum, 19 Nov 2024): "talabat pro is available in all talabat
  markets **except Egypt and Iraq**" (p.133).
- TLB-012, TLB-013, TLB-016 (Feb/May 2025 presentations, each recapping Dec 2024): "only markets where
  pro was live as of Dec 2024 (UAE, Kuwait, Qatar, Bahrain, Jordan, Oman); excludes Egypt and Iraq."

This is also directly confirmed by the vault's own Forecast-layer Fact nodes: `Value_Driver_Tree_v2.md`
N-08 ("Full 8-market rollout complete 2025 — Egypt live Feb 2025, Iraq Sept 2025") and N-13 ("the
Group-level talabat pro frequency uplift... [is] measured on the six GCC/Jordan markets live before
December 2024 and explicitly exclude Egypt and Iraq"). The weight of evidence is that talabat pro was
live in **6 of 8** countries by end-2024 (excluding both Egypt and Iraq), not 7 — the "7 of 8" figure
only becomes accurate after Egypt's February 2025 launch (and Iraq's Sept 2025 launch would still leave
7 of 8, but Egypt did not join until 2025). **This is a fresh, section-specific finding — I did not find
this same "7/8 by end-2024" claim asserted anywhere else in `Business_Plan_Drafts_v2/`.** **Fix:** state
"6 of 8 countries by end-2024 (all except Egypt and Iraq), reaching 7 of 8 by early 2025 and full 8-of-8
coverage by September 2025 (`Value_Driver_Tree_v2.md` N-08)" — or drop the specific count/date and
describe the phased 2025 rollout qualitatively, consistent with the Forecast Layer.

## Confirmed correct (independently re-verified)
- "AI-driven logistics improvements have enhanced delivery times and optimised resource allocation"
  (TLB-001, page 10) — verified verbatim against `vault/Knowledge/Sources/TLB-001_annual-report-2024.md`
  and `Topics/AI.md`. **PASS** (the section's paraphrase "cost-efficiency gains" for "optimised resource
  allocation" is a reasonable synthesis, not a misstatement).
- "talabat's stack licensed from Delivery Hero SE" — verified against `Entities/Technology_Platforms.md`
  ("Delivery Hero technology stack... licensed from parent Delivery Hero SE," TLB-001, TLB-026).
  **PASS.**
- AI/personalisation EBITDA figures themselves (USD14mn+ FY2024 → USD30mn+ FY2025) — verified against
  `Topics/AI.md` and `Value_Driver_Tree_v2.md` N-09. **PASS on the content**, node-ID pointer wrong
  (Failures 1-2 above).
- Personalisation "at the right time for customers" quote — verified verbatim against
  `Facts/AI_Facts.md`/`Sources/TLB-023_intention-to-float-announcement.md` (TLB-023, page 8, echoed in
  TLB-015 p.84). Correctly attributed to `Topics/AI.md`/`Topics/Recommendation Systems.md`. **PASS.**
- No proprietary algorithm/patent disclosed anywhere in the corpus — verified against `Topics/AI.md`'s
  Open Questions (no architecture, only functional description). **PASS.**
- MCP decision undecided — verified against `MEMORY.md` ("MCP decision: none integrated yet... decide
  by end of Phase 2"). **PASS.**
- Decision_Management_Layer.md's "11-criterion framework" — verified: the comparison table has exactly
  11 rows (Evidence strength through Measurement quality), and the file states "all eleven ratings side
  by side." **PASS.**
- KPI Tree Governance family "7/7 newly-instrumented KPIs with no baseline" — verified against
  `KPI_Tree_v2.md` ("Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented"). **PASS.**
- `DEC-009`'s cross-market allocation reference (§5.6) — `DEC-009` exists, is `status: approved`, and
  does address a cross-market allocation-priority question. **PASS** (not independently re-verified
  against Section 2.2's "problem 3" framing, which is out of this audit's Section 5/9 scope).

## Geography check
Section 5 makes no Egypt-specific or country-specific claims anywhere in its body text (confirmed by
direct search — "Egypt" appears only in the frontmatter `supersedes_note`, never in the drafted prose).
All substantive claims are Group-level, correctly so. The one factual defect found (Failure 3) is a
Group-wide operational-timing claim, not a geography-mislabeling claim — it does not transfer a
Group/GCC figure onto Egypt; it simply overstates how many of the 8 countries had live rollout by a
stated date. No instance of Geographic Evidence Rules Failure Patterns 1-6 found.

## Summary
- **3 hard/near-hard defects**, all first identified by this Pass 2 audit (no prior citation audit
  existed for the v2 draft): a wrong Value Driver Tree node ID for the EBITDA figure (N-06 instead of
  N-09); the same N-06 node misattributed to the wrong source document throughout the section
  (`Investment_Relationship_Map.md` instead of `Value_Driver_Tree_v2.md`, traceable to an error in the
  drafting skill file itself); and an unsupported, likely-incorrect "7/8 countries by end-2024" claim
  that conflicts with five contemporaneous corpus documents and the vault's own established Fact nodes
  N-08/N-13.
- All other numeric/named-fact claims independently verified against their cited source and found
  accurate.

## Verdict
**FAIL — not yet citation-clean.** Per the citation-audit skill's zero-tolerance rule ("100% of numeric
claims must pass — no partial credit"), the defects above must be fixed before this section can be
cited as verified. The fixes are narrow (retarget one node-ID number, retarget one node's source
document, correct one count/date claim) — this is not a finding that the section's underlying argument
is weak (its central point — that talabat's embedded AI is licensed infrastructure being scaled, not
built fresh, and that this OS's own decision-support AI is a distinct, separately-labeled capability —
is well-supported), only that its citation trail currently misdirects a verifier in three places, one
of which (Failure 3) is a substantive factual overstatement, not just a wrong pointer.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`
- `vault/Knowledge/Investment_Relationship_Map.md`
- `vault/Knowledge/Facts/Talabat_Pro.md`
- `vault/Knowledge/Sources/TLB-001_annual-report-2024.md`, TLB-012, TLB-013, TLB-015, TLB-016, TLB-026
- `.claude/skills/business-plan-drafting/SKILL.md` (Section 5 vault-map entry — root cause of Failure 2)
