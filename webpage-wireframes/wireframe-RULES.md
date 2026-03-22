# Wireframe Creation Rules

> **Purpose:** This file contains the wireframe creation rules loaded by every wireframe subagent. It is referenced by the orchestrator skill file `wireframe-SKILL.md` but consumed directly by subagents via the Read tool.
>
> These rules apply to **every page wireframe** created in the project.

---

## Format

- Use **bracketed notation** for layout elements: `[HERO IMAGE]`, `[H1]`, `[BUTTON]`, `[SECTION DIVIDER]`, etc.
- **Do NOT write actual website copy.** Only describe the **purpose and structure** of each section.
- Focus all effort on section purpose, content intent, user psychology, and conversion logic.

### Semantic SEO Structure

Apply these to every wireframe. They determine **what sections exist, how they're ordered, and how they relate to the rest of the site.**

#### Heading Hierarchy

- **One `[H1]` per page.** It must contain the page's primary entity/topic and target keyword intent. If the sitemap strategy defines an H1 for this page, use it. Annotate the H1's SEO purpose in the wireframe.
- **`[H2]` sections define subtopics.** Each H2 should represent a distinct facet of the page's core entity — not generic labels. Annotate the semantic relationship each H2 has to the H1.
- **`[H3]` and below for supporting detail.** Nest logically. Never skip heading levels (e.g., H1 → H3 without an H2).
- Heading structure must read as a coherent outline of the page's topic when stripped of all other content.

#### Entity & Topical Coverage

- **Structure sections around topic entities, not keywords.** Each page must cover the full semantic scope of its subject — the questions, subtopics, and related concepts that Google expects to find for that topic.
- **Annotate each section with its topical purpose** — e.g., "This section covers [entity/subtopic] to satisfy [search intent type: informational / commercial / navigational]."
- **Include a `[FAQ / COMMON QUESTIONS]` section** on service and trust pages. Structure as Q&A pairs targeting long-tail queries and "People Also Ask" intent. Annotate the question themes. **Check the global allocation registry** — do not repeat FAQ themes already covered in depth on another page. Link to the covering page instead.
- **Ensure semantic completeness** — if a page covers a service topic, it must structurally account for all related entities that searchers expect. Not all need deep sections — some can be brief mentions — but the topical map must be complete.
- **Annotate key entities per section** with their attributes and relationships using `[ENTITIES:]` annotations. Structure each entity with its type and relevant properties so the copy skill can weave them into prose for entity recognition:
  - **Person:** `[ENTITIES: Person — Name: [name], Role: [role], Credentials: [credentials], Relationship: [to brand]]`
  - **Organisation:** `[ENTITIES: Organisation — Name: [name], Type: [type], Attributes: [key attributes], Relationship: [to page topic]]`
  - **Service:** `[ENTITIES: Service — Name: [name], Category: [category], Differentiators: [list], Location: [if relevant]]`

#### Internal Linking Architecture

- **Every wireframe must include `[INTERNAL LINK]` annotations** specifying where contextual links to other site pages belong.
- **Hub pages link down** to their sub-pages.
- **Sub-pages link up** to their hub and **across** to sibling pages.
- **All service/trust pages link to the designated central trust node** — identified from the sitemap strategy (the page that anchors pricing/financial authority).
- **Case study / project references link to the relevant service page** and vice versa.
- **Use the silo structure from the sitemap strategy** to determine which pages should link to each other. Pages within the same silo are tightly interlinked. Cross-silo links are strategic and intentional.
- Annotate each internal link with its purpose: topical relevance, user journey flow, or authority passing.
- **Semantic bridge annotations:** In addition to silo-based internal links, annotate semantic bridge points from the Semantic Content Network in `brand-context.md`. These are cross-page connections based on shared concepts (not just silo hierarchy). Use `[SEMANTIC BRIDGE → Target Page: "Bridge Concept" — Natural phrasing: "suggested link text"]` to mark where a concept on this page naturally connects to deeper treatment on another page. The bridge concept and phrasing come from the Semantic Content Network table.

#### Local SEO Signals

- **Include `[LOCAL SIGNAL]` annotations** where location-specific content, area references, or local authority/regulation mentions belong.
- Service pages should structurally account for local regulatory references, regional market context, and neighbourhood-specific knowledge where relevant to the brand's market.
- Case study / project pages must include locality in their structure.
- Derive local context from the positioning docs and source docs — use the brand's actual geographic market, not generic placeholders.

#### E-E-A-T Signals (Experience, Expertise, Authoritativeness, Trustworthiness)

- **Every page must include at least one `[E-E-A-T SIGNAL]` section or element.** Annotate what type:
  - **Experience:** Project photos, case study links, years in market, number of projects completed.
  - **Expertise:** Qualifications, licensing, certifications, specialised capabilities.
  - **Authoritativeness:** Industry affiliations, media mentions, awards, recognisable project portfolio.
  - **Trustworthiness:** Reviews/testimonials, pricing guarantees, transparency mechanisms (portals, reporting), real team photos.
- Place E-E-A-T elements where they reinforce the surrounding content — e.g., a trust badge next to a pricing claim, a testimonial after a pain-point section.
- **Draw E-E-A-T proof points from the source docs.** Every signal must be grounded in something the brand can actually demonstrate.

#### Structured Data Annotations

- **Annotate schema markup opportunities** in each wireframe with `[SCHEMA: Type]` — e.g., `[SCHEMA: LocalBusiness]`, `[SCHEMA: FAQPage]`, `[SCHEMA: Service]`, `[SCHEMA: Review]`, `[SCHEMA: BreadcrumbList]`.
- Every page gets `[SCHEMA: BreadcrumbList]` and the appropriate business schema at minimum.
- Service pages add `[SCHEMA: Service]`. FAQ sections add `[SCHEMA: FAQPage]`. Testimonials add `[SCHEMA: Review]`.

#### Semantic SEO Annotations

Apply these annotations to every wireframe section. They encode the semantic SEO intelligence from `brand-context.md` directly into the wireframe structure, ensuring the copy skill can execute them in prose.

1. **Predicate Coverage** — Annotate which core predicates each section addresses:
   - Per-section: `[CORE PREDICATES ADDRESSED: predicate1, predicate2]`
   - End-of-wireframe coverage check: List all core predicates for this page's topic and mark each as COVERED (with section reference) or MISSING. Every predicate must be COVERED.

2. **Frame Element** — Annotate each section's role in the conceptual frame:
   - `[FRAME ELEMENT: Role — e.g., "Homeowner as protagonist", "Authority as guide", "Antagonist as industry villain"]`
   - Frame elements should progress logically through the scroll sequence, following the emotion arc defined in brand-context.md.

3. **Context Depth** — Annotate the intended semantic depth of each section:
   - `[CONTEXT DEPTH: DEEP]` — for sections that are core to the page's topic and require comprehensive treatment (multiple subtopics, evidence, specifics)
   - `[CONTEXT DEPTH: BROAD]` — for sections that provide overview, context-setting, or navigational function (lighter treatment, fewer details)

4. **Semantic Role Label** — Enhance the existing `[TOPICAL PURPOSE:]` annotation with agent-action-beneficiary structure:
   - Format: `[TOPICAL PURPOSE: This section [action] [topic/entity] for [beneficiary] to satisfy [intent type]. Agent: [who acts], Action: [what happens], Beneficiary: [who benefits]]`
   - Example: `[TOPICAL PURPOSE: This section demonstrates the brand's back-costing methodology for cost-anxious homeowners to satisfy commercial investigation intent. Agent: In-house QS, Action: eliminates budget uncertainty, Beneficiary: homeowners planning major renovations]`

5. **Thematic Field** — Annotate the thematic vocabulary cluster each section should draw from:
   - `[THEMATIC FIELD: field_name — core terms: term1, term2, term3, term4]`
   - Terms come from the Thematic Vocabulary by Topic table in brand-context.md.

6. **Transition Logic** — Annotate the logical connection between adjacent sections:
   - `[TRANSITION FROM: previous_section_name — connection: "how this section follows logically"]`
   - `[TRANSITION TO: next_section_name — connection: "how next section follows logically"]`
   - Transitions should create narrative momentum, not just list topics sequentially.

---

### Visitor Engagement & Conversion Design

Apply these to every wireframe. They determine **how sections are sequenced, what the visitor experiences at each scroll depth, and how the page builds toward conversion.**

#### Above-the-Fold Contract

- **The first viewport must answer three questions instantly:** Who is this for? What do they do? What should I do next?
- Structure the hero section to deliver: `[H1]` (entity + intent), `[SUPPORTING TEXT PURPOSE]` (one-line value prop intent), `[HERO IMAGE/VISUAL]`, and `[PRIMARY CTA]`.
- Use the hero CTA defined in the CTA strategy document for this page. If a page-specific hero CTA is defined (e.g., a warmer first-touch CTA for the homepage), use it. Otherwise, use the primary CTA.
- No clutter. No secondary links. One clear path.

#### Progressive Disclosure (Scroll Architecture)

Structure every page's sections in this psychological sequence:

1. **Hook** (0–10% scroll) — Hero with value proposition intent and primary CTA. Establish who and what immediately.
2. **Problem Agitation** (variable depth — see **Problem Agitation Depth Scaling** below) — Surface the visitor's pain points and fears, scaled to the page type and visitor intent. Use the audience fears extracted from the positioning docs and the agitation approach assigned to this page type in `cache/brand-context.md`. **Check the global allocation registry** — use a DIFFERENT primary fear than pages already completed. On broad-intent pages (homepage, brand hub), this step uses the **positive contrast technique** — problems appear as implied contrasts within Solution sections rather than as a dedicated agitation section. On trust and service pages, a dedicated agitation section is appropriate. Annotate with `[AGITATION APPROACH:]` and `[AGITATION DEPTH:]`.
3. **Solution & Differentiation** (30–50%) — Introduce the brand's approach as the answer. This is where the source doc differentiators become section structures. **Check the global allocation registry** — feature differentiators not already prominently used on other pages. Map each value theme to a section.
4. **Proof** (50–70%) — Case studies, testimonials, project images, credentials. Sections that provide evidence for every claim made above. Draw from source doc proof points.
5. **Clarity & Detail** (70–85%) — FAQ, process breakdown, cost context. Sections for visitors who need more information before committing.
6. **Final Conversion** (85–100%) — Closing CTA block + footer. Restate the core promise intent and provide one clear action using the primary CTA from the CTA strategy document.

Annotate each section in the wireframe with its position in this sequence (e.g., `[SCROLL POSITION: Problem Agitation]`).

#### Problem Agitation Depth Scaling

Problem agitation depth must scale with page specificity and visitor intent. A homepage serving mixed visitor intent should not carry the same agitation depth as a trust/methodology page where visitors are evaluating credibility. This framework is **brand-agnostic** — agitation depth is derived from page type + the brand's positioning tone (extracted per-project during Brand Context Extraction).

**Depth Scaling by Page Type:**

| Page Type | Approach | Depth Target | Technique |
|-----------|----------|-------------|-----------|
| Brand Hub / Homepage | Positive contrast | LIGHT (40-80 words) | Problems surfaced as implied contrasts within solution sections — no dedicated agitation section. The visitor feels "this is different" rather than "I should be afraid." |
| Trust Foundation (e.g., About, Why Us, Our Approach) | Full editorial | DEEP (250-400 words) | Dedicated agitation section with mechanism-level detail — why the industry fails, what goes wrong, how the brand's approach prevents it. |
| Service Hub / Pillar | Moderate narrative | MODERATE (150-200 words) | Dedicated agitation section addressing category-specific fears. Focused on the service category's common failures. |
| Service Sub-page | Moderate narrative | MODERATE (120-180 words) | Dedicated agitation section with technically specific fears relevant to the particular service. |
| Conversion Gate (e.g., Contact, Get Started, Book) | Minimal | MINIMAL (0-40 words) | Little or no agitation — the visitor is already motivated to act. At most, a single reinforcing line. |
| Proof / Case Studies | Implied | IMPLIED (no dedicated section) | Problems appear only in the "before" state of case narratives — never as standalone agitation. |

**Positive Contrast Technique:**
Instead of a dedicated Problem Agitation section, problems are surfaced as implied contrasts within Solution & Differentiation sections. For example, rather than "Most builders hide costs until it's too late" (dedicated agitation), the solution section frames it as "Every project includes an in-house QS from day one — so your budget is locked before construction begins." The problem is implied (others don't do this) without dedicating scroll depth to fear. This technique is appropriate for broad-intent pages where visitors have mixed motivations.

**How to Determine Approach:**
1. **Identify the page type** from the table above using the sitemap strategy's page classification.
2. **Apply the positioning tone modifier** from the brand context:
   - **Confident guide** brands: Reduce agitation depth by one tier where possible (e.g., MODERATE → LIGHT for service hubs). Favour positive contrast even on service pages.
   - **Challenger** brands: May increase agitation depth by one tier on trust and service pages (e.g., MODERATE → DEEP for service hubs). Never increase on homepage or conversion gates.
   - **Educator** brands: Use the default depths from the table. Favour mechanism-level explanations over emotional fear language.
3. **Record the approach** in the `[AGITATION APPROACH:]` and `[AGITATION DEPTH:]` annotations on the wireframe, and in the Agitation Approach by Page Tier table in `cache/brand-context.md`.

**Annotation Requirements:**
Every wireframe must include:
- `[AGITATION APPROACH: approach_name]` — e.g., `[AGITATION APPROACH: Positive contrast]`
- `[AGITATION DEPTH: depth_label — word_count_target]` — e.g., `[AGITATION DEPTH: LIGHT — 40-80 words]`

These annotations appear at the page level (in the wireframe metadata) and at the section level (on any section that contains agitation content).

#### Per-Page Strategy Integration

When the sitemap strategy includes strategy notes for a specific page (H1 suggestions, hooks, content angles, inline CTA placements), these take priority:

- **Use the suggested H1** from the sitemap strategy as the `[H1]` annotation.
- **Use the hook/meta hook** to inform the `[SUPPORTING TEXT PURPOSE]` in the hero section.
- **Place inline CTAs** exactly where the sitemap strategy specifies (e.g., "after budget blowout content", "after the team section").
- **Use the page's strategic angle** (e.g., "Captures 'House Plan' searchers but pivots them to custom design") to inform the section purposes and content intent annotations.

#### Visual Hierarchy Zones

- **Primary zone:** The section's main message/purpose — given the most visual weight (largest heading, most space).
- **Secondary zone:** Supporting evidence or detail — subordinate to primary.
- **Tertiary zone:** Navigation, metadata, minor links — lowest visual weight.
- Annotate each section with `[VISUAL PRIORITY: Primary/Secondary/Tertiary]` so the designer knows the intended weight.

#### Social Proof Placement Strategy

- **Never cluster all social proof in one section.** Distribute it throughout the page at moments of doubt.
- Place `[TESTIMONIAL]` or `[REVIEW SNIPPET]` elements immediately after sections that make bold claims or surface pain points.
- Place `[TRUST BADGE]` elements near pricing or commitment sections. Use the brand's actual credentials from source docs.
- Place `[PROJECT IMAGE / CASE STUDY LINK]` elements near service description sections to provide visual evidence.

#### Engagement Friction Reduction

- **One idea per section.** Don't overload any single block with multiple competing messages.
- **One CTA per section.** Never present competing actions.
- **Scannable structure.** Every section should be annotated with how it works for scanners (bullet points, visual breaks, clear headings) vs. deep readers (paragraph content, detailed explanations).
- **Mobile-first section order.** Annotate any sections where desktop and mobile ordering should differ — e.g., image/text pairs that should stack differently on mobile.

#### Dwell Time & Depth Signals

- **Include at least one interactive or expandable element annotation per page** — e.g., `[EXPANDABLE FAQ]`, `[IMAGE GALLERY / SLIDER]`, `[BEFORE/AFTER TOGGLE]`, `[PROCESS TIMELINE]`. These increase time-on-page and signal content depth to search engines. **Check the global allocation registry** — vary the interactive element type across pages where possible.
- **Include `[VIDEO EMBED PLACEHOLDER]` annotations** on key pages (homepage, process, case studies) where video would increase engagement.
- **Annotate content depth targets** — e.g., "This section should support 300–500 words of content" — so the wireframe communicates the expected substance, not just the structure.

---

### CTA Rules (Derived from Sitemap Strategy)

CTA rules are **not hardcoded in this skill file**. They are defined in the brand's CTA strategy document (in `sitemap-cta-strategy/`) and enforced from there. This ensures each brand's CTA language, destinations, and anti-patterns are respected exactly as defined.

#### How to Apply

1. **Read the CTA table** from the brand context file (`cache/brand-context.md`). It defines every button text, its location, purpose, and destination.
2. **Read the CTA anti-patterns** from the brand context file. These are absolute prohibitions — enforce them on every wireframe.
3. **Apply the primary CTA** (header/sticky bar button) to every wireframe's header annotation and closing CTA block.
4. **Apply page-specific CTAs** where the sitemap strategy specifies them (e.g., a different hero CTA for the homepage, a mid-page curiosity CTA for service pages).
5. **Apply inline CTAs** where the sitemap strategy specifies placement triggers (e.g., "after content that raises a pain point").

#### Universal CTA Principles (Apply Regardless of Brand)

- **One CTA per section.** Never stack multiple buttons in the same block.
- **Every CTA routes to the designated conversion page** — not a generic contact form. The CTA strategy document defines this destination.
- **CTA text must be specific and action-oriented.** Never use passive/generic text like "Contact Us" or "Learn More" unless the CTA strategy document explicitly permits it.
- **The primary CTA must appear at least three times** on every page: header, mid-page (contextual), and closing block.

---

### Navigation (Derived from Sitemap Strategy)

Navigation structures are **not hardcoded in this skill file**. They are defined in the brand's sitemap strategy and used directly.

#### Global Header

Read the header navigation from the brand context file. Apply it to the `global-header.md` wireframe and reference it on every page wireframe.

#### Global Footer

Read the footer navigation from the brand context file. The footer typically provides a flattened link architecture for deep indexing. Apply it to the `global-footer.md` wireframe.

---

### Site Architecture (Derived from Sitemap Strategy)

The tier/silo structure is defined in the sitemap strategy. Use it to determine:

- **Phase ordering** for `progress.md` — tiers become phases.
- **Internal linking logic** — hub-to-sub, sub-to-hub, cross-silo, and trust-node linking.
- **Page hierarchy** — which pages are pillar/hub pages vs. sub-pages vs. utility pages.
- **Conversion flow** — which page is the single conversion gate that all CTAs route to.
- **Batch parallelisation** — which pages within a phase can be wireframed in parallel (see Workflow section).
