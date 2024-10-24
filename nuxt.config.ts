// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/scripts'],
  css: ['~/assets/css/main.css', '~/assets/css/bootstrap-grid.min.css'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' }
      ],
      script: [
        { src: "https://telegram.org/js/telegram-web-app.js" }
      ],
    },
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en'
  },
  plugins: [
    '~/plugins/telegram.js'
  ]
})