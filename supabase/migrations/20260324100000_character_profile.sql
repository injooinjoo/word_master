alter table public.user_profiles
  add column if not exists character_profile jsonb;

alter table public.user_profiles
  add column if not exists character_updated_at timestamptz;
