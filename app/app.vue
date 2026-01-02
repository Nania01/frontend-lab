<template>
  <div class="root">
    <Header />

    <main class="main">
      <Slider />
      
      <InfoBlock />

      <section class="projects-section">
        <div class="container">
          <h2 class="section-title">Реализованные проекты</h2>
          <Projects />
        </div>
      </section>

      <NewsList />
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

.container {
  width: 100%;
  padding: 0 88px;
  box-sizing: border-box;
  margin: 0 auto;

  @include mixins.tablet {
    padding: 0 32px;
  }

  @include mixins.mobile {
    padding: 0 16px;
  }
}

.projects-section {
  background-color: #F5F7F3;
  padding-block: 80px;
  margin-bottom: 80px;

  @include mixins.mobile {
    padding-block: 40px;
    margin-bottom: 40px;
  }
}

.section-title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 36px;
  margin: 0 0 40px 0;
  text-align: left;
  color: vars.$color-black;

  @include mixins.mobile {
    font-size: 24px;
    margin-bottom: 24px;
  }
}
</style>
