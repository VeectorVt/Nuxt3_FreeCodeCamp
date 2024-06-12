// https://nuxt.com/docs/api/configuration/nuxt-config
// import {resolve} from 'path'
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@pinia/nuxt'
  ],
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
    // 'pinia': "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs" 
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // ssr:false,
})
