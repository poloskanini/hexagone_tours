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
        primary: 'var(--color-secondary)',
        secondary: 'var(--color-secondary)',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        playfair: ['var(--font-playfair)'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
