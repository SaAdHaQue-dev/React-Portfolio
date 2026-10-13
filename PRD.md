# PRD: Personal Portfolio Website (UI/UX & Brand Designer)

> **For the Antigravity agent.** Read this whole file before writing code. First inspect the existing codebase (navbar, hero and about are already built) and **reuse and extend them** instead of rewriting. Match the existing stack if it differs from the one suggested below.

---

## 1. Overview

A multi-page, highly animated portfolio for a UI/UX & Brand Designer. The existing single-page design (navbar, hero with arch-shaped photo, stats, services strip, trusted-by grid, about, portfolio teaser) becomes a complete website with multiple pages, page transitions, scroll-driven animation and a polished, editorial look.

**Goals**
- Present the designer as premium, confident and detail-obsessed.
- Convert visitors into contact inquiries.
- Showcase work through immersive case studies.
- Feel handcrafted: smooth motion, no jank, fast load.

**Non-goals**: no CMS-driven admin panel in v1, no user accounts, no e-commerce.

---

## 2. Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) + TypeScript. If the project is already Vite/React, keep it and use React Router. |
| Styling | Tailwind CSS (already installed), with design tokens in `tailwind.config` |
| Animation | Framer Motion (page transitions, UI micro-interactions), GSAP + ScrollTrigger (scroll storytelling, pinned and parallax sections) |
| Smooth scroll | Lenis |
| Fonts | `next/font` or Google Fonts (see Design System) |
| Forms | React Hook Form + Zod; submit via Resend / Formspree / Web3Forms (env-configurable) |
| Icons | lucide-react |
| Deploy | Vercel |

---

## 3. Design System (derived from the current design)

### 3.1 Colors
```
--bg-outer:   #BABCB5   /* sage gray page backdrop */
--bg-surface: #DCDDD8   /* main off-white surface */
--ink:        #1A1A1A   /* primary text, buttons, pills */
--ink-muted:  #6B6C68   /* secondary text */
--line:       #BDBFB8   /* 1px borders, grid lines */
--accent:     #E8622C   /* sparing orange accent (hover glow, active dot) */
```
Add a dark-mode variant (`--bg-surface: #151515`, `--ink: #E9EAE5`) as a stretch goal.

### 3.2 Typography
- **Display (headings, nav, labels):** tall condensed bold uppercase sans, e.g. *Bebas Neue* or *Anton*. Tight line-height (~0.9).
- **Editorial accent:** high-contrast serif italic for words like "& Brand" (e.g. *Instrument Serif Italic*).
- **Body:** condensed light serif (e.g. *Instrument Serif* or *Newsreader*), muted color.
- Scale: hero `clamp(3.5rem, 9vw, 9rem)`, section titles `clamp(2.5rem, 6vw, 5rem)`, body `1rem–1.25rem`.

### 3.3 Shapes and layout
- Page sits as a rounded-corner surface card inside the sage backdrop on desktop (max-width ~1200px, generous padding); on mobile it goes full-bleed.
- **Arch mask** for the hero portrait (top flat, bottom fully rounded). Reuse it across pages for portraits and key imagery.
- Pill buttons: black, uppercase condensed text, circular arrow chip on the right.
- Hairline grid (1px `--line`) for logo wall, stats and service columns.
- Large radius (24px) on project cards and media.

### 3.4 Reusable components
`Navbar`, `MenuOverlay`, `Footer`, `PillButton`, `ArrowChip`, `SectionHeader` (title left, caption right), `StatCounter`, `ServiceItem`, `LogoGrid`, `ProjectCard`, `ProjectRow`, `Marquee`, `Reveal` (text and block reveal wrapper), `MagneticButton`, `CustomCursor`, `PageTransition`, `Preloader`, `Tag`.

---

## 4. Site Map and Pages

| Route | Page | Status |
|---|---|---|
| `/` | Home | Extend (navbar, hero, about exist) |
| `/work` | Work index | New |
| `/work/[slug]` | Case study | New |
| `/about` | About | New (expand current about section) |
| `/services` | Services | New |
| `/contact` | Contact | New |
| `/journal` | Journal (blog/notes) | New, optional v1.1 |
| `/404` | Not found | New, on-brand |

### 4.1 Home `/`
Sections in order:
1. **Navbar**: dot + name logo left, MENU pill right (opens full-screen overlay).
2. **Hero**: "Hey. I'm {Name}," + headline "A UI/UX *& Brand* DESIGNER", short blurb, CONTACT ME pill, arch-masked portrait, right-aligned stats (15+ Years, 280+ Projects, 99% Satisfaction, 50 Clients).
3. **Services strip**: 4 columns (User-Centered Design, Brand Identity & Strategy, Responsive & Modern UI, Seamless Prototyping), separated by vertical hairlines.
4. **Trusted By**: 4×2 bordered logo grid. Grayscale logos that colorize on hover; optional slow marquee on mobile.
5. **About teaser**: large condensed heading left, paragraph right, "More about me" link to `/about`.
6. **Selected Work**: 3–4 full-width project cards (image, title left, tagline + year + category tag right). "View all work" button to `/work`.
7. **Process** (new): 4-step horizontal pinned scroll (Discover, Define, Design, Deliver).
8. **Testimonials** (new): large quote slider with drag support.
9. **CTA band** (new): giant "LET'S WORK TOGETHER" text with magnetic button to `/contact`.
10. **Footer**: email, socials, back-to-top, local time, copyright.

### 4.2 Work `/work`
- Page header "WORK" with count (e.g. "(12)").
- Filter chips: All / UI-UX / Branding / Web / Mobile (animated layout filter using Framer Motion `layout`).
- Two view modes toggle: **Grid** (2-col cards) and **List** (large rows with hover image preview that follows the cursor).
- Each card links to its case study.

### 4.3 Case Study `/work/[slug]`
- Full-bleed hero image with title, year, role, client, services, timeline.
- Overview, Challenge, Solution blocks with editorial layout.
- Image gallery with parallax and varied aspect ratios, plus optional device mockups.
- Results strip (3 big counters).
- Next project teaser at the bottom (large title; clicking triggers a transition into that project).
- Seed with at least 4 projects (first: **Soundwave**, "Designing an Immersive Audio Tech Experience", 2025, Branding).

### 4.4 About `/about`
- Large portrait in arch mask with subtle parallax.
- Story paragraph, values, tools/skills list (Figma, Framer, Webflow, Illustrator, After Effects, etc.), experience timeline (scroll-drawn vertical line), awards/recognition, downloadable résumé button (PDF).
- Fun facts / "currently" widget (listening to, reading, location time).

### 4.5 Services `/services`
- Four service blocks (same as the home strip) each expanding into detail: description, deliverables, typical timeline.
- Accordion or sticky-stack cards with scroll-triggered stacking.
- Pricing/engagement models (Project, Retainer, Consulting) as optional cards.
- FAQ accordion; CTA to contact.

### 4.6 Contact `/contact`
- Huge heading "LET'S TALK".
- Form: name, email, budget (select chips), project type, message, submit. Validation with inline errors, loading and success states with animation.
- Direct email, social links, availability badge ("Available for new projects" with pulsing dot), local time.

### 4.7 Journal `/journal` (optional)
- Article list with hover reveal; MDX-based posts.

### 4.8 404
- Oversized "404" condensed type with playful hover interaction and link home.

---

## 5. Navigation

- **Navbar**: sticky and transparent. Hides on scroll down, shows on scroll up. Logo dot scales on hover.
- **MenuOverlay**: full-screen dark panel sliding in via clip-path. Large condensed links (Home, Work, About, Services, Contact, Journal) with staggered text reveal, an index number beside each, social links and email at bottom. Close on ESC and route change.
- Active-route indicator (small dot).

---

## 6. Animation Spec

| Area | Behavior |
|---|---|
| **Preloader** | Short (≤1.8s) intro: name letters rise in, counter 0→100, panel wipes up. Shown once per session. |
| **Page transitions** | Surface-colored panel with curved edge wipes over, route swaps, then wipes away (Framer Motion `AnimatePresence`). Navbar persists. |
| **Smooth scroll** | Lenis, synced with GSAP ScrollTrigger. |
| **Hero** | Headline lines reveal from masked overflow (stagger); arch image scales from 1.1→1 with fade; stats count up when visible; slight mouse-parallax on portrait. |
| **Text reveals** | Split by line/word; translateY 100%→0 with easing `cubic-bezier(0.22, 1, 0.36, 1)`. |
| **Project cards** | Image scale on hover (1.04) plus cursor "VIEW" bubble; image inner parallax on scroll. |
| **Work list view** | Hover shows floating preview image following cursor with lerp smoothing. |
| **Buttons** | Magnetic pull on hover; arrow chip rotates 45°; background fill sweep. |
| **Marquee** | Infinite logo/text marquee, speed reacts to scroll velocity. |
| **Process section** | GSAP pinned horizontal scroll with progress bar. |
| **Timeline (About)** | SVG line draws with scroll progress; items fade/slide in. |
| **Custom cursor** | Small dot plus follower ring; grows over links, becomes "VIEW"/"DRAG" labels on media. Disabled on touch. |
| **Footer** | Giant name text with hover letter-spacing/ink effect. |

**Rules**
- Respect `prefers-reduced-motion`: disable parallax, marquees, big transitions; keep simple fades.
- Animate only `transform` and `opacity` where possible; use `will-change` sparingly.
- Target 60fps on mid-range mobile; lazy-init heavy GSAP timelines.

---

## 7. Responsiveness

Breakpoints: 360 / 640 / 768 / 1024 / 1280 / 1536.
- Mobile: stack hero (text above arch image), stats become a 2×2 grid, services strip becomes a 2×2 or horizontal scroll, logo grid 2×4, project cards full-width, menu overlay full-screen.
- Disable custom cursor and heavy hover effects on touch.
- Horizontal pinned scroll falls back to a vertical stack on mobile.

---

## 8. Content and Data

- Put all copy, stats, projects, services, testimonials, clients and socials in typed data files (`/data/*.ts`), not hardcoded in components.
- **The name ("Solt"/"Dominic"), stats, logos ("Frame Blox", etc.) and project copy in the reference design are placeholders.** Centralize them in `/data/site.ts` so they can be swapped in one place.
- Images: provide `public/images/` with placeholders; use `next/image` with blur placeholders, WebP/AVIF, and proper `sizes`.

Project schema:
```ts
type Project = {
  slug: string; title: string; tagline: string; year: number;
  category: 'UI/UX' | 'Branding' | 'Web' | 'Mobile';
  cover: string; role: string; client: string; services: string[];
  duration: string; overview: string; challenge: string; solution: string;
  gallery: { src: string; alt: string; span?: 'full' | 'half' }[];
  results?: { label: string; value: string }[];
};
```

---

## 9. SEO, Accessibility, Performance

- Per-page metadata, Open Graph and Twitter images, sitemap and robots, JSON-LD (Person, CreativeWork).
- Semantic HTML, a single H1 per page, visible focus states, alt text, color contrast ≥ 4.5:1, full keyboard navigation (menu overlay focus trap), skip-to-content link.
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95, Best Practices ≥ 95.
- LCP < 2.5s, CLS < 0.05. Preload display fonts, lazy-load below-the-fold media.

---

## 10. Suggested Project Structure

```
/app
  layout.tsx, page.tsx
  work/page.tsx, work/[slug]/page.tsx
  about/page.tsx, services/page.tsx, contact/page.tsx
  journal/..., not-found.tsx
/components
  layout/ (Navbar, MenuOverlay, Footer, PageTransition, Preloader)
  ui/ (PillButton, ArrowChip, Tag, MagneticButton, CustomCursor, Reveal)
  sections/ (Hero, ServicesStrip, TrustedBy, AboutTeaser, SelectedWork, Process, Testimonials, CtaBand)
/data (site.ts, projects.ts, services.ts, testimonials.ts, clients.ts)
/lib (lenis.ts, gsap.ts, utils.ts)
/public/images, /public/fonts, /public/resume.pdf
```

---

## 11. Milestones (build in this order)

1. **Foundation**: tokens in Tailwind config, fonts, global styles, Lenis, layout shell, surface-card wrapper.
2. **Core components**: PillButton, SectionHeader, Reveal, Marquee, StatCounter, MenuOverlay, Footer.
3. **Home completion**: services strip, trusted-by, about teaser, selected work, process, testimonials, CTA.
4. **Motion layer**: preloader, page transitions, hero animation, custom cursor, magnetic buttons.
5. **Work pages**: index (filter plus grid/list) and case study template with 4 seeded projects.
6. **About, Services, Contact, 404** pages; contact form wired to an email service.
7. **Polish**: responsive pass, reduced-motion support, a11y audit, SEO metadata, image optimization.
8. **QA and deploy**: cross-browser (Chrome, Safari, Firefox), Lighthouse run, deploy to Vercel.

---

## 12. Acceptance Criteria

- All routes in §4 render, are linked from the menu, and transition smoothly.
- Hero, navbar and about visually match the reference design pixel-closely at desktop and are fluid on mobile.
- Every section has an entrance animation; no layout shift on animation start.
- Contact form validates, submits, and shows success and error states.
- `prefers-reduced-motion` disables non-essential motion.
- No console errors, passes the Lighthouse targets in §9.
- Content is editable only via `/data` files.

---

## 13. Open Questions (agent: ask before assuming)

1. Final name, tagline, real stats, logos and project content.
2. Preferred form backend (Resend, Formspree, Web3Forms).
3. Is Journal in v1?
4. Dark mode in v1?
5. Domain and deploy target.
