<script lang="ts">
	export let value: string | number = '';
	let placeholder = ' ';
	export let label = '';
	export let name = '';
	export let id = '';

	export let type = 'text';
	export let required: boolean = false;

	const handleInputType = (e) => {
		e.target.type = type;
	};
</script>

<section>
	<input on:input={handleInputType} bind:value {placeholder} {id} {name} />
	<label for={id}>{label}</label>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		padding-top: calc(1.5rem);
	}
	label {
		position: absolute;
		padding: 0.25rem 1rem;
		background-color: var(--color-pri--dark);

		transition-property: top, background-color;
		transition-duration: 500ms;
		transition-timing-function: ease;
		top: calc(1.25rem + 6px);
		left: 0;
		border-radius: 6px;
	}
	input {
		padding: calc(1.25rem + 6px) 1rem calc(0.75rem - 6px) 1rem;
		border: 6px solid var(--color-pri--dark);
		border-radius: 6px;
		background-color: var(--color-bg--light);
		transition-property: border, padding;
		transition-duration: 500ms;
		transition-timing-function: ease;
		width: 100%;
		font-size: inherit;
	}

	input:focus {
		border-color: var(--color-pri);
		padding: 1rem;
	}

	input:focus + label {
		top: calc((1.25rem + 6px) / 2);
		background-color: var(--color-pri);
	}
</style>
