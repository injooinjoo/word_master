#!/usr/bin/env node
import process from 'node:process';
import path from 'node:path';
import fs from 'node:fs';
import { chromium } from 'playwright';

function fail(message) {
  console.error(`[ERROR] ${message}`);
  process.exit(1);
}

const [, , url, outputPath, widthArg, heightArg, dprArg, waitSelector, clickButtonLabel] = process.argv;

if (!url || !outputPath || !widthArg || !heightArg || !dprArg) {
  fail(
    'Usage: node scripts/capture-app-store-screenshot.mjs <url> <output> <width> <height> <deviceScaleFactor> [waitSelector]',
  );
}

const width = Number(widthArg);
const height = Number(heightArg);
const deviceScaleFactor = Number(dprArg);

if (!Number.isFinite(width) || !Number.isFinite(height) || !Number.isFinite(deviceScaleFactor)) {
  fail('Width, height, and deviceScaleFactor must be numbers.');
}

const absoluteOutputPath = path.resolve(outputPath);
fs.mkdirSync(path.dirname(absoluteOutputPath), { recursive: true });

const browser = await chromium.launch({ headless: true });

try {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor,
    colorScheme: 'light',
  });
  const page = await context.newPage();

  await page.goto(url, {
    waitUntil: 'networkidle',
    timeout: 120000,
  });

  if (waitSelector && waitSelector !== '-') {
    await page.waitForSelector(waitSelector, {
      state: 'visible',
      timeout: 120000,
    });
  }

  if (clickButtonLabel && clickButtonLabel !== '-') {
    await page.getByRole('button', { name: clickButtonLabel }).click();
    await page.waitForLoadState('networkidle', { timeout: 120000 }).catch(() => undefined);
  }

  await page.waitForTimeout(1500);

  await page.screenshot({
    path: absoluteOutputPath,
    fullPage: false,
  });

  console.log(`[OK] Saved screenshot: ${absoluteOutputPath}`);
} finally {
  await browser.close();
}
