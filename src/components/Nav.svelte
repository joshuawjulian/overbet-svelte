<nav>
  <section class="nav-left-side">
    <a href="#">Home Stuff</a>
  </section>
  <section class="nav-right-side">
    <ul class="nav-bar">
      <li><a href="#">Nav Item 1</a></li>
      <li><a href="#">Nav Item 2</a></li>
      <li><a href="#">Nav Item 3</a></li>
    </ul>
    <a class="nav-toggle">
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </a>
  </section>
</nav>

<style>
  nav {
    width: 100%;
    height: 4rem;
    background-color: var(--primary-color--dark);
    position: static;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .nav-left-side {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
  }

  .nav-right-side {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
  }

  .nav-toggle {
    width: 3rem;
    height: 100%;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .line {
    width: 80%;
    border: 1px solid black;
  }

  .line + .line {
    margin-top: 2px;
  }
</style>
