# Wireframe Skill — Brand-Agnostic

## Role

Act as a **Senior Semantic SEO & Topical Authority Expert** and a **Senior UX/UI Designer & CRO Specialist** for high-value service businesses.

You create wireframes that are grounded in the client's actual brand positioning, source documentation, and sitemap strategy — never generic templates.

---

## Expected Project Structure

Every project using this skill must follow this folder layout. The skill reads from these locations dynamically — the contents will differ per brand, but the structure is constant.

```
project-root/
├── skill.md                      ← This file (orchestration, workflow, subagent prompts)
├── wireframe-RULES.md            ← Wireframe creation rules (loaded by subagents)
├── progress.md                   ← Wireframe progress tracker (generated or maintained)
├── sitemap-cta-strategy/         ← Sitemap strategy + CTA strategy docs
│   ├── [brand]-sitemap-strategy.md
│   └── [brand]-cta-strategy.md
├── positioning-and-messaging/    ← Brand positioning and key messaging frameworks
│   ├── Positioning.md
│   └── Key Messaging.md
├── source-docs/                  ← All brand/business reference material (differentiators, proof points, processes, bios, etc.)
│   ├── [topic-1].md
│   ├── [topic-2].md
│   └── ...
├── cache/                        ← Workflow cache (auto-created)
│   ├── brand-context.md          ← Pre-synthesised brand parameters (created once, loaded by every subagent)
│   └── global-allocation-registry.md  ← Cross-page differentiator, archetype, and fear tracking
└── output/                       ← Generated wireframe files (auto-created)
    ├── global-header.md
    ├── homepage.md
    └── ...
```

### Folder Purposes

| Folder | Contains | Used For |
|---|---|---|
| `sitemap-cta-strategy/` | The master sitemap strategy and CTA strategy documents for this brand. The sitemap strategy defines site architecture (tiers, silos, URL structure), global navigation (header & footer), and per-page strategy notes (H1 suggestions, hooks, inline CTA placements). The CTA strategy defines button texts, destinations, placement rules, and anti-patterns. | Site structure, navigation wireframes, CTA rules, internal linking logic, per-page strategic direction. **These are the architectural and conversion blueprints for the entire site.** |
| `positioning-and-messaging/` | Brand positioning statement, competitive differentiation, audience definition, value themes, tone guidelines, approved messaging pillars, and key phrases. | Brand voice, audience psychology (fears, values, decision drivers), tone enforcement, section purpose grounding, problem-agitation content direction. |
| `source-docs/` | Individual reference documents covering specific brand capabilities, differentiators, processes, team bios, pricing methodology, proof points, and operational detail. Each file is a deep dive on one topic. | Section-level content grounding. Every claim, proof point, or differentiator referenced in a wireframe must trace back to a specific source doc. These are the raw material for section purpose descriptions. |
| `cache/` | Pre-synthesised brand context and cross-page allocation tracking. Created during Initial Setup. | `brand-context.md` provides a reusable brand parameter artifact loaded by every subagent. `global-allocation-registry.md` tracks differentiator, archetype, and fear usage across pages to ensure website-level variety. |
| `output/` | Generated wireframe files. Created automatically during Initial Setup. All wireframe output is written here. | Keeps generated wireframes separate from source material and skill configuration. |

---

## Model Requirements

**MANDATORY: Use `claude-opus-4-6` (latest Opus) for all wireframe work.** This applies to the main agent and any subagents spawned via the Task tool (pass `model: "opus"`). Opus ensures the strongest synthesis of positioning docs, source material, and SEO strategy into wireframe structures.

### Extended Thinking Guidance

| Task | Extended Thinking | Execution Mode | Rationale |
|------|-------------------|----------------|-----------|
| Initial Setup / progress.md generation | OFF | Main Agent | Mechanical extraction from sitemap strategy |
| Brand Context Extraction | ON | Main Agent | Deep synthesis of positioning, messaging, and source docs into reusable cached artifact; highest-leverage task as output cascades to every wireframe |
| Wireframe creation | ON | **Wireframe Subagent** | Multi-constraint synthesis (SEO + UX + conversion + source grounding simultaneously) in fresh context |
| Wireframe review | ON | **Review Subagent** | Holistic judgment across completeness, accuracy, structural variety, and allocation compliance |
| Progress tracking / registry updates | OFF | Main Agent | Simple file edits |

---

## Architecture Overview

This skill uses a **subagent architecture** to prevent context degradation across large projects (15–25 wireframes). The main agent orchestrates; each wireframe gets a fresh context window via subagents.

```
Main Agent (Orchestrator):
├── Initial Setup: Creates progress.md, cache/brand-context.md, cache/global-allocation-registry.md
│
├── FOR each batch of wireframes:
│   ├── Determines next wireframe(s) from progress.md
│   ├── Prepares per-page source doc priorities from brand-context.md
│   │
│   ├── Launches wireframe subagent(s) (Task tool, model: "opus")
│   │   └── Subagent loads: skill rules, brand-context.md, allocation registry,
│   │       sitemap/CTA strategy, prioritised source docs
│   │       → Creates wireframe in fresh context with full attention
│   │
│   ├── Launches review subagent(s) (Task tool, model: "opus")
│   │   └── Reviews wireframe against source docs, structural variety,
│   │       and allocation registry compliance
│   │
│   ├── Presents wireframe to user
│   ├── Updates progress.md and global-allocation-registry.md
│   └── Repeats for next batch
```

**Why Subagents Are Required:**
- A 20-wireframe project in the main agent accumulates massive conversation history
- By wireframe 10, source docs re-read into context compete for attention against 9 completed wireframes, user feedback, and progress updates
- Later wireframes become measurably more generic, less grounded, and more structurally repetitive
- Subagents receive a fresh context window where source docs get full attention at the moment of wireframe creation

---

## Brand Context Extraction

After completing the read of all source documents, synthesise and write a cached brand context artifact. This is created once during Initial Setup and loaded by every subagent, ensuring consistent brand grounding regardless of conversation length.

**EXECUTION REQUIREMENTS:**
- Extended thinking: ON
- Rationale: Deep synthesis of positioning, messaging, and all source docs into a reusable artifact. This is the highest-leverage task — quality here cascades to every wireframe.

### Source Reading (Full Read Protocol)

Before extracting brand context, the main agent MUST read all source documents:

#### Step 1: Read Sitemap & CTA Strategy

Use the Glob tool to find all files in `sitemap-cta-strategy/` and read each one. This provides:
- Site architecture (tiers, silos, URL hierarchy)
- Global navigation (header and footer structure)
- CTA strategy (button texts, destinations, placement rules, anti-patterns)
- Per-page strategy notes (suggested H1s, hooks, inline CTA placements, content angles)
- Silo structure for internal linking

#### Step 2: Read Positioning & Messaging

Read all files in `positioning-and-messaging/`. This provides:
- Core entity and market category
- Positioning statement and competitive differentiation
- Audience definition (who they are, what they fear, what they value)
- Value themes and messaging pillars
- Tone and voice guidelines

#### Step 3: Read All Source Docs

Use the Glob tool to find all `.md` files in `source-docs/` and read every one. Each doc contains differentiators, proof points, and structural insights that may surface relevant section ideas for any page.

### Extraction and Caching

After all reads are complete, extract the following parameters and write them to `cache/brand-context.md`:

#### From the Sitemap & CTA Strategy Docs

| Parameter | Source | What to Extract |
|---|---|---|
| **Core Entity** | Sitemap strategy | The primary entity/topic the brand owns (e.g., "Custom Home Builders Auckland") |
| **Positioning** | Sitemap strategy | The strategic positioning label (e.g., "The Anti-Franchise Authority") |
| **Strategic Model** | Sitemap strategy | The acquisition-to-conversion model (e.g., "Attract via SEO → Filter via Pricing → Convert via Trust") |
| **CTA Table** | CTA strategy | All CTA button texts, their locations, purposes, and destinations — use exactly as defined |
| **CTA Anti-Patterns** | CTA strategy | What NOT to use as CTA text or behaviour — enforce on every wireframe |
| **Header Navigation** | Sitemap strategy | Full header structure including dropdowns and primary CTA button |
| **Footer Navigation** | Sitemap strategy | Full footer link architecture for deep indexing |
| **Site Tiers / Silos** | Sitemap strategy | The complete site architecture — tiers, hub pages, sub-pages, URL slugs |
| **Per-Page Strategy** | Sitemap strategy | H1 suggestions, meta hooks, content angles, inline CTA placements for specific pages |

#### From Positioning & Messaging

| Parameter | What to Extract |
|---|---|
| **Target Audience** | Who they are (demographics, professional background, motivations) |
| **Audience Fears** | What they are afraid of — these drive Problem Agitation sections. Also extract how the brand's positioning tone (confident guide, challenger, educator) affects agitation approach: confident guide brands should reduce agitation depth; challenger brands may increase it. Record the positioning tone modifier for use in the Agitation Approach by Page Tier table. |
| **Audience Values** | What proof they need to see — these drive Solution & Proof sections |
| **Value Themes** | The clustered benefit themes — each becomes a potential wireframe section |
| **Tone** | Voice guidelines that constrain how section purposes are described |
| **Competitive Alternatives** | What the brand replaces — these inform "why not them" section structures |

#### From Source Docs

| Parameter | What to Extract |
|---|---|
| **Differentiators** | Specific, provable claims the brand can make (team tenure, pricing methodology, process steps, credentials, etc.) — with source doc file references |
| **Proof Points** | Evidence that backs each differentiator (years in business, number of projects, named team members, specific tolerances/standards) — with source doc file references |
| **Process Steps** | The brand's end-to-end service process — informs process page wireframes and consultation page structure |
| **Team / Leadership** | Named individuals, roles, credentials — for team sections, hero sections, trust elements |
| **Pricing / Financial Model** | How the brand handles pricing — informs costs page, trust sections, CTA logic |

#### Per-Page Source Doc Relevance Map

For each page in the sitemap, identify which source docs are most relevant:

```markdown
## Source Doc Relevance by Page
| Page | Primary Sources (subagent must read in full) | Secondary Sources (scan for supporting details) |
|------|----------------------------------------------|------------------------------------------------|
| Homepage | Positioning.md, Key Messaging.md | All source docs (brief scan for hero-worthy proof points) |
| About / Team | Co-founder Bios.md, The In-House Team.md | Key Messaging.md |
| Costs / Pricing | In-House QS.md, Key Messaging.md | Co-founder Bios.md (credentials reinforce pricing authority) |
| Full Home Renovations | [relevant service docs] | [others] |
| Extensions | [relevant service docs] | [others] |
| Our Process | [process docs] | [all service docs for process context] |
| [Continue for all pages...] | | |
```

This map is included in `cache/brand-context.md` and used by the main agent to prepare source doc priorities for each wireframe subagent.

#### Semantic SEO Intelligence

Extract the following semantic SEO parameters and include them in `cache/brand-context.md`. These drive the semantic SEO annotations in every wireframe and are consumed downstream by the website copy skill.

**Core Predicates by Page Topic** (from sitemap strategy + positioning + source docs):
For each page in the sitemap, identify the core predicates — the essential claims or propositions that the page must structurally address. A predicate is a specific assertion the brand makes (e.g., "builds custom homes", "eliminates budget uncertainty", "has in-house QS"). Each page's wireframe must structurally account for all its core predicates.
- Cross-reference the sitemap strategy (what the page exists to communicate) with the positioning docs (brand claims) and source docs (evidence for those claims)
- Aim for 3-6 core predicates per page
- Each predicate should be provable from source docs

**Frame Semantics — Brand-Level + Per-Page** (from positioning + source docs):
Extract the brand's conceptual frame — the cognitive structure through which the brand's story is understood:
- Identify the Protagonist/Hero Role (typically the target customer)
- Identify the Guide/Authority Role (the brand)
- Identify the Antagonist Role (what the brand positions against)
- Define Core Events (the narrative arc — discovery, encounter, transformation)
- Define Core Objects (what's at stake — the home, the budget, the relationship)
- Define Core Emotions (the emotional journey — fear, relief, confidence)
- Map each page to its primary frame element, emotion arc, and dominant role

**Query Vocabulary Map** (from sitemap strategy + positioning):
For each page, map the search vocabulary landscape:
- Head Terms: the primary search queries this page targets (short, high-volume)
- Long-Tail Variations: specific, question-based, or multi-word queries (lower volume, higher intent)
- Brand Terminology: how the brand refers to the same concepts (may differ from search terms)
- This map ensures wireframe headings and section purposes use search-aligned vocabulary, while section content can use brand terminology

**Thematic Vocabulary by Topic** (from source docs + positioning):
For each major topic across the site, define the thematic field — the cluster of semantically related terms that signal topical depth:
- Core Term: the central term for the topic
- Thematic Field: 8-12 semantically related terms that naturally surround the core term
- These fields guide section purpose descriptions and ensure wireframes signal topical authority to search engines

### Output Format

Write the complete extracted context to `cache/brand-context.md` in this structure:

```markdown
# Brand Context: [Brand Name]

## Core Identity
- **Core Entity:** [extracted]
- **Positioning:** [extracted]
- **Strategic Model:** [extracted]

## CTA Strategy
### CTA Table
[Full CTA table from CTA strategy doc]

### CTA Anti-Patterns
[Full anti-patterns list]

## Navigation
### Header
[Full header structure]

### Footer
[Full footer structure]

## Site Architecture
[Tier/silo structure with all pages, URLs, and hierarchy]

## Target Audience
- **Who:** [extracted]
- **Fears:** [extracted — these drive Problem Agitation sections]
- **Values:** [extracted — these drive Solution & Proof sections]
- **Competitive Alternatives:** [what the brand replaces]

## Agitation Approach by Page Tier
Determines problem agitation depth for each page based on page type and brand positioning tone. Derived from the Problem Agitation Depth Scaling framework in the skill file.

| Page | Page Type | Positioning Tone Modifier | Agitation Approach | Depth Target |
|------|-----------|--------------------------|-------------------|-------------|
| Homepage | Brand Hub | [e.g., "Confident guide — reduce further" / "Challenger — may increase one tier"] | [e.g., "Positive contrast"] | [e.g., "LIGHT (40-80 words)"] |
| [Trust Page] | Trust Foundation | [tone modifier] | [e.g., "Full editorial"] | [e.g., "DEEP (250-400 words)"] |
| [Service Hub] | Service Hub/Pillar | [tone modifier] | [e.g., "Moderate narrative"] | [e.g., "MODERATE (150-200 words)"] |
| [Service Sub-page] | Service Sub-page | [tone modifier] | [e.g., "Moderate narrative"] | [e.g., "MODERATE (120-180 words)"] |
| [Conversion Page] | Conversion Gate | [tone modifier] | [e.g., "Minimal"] | [e.g., "MINIMAL (0-40 words)"] |
| [Case Study] | Proof / Case Studies | [tone modifier] | [e.g., "Implied"] | [e.g., "IMPLIED (no section)"] |
| [Continue for all pages...] | | | | |

## Tone & Voice
[Voice guidelines]

## Value Themes
[Clustered benefit themes with source doc references]

## Differentiators & Proof Points
| Differentiator | Evidence | Source Doc |
|----------------|----------|------------|
| [specific claim] | [specific proof] | [filename.md] |
| ... | ... | ... |

## Process Steps
[End-to-end service process]

## Team & Leadership
| Person | Role | Key Credentials | Source Doc |
|--------|------|-----------------|------------|
| ... | ... | ... | ... |

## Pricing / Financial Model
[Pricing approach details]

## Per-Page Strategy Notes
| Page | H1 Suggestion | Hook | Content Angle | Inline CTA Placements |
|------|---------------|------|---------------|----------------------|
| [from sitemap strategy] | ... | ... | ... | ... |

## Source Doc Relevance by Page
| Page | Primary Sources | Secondary Sources |
|------|----------------|-------------------|
| ... | ... | ... |

## Core Predicates by Page Topic
For each page, list the core predicates (the essential claims/propositions) that the page must structurally address. Derived from the sitemap strategy (what the page exists to communicate), positioning docs (brand claims), and source docs (evidence).

| Page | Topic | Core Predicates |
|------|-------|----------------|
| Homepage | [primary entity] | [predicate1: e.g., "builds custom homes"], [predicate2: e.g., "eliminates budget uncertainty"], [predicate3: e.g., "has 30+ years experience"] |
| [Service Page] | [service topic] | [predicate1], [predicate2], [predicate3] |
| [Continue for all pages...] | | |

## Frame Semantics
The brand's conceptual frame — the roles, events, objects, and emotions that structure how the brand's story is understood.

### Brand-Level Frame
- **Protagonist/Hero Role:** [e.g., "The homeowner who deserves better"]
- **Guide/Authority Role:** [e.g., "The brand as the experienced authority who protects"]
- **Antagonist Role:** [e.g., "The industry villain — franchise builders, hidden costs, cowboy contractors"]
- **Core Events:** [e.g., "Discovery of risk → Encounter with authority → Transformation through trust"]
- **Core Objects:** [e.g., "The home (sacred), the budget (vulnerable), the contract (protection)"]
- **Core Emotions:** [e.g., "Fear of being ripped off → Relief at finding competence → Confidence in choosing right"]

### Per-Page Frame Focus
| Page | Primary Frame Element | Emotion Arc | Dominant Role | Agitation Approach |
|------|----------------------|-------------|---------------|-------------------|
| Homepage | [e.g., "Full frame introduction — all roles present"] | [e.g., "Anxiety → Authority → Confidence"] | [e.g., "Guide"] | [e.g., "Positive contrast — LIGHT"] |
| [Service Page] | [e.g., "Antagonist exposure + Guide solution"] | [e.g., "Frustration → Understanding → Trust"] | [e.g., "Guide solving Antagonist problem"] | [e.g., "Moderate narrative — MODERATE"] |
| [Continue for all pages...] | | | | |

## Query Vocabulary Map
For each page, map the search vocabulary landscape: what searchers type (head terms, long-tail), and what the brand calls it.

| Page | Head Terms | Long-Tail Variations | Brand Terminology |
|------|-----------|---------------------|-------------------|
| Homepage | [e.g., "custom home builders auckland"] | [e.g., "best custom home builders in auckland", "auckland home renovation specialists"] | [e.g., "bespoke residential construction"] |
| [Service Page] | [e.g., "house renovations auckland"] | [e.g., "full house renovation cost auckland", "how much to renovate a house nz"] | [e.g., "complete home transformation"] |
| [Continue for all pages...] | | | |

## Thematic Vocabulary by Topic
For each major topic across the site, define the thematic field — the cluster of semantically related terms that signal topical depth to search engines.

| Topic | Core Term | Thematic Field |
|-------|-----------|---------------|
| [e.g., "Renovation costs"] | [e.g., "renovation budget"] | [e.g., "back-costing, quantity surveyor, fixed-price contract, contingency, scope creep, budget blowout, cost certainty, preliminary estimate, detailed pricing"] |
| [e.g., "Build quality"] | [e.g., "construction quality"] | [e.g., "master builder, site safe, licensed building practitioner, building code, consent, inspection, weathertightness, structural integrity"] |
| [Continue for all topics...] | | |

## Semantic Content Network
Cross-page semantic bridges — concepts that naturally connect pages beyond silo hierarchy. These inform `[SEMANTIC BRIDGE →]` annotations in wireframes and contextual internal links in copy.

| From Page | To Page | Bridge Concept | Where in From Page | Natural Phrasing |
|-----------|---------|---------------|-------------------|-----------------|
| [e.g., "Homepage"] | [e.g., "Our Process"] | [e.g., "Build methodology"] | [e.g., "After Solution section"] | [e.g., "See how our proven 7-stage process protects your investment"] |
| [e.g., "Costs Page"] | [e.g., "About / Team"] | [e.g., "QS credentials"] | [e.g., "After back-costing explanation"] | [e.g., "Meet the in-house quantity surveyor behind every estimate"] |
| [Continue for all semantic bridges...] | | | | |
```

---

## Global Allocation Registry

The `cache/global-allocation-registry.md` file tracks cross-page usage of differentiators, section archetypes, audience fears, and FAQ themes. It prevents the same patterns from repeating identically across the website.

### Purpose

Without cross-page tracking, a 15-page website ends up with:
- The same differentiator featured prominently on 6 different service pages
- The same testimonial/trust section pattern in the same scroll position on every page
- Identical FAQ structures with overlapping question themes
- Identical Problem Agitation sections that all surface the same audience fears

### Initial Template

Created during Initial Setup:

```markdown
# Global Allocation Registry

## Purpose
Tracks cross-page usage of differentiators, section archetypes, audience fears,
and FAQ themes. Each wireframe subagent reads this before starting. The main agent
updates it after each wireframe batch completes.

## Differentiator Prominence by Page
| Differentiator | Featured Prominently On | Brief Reference On |
|----------------|------------------------|-------------------|
| (populated after each wireframe) | | |

## Section Archetype Usage
| Archetype/Pattern | Used On | Notes |
|-------------------|---------|-------|
| (populated after each wireframe — e.g., "Before/After toggle gallery", "Process timeline", "Team credentials grid") | | |

## Audience Fear Coverage
| Fear/Pain Point | Agitated On (Primary) | Referenced On (Light) | Agitation Approach | Agitation Depth |
|-----------------|----------------------|----------------------|-------------------|----------------|
| (populated after each wireframe) | | | (e.g., Positive contrast, Moderate narrative, Full editorial) | (e.g., LIGHT, MODERATE, DEEP) |

## FAQ Theme Allocation
| Question Theme | Covered On | Do NOT Repeat On |
|----------------|-----------|-----------------|
| (populated after each wireframe) | | |

## Interactive Element Usage
| Element Type | Used On | Alternative for Next Use |
|-------------|---------|------------------------|
| (e.g., "Expandable FAQ", "Image gallery/slider", "Before/After toggle") | | |

## Rules
- Each major differentiator should be "featured prominently" on ONE page only
- Brief references (1-2 words, no explanation) are acceptable on other pages
- Each page must use a DIFFERENT primary audience fear for its Problem Agitation section
- FAQ themes covered in depth on one page should NOT be repeated — link instead
- Interactive/expandable element types should vary across pages where possible
- Section archetypes (visual patterns, layout approaches) should not repeat on consecutive pages
- Agitation depth must match page type — broad-intent pages (homepage, brand hub) use LIGHT depth with positive contrast; trust/methodology pages use DEEP with full editorial; service pages use MODERATE; conversion gates use MINIMAL or none
- No page should exceed its agitation depth target by more than 20% — if it does, the wireframe must be revised to reduce agitation or redistribute it as positive contrast within solution sections
```

### Update Protocol

After each wireframe batch completes (created and reviewed), the main agent updates the registry:

1. Read the completed wireframe(s)
2. Extract: differentiators used (and how prominently), section archetypes, fears agitated, FAQ themes, interactive elements
3. Append entries to the appropriate tables
4. This updated registry is then loaded by the next batch's wireframe subagents

---

## Wireframe Creation Rules

**→ See `wireframe-RULES.md`**

All wireframe creation rules (format, semantic SEO structure, visitor engagement & conversion design, problem agitation depth scaling, CTA rules, navigation, site architecture) are defined in the separate rules file. This file is:
- **Read directly by every wireframe subagent** via the Read tool
- **Referenced by the review subagent** for compliance checking
- Kept separate from this orchestrator file for context efficiency — the main agent does not need 237 lines of creation rules in its context during orchestration

---

## Subagent Prompts

### Wireframe Subagent Prompt Template

Each wireframe is created by a subagent with a fresh context window. The main agent constructs the prompt using this template:

```
Task tool parameters:
- subagent_type: "general-purpose"
- model: "opus"
- description: "Create wireframe for [PAGE_NAME]"
- prompt: [See template below]
```

```
# WIREFRAME CREATION: [PAGE_NAME]

## YOUR ROLE
You are a Senior Semantic SEO & Topical Authority Expert and a Senior UX/UI
Designer & CRO Specialist. Your task is to create ONE wireframe for a high-value
service business website, grounded in brand strategy and source documentation.

## CRITICAL INSTRUCTION: READ THESE FILES BEFORE WIREFRAMING

You MUST read the following files using the Read tool before creating any wireframe content:

1. **Brand Context:** `cache/brand-context.md`
   — Pre-synthesised brand parameters, CTA rules, navigation, audience psychology,
     differentiators, proof points, and per-page strategy notes.

2. **Global Allocation Registry:** `cache/global-allocation-registry.md`
   — Cross-page tracking of differentiators, archetypes, fears, FAQ themes, and
     interactive elements already used. You MUST respect this to avoid repetition.

3. **Sitemap & CTA Strategy:**
   [List all files in sitemap-cta-strategy/]
   — For silo structure, internal linking rules, and this page's specific strategy notes.

4. **Source Documents (prioritised loading):**
   - **Primary Sources (read in FULL — these contain the most relevant facts for this page):**
     [List primary source files from brand-context.md's Source Doc Relevance table]
   - **Secondary Sources (scan for supporting details):**
     [List secondary source files]

5. **Positioning & Messaging:**
   - `positioning-and-messaging/Positioning.md`
   - `positioning-and-messaging/Key Messaging.md`

6. **Semantic SEO Intelligence (from brand-context.md):**
   - Core Predicates by Page Topic — the predicates this page must structurally cover
   - Frame Semantics — the brand-level frame and this page's frame focus
   - Query Vocabulary Map — head terms, long-tail variations, and brand terminology for this page
   - Thematic Vocabulary by Topic — the thematic field and core terms for this page's topic
   - Semantic Content Network — the semantic bridges involving this page (from-page and to-page)

7. **Wireframe Creation Rules:** `wireframe-RULES.md`
   — Format requirements, semantic SEO structure rules, progressive disclosure sequence,
     problem agitation depth scaling, CTA rules, navigation and site architecture rules.
     Read this file IN FULL before creating the wireframe.

## PAGE DETAILS

**Page Name:** [PAGE_NAME]
**URL:** [from sitemap strategy]
**Tier/Phase:** [from sitemap strategy]
**Page Type:** [Hub/Pillar, Sub-page, Utility, etc.]
**Silo:** [which silo this page belongs to]

## PER-PAGE STRATEGY (from sitemap strategy)

- **Suggested H1:** [from brand-context.md per-page strategy table]
- **Hook / Meta Hook:** [from brand-context.md]
- **Content Angle:** [from brand-context.md]
- **Inline CTA Placements:** [from brand-context.md]

## GLOBAL ALLOCATION CONSTRAINTS

Based on the global allocation registry, the following constraints apply to this page:

**Differentiators — DO NOT feature prominently (already featured elsewhere):**
[List differentiators already prominently used, with which page]

**Differentiators — AVAILABLE for prominent use on this page:**
[List differentiators not yet prominently featured]

**Audience Fears — already used as PRIMARY agitation on other pages:**
[List fears already primarily agitated, with which page]

**Audience Fears — AVAILABLE as primary for this page:**
[List fears not yet used as primary]

## AGITATION DEPTH FOR THIS PAGE

**Page Type:** [Brand Hub / Trust Foundation / Service Hub / Service Sub-page / Conversion Gate / Proof-Case Studies]
**Agitation Approach:** [Positive contrast / Full editorial / Moderate narrative / Minimal / Implied]
**Agitation Depth Target:** [LIGHT (40-80 words) / DEEP (250-400 words) / MODERATE (150-200 words) / MODERATE (120-180 words) / MINIMAL (0-40 words) / IMPLIED (no section)]
**Technique:** [Describe — e.g., "Problems as implied contrasts within solution sections" / "Dedicated section with mechanism-level detail"]
**Positioning Tone Modifier:** [From brand-context.md — e.g., "Confident guide: reduce agitation further" / "Challenger: may increase depth by one tier"]

Apply this agitation approach when building the Problem Agitation step of the Progressive Disclosure sequence.
Annotate the wireframe with `[AGITATION APPROACH: approach_name]` and `[AGITATION DEPTH: depth_label — target word count]`.
If the approach is "Positive contrast", do NOT create a dedicated Problem Agitation section — instead weave problem awareness as implied contrasts within the Solution & Differentiation sections.

**FAQ Themes — already covered in depth elsewhere (link, don't repeat):**
[List FAQ themes with covering page]

**Section Archetypes — recently used (vary if possible):**
[List archetypes used on last 2-3 wireframes]

**Interactive Elements — recently used (vary if possible):**
[List interactive element types used on last 2-3 wireframes]

## SEMANTIC SEO REQUIREMENTS FOR THIS PAGE

**Core Predicates to Cover:**
[List core predicates from brand-context.md Core Predicates by Page Topic table for this page.
Every predicate must have at least one section that structurally addresses it.]

**Frame Segment for This Page:**
- **Primary Frame Focus:** [from brand-context.md Per-Page Frame Focus table]
- **Emotion Arc:** [from brand-context.md Per-Page Frame Focus table — the emotional progression for this page]
- **Key Roles:** [from brand-context.md Frame Semantics — which roles (e.g., Homeowner, Authority, Antagonist) are active on this page]

**Query Vocabulary for This Page:**
| Head Terms | Long-Tail Variations | Brand Terminology |
|------------|---------------------|-------------------|
| [from brand-context.md Query Vocabulary Map for this page] | ... | ... |

Use head terms and long-tail variations in H2 headings and section purpose descriptions.
Brand terminology for section content and CTA language.

**Semantic Bridges from This Page:**
[List from brand-context.md Semantic Content Network — all bridges where this page is the "From Page":
- Bridge to [Target Page] via concept "[Bridge Concept]" — place in [Where in From Page] section
  Natural phrasing: "[Natural Phrasing from network]"]

## WIREFRAME CREATION RULES

Read `wireframe-RULES.md` for the complete creation rules. Apply every rule in that file
to this wireframe. Key sections: Format, Semantic SEO Structure, Visitor Engagement &
Conversion Design (including Problem Agitation Depth Scaling), CTA Rules, Navigation,
Site Architecture.

## OUTPUT FORMAT

Write the wireframe to: `output/[filename].md`

The wireframe must include:
- Page metadata (URL, page type, silo, schema annotations)
- Full section-by-section wireframe with bracketed notation
- Each section annotated with: scroll position, visual priority, topical purpose (with agent-action-beneficiary semantic role), E-E-A-T signal type (where applicable), internal link annotations, core predicates addressed, frame element, context depth (DEEP/BROAD), thematic field, transition logic (to/from adjacent sections), semantic role labels, and entity annotations
- Content depth targets per section
- Source doc grounding notes (which source docs inform each section's purpose)
- Predicate coverage check at end of wireframe (all core predicates for this page accounted for)

At the end of the wireframe, include a brief allocation summary:
```markdown
<!-- ALLOCATION SUMMARY -->
<!-- Differentiators Featured: [list] -->
<!-- Primary Fear Agitated: [which fear] -->
<!-- Agitation Approach: [approach used — e.g., "Positive contrast" / "Moderate narrative" / "Full editorial"] -->
<!-- Agitation Depth: [depth label and word count — e.g., "LIGHT (40-80 words)" / "MODERATE (150-200 words)"] -->
<!-- FAQ Themes Covered: [list] -->
<!-- Interactive Elements Used: [list] -->
<!-- Section Archetypes Used: [list] -->
<!-- Predicate Coverage: [list all core predicates for this page] → [COVERED/MISSING for each] -->
<!-- Semantic Bridges Placed: [list bridge annotations placed, with target pages] -->
```

## IMPORTANT

- Do NOT write actual website copy — only structure and purpose descriptions
- Do NOT guess at source material — ground every section purpose in what the docs say
- Do NOT repeat differentiators, fears, or archetypes flagged in the allocation constraints
- DO check the allocation registry before choosing your Problem Agitation angle
- DO vary your section patterns from recently completed wireframes
- DO annotate which source docs inform each section's content purpose
- DO include ALL semantic SEO annotation types on every section: `[CORE PREDICATES ADDRESSED:]`, `[FRAME ELEMENT:]`, `[CONTEXT DEPTH:]`, `[THEMATIC FIELD:]`, `[TRANSITION TO/FROM:]`, and the enhanced `[TOPICAL PURPOSE:]` with agent-action-beneficiary
- DO verify predicate coverage at the end — every core predicate for this page's topic must have a structural home
- DO use search vocabulary from the Query Vocabulary Map in H2 headings (head terms or long-tail variations, not only brand terminology)
- DO place `[SEMANTIC BRIDGE →]` annotations at all bridge points specified in the Semantic Content Network for this page
- DO annotate key entities per section with `[ENTITIES:]` including type (Person/Organisation/Service), attributes, and relationships
```

---

### Review Subagent Prompt Template

Each completed wireframe is reviewed by a review subagent with fresh context:

```
Task tool parameters:
- subagent_type: "general-purpose"
- model: "opus"
- description: "Review wireframe for [PAGE_NAME]"
- prompt: [See template below]
```

```
# WIREFRAME REVIEW: [PAGE_NAME]

## YOUR ROLE
You are a Senior Wireframe Reviewer. Your task is to review a completed wireframe
for structural quality, source doc grounding, SEO completeness, and cross-page variety.

## CRITICAL INSTRUCTION: READ THESE FILES

1. **The Wireframe:** `output/[filename].md`
2. **Brand Context:** `cache/brand-context.md`
3. **Global Allocation Registry:** `cache/global-allocation-registry.md`
4. **Sitemap & CTA Strategy:**
   [List all files in sitemap-cta-strategy/]
5. **Primary Source Docs for This Page:**
   [List primary source files for this page]
6. **Positioning & Messaging:**
   - `positioning-and-messaging/Positioning.md`
7. **Wireframe Creation Rules:** `wireframe-RULES.md`
   — The rules the wireframe was built against. Use for compliance checking.

## REVIEW CRITERIA

### 1. Source Doc Coverage (Critical)
- Are all relevant differentiators and proof points from the primary source docs
  structurally accounted for in the wireframe?
- Does each section's purpose description reference specific source doc content,
  not generic claims?
- **Flag:** Any section purpose that could apply to any business (not grounded in this brand's docs)
- **Flag:** Any major proof point from primary source docs that has no structural home

### 2. Heading Coherence
- Does the H1 → H2 → H3 hierarchy read as a complete topical outline of the page's subject?
- Are heading levels properly nested (no skipped levels)?
- Does each H2 represent a distinct facet of the page entity?
- **Flag:** Generic H2 labels that don't reflect the brand's specific approach

### 3. Structural Variety (Cross-Page — Critical)
- Does this wireframe's section pattern differ meaningfully from similar completed pages?
- Are differentiators featured prominently on this page DIFFERENT from those on other pages?
- Is the Problem Agitation section driven by a DIFFERENT primary fear than other pages?
- Are interactive elements and section archetypes varied from recent wireframes?
- **Flag:** Any allocation registry violation

### 3b. Agitation Depth Appropriateness
- Does the wireframe's problem agitation depth match its page type per the Problem Agitation Depth Scaling framework?
- Is the `[AGITATION APPROACH:]` annotation present and correct for this page type?
- Is the `[AGITATION DEPTH:]` annotation present and does the actual agitation content fall within the word count target?
- **Flag:** Homepage or brand hub page with a dedicated deep agitation section (should use positive contrast technique instead)
- **Flag:** Conversion gate page with more than minimal agitation (visitor is already motivated — agitation is counterproductive)
- **Flag:** Trust/methodology page with only light agitation (these pages warrant deep editorial treatment)
- **Flag:** Agitation word count significantly exceeding the depth target for the page type
- **Flag:** Missing `[AGITATION APPROACH:]` or `[AGITATION DEPTH:]` annotations

### 4. SEO Completeness
- Entity/topical coverage complete for this page's subject?
- Internal link annotations present and correct per silo structure?
- Local SEO signals present where relevant?
- Schema annotations present (minimum: BreadcrumbList + page-appropriate schema)?
- E-E-A-T signals present and grounded in source docs?

### 5. Conversion Architecture
- Progressive disclosure sequence intact (Hook → Problem → Solution → Proof → Clarity → Convert)?
- CTAs correctly placed per CTA strategy (hero, mid-page, closing)?
- CTA text matches CTA table exactly?
- No CTA anti-pattern violations?
- Per-page strategy notes respected (H1, hook, inline CTA placements)?

### 6. Engagement Elements
- At least one interactive/expandable element annotated?
- Content depth targets present?
- Social proof distributed (not clustered)?
- Mobile-first considerations noted?

### 7. Semantic SEO Completeness
- **Predicate coverage:** Does the wireframe structurally account for ALL core predicates listed in the brand-context.md for this page's topic? Check the `[CORE PREDICATES ADDRESSED:]` annotation and the end-of-wireframe predicate coverage check. **Flag:** Any core predicate that has no structural home in the wireframe.
- **Frame coherence:** Do the `[FRAME ELEMENT:]` annotations form a coherent arc through the page? Does the progression match the emotional journey defined in the Frame Semantics section of brand-context.md? **Flag:** Frame elements that feel disconnected or that contradict the defined frame roles.
- **Context depth calibration:** Are `[CONTEXT DEPTH: DEEP/BROAD]` annotations appropriate for each section's topic? Core service differentiators should be DEEP; overview/navigation sections should be BROAD. **Flag:** A section marked DEEP that lacks sufficient structural depth, or a BROAD section that overloads on detail.
- **Semantic role clarity:** Does every section's `[TOPICAL PURPOSE:]` annotation include the agent-action-beneficiary structure? **Flag:** Any topical purpose annotation that is generic or lacks a clear agent or beneficiary.
- **Entity annotations:** Are key entities per section annotated with `[ENTITIES:]` including type, attributes, and relationships? **Flag:** Sections that mention named people, organisations, or specific services without entity annotations.
- **Transition logic:** Are `[TRANSITION TO/FROM:]` annotations present between every adjacent section pair? Do they create a logical narrative flow? **Flag:** Missing transitions or transitions that feel forced or disconnected.
- **Thematic vocabulary:** Do section purpose descriptions use terminology from the Thematic Vocabulary by Topic table in brand-context.md? **Flag:** Sections that rely on generic terms when specific thematic vocabulary exists.
- **Query vocabulary in headings:** Do H2 headings incorporate search vocabulary from the Query Vocabulary Map (head terms or long-tail variations)? **Flag:** H2 headings that use only brand terminology without any search-aligned phrasing.
- **Semantic bridge compliance:** Are `[SEMANTIC BRIDGE →]` annotations placed at the cross-page bridge points defined in the Semantic Content Network? **Flag:** Missing bridge annotations where the network specifies a bridge for this page.

## OUTPUT FORMAT

```markdown
## Wireframe Review: [PAGE_NAME]

### Summary
[2-3 sentence assessment of quality, grounding, and variety]

### Issues Found
| # | Section | Issue Type | Description | Severity |
|---|---------|------------|-------------|----------|
| 1 | [section] | **Source Grounding** | [description] | High |
| 2 | [section] | **Allocation Violation** | [description] | High |
| 3 | [section] | **SEO Gap** | [description] | Medium |

### Edits Applied
| # | Section | Change | Rationale |
|---|---------|--------|-----------|
| 1 | [section] | [what was changed] | [why] |

### Allocation Summary (Verified)
- Differentiators Featured: [confirmed list]
- Primary Fear Agitated: [confirmed]
- Agitation Approach: [confirmed — e.g., "Positive contrast" / "Moderate narrative" / "Full editorial"]
- Agitation Depth: [confirmed — e.g., "LIGHT (40-80 words)" / "MODERATE (150-200 words)" / "DEEP (250-400 words)"]
- FAQ Themes Covered: [confirmed list]
- Interactive Elements Used: [confirmed list]
- Section Archetypes Used: [confirmed list]
```

## ACTIONS
1. Apply edits directly to `output/[filename].md`
2. Preserve all annotations and bracketed notation
3. Output the review markdown AND confirm the file has been updated
```

---

## Workflow

### Initial Setup (First Run Only)

If `progress.md` does not exist or has not been initialised (i.e., contains no wireframe phase tables), execute the full setup:

**EXECUTION REQUIREMENTS:**
- Extended thinking: OFF (for directory creation and progress.md generation)
- Then ON (for Brand Context Extraction)

**Steps:**

1. **Create required directories (run via Bash tool before anything else):**
   ```bash
   mkdir -p output cache
   touch progress.md
   touch cache/brand-context.md
   touch cache/global-allocation-registry.md
   ```
   Verify `output/` and `cache/` exist after running. Do NOT proceed until confirmed.

2. **Execute the full Source Reading protocol** (Steps 1–3 from Brand Context Extraction section). Read ALL files in `sitemap-cta-strategy/`, `positioning-and-messaging/`, and `source-docs/`.

3. **Execute Brand Context Extraction** (extended thinking ON). Synthesise all source material into `cache/brand-context.md` following the format defined in the Brand Context Extraction section. This is the highest-leverage task in the entire workflow — invest maximum reasoning effort.

4. **Initialise `cache/global-allocation-registry.md`** with the empty template defined in the Global Allocation Registry section.

5. **Read the sitemap strategy** to identify all pages, their tiers/phases, URLs, and filenames.

6. **Create `progress.md`** with the following structure:
   - Status key (`[ ]` Not started, `[~]` In progress, `[x]` Complete, `[R]` Needs revision)
   - Phases derived from the sitemap strategy tiers (Phase 1: Global Components, then one phase per tier/silo, ending with Content & Utility pages)
   - Each phase contains a table of pages with columns: #, Page/Component, URL (if applicable), File, Status
   - **Parallelisation annotations:** Within each phase, mark which pages are independent (can be batched in parallel) vs. dependent (must be sequential). Hub/pillar pages precede their sub-pages. Pages within the same silo that share no structural dependencies can be parallelised.
   - Summary table at the bottom with phase counts
   - All wireframe file paths must point to the `output/` directory (e.g., `output/homepage.md`)

7. **Present `progress.md` to the user** for review before beginning wireframe work.

---

### Iterative Wireframe Loop

When triggered (e.g., "Create the wireframes", "Start", or "Next"), execute this loop until all items in `progress.md` are complete.

#### Batch Processing Logic

```
phases = extract_phases(progress.md)

FOR each phase in phases:

    # Identify pending items in this phase
    pending = items with status [ ] in this phase

    IF phase is "Global Components":
        # Sequential — header informs footer informs everything
        FOR each item in pending (in order):
            create_wireframe_sequential(item)

    ELSE:
        # Identify hub/pillar pages and sub-pages
        hub_pages = [items marked as hub/pillar in pending]
        sub_pages = [items marked as sub-page in pending]

        # Step 1: Hub pages first (sequential — they inform sub-pages)
        FOR each hub in hub_pages:
            create_wireframe_sequential(hub)

        # Step 2: Sub-pages in parallel batches (2-3 at a time)
        batches = chunk(sub_pages, batch_size=3)
        FOR each batch in batches:
            create_wireframe_batch(batch)

    # Phase complete — all items should be [x]
```

#### Sequential Wireframe Creation (for dependent pages)

```python
def create_wireframe_sequential(item):
    # 1. Mark as in progress
    UPDATE progress.md: item status → [~]

    # 2. Prepare source doc priorities from brand-context.md
    primary_sources, secondary_sources = lookup_source_relevance(item.page, brand_context)

    # 3. Prepare allocation constraints from registry
    constraints = extract_allocation_constraints(global_allocation_registry)

    # 4. Launch wireframe subagent
    wireframe_task = Task(
        subagent_type="general-purpose",
        model="opus",
        description="Create wireframe for [item.page]",
        prompt=build_wireframe_subagent_prompt(item, primary_sources, secondary_sources, constraints)
    )
    wireframe_result = wireframe_task.output

    # 5. Launch review subagent
    review_task = Task(
        subagent_type="general-purpose",
        model="opus",
        description="Review wireframe for [item.page]",
        prompt=build_review_subagent_prompt(item, primary_sources)
    )
    review_result = review_task.output

    # 6. Present wireframe to user
    PRESENT output/[item.file] to user

    # 7. Update tracking
    UPDATE progress.md: item status → [x]
    UPDATE cache/global-allocation-registry.md with allocation summary from wireframe
```

#### Parallel Batch Wireframe Creation (for independent pages)

```python
def create_wireframe_batch(batch):
    # 1. Mark all as in progress
    FOR each item in batch:
        UPDATE progress.md: item status → [~]

    # 2. Launch wireframe subagents in parallel
    background_tasks = []
    FOR each item in batch:
        primary_sources, secondary_sources = lookup_source_relevance(item.page, brand_context)
        constraints = extract_allocation_constraints(global_allocation_registry)
        task = Task(
            subagent_type="general-purpose",
            model="opus",
            run_in_background=true,
            description="Create wireframe for [item.page]",
            prompt=build_wireframe_subagent_prompt(item, primary_sources, secondary_sources, constraints)
        )
        background_tasks.append(task)

    # 3. Wait for all to complete
    FOR each task in background_tasks:
        result = TaskOutput(task_id=task.id, block=true)

    # 4. Review each wireframe (can also be parallelised)
    review_tasks = []
    FOR each item in batch:
        primary_sources = lookup_primary_sources(item.page, brand_context)
        task = Task(
            subagent_type="general-purpose",
            model="opus",
            run_in_background=true,
            description="Review wireframe for [item.page]",
            prompt=build_review_subagent_prompt(item, primary_sources)
        )
        review_tasks.append(task)

    FOR each task in review_tasks:
        result = TaskOutput(task_id=task.id, block=true)

    # 5. Present wireframes to user
    FOR each item in batch:
        PRESENT output/[item.file] to user

    # 6. Update tracking (AFTER all in batch are reviewed)
    FOR each item in batch:
        UPDATE progress.md: item status → [x]
        UPDATE cache/global-allocation-registry.md with allocation summary
```

#### Workflow Rules

- **Phase order is strict.** Complete all items in Phase N before starting Phase N+1. Earlier phases (global components, hub pages) inform later ones.
- **Within a phase, respect dependencies.** Hub/pillar pages complete before their sub-pages. Sub-pages within the same silo can run in parallel.
- **Every wireframe subagent gets fresh context.** The subagent loads brand-context.md, the allocation registry, strategy docs, and prioritised source docs directly — not summaries from conversation history.
- **Review before present.** Every wireframe is reviewed by a review subagent before being presented to the user.
- **Update the allocation registry after each batch.** This ensures subsequent batches have accurate cross-page tracking.
- **If the user requests a revision** (`[R]` status), address the revision before continuing to the next pending item. Revision wireframes also use subagents for fresh context.
- **Always keep `progress.md` accurate.** It is the single source of truth for what has been done and what remains.
- **Always keep `cache/global-allocation-registry.md` current.** It is the single source of truth for cross-page variety.

---

## Execution Commands

### Full Workflow Execution
```
Execute the complete wireframe generation workflow:

1. Run Initial Setup (create directories, extract brand context, initialise registry, create progress.md)
2. Present progress.md for approval
3. Execute Iterative Wireframe Loop (all phases, all pages)
   - Update global allocation registry after each batch
   - Present each wireframe for user review

Update progress.md after EVERY wireframe.
Stop and report if any phase fails validation.
```

### Resume From Checkpoint
```
Resume the wireframe generation workflow from the last incomplete step.
Read progress.md to determine current state.
Read cache/global-allocation-registry.md for cross-page allocation state.
Read cache/brand-context.md for brand parameters.
Continue from the next pending item.
```

### Regenerate Single Wireframe
```
Regenerate the wireframe for [PAGE_NAME].
Use existing cache/brand-context.md and cache/global-allocation-registry.md.
Launch a fresh wireframe subagent followed by review subagent.
Replace the output file.
Update progress.md and allocation registry to reflect the regeneration.
```

---

## Error Handling

### Common Errors and Recovery

| Error | Cause | Recovery |
|-------|-------|----------|
| Missing source docs | Empty source-docs/ folder | Add brand reference documents |
| No sitemap strategy | Empty sitemap-cta-strategy/ folder | Add sitemap and CTA strategy docs |
| Missing brand context cache | cache/brand-context.md not created | Re-run Initial Setup |
| Allocation registry stale | Registry not updated after batch | Re-read completed wireframes and rebuild registry |
| Subagent source doc failure | Subagent couldn't read a source file | Verify file paths in brand-context.md source relevance table |
| Cross-page repetition detected | Same differentiator/fear/archetype overused | Check and update allocation registry, re-run affected wireframes |
| Revision requested | User flags [R] status | Re-run wireframe with subagent, incorporating user feedback |

### Error Logging
When an error occurs:
1. Update progress.md with error notation
2. Log the error with timestamp
3. Preserve partial work in output files
4. Do not proceed past the error until resolved

---

## Quality Checklist

Before marking the project as complete, verify:

### Per-Wireframe Quality
- [ ] H1 contains primary entity and target intent
- [ ] Heading hierarchy reads as coherent topical outline
- [ ] All sections annotated with scroll position, visual priority, and topical purpose
- [ ] Every section purpose grounded in specific source doc content (not generic)
- [ ] E-E-A-T signals present and sourced from actual brand proof points
- [ ] Internal links annotated per silo structure
- [ ] Local SEO signals present where relevant
- [ ] Schema annotations present (minimum: BreadcrumbList + page-appropriate)
- [ ] CTAs match CTA strategy exactly (text, placement, destination)
- [ ] No CTA anti-pattern violations
- [ ] Progressive disclosure sequence intact
- [ ] Problem agitation depth appropriate for page type — annotated with `[AGITATION APPROACH:]` and `[AGITATION DEPTH:]`
- [ ] At least one interactive/expandable element annotated
- [ ] Content depth targets present per section
- [ ] Review subagent completed and edits applied

#### Semantic SEO Quality (Per Wireframe)
- [ ] Core predicates for this page's topic are annotated with `[CORE PREDICATES ADDRESSED:]` and coverage check confirms all are structurally accounted for
- [ ] Frame arc is coherent — frame element annotations (`[FRAME ELEMENT:]`) progress logically through the page's scroll sequence
- [ ] Semantic role labels (`[TOPICAL PURPOSE:]`) include agent-action-beneficiary structure for every section
- [ ] Context depth annotations (`[CONTEXT DEPTH:]`) present on every section, calibrated per topic type (DEEP for core service, BROAD for overview)
- [ ] Thematic field annotations (`[THEMATIC FIELD:]`) present, with at least 3 terms from the assigned field per section
- [ ] Transition logic annotations (`[TRANSITION TO/FROM:]`) present between every adjacent section pair
- [ ] Key entities annotated per section (`[ENTITIES:]`) with type, attributes, and relationships
- [ ] H2 headings use search vocabulary from the Query Vocabulary Map (head terms or long-tail variations, not just brand terms)
- [ ] Semantic bridge annotations (`[SEMANTIC BRIDGE →]`) placed where the Semantic Content Network specifies bridge points for this page
- [ ] Query vocabulary map for this page reflected in heading and section purpose language

### Cross-Page Quality (from Global Allocation Registry)
- [ ] Each major differentiator featured prominently on ONE page only
- [ ] Each page uses a different primary audience fear for Problem Agitation
- [ ] FAQ themes not duplicated across pages (pages link to covering page instead)
- [ ] Section archetypes varied across pages (no identical patterns on consecutive pages)
- [ ] Interactive element types varied across pages
- [ ] Social proof distributed differently across pages
- [ ] Problem agitation depth scales correctly across page types — broad-intent pages (homepage) use LIGHT/positive contrast, trust/methodology pages use DEEP, service pages use MODERATE
- [ ] `[AGITATION APPROACH:]` and `[AGITATION DEPTH:]` annotations present and consistent on every wireframe
- [ ] No homepage or conversion gate has a dedicated deep agitation section

### Technical Quality
- [ ] All wireframe files in output/ directory
- [ ] progress.md accurate and complete
- [ ] cache/brand-context.md created and comprehensive
- [ ] cache/global-allocation-registry.md up to date
- [ ] All source doc references in wireframes traceable to actual files

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 4.1 | 2026-02-23 | **Context efficiency — split creation rules to separate file:** Extracted Wireframe Creation Rules (Format, Semantic SEO Structure, Visitor Engagement & Conversion Design, Problem Agitation Depth Scaling, CTA Rules, Navigation, Site Architecture) into `wireframe-RULES.md`. Subagents now read this file directly via Read tool instead of having rules embedded in their prompt. Main agent orchestrator file reduced by ~237 lines. Updated project structure, subagent prompt templates (wireframe + review), and version history. |
| 4.0 | 2026-02-23 | **MAJOR — Problem Agitation Depth Scaling (13 changes):** (1) Replaced uniform "Problem Agitation (10-30%)" instruction in Progressive Disclosure with tiered guidance referencing new framework subsection; added `[AGITATION APPROACH:]` annotation requirement. (2) Added new "Problem Agitation Depth Scaling" subsection after Progressive Disclosure — framework table mapping page types to agitation approach, depth target, and technique; Positive Contrast Technique definition; positioning tone modifier guidance. (3) Expanded Audience Fears extraction row to include positioning tone effect on agitation approach. (4) Added "Agitation Approach by Page Tier" table to Brand Context cache template. (5) Added "Agitation Approach" column to Per-Page Frame Focus table. (6) Added "Agitation Approach" and "Agitation Depth" columns to Audience Fear Coverage table in Global Allocation Registry; added two depth-appropriateness enforcement rules. (7) Added "Agitation Depth for This Page" block to wireframe subagent prompt with explicit page-type, approach, depth, and technique instructions. (8) Added agitation depth appropriateness checks to review subagent criteria with concrete flags. (9) Added agitation depth checklist item to Per-Wireframe Quality Checklist. (10) Added cross-page agitation scaling verification to Cross-Page Quality Checklist. (11) Added `<!-- Agitation Approach: -->` and `<!-- Agitation Depth: -->` to wireframe allocation summary. (12) Added Agitation Approach and Agitation Depth confirmation to review allocation summary. (13) Version history updated. |
| 3.0 | 2026-02-08 | **MAJOR — Semantic SEO integration (10 guidelines, 8 changes):** (1) Added Semantic SEO Intelligence extraction to Brand Context — core predicates by page topic, frame semantics, query vocabulary map, and thematic vocabulary by topic. Written to brand-context.md for downstream consumption. (2) Added 6 new wireframe annotation types — predicate coverage, frame element, context depth, semantic role labels, thematic field, and transition logic. (3) Added Semantic Content Network to brand-context.md — cross-page semantic bridges with bridge concepts and natural phrasing. Enhanced Internal Linking Architecture with semantic bridge annotations. (4) Added entity annotations per section with Person/Organisation/Service structures. (5) Updated wireframe subagent prompt with semantic SEO data loading, new SEMANTIC SEO REQUIREMENTS section, expanded annotation list, predicate coverage check, and 5 new DO instructions. (6) Added Semantic SEO Completeness review criterion (9 checks) to review subagent. (7) Added 10 semantic SEO items to per-wireframe quality checklist. (8) Version history updated. |
| 2.0 | 2026-02-08 | **MAJOR — Context optimisation and subagent architecture (8 changes):** (1) Added extended thinking guidance table — ON for brand context extraction, wireframe creation, and review; OFF for mechanical tasks. (2) Introduced subagent architecture — each wireframe created in fresh context via Task tool, eliminating context degradation across 15-25 wireframe projects. Main agent orchestrates only. (3) Brand Context Extraction now writes to cached artifact (`cache/brand-context.md`) — pre-synthesised brand parameters loaded by every subagent, ensuring consistent grounding regardless of conversation length. Includes per-page source doc relevance map. (4) Added Global Allocation Registry (`cache/global-allocation-registry.md`) — tracks differentiator prominence, section archetypes, audience fear coverage, FAQ themes, and interactive elements across pages. Prevents cross-page repetition. (5) Added per-page source doc prioritisation — primary sources (full read) and secondary sources (scan) per page, embedded in brand context and passed to subagents. Focuses attention on most relevant material. (6) Added wireframe review step via review subagent — checks source doc coverage, heading coherence, structural variety, SEO completeness, conversion architecture, and allocation compliance. (7) Added batch parallelisation — independent pages within a phase wireframed in parallel (2-3 at a time). Hub pages sequential, sub-pages parallelised. Allocation registry updated between batches. (8) Refactored Mandatory Read Protocol into subagent loading sequence — subagents load brand-context.md + prioritised source docs in fresh context, replacing "read everything as compensation for degradation." Added full subagent prompt templates for wireframe creation and review. |
| 1.0 | 2026-02-07 | Initial wireframe skill design. Brand-agnostic framework with mandatory read protocol, semantic SEO structure, progressive disclosure architecture, CTA/navigation rules derived from sitemap strategy. Sequential main-agent execution. |
