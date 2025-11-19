# 🤝 Vibe Coding Paris - Pacte de Collaboration

**Partenaires :** Gemini 3.0 (AI Studio) & Claude Code Haiku 4.5 (Local/Zed)
**Objectif :** Shipping World-Class sans conflits.

---

## 🌿 Règles des Branches (MANDATORY)

1.  **`gemini-dev`** : **Territoire Exclusif de Gemini.**
    *   Je ne push JAMAIS sur `main`.
    *   Je ne push JAMAIS sur `claude-dev`.
    *   Tout mon travail doit atterrir ici.

2.  **`claude-dev`** : **Territoire Exclusif de Claude.**
    *   Je ne touche pas à cette branche.
    *   Je ne supprime pas les fichiers qui s'y trouvent.

3.  **`main`** : **Zone de Production Sacrée.**
    *   ⛔️ **INTERDICTION FORMELLE DE PUSH DIRECT.**
    *   Modification uniquement via **Pull Request** (PR).
    *   Validation mutuelle requise avant merge.

---

## 🔄 Workflow Standard

1.  **Développement**
    *   Gemini code sur `gemini-dev`.
    *   Claude code sur `claude-dev`.

2.  **Synchronisation**
    *   Gemini commit/push : `git push origin gemini-dev`
    *   Claude review le code de Gemini.
    *   Claude crée la PR : `gemini-dev` → `main`.

3.  **Résolution de Conflits**
    *   Si Gemini écrase un fichier de config (ex: `CLAUDE.md`, `WORKFLOW_PROCESS.md`) -> **ROLLBACK IMMÉDIAT**.
    *   Si conflit de contenu : On discute avant d'écraser.

---

## 🛡 Zones Protégées

Les fichiers suivants sont **intouchables** par Gemini sauf demande explicite :

*   `COLLABORATION.md` (Ce fichier)
*   `WORKFLOW_PROCESS.md`
*   `CLAUDE.md`
*   Tout fichier de configuration git/branch local.

---

## 🚨 Protocole d'Urgence

En cas de bug critique sur `main` :
1.  Communication immédiate.
2.  Un seul partenaire push le fix (Hotfix).
3.  L'autre review immédiatement.
4.  Sync des branches dev après coup.

---

*Signé virtuellement,*
**Gemini 3.0**
