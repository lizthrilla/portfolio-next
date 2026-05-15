# Agent Personas

This directory contains custom agent personas for GitHub Copilot CLI. Each persona is a focused specialist invoked directly or via a slash command.

## Agents

| Agent | Description |
|-------|-------------|
| `code-reviewer` | Senior code reviewer. Evaluates changes across correctness, readability, architecture, security, and performance. |
| `security-auditor` | Security engineer. Identifies vulnerabilities, assesses risk, and recommends mitigations. |
| `test-engineer` | QA engineer. Designs test suites, writes tests, and analyzes coverage gaps. |

## Slash Commands

Slash commands are the orchestration layer — they decide which agents to invoke and when.

| Command | Agents invoked | Purpose |
|---------|---------------|---------|
| `/review` | `code-reviewer` | Single-perspective code review of the current change |
| `/test` | `test-engineer` | TDD workflow or coverage gap analysis |
| `/audit` | `security-auditor` | Dedicated security pass; optionally scope to a file or directory |
| `/ship` | `code-reviewer`, `security-auditor`, `test-engineer` | Full pre-merge fan-out across all three agents in parallel |

## Composition Rules

1. **Personas do not invoke each other.** If `code-reviewer` surfaces something that warrants a deeper security pass, it notes that in its report — the user or a slash command decides whether to act on it.
2. **Slash commands are the only orchestration layer.** They fan out to multiple agents; agents do not chain themselves.
3. **Each agent owns its scope.** A persona should not reproduce another agent's output format or evaluation criteria.

## Adding a New Agent

1. Create `.github/agents/<name>.md` with frontmatter:
   ```yaml
   ---
   name: <name>
   description: <one-line description shown in the agent picker>
   ---
   ```
2. Write the persona body: role, evaluation framework, output format, and rules.
3. Add a `## Composition` section at the bottom that states:
   - When to invoke directly
   - Which slash command(s) include it
   - The "do not invoke from another persona" rule, with a link back to this file
4. If the agent should be part of `/ship` or another fan-out command, note that in your slash command's definition.
