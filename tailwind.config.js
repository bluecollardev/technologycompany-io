const path = require('path')
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
