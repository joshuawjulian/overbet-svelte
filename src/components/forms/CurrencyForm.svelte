<script lang="ts">
	import type { Currency } from '$/lib/types';
	import { createEventDispatcher, onMount } from 'svelte';
	import TextInput from './TextInput.svelte';
	import Button from '$/components/forms/Button.svelte';

	export let errMsg = null;

	let blankCurrency: Currency = {
		id: '',
		name: '',
		code: '',
		symbol: '',
	};

	const dispatch = createEventDispatcher();
	export let currency: Currency = blankCurrency;
</script>

<form on:submit|preventDefault>
	<TextInput label="Name" bind:value={currency.name} />
	<TextInput label="Code" bind:value={currency.code} />
	<TextInput label="Symbol" bind:value={currency.symbol} />
	{#if errMsg}
		<p class="error">{errMsg}</p>
	{/if}
	<Button on:clicked={() => dispatch('save', { currency })} label="Save" />

	<Button
		on:clicked={() => (currency = Object.assign({}, blankCurrency))}
		label="Reset/New"
	/>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 1rem;
	}
</style>
