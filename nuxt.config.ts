import tailwindTypography from '@tailwindcss/typography'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-content-assets',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss'
  ],
  image: {
    dir: '.nuxt/content-assets/public'
  },  
  router: {
    base: '/martingasser/',
    options: {
      strict: false
    }
  },  
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }  
})
