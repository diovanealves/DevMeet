/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#FF5100',
        white: '#FFFFFF',
        gray: '#C6C6C6',
        background: '#282828',
        semanticGreen: '#04D361',
      },
      fontFamily: {
        regular: 'Epilogue_400Regular',
        semibold: 'Epilogue_500Medium',
        bold: 'Epilogue_700Bold',
        extrabold: 'Epilogue_800ExtraBold',
      },
    },
  },
  plugins: [],
}
