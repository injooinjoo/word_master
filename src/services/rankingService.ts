import type { QuizType } from './quizService';

export type RankingTrackedType = Exclude<QuizType, 'ant'>;

export interface TrackedRatings {
  e2k: number;
  k2e: number;
  e2e: number;
  syn: number;
}

export interface RankingSubmitPayload {
  userId: string;
  ratings: TrackedRatings;
  compositeRating: number;
}

export interface RankingSnapshot {
  rank: number;
  totalUsers: number;
  topPercentile: number;
  tierLabel: string;
  updatedAt?: string;
}

const RANKING_ANON_USER_ID_KEY = 'wm_ranking_user_id';
const GLOBAL_ANON_USER_ID_KEY = '__WM_RANKING_USER_ID__';
interface StorageLike {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
}

interface RankingApiResponse {
  rank?: number;
  totalUsers?: number;
  total_users?: number;
  topPercentile?: number;
  top_percentile?: number;
  tierLabel?: string;
  tier_label?: string;
  updatedAt?: string;
  updated_at?: string;
}

const RANKING_API_BASE_URL = (process.env.EXPO_PUBLIC_RANKING_API_BASE_URL ?? '').trim();

function createAnonymousUserId(): string {
  const time = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2, 10);
  return `anon-${time}-${random}`;
}

export function getRankingUserId(): string {
  const globalObj = globalThis as Record<string, unknown>;
  const existing = globalObj[GLOBAL_ANON_USER_ID_KEY];
  if (typeof existing === 'string' && existing.length > 0) {
    return existing;
  }

  const localStorageLike = (globalObj.localStorage as StorageLike | undefined) ?? undefined;
  if (localStorageLike) {
    try {
      const stored = localStorageLike.getItem(RANKING_ANON_USER_ID_KEY);
      if (stored && stored.length > 0) {
        globalObj[GLOBAL_ANON_USER_ID_KEY] = stored;
        return stored;
      }
      const created = createAnonymousUserId();
      localStorageLike.setItem(RANKING_ANON_USER_ID_KEY, created);
      globalObj[GLOBAL_ANON_USER_ID_KEY] = created;
      return created;
    } catch {
      // localStorage can fail in private mode or restricted environments.
    }
  }

  const created = createAnonymousUserId();
  globalObj[GLOBAL_ANON_USER_ID_KEY] = created;
  return created;
}

export function isRankingApiConfigured(): boolean {
  return RANKING_API_BASE_URL.length > 0;
}

function assertApiConfigured(): string {
  if (!isRankingApiConfigured()) {
    throw new Error('EXPO_PUBLIC_RANKING_API_BASE_URL is not configured.');
  }
  return RANKING_API_BASE_URL;
}

function clampPercentile(value: number): number {
  if (!Number.isFinite(value)) return 99.9;
  return Math.max(0.1, Math.min(99.9, value));
}

function normalizeSnapshot(raw: RankingApiResponse): RankingSnapshot {
  const rank = Math.max(1, Number(raw.rank ?? 0) || 1);
  const totalUsers = Math.max(1, Number(raw.totalUsers ?? raw.total_users ?? 0) || 1);
  const topPercentile = clampPercentile(
    Number(raw.topPercentile ?? raw.top_percentile ?? 99.9) || 99.9,
  );
  const tierLabel = String(raw.tierLabel ?? raw.tier_label ?? 'Unranked');
  const updatedAt = raw.updatedAt ?? raw.updated_at;
  return { rank, totalUsers, topPercentile, tierLabel, updatedAt };
}

async function parseResponse(response: Response): Promise<RankingApiResponse> {
  let body: unknown = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  if (!response.ok) {
    const detail =
      body && typeof body === 'object' && 'message' in body
        ? String((body as Record<string, unknown>).message)
        : `HTTP ${response.status}`;
    throw new Error(`Ranking API request failed: ${detail}`);
  }

  if (!body || typeof body !== 'object') {
    throw new Error('Ranking API returned an invalid response body.');
  }

  return body as RankingApiResponse;
}

export async function submitRanking(payload: RankingSubmitPayload): Promise<RankingSnapshot> {
  const baseUrl = assertApiConfigured();
  const response = await fetch(`${baseUrl}/ranking/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const raw = await parseResponse(response);
  return normalizeSnapshot(raw);
}

export async function fetchRanking(
  params: Pick<RankingSubmitPayload, 'userId' | 'compositeRating'>,
): Promise<RankingSnapshot> {
  const baseUrl = assertApiConfigured();
  const query = `userId=${encodeURIComponent(params.userId)}&compositeRating=${encodeURIComponent(
    String(params.compositeRating),
  )}`;
  const response = await fetch(`${baseUrl}/ranking/summary?${query}`);
  const raw = await parseResponse(response);
  return normalizeSnapshot(raw);
}
