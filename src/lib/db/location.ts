import { supabase } from '$lib/supabase';
import type { Location } from '$lib/types';

export const getAll = async () => {
	let { data, error } = await supabase.from<Location>('location').select('*');

	if (error) throw new Error(error.message);

	return data;
};

export const save = async (location: Location) => {
	if (location.id === null) delete location.id;
	if (location.created_by === null) delete location.created_by;
	const { data, error } = await supabase
		.from<Location>('location')
		.upsert(location);

	if (error) throw new Error(error.message);
	return data[0];
};

export const get = async (location_id: string) => {
	const { data, error } = await supabase
		.from<Location>('location')
		.select('*')
		.match({ id: location_id });

	if (error) throw new Error(error.message);

	return data[0];
};

export const del = async (location_id: string) => {
	const { error } = await supabase
		.from<Location>('location')
		.delete()
		.match({ id: location_id });

	if (error) throw new Error(error.message);
};
