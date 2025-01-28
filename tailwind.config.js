/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e8ad3b",
        secondary: "#d16e13",
        tertiary: "#bc8850"
      }
    },
  },
  plugins: [],
}