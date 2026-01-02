<template>
  <section class="info-section">
    <div class="info-grid">
      <h2 class="title">Каждый проект<br>для нас — важный</h2>

      <div class="description-block">
        <p class="desc-text">
          Мы строительная компания полного цикла.
        </p>
        <p class="desc-text">
          Вникаем во все детали, разрабатываем планировку будущего дома, продумываем конструктивные решения и общую архитектурную концепцию
        </p>
      </div>

      <div class="stat-card">
        <img src="~/assets/images/house.svg" alt="house" class="stat-icon" />
        <div class="stat-content">
          <div class="stat-number">57 домов</div>
          <div class="stat-text">спроектировали и построили «под ключ»</div>
        </div>
      </div>

      <div class="stat-card">
        <img src="~/assets/images/calendar.svg" alt="calendar" class="stat-icon" />
        <div class="stat-content">
          <div class="stat-number">14 лет</div>
          <div class="stat-text">мы на рынке загородного строительства</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;
@use "~/assets/styles/mixins" as mixins;

.info-section {
  width: 100%;
  box-sizing: border-box;
  padding: 100px 88px;
  margin: 0 auto;
  text-align: left;

  @include mixins.tablet {
    padding: 60px 32px;
  }

  @include mixins.mobile {
    padding: 40px 16px;
  }
}

.info-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  column-gap: 20px;
  row-gap: 40px;
  align-items: stretch;

  @include mixins.tablet {
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
  }

  @include mixins.mobile {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.title {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  margin: 0;
  color: vars.$color-black;

  @include mixins.tablet {
    grid-column: 1 / -1;
  }

  @include mixins.mobile {
    font-size: 24px;
    margin-bottom: 8px;
  }
}

.description-block {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include mixins.tablet {
    grid-column: 1 / -1;
    grid-row: 2;
    padding-right: 0;
    gap: 20px;
  }
}

.desc-text {
  font-family: vars.$font-base;
  font-size: 16px;
  line-height: 1.6;
  color: vars.$color-gray;
  margin: 0;
  max-width: 480px;

  @include mixins.tablet {
    max-width: 100%;
  }
}

.stat-card {
  background-color: #F7F8F8;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;

  &:nth-of-type(2) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  &:nth-of-type(3) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  @include mixins.tablet {
    height: auto;
    
    &:nth-of-type(2) {
      grid-column: 1;
      grid-row: 3;
    }
    
    &:nth-of-type(3) {
      grid-column: 2;
      grid-row: 3;
    }
  }
}

.stat-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 16px;
  display: block;
}

.stat-number {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 6px;
  color: vars.$color-black;

  @include mixins.mobile {
    font-size: 24px;
  }
}

.stat-text {
  font-family: vars.$font-base;
  font-size: 13px;
  line-height: 1.4;
  color: vars.$color-gray;
}
</style>
