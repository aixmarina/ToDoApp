/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'black-title': '#373F47',
        'green1': '#6a6d4b',
        'red1':'#97614b',
        'white1': '#fbfbfb',
        'blue1':'#373F47',
        'pink1':'#c4825a',
        'pink2':'#CDAF99'
      },
      fontFamily: {
        'title':['Patrick Hand'],
      }
    },
  },
  plugins: [],
}