---
id: RES-001
status: found
retrieved: "2026-07-22"
publisher: multiple (KrASIA, Sacra, Forbes Middle East, MenaBytes, Wamda, Disrupt Africa, Tech In Africa, Mordor Intelligence — see Source detail)
url: see per-claim links in Source detail
confidence: Medium
---

# RES-001 — Egypt-specific named competitors to talabat (Breadfast, Rabbit, elmenus, and others)

## Tooling note (read first)
This finding was produced by `bp-orchestrator` acting directly in the research-agent role, because the
`Agent` tool listed in `research-agent`'s own frontmatter was not available in this session's toolset
(only `Read`, `Write`, `Edit`, `Glob`, `Grep` were available — no `Agent`, `WebSearch`, or `WebFetch`).
No live web search was performed. Instead, this note evaluates the secondary-source document already
collected at `Input_Data/03_Competitors/2026-07-20_egypt_delivery_competitive_landscape.md`, which is
itself a per-claim-sourced secondary research synthesis compiled 20 July 2026, against the
`external-research` skill's provider-acceptability bar. This is a genuine limitation and is treated as
such below (see Limitations) — it is corpus-provenance assessment of an already-collected document, not
fresh, independently-verified web research.

## Finding
The primary vault corpus (29 `Sources/TLB-XXX` documents) names zero Egypt-specific competitors — the
only competitor names anywhere in the primary corpus are Deliveroo, Careem, noon, Jahez, and Snoonu
(TLB-026, page 146), none of which is confirmed Egypt-active. Egypt-specific rivals exist only in the
separate secondary corpus at `Input_Data/03_Competitors/2026-07-20_egypt_delivery_competitive_landscape.md`,
which names:
- **Breadfast** — Egyptian q-commerce/e-grocery startup; USD 50m pre-Series C (backers: Mubadala, Olayan
  Financing, Y Combinator, IFC, SBI Investment); ~USD 382m valuation (mid-2025); 39 fulfillment centers,
  ~1m orders/month, 300,000+ active users across four Egyptian cities.
- **Rabbit** — Egyptian 20-minute grocery delivery q-commerce startup; USD 11m pre-seed (region's largest
  at the time); April 2025 raised undisclosed new funding to expand into Saudi Arabia.
- **elmenus** — Egyptian food discovery/delivery platform, founded 2011; positioned by secondary sources
  as the #2 food delivery player in Egypt after talabat; differentiates on lower commission rates for SME
  restaurants.
- **Akelni, Mrsool** — named by Mordor Intelligence among delivery platforms expanding in Egypt.
- **Roboost** — Egyptian last-mile automation startup; partnered with McDonald's Egypt (Oct 2023).
- Also noted: Careem Food and Uber Eats both exited Egypt (Careem Food 2022; Uber Eats earlier),
  flagged in the secondary note itself as "verify independently" (i.e., not corroborated to the same bar
  as the funding/valuation figures above).

## Source detail
The secondary corpus document carries per-claim citation links, which is what makes it usable at all
under the `external-research` skill's provider filter:
- Breadfast: fwdstart.me, dabafinance.com (funding/valuation), Sacra (sacra.com/c/breadfast — fulfillment
  centers, order volume, active-user count)
- Rabbit: KrASIA (kr-asia.com), Tracxn (tracxn.com), Disrupt Africa, Tech In Africa (Saudi expansion)
- elmenus: Slant POS blog comparison, In Practise analysis (both secondary/trade-press, not a named
  market-research firm)
- Akelni/Mrsool, Roboost: Mordor Intelligence and IMARC Group respectively (both acceptable named
  market-research firms per the provider filter)
- Careem Food/Uber Eats exits: no link given in the secondary note; explicitly flagged there as
  unverified ("verify independently")
None of these underlying pages were re-fetched in this session (no WebFetch tool available) — this
finding rests on the secondary document's own citation trail, not a fresh, independent re-verification of
each link.

## Confidence rationale
**Medium**, not High. Reasoning:
- Breadfast and Rabbit funding/valuation figures are corroborated by more than one outlet each within the
  secondary note (fwdstart + dabafinance for Breadfast; KrASIA + Tracxn for Rabbit) — this would meet the
  High bar for those two facts specifically.
- elmenus's "#2 player" positioning rests on a blog comparison and one analysis site, not a named
  market-research firm or primary disclosure — weaker.
- The Careem Food/Uber Eats exit claims are explicitly unverified even in the source document itself.
- Most importantly: none of this was independently re-fetched or re-searched in this session (no
  WebSearch/WebFetch available), so this note cannot claim the same verification standard as a live
  research-agent run would. Overall confidence is capped at Medium to reflect that this is an assessment
  of a pre-existing secondary document, not fresh corroborated research.

## Limitations
- This is explicitly outside the primary, audited (Phase 1–8) vault citation regime — `Topics/Competition.md`
  and `Strategic/Competitive Advantages.md` both flag this corpus as deliberately excluded from primary
  ingestion. Using it requires clearly separate citation in any Business Plan section, never blended with
  primary `TLB-XXX` citations as if equivalent.
- No fact anywhere (primary or secondary) quantifies talabat's market share versus any of these named
  Egypt competitors, or any customer churn/switching attributable to them specifically.
- elmenus's "#2 player" claim and the Careem Food/Uber Eats exit claims are the weakest-sourced items in
  this note and should be treated as directional, not confirmed, if cited.
- No live web verification was performed this session — see Tooling note above. If a future session has
  WebSearch/WebFetch available, this note should be re-verified and its status upgraded to `verified`
  rather than left at `found`.

## Feeds
Proposed to `decision-steward` for registration as `ASM-002` (see Assumptions Register): "Egypt-specific
competitor names (Breadfast, Rabbit, elmenus) may be cited in Section 3 as secondary/non-primary-corpus
evidence, explicitly labeled as such, tier = External Research / Low-Medium confidence." Feeds Section 3
(Market Analysis) — Competitive Analysis (competitor benchmarking) and Opportunities (untapped-market
scan) sub-bullets.

## Links
- [[External_Research_Layer|External Research Layer]]
- [[Templates and Methods]]
- [[Competition]]
- [[Competitive Advantages]]
