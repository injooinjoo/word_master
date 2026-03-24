import assert from 'node:assert/strict';
import test from 'node:test';
import {
  CHARACTER_TEXT_LIMIT,
  createDefaultCharacterProfile,
  parseStoredCharacterProfile,
  resolveCharacterProfileForSession,
  sanitizeCharacterProfile,
} from '../src/shared/models/characterProfile';

test('createDefaultCharacterProfile returns the same defaults each time', () => {
  const first = createDefaultCharacterProfile();
  const second = createDefaultCharacterProfile();

  assert.deepEqual(first, second);
  assert.notEqual(first, second);
  assert.notEqual(first.avatar, second.avatar);
});

test('parseStoredCharacterProfile falls back to defaults when stored json is broken', () => {
  const parsed = parseStoredCharacterProfile('{not-json');

  assert.deepEqual(parsed, createDefaultCharacterProfile());
});

test('sanitizeCharacterProfile trims and limits preference text', () => {
  const profile = sanitizeCharacterProfile({
    avatar: {
      hairStyle: 'bob',
      hairColor: 'rose',
      expression: 'wink',
      outfitColor: 'gold',
    },
    likes: `  민트색\n퍼즐  ${'x'.repeat(32)}`,
    dislikes: '  시간 초과   ',
    updatedAt: '2026-03-24T10:00:00.000Z',
  });

  assert.equal(profile.likes.length, CHARACTER_TEXT_LIMIT);
  assert.equal(profile.likes.includes('\n'), false);
  assert.equal(profile.dislikes, '시간 초과');
});

test('parseStoredCharacterProfile round-trips a saved profile payload', () => {
  const original = sanitizeCharacterProfile({
    avatar: {
      hairStyle: 'tuft',
      hairColor: 'charcoal',
      expression: 'calm',
      outfitColor: 'coral',
    },
    likes: '빠른 진행',
    dislikes: '소음',
    updatedAt: '2026-03-24T09:30:00.000Z',
  });

  const parsed = parseStoredCharacterProfile(JSON.stringify(original));

  assert.deepEqual(parsed, original);
});

test('resolveCharacterProfileForSession prefers the newest profile and uses guest as seed', () => {
  const guest = sanitizeCharacterProfile({
    ...createDefaultCharacterProfile(),
    likes: '퍼즐',
    updatedAt: '2026-03-24T08:00:00.000Z',
  });
  const userCache = sanitizeCharacterProfile({
    ...createDefaultCharacterProfile(),
    likes: '문장 만들기',
    updatedAt: '2026-03-24T09:00:00.000Z',
  });
  const remote = sanitizeCharacterProfile({
    ...createDefaultCharacterProfile(),
    dislikes: '시간 초과',
    updatedAt: '2026-03-24T10:00:00.000Z',
  });

  assert.deepEqual(
    resolveCharacterProfileForSession({
      guestProfile: guest,
      userProfile: null,
      remoteProfile: null,
    }),
    guest,
  );

  assert.deepEqual(
    resolveCharacterProfileForSession({
      guestProfile: guest,
      userProfile: userCache,
      remoteProfile: remote,
    }),
    remote,
  );

  assert.deepEqual(
    resolveCharacterProfileForSession({
      guestProfile: guest,
      userProfile: userCache,
      remoteProfile: sanitizeCharacterProfile({
        ...remote,
        updatedAt: userCache.updatedAt,
      }),
    }),
    sanitizeCharacterProfile({
      ...remote,
      updatedAt: userCache.updatedAt,
    }),
  );
});
