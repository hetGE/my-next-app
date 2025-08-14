#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const apiPath = path.join(process.cwd(), 'app', 'api');
const tempApiPath = path.join(process.cwd(), '.api-backup');
const sitemapPath = path.join(process.cwd(), 'app', 'sitemap.ts');
const tempSitemapPath = path.join(process.cwd(), '.sitemap-backup.ts');
const robotsPath = path.join(process.cwd(), 'app', 'robots.txt');
const tempRobotsPath = path.join(process.cwd(), '.robots-backup.txt');

console.log('Building for GitHub Pages...');

// Move files that are incompatible with static export
let apiExists = false;
let sitemapExists = false;
let robotsExists = false;

if (fs.existsSync(apiPath)) {
    console.log('Moving API routes temporarily...');
    fs.renameSync(apiPath, tempApiPath);
    apiExists = true;
}

if (fs.existsSync(sitemapPath)) {
    console.log('Moving dynamic sitemap temporarily...');
    fs.renameSync(sitemapPath, tempSitemapPath);
    sitemapExists = true;
}

if (fs.existsSync(robotsPath)) {
    console.log('Moving dynamic robots.txt temporarily...');
    fs.renameSync(robotsPath, tempRobotsPath);
    robotsExists = true;
}

// Build with GitHub Pages environment
try {
    execSync('GITHUB_PAGES=true pnpm build', {
        stdio: 'inherit',
        env: { ...process.env, GITHUB_PAGES: 'true' }
    });
    console.log('Build completed successfully!');
} catch (error) {
    console.error('Build failed:', error.message);
    // Restore all moved files before exiting
    if (apiExists && fs.existsSync(tempApiPath)) {
        console.log('Restoring API routes...');
        fs.renameSync(tempApiPath, apiPath);
    }
    if (sitemapExists && fs.existsSync(tempSitemapPath)) {
        console.log('Restoring sitemap...');
        fs.renameSync(tempSitemapPath, sitemapPath);
    }
    if (robotsExists && fs.existsSync(tempRobotsPath)) {
        console.log('Restoring robots.txt...');
        fs.renameSync(tempRobotsPath, robotsPath);
    }
    process.exit(1);
}

// Restore all moved files
if (apiExists && fs.existsSync(tempApiPath)) {
    console.log('Restoring API routes...');
    fs.renameSync(tempApiPath, apiPath);
}
if (sitemapExists && fs.existsSync(tempSitemapPath)) {
    console.log('Restoring sitemap...');
    fs.renameSync(tempSitemapPath, sitemapPath);
}
if (robotsExists && fs.existsSync(tempRobotsPath)) {
    console.log('Restoring robots.txt...');
    fs.renameSync(tempRobotsPath, robotsPath);
}

process.exit(0);