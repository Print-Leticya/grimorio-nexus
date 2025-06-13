// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
theme: {
    extend: {
      colors: {
        parchment: "#F3EFE6",
        moss: "#8F9779",
        dusk: "#2F2F2F",
        "golden-spell": "#C6A15A",
        "arcane-rose": "#D8CAB8",
        "rune-bark": "#5C3333",
      },
      fontFamily: {
        serif: ["Crimson Pro", "serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};