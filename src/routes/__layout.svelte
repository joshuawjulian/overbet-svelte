<script lang="ts">
  import Nav from "$/components/Nav.svelte";
  import "$/routes/global.css";
  import "$/routes/color.css";
</script>

<Nav />
<section class="content">
  <slot />
</section>
