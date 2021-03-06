module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  content: [],
  theme: {
    extend: {
      colors: {
        blue: {
          450: '#1ea7fd',
        },
      },
    },
    fontFamily: {
      sans: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      inner: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
