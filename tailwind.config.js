/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#03131A",
        "secondary-color": "#13242D"
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
