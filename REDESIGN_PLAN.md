# Redesign plan — Hidde Fokkema personal website

**Decided:** Astro (v7, currently 7.2.9), static output, hand-written by me (Hidde) to keep a mental map of the site. Style: terminal-restrained dark minimal (gruvbox/bitart dropped). Data files keep their current format wherever possible.

Goals:

1. **Kill the env var + stack bloat.** `react-scripts@4` / Webpack 4 / OpenSSL-legacy workaround gone; MUI, emotion, react-router, react itself gone. One runtime dep: `astro`.
2. **Restyle.** Near-black, monospace, one accent, 1px hairlines. Take ronanconnolly.dev's *restraint*, skip its copyable theatrics (shell-prompt nav, matrix green, emoji, easter eggs).
3. **Data format preserved.** 5 of 7 data files move byte-identical; `news.tsx`/`talks.tsx` converted once (JSX → link arrays, spec below); two additive optional fields elsewhere.
4. **Reposition from academic to engineering** (see below) — the site currently reads as a postdoc application; it should read as an AI research engineer who also has a PhD.

Two simplifications found while auditing the old code:

- The only JS on the site was the mobile drawer. With three short mono nav links a wrapping flex header covers it. **Target: zero lines of our own JavaScript**, and (once the Bluesky embed goes, below) zero external scripts too.
- Talk deduplication is a *rendering* problem, not a data problem — grouping at render keeps `talks.ts` flat and append-only.

---

## Content strategy (from the content audit — the *why* behind the edits below)

The site is well maintained but optimized for the job just left. Nav is About / Research / Teaching, the first screen is a five-item list of mathematical interests, and the deepest content is 18 talks and 8 TA'd courses. Nothing on it shows that I build software — **even though the evidence exists and simply isn't linked**: `reg-mmd-scikit` (10 stars, scikit-learn-compatible API), `meta-grad-pytorch`, and three paper-code repos are all public and unreachable from the site. Meanwhile the intro claims *"I am working on writing easy to use implementations of some of the algorithms in this field"* and links to nothing.

Three shifts, all cheap to make during a rewrite:

1. **Nav becomes About / Projects / Research.** Engineering first; Teaching demoted to a section of Research (with a redirect so no URL breaks).
2. **Evidence over enumeration.** Every publication gets a code link where one exists; every project gets two lines on what was hard. Trim the lists that pad (news travel log, duplicated talks, stale interests).
3. **Lead with what I do now.** Plumerai and the Booking.com bandit-theory-in-production stint are currently a clause and a buried news item respectively; they are the most employer-relevant facts on the site.

---

## Target structure

```
astro.config.mjs
package.json                  ← deps: astro (dev: @astrojs/check + typescript, optional)
tsconfig.json                 ← replaced (astro/tsconfigs/strict)
public/                       ← images, /files, /posters, /talks, favicon, robots.txt (dead assets pruned)
src/
  styles/theme.css            ← entire design, ~150 lines
  layouts/Base.astro          ← <head>, header/nav, footer, <slot/>
  components/
    ContactCard.astro  IntroCard.astro  NewsList.astro
    ProjectList.astro                    ← NEW
    PublicationList.astro                ← published / PhD / theses / talks renderers
    CourseList.astro  SupervisionList.astro
  pages/
    index.astro  projects.astro  research.astro          ← teaching.astro gone (redirect)
  data/
    data.ts  theses.ts  teaching.ts  supervision.ts       ← unchanged
    publications.ts                                       ← + optional `code?` field
    news.ts  talks.ts                                     ← converted (Phase 3)
    projects.ts                                           ← NEW
```

No `Navbar.astro`/`Footer.astro` split — both are a handful of lines and live only in `Base.astro`. Extract later if a second layout ever exists.

---

## Phase 0 — Scaffold (~30 min)

Work on this branch (`framework_change`). Don't run `npm create astro` — hand-write the four config files; it's ~25 lines total and you'll know exactly what's there.

1. **Delete CRA config first** so nothing fights (use `trash`, not `rm -rf`):
   - Tooling: `package.json`, `package-lock.json`, `tsconfig.json`, `node_modules/`, `Dockerfile` (dev one; prod updated in Phase 7).
   - React entry/config: `src/index.tsx`, `src/App.tsx`, `src/App.css`, `src/App.test.tsx`, `src/index.css`, `src/theme.ts`, `src/reportWebVitals.ts`, `src/setupTests.ts`, `src/react-app-env.d.ts`, `src/colours.txt`.
   - `public/index.html` (Astro generates HTML; its `<head>` moves to `Base.astro` in Phase 2).
   - **`src/pages/blog.tsx`** — an unrouted "Coming soon!" that never came. Delete rather than port; a permanent "coming soon" reads worse than no blog. (If you later commit to writing, see the Notes idea in Phase 6.)
   - **Dead assets** (grep-confirmed zero references): `src/logo.svg`, `public/coding.svg`, `public/Square_Hidde.jpg`, `public/.DS_Store`, `public/manifest.json` (a PWA manifest for a static CV site).
   - Keep `src/data/` and the `.tsx` components/pages for now — they're the reference while porting; each `.tsx` is deleted at the end of the phase that ports it.

2. **`package.json`** (fresh, minimal):
   ```json
   {
     "name": "hiddefokkema.nl",
     "private": true,
     "type": "module",
     "scripts": {
       "dev": "astro dev",
       "build": "astro build",
       "preview": "astro preview"
     },
     "dependencies": { "astro": "^7.2.9" }
   }
   ```
   (`npm i`, then pin whatever version actually resolved.)

3. **`astro.config.mjs`**:
   ```js
   import { defineConfig } from "astro/config";
   export default defineConfig({
     site: "https://hiddefokkema.nl",        // ← your actual domain
     redirects: { "/teaching": "/research/#teaching" },
   });
   ```
   Defaults are right: static output, `build.format: "directory"` → `dist/research/index.html`, served by nginx at `/research/` with no config. In static mode the redirect emits a small meta-refresh page, so the old `/teaching` URL keeps working without touching nginx.

4. **`tsconfig.json`**:
   ```json
   { "extends": "astro/tsconfigs/strict", "include": [".astro/types.d.ts", "src/**/*"] }
   ```

5. **`.gitignore`**: add `dist/`, `.astro/`, `.DS_Store`.

6. Temporary `src/pages/index.astro` with `<h1>hello</h1>`.

**Verify:** `npm run dev` — no env var, no warnings. `npm run build` succeeds. The four untouched data files type-check under the new tsconfig once imported.

---

## Phase 1 — `src/styles/theme.css` (~1–2 h)

One file, plain CSS, no preprocessor. Written before any component so every later phase is judged against a styled page.

**1. Tokens** (complete — this *is* the design; changing the site's mood later means editing this block only):

```css
:root {
  --bg:      #101010;   /* page */
  --bg-alt:  #171717;   /* cards, nav */
  --border:  #2a2a2a;   /* all hairlines */
  --fg:      #d6d3cd;   /* body text — warm off-white */
  --fg-dim:  #8a877f;   /* metadata: dates, venues, supervisors */
  --accent:  #e5a458;   /* the ONLY accent: links, h1, active nav */
  --mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}
```

Accent is a one-line swap (muted amber chosen; desaturated cyan `#6fb3c0` is the alternative). Never introduce a second accent — restraint is the design.

**2. Base elements** (spec, write it yourself):

- Modern minimal reset: `box-sizing: border-box` everywhere, zero default margins, `img { max-width: 100% }`.
- `body`: `--bg`/`--fg`, `var(--mono)`, `font-size: 15px`, `line-height: 1.65`.
- `h1` accent-colored, `h2/h3` in `--fg` bold; sizes modest (h1 ≈ 1.5rem) — monospace headings look shouty fast. Optional flourish: `h2::before { content: "## "; color: var(--fg-dim); }` — markdown-flavored, cheap to delete if it feels gimmicky after a day.
- `a`: `--accent`, underlined, `text-underline-offset: 3px`; hover brightens (`filter: brightness(1.2)`) — **no** background-invert blocks.
- Content lists: `list-style: none`; items separated by spacing, not markers — the dim metadata line does the work the MUI icons used to.
- `border-radius: 0` implicitly everywhere (never set it).

**3. Layout & component classes** (contract per class):

| class | contract |
|---|---|
| `.wrap` | page gutter: `max-width: 1100px; margin-inline: auto; padding-inline: 1.5rem` |
| `.site-header` | `--bg-alt`, `border-bottom: 1px solid var(--border)`; flex row: name/title left, nav right; `flex-wrap` on narrow screens — **this replaces the drawer, no JS** |
| `.site-nav a` | dim by default, `--fg` on hover, `--accent` + underline for the current page |
| `.about-grid` | `display: grid; grid-template-columns: 300px 1fr; gap: 2rem` (replaces MUI `md={3}/{7}`); single column under `@media (max-width: 900px)` |
| `.card` | `background: var(--bg-alt); border: 1px solid var(--border); padding: 1.25rem` — no shadow, no radius |
| `.item-list li` | entry block: title line (`--fg` or link), metadata line below in `--fg-dim` |
| `.meta` | `color: var(--fg-dim); font-size: 0.87rem` — dates, venues, authors, `[Slides]` links |
| `.timeline` | About-page experience block: `<dl>` or two-column grid, years in `--fg-dim` (Phase 6) |
| `.contact-links` | vertical list of text links |
| `.footer` | `--fg-dim`, hairline top border, small |

**Verify:** temporary index.astro with dummy header/card/list markup; check 1440 px and 375 px, and that the nav row never overflows at 320 px.

---

## Phase 2 — `src/layouts/Base.astro` (~1 h)

Frontmatter props: `{ title: string, description?: string }`.

```astro
---
import "../styles/theme.css";
const { title, description = "Hidde Fokkema — AI Research Engineer" } = Astro.props;
const path = Astro.url.pathname;
---
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#101010" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
  <slot name="head" />   <!-- research.astro injects citation_* meta here -->
</head>
<body>
  <header class="site-header"> …name + role line, nav: About / Projects / Research… </header>
  <main class="wrap"><slot /></main>
  <footer class="footer wrap">© 2021–2026 Hidde Fokkema</footer>
</body>
</html>
```

Carried over from `public/index.html`: favicon, apple-touch-icon, viewport, description (rewritten — the old one says "PhD candidate"). **Dropped:** Raleway font, Material Icons stylesheet, manifest link, the Font Awesome kit script (Phase 4 removes its last consumer), and the bsky-embed script (Phase 4 decision).

Header content: name (link to `/`), and under it one dim line — `AI Research Engineer @ Plumerai · PhD in Machine Learning`. This replaces both the old desktop subtitle ("Researcher in Mathematical Machine Learning") and the stale mobile one ("PhD Candidate in Mathematical Machine Learning").

Nav marks the current page: `class={path.startsWith("/research") ? "active" : ""}` — note trailing slashes in built URLs.

Footer: drop "Powered by React and Material UI" (soon false twice over) and the stale `© 2021`.

**Verify:** empty page through the layout; nav between two stub pages; active state follows; network tab shows only fonts.googleapis + gstatic.

---

## Phase 3 — Data (~2 h, mostly mechanical)

Four data changes: two conversions, one new file, one additive field. Everything else moves byte-identical.

### 3a. `news.tsx` → `news.ts` (convert **and** trim)

```ts
export interface NewsItem {
  date: string;                              // "YYYY-MM", pulled out of the old title prefix
  text: string;
  links?: { label: string; href: string }[];
}
export const newsItems: NewsItem[] = [ … ];  // newest first, as now
```

**Editorial rule (apply now and when adding items later): keep results, cut attendance.** Papers accepted or published, roles started, the defense — those are news. Conference travel and talk announcements are not; talks already live on the Research page. This takes 16 items down to 12 and stops the feed reading as a travel log.

**Keep (12):**

| date | text | links |
|---|---|---|
| 2026-05 | **NEW** — started at Plumerai as an AI Research Engineer (use your real start month; one line on what you work on) | — |
| 2026-02 | PhD defended in January 2026 — *rewrite the tail*: "looking for industry roles… any leads would be very helpful!" is stale and now reads as an unanswered plea. End it with joining Plumerai. | `Dissertation (PDF)` → `https://pure.uva.nl/ws/files/277470997/Thesis.pdf` |
| 2025-09 | NeurIPS 2025 acceptances (Concept + Performative Validity) | `Concept paper` → `https://arxiv.org/abs/2502.06536`, `Validity paper` → `https://arxiv.org/abs/2506.15366` |
| 2025-07 | Booking.com, 3 months as ML Scientist — bandit theory into practice | — |
| 2025-06 | Performative Validity preprint | `arXiv` → `https://arxiv.org/abs/2506.15366` |
| 2025-02 | Concept-learning preprint | `arXiv` → `https://arxiv.org/abs/2502.06536` |
| 2024-05 | *(split of the old double item, a)* COLT 2024 acceptance | `arXiv` → `https://arxiv.org/abs/2406.06506` |
| 2024-05 | *(b)* presenting at ICML 2024, JMLR-to-conference track | — |
| 2024-01 | AISTATS acceptance | — |
| 2023-11 | first article published in JMLR | `JMLR` → `https://jmlr.org/papers/v24/23-0042.html` |
| 2023-05 | Risks of Recourse preprint | `arXiv` → `https://arxiv.org/abs/2306.00497` |
| 2022-05 | first paper submitted | `arXiv` → `https://arxiv.org/abs/2205.15834` |

**Cut (6):** `2023-10` Saarbrücken workshop (attendance), `2023-09` two talks (on Research page), `2022-11` Nice workshop (on Research page — its link survives in `talks.ts`), `2022-09` YES workshop (attendance), `2022-07` COLT London (attendance), `2021-09` "Started my PhD!" (the Phase 6 experience timeline covers it).

### 3b. `talks.tsx` → `talks.ts` (convert; shape stays flat)

```ts
export interface Talk {
  title: string;
  location: string;
  date: string;                              // "June 2025" format, unchanged
  links?: { label: string; href: string }[];
  note?: string;                             // replaces prose that sat inside the JSX
}
```

**All 18 entries stay** — the array remains flat and append-only, exactly as now. The padding problem (the same talk listed 4–5 times) is fixed at *render* time in Phase 4 by grouping on `title`: 18 entries become 10 headings with venues nested beneath. No data restructuring, no loss of record.

> **Grouping depends on exact title matches**, so two typo fixes are now functional, not cosmetic: `"Attribution-based Explenations…"` (the CWI July 2022 entry) must match the other four, and decide whether `"A new Algorithm for Convex Bandit Optimization"` (Stochastics seminar, Mar 2024) is the same talk as `"Online Newton Method for Bandit Convex Optimisation"` (COLT) — if so, unify the titles and they group.

**⚠ Link-path fix (a real bug under Astro):** old hrefs like `posters/x.pdf` are *relative*. Served at `/research/` they resolve to `/research/posters/x.pdf` → 404. Every internal path below is root-relative. Apply the same to `theses.ts` consumers (`/files/${thesis.link}`), the CV link, and the profile picture (`/HF_1_18032026.jpeg`).

| # | talk (date) | links | note |
|---|---|---|---|
| 1 | Cardiff workshop (Jun 2025) | `Slides` → `/posters/Cardiff_workshop_2025.pdf` | |
| 2 | Tübingen ML Theory seminar (Nov 2024) | — | "Work in progress" |
| 3 | ICML (Jul 2024) | `Poster` → `/posters/ICML_2024_attribution_robustness.pdf` | |
| 4 | COLT (Jul 2024) | `Slides` → `/talks/2024_COLT_Newton_method_Convex_Bandit_Optimisation.pdf`, `Poster` → `/posters/COLT_2024_Online_Newton_Method_for_BCO.pdf` | |
| 5 | AISTATS (May 2024) | `Poster` → `/posters/AISTATS_2024_risks_of_recourse.pdf` | |
| 6 | Theory of Interpretable AI seminar (Mar 2024) | `Slides` → `/talks/202405_theory_of_interpretable_ai.pdf`, `Video` → `https://www.youtube.com/watch?v=EwwllG40XZM` | |
| 7 | Stochastics seminar KdVI (Mar 2024) | `Slides` → `/talks/202403_BCO_stochastics_seminar.pdf` | |
| 8 | Ministry of Justice and Security (Mar 2024) | `Slides` → `/talks/Theoretische_beperkingene_XAI.pdf` | "General-audience talk, in Dutch" |
| 9 | AI & Mathematics network day (Nov 2023) | `Slides` → `/talks/AIM_RoR_talk.pdf` | |
| 10 | Saarland workshop (Oct 2023) | `Slides` → `/talks/Saarland_RoR_talk.pdf` | |
| 11 | Amsterdam Business School (Sep 2023) | `Slides` → `/talks/ABS_talk.pdf` | |
| 12 | Xomnia (Sep 2023) | `Slides` → `/talks/xomnia_talk.pdf` | "General-audience talk" |
| 13 | 1st Nice workshop (Nov 2022) | `Slides` → `/talks/Nice_workshop_attribution.pdf`, `Workshop website` → `https://sites.google.com/view/nwi2022/home` | |
| 14 | Statistics seminar KdVI (Nov 2022) | `Slides` → `/talks/202211_Statistics_seminar_all_slides.pdf` | |
| 15 | CWI ML seminar (Jul 2022) | — | |
| 16 | Poster, 1st Workshop Math & AI, CWI (Jun 2022) | `Poster` → `/posters/Impossibility_poster.pdf` | |
| 17 | NeurIPS 2021 debriefing (Mar 2022) | `Framing RNN as a kernel method: A neural ODE approach` → `https://proceedings.neurips.cc/paper/2021/hash/18a9042b3fc5b02fe3d57fea87d6992f-Abstract.html` | "Presented my favourite paper from NeurIPS 2021, by Fermanian, Marion, Vert & Biau" |
| 18 | Martingale OT, CWI (Jan 2022) | — | |

The stray commas the old JSX rendered between links (`[Slides]</a>,<a…`) disappear for free — the component now controls separators.

### 3c. `publications.ts` — one additive field

```ts
code?: string;    // repo URL
```

Everything else unchanged. Mapping (inferred from repo names — **verify each before publishing**):

| paper | repo |
|---|---|
| Attribution-based Explanations… (JMLR 2023) | `github.com/HiddeFok/recourse-robust-explanations-impossible` |
| Risks of Recourse in Binary Classification (AISTATS 2024) | `github.com/HiddeFok/consequences-of-recourse` |
| Sample-efficient Learning of Concepts (NeurIPS 2025) | `github.com/HiddeFok/sample-efficient-learning-of-concepts` |
| Online Newton Method for BCO (COLT 2024) | none found — leave unset |
| Performative Validity (NeurIPS 2025) | König et al.; link theirs if it exists, else unset |

"Paper + code" is the reproducibility signal industry hiring looks for, and here it costs three links.

### 3d. `projects.ts` — new file

```ts
export interface Project {
  name: string;
  blurb: string;          // what it does — one line
  detail: string;         // what was hard / what you'd point at in an interview — one or two lines
  repo: string;
  tags: string[];         // e.g. ["Python", "scikit-learn API"]
  paper?: string;         // link back to the publication, where there is one
}
```

Seed content (order matters — lead with the one an engineering manager reads fastest):

| project | why it's on the list |
|---|---|
| **reg-mmd-scikit** | 10 stars and a scikit-learn-compatible estimator/regressor API. Library design with actual users is the most employer-legible artifact you have. Say what the regMMD procedure does in one plain sentence and what conforming to the sklearn estimator contract required. |
| **meta-grad-pytorch** | PyTorch implementation of MetaGrad — this is the thing the old intro *claimed* ("easy to use implementations of some of the algorithms in this field") and never linked. |
| **sample-efficient-learning-of-concepts** | Experiment code for the NeurIPS 2025 paper — reproducibility. |
| **consequences-of-recourse** | Experiment code for the AISTATS 2024 paper. |
| **recourse-robust-explanations-impossible** | Experiment code for the JMLR 2023 paper. |
| **this website** | Astro, zero shipped JS, Docker, GitHub Actions, self-hosted. Small, but it's evidence you ship and actively resist bloat — worth a line at a company whose product *is* efficiency. Add it in Phase 7 once true. |

**Verify:** files compile (`npx astro check` or the dev overlay); counts — 12 news, 18 talks, 6 projects. Every `/talks/…`, `/posters/…`, `/files/…` href matches a real file (`for f in $(grep -o '/\(talks\|posters\|files\)/[^"]*' src/data/*.ts); do test -f "public$f" || echo "MISSING $f"; done`).

---

## Phase 4 — Components (~half a day, one at a time)

Each: create `.astro`, port, restyle, view in the browser, delete the `.tsx`. General rule: MUI `<Card>`→`<section class="card">`, `<Typography>`→plain elements, `<List>/<ListItem>`→`<ul class="item-list"><li>`, every icon → nothing (the `.meta` line replaces it).

1. **`ContactCard.astro`** — imports `personalInfo`, `contactItems` from `data/data.ts` (unchanged). `<img>` portrait, square not circular (fits the hard-edge look; `border: 1px solid var(--border)`), then the role lines, then `contactItems.map` → **plain text links** in `.contact-links`. The `icon: "fa fa-*"` field goes unused — leave it in `data.ts` or strip it; either way the **Font Awesome kit script is now unreferenced, so delete it**. Replace the stale "ML Researcher / Previously at Korteweg-de Vries Intituut" lines with the new role. **Check the Bitbucket link** before porting: if it's an empty university leftover, drop it from `contactItems` — six links where one is dead dilutes the other five.
2. **`NewsList.astro`** — map `newsItems`: `<li>` with `.meta` date, text, then `links?.map` → bracketed anchors in `.meta`.
3. **`IntroCard.astro`** — the `interests` array moves into this component's frontmatter as a plain typed array (drop the per-item `style` hack). **Trim it from five items to two**: keep *Mathematical Foundations of Explainable AI* and *Bandit Optimisation*; fold AI4Science, Optimal Transport and Stochastic Calculus into at most one closing sentence. As written they point at a 2021 Master's thesis with no evidence attached and read as a grad-school statement of purpose. The Bandit blurb's implementation claim should now link to `meta-grad-pytorch` (or point at the Projects page). CV link → `/files/CV_Hidde_Fokkema_public.pdf`.
4. **`ProjectList.astro`** (new) — map `projects`: name as repo link, `blurb`, `detail`, `.meta` tags, optional `paper` link.
5. **`PublicationList.astro`** — replaces `publication.tsx`:
   - Publications: title as link, `.meta` = `authors.join(", ")` · journal · date, plus a `[Code]` link when `code` is set. Authors contain the literal `"HF"` — either render it as `H. Fokkema` (bolded) via a small replace, or edit the data; decide once.
   - **Preprints: currently zero entries.** Render the heading conditionally (`preprints.length > 0`) — the old site had a latent empty section.
   - PhD entry: title → `https://dare.uva.nl/search?identifier=e0b2c89d-603a-4edc-b9b9-59a6547c1eec`, `[PDF]` → `https://pure.uva.nl/ws/files/277470997/Thesis.pdf`, "Defended January 2026", plus the plain-language summary from Phase 6. **The `citation_*` meta tags currently sit inside a `<ListItem>` (invalid HTML that happens to work) — move them to the page `<head>` via the layout's `head` slot** (Phase 5).
   - Theses: link `/files/${thesis.link}`; `.meta` = supervisors · type · date.
   - **Talks — grouped.** Group the flat array by `title`, then render each group as one heading with a nested list of venue · date · links · note:
     ```astro
     const grouped = Object.groupBy(listTalks, (t) => t.title);
     ```
     (`Object.groupBy` needs Node ≥21 — fine here; a `reduce` works too.) Sort groups by their most recent date. 18 entries → 10 headings.
6. **`CourseList.astro`** / **`SupervisionList.astro`** — direct ports; keep `sort((a,b) => b.year - a.year)`; `.meta` for level/year. Don't port the `courseList.tsx:15` bug: `"url" in course` is true even when `url` is `undefined` — use `course.url ? … : course.title`.

**Dropped: `BlueskyCard`.** A live third-party feed beside your CV is content you don't control, it's the only external script left, and `mode="light"` would glare on the dark theme. The Bluesky link already sits in `contactItems`, which does 90% of the job. *(To re-add later: `<bsky-embed>` inside a `.card` with `mode="dark"`, plus the jsdelivr module script in that component so only the About page loads it.)*

**Verify per component:** renders against real data; no console errors; every link clicked once (or the shell href-check above).

---

## Phase 5 — Pages (~2 h)

1. **`index.astro`** (About) — title `Hidde Fokkema — AI Research Engineer`. `.about-grid`: left column `ContactCard`, right column `IntroCard` → **experience timeline** (Phase 6) → news section. With Bluesky gone the left column is short; either let it be, or move the timeline there.
2. **`projects.astro`** (new) — title `Projects — Hidde Fokkema`. One intro sentence framing the page ("code I've written and maintain, alongside the papers"), then `ProjectList`.
3. **`research.astro`** — title `Research — Hidde Fokkema`. Sections: Articles (Published, conditional Preprints), PhD Thesis, Talks, Theses, then **`<section id="teaching">` Teaching & Supervision** (`CourseList` + `SupervisionList`) at the bottom — this is the `/teaching` redirect target from Phase 0. Inject the scholar tags:
   ```astro
   <Fragment slot="head">
     <meta name="citation_title" content="Mathematical Foundations of Explainable AI and Advances in Bandit Optimisation" />
     <meta name="citation_author" content="Fokkema, Hidde" />
     <meta name="citation_publication_date" content="2026" />
     <meta name="citation_dissertation_institution" content="University of Amsterdam" />
     <meta name="citation_pdf_url" content="https://pure.uva.nl/ws/files/277470997/Thesis.pdf" />
     <meta name="citation_isbn" content="978-94-6522-938-6" />
   </Fragment>
   ```

Delete the remaining `src/pages/*.tsx` and `src/components/*.tsx`.

**Verify:** `npm run build && npm run preview` — all three routes plus `/teaching` redirecting to `/research/#teaching`; mobile width; `view-source:` on `/research/` shows the citation meta in `<head>`; `find dist -name '*.js'` returns nothing (proves the zero-JS goal).

---

## Phase 6 — Content (~2 h, prose only — the highest-value phase)

### 6a. Typos (do this first; it's the best payoff-per-minute on the list)

A dozen typos on a personal site get read as a signal about attention to detail, fairly or not. Known list:

| where | fix |
|---|---|
| `introCard.tsx` opener | **"I am research in Machine Learning"** → "I am a researcher in Machine Learning" — this is the first sentence on your homepage |
| news 2023-05 | "invistigate" → "investigate" |
| news 2025-07 | "developped" → "developed"; "practise" → "practice" |
| news 2025-06 | "targetting" → "targeting" |
| `talks` #15 title | "Explenations" → "Explanations" (**required** for grouping — see 3b) |
| `talks` #7 location | "Univeristy" → "University" |
| `talks` #10 location | "Interpretabiltiy" → "Interpretability" |
| `theses.ts` | "Dubble Bachelor" → "Double Bachelor" |
| `teaching.tsx` heading | "Teaching Assistent" → "Teaching Assistant" |
| `ContactCard` | "Korteweg-de Vries Intituut" → "Instituut" |

Leave PDF *filenames* alone (`Theoretische_beperkingene_XAI.pdf`) — they're already-published URLs.

### 6b. Repositioning

- [ ] **Experience timeline on About** (`.timeline`, four lines): Plumerai — AI Research Engineer (2026–); Booking.com — ML Scientist (2025, 3 months); University of Amsterdam — PhD (2021–2026); Amsterdam Data Collective — Data Science Consultant (part-time, pre-PhD). Right now ADC is a trailing clause and Booking.com only exists in the news feed; a recruiter scanning for a timeline finds nothing.
- [ ] **Two sentences on what you do at Plumerai.** Efficient/embedded AI on constrained hardware is a real specialization and it's currently one clause. This is what distinguishes the site from every other XAI-theory homepage.
- [ ] **Promote the Booking.com stint** out of the news feed into the About prose. *"Put some of the theory we developed for Bandit Optimization problems into practice"* is the most employer-relevant sentence on the site — theory-to-production is exactly the story an AI research engineer tells. Add what came out of it, if you can share it.
- [ ] **Plain-language PhD summary** (3 sentences, rendered above the thesis link in `PublicationList`): what you proved and why it matters. Currently the thesis is a title, a PDF link and an ISBN; nobody reads a dissertation, so this converts a dead link into your strongest credential.
- [ ] Tense pass on the two surviving interest blurbs — *"In this research project we will try to approach…"* is written as an in-progress PhD.

### 6c. Facts to correct

- [ ] `data.ts` `email`: `h.j.fokkema@uva.nl` will bounce. Decide the public contact address.
- [ ] Header/role lines and meta description — engineer framing everywhere (Phases 2 and 4 place them; confirm here).
- [ ] News 2026-02 tail and the new Plumerai item (Phase 3a).
- [ ] CV PDF: **not stale** — `public/files/CV_Hidde_Fokkema_public.pdf` was updated 2026-05-20, the same day as the "added new job" commit. Skim it once for the same typo/title issues, no regeneration needed.

### 6d. Deliberately not doing

**A blog.** `blog.tsx` was a "Coming soon!" that sat unrouted for years, and an empty blog is a worse signal than no blog. If you later want this, add a `Notes` section instead — the lower-commitment framing — and only once three posts exist. Three is credible, zero is neutral, one lonely post from 2026 is not.

---

## Phase 7 — Deployment & cleanup (~1 h)

1. **`Dockerfile.prod`** (replaces the `node:13` one):
   ```dockerfile
   FROM node:24-alpine AS build
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . ./
   RUN npm run build
   FROM nginx:stable-alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   EXPOSE 80
   ```
   (Astro 7 requires Node ≥22.12; node:24 is current LTS.) `.github/workflows/docker-image.yml` needs no change.
2. **`.dockerignore`**: ensure `node_modules`, `dist`, `.git`.
3. **`README.md` — rewrite from scratch.** It's currently ~80% Create React App boilerplate plus a Hetzner/neovim server note that belongs in a different repo entirely. If an employer opens your GitHub, this is the first thing they read. New version: what the site is, `npm run dev` / `npm run build`, **no env var**, where content lives ("adding a publication = one object in `src/data/publications.ts`"), how it deploys. Move the server note to wherever you keep infra notes.
4. Add the website itself to `projects.ts` (Phase 3d) now that the zero-JS/Docker/Actions claim is true.
5. Delete `REDESIGN_PLAN.md` once merged.

**Verify:** `docker build -f Dockerfile.prod .` succeeds; `docker run -p 8080:80` serves all routes and a sample PDF (`/talks/ABS_talk.pdf`).

---

## Definition of done

**Build**
- [ ] `npm run dev` / `npm run build` clean, no env vars, no warnings
- [ ] `package.json` dependencies: `astro` only
- [ ] `find dist -name '*.js'` is empty; no external `<script>` remains (Font Awesome and bsky-embed both gone)
- [ ] All routes render at 320 / 768 / 1440 px; `/teaching` redirects
- [ ] Every `/files`, `/talks`, `/posters` link resolves under `npm run preview` (the trailing-slash regression is the one to catch)
- [ ] Citation meta present in `/research/` head; Google Fonts is the only external request
- [ ] Docker image builds and serves

**Content**
- [ ] `grep -ril "PhD Candidate\|uva.nl\|Powered by React\|Coming soon" dist/` returns nothing
- [ ] Typo list in 6a fully applied; talks group into 10 headings, not 18
- [ ] Every publication with a public repo has a `[Code]` link
- [ ] Projects page live with ≥5 entries; nav reads About / Projects / Research
- [ ] About page answers "what does he do now" above the fold — role, Plumerai, timeline — before any list of interests
