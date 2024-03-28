import tailwindcssDebugScreens from "tailwindcss-debug-screens"
import defaultTheme from "tailwindcss/defaultTheme"
import typography from "@tailwindcss/typography"
// import plugin from "tailwindcss/plugin";
import initialLetter from "tailwind-initial-letter"
import hangingPunctuation from "tailwind-hanging-punctuation"
import fontVariantCaps from "tailwind-font-variant-caps"
import bookish from "tailwind-bookish"

export default {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "half-baked": {
          50: "#f2f9f9",
          100: "#deefef",
          200: "#c1dee0",
          300: "#87bec3",
          400: "#63a5ad",
          500: "#488992",
          600: "#3e727c",
          700: "#385e66",
          800: "#344f56",
          900: "#2f444a",
          950: "#1b2c31",
        },
        shark: {
          50: "#f4f6f7",
          100: "#e2e8eb",
          200: "#c9d4d8",
          300: "#a3b4bd",
          400: "#768e9a",
          500: "#5a7280",
          600: "#4e606c",
          700: "#43515b",
          800: "#3c464e",
          900: "#363d43",
          950: "#1e2328",
        },
        gray: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#7f7f7f",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#262626",
        },
      },
      fontFamily: {
        bookishSerif: [
          `"EB Garamond"`,
          {
            fontFeatureSettings: '"swsh", "ss05", "dlig", "hlig"',
          },
          ...defaultTheme.fontFamily.serif,
        ],
        bookishInitials: [
          "Goudy Initials",
          "EB Garamond",
          ...defaultTheme.fontFamily.serif,
        ],
        serif: ["EB Garamond", ...defaultTheme.fontFamily.serif],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        initials: [
          "Goudy Initials",
          "EB Garamond",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      fontSize: {
        "9/10": "90%",
      },
      margin: {
        "1/12": "calc(1 / 12 * 100%)",
      },
      padding: {
        "1/12": "calc(1 / 12 * 100%)",
      },
    },
  },
  plugins: [
    tailwindcssDebugScreens,
    typography,
    initialLetter,
    hangingPunctuation,
    fontVariantCaps,
    bookish,
  ],
}
