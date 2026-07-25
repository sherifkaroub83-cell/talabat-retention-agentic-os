---
type: validation
section: 7
pass: 2
status: FAIL
date: "2026-07-25"
built_by: evidence-citation-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_07_Marketing_and_Sales_Strategy.md
pipeline_stage: 13.9 (Citation Verification — independent Pass 2, per .claude/skills/citation-audit/SKILL.md)
predecessor: vault/Validation/Citation_Audit_Section_07_v2.md (Pass 1, self-reviewed, 2026-07-23 — NOT read until this pass's own trace was complete)
---

# Citation Audit — Section 7, Independent Pass 2

**Verdict: FAIL — 5 hard failures, 5 soft findings.** Section 7 cannot proceed to stage 13.10/10
until the five hard failures are fixed. None require re-research; all five are mechanical or
scoping fixes against evidence already in the vault.

## Method

Independent sentence-by-sentence trace of every numeric and named-fact claim, performed **before**
reading the Pass 1 audit (two-pass protocol honored; convergence/divergence noted at the end).
Every claim was traced to the Facts tier (`Facts/`, `Facts/_raw/`, `Sources/`) — not only to the
Topic/Strategic notes the draft cites — plus `Assumptions_Register.md` (ASM-016, ASM-024 both
confirmed `status: Approved`), `Value_Driver_Tree_v2.md` (N-09/N-10/N-11/N-14), `DEC-009`,
`OPT-002`/`OPT-003`, and `Geographic_Evidence_Rules.md`. Section-specific synthetic-data checks
(labeling, blending, justification) were run separately (see below).

---

## Hard failures (5) — each blocks stage 10

### HF-1. §7.1: "-4pp" misstates the disclosed "-4%" (unit substitution) — two occurrences
- **Claims:** "the -4pp non-high-value M1 decline above" (§7.1 para 2) and "the -4pp non-high-value
  retention decline" (§7.1 Caution).
- **Evidence:** TLB-019, page 9 discloses a **-4% y/y** change in non-high-value M1 retention
  (competitive markets UAE/Kuwait/Qatar) — a relative year-over-year percentage change, not a
  percentage-point delta (`Facts/_raw/TLB-019_facts.md`: "Q4'25 y/y M1 retention change (competitive
  markets): ... non-high-value -4%"; `ASM-027` also carries it as "-4% y/y"). The draft's own first
  mention ("declined 4% year-over-year") is correct; the two later restatements silently transform
  % into pp.
- **Fix:** Replace "-4pp" with "-4% y/y" (or "the 4% y/y decline") in both places.

### HF-2. §7.4 Caution: blanket six-market GCC/Jordan cohort claim extended to all five uplift figures
- **Claim:** "None of the five uplift figures above are confirmed for Egypt: **they are measured on
  the six GCC/Jordan markets live before talabat pro's February 2025 Egypt launch**..."
- **Evidence:** The six-market pre-Dec-2024 cohort scope is evidenced only for the **talabat pro**
  figures (TLB-015 p.77 "live in 6 of 8 countries — all except Egypt and Iraq";
  `Strategic/Customer Retention Drivers.md` Egypt-Specific Considerations, sourcing TLB-012 p.17,
  TLB-013 p.8, TLB-016 p.9; transfer covered by ASM-016, Approved). It is **not** evidenced for:
  (a) **Rewards** — TLB-026 p.134, Group-level disclosure as of 29 Sep 2024, no cohort stated;
  (b) **PostPaid** — TLB-001 pp.9/18, Group-labeled in the vault's own notes even though the product
  was disclosed live only in the five GCC markets at CMD 2024 (`Topics/FinTech.md`) — a five-GCC
  population, not "six GCC/Jordan markets";
  (c) **Family Plan** — TLB-018 p.6 is a **Q2 2025** disclosure, i.e. *after* the February 2025
  Egypt launch, with no cohort or country breakout disclosed at all.
  The sentence also contradicts the draft's own "(Group; ...)" tags on figures 3–5 earlier in the
  same subsection. The correct, supported statement (per the Strategic note) is that figures 3–5
  are Group-level with **no Egypt breakout** — not that they were measured on the pro cohort.
- **Fix:** Restrict the "measured on the six GCC/Jordan markets live before February 2025" clause
  to the talabat pro figures (and the ASM-016-covered M1 delta); state Rewards/PostPaid/Family Plan
  as Group-level disclosures with no Egypt-specific breakout, exactly as
  `Strategic/Customer Retention Drivers.md` itself words it.

### HF-3. §7.4: AI/personalisation EBITDA cited to a page reference corrected repo-wide on 2026-07-24
- **Claim:** "its estimated EBITDA contribution rose from USD 14mn+ (FY2024) to USD 30mn+ (FY2025)
  *(Group; TLB-001, page 23; **TLB-002, page 15**)*."
- **Evidence:** `Facts/_raw/TLB-002_facts.md` line 167: the USD 30mn+ figure is **TLB-002, page 16**
  — "*(page ref corrected 15→16, 2026-07-24, per Pass 2 citation audit of Section 5)*." The
  canonical trail is `Facts/AI_Facts.md` / `Value_Driver_Tree_v2.md` N-09 (TLB-001 p.23, TLB-002
  p.15-16). Note: the correction post-dates Pass 1's run date (2026-07-23), so this is a repo-state
  change, not solely a Pass 1 miss — but it is a failure against current repo state.
- **Fix:** Cite "(Group; TLB-001, page 23; TLB-002, page 16)" (or "p.15-16" matching N-09), in both
  the body and the Traceability table. **Ripple flag:** `Strategic/Customer Retention Drivers.md`
  §"AI/personalization" still carries the pre-correction "TLB-002, page 15" — propose an update so
  future drafts don't re-inherit the stale page.

### HF-4. §7.2: two different savings disclosures conflated into one "Partner-funded" metric
- **Claim:** "Partner-funded savings ... reached an all-time-high 7% of GMV in Q1 2026, **totaling
  more than AED 1,567.7mn over a trailing 12-month period** *(Group; TLB-020, page 7; TLB-023, page 6)*."
- **Evidence:** These are two different disclosures: (a) TLB-020 p.7 — Partner-funded savings at an
  all-time-high 7% of GMV, Q1 2026; (b) TLB-023 p.6 — aggregate annual **customer** savings of
  >AED 1,567.7mn for **29 Sep 2023–29 Sep 2024**, funded by "**Partners, B2B, and bank
  partnerships**" (`Facts/Retention.md`), not Partner-funded alone, and not a period trailing
  Q1 2026. Scale cross-check confirms the conflation is material: disclosed Partner-funded savings
  alone were USD 588mn in FY2025 (TLB-019 p.7) ≈ AED 2.16bn — so AED 1,567.7mn cannot be the
  trailing-12-month Partner-funded total at Q1 2026. (`Topics/Promotions.md` pairs the two loosely
  but does not use "trailing" or merge them into one metric; the Facts tier carries the correct
  attribution — Facts outrank the Topic paraphrase.)
- **Fix:** Split into two sentences: the 7%-of-GMV Q1 2026 Partner-funded figure (TLB-020 p.7), and
  the >AED 1,567.7mn aggregate savings funded by Partners, B2B, and bank partnerships over
  29 Sep 2023–29 Sep 2024 (TLB-023 p.6). Delete "trailing."

### HF-5. §7.3: "no disclosed partner-retention percentage or count anywhere in the corpus" — falsified by a disclosed Fact
- **Claim:** "...a qualitative mechanism with **no disclosed partner-retention percentage or count
  anywhere in the corpus** (`Value_Driver_Tree_v2.md` N-10)."
- **Evidence:** N-10's actual claim is scoped: the corpus "discloses no partner-retention percentage
  or count **this investment is expected to move**" — a gap about the Food-leadership investment's
  target metric. The corpus **does** disclose a partner-retention percentage: **~99% Partner
  retention among pro-participating vendors in 2024** (TLB-001, page 21; `Facts/Retention.md`;
  `Sources/TLB-001` line 103). The draft's "anywhere in the corpus" universalizes N-10 beyond what
  it says and is contradicted at the Facts tier.
- **Fix:** Adopt N-10's scoped wording ("no disclosed partner-retention percentage or count that
  this investment is expected to move"); optionally acknowledge the ~99% pro-vendor retention figure
  as the corpus's only partner-retention statistic, measured on a different population.

---

## Soft findings (5) — fixes recommended, not blocking individually

- **SF-1 (§7.2, §7.6).** CARC presented endpoints-only: "rose from USD 89mn (1.5% of GMV, 2023) to
  USD 155mn (1.6% of GMV, 2025)." The dollar path is monotonic (89→103→155; TLB-001 p.28, TLB-002
  p.21) but the **share-of-GMV path is non-monotonic: 1.5% → 1.4% (2024: USD 103mn) → 1.6%**.
  Pairing "rose" with only the two share parentheticals silently suppresses the 2024 dip. Fix: add
  the 2024 point or drop the share parentheticals. (Section 6 §6.4 presents it the same way —
  coordinate the fix cross-section at stage 13.10.)
- **SF-2 (§7.4).** The 20% lower bound of the pro frequency-uplift range traces to TLB-023 p.8
  ("over 20%", Sep 2024), which is absent from the inline citation set (TLB-001 p.18; TLB-015
  pp.78,104; TLB-019 p.11). The range passes via `Strategic/Customer Retention Drivers.md`, but add
  TLB-023 p.8 inline and in the Traceability table.
- **SF-3 (§7.6).** The USD 120mn FY2025 vouchers-as-contra-revenue figure carries no direct citation
  in this section — it resolves only via Section 6, which cites it (revenue-mix table; TLB-002,
  page 20). Add "(Group; TLB-002, page 20)" here; also correct the locator — the contra-revenue
  figure sits in Section 6's §6.1 revenue-mix table, while §6.4 holds the CARC discussion.
- **SF-4 (§7.4).** The "(GCC + Jordan; TLB-019, page 10)" tag on the +16pp/+20pp M1 delta asserts
  more precision than the source: TLB-019 p.10 discloses no market scope ("Q4 2025 average"), and
  `Strategic/Customer Retention Drivers.md` states these deltas are "not broken out by country
  anywhere in the corpus." The claim *traces* — ASM-016 (Approved) labels the delta
  "Group/GCC+Jordan" with Egypt/non-GCC excluded from the measurement population — so this is not a
  hard failure, but the tag should read "Group/GCC+Jordan cohort per ASM-016." Same nuance applies
  to bundling TLB-019 p.11's +26%/+28% (FY2025 measurement, population unstated) under "six markets
  live before December 2024": covered by ASM-016, but the timing attribution is the register's, not
  TLB-019's.
- **SF-5 (§7.4).** "the 29-document primary corpus" — the corpus is 29 documents, but TLB-027 and
  TLB-028 are secondary (sell-side consensus). Say "29-document corpus" or "27 primary + 2
  secondary."

---

## Section-specific synthetic-data checks — PASS on all three

- **(a) Labeling at every occurrence, including tables: PASS.** All five right-column cells in the
  §7.2 funnel table carry an inline `[SYNTHETIC — illustrative...]` label; the boxed disclosure
  above the table states "No number below in this box is a talabat-disclosed or corpus-derived
  figure"; §7.5 refers to the "labeled synthetic funnel model"; the Traceability table row is marked
  SYNTHETIC. No unlabeled occurrence found.
- **(b) No blending or arithmetic combination with disclosed figures: PASS.** The table's middle
  column anchors each stage to real, separately-cited disclosures (TLB-002 p.15; TLB-013 p.6)
  without arithmetically combining them with the synthetic percentages; no derived number
  (synthetic % × disclosed base) appears anywhere in the section. The figures are confirmed absent
  from `Assumptions_Register.md` (no funnel-conversion ASM row exists), and a search of Section 9
  confirms no funnel/synthetic figure leaked into the financial case.
- **(c) Justification matches the standing rule: PASS.** The gap is proprietary, customer-level
  conversion telemetry (`Topics/Customer Journey.md` Open Questions confirms no quantified funnel
  model at any geography level), genuinely unresolvable by public research — exactly the
  "last resort, clearly labeled, never blended" case `CLAUDE.md` permits.

## Geography checks against known trap classes

- **Non-GCC composition:** the draft uses "non-GCC" only descriptively (Egypt as "first disclosed
  non-GCC follow-on" for FinTech, correct per `Topics/FinTech.md`); no pre/post-FY2025 non-GCC
  numeric figure is cited — not implicated.
- **Pro GMV share 32% (Q1 2025 baseline):** not used anywhere in the section — not implicated
  (the only "32%" is the retention-uplift upper bound, correctly sourced).
- **ASM-016 cohort scope:** pro 20-28%/26-32% correctly tagged GCC+Jordan; but see HF-2 (blanket
  extension to Rewards/PostPaid/Family Plan) and SF-4 (+16pp/+20pp tag precision).
- **AI EBITDA trail:** see HF-3 (TLB-002 p.16 per corrected Facts; route via `Facts/AI_Facts.md`/N-09).
- **CARC/marketing spend:** Group-tagged correctly; see SF-1 (non-monotonic 1.5→1.4→1.6 share path).
- Other checks clean: FinTech GCC-first sequencing (TLB-015 pp.25,74,103 / TLB-002 pp.14,19) traces
  verbatim to `Topics/FinTech.md`; ADCB card correctly UAE-scoped; CIB card correctly
  Egypt-standalone; "MENA" absent; multi-vertical 68%→73%→76% (TLB-019 p.7, TLB-020 p.8) and
  13.0-vs-3.8 (Group, July 2024; TLB-012 p.9, TLB-013 p.6, N-14) verified against raw Facts;
  DEC-009 Tier 2/3 characterization of OPT-003/OPT-002 verified against the decision record;
  TLB-026 p.134 Partner-funded pro delivery benefit verified against raw TLB-026 facts;
  "region's Everyday App" and the partner-side CVP quote verified against
  `Investment_Relationship_Map.md` (TLB-020 p.16) and Section 2 §2.1.

## Convergence/divergence with Pass 1 (read only after this pass's trace was complete)

Pass 1 (`Citation_Audit_Section_07_v2.md`, self-reviewed, 2026-07-23) recorded 25/25 PASS, 0 issues.
- **Convergent:** on the synthetic-funnel handling (its item 13 matches this pass's (a)/(b)/(c)
  results), on ASM-016's Approved status, on the FinTech sequencing, quotes, journey/frequency/GMV-share
  figures, DEC-009/OPT tiering, and the USD 120mn figure's existence in Section 6 (its item 25).
- **Divergent — Pass 1 misses:** HF-1 (checked the first "-4%" mention, item 3, but not the two
  "-4pp" restatements), HF-2 (verified §7.4's figures individually, items 15–19, but never audited
  the Caution sentence's blanket cohort claim), HF-4 (item 7 verified against `Topics/Promotions.md`
  verbatim without descending to `Facts/Retention.md`, which carries the Partners+B2B+banks
  attribution and the 2023–24 window — a topic-note-only trace), HF-5 (the §7.3 gap claim never
  appears in Pass 1's table at all).
- **Divergent — repo moved after Pass 1:** HF-3's page correction (TLB-002 15→16) landed 2026-07-24,
  after Pass 1 ran; Pass 1 item 21 was defensible at its run date but the citation fails against
  current repo state.

## Verdict

**FAIL.** 5 hard failures (HF-1 through HF-5), 5 soft findings (SF-1 through SF-5). Route back to
the Orchestrator for re-drafting of the flagged sentences — no claim should be silently softened;
every fix above names the exact supported wording or citation. Re-audit of the changed sentences
(not the full section) is sufficient for closure.
