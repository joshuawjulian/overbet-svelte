<script lang="ts">
	import type { CashGame, Currency } from '$/lib/types';
	import { USCurrency } from '$/lib/types';
	import TextInput from './TextInput.svelte';

	let blankCashGame: CashGame = {
		name: '',
		description: '',
		currency_id: USCurrency,
		uncapped: false,
		match_the_stack: false,
		max_number_players: 9,
	};

	export let cash_game: CashGame = blankCashGame;
</script>

<form on:submit|preventDefault>
	<TextInput label="Name" bind:value={cash_game.name} />
</form>

<style>
	form {
		display: block;
		width: 100%;
		padding: 1rem;
	}
</style>
