import * as React from "react"

import "prismjs/themes/prism-tomorrow.css"
import "./src/styles/global.css"

interface OnRenderBodyArgs {
  setHeadComponents: (args: Array<React.ReactElement<any>>) => void
}

function onRenderBody({ setHeadComponents }: OnRenderBodyArgs): void {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/zantroke/Zantroke.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="ZantrokeFont"
    />,
  ])
}

export { onRenderBody }
