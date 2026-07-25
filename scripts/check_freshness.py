#!/usr/bin/env python3
"""Repository freshness / staleness checks for the Agentic OS.

Codifies Pilot 4's standing convention (new Validation files must be linked from
MOC navigation; QA/Citation frontmatter must not go stale after addenda) plus the
console-snapshot freshness rule (CLAUDE.md). Run manually or from nightly
maintenance:

    python3 scripts/check_freshness.py        # human-readable report, exit 1 on findings
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
findings = []


def check_validation_moc_links():
    """Every vault/Validation note should be referenced somewhere in vault/MOC/."""
    moc_text = ""
    for f in (ROOT / "vault" / "MOC").glob("*.md"):
        moc_text += f.read_text(encoding="utf-8", errors="replace")
    for f in sorted((ROOT / "vault" / "Validation").glob("*.md")):
        if f.stem not in moc_text:
            findings.append(f"[MOC-LINK] vault/Validation/{f.name} is not linked from any MOC")


def check_stale_frontmatter():
    """A Validation note whose body contains an Addendum heading but whose
    frontmatter still carries a pre-addendum status/date is the Pilot-4 staleness
    class. Heuristic: addendum heading date > frontmatter date."""
    rx_fm_date = re.compile(r'^date:\s*"?(\d{4}-\d{2}-\d{2})', re.M)
    rx_addendum = re.compile(r"^#+\s*Addendum.*?(\d{4}-\d{2}-\d{2})", re.M | re.I)
    for f in sorted((ROOT / "vault" / "Validation").glob("*.md")):
        text = f.read_text(encoding="utf-8", errors="replace")
        fm = rx_fm_date.search(text[:600])
        ad = rx_addendum.findall(text)
        if fm and ad and max(ad) > fm.group(1):
            findings.append(f"[STALE-FM] vault/Validation/{f.name}: addendum {max(ad)} postdates frontmatter date {fm.group(1)}")


def check_console_snapshot():
    """Console data snapshot should not predate the governing documents."""
    data = ROOT / "app" / "agentic-os-console" / "src" / "js" / "data.js"
    if not data.exists():
        return
    governing = [
        ROOT / "Problem_Charter.md",
        ROOT / "PROJECT_PROGRESS.md",
        ROOT / "vault" / "Architecture" / "Business_Plan_Generation_Pipeline.md",
        ROOT / "vault" / "Projects" / "Talabat-Group-AI-Investment-Allocation-Business-Plan.md",
        ROOT / "vault" / "Decisions" / "Assumptions_Register.md",
    ]
    stale_vs = [g.name for g in governing if g.exists() and g.stat().st_mtime > data.stat().st_mtime]
    if stale_vs:
        findings.append(
            "[CONSOLE] app/agentic-os-console/src/js/data.js is older than: "
            + ", ".join(stale_vs)
            + " — run the console-data-refresh skill and bump CACHE in sw.js")


def main():
    check_validation_moc_links()
    check_stale_frontmatter()
    check_console_snapshot()
    if findings:
        print(f"{len(findings)} freshness finding(s):")
        for f in findings:
            print("  " + f)
        sys.exit(1)
    print("Freshness checks: all clear.")
    sys.exit(0)


if __name__ == "__main__":
    main()
