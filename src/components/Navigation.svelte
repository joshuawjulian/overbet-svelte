<script lang="ts">
	import { userStore } from '$/lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { getUserLevel } from '$/lib/db';
	import { supabase } from '$lib/supabase';

	let userLevel = 0;

	const updateUserLevel = (id: string) => {
		getUserLevel(id)
			.then((value) => {
				userLevel = value;
				console.log(`userLevel = ${userLevel}`);
			})
			.catch((error) => {
				console.log(error);
				userLevel = 0;
			});
	};

	const userLogOut = async () => {
		await supabase.auth.signOut();
	};

	const unsubscribe = userStore.subscribe((user) => {
		if (user && user?.supabase_user) {
			updateUserLevel(user.supabase_user.id);
			return;
		}
	});

	onDestroy(unsubscribe);

	onMount(() => {
		try {
			updateUserLevel(get(userStore).supabase_user.id);
		} catch (err) {
			userLevel = 0;
		}
	});
</script>

<nav>
	<ul class="top">
		<li class="nav-header">Nav Category 1</li>
		<li><a href="/">Nav Item 1</a></li>
		<li><a href="/test">Test Item</a></li>
		<li><a href="/">Nav Item 3</a></li>

		{#if userLevel > 1}
			<li class="nav-header">Admin - Basic CMS</li>
			<li><a href="/admin/edit/location">Location</a></li>
			<li><a href="/admin/edit/currency">Currency</a></li>
			<li><a href="/admin/scroll">Scroll Test</a></li>
		{/if}
	</ul>
	<ul class="bot">
		{#if $userStore && $userStore.supabase_user}
			<li><a href="/profile">{$userStore.supabase_user.email}</a></li>
			<li><a href="/logout" on:click|preventDefault={userLogOut}>Logout</a></li>
		{:else}
			<li><a href="/login">Login</a></li>
			<li><a href="/register">Register</a></li>
		{/if}
	</ul>
</nav>

<style>
	nav {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1px;
		background-color: var(--color-bg--dark);
	}
	ul,
	li {
		list-style: none;
		display: block;
		text-align: right;
		width: 100%;
	}

	ul > li.nav-header {
		font-weight: bold;
		border-bottom: 1px solid black;
		padding: 1rem;
	}

	li > a {
		text-decoration: none;
		display: block;
		width: 100%;
		padding: 1rem;
		color: whitesmoke;
	}

	li > a:visited {
		color: whitesmoke;
	}

	li > a:hover {
		background-color: var(--color-bg--light);
		color: var(--color-pri);
	}

	@media (max-width: 768px) {
		ul,
		li {
			text-align: center;
		}
	}
</style>
