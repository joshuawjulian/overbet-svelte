import { supabase } from '$/lib/supabase';

export const logIn = async (email: string, password: string) => {
	return await supabase.auth.signIn({
		email,
		password,
	});
};

export const getUserLevel = async (userId: string): Promise<number> => {
	console.log(`getUserLevel(${userId})`);
	let { data, error } = await supabase.rpc('get_user_level', { id: userId });
	if (error) console.error(error);
	else console.log(`rpc returned = ${data}`);

	let level = 0;
	if (Array.isArray(data)) level = data[0];
	else level = data;
	return level;
};
