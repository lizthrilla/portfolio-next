# PRD: `.github/agents/README.md`

## 1. Introduction / Overview

All three custom agent files (`code-reviewer.md`, `security-auditor.md`, `test-engineer.md`) contain a broken link — `See [agents/README.md](README.md)` — that points to a file that doesn't exist. This PRD defines the content and structure of that missing file.

The README serves two purposes:
1. **For humans (developers and future contributors):** explains what the agents are, how to invoke them, and how to add new ones.
2. **For AI agents:** defines the composition model — specifically, which slash commands orchestrate which agents, and the rule that personas must not invoke each other directly.

---

## 2. Goals

- Resolve the broken link in all three agent files.
- Document the agent composition model clearly enough that a junior developer could add a new agent persona without breaking the design.
- Define the `/audit` slash command so it is no longer a "future" reference in `security-auditor.md`.
- Keep the file concise — sections with brief explanations, not a full guide.

---

## 3. User Stories

- **As a developer** using Copilot CLI on this repo, I want a single place to understand what agents exist and how to call them, so I don't have to read each agent file individually.
- **As a contributor** adding a new agent persona, I want to understand the composition rules so I wire it up correctly.
- **As an AI agent** reading this file via a slash command, I want clear rules about when I may invoke another persona (never directly) and which slash command is responsible for fan-out.

---

## 4. Functional Requirements

1. The file must exist at `.github/agents/README.md`.
2. The file must include a **Agents Overview** section that lists all three agents (`code-reviewer`, `security-auditor`, `test-engineer`) with a one-line description of each.
3. The file must include a **Slash Commands** section that maps each command to the agent(s) it invokes:
   - `/review` → `code-reviewer` (single-agent review)
   - `/test` → `test-engineer` (TDD workflow / coverage analysis)
   - `/ship` → fans out to `code-reviewer`, `security-auditor`, and `test-engineer` in parallel
   - `/audit` → `security-auditor` (dedicated security pass)
4. The file must include a **Composition Rules** section that explains:
   - Agent personas must **not** invoke each other directly.
   - If one agent's output warrants input from another agent, it surfaces that as a recommendation in its report — the user or a slash command acts on it.
   - Slash commands are the only valid orchestration layer.
5. The file must include an **Adding a New Agent** section explaining:
   - Where to create the file (`.github/agents/<name>.md`)
   - Required frontmatter fields (`name`, `description`)
   - How to register the agent with a slash command (or note that it can be invoked directly)
   - The composition rule the new agent must include
6. All content must be written in plain language — no jargon, understandable by a junior developer.

---

## 5. Non-Goals (Out of Scope)

- This file does **not** define the implementation of slash commands (e.g., no workflow YAML or prompt chaining logic).
- This file does **not** document every skill in `.github/skills/` — it covers agents only.
- This file does **not** replace or duplicate content already in the individual agent files.

---

## 6. Design Considerations

- Keep the file under ~80 lines. Sections should be scannable.
- Use a table for the slash command → agent mapping (easier to read than a bullet list).
- The "Composition Rules" section should mirror the language already used in each agent file's `## Composition` section to avoid contradiction.

---

## 7. Technical Considerations

- The file path must exactly match the relative link used in all three agent files: `README.md` (relative to `.github/agents/`), which resolves to `.github/agents/README.md`.
- No build step or tooling change is required — this is a pure documentation addition.
- After creating the file, verify the three broken links resolve correctly by checking that `README.md` exists in the same directory as the agent files.

---

## 8. Success Metrics

- All three agent files' `See [agents/README.md](README.md)` links resolve to a real file.
- A new contributor can read the README and correctly add a fourth agent persona without asking for help.
- The `/audit` command is fully defined (no "future" qualifier needed in `security-auditor.md`).

---

## 9. Open Questions

- Should `/audit` accept a scope argument (e.g., a file path or component name), or always audit the full diff? This PRD assumes full-diff scope for now.
- Are there plans for additional slash commands (e.g., `/plan`, `/debug`)? If so, a "Planned Commands" row in the table might be worth adding.

---

## Assumptions

- The four slash commands (`/review`, `/test`, `/ship`, `/audit`) are invoked via Copilot CLI's slash command interface — no separate configuration file is needed to register them for the purposes of this README.
- The `/audit` command will behave symmetrically to `/review` — same invocation pattern, scoped to `security-auditor` only.
