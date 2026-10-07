# The Prompt Manufaktur

Interactive prompting guide for AI-savvy professionals: Learn, Build, Explore, and **My Prompt Library**. Includes a long-form clickable PDF cheat sheet, expanded text/image/video/coding techniques, System Prompts, Prompt Tricks, and a curated tool directory.

## Public guide: GitHub Pages

Publish `index.html`, `styles.css`, `content.js`, `tools.js`, `app.js`, `library.js`, `site-config.js`, `assets/`, and `The-Prompt-Cheat-Sheet.pdf` from a GitHub Pages site. Keep these relative paths intact. No build step is required for the static guide. Use an HTTP server for local review; opening an HTML file directly is not a test of the authenticated backend.

Learn, Build, Explore, copy actions, search, filtering, and the PDF work without an AI API. Examples are curated; the builder assembles prompt text rather than generating model output.

### Publish the guide in GitHub Pages

1. Create a website repository and upload the public guide files listed above at its root, including the assets folder.
2. Open **Settings → Pages**. Under Build and deployment choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then Save.
4. Wait for the Pages deployment to finish and open the displayed website URL.
5. For private library access, complete the separate backend setup below and set the secure workspace URL in `site-config.js`. Publishing Pages alone does not activate authentication or private storage.

## Private library: authenticated Worker workspace

The separate **My Prompt Library** page section is linked from the header. Private content is visible only after GitHub sign-in. It stores prompts as Markdown in a fixed private GitHub repository and supports named prompts, medium, tags, previews, search, filters, favourites, sorting, viewing, copying, editing, duplication, and deletion. Builder drafts can be saved to this authenticated library.

The implementation is included, but **live sign-in and storage require your GitHub App, private repository, and Cloudflare configuration**. It fails closed while unconfigured. Follow [PRIVATE-LIBRARY-SETUP.md](PRIVATE-LIBRARY-SETUP.md) for the complete setup and validation process.

A Cloudflare Worker serves the same guide and the secure API on one origin. The public GitHub Pages copy links to this workspace through the public `secureLibraryOrigin` setting in `site-config.js`. No credentials belong in that file. GitHub tokens never enter frontend code or browser storage.

Sign-in opens a separate window in the secure workspace so your unsaved draft stays in page memory. Other navigation or reload still discards unsaved drafts. The public Pages link opens the secure workspace in a new tab, leaving an existing public-page draft available for copying. There is no JSON import/export or browser-local prompt repository in the normal workflow.

## Developer commands

```sh
npm install
npm run build
npm run deploy
```

`build` copies only public assets into `public/`; server code, configuration, and setup documentation are not served as static assets. Deployment requires completing the account settings and secrets first. Exclude `node_modules/`, `public/`, `.wrangler/`, `.dev.vars`, and `.env` from source control.

## Verification and limitations

Static interactions and responsive layout can be reviewed locally. Mocked backend tests validate authorization and CRUD behavior without accessing a real private repository. These do not replace a live end-to-end sign-in/storage test after deployment.

The library is a single-owner implementation with an allowlisted account, a fixed private repository, limited list size, and GitHub API rate limits. Markdown stores JSON-compatible front matter for metadata and an authoritative editable prompt body. Git history retains deleted revisions. See setup documentation for these operational details and session-revocation limitations.

Product/tool capabilities change. Follow the official source links in the guide. Original product logos and trademarks belong to their owners; see [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
