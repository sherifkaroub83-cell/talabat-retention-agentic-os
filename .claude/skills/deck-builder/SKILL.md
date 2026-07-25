---
name: deck-builder
description: Procedure for building the capstone's 30-slide group presentation (5 slides per member × 6 members) from the finished Business Plan sections and the Agentic OS itself. Trigger when the user asks to build, storyboard, or revise the presentation deck, or says "/deck". Used by publication-agent.
---

# Deck Builder — 30-slide group presentation

**Deliverable:** 30 slides (5 per member × 6 members), presenting the AI Business Plan and the
Agentic OS that produced it. **Source of truth:** sections at ✅ Done (independently verified)
in `vault/Projects/Business_Plan_Drafts_v2/`, the OS architecture notes, and the Agentic OS
Console (`app/agentic-os-console/` — its views are presentation-ready visuals; screenshot or
re-create, never re-derive numbers by hand).

## Procedure
1. **Confirm role mapping first.** The 6-member ↔ 5-role assignment (Problem_Charter team
   table) determines who presents what. If still `[assign]`, escalate — do not guess.
2. **Storyboard before slides.** Propose a 30-slide storyboard (title + one-line message per
   slide, Pyramid Principle: answer first) mapped to members, and get user approval.
   Default arc (adjust to roles): OS Architect → the Agentic OS (map, agents, evidence tiers,
   gates); Data & Research Lead → corpus, knowledge graph, research layer; Business Plan Lead →
   SCQA answer, allocation recommendation, financial plan; Strategy & Risk Lead → options,
   scenarios, risks, KPIs; Integration & Delivery Lead → pipeline, verification protocol,
   implementation plan; member 6 per the team's role decision.
3. **One message per slide**, evidence beneath it. Every number on a slide carries the same
   citation chain as the plan (footnote form: DocID or DEC/ASM id). Synthetic figures keep
   their `[SYNTHETIC — illustrative]` label on the slide itself.
4. **Build** to `Outputs/` (PPTX via the pptx toolchain if available, else a slide-per-page
   markdown/PDF fallback). Slide visuals reuse the console's design system: dark surface,
   talabat orange accent, the validated categorical palette (#E85D1F/#3B82D6/#2FA06A/#9A6BE0).
5. **Verify:** count = 30; per-member count = 5; every Done-sourced claim traceable; DRAFT
   markers on anything sourced from a 🟡 section. Record the build in `SESSION_LOG.md`.

## Anti-patterns
- A slide that states a conclusion no plan section states.
- Blending Group and country figures on one chart without labels.
- Decorative charts with no message line.
