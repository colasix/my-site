#!/usr/bin/env node

/**
 * WebXC Screenshot Capture Tool
 *
 * Takes a URL, visits the page with Playwright, waits for render,
 * and captures full-page screenshots at multiple viewport widths.
 *
 * Usage:
 *   node scripts/capture.js <URL>
 *   node scripts/capture.js <URL> --mobile-only
 *   node scripts/capture.js <URL> --desktop-only
 *
 * Outputs:
 *   preview-mobile.png   (375px width)
 *   preview-tablet.png   (768px width)
 *   preview-desktop.png  (1440px width)
 *
 * The agent uses these screenshots for visual QA against brand-guidelines.md.
 */

const { chromium } = require('playwright');
const path = require('path');

const VIEWPORTS = {
    mobile:  { width: 375,  height: 812, name: 'mobile' },
    tablet:  { width: 768,  height: 1024, name: 'tablet' },
    desktop: { width: 1440, height: 900, name: 'desktop' }
};

const OUTPUT_DIR = path.resolve(__dirname, '..');

async function capture(url, viewportKeys) {
    console.log(`Capturing: ${url}\n`);

    const browser = await chromium.launch({ headless: true });

    for (const key of viewportKeys) {
        const vp = VIEWPORTS[key];
        const outputPath = path.join(OUTPUT_DIR, `preview-${vp.name}.png`);

        console.log(`  ${vp.name} (${vp.width}x${vp.height})...`);

        const context = await browser.newContext({
            viewport: { width: vp.width, height: vp.height },
            deviceScaleFactor: 2
        });

        const page = await context.newPage();

        try {
            await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
            // Extra wait for any CSS transitions or late-loading content
            await page.waitForTimeout(1000);

            await page.screenshot({
                path: outputPath,
                fullPage: true
            });

            console.log(`    → Saved: preview-${vp.name}.png`);
        } catch (err) {
            console.error(`    Error capturing ${vp.name}: ${err.message}`);
        }

        await context.close();
    }

    await browser.close();
    console.log('\nDone.\n');
}

// --- CLI ---

const args = process.argv.slice(2);
const url = args.find(a => !a.startsWith('--'));

if (!url) {
    console.error('Usage: node scripts/capture.js <URL> [--mobile-only] [--tablet-only] [--desktop-only]');
    process.exit(1);
}

let viewportKeys = Object.keys(VIEWPORTS);

if (args.includes('--mobile-only'))  viewportKeys = ['mobile'];
if (args.includes('--tablet-only'))  viewportKeys = ['tablet'];
if (args.includes('--desktop-only')) viewportKeys = ['desktop'];

capture(url, viewportKeys).catch(err => {
    console.error('Fatal error:', err.message);
    process.exit(1);
});
