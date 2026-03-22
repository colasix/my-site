# Global Footer Wireframe
**WebXC Global Footer Component**
**Component Type:** Persistent Site Footer
**Purpose:** Deep indexing through flattened link architecture, trust signals, company credibility, and persistent conversion pathway
**Audience:** All user personas (every page)

---

## FOOTER STRUCTURE (Desktop)

### Section 1: Footer CTA Block
**Visual Priority:** HIGH | Contrast: Light background with primary CTA button
**Location:** Top of footer, full width above column sections

```
[FOOTER CTA SECTION - BACKGROUND: LIGHT]

[Heading: L2/Bold]
[Copy: Business problem articulation / Value statement]
[Purpose: Establish why conversation matters now]

[PRIMARY CTA BUTTON - "Let's Have a Conversation"]
[Link: /contact/]
[Styling: High-contrast, clickable, peer-to-peer tone]
```

**Annotation:** CTA maintains header persistence — reinforces conversion opportunity before user scrolls away. Mirrors header button for consistency.

---

### Section 2: Footer Navigation - Four Columns

#### Column 1: COMPANY
**Visual Priority:** MEDIUM
**Header:** [Column Header: Company]
**Links (Semantic Purpose: Deep indexing for brand authority)**

- [Link Text: About] → /about/ (trust signal, principal credibility)
- [Link Text: Blog] → /blog/ (authority content hub)
- [Link Text: Contact] → /contact/ (conversion pathway redundancy)
- [Link Text: Privacy Policy] → /privacy/ (legal/compliance trust signal)

**SCHEMA Annotation:** [SCHEMA: LocalBusiness - company links establish organizational identity]

---

#### Column 2: SERVICES
**Visual Priority:** MEDIUM-HIGH
**Header:** [Column Header: Services]
**Links (Semantic Purpose: Flat architecture for service page indexing + cross-silo discovery)**

- [Link Text: Positioning & Digital Authority] → /services/positioning-digital-authority/
  *[Annotation: Silo 2 — Solution A for authority-focused businesses]*

- [Link Text: Digital Foundation Build] → /services/digital-foundation-build/
  *[Annotation: Silo 2 — Solution B for infrastructure-first transformation]*

- [Link Text: Ongoing Authority & Visibility] → /services/ongoing-authority-visibility/
  *[Annotation: Silo 2 — Retention pathway for sustained competitive advantage]*

- [Link Text: Workshop & Self-Assessment] → /workshop/
  *[Annotation: Entry funnel — low-friction diagnostic for Burned Decision Makers and Strategically Unaware]*

**SCHEMA Annotation:** [SCHEMA: LocalBusiness/Organization - service offerings establish solution hierarchy]

---

#### Column 3: DISCOVERY & DIAGNOSTIC
**Visual Priority:** MEDIUM
**Header:** [Column Header: Diagnostic]
**Links (Semantic Purpose: Bridge between awareness and decision — strategic positioning)**

- [Link Text: Discovery & Strategic Review] → /discovery/
  *[Annotation: Premium diagnostic entry point; trust flow intermediary between problem awareness and solution selection]*

**SCHEMA Annotation:** [SCHEMA: LocalBusiness - diagnostic service establishes premium positioning and credibility]

---

### Section 3: Company Information Block
**Visual Priority:** MEDIUM-LOW
**Location:** Below navigation columns
**Purpose:** Trust signals, local business credibility, principal-led brand identity, alternative contact pathways

```
[COMPANY CONTACT SECTION]

[Heading: Company Name / Logo - Optional]
[Copy: Trust statement/tagline]
"[Serving NZ established businesses $2M–$50M]"

[Contact Block - Left Aligned]
[Icon] [Address Text]
[NZ Address - City, Postcode]
[Purpose: Establishes local business credibility]

[Icon] [Phone Number]
[Direct phone line]
[Purpose: Removes conversion friction]

[Icon] [Email]
[contact@webxc.co.nz] (or principal email)
[Purpose: Transparency + direct contact alternative]

[PRINCIPAL NAMES - Credibility Signal]
"Principal-led by [James] and [Andy]"
[Purpose: Reinforces peer relationship + principal involvement guarantee]

[SOCIAL LINKS - Optional]
[LinkedIn] [Twitter] [Other relevant platforms]
[Purpose: Extended authority verification]
```

**SCHEMA Annotation:** [SCHEMA: LocalBusiness - address, phone, email establish business entity verification; principal names reinforce leadership identity]

---

### Section 4: Copyright & Compliance
**Visual Priority:** LOW
**Location:** Bottom of footer, often in reduced text size

```
[MINIMAL FOOTER TEXT]

© [Year] WebXC. All rights reserved.

[Optional: Privacy Policy Link] | [Optional: Terms of Use Link]

[Annotation: Standard compliance footer — minimal visual weight to avoid CTA dilution]
```

---

## MOBILE RESPONSIVE BEHAVIOR

### Stack Order (Mobile View - Single Column)
**Breakpoint:** Below 768px
**Purpose:** Maintain readability and link accessibility on small screens

```
[Mobile Footer - Vertical Stack]

1. [FOOTER CTA SECTION - Full Width]
   [Button expands to full width or stacked]
   [Maintains high contrast and tap target size ≥48px]

2. [COMPANY COLUMN]
   [Header + 4 links, full width]
   [Collapsible or always expanded?]
   [Annotation: Consider accordion pattern to reduce scroll on mobile]

3. [SERVICES COLUMN]
   [Header + 4 links, full width]
   [Collapsible or always expanded?]
   [Annotation: Highest-priority column after CTA; may warrant always-expanded for discoverability]

4. [DISCOVERY COLUMN]
   [Header + 1 link, full width]
   [Single link column; consider merging with Services on mobile or keeping separate]

5. [COMPANY INFO BLOCK]
   [Address, phone, email stacked vertically]
   [Principal names and social links grouped]

6. [COPYRIGHT BLOCK]
   [Minimal text, centered]
```

**Tap Target Annotation:** All footer links must meet minimum 48px touch target on mobile. Adequate spacing between link rows (min 8-12px vertical spacing).

---

## VISUAL PRIORITY & DESIGN ANNOTATIONS

| Section | Priority | Visual Weight | Color Scheme | Interaction |
|---------|----------|---------------|--------------|-------------|
| **Footer CTA** | HIGH | Primary button contrast | High-contrast CTA color | Hover state; active focus state |
| **Services Column** | MEDIUM-HIGH | Bold header, standard links | Secondary color scheme | Underline on hover; color change on active |
| **Company Column** | MEDIUM | Standard weight | Tertiary/gray color scheme | Standard link behavior |
| **Discovery Column** | MEDIUM | Standard weight | Tertiary/gray color scheme | Standard link behavior |
| **Company Info** | MEDIUM-LOW | Lighter text | Muted color scheme | Optional: address as clickable map; phone as tel: link |
| **Copyright** | LOW | Minimal weight | Muted/gray | No interaction |

---

## INTERNAL LINKING LOGIC & SEO STRATEGY

### Silo Architecture Reflection in Footer
**Purpose:** Footer navigation reinforces site's three-silo structure for topical authority

**Silo 1 (Discovery & Diagnostic)**
- Links: Workshop, Discovery
- Purpose: Entry funnel and trust-building diagnostic
- Semantic Signal: Consolidates problem-identification pathway

**Silo 2 (Services & Solutions)**
- Links: All three service pages + Ongoing programme
- Purpose: Solution hierarchy; discovery-to-decision funnel
- Semantic Signal: Groups commercial offerings; cross-links establish service relationships

**Silo 3 (Content & Authority)**
- Links: Blog hub (indirect); individual posts accessible via blog entry
- Purpose: Thought leadership and organic search entry
- Semantic Signal: Establishes content authority category

**Bridge Page (Company Identity)**
- Links: About, Contact, Privacy
- Purpose: Trust building; conversion pathway; compliance
- Semantic Signal: Organizational credibility layer

### Linking Frequency Rules
- **Deep Indexing:** Every Tier 2 and Tier 3 page accessible in 1–2 clicks from footer
- **No Orphan Pages:** Every page linked from footer, header, or contextual body content
- **Silo Integrity:** Service pages link to other services (within silo); cross-silo links intentional
- **Authority Reinforcement:** Services link to related blog; blog links to services; discovery bridges both

**SCHEMA Annotation:** [SCHEMA: SiteNavigationElement - footer nav establishes site structure for search engines]

---

## SCHEMA MARKUP STRUCTURE

### Footer-Level Schema Annotations

```
[SCHEMA: LocalBusiness]
{
  "name": "WebXC",
  "address": "[Full NZ address]",
  "telephone": "[Phone number]",
  "email": "[Email address]",
  "founder": ["James", "Andy"],
  "foundingDate": "[Year established]",
  "areaServed": "NZ",
  "description": "Principal-led digital performance partner for established NZ businesses $2M–$50M",
  "knowsAbout": ["Digital Strategy", "Web Development", "Content Authority", "Digital Transformation"]
}

[SCHEMA: Organization]
{
  "name": "WebXC",
  "logo": "[Logo URL]",
  "url": "https://webxc.co.nz/",
  "contactPoint": {
    "contactType": "Sales",
    "telephone": "[Phone]",
    "email": "[Email]"
  },
  "sameAs": ["[LinkedIn URL]", "[Twitter URL]"]
}

[SCHEMA: SiteNavigationElement]
{
  "name": "Footer Navigation",
  "url": "https://webxc.co.nz/",
  "hasPartElements": [
    "About", "Services", "Discovery", "Blog", "Contact"
  ]
}
```

**Annotation:** LocalBusiness schema establishes local trust signals and service categories. SiteNavigationElement helps search engines understand site structure and topic clustering.

---

## TRUST SIGNALS & CREDIBILITY REINFORCEMENT

### Company Information Block - Trust Elements

**Element 1: Physical Address**
- Purpose: Establishes local business credibility (NZ-based)
- Trust Signal: Physical presence = real business, not remote-only
- SEO Value: Local search relevance; LocalBusiness schema integration

**Element 2: Phone Number**
- Purpose: Removes conversion friction; direct contact alternative
- Trust Signal: Accessible human contact; not hiding behind web form only
- Annotation: Consider making clickable (tel: link) on mobile

**Element 3: Email Address**
- Purpose: Alternative contact pathway for non-urgent inquiries
- Trust Signal: Multiple ways to reach decision-makers
- Annotation: Use principal email or company email; be transparent about who responds

**Element 4: Principal Names (James & Andy)**
- Purpose: Reinforces principal-led, peer-to-peer positioning
- Trust Signal: Faces + names humanize brand; removes "anonymous agency" perception
- Annotation: Consider adding photos/links to principal bios on About page for full credibility

**Element 5: Trust Statement**
- Suggested Copy: "Serving NZ established businesses $2M–$50M"
- Purpose: Targets ideal customer profile; establishes scale credibility
- Trust Signal: Specificity = expertise; not trying to serve everyone

---

## CONVERSION PATHWAY ARCHITECTURE

### Footer CTA → Contact Form Flow
1. User clicks "Let's Have a Conversation" in footer
2. Navigates to /contact/ page
3. Fills form with situation context
4. Form submission triggers email + possible calendar booking
5. First touchpoint conversation scheduled

**Annotation:** Footer CTA serves as final conversion opportunity before user leaves page. Consistent placement across all pages maximizes visibility.

### Alternative Conversion Pathways (Footer Links)
- **Discovery → Strategic Review:** For qualified leads exploring paid diagnostic
- **Workshop → Self-Assessment:** For prospects needing low-friction entry
- **Services Pages → Decision Support:** For prospects comparing options
- **About → Trust Building:** For skeptical/burned decision-makers
- **Blog → Authority Validation:** For unaware leaders researching market changes

**Annotation:** Footer navigation creates multiple conversion pathways based on user intent and awareness level.

---

## ACCESSIBILITY & USABILITY STANDARDS

### Keyboard Navigation
- All footer links keyboard-accessible via Tab order
- CTA button receives focus indicator (visible outline or color change)
- Logical tab order: CTA → Company → Services → Discovery → Contact Info → Copyright

### Color Contrast
- All link text must meet WCAG AA standard (4.5:1 contrast minimum)
- CTA button must have sufficient contrast for visibility against footer background
- Text in company info block must be readable against background

### Link Underlines
- Consider underlines on all footer links for accessibility (especially important for colorblind users)
- Annotation: Default browser underlines acceptable; custom styling must maintain clear link identification

### Touch Targets (Mobile)
- Minimum 48px × 48px tap target for all footer links
- Adequate spacing (8-12px) between touch targets to prevent accidental clicks
- CTA button expands to full width on mobile for easy tapping

---

## MOBILE-SPECIFIC CONSIDERATIONS

### Accordion Collapse (Optional Pattern)
**Use Case:** If footer becomes too long on mobile, consider accordion pattern for columns

```
[Mobile Footer - With Accordion]

[CTA Section - Always Visible]

[Company ▼] (Collapsed by default; tap to expand)
  → About
  → Blog
  → Contact
  → Privacy

[Services ▼] (Expanded by default; tap to collapse)
  → Positioning & Digital Authority
  → Digital Foundation Build
  → Ongoing Authority & Visibility
  → Workshop & Self-Assessment

[Discovery ▼] (Expanded by default)
  → Discovery & Strategic Review

[Contact Info - Always Visible]
[Copyright - Always Visible]
```

**Annotation:** Consider user intent: Services column expanded by default since it's highest-priority conversion funnel. Test with users to validate.

### Sticky vs. Static
- **Recommended:** Static footer (scrolls with page)
- **Rationale:** Persistent CTA already in header; sticky footer adds visual noise
- **Exception:** Consider sticky CTA only if header CTA hidden on scroll (less recommended for peer-led brand)

---

## PERFORMANCE & TECHNICAL NOTES

### Link Attributes
- Use semantic HTML: `<nav>` wrapper for footer navigation
- Link text must be descriptive (avoid "click here" or generic labels)
- Internal links: Use relative paths (/about/) or absolute URLs (https://webxc.co.nz/about/)
- External links (social): Use `rel="noopener noreferrer"` if opening new tab

### Load Performance
- Footer not lazy-loaded (always in page)
- Minimize CSS/JS dependencies for footer
- SVG icons preferred over image files (scalable, faster)

### SEO Best Practices
- Footer links receive 60–70% of link equity from header links (typical)
- All important pages should be accessible within 2 clicks from footer
- Footer contributes to internal link structure for topical authority
- LocalBusiness schema markup aids local search visibility

---

## IMPLEMENTATION CHECKLIST

- [ ] CTA button matches header button styling for consistency
- [ ] All internal links verified (no 404s)
- [ ] Footer navigation reflects three silos + company identity
- [ ] Company info section includes address, phone, email, principal names
- [ ] Mobile stacking order tested (responsive at 768px breakpoint)
- [ ] Keyboard navigation tested (Tab order logical)
- [ ] Color contrast verified against WCAG AA standards
- [ ] Touch targets minimum 48px × 48px on mobile
- [ ] Schema markup (LocalBusiness, Organization, SiteNavigationElement) implemented
- [ ] Social media links included (if applicable)
- [ ] Privacy/legal links present (if required by jurisdiction)
- [ ] Link text descriptive and accessible (no "click here")
- [ ] Footer CTA tested on all device sizes

---

## SUMMARY

The WebXC global footer serves four critical functions:

1. **Conversion Pathway:** "Let's Have a Conversation" CTA provides final opportunity to move visitor toward contact
2. **Deep Indexing:** Flattened link architecture makes all service pages, diagnostic tools, and trust-building content accessible in 1–2 clicks
3. **Topical Authority:** Footer structure reinforces site's three-silo model (Discovery, Services, Content) for semantic organization
4. **Trust & Credibility:** Company info block, principal names, and LocalBusiness schema establish local business authority and peer-led positioning

Footer navigation is persistent across all pages and reinforces WebXC's position as a principal-led partner solving three distinct business challenges through discovery, solution selection, and ongoing authority maintenance.
