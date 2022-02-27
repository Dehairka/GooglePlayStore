require("dotenv").config();

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: '0.0.0.0'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Free Play Store',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Google Play Store but free.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/vue-read-more' },
    { src: '@/plugins/vue-cookies' },
    { src: '@/plugins/autocomplete-vue' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/device'
  ],
  eslint: {
    fix: true
  },
  styleResources: {
    scss: './assets/scss/*.scss'
  },
  pwa: {
    manifest: {
      name: 'Free Play Store',
      lang: 'fr',
      useWebmanifestExtension: false,
      start_url: 'https://free-play.store/',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#FFFFFF',
      theme_color: '#F8F8F8',
      icons: [
        {
          src: '/img/icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      workboxVersion: "1.0",
      autoRegister: true,
      enabled: true,
      offlineAnalytics: true,
    },
    publicExcludes: [
      '!robots.txt',
      '!sitemap.xml.gz',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    ['nuxt-twa-module', {
      /* module options */
      defaultUrl: 'https://free-play.store',
      hostName: 'free-play.store',
      sha256Fingerprints: ['/* your SHA-256 keys */'],
      applicationId: 'free-play.store',
      launcherName: 'Free Play Store',
      versionCode: 1,
      versionName: '1.0',
      statusBarColor: "#FFFFF",

      /* optional */
      /* overwrite default location for icon */
      iconPath: '/static/icon.png',
      /* Overwrite folder where to put .wellknown */
      distFolder: '.nuxt/dist/client'
    }],
    '@nuxtjs/auth',
  ],
  strapi: {
    url: "https://strapi.esteve.xyz" || "http://localhost:1337"
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.URL,
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          user: {
            url: 'users/me',
            method: 'get',
            propertyName: false
          },
          logout: false
        }
      }
    }
   },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}