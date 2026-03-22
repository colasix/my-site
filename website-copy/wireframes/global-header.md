# GLOBAL HEADER WIREFRAME
## WebXC Principal-Led Digital Performance Partner

---

## Component Overview

The global header is a persistent navigation element present on all pages. It serves three functions:
1. **Brand Identity**: Logo and tagline reinforce principal-led positioning
2. **Primary Navigation**: Structured to support the four content silos (Discovery, Services, Content, Trust Building)
3. **Conversion Architecture**: Primary CTA button maintains consistent visibility for peer-level conversation invitations

**Design Principle**: Clean, professional, uncluttered. Reflects confidence and principal-level positioning. No discount language, urgency tactics, or agency-like patterns.

---

## Header Layout Structure

### Desktop View (Full-Width Horizontal Layout)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                       │
│  [LOGO] WebXC                   [NAV ITEMS]                    [PRIMARY CTA BUTTON] │
│  "Principal-led digital          About                         ┌──────────────────┐ │
│   performance partner"           Services ▼                     │ Let's Have a      │ │
│                                  Discovery                      │ Conversation      │ │
│                                  Blog                           └──────────────────┘ │
│                                  Contact                                             │
│                                                                                       │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### Header Composition by Section

#### Left Section: Logo & Brand Identity
- **[LOGO]** - WebXC logo (monochromatic, professional mark)
  - Link Behavior: Links to homepage (/)
  - Size: Responsive (60-80px height on desktop, 48-56px on tablet, 40-44px on mobile)
  - Spacing: 24px left padding on desktop, 16px on tablet/mobile

- **[TAGLINE]** (Optional — staggered below logo or inline)
  - Display Text: "Principal-led digital performance partner"
  - Font Size: 12-14px (supplementary weight)
  - Link Behavior: None (informational only)
  - Visibility: Desktop only (remove on screens < 768px to preserve space)

---

#### Center Section: Primary Navigation Menu
**Navigation Structure**

1. **[NAV ITEM: About]**
   - Link: /about/
   - Label: "About"
   - Purpose: Trust-building, credibility establishment
   - Subtext (on hover, optional): "Meet the principals"

2. **[NAV ITEM: Services]** with [DROPDOWN]
   - Link: /services/ (if hub exists) or first service item
   - Label: "Services"
   - Indicator: Down arrow (▼) to signal dropdown availability
   - Purpose: Navigate to service offerings or access service menu
   - Dropdown Behavior: Reveals on hover (desktop) or click (mobile)

3. **[DROPDOWN: Services Menu]** (Expands below Services nav item)
   - **Sub-Item 1**: Positioning & Digital Authority
     - Link: /services/positioning-digital-authority/
     - Subtext (optional): "Authority & Market Position"

   - **Sub-Item 2**: Digital Foundation Build
     - Link: /services/digital-foundation-build/
     - Subtext (optional): "Infrastructure & Platform"

   - **Sub-Item 3**: Ongoing Authority & Visibility
     - Link: /services/ongoing-authority-visibility/
     - Subtext (optional): "Sustained Strategic Partnership"

   - **Divider Line** (visual separator)

   - **Sub-Item 4**: Self-Assessment Workshop
     - Link: /workshop/
     - Subtext: "Start here if you're not sure"
     - Styling: Secondary visual weight (differentiate from service options)

4. **[NAV ITEM: Discovery]**
   - Link: /discovery/
   - Label: "Discovery"
   - Purpose: Direct path to paid diagnostic offering
   - Subtext (on hover, optional): "Strategic review & clarity"

5. **[NAV ITEM: Blog]**
   - Link: /blog/
   - Label: "Blog"
   - Purpose: Content hub and thought leadership entry point
   - Subtext (on hover, optional): "Authority insights"

6. **[NAV ITEM: Contact]** (Optional — may be replaced by CTA button alone)
   - Link: /contact/
   - Label: "Contact"
   - Purpose: Direct navigation to contact/conversation form
   - Usage: Include if mobile navigation requires explicit contact link; can be omitted on desktop (CTA button is primary)

**Navigation Styling**
- Font: Same as body (professional serif or sans-serif aligned to brand)
- Font Size: 14-16px on desktop, 13-15px on tablet, responsive on mobile
- Link Color: Primary brand color (confident, not soft)
- Active State: Current page nav item receives underline or color fill to indicate location
- Hover State: Subtle color shift or underline (no dramatic animation)
- Spacing: 16-24px gap between nav items on desktop, 8-12px on tablet
- Alignment: Left-aligned after logo, evenly distributed

---

#### Right Section: Primary CTA Button
**[PRIMARY CTA BUTTON: "Let's Have a Conversation"]**

- **Label**: "Let's Have a Conversation"
- **Link Behavior**: Links to /contact/ (persistent on all pages, no page-specific variations)
- **Styling**:
  - Button Shape: Rounded rectangle (4-8px border radius)
  - Font Color: White or high-contrast text
  - Background Color: Primary brand color (confident, distinct from header background)
  - Font Size: 14-16px on desktop, responsive on mobile
  - Padding: 12-14px horizontal, 10-12px vertical (comfortable clickable target)
  - Font Weight: 600-700 (bold, confident)
  - Text Transform: Sentence case (not all caps; reflects conversational tone)

- **Button Behavior**:
  - Hover State: Subtle darkening, slight shadow lift, or opacity shift (not dramatic)
  - Active State: Slight inward shadow or border highlight
  - Focus State (Accessibility): Clear focus ring for keyboard navigation
  - No exclamation mark at end (punctuation consistency with brand voice)

- **Persistence**:
  - Present on every page (no exceptions)
  - Always visible; never scrolls off screen on desktop
  - On mobile: Sticky or repositioned to top right of hamburger menu
  - No loading animation; instant link behavior

- **Placement**:
  - Desktop: Top-right corner, 24px from right edge, 16-20px from top
  - Tablet: Top-right corner, 16px from right edge, 12-16px from top
  - Mobile: Integrated into mobile navigation (see Mobile Responsive section)

---

## Responsive Behavior & Mobile Implementation

### Tablet Layout (768px - 1024px)

```
┌────────────────────────────────────────────────────┐
│ [LOGO]  About | Services ▼ | Discovery | Blog     │
│ WebXC   Contact        [PRIMARY CTA BUTTON]        │
└────────────────────────────────────────────────────┘
```

- Logo size reduced slightly
- Tagline hidden to preserve horizontal space
- Nav items compressed but visible
- CTA button maintains full visibility and right-alignment

### Mobile Layout (< 768px) — Hamburger Navigation Pattern

```
┌──────────────────────────────────────┐
│ [LOGO]              [HAMBURGER MENU] │
│ WebXC               ☰                │
└──────────────────────────────────────┘

[On menu expansion]

┌──────────────────────────────────────┐
│ [CLOSE BUTTON: ✕]                    │
│                                      │
│ [NAV ITEM] About                     │
│ [NAV ITEM] Services                  │
│   ├─ Positioning & Digital Authority │
│   ├─ Digital Foundation Build        │
│   ├─ Ongoing Authority & Visibility  │
│   └─ Self-Assessment Workshop        │
│ [NAV ITEM] Discovery                 │
│ [NAV ITEM] Blog                      │
│ [NAV ITEM] Contact                   │
│                                      │
│ ┌────────────────────────────────┐  │
│ │ Let's Have a Conversation      │  │
│ └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

**Mobile Navigation Details**:
- **Hamburger Icon**: Three horizontal lines (☰), top-right, 20-24px size
- **Mobile Menu Trigger**: Appears at 767px breakpoint
- **Menu Expansion**: Full-screen overlay or slide-in drawer (no fixed height limit)
- **Close Button**: X icon in top-right of expanded menu
- **Backdrop**: Optional semi-transparent background (does not interfere with readability)
- **Services Submenu**: Expandable/collapsible in mobile menu with nested arrow indicator
- **CTA Button Position**: Placed prominently at bottom of mobile menu (sticky or visible before scroll)
- **CTA Button Width**: Full-width within mobile menu for easy thumb tap
- **Contact Link**: Included in mobile nav menu (not replaced by CTA button alone)

**Mobile Spacing**:
- Menu items: 16px padding vertical, 20px padding horizontal
- Submenu items: Indented 16px, smaller font size (13-14px)
- CTA button: 20px horizontal margin, full-width minus margins

---

## Sticky/Fixed Header Behavior

### Desktop Sticky Behavior
- **Initial State**: Header stays fixed at top of viewport (position: sticky or fixed with appropriate z-index)
- **Scroll Behavior**: Remains visible as user scrolls down page
- **Scroll Direction**: No collapse/hide on scroll (header always visible; maintains trust presence)
- **Z-Index**: Higher than all page content (typically 900-1000)
- **Shadow/Border**: Optional subtle bottom border or shadow (2-4px, low opacity) to visually separate from page content

### Tablet Sticky Behavior
- Same as desktop (fixed at top, always visible)
- Adjusted spacing for tablet width

### Mobile Sticky Behavior
- **Logo & Hamburger**: Always fixed at top (sticky header)
- **Menu Expansion**: Full-screen overlay does not scroll independently; menu overlay itself scrolls if content exceeds viewport
- **CTA Button in Menu**: Positioned before scroll requirement (placed in menu before long lists if possible)

---

## Navigation Linking Strategy

### Primary Navigation Links (Trust Flow & Silo Architecture)

| Nav Item | Link | Silo/Purpose | Secondary Navigation | Notes |
|----------|------|--------------|----------------------|-------|
| **About** | /about/ | Trust Building (silo bridge) | None | Principal credibility; leads to service decision or contact |
| **Services** | /services/ or /services/positioning-digital-authority/ | Services Hub (silo anchor) | Dropdown reveals all three services + workshop | Default link can be hub page or first service option |
| **Discovery** | /discovery/ | Discovery & Diagnostic Silo | None | Premium diagnostic offering; bridge page between awareness and service selection |
| **Blog** | /blog/ | Content & Authority Silo | None | Content hub; entry point for Strategically Unaware personas |
| **Contact** | /contact/ | Conversion (all silos) | None | Mobile-specific or optional; CTA button is primary contact driver |

### Navigation Internal Linking Principles
1. **Silo Integrity**: Header nav maintains clear separation between content silos (Blog, Services, Discovery) while allowing cross-silo access
2. **Trust Flow Support**: Nav order follows persona awareness journey (About → Services → Discovery → Blog as alternative entry)
3. **No Dead Ends**: Every nav link leads to page with clear next step (either to other nav items or in-page CTAs)
4. **Consistency**: Nav structure remains identical across all pages; nav items do not change per page

---

## Visual Priority & Design Annotations

### Priority Hierarchy (Left to Right)

1. **[LOGO]** - Highest priority (brand anchor, immediate recognition)
   - Visual Weight: Brand mark color, bold presence
   - Cognitive Load: Minimal (immediately understood)

2. **[PRIMARY CTA BUTTON]** - Second highest priority (primary conversion driver)
   - Visual Weight: High contrast background, white text, bold font
   - Cognitive Load: Immediate action target; stands out from nav items
   - Annotation: **PRIMARY CONVERSION ELEMENT** — never de-emphasize

3. **[NAV ITEMS]** - Medium priority (utility, secondary conversion support)
   - Visual Weight: Standard font weight, primary text color
   - Cognitive Load: Clear labels, instant understanding of options
   - Annotation: **SECONDARY NAVIGATION** — supports discovery and content access

4. **[TAGLINE]** (if displayed) - Lowest priority (brand reinforcement)
   - Visual Weight: Smaller font, secondary color or opacity
   - Cognitive Load: Supportive, not essential
   - Annotation: **OPTIONAL DESKTOP ONLY** — remove on mobile to preserve space

### Color & Contrast Annotations

- **CTA Button**: Must have 3:1+ contrast ratio (WCAG AA minimum) against header background
- **Nav Items**: Must have 4.5:1+ contrast ratio (WCAG AA minimum) for body text
- **Logo**: Brand color mark, high recognition value
- **Active Nav State**: Use color shift, underline, or background fill (not weight change alone, which affects layout shift)
- **Hover States**: Subtle (opacity shift preferred over color shift to maintain consistency)

### Spacing & Alignment Annotations

- **Header Height**: 60-72px on desktop (comfortable, not cramped; nav items vertically centered)
- **Logo to Nav Gap**: 40-60px (visual breathing room)
- **Nav Items Gap**: 16-24px (equal spacing, balanced)
- **Nav to CTA Gap**: 40-60px (visual separation; CTA distinct from navigation)
- **CTA Button to Edge**: 24px on desktop, 16px on tablet
- **All Elements Vertically Centered**: Ensure consistent vertical alignment (nav items, logo, CTA at same baseline)

### Accessibility & Keyboard Navigation

- **Tab Order**: Logo → Nav items (left to right) → Services dropdown (if focused) → CTA button
- **Focus Indicators**: Clear 2-3px focus ring on nav items and CTA button
- **Skip Link** (optional): "Skip to main content" link placed off-screen or behind menu (accessibility best practice)
- **ARIA Labels**: Services dropdown marked with `aria-expanded` for state change
- **Semantic HTML**: `<nav>` element wraps primary navigation; `<button>` for CTA (not `<a>` link styled as button)

---

## Services Dropdown Interaction Pattern

### Desktop Hover Behavior
- **Trigger**: Mouse hover on "Services" nav item
- **Reveal**: Dropdown appears immediately (no delay) below Services item
- **Appearance**: List of three services + Self-Assessment Workshop link
- **Styling**: Dropdown background color slightly different from header (subtle contrast)
- **Exit**: Dropdown closes when mouse leaves Services item or dropdown area

### Mobile Tap Behavior
- **Trigger**: Tap/click on "Services" nav item within mobile menu
- **Reveal**: Submenu expands inline (no separate dropdown layer; nested list pattern)
- **Appearance**: Indented submenu items below "Services"
- **Arrow Indicator**: Right-pointing arrow (→) shows submenu items are available
- **Exit**: Tap "Services" again to collapse, or tap another nav item

### Dropdown Visual Specifications
- **Width**: Match header width or slightly narrower (96-100% of header)
- **Positioning**: Flush below Services nav item (0px top offset)
- **Padding**: 12-16px vertical, 24px horizontal
- **Background**: Subtle background color (10-20% tint of header background, or white with 2-4px shadow)
- **Item Spacing**: 12-16px between submenu items
- **Text Size**: Slightly smaller than nav items (13-14px)
- **Divider**: Optional visual line between service options and workshop (thin, low-opacity)

---

## Performance & Technical Specifications

### Header Rendering
- **HTML Structure**: Single `<header>` element wrapping logo, nav, and CTA
- **CSS Classes**: `.header-wrapper`, `.header-logo`, `.header-nav`, `.header-nav-item`, `.header-cta`, `.header-dropdown`, etc.
- **Mobile Menu Toggle**: JavaScript-controlled class `.menu-open` on body or header
- **Sticky Positioning**: CSS `position: sticky` or `position: fixed` with appropriate z-index (900-1000)

### Load Performance
- **Logo Image**: Optimized SVG (preferred) or webp with fallback (< 10KB)
- **CSS Animations**: Use CSS transforms and opacity only (avoid layout-shifting properties like margin/padding in animations)
- **JavaScript**: Minimal (hamburger toggle only; no fancy animations)
- **Accessibility**: No auto-expanding dropdowns; user-controlled only

### Cross-Browser Compatibility
- **Mobile Safari**: Test sticky positioning and overflow behavior
- **Firefox, Chrome, Safari, Edge**: Standard support for CSS Grid/Flexbox
- **Internet Explorer**: Not required (modern brand positioning)

---

## Exclusions & Guardrails (What NOT to Include)

### Visual Elements to Avoid
- [ ] Search bar (not in brand strategy; would clutter header)
- [ ] Phone number or email (header too small; available in footer)
- [ ] Social media icons (not mentioned in strategy; belongs in footer)
- [ ] User login/account area (B2B positioning; not applicable)
- [ ] Shopping cart or e-commerce elements (not applicable)
- [ ] Newsletter signup (belongs in footer or via CTA)
- [ ] Sticky notifications or banners above header (intrusive, violates header-only rule)

### CTA Variations to Avoid
- [ ] Page-specific CTA text changes (must be consistent "Let's Have a Conversation")
- [ ] Multiple CTA buttons in header (only one primary CTA button allowed)
- [ ] CTA button that changes destination per page (always links to /contact/)
- [ ] Floating/docked CTA button on mobile (interferes with header; use mobile menu instead)
- [ ] Urgency language ("Limited Time", "Act Now", "Claim Your") — contradicts peer-level tone

### Navigation Structure Mistakes to Avoid
- [ ] Mega menu with excessive sub-items (stick to three services + workshop)
- [ ] Auto-expanding dropdowns (user-controlled only)
- [ ] Hidden nav items that only appear on hover (accessibility issue)
- [ ] Sidebar navigation alongside header (use mobile menu pattern instead)
- [ ] Redundant navigation (don't repeat primary nav items in footer if already in header)

---

## Summary & Implementation Notes

**Purpose**: The global header serves as persistent navigation and conversion anchor, supporting WebXC's principal-led positioning and trust-flow architecture.

**Key Characteristics**:
- Professional, uncluttered design reflecting principal-level confidence
- Services dropdown structure supports silo navigation (Discovery, Services, Content)
- Primary CTA button ("Let's Have a Conversation") maintains consistent visibility and link behavior
- Mobile hamburger pattern preserves space while maintaining access to all navigation
- Responsive sticky positioning ensures header remains available as reference point while scrolling

**Design Principles**:
1. Simplicity over complexity — no unnecessary elements
2. Consistency over variation — same nav structure and CTA on all pages
3. Trust over urgency — no pressure language or aggressive visual patterns
4. Accessibility over aesthetics — keyboard navigation, focus states, clear labels
5. Performance over decoration — minimal images, CSS animations, JavaScript

**Validation Checklist**:
- [ ] Logo links to homepage
- [ ] All nav items link to correct pages
- [ ] Services dropdown reveals three services + workshop
- [ ] CTA button always visible and links to /contact/
- [ ] Mobile hamburger menu displays at 767px breakpoint
- [ ] All nav items and CTA button keyboard accessible
- [ ] Header remains visible on scroll (sticky/fixed)
- [ ] No inconsistencies across pages
- [ ] Responsive design tested at 320px, 768px, 1024px+ breakpoints

---

## Files & Resources for Development

**Related Documents**:
- Sitemap & CTA Strategy: `/webxc-sitemap-cta-strategy.md` (for link destinations and CTA copy consistency)
- Brand Context: `/brand-context.md` (for tone, voice, visual hierarchy)
- Page Wireframes: Refer to individual page wireframes for internal linking context

**Next Steps**:
1. Create desktop HTML/CSS mockup of header (600px+ width)
2. Test responsive breakpoints (320px mobile, 768px tablet, 1024px+ desktop)
3. Implement mobile hamburger toggle with JavaScript
4. Test keyboard navigation (Tab through all elements, Enter on CTA)
5. Verify all links route to correct destinations
6. Test sticky header behavior on scroll
7. Accessibility audit (WCAG AA compliance)
