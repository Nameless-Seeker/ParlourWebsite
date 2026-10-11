/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#F7F3EB',
          200: '#EFE7DA',
          300: '#E4D7C3',
        },
        taupe: {
          100: '#E8DFD1',
          200: '#D5C7B2',
          400: '#8C7D73',
          600: '#5E534D',
          800: '#3D342F',
        },
        blush: {
          50: '#FAF4F1',
          100: '#F3E6E2',
          200: '#E6D0C9',
          300: '#D9B9AF',
          500: '#C79A8B',
        },
        gold: {
          200: '#EFE4D2',
          300: '#E0CBAC',
          400: '#D4B892',
          500: '#C5A880',
          600: '#B38E5D',
          700: '#926F41',
        },
        espresso: {
          800: '#2A201C',
          900: '#1A1412',
          950: '#0E0C0B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        accent: ['"Italiana"', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(197, 168, 128, 0.35)',
        'luxury-subtle': '0 10px 40px -10px rgba(26, 20, 18, 0.06)',
        'luxury-elevated': '0 20px 50px -15px rgba(26, 20, 18, 0.12)',
      }
    },
  },
  plugins: [],
}
