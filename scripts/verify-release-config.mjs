#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { getConfig } from '@expo/config';
import {
  validateBuildProfileEnvs,
  validateResolvedExpoConfig,
  validateStoreConfig,
} from './release-config.shared.mjs';

function fail(message) {
  console.error(`[ERROR] ${message}`);
  process.exit(1);
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    fail(`Failed to parse ${path.basename(filePath)}: ${reason}`);
  }
}

const projectRoot = process.cwd();
const easJsonPath = path.join(projectRoot, 'eas.json');
const storeConfigPath = path.join(projectRoot, 'store.config.json');

if (!fs.existsSync(easJsonPath)) {
  fail(`Missing eas.json at ${easJsonPath}`);
}

if (!fs.existsSync(storeConfigPath)) {
  fail(`Missing store.config.json at ${storeConfigPath}`);
}

const easConfig = readJson(easJsonPath);
const storeConfig = readJson(storeConfigPath);
const { exp } = getConfig(projectRoot, {
  isPublicConfig: true,
  skipSDKVersionRequirement: true,
});

const issues = [
  ...validateBuildProfileEnvs(easConfig),
  ...validateResolvedExpoConfig(exp),
  ...validateStoreConfig(storeConfig),
];

if (issues.length > 0) {
  fail(`Release config validation failed:\n- ${issues.join('\n- ')}`);
}

console.log('[OK] Release config is valid.');
console.log(`name: ${exp.name}`);
console.log(`supportsTablet: ${String(exp.ios?.supportsTablet ?? false)}`);
console.log(`features: ${JSON.stringify(exp.extra?.features ?? {})}`);
