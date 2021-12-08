<script lang="ts">
	import TextInput from '$/components/forms/TextInput.svelte';
	import ColorTest from '$/components/ColorTest.svelte';
	import { supabase } from '$/lib/supabase';

	let errMsg = '';

	const allUsers = async () => {
		let { data, error } = await supabase.from('user_roles').select(`
			id, role,
			auth_users (
				email
			)
		`);
		if (error) errMsg = error.message;
		return data;
	};

	let users = [];
	let testStr = '';
	let textValue = '';

	let test, test2;
</script>

<div>
	<h1>Test page</h1>
	<ColorTest />
	<TextInput label="Test" bind:value={test} />
	<TextInput label="Test2" bind:value={test2} />

	<pre>Test: {test}</pre>
	<pre>Test2: {test2}</pre>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		width: 100%;
	}
</style>
