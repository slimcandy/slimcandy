import { withOptions } from "tailwindcss/plugin"

function round(num) {
  return num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "")
}

const bookishStyles = {
  "@apply hyphens-auto font-bookishSerif sm:max-w-5xl max-w-xl hanging-punctuation-book":
    {},
  "p + p": {
    "@apply indent-5": {},
  },
  "& > p:first-of-type::first-line": {
    "@apply font-medium font-variant-caps-small": {},
  },
  "& > p:first-of-type::first-letter": {
    "@apply pr-2 font-bookishInitials font-thin initial-letter-3": {},
  },

  // LISTS
  "ul, ol, dl": {
    "@apply list-outside": {},
  },

  // BLOCKQUOTE
  "blockquote, em, i, q, cite": {
    "@apply italic font-thin": {},
  },

  // CODE
  "code, pre, kbd, samp": {
    "@apply font-mono font-medium": {},
  },
}

export default withOptions(
  function bookishPlugin(options = { className: "bookish" }) {
    return function ({ addComponents }) {
      const { className } = options

      addComponents({ [`.${className}`]: bookishStyles })
    }
  },
  function bookishConfig() {
    return {
      theme: {
        extend: {
          fontSize: {
            "9/10": "90%",
          },
          margin: {
            "1/12": `${round((1 / 12) * 100)}%`,
          },
          padding: {
            "1/12": `${round((1 / 12) * 100)}%`,
          },
        },
      },
    }
  },
)
