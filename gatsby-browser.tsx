import * as React from "react"
import "prismjs/themes/prism.css"

import "./src/styles/global.css"
import TinyLayout from "./src/layouts/TinyLayout"

export function wrapPageElement({ element, props }) {
  return <TinyLayout {...props}>{element}</TinyLayout>
}
