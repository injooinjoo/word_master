create table if not exists public.answer_attempts (
  id bigint generated always as identity primary key,
  client_attempt_id uuid not null unique,
  user_id uuid not null references auth.users(id) on delete cascade,
  vocab_id text not null,
  quiz_type text not null check (quiz_type in ('e2k', 'k2e', 'e2e', 'syn', 'ant')),
  question_ordinal integer not null check (question_ordinal > 0),
  selected_choice text,
  was_correct boolean not null,
  answer_grade integer not null check (answer_grade between 0 and 5),
  response_quality double precision not null check (response_quality between 0 and 1),
  elapsed_ms integer not null check (elapsed_ms >= 0),
  total_ms integer not null check (total_ms > 0),
  hint_shown boolean not null default false,
  source_bucket text not null check (source_bucket in ('retry', 'due_review', 'weakness_target', 'exploration')),
  skill_before integer not null check (skill_before >= 0),
  skill_after integer not null check (skill_after >= 0),
  challenge_before integer not null check (challenge_before >= 0),
  challenge_after integer not null check (challenge_after >= 0),
  memory_strength_before integer not null check (memory_strength_before between 0 and 100),
  memory_strength_after integer not null check (memory_strength_after between 0 and 100),
  last_interval_hours_before double precision not null check (last_interval_hours_before >= 0),
  last_interval_hours_after double precision not null check (last_interval_hours_after >= 0),
  due_at_before timestamptz,
  next_review_at timestamptz not null,
  retry_due_question_ordinal integer check (retry_due_question_ordinal is null or retry_due_question_ordinal > 0),
  timed_out boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_answer_attempts_user_id_created_at
  on public.answer_attempts (user_id, created_at desc);

create table if not exists public.user_type_skill (
  user_id uuid not null references auth.users(id) on delete cascade,
  quiz_type text not null check (quiz_type in ('e2k', 'k2e', 'e2e', 'syn', 'ant')),
  skill_rating integer not null check (skill_rating >= 0),
  correct_count integer not null default 0 check (correct_count >= 0),
  wrong_count integer not null default 0 check (wrong_count >= 0),
  fast_correct_count integer not null default 0 check (fast_correct_count >= 0),
  fragile_correct_count integer not null default 0 check (fragile_correct_count >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, quiz_type)
);

create index if not exists idx_user_type_skill_user_id_updated_at
  on public.user_type_skill (user_id, updated_at desc);

create table if not exists public.user_word_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  vocab_id text not null,
  quiz_type text not null check (quiz_type in ('e2k', 'k2e', 'e2e', 'syn', 'ant')),
  challenge_rating integer not null check (challenge_rating >= 0),
  memory_strength integer not null check (memory_strength between 0 and 100),
  last_interval_hours double precision not null check (last_interval_hours >= 0),
  due_at timestamptz not null,
  seen_count integer not null default 0 check (seen_count >= 0),
  correct_streak integer not null default 0 check (correct_streak >= 0),
  wrong_streak integer not null default 0 check (wrong_streak >= 0),
  close_wrong_count integer not null default 0 check (close_wrong_count >= 0),
  hard_wrong_count integer not null default 0 check (hard_wrong_count >= 0),
  timeout_count integer not null default 0 check (timeout_count >= 0),
  last_seen_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, vocab_id, quiz_type)
);

create index if not exists idx_user_word_progress_user_id_due_at
  on public.user_word_progress (user_id, due_at asc);

create index if not exists idx_user_word_progress_user_id_updated_at
  on public.user_word_progress (user_id, updated_at desc);

alter table public.answer_attempts enable row level security;
alter table public.user_type_skill enable row level security;
alter table public.user_word_progress enable row level security;

drop policy if exists "answer_attempts_select_own" on public.answer_attempts;
create policy "answer_attempts_select_own"
  on public.answer_attempts
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "answer_attempts_insert_own" on public.answer_attempts;
create policy "answer_attempts_insert_own"
  on public.answer_attempts
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "answer_attempts_update_own" on public.answer_attempts;
create policy "answer_attempts_update_own"
  on public.answer_attempts
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "user_type_skill_select_own" on public.user_type_skill;
create policy "user_type_skill_select_own"
  on public.user_type_skill
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "user_type_skill_insert_own" on public.user_type_skill;
create policy "user_type_skill_insert_own"
  on public.user_type_skill
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "user_type_skill_update_own" on public.user_type_skill;
create policy "user_type_skill_update_own"
  on public.user_type_skill
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "user_word_progress_select_own" on public.user_word_progress;
create policy "user_word_progress_select_own"
  on public.user_word_progress
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "user_word_progress_insert_own" on public.user_word_progress;
create policy "user_word_progress_insert_own"
  on public.user_word_progress
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "user_word_progress_update_own" on public.user_word_progress;
create policy "user_word_progress_update_own"
  on public.user_word_progress
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
