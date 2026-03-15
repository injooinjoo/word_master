import { isSupabaseConfigured, supabase } from './supabase';

export interface ScorePayload {
  userId: string;
  email: string | null;
  compositeRating: number;
  ratings: {
    e2k: number;
    k2e: number;
    e2e: number;
    syn: number;
  };
  roundCorrect: number;
  roundTotal: number;
}

export interface PersonalBestScore {
  compositeRating: number;
  createdAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  email: string | null;
  bestCompositeRating: number;
  attempts: number;
  lastSubmittedAt: string;
}

interface LeaderboardRow {
  rank?: number;
  user_id: string;
  email?: string | null;
  best_composite_rating: number;
  attempts: number;
  last_submitted_at: string;
}

interface SubmissionRow {
  user_id: string;
  composite_rating: number;
  created_at: string;
}

function requireClient() {
  if (!isSupabaseConfigured() || !supabase) {
    throw new Error('Supabase is not configured.');
  }
  return supabase;
}

function asMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && error.message) return error.message;
  return fallback;
}

function toLeaderboardEntry(row: LeaderboardRow, fallbackRank: number): LeaderboardEntry {
  return {
    rank: row.rank ?? fallbackRank,
    userId: row.user_id,
    email: row.email ?? null,
    bestCompositeRating: row.best_composite_rating,
    attempts: row.attempts,
    lastSubmittedAt: row.last_submitted_at,
  };
}

export function isScoreSyncAvailable(): boolean {
  return isSupabaseConfigured();
}

export async function submitScore(payload: ScorePayload): Promise<void> {
  if (payload.roundTotal <= 0) {
    // Guard against empty sessions (pause/exit before first answer).
    return;
  }

  const client = requireClient();

  const accuracyPercent =
    payload.roundTotal > 0 ? Math.round((payload.roundCorrect / payload.roundTotal) * 100) : 0;

  const { error: profileError } = await client.from('user_profiles').upsert(
    {
      user_id: payload.userId,
      email: payload.email,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' },
  );

  if (profileError) {
    // Profile sync failure should not block score submission.
    console.warn('profile upsert failed:', profileError.message);
  }

  const { error } = await client.from('score_submissions').insert({
    user_id: payload.userId,
    composite_rating: payload.compositeRating,
    e2k_rating: payload.ratings.e2k,
    k2e_rating: payload.ratings.k2e,
    e2e_rating: payload.ratings.e2e,
    syn_rating: payload.ratings.syn,
    round_correct: payload.roundCorrect,
    round_total: payload.roundTotal,
    accuracy_percent: accuracyPercent,
  });

  if (error) {
    throw new Error(asMessage(error, '점수 저장에 실패했습니다.'));
  }
}

export async function fetchPersonalBestScore(userId: string): Promise<PersonalBestScore | null> {
  const client = requireClient();
  const { data, error } = await client
    .from('score_submissions')
    .select('composite_rating, created_at')
    .eq('user_id', userId)
    .order('composite_rating', { ascending: false })
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) {
    throw new Error(asMessage(error, '내 점수 조회에 실패했습니다.'));
  }

  const row = data?.[0];
  if (!row) return null;

  return {
    compositeRating: Number(row.composite_rating),
    createdAt: String(row.created_at),
  };
}

async function fetchLeaderboardFromView(limit: number): Promise<LeaderboardEntry[] | null> {
  const client = requireClient();
  const { data, error } = await client
    .from('score_leaderboard')
    .select('rank, user_id, email, best_composite_rating, attempts, last_submitted_at')
    .order('rank', { ascending: true })
    .limit(limit);

  if (error) {
    return null;
  }

  const rows = (data ?? []) as LeaderboardRow[];
  return rows.map((row, index) => toLeaderboardEntry(row, index + 1));
}

async function fetchLeaderboardFromRaw(limit: number): Promise<LeaderboardEntry[]> {
  const client = requireClient();
  const { data, error } = await client
    .from('score_submissions')
    .select('user_id, composite_rating, created_at')
    .order('composite_rating', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(limit * 20);

  if (error) {
    throw new Error(asMessage(error, '리더보드 조회에 실패했습니다.'));
  }

  const rows = (data ?? []) as SubmissionRow[];
  const bestByUser = new Map<
    string,
    { userId: string; best: number; attempts: number; lastSubmittedAt: string }
  >();

  for (const row of rows) {
    const userId = row.user_id;
    const score = Number(row.composite_rating);
    const at = String(row.created_at);
    const existing = bestByUser.get(userId);

    if (!existing) {
      bestByUser.set(userId, {
        userId,
        best: score,
        attempts: 1,
        lastSubmittedAt: at,
      });
      continue;
    }

    existing.attempts += 1;
    if (score > existing.best) {
      existing.best = score;
    }
    if (at > existing.lastSubmittedAt) {
      existing.lastSubmittedAt = at;
    }
  }

  const sorted = [...bestByUser.values()].sort((a, b) => {
    if (b.best !== a.best) return b.best - a.best;
    return a.lastSubmittedAt.localeCompare(b.lastSubmittedAt);
  });

  return sorted.slice(0, limit).map((entry, index) => ({
    rank: index + 1,
    userId: entry.userId,
    email: null,
    bestCompositeRating: entry.best,
    attempts: entry.attempts,
    lastSubmittedAt: entry.lastSubmittedAt,
  }));
}

export async function fetchLeaderboard(limit = 10): Promise<LeaderboardEntry[]> {
  const fromView = await fetchLeaderboardFromView(limit);
  if (fromView) return fromView;
  return fetchLeaderboardFromRaw(limit);
}
