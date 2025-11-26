<template>
  <div class="root">
    <Header />

    <main class="main">
      <h1>Hello, world!</h1>
    </main>

    <Footer />
  </div>
</template>

<style lang="scss">
@import '@csstools/normalize.css';

body, html, #__nuxt, .root {
  height: 100%;
  margin: 0;
}

.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  flex-grow: 1;
  padding: 48px 0;
  text-align: center;
}

h1 {
  font-size: 36px;
  font-family: 'Montserrat';
  margin: 0;
}
</style>
