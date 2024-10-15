/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#888888', // Color específico para algunos párrafos
        'custom-dark-gray': '#4B4B4B', // Color para otros párrafos       
      },
    },
  },
  plugins: [],
}
