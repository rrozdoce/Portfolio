/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#2B1B1B',
        'custom-gray': '#363434',
      },
      fontFamily: {
        'Inconsolata': ['Inconsolata', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

