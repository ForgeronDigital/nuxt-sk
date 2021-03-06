export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'fondasol',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/global.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/i18n.js', '~/plugins/axios-accessor.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "http://localhost:1337",

    // credentials:true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    port: 3000, // par défaut : 3000
    host: '192.168.137.1' // par défaut : localhost
  },
  pwa: {
    manifest: {
      name: 'Fondasol',
      lang: 'fr',
      useWebmanifestExtension: false
    },
    icon: {
      sizes: [64, 512],
      source:"./static/36863.png"
    }
  }
}
