const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sofia Sans Extra Condensed", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primaryText: "#171717",
        primaryBackground: "#fafafa",
        secondaryText: "#525252",
        secondaryBackground: "#d4d4d4",

        primaryTextDark: "#e5e5e5",
        primaryBackgroundDark: "#171717",
        secondaryTextDark: "#737373",
        secondaryBackgroundDark: "#404040",
      },
    },
  },
  plugins: [require("tailwindcss-hyphens"), require("@tailwindcss/typography")],
}
