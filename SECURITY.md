# Security & Credential Rotation (Petzy)

This document explains how to rotate exposed credentials, update deployed environment variables, and notify collaborators after a repository cleanup.

Important: If you've found that credentials were committed to this repository, rotate them immediately and follow these steps.

---

## 1) Rotate database credentials (MongoDB Atlas)

1. Log in to MongoDB Atlas.
2. Go to **Database Access** → **Database Users**.
3. Create a new database user (e.g., `petzy_db_user_new`) with a strong password (store safely).
4. Update any IP access lists if needed.
5. Test the new user locally by updating your local `.env`:

```
MONGO_URI="mongodb+srv://petzy_db_user_new:NEW_PASSWORD@<cluster-url>/c_project?retryWrites=true&w=majority"
```

6. Once you've verified the new user works, **delete** or **revoke** the old user that was exposed.

---

## 2) Rotate other secrets (JWT, API keys)

- Replace `JWT_SECRET` with a new strong random value.
- If any third-party API keys were exposed (e.g., payment or platform keys), rotate them from the provider's dashboard.

---

## 3) Update deployed environment variables (Hosting providers)

Examples:

- **Vercel**: Project → Settings → Environment Variables → Add `MONGO_URI` and `JWT_SECRET` and set values for Production/Preview/Development. Trigger a redeploy.
- **Render** / **Heroku** / **Fly**: Project Settings → Environment Variables (Config Vars) → Update values → Redeploy.

After updating, verify your deployment can connect to the DB and auth works.

---

## 4) Verify removal from repository history

- Check that the secret no longer appears in tracked files. The repository history has been cleaned in a recent branch/PR — verify with grep:

```bash
grep -R "aashishrimal|Test12345|MONGO_URI" -n || true
```

- Keep any backup bundles secure (e.g., `petzy-backup.bundle`) or delete them when no longer needed.

---

## 5) Notify collaborators (template)

Use the template below to inform collaborators that the repo history was rewritten and credentials were rotated:

```
Subject: Action required — repository credential rotation & history rewrite (Petzy)

Hi team,

We discovered that a secret (MongoDB URI) was accidentally committed. I have:

1. Rotated the credentials (created new DB user and secret).
2. Removed the sensitive files from the repository history and force-pushed the cleaned history.
3. Added `backend/.env.example` / `frontend/.env.example` placeholders and updated code to use env variables.

What you need to do:

- Re-clone the repository fresh: `git clone <repo-url>` (recommended).
- If you have unpushed local work, stash or create patches; otherwise re-clone.
- Update your local environment with the new secrets (received separately) and test.

If you need help preserving local branches, I can provide specific recovery steps.

Thanks,
[Your Name]
```

---

## 6) Post-cleanup checklist

- [ ] Rotate DB user and delete old user
- [ ] Rotate JWT_SECRET and any API keys
- [ ] Update deployed env vars and redeploy
- [ ] Notify collaborators and request repo re-clone
- [ ] Verify no secrets remain in tracked files

---

If you'd like, I can help create the new DB user (provide exact provider), prepare the collaborator message, and verify your deployment after you update the secrets.
