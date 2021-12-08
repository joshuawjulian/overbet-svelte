import { supabase } from '$lib/supabase';
import type { CashGame } from '$lib/types';

export const getAll = async () => {
	const { data, error } = await supabase
		.from<CashGame>('cash_game')
		.select('*');
	if (error) throw new Error(error.message);
	return data;
};
export const get = async (cash_game_id: string) => {
	const { data, error } = await supabase
		.from<CashGame>('cash_game')
		.select('*')
		.match({ id: cash_game_id });

	if (error) throw new Error(error.message);

	return data[0];
};
export const save = async (cash_game: CashGame) => {
	if (cash_game.id === null) delete cash_game.id;

	const { data, error } = await supabase
		.from<CashGame>('cash_game')
		.upsert(cash_game);

	if (error) throw new Error(error.message);
	return data[0];
};

export const del = async (cash_game_id: string) => {
	const { error } = await supabase
		.from<CashGame>('cash_game')
		.delete()
		.match({ id: cash_game_id });

	if (error) throw new Error(error.message);
};
