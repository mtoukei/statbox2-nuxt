const base = process.env.NODE_ENV === 'production' ? '/statbox2-nuxt/dist/' : '/'
module.exports = {
  // mode: 'spa',
  mode: 'universal',
  router: {
    base
  },
  // Headers of the page--------------------------------------------------------------------
  head: {
    title: '新統計BOX試作版',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: base + 'favicon.ico' }]
  },
  // Customize the progress-bar color-----------------------------------------------------
  loading: { color: '#fff' },
  // Global CSS
  css: ['element-ui/lib/theme-chalk/index.css'],
  // Plugins to load before mounting the App --------------------------------------------
  plugins: ['@/plugins/element-ui', { src: '@/plugins/d3', mode: 'client' }, { src: '@/plugins/vue-resize-directive', mode: 'client' }],
  // Nuxt.js dev-modules -------------------------------------------------------------------
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  // Nuxt.js modules-------------------------------------------------------------------------
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  // Axios module configuration See https://axios.nuxtjs.org/options------------------
  axios: {},
  // --------------------------------------------------------------------------------------------
  build: {
    transpile: [/^element-ui/],
    hardSource: true,
    // You can extend webpack config here
    extend(config, ctx) {
      // ソースマップ表示
      // config.devtool = 'eval-source-map'
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'eval-source-map'
      }
    }
  }
}
