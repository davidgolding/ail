---
name: setup
description: Configure project-level settings for ail workflows. Currently a placeholder — review agent selection is handled automatically by ail-review.
---

# Agentic Intelligence Layer Setup

Project-level configuration for ail workflows.

## Current State

Review agent selection is handled automatically by the `ail-review` skill, which uses intelligent tiered selection based on diff content. No per-project configuration is needed for code reviews.

If this skill is invoked, inform the user:

> Review agent configuration is no longer needed — `ail-review` automatically selects the right reviewers based on your diff. Project-specific review context (e.g., "we serve 10k req/s" or "watch for N+1 queries") belongs in your project's .ai/system.md or .ai/system.md, where all agents already read it.

## Future Use

This skill is reserved for future project-level configuration needs beyond review agent selection.
