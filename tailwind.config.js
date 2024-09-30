/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primered": "#cf2128",
        "primered2": "#bd2025"
      }
    },
  },
  plugins: [],
}

