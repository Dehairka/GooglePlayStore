<template>
    <div class="swiper">
        <div class="swiper-wrapper">
        <div v-for="(article, i) in data" :key="i" class="swiper-slide" :class="`slide--${i}`">
            <img :src="urlPicture(article.url)" alt="cover article">
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
import { Swiper, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    props: {
      data: {
        type: Array,
        default: null,
      },
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
      slidesPerView: 1.2,
      spaceBetween: 10,
    })
  },
  methods: {
      urlPicture(url){
          return process.env.URL + url + ""
      }
  }
}
</script>

<style lang="scss">
.swiper {
//   height: 300px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.swiper-slide {
  /* align-items: center;
  display: flex;
  justify-content: center; */
//   width: 220px;
max-height: 400px;

img{
    object-fit: cover;
    height: 100%;
}
}
.slider-content {
  color: #000;
}
</style>