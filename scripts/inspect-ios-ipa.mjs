#!/usr/bin/env node
import process from 'node:process';
import { spawnSync } from 'node:child_process';

function fail(message) {
  console.error(`[ERROR] ${message}`);
  process.exit(1);
}

function run(command, args) {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    const stderr = result.stderr?.trim();
    fail(`Failed to run "${command} ${args.join(' ')}"${stderr ? `: ${stderr}` : ''}`);
  }

  return result.stdout;
}

const ipaPath = process.argv[2];

if (!ipaPath) {
  fail('Usage: npm run check:ipa -- /absolute/path/to/build.ipa');
}

const listing = run('unzip', ['-l', ipaPath]);
const blockedPatterns = [
  /GoogleMobileAds/i,
  /UserMessagingPlatform/i,
  /RNGoogleMobileAds/i,
  /AdMob/i,
];

const issues = [];

for (const pattern of blockedPatterns) {
  if (pattern.test(listing)) {
    issues.push(`Archive listing contains blocked pattern: ${pattern}`);
  }
}

const infoPlistPath = listing
  .split('\n')
  .map((line) => line.trim().split(/\s+/).at(-1))
  .find((entry) => typeof entry === 'string' && entry.endsWith('.app/Info.plist'));
const expoConfigPath = listing
  .split('\n')
  .map((line) => line.trim().split(/\s+/).at(-1))
  .find((entry) => typeof entry === 'string' && entry.endsWith('.app/EXConstants.bundle/app.config'));

if (!infoPlistPath) {
  issues.push('Could not locate app Info.plist inside the IPA.');
} else {
  const infoPlist = run('unzip', ['-p', ipaPath, infoPlistPath]);
  if (/GADApplicationIdentifier/i.test(infoPlist)) {
    issues.push('Info.plist still includes GADApplicationIdentifier.');
  }
  if (/NSUserTrackingUsageDescription/i.test(infoPlist)) {
    issues.push('Info.plist still includes NSUserTrackingUsageDescription.');
  }
}

if (!expoConfigPath) {
  issues.push('Could not locate EXConstants.bundle/app.config inside the IPA.');
} else {
  try {
    const expoConfig = JSON.parse(run('unzip', ['-p', ipaPath, expoConfigPath]));
    const features = expoConfig?.extra?.features ?? {};

    if (expoConfig?.extra?.appVariant !== 'production') {
      issues.push('Embedded Expo config must resolve to the production app variant.');
    }
    if (features.authEnabled !== false) {
      issues.push('Embedded Expo config must disable auth.');
    }
    if (features.scoreSyncEnabled !== false) {
      issues.push('Embedded Expo config must disable score sync.');
    }
    if (features.adsEnabled !== false) {
      issues.push('Embedded Expo config must disable ads.');
    }
    if ((expoConfig?.extra?.supabaseUrl ?? '') !== '') {
      issues.push('Embedded Expo config must not expose a Supabase URL.');
    }
    if ((expoConfig?.extra?.supabaseAnonKey ?? '') !== '') {
      issues.push('Embedded Expo config must not expose a Supabase anon key.');
    }
    if (expoConfig?.ios?.supportsTablet !== true) {
      issues.push('Embedded Expo config must keep iPad support enabled.');
    }
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    issues.push(`Failed to parse embedded Expo app config: ${reason}`);
  }
}

if (issues.length > 0) {
  fail(`IPA inspection failed:\n- ${issues.join('\n- ')}`);
}

console.log('[OK] IPA inspection passed.');
console.log(`ipa: ${ipaPath}`);
