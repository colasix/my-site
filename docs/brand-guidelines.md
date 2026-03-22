# WebXC — Brand & Design Guidelines

> This file is the agent's visual reference. Read this before writing any HTML or CSS. All design decisions must be consistent with these rules.

---

## Brand Identity

### Archetypes

**Primary: The Hero** — Bold, driven, achievement-oriented. Mastery and results. WebXC empowers clients to overcome underperformance and achieve real wins. The Hero steps in, tackles root problems, and delivers. This is the dominant voice: confident, capable, action-oriented.

**Secondary: The Sage** — Expert, thoughtful, credible. Deep know-how and trusted expertise. 40+ years of combined experience, root-cause diagnosis, strategic alignment. The Sage provides the knowledge backbone and credibility that underpins every solution. This is the supporting influence: analytical, informed, advisory.

**The combination:** Bold and capable of seizing opportunities (Hero) while demonstrating deep know-how and trusted expertise (Sage). Prospects get confidence that WebXC not only gets the job done but understands exactly how to do it right.

### Design Implications

WebXC serves established NZ businesses ($2M–$50M). The visual language must communicate:

- **Established authority** — not startup energy, not corporate stiffness
- **Strategic clarity** — clean, structured, purposeful (Sage)
- **Confident action** — bold accents, decisive CTAs (Hero)
- **NZ sensibility** — grounded, plain, no grandiosity
- **Trust and competence** — the site itself is proof of what WebXC delivers

The design should feel like a senior professional's office: calm, confident, well-organised, no clutter. The Hero energy shows up in the CTAs and key moments of impact. The Sage energy shows up in the structure, the spacing, and the intellectual clarity of the content.

---

## Colour Palette

The palette blends Hero energy (bold, confident accents) with Sage depth (trustworthy, professional foundations) and clean neutral space.

### Core Palette

| Token | Hex | Role | Archetype |
|-------|-----|------|-----------|
| `--color-sage-dark` | `#1A2A40` | Headings, primary text, nav, header backgrounds | Sage — deep navy, trustworthy, professional |
| `--color-text-body` | `#6b7280` | Body text, descriptions, secondary content | Sage — cool gray, calm, analytical |
| `--color-hero-accent` | `#D62828` | CTAs, buttons, key highlights, conversion points | Hero — deep vibrant red, action, confidence |
| `--color-bg-primary` | `#f8f8f8` | Page background | Neutral — clean, modern, breathable |
| `--color-bg-white` | `#ffffff` | Card backgrounds, contrast sections | Neutral — crisp, minimal |

### Supporting Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-hero-accent-hover` | `#B22222` | CTA/button hover state (darker red) |
| `--color-sage-medium` | `#2F4F4F` | Secondary headings, icon fills, subtle emphasis |
| `--color-highlight` | `#FFD460` | Optional warm gold for occasional pops (icons, hover states, small accents) |
| `--color-border` | `#e5e7eb` | Subtle borders, dividers |
| `--color-bg-subtle` | `#f3f4f6` | Alternating section backgrounds |

### Colour Mapping by Archetype

**Hero moments** (action, confidence, conversion): Red accent (`#D62828`) for CTAs, buttons, important highlights. This is the "call to action" colour — used at the moments where you want the visitor to act.

**Sage foundations** (trust, expertise, structure): Dark navy (`#1A2A40`) for headings, navigation, headers, footer. Cool gray (`#6b7280`) for body text. These create the professional, credible foundation.

**Neutral space** (modern, sleek, breathable): Off-white (`#f8f8f8`) and white (`#ffffff`) for backgrounds. Plenty of whitespace to let the bold accent and deep navy breathe.

### Rules

- Never use more than 3 colours on a single section
- Red accent is reserved for CTAs and high-priority highlights — never used for body text or decoration
- Dark navy replaces near-black (#0f0f0f) as the primary text/heading colour — warmer, more brand-aligned
- Dark backgrounds (navy `#1A2A40`) may be used for high-impact sections (e.g., final CTA, header)
- Gold highlight (`#FFD460`) is optional and used very sparingly — icons, badges, small accents only
- Maintain high contrast ratios for accessibility (WCAG AA minimum)
- The site should feel predominantly calm and structured (Sage) with bold moments of action (Hero)

---

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

No external fonts. System stack ensures zero font-loading delay and consistent rendering.

### Scale

| Element | Mobile | Tablet (640px+) | Desktop (1024px+) | Weight | Line-height | Tracking |
|---------|--------|-----------------|-------------------|--------|-------------|----------|
| h1 | 2rem | 2.75rem | 3.25rem | 800 | 1.15 | -0.03em |
| h2 | 1.5rem | 2rem | 2.5rem | 700 | 1.2 | -0.02em |
| h3 | 1.25rem | 1.5rem | 1.75rem | 600 | 1.3 | -0.01em |
| Body | 1rem | 1.05rem | 1.1rem | 400 | 1.6 | normal |
| Small/caption | 0.875rem | 0.875rem | 0.9rem | 400 | 1.5 | normal |

### Rules

- One h1 per page (SEO requirement)
- Headings use near-black (#0f0f0f), never gray
- Body text uses gray (#6b7280)
- Links inherit text colour with underline, or use accent colour — be consistent within a section
- No all-caps text except for very small labels (e.g., "OPTION A")

---

## Spacing

### Base Unit

`0.25rem` (4px) — all spacing should be a multiple of this.

### Section Spacing

| Context | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Section padding (vertical) | 3rem | 4rem | 5rem |
| Section padding (horizontal) | 1.5rem | 2rem | 4rem |
| Between major elements | 2rem | 2.5rem | 3rem |
| Between related elements | 1rem | 1.25rem | 1.5rem |
| Between text blocks | 0.75rem | 1rem | 1rem |

### Content Width

| Context | Max-width |
|---------|-----------|
| Text content (hero, body copy) | 680px |
| Wide content (cards, grids) | 1080px |
| Full-bleed sections | 100% with internal max-width |
| Image containers | 800px |

---

## Responsive Breakpoints

```css
/* Mobile-first (default) — 0px to 639px */

@media (min-width: 640px) {
    /* Tablet */
}

@media (min-width: 1024px) {
    /* Desktop */
}
```

### Rules

- All CSS is mobile-first — base styles target the smallest screen
- Never hide content on mobile that's visible on desktop (no `display: none` breakpoint hacks)
- Touch targets minimum 44x44px on mobile
- Test at 375px (iPhone SE), 768px (iPad), and 1440px (desktop)

---

## Components

### CTA Button (Primary)

```css
.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    background: #0f0f0f;
    color: #fff;
    padding: 0.875rem 1.75rem;
    border-radius: 100px;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    transition: background 0.2s ease, transform 0.2s ease;
}

.btn-primary:hover {
    background: #2a2a2a;
    transform: translateY(-1px);
}
```

- Dark pill shape, white text
- Includes inline arrow SVG that translates right on hover
- Used for primary CTAs: "Let's Have a Conversation", "Book a Free Consultation"

### CTA Button (Secondary) — to be built

- Outlined version of primary (border only, no fill)
- Used for secondary actions

### Card Pattern — to be built

- White background on gray section (or subtle gray on white section)
- 12px border-radius
- Subtle box-shadow matching hero dashboard style
- Used for service cards, feature blocks, testimonial cards

### Section Pattern

- Alternating backgrounds: `#f8f8f8` → `#ffffff` → `#f8f8f8`
- Centered content with max-width
- Consistent vertical padding per breakpoint
- Semantic HTML: `<section>` with descriptive class

### Hero Pattern (established)

- Full-viewport minimum height
- Centered text content (max-width 680px desktop)
- Large heading + subdued subtext + pill CTA
- Visual element below (dashboard SVG, or section-relevant illustration)
- Shadow treatment on visual elements:
  ```css
  box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.04),
      0 8px 24px rgba(0, 0, 0, 0.06),
      0 24px 60px rgba(0, 0, 0, 0.04);
  ```

---

## Imagery & Icons

- Placeholder SVGs for development (simple, geometric, using accent colour)
- Final imagery TBD — should feel professional, NZ-appropriate, not stock-photo generic
- Icons: simple line style, consistent stroke width, accent colour or near-black
- All images must have descriptive alt text (SEO and accessibility requirement)
- Images should be optimised: WebP format where supported, compressed, appropriately sized

---

## Shadows & Borders

### Elevation Levels

| Level | Usage | Box-shadow |
|-------|-------|------------|
| 0 | Flat elements | none |
| 1 | Subtle lift (cards, inputs) | `0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)` |
| 2 | Medium lift (featured cards, hero images) | `0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06), 0 24px 60px rgba(0,0,0,0.04)` |

### Borders

- Use sparingly — prefer spacing and shadow to separate elements
- When needed: 1px solid `#e5e7eb`
- Border-radius: 12px for cards, 100px for pills/buttons, 8px for inputs

---

## Animation & Interaction

- Transitions: `0.2s ease` for colour, transform, opacity
- Hover lift on interactive cards: `transform: translateY(-2px)` + shadow increase
- CTA arrow translates right on hover: `transform: translateX(3px)`
- No decorative animations, no parallax, no scroll-triggered reveals
- Keep it calm and professional — motion serves clarity, not entertainment

---

## Accessibility

- All text meets WCAG AA contrast ratios
- All interactive elements are keyboard-accessible
- All images have alt text
- Focus states are visible (outline or ring style)
- Semantic HTML (nav, main, section, article, header, footer)
- Skip-to-content link for keyboard users
- Form inputs have associated labels
