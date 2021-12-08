<script lang="ts">
  export let colors: string[] = [
    "--color-pri",
    "--color-pri--dark",
    "--color-pri--light",
    "--color-pri--desat",
    "--color-sec",
  ];
</script>

<section>
  <p>Test Colors</p>
  {#each colors as color}
    <div class="color" style="background-color: var({color})">
      <p style="color: white">{color}</p>
      <p style="color: black">{color}</p>
    </div>
  {/each}
</section>

<style>
  section {
    width: 100%;
    border: 2px solid var(--color-bg);
  }

  p {
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.color {
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
