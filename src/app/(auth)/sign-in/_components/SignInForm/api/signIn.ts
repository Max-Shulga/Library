import { createClient } from '../../../../../../lib/supabase/client';

import type { TSignIn } from '../model/signInForm.model';

const signIn = async ({ email, password }: TSignIn) => {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error };
};

export { signIn };
