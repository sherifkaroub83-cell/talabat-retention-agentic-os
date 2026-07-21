---
name: decision-log
description: Procedure and template for recording a management judgment call as a structured, dated, owned Decision record, and for registering the resulting assumption. Trigger when the decision-steward agent needs to log a decision, or the user says "decide", "/decide".
trigger: /decide
---

# /decide — Decision Log Skill

Used exclusively by `decision-steward`. Full design: `vault/Architecture/Decision_Management_Layer.md`.

## When a Decision record is required (not optional)

- Two same-tier sources disagree (e.g. the Egypt category-share figure, the three 2026 investment
  totals) and someone must choose how to present it.
- A forecast scenario choice materially affects the plan's headline recommendation.
- A strategic framing choice with no single correct answer from data alone (build/buy/partner for
  Section 5, which AI intervention to prioritize among the candidates in
  `Strategic/Future AI Opportunities.md`, the market-size definition to adopt for Section 3).
- Any instance where the drafting skill's Anti-patterns list would otherwise be violated by silence
  (e.g. "silently resolving a discrepancy by picking a number").

## Procedure

1. Write the Question precisely — what can't the corpus resolve alone, and why.
2. List every option with its evidence, tier, and confidence.
3. Create `vault/Decisions/Decision_Log/DEC-XXX_<slug>.md` from `_TEMPLATE-decision.md`, status
   `proposed`.
4. Decide the approval path:
   - **OS-owner-approvable** (a data-presentation call, e.g. "show both figures with a footnote"):
     may be marked `approved` directly — state that you're doing this and why it doesn't need
     escalation.
   - **Needs user/instructor judgment** (a strategic framing choice, a prioritization among
     candidate interventions, anything that changes the plan's actual recommendation): use
     AskUserQuestion before marking `approved`. Stays `proposed` until then.
5. Register the resulting Assumptions Register row(s), tier = Decision, status matching the decision's
   approval state.
6. Update the "Open decisions" list in the Project tracker.

## Anti-patterns

- ❌ Editing a decision's `Decision`/`Rationale` after it's `approved` — supersede with a new file
  and `supersedes:` instead.
- ❌ Marking a strategic framing choice `approved` without user confirmation.
- ❌ A Business Plan sentence that reflects a decision with no corresponding `DEC-XXX` file.
- ❌ Registering an Assumption row citing `status: Approved` from a `proposed` decision.
