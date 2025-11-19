# Claude Code Configuration

This file contains instructions for Claude Code development workflow.

## Workflow Structure

This repository uses **separate branches** for different AI assistants:

- **`claude-dev`** - Claude Code development branch (you are here)
- **`gemini-dev`** - Google Gemini 3.0 development branch
- **`main`** - Stable production branch

## Guidelines for Claude Code

1. **Branch**: Always work on `claude-dev` branch
2. **Commits**: Make clear, descriptive commits following conventional commits
3. **Files to preserve**: This file and any `.claude-*` config files
4. **Testing**: Run tests before pushing to ensure code quality

## Merging Strategy

- Work completed on `claude-dev` is merged to `main` via pull requests
- Coordinate with Gemini development to avoid conflicts
- Use PRs for code review before merging to main

## Important Notes

- Do NOT modify this file unless updating guidelines
- This file helps maintain separation between different AI tools
- Keep both branches updated with critical fixes from main
