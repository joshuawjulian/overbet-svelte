<script lang="ts">
	import Navigation from '$/components/Navigation.svelte';
	import '$/routes/global.css';
	import '$/routes/color.css';

	let mobileShow: boolean = false;

	const toggleMobile = () => {
		mobileShow = !mobileShow;
		console.log(`toggleMobile => ${mobileShow}`);
	};
</script>

<nav class="nav-wrapper" class:mobileShow>
	<section class="closeMobile" class:mobileShow on:click={toggleMobile}>
		X
	</section>
	<Navigation />
</nav>
<div class="blur-layer" class:mobileShow on:click={toggleMobile} />
<main class="main-wrapper">
	<section class="header" on:click={toggleMobile}>Overbet.io</section>
	<section class="content">
		<slot />
	</section>
</main>

<style>
	:global(body) {
		background-color: var(--color-bg);
		transition: background-color 0.3s;
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
	.nav-wrapper {
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		top: 0;
		left: 0;
		height: 100vh;
		width: 25ch;
		transition: left 0.75s ease-in-out;
	}

	div.blur-layer {
		display: none;
	}

	main.main-wrapper {
		z-index: 1;
		margin-left: 25ch;
		display: flex;
		flex-direction: column;
	}

	section.header {
		display: none;
	}

	section.content {
		padding: 1rem;
	}

	section.closeMobile {
		display: none;
	}

	@media (max-width: 800px) {
		section.header {
			display: unset;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 3rem;
			background-color: var(--color-bg--dark);
		}
		main.main-wrapper {
			margin-left: 0;
		}
		section.header {
			display: absolute;
			top: 0;
			left: 0;
		}

		nav.nav-wrapper {
			/* offset-x | offset-y | blur-radius | spread-radius | color */
			box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
		}

		div.blur-layer {
			display: initial;
			opacity: 0;
			position: fixed;
			width: 100vw;
			height: 100vh;
			left: 0;
			top: 0;
			z-index: -10;
			background: rgba(0, 0, 0, 0.5);
			backdrop-filter: blur(2px);
			transition: opacity 1s, visibility 1s;
			visibility: hidden;
		}

		div.blur-layer.mobileShow {
			z-index: 9;
			visibility: visible;
			opacity: 1;
		}
		.nav-wrapper {
			left: -25ch;
			z-index: 10;
		}
		.nav-wrapper.mobileShow {
			left: 0;
		}

		section.closeMobile {
			display: flex;
			position: absolute;
			background-color: red;
			height: 2rem;
			align-items: center;
			justify-content: end;
			padding: 1rem;
			right: 0;
		}
	}
</style>
