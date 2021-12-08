import { supabase } from '$lib/supabase';
import type { Currency } from '$lib/types';

export const getAll = async () => {
	const { data, error } = await supabase.from<Currency>('currency').select('*');
	if (error) throw new Error(error.message);
	return data;
};
export const get = async (currency_id: string) => {
	const { data, error } = await supabase
		.from<Currency>('currency')
		.select('*')
		.match({ id: currency_id });

	if (error) throw new Error(error.message);

	return data[0];
};
export const save = async (currency: Currency) => {
	if (currency.id === null) delete currency.id;

	const { data, error } = await supabase
		.from<Currency>('currency')
		.upsert(currency);

	if (error) throw new Error(error.message);
	return data[0];
};

export const del = async (currency_id: string) => {
	const { error } = await supabase
		.from<Currency>('currency')
		.delete()
		.match({ id: currency_id });

	if (error) throw new Error(error.message);
};
