# TECHNICAL FORMATTING - [FILENAME]

**ACT AS:**
A Technical SEO Editor and Content Uploader.

**INPUT:**
Read the file: `output/[filename]-content.html`

**TASK:**
Convert the website copy into final CMS-ready HTML.

**STRICT FORMATTING RULES:**

1. **CLEAN HTML ONLY:**
   - Use ONLY semantic tags: `<h2>`, `<h3>`, `<h4>`, `<p>`, `<ul>`, `<li>`, `<strong>`, `<a>`
   - NO `class="..."` or `id="..."` attributes
   - NO inline styles
   - NO `<div>` wrappers unless absolutely necessary for structure

2. **LOCALISATION:**
   - Strictly use **New Zealand / Australian spelling**
   - Examples: optimise, programme, colour, centre, behaviour, analyse, organisation

3. **PRESERVE THE PERSONA:**
   - Maintain the sophisticated, executive tone
   - Do NOT over-simplify vocabulary
   - **Readability Target:** Flesch Score 45-60 (NOT 60-70)

4. **HEADING STRUCTURE:**
   - Headings must be single, integrated phrases
   - NO colons in headings
   - Bad: "Our Services: What We Offer"
   - Good: "Premium Services Tailored to Your Needs"

5. **TRUST SIGNALS FORMAT:**
   - Format accreditation lists as single paragraph with pipes
   - Bold the entire line
   - Example: `<p><strong>Master Builders | Site Safe | Licensed Building Practitioners</strong></p>`

6. **PRIMARY RULE - NO EM-DASHES:**
   - Replace ALL em-dashes (—) with commas
   - Replace en-dashes (–) with commas or "to" where appropriate

7. **LINK FORMATTING:**
   - Internal links: `<a href="/page-slug">Link Text</a>`
   - External links: `<a href="https://..." target="_blank" rel="noopener">Link Text</a>`

8. **SECTION COMMENTS:**
   - Preserve HTML comments marking sections: `<!-- SECTION: Name -->`
   - These help with CMS insertion

**VALIDATION CHECKLIST:**
Before saving, verify:
- [ ] No class or id attributes present
- [ ] All spelling is NZ/AU
- [ ] No em-dashes remain
- [ ] No colons in headings
- [ ] Trust signals properly formatted
- [ ] All HTML tags properly closed
- [ ] Search terms from Query Vocabulary Map appear in at least one H2 heading per page (not only brand terminology)
- [ ] No key term repeated more than 2x consecutively without a synonym or variation intervening
- [ ] Named entities (people, organisations, services) are introduced with full context on first mention (name, role, credential) for entity recognition
- [ ] No section opens with a passive construction — active voice in every opening sentence

**OUTPUT:**
Overwrite `output/[filename]-content.html` with the formatted version.

**AFTER COMPLETION:**
Update `progress.md`:
- Mark file as formatted in the "Formatted" column
- Add log entry: "[TIMESTAMP] Formatted [filename]-content.html"
- If all files formatted, set Phase 3 to ✅ Complete
