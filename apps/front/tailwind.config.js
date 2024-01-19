/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderPrimary: '#262626',
        backgroundHoverPrimary: '#171717'
      }
    },
  },
  plugins: [],
}