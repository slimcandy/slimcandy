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
        primaryText: "#000000",
        primaryBackground: "#FFFFFF",
        secondaryText: "#333333",
        secondaryBackground: "#F9F9F9",

        primaryTextDark: "#FFFFFF",
        primaryBackgroundDark: "#121212",
        secondaryTextDark: "#BBBBBB",
        secondaryBackgroundDark: "#1E1E1E",
      },
    },
  },
  plugins: [require("tailwindcss-hyphens"), require("@tailwindcss/typography")],
}
