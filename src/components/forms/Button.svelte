<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let label = "";

  const dispatchClick = () => {
    dispatch("clicked", { label });
  };
</script>

<button on:click={() => dispatchClick()}>{label}</button>

<style>
  button {
    width: 100%;
    margin-top: 1.25rem;
    padding: 1rem;
    border: 6px solid var(--color-pri--dark);
    background-color: var(--color-bg--light);
    font-size: inherit;
    font-weight: bold;
    color: var(--color-pri--dark);
  }

  button:hover {
    border-color: var(--color-pri);
  }

  button:active {
    background-color: var(--color-bg);
    color: white;
  }
</style>
