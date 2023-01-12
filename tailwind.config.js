const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#8B53FF",
        "secondary-color": "#13242D",
        "dark-primary-color": "#010100",
        "dark-secondary-color": "#1E1A1D",
      },
      fontFamily: {
        sans: ["var(--font-gilroy)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
