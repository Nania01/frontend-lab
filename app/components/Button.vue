<template>
  <button class="btn"><slot /></button>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;

.btn {
  width: 204px;
  height: 49px;
  border: none;
  border-radius: 10px;
  background: vars.$color-green;
  color: vars.$color-white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
</style>
