/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rkps: {
          navy: '#0b1b3d',
          royal: '#13306b',
          accent: '#d97706',
          gold: '#f59e0b',
          amber: '#f29913',
          darkbg: '#071126',
          surface: '#f8fafc',
          border: '#e2e8f0',
          redaccent: '#ef4444'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        'float-slow': 'floatSlow 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
