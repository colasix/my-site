#!/usr/bin/env node

/**
 * WebXC Build Script
 *
 * Reads HTML files, finds <!-- BUILD:name --> markers, and replaces them
 * with contents of corresponding components/name.html files.
 *
 * Outputs assembled files to _site/ directory for deployment.
 *
 * Usage: node scripts/build.js
 * Cloudflare Pages build command: node scripts/build.js
 * Cloudflare Pages output directory: _site
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT, 'components');
const OUTPUT_DIR = path.join(ROOT, '_site');

// Directories to skip when scanning for HTML files
const SKIP_DIRS = new Set([
    'node_modules',
    '_site',
    '.git',
    'components',
    'scripts',
    'docs'
]);

// Files/dirs to copy as-is to output
const COPY_PATHS = [
    'assets',
    'sitemap.xml',
    'robots.txt',
    'LLMs.txt',
    'favicon.ico'
];

// --- Utility functions ---

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function copyRecursive(src, dest) {
    if (!fs.existsSync(src)) return;

    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
        ensureDir(dest);
        for (const item of fs.readdirSync(src)) {
            if (item === '.DS_Store') continue;
            copyRecursive(path.join(src, item), path.join(dest, item));
        }
    } else {
        ensureDir(path.dirname(dest));
        fs.copyFileSync(src, dest);
    }
}

function findHtmlFiles(dir, files = []) {
    for (const item of fs.readdirSync(dir)) {
        if (item.startsWith('.') || SKIP_DIRS.has(item)) continue;

        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            findHtmlFiles(fullPath, files);
        } else if (item.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    return files;
}

function loadComponent(name) {
    const componentPath = path.join(COMPONENTS_DIR, `${name}.html`);
    if (fs.existsSync(componentPath)) {
        return fs.readFileSync(componentPath, 'utf-8').trim();
    }
    console.warn(`  Warning: Component "${name}" not found at ${componentPath}`);
    return `<!-- Component "${name}" not found -->`;
}

function processHtml(content) {
    // Match <!-- BUILD:name --> markers and replace with component contents
    return content.replace(/<!--\s*BUILD:(\w[\w-]*)\s*-->/g, (match, name) => {
        return loadComponent(name);
    });
}

// --- Main build ---

function build() {
    const startTime = Date.now();
    console.log('WebXC Build');
    console.log('===========\n');

    // Clean output directory
    if (fs.existsSync(OUTPUT_DIR)) {
        try {
            fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
        } catch (e) {
            console.log('Note: Could not clean _site/, writing over existing files.');
        }
    }
    ensureDir(OUTPUT_DIR);

    // Find and process HTML files
    const htmlFiles = findHtmlFiles(ROOT);
    console.log(`Found ${htmlFiles.length} HTML file(s) to process:\n`);

    let componentCount = 0;

    for (const filePath of htmlFiles) {
        const relativePath = path.relative(ROOT, filePath);
        const outputPath = path.join(OUTPUT_DIR, relativePath);

        console.log(`  Processing: ${relativePath}`);

        let content = fs.readFileSync(filePath, 'utf-8');

        // Count injections for this file
        const matches = content.match(/<!--\s*BUILD:(\w[\w-]*)\s*-->/g) || [];
        if (matches.length > 0) {
            console.log(`    → Injecting ${matches.length} component(s)`);
            componentCount += matches.length;
        }

        content = processHtml(content);

        ensureDir(path.dirname(outputPath));
        fs.writeFileSync(outputPath, content, 'utf-8');
    }

    // Copy static assets
    console.log('\nCopying static assets:\n');
    for (const copyPath of COPY_PATHS) {
        const src = path.join(ROOT, copyPath);
        const dest = path.join(OUTPUT_DIR, copyPath);
        if (fs.existsSync(src)) {
            copyRecursive(src, dest);
            console.log(`  Copied: ${copyPath}`);
        }
    }

    const elapsed = Date.now() - startTime;
    console.log(`\nBuild complete in ${elapsed}ms`);
    console.log(`  ${htmlFiles.length} page(s) processed`);
    console.log(`  ${componentCount} component(s) injected`);
    console.log(`  Output: ${path.relative(ROOT, OUTPUT_DIR)}/\n`);
}

build();
