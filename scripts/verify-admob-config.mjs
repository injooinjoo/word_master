#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

function fail(message) {
  console.error(`[ERROR] ${message}`);
  process.exit(1);
}

const appJsonPath = path.join(process.cwd(), 'app.json');
if (!fs.existsSync(appJsonPath)) {
  fail(`Missing app.json at ${appJsonPath}`);
}

let appConfig;
try {
  appConfig = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  fail(`Failed to parse app.json: ${reason}`);
}

const expoConfig = appConfig?.expo;
if (!expoConfig || typeof expoConfig !== 'object') {
  fail('Missing expo config object in app.json');
}

const plugins = Array.isArray(expoConfig.plugins) ? expoConfig.plugins : [];
const adMobPlugin = plugins.find(
  (plugin) => Array.isArray(plugin) && plugin[0] === 'react-native-google-mobile-ads',
);

if (!adMobPlugin || !Array.isArray(adMobPlugin)) {
  fail("Missing react-native-google-mobile-ads plugin entry in expo.plugins");
}

const adMobPluginConfig = adMobPlugin[1];
if (!adMobPluginConfig || typeof adMobPluginConfig !== 'object') {
  fail('Missing plugin options for react-native-google-mobile-ads');
}

const iosAppId = adMobPluginConfig.iosAppId;
if (typeof iosAppId !== 'string' || iosAppId.trim() === '') {
  fail("Missing iosAppId in react-native-google-mobile-ads plugin config");
}

const infoPlist = expoConfig.ios?.infoPlist;
if (!infoPlist || typeof infoPlist !== 'object') {
  fail('Missing expo.ios.infoPlist config');
}

const gadApplicationIdentifier = infoPlist.GADApplicationIdentifier;
if (
  typeof gadApplicationIdentifier !== 'string' ||
  gadApplicationIdentifier.trim() === ''
) {
  fail('Missing expo.ios.infoPlist.GADApplicationIdentifier');
}

if (iosAppId !== gadApplicationIdentifier) {
  fail(
    `Mismatch between iosAppId (${iosAppId}) and GADApplicationIdentifier (${gadApplicationIdentifier})`,
  );
}

console.log('[OK] AdMob iOS config is valid.');
console.log(`iosAppId: ${iosAppId}`);
console.log(`GADApplicationIdentifier: ${gadApplicationIdentifier}`);
