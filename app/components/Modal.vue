<script setup>
import { Icon } from '@iconify/vue'
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose
} from 'radix-vue'

defineProps({
  open: Boolean
})

const emit = defineEmits(['update:open'])
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogPortal>
      <DialogOverlay class="overlay" />
      <DialogContent class="content">
        <div class="header">
          <DialogTitle class="title">Оставить заявку</DialogTitle>
          <DialogClose class="close-btn" aria-label="Close">
            <Icon icon="lucide:x" />
          </DialogClose>
        </div>
        
        <DialogDescription class="description">
          Оставьте свои контакты, и мы свяжемся с вами в ближайшее время.
        </DialogDescription>
        
        <div class="placeholder">
          Здесь будет форма
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 100;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.content {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 32px;
  z-index: 101;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 24px;
  color: vars.$color-black;
  margin: 0;
}

.close-btn {
  font-family: inherit;
  border-radius: 100%;
  height: 32px;
  width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: vars.$color-green;
  background-color: transparent;
  border: 1px solid vars.$color-border;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: vars.$color-green;
    color: white;
  }
}

.description {
  font-family: vars.$font-base;
  font-size: 16px;
  color: vars.$color-gray;
  margin-bottom: 24px;
  line-height: 1.5;
}

.placeholder {
  height: 100px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: vars.$color-gray;
  font-family: vars.$font-base;
}

@keyframes overlayShow {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
