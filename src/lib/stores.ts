import { writable } from 'svelte/store';
import { supabase } from '$/lib/supabase';
import type { AuthChangeEvent, Session } from '@supabase/gotrue-js';
import type { OBUser } from './types';

export const userStore = writable<OBUser>({ supabase_user: null });

supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session) => {
	userStore.set({
		supabase_user: supabase.auth.user(),
	});
});
