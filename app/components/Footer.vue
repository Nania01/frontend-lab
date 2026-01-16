<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';
import { mockContacts } from '~/mock/contacts';

const isModalOpen = ref(false);
const { phone, email, address } = mockContacts;
</script>

<template>
  <footer class="footer">
    <NuxtLink to="/" class="logo-link">
        <img src="~/assets/images/logo-footer.svg" class="logo" alt="Logo" />
    </NuxtLink>

    <ul class="sections">
      <li><NuxtLink to="/">Реализованные проекты</NuxtLink></li>
      <li><NuxtLink to="/news">Новости</NuxtLink></li>
      <li><NuxtLink to="/contacts">Контакты</NuxtLink></li>
    </ul>

    <ul class="sections contacts-list">
      <li>
        <div class="contact">
          <img src="~/assets/images/phone.svg" class="icon" alt="Phone" />
          <a :href="`tel:${phone.value}`" class="text">{{ phone.label }}</a>
        </div>
      </li>

      <li>
        <div class="contact">
          <img src="~/assets/images/email.svg" class="icon" alt="Email" />
          <a :href="`mailto:${email.value}`" class="text">{{ email.label }}</a>
        </div>
      </li>

      <li>
        <div class="contact address">
          <img src="~/assets/images/location.svg" class="icon" alt="Location" />
          <span class="text">
            {{ address.city }}<br />
            {{ address.street }}
          </span>
        </div>
      </li>
    </ul>

    <Button class="btn" @click="isModalOpen = true">Оставить заявку</Button>

    <div class="legal">
      <div class="bottom-text">© Загдом, 2021</div>
      <div class="bottom-text">Политика конфиденциальности</div>
      <div class="bottom-text">Пользовательское соглашение</div>
    </div>

    <Modal v-model:open="isModalOpen" />
  </footer>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as vars;
@use "~/assets/styles/mixins" as mixins;

.footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 
    "logo nav contacts btn"
    "legal legal legal legal";
  gap: 32px;
  padding: 37px 88px;
  background: vars.$color-footer-bg;
  color: vars.$color-white;
  margin-top: auto;

  @include mixins.tablet {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "logo btn"
      "nav contacts"
      "legal legal";
    padding: 37px 32px;
    gap: 40px;
  }

  @include mixins.mobile {
    grid-template-columns: 1fr;
    grid-template-areas: 
      "logo"
      "nav"
      "contacts"
      "btn"
      "legal";
    padding: 40px 24px;
    justify-items: start;
    text-align: left;
    gap: 32px;
  }
}

.logo-link {
    grid-area: logo;
}

.logo {
  width: 160px;
  height: 39px;
  display: block;

  @include mixins.mobile {
    margin-bottom: 8px;
  }
}

.sections {
  grid-area: nav;
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: vars.$font-base;
  font-size: 16px;
  line-height: 19px;

  @include mixins.mobile {
    align-items: flex-start;
  }
  
  li a {
      color: vars.$color-white;
      &:hover {
          text-decoration: underline;
      }
  }
}

.contacts-list {
  grid-area: contacts;
}

.contacts-list .text {
  font-family: vars.$font-title;
  font-size: 14px;
  line-height: 17px;
  white-space: pre-line;
  color: inherit;
  text-decoration: none;
}

.contact {
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
}

.icon {
  width: 16px;
  height: 16px;
}

.btn {
  grid-area: btn;
  justify-self: end;

  @include mixins.tablet {
    justify-self: start;
  }

  @include mixins.mobile {
    justify-self: start;
    width: 100%;
    max-width: 204px;
    margin-top: 8px;
  }
}

.legal {
  grid-area: legal;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  
  @include mixins.tablet {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 30px;
    margin-top: 20px;
  }

  @include mixins.mobile {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }
}

.bottom-text {
  font-size: 14px;
  opacity: 0.6;
  font-family: vars.$font-base;
  
  @include mixins.mobile {
    font-size: 12px;
  }
}
</style>
