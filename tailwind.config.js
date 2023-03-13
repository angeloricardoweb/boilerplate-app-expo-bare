/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0a91c7',
          primaryBlack: '#009ece',
          secondary: '#353535',
          tertiary: '#35C6BF',
          gray: '#898A8D',
          ice: '#F9F9F9',
          white: '#fff',
          danger: '#FF0058',
          warning: '#FFC700',
          dark: '#000',
        },
      },
      fontFamily: {
        regular: 'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold',
      },
    },
  },
  plugins: [],
};
