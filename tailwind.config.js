/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      // sans: ["Barlow", ...defaultTheme.fontFamily.sans],
      barlow: "Barlow, sans-serif",
      barlowCondensed: "Barlow Condensed, sans-serif",
      bellefair: "Bellefair, serif",
    },
  },
  plugins: [],
};
