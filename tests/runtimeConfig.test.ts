import assert from 'node:assert/strict';
import test from 'node:test';
import { resolveAppFeatureFlags } from '../src/shared/config/appFeatures';
import {
  resolveResultVisibility,
  resolveSessionState,
} from '../src/shared/config/runtimeAvailability';

test('resolveAppFeatureFlags coerces booleans from expo extra values', () => {
  const flags = resolveAppFeatureFlags({
    authEnabled: 'false',
    scoreSyncEnabled: true,
    adsEnabled: '0',
  });

  assert.deepEqual(flags, {
    authEnabled: false,
    scoreSyncEnabled: true,
    adsEnabled: false,
  });
});

test('resolveSessionState keeps auth-enabled app in guest quiz mode by default', () => {
  const state = resolveSessionState({
    authEnabled: true,
    guestMode: true,
    hasUser: false,
  });

  assert.equal(state.isGuestSession, true);
  assert.equal(state.shouldShowAuthScreen, false);
});

test('resolveResultVisibility shows guest login action when auth is available', () => {
  const state = resolveResultVisibility({
    authEnabled: true,
    scoreSyncEnabled: false,
    isGuestSession: true,
  });

  assert.deepEqual(state, {
    showScoreSync: false,
    showLeaderboard: false,
    showGuestSignInAction: true,
    showSignedInAccountAction: false,
  });
});

test('resolveResultVisibility shows sign out action for signed-in sessions', () => {
  const state = resolveResultVisibility({
    authEnabled: true,
    scoreSyncEnabled: false,
    isGuestSession: false,
  });

  assert.deepEqual(state, {
    showScoreSync: false,
    showLeaderboard: false,
    showGuestSignInAction: false,
    showSignedInAccountAction: true,
  });
});

test('resolveResultVisibility falls back to guest-only mode when auth is unavailable', () => {
  const state = resolveResultVisibility({
    authEnabled: false,
    scoreSyncEnabled: false,
    isGuestSession: true,
  });

  assert.deepEqual(state, {
    showScoreSync: false,
    showLeaderboard: false,
    showGuestSignInAction: false,
    showSignedInAccountAction: false,
  });
});
