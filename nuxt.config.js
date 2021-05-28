export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Essaydons',
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
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    router: {
      middleware: ['auth']
    },
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
        scheme: 'oauth2',
        clientId: '353107788542-qccnahstd2fg37fkldlbgkam3uu8loc0.apps.googleusercontent.com',
        codeChallengeMethod: 'S256',
        scope: ['openid', 'profile', 'email'],
        responseType: 'code',
        endpoints: {
          userInfo: 'https://essaydons.co/api/me'
        },
        token: {
          property: 'token',
          type: 'Bearer'
        },
        redirectUri: `https://essaydons.co/api/login?callback=true&provider=google`,
      },
      facebook: {
        scheme: 'oauth2',
        endpoints: {
          // userInfo: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email'
          userInfo: 'https://essaydons.co/api/me'
        },
        clientId: '525187695512107',
        scope: ['public_profile', 'email'],
        redirectUri: `https://essaydons.co/api/login?callback=true&provider=facebook`,
        token: {
          property: 'token',
          type: 'Bearer'
        },
        responseType: 'code token',
      },
    }
  },

  loading: { color: '#170000' },

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
