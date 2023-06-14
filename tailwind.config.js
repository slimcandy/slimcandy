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
        primaryText: "rgb(27, 27, 27)",
        primaryBackground: "rgb(255, 255, 255)",
        secondaryText: "rgb(79, 50, 28)",
        secondaryBackground: "rgb(248, 241, 227)",

        primaryTextDark: "rgb(176, 176, 176)",
        primaryBackgroundDark: "rgb(18, 18, 18)",
        secondaryTextDark: "rgba(255, 255, 255, 0.78)",
        secondaryBackgroundDark: "rgb(74, 74, 77)",
      },
    },
  },
  plugins: [require("tailwindcss-hyphens"), require("@tailwindcss/typography")],
}
