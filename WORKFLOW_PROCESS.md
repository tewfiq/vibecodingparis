# 🔄 Workflow Process - Claude Code & Gemini 3.0

## Overview

This document establishes the collaborative workflow between **Claude Code** (localhost) and **Gemini 3.0** (Google AI Studio) to prevent conflicts and maintain clean code history.

---

## 🌿 Branch Structure

```
main (production)
  ├── claude-dev (Claude Code development)
  └── gemini-dev (Gemini 3.0 development)
```

| Branch | Owner | Usage | Rules |
|--------|-------|-------|-------|
| **main** | Production | Stable, merged code only | No direct commits. Use PR only. |
| **claude-dev** | Claude Code | Claude Code workspace | Push commits, manage PRs |
| **gemini-dev** | Gemini 3.0 | Gemini 3.0 workspace | Push commits, manage PRs |

---

## 📋 Commit Workflow

### For Gemini 3.0 (Google AI Studio)

```bash
# Step 1: Always check you're on the right branch
git branch
# Output should show: * gemini-dev

# Step 2: Make your changes and commit
git add .
git commit -m "your commit message"

# Step 3: Push to gemini-dev ONLY
git push origin gemini-dev
# ✅ CORRECT: Push to gemini-dev
# ❌ WRONG: git push origin main (direct push)
# ❌ WRONG: git push (defaults to potentially wrong branch)
```

### For Claude Code (localhost)

```bash
# Same process on claude-dev
git checkout claude-dev
git add .
git commit -m "your commit message"
git push origin claude-dev
```

---

## 🔀 Creating Pull Requests

**Only Claude Code manages PR creation** to ensure consistency:

```bash
# Claude Code creates PR when ready
git pull origin
git checkout main
gh pr create --base main --head gemini-dev --title "Feature/Fix description"
# or
gh pr create --base main --head claude-dev --title "Feature/Fix description"
```

---

## ⚠️ Important Rules

### DO ✅
- Always commit to **your assigned branch** (claude-dev or gemini-dev)
- Use `git push origin <branch-name>` to specify exact branch
- Create PRs for code review before merging to main
- Communicate before pushing major changes

### DON'T ❌
- ❌ Never push directly to `main`
- ❌ Never use `git push` without specifying the branch
- ❌ Never delete or modify the other's branch-specific files
- ❌ Never force push (`git push -f`) without explicit approval

---

## 📝 Incident: November 19, 2025

**What happened:**
Gemini 3.0 pushed directly to `main` instead of `gemini-dev`.

**Root cause:**
Unclear branch workflow expectations.

**Resolution:**
- ✅ Changes were valuable (content improvements)
- ✅ Kept the commit on `main`
- ✅ Documented process to prevent recurrence

**Lesson learned:**
Always verify branch before pushing:
```bash
git branch  # Check current branch
git push origin <your-branch-name>  # Explicit branch name
```

---

## 🛠️ Troubleshooting

### "How do I check my current branch?"
```bash
git branch
# Highlighted line is your current branch
```

### "I committed to the wrong branch, how do I fix it?"
Contact Claude Code. We can cherry-pick or revert.

### "What if I accidentally pushed to main?"
Tell Claude Code immediately. We can revert and re-apply to the correct branch.

---

## 📞 Communication

- **Gemini 3.0**: Use Google AI Studio messaging
- **Claude Code**: Available via Claude Code CLI
- **Emergency**: Revert immediately, communicate after

---

**Last Updated:** November 19, 2025
**Version:** 1.0
