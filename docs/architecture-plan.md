# WebXC — Architecture & Technical Conventions

> This file defines how the site is built. Read this before creating or modifying any HTML, CSS, or JS files. All code must follow these conventions.

---

## Stack

- **HTML5** — semantic, accessible, no framework
- **CSS3** — single stylesheet, mobile-first, no preprocessor
- **JavaScript** — vanilla ES6+, no framework, minimal usage
- **Build step** — Node.js script for partial injection (runs on Cloudflare Pages)
- **Hosting** — Cloudflare Pages (static CDN)
- **Version control** — Git, GitHub (colasix/my-site)

---

## File Structure

```
my-site/
├── index.html                                          ← Home page
├── about/index.html                                    ← About page
├── services/
│   ├── index.html                                      ← Services hub
│   ├── positioning-content-optimisation/index.html     ← Option A
│   ├── full-digital-foundation-build/index.html        ← Option B
│   └── ongoing-content-visibility/index.html           ← Ongoing support
├── discovery/index.html                                ← Discovery page
├── blog/
│   ├── index.html                                      ← Blog listing
│   └── {post-slug}/index.html                          ← Blog posts
├── contact/index.html                                  ← Contact page
├── assets/
│   ├── css/main.css                                    ← Single stylesheet
│   ├── js/main.js                                      ← Minimal JS (nav toggle, etc.)
│   └── images/                                         ← Optimised images
├── components/                                         ← Partial HTML for build injection
│   ├── header.html                                     ← Site header + nav
│   ├── footer.html                                     ← Site footer
│   └── head-seo.html                                   ← Meta tags, OG, schema base
├── docs/                                               ← Agent reference documentation
│   ├── brand-guidelines.md
│   ├── sitemap.md
│   ├── architecture-plan.md                            ← This file
│   ├── messaging.md
│   └── service-taxonomy.md
├── scripts/
│   ├── build.js                                        ← Partial injection build script
│   └── capture.js                                      ← Playwright screenshot tool
├── site-config.json                                    ← Site metadata and content index
├── product.md                                          ← Product definition
├── package.json
├── sitemap.xml                                         ← Auto-generated
├── robots.txt
├── LLMs.txt                                            ← AI access configuration
└── .gitignore
```

---

## URL Structure

All pages use directory-based routing for clean URLs:

| Page | File path | URL |
|------|-----------|-----|
| Home | `index.html` | `/` |
| About | `about/index.html` | `/about/` |
| Services hub | `services/index.html` | `/services/` |
| Blog post | `blog/my-post/index.html` | `/blog/my-post/` |

**Rules:**
- Every page is an `index.html` inside its own directory
- Slugs are lowercase, hyphenated, no special characters
- All internal links use trailing slash: `/about/` not `/about`
- Canonical URLs always include trailing slash

---

## HTML Conventions

### Page Template

Every page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- BUILD:head-seo -->
    <!-- Page-specific meta overrides go after the partial -->
    <title>{Page Title} — WebXC</title>
    <meta name="description" content="{Description}">
    <link rel="canonical" href="https://{domain}/{path}/">
    <!-- Page-specific OG/Twitter/Schema -->
    <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
    <!-- BUILD:header -->

    <main>
        <section class="hero">
            <!-- Page hero content -->
        </section>

        <section class="section-name">
            <!-- Section content -->
        </section>
    </main>

    <!-- BUILD:footer -->

    <script src="/assets/js/main.js" defer></script>
</body>
</html>
```

### Build Injection Markers

The build script (`scripts/build.js`) replaces these comments with partial file contents:

- `<!-- BUILD:header -->` → injects `components/header.html`
- `<!-- BUILD:footer -->` → injects `components/footer.html`
- `<!-- BUILD:head-seo -->` → injects `components/head-seo.html`

### Semantic HTML Rules

- `<header>` — site header (inside the header partial)
- `<nav>` — main navigation (inside header partial)
- `<main>` — page content (one per page, wraps all sections)
- `<section>` — each distinct content block
- `<article>` — blog posts, case studies
- `<footer>` — site footer (inside footer partial)
- `<aside>` — supplementary content (sidebar, related links)

### Heading Hierarchy

- **One `<h1>` per page** — the page's primary heading
- `<h2>` for section headings within the page
- `<h3>` for subsections within an h2
- Never skip levels (no h1 → h3)

---

## CSS Conventions

### Single File

All styles live in `assets/css/main.css`. No separate files, no CSS-in-JS, no preprocessor.

### Organisation

```css
/* === Reset === */
/* === Base / Typography === */
/* === Layout === */
/* === Navigation === */
/* === Hero === */
/* === Sections (by name) === */
/* === Components (buttons, cards, forms) === */
/* === Blog === */
/* === Footer === */
/* === Utilities === */
/* === Tablet (640px+) === */
/* === Desktop (1024px+) === */
```

### Naming Convention

BEM-lite (Block Element Modifier without strict double-underscore):

```css
.hero { }
.hero-content { }
.hero-sub { }

.services-card { }
.services-card-title { }

.btn-primary { }
.btn-secondary { }
```

**Rules:**
- Lowercase, hyphenated
- Descriptive: `.services-overview` not `.section-3`
- No IDs for styling
- No `!important` except for utility overrides

### Mobile-First

Base styles target mobile. Use `min-width` media queries to scale up:

```css
.element { /* mobile styles */ }

@media (min-width: 640px) { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
```

### CSS Custom Properties (future)

When the design stabilises, extract tokens to custom properties:

```css
:root {
    --color-text-primary: #0f0f0f;
    --color-text-body: #6b7280;
    --color-bg-primary: #f8f8f8;
    --color-accent: #6c63ff;
    /* etc. */
}
```

---

## JavaScript Conventions

### Minimal Usage

JS is used only for interactive behaviour that CSS can't handle:

- Mobile nav toggle (hamburger menu)
- Form validation (if forms are client-side)
- Smooth scroll (if needed)

### Rules

- Single file: `assets/js/main.js`
- `defer` attribute on script tag
- No jQuery, no framework, no libraries
- Vanilla ES6+ (const/let, arrow functions, template literals)
- Event delegation where appropriate

---

## Build Script (`scripts/build.js`)

### Purpose

Reads HTML files, finds `<!-- BUILD:name -->` markers, replaces them with contents of corresponding `components/name.html` files. Outputs complete HTML files ready for deployment.

### Cloudflare Pages Configuration

- **Build command:** `node scripts/build.js`
- **Output directory:** `_site` (or in-place replacement — TBD)
- **Node version:** 18+

### Build Process

1. Read all `.html` files in the project (excluding `components/`, `node_modules/`, `_site/`)
2. For each file, find all `<!-- BUILD:xxx -->` markers
3. Replace each marker with contents of `components/xxx.html`
4. Write the assembled files to output directory
5. Copy `assets/`, `sitemap.xml`, `robots.txt`, `LLMs.txt` to output directory

---

## SEO Implementation

### Every Page Must Include

In `<head>`:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{Page Title} — WebXC</title>
<meta name="description" content="{max 155 chars}">
<link rel="canonical" href="https://{domain}/{path}/">
<meta property="og:title" content="{Page Title}">
<meta property="og:description" content="{Description}">
<meta property="og:image" content="https://{domain}/assets/images/{og-image}.jpg">
<meta property="og:url" content="https://{domain}/{path}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="WebXC">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{Page Title}">
<meta name="twitter:description" content="{Description}">
<meta name="twitter:image" content="https://{domain}/assets/images/{og-image}.jpg">
```

### Schema Markup by Page Type

| Page type | Schema types | Implementation |
|-----------|-------------|----------------|
| Home | Organisation, WebSite, LocalBusiness | JSON-LD in head |
| About | AboutPage, Person (Andrew) | JSON-LD in head |
| Service pages | Service, BreadcrumbList | JSON-LD in head |
| Blog listing | Blog, BreadcrumbList | JSON-LD in head |
| Blog posts | Article, Person (author), BreadcrumbList | JSON-LD in head |
| Contact | ContactPage | JSON-LD in head |

### Internal Linking Strategy

- Every service page links to related service pages
- Every service page links to the discovery CTA
- Blog posts link to relevant service pages where natural
- About page links to services hub
- Breadcrumbs on all pages except home

---

## `site-config.json` Schema

```json
{
    "site": {
        "name": "WebXC",
        "tagline": "Your digital foundation, built to be understood.",
        "url": "https://domain.com",
        "language": "en",
        "location": "New Zealand"
    },
    "nav": [
        { "label": "Home", "path": "/" },
        { "label": "About", "path": "/about/" },
        {
            "label": "Services",
            "path": "/services/",
            "children": [
                { "label": "Positioning & Content Optimisation", "path": "/services/positioning-content-optimisation/" },
                { "label": "Full Digital Foundation Build", "path": "/services/full-digital-foundation-build/" },
                { "label": "Ongoing Content & Visibility", "path": "/services/ongoing-content-visibility/" },
                { "label": "Discovery & Strategic Review", "path": "/discovery/" }
            ]
        },
        { "label": "Blog", "path": "/blog/" },
        { "label": "Contact", "path": "/contact/" }
    ],
    "blog": {
        "posts": []
    },
    "people": {
        "andrew": {
            "name": "Andrew Newman",
            "role": "Founder",
            "email": "hello@colasix.com"
        }
    }
}
```

---

## Deployment

### Production

Push to `main` branch → Cloudflare Pages auto-builds → live site.

### Staging / Preview

Push to any other branch → Cloudflare generates preview URL.
Or: `wrangler pages deploy` for instant preview during iteration.

### Vision Loop (autonomous QA)

1. Agent writes code
2. `wrangler pages deploy` → capture preview URL
3. `node scripts/capture.js <URL>` → screenshot
4. Agent analyses screenshot against brand-guidelines.md
5. If issues → fix → repeat from step 2
6. If correct → commit, push to main

---

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- No render-blocking resources except main.css
