# Product Definition — WebXC

## Overview

WebXC is a principal-led digital performance consultancy that makes established New Zealand businesses clearly understood, trusted, and citable by both search engines and AI systems. The website is built and managed entirely through an autonomous agentic Claude workflow — no CMS, no framework, no database. The agent plans its own architecture, generates reference documentation, builds pages, deploys to preview, visually inspects its own work, and self-corrects — with Andrew operating as product manager rather than developer.

**Business:** WebXC
**Principals:** James (Strategy & Positioning) and Andy (Technical & Performance)
**Owner:** Andrew Newman (hello@colasix.com)
**Target market:** Established NZ businesses, $2M–$50M revenue
**Repository:** github.com/colasix/my-site
**Hosting:** Cloudflare Pages (free tier)
**Agent environment:** Claude Code (terminal) + Cowork (skills & file management)
**Deploy pipeline:** Agent writes code → git push → Cloudflare auto-build → agent screenshots & validates → iterates if needed

---

## The Business

### One-liner

WebXC is a principal-led digital performance partner that makes established businesses clearly understood, trusted, and citable by both search engines and AI, by leading with business strategy and building a digital foundation the client fully owns.

### Core message

WebXC makes established businesses clearly understood, trusted, and citable across search and AI, by leading with business strategy, building what you own, and structuring your digital presence so the machines that now influence your customers can actually find you, interpret you, and recommend you.

### Call to action

"The way customers find and evaluate businesses has structurally changed. Let's have a conversation about whether your digital presence is built for it."

**CTA button text:** "Let's Have a Conversation"

### Target audience

**Location:** New Zealand
**Revenue range:** $2M–$50M
**Decision makers:** Business owners, CEOs, marketing directors

**Primary personas:**

- **The Legacy Moderniser** — Owner of an established business whose real-world reputation far outstrips their digital presence. Wants a website that works as hard as the business does.
- **The Burned Decision Maker** — CEO or marketing director who previously paid for opaque SEO retainers with no tangible result. Wants to own their visibility rather than rent it.
- **The Strategically Unaware Leader** — Business owner or marketing director who has noticed results softening but hasn't connected the decline to the structural shift in how AI and search now evaluate businesses. Likely the largest segment. Once they see the gap, they act.
- **The Ethical Medical Specialist** (secondary) — Private practices and YMYL professionals for whom online reputation accuracy is non-negotiable.

### Value themes

1. **The Business-First Build** — Positioning, messaging, product/service taxonomy, and commercial logic are defined before any optimisation or build work begins. The digital presence becomes a translation of business strategy, not just design or content.

2. **The Owned Digital Asset** — 100% of output is client-owned. No manufactured backlinks, no opaque retainers, no visibility that vanishes when spend stops. The digital foundation survives algorithm changes and serves as the source material AI systems learn from.

3. **AI and Search Readiness** — Dual-channel semantic architecture (schema markup, entity resolution, topic authority, content structure) calibrated simultaneously for Google, ChatGPT, Perplexity, and future AI models.

4. **From Authority to Consensus Leadership** — The long game. Building genuine topical authority through sustained, strategic content development until the business becomes the consensus source in its space.

### Service structure

**Entry point:** Initial Conversation (free) → Discovery & Strategic Review (paid)

**Option A: Content & Digital Authority Programme** — For businesses whose existing website structure is adequate but whose positioning, content, and digital signals don't reflect the strength of the business. We clarify messaging, restructure content around search intent and buyer logic, implement semantic and entity signals, and fix conversion pathways. Three delivery areas: higher conversions, more traffic, easier content management. Everything is permanently owned by the client.

**Option B: Complete Digital Foundation Build** — Everything in Option A plus complete website design and technical build on WordPress. For businesses where the platform itself is the constraint. Same three delivery areas, built from the ground up into the architecture.

**Add-on: Ongoing Authority & Visibility Programme** — Retained engagement for continued strategic content development, authority building, AI visibility monitoring, and quarterly strategic advisory. Available after completing Option A or Option B.

### Language guidance

Grounded, plain, specific. No American-style grandiosity, no branded frameworks, no jargon-first framing. Lead with the insight or the problem, not the label. NZ conversational tone. Short declarative sentences. No em dashes. NZ spelling (optimise, programme, colour, centre). No colons in headings. Active voice exclusively. See `writing-style.md` for full rules.

### Key proof points

- Over 65% of searches end without a click
- When an AI Overview appears, the top organic result can lose more than half its usual traffic
- 73% of B2B websites experienced significant traffic losses between 2024 and 2025
- Brands cited in AI responses earn roughly 35% more organic clicks than non-cited competitors

---

## Current State

The site is a single-page homepage with a contact section above the footer, live on Cloudflare Pages. Design is Swan.io-inspired: Inter font, dark gradient hero, frosted-glass header, generous whitespace, premium modern feel.

```
my-site/
├── index.html                    ← Single homepage with 7 sections + contact
├── assets/
│   ├── css/main.css              ← Swan-inspired responsive styles
│   └── js/main.js                ← Smooth scroll for anchor links
├── components/
│   ├── header.html               ← Logo + CTA (single page, no nav)
│   ├── footer.html               ← Brand + copyright
│   └── head-seo.html             ← Meta charset, viewport, robots, favicon
├── scripts/
│   ├── build.js                  ← Partial injection (BUILD markers → components)
│   └── capture.js                ← Playwright screenshot tool for vision loop
├── site-config.json              ← Site metadata (needs updating)
├── product.md                    ← This file
├── writing-style.md              ← Copy rules (no em dashes, NZ spelling, etc.)
├── webpage-wireframes/           ← Wireframe skill + source docs
│   ├── source-docs/
│   │   └── Service-Offerings.md  ← Updated service structure
│   ├── positioning-and-messaging/
│   │   ├── Positioning.md
│   │   └── Key Messaging.md
│   └── output/
│       └── homepage.md           ← Current homepage wireframe
├── website-copy/                 ← Copy generation skill
├── package.json
├── wrangler.jsonc
├── robots.txt
├── LLMs.txt
└── _site/                        ← Build output (served by Cloudflare Pages)
```

### Design Language (current — Swan.io-inspired)

- **Typography:** Inter (Google Fonts), weights 400–900
- **Heading style:** Heavy weight (800), tight tracking (-0.04em on hero, -0.035em on sections), navy (#1A2A40)
- **Body text:** Secondary gray (#5f6c7b), 1.6 line-height
- **Hero:** Dark gradient background (navy → steel blue), animated red radial glow, white text
- **Header:** Frosted glass (backdrop-filter blur), sticky
- **Cards:** 16px border-radius, soft borders (#f0f2f5), hover lift with shadow transition
- **CTA buttons:** Pill shape (100px radius), red accent (#D62828), hover shadow glow
- **Secondary buttons:** Transparent with border, hover fills with soft background
- **Backgrounds:** Alternating white (#ffffff) and soft gray (#f7f8fa)
- **Contact section:** Dark gradient matching hero, white form card with shadow
- **Accent colour:** Red (#D62828) for CTAs, step labels, outcome card borders, principal titles
- **Approach:** Mobile-first, breakpoints at 640px (tablet) and 1024px (desktop)
- **Transitions:** 0.25s cubic-bezier(0.4, 0, 0.2, 1)

---

## The Vision: Autonomous Agentic Website Management

### Andrew's Role — Product Manager

Andrew stops writing code and checking preview links. Interactions look like this:

> "Claude, implement the Services page based on the sitemap and service taxonomy. Run your deployment and vision loop until the layout matches the brand guidelines and looks good on mobile. Let me know when you are done."

The agent spins for 5–10 minutes — running terminal commands, deploying, screenshotting its own work, critiquing itself against the brand guidelines, and fixing its own CSS — before returning control.

### The Agent's Role — Technical Lead, Developer, QA

The agent autonomously handles: planning and documentation, code generation, deployment, visual inspection, self-correction, SEO validation, and content management. It reads its own reference docs (`/docs/` folder) before every task to stay consistent.

---

## Target Architecture

```
my-site/
├── index.html                                     ← Homepage (7 sections + contact)
├── about/index.html                               ← James & Andy, approach, credentials
├── services/index.html                            ← Hub: Option A / Option B / Ongoing
├── services/
│   ├── content-digital-authority/index.html        ← Option A detail
│   ├── complete-digital-foundation/index.html      ← Option B detail
│   └── ongoing-authority-visibility/index.html     ← Add-on detail
├── discovery/index.html                            ← Paid discovery info + CTA
├── blog/
│   ├── index.html                                  ← Blog listing (auto-generated)
│   └── post-slug/index.html
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   └── images/
├── components/
│   ├── header.html
│   ├── footer.html
│   └── head-seo.html
├── docs/                           ← Agent's reference brain (self-generated)
│   ├── brand-guidelines.md         ← Design tokens, spacing, component patterns
│   ├── sitemap.md                  ← All pages, purpose, keywords, status
│   ├── architecture-plan.md        ← File patterns, CSS naming, build process
│   ├── messaging.md                ← Key messaging distilled for agent use
│   └── service-taxonomy.md         ← Service structure and positioning
├── scripts/
│   ├── build.js                    ← Partial injection (Cloudflare build command)
│   └── capture.js                  ← Playwright screenshot tool for vision loop
├── site-config.json                ← Nav, page metadata, blog index
├── product.md                      ← This file
├── writing-style.md                ← Copy rules
├── package.json
├── wrangler.jsonc
└── .gitignore
```

### Key Architectural Decisions

1. **No framework.** Vanilla HTML/CSS/JS in folders. No build toolchain beyond partial injection. Every page is readable by both humans and Claude.

2. **Shared components via build-time injection, not runtime JS.** A lightweight `build.js` script reads partials from `/components/` and injects them into each page before deploy. Zero runtime cost, zero SEO risk. Cloudflare Pages runs the build command on every push.

3. **`site-config.json` as source of truth.** Acts as the CMS database — navigation structure, page metadata, blog post index, site-wide settings. The agent reads and updates this file when creating or modifying content.

4. **`/docs/` folder as agent memory.** The agent generates and maintains its own reference documentation. Before every task, it reads these files to ensure consistency. This solves the session continuity problem — the agent's "brain" persists in the repo.

5. **Clean URLs via directory-based routing.** Each page lives at `page-name/index.html`, giving clean URLs like `/services/`, `/blog/post-slug/`.

6. **SEO and AI readiness built into every page.** Full schema markup (Organisation, Person, Service, FAQ), Open Graph, proper heading hierarchy, semantic HTML, structured data for every page type.

7. **The site itself is proof of concept.** WebXC's site must demonstrate every practice it recommends to clients — semantic architecture, entity resolution, E-E-A-T signals, AI crawler accessibility, LLMs.txt.

8. **Language matches the brand.** Grounded, plain, specific. NZ conversational tone. All copy rules in `writing-style.md`.

---

## Roadmap

### Phase 1: Autonomous Bootstrap (Self-Planning)

The agent creates its own reference documentation before writing any site code. Business context from source docs is distilled into the agent's working docs.

**Deliverables:**

- `/docs/brand-guidelines.md` — Design tokens, typography, spacing, component patterns. Reflects the Swan-inspired design language.
- `/docs/sitemap.md` — Every page, its purpose, target keywords, and build status.
- `/docs/architecture-plan.md` — File conventions, CSS class naming, responsive breakpoints, partial injection patterns, SEO template, schema patterns.
- `/docs/messaging.md` — Key messaging framework distilled for agent use: core message, persona messaging, value themes, proof points.
- `/docs/service-taxonomy.md` — Service structure: entry flow, Option A, Option B, Ongoing, delivery areas.
- Updated `site-config.json` — Reflecting current single-page state and updated service naming.
- `.gitignore`

**How it works:** The agent reads `product.md`, `writing-style.md`, and source docs, then generates all `/docs/` files. No new page code until docs are finalised.

**Status:** Not started

---

### Phase 2: Tooling & Deployment Pipeline

Wire up the tools the agent needs to operate autonomously.

**Deliverables:**

- `scripts/build.js` — ✅ Done. Partial injection working.
- `scripts/capture.js` — ✅ Done. Playwright screenshot tool ready.
- `package.json` — ✅ Exists. Needs Playwright dependency.
- **Cloudflare Wrangler CLI** — Installed. Agent can run `wrangler pages deploy` directly.
- **Git automation** — Agent can run git commands autonomously.

**Deploy options:**

| Method | Use case |
|--------|----------|
| `git push` → Cloudflare auto-build | Standard deploys, production pushes to main |
| `wrangler pages deploy` | Quick preview deploys during iteration loops |
| Branch push → Cloudflare preview URL | Staging review before merging to main |

**Status:** Partially complete — build.js and capture.js exist, need to verify Playwright is installed and capture.js works

---

### Phase 3: The Vision Loop (See & Iterate)

The core autonomous cycle. The agent builds, deploys, screenshots, evaluates, and fixes without human intervention.

**The loop:**

```
Step A: Write the feature (HTML/CSS/JS)
    ↓
Step B: Deploy via wrangler pages deploy → capture preview URL
    ↓
Step C: Run node scripts/capture.js <preview-URL>
    ↓
Step D: Analyse preview.png using vision capabilities
         Compare against /docs/brand-guidelines.md
         Check alignment, colours, spacing, responsiveness
    ↓
Step E: If issues found → rewrite code → repeat from Step B
         If it looks correct → commit, push to main, stop
```

**What the agent checks during visual review:**

- Layout matches brand guidelines (spacing, alignment, grid)
- Colours match design tokens
- Typography hierarchy is correct
- Mobile responsiveness (capture at multiple viewport widths)
- No visual regressions on existing sections
- Trust architecture: proof elements placed where they influence decisions

**Status:** Not started — capture.js exists but vision loop not yet exercised

---

### Phase 4: Home Page & Shared Components

Build the homepage with real WebXC content and shared elements.

**Deliverables:**

- **Homepage** — ✅ Built. 7 sections: hero, qualification, the gap, how we work, outcomes, principals, contact.
- **Component partials** — ✅ Built. header.html (logo + CTA), footer.html, head-seo.html.
- **CSS** — ✅ Built. Swan-inspired responsive styles.
- Updated `site-config.json` — Needs updating to match current state.

**Content source:** Key Messaging Framework, Service Offerings, Writing Style Guide.

**Status:** Mostly complete — homepage built, needs vision loop validation and site-config update

---

### Phase 5: Inner Pages

Build out the full site structure.

**Deliverables:**

- **About page** — James & Andy's story, WebXC approach, credentials, E-E-A-T signals
- **Services hub** — Overview of Option A / Option B / Ongoing with client journey flow
- **Option A page** — Content & Digital Authority Programme detail
- **Option B page** — Complete Digital Foundation Build detail
- **Ongoing support page** — Authority & Visibility Programme detail
- **Discovery page** — What the paid discovery involves, why it's paid, CTA to book

**Content source:** Updated Service Offerings document, Positioning, Key Messaging.

**Status:** Not started

---

### Phase 6: Blog Infrastructure

Set up the system for ongoing thought leadership content.

**Deliverables:**

- Blog post HTML template (full SEO headers, Article schema, author info)
- Blog listing page (`/blog/index.html`) auto-generated from `site-config.json`
- `sitemap.xml` auto-generated
- RSS feed (`/feed.xml`) optional
- `LLMs.txt` — ✅ Exists

**Initial blog post themes:**

- The way customers find businesses has structurally changed
- Why your website is now source material for AI
- What established NZ businesses need to know about AI visibility

**Status:** Not started

---

### Phase 7: Claude Skills

Build reusable skills that encode WebXC's site conventions.

| Skill | Purpose | Phase dependency |
|-------|---------|-----------------|
| **Section Builder** | Build a page section from description | Phase 3 |
| **Blog Post** | Create blog post, update listings, sitemap, config | Phase 6 |
| **Page Creator** | Create standalone page with SEO headers and nav | Phase 5 |
| **SEO Audit** | Crawl all HTML, check meta tags, JSON-LD, headings, alts | Phase 2 |
| **Visual QA** | Run the screenshot → analyse → fix loop on any URL | Phase 3 |
| **Deploy** | Git commit, push, verify Cloudflare build succeeds | Phase 2 |

**Status:** Not started

---

### Phase 8: Domain, Launch & SEO Validation

Final steps to go live.

**Deliverables:**

- Custom domain pointed to Cloudflare Pages
- SSL certificate (automatic via Cloudflare)
- Full SEO audit across all pages
- Schema validation (Organisation, Person, Service, Article, FAQ)
- Entity resolution check
- Person schemas for James and Andy
- AI visibility baseline
- Performance check (Lighthouse 90+)
- LLMs.txt configuration
- Sitemap submitted to Google Search Console

**Status:** Not started

---

## SEO & AI Standards (every page)

### Required in `<head>` for every page:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{Page Title} — WebXC</title>
<meta name="description" content="{155 chars max}">
<link rel="canonical" href="https://{domain}/{path}/">

<!-- Open Graph -->
<meta property="og:title" content="{Page Title}">
<meta property="og:description" content="{Description}">
<meta property="og:image" content="https://{domain}/assets/images/{og-image}.jpg">
<meta property="og:url" content="https://{domain}/{path}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="WebXC">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{Page Title}">
<meta name="twitter:description" content="{Description}">
<meta name="twitter:image" content="https://{domain}/assets/images/{og-image}.jpg">
```

### Schema markup by page type:

| Page type | Schema types |
|-----------|-------------|
| Home | Organisation, WebSite, LocalBusiness |
| About | AboutPage, Person (James), Person (Andy) |
| Service pages | Service, BreadcrumbList |
| Blog listing | Blog, BreadcrumbList |
| Blog posts | Article, Person (author), BreadcrumbList |
| All pages | BreadcrumbList |

---

## Principles

1. **Andrew is product manager, not developer.** Interactions are natural language descriptions of what the site should do or look like. The agent handles all technical execution.

2. **The agent plans before it builds.** Every task starts with reading `/docs/` and `site-config.json`. No code is written without checking the reference documentation first.

3. **The agent validates its own work.** Every visual change goes through the screenshot → analyse → fix loop. The agent doesn't declare "done" until it has visually confirmed the result.

4. **Everything lives in the repo.** Documentation, configuration, content, tooling scripts — all version controlled. The repo IS the CMS. Any new Claude session can read the repo and pick up exactly where the last one left off.

5. **Static by default.** No server-side code, no database, no runtime dependencies. HTML files on a CDN. Fast, secure, cheap, permanent.

6. **The site is the proof.** WebXC's website must demonstrate every practice it recommends to clients.

7. **Language matches the brand.** Grounded, plain, specific. All copy rules in `writing-style.md`.

---

## Source Documents

The following documents contain the full strategic detail and should be referenced by the agent when building content:

- **WebXC Key Messaging Framework** — `webpage-wireframes/positioning-and-messaging/Key Messaging.md`
- **WebXC Positioning** — `webpage-wireframes/positioning-and-messaging/Positioning.md`
- **WebXC Service Offerings** — `webpage-wireframes/source-docs/Service-Offerings.md`
- **Writing Style Guide** — `writing-style.md`
