<script type="ts">
  import { supabase } from "$lib/supabase";
  import { goto } from "$app/navigation";
  import { userStore } from "$/lib/stores";

  export const redirectUrl = "/";

  let email, password, passwordAgain, errorMsg;

  const signUp = async (
    email: string,
    password: string,
    passwordAgain: string
  ) => {
    errorMsg = "";
    if (password !== passwordAgain) {
      errorMsg = "Passwords must match";
      return;
    }
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      errorMsg = error.message;
      return;
    }
    userStore.set(user);
    await goto(redirectUrl);
  };
</script>

<form
  on:submit|preventDefault={() => {
    signUp(email, password, passwordAgain);
  }}
>
  {#if errorMsg}
    <div class="field">
      <span>{errorMsg}</span>
    </div>
  {/if}
  <div class="field">
    <label for="email">Email</label>
    <input type="text" id="email" bind:value={email} />
  </div>

  <div class="field">
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={password} />
  </div>
  <div class="field">
    <label for="passwordAgain">Password Again</label>
    <input type="password" id="passwordAgain" bind:value={passwordAgain} />
  </div>
  <div class="field">
    <button>Login</button>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .field {
    min-width: 80%;
    max-width: 10rem;
    display: flex;
    flex-direction: column;
  }
  label {
    display: block;
    padding: 1rem;
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }
  input {
    display: block;
    width: 100%;
    border: 1px solid black;
    border-radius: 100vh;
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;
  }

  button {
    font-size: 2rem;
    margin-top: 1rem;
    width: 100%;
    border-radius: 100vh;
    border: 1px solid black;
  }
</style>
