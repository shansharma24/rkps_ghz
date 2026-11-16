/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sas: {
          navy: '#0b2a63',
          navyDark: '#071f4c',
          navyDeep: '#052051',
          red: '#9b2335',
          redDark: '#7a1f2b',
          gold: '#f0b429',
          goldLight: '#faba28',
          alt: '#f6f6f6',
          tx: '#2b2b2b',
          mu: '#666666'
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
