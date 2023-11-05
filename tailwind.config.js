/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor'
    
       
      },
      fontFamily:{
        
        Signika: 'Signika, sans-serif',
        Playfair:'Playfair Display, serif',
        Playpen: 'Playpen Sans, cursive'
      }
    },
  },
  variants: {},
  plugins: [],
}

