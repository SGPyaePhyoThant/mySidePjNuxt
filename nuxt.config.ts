// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
      head:{
        title:'Nuxt PPT',
        meta: [
          {
            name : 'description', content:'Shopping Nuxt3'
          }
        ],
        link : [
          {
            rel: 'stylesheet', href : 'https://fonts.googleapis.com/icon?family=Material+Icons',
          }
        ]
      }
  },
  runtimeConfig:{
    currencyKey : process.env.NUXT_CURRENCY_API_KEY
  }
})
