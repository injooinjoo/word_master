# Word Master — Agent Guide

Adaptive English vocabulary quiz app. React Native 0.81.5 + Expo 54 + React 19 + TypeScript (strict) + Supabase. Korean UI, iOS-first, App Store target.

Tests: `npm test` (Node's built-in test runner via `tsx`). Type check: `npx tsc --noEmit`.

---

## Review-on-every-edit protocol (MANDATORY)

This project uses a roster of specialized review subagents in `.claude/agents/`. Code quality is enforced by **routing every meaningful edit through the right reviewers**. The user has explicitly asked for **detailed, frequent, multi-agent review** at every step.

### When to dispatch reviewers

After any edit that is NOT a trivial typo / comment change:

1. **First**, call the `review-router` agent with the file paths just changed. It returns a routing plan (which specialists to run, with reasons).
2. **Then**, dispatch every agent in the routing plan in **parallel** (one Agent tool call per agent in a single message). Each runs read-only.
3. **Synthesize** the findings into a single P0/P1/P2 list for the user. Do NOT just dump raw outputs.

For trivial edits (single-line fix, comment, doc typo), skip routing and proceed.

### Edit batches

If you make multiple edits in sequence, batch them: complete the logical change set, THEN dispatch reviewers once for the whole batch. Do not call reviewers between every Edit tool call within the same task.

### Routing quick-reference

If you skip the router (because the diff is small and the right specialists are obvious), here's the manual routing table:

| File pattern | Always-run reviewers |
|---|---|
| `src/services/adaptiveProgressService.ts` | `adaptive-math-reviewer`, `offline-queue-reviewer`, `error-handling-reviewer`, `type-strictness-reviewer` |
| `src/services/quizService.ts` | `adaptive-math-reviewer`, `error-handling-reviewer`, `type-strictness-reviewer` |
| `src/services/storageService.ts` | `offline-queue-reviewer`, `error-handling-reviewer` |
| `src/services/scoreService.ts` | `offline-queue-reviewer`, `supabase-rls-reviewer`, `schema-drift-reviewer`, `error-handling-reviewer` |
| `src/services/authService.ts` | `security-reviewer`, `error-handling-reviewer` |
| `src/services/supabase.ts` | `security-reviewer` |
| `src/features/**/*.tsx` | `rn-state-reviewer`, `a11y-reviewer`, `tokens-consistency-reviewer`, `design-fidelity-reviewer`, `i18n-korean-reviewer`, `rn-perf-reviewer`, `type-strictness-reviewer` |
| `src/shared/ui/**` | `tokens-consistency-reviewer`, `design-fidelity-reviewer`, `a11y-reviewer`, `type-strictness-reviewer` |
| `src/entry/App.tsx` | `rn-state-reviewer`, `navigation-reviewer`, `type-strictness-reviewer` |
| `supabase/migrations/**`, `docs/supabase_schema.sql` | `supabase-rls-reviewer`, `schema-drift-reviewer` |
| `app.config.js`, `eas.json`, `store.config.json`, `scripts/release-config*.mjs`, `scripts/inspect-ios-ipa.mjs` | `release-config-reviewer`, `ios-platform-reviewer`, `security-reviewer` |
| `tests/**` | `test-quality-reviewer` |
| Any iOS-API touch (`Platform.OS`, `Vibration`, `Speech`, `Linking`, `Modal`, `SafeAreaView`) | + `ios-platform-reviewer` |
| 3+ TS/TSX files in one batch | + `dead-code-reviewer` |

### How to dispatch in parallel

In a single assistant message, place multiple `Agent` tool calls. Example:

```
Agent({ subagent_type: "rn-state-reviewer", description: "...", prompt: "Review changes to <files>..." })
Agent({ subagent_type: "tokens-consistency-reviewer", description: "...", prompt: "..." })
Agent({ subagent_type: "a11y-reviewer", description: "...", prompt: "..." })
```

Provide each reviewer the **list of changed files** and the **rationale for the change**. Don't give raw diffs unless asked.

### Synthesis format

After all reviewers return, summarize as:

```
🔍 Review summary (<n> agents)

P0 — must fix before commit
- [agent] file:line — issue (one line fix)

P1 — fix soon
- ...

P2 — nits
- ...

✅ No findings: <list of agents that were clean>
```

If P0 issues exist, fix them in the same turn (then re-run the affected reviewer to confirm). Don't ship P0.

---

## Project hard rules

- **No Figma code.** All Figma preview / capture / Code Connect references have been removed. Do not reintroduce.
- **No service-role Supabase keys** in client code. Anon-only. Verified at startup.
- **Korean is the primary UI language.** Keep tone consistent (해요체 unless the screen has reason otherwise).
- **Tokens before raw values.** Hex/RGBA literals are forbidden outside `src/shared/constants/theme.ts` and the design `tokens.css` mirror.
- **App Store first.** Production builds: guest-default, no ads, no leaderboard. Release/IPA validators must agree — historically they've contradicted each other and blocked TestFlight.
- **Adaptive math is sacred.** Never round small deltas, never block SRS interval shrinkage on wrong answers, retry-queue keeps the LATER ordinal.
- **Offline queue must mutex.** Two simultaneous flushes corrupt user_word_progress.

## Useful commands

- `npm test` — full test suite (41 tests last green)
- `npx tsc --noEmit` — type check
- `npm run check:release-config` — validate EAS profile gating
- `npm run check:ipa -- /path/to/build.ipa` — validate built artifact
- `npm start` — Expo dev (port 8082, offline mode)

## File-tree quick map

- `src/entry/App.tsx` — root, screen state machine
- `src/features/{home,auth,profile,quiz}/` — feature screens
- `src/services/` — Supabase + adaptive logic + storage
- `src/shared/{ui,components,constants,config,models}/` — design system + cross-cutting
- `src/data/vocab/` — vocabulary data (word lists)
- `supabase/migrations/` — DB schema (canonical)
- `docs/supabase_schema.sql` — schema doc (must mirror migrations)
- `tests/` — service + util unit tests
- `.claude/agents/` — review subagents (this protocol)
