<script lang="ts">
	import { goto } from '$app/navigation';
	import { supabase } from '$/lib/supabase';

	import { onMount } from 'svelte';

	const logout = async () => {
		await supabase.auth.signOut();
		await goto('/');
	};

	onMount(async () => {
		await logout();
	});
</script>

<p>Logging Out</p>
