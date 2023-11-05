/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        
        Signika: 'Signika, sans-serif',
        Playfair:'Playfair Display, serif',
        Playpen: 'Playpen Sans, cursive'
      }
    },
  },
  plugins: [],
}

