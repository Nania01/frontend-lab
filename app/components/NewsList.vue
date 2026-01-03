<script setup>
import n1x1 from '~/assets/images/news-1.jpg'
import n1x2 from '~/assets/images/news-1@2x.jpg'
import n2x1 from '~/assets/images/news-2.jpg'
import n2x2 from '~/assets/images/news-2@2x.jpg'
import n3x1 from '~/assets/images/news-3.jpg'
import n3x2 from '~/assets/images/news-3@2x.jpg'
import n4x1 from '~/assets/images/news-4.jpg'
import n4x2 from '~/assets/images/news-4@2x.jpg'

const newsItems = [
  {
    image: { x1: n1x1, x2: n1x2 },
    date: new Date('2021-08-20'),
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект с простой геометрией, отказавшись от сложных архитектурных элементов вроде эркеров и балконов, а также оптимизировав планировку для сокращения площади коридоров.'
  },
  {
    image: { x1: n2x1, x2: n2x2 },
    date: new Date('2021-09-15'),
    title: 'Почему Гуд Вилл строит лучшие дома?',
    description: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом: компания Гуд Вилл использует только сертифицированные материалы и проверенные технологии. Наш многоступенчатый контроль качества на каждом этапе гарантирует долговечность.'
  },
  {
    image: { x1: n3x1, x2: n3x2 },
    date: new Date('2021-10-01'),
    title: 'Преимущества и недостатки частного дома',
    description: 'Первое и главное: строим дом индивидуально для вас, по вашим потребностям и образу жизни. К преимуществам относятся отсутствие соседей за стеной и собственная земля. Среди недостатков стоит отметить необходимость самостоятельного обслуживания.'
  },
  {
    image: { x1: n4x1, x2: n4x2 },
    date: new Date('2021-11-12'),
    title: 'Из чего мы строим дома в ипотеку?',
    description: 'Самый популярный вопрос наших клиентов касается материалов, которые подходят для ипотечных программ. Мы работаем со всеми основными банками и предлагаем строительство из газобетона и керамических блоков. Все материалы аккредитованы.'
  }
]
</script>

<template>
  <section class="news-section">
    <div class="container">
      <div class="header-row">
        <h2 class="section-title">Новости</h2>
        <NuxtLink to="/news" class="btn-all">Все новости</NuxtLink>
      </div>

      <div class="grid">
        <NewsCard
          v-for="(item, index) in newsItems"
          :key="index"
          :image="item.image"
          :date="item.date"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;
@use "~/assets/styles/mixins" as mixins;

.news-section {
  padding-bottom: 100px;

  @include mixins.mobile {
    padding-bottom: 60px;
  }
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

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @include mixins.mobile {
    margin-bottom: 24px;
  }
}

.section-title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 36px;
  margin: 0;
  color: vars.$color-black;

  @include mixins.mobile {
    font-size: 24px;
  }
}

.btn-all {
  background: transparent;
  border: 1px solid vars.$color-green;
  border-radius: 10px;
  padding: 12px 24px;
  color: vars.$color-green;
  font-family: vars.$font-base;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.3s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    opacity: 0.8;
  }

  @include mixins.mobile {
    padding: 8px 16px;
    font-size: 12px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @include mixins.tablet {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @include mixins.mobile {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 16px;
    scroll-snap-type: x mandatory;
    padding-bottom: 20px; 
    
    & > * {
      scroll-snap-align: start;
      min-width: 280px;
      width: 80%;
    }
  }
}
</style>
