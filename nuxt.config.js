console.log(process.env.NODE_ENV)
module.exports = {
  // mode: 'spa',
  mode: 'universal',
  router: {
    base: process.env.NODE_ENV === 'production' ? '/statbox2-nuxt/' : '/'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '新統計BOX試作版',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/statbox2-nuxt/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    // '@/plugins/d3',
    { src: '@/plugins/d3', mode: 'client' },
    { src: '@/plugins/vue-resize-directive', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
      // config.plugins.push(new HardSourceWebpackPlugin())
      // config.devtool = 'eval-source-map'
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'eval-source-map'
      }
    }
  }
}
