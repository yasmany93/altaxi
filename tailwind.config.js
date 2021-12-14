const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false,
    content: [
        './assets/**/*.html',
        './assets/**/*.vue',
        './assets/**/*.jsx',
        './templates/**/*.html',
        './templates/**/*.twig'
    ],
    options: {
      safelist: [
          /data-theme$/,
      ]
  },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '88': '22rem',
       '104': '26rem',
       '120': '30rem',
       '200': '50rem',
       '240': '60rem',
       '60-': '-15rem',
       '280-': '-70rem',
       '300-': '-75rem',
      },
      objectPosition: {
        '4/5': '80%',
      },
      keyframes: {

          heartbeat: {

              '0%, 100%': {
                  transform: 'scale(1)',
                  'transform-origin': 'center center',
                  'animation-timing-function': 'ease-out'
              },
              '10%': {
                  transform: 'scale(0.91)',
                  'animation-timing-function': 'ease-in'
              },
              '17%': {
                  transform: 'scale(0.98)',
                  'animation-timing-function': 'ease-out'
              },
              '33%': {
                  transform: 'scale(0.87)',
                  'animation-timing-function': 'ease-in'
              },
              '45%': {
                  transform: 'scale(1)',
                  'animation-timing-function': 'ease-out'
              }
          }
      },
      animation: {
          heartbeat: 'heartbeat 2.5s ease-in-out infinite both',
      },
      blur: {
          xs: '2px',
      }
    },
    colors: {
            extend: {},
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.warmGray,
            blue: colors.sky,
            red: colors.red,
            yellow: colors.amber,
            pink: colors.pink,
            green: colors.teal,
            orange: colors.orange,
            primary: colors.sky,
        },
    fontFamily: {
      'sans': ['Noto Sans','Open Sans', 'Oswald', 'Ubuntu', 'ui-sans-serif', 'system-ui'],
      'serif': ['Noto Serif','Georgia', 'Cambria', "Times New Roman", 'Times', 'ui-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
   // require('@tailwindcss/forms'),
    require('daisyui'),
  ],
}
