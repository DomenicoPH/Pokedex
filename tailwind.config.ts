/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poke: ['poke', 'sans-serif']
      }
    },
  },
  plugins: [],
}

