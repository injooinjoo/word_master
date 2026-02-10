/**
 * Simulated ranking service.
 *
 * Assumes user ratings follow a normal distribution:
 *   mean = 1200, stddev = 400
 * and a virtual population of 10 000 users.
 *
 * The distribution is calibrated so that:
 *   - ~50% of users are in Silver–Gold range (800–1449)
 *   - Top 1% are Diamond I+ (~2130+)
 *   - Bottom 5% are below Bronze II (~540)
 *
 * In production this would be replaced by a real backend query.
 */

const MEAN = 1200;
const STDDEV = 400;
const SIMULATED_TOTAL_USERS = 10_000;

// ── Normal CDF approximation (Abramowitz & Stegun) ──────────

/** Standard normal CDF Φ(x) — maximum error ~1.5 × 10⁻⁷ */
function standardNormalCdf(x: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  const absX = Math.abs(x);
  const t = 1.0 / (1.0 + p * absX);
  const y =
    1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp((-absX * absX) / 2);

  return 0.5 * (1.0 + sign * y);
}

/** CDF of N(mean, stddev) evaluated at x */
function normalCdf(x: number, mean: number, stddev: number): number {
  return standardNormalCdf((x - mean) / stddev);
}

// ── Public API ──────────────────────────────────────────────

/**
 * Returns the top-percentile for a given rating.
 * e.g. rating 1600 → roughly top 15.9% → returns 15.9
 * Lower number = better (top 1% is elite).
 */
export function getTopPercentile(rating: number): number {
  const cdf = normalCdf(rating, MEAN, STDDEV);
  const topPct = (1 - cdf) * 100;
  return Math.max(0.1, Math.min(99.9, topPct));
}

/**
 * Returns the estimated rank out of `totalUsers`.
 */
export function getRank(rating: number, totalUsers: number = SIMULATED_TOTAL_USERS): number {
  const pct = getTopPercentile(rating) / 100;
  return Math.max(1, Math.ceil(pct * totalUsers));
}

/** Convenience: total simulated user count (for display) */
export const TOTAL_USERS = SIMULATED_TOTAL_USERS;
