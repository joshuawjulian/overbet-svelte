<script type="ts">
  import TextInput from "$/components/forms/TextInput.svelte";
  import Button from "$/components/forms/Button.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let email = "";
  export let password = "";
  export let passwordAgain = "";
  export let errorMsg = "";

  const clicked = (event: CustomEvent) => {
    dispatch("submit");
  };
</script>

<form on:submit|preventDefault>
  <p>Register</p>
  {#if errorMsg}
    <p class="error">{errorMsg}</p>
  {/if}
  <TextInput type="email" label="Email" name="Email" bind:value={email} />
  <TextInput
    type="password"
    label="Password"
    name="Password"
    bind:value={password}
  />
  <TextInput
    type="password"
    label="Password Again"
    name="PasswordAgain"
    bind:value={passwordAgain}
  />
  <Button label="Register" on:clicked={clicked} />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  p {
    font-size: 3rem;
  }

  p.error {
    color: red;
    font-size: 2rem;
  }
</style>
