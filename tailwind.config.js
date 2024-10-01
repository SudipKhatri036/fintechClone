/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primered: "#cf2128",
        primered2: "#bd2025",
        primeblue: "#161b22",
      },
      backgroundImage: {
        "left-quote": "url('/images/quote-left.png')",
        "right-quote": "url('/images/quote-right.png')",
        "redslope-toleft": "url('/images/Shape-TP-1.svg')",
      },
    },
  },
  plugins: [],
};
