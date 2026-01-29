<script setup>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker
} from 'vue-yandex-maps'
import { mockContacts } from '~/mock/contacts'

const { address } = mockContacts

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
      
      <Breadcrumbs currentText="Контакты" />

      <div class="contacts-wrapper">
        <div class="info-column">
          <h1 class="page-title">Контакты</h1>
          <ContactsInfo />
        </div>

        <div class="map-column">
          <ClientOnly>
            <yandex-map :settings="mapSettings">
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

.page-title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 46px;
  line-height: 1.2;
  margin: 0 0 32px 0;
  color: vars.$color-black;

  @include mixins.mobile {
    font-size: 28px;
    margin-bottom: 24px;
  }
}

.contacts-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr; 
  gap: 30px;
  align-items: start;

  @include mixins.tablet {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.info-column {
  display: flex;
  flex-direction: column;
}

.map-column {
  width: 100%;
  height: 360px;
  background-color: #eee;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  
  @include mixins.mobile {
    height: 300px;
  }
  
  :deep(.yandex-map) {
    width: 100%;
    height: 100%;
  }
}
</style>
