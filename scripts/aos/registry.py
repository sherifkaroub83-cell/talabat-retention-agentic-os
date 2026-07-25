"""Registries: agents, skills, MCP tools, model router.

Authoritative sources are the existing repo artifacts — these registries parse,
never duplicate, so they cannot drift from what actually runs.
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]


def _frontmatter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8", errors="replace")
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    fm = {}
    if m:
        for line in m.group(1).splitlines():
            if ":" in line and not line.startswith(" "):
                k, _, v = line.partition(":")
                fm[k.strip()] = v.strip()
    return fm


def agents() -> list:
    """Agent registry from .claude/agents/*.md frontmatter."""
    out = []
    for f in sorted((ROOT / ".claude" / "agents").glob("*.md")):
        fm = _frontmatter(f)
        out.append({
            "id": fm.get("name", f.stem),
            "model": fm.get("model", "inherit"),
            "tools": [t.strip() for t in fm.get("tools", "").split(",") if t.strip()],
            "description": fm.get("description", "")[:160],
            "path": str(f.relative_to(ROOT)),
        })
    return out


def skills() -> list:
    """Skill registry from .claude/skills/*/SKILL.md frontmatter."""
    out = []
    for f in sorted((ROOT / ".claude" / "skills").glob("*/SKILL.md")):
        fm = _frontmatter(f)
        out.append({
            "id": fm.get("name", f.parent.name),
            "description": fm.get("description", "")[:160],
            "path": str(f.relative_to(ROOT)),
        })
    return out


def mcp_tools() -> list:
    """MCP registry: servers from .mcp.json + the vault-mcp tool roster."""
    out = []
    cfg_path = ROOT / ".mcp.json"
    if cfg_path.exists():
        cfg = json.loads(cfg_path.read_text())
        for server, spec in cfg.get("mcpServers", {}).items():
            entry = {"server": server, "command": " ".join([spec.get("command", "")] + spec.get("args", [])), "tools": []}
            if server == "vault-mcp":
                import importlib.util
                spec_ = importlib.util.spec_from_file_location(
                    "vault_mcp_server", ROOT / "scripts" / "vault_mcp" / "server.py")
                mod = importlib.util.module_from_spec(spec_)
                spec_.loader.exec_module(mod)
                entry["tools"] = list(mod.TOOLS.keys())
            out.append(entry)
    return out


def model_router() -> dict:
    """Model routing table per agent (LLM_Layer.md policy, read from frontmatter)."""
    table = {a["id"]: a["model"] for a in agents()}
    return {
        "policy": "vault/Architecture/LLM_Layer.md",
        "rule": "economize on scope, never on verification stages",
        "routes": table,
    }
