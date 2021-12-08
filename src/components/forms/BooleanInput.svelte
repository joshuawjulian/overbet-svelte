<script lang="ts">
	import { onMount } from 'svelte';
	import { randomString } from '$/lib/utils';

	export let checked: boolean = false;
	export let label: string = '';
	export let id: string = null;

	onMount(() => {
		if (id === null) id = randomString();
	});
</script>

<section>
	<input type="checkbox" bind:checked {id} />
	<label for={id}>{label}</label>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		padding-top: calc(1.5rem);
	}
</style>
