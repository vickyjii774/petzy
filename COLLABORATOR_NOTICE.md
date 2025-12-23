# Collaborator Notice — Repo History Rewritten

Action required: The repository history was rewritten to remove exposed secrets. Follow the steps below to get back into a safe synced state.

1. Backup any uncommitted or unpushed work (create patches, or `git stash`/`git branch` as needed).
2. Preferred: delete your local clone and re-clone the repo:

```bash
cd ..
rm -rf Petzy
git clone https://github.com/vickyjii774/Petzy.git
```

3. If you must preserve local branches with unpushed commits, follow these steps carefully (ask me for help if unfamiliar):

```bash
# Save refs as patches
git format-patch origin/main..HEAD
# Re-clone into a fresh folder
# Then apply patches in the new clone:
git am /path/to/0001-*.patch
```

4. After re-cloning, set your environment variables using the provided `backend/.env.example` and `frontend/.env.example`.

5. Verify services run locally:

```bash
# Backend
cd backend
cp .env.example .env
# edit .env with real secrets (local only)
npm install
npm run dev

# Frontend (in a separate terminal)
cd ../frontend
cp .env.example .env
npm install
npm run dev
```

If you need assistance preserving branches or migrating local work, reply here and I will guide you step-by-step.
