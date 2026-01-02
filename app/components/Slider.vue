<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s1L1x from '~/assets/images/slide-1-landscape.jpg'
import s1L2x from '~/assets/images/slide-1-landscape@2x.jpg'
import s1P1x from '~/assets/images/slide-1-portrait.jpg'
import s1P2x from '~/assets/images/slide-1-portrait@2x.jpg'

import s2L1x from '~/assets/images/slide-2-landscape.jpg'
import s2L2x from '~/assets/images/slide-2-landscape@2x.jpg'
import s2P1x from '~/assets/images/slide-2-portrait.jpg'
import s2P2x from '~/assets/images/slide-2-portrait@2x.jpg'

import s3L1x from '~/assets/images/slide-3-landscape.jpg'
import s3L2x from '~/assets/images/slide-3-landscape@2x.jpg'
import s3P1x from '~/assets/images/slide-3-portrait.jpg'
import s3P2x from '~/assets/images/slide-3-portrait@2x.jpg'

const slides = [
  {
    image_landscape: { x1: s1L1x, x2: s1L2x },
    image_portrait: { x1: s1P1x, x2: s1P2x }
  },
  {
    image_landscape: { x1: s2L1x, x2: s2L2x },
    image_portrait: { x1: s2P1x, x2: s2P2x }
  },
  {
    image_landscape: { x1: s3L1x, x2: s3L2x },
    image_portrait: { x1: s3P1x, x2: s3P2x }
  }
]

const currentIndex = ref(0)

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex
}
</script>

<template>
  <section class="hero-section">
    <div class="slider-container">
      <div class="static-content">
        <h1 class="main-title">Проектируем и строим<br>загородные дома</h1>
        <p class="main-description">Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений. Гарантируем качество и соблюдение сроков.</p>
      </div>

      <Swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :loop="true"
        @slideChange="onSlideChange"
        class="my-swiper"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <figure class="slide-figure">
            <picture>
              <source
                media="(min-width: 768px)"
                :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1} 1x`"
              />
              <source
                :srcset="`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1} 1x`"
              />
              <img :src="slide.image_landscape.x1" alt="Hero image" class="slide-img" />
            </picture>
          </figure>
        </SwiperSlide>

        <SliderControls :total="slides.length" :current="currentIndex" />
      </Swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~/assets/styles/variables" as vars;
@use "~/assets/styles/mixins" as mixins;

.hero-section {
  width: 100%;
  box-sizing: border-box;
  padding: 0 88px;
  margin: 0 auto;

  @include mixins.tablet {
    padding: 0 32px;
  }

  @include mixins.mobile {
    padding: 0 16px;
  }
}

.slider-container {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  height: 480px; 
  width: 100%;

  @include mixins.tablet {
    height: 400px;
  }

  @include mixins.mobile {
    height: 380px; 
    border-radius: 20px; 
  }
}

.static-content {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 20;
  max-width: 600px;
  color: vars.$color-white;
  text-align: left;
  pointer-events: none;
  padding-left: 144px;

  @include mixins.tablet {
    padding-left: 100px;
    max-width: 500px;
  }

  @include mixins.mobile {
    padding: 0 24px;
    left: 0;
    right: 0;
    top: auto;
    bottom: 60px;
    transform: none;
    max-width: none;
  }
}

.main-title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 56px;
  line-height: 1.1;
  margin: 0 0 24px 0;

  @include mixins.tablet {
    font-size: 42px;
  }

  @include mixins.mobile {
    font-size: 28px;
    margin-bottom: 12px;
  }
}

.main-description {
  font-family: vars.$font-base;
  font-size: 18px;
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;

  @include mixins.mobile {
    font-size: 14px;
  }
}

.my-swiper {
  width: 100%;
  height: 100%;
}

.slide-figure {
  margin: 0;
  width: 100%;
  height: 100%;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
