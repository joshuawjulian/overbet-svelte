<script lang="ts">
  import { supabase } from "$lib/supabase";

  import type { definitions } from "$lib/types";
  import { userStore } from "$lib/stores";

  import { onMount } from "svelte";

  type location_type = definitions["location"];

  let newLocation: location_type = {
    id: "",
    name: "New Location",
    address: "",
    is_online: false,
    created_by: "",
    owner: "",
    is_public: false,
    state: "pending",
  };

  let errMsg = "";

  export let location: location_type = newLocation;

  //make functions for getting lat/long
  const locationByCurrent = () => {
    navigator.geolocation.getCurrentPosition(setCurrentPosition, () => {
      throw new Error("Failed Getting Geolocation");
    });
  };

  const setCurrentPosition = (position: GeolocationPosition) => {
    location.lat = position.coords.latitude;
    location.long = position.coords.longitude;
  };

  const getLocationByAddress = async () => {
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=c3381f58c8d50170263feac4d991529a&query=${location.address}`
    );
    const { error, data } = await response.json();
    if (error) errMsg = error.message;
    else {
      location.lat = data[0].latitude;
      location.long = data[0].longitude;
    }
  };
</script>

<form on:submit|preventDefault>
  <p>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" bind:value={location.name} />
  </p>
  <p>
    <label for="address">Address</label>
    <textarea id="address" name="address" bind:value={location.address} />
  </p>
  <p>
    <label for="lat">Latitude</label>
    <input type="text" name="lat" id="lat" bind:value={location.lat} />
  </p>
  <p>
    <label for="long">Longitude</label>
    <input type="text" name="long" id="long" bind:value={location.long} />
  </p>
  {#if errMsg}
    <p class="error">{errMsg}</p>
  {/if}
  <p>
    <button on:click={getLocationByAddress}>Lat/Long By Address</button>
    <button on:click={locationByCurrent}>Lat/Long By Current Location</button>
  </p>
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
  button {
    width: 100%;
    display: block;
    height: 2rem;
  }
  label {
    width: 100%;
    display: block;
    font-size: 1.4rem;
  }

  textarea,
  input {
    width: 100%;
    display: block;
    height: 3rem;
    padding: 1rem;
    font-size: 1.5rem;
  }

  textarea {
    height: 6rem;
  }
</style>
