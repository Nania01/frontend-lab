<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { vMaska } from "maska/vue";

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1, 'Обязательное поле'),
    phone: z.string().min(18, 'Некорректный номер'),
    message: z.string().optional(),
  })
);

const { handleSubmit, defineField, errors } = useForm({
  validationSchema,
});

const [name, nameAttrs] = defineField('name');
const [phone, phoneAttrs] = defineField('phone');
const [message, messageAttrs] = defineField('message');

const onSubmit = handleSubmit((values) => {
  console.log(values);
  alert('Заявка успешно отправлена!');
});
</script>

<template>
  <form class="form" @submit="onSubmit">
    <div class="field-group">
      <input 
        v-model="name" 
        v-bind="nameAttrs" 
        class="input" 
        :class="{ 'error-border': errors.name }"
        type="text" 
        placeholder="Имя" 
      />
      <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
    </div>

    <div class="field-group">
      <input 
        v-model="phone" 
        v-bind="phoneAttrs" 
        v-maska 
        data-maska="+7 (###) ###-##-##"
        class="input"
        :class="{ 'error-border': errors.phone }"
        type="tel" 
        placeholder="Телефон" 
      />
      <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
    </div>

    <div class="field-group">
      <textarea 
        v-model="message" 
        v-bind="messageAttrs" 
        class="input textarea" 
        placeholder="Сообщение"
        rows="3"
      ></textarea>
    </div>

    <div class="submit-block">
      <Button type="submit" class="submit-btn">Оставить заявку</Button>
    </div>

    <p class="legal-text">
      Нажимая на кнопку «Отправить», вы принимаете 
      <a href="#">пользовательское соглашение</a> и 
      <a href="#">политику конфиденциальности</a>
    </p>
  </form>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field-group {
  display: flex;
  flex-direction: column;
  position: relative;
}

.input {
  width: 100%;
  padding: 16px 20px; 
  border: none;
  border-radius: 8px;
  font-family: vars.$font-base;
  font-size: 16px;
  color: vars.$color-black;
  box-sizing: border-box;
  outline: none;
  background-color: #F7F7F7;
  
  &::placeholder {
    color: #BDBDBD;
  }

  &:focus {
    box-shadow: 0 0 0 1px vars.$color-green;
    background-color: vars.$color-white;
  }
}

.textarea {
  resize: none;
}

.error-border {
  box-shadow: 0 0 0 1px red;
}

.error-text {
  font-size: 12px;
  color: red;
  margin-top: 4px;
  padding-left: 4px;
}

.submit-block {
  margin-top: 8px;
  display: flex;
  width: 100%;
}

.submit-btn {
  width: 100% !important; 
  max-width: 100%;
}

.legal-text {
  font-family: vars.$font-base;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
  text-align: center;
  margin: 0;
  
  a {
    color: vars.$color-green;
    text-decoration: none;
  }
}
</style>
