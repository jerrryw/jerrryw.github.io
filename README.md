# jerrryw.github.io

Personal site. React + TypeScript + Vite, deployed to GitHub Pages.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, then build to dist/
npm run lint
```

## How this is organised

```
src/
  data/           All site content, typed. Edit content HERE, not in JSX.
    types.ts      Read this first — it is a tour of the TypeScript used.
    profile.ts    Name, tagline, bio, contact channels
    projects.ts   Projects + domain labels
    experience.ts Roles
    skills.ts     Skill groups
    education.ts  Degrees + certifications
  components/
    layout/       Container, Section, Nav, Footer
    ui/           TagList, MetricList
  sections/       One component per page section
  index.css       Design tokens at the top, then component styles
```

The rule that keeps this maintainable: **content lives in `src/data`, and
components render over it.** When your resume changes, you edit an array.

## State

All six sections are implemented. Nothing is stubbed.

If you still want the React practice, `git rm` these four and rewrite them
against the data — the versions here are the target to compare against:

1. `Skills.tsx` — shortest, `<TagList />` does the work
2. `Education.tsx` — conditional rendering on an optional `href`
3. `Contact.tsx` — `.filter()` on an optional `primary` flag
4. `Experience.tsx` — largest; closest to `Projects.tsx`

`sections/Projects.tsx` is the most heavily commented file and the best
reference for how a section is put together.

## Before you deploy

- [x] `Jerry_Wang_Resume.pdf` is in `public/` — **keep this exact filename**,
      the old site already links to it publicly and that URL may be in
      applications you have sent
- [ ] Add your photo to `public/` if you want one in the hero
- [ ] Make a 1200×630 `og.png`, drop it in `public/`, uncomment the
      `og:image` tag in `index.html`
- [ ] Check every link in `data/profile.ts` resolves

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

One-time setup: repo → Settings → Pages → Source → **GitHub Actions**.

The old site is plain HTML at the repo root. Before the first push, move it to
a branch (`git checkout -b old-site && git push -u origin old-site`) so you can
get back to it.

## Notes on choices made here

**Plain CSS, not Tailwind.** You wanted to adjust visuals yourself. With
tokens at the top of `index.css`, a palette change is six lines in one place;
with Tailwind it is a find-and-replace across every component. The trade-off is
real though: Tailwind is what most job postings list, and if you would rather
have that on your resume, converting later is mechanical.

**No router.** One scrolling page with anchor links. Client-side routing on
GitHub Pages 404s on direct URL access without a workaround, and a portfolio
does not need it.

**Strict TypeScript.** `noUncheckedIndexedAccess` and `no-explicit-any` are on.
They will annoy you. That annoyance is the lesson — when the compiler objects,
handle the case rather than silencing it with `any` or `!`.
