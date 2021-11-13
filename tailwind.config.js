const colors = require('tailwindcss/colors')

module.exports = {

     purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
    ...theme('colors'),
    'primary': '#FF41F8',
    'secondary': '#b7ff65',
    'danger': '#01cdfe',
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: '#C9CACC',
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
       'sans': ['"Fira Mono"'],
       'serif': ['"Fira Mono"'],
       'mono': ['"Fira Mono"'],

    },
    extend: {
       backgroundImage: {
         'hero-pattern': "url('assets/images/main.jpg')",
         'footer-texture': "url('/img/footer-texture.png')",
        }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


// yellow: #ffff12
// grey #898A8F
