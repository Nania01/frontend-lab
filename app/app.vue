<template>
  <div class="root">
    <Header />

    <main class="main">
      <Slider />
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
  padding: 0; 
  text-align: center;
}
</style>
