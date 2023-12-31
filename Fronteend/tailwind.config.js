/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#EEEEEE",
        secondary: "#7D1201",
        tertiary: "#143429",
        "black-100": "#092a1e",
        "black-200": "#002619",
        "white-100": "#f3f3f3",
        "gray-200" : "#EEEEEE",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};