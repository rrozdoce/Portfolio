/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#2B1B1B',
        'custom-gray': '#363434',
        'custom-yellow': '#FF9900',
        'custom-red': '#FF0C0C',
        'custom-green-1': '#0CF431',
        'custom-green-2': '#0FFD43',
        'custom-light-blue': '#00F0FF',
        'custom-black': '#0C0B0B',
        'custom-light-pink': '#F0A7A7',
        'custom-purple': '#FA00FF'  
      },
      fontFamily: {
        'Inconsolata': ['Inconsolata', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

