# Product Definition — WebXC

## Overview

WebXC is a strategic digital performance partner that makes established New Zealand businesses clearly understood, trusted, and citable by both search engines and AI systems. The website is built and managed entirely through an autonomous agentic Claude workflow — no CMS, no framework, no database. The agent plans its own architecture, generates reference documentation, builds pages, deploys to preview, visually inspects its own work, and self-corrects — with Andrew operating as product manager rather than developer.

**Business:** WebXC
**Owner:** Andrew Newman (hello@colasix.com)
**Target market:** Established NZ businesses, $2M–$50M revenue
**Repository:** github.com/colasix/my-site
**Hosting:** Cloudflare Pages (free tier)
**Agent environment:** Claude Code (terminal) + Cowork (skills & file management)
**Deploy pipeline:** Agent writes code → git push → Cloudflare auto-build → agent screenshots & validates → iterates if needed

---

## The Business

### One-liner

WebXC is a strategic digital performance partner that makes established businesses clearly understood, trusted, and citable by both search engines and AI, by leading with business strategy and building a digital foundation the client fully owns.

### Core message

WebXC makes established businesses clearly understood, trusted, and citable across search and AI, by leading with business strategy, building what you own, and structuring your digital presence so the machines that now influence your customers can actually find you, interpret you, and recommend you.

### Call to action

"The way customers find and evaluate businesses has structurally changed. Let's have a conversation about whether your digital presence is built for it."

**CTA button text:** "Let's Have a Conversation" / "Book a Free Consultation"

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

**Option A: Positioning, Content & Search Optimisation** — For businesses whose existing website structure is adequate but whose positioning, content, and digital signals don't reflect the strength of the business. Includes: business positioning & messaging, product/service taxonomy & content architecture, personal brand & entity alignment, on-site technical & semantic improvements, off-site recommendations.

**Option B: Full Strategic Website Build** — Everything in Option A + complete website design and technical build. For businesses that need a new digital foundation from the ground up.

**Add-on: Ongoing Content & Optimisation Support** — Retained engagement for continued strategic content development, authority building, and AI visibility monitoring.

### Language guidance

Grounded, plain, specific. No American-style grandiosity, no branded frameworks, no jargon-first framing. Lead with the insight or the problem, not the label. NZ conversational tone.

### Key proof points

- Over 65% of searches end without a click
- When an AI Overview appears, the top organic result can lose more than half its usual traffic
- 73% of B2B websites experienced significant traffic losses between 2024 and 2025
- Brands cited in AI responses earn roughly 35% more organic clicks than non-cited competitors

---

## Current State

The site is live on Cloudflare Pages with a single hero section using placeholder fintech copy.

```
my-site/
├── index.html            ← Hero section (placeholder copy — needs WebXC content)
├── assets/
│   └── css/
│       └── main.css      ← Mobile-first responsive styles, three breakpoints
└── product.md            ← This file
```

### Design Language (established)

- **Typography:** System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Heading style:** Heavy weight (800), tight tracking (-0.03em), near-black (#0f0f0f)
- **Body text:** Gray (#6b7280), 1.6 line-height
- **CTA:** Dark pill button (#0f0f0f), 100px border-radius, inline arrow SVG
- **Background:** Light warm gray (#f8f8f8)
- **Accent colour:** Purple (#6c63ff) — used in dashboard placeholder
- **Approach:** Mobile-first, breakpoints at 640px (tablet) and 1024px (desktop)

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
├── index.html
├── about/index.html
├── services/index.html
├── services/
│   ├── positioning-content-optimisation/index.html    ← Option A
│   ├── full-digital-foundation-build/index.html       ← Option B
│   └── ongoing-content-visibility/index.html          ← Add-on
├── discovery/index.html                                ← Paid discovery info + CTA
├── blog/
│   ├── index.html                                      ← Blog listing (auto-generated)
│   └── post-slug/index.html
├── contact/index.html
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   └── images/
├── components/                     ← Partial HTML snippets for build injection
│   ├── header.html
│   ├── footer.html
│   └── head-seo.html
├── docs/                           ← Agent's reference brain (self-generated)
│   ├── brand-guidelines.md         ← Colours, typography, spacing, component patterns
│   ├── sitemap.md                  ← All pages, their purpose, target keywords, status
│   ├── architecture-plan.md        ← Technical conventions, file patterns, build process
│   ├── messaging.md                ← Key messaging framework (from source docs)
│   └── service-taxonomy.md         ← Service structure and positioning (from source docs)
├── scripts/
│   ├── build.js                    ← Partial injection (runs on Cloudflare build)
│   └── capture.js                  ← Playwright screenshot tool for vision loop
├── site-config.json                ← Site metadata, nav, blog index (the "CMS database")
├── product.md                      ← This file
├── package.json
└── .gitignore
```

### Key Architectural Decisions

1. **No framework.** Vanilla HTML/CSS/JS in folders. No build toolchain beyond partial injection. Every page is readable by both humans and Claude.

2. **Shared components via build-time injection, not runtime JS.** A lightweight `build.js` script reads partials from `/components/` and injects them into each page before deploy. Zero runtime cost, zero SEO risk. Cloudflare Pages runs the build command on every push.

3. **`site-config.json` as source of truth.** Acts as the CMS database — navigation structure, page metadata, blog post index, site-wide settings. The agent reads and updates this file when creating or modifying content.

4. **`/docs/` folder as agent memory.** The agent generates and maintains its own reference documentation — including the WebXC messaging framework and service taxonomy. Before every task, it reads these files to ensure consistency. This solves the session continuity problem — the agent's "brain" persists in the repo.

5. **Clean URLs via directory-based routing.** Each page lives at `page-name/index.html`, giving clean URLs like `/services/`, `/blog/post-slug/`.

6. **SEO and AI readiness built into every page.** Given that WebXC literally sells this as a service, the site must be a flawless example: full schema markup (Organisation, Person, Service, FAQ), Open Graph, Twitter cards, proper heading hierarchy, semantic HTML, structured data for every page type.

7. **The site itself is proof of concept.** WebXC's site should demonstrate every practice it recommends to clients — semantic architecture, entity resolution, E-E-A-T signals, AI crawler accessibility, LLMs.txt. The site is both marketing and case study.

---

## Planned Sitemap

| Page | URL | Purpose | Schema type |
|------|-----|---------|-------------|
| Home | `/` | Hero + value proposition, service overview, trust signals, CTA | Organisation, WebSite |
| About | `/about/` | Andrew's story, WebXC's approach, credentials, E-E-A-T signals | AboutPage, Person |
| Services (hub) | `/services/` | Overview of all service options with clear paths to each | Service (aggregate) |
| Option A | `/services/positioning-content-optimisation/` | Detailed breakdown of Option A offering | Service |
| Option B | `/services/full-digital-foundation-build/` | Detailed breakdown of Option B offering | Service |
| Ongoing support | `/services/ongoing-content-visibility/` | Ongoing retainer offering detail | Service |
| Discovery | `/discovery/` | What the paid discovery process involves, what you get, CTA to book | Service |
| Blog | `/blog/` | Article listing, thought leadership, market shift content | Blog |
| Blog posts | `/blog/{slug}/` | Individual articles demonstrating expertise | Article |
| Contact | `/contact/` | Contact form, booking link, location (NZ) | ContactPage |

### Blog content themes (aligned to value themes)

- The market shift: AI changing how customers discover businesses
- Zero-click search and what it means for NZ businesses
- Why your digital presence is now source material for AI
- Entity resolution: making your business machine-readable
- The difference between content volume and content authority
- Case studies / before-and-after analyses
- Personal brand and E-E-A-T for business owners
- Why owned assets beat rented visibility

---

## Roadmap

### Phase 1: Autonomous Bootstrap (Self-Planning)

The agent creates its own reference documentation before writing any site code. The WebXC business context (from the messaging framework and service taxonomy documents) is distilled into the agent's working docs.

**Deliverables:**

- `/docs/brand-guidelines.md` — Colours, typography, spacing rules, component patterns, design tokens. Reflects the established design language plus any refinements for WebXC's brand positioning (established authority, not startup).
- `/docs/sitemap.md` — Every page the site will have, its purpose, target keywords, and build status. Based on the planned sitemap above.
- `/docs/architecture-plan.md` — File conventions, CSS class naming, responsive breakpoint rules, partial injection patterns, SEO template, schema patterns for each page type.
- `/docs/messaging.md` — The WebXC key messaging framework distilled for the agent: core message, persona-specific messaging, value themes, language guidance, proof points.
- `/docs/service-taxonomy.md` — The WebXC service structure: entry point flow, Option A, Option B, ongoing support, detailed service areas. The agent references this when building service pages.
- `site-config.json` — Machine-readable site metadata, nav structure, blog index.
- `.gitignore` — Standard ignores (node_modules, .DS_Store, etc.)

**How it works:** The agent reads `product.md` (this file) and the source messaging/taxonomy documents, then generates all `/docs/` files as working references. No code is written until these docs are finalized.

**Status:** Not started — ready to begin (business context now available)

---

### Phase 2: Tooling & Deployment Pipeline

Wire up the tools the agent needs to operate autonomously in the terminal.

**Deliverables:**

- `scripts/build.js` — Node script that reads `/components/` partials and injects them into all HTML pages. Runs as Cloudflare Pages build command.
- `scripts/capture.js` — Playwright script that takes a URL, visits the page, waits for render, captures a full-page screenshot, saves as `preview.png`. The agent's "eyes."
- `package.json` — Dependencies: playwright (for screenshots), any image optimization tools.
- **Cloudflare Wrangler CLI** — Installed in the dev environment. Allows the agent to run `wrangler pages deploy` directly from terminal, getting the preview URL back as stdout. Faster feedback than waiting for GitHub webhook.
- **Git automation** — The agent can run `git add`, `git commit`, `git push` autonomously from the terminal.

**Deploy options (agent chooses based on context):**

| Method | Use case |
|--------|----------|
| `git push` → Cloudflare auto-build | Standard deploys, production pushes to main |
| `wrangler pages deploy` | Quick preview deploys during iteration loops |
| Branch push → Cloudflare preview URL | Staging review before merging to main |

**Status:** Not started

---

### Phase 3: The Vision Loop (See & Iterate)

The core autonomous cycle. The agent builds, deploys, screenshots, evaluates, and fixes — without human intervention.

**The loop:**

```
Step A: Write the feature (HTML/CSS/JS)
    ↓
Step B: Deploy via wrangler pages deploy → capture preview URL
    ↓
Step C: Run node scripts/capture.js <preview-URL>
    ↓
Step D: Analyze preview.png using vision capabilities
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
- Images/SVGs render correctly
- Trust architecture: proof elements (credentials, case studies) placed where they influence decisions

**Status:** Not started

---

### Phase 4: Home Page & Shared Components

Replace placeholder content with real WebXC content and build the site's shared elements.

**Deliverables:**

- **Hero section** — Rewritten with WebXC headline, core message, and CTA ("Let's Have a Conversation")
- **Value proposition section** — The three top benefits with proof points
- **The market shift section** — Why this matters now (the structural change in discovery)
- **Services overview** — Option A / Option B / Ongoing, with clear paths
- **Trust signals** — Proof points, credentials, approach differentiators
- **CTA section** — Final conversion block
- **Component partials** — `header.html` (responsive nav), `footer.html`, `head-seo.html`
- **Navigation** — Home, About, Services, Blog, Contact
- Updated `site-config.json` and `/docs/sitemap.md`

**Content source:** Key Messaging Framework document — core message, benefit messages, proof points, language guidance.

**Status:** Not started

---

### Phase 5: Inner Pages

Build out the full site structure.

**Deliverables:**

- **About page** — Andrew's story, WebXC approach, credentials, E-E-A-T signals, Person schema
- **Services hub** — Overview of all options with the client journey flow (Conversation → Discovery → Option A/B → Ongoing)
- **Option A page** — Full detail: what it addresses, what we deliver, what the client ends up with
- **Option B page** — Full detail: everything in A plus design, UX, technical build
- **Ongoing support page** — Content strategy, authority monitoring, strategic advisory
- **Discovery page** — What the paid discovery involves, what you get, why it's paid, CTA to book
- **Contact page** — Form, booking link, location

**Content source:** Service Taxonomy & Positioning document — detailed breakdowns for each offering, the client journey flow, naming conventions.

**Status:** Not started

---

### Phase 6: Blog Infrastructure

Set up the system for ongoing thought leadership content.

**Deliverables:**

- Blog post HTML template (full SEO headers, Article schema, author info with Person schema)
- Blog listing page (`/blog/index.html`) — auto-generated from `site-config.json`
- `sitemap.xml` — auto-generated, updated with each new post
- RSS feed (`/feed.xml`) — optional, auto-generated
- `LLMs.txt` — AI-specific access configuration

**Blog post workflow:**

1. Andrew provides: title, description, content (markdown or plain text)
2. Agent creates post directory and `index.html` from template
3. Agent updates blog listing page
4. Agent updates `site-config.json` blog index
5. Agent updates `sitemap.xml`
6. Agent runs vision loop on the new post
7. Agent pushes to main

**Initial blog posts to consider:**

- "The way customers find businesses has structurally changed" — the core market shift argument
- "Why your website is now source material for AI" — explains the dual-layer knowledge concept
- "What established NZ businesses need to know about AI visibility" — localized, practical guide

**Status:** Not started

---

### Phase 7: Claude Skills

Build reusable skills that encode WebXC's site conventions so any future session can execute consistently.

| Skill | Purpose | Phase dependency |
|-------|---------|-----------------|
| **Site Scaffold** | Initialize full project structure from business premise | Phase 1 |
| **Section Builder** | Build a page section from description or Figma export | Phase 3 |
| **Blog Post** | Create blog post, update listings, sitemap, config | Phase 6 |
| **Page Creator** | Create standalone page with SEO headers and nav | Phase 5 |
| **SEO Audit** | Crawl all HTML, check meta tags, JSON-LD, headings, alts | Phase 2 |
| **Schema Checker** | Validate JSON-LD structured data against schema.org | Phase 2 |
| **Component Update** | Edit shared component, rebuild all pages | Phase 2 |
| **Figma Import** | Refactor Figma code export to match site conventions | Phase 3 |
| **Image Optimiser** | Compress, resize, WebP conversion, update HTML refs | Phase 2 |
| **Visual QA** | Run the screenshot → analyse → fix loop on any URL | Phase 3 |
| **Deploy** | Git commit, push, verify Cloudflare build succeeds | Phase 2 |

**Status:** Not started

---

### Phase 8: Domain, Launch & SEO Validation

Final steps to go live. The site must be a flawless demonstration of everything WebXC sells.

**Deliverables:**

- Custom domain (webxc.co.nz or similar) pointed to Cloudflare Pages
- SSL certificate (automatic via Cloudflare)
- Full SEO audit across all pages (meta tags, canonical URLs, OG images)
- Schema validation across all pages (Organisation, Person, Service, Article, FAQ)
- Entity resolution check — WebXC clearly defined across structured data
- Personal brand / author entity for Andrew — Person schema, consistent across site and directories
- AI visibility baseline — how WebXC appears in ChatGPT, Perplexity, Google AI Overviews, Claude
- Performance check (Lighthouse 90+ scores)
- AI crawler accessibility review
- LLMs.txt configuration
- Sitemap submitted to Google Search Console
- Open Graph image previews tested across platforms

**Status:** Not started

---

## SEO & AI Standards (every page)

Given that WebXC sells AI and search readiness as a service, the site itself must be a best-practice reference implementation.

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
<meta property="og:type" content="website"> <!-- or "article" for blog posts -->
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
| About | AboutPage, Person (Andrew) |
| Service pages | Service, BreadcrumbList |
| Blog listing | Blog, BreadcrumbList |
| Blog posts | Article, Person (author), BreadcrumbList |
| Contact | ContactPage |
| All pages | BreadcrumbList |

### Additional requirements:

- Proper heading hierarchy (single h1 per page)
- Alt text on all images
- Semantic HTML elements (section, article, nav, header, footer, main)
- Internal linking strategy reflecting service taxonomy
- AI crawler accessibility (no JS barriers to content)
- E-E-A-T signals: author attribution, credentials, case studies, evidence of experience
- LLMs.txt at root for AI-specific access

---

## What This Replaces

| Traditional CMS | This Workflow |
|-----------------|---------------|
| WordPress/Webflow admin panel | Natural language instructions to Claude |
| Theme/template engine | HTML files + build-time partials |
| Database | site-config.json + file structure |
| Plugin ecosystem | Claude skills |
| Content editor | Describe to Claude, agent builds autonomously |
| Preview/staging | Agent deploys to preview URL, screenshots, self-reviews |
| Manual QA | Agent vision loop (Playwright screenshots + visual analysis) |
| Hosting + server | Static files on Cloudflare CDN |
| Security updates & patches | Nothing to patch — static HTML |
| Monthly hosting cost | Free (Cloudflare Pages) |

---

## Cloudflare Pages Free Tier

- 500 builds/month
- Unlimited bandwidth and requests
- 20,000 files per project
- 1 concurrent build

---

## Principles

1. **Andrew is product manager, not developer.** Interactions are natural language descriptions of what the site should do or look like. The agent handles all technical execution.

2. **The agent plans before it builds.** Every task starts with reading `/docs/` and `site-config.json`. No code is written without checking the reference documentation first.

3. **The agent validates its own work.** Every visual change goes through the screenshot → analyse → fix loop. The agent doesn't declare "done" until it has visually confirmed the result matches the brand guidelines.

4. **Everything lives in the repo.** Documentation, configuration, content, tooling scripts — all version controlled. The repo IS the CMS. Any new Claude session can read the repo and pick up exactly where the last one left off.

5. **Static by default.** No server-side code, no database, no runtime dependencies. The site is HTML files on a CDN. Fast, secure, cheap, permanent.

6. **The site is the proof.** WebXC's website must demonstrate every practice it recommends to clients. Semantic architecture, entity resolution, E-E-A-T signals, AI crawler accessibility, dual-channel content structure — all implemented to the standard WebXC sells. The site is both marketing and case study.

7. **Language matches the brand.** Grounded, plain, specific. NZ conversational tone. Lead with the insight or the problem, not the label. No grandiosity, no jargon-first framing.

---

## Source Documents

The following documents contain the full strategic detail and should be referenced by the agent when building content:

- **WebXC Key Messaging Framework** — Audience, personas, benefit messages, proof points, core message, CTA, elevator pitch, language guidance
- **WebXC Service Taxonomy & Positioning** — Service structure (Option A, B, Ongoing), detailed service areas A–L, positioning statement, value themes, persona deep-dives, unique attributes, competitive differentiation
