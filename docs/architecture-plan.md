# Architecture Plan — WebXC

## File Conventions

- Pages live at `page-name/index.html` for clean URLs (e.g., `/about/` = `about/index.html`)
- Homepage is the exception: `index.html` at root
- All HTML files use `<!-- BUILD:name -->` markers for component injection
- Components live in `/components/` as `.html` fragments (no doctype, no head)

## CSS Conventions

- Single stylesheet: `assets/css/main.css`
- CSS custom properties in `:root` for all design tokens
- Mobile-first: base styles → 640px tablet → 1024px desktop
- Class naming: descriptive, hyphenated (`.qualification-card`, `.process-step`, `.hero-ctas`)
- Section classes match their semantic purpose (`.the-gap`, `.how-we-work`, `.outcomes`)
- No BEM. No utility classes. Plain descriptive selectors.
- Transitions use `var(--transition)` for consistency

## Build Process

1. `node scripts/build.js` scans root for `.html` files (skips `_site/`, `node_modules/`, `components/`, `scripts/`, `docs/`, `website-copy/`, `webpage-wireframes/`)
2. Replaces `<!-- BUILD:name -->` with contents of `components/name.html`
3. Copies `assets/`, `robots.txt`, `LLMs.txt` to `_site/`
4. Output in `_site/` is what Cloudflare Pages serves

**Cloudflare build command:** `node scripts/build.js`
**Output directory:** `_site`

## Vision Loop Process

1. Make changes to source files
2. Run `node scripts/build.js`
3. Deploy: `wrangler pages deploy _site`
4. Capture: `node scripts/capture.js <preview-url>`
5. Analyse screenshots against `/docs/brand-guidelines.md`
6. If issues: fix source files, repeat from step 2
7. If clean: `git add`, `git commit`, `git push`

## SEO Template

Every page follows this head structure:

```html
<!DOCTYPE html>
<html lang="en-NZ">
<head>
    <!-- BUILD:head-seo -->
    <title>{Page Title} — WebXC</title>
    <meta name="description" content="{155 chars max}">
    <link rel="canonical" href="https://{domain}/{path}/">
    <meta property="og:title" content="{Page Title}">
    <meta property="og:description" content="{Description}">
    <meta property="og:url" content="https://{domain}/{path}/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="WebXC">
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    <!-- BUILD:header -->
    <main>
        {page content}
    </main>
    <!-- BUILD:footer -->
    <script src="assets/js/main.js"></script>
    {schema markup script tags}
</body>
</html>
```

## Schema Patterns

**Organisation (homepage):**
```json
{
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WebXC",
    "description": "...",
    "areaServed": "New Zealand",
    "founder": [
        { "@type": "Person", "name": "James", "jobTitle": "Strategy & Positioning" },
        { "@type": "Person", "name": "Andy", "jobTitle": "Technical & Performance" }
    ]
}
```

**Person (about page):**
```json
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "James",
    "jobTitle": "Strategy & Positioning",
    "worksFor": { "@type": "Organisation", "name": "WebXC" }
}
```

## Directories the Build Skips

`node_modules`, `_site`, `.git`, `components`, `scripts`, `docs`, `website-copy`, `webpage-wireframes`
