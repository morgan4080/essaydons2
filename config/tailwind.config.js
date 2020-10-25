module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'large': '3rem',
      },
      height: {
        '80': '23rem'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
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
