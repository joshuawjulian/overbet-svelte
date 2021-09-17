<script lang="ts">
  import { userStore } from "$/lib/stores";
  import { supabase } from "$/lib/supabase";

  import type { definitions as defs } from "$/lib/types";
  import { onMount } from "svelte";

  import LocationForm from "$/components/LocationForm.svelte";

  let locations: defs["location"][];

  let errMsg = null;

  onMount(async () => {
    locations = [];
    let { data, error } = await supabase
      .from<defs["location"]>("location")
      .select("*");

    if (error) errMsg = error.message;
    else locations = data;
  });
</script>

<LocationForm />
