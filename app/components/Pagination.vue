<script setup>
import arrowIcon from '~/assets/images/arrow.svg'
</script>

<template>
  <div class="pagination">
    <button class="page-btn disabled">
       <img :src="arrowIcon" alt="prev" class="arrow-icon prev-icon" />
    </button>
    
    <div class="pages-wrapper">
      <button class="page-btn active-dark">1</button>
      <button class="page-btn">2</button>
      <div class="page-btn dots-box">...</div>
      <button class="page-btn">9</button>
      <button class="page-btn">10</button>
    </div>
    
    <button class="page-btn next-green">
      <img :src="arrowIcon" alt="next" class="arrow-icon white" /> 
    </button>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
}

.pages-wrapper {
  display: flex;
  gap: 8px;
}

.page-btn {
  width: 36px;
  height: 36px;
  border: 1px solid vars.$color-border;
  background: vars.$color-white;
  border-radius: 8px;
  font-family: vars.$font-base;
  font-weight: 600;
  font-size: 14px;
  color: vars.$color-black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  padding: 0;
  box-sizing: border-box;

  &:hover:not(.dots-box):not(.disabled) {
    border-color: vars.$color-green;
    color: vars.$color-green;
  }
}

.active-dark {
  background: vars.$color-footer-bg;
  color: vars.$color-white;
  border-color: vars.$color-footer-bg;

  &:hover {
    background: vars.$color-footer-bg;
    color: vars.$color-white;
    border-color: vars.$color-footer-bg;
    opacity: 0.9;
  }
}

.next-green {
  background: vars.$color-green;
  border-color: vars.$color-green;
  
  &:hover {
    background: vars.$color-green;
    border-color: vars.$color-green;
    opacity: 0.9;
  }
}

.disabled {
  opacity: 0.5;
  cursor: default;
  &:hover {
    border-color: vars.$color-border;
  }
}

.dots-box {
  cursor: default;
  &:hover {
    border-color: vars.$color-border;
    color: vars.$color-black;
  }
}

.arrow-icon {
  width: 10px;
  height: 10px;
  object-fit: contain;
  display: block;
}

.prev-icon {
  transform: rotate(180deg);
  filter: brightness(0);
}

.arrow-icon.white {
  filter: brightness(0) invert(1);
}
</style>
