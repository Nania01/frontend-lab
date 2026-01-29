<template>
  <footer class="footer">
    <img src="~/assets/images/logo-footer.svg" class="logo" />

    <ul class="sections">
      <li>Реализованные проекты</li>
      <li>Новости</li>
      <li>Контакты</li>
    </ul>

    <ul class="sections contacts-list">
      <li>
        <div class="contact">
          <img src="~/assets/images/phone.svg" class="icon" />
          <span class="text">+7 (900) 900-90-90</span>
        </div>
      </li>

      <li>
        <div class="contact">
          <img src="~/assets/images/email.svg" class="icon" />
          <span class="text">info@gmail.com</span>
        </div>
      </li>

      <li>
        <div class="contact address">
          <img src="~/assets/images/location.svg" class="icon" />
          <span class="text">
            г. Владивосток<br />
            ул. Выселковая 49, стр. 3
          </span>
        </div>
      </li>
    </ul>

    <Button class="btn">Оставить заявку</Button>

    <div class="legal">
      <div class="bottom-text">© Загдом, 2021</div>
      <div class="bottom-text">Политика конфиденциальности</div>
      <div class="bottom-text">Пользовательское соглашение</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/variables" as vars;
@use "~/assets/styles/mixins" as mixins;

.footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 32px;
  padding: 37px 88px;
  background: vars.$color-footer-bg;
  color: vars.$color-white;
  margin-top: auto;

  @include mixins.tablet {
    grid-template-columns: 1fr 1fr;
    padding: 37px 32px;
    grid-row-gap: 40px;
  }

  @include mixins.mobile {
    grid-template-columns: 1fr;
    padding: 40px 24px;
    justify-items: start;
    text-align: left;
    grid-row-gap: 32px;
  }
}

.logo {
  width: 160px;
  height: 39px;

  @include mixins.tablet {
    grid-column: 1;
    grid-row: 1;
  }

  @include mixins.mobile {
    grid-column: auto;
    grid-row: auto;
    margin-bottom: 8px;
  }
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: vars.$font-base;
  font-size: 16px;
  line-height: 19px;

  @include mixins.tablet {
    grid-column: 1;
    grid-row: 2;
  }

  @include mixins.mobile {
    align-items: flex-start;
    grid-column: auto;
    grid-row: auto;
  }
}

.contacts-list {
  @include mixins.tablet {
    grid-column: 2;
    grid-row: 2;
  }

  @include mixins.mobile {
    grid-column: auto;
    grid-row: auto;
  }
}

.contacts-list .text {
  font-family: vars.$font-title;
  font-size: 14px;
  line-height: 17px;
  white-space: pre-line;
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
  justify-self: end;

  @include mixins.tablet {
    grid-column: 2;
    grid-row: 1;
    justify-self: start;
  }

  @include mixins.mobile {
    grid-column: auto;
    grid-row: auto;
    justify-self: start;
    width: 100%;
    max-width: 204px;
    margin-top: 8px;
  }
}

.legal {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  @include mixins.tablet {
    grid-row: 3;
    display: flex;
    flex-wrap: wrap;
    gap: 16px 30px;
    margin-top: 20px;
  }

  @include mixins.mobile {
    grid-column: auto;
    grid-row: auto;
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