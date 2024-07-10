/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        bgGray: 'var(--bg-gray)',
        defaultColor: 'var(--default-color)',
        headingColor: 'var(--heading-color)',
        accentColor: 'var(--accent-color)',
        surfaceColor: 'var(--surface-color)',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        'heading-font': ['Raleway', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
