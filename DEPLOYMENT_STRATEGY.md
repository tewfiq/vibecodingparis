# 🚀 Deployment Strategy - Vibe Coding Paris

## Overview

Two independent branches for flexible deployment management:
- **`production`** - Live deployment (what users see)
- **`staging`** - Testing & integration environment

Both branches can be independently updated based on work from `gemini-dev` or `claude-dev`.

---

## 🌿 Branch Architecture

```
github.com/tewfiq/vibecodingparis
├── production    ← Live deployment (activate this for users)
├── staging       ← Testing/preview (activate this for testing)
├── main          ← Development reference
├── claude-dev    ← Claude Code work
└── gemini-dev    ← Gemini 3.0 work
```

---

## 📋 Deployment Workflow

### Step 1: Work on Your Branch

**Claude Code:**
```bash
git checkout claude-dev
# Make changes
git add .
git commit -m "your changes"
git push origin claude-dev
```

**Gemini 3.0:**
```bash
git checkout gemini-dev
# Make changes
git add .
git commit -m "your changes"
git push origin gemini-dev
```

### Step 2: Choose Which Version to Deploy

**Option A: Deploy Gemini's version**
```bash
git checkout production
git reset --hard gemini-dev
git push -f origin production
```

**Option B: Deploy Claude's version**
```bash
git checkout production
git reset --hard claude-dev
git push -f origin production
```

**Option C: Deploy a merged/hybrid version**
```bash
git checkout production
# Manually merge changes from both branches
git push origin production
```

### Step 3: Keep Staging for Testing

```bash
git checkout staging
git reset --hard production  # Or any other branch
git push -f origin staging
```

---

## ⚙️ How to Switch Deployments

### Live Deployment (Production)

1. **Check current status:**
   ```bash
   git log --oneline production -5
   ```

2. **Deploy Gemini's latest:**
   ```bash
   git checkout production
   git reset --hard origin/gemini-dev
   git push -f origin production
   ```

3. **Deploy Claude's latest:**
   ```bash
   git checkout production
   git reset --hard origin/claude-dev
   git push -f origin production
   ```

4. **Deploy specific commit:**
   ```bash
   git checkout production
   git reset --hard <commit-hash>
   git push -f origin production
   ```

---

## 🔄 Common Scenarios

### Scenario 1: Both made changes, deploy the better one
```bash
# Check both
git diff claude-dev gemini-dev

# Deploy whichever is better
git checkout production
git reset --hard gemini-dev  # Or claude-dev
git push -f origin production
```

### Scenario 2: Merge best of both
```bash
git checkout production
git merge claude-dev
git merge gemini-dev
# Fix conflicts manually if needed
git push origin production
```

### Scenario 3: Revert to previous version
```bash
git checkout production
git reset --hard <previous-commit>
git push -f origin production
```

---

## 🛡️ Safety Rules

✅ **Always allowed:**
- `git reset --hard` on `production` or `staging`
- `git push -f` to update deployment branches
- `git merge` to combine changes

❌ **Never do:**
- Don't commit directly to `production` or `staging`
- Don't merge `main` into production (main is unstable)
- Don't push without `-f` flag on deployment branches

---

## 📊 Branch Responsibility

| Branch | Owner | Use Case |
|--------|-------|----------|
| `production` | Claude Code | **LIVE** - What users see |
| `staging` | Claude Code | Testing before production |
| `claude-dev` | Claude Code | Personal development |
| `gemini-dev` | Gemini 3.0 | Personal development |
| `main` | Reference | Git history (don't push) |

---

## 🚨 Emergency Deployment

If you need to deploy IMMEDIATELY:

```bash
# 1. Update production to working state
git checkout production
git reset --hard origin/gemini-dev  # or claude-dev or specific commit
git push -f origin production

# 2. Document what happened
# In DEPLOYMENT_LOG.md or comment
```

---

## 📝 Deployment Log

Track what's deployed:

```
## Nov 19, 2025 - 19:00
- Deployed: gemini-dev (SEO + Stripe links)
- Reason: Feature ready
- Status: ✅ Live

## Nov 19, 2025 - 18:30
- Deployed: claude-dev (COLLABORATION.md)
- Reason: Documentation update
- Status: ✅ Live
```

---

**Last Updated:** November 19, 2025
**Version:** 1.0

---

## Quick Reference

```bash
# See what's on each branch
git log --oneline origin/production -3
git log --oneline origin/staging -3
git log --oneline origin/claude-dev -3
git log --oneline origin/gemini-dev -3

# Deploy gemini version to production
git checkout production && git reset --hard origin/gemini-dev && git push -f origin production

# Deploy claude version to production
git checkout production && git reset --hard origin/claude-dev && git push -f origin production

# Check differences between branches
git diff origin/claude-dev origin/gemini-dev
```
