<script setup>
import { defineProps, defineEmits } from 'vue'
import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationEllipsis,
  PaginationPrev,
  PaginationNext
} from 'radix-vue'
import arrowIcon from '~/assets/images/arrow.svg'

defineProps({
  total: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 12 },
  currentPage: { type: Number, default: 1 }
})

const emit = defineEmits(['update:page'])
</script>

<template>
  <PaginationRoot
    :total="total"
    :items-per-page="itemsPerPage"
    :page="currentPage"
    :sibling-count="1"
    class="pagination-root"
    @update:page="(val) => emit('update:page', val)"
  >
    <PaginationList v-slot="{ items }" class="pages-wrapper">
      <PaginationPrev class="page-btn prev">
        <img :src="arrowIcon" alt="prev" class="arrow-icon prev-icon" />
      </PaginationPrev>

      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          :value="page.value"
          class="page-btn"
        >
          {{ page.value }}
        </PaginationListItem>
        
        <PaginationEllipsis v-else :key="page.type + index" class="page-btn dots-box">
          &#8230;
        </PaginationEllipsis>
      </template>

      <PaginationNext class="page-btn next-green">
        <img :src="arrowIcon" alt="next" class="arrow-icon white" />
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;

.pagination-root {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.pages-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
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

  &:hover:not(.dots-box):not([disabled]) {
    border-color: vars.$color-green;
    color: vars.$color-green;
  }

  &[data-selected] {
    background: vars.$color-footer-bg;
    color: vars.$color-white;
    border-color: vars.$color-footer-bg;

    &:hover {
      opacity: 0.9;
    }
  }

  &[disabled] {
    opacity: 0.5;
    cursor: default;
    border-color: vars.$color-border;
  }
}

.prev {
  margin-right: 12px;
}

.next-green {
  margin-left: 12px;
  background: vars.$color-green;
  border-color: vars.$color-green;
  
  &:hover:not([disabled]) {
    background: vars.$color-green;
    border-color: vars.$color-green;
    opacity: 0.9;
    color: white;
  }
}

.dots-box {
  cursor: default;
  border: none;
  &:hover {
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
