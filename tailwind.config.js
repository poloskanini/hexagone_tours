/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'hexagone-primary': '#4A67AE',     // bordeaux Hexagone
        'secondary': "#5C5D60",   // gris foncé Hexagone
      },
    },
  },
  plugins: [],
};
