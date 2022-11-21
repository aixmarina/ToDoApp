/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'black-title': '#10100a',
        'green1': '#6a6d4b',
        'red1':'#97614b',
        'white': '#ffff',
        'blue1':'#1a2e32',
        'pink1':'#c19c80',
        'pink2':'#CDAF99'
      },
      fontFamily: {
        'title':['Patrick Hand'],
      }
    },
  },
  plugins: [],
}