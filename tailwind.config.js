const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        body: 'Manrope',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#1e313b',
        blue: {
          light: '#708895',
          default: '#596e79',
          dark: '#43535c',
        },
        brown: {
          light: '#f0ece2',
          DEFAULT: '#dfd3c3',
          dark: '#c7b198',
        },
      },
    },
  },
};
