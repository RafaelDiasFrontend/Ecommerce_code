import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Template',
    htmlAttrs: {
      lang: 'pt-br',
       },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'template' },
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:400,700,900&display=swap'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css',
    '~/assets/css/typography.css',    
    '~/assets/style/mobile_600.css',
    '~/assets/style/mobile_480.css',
    '~/assets/style/desktop.css',
    '~/assets/style/animations.css',    

    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css'

  
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '~/plugins/mixins/user',
      '~/plugins/vueSmoothScroll',  
      '~/plugins/Masks',          
      { src: '~/plugins/slick', mode: 'client'},    
     
       
  ],
  
  

 
 
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/robots',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#363855',
        cancelButtonColor: '#ff7674'
      }
    ] 
  ],
  robots: {
    UserAgent: 'Googlebot',
    Disallow: '/users',
    UserAgent: 'Bingbot',
    Disallow: '/admin'
  },

  optimizedImages: {
    optimizeImages: true
  },
  
  transition: {
    name: 'fade',
    mode: 'out-in'
  },  
 
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

  target: 'static',

 
  generate: {

   routes: [
    '/produtos/produto-01',
    '/produtos/produto-02',
    '/produtos/produto-03',
    '/produtos/produto-04',
    '/produtos/produto-05',
    
    '/categorias/um',
    '/categorias/dois',
    '/categorias/tres',
    '/categorias/quatro',
  ]
},


  axios: {
    baseURL: 'http://localhost/Ecommerce_code/api/public/api'
    // baseURL: 'http://api.agenciakpax.com.br/api'
  },
  auth: {    
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: 'auth/me',
            method: 'get',
            propertyName: 'data'
          }, 
          logout: {
            url: 'logout',
            method: 'post'           
          } 
          }  
        }
      }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#363855',
          accent: colors.grey.darken3,
          secondary: '#EEC04C',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#D15252',
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
