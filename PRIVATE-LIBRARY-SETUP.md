# Private GitHub prompt library

The public guide can remain on GitHub Pages. Private prompt storage requires a server: this package provides a Cloudflare Worker that serves the same website plus authenticated API routes. The Worker is the secure workspace; Pages links to it. There are no browser tokens, public prompt files, or localStorage prompt storage in this version.

**Deployment is not configured or live yet.** Until the account-specific settings below are supplied, the library fails closed. The public Learn, Build, and Explore guide works without the backend.

## 1. Create the private storage repository

Create an initialized **private** repository with a README. It can be a separate repository from the public website. Do not enable Pages or publish this storage repository. The Worker creates `prompts/<uuid>.md` on its default branch. Only the configured repository can be accessed; users cannot submit a repository or path in requests.

## 2. Register a GitHub App

Use GitHub Settings → Developer settings → GitHub Apps → New GitHub App.

- Homepage: your final Worker/custom-domain HTTPS origin.
- Callback URL: `https://YOUR-ORIGIN/auth/callback` (exact).
- Request user authorization during installation or allow the app user sign-in flow.
- Keep user access-token expiration enabled.
- Disable webhooks unless you separately need them.
- Repository permission: **Contents: Read and write**. Metadata read is implicit. No organization permissions are needed.
- Install the app **only on the private prompt repository**, for your account.
- Record the **Client ID** and create a **Client secret**. Do not use the App ID as Client ID.

This is a GitHub App user authorization flow, not an OAuth App with broad `repo` scope. The app installation and signed-in user's permissions intersect. The server additionally checks the exact allowed user and the private repository on every private operation.

## 3. Configure Cloudflare

Install Node.js and run `npm install` in this folder. Use `npx wrangler login` to authorize your Cloudflare account. Create storage:

```sh
npx wrangler kv namespace create SESSIONS
```

Put the resulting namespace ID in `wrangler.jsonc`. Replace all placeholder variables:

- `PUBLIC_ORIGIN`: final HTTPS origin without trailing slash.
- `ALLOWED_LOGIN`: your GitHub login.
- `ALLOWED_USER_ID`: your immutable numeric GitHub user ID, available from `https://api.github.com/users/YOUR_LOGIN`.
- `REPO_OWNER`, `REPO_NAME`: fixed private repository coordinates.

Store secrets via Wrangler, never in files:

```sh
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler secret put TOKEN_ENCRYPTION_KEY
```

For `TOKEN_ENCRYPTION_KEY`, generate 32 random bytes encoded as base64 with your password manager or `openssl rand -base64 32`. Preserve this secret securely. Rotating it invalidates existing sessions; users can sign in again.

Run `npm run deploy`. If you need the Worker URL before registering the app, deploy once without secrets (library returns configured=false), then set the exact origin/callback and secrets and redeploy. Do not put credentials in this repository, frontend configuration, Pages settings exposed to JavaScript, or chat.

## 4. Connect the public GitHub Pages guide

Set `secureLibraryOrigin` in `site-config.js` to your Worker/custom-domain HTTPS origin and upload the public guide files to GitHub Pages. This setting is a public URL, not a credential.

The header's **My Prompt Library** opens a locked explanation on Pages. **Open secure library** opens the secure workspace in a new tab so the public builder draft remains available. No draft or private prompt is placed in the URL. To save a public-page draft, copy it, open the secure workspace, sign in, and adapt/paste it in Build. For seamless daily saving, use the Worker-hosted version of the entire guide.

In the secure workspace, sign-in opens a separate window and the original draft stays in memory. Allow the sign-in popup; no draft is persisted to browser storage. There is no cross-origin authenticated API or browser token handoff.

## Behavior and security

- Sign-in uses state, PKCE S256, an HttpOnly flow cookie, server-side code exchange, and exact callback origin.
- Sessions are random identifiers in Secure, HttpOnly, SameSite=Lax cookies; tokens remain encrypted with AES-GCM in server-side KV. Sessions expire no later than eight hours or the GitHub access-token expiry.
- Every list/read/write validates the session and the fixed repository is still private. CRUD accepts only bounded UUID-like prompt IDs, never arbitrary paths.
- Writes and sign-out validate Origin and a session CSRF token. Private responses use `Cache-Control: no-store`.
- Updates/deletes require the GitHub blob SHA. Conflicts are reported instead of overwriting another edit. Refresh and reload before retrying; copy your draft first if needed.
- Prompt titles, medium, tags, fields, and favourites are committed as Markdown. Git history retains previous revisions, including deleted prompts. Never store credentials in prompts.
- Markdown uses a JSON object inside front matter for title, mode, tags, favourite, and date. The Markdown body is authoritative: edits made in GitHub appear when the library refreshes. Fields use adaptive-length fenced text blocks so nested Markdown headings and code survive round trips. Preserve the standard ## Role / Task / Context / Audience / Constraints / Format headings and their outer fences for structured builder fields, or replace the body with a free-form prompt (loaded into Task). A leading # title overrides the metadata title. Keep front matter valid JSON; malformed files are flagged.
- Up to 300 prompt files can be listed, in batches of eight GitHub reads. This deliberately simple Contents API design is suitable for a personal library, not a multi-user database. GitHub rate limits still apply.
- Invalid library files are flagged, not rendered as HTML. The public frontend contains no private content before successful authentication.
- Existing browser-local versions are not automatically imported or shown. They are not treated as private GitHub content.
- Cloudflare KV is eventually consistent. Very recent logouts or session changes may propagate with delay across locations. This is a personal single-owner deployment; use a strongly consistent session store for stricter revocation requirements.

## Validate before daily use

1. Signed-out `/api/prompts` must return 401 and no prompt data.
2. Sign in as the allowlisted owner and create a test prompt.
3. Confirm a Markdown file appeared only in the configured private repository.
4. Test edit, favourite, copy, duplicate, search, modality filter, and deletion.
5. Open two sessions, edit the same file, and confirm stale updates produce a conflict.
6. Sign out; private cards and loaded draft disappear and the API is inaccessible.
7. Try another GitHub account: authorization must be denied.
8. Keep the storage repository private; making it public intentionally causes API denial.

The included code is a deployable implementation, not evidence of a completed live OAuth setup. Live account verification must happen after your configuration is installed.
