/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'socialLimit': '1150px'
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      logoName: ['Rajdhani']
    }
  },
  plugins: [],
}

