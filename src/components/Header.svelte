<script type="ts">
  import { userStore } from "$/lib/stores";
  export let showNav = false;

  const toggleNav = () => {
    showNav = !showNav;
  };

  const toggleNavOff = () => {
    showNav = false;
  };

  const closeNav = () => {
    toggleNavOff();
  };
</script>

<svelte:window on:sveltekit:navigation-start={closeNav} />

<header>
  <section class="logo-home">
    <a href="/">Logo</a>
  </section>
  <nav class:nav-down={showNav}>
    <ul>
      <li><a href="/">Nav Item 1</a></li>
      <li><a href="/">Nav Item 2</a></li>
      <li><a href="/">Nav Item 3</a></li>
    </ul>
  </nav>
  <section class="login-info">
    {#if $userStore !== null}
      <span>{$userStore.email}</span>
      <span><a href="/logout">Logout</a></span>
    {:else}
      <span><a href="/login">Login</a></span>
      <span><a href="/signup">Signup</a></span>
    {/if}
  </section>
  <section class="mobile-nav-toggle">
    <button class:nav-down={showNav} on:click|preventDefault={toggleNav}>
      <span />
      <span />
      <span />
    </button>
  </section>
</header>

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  header {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    background-color: var(--primary-color--light);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0 0 3px black;
  }

  section {
    z-index: 10;
    background-color: var(--primary-color--light);
  }

  section.logo-home {
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .logo-home a {
    margin-left: 1rem;
    text-decoration: none;
    font-size: 2rem;
  }

  nav {
    z-index: 1;
    position: absolute;
    width: 100%;
    top: -800%;
    transition: all 1s;
  }

  nav.nav-down {
    top: 3rem;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  nav li {
    list-style: none;
    margin-right: 1rem;
    width: 100%;
    height: 100%;
  }

  nav li a {
    height: 100%;
    text-decoration: none;
    background-color: var(--primary-color--dark);
    width: 100%;
    display: block;
    text-align: center;
    padding: min(2rem, 5vh) 0;
    font-size: 2rem;
  }

  nav li:not(:last-of-type) a {
    border-bottom: 0;
  }

  .mobile-nav-toggle {
    height: 100%;
    min-width: 3rem;
  }

  .mobile-nav-toggle button {
    width: 100%;
    height: 100%;
    background-color: none;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .mobile-nav-toggle span {
    width: 80%;
    border: 1px solid black;
    margin: 4px 0;
    transition: transform 0.5s;
    transform-origin: center;
  }

  .mobile-nav-toggle .nav-down {
    background-color: var(--primary-color--inverse);
  }

  .nav-down > span:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }

  .nav-down > span:nth-child(2) {
    transform: scale(0) rotate(1080deg);
  }

  .nav-down > span:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }

  .login-info {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-info span {
    display: block;
    border: 1px solid black;
    margin-right: 1rem;
    padding: 0.5rem;
    text-decoration: none;
    background-color: var(--primary-color--dark);
  }

  .login-info span a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: white;
  }
</style>
