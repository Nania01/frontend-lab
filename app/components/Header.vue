<script setup>
import { ref } from 'vue';

const isDrawerOpen = ref(false);
</script>

<template>
  <header class="header">
    <div class="inner">

      <div class="left">
        <NuxtLink to="/">
          <img src="~/assets/images/logo.svg" class="logo" alt="Logo" />
        </NuxtLink>

        <ul class="menu">
          <li><NuxtLink to="/">Реализованные проекты</NuxtLink></li>
          <li><NuxtLink to="/news" active-class="active-link">Новости</NuxtLink></li>
          <li><NuxtLink to="/">Контакты</NuxtLink></li>
        </ul>
      </div>

      <div class="right">
        <div class="phone-block">
          <img src="~/assets/images/phone.svg" class="phone-icon" />
          <span class="phone-text">+7 (900) 900-90-90</span>
        </div>

        <Button class="btn-desktop">Оставить заявку</Button>

        <button class="btn-mobile" @click="isDrawerOpen = true">
          <img src="~/assets/images/menu-icon.svg" class="menu-icon" />
        </button>
      </div>
      
      <Drawer :isOpen="isDrawerOpen" @close="isDrawerOpen = false" />

    </div>
  </header>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;
@use "~/assets/styles/variables" as vars;

.header {
  padding: vars.$header-padding-y vars.$header-padding-x;
  background: vars.$color-white;

  @include mixins.tablet {
    padding: 24px 32px;
  }

  @include mixins.mobile {
    padding: 16px;
  }
}

.inner {
  @include mixins.flex-row;
  justify-content: space-between;
  gap: 20px;
}

.left {
  @include mixins.flex-row;
  gap: 30px;
  flex: 1;
  align-items: center;

  @include mixins.tablet {
    gap: 20px;
  }
}

.logo {
  width: 160px;
  height: 39px;
  flex-shrink: 0;
  display: block;
}

.menu {
  @include mixins.flex-row;
  column-gap: vars.$menu-gap;
  row-gap: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: vars.$font-base;
  line-height: 19px;
  flex-wrap: wrap;

  @include mixins.tablet {
    display: none;
  }
  
  a {
    color: vars.$color-gray;
    transition: color 0.3s;
    
    &:hover, &.active-link {
      color: vars.$color-green;
    }
  }
}

.right {
  @include mixins.flex-row;
  gap: 24px;
  align-items: center;
  flex-shrink: 0;
}

.phone-block {
  @include mixins.flex-row;
  gap: 8px;
  white-space: nowrap;

  @include mixins.mobile {
    display: none;
  }
}

.phone-icon {
  width: 16px;
  height: 16px;
}

.phone-text {
  font-size: 16px;
  line-height: 17px;
  color: vars.$color-black;
  font-family: vars.$font-title;
}

.btn-desktop {
  @include mixins.small-tablet {
    display: none;
  }
}

.btn-mobile {
  display: none;
  width: 49px;
  height: 49px;
  border: none;
  border-radius: 10px;
  background: vars.$color-green;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 0;

  @include mixins.small-tablet {
    display: flex;
  }
}

.menu-icon {
  width: 24px;
  height: 24px;
}
</style>
