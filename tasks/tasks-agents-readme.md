## Relevant Files

- `.github/agents/README.md` - The new file being created; resolves the broken link in all three agent files.
- `.github/agents/security-auditor.md` - Needs the "any future `/audit` command" wording updated now that `/audit` is defined.
- `.github/agents/code-reviewer.md` - Contains broken link to `README.md`; verify it resolves after README is created.
- `.github/agents/test-engineer.md` - Contains broken link to `README.md`; verify it resolves after README is created.

### Notes

- This is a documentation-only change — no application code, no tests required.
- Verify links by confirming `.github/agents/README.md` exists in the same directory as the three agent files.
- No build or lint step is needed, but a quick `ls .github/agents/` confirms the file is in place.

## Instructions for Completing Tasks

**IMPORTANT:** As you complete each task, check it off by changing `- [ ]` to `- [x]`. Update after each sub-task, not just after the parent.

Example:
- `- [ ] 1.1 Read file` → `- [x] 1.1 Read file`

## Tasks

- [ ] 0.0 Create feature branch
  - [ ] 0.1 Create and checkout a new branch: `git checkout -b feature/agents-readme`

- [x] 1.0 Create `.github/agents/README.md`
  - [x] 1.1 Create the file at `.github/agents/README.md`
  - [x] 1.2 Add **Agents** table listing `code-reviewer`, `security-auditor`, and `test-engineer` with one-line descriptions
  - [x] 1.3 Add **Slash Commands** table mapping `/review`, `/test`, `/audit`, and `/ship` to their respective agents
  - [x] 1.4 Add **Composition Rules** section (no persona-to-persona invocation; slash commands are the only orchestration layer)
  - [x] 1.5 Add **Adding a New Agent** section with step-by-step instructions for future contributors

- [ ] 2.0 Clean up `security-auditor.md` forward-reference to `/audit`
  - [ ] 2.1 Open `.github/agents/security-auditor.md`
  - [ ] 2.2 Find the line: `or any future /audit command`
  - [ ] 2.3 Replace it with: `or /audit (dedicated security pass)` — removing the "any future" qualifier since `/audit` is now defined in `README.md`

- [ ] 3.0 Verify all broken links resolve correctly
  - [ ] 3.1 Run `ls .github/agents/` and confirm `README.md` is present alongside the three agent files
  - [ ] 3.2 Confirm the relative link `README.md` used in each agent file's `## Composition` section resolves to `.github/agents/README.md`
  - [ ] 3.3 Read through `README.md` and confirm the content matches what is described in each agent's `## Composition` section

- [ ] 4.0 Commit and push changes
  - [ ] 4.1 Stage all changes: `git add .github/agents/`
  - [ ] 4.2 Commit with a descriptive message:
        `git commit -m "docs: add .github/agents/README.md and define /audit command"`
  - [ ] 4.3 Push the branch: `git push -u origin feature/agents-readme`
  - [ ] 4.4 Open a pull request describing the change (resolves broken links, defines /audit)
