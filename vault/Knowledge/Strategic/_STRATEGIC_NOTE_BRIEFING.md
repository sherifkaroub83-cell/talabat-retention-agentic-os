# Phase 4 Part 6 — Strategic Knowledge Notes: Agent Briefing

You are one worker building the final layer of a "semantic knowledge graph" for an MBA capstone (talabat Egypt AI-driven customer retention). Prior work has already produced: 29 cited Source notes, 14 Facts topic files, 9 Entity rosters, 30 Topic Notes (synthesis notes, one per business concept), a Relationship Map, and a Business Relationships note (explicit causal chains). **All of that is frozen — do not edit it.** Your job is the highest layer of synthesis: **Strategic Knowledge notes** that connect multiple Topic Notes into cross-cutting business understanding. These are not document summaries and not topic summaries — they are *arguments*, built by connecting things that are already true in the vault.

## Hard rules (same as every prior phase)

1. **Never invent facts.** Every substantive claim must trace back to something already in `vault/Knowledge/Facts/`, `vault/Knowledge/Entities/`, `vault/Knowledge/Sources/`, or the 30 notes in `vault/Knowledge/Topics/`. Read the Topic Notes — that's your primary raw material now, not the raw Facts files (though you can and should dip into Facts/Entities for a specific citation when a Topic Note doesn't carry one you need).
2. **Synthesis, not summary.** Don't restate what a Topic Note already says — connect two or more things into a business argument. E.g. "Revenue Model" shouldn't just re-list revenue lines (that's what [[Revenue Drivers]] already does) — it should explain the *logic* of how the four revenue streams relate to each other and to the underlying unit economics.
3. **Distinguish evidenced claims from your own synthesis explicitly.** Where you're drawing a conclusion that connects multiple sources (e.g. "X plus Y implies Z is a risk"), say so as a synthesis, not as if the vault stated it directly. Two of your topics (see below) are explicitly forward-looking/recommendation-space — for those, be extra disciplined about the line between "the vault says" and "this note is now proposing."
4. **Cite when stating a specific figure or quote**, using `(DocID, page N)` — but for most of this layer you'll be linking to Topic Notes rather than re-deriving citations, since the Topic Notes already did that work.
5. **No note in this batch has a 1:1 source** — that's the point of this layer. If you can't find real support for a claim, say so in an "Evidence Basis" note rather than asserting it.

## Template — use this exact structure

Create each file at `/home/user/talabat-retention-agentic-os/vault/Knowledge/Strategic/<Note Name>.md`:

```markdown
# <Note Name>

## Thesis
1-2 sentences: the core argument this note makes (this is what makes it "strategic knowledge"
rather than a topic summary — state a position, grounded in evidence).

## Synthesis
The main body — several paragraphs connecting multiple Topic Notes/Facts into the argument. Use
inline [[wiki-links]] naturally as you reference concepts, don't just dump a list at the end.

## Evidence Basis
- [[Topic Note]] — what this note draws from there
- (list every Topic Note, Facts file, or Entities file you substantively drew on)

## Egypt-Specific Considerations
What does/doesn't this argument hold for Egypt specifically? (Most of the corpus's headline
figures are Group-level or explicitly exclude Egypt — be honest about what's extrapolation vs.
direct evidence here, this section matters a lot for the capstone.)

## Open Questions
Genuine gaps.

## Strategic Implications
2-5 bullets: what this means for the AI-driven retention business plan specifically.
```

## Link syntax reminder
- Topic Notes (Title Case, spaces): `[[Customer Retention]]`, `[[GMV]]`, `[[Talabat Pro]]`, etc. — full list of 30 is in `vault/Knowledge/Topics/`, just `ls` it.
- Other Strategic notes you or teammates are building: same Title Case convention, e.g. `[[Revenue Model]]`, `[[Cost Structure]]`.
- Facts files: underscore/exact case, e.g. `[[Retention]]`, `[[Talabat_Pro]]`, `[[Q-Commerce]]`.
- Entities files: `[[Companies]]`, `[[Countries]]`, etc.
- Sources: full filename + pipe alias, e.g. `[[TLB-001_annual-report-2024|TLB-001]]`.

## Special guidance for two forward-looking notes (if assigned to you)

- **AI Opportunities**: this should synthesize the AI *roadmap items the corpus itself already states* — e.g. TLB-015's "AI driven recommendations in new form factors," "Optimising timing, placement, and incentives of vertical and product cross-sells" (Capital Markets Day deck), or TLB-002's "AI to continue driving personalisation and smart targeting... particularly within our rapidly growing adtech business." This is evidenced, not invented — talabat has stated these intentions.
- **Future AI Opportunities**: this one is explicitly the capstone's own recommendation space — built by connecting the gaps identified across the AI/Personalization/Recommendation Systems/Customer Churn Topic Notes (e.g. "no Egypt-specific AI deployment data exists" + "no churn rate is disclosed" + "Egypt just became a standalone profitable segment" → there's a case for proposing AI-driven churn prediction as a new Egypt initiative). **Frame this explicitly as "the evidence gaps below suggest an opportunity" language, never as "talabat plans to do X"** — you are not reporting a fact, you're building the argument the business plan will make. Say this distinction out loud in the note itself (e.g. a one-line disclaimer at the top of Synthesis).

## When done
List the files created. Flag any note where you found the requested framing didn't fit the evidence well, and how you adapted it.
