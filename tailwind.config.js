/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Slate 900 - Deep Navy
          light: '#334155',   // Slate 700
        },
        secondary: {
          DEFAULT: '#64748B', // Slate 500
          light: '#94A3B8',   // Slate 400
        },
        accent: {
          DEFAULT: '#D97706', // Amber 600 - Executive Gold/Bronze
          hover: '#B45309',   // Amber 700
        },
        background: '#F8FAFC', // Slate 50
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px', // Cap max width at 1280px for cleaner reading
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95))",
      }
    },
  },
  plugins: [],
}
