<script lang="ts">
	import { randomString } from '$lib/utils';

	import { onMount } from 'svelte';

	export let items = [];
	export let label: string | null = '';
	export let id: string | null = null;
	export let name = '';
	export let value = '';
	export let valueIndex = 0;
	export let validChoice = true;
	export let allowCustomChoices = false;

	const inputChange = () => {
		valueIndex = items.findIndex((item) => {
			return item === value;
		});

		if (!value) {
			validChoice = true;
			return;
		}

		if (valueIndex === -1 && !allowCustomChoices) {
			validChoice = false;
			return;
		}

		validChoice = true;
	};

	$: {
		if (value || !value) inputChange();
	}
	onMount(() => {
		if (id === null) id = randomString();
	});
</script>

<section>
	<input list={`data${id}`} {id} class:badInput={!validChoice} bind:value />
	<label for={id}>{label}</label>
	<datalist id={`data${id}`}>
		{#each items as item}
			<option value={item}>{item}</option>
		{/each}
	</datalist>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		padding-top: calc(1.5rem);
	}

	label {
		position: absolute;
		padding: 0.25rem 1rem;
		background-color: var(--color-pri--dark);

		transition-property: top, background-color;
		transition-duration: 500ms;
		transition-timing-function: ease;
		top: calc(1.25rem + 6px);
		left: 0;
		border-radius: 6px;
	}
	input {
		padding: calc(1.25rem + 6px) 1rem calc(0.75rem - 6px) 1rem;
		border: 6px solid var(--color-pri--dark);
		border-radius: 6px;
		background-color: var(--color-bg--light);
		transition-property: border, padding;
		transition-duration: 500ms;
		transition-timing-function: ease;
		width: 100%;
		font-size: inherit;
	}
	input:focus {
		border-color: var(--color-pri);
		padding: 1rem;
	}

	input:focus + label {
		top: calc((1.25rem + 6px) / 2);
		background-color: var(--color-pri);
	}

	input.badInput,
	input.badInput:focus {
		border-color: red;
	}

	input.badInput:focus + label,
	input.badInput + label {
		background-color: red;
	}
</style>
