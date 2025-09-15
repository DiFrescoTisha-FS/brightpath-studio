/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#1A2238',
        'stone': '#AEB6BF',
        'gold': '#F2C94C',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}