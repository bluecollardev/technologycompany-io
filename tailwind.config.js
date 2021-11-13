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
    'secondary': '#C1FF78',
    'danger': '#01cdfe',
    }),
    fontSize: {
      sm: ['10px', '14px'],
      base: ['16px', '18px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      special: '#C9CACC',
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
       'sans': ['Roboto'],
       'header': ['Genos'],
       'serif': ['"Rokkitt"'],
       'mono': ['"Fira Mono"'],
       'title': ['Monoton']

    },
    extend: {
       backgroundImage: {
         'hero-pattern': "url('assets/images/main.jpg')",
         'footer-texture': "url('/img/footer-texture.png')",
         'about-us-team': "url('assets/images/about-us-team.jpg')"
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
