# WebXC Swan-Inspired Styling Review — Progress Tracker

## Design Principles (Swan-inspired)
- Inter Tight font, weight 200 body / 500 headings
- No card backgrounds or shadows — use transparent backgrounds with border dividers
- Container side borders (`container--lines`)
- Thin 1px border separators instead of cards
- Left-aligned text, no centered sections (except CTA)
- Uppercase labels (small, light weight, letter-spaced) above headings
- Restrained colour — mostly text, minimal accent use
- No hover lift/move effects (only button arrow)
- 6px radius buttons with arrows, #212121 background
- Page CTA sections use solid #212121 background (not gradient)
- Links use subtle underline with border-color transition (not red accent)

---

## Pages & Sections

### Homepage (`index.html`) — DONE
- [x] Hero section
- [x] The Gap section
- [x] Services grid (Swan-style tiles with border dividers)
- [x] Outcomes (borderless text columns with left border dividers)
- [x] Principals (two-column, border-divided, no card backgrounds)
- [x] Footer

### How We Work (`how-we-work/index.html`) — DONE
- [x] Dark hero — container--lines added
- [x] Process timeline — step numbers refined (36px, #212121, weight 400, 1px connector)
- [x] Step labels — pill removed, now plain uppercase text
- [x] Path option cards — card bg removed, border-top rows with restrained labels
- [x] Page CTA — #212121 solid background

### Website Design (`website-design/index.html`) — DONE
- [x] All sections — container--lines added
- [x] Option cards — card bg/shadow removed, border-top rows
- [x] Approach within "What we actually do" — bold formatting preserved, clean layout
- [x] Outcome cards — match homepage style (border columns)
- [x] Page CTA — #212121 background

### About (`about/index.html`) — DONE
- [x] Dark hero — container--lines added
- [x] Bio cards — card styling removed, two-column border-divided grid
- [x] Bio titles — restrained (weight 300, no uppercase, no red)
- [x] "How we work differently" — soft bg removed, container--lines added
- [x] "Who we work with" — container--lines added
- [x] Page CTA — #212121 background

### Contact (`contact/index.html`) — DONE
- [x] Dark hero — container--lines added
- [x] Contact rows — refined (weight 400 labels, restrained hover)
- [x] "What happens next" — heading now uppercase label, steps use border-top rows
- [x] Step numbers — 28px, #212121 bg, white text
- [x] Container--lines added

### Sub-Service Pages (SEO, GEO, CRO, Content Strategy, Performance, Content Management) — DONE
- [x] Light hero + service badge — badge now plain uppercase text (no pill bg)
- [x] All sections — soft bg alternation removed (all white)
- [x] Approach points — card bg/shadow removed, border-top rows with 2-col grid at tablet+
- [x] "What changes" section — clean, no background
- [x] Related services — cards replaced with horizontal name+description border rows
- [x] Related heading — now small uppercase label
- [x] Page CTA — #212121 solid background
- [x] Container--lines on all containers

### Global Components — DONE
- [x] Header — frosted glass (unchanged)
- [x] Footer — unchanged
- [x] Buttons — Swan-style (6px radius, arrows, #212121)
- [x] Container lines — all pages now use container--lines
- [x] Links — subtle underline style (border-color, not red)

---

## Summary of CSS Changes
1. **page-hero**: removed border-bottom, widened h1 max-width to 680px
2. **service-badge**: removed pill bg, now plain uppercase text
3. **page-section**: removed border-bottom, all white bg (no --soft alternation)
4. **page-section links**: changed from red accent to subtle underline style
5. **approach-points**: cards → transparent border-top rows, 2-col with left border at tablet
6. **option-card**: card bg/shadow → transparent border-top rows
7. **path-option**: card bg → transparent border-top, restrained labels
8. **related-services**: soft bg → white, cards → horizontal border rows, heading → uppercase label
9. **page-cta**: gradient → solid #212121
10. **bio-card**: restructured as grid with border dividers, restrained titles
11. **contact-step-num**: smaller (28px), #212121 bg, white text
12. **contact-page-aside h2**: now small uppercase label
13. **step-number**: smaller (36px), #212121 bg, weight 400
14. **step-label**: pill → plain uppercase text
15. **process-step h3**: weight 700 → 500
16. **connecting line**: 2px → 1px
17. **All containers**: container--lines class added across all pages
