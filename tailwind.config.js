/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: {
          100: "#EFE5E5",
          200: "#E3DADA",
          300: "#D6CECE",
          400: "#CAC3C3",
          500: "#BDB8B8",
          600: "#B1ACAC",
          700: "#A4A1A1",
          800: "#989595",
          900: "#8B8A8A"
        }
      }
    },
  },
  plugins: [],
}
