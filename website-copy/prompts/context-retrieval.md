# Stage A: Deep Context Retrieval — Prompt Template & Context File Format

## Execution Prompt (Per Wireframe — run by coordinator before section drafting)

### CONTEXT DEEP DIVE - [WIREFRAME_FILE]

**ACT AS:**
A Lead Content Researcher and Page Architect.

**INPUT:**
1. Read the target wireframe: `wireframes/[WIREFRAME_FILE]`
2. Read the global stats registry: `cache/global-stats-registry.md`
3. List all available files in: `source-docs/`

**TASK:**
You must create a "Factual Brief" for this specific page by reviewing full source documents.

1. **Map Topics:** Look at the headings in the wireframe. What specific information is needed? (e.g., specific service specs, team bios, pricing details, technical capabilities).
2. **Deep Read:** Read the **FULL TEXT** of ALL files in `source-docs/`. Do not pre-filter — every source doc may contain relevant details.
3. **Extract:** Pull out specific facts, figures, names, and technical details relevant to this page.
4. **Cross-Page Check:** Consult `cache/global-stats-registry.md`. Any stat already "Featured Prominently" on another page should NOT be featured prominently on this page — assign it as a brief reference only, or omit it in favour of fresh proof points.
5. **Stats Budget:** List all stats/claims and assign each to ONE section only, respecting the global registry.
6. **Section Narrative Plan:** For each section, define its narrative role, conflict opening, resolution, and the key NEW evidence it introduces.
7. **Source File Priorities:** For each section, identify which source docs are primary (must read in full) and which are secondary (scan for extras).
8. **Page Voice Note:** Write a brief tonal calibration note for this specific page type.

**OUTPUT:**
Create a new file: `cache/context-[filename].md`.

---

## Context File Format

The context file saved to `cache/context-[filename].md` must use the following structure:

```markdown
# PAGE CONTEXT: [WIREFRAME_FILE]

## Page Voice Note
[Brief tonal calibration for this specific page. Consider: What is this page's role
in the visitor journey? What energy level is appropriate? How much detail vs. impact?]

Examples:
- HOMEPAGE: "This is the first impression. Voice should be at maximum authority and
  minimum detail. Lead with the boldest positioning claims. Every sentence must earn
  its place. Visitors will spend <10 seconds deciding whether to scroll."
- ABOUT: "This is the credibility deep-dive for engaged prospects. Voice can be warmer,
  more narrative. This is where founder stories and team depth land. Visitors here are
  already interested — reward their attention with specifics."
- SERVICE PAGE: "This is a decision-support page. Balance authority with practical detail.
  Visitors are comparing options. Lead with differentiation, follow with proof, close
  with confidence."

## Relevant Source Files
- [List all files read, e.g., In-House QS.md, Co-founder Bios.md]

## Critical Facts & Details
- [Specific Fact 1: e.g., "20-year master pricing template"]
- [Specific Fact 2: e.g., "Honours-qualified Interior Architect co-founder"]
- [Specific Fact 3: e.g., "600-800 completed projects"]

## Direct Quotes/Messaging to Use
- [Quote 1]
- [Quote 2]

## Stats Budget (Each Used ONCE)
| Stat/Claim | Assigned Section | Usage Type |
|------------|-----------------|------------|
| 30 years experience | Hero (trust bar only) | Prominent |
| 600-800 projects | Core Conflict | Prominent |
| 20-year pricing template | Core Conflict | Prominent |
| In-house QS | Trust Foundation | Brief reference (featured on Homepage) |

Note: Stats marked "Brief reference" are already featured prominently on another page
(see global-stats-registry.md). Use them in passing (1-2 words, no explanation) only.

## Section Narrative Plan
| Section | Narrative Role | Opens With (Conflict) | Resolves With | Key New Evidence | Frame Element | Transition From Previous | Transition To Next |
|---------|---------------|----------------------|---------------|-----------------|---------------|-------------------------|-------------------|
| Hero | Hook + authority signal | Industry pain (generic builders) | [Business] difference in one line | Trust bar stats only | [from wireframe annotation] | [n/a — first section] | [connection to next section] |
| Core Conflict | Deep villain agitation | Specific horror stories (budget blowouts) | Back-costing methodology | 20-year pricing template, 600-800 projects | [from wireframe annotation] | [from wireframe transition] | [from wireframe transition] |
| Service Pillars | Proof of breadth | "Most builders specialise in one thing" | Full-service capability | Specific service specs from source docs | [from wireframe annotation] | [from wireframe transition] | [from wireframe transition] |
| Trust Foundation | Social proof stacking | "How do you know they're qualified?" | Credentials + team depth | Specific qualifications, team details | [from wireframe annotation] | [from wireframe transition] | [from wireframe transition] |
| [Continue for all sections...] | | | | | | | |

## Source File Relevance by Section
| Section | Primary Sources (MUST read in full) | Secondary Sources (scan for extras) |
|---------|-------------------------------------|--------------------------------------|
| Hero | Positioning.md, Key Messaging.md | All others (brief scan) |
| Core Conflict | In-House QS.md, Key Messaging.md | Co-founder Bios.md |
| Service Pillars | [relevant service docs] | [others] |
| Trust Foundation | Co-founder Bios.md, The In-House Team.md | In-House QS.md |
| [Continue for all sections...] | | |

## Predicate Coverage (from wireframe)
| Core Predicate | Assigned Section(s) | Source Doc Grounding |
|---------------|--------------------|--------------------|
| [predicate from wireframe's CORE PREDICATES ADDRESSED annotations] | [section(s) that express this predicate] | [source doc that proves it] |
| ... | ... | ... |

## Query Vocabulary Alignment
| Search Term | Brand Term | Usage Rule |
|------------|-----------|-----------|
| [head term or long-tail from wireframe's query vocabulary] | [brand's term for same concept] | [e.g., "Use search term in H2, brand term in body copy"] |
| ... | ... | ... |

## Thematic Vocabulary by Section
| Section | Thematic Field | Terms to Use |
|---------|---------------|-------------|
| [section name] | [field name from wireframe's THEMATIC FIELD annotation] | [3-4 terms from the thematic field to weave into this section's copy] |
| ... | ... | ... |

Lexical variety rule: No single thematic term should appear more than twice per section.
Use synonyms, related concepts, and natural variations.

## Context Depth by Section
| Section | Depth Level | Implication for Copy |
|---------|-----------|---------------------|
| [section name] | [DEEP or BROAD from wireframe's CONTEXT DEPTH annotation] | [e.g., "Comprehensive treatment — multiple subtopics, specific evidence, 300-500 words" or "Concise overview — key point + 1-2 supports, 100-200 words"] |
| ... | ... | ... |

## Entity Annotations by Section
| Section | Entity | Type | Key Attributes | Relationship |
|---------|--------|------|---------------|-------------|
| [section name] | [entity name] | Person / Organisation / Service | [role, credentials, or differentiators] | [relationship to page topic] |
| ... | ... | ... | ... | ... |

Introduce each entity with full context on first mention (name, role, credential).

## Semantic Bridge Placements
| Section | Target Page | Bridge Concept | Natural Phrasing |
|---------|------------|---------------|-----------------|
| [section where bridge should appear] | [target page] | [shared concept] | [suggested internal link text] |
| ... | ... | ... | ... |

Place each bridge as a contextual internal link using the natural phrasing specified.
```

---

## After Completion

Update progress.md:
- Mark "Context Cached" as ✅ Yes for this wireframe
- Add log entry: "Cached specific context for [WIREFRAME_FILE] from [X] source docs."
