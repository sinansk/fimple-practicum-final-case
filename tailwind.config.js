/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "payment-bg": "url('../src/assets/payments.svg')",
        "payment-bg-image-mirror": "url('../src/assets/paymentsMirrored.svg')",
        "dark-payment-bg": "url('../src/assets/paymentsBlue.svg')",
      },
      // Define animation class
      animation: {
        "ltr-linear": "move-bg 500ms linear",
      },
      // Define keyframes
      keyframes: {
        "move-bg": {
          "0%": { "background-position": "150% 0" },
          "100%": { "background-position": "100% 0" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
