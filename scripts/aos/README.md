# aos — the Agentic OS kernel

Coded architecture foundation for the talabat Agentic OS (Track B Milestone 1, `DEC-012`).
Zero dependencies (Python 3.8+ stdlib). Design principle: **the repository is the database** —
all state derives live from the governing documents, so the kernel can never disagree with the
OS's own records, and every existing workflow keeps working unchanged (backward compatible by
construction).

| Blueprint concept | Implementation |
|---|---|
| Execution graph | `pipeline.stages()` — Parts A/B/C parsed from `Business_Plan_Generation_Pipeline.md` with live statuses |
| State manager | `pipeline.sections()` — section states from the active project tracker |
| Planner / Scheduler | `pipeline.plan()` — next runnable work items under the gate rules (Part C gated on 14/14 verified; Section 1 gated last) |
| Agent registry | `registry.agents()` — `.claude/agents/*.md` frontmatter |
| Skill registry | `registry.skills()` — `.claude/skills/*/SKILL.md` frontmatter |
| MCP registry | `registry.mcp_tools()` — `.mcp.json` + the live vault-mcp tool roster |
| Model router | `registry.model_router()` — per-agent `model:` routes under `LLM_Layer.md` policy |
| Workflow engine / executor | **Deliberately not coded** — execution stays with Claude Code sessions and the named agents, per the OS design; the kernel plans and observes |

## CLI

```bash
python3 scripts/aos/cli.py status   # sections + pipeline state
python3 scripts/aos/cli.py plan     # planner: what to run next, with owners
python3 scripts/aos/cli.py agents   # agent registry + model routes
python3 scripts/aos/cli.py skills   # skill registry
python3 scripts/aos/cli.py mcp      # MCP servers + tools
python3 scripts/aos/cli.py graph    # execution graph as mermaid
```

## Tests

```bash
python3 -m unittest discover -s tests   # 23 tests; CI runs these on every push
```
