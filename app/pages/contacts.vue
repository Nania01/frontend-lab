<script setup>
import { mockContacts } from '~/mock/contacts'

const { phone, email, address } = mockContacts

const mapSettings = {
  location: {
    center: address.coords,
    zoom: 14,
  },
}
</script>

<template>
  <div class="page-contacts">
    <div class="container">
      
      <div class="breadcrumbs">
        <NuxtLink to="/" class="crumb-link green">Главная</NuxtLink>
        <span class="separator">/</span>
        <span class="crumb-current">Контакты</span>
      </div>

      <h1 class="page-title">Контакты</h1>

      <div class="contacts-wrapper">
        <div class="info-column">
          
          <div class="contact-row">
            <img src="~/assets/images/phone.svg" class="contact-icon" alt="Телефон" />
            <a :href="`tel:${phone.value}`" class="phone-link">{{ phone.label }}</a>
          </div>
          
          <div class="contact-row">
            <img src="~/assets/images/email.svg" class="contact-icon" alt="Email" />
            <a :href="`mailto:${email.value}`" class="email-link">{{ email.label }}</a>
          </div>

          <div class="contact-row address-row">
            <img src="~/assets/images/location.svg" class="contact-icon" alt="Адрес" />
            <div class="address-block">
              <span class="city">{{ address.city }}</span>
              <span class="street">{{ address.street }}</span>
            </div>
          </div>

        </div>

        <div class="map-column">
          <ClientOnly>
            <yandex-map :settings="mapSettings" width="100%" height="100%">
                <yandex-map-default-scheme-layer />
                <yandex-map-default-features-layer />
                <yandex-map-default-marker :settings="{ coordinates: address.coords }" />
            </yandex-map>
          </ClientOnly>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;
@use "~/assets/styles/mixins" as mixins;

.page-contacts {
  padding-top: 40px;
  padding-bottom: 100px;
}

.container {
  width: 100%;
  padding: 0 88px;
  box-sizing: border-box;
  margin: 0 auto;

  @include mixins.tablet {
    padding: 0 32px;
  }

  @include mixins.mobile {
    padding: 0 16px;
  }
}

.breadcrumbs {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  font-family: vars.$font-base;
  font-size: 14px;
  color: vars.$color-gray;
}

.crumb-link {
  color: vars.$color-gray;
  transition: color 0.2s;
  
  &.green {
    color: vars.$color-green;
  }

  &:hover {
    opacity: 0.8;
  }
}

.page-title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 30px;
  margin: 0 0 32px 0;
  color: vars.$color-black;

  @include mixins.mobile {
    font-size: 24px;
    margin-bottom: 24px;
  }
}

.contacts-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr; 
  gap: 30px;

  @include mixins.tablet {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.info-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 12px;

  &.address-row {
    align-items: flex-start;
  }
}

.contact-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.phone-link {
  font-family: vars.$font-title;
  font-weight: 700; 
  font-size: 20px;
  color: vars.$color-black;
  text-decoration: none;
  line-height: 1.2;
  
  @include mixins.mobile {
    font-size: 18px;
  }
}

.email-link {
  font-family: vars.$font-base;
  font-size: 16px;
  color: vars.$color-black;
  text-decoration: underline;
  line-height: 1.2;
  
  &:hover {
    text-decoration: none;
  }
}

.address-block {
  display: flex;
  flex-direction: column;
  font-family: vars.$font-base;
  font-size: 16px; 
  line-height: 1.4;
  color: vars.$color-black;
}

.city {
  font-weight: 600;
}

.map-column {
  min-height: 400px;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
}
</style>
