<template>
  <div class="banner">Banner</div>
</template>

<style lang="scss">
@use '@/assets/styles/mixins' as *;

.banner {
  @include card(green, white);
}
</style>
