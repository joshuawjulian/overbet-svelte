import { writable } from "svelte/store";
import { supabase } from "$/lib/supabase";

export const userStore = writable(supabase.auth.user());
