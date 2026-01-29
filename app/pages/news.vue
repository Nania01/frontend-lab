<script setup>
import { ref, computed } from 'vue'
import n1x1 from '~/assets/images/news-1.jpg'
import n1x2 from '~/assets/images/news-1@2x.jpg'
import n2x1 from '~/assets/images/news-2.jpg'
import n2x2 from '~/assets/images/news-2@2x.jpg'
import n3x1 from '~/assets/images/news-3.jpg'
import n3x2 from '~/assets/images/news-3@2x.jpg'
import n4x1 from '~/assets/images/news-4.jpg'
import n4x2 from '~/assets/images/news-4@2x.jpg'

const baseNews = [
  {
    image: { x1: n1x1, x2: n1x2 },
    date: new Date('2021-08-20'),
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект с простой геометрией, отказавшись от сложных архитектурных элементов.'
  },
  {
    image: { x1: n2x1, x2: n2x2 },
    date: new Date('2021-09-15'),
    title: 'Почему Гуд Вилл строит лучшие дома?',
    description: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом: компания Гуд Вилл использует только сертифицированные материалы.'
  },
  {
    image: { x1: n3x1, x2: n3x2 },
    date: new Date('2021-10-01'),
    title: 'Преимущества и недостатки частного дома',
    description: 'Первое и главное: строим дом индивидуально для вас, по вашим потребностям и образу жизни. К преимуществам относятся отсутствие соседей.'
  },
  {
    image: { x1: n4x1, x2: n4x2 },
    date: new Date('2021-11-12'),
    title: 'Из чего мы строим дома в ипотеку?',
    description: 'Самый популярный вопрос наших клиентов касается материалов, которые подходят для ипотечных программ. Мы работаем со всеми банками.'
  }
]

const newsList = Array.from({ length: 32 }, (_, i) => ({
  ...baseNews[i % 4]
}))

const itemsPerPage = 12
const currentPage = ref(1)

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return newsList.slice(start, end)
})

const onPageChange = (page) => {
  currentPage.value = page
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="page-news">
    <div class="container">
      
      <div class="breadcrumbs">
        <NuxtLink to="/" class="crumb-link green">Главная</NuxtLink>
        <span class="separator">/</span>
        <span class="crumb-current">Новости</span>
      </div>

      <h1 class="page-title">Новости</h1>

      <div class="news-grid">
        <NewsCard
          v-for="(item, index) in paginatedNews"
          :key="index"
          :image="item.image"
          :date="item.date"
          :title="item.title"
          :description="item.description"
        />
      </div>

      <Pagination 
        :total="newsList.length" 
        :items-per-page="itemsPerPage" 
        :current-page="currentPage"
        @update:page="onPageChange"
      />
      
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;
@use "~/assets/styles/mixins" as mixins;

.page-news {
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
  margin-bottom: 40px;
  font-family: vars.$font-base;
  font-size: 14px;
  color: vars.$color-gray;
}

.crumb-link {
  color: vars.$color-gray;
  transition: color 0.2s;
  text-decoration: none;
  
  &.green {
    color: vars.$color-green;
  }

  &:hover {
    opacity: 0.8;
  }
}

.separator {
  color: vars.$color-gray;
}

.crumb-current {
  color: vars.$color-gray;
}

.page-title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 36px;
  margin: 0 0 40px 0;
  color: vars.$color-black;

  @include mixins.mobile {
    font-size: 28px;
    margin-bottom: 24px;
  }
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @include mixins.tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mixins.mobile {
    grid-template-columns: 1fr;
  }
}
</style>
