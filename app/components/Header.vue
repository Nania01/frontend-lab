<template>
  <header class="header">
    <div class="inner">

      <div class="left">
        <img src="~/assets/images/logo.svg" class="logo" />

        <ul class="menu">
          <li>Реализованные проекты</li>
          <li>Новости</li>
          <li>Контакты</li>
        </ul>
      </div>

      <div class="right">
        <div class="phone-block">
          <img src="~/assets/images/phone.svg" class="phone-icon" />
          <span class="phone-text">+7 (900) 900-90-90</span>
        </div>

        <Button>Оставить заявку</Button>
      </div>

    </div>
  </header>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;
@use "~/assets/styles/variables" as vars;

.header {
  padding: vars.$header-padding-y vars.$header-padding-x;
  background: vars.$color-white;
}

.inner {
  @include mixins.flex-row;
  justify-content: space-between;
  gap: 10px;
  height: 49px;
}

.left {
  @include mixins.flex-row;
  height: 39px;
  gap: vars.$logo-menu-gap;
}

.logo {
  width: 160px;
  height: 39px;
}

.menu {
  @include mixins.flex-row;
  gap: vars.$menu-gap;
  list-style: none;
  padding: 0;
  margin: 0;
  color: vars.$color-gray;
  font-size: 16px;
  font-family: vars.$font-base;
  line-height: 19px;
}

.right {
  @include mixins.flex-row;
  gap: 24px;
}

.phone-block {
  @include mixins.flex-row;
  gap: 8px;
  height: 17px;
}

.phone-icon {
  width: 16px;
  height: 16px;
}

.phone-text {
  font-size: 16px;
  line-height: 17px;
  color: vars.$color-black;
  font-family: vars.$font-base;
}
</style>
