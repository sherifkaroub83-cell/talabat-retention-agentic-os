---
name: session-end
description: End-of-session wrap-up for ProjectX — updates project memory (MEMORY.md), PROJECT_PROGRESS.md, SESSION_LOG.md, and the Second Brain vault (if anything changed). Stays inside the project folder; writes nothing outside it. Trigger at the end of a working session or when the user says "wrap up", "end session", "/session-end".
trigger: /session-end
---

# /session-end

Close out a working session cleanly. Reconcile everything that happened this session into the
project's durable records so the **next** session starts with accurate context. Idempotent: if a
record is already current, leave it. Never invent activity — only write what actually happened.

## Usage

```
/session-end                 # full wrap-up: review the session, then update all records below
/session-end --dry-run       # show what WOULD change; write nothing
/session-end "<focus note>"  # seed the session focus line with a one-liner from the user
```

## What it touches

| Target | Path | Action |
|--------|------|--------|
| Project memory | `MEMORY.md` | Append durable decisions + a one-line session summary |
| Progress snapshot | `PROJECT_PROGRESS.md` | Move milestone statuses; update header + current focus + blockers |
| Session log | `SESSION_LOG.md` | Prepend a new `## Session N` entry (newest on top) |
| Second Brain | `vault/` | Update only if vault content actually changed this session |

## Procedure

Work the phases in order. Each phase reads the current file before writing so you don't clobber
hand edits.

### Phase 0 — Gather the session facts

Before touching any file, reconstruct what this session actually did from the conversation:

- **Done** — concrete changes: files created/edited, extractions run, agents spawned, decisions made.
- **Decisions** — durable choices that should outlive this session (scope, conventions, tool picks).
- **Next** — the obvious next actions, including any new blockers or open questions.
- **Focus** — a one-line summary of the session's theme (use the `"<focus note>"` arg if given).

Determine the **session number**: read the top entry of `SESSION_LOG.md`, increment. Use today's
date from the environment (`currentDate`). If `--dry-run`, print the gathered facts and the planned
diffs for every file, then stop.

### Phase 1 — SESSION_LOG.md

Prepend a new entry directly under the `---` separator that follows the file header (newest on top),
matching the existing template exactly:

```markdown
## Session N — YYYY-MM-DD

**Focus:** <one line>

**Done:**
- <concrete change>

**Decisions:**
- <durable choice, or "None">

**Next:**
- <next action>

---
```

Keep it short — what was done, what changed, what's next. Do not duplicate prose already in older entries.

### Phase 2 — PROJECT_PROGRESS.md

- Update **Last updated** to `YYYY-MM-DD (Session N)` and the **Overall status** line if it changed.
- In the **Milestones** table, move any status that advanced (`⬜ → 🟡 → ✅`, or `🔴` if blocked) and
  refresh its Notes cell. Only change rows that actually moved.
- Refresh **Current focus**, **Blockers / open questions**, and **Artifacts produced** to match reality.
- Legend: ✅ Done · 🟡 In progress · ⬜ Not started · 🔴 Blocked.

### Phase 3 — MEMORY.md (project memory)

- Under **Decisions log**, append any durable decision from Phase 0 (replace the `_(none yet)_`
  placeholder when first used). One bullet each, dated.
- Under **Session log**, append a one-line summary: `- Session N (YYYY-MM-DD): <focus / key outcome>`.
- If a standing instruction, corpus fact, or convention genuinely changed, update the relevant
  section too. Don't restate things already captured.

### Phase 4 — Second Brain vault (only if it changed)

Skip entirely unless vault content was created or edited this session. When it did change:

- **Daily note** `vault/Daily/YYYY-MM-DD.md` — create from the day's activity if missing, else append
  a session bullet. Cross-link with `[[wikilinks]]` to the notes touched.
- **Projects / Knowledge / People / Decisions** — update the specific notes that the session affected
  (e.g. the relevant `vault/Projects/<Project>.md` when scope moves). Preserve existing
  cross-links; add new ones for new connections.
- Leave `identity.md`, `soul.md`, `user.md` alone unless the user explicitly changed identity facts.
- If a vault maintenance routine exists (`vault/_maintenance/`), do not run it here — that's its own job.

### Phase 5 — Confirm

Report a short summary of exactly which files changed (and which were left untouched and why). If
`--dry-run`, no files were written — say so.

## Anti-patterns

- ❌ Inventing progress, decisions, or artifacts that didn't happen this session.
- ❌ Overwriting hand edits — always read-then-merge; never blind-write a whole file.
- ❌ Writing anything outside the project folder — this skill stays inside `ProjectX/`.
- ❌ Touching the vault when nothing in it changed, or editing identity files unprompted.
- ❌ Modifying `Input_Data/` — it is read-only source material.
- ❌ Duplicating the same fact across MEMORY.md, PROJECT_PROGRESS.md, and the log — pick the right home.
