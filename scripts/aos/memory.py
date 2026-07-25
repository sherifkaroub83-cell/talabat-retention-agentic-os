"""Memory layer: hybrid retrieval, knowledge graph, context manager.

Track B Milestone 2 (Phase 2 of DEC-012's implementation order). Zero
dependencies; the vault is the store. Three capabilities:

- Retrieval: BM25-ranked lexical search over every vault note, with metadata
  (frontmatter) filters and citation-bearing snippets — a ranked upgrade over
  grep, not a replacement for the evidence rules (results are pointers into the
  governed tiers, never a new tier).
- Knowledge graph: the [[wikilink]] graph parsed live — neighbors, related
  (2-hop), orphan detection.
- Context manager: given a topic, assemble the bounded context set an agent
  needs — top-k retrieval + graph neighborhood + governing decisions.
"""

import math
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
VAULT = ROOT / "vault"

_WORD = re.compile(r"[a-z0-9][a-z0-9\-\.%$]{1,}")
_LINK = re.compile(r"\[\[([^\]|#]+)")
_STOP = frozenset(
    "the a an and or of to in for on with is are was were be been this that as at by from "
    "it its not no if but their there which who what when how all any each per over under".split())


def _tokens(text: str):
    return [t for t in _WORD.findall(text.lower()) if t not in _STOP]


def _frontmatter_and_body(text: str):
    m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    fm = {}
    if m:
        for line in m.group(1).splitlines():
            if ":" in line and not line.startswith(" "):
                k, _, v = line.partition(":")
                fm[k.strip()] = v.strip().strip('"')
    return fm, text[m.end():] if m else text


class VaultIndex:
    """BM25 index + wikilink graph over the vault, built on first use."""

    _instance = None

    def __init__(self):
        self.docs = {}       # rel_path -> {tokens Counter, length, fm, title, text}
        self.df = Counter()  # token -> doc frequency
        self.links = {}      # note title (stem) -> set of linked titles
        self.titles = {}     # lowercase stem -> rel_path
        for f in sorted(VAULT.rglob("*.md")):
            rel = str(f.relative_to(ROOT))
            try:
                text = f.read_text(encoding="utf-8", errors="replace")
            except OSError:
                continue
            fm, body = _frontmatter_and_body(text)
            toks = Counter(_tokens(f.stem) * 3 + _tokens(body))  # title terms weighted
            self.docs[rel] = {"tokens": toks, "length": sum(toks.values()),
                              "fm": fm, "title": f.stem, "text": body}
            for t in set(toks):
                self.df[t] += 1
            self.links[f.stem] = set(_LINK.findall(body))
            self.titles[f.stem.lower()] = rel
        self.N = len(self.docs)
        self.avgdl = (sum(d["length"] for d in self.docs.values()) / self.N) if self.N else 1

    @classmethod
    def get(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance

    # ---------------- retrieval ----------------

    def search(self, query: str, k: int = 8, type_filter: str = None, path_filter: str = None):
        """BM25 (k1=1.5, b=0.75) with optional frontmatter-type / path filters."""
        q = _tokens(query)
        scores = {}
        for rel, d in self.docs.items():
            if type_filter and d["fm"].get("type") != type_filter:
                continue
            if path_filter and path_filter not in rel:
                continue
            s = 0.0
            for t in q:
                tf = d["tokens"].get(t, 0)
                if not tf:
                    continue
                idf = math.log(1 + (self.N - self.df[t] + 0.5) / (self.df[t] + 0.5))
                s += idf * (tf * 2.5) / (tf + 1.5 * (0.25 + 0.75 * d["length"] / self.avgdl))
            if s > 0:
                scores[rel] = s
        out = []
        rx = re.compile("|".join(re.escape(t) for t in q), re.I) if q else None
        for rel, s in sorted(scores.items(), key=lambda kv: -kv[1])[:k]:
            snippet = ""
            if rx:
                for line in self.docs[rel]["text"].splitlines():
                    if rx.search(line):
                        snippet = line.strip()[:200]
                        break
            out.append({"path": rel, "score": round(s, 2),
                        "type": self.docs[rel]["fm"].get("type", ""), "snippet": snippet})
        return out

    # ---------------- knowledge graph ----------------

    def neighbors(self, title: str):
        """Outbound links + inbound backlinks for a note title (case-insensitive)."""
        rel = self.titles.get(title.lower())
        if not rel:
            matches = [t for t in self.titles if title.lower() in t]
            return {"error": f"no note titled '{title}'", "did_you_mean": sorted(matches)[:8]}
        stem = self.docs[rel]["title"]
        out = sorted(self.links.get(stem, set()))
        backlinks = sorted(s for s, ls in self.links.items() if stem in ls)
        return {"note": rel, "links_out": out, "backlinks": backlinks}

    def related(self, title: str, k: int = 12):
        """2-hop neighborhood, ranked by connection count."""
        n1 = self.neighbors(title)
        if "error" in n1:
            return n1
        hop1 = set(n1["links_out"]) | set(n1["backlinks"])
        counts = Counter()
        for h in hop1:
            for x in self.links.get(h, set()):
                if x.lower() != title.lower() and x not in hop1:
                    counts[x] += 1
        return {"note": n1["note"], "hop1": sorted(hop1),
                "hop2_ranked": [t for t, _ in counts.most_common(k)]}

    def orphans(self, scope: str = "vault/Knowledge"):
        """Notes in scope with no inbound wikilink from anywhere in the vault."""
        linked = set()
        for ls in self.links.values():
            linked |= {l.strip() for l in ls}
        return [rel for rel, d in self.docs.items()
                if rel.startswith(scope) and d["title"] not in linked
                and not d["title"].startswith("_")]


# ---------------- context manager ----------------

def context(topic: str, k: int = 6):
    """Bounded context set for a task: ranked notes + graph neighborhood +
    governing decisions. Returns pointers (paths), never bulk content — the
    consuming agent reads what it needs under the normal evidence rules."""
    ix = VaultIndex.get()
    hits = ix.search(topic, k=k)
    graph = {}
    if hits:
        top_title = Path(hits[0]["path"]).stem
        n = ix.neighbors(top_title)
        if "error" not in n:
            graph = {"anchor": n["note"],
                     "linked": (n["links_out"] + n["backlinks"])[:12]}
    decisions = ix.search(topic, k=4, path_filter="Decisions/Decision_Log")
    return {
        "topic": topic,
        "notes": hits,
        "graph": graph,
        "decisions": [d["path"] for d in decisions],
        "rule": "Pointers only — cite through the note to (DocID, page) or an Approved ASM.",
    }
