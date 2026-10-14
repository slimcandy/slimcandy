# avolkov.dev — rebuild plan

New personal site for Aleksei Volkov, built on the Tailwind Plus **Spotlight** template (TypeScript),
replacing the Gatsby + Sanity "JS.Garden" blog. Work happens on the `master` branch (branched from `main`).
`README.md` stays as-is — it is the GitHub profile README.

## Status

Phases 1–6 are done and pushed to `master`; CI (prettier, eslint, build) is green.
The site is live at https://avolkov.dev.

## Goals

- **Primary audience: recruiters / hiring managers** for Lead roles.
- Show seniority fast: bio, work history, impact, projects, CV download.
- Aggregate content: articles (local MDX), YouTube videos, LinkedIn posts, GitHub projects.
- English only. Static, fast, cheap to run.

## Decisions

| Topic        | Decision                                                                                        |
| ------------ | ----------------------------------------------------------------------------------------------- |
| Template     | `spotlight-ts` (Next.js 16, React 19, Tailwind v4, MDX)                                         |
| Branch       | `master`, branched from `main`; later set as GitHub default branch + Netlify production branch  |
| Rendering    | Static export (`output: 'export'`, `images.unoptimized: true`)                                  |
| Hosting      | Netlify, domain `avolkov.dev`                                                                   |
| Data refresh | Weekly scheduled rebuild (GitHub Action → Netlify build hook) + on every push                   |
| Old posts    | All 15 migrated from Sanity to MDX, curate afterwards                                           |
| Old domain   | No redirects, start fresh                                                                       |
| LinkedIn     | Parse official data export (`Shares.csv`) at build time                                         |
| YouTube      | Public channel RSS feed at build time (channel ID `UCxFjJds3Xz5yBowexEeycrQ`)                   |
| GitHub       | Curated repo list in config, live data from GitHub REST API at build time; no star counts       |
| Contact      | Email + social links (no form, no newsletter)                                                   |
| Headline     | **Lead Full Stack Engineer** · 12+ years · Node.js · TypeScript · React · Agentic Development   |
| CV           | Home "Work" card from CV data + PDF in `/public` (published as-is, incl. phone)                 |
| CV detail    | Highlights only: bio, 4 impact numbers, 5 grouped skill lines; full detail stays in PDF         |
| Open to work | Not shown                                                                                       |
| Analytics    | Umami, off until `NEXT_PUBLIC_UMAMI_WEBSITE_ID` is set                                          |
| Dependencies | Template deps only; RSS/CSV/Sanity parsing hand-written (no extra libraries)                    |

## Site structure

```
/                 Home: intro + socials, YouTube carousel, LinkedIn carousel (once CSV added),
                  latest 4 articles, Work card + "Download CV"
/about            Bio, impact, skills, education, contacts, portrait
/articles         Article list
/articles/<slug>  MDX article (old Sanity slugs preserved)
/projects         12 curated GitHub repos: description, language, last update, live demo link
/feed.xml         RSS of articles
/sitemap.xml, /robots.txt
```

## Repository layout

```
public/cv/aleksei-volkov-cv.pdf, public/og.jpg
scripts/import-sanity.ts         # re-runnable Sanity → MDX migration (node scripts/import-sanity.ts)
src/app/articles/<slug>/page.mdx # + WebP images
src/content/
  work.ts                        # roles, impact highlights, skills (from cv-master.md)
  projects.ts                    # featured repos + description/homepage overrides
  linkedin/Shares.csv            # ← add from LinkedIn export
src/lib/
  site.ts                        # name, email, socials, URLs — single source
  youtube.ts, linkedin.ts, github.ts  # build-time loaders, all fail soft
src/components/Carousel.tsx
netlify.toml                     # build, caching, security headers
.github/workflows/ci.yml, weekly-rebuild.yml
```

## Done

- [x] 1. Scaffold: Spotlight TS, static export, Gatsby removed, MIT license dropped (Tailwind Plus license)
- [x] 2. Sanity → MDX: 15 posts, images WebP (13 MB → 1.4 MB), alt text on screenshots
- [x] 3. Personal content from CV, photo crops (EXIF stripped), OG image, icons
- [x] 4. YouTube + LinkedIn carousels, Projects from GitHub
- [x] 5. Netlify config + weekly rebuild workflow
- [x] 6. QA in Safari: axe-core WCAG 2.1 AA clean on all pages in light + dark; no horizontal
      overflow at 375×667 (iPhone SE 2); skip link, focus ring, reduced motion, focusable code
      blocks, per-article Open Graph, sitemap/robots, theme-color, apple-touch-icon, RSS discovery

## Your decisions & actions

### To go live (required)

1. **Netlify** → Site configuration → Build & deploy → set **production branch to `master`**
   (build command/publish dir come from `netlify.toml`).
2. **Domain**: add `avolkov.dev` in Netlify → Domain management, point DNS, enable HTTPS.
3. **Build hook**: Netlify → Build hooks → create one → add as GitHub repo secret
   `NETLIFY_BUILD_HOOK` (enables the weekly refresh).
4. Optional: add `GITHUB_TOKEN` (read-only, public repos) as a Netlify env var. Builds make 12
   unauthenticated GitHub API calls; Netlify's shared IPs can hit the 60/hour limit. On failure the
   Projects page still builds, just without language/update date.
5. After it's live: GitHub → Settings → default branch → `master`.

### Content

6. **Job titles per company** — `cv-master.md` doesn't list them, and older notes disagree
   ("Senior Software Developer", "Middle Frontend Developer", "Lead Software Developer"…).
   The Work card shows each client's domain instead. Give me titles or keep as is
   (`src/content/work.ts`).
7. **CV PDF** filename/metadata still say "Lead Frontend Engineer" while the site says Full Stack.
   Regenerate in cv-generator-2 and replace `public/cv/aleksei-volkov-cv.pdf` if you want them to match.
8. **Review my copy**: home headline + intro, About text, Projects intro, Articles intro — written
   from `cv-master.md`, please check tone and facts.
9. ~~LinkedIn~~ — done: `Shares.csv` (44 public posts, export of 2026-10-14) shows the latest 10.
   To refresh, copy `Shares_<id>.csv` from a new export over `src/content/linkedin/Shares.csv`.
   Only that file — the rest of the archive is private. Connections-only posts are skipped.

### Article curation

10. **Delete `cv`?** — no description, it's a 2023 ChatGPT-prompt note; reads oddly to recruiters.
11. **Duplicates**: `terminal` (2024) vs `macbook-terminal` (2023); `closures` (2024) vs
    `scopes-and-closures-advanced-questions` (2023). Merge or keep both?
12. **Short titles** from Sanity: "PWA", "TypeScript", "Data Types", "Backup", "Event Loop",
    "MacBook Setup", "Blog in 2023" — want fuller titles?
13. **Outdated**: "Blog in 2023" describes the old Gatsby blog; "GitHub Repo Boilerplate" is
    about "$10k/month" pet projects. Keep?
14. **Cover images** are YouTube thumbnails with old "CODE TO $10K" branding — keep or remove?
15. **Dead demo links** inside posts (whole js.garden domain is down): `note.js.garden` (PWA),
    `ar.js.garden` + `whatarquicklookcandotoday.js.garden` (AR Quick Look), `hdr.js.garden`
    (HDR, GitHub Repo Boilerplate), `gatsby.js.garden` (Blog in 2023). Redeploy, remove, or leave?
    The same demos are hidden on /projects (`homepage: null` in `src/content/projects.ts`).
16. `hdr-in-css` jumps from the title (h1) to an h3 — minor heading-order a11y issue; fix when curating.

Note: `scripts/import-sanity.ts` regenerates all posts. Once you hand-edit any MDX, don't re-run it.

### Later

17. Umami: create a site at cloud.umami.is, set `NEXT_PUBLIC_UMAMI_WEBSITE_ID` in Netlify.

### Fonts

MonoLisa files live in the private repo `slimcandy/monolisa-font` (license: no redistribution).
`scripts/fetch-fonts.sh` clones it during the Netlify build with a read-only deploy key stored in the
`FONTS_DEPLOY_KEY` env var (base64, builds scope). Locally the files sit in gitignored `public/fonts/`.
18. Old Mailchimp list (JS.Garden newsletter) is no longer used — export subscribers if you care.
19. Old Sanity project `qtyf8bhl` can be deleted after you're happy with the migration.
