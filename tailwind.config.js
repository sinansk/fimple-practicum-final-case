/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "right-bg-orange": "url('../src/assets/right-bg-orange.svg')",
        "right-bg-blue": "url('../src/assets/right-bg-blue.svg')",
        "left-bg-orange": "url('../src/assets/left-bg-orange.svg')",
        "left-bg-blue": "url('../src/assets/left-bg-blue.svg')",
        "not-found-bg-orange": "url('../src/assets/404-orange-cat.svg')",
        "not-found-bg-blue": "url('../src/assets/404-blue-cat.svg')",
      },
      // Define animation class
      animation: {
        "ltr-linear-right": "move-bg-right 600ms linear",
        "ltr-linear-left": "move-bg-left 600ms linear",
      },
      // Define keyframes
      keyframes: {
        "move-bg-right": {
          "0%": { "background-position": "150% 0" },
          "100%": { "background-position": "100% 0" },
        },
        "move-bg-left": {
          "0%": { "background-position": "-50% 0" },
          "100%": { "background-position": "100 0" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
