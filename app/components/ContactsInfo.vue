<script setup>
import { mockContacts } from '~/mock/contacts'

const { phone, email, address } = mockContacts

defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <div class="contacts-info" :class="variant">
    <div class="row">
      <img src="~/assets/images/phone.svg" class="icon" alt="Phone" />
      <a :href="`tel:${phone.value}`" class="link">{{ phone.label }}</a>
    </div>

    <div class="row">
      <img src="~/assets/images/email.svg" class="icon" alt="Email" />
      <a :href="`mailto:${email.value}`" class="link">{{ email.label }}</a>
    </div>

    <div class="row address-row">
      <img src="~/assets/images/location.svg" class="icon" alt="Location" />
      <span class="text">
        {{ address.city }}<br />
        {{ address.street }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;

.contacts-info {
  display: flex;
  flex-direction: column;
  
  &.default {
    gap: 20px;

    .row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .address-row {
      align-items: flex-start;
    }

    .icon {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }

    .link, .text {
      font-family: vars.$font-title;
      font-size: 16px;
      line-height: 1.2;
      color: vars.$color-black;
      text-decoration: none;
    }
  }

  &.footer {
    gap: 24px;

    .row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .address-row {
      align-items: flex-start;
    }

    .icon {
      width: 16px;
      height: 16px;
      filter: brightness(0) invert(1);
    }

    .link, .text {
      font-family: vars.$font-title;
      font-size: 14px;
      line-height: 17px;
      color: vars.$color-white;
      text-decoration: none;
    }
    
    .link:hover {
       text-decoration: underline;
    }
  }
}
</style>
