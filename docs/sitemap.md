# WebXC — Sitemap & Page Plan

> This file tracks every page on the site: purpose, status, target keywords, and schema requirements. Update this file whenever a page is created or modified.

---

## Pages

### Home — `/`

**Status:** Exists (placeholder copy — needs WebXC content)
**Purpose:** First impression. Communicate what WebXC does, who it's for, and why it matters now. Drive visitors to the conversation CTA.
**Schema:** Organisation, WebSite, LocalBusiness
**Target keywords:** strategic digital partner NZ, AI search visibility, digital foundation, website strategy NZ
**Sections planned:**
1. Hero — core message headline, subtext, CTA ("Let's Have a Conversation")
2. The market shift — why this matters now (the structural change in discovery)
3. Value proposition — three top benefits with proof points
4. Services overview — Option A / Option B / Ongoing, with clear paths
5. Trust signals — approach differentiators, credentials
6. Final CTA — conversion block

---

### About — `/about/`

**Status:** Not started
**Purpose:** Andrew's story, WebXC's approach, credentials. Build E-E-A-T signals. Establish the "principal-led" differentiator.
**Schema:** AboutPage, Person (Andrew Newman)
**Target keywords:** Andrew Newman WebXC, digital strategy NZ, about WebXC
**Content priorities:**
- Andrew's background and expertise
- Why WebXC exists (the market shift, the gap between agencies)
- The approach philosophy (strategy first, owned assets, dual-channel)
- Credentials, professional memberships, relevant experience
- Personal brand entity signals for Andrew

---

### Services Hub — `/services/`

**Status:** Not started
**Purpose:** Overview of all service options with the client journey flow. Help visitors self-select the right path.
**Schema:** Service (aggregate), BreadcrumbList
**Target keywords:** digital services NZ, website strategy services, AI visibility services
**Content priorities:**
- Client journey diagram (conversation → discovery → option A/B → ongoing)
- Brief description of each option with link to detail page
- "Not sure which is right for you?" → CTA to free conversation

---

### Option A: Positioning & Content Optimisation — `/services/positioning-content-optimisation/`

**Status:** Not started
**Purpose:** Detailed breakdown of Option A for businesses whose existing site structure is adequate.
**Schema:** Service, BreadcrumbList
**Target keywords:** content optimisation NZ, positioning strategy, SEO content optimisation, AI readiness
**Content priorities:**
- Who this is for (the situation, the symptoms)
- What we deliver (all Option A components)
- What the client ends up with
- Differentiators from generic SEO
- CTA to discovery or conversation

---

### Option B: Full Digital Foundation Build — `/services/full-digital-foundation-build/`

**Status:** Not started
**Purpose:** Detailed breakdown of Option B for businesses that need a new site from the ground up.
**Schema:** Service, BreadcrumbList
**Target keywords:** website build NZ, digital foundation, strategic website design, AI-ready website
**Content priorities:**
- Who this is for (the situation, the symptoms)
- Everything in Option A plus design, UX, technical build
- What the client ends up with
- CTA to discovery or conversation

---

### Ongoing Content & Visibility — `/services/ongoing-content-visibility/`

**Status:** Not started
**Purpose:** Detail the ongoing support add-on. Carefully framed to distinguish from opaque retainers.
**Schema:** Service, BreadcrumbList
**Target keywords:** ongoing content strategy, AI visibility monitoring, content development NZ
**Content priorities:**
- Who this is for (post-foundation businesses wanting sustained growth)
- What we deliver (content strategy, authority monitoring, strategic advisory)
- How it differs from a traditional retainer (transparency, ownership, no dependency)
- CTA to conversation

---

### Discovery & Strategic Review — `/discovery/`

**Status:** Not started
**Purpose:** Explain the paid discovery process. Make the value clear so prospects understand why it's paid and what they get.
**Schema:** Service, BreadcrumbList
**Target keywords:** digital strategy review, AI visibility audit, website assessment NZ
**Content priorities:**
- What's involved (the seven areas assessed)
- What the client receives (written report with prioritised recommendations)
- Why it's paid (principal-level thinking, genuine strategic value)
- CTA to book

---

### Blog — `/blog/`

**Status:** Not started
**Purpose:** Article listing page. Thought leadership content demonstrating expertise.
**Schema:** Blog, BreadcrumbList
**Target keywords:** (inherits from individual posts)
**Notes:** Auto-generated from site-config.json blog index. Cards linking to individual posts, sorted by date.

---

### Blog Posts — `/blog/{slug}/`

**Status:** Not started (infrastructure not yet built)
**Purpose:** Individual articles demonstrating expertise, building topical authority, creating citable content.
**Schema:** Article, Person (author), BreadcrumbList
**Notes:** Each post must include: author attribution (Andrew), publish date, proper heading hierarchy, internal links to relevant service pages.

**Planned initial posts:**
1. "The way customers find businesses has structurally changed" — the core market shift argument
2. "Why your website is now source material for AI" — the dual-layer knowledge concept
3. "What established NZ businesses need to know about AI visibility" — localized practical guide

---

### Contact — `/contact/`

**Status:** Not started
**Purpose:** Contact form, booking link, location information.
**Schema:** ContactPage
**Target keywords:** contact WebXC, digital strategy consultation NZ
**Content priorities:**
- Contact form (name, email, message)
- Booking link for free conversation
- Location (New Zealand)
- Brief reassurance text (no pressure, exploratory conversation)

---

## Site-Wide Elements

### Navigation

```
Home | About | Services | Blog | Contact
                  |
                  +-- Positioning & Content Optimisation
                  +-- Full Digital Foundation Build
                  +-- Ongoing Content & Visibility
                  +-- Discovery & Strategic Review
```

Mobile: hamburger menu
Desktop: horizontal nav with services dropdown

### Footer

- Business name and tagline
- Navigation links
- Contact info
- Copyright
- Schema-relevant: links to professional profiles, directories

### Head SEO Partial

Applied to every page via build injection. See `/docs/architecture-plan.md` for template.

---

## Build Priority Order

1. Home page (replace placeholder content)
2. Shared components (header, footer, head-seo)
3. About page
4. Services hub
5. Discovery page
6. Option A page
7. Option B page
8. Ongoing support page
9. Contact page
10. Blog infrastructure
11. First blog posts
