/** @format */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      zest: {
        50: '#fef9f4',
        100: '#fef3ea',
        200: '#fce2ca',
        300: '#fbd1a9',
        400: '#f7ae69',
        500: '#f48b29',
        600: '#dc7d25',
        700: '#b7681f',
        800: '#925319',
        900: '#784414',
      },
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      zest: {
        50: '#fef9f4',
        100: '#fef3ea',
        200: '#fce2ca',
        300: '#fbd1a9',
        400: '#f7ae69',
        500: '#f48b29',
        600: '#dc7d25',
        700: '#b7681f',
        800: '#925319',
        900: '#784414',
      },
    }),
    ringColor: (theme) => ({
      ...theme('colors'),
      zest: {
        50: '#fef9f4',
        100: '#fef3ea',
        200: '#fce2ca',
        300: '#fbd1a9',
        400: '#f7ae69',
        500: '#f48b29',
        600: '#dc7d25',
        700: '#b7681f',
        800: '#925319',
        900: '#784414',
      },
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      zest: {
        50: '#fef9f4',
        100: '#fef3ea',
        200: '#fce2ca',
        300: '#fbd1a9',
        400: '#f7ae69',
        500: '#f48b29',
        600: '#dc7d25',
        700: '#b7681f',
        800: '#925319',
        900: '#784414',
      },
    }),
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      '4xl': '0 50px 60px -19px rgba(0, 0, 0, 0.4)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
