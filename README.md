# Agentic Intelligence Layer (AIL)

*The Standard Operating System for AI-Native Engineering*

The **Agentic Intelligence Layer (AIL)** is a structured, tool-agnostic abstraction layer designed to tame the chaos of CLI-based AI pair programming. Instead of project roots cluttered with `.claude`, `.gemini`, `.agent`, `.agents` and other subdirectories, AIL consolidates all AI-related context, memory, and logic into a single, managed namespace: `/.ai/`.

Most AI coding tools treat your project as a flat text file. **AIL treats it as an evolving system.** By isolating the "Intelligence Layer" from the "Source Code," you can switch models, swap tools, and scale your agentic workflows without losing the institutional knowledge of your codebase.

---

## Core Philosophy

*   **Zero Root Clutter:** No more dot-file proliferation. All agent state lives in `/.ai/`.
*   **Stateful Memory:** Moves beyond stateless chat to a structured memory bank that tracks specs, plans, and hard-learned lessons.
*   **Token Efficiency:** Replaces massive, static context files with a **Bootstrap Prompt** paradigm—teaching agents to query the knowledge they need, when they need it.
*   **Tool Agnostic:** Whether you use `gemini-cli`, `Antigravity`, or `Claude Code`, the AIL provides a unified interface for your project's intelligence.

---

## Directory Architecture

AIL organizes project intelligence into a specialized directory structure:

| Directory | Name | Purpose |
| :--- | :--- | :--- |
| `/.ai/agents/` | **The Personas** | Specialized agent protocols (Research, Review, Design, etc.). |
| `/.ai/skills/` | **The Tools** | Atomic, repeatable commands for high-level workflows. |
| `/.ai/solutions/` | **The Why** | YAML-tagged lessons and "Mistake Logs" to prevent hallucination loops. |
| `/.ai/plans/` | **The How** | Step-by-step implementation blueprints. |
| `/.ai/specs/` | **The What** | Technical definitions and architectural constraints. |
| `/.ai/requirements/` | **The Needs** | Brainstormed feature requirements and use cases. |
| `/.ai/todos/` | **The Steps** | Durable task tracking across sessions. |
| `/.ai/docs/` | **The Info** | Supplemental project context and references. |
| `/.ai/system.md` | **The Bootstrap** | The core rules that govern how agents interact with the layer. |

---

## The AIL Workflow

AIL transforms complex prompting into a repeatable engineering lifecycle:

1.  **`ail-brainstorm`**: Develops requirements and edge cases in `/.ai/requirements/`.
2.  **`ail-plan`**: Transforms requirements into a step-by-step blueprint in `/.ai/plans/`.
3.  **`ail-work`**: Executes tasks defined in the plan, tracking progress in `/.ai/todos/`.
4.  **`ail-review`**: Audits implementation against `/.ai/solutions/` to ensure no regression.
5.  **`ail-compound`**: Extracts lessons learned and saves them to the `/.ai/solutions/` memory bank.

---

## Extensive Feature Catalog

### Specialized Agent Personas (`/.ai/agents/`)
AIL includes a library of specialized personas that can be invoked for specific tasks:
*   **Research**: `learnings-researcher` (checks solutions), `repo-research-analyst`, `git-history-analyzer`.
*   **Review**: `architecture-strategist`, `security-sentinel`, `performance-oracle`, `project-standards-reviewer`.
*   **Design**: `figma-design-sync`, `design-iterator`, `design-implementation-reviewer`.
*   **Workflow**: `bug-reproduction-validator`, `spec-flow-analyzer`, `pr-comment-resolver`.

### Power Skills (`/.ai/skills/`)
Atomic capabilities that extend the agent's power:
*   **`agent-browser`**: Full browser automation for testing and screenshot capture.
*   **`git-worktree`**: Management of isolated worktrees for parallel development.
*   **`todo-create` / `todo-resolve`**: Lifecycle management of durable task files.
*   **`gemini-imagegen`**: Multi-turn image generation and editing via Gemini API.
*   **`resolve-pr-feedback`**: Automated thread resolution on GitHub PRs.

---

## Guidance for AI Pair Programmers

If you are an AI agent working in an AIL-enabled repository, follow these protocols:

### 1. Boot from `system.md`
Your first action should always be to read `/.ai/system.md`. This file contains the "Standard Operating Procedures" for the project. It teaches you how to use the AIL tools and where to find critical information.

### 2. Check the Memory Bank First
Before implementing a feature or fixing a bug, use the `learnings-researcher` agent (or grep `/.ai/solutions/`) to see if a similar problem has been solved or if there are known "gotchas" in the codebase. **Do not repeat mistakes that have already been documented.**

### 3. Maintain Durable State
Do not keep your plan or task list only in your chat context. If a task takes more than 5 minutes, it should be a file in `/.ai/todos/`. If you are planning a feature, it must be a document in `/.ai/plans/`. This ensures that if the session resets or another agent takes over, the state is preserved.

### 4. Be Atomic and Verifiable
Use the `ail-work` workflow. Complete one implementation unit, run the tests, and verify it against the plan before moving to the next unit. Use `ail-review` to self-audit your work.

### 5. Leave a Legacy
After finishing a task, always run `ail-compound`. If you discovered a non-obvious bug, learned a new pattern, or realized a specific configuration was tricky, document it in `/.ai/solutions/`. You are building the project's institutional memory.

---

## Installation & Initialization

You can initialize AIL in any project using your preferred package manager:

```bash
npx @davidgolding/ail
# OR
pnpx @davidgolding/ail
# OR
bunx @davidgolding/ail
```

This creates the `/.ai/` directory and populates it with the core bootstrap, agents, and skills.
