# Site Expansion Plan — WebXC

## Overview

Expanding from a single homepage to a multi-page site. All pages use the same build system (BUILD markers, partials), same CSS design system (Swan-inspired), and same copy voice (short, declarative, confident, plain language).

---

## New Pages

### 1. Main Service Page — `/website-design/`

**Purpose:** The primary service page. Targets "website design" as the main keyword. Covers the full WebXC proposition — what we do, how we do it, the Option A / B structure. Sub-service pages are linked via anchor text within the copy, not from navigation.

**SEO target:** "website design NZ", "web design for established businesses NZ"
**Title tag:** "Website Design for Established NZ Businesses | WebXC"
**H1:** "Website design that reflects how good your business actually is"

**Sections:**
- Hero (dark gradient)
  - H1 + sub-copy framing the problem and the solution
  - CTA: Let's Have a Conversation → /contact/
- The problem (2 paras — the gap between business quality and digital presence)
- What we do differently (principal-led, strategic, owned by you)
- Option A card — Content & Digital Authority Programme
  - Who it's for. What it covers. Anchor links to /seo/, /geo/, /content-strategy/, /cro/ woven into the copy naturally.
- Option B card — Complete Digital Foundation Build
  - Everything in A plus platform rebuild. Anchor links to /web-design/ concepts, /performance/, /content-management/ woven in.
- What changes (outcomes — reuse pattern from homepage)
- CTA → /contact/

**Schema:** Service

---

### 2. About — `/about/`

**Purpose:** E-E-A-T signals. Who James and Andy are. Why WebXC exists. Credibility and trust.

**SEO target:** "WebXC", person entity signals for James and Andy
**Title tag:** "About WebXC — Principal-Led Digital Performance | WebXC"
**H1:** "Two principals. Every project."

**Sections:**
- Hero (dark gradient)
  - H1 + sub: not an agency, no handoffs
- James bio (expanded)
  - Background, approach, what he brings
- Andy bio (expanded)
  - Background, approach, what he brings
- Our approach
  - How WebXC works differently — principal-led, ownership model
  - This is the ONE place we position against agencies properly
- CTA → /contact/

**Schema:** AboutPage, Person x2, Organisation

---

### 3. Contact — `/contact/`

**Purpose:** Dedicated contact page. Same 3-field form. Standalone URL for linking from all pages.

**SEO target:** "contact WebXC"
**Title tag:** "Get in Touch | WebXC"
**H1:** "Let's have a conversation"

**Sections:**
- Hero (dark gradient)
  - H1 + what happens when you reach out
- Form (name, email, situation)
- Alternative contact (email)
- What to expect

**Schema:** ContactPage

---

### 4–9. Sub-Service Pages (SEO depth)

These pages are NOT linked from navigation. They are linked from anchor text within `/website-design/` and cross-linked to each other. They exist to capture specific long-tail search intent and funnel visitors back to the main service page or contact.

**Template structure (all 6 pages):**
- Hero (lighter variant — white/soft bg, not full dark gradient)
  - H1 (SEO-targeted, plain language)
  - Sub (1-2 sentences)
  - Badge: "Option A + B" or "Option B only"
- The problem (2 paragraphs max)
- How we approach it (3-4 short points)
- What changes (concrete outcomes)
- Related services (links to 3 other sub-service pages)
- CTA → /contact/

---

#### 4. SEO — `/seo/`

**Title tag:** "SEO for Established NZ Businesses | WebXC"
**H1:** "Be found by the people already looking for what you do"
**Applies to:** Option A + B
**Focus:** Content architecture, search intent alignment, on-site optimisation, E-E-A-T signals. Not keyword stuffing or link buying.
**SEO target:** "SEO NZ", "SEO for established businesses"
**Related:** /geo/, /content-strategy/, /cro/

#### 5. GEO — `/geo/`

**Title tag:** "Generative Engine Optimisation — AI Visibility for NZ Businesses | WebXC"
**H1:** "Make sure AI tools recommend you, not your competitors"
**Applies to:** Option A + B
**Focus:** AI visibility across ChatGPT, Perplexity, Google AI Overviews, Claude. Entity resolution. How businesses get cited vs ignored. Differentiator page — almost nobody in NZ is targeting this yet.
**SEO target:** "GEO", "generative engine optimisation", "AI visibility for businesses"
**Related:** /seo/, /content-strategy/, /performance/

#### 6. CRO — `/cro/`

**Title tag:** "Conversion Rate Optimisation for NZ Businesses | WebXC"
**H1:** "Turn visitors into enquiries"
**Applies to:** Option A + B
**Focus:** Messaging clarity, conversion pathways, trust placement, mobile performance. Strategic CRO tied to business logic, not A/B testing volume games.
**SEO target:** "CRO NZ", "conversion rate optimisation"
**Related:** /content-strategy/, /seo/, /performance/

#### 7. Content Strategy — `/content-strategy/`

**Title tag:** "Content Strategy for NZ Businesses | WebXC"
**H1:** "Content that works for your buyers and the machines they use to find you"
**Applies to:** Option A + B
**Focus:** Content auditing, restructuring, messaging alignment. Writing for humans and AI. Content that compounds.
**SEO target:** "content strategy NZ", "B2B content strategy"
**Related:** /seo/, /geo/, /cro/

#### 8. Performance — `/performance/`

**Title tag:** "Performance Websites — Fast, Secure, AI-Ready | WebXC"
**H1:** "A platform built for speed, search, and scale"
**Applies to:** Option B only
**Focus:** Core Web Vitals, technical SEO foundation, WordPress build quality, security, AI crawler accessibility.
**SEO target:** "website performance NZ", "fast business websites"
**Related:** /seo/, /geo/, /content-management/

#### 9. Content Management — `/content-management/`

**Title tag:** "Content Management for Business Websites | WebXC"
**H1:** "A site your team can actually run"
**Applies to:** Option B only
**Focus:** Modular CMS, structured content, team independence. Separation of content from design. Training and handover.
**SEO target:** "website content management", "CMS for business"
**Related:** /content-strategy/, /performance/, /cro/

---

## Navigation

**Header nav (desktop):**
Logo | About | Website Design | Blog | [Let's Talk] CTA button

**No sub-service dropdown.** Sub-pages are linked from anchor text within /website-design/ content.

**Mobile:** Hamburger menu with same flat structure.

---

## Internal Linking Strategy

- Homepage "How we work" step 3 → /website-design/
- Homepage outcomes cards → /website-design/ or /contact/
- /website-design/ Option A copy → /seo/, /geo/, /content-strategy/, /cro/ (via anchor text)
- /website-design/ Option B copy → /performance/, /content-management/ (via anchor text)
- Sub-service pages → 3 related sub-service pages each (horizontal cards at bottom)
- Sub-service pages → /website-design/ (via "back to services" or contextual link)
- Sub-service pages → /contact/ (CTA at bottom)
- All pages → /contact/ via header CTA
- About → /website-design/ from approach section

**Cross-linking matrix for sub-service pages:**

| Page | Links to |
|------|----------|
| /seo/ | /geo/, /content-strategy/, /cro/ |
| /geo/ | /seo/, /content-strategy/, /performance/ |
| /cro/ | /content-strategy/, /seo/, /performance/ |
| /content-strategy/ | /seo/, /geo/, /cro/ |
| /performance/ | /seo/, /geo/, /content-management/ |
| /content-management/ | /content-strategy/, /performance/, /cro/ |

---

## File Structure

```
index.html                       (homepage — exists)
website-design/index.html        (main service page)
about/index.html                 (about page)
contact/index.html               (contact page)
seo/index.html                   (sub-service)
geo/index.html                   (sub-service)
cro/index.html                   (sub-service)
content-strategy/index.html      (sub-service)
performance/index.html           (sub-service)
content-management/index.html    (sub-service)

components/
  header.html                    (updated with nav)
  footer.html                    (updated with site links)
  head-seo.html                  (exists)

assets/css/
  main.css                       (extended with new page styles)
```

---

## Build Order

1. Update header.html and footer.html for multi-page nav
2. Add CSS for new page types (service page, sub-service template, related cards, mobile nav)
3. /website-design/ (main service page)
4. /about/
5. /contact/
6. Sub-service pages: /seo/, /geo/, /cro/, /content-strategy/, /performance/, /content-management/
7. Update homepage links to point to new pages
8. Update site-config.json and docs
9. Full vision loop across all pages
