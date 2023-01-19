/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'box': '1000px',
      },
      backgroundImage:{
        'fittlyf-background':"url(./Images/BG.png)",
      }
    },
    fontFamily: {
      'maharlika': ['Maharlika'],
      'poppins': ['Poppins'],
      'lato': ['Lato'],
      'oswald': ['Oswald'],
      'monda': ['Monda'],
      'arsenal':['Arsenal'],
      'merienda':['Merienda'],
    },
  },
  plugins: [require('tw-elements/dist/plugin'), require('flowbite/plugin')],
}
