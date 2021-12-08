import type { User } from '@supabase/gotrue-js';

export interface Location {
	id?: string;
	name: string;
	timezone?: string;
	address?: string;
	is_online: boolean;
	lat?: number;
	long?: number;
	created_by?: string | null;
	owner_id?: string;
	is_public: boolean;
}

export interface Currency {
	id: string;
	name: string;
	code: string;
	symbol: string;
}

export const USCurrency: Currency = {
	id: '63edbf61-fdd9-44d7-ae13-da8a76ed609f',
	name: 'US Dollar',
	code: 'USD',
	symbol: '$',
};

export interface CashGame {
	id?: string;
	name: string;
	description?: string;
	currency_id: Currency;
	largest_blind?: number;
	max_buyin?: number;
	uncapped: boolean;
	match_the_stack: boolean;
	match_the_stack_percentage?: number;
	max_number_players: number;
}

export interface LocationCashGame {
	id?: string;
	cash_game_id: CashGame;
	location_id: Location;
}

export interface OBUser {
	supabase_user: User;
}
