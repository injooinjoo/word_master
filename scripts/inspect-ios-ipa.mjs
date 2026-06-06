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

function readInfoPlistAsXml(ipaPath, infoPlistPath) {
  const raw = spawnSync('unzip', ['-p', ipaPath, infoPlistPath]);
  if (raw.status !== 0) {
    const stderr = raw.stderr?.toString('utf8').trim();
    fail(`Failed to extract Info.plist${stderr ? `: ${stderr}` : ''}`);
  }
  const converted = spawnSync('plutil', ['-convert', 'xml1', '-o', '-', '-'], {
    input: raw.stdout,
    encoding: 'utf8',
  });
  if (converted.status !== 0) {
    const stderr = converted.stderr?.trim();
    fail(`Failed to convert Info.plist via plutil${stderr ? `: ${stderr}` : ''}`);
  }
  return converted.stdout;
}

function readJwtRole(rawKey) {
  if (typeof rawKey !== 'string') return null;
  const [, payload] = rawKey.split('.');
  if (!payload) return null;

  try {
    const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
    const decoded = Buffer.from(padded, 'base64').toString('utf8');
    const parsed = JSON.parse(decoded);
    return typeof parsed?.role === 'string' ? parsed.role : null;
  } catch {
    return null;
  }
}

const ipaPath = process.argv[2];

if (!ipaPath) {
  fail('Usage: npm run check:ipa -- /absolute/path/to/build.ipa');
}

const listing = run('unzip', ['-l', ipaPath]);
const archiveEntries = run('unzip', ['-Z1', ipaPath]).split('\n').filter(Boolean);
const blockedPatterns = [
  /GoogleMobileAds/i,
  /UserMessagingPlatform/i,
  /RNGoogleMobileAds/i,
  /AdMob/i,
  /AppTrackingTransparency/i,
  /ATTrackingManager/i,
];

const issues = [];

for (const pattern of blockedPatterns) {
  if (pattern.test(listing) || archiveEntries.some((entry) => pattern.test(entry))) {
    issues.push(`Archive listing contains blocked pattern: ${pattern}`);
  }
}

const infoPlistPath = archiveEntries
  .find((entry) => typeof entry === 'string' && entry.endsWith('.app/Info.plist'));
const expoConfigPath = archiveEntries
  .find((entry) => typeof entry === 'string' && entry.endsWith('.app/EXConstants.bundle/app.config'));

const EAS_PROJECT_ID = '2504435b-37fc-4b2e-8232-37af5b525221';
const EXPECTED_UPDATES_URL = `https://u.expo.dev/${EAS_PROJECT_ID}`;
const EXPECTED_PRODUCTION_CHANNEL = 'production';

if (!infoPlistPath) {
  issues.push('Could not locate app Info.plist inside the IPA.');
} else {
  const infoPlist = readInfoPlistAsXml(ipaPath, infoPlistPath);
  if (/<key>GADApplicationIdentifier<\/key>/.test(infoPlist)) {
    issues.push('Info.plist still includes GADApplicationIdentifier.');
  }
  if (/<key>NSUserTrackingUsageDescription<\/key>/.test(infoPlist)) {
    issues.push('Info.plist still includes NSUserTrackingUsageDescription.');
  }
  if (!new RegExp(`<key>EXUpdatesURL</key>\\s*<string>${EXPECTED_UPDATES_URL.replace(/[/.]/g, '\\$&')}</string>`).test(infoPlist)) {
    issues.push(`Info.plist EXUpdatesURL must be <string>${EXPECTED_UPDATES_URL}</string>.`);
  }
  if (!/<key>EXUpdatesRuntimeVersion<\/key>\s*<string>[^<]+<\/string>/.test(infoPlist)) {
    issues.push('Info.plist missing EXUpdatesRuntimeVersion — expo-updates runtimeVersion not embedded.');
  }
  if (!new RegExp(`<key>expo-channel-name</key>\\s*<string>${EXPECTED_PRODUCTION_CHANNEL}</string>`).test(infoPlist)) {
    issues.push(`Info.plist must declare <key>expo-channel-name</key><string>${EXPECTED_PRODUCTION_CHANNEL}</string>.`);
  }
  if (/<key>EXUpdatesEnabled<\/key>\s*<false\s*\/>/.test(infoPlist)) {
    issues.push('Info.plist disables EXUpdatesEnabled — OTA updates would be silently off.');
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
      issues.push('Embedded Expo config must keep auth disabled for the guest-only App Store release.');
    }
    if (features.scoreSyncEnabled !== false) {
      issues.push('Embedded Expo config must disable score sync.');
    }
    if (features.adsEnabled !== false) {
      issues.push('Embedded Expo config must disable ads.');
    }
    if (features.authEnabled === true) {
      if (typeof expoConfig?.extra?.supabaseUrl !== 'string' || expoConfig.extra.supabaseUrl.trim() === '') {
        issues.push('Embedded Expo config must include a Supabase URL when auth is enabled.');
      }
      if (typeof expoConfig?.extra?.supabaseAnonKey !== 'string' || expoConfig.extra.supabaseAnonKey.trim() === '') {
        issues.push('Embedded Expo config must include a Supabase anon key when auth is enabled.');
      } else if (readJwtRole(expoConfig.extra.supabaseAnonKey) !== 'anon') {
        issues.push('Embedded Expo config Supabase key must be an anon JWT, never service_role.');
      }
    } else if (expoConfig?.extra?.supabaseUrl || expoConfig?.extra?.supabaseAnonKey) {
      issues.push('Guest-only embedded Expo config must omit Supabase credentials.');
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
