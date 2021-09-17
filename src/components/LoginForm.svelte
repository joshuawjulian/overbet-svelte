<script type="ts">
  import { supabase } from "$lib/supabase";
  import { goto } from "$app/navigation";

  import { userStore } from "$/lib/stores";

  export const redirectUrl = "/";

  let email, password, errorMsg;

  const login = async (email: string, password: string) => {
    errorMsg = "";
    const { user, error } = await supabase.auth.signIn({ email, password });
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
    login(email, password);
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
    <input type="text" id="password" bind:value={password} />
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
