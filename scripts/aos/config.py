"""Kernel configuration. Small, explicit, versioned with the repo."""

# Maximum verification/fix agents to run concurrently in one wave.
# Lesson from 2026-07-24/25 production runs: 8 concurrent heavy agents
# repeatedly tripped the session usage limit mid-wave (recovered via
# resume-from-transcript, but at coordination cost). 4 stayed under it.
MAX_CONCURRENT_AGENTS = 4

# Pause between waves is decided by the operator; the kernel only plans.
