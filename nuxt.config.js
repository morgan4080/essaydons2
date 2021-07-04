export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Essay Dons',
    script: [
      { src: 'https://js.stripe.com/v3/', async: true },
      { src: 'https://embed.tawk.to/60e191e2649e0a0a5cca71b2/1f9oi3nnu',
        async: true,
        crossorigin: '*',
        charset: 'UTF-8',
        callback: () => {
          const Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date();

          Tawk_API.onLoad = () => {
            if(Tawk_API.isVisitorEngaged()){
              console.log("visitor engaged")
            }
          }
        } },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
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
    rewriteRedirects: true,
    fullPathRedirect: true,
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/order'
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
          userInfo: 'https://essaydons.co/api/me',
          token: 'https://essaydons.co/api/login?callback=true&provider=google', // post request with code property in exchange for token
          logout: false
        },
        token: {
          property: 'token',
          type: 'Bearer'
        },
        redirectUri: `https://essaydons.co/login`,
        grantType: 'authorization_code'
      },
      facebook: {
        scheme: 'oauth2',
        endpoints: {
          // userInfo: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email'
          userInfo: 'https://essaydons.co/api/me',
          token: 'https://essaydons.co/api/login?callback=true&provider=facebook',
          logout: false
        },
        clientId: '525187695512107',
        scope: ['public_profile', 'email'],
        redirectUri: `https://essaydons.co/login`,
        token: {
          property: 'token',
          type: 'Bearer'
        },
        responseType: 'code',
      },
    }
  },

  loading: {
    color: '#000000',
    height: '4px',
    continuous: true
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [`~/plugins/currency.js`,`~/plugins/axios.js`,],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  serverMiddleware: [
    '~/server-middleware/log.js'
  ],

  image: {
    // Options
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    '@nuxtjs/proxy',
    'portal-vue/nuxt',
    '@nuxt/image',
  ],

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
  }
}
