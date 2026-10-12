# avolkov.dev — rebuild plan

New personal site for Aleksei Volkov, built on the Tailwind Plus **Spotlight** template (TypeScript),
replacing the Gatsby + Sanity "JS.Garden" blog. Work happens on the `master` branch (branched from `main`).
`README.md` stays as-is — it is the GitHub profile README.

## Goals

- **Primary audience: recruiters / hiring managers** for Lead Frontend roles.
- Show seniority fast: bio, work history, impact, projects, CV download.
- Aggregate content: articles (local MDX), YouTube videos, LinkedIn posts, GitHub projects.
- English only. Static, fast, cheap to run.

## Decisions

| Topic | Decision |
|---|---|
| Template | `spotlight-ts` (Next.js 16, React 19, Tailwind v4, MDX) |
| Branch | `master`, branched from `main`; later set as GitHub default branch + Netlify production branch |
| Rendering | Static export (`output: 'export'`, `images.unoptimized: true`) |
| Hosting | Netlify, domain `avolkov.dev` |
| Data refresh | Weekly scheduled rebuild (GitHub Action → Netlify build hook) + on every push |
| Old posts | Migrate all 15 from Sanity to MDX, curate afterwards |
| Old domain | No redirects, start fresh |
| LinkedIn | Parse official data export (`Shares.csv`) at build time |
| YouTube | Public channel RSS feed at build time (channel ID `UCxFjJds3Xz5yBowexEeycrQ`) |
| GitHub | Curated repo list in config, live stats from GitHub REST API at build time |
| Contact | Email + social links (no form, no newsletter) |
| Headline | **Lead Full Stack Engineer** · 12+ years · Node.js · TypeScript · React · Agentic Development |
| CV | Home "Work" card from CV data + PDF in `/public` (published as-is, incl. phone) |
| CV detail | Highlights only: bio, 4 impact numbers, 4–5 grouped skill lines; full detail stays in PDF |
| Open to work | Not shown |
| Analytics | None for now; Umami later (leave a single place to drop the script in) |

## Site structure

```
/                 Home: intro + socials, YouTube carousel, LinkedIn carousel,
                  latest articles, Work card + "Download CV"
/about            Bio (from cv-generator-2), photo, contacts
/articles         Article list
/articles/<slug>  MDX article (old slugs preserved)
/projects         Curated GitHub repos with stars / language / last update
/feed.xml         RSS of articles (generated at build)
```

Removed from template: `/speaking`, `/uses`, `/thank-you`, newsletter block.

## Repository layout (new)

```
content/
  linkedin/Shares.csv        # dropped in manually from LinkedIn export
  projects.ts                # curated list of repo names + optional overrides
  work.ts                    # roles for the Work card (from CV)
public/cv/aleksei-volkov-cv.pdf
scripts/
  import-sanity.ts           # one-off: Sanity → MDX migration
src/app/articles/<slug>/page.mdx (+ images)
src/lib/
  articles.ts                # from template
  youtube.ts                 # fetch + parse RSS
  linkedin.ts                # parse Shares.csv
  github.ts                  # fetch repo stats
src/components/Carousel.tsx  # horizontal scroll-snap carousel, reused twice
netlify.toml
.github/workflows/weekly-rebuild.yml
```

## Phases

### 0. Prep (needs Alex)
- [x] CV source: `~/Downloads/cv-generator-2/cv/cv-master.md`
      PDF: `~/Downloads/cv-generator-2/cv/pdf-generator/output/Aleksei_Volkov_12yr_Lead_Frontend_Engineer.pdf`
- [ ] LinkedIn export requested — waiting for `Shares.csv`. Build must work without it (carousel hidden when no data).
- [x] Pick GitHub repos to feature (see list below).
- [x] Photo: `~/Downloads/Aleksei Volkov - Lead Frontend Developer Photo.jpeg` (crop head/shoulders for avatar, full portrait on About).
- [x] Contact email: `volkov.dev@icloud.com`.
- [x] CV PDF exists (see above). Note: its filename/metadata say "Lead Frontend" — consider regenerating to match the Full Stack headline.

### 1. Scaffold
- [ ] Remove Gatsby code/config/deps from `master` (keep `README.md`, `LICENSE` if any, `.github/`).
- [ ] Copy `spotlight-ts` into repo root; install; verify `npm run dev`.
- [ ] Switch to static export; fix template parts that need a server
      (`feed.xml` route scrapes rendered pages via cheerio — rewrite to build from MDX metadata).
- [ ] Update `package.json` name/description; Prettier/ESLint per template.

### 2. Migrate Sanity posts
- [ ] `scripts/import-sanity.ts`: GROQ query against public dataset `qtyf8bhl/production`
      → Portable Text → Markdown (code blocks, images, links) → `page.mdx` with `article` metadata
      (`author`, `date` = `publishedAt`, `title`, `description`).
- [ ] Download images from `cdn.sanity.io` next to each post.
- [ ] Review rendering of all 15 posts; fix conversion issues by hand.
- [ ] Curation pass with Alex: merge duplicates (Terminal ×2, Closures/Scopes), drop outdated (`cv`, ...).

### 3. Personal content

Source of truth: `cv-master.md`. Work card roles:
DXC Technology (Sep 2022 – now) · Artezio (2021–2022) · innoscripta (2020–2021) ·
BrandContrast (2015–2019) · Lightspeed Commerce (2014–2015).
Impact numbers: TCA reporting weeks → minutes · ~1,000 PRs agentic workflows ·
microfrontends for 5,460 stores / 97 markets → corporate standard · form-generator −63% form work, 5 teams.
Client names stay anonymised as in the CV.

- [ ] Name, title, bio, social links in Header/Footer/Home/About (from CV).
- [ ] `content/work.ts` → Work card; `/public/cv/*.pdf` → Download CV button.
- [ ] Metadata: title template, description, Open Graph image, favicon.

### 4. Integrations (build-time)
- [ ] `youtube.ts`: fetch RSS, return latest N videos (title, thumbnail, date, URL). Fail soft (empty list) so builds never break.
- [ ] `linkedin.ts`: parse `Shares.csv`, latest N posts (date, excerpt, URL).
- [ ] `github.ts`: fetch curated repos (optionally with `GITHUB_TOKEN` env to avoid rate limits).
- [ ] `Carousel` component: CSS scroll-snap, keyboard accessible, prev/next buttons, dark mode.
- [ ] Home: two carousel rows (Videos, LinkedIn). Projects page from GitHub data.

### 5. Deploy
- [ ] `netlify.toml`: `npm run build`, publish `out`, Node version.
- [ ] Netlify: production branch → `master`; add custom domain `avolkov.dev` + HTTPS.
- [ ] Build hook + `.github/workflows/weekly-rebuild.yml` (cron weekly).
- [ ] GitHub: set default branch to `master` (after site is live).

### 6. Polish
- [ ] Lighthouse pass (perf, a11y, SEO), sitemap + robots.
- [ ] Umami placeholder (env-driven, off by default).

## Featured GitHub repos (order = display order)

MetaCleaner, fe-fwk-ts-react, my-own-babel, isit-hdr-ready, tailwind-hanging-punctuation,
tailwind-font-variant-caps, rss-reader, WhatARQuickLookCanDoToday, openNotes, css3IsAwesome,
tailwindcss-text-rendering, randomARt

- `tailwind-hanging-punctuation` and `tailwind-font-variant-caps` have no GitHub description → override in `content/projects.ts`.
- Most repos have 0–3 stars → don't show star counts; show language, live demo / npm link, last update.

## Open questions
- Keep any old post comments/newsletter subscribers? (Mailchimp list is being dropped.)
- Carousel item count (e.g. latest 10 videos / 10 LinkedIn posts)?
