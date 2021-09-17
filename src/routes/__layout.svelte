<script lang="ts">
  import Header from "$/components/Header.svelte";
  import "$/routes/global.css";
  import "$/routes/color.css";
</script>

<Header />
<section class="wrapper">
  <section class="content">
    <slot />
  </section>
</section>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .content {
    margin-top: 3rem;
    width: min(55rem, 100%);
    display: flex;
    justify-content: center;
  }
</style>
