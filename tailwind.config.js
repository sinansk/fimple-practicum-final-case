/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "payment-bg-image": "url('../src/assets/payments.svg')",
      },
    },
  },
  plugins: [],
};
