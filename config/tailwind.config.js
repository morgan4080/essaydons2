module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'xxs': '15rem'
      },
      gridTemplateRows: {
        'orders': '80px 1fr'
      },
      inset: {
        '10': '10%',
        '30': '30%',
        '35': '35%',
        '40': '40%',
        '50': '2rem',
        '70': '7rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '1/6': '100%',
      },
      borderRadius: {
        'large': '3rem',
      },
      height: {
        '80': '23rem'
      },
      padding: {
        '60': '12rem',
        '70': '16rem',
        '80': '20rem'
      },
      backgroundPosition: {
        'center-0': '100% 0%',
        'left-0': '63% 100%',
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    inset: ['responsive'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
