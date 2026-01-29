<script setup>
import p1x1 from '~/assets/images/project-1.jpg'
import p1x2 from '~/assets/images/project-1@2x.jpg'
import p2x1 from '~/assets/images/project-2.jpg'
import p2x2 from '~/assets/images/project-2@2x.jpg'

const projects = [
  {
    image: {
      x1: p1x1,
      x2: p1x2
    },
    title: 'Дом в скандинавском стиле',
    description: `
      <p>Одноэтажный дом из газобетона габаритными размерами 10.73 x 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей</p>
      <p>Построен по индивидуальному проекту.</p>
    `
  },
  {
    image: {
      x1: p2x1,
      x2: p2x2
    },
    title: 'Дом из газобетона',
    description: `
      <p>Одноэтажный дом габаритными размерами 15.2 x 9.7м. Приведенная площадь – 127.7 м.кв.</p>
      <p>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.</p>
    `
  }
]
</script>

<template>
  <div class="list">
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
      :image="project.image"
    />
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @include mixins.tablet {
    grid-template-columns: 1fr;
  }

  @include mixins.mobile {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 20px; 
    gap: 16px;
    scroll-snap-type: x mandatory;
    
    & > * {
      scroll-snap-align: start;
      min-width: 85vw;
    }
  }
}
</style>
