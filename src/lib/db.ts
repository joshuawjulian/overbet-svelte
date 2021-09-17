import { supabase } from "./supabase";
import type { definitions } from "$/lib/types";

export const logIn = async (email: string, password: string) => {
  return await supabase.auth.signIn({
    email,
    password,
  });
};

type user_roles = definitions["user_roles"];

export const getUserRole = async (uuid: string) => {
  let { data, error } = await supabase
    .from<user_roles>("user_roles")
    .select("role")
    .match({ id: uuid })
    .limit(1);

  if (error) throw new Error(error.message);

  return data[0].role;
};
