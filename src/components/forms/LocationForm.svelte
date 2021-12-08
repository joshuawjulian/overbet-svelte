<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TextInput from '$/components/forms/TextInput.svelte';
	import Button from '$/components/forms/Button.svelte';
	import SelectInput from '$/components/forms/SelectInput.svelte';
	import BooleanInput from '$/components/forms/BooleanInput.svelte';
	import type { Location } from '$lib/types';
	import { tz } from '$lib/timezones';

	const blankLocation: Location = {
		id: null,
		name: 'Unknown',
		is_online: false,
		is_public: false,
		created_by: null,
	};
	export let location: Location = Object.assign({}, blankLocation);
	const dispatch = createEventDispatcher();
	export let errMsg = null;

	//make functions for getting lat/long
	const locationByCurrent = () => {
		errMsg = null;
		navigator.geolocation.getCurrentPosition(setCurrentPosition, () => {
			throw new Error('Failed Getting Geolocation');
		});
	};

	const setCurrentPosition = (position: GeolocationPosition) => {
		errMsg = null;
		location.lat = position.coords.latitude;
		location.long = position.coords.longitude;
	};

	const getLocationByAddress = async () => {
		errMsg = null;
		const response = await fetch(
			`http://api.positionstack.com/v1/forward?access_key=c3381f58c8d50170263feac4d991529a&query=${location.address}`,
		);
		const { error, data } = await response.json();
		if (error) errMsg = error.message;
		else {
			try {
				location.lat = data[0].latitude;
				location.long = data[0].longitude;
			} catch (e) {
				errMsg = 'Something is wrong with the address format';
			}
		}
	};
</script>

<form on:submit|preventDefault>
	<TextInput bind:value={location.name} label="Name" id="Name" name="Name" />
	<TextInput
		bind:value={location.address}
		label="Address"
		id="Address"
		name="Address"
	/>
	<SelectInput label="Timezone" items={tz} bind:value={location.timezone} />
	<section class="latlong">
		<TextInput bind:value={location.lat} label="Lat" name="Lat" id="Lat" />
		<TextInput bind:value={location.long} label="Long" name="Long" id="Long" />

		<Button on:clicked={getLocationByAddress} label="Lat/Long By Address" />
		<Button
			on:clicked={locationByCurrent}
			label="Lat/Long By Current Location"
		/>
	</section>
	<BooleanInput bind:checked={location.is_online} label="Is Online" />
	{#if errMsg}
		<p class="error">{errMsg}</p>
	{/if}
	<Button on:clicked={() => dispatch('save', { location })} label="Save" />

	<Button
		on:clicked={() => (location = Object.assign({}, blankLocation))}
		label="Reset/New"
	/>
</form>

<style>
	form {
		display: block;
		width: 100%;
		padding: 1rem;
	}

	p {
		width: 100%;
		display: block;
		padding: 0.5rem 0;
	}

	p.error {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	section.latlong {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		column-gap: 2rem;
	}
</style>
