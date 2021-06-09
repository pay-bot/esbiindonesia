module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    objectPosition: {
      bottom: 'bottom',
      left: 'left',

      'left-bottom': 'left bottom',

      'left-top': 'left top',
      right: 'right',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
