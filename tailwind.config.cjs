/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'brand': "#0eb845",
        'brand-gray': "#d7d7d7",
        "brand-black": "#0b1014"
      },
      fontFamily: {
        'Sora': ['Sora'],
        'Syne': ['Syne'],

      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
