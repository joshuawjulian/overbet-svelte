<script lang="ts">
  import LoginForm from "$/components/forms/LoginForm.svelte";
  import { supabase } from "$lib/supabase";
  import { goto } from "$app/navigation";

  export const redirectUrl = "/";

  let errorMsg = "";
  let password = "";
  let email = "";
  let loginGood = false;

  const login = async (email: string, password: string) => {
    errorMsg = "";
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) {
      errorMsg = "Email/Password is not correct";
      return;
    }
    loginGood = true;
    await goto(redirectUrl);
  };
</script>

<div class="page">
  <div class="wrapper" class:good={loginGood}>
    <LoginForm
      bind:errorMsg
      bind:email
      bind:password
      on:submit={async () => await login(email, password)}
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

  div.good {
    border: 1px green solid;
  }
</style>
