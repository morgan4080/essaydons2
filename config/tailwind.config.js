module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Calibre", sans-serif'],
        sans: ['"Source Sans Pro", sans-serif'],
      },
      colors: {
        teal: {
          '50': '#d0feed',
          '100': '#74fcca',
          '200': '#63fcc4',
          '300': '#0ef884',
          '400': '#42fbb7',
          '500': '#31fbb1',
          '600': '#21faaa',
          '700': '#10faa4',
          '800': '#05f49c',
          '900': '#05e392',
        }
      },
      maxWidth: {
        'xxs': '15rem',
        'custom': '10rem'
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
        '1/8': '30%',
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
    width: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}
