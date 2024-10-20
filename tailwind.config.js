/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#888888",
        "custom-dark-gray": "#4B4B4B",
        "green-dark": "#3a6b3a",
        "green-transparent-1": "#3e5835cf",
        gold: "#daa121",
        "green-transparent-2": "#3e5835ca",
        "green-transparent-3": "#3e5835b0",
      },
    },
  },
  plugins: [],
};
