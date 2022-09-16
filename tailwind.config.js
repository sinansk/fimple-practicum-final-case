/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Define animation class
      animation: {
        "ltr-image-right": "move-right 600ms linear",
        "ltr-image-left": "move-left 600ms linear",
      },
      // Define keyframes
      keyframes: {
        "move-right": {
          "0%": { transform: `translate(100%, 0)` },
          "100%": { transform: `translate(0, 0)` },
        },
        "move-left": {
          "0%": { transform: `translate(-50%, 0)` },
          "100%": { transform: `translate(0, 0)` },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
