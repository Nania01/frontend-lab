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
import OrderForm from './OrderForm.vue'

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
        
        <OrderForm />
        
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;
@use "~/assets/styles/mixins" as mixins;

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 100;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.content {
  box-sizing: border-box;
  background-color: #F5F7F3;
  border-radius: 20px;
  box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px;
  z-index: 101;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @include mixins.mobile {
    padding: 24px 16px;
    width: calc(100% - 40px);
    max-height: 85vh;
  }
}

.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}

.title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 24px;
  color: vars.$color-black;
  margin: 0;
  text-align: center;

  @include mixins.mobile {
    font-size: 20px;
  }
}

.close-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  
  font-family: inherit;
  border-radius: 4px;
  height: 32px;
  width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: vars.$color-green;
  background-color: #029F5933; 
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: vars.$color-green;
    color: white;
  }
}

.description {
  display: none; 
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
