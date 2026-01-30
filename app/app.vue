<script setup>
</script>

<template>
  <div class="root">
    <Header />
    <main class="main">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@use "~/assets/styles/variables" as vars;
@use "~/assets/styles/mixins" as mixins;
@import '@csstools/normalize.css';

body, html, #__nuxt, .root {
  height: 100%;
  margin: 0;
  font-family: vars.$font-base;
}

.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  flex-grow: 1;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
