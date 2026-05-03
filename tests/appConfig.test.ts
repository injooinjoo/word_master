import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import test from 'node:test';

const require = createRequire(import.meta.url);
const appConfigPath = require.resolve('../app.config.js');

function loadConfigWithEnv(overrides: Record<string, string | undefined>) {
  const originalEnv = {
    APP_VARIANT: process.env.APP_VARIANT,
    EAS_BUILD_PROFILE: process.env.EAS_BUILD_PROFILE,
    EXPO_PUBLIC_ENABLE_AUTH: process.env.EXPO_PUBLIC_ENABLE_AUTH,
    EXPO_PUBLIC_ENABLE_SCORE_SYNC: process.env.EXPO_PUBLIC_ENABLE_SCORE_SYNC,
    EXPO_PUBLIC_ENABLE_ADS: process.env.EXPO_PUBLIC_ENABLE_ADS,
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  };

  for (const [key, value] of Object.entries(overrides)) {
    if (typeof value === 'undefined') {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }

  delete require.cache[appConfigPath];
  const loaded = require(appConfigPath);

  for (const [key, value] of Object.entries(originalEnv)) {
    if (typeof value === 'undefined') {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }

  delete require.cache[appConfigPath];
  return loaded;
}

test('development variant uses a distinct app identity', () => {
  const config = loadConfigWithEnv({
    APP_VARIANT: 'development',
    EXPO_PUBLIC_ENABLE_AUTH: 'true',
    EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'true',
    EXPO_PUBLIC_ENABLE_ADS: 'true',
  });

  assert.equal(config.name, 'Word Master Dev');
  assert.equal(config.ios?.bundleIdentifier, 'com.beyond.wordmaster.dev');
});

test('preview variant keeps the release app identity', () => {
  const config = loadConfigWithEnv({
    APP_VARIANT: 'preview',
    EXPO_PUBLIC_ENABLE_AUTH: 'true',
    EXPO_PUBLIC_ENABLE_SCORE_SYNC: 'false',
    EXPO_PUBLIC_ENABLE_ADS: 'false',
  });

  assert.equal(config.name, 'Word Master');
  assert.equal(config.ios?.bundleIdentifier, 'com.beyond.wordmaster');
});
