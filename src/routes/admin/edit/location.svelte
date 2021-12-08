<script lang="ts">
	import type { Location } from '$lib/types';
	import LocationForm from '$/components/forms/LocationForm.svelte';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import * as locdb from '$/lib/db/location';

	let locationList = writable([]);
	let errorMessage = null;

	let currLocation: Location;

	const updateLocationList = async () => {
		let list = [];
		errorMessage = null;
		try {
			list = await locdb.getAll();
			list.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
			locationList.set(list);
		} catch (errmsg) {
			errorMessage = errmsg;
		}
	};

	const saveLocation = async (location: Location) => {
		errorMessage = null;
		try {
			currLocation = await locdb.save(location);
			await updateLocationList();
		} catch (error) {
			errorMessage = error;
		}
	};

	const editLocation = async (location_id: string) => {
		errorMessage = null;

		try {
			currLocation = await locdb.get(location_id);
		} catch (error) {
			errorMessage = error;
		}
	};

	const deleteLocation = async (location_id: string) => {
		errorMessage = null;
		try {
			await locdb.del(location_id);
			await updateLocationList();
		} catch (error) {
			errorMessage = error;
		}
	};

	onMount(async () => {
		await updateLocationList();
	});
</script>

<LocationForm
	bind:location={currLocation}
	on:save={async () => saveLocation(currLocation)}
	errMsg={errorMessage}
/>
{#each $locationList as location}
	<p>
		<a
			href="/"
			on:click|preventDefault={async () => await editLocation(location.id)}
		>
			{location.name}</a
		>
		<a
			href="/"
			on:click|preventDefault={async () => await deleteLocation(location.id)}
			>XXX</a
		>
	</p>
{/each}
