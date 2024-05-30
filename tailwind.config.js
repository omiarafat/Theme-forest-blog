
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
  },
    extend: {},
    fontFamily: {
      'open': ['Open Sans', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    }
  },
 
  plugins: [],
}