/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "slab":`"Roboto Slab", serif`,
      "lato":`"Lato", sans-serif`
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
}