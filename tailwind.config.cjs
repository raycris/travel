/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Montserrat: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black:"#000000",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        gray: {
          50: "#f9fafb",
          200: "#e5e7eb",
          300: "#d1d5db",
        },
      },
      backgroundImage: {
        LA: "url('../assets/images/LA.jpg')",
        bali: "url('../assets/images/bali.jpg')",
        miami: "url('../assets/images/miami.jpg')",
        europe: "url('../assets/images/europe.jpg')",
        sydney: "url('../assets/images/sydney.jpg')",
        norway: "url('../assets/images/norway.jpg')",
        chicago: "url('../assets/images/chicago.jpg')",
        iceland: "url('../assets/images/iceland.jpg')",
        seattle: "url('../assets/images/seattle.jpg')",
        new_york: "url('/src/assets/images/new_york.jpg')",
        yosemite: "url('../assets/images/yosemite.jpg')",
        switzerland: "url('../assets/images/switzerland.jpg')",
        sanFrancisco: "url('../assets/images/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../assets/images/sanFranciscoDesktop.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
