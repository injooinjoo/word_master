export const CHARACTER_TEXT_LIMIT = 20;

export const HAIR_STYLE_VALUES = ['short', 'bob', 'tuft'] as const;
export const HAIR_COLOR_VALUES = ['teal', 'amber', 'charcoal', 'rose'] as const;
export const EXPRESSION_VALUES = ['smile', 'wink', 'calm'] as const;
export const OUTFIT_COLOR_VALUES = ['mint', 'sky', 'gold', 'coral'] as const;

export type HairStyleId = (typeof HAIR_STYLE_VALUES)[number];
export type HairColorId = (typeof HAIR_COLOR_VALUES)[number];
export type ExpressionId = (typeof EXPRESSION_VALUES)[number];
export type OutfitColorId = (typeof OUTFIT_COLOR_VALUES)[number];

export interface CharacterAvatarConfig {
  hairStyle: HairStyleId;
  hairColor: HairColorId;
  expression: ExpressionId;
  outfitColor: OutfitColorId;
}

export interface CharacterProfile {
  avatar: CharacterAvatarConfig;
  likes: string;
  dislikes: string;
  updatedAt: string | null;
}

export interface CharacterOption<Value extends string> {
  value: Value;
  label: string;
  swatch?: string;
}

export const CHARACTER_HAIR_STYLE_OPTIONS: CharacterOption<HairStyleId>[] = [
  { value: 'short', label: '숏' },
  { value: 'bob', label: '보브' },
  { value: 'tuft', label: '포인트' },
];

export const CHARACTER_HAIR_COLOR_OPTIONS: CharacterOption<HairColorId>[] = [
  { value: 'teal', label: '틸', swatch: '#138D90' },
  { value: 'amber', label: '앰버', swatch: '#D68A18' },
  { value: 'charcoal', label: '차콜', swatch: '#34424F' },
  { value: 'rose', label: '로즈', swatch: '#D26A79' },
];

export const CHARACTER_EXPRESSION_OPTIONS: CharacterOption<ExpressionId>[] = [
  { value: 'smile', label: '스마일' },
  { value: 'wink', label: '윙크' },
  { value: 'calm', label: '차분' },
];

export const CHARACTER_OUTFIT_COLOR_OPTIONS: CharacterOption<OutfitColorId>[] = [
  { value: 'mint', label: '민트', swatch: '#7ECFB4' },
  { value: 'sky', label: '스카이', swatch: '#5CA8EB' },
  { value: 'gold', label: '골드', swatch: '#E0A11C' },
  { value: 'coral', label: '코랄', swatch: '#E57C63' },
];

const DEFAULT_PROFILE: CharacterProfile = {
  avatar: {
    hairStyle: 'short',
    hairColor: 'teal',
    expression: 'smile',
    outfitColor: 'mint',
  },
  likes: '',
  dislikes: '',
  updatedAt: null,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function sanitizeChoice<Value extends string>(
  value: unknown,
  allowed: readonly Value[],
  fallback: Value,
): Value {
  return typeof value === 'string' && allowed.includes(value as Value) ? (value as Value) : fallback;
}

function sanitizeText(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').replace(/\n/g, ' ').trim().slice(0, CHARACTER_TEXT_LIMIT);
}

function sanitizeUpdatedAt(value: unknown): string | null {
  if (typeof value !== 'string' || value.trim().length === 0) return null;
  return Number.isNaN(new Date(value).getTime()) ? null : value;
}

export function createDefaultCharacterProfile(): CharacterProfile {
  return {
    avatar: { ...DEFAULT_PROFILE.avatar },
    likes: DEFAULT_PROFILE.likes,
    dislikes: DEFAULT_PROFILE.dislikes,
    updatedAt: DEFAULT_PROFILE.updatedAt,
  };
}

export function sanitizeCharacterProfile(input: unknown): CharacterProfile {
  const fallback = createDefaultCharacterProfile();
  if (!isRecord(input)) return fallback;

  const avatarSource = isRecord(input.avatar) ? input.avatar : {};

  return {
    avatar: {
      hairStyle: sanitizeChoice(avatarSource.hairStyle, HAIR_STYLE_VALUES, fallback.avatar.hairStyle),
      hairColor: sanitizeChoice(avatarSource.hairColor, HAIR_COLOR_VALUES, fallback.avatar.hairColor),
      expression: sanitizeChoice(
        avatarSource.expression,
        EXPRESSION_VALUES,
        fallback.avatar.expression,
      ),
      outfitColor: sanitizeChoice(
        avatarSource.outfitColor,
        OUTFIT_COLOR_VALUES,
        fallback.avatar.outfitColor,
      ),
    },
    likes: sanitizeText(input.likes),
    dislikes: sanitizeText(input.dislikes),
    updatedAt: sanitizeUpdatedAt(input.updatedAt),
  };
}

export function parseStoredCharacterProfile(raw: string | null): CharacterProfile | null {
  if (raw == null) return null;

  try {
    return sanitizeCharacterProfile(JSON.parse(raw));
  } catch {
    return createDefaultCharacterProfile();
  }
}

export function stampCharacterProfile(profile: CharacterProfile, updatedAt: string): CharacterProfile {
  return sanitizeCharacterProfile({
    ...profile,
    updatedAt,
  });
}

function toTimestamp(value: string | null): number {
  if (!value) return Number.NEGATIVE_INFINITY;
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? Number.NEGATIVE_INFINITY : time;
}

export function pickNewerCharacterProfile(
  left: CharacterProfile | null,
  right: CharacterProfile | null,
): CharacterProfile | null {
  if (!left) return right ? sanitizeCharacterProfile(right) : null;
  if (!right) return sanitizeCharacterProfile(left);

  const leftTime = toTimestamp(left.updatedAt);
  const rightTime = toTimestamp(right.updatedAt);
  if (rightTime >= leftTime) {
    return sanitizeCharacterProfile(right);
  }
  return sanitizeCharacterProfile(left);
}

export function resolveCharacterProfileForSession(options: {
  guestProfile: CharacterProfile | null;
  userProfile: CharacterProfile | null;
  remoteProfile: CharacterProfile | null;
}): CharacterProfile {
  const freshest = pickNewerCharacterProfile(options.userProfile, options.remoteProfile);
  if (freshest) return freshest;
  if (options.guestProfile) return sanitizeCharacterProfile(options.guestProfile);
  return createDefaultCharacterProfile();
}
