# Brand Guidelines — WebXC

## Design Inspiration

Swan.io-inspired. Premium, modern, generous whitespace. Confidence through restraint. The visual language of an established authority, not a startup.

---

## Colour Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-navy` | #1A2A40 | Primary text, header backgrounds, dark sections |
| `--color-navy-light` | #243650 | Gradient endpoints |
| `--color-text` | #1A2A40 | Headings, strong body text |
| `--color-text-secondary` | #5f6c7b | Body paragraphs, descriptions |
| `--color-text-muted` | #8b95a1 | Captions, labels, meta text |
| `--color-accent` | #D62828 | CTA buttons, step labels, card accent borders |
| `--color-accent-hover` | #B22222 | Button hover state |
| `--color-bg` | #ffffff | Primary background (white sections) |
| `--color-bg-soft` | #f7f8fa | Alternate section background |
| `--color-bg-card` | #ffffff | Card surfaces |
| `--color-border` | #e8ecf0 | Form inputs, card borders |
| `--color-border-soft` | #f0f2f5 | Subtle card borders |

## Typography

**Font family:** Inter (Google Fonts), fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

| Element | Size (mobile) | Size (tablet) | Size (desktop) | Weight | Letter-spacing |
|---------|---------------|---------------|----------------|--------|---------------|
| Hero h1 | 2.5rem | 3.25rem | 4rem | 800 | -0.04em |
| Section h2 | 1.75rem | 2.25rem | 2.75rem | 800 | -0.035em |
| Card h3 | 1.05rem | 1.05rem | 1.05rem | 700 | -0.02em |
| Body text | 0.9rem | 0.9rem | 0.9rem | 400 | normal |
| Hero sub | 1.1rem | 1.15rem | 1.2rem | 400 | normal |
| Labels | 0.7rem | 0.7rem | 0.7rem | 700 | 0.1em (uppercase) |

**Line heights:** Headings 1.1–1.15, body 1.6–1.75

## Spacing

| Context | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Section padding (vertical) | 4–5rem | 5–6rem | 6rem |
| Container padding (horizontal) | 1.5rem | 2.5rem | 3rem |
| Card padding | 2rem 1.75rem | 2rem 1.75rem | 2rem 1.75rem |
| Card gap | 1.25rem | 1.25rem | 1.25rem |
| Heading to content | 2–2.5rem | 2–2.5rem | 2.5rem |

**Max widths:** Container 1120px. Prose blocks 640–680px.

## Components

### Buttons

- **Primary:** Pill shape (100px radius), red accent bg, white text, 0.9rem/600 weight, hover shadow glow + lift
- **Secondary:** Pill shape, transparent bg, navy text, 1.5px border, hover fills soft bg

### Cards

- 16px border-radius
- 1px solid border-soft
- Hover: translateY(-2px) + card shadow
- Transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1)

### Hero

- Dark gradient: linear-gradient(160deg, #1A2A40 0%, #243650 35%, #2d4a6a 60%, #3a5f85 100%)
- Animated radial red glow (8s ease-in-out infinite alternate)
- White text, centered, max-width 720px
- Min-height: calc(100vh - 72px)

### Header

- Sticky, 72px height, frosted glass (backdrop-filter blur 16px)
- Logo left, CTA button right
- When site expands to multiple pages: add navigation links

### Footer

- Same navy as hero/contact
- Logo + tagline left, copyright right (desktop row layout)

### Dark Sections (hero, contact)

- Same gradient direction
- White/alpha text
- Red radial glow accent (subtle)
- Form cards: white bg, 16px radius, box-shadow

### Step Labels

- Inline pill: red text on rgba(red, 0.07) background, 100px radius, uppercase, 0.7rem

### Outcome Cards

- 3px left border in accent red
- Overflow hidden with ::before pseudo-element

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| < 640px | Mobile (single column, stacked) |
| 640px+ | Tablet (multi-column grids, horizontal CTAs) |
| 1024px+ | Desktop (wider spacing, larger headings) |

## Things to Avoid

- Startup energy or agency hype
- Bright/saturated colours beyond the red accent
- Thin fonts or light weights for headings
- Cluttered layouts or tight spacing
- Animations beyond subtle hovers and the hero glow
- Stock photography
