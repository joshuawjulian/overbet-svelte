<script lang="ts">
  import { goto } from "$app/navigation";
  import { supabase } from "$/lib/supabase";

  import { onMount } from "svelte";

  import { userStore } from "$lib/stores";

  const logout = async () => {
    await supabase.auth.signOut();
    userStore.set(null);
    await goto("/");
  };

  onMount(async () => {
    await logout();
  });
</script>

<p>Logging Out</p>
