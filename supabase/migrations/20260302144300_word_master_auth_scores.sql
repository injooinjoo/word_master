-- Word Master Supabase schema
-- Run this in Supabase SQL Editor for a new project.

create table if not exists public.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.score_submissions (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  composite_rating integer not null check (composite_rating >= 0),
  e2k_rating integer not null check (e2k_rating >= 0),
  k2e_rating integer not null check (k2e_rating >= 0),
  e2e_rating integer not null check (e2e_rating >= 0),
  syn_rating integer not null check (syn_rating >= 0),
  round_correct integer not null check (round_correct >= 0),
  round_total integer not null check (round_total >= 0),
  accuracy_percent integer not null check (accuracy_percent between 0 and 100),
  created_at timestamptz not null default now()
);

create index if not exists idx_score_submissions_user_id_created_at
  on public.score_submissions (user_id, created_at desc);

create index if not exists idx_score_submissions_composite_rating
  on public.score_submissions (composite_rating desc);

create or replace view public.score_leaderboard as
select
  dense_rank() over (
    order by max(s.composite_rating) desc, min(s.created_at) asc
  ) as rank,
  s.user_id,
  p.email,
  max(s.composite_rating) as best_composite_rating,
  count(*) as attempts,
  max(s.created_at) as last_submitted_at
from public.score_submissions s
left join public.user_profiles p on p.user_id = s.user_id
group by s.user_id, p.email;

alter table public.user_profiles enable row level security;
alter table public.score_submissions enable row level security;

-- Profiles: each user can read/write only their own profile row.
drop policy if exists "user_profiles_select_own" on public.user_profiles;
create policy "user_profiles_select_own"
  on public.user_profiles
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "user_profiles_insert_own" on public.user_profiles;
create policy "user_profiles_insert_own"
  on public.user_profiles
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "user_profiles_update_own" on public.user_profiles;
create policy "user_profiles_update_own"
  on public.user_profiles
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Scores: user can insert own score, authenticated users can read leaderboard data.
drop policy if exists "score_submissions_insert_own" on public.score_submissions;
create policy "score_submissions_insert_own"
  on public.score_submissions
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "score_submissions_select_all_authenticated" on public.score_submissions;
create policy "score_submissions_select_all_authenticated"
  on public.score_submissions
  for select
  to authenticated
  using (true);
