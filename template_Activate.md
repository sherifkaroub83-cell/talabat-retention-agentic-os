# template_Activate.md — Activation Runbook

> **This file is for Claude.** It is the operating manual for turning this empty template into a
> live project. When a user opens this directory and says *"activate this template"*, *"set up this
> project"*, or starts dropping source files — **run the Interview in §4, then execute the Setup
> procedure in §5.** Don't guess the answers; ask. Humans: see `README.md` for the overview.

---

## 1. What this template is

The **Agentic Second-Brain OS** — a Claude-Code-native scaffold for document/research engagements.
You point it at a corpus (PDFs, docs, transcripts, links), and it becomes a navigable **Obsidian
knowledge vault** of cross-linked, source-cited notes plus the **tracking + memory** machinery to
carry a project from raw sources to a finished deliverable. It ships with a session-wrap-up skill, a
nightly read-only maintenance audit, and this interview-driven setup so any user can activate it
**without inheriting another user's data**.

Mental model: *Sources → extract → synthesize into a linked brain → track progress → maintain →
produce a deliverable.* Everything in the repo serves one stage of that loop.

---

## 2. How to activate (for Claude)

1. **Confirm intent & scope.** Ask the user to confirm they want to activate the template here, and
   whether this is a fresh project (expected) or a re-activation over existing work.
2. **Run the Interview (§4).** Ask the question groups in order. Keep it conversational — batch
   related questions, accept "you decide" and then **recommend a sensible default rather than
   stalling**. Record answers as you go.
3. **Confirm the plan, then execute Setup (§5).** Summarize what you'll create/fill from their
   answers and get a go-ahead before writing (this template's standing rule is
   **propose-then-approve** for anything destructive or far-reaching).
4. **Respect the guardrails throughout:**
   - `Input_Data/` is **read-only** source material — never edit it.
   - **Extract before reading** binaries; never read large PDFs/DOCX as raw text.
   - Write generated artifacts to `Outputs/`, never into `Input_Data/`.
   - For vault merges/deletes/rewrites, hand the user a **changelist** to approve first.
   - Ground every claim in the sources and cite the note it came from.

---

## 3. Template map (what ships)

```
ProjectX/
├── template_Activate.md      ← you are here (activation runbook)
├── README.md                 ← overview + worked use-case example
├── CLAUDE.md                 ← project instructions (placeholders → fill at activation)
├── MEMORY.md                 ← project facts / corpus / standing instructions (stub)
├── PROJECT_PROGRESS.md       ← milestone snapshot (stub)
├── SESSION_LOG.md            ← session history, newest on top (empty)
├── Input_Data/               ← DROP SOURCES HERE (read-only; empty)
├── Outputs/                  ← deliverables land here (create if absent)
├── scripts/
│   └── daily-brain-maintenance.ps1   ← nightly propose-only audit (vault path auto-derived)
├── .claude/skills/session-end/SKILL.md  ← /session-end wrap-up skill (KEEP)
└── vault/                    ← Obsidian second brain
    ├── soul.md               ← AI behavior rules (KEEP AS-IS — already generic)
    ├── identity.md           ← AI's role (placeholders → fill)
    ├── user.md               ← owner profile (stub → fill)
    ├── MOC/MOC-Second-Brain.md          ← the map of content (fill Knowledge section)
    ├── Knowledge/            ← synthesized notes go here
    │   └── _source_text/     ← raw extracted text goes here
    ├── Daily/_TEMPLATE-daily.md         ← copy per day
    ├── People/_TEMPLATE-person.md       ← copy per person
    ├── Projects/_TEMPLATE-project.md    ← copy per deliverable
    ├── Companies/ Decisions/ Meetings/  ← empty entity folders
    └── _maintenance/
        ├── nightly-consolidation-prompt.md  ← read-only audit prompt (KEEP)
        └── changelists/      ← dated audit outputs
```

**Keep as-is:** `vault/soul.md`, `.claude/skills/session-end/`, `_maintenance/nightly-consolidation-prompt.md`,
`.obsidian/*` config. **Fill at activation:** the four tracking files, `identity.md`, `user.md`, the MOC.
**Copy-per-item stubs:** the `_TEMPLATE-*` files.

---

## 4. The activation interview

Ask these groups in order. Each question is tagged → **the file/field its answer fills**. Offer the
example as a prompt; if the user defers, pick the recommended default and note it.

### Group A — Project basics
1. **Project name?** → `Projects/` filename, MOC title.
2. **Domain / topic in one phrase?** (e.g. "competitive intelligence on EV battery startups") →
   `identity.md [DOMAIN]`, `CLAUDE.md`, `MEMORY.md`.
3. **One-line goal — what does "done" look like?** → `PROJECT_PROGRESS.md` Goal, `CLAUDE.md` standing goal.

### Group B — Source material
4. **What are the sources?** (PDF / DOCX / web pages / transcripts / notes) → ingestion path.
5. **How many, and where are they / will they go?** (default: `Input_Data/`) → `CLAUDE.md` corpus, `MEMORY.md` table.
6. **Naming scheme, and is the order meaningful?** (e.g. numbered curriculum vs unordered set) →
   note naming + arc; preserve order when synthesizing.

### Group C — Deliverable(s)
7. **What's the end artifact?** (report / brief / business plan / slide deck / dataset) → `Projects/` tracker.
8. **Format, audience, length?** (e.g. "10-page DOCX exec brief for the leadership team") →
   `PROJECT_PROGRESS.md`, `Projects/` tracker. *Default if unsure: a Markdown report in `Outputs/`.*

### Group D — Owner profile (→ `vault/user.md`)
9. **Name, role/headline, location?**
10. **Core expertise + any frameworks/standards you default to?**
11. **Communication style?** *Default: direct, recommendation-first, evidence-backed.*
    (You may offer to draft `user.md` from a pasted bio/LinkedIn text.)

### Group E — AI role & behavior (→ `vault/identity.md`, optional `vault/soul.md`)
12. **What role should the AI play?** (analyst + chief of staff is the default framing) →
    `identity.md [OWNER_ROLE]`.
13. **Any standard to pressure-test the deliverable against?** → `identity.md [GOVERNANCE_STANDARD]`.
14. **Want any change to the 8 behavior rules in `soul.md`?** *Default: ship `soul.md` unchanged.*

### Group F — Conventions & governance
15. **Output location?** *Default: `Outputs/`.* → `CLAUDE.md`.
16. **Citation strictness + any standing do's/don'ts?** → `CLAUDE.md` standing instructions, `MEMORY.md`.

### Group G — Skills & automation
17. **Use the `/session-end` skill to close sessions?** *Default: yes.*
18. **Turn on nightly maintenance?** If yes, you'll schedule `scripts/daily-brain-maintenance.ps1`
    (it auto-derives the vault path). *Default: leave it available but unscheduled.*
19. **Any extra skills needed?** (e.g. a DOCX/PPTX exporter) — note them; create later via `skill-creator`.

### Group H — Cadence
20. **How will sessions be tracked?** *Default: `/session-end` after each working session, which
    updates `SESSION_LOG.md`, `PROJECT_PROGRESS.md`, and `MEMORY.md`.*

---

## 5. Setup procedure (after the interview)

Execute in order. Confirm the summary with the user first.

1. **Tracking files** — replace placeholders in `CLAUDE.md`, `MEMORY.md`, `PROJECT_PROGRESS.md` with
   the project name, domain, goal, corpus description/table, and milestones. Set
   `PROJECT_PROGRESS.md` status to `🟡 In progress` and milestone 1 (Activation) to ✅.
2. **Identity** — fill `vault/identity.md` (`[OWNER_ROLE]`, `[DOMAIN]`, `[DELIVERABLE]`,
   `[GOVERNANCE_STANDARD]`) and `vault/user.md` (all `[INSERT…]` fields). Leave `soul.md` unless the
   user asked for changes. Set the `updated:` dates.
3. **MOC** — in `vault/MOC/MOC-Second-Brain.md`, write the one-line description and the reading arc;
   leave the Knowledge section to be filled as notes are created.
4. **Project tracker** — copy `vault/Projects/_TEMPLATE-project.md` → `vault/Projects/<Project-Name>.md`
   and fill it (source of method, open decisions, plan of attack). Link it from the MOC's "Active work".
5. **Sources** — confirm the source files are in `Input_Data/`. (If they're elsewhere and read-only,
   note the path in `CLAUDE.md` instead of copying.)
6. **Extract** — run the ingestion recipe (§6) to produce `vault/Knowledge/_source_text/*.txt`.
7. **Synthesize** — create one cross-linked Knowledge note per source (§6), grounded and cited.
   Register each under the MOC's Knowledge section with `[[wikilinks]]`.
8. **Seed the first Daily note** — copy `vault/Daily/_TEMPLATE-daily.md` → `vault/Daily/<today>.md`.
9. **Maintenance (if enabled)** — confirm `daily-brain-maintenance.ps1` resolves the vault path; help
   the user schedule it (Task Scheduler) if they want nightly runs.
10. **Close out** — run `/session-end` to record the activation session.

---

## 6. Ingestion recipe (proven pattern)

This is the pattern this template was built and tested on. Scale the agent fan-out to the corpus size.

1. **Extract (PDF → text)** with PyMuPDF (`fitz`) — one `.txt` per source under
   `vault/Knowledge/_source_text/` (use a subfolder if you have multiple tracks/sets):
   ```python
   import fitz, os, glob
   src = r"Input_Data"; out = r"vault/Knowledge/_source_text"
   os.makedirs(out, exist_ok=True)
   for p in sorted(glob.glob(os.path.join(src, "*.pdf"))):
       doc = fitz.open(p)
       text = "\n".join(page.get_text() for page in doc)
       open(os.path.join(out, os.path.splitext(os.path.basename(p))[0] + ".txt"), "w",
            encoding="utf-8").write(text)
   ```
   (DOCX → use `python-docx` or Pandoc; URLs → fetch then save text. `pdf-extract` skill is an
   optional alternative *if installed*.)
2. **Synthesize (one note per source), in parallel.** Spawn an agent per document that READS the full
   extracted text and WRITES a Knowledge note using the house template — sections: Summary · Key
   concepts · Frameworks & models · Case studies & evidence · Relevance · Open questions — plus YAML
   frontmatter (`type: knowledge`, `source:`, `part:`, `tags:`) and a `## Links` block
   (`[[MOC-Second-Brain]]`, Prev/Next). **Rule:** ground every claim in the source; preserve numbers
   and proper nouns exactly; invent nothing.
3. **Adversarially verify.** Pipeline each note through a second agent that fact-checks it against its
   source (numbers, framework names, cases) and fixes discrepancies in place. For larger corpora,
   run this as a `Workflow` (deep-read → verify) so each item verifies as soon as its synthesis lands.
4. **Register** every note in the MOC and set Prev/Next links to preserve any meaningful corpus order.

---

## 7. Rebuild / enhance the template

The scaffold is meant to evolve. To improve it:

- **Add folders** to `vault/` for new entity types; mirror the `_TEMPLATE-*` stub pattern.
- **Add skills** with the `skill-creator` skill (or hand-write `.claude/skills/<name>/SKILL.md` using
  `session-end` as a model: `name` / `description` / `trigger` frontmatter, then phased instructions).
- **Tune behavior** by editing `vault/soul.md` (the 8 rules) and `vault/identity.md` (the role).
- **Adjust maintenance** by editing `vault/_maintenance/nightly-consolidation-prompt.md` (keep it
  read-only / propose-only) or the script's schedule.

### Re-templatize (hand this project to another user)
To strip a finished engagement back to a clean template:
1. **Snapshot first** (zip the project) — deletion of sources is irreversible.
2. Delete `Input_Data/*`, `vault/Knowledge/*.md`, `vault/Knowledge/_source_text/*`,
   `vault/Daily/*` (keep `_TEMPLATE-daily.md`), the real `People/`/`Projects/` notes (keep `_TEMPLATE-*`),
   the project-specific MOC content, `_maintenance/changelists/*`, and truncate `maintenance.log`.
3. Reset the four tracking files and `identity.md`/`user.md` to placeholders (this file's stub state).
4. Reset the global auto-memory stubs.
5. Verify: grep the tree for the prior owner's name/domain → expect zero hits.

---

## 8. Post-activation checklist

- [ ] Tracking files contain the real goal/corpus/milestones (no `[INSERT]` left).
- [ ] `identity.md` and `user.md` filled; `updated:` dates set.
- [ ] MOC has a description + reading arc; Knowledge section lists the new notes.
- [ ] Every Knowledge note resolves its `[[links]]` (no dangling wikilinks).
- [ ] Sources extracted to `_source_text/`; notes grounded + cited; verify pass done.
- [ ] A `Projects/` tracker exists and is linked from the MOC.
- [ ] First Daily note created; `/session-end` run to log the activation session.
