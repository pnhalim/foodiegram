/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#b675ff',
          200: '#973ffc'
        },
        secondary: {
          100: '#fa564d',
          200: '#eb3d34',
          300: '#bd2d26'
        }
      }
    },
  },
  plugins: [],
}
