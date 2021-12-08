<script lang="ts">
	import type { Currency } from '$lib/types';
	import CurrencyForm from '$/components/forms/CurrencyForm.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import * as locdb from '$/lib/db/currency';

	let currencyList = writable([]);
	let errorMessage = null;

	let currCurrency: Currency;

	const updateCurrencyList = async () => {
		let list = [];
		errorMessage = null;
		try {
			list = await locdb.getAll();
			list.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
			currencyList.set(list);
		} catch (errmsg) {
			errorMessage = errmsg;
		}
	};

	const saveCurrency = async (currency: Currency) => {
		errorMessage = null;
		try {
			currCurrency = await locdb.save(currency);
			await updateCurrencyList();
		} catch (error) {
			errorMessage = error;
		}
	};

	const editCurrency = async (currency_id: string) => {
		errorMessage = null;

		try {
			currCurrency = await locdb.get(currency_id);
		} catch (error) {
			errorMessage = error;
		}
	};

	const deleteCurrency = async (currency_id: string) => {
		errorMessage = null;
		try {
			await locdb.del(currency_id);
			await updateCurrencyList();
		} catch (error) {
			errorMessage = error;
		}
	};

	onMount(async () => {
		await updateCurrencyList();
	});
</script>

<CurrencyForm
	bind:currency={currCurrency}
	on:save={async () => saveCurrency(currCurrency)}
	errMsg={errorMessage}
/>
{#each $currencyList as currency}
	<p>
		<a
			href="/"
			on:click|preventDefault={async () => await editCurrency(currency.id)}
		>
			{currency.name}</a
		>
		<a
			href="/"
			on:click|preventDefault={async () => await deleteCurrency(currency.id)}
			>XXX</a
		>
	</p>
{/each}
