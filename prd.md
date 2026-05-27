# Portfolio Website — PRD
**Owner:** Usman Musa Usman (Synn)  
**Role:** Frontend Developer · Founder, Sentratech Labs  
**Version:** 1.0  
**Deploy Target:** Vercel (free domain)  
**Repo:** github.com/onlysyn/portfolio

---

## 1. Overview

A personal portfolio website for Usman Musa Usman — a frontend developer who builds clean, functional web products. The site needs to feel handcrafted, not templated. GitHub-influenced aesthetic: dark, data-forward, typographically precise, with subtle interactive details that signal craft.

No AI-generated patterns. No purple gradients. No generic components. Every decision should feel intentional.

---

## 2. Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Via Google Fonts (decided during build) |
| Deployment | Vercel |
| Version Control | Git + GitHub |

---

## 3. Design Direction

**Aesthetic:** GitHub-influenced dark theme. Near-black background (`#0d1117`), off-white text, muted borders (`#30363d`), with a single sharp accent color (green — `#39d353`, pulled from GitHub's contribution graph).

**Typography:** Pair a monospace or technical display font for headings with a clean, readable serif or sans for body. Nothing generic. Fonts must feel like a deliberate choice.

**Layout:** Card-based. Grid-driven. Crisp borders. Intentional whitespace. Subtle dot or grid background pattern in hero section.

**Interactions:**
- Smooth page load with staggered section reveals (Framer Motion)
- Project cards: static screenshot by default → video autoplay on hover
- Custom cursor (subtle, dot-style)
- Hover states on all interactive elements
- No jarring transitions — everything eased

**No:** Lorem ipsum, stock photos, purple/blue gradients, cookie-cutter hero layouts, generic card shadows.

---

## 4. Sections

### 4.1 Hero
- Full-viewport height
- Name: **Usman Musa Usman**
- Title: animated or static — *Frontend Developer*
- Short punchy tagline (see §6 for copy)
- Subtle animated background (dot grid or noise texture)
- CTA button → scrolls to Work section
- Staggered entrance animation on load

### 4.2 About
- 2-column layout: text left, visual element right (could be a fake contribution graph, code snippet block, or abstract visual)
- Short bio (see §6 for copy)
- Founder badge: **Sentratech Labs** — clickable, links to placeholder URL (`#sentratech` until live)
- Contact info inline:
  - Email: selfsyntax@gmail.com
  - Phone: +2348160001092

### 4.3 Work
- Section title: *Selected Work* or *Projects*
- Filterable or static grid (2 columns on desktop, 1 on mobile)
- Each project card contains:
  - Preview area: screenshot (default) → video autoplay on hover (smooth crossfade)
  - Project name
  - Short description (1–2 lines)
  - Tech stack tags (pill badges)
  - Links: Live Site + GitHub (icon buttons)
- Cards are extensible — more projects can be added via a data file (`/data/projects.ts`)

**Initial Projects:**

| # | Name | Stack | Preview |
|---|---|---|---|
| 1 | Azbir Website | Next.js 14, TypeScript, Tailwind, Framer Motion, Sanity CMS, Formspree, Vercel | image + video (to be added) |
| 2 | Thread X Dashboard | HTML, CSS, JavaScript, Supabase, Chart.js, jsPDF, Vercel | image + video (to be added) |

> Assets (screenshots + MP4s) will be placed in `/public/projects/azbir/` and `/public/projects/threadx/` respectively. Filenames: `preview.jpg` and `preview.mp4`.

### 4.4 Skills
- Not a generic list. Display as a grouped grid or tag cloud with category labels
- Categories:
  - **Languages:** HTML, CSS, JavaScript, TypeScript
  - **Frameworks & Libraries:** Next.js, React, Tailwind CSS, Framer Motion
  - **Backend & Data:** Supabase, Sanity CMS, Chart.js
  - **Tools & Platforms:** Git, GitHub, Vercel, Figma, jsPDF, Formspree

### 4.5 Contact
- Simple, not a wall of forms
- Heading: something direct (e.g. *Let's build something*)
- Email: selfsyntax@gmail.com (mailto link)
- Phone: +2348160001092 (tel link)
- GitHub: github.com/onlysyn (icon + link)
- Footer line: *Designed & built by Usman Musa Usman · Founder, [Sentratech Labs](#sentratech)*

---

## 5. File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page — renders all sections
│   └── globals.css         # Tailwind base + custom CSS vars
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Work.tsx
│   ├── ProjectCard.tsx     # Handles image/video hover swap
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── projects.ts         # Project data array — edit here to add projects
├── public/
│   └── projects/
│       ├── azbir/
│       │   ├── preview.jpg
│       │   └── preview.mp4
│       └── threadx/
│           ├── preview.jpg
│           └── preview.mp4
├── tailwind.config.ts
├── next.config.ts
└── .gitignore
```

---

## 6. Copy

**Tagline (Hero):**
> "I build interfaces that work — and ones people actually want to use."

**Bio (About):**
> Frontend developer with a thing for clean code and even cleaner UIs. I've shipped production projects across different industries — from content-driven websites to data-heavy dashboards. I care about the details most people skip: load states, transitions, the way a button feels when you click it.
>
> Currently building products under Sentratech Labs.

---

## 7. Performance & SEO

- Next.js metadata API for title, description, OG tags
- All images use `next/image` with proper `alt` text
- Videos: `autoPlay muted loop playsInline` — no audio, no controls
- Lazy load project videos (only load when card is in viewport)
- Target Lighthouse score: 90+ across all categories

---

## 8. Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| Mobile (`< 768px`) | Single column, stacked sections, no video hover (tap to play) |
| Tablet (`768px–1024px`) | 2-col grid for projects, adjusted hero |
| Desktop (`> 1024px`) | Full layout as designed |

---

## 9. Git Workflow

- Repo name: `portfolio`
- Main branch: `main`
- Commit as you go per section
- Deploy via Vercel — connect GitHub repo, auto-deploy on push to `main`

---

## 10. Assets Checklist (Before Launch)

- [ ] Azbir — `preview.jpg` screenshot
- [ ] Azbir — `preview.mp4` screen recording
- [ ] Thread X — `preview.jpg` screenshot
- [ ] Thread X — `preview.mp4` screen recording
- [ ] Favicon (`.ico` or `.svg`)
- [ ] OG image (`1200×630px`) for link previews

---

## 11. Out of Scope (v1)

- Blog / writing section
- CMS for projects
- Dark/light mode toggle
- Animations beyond Framer Motion basics
- Any backend / form handling (contact is mailto only for now)
