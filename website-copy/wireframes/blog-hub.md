# Blog Hub Wireframe
**URL:** /blog/
**Page Type:** Content Hub (Tier 2 — Trust & Navigation)
**Silo:** Content & Thought Leadership
**Primary Persona:** Strategically Unaware Leaders (entry), all personas (content value)

---

## Wireframe Metadata

**H1 (from sitemap strategy):** "Digital strategy. Authority insights. No fluff."

**Content Angle:** Entry point for Strategically Unaware leaders and research-mode visitors. Establish authority, provide free value, lead to service pages through contextual linking.

**Strategic Intent:** Blog Hub is navigational — minimal agitation, content speaks for itself. Attracts visitors researching digital authority, positioning, AI visibility, and transformation. Warm welcome, clear hierarchy, prominent entry to featured content and all posts.

**Agitation Approach:** Positive contrast (minimal — not a dedicated agitation section)
**Agitation Depth:** LIGHT (40-80 words)
**Scroll Architecture:** Hook → Featured Content → All Posts → Exploration CTA → Footer

**Schema Markup:** `[SCHEMA: BlogPosting]`, `[SCHEMA: CollectionPage]`, `[SCHEMA: BreadcrumbList]`

**Primary CTA:** "Let's Have a Conversation" (/contact/)
**Secondary CTA:** Contextual — "Read Post," links to individual blog posts
**Tertiary CTA:** "Explore Services" (/services/) — positioned after featured posts or in sidebar

---

## SECTION 1: GLOBAL HEADER
**[SCROLL POSITION: Hook]**

[GLOBAL HEADER NAVIGATION]
- Logo: WebXC (links to homepage)
- Navigation items: About | Services | Discovery | Blog | Contact
- Primary CTA Button: "Let's Have a Conversation" → /contact/

[SCHEMA: BreadcrumbList]
- Breadcrumb: Home / Blog

---

## SECTION 2: HERO SECTION
**[SCROLL POSITION: Hook — 0–10% scroll]**
**[VISUAL PRIORITY: Primary]**
**[TOPICAL PURPOSE: This section establishes the blog's value proposition and signals the blog as authority content hub. Addresses informational intent (research-mode visitors seeking clarity on digital strategy and positioning).]**

**[AGITATION APPROACH: Positive contrast]**
**[AGITATION DEPTH: LIGHT — 40-80 words]**
*Light agitation embedded implicitly: "AI is changing discovery" appears in value prop, contrast with "No fluff" establishes credibility without fear language.*

---

### Hero Block

[HERO IMAGE/VISUAL]
*Purpose: High-level imagery that signals expertise and authority. Could feature principals James and Andy, or abstract visual representing clarity/strategy. Conveys confidence, accessibility, and thought leadership.*

[H1]
Semantic Target: "Digital strategy" (primary topic entity), "authority insights" (secondary entities: authority, visibility, thought leadership)
SEO Purpose: Targets search intent around "digital strategy," "digital authority," "content strategy," "SEO strategy" — broad but strategic. Signals blog focus.
*Text annotation only: "Digital strategy. Authority insights. No fluff."*

[SUPPORTING TEXT PURPOSE]
Semantic Role: Value proposition + context-setting intent
Context Depth: BROAD
*One-line benefit intent: "Free insights for established NZ business owners on what's changing in digital visibility, positioning clarity, and why your website needs to work harder than it does."*

[PRIMARY CTA]
Label: "Explore Services" (contextual secondary CTA for blog hub context)
Link: /services/
OR
Label: "Let's Have a Conversation" (default primary)
Link: /contact/
*Placement: Below supporting text*

[FRAME ELEMENT: Frame opening — visitor as protagonist seeking clarity, WebXC as guide providing free insights]

[TOPICAL PURPOSE: This section establishes who the blog serves and what value they'll find. Psychological hook: "no fluff" = credibility signal. Frames blog as peer-level advice, not commoditized content.]

---

## SECTION 3: FEATURED POSTS (3–5 Most Recent or Popular)
**[SCROLL POSITION: Hook → Solution (20–30% scroll)]**
**[VISUAL PRIORITY: Primary]**
**[CONTEXT DEPTH: BROAD]** *(visual carousel/featured grid, not deep reading)*

**[TOPICAL PURPOSE: This section showcases blog's topical depth and establishes the blog as a content network. Displays 3–5 featured posts with image, title, excerpt, read time, and author. Satisfies exploratory intent (visitor wants to quickly understand what blog covers).]**

---

### Featured Posts Container

**Post Card Layout (×3–5 cards):**

Each featured post card includes:

[POST IMAGE]
*Purpose: Visual break, attention capture, topical signaling (e.g., positioning post shows strategy framework, AI post shows digital entities).*

[POST TITLE (H2 equivalent link)]
Semantic Target: Topic entity (e.g., "Digital Authority and AI Visibility," "Why Your Positioning Message Isn't Working")
SEO Purpose: Each post title links to full post and contributes to topic cluster breadcrumb for semantic navigation.

[POST EXCERPT (80–120 words)]
*Purpose: Hook reader into post topic without full read. Emphasize immediate value or problem-solution framing.*

[METADATA: Post date | Author (James or Andy, or "WebXC") | Read time (~5 min, ~8 min, etc.)]

[POST CATEGORY BADGE (optional)]
*Categories: Digital Authority | Strategy & Positioning | Digital Transformation | Team & Capability | Market & Competitive Advantage*

[INTERNAL LINK: "Read Full Post"]
Link: /blog/[post-slug]/
*Purpose: Direct navigation to full blog post*

[SEMANTIC BRIDGE → Related service page (optional, embedded as text within featured post section header)]
Example: Featured posts may include intro text like "Recent insights on positioning and authority — explore how this applies to your business in our Positioning & Digital Authority service."

**[ENTITIES: Person — Author: [James or Andy], Role: [Principal], Expertise: [digital strategy/positioning/authority]]**

**[FRAME ELEMENT: Frame progression — WebXC as credible guide with demonstrated expertise through authored posts]**

**[TRANSITION FROM: Hero (visitor oriented to blog purpose) — TRANSITION TO: All posts (visitor ready to explore full library)]**

---

## SECTION 4: ALL POSTS GRID / LIST VIEW
**[SCROLL POSITION: Solution (30–70% scroll)]**
**[VISUAL PRIORITY: Primary]**
**[CONTEXT DEPTH: BROAD]** *(visual overview, grid-based)*

**[TOPICAL PURPOSE: This section provides comprehensive, scannable access to entire blog library. Satisfies information-seeking intent (visitor wants to find posts on specific topics they care about). Structured for rapid category filtering and discovery.]**

---

### All Posts Container

[SECTION HEADER]
*Text intent: "All insights from our blog" or "Explore all posts on digital strategy, positioning, and authority"*

[FILTERING / CATEGORY NAVIGATION (optional but recommended)]
*Purpose: Allow visitors to filter by topic category without leaving page. Reduces friction for topic-specific seekers.*

**Filter options (linked or tab-based):**
- All Posts (default)
- Digital Authority
- Strategy & Positioning
- Digital Transformation
- Team & Capability
- Market & Competitive Advantage

[INTERNAL LINK annotations: Each category link may connect to tag/category page if those exist, or filter posts on this page dynamically]

---

### Posts Grid Layout (Responsive)

**Grid format (3-column desktop, 2-column tablet, 1-column mobile):**

Each post in the grid includes:

[POST CARD]
- [Thumbnail image]
- [Post title (H3 link)]
- [Category badge]
- [Excerpt (80–120 words)]
- [Publish date | Author | Read time]
- [CTA: "Read More" → /blog/[post-slug]/]

**[ENTITIES: BlogPosting — Title: [title], Author: [name], DatePublished: [date], ArticleBody: [excerpt], Keywords: [topic tags], ContentURL: [/blog/post-slug/]]**

[SCHEMA: BlogPosting] (per post card)

[PAGINATION (if >12 posts)]
*Purpose: Navigate between pages of posts without overwhelming single view.*
- "Next" / "Previous" buttons or numbered pagination
- Load all on scroll (infinite scroll) — optional but consider UX impact

---

### Alt View Option: List View
*Alternative: If grid feels dense, offer toggle to list view (title, excerpt, date, author, category, read link — one item per row).*

---

## SECTION 5: SIDEBAR (Optional)
**[SCROLL POSITION: Concurrent with All Posts (30–70% scroll)]**
**[VISUAL PRIORITY: Secondary]** (desktop only; mobile: move to bottom)

**[TOPICAL PURPOSE: Provides secondary navigation, topical entry points, and optional email signup for blog subscription or newsletter.]**

---

### Sidebar Widget 1: Latest Posts
[WIDGET HEADER: "Latest Insights"]
- 3 most recent posts
- Title (linked)
- Publish date
- [Internal link: "View all posts" → All Posts section (in-page anchor) or /blog/]

---

### Sidebar Widget 2: Topics / Categories
[WIDGET HEADER: "Explore by Topic"]
- List of all categories
- Post count per category (optional)
- [INTERNAL LINK: Each category links to filtered view or tag page]

**[ENTITIES: Topic/Category — Name: [e.g., "Digital Authority"], Description: [brief], PostCount: [N]]**

---

### Sidebar Widget 3: Blog Newsletter Signup (Optional)
[WIDGET HEADER: "Get Strategic Insights"]
[SUPPORTING TEXT PURPOSE: Invite visitors to subscribe to blog updates or monthly insights newsletter.*
[EMAIL CAPTURE FORM]
- Email input field
- [BUTTON: "Subscribe"]

[CTA ANTI-PATTERN AVOIDANCE: Do NOT use "Sign Up" (creates perception of mass service). Use "Subscribe to Insights" or "Get Updates" instead.]

---

### Sidebar Widget 4: Recent Blog Post Recommendation (Optional)
[WIDGET: Featured single post]
- Title
- Excerpt
- Image
- [BUTTON: "Read Now" → /blog/[post-slug]/]

---

## SECTION 6: CALL-TO-ACTION SECTION
**[SCROLL POSITION: Clarity & Detail (75–85% scroll)]**
**[VISUAL PRIORITY: Primary]**

**[TOPICAL PURPOSE: This section surfaces a contextual CTA for visitors who've engaged with featured/recent posts and are ready to explore how blog insights apply to their situation. Bridges from content to services.]**

---

### CTA Block: "Interested in How This Applies to Your Business?"

[SUPPORTING TEXT PURPOSE]
*Intent: Warm transition from blog content to service/discovery pathway. Tone: peer-level invitation, not pushy.*
*Example language structure: "If [blog topic] resonates with your situation, our [Service Name] programme is designed to help established NZ businesses like yours [outcome]. Let's have a conversation about where you stand."*

[PRIMARY CTA]
Label: "Let's Have a Conversation"
Link: /contact/
OR
Label: "Book Your Strategic Review"
Link: /discovery/
*(Choice depends on visitor intent signal from which posts they've engaged with)*

[SECONDARY CTA (Optional)]
Label: "Explore Services"
Link: /services/

[INTERNAL LINK: "See all services" → /services/]

[SEMANTIC BRIDGE → Service pages]
*Purpose: Contextually connect blog insights to the service page that addresses the topic. Example: Blog post on "AI Visibility and Positioning" bridges to /services/positioning-digital-authority/*

[FRAME ELEMENT: Frame turning point — WebXC transitions from guide providing free value to guide offering paid partnership]

---

## SECTION 7: FAQ / COMMON QUESTIONS (Optional but Recommended)
**[SCROLL POSITION: Clarity & Detail (80–90% scroll)]**
**[VISUAL PRIORITY: Secondary]**

**[TOPICAL PURPOSE: Addresses "People Also Ask" and long-tail queries about blog content, blog subscription, and how blog relates to services. Satisfies informational intent (visitor wants clarity before deepening engagement).]**

**[INTERACTIVE ELEMENT: `[EXPANDABLE FAQ]` — accordion-style, collapse/expand per question. Increases dwell time and signals content depth.]**

---

### FAQ Container

**[SCHEMA: FAQPage]** (per FAQ block)

**Typical FAQ themes for blog hub:**

[Q1 Header]
*Theme: "What topics does your blog cover?" (Informational)*
*Response structure: List the core topic clusters (Digital Authority, Strategy & Positioning, Digital Transformation, etc.). Brief explanation of blog's scope and focus. CTA to category filter.*

[Q2 Header]
*Theme: "How often do you publish new posts?" (Operational)*
*Response structure: Publication schedule (e.g., "Twice monthly"). Link to subscribe/newsletter signup.*

[Q3 Header]
*Theme: "Can I use this content in my own business?" (Informational)*
*Response structure: Frame as self-serve insights. Acknowledge: "Yes, but strategic work has real value. If you want a review specific to your business, that's where our Discovery programme comes in."*
[INTERNAL LINK: /discovery/ or /workshop/]

[Q4 Header]
*Theme: "How do I stay updated on new blog posts?" (Navigational)*
*Response structure: Email subscription option, RSS if available, social channels. Point to newsletter signup widget in sidebar.*

[Q5 Header]
*Theme: "Can WebXC help me implement the strategies in your posts?" (Commercial intent)*
*Response structure: "Yes. Blog posts provide strategic thinking; our services provide implementation and ongoing partnership. Two paths: Workshop for self-directed audit, or Discovery for a strategic review."*
[INTERNAL LINK: /workshop/, /discovery/]

[Q6 Header (if applicable)]
*Theme: "Do you offer guest posting or collaboration opportunities?" (Media/PR intent)*
*Response structure: Brief acknowledgment. Suggest contact page for inquiry.*
[INTERNAL LINK: /contact/]

---

## SECTION 8: FINAL CTA SECTION
**[SCROLL POSITION: Final Conversion (90–95% scroll)]**
**[VISUAL PRIORITY: Primary]**

**[TOPICAL PURPOSE: Last opportunity to route visitor to next step (service, discovery, contact, or workshop depending on visitor intent signal).]**

---

### Final CTA Block

[HEADING (H2 equivalent)]
*Intent: "Ready to understand your digital position?" or "See how this applies to your business."*

[SUPPORTING TEXT]
*Brief recap of blog value + invitation to next step.*

[PRIMARY CTA BUTTON]
Label: "Let's Have a Conversation"
Link: /contact/

[SECONDARY CTA (Optional link, not button)]
Text link: "Explore our services" → /services/
OR
Text link: "Take the self-assessment" → /workshop/

[FRAME ELEMENT: Frame closing — conversion moment, clear next step, peer-level tone maintained]

---

## SECTION 9: GLOBAL FOOTER
**[SCROLL POSITION: Final (95–100% scroll)]**

[GLOBAL FOOTER NAVIGATION]

**Column 1: Company**
- About (/about/)
- Blog (/blog/) [current page]
- Contact (/contact/)
- Privacy (if applicable)

**Column 2: Services**
- Positioning & Digital Authority (/services/positioning-digital-authority/)
- Digital Foundation Build (/services/digital-foundation-build/)
- Ongoing Authority & Visibility (/services/ongoing-authority-visibility/)
- Workshop & Self-Assessment (/workshop/)

**Column 3: Discovery & Diagnostic**
- Discovery & Strategic Review (/discovery/)

**Footer CTA**
Button: "Let's Have a Conversation" → /contact/

**Company Info**
- Address, phone, email
- Principal names: James and Andy
- Trust statement: "Serving NZ businesses $2M–$50M"

[SCHEMA: LocalBusiness]

---

## INTERNAL LINKING ARCHITECTURE

### Hub-to-Sub Linking
- Blog Hub (`/blog/`) links to:
  - All individual blog posts
  - Category/tag pages (if created)
  - Related silos: Homepage, Services, Discovery

### Cross-Silo Bridges
[SEMANTIC BRIDGE → Discovery Page]
*Purpose: Blog hub as content entry point naturally leads to Discovery as diagnostic/clarity step. Link strategy: Blog featured posts may include "Ready to dig deeper?" CTA to Discovery.*

[SEMANTIC BRIDGE → Service Pages]
*Purpose: Blog content establishes authority and demonstrates thinking; service pages operationalize blog insights. Each blog post links to the relevant service page where that topic is applied (e.g., "AI Visibility" post links to Positioning & Digital Authority service).*

[SEMANTIC BRIDGE → Workshop]
*Purpose: Blog posts written for research-mode visitors; Workshop is next step for low-friction self-assessment. Posts include mid-post CTA: "Want to assess your position?" → /workshop/*

[SEMANTIC BRIDGE → About Page]
*Purpose: Author bios at end of each blog post link to principal profiles on About page for credibility building. Blog hub sidebar or featured section may also include "Meet the principals" link → /about/*

### Silo Integrity
- Blog Hub remains central hub for Silo 3 (Content & Thought Leadership)
- Internal links within blog silo are tight: post-to-post via "Related Posts," category navigation, author bio links
- Cross-silo links are intentional and strategic: only to Discovery, Services, Workshop, and About

### Authority Passing
- Blog hub page (Tier 2) receives links from:
  - Homepage (Tier 1) — featured blog section
  - Navigation menu (all pages)
- Blog hub links downward to:
  - Individual blog posts (Tier 4)
  - Related services (Tier 3)
  - Discovery (Tier 3)

---

## SEMANTIC SEO ANNOTATION SUMMARY

### Topic Entity Coverage

**Primary Entity:** Blog Hub / Content Authority
**Secondary Entities:**
- Digital Authority (topic)
- Strategy & Positioning (topic)
- Digital Transformation (topic)
- AI Visibility & Search Readiness (topic)
- Content Strategy (topic)
- Team & Capability (topic)
- Market & Competitive Advantage (topic)
- Thought Leadership (concept)

### Predicate Coverage

**Core Predicates Addressed:**
- `WebXC publishes digital strategy insights` ✓ (Hero, Featured Posts, All Posts sections)
- `WebXC demonstrates expertise through authored content` ✓ (Author bios, Featured Posts)
- `Visitors can discover topics relevant to their challenges` ✓ (Category filtering, All Posts grid)
- `Blog posts link to applicable services` ✓ (CTAs, Semantic Bridges)
- `Blog hub is entry point for research-mode visitors` ✓ (Light agitation, free value, minimal friction)

### Frame Element Progression

1. **Opening Frame (Hero):** WebXC as knowledgeable guide, blog as free resource
2. **Featured Content Frame (Featured Posts):** Demonstrated expertise, peer-level insights
3. **Comprehensive Resource Frame (All Posts):** Blog as complete knowledge base, visitor control
4. **Turning Point Frame (CTA Section):** Transition from free content to paid partnership
5. **Closing Frame (Final CTA + Footer):** Clear next step, sustained peer relationship

### Context Depth by Section

| Section | Depth | Rationale |
|---------|-------|-----------|
| Hero | BROAD | Orientation + value prop; deep treatment unnecessary |
| Featured Posts | BROAD | Visual/scannable showcase; full post accessed separately |
| All Posts | BROAD | Grid view encourages browsing; depths vary per post |
| CTA Section | BROAD | Transition moment; depth unnecessary |
| FAQ | BROAD | Quick answers; link to full content when depth needed |
| Final CTA | BROAD | Conversion; no deep content required |

### Thematic Fields

**Primary Thematic Field: Authority & Positioning**
*Core terms: authority, positioning, visibility, differentiation, clarity, credibility, expert, thought leadership, insights*

**Secondary Thematic Field: Digital Strategy & Transformation**
*Core terms: digital strategy, transformation, competitive advantage, market positioning, customer journey, conversion, AI visibility, semantic structure, search visibility*

**Tertiary Thematic Field: Business Strategy**
*Core terms: commercial logic, business model, customer decision, market advantage, owned asset, strategy alignment, messaging, value proposition*

### E-E-A-T Signals

**Experience Signal:**
- Principal bylines (James, Andy) with years in market
- Blog post count (demonstrates ongoing expertise)
- Category breadth (shows comprehensive experience across topic domains)

**Expertise Signal:**
- Specific topic coverage (Digital Authority, Positioning, etc.)
- Technical vocabulary in post titles (schema, semantic, entity alignment)
- Principal qualifications and specializations mentioned in author bios

**Authoritativeness Signal:**
- Principal-authored content (not ghostwritten or templated)
- Consistent publication (builds topical authority over time)
- Deep content (800–2000+ word posts per sitemap strategy)
- Blog hub as hub page within broader site architecture (signals authority within content vertical)

**Trustworthiness Signal:**
- Author transparency (real names, photos, bios)
- Published dates (currency, recency)
- No affiliate links or sponsored content (implied trust through absence of monetization)
- Free value offered without pressure (aligns with peer positioning)

### Structured Data Markup Opportunities

`[SCHEMA: BlogPosting]` — Per individual blog post (author, date published, headline, article body, featured image)

`[SCHEMA: CollectionPage]` — Blog hub as aggregation of posts

`[SCHEMA: FAQPage]` — FAQ section on blog hub page

`[SCHEMA: BreadcrumbList]` — Navigation path: Home > Blog or Home > Blog > [Category]

`[SCHEMA: LocalBusiness]` — Footer/company info (name, address, phone, principals)

`[SCHEMA: Person]` — Principal author entities (Name, jobTitle, image, expertise)

---

## CONTENT INTENT SUMMARY

### What Content Should Live Here

**This is NOT a blog post detail page.** This is the hub — the entry point and navigation layer.

**Content to include:**
- H1 and brief introduction (40–80 words) stating blog purpose
- Featured post cards (3–5) with images, excerpts, metadata
- All posts grid/list with filtering by category
- Category sidebar or filter navigation
- Optional newsletter signup
- FAQ addressing common questions about blog scope and how blog relates to services
- CTAs routing to Discovery, Services, Workshop, Contact as next steps

**Content to EXCLUDE:**
- Long-form blog post bodies (those live on individual post pages)
- Deep topic explanation (featured post excerpts only)
- Detailed methodology (blog hub is navigational, not instructional)

---

## ALLOCATION SUMMARY

### Global Allocation Registry Impact

**Differentiator Allocation:**
- **Specific off-site guidance without upsell:** Featured PROMINENTLY on About and Blog Posts; light reference on Blog Hub via "learn more" links to service pages.
- **Thought Leadership / Authority Building:** FEATURED PROMINENTLY on Blog Hub through post library and principal bylines.

**Section Archetype Usage:**
- Hero + Value Statement + Primary CTA: ✓ (Hero section)
- "Related/Next Step Links": ✓ (Semantic Bridge annotations, CTA section, Footer)
- Interactive Element (Expandable FAQ): ✓ (Section 7; varies from Homepage's scenario matching)

**Audience Fear Coverage:**
- Primary fear agitated: **AI is changing how customers find me, but I don't understand it** (Light agitation via "AI visibility" + "authority insights" in H1)
- Approach: Positive contrast (implied problems within solution messaging, not dedicated agitation)
- Depth: LIGHT (40–80 words)
- Differs from: Homepage (mixed scenarios), About (medium), Discovery (medium), Service pages (medium)

**FAQ Theme Allocation:**
- "Can I do this myself?" / Self-service option: ✓ Addressed (Blog provides free insights; paid services operationalize)
- "Is my business the right size/type for WebXC?": ✓ Light reference (blog speaks to established NZ businesses)
- Do NOT repeat on: Discovery, Option A, Option B (these have more specific FAQ themes)

**Interactive Element:**
- **Expandable FAQ section** (accordion) — differs from Homepage (scenario matching) and other pages. Increases dwell time, signals content depth.

**CTA Strategy Compliance:**
- Primary CTA: "Let's Have a Conversation" (/contact/) — appears 3+ times (header, mid-page CTA section, final CTA, footer) ✓
- Secondary CTA: "Explore Services" (/services/) — navigational/exploratory ✓
- Tertiary CTA (mid-post): "Read Full Post" — within-silo navigation ✓
- All anti-patterns avoided: No "Sign Up," "Get a Quote," "Download Now," etc. ✓

**Persona Routing:**
- **Primary entry:** Strategically Unaware Leaders (research mode, blog/search)
- **Secondary entry:** All personas in content-first awareness stage
- **Blog Hub attracts → Services/Discovery/Workshop** as next steps depending on visitor's perceived challenge

**Content Density:**
- Blog Hub does NOT attempt to cover all four value themes (Business-First, Conversion & Performance, AI & Search, Owned Asset)
- Instead, **blog library collectively demonstrates all themes through varied post topics** — individual posts may emphasize different themes
- Blog Hub itself remains navigational/lightweight

---

## Notes for Copy & Design Phases

### For Copywriter
1. **H1 and supporting text must establish tone:** Principal-led, peer-level, thought leadership (no jargon, no fluff)
2. **Post excerpts (featured + grid):** Hook first sentence, deliver value immediately, no clickbait
3. **Featured posts CTA:** "Read Full Post" (not "Learn More" or "Discover More")
4. **CTA block copy:** Warm transition from content to services; emphasize "conversation" not "sales"
5. **FAQ copy:** Direct, short answers (150 words max per Q); links to full treatments on other pages

### For Designer
1. **Hero section:** High visual hierarchy, clear value prop, uncluttered
2. **Featured posts:** Card-based, image-led, scannable (3 cards minimum, 5 cards maximum)
3. **All posts grid:** 3-column desktop responsive; category filter above grid; pagination or load-more
4. **Sidebar (optional, desktop only):** Vertical stack, secondary weight, collapse on mobile
5. **CTA sections:** Use existing button styles from brand system; maintain visual hierarchy
6. **Interactive elements:** Expandable FAQ with smooth expand/collapse animation; hover states for clarity
7. **Mobile optimization:** Stack featured posts single-column; all posts grid 1–2 columns; hide sidebar (move to bottom if included)

### For Developer
1. **Schema markup:** Implement `[SCHEMA: BlogPosting]` per post card, `[SCHEMA: FAQPage]` for FAQ section, `[SCHEMA: BreadcrumbList]` for nav
2. **Structured data:** Ensure author, date published, featured image data is present in page markup
3. **Internal linking:** Verify all `/blog/`, `/services/`, `/discovery/`, `/contact/`, `/workshop/`, `/about/` links are accurate
4. **Category filtering (if implemented):** Build filter logic to show/hide posts by category without full page reload (AJAX or client-side filtering preferred for UX)
5. **Newsletter signup form (if included):** Validate email input, handle submissions securely, send confirmation
6. **FAQ accordion:** Implement expand/collapse functionality with semantic HTML (`<details>/<summary>` or equivalent), ensure keyboard navigation

---

## Checklist for Post-Wireframe Review

- [ ] H1 uses "Digital strategy. Authority insights. No fluff." (from sitemap strategy)
- [ ] Featured posts section includes 3–5 post cards with images, excerpts, read time
- [ ] All posts grid includes category filtering (at least 5 categories)
- [ ] FAQ section addresses "Can I do this myself?" and "How does blog relate to your services?"
- [ ] CTA section includes both "Let's Have a Conversation" and secondary navigation to services
- [ ] Semantic bridges annotated to /discovery/, /services/, /workshop/, /about/
- [ ] Footer includes company info, principal names (James and Andy), and trust statement
- [ ] Internal linking density: 5–8 outbound links (hub pages standard)
- [ ] E-E-A-T signals present: Author bios, publication dates, topic breadth, principal transparency
- [ ] Schema markup annotations included: BlogPosting, CollectionPage, FAQPage, BreadcrumbList, LocalBusiness
- [ ] Agitation approach: Positive contrast (minimal, no dedicated agitation section) ✓
- [ ] Agitation depth: LIGHT (40–80 words, embedded in H1 "AI visibility" + "no fluff") ✓
- [ ] Progressive disclosure sequence: Hook → Featured → All Posts → CTA → FAQ → Final CTA → Footer ✓
- [ ] Mobile-first responsive design annotations present (stack single-column featured posts, grid 1–2 cols, hide sidebar)
- [ ] Interactive element included: Expandable FAQ (differs from other pages' interactive patterns) ✓
- [ ] Persona routing clear: Strategically Unaware Leaders (entry) → All personas (content value) ✓

---
