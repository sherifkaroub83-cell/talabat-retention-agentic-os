---
id: DEC-006
status: approved
date: "2026-07-22"
owner: decision-steward (agent) — data-reconciliation call, approved without user escalation
supersedes: none
---

# DEC-006 — Reconciling the "Subscription fee & Other Income" combined line against TLB-011's separated Q1 2026 revenue-mix table for Section 6

## Tooling note (read first)
Invoked directly from the top-level Claude Code session (Phase 8, ahead of Section 6 — Business Model
and Revenue Streams drafting), not nested inside `bp-orchestrator`. `Read`, `Write`, `Edit`, `Glob` were
available in this session; `AskUserQuestion` was not exercised because, per the analysis below, this
decision resolves within `decision-steward`'s documented data-reconciliation authority and does not
cross the bar that forced real escalation in DEC-003. This is a considered judgment call, not a
fallback forced by a missing tool.

## Question
`vault/Knowledge/Strategic/Revenue Model.md`'s Open Questions flags that the corpus does not reconcile
the "Subscription fee & Other Income" combined revenue line — used throughout the Annual Reports and
results releases (TLB-001, TLB-002, TLB-003, TLB-009, TLB-029; USD 952mn FY2024, USD 1,397mn FY2025) —
against TLB-011's Q1 2026 results press release, which instead presents a separated "Subscription fees"
line (1.0% of GMV) and a distinct "Own grocery & other income" line (15.2% of GMV). The Strategic note's
own synthesis calls this "a reclassification the corpus does not explain," hypothesizing it "appears to
reflect tMart's near-95%-take-rate principal revenue being folded into 'other income' in some periods
and reported separately in others" — explicitly labeled a hypothesis, not a confirmed fact. Section 6
(Business Model and Revenue Streams) needs a clean, internally consistent revenue-stream breakdown and
cannot proceed while this is an open, undocumented discrepancy — per the drafting skill's anti-pattern
against silently resolving a documented discrepancy by picking a convention without explanation.

## Evidence re-examination (the material finding)
Re-reading `vault/Knowledge/Facts/Revenue.md` directly against the underlying per-document figures
(rather than relying only on the Strategic-note synthesis, which had already flagged the conflict but
not decomposed it) surfaces a reconciliation the two source documents jointly support but that neither
states explicitly in so many words:

- **TLB-010** (Q1 2026 audited financial statements, page 16) discloses, as distinct IFRS line items,
  Subscription fees **USD 25,772,018** and Other direct income **USD 408,418,477** for the three months
  ended 31 March 2026 — sum **USD 434,190,495**.
- **TLB-011** (Q1 2026 results press release, page 4) discloses Subscription fees at **1.0% of GMV** and
  Own grocery & other income at **15.2% of GMV** — combined **16.2% of GMV**. Using the same document's
  own disclosed take rate (39% of GMV on USD 1,047.75mn revenue), implied Q1 2026 GMV ≈ **USD 2,686.5mn**.
  16.2% × USD 2,686.5mn ≈ **USD 435.2mn** — matching TLB-010's audited combined dollar figure
  (USD 434.19mn) within **~0.2%**.
- The same cross-check holds, with wider but still acceptable tolerance (the press release rounds to one
  decimal place), for the **Q1 2025 comparator period**: TLB-005 (audited) reports Subscription fees
  USD 12,327,925 + Other direct income USD 281,347,265 = USD 293.67mn; TLB-011's Q1 2025 comparator mix
  (0.5% + 12.6% = 13.1% of GMV, on an implied GMV of ≈USD 2,193.8mn) computes to ≈USD 287.4mn — within
  ~2% of the audited figure, consistent with the coarser 0.1-percentage-point rounding used at that lower
  scale.
- Critically, **TLB-004 through TLB-010** (every audited quarterly/annual financial statement in the
  corpus from Q4/FY2024 onward) already discloses "Subscription fees" and "Other direct income" as two
  distinct IFRS revenue-by-type line items, in **every single reporting period**, not only from Q1 2026.
  What changed is not the underlying accounting — it is that **TLB-011 (May 2026) is the first
  investor-facing results press release to also surface that same two-way split**, rather than folding
  both into "Subscription fee & Other Income" for the Management Revenue presentation. This timing
  coincides with TLB-014's disclosed footnote that "from 2026 onwards, talabat aligns external and
  internal reporting and will only report IFRS revenue" (TLB-014, page 9, footnote 2) — a stated,
  independently-disclosed reporting-format change effective exactly the period (Q1 2026) where the
  press-release split first appears.

This is the same evidentiary situation DEC-004 found for the 2026 investment total: a combined figure
used in one set of documents (here, the Annual Report/press-release "Management Revenue" format) and a
separated figure used in another (here, TLB-011's Q1 2026 GMV-mix table) are not a genuine two-way
conflict about what actually happened — they are two different levels of granularity of the *same*
underlying audited data, and the corpus's own primary source (TLB-010's line-item detail) supports
decomposing one into the other with the arithmetic checking out closely. It differs from DEC-004 in one
respect worth flagging honestly: DEC-004's 175=120+55 identity was stated by a single document as a
literal sum; here, no single document states "Subscription fee & Other Income = Subscription fees +
Other direct income" in words — this is the capstone's own cross-document arithmetic reconciliation,
verified across two independent quarters (Q1 2025 and Q1 2026) and two independent document types
(audited financial statements vs. investor press release), but still an inference, not a verbatim
disclosure.

One genuine gap remains and is **not** resolved by this reconciliation: no document in the corpus
restates the **full-year FY2024 or FY2025** "Subscription fee & Other Income" combined figures
(USD 952mn / USD 1,397mn) as a two-way split. The only period-matched audited-vs-press-release
cross-check available is at the quarterly level (Q1 2025, Q1 2026); a clean full-year dollar split would
require summing across quarters with mixed reporting bases (calendar-year pro forma vs. 485-day
since-inception audited), which introduces scope mismatches this decision does not attempt to force-
reconcile (see Decision, point 5).

## Options considered
1. **Present both conventions side-by-side as an unresolved conflict, footnoted** (the DEC-001/DEC-002
   pattern). Evidence: safe, consistent with precedent for genuinely irreconcilable same-tier figures.
   Rejected as the *primary* option: unlike DEC-001/002's conflicts (different documents, different
   methodology providers, no disclosed arithmetic relationship), here the primary source's own line-item
   detail (TLB-010) decomposes the combined figure into components that arithmetically reconcile against
   TLB-011's percentages within ~0.2%. Treating this as unresolved would understate what the evidence
   actually supports, the same reasoning DEC-004 applied.
2. **Adopt TLB-011's separated two-line convention only, discard the combined "Subscription fee & Other
   Income" line entirely.** Evidence: most recent document, most granular. Rejected as the *sole*
   convention: only Q1 2026 (and Q1 2025 comparator) figures exist in this format — adopting it exclusively
   would strand the FY2024/FY2025 annual figures (the only full-year revenue-by-type data the corpus has),
   which are only available in the combined format.
3. **Adopt the combined "Subscription fee & Other Income" line only, ignore TLB-011's split.** Evidence:
   this is the format used in the majority of the corpus (TLB-001, TLB-002, TLB-003, TLB-009, TLB-012,
   TLB-013, TLB-015, TLB-016, TLB-019, TLB-026, TLB-029) and the only format with full-year FY2024/FY2025
   figures. Rejected as the *sole* convention: it would silently drop the tMart/quick-commerce-vs-true-
   subscription distinction that TLB-011 makes visible, and Section 6 (which must explain talabat's
   business model and revenue streams, including tMart's role) benefits materially from being able to
   name that distinction where the data supports it.
4. **Reconcile: adopt the four-line "Commission fees / Delivery & Service fees / Subscription fee & Other
   Income / Advertising & listing fees" structure as Section 6's headline revenue-stream breakdown (the
   corpus's dominant, full-history convention), while explicitly stating that "Subscription fee & Other
   Income" decomposes into two components — "Subscription fees" (talabat pro membership fees) and "Own
   grocery & other income"/"Other direct income" (predominantly tMart's near-95%-take-rate owned-inventory
   revenue plus other direct income) — per TLB-011's Q1 2026 disclosure, cross-checked against TLB-010's
   audited line items. State the two-line split is available only for Q1 2025 and Q1 2026 (not the full
   FY2024/FY2025 history), and flag the reconciliation logic itself as the capstone's own inference
   (Medium confidence), distinct from the individually disclosed dollar/percentage figures (Fact tier,
   High confidence).** This is the option adopted below.

## Decision
**Option 4.** Section 6 (Business Model and Revenue Streams) will:
- Use the **four-line structure** (Commission fees; Delivery & Service fees; Subscription fee & Other
  Income; Advertising & listing fees) as the headline revenue-stream breakdown, since this is the
  convention with full FY2024 (USD 952mn / 952 / 696 / 246mn respectively) and FY2025 (USD 1,297 / 1,397 /
  859 / 323mn) coverage (TLB-001 page 27; TLB-002 page 20; TLB-009 page 4).
- Explicitly state that "Subscription fee & Other Income" is itself a combined line that **decomposes**
  into two distinct components, per TLB-011's Q1 2026 press release (page 4) and cross-checked against
  TLB-010's audited Q1 2026 financial statements (page 16):
  - **"Subscription fees"** — talabat pro membership fees narrowly. 1.0% of GMV (Q1 2026) vs. 0.5% of GMV
    (Q1 2025 comparator); USD 25.77mn (Q1 2026, audited).
  - **"Own grocery & other income"** (TLB-011's press-release label) / **"Other direct income"** (TLB-010's
    audited-statement label for the same line) — predominantly tMart's near-95%-take-rate owned-inventory
    quick-commerce revenue, plus other miscellaneous direct income. 15.2% of GMV (Q1 2026) vs. 12.6% of GMV
    (Q1 2025 comparator); USD 408.42mn (Q1 2026, audited).
- State the reconciliation explicitly: these two components' Q1 2026 audited dollar sum (USD 434.19mn)
  matches the implied dollar value of TLB-011's combined percentage-of-GMV figures (≈USD 435.2mn) within
  ~0.2%, and the same relationship holds (within rounding tolerance) for the Q1 2025 comparator — this is
  a **decomposition of the same underlying audited data, not a definitional change or a genuine conflict**.
  Every audited quarterly statement from TLB-004 onward already discloses "Subscription fees" and "Other
  direct income" as separate IFRS line items; TLB-011 is simply the first investor-facing press release to
  also surface that split, coinciding with TLB-014's disclosed 2026 IFRS-only reporting-alignment change.
- Where Section 6 (or Section 9, if it needs finer revenue-mix granularity) cites the two-way split, it
  must label it as available only for the Q1 2025 and Q1 2026 periods specifically — **not** presented as
  a full-year FY2024/FY2025 dollar split, since no document restates the annual combined figures
  (USD 952mn FY2024; USD 1,397mn FY2025) in decomposed form, and forcing that split would require bridging
  a calendar-year pro forma figure against a 485-day since-inception audited figure — a genuine scope
  mismatch this decision does not attempt to resolve. This remaining gap is carried forward as an explicit
  Open Question, not silently filled.

## Rationale
Like DEC-004 (the 2026 investment total) and unlike DEC-001/DEC-002 (the Egypt category-share and
market-size figures, which came from genuinely different documents/methodologies with no disclosed
arithmetic relationship), this conflict decomposes cleanly once the primary source's own line-item detail
is checked directly: TLB-010's audited Subscription-fees-plus-Other-direct-income dollar sum reconciles
with TLB-011's combined percentage-of-GMV figures within ~0.2%, across two independent quarters. Treating
this as an unresolved, footnoted two-way conflict (the DEC-001/002 pattern) would be less accurate than
what the evidence supports, the same logic DEC-004 applied to the investment-total conflict.

At the same time, this decision does not overclaim in the direction DEC-004 was careful about: unlike
DEC-004's 175=120+55 identity, which was stated by a single document as a literal disclosed sum, no
document here states "Subscription fee & Other Income = Subscription fees + Other direct income" in
words — this is the capstone's own cross-document, cross-period arithmetic reconciliation. It is
well-evidenced (verified twice, across independent quarters and independent document types) but is kept
explicitly labeled as a Medium-confidence inference, distinct from the High-confidence, directly-disclosed
individual dollar/percentage figures — the same dual-confidence structure DEC-004 used for the
TLB-019-to-TLB-020 linkage. Similarly, the decision does not force a full-year split where the evidence
doesn't support one; the corpus's own scope mismatches (pro forma vs. audited-since-inception, calendar
year vs. 485-day window) make that unsafe, so it is named as a genuine, still-open gap rather than
resolved by inference.

## Impact
Creates Assumption Register row **ASM-013**. Unblocks Section 6's (Business Model and Revenue Streams)
revenue-stream breakdown, which can now present the four-line headline structure and, where useful,
name the tMart-vs-subscription distinction within the combined line without appearing internally
inconsistent. Also relevant to Section 9 (Financial Plan) if further revenue-mix granularity is needed
in the value-driver-tree model — this decision governs the underlying reconciliation logic Section 9
would cite, though it does not itself modify `vault/Forecasts/Value_Driver_Tree.md`.
`vault/Knowledge/Strategic/Revenue Model.md`'s Open Questions entry on this topic is now stale relative
to this reconciliation — the Knowledge-layer owner should consider a light update the next time that
note is revised (this is outside `decision-steward`'s write scope, per DEC-004's precedent for handling
the same kind of downstream note staleness).

## Approval
This is a data-reconciliation call within the OS owner's authority, not a strategic framing choice — it
does not change the plan's recommendation, only how a disclosed revenue line is decomposed and presented
in Section 6 (and, where relevant, Section 9). It follows the same class of precedent as DEC-004 (a
combined figure and a separated figure from different documents reconciling once the primary source's
own detail is checked directly) and preserves DEC-004's discipline of separating Fact-tier component
figures from the Medium-confidence cross-document reconciliation logic itself. Marked `approved` directly,
without escalation to the user via `AskUserQuestion`, consistent with `decision-steward`'s documented
discretion for this class of decision.

## Links
- [[Decision_Management_Layer|Decision Management Layer]]
- [[Revenue Model]]
- [[Revenue Drivers]]
- [[Talabat Pro]]
- [[Quick Commerce]]
- [[DEC-004_2026-investment-total]]
- [[DEC-001_egypt-category-share-figure]]
- [[DEC-002_egypt-market-size-definition]]
