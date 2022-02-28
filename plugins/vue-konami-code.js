import KonamiCode from 'vue-konami-code'
import Vue from 'vue'


Vue.use(KonamiCode, {callback () {
    alert('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }})