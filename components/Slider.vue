<template>
  <div class="swiper">
    <div v-if="data" class="swiper-wrapper">
      <div v-for="(article, i) in data.slice(0,6)" :key="i" class="swiper-slide" :class="`slide--${i}`">
        <SingleArticle :data="article"/>
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination"></div>

    <!-- If navigation buttons are needed -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
// import Swiper JS
// add or remove unused modules
import { Swiper, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
    props: {
      data: {
        type: Array,
        default: null,
      },
      category: {
        type: String,
        default: "Application"
      }
    },
    data(){
        return{
          apps: []
        }
      },
    
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([Navigation])
    
    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 7,
      spaceBetween: 0,
      // remove unused modules if needed
      modules: [Navigation],
      // Pagination if needed
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1024: {
            slidesPerView: 7,
            spaceBetween: 100
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 200
        },
        640: {
            slidesPerView: 2.5,
            spaceBetween: 0
        },
        320: {
            slidesPerView: 1.4,
            spaceBetween: 10
        }
        }
      // Configure other options. Not tested
    })
  }
}
</script>

<style lang="scss">

.swiper{
  width: 100%;
}
.swiper-slide{
  
}
</style>