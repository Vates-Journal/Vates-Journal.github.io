# VATES — The Journal of New Latin Poetry (static site)

A fast, plain-HTML/CSS rebuild of the old WordPress blog <https://vatesblog.wordpress.com/>.
No framework, no build step, no cookies, no analytics, no external requests (fonts are self-hosted).
Works on GitHub Pages, Cloudflare Pages, Netlify, or any static host. **Nothing has been deployed.**

## Layout

```
index.html                 Home (mission, "read the latest issue", sample poem "Plato Mi", news)
issues.html                Issues archive (cards drawn from js/issues-data.js)
writing-latin-verse.html   Download of Mark Walker's introductory notes (PDF) + reading guide to hints/articles inside the issue PDFs
anthology.html             The Vates Anthology of New Latin Poetry (cover, description, PDF download, contents)
contribute.html            Who can contribute / how to submit
about.html                 About, history, an invitation to contribute, image credit
contact.html               Contact & follow (Facebook group, Twitter, editor)
signpost.html              NOT part of the site — text to paste into the old WordPress blog
404.html                   Not-found page
css/style.css, css/fonts.css, fonts/   Styles + self-hosted Cormorant Garamond & Source Serif 4 (SIL OFL)
js/issues-data.js          ← the list of issues (one line each)
js/site.js                 Tiny script that draws the issue cards and "latest issue" buttons
issues/                    The PDFs: vates-issue-01.pdf … vates-issue-15.pdf
anthology/                 vates-anthology.pdf (195 pages, 1.7 MB)
guides/                    classical-latin-poetry-notes.pdf (62 pages, 1.0 MB)
img/                       Header painting (resized) + og image + anthology-cover.jpg
previews/                  Screenshots from local testing (excluded from git)
old-content/               Full capture of the old site (+ manifest.md). Kept locally only — excluded from git by .gitignore.
```

## Adding a new issue (one-line edit)

1. Save the PDF as `issues/vates-issue-NN.pdf` — two digits, e.g. `issues/vates-issue-16.pdf`.
2. Open `js/issues-data.js`. There is a clearly marked **placeholder line for Issue 16** at the top of the list. Replace it with:

   ```js
   { n: 16, when: "Summer 2026", pages: 64, ed: DM, pdf: "vates-issue-16.pdf" },
   ```
   (`ed: DM` = Dr David Money, `ed: MW` = Mark Walker; `note: "…"` is optional; `pages` may be `null`.)
3. Add a fresh placeholder line above it for the *next* issue if you want one (`pdf: null` shows a dashed "PDF to be added" card), or leave it out.

That's all: the issues page sorts by number, marks the highest-numbered issue with a PDF as **Latest**, and every "Read the latest issue" button on the site follows it automatically.
Optional: the no-JavaScript fallback list in `issues.html` (inside `<noscript>`) and the static `href` on the home-page buttons point at issue 15; add the new file there too if you care about visitors without JavaScript.

## Anthology page and guide PDF

- `anthology.html` is a hand-written page (no JS). Everything on it comes from the anthology PDF: description from the editor's Introduction, "First published 2015", ISBN 978-0-9547473-4-3, the copyright line ("All texts and translations remain copyright of the respective authors") and the Contents (each entry deep-links to its PDF page). To replace the PDF, overwrite `anthology/vates-anthology.pdf` and update the page count/size on the page (and the `#page=` numbers if the contents change).
- `writing-latin-verse.html` opens with a download panel for `guides/classical-latin-poetry-notes.pdf` (62 pages); its topic list is taken from the PDF's own headings. The home page links to it from the "Find an issue" panel and shows a small Anthology panel above the final banner.
- "Anthology" is in the main navigation and footer ("Explore") of every page except `signpost.html` (which is not part of the site).

## Home-page sample poem

The home page shows Mark Walker's *Plato Mi* (Latin and English "Dear Plato", with his note, "Metre: Hendecasyllables", two footnotes and a credit linking to the Anthology page), copied verbatim from p. 164 of the Anthology PDF. It lives in the `#sample` section of `index.html` (styles: `.poem-*` in `css/style.css`). To change it, replace the `<article class="poem-frame">` block.

## Preview locally

```
cd /workspace/vates-site && python3 -m http.server 8765      # then open http://localhost:8765/
```

## Placeholders still to fill (all visibly marked on the pages with a dashed red box)

- Issues: the "Issue 16" placeholder card.
- Contact: confirm the public contact route and any other social accounts.
- `signpost.html`: `https://NEW-ADDRESS-TO-BE-CONFIRMED/` (appears twice in the paste-ready HTML, plus the plain-text version).
- After the real domain is known: optionally add `<link rel="canonical">`, an absolute `og:image` URL and a `sitemap.xml`.

## Deploying (free hosting) — nothing has been pushed or deployed yet

The folder is already a git repository with one commit (`.gitignore` excludes `old-content/` and `previews/`). It is a pure static site: **no build step, publish the root folder**. All links are relative, so it works at any path.

### Option A — GitHub Pages

1. Sign in at <https://github.com> and click **New repository**. Name it (e.g. `vates`), choose **Public** (free Pages needs a public repo on a free account), and do **not** add a README, .gitignore or licence. Click **Create repository**.
2. In a terminal:
   ```
   cd /workspace/vates-site
   git branch -M main
   git remote add origin https://github.com/YOUR-USER/vates.git
   git push -u origin main
   ```
3. In the repo go to **Settings → Pages**. Under **Build and deployment → Source** choose **Deploy from a branch**; set **Branch** `main`, folder **`/ (root)`**; click **Save**.
4. Wait 1–2 minutes (see the **Actions** tab). The site appears at `https://YOUR-USER.github.io/vates/`.
5. Note: `404.html` works as the not-found page. Its links are relative, so on a project URL (`/vates/`) it may show unstyled for deep bad paths; this disappears with a custom domain or a user site named `YOUR-USER.github.io`.
6. Custom domain (later): Settings → Pages → **Custom domain** → enter it → Save (this creates a `CNAME` file in the repo), add the DNS records GitHub lists at your registrar, then tick **Enforce HTTPS**.

### Option B — Cloudflare Pages

1. Push the repo to GitHub first (steps 1–2 above; the repo can be private), or use Direct Upload (see the note below).
2. Sign in at <https://dash.cloudflare.com> (free account) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**. Authorise Cloudflare to read the repo and select it → **Begin setup**.
3. Settings: **Production branch** `main`; **Framework preset** `None`; **Build command** — leave empty; **Build output directory** `/` (or leave blank; if the field rejects `/`, use `.`); **Root directory** — leave blank. Click **Save and Deploy**.
4. In about a minute the site is live at `https://PROJECT-NAME.pages.dev/`. Every later `git push` to `main` redeploys automatically.
5. Custom domain (later): project → **Custom domains** → **Set up a custom domain** → follow the DNS prompts.
6. Direct Upload alternative (no GitHub): **Create → Pages → Upload assets**, name the project, drag in the contents of this folder (without `old-content/` and `previews/`), and **Deploy**. Single files must be under 25 MB; the largest PDF here is well below that.

### After the real address is known

- Replace `https://NEW-ADDRESS-TO-BE-CONFIRMED/` in `signpost.html` (it appears twice in the paste-ready HTML, plus the plain-text version).
- Optionally add `<link rel="canonical">`, an absolute `og:image` URL and a `sitemap.xml`.
- Total size is about 18 MB (16 MB of PDFs), well inside free limits.

## Content & rights notes

- All wording is from the old site or from the issue PDFs (contributors' notes, title pages); nothing invented. Gaps are placeholders.
- Header image: J. M. W. Turner, *The Bay of Baiae, with Apollo and the Sibyl* (exhibited 1823), Tate, Turner Bequest 1856 (N00505) — public-domain painting, credited on every page footer, the home hero and About.
- The Anthology PDF says "All texts and translations remain copyright of the respective authors"; it also contains a few short third-party quotations/lyrics credited in the text. The introductory-notes PDF has no title page, author line or copyright notice (see the report to Mark).
- Issues are © their authors; Issue 15 is also © Bringfield's Head Press. Check that the current editor is happy for the Issue 15 PDF to be hosted here rather than only linked.
