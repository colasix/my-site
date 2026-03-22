# Website Copy Generation Workflow

An agentic workflow for generating professional website copy using a 4-step chain of prompts. Processes wireframe files section-by-section with live progress tracking.

## Quick Start

### 1. Prepare Your Source Documents

Add your brand documents to `source-docs/`:
- `positioning.md` - Brand positioning, target audience, competitors
- `messaging.md` - Key messages, value propositions, taglines
- `sitemap.md` - Site structure (optional)
- Any other relevant brand guidelines

See `source-docs/_example-positioning.md` for the expected format.

### 2. Prepare Your Wireframes

Add wireframe files to `wireframes/`:
- One `.md` file per page (e.g., `homepage.md`, `about.md`, `services.md`)
- Use `## Section Name` headings to define sections
- Include content requirements for each section

See `wireframes/_example-homepage.md` for the expected format.

### 3. Run the Workflow

In Claude Code, use this prompt:

```
Read the SKILL.md file in this project and execute the complete website copy generation workflow. Update progress.md after every step.
```

### 4. Monitor Progress

The `progress.md` file updates in real-time showing:
- Current phase and status
- Wireframe completion progress
- Section-by-section queue
- Activity log

### 5. Collect Output

Generated content appears in `output/`:
- `homepage-content.html`
- `about-content.html`
- etc.

Files are CMS-ready HTML with NZ/AU spelling.

---

## Project Structure

```
website-copy-workflow/
├── SKILL.md              # Main workflow definition (READ THIS)
├── README.md             # This file
├── progress.md           # Live progress tracking
├── source-docs/          # Your brand documents
│   └── _example-positioning.md
├── wireframes/           # Your wireframe files
│   └── _example-homepage.md
├── output/               # Generated content (auto-created)
└── cache/                # Workflow cache (auto-created)
    ├── brand-dna.json
    └── writer-prompt.md
```

---

## Workflow Phases

| Phase | Purpose | Input | Output |
|-------|---------|-------|--------|
| 0. Init | Setup & validation | - | Directories, progress.md |
| 1. Brand DNA | Extract brand identity | source-docs/* | cache/brand-dna.json |
| 2. Writer Prompt | Generate custom prompt | brand-dna.json | cache/writer-prompt.md |
| 3A. Drafting | Write copy section-by-section | wireframes/* | output/*-content.html |
| 3B. Page Review | Cohesion & consistency check | output/*-content.html | output/* (refined) |
| 4. Formatting | Clean HTML, NZ spelling | output/* | output/* (formatted) |

---

## Commands

### Full Workflow
```
Execute the complete website copy generation workflow from SKILL.md.
```

### Resume from Checkpoint
```
Read progress.md and resume the workflow from the last incomplete step.
```

### Regenerate a Section
```
Regenerate the [Hero Section] in [homepage.md] using the cached writer prompt.
```

### Re-run Single Phase
```
Re-run Phase [2] of the website copy generation workflow.
```

---

## Customisation

### Adjust Tone
Edit the Brand DNA in `cache/brand-dna.json` after Phase 1, then re-run Phases 2-4.

### Skip Formatting
If you prefer draft output, stop after Phase 3.

### Add Pages
Simply add new `.md` files to `wireframes/` and re-run Phase 3.

---

## Output Format

Generated HTML follows these rules:
- Semantic tags only (`<h2>`, `<p>`, `<ul>`, etc.)
- No classes or IDs
- NZ/AU spelling (optimise, colour, programme)
- No em-dashes
- Trust signals formatted with pipes: `<p><strong>Item 1 | Item 2</strong></p>`
- Section comments preserved: `<!-- SECTION: Hero -->`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "No source docs found" | Add at least one .md file to source-docs/ |
| "No wireframes found" | Add at least one .md file to wireframes/ |
| Inconsistent tone | Check cache/brand-dna.json tone_attributes |
| US spelling in output | Re-run Phase 4 formatting |
| Missing sections | Check wireframe uses `## Heading` format |

---

## Tips for Best Results

1. **Be specific in wireframes** - The more detail you provide about each section's purpose and requirements, the better the output.

2. **Define your villain clearly** - The "Problem First" narrative needs a clear enemy to fight against.

3. **Include real trust signals** - Certifications, awards, and metrics add credibility.

4. **Review Phase 1 output** - The Brand DNA shapes everything. Verify it's accurate before proceeding.

5. **Iterate on sections** - Use the regenerate command to refine individual sections without restarting.

6. **Trust the Page Review** - Stage 3B catches cross-section issues like redundancy, tone drift, and CTA progression problems. Review its edit log to understand the refinements.
