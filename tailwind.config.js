/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'socialLimit': '1385px'
      },
    },
    fontFamily: {
      logoName: ['Rajdhani']
    }
  },
  plugins: [],
}

