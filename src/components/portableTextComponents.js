import * as React from "react"
import Refractor from "react-refractor"
import js from "refractor/lang/javascript"
import typescript from "refractor/lang/typescript"

Refractor.registerLanguage(js)
Refractor.registerLanguage(typescript)

const components = {
  types: {
    image: function image({
      value: {
        asset: { _ref },
      },
    }) {
      return <img src={_ref} alt="" />
    },
    code: function codeOutput({ value: { code, language, highlightedLines } }) {
      return (
        <Refractor
          language={language}
          value={code}
          markers={highlightedLines}
        />
      )
    },
  },
}

export default components
