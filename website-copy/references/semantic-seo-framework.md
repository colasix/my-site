# Semantic SEO Framework

This framework ensures SEO is strategic, not scattered. Every page must have an SEO Distribution Plan in its context file.

## Keyword Density Limits

| Term Type | Max Per Page | Placement Rules |
|-----------|--------------|-----------------|
| Primary Keywords | 2 mentions | Once in H2 headline (if natural), once in body copy |
| Semantic Entities | 3-5 mentions | Distribute across relevant sections, cluster related entities |
| Location Terms | 5-8 mentions | Concentrate in SEO Footer (3-5), sprinkle in service sections (1-2) |

**Anti-Stuffing Rule:** If a keyword appears more than twice, remove redundant instances. Natural readability always trumps keyword density.

## Entity Clustering Strategy

Group semantically related terms in the same section to signal topical relevance:

**Good Clustering Example:**
```
Section: House Extensions
- "villa extensions" + "Grey Lynn" + "heritage zone" + "character homes"
```

**Bad (Scattered) Example:**
```
Section 1: "villa extensions"
Section 3: "Grey Lynn"
Section 5: "heritage zone"
Section 7: "character homes"
```

**Clustering Rules:**
1. **Service + Location:** Pair service types with relevant suburbs (e.g., "volcanic rock excavation" + "Epsom")
2. **Project Type + Feature:** Pair project types with key features (e.g., "second storey additions" + "structural engineering")
3. **Problem + Solution:** Pair pain points with branded solutions (e.g., "budget blowouts" + "fixed price contracts")

## Semantic Depth Strategy

Each section's copy depth should match its `[CONTEXT DEPTH]` annotation from the wireframe:

| Depth Level | Copy Characteristics | Typical Use |
|------------|---------------------|-------------|
| **DEEP** | Comprehensive treatment — multiple subtopics explored, specific evidence cited, technical details included, 300-500+ words. Uses full thematic vocabulary field. | Core service differentiators, primary value propositions, flagship proof sections |
| **BROAD** | Concise overview — key point stated clearly, 1-2 supporting details, 100-200 words. Uses 2-3 thematic terms only. | Context-setting sections, navigational sections, overview/intro sections, CTAs |

**Rules:**
1. Never write DEEP copy for a BROAD-annotated section (overloads the reader at a navigational moment)
2. Never write BROAD copy for a DEEP-annotated section (undermines topical authority at the moment it matters most)
3. DEEP sections earn the right to use technical terminology; BROAD sections stay accessible
4. Depth calibration is set by the wireframe — do not override it based on available source material

## Thematic Vocabulary Strategy

Each section has an assigned thematic field from the wireframe's `[THEMATIC FIELD:]` annotation. Execute these rules:

1. **Use 3-4 terms from the assigned thematic field per section** — this signals topical depth to search engines without keyword stuffing
2. **Vary the terms** — do not repeat the same thematic term more than twice in a section. Use synonyms and related concepts from the field.
3. **Front-load thematic terms** — place the most important thematic terms in the first paragraph of each section, where they carry the most SEO weight
4. **Cross-reference with Query Vocabulary** — where a thematic term overlaps with a search term from the Query Vocabulary Alignment table, prefer the search-aligned form in headings and first mentions

## Predicate Expression Strategy

Each page has core predicates from the wireframe's `[CORE PREDICATES ADDRESSED:]` annotations. Execute these rules:

1. **Express each predicate naturally in prose** — do not list predicates; weave them into narrative. A predicate like "eliminates budget uncertainty" becomes part of a sentence about the brand's approach, not a bullet point.
2. **One section, one primary predicate** — each section should have one predicate it primarily serves. Secondary predicates can be touched on, but one must be dominant.
3. **Ground predicates in evidence** — every predicate expression must be immediately supported by a specific fact, figure, or proof point from source docs. Unsupported predicates are empty claims.
4. **Track coverage** — use the `<!-- Predicates Expressed: [list] -->` output comment to confirm all predicates are accounted for across the page.

## Section Comment Format (For Output Files)

Every section in output HTML must include an SEO tracking comment:

```html
<!-- SECTION: [Section Name] -->
<!-- Stats Used: [list] | Villain Framing: YES/NO/LIGHT -->
<!-- SEO Target: "[primary keyword]" (primary), "[entity 1]", "[entity 2]" (entities) | Locations: [list] -->
```

This enables auditing of SEO distribution across the page.
