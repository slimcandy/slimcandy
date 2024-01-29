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
      colors: {
        "js-garden": {
          black: "#1E2328",
          green: "#87BEC3",
        },
        "palette5-blue": {
          50: "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#486581",
          700: "#334E68",
          800: "#243B53",
          900: "#102A43",
        },
        "palette5-red": {
          50: "#FFE3E3",
          100: "#FFBDBD",
          200: "#FF9B9B",
          300: "#F86A6A",
          400: "#EF4E4E",
          500: "#E12D39",
          600: "#CF1124",
          700: "#AB091E",
          800: "#8A041A",
          900: "#610316",
        },
        "palette5-teal": {
          50: "#EFFCF6",
          100: "#C6F7E2",
          200: "#8EEDC7",
          300: "#65D6AD",
          400: "#3EBD93",
          500: "#27AB83",
          600: "#199473",
          700: "#147D64",
          800: "#0C6B58",
          900: "#014D40",
        },
      },
      typography: ({ theme }) => ({
        palette5: {
          css: {
            "--tw-prose-body": theme("colors.palette5-blue.900"),
            "--tw-prose-headings": theme("colors.palette5-blue.900"),
            "--tw-prose-lead": theme("colors.palette5-blue.700"),
            "--tw-prose-links": theme("colors.palette5-blue.900"),
            "--tw-prose-bold": theme("colors.palette5-blue.900"),
            "--tw-prose-counters": theme("colors.palette5-blue.600"),
            "--tw-prose-bullets": theme("colors.palette5-blue.400"),
            "--tw-prose-hr": theme("colors.palette5-blue.300"),
            "--tw-prose-quotes": theme("colors.palette5-blue.900"),
            "--tw-prose-quote-borders": theme("colors.palette5-blue.300"),
            "--tw-prose-captions": theme("colors.palette5-blue.700"),
            "--tw-prose-code": theme("colors.palette5-blue.900"),
            "--tw-prose-pre-code": theme("colors.palette5-blue.100"),
            "--tw-prose-pre-bg": theme("colors.palette5-blue.900"),
            "--tw-prose-th-borders": theme("colors.palette5-blue.300"),
            "--tw-prose-td-borders": theme("colors.palette5-blue.200"),
            "--tw-prose-invert-body": theme("colors.palette5-blue.200"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.palette5-blue.300"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.palette5-blue.400"),
            "--tw-prose-invert-bullets": theme("colors.palette5-blue.600"),
            "--tw-prose-invert-hr": theme("colors.palette5-blue.700"),
            "--tw-prose-invert-quotes": theme("colors.palette5-blue.100"),
            "--tw-prose-invert-quote-borders": theme(
              "colors.palette5-blue.700",
            ),
            "--tw-prose-invert-captions": theme("colors.palette5-blue.400"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.palette5-blue.300"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.palette5-blue.600"),
            "--tw-prose-invert-td-borders": theme("colors.palette5-blue.700"),
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-hyphens"), require("@tailwindcss/typography")],
}
