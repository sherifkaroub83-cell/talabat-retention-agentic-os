"""aos — the talabat Agentic OS kernel (Milestone 1, DEC-012 scoped Track B).

Zero-dependency Python package giving the OS a coded architecture foundation:

- pipeline: execution graph, state manager, planner/scheduler over the 19-stage
  Business Plan Generation Pipeline (state derives from the governing documents —
  the repository IS the database, by design).
- registry: agent / skill / MCP-tool / model-router registries parsed from their
  authoritative homes (.claude/agents, .claude/skills, .mcp.json + vault-mcp,
  agent model frontmatter per vault/Architecture/LLM_Layer.md).

CLI: python3 -m scripts.aos.cli --help   (or scripts/aos/cli.py)
"""

__version__ = "0.1.0"
