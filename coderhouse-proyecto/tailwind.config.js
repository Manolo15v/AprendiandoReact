/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
