export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-laravel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
   '@nuxtjs/vuetify',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  'nuxt-izitoast',
  ],
izitoast: {
    position: 'topRight',
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
overlayColor: 'rgba(11, 0, 0, 0.6)',
theme: 'light', //dark,
 zindex: 5,
// color: 'green', // blue, red, green, yellow
  }
,
auth: {
    login: '/login',
    logout: '/',
    strategies: {
      local: {
      token: {
        property: 'token',
        maxAge: 1800
      },
      user: {
        property: false 
      },
        endpoints: {
          login: {url:'/login', method: 'post', propertyName: 'token'},
          logout: {url: '/logout', method: 'post', },
          user: {url: '/users', method: 'get', propertyName: 'false'},
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    },
    // redirect:{
    //     home:'/'
    // }
},
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
 baseURL: "http://localhost:8000/api",
  credentials: true
},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
