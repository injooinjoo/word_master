const { expo } = require('./app.json');

function resolveEnv(...keys) {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (trimmed.length > 0) {
        return trimmed;
      }
    }
  }
  return '';
}

const supabaseUrl = resolveEnv('EXPO_PUBLIC_SUPABASE_URL', 'SUPABASE_URL');
const supabaseAnonKey = resolveEnv(
  'EXPO_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_ANON_KEY',
);

module.exports = {
  ...expo,
  extra: {
    ...(expo.extra ?? {}),
    supabaseUrl,
    supabaseAnonKey,
  },
};
