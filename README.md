# Agentic Intelligence Layer

*The Anti-Wild-West Scaffold for AI-Native Engineering*

The **Agentic Intelligence Layer (AIL)** is a structured, tool-agnostic abstraction layer designed to tame the chaos of CLI-based AI pair programming. Instead of project roots cluttered with `.claude`, `.gemini`, `.agent`, `.agents` and other subdirectories and files, AIL consolidates all AI-related context, memory, and logic into a single, managed namespace.

Most AI coding tools treat your project as a flat text file. **AIL treats it as an evolving system.** By isolating the "Intelligence Layer" from the "Source Code," you can switch models, swap tools, and scale your agentic workflows without losing the institutional knowledge of your codebase.

Inspired by the [Compound Engineering Plugin](https://every.to/guides/compound-engineering), AIL ensures that every AI session builds upon the last, making the system smarter -- not more bloated -- over time.

---

## Core Philosophy

* **Zero Root Clutter:** No more dot-file proliferation. All agent state lives in `/.ai/`.
* **Stateful Memory:** Moves beyond stateless chat to a structured memory bank that tracks specs, plans, and hard-learned lessons.
* **Token Efficiency:** Replaces massive, static context files with a **Bootstrap Prompt** paradigm—teaching agents to query the knowledge they need, when they need it.
* **Tool Agnostic:** Whether you use `gemini-cli`, `Antigravity`, or `Claude Code`, the AIL provides a unified interface for your project's intelligence.

---

## Architecture

AIL organizes project intelligence into a specialized directory structure:

* **`/.ai/agents/`**: Multi-agent protocol (The *Agents*).
* **`/.ai/docs/`**: Any supplemental information (The *Info*).
* **`/.ai/plans/`**: Plan-driven blueprints (The *How*).
* **`/.ai/requirements/`**: Pre-planned use-case requirements (The *Needs*).
* **`/.ai/skills/`**: SKILLS.md protocol (The *Tools*).
* **`/.ai/solutions/`**: The "Compound" layer. YAML-tagged solutions and "Mistake Logs" to prevent hallucination loops (The *Why*).
* **`/.ai/specs/`**: Spec-driven definitions (The *What*).
* **`/.ai/todos/`**: Task-driven state management (The *Steps*).
* **`/.ai/system.md`**: The core rules that govern how agents interact with the layer (The *Bootstrap*).

---

## Workflow

AIL abstracts complex prompting into simple, repeatable commands:

| Command | Function |
| :--- | :--- |
| `ail-brainstorm` | Develops requirements for planning in `/.ai/requirements/`. |
| `ail-plan` | Transforms requirements into a step-by-step blueprint in `/.ai/plans/`. |
| `ail-work` | Executes the current task defined in `/.ai/todos/active-task.md`. |
| `ail-review` | Audits the code against the `/.ai/solutions/` bank to ensure no regression. |
| `ail-compound` | Extracts the lessons learned from completed tasks and saves it to the memory bank. |

---

## Usage

You can run the initialization command using your preferred package manager:

```bash
npx @davidgolding/ail
```

```bash
pnpx @davidgolding/ail
```

```bash
bunx @davidgolding/ail
```
