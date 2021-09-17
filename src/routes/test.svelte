<script lang="ts">
  import Header from "$/components/Header.svelte";
  import { supabase } from "$/lib/supabase";
  import { getUserRole } from "$lib/db";

  import { onMount } from "svelte";

  let errMsg = "";

  const allUsers = async () => {
    let { data, error } = await supabase.from("user_roles").select(`
			id, role,
			auth_users (
				email
			)
		`);
    if (error) errMsg = error.message;
    return data;
  };

  let users = [];
  let testStr = "";

  onMount(async () => {
    users = await allUsers();
    if (!users) users = [];
    users.forEach(async (user) => {
      let role = await getUserRole(user.id);
      testStr += `user: ${user.id} | role: ${role}\n`;
    });
  });
</script>

<h1>Test page</h1>
<p>Using this page to test interaction with the database</p>
<pre>
	Test String:
	{testStr}
</pre>
{#if errMsg}
  <p>{errMsg}</p>
{/if}
{#each users as user}
  <pre>{JSON.stringify(user, null, 2)}</pre>
{/each}
