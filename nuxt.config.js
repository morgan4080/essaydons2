export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Essaydons',
    script: [{ src: 'https://js.stripe.com/v3/', defer: true }, { src: "https://www.paypal.com/sdk/js?client-id=AYHrUgvtxhEEASQqu_wD-xzk4kk7jAlXuPnqc5oEiDy_WhfRHn5o3GkSrI013WBMZIwh1ue3Zn8YXLlw&currency=USD", "data-sdk-integration-source": "button-factory", defer: true }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/assets/main.scss', lang: 'sass' }
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: false,
          user: { url: '/api/me', method: 'get' }
        }
      },
      google: {
        client_id: '724202903355-q30cmukn8vkl63pi7pocftde4v20qscb.apps.googleusercontent.com'
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday'
        },
        clientId: '1671464192946675',
        scope: ['public_profile', 'email', 'user_birthday']
      },
    }
  },

  loading: { color: '#000000' },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [`~/plugins/currency.js`],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  serverMiddleware: [
    '~/server-middleware/log.js'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    '@nuxtjs/cloudinary',
    '@nuxtjs/proxy'
  ],

  cloudinary: {
    cloudName: 'essaydonsco',
    apiKey: '756518659458387',
    apiSecret: 'n8qvU5D-_mBUSSxRLJ1w9b3AbYM',
    useComponent: true
  },

  router: {
    middleware: ['auth']
  },

  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    withCredentials: true,
    baseURL: "/api/",
    proxy: true
  },

  proxy: {
    '/api/': { target: 'https://essaydons.co/api', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }
}
