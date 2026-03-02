import { createBrowserClient } from '@supabase/ssr';

//todo проверить можно ли это просто экспортировать из общего файла
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

export { createClient };
