<script lang="ts">
	import RegisterForm from '$/components/forms/RegisterForm.svelte';
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	export const redirectUrl = '/';

	let errorMsg = '';
	let password = '';
	let email = '';
	let passwordAgain = '';

	const register = async (
		email: string,
		password: string,
		passwordAgain: string,
	) => {
		errorMsg = '';
		if (password !== passwordAgain) {
			errorMsg = 'Passwords Do Not Match';
			return;
		}
		const { user, error } = await supabase.auth.signUp({ email, password });
		if (error) {
			errorMsg = error.message;
			return;
		}
		await goto(redirectUrl);
	};
</script>

<div class="page">
	<div class="wrapper">
		<RegisterForm
			bind:errorMsg
			bind:email
			bind:password
			bind:passwordAgain
			on:submit={async () => await register(email, password, passwordAgain)}
		/>
	</div>
</div>

<style>
	div.page {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	div.wrapper {
		width: 100%;
		max-width: 45rem;
	}
</style>
