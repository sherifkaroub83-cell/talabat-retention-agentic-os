---
id: DEC-001
status: approved
date: "2026-07-22"
owner: decision-steward (agent) — data-presentation call, approved without user escalation
supersedes: none
---

# DEC-001 — How to present Egypt's relative food-service category-share figure in Section 3

## Tooling note (read first)
Drafted directly by `bp-orchestrator` acting in the decision-steward role, because the `Agent` tool
listed in `decision-steward`'s own frontmatter was not available in this session's toolset (only `Read`,
`Write`, `Edit`, `Glob`, `Grep` — no `Agent`, `AskUserQuestion`). The judgment applied below follows
`decision-steward`'s documented procedure (`.claude/skills/decision-log/SKILL.md`) exactly; it was not
delegated to an isolated agent thread.

## Question
The primary vault corpus contains two, same-tier (both primary disclosed sources), irreconcilable
figures for Egypt's relative food-service category share versus its next-closest competitor:
- TLB-001 (Annual Report 2024, page 5) and TLB-002 (Annual Report 2025, page 5): Egypt food-service
  category share **"10x+"** versus next-closest peer.
- TLB-014 (Investor Presentation, May 2026, page 4): Egypt food category share **"1x+ (IPO)" rising to
  "4x+ (YE'25)"**.
These two documents even disagree on the *same reference point* — TLB-026 (the actual International
Offering Memorandum, page 114) states Egypt's Foodservice category share at the time of IPO was **">10x"**,
while TLB-014 separately describes Egypt "at IPO" as only "1x+." The corpus never explains this — plausibly
different methodology providers (TLB-002 cites Redseer Consulting explicitly for its category-share data;
TLB-015/TLB-023 cite OC&C for theirs; TLB-001/TLB-014 do not state which provider they used), different
measurement dates within the same nominal period, or a different competitor set used as the denominator.
Both `Topics/Egypt.md` and `Topics/Competition.md` flag this as an unresolved Open Question. The corpus
alone cannot answer which figure is "correct" — someone has to decide how Section 3 presents Egypt's
competitive-position headline number.

## Options considered
1. **Adopt "10x+" only** (TLB-001/TLB-002) — evidence: corroborated across two of the Group's own Annual
   Reports; tier: primary disclosed; confidence: would be High on its own, except it directly conflicts
   with TLB-014 and (on the "at IPO" reference point) with TLB-026 itself.
2. **Adopt "1x+→4x+" only** (TLB-014) — evidence: most recent document (May 2026), shows a directional
   growth story (share expanding as talabat pro/AI investment matures) that is narratively convenient for
   this capstone's retention thesis; tier: primary disclosed; confidence: single document, and its own
   "1x+ at IPO" claim conflicts with TLB-026's own IPO-time disclosure of Egypt Foodservice >10x — picking
   this option only because it is narratively convenient would violate the evidence-ranking skill's
   explicit anti-pattern ("picking whichever number is more favorable to the plan's recommendation").
3. **Present both figures, footnoted, with the discrepancy stated explicitly and no single number
   presented as definitively "true."** Tier: transparent presentation of two primary-tier sources in
   conflict; confidence in the *presentation* itself is High even though confidence in either individual
   number is Medium.

## Decision
**Option 3 — present both figures, footnoted.** Section 3 will state that talabat's own disclosures give
two different figures for Egypt's relative food-service category share (10x+ per TLB-001/TLB-002 annual
reports; 1x+ at IPO rising to 4x+ by YE'25 per TLB-014), will not blend or average them, will not silently
pick one as canonical, and will name the plausible reason for the divergence (different data provider —
Redseer vs. OC&C — or different measurement basis) as an open question the corpus itself does not resolve.
Where a single qualitative framing is needed (e.g. "talabat holds a leading category position in Egypt"),
the plan will use the more conservative, most-recently-dated figure (4x+, YE'25 per TLB-014) as the
headline framing number, explicitly noting the 10x+ figure exists in the Group's Annual Reports as a
higher, differently-sourced estimate — this avoids overstating category dominance (a conservative-framing
choice consistent with the McKinsey Lens's "quantify or delete" and "don't cherry-pick" discipline) while
still surfacing the full evidence.

## Rationale
- Per the evidence-ranking skill: two same-tier sources in conflict must not be resolved by silent
  selection — they must be escalated and either resolved with stated rationale or presented together,
  footnoted. Presenting both, footnoted, is the option that does not require guessing which methodology
  is more authoritative (information the corpus doesn't give us).
- Using the more conservative figure (4x+) as the default qualitative framing, rather than the higher
  (10x+) figure, avoids the anti-pattern of picking the number most flattering to the plan's own
  retention-strategy argument — Egypt's category leadership is not actually the load-bearing evidence for
  this capstone's recommendation (Egypt's *early-stage loyalty penetration despite* leading category
  share is), so there is no analytical reason to reach for the larger number.
- This mirrors the Decision Management Layer's own worked example for exactly this conflict.

## Impact
Creates Assumption Register row **ASM-001**. Unblocks Section 3's Competitive Analysis (SWOT — Strengths
quadrant) and Target Market framing, which depend on stating Egypt's category position without
overclaiming.

## Approval
This is a data-presentation call within the OS owner's authority per `decision-log`'s stated latitude
("show both figures with a footnote" is explicitly given as the canonical example of an OS-owner-approvable
call, not a strategic framing choice) — marked `approved` directly, without escalation to the user via
AskUserQuestion, consistent with `decision-steward`'s own documented discretion. It does not change the
plan's recommendation, only how a disputed figure is presented.

## Links
- [[Decision_Management_Layer|Decision Management Layer]]
- [[Egypt]]
- [[Competition]]
- [[Competitive Advantages]]
