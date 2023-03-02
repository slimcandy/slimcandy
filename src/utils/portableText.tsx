import * as React from "react"
import Refractor from "react-refractor"
import js from "refractor/lang/javascript"
import typescript from "refractor/lang/typescript"
import json from "refractor/lang/json"
import yaml from "refractor/lang/yaml"
import css from "refractor/lang/css"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { PortableTextComponents } from "@portabletext/react"

Refractor.registerLanguage(js)
Refractor.registerLanguage(typescript)
Refractor.registerLanguage(json)
Refractor.registerLanguage(yaml)
Refractor.registerLanguage(css)

const components: PortableTextComponents = {
  types: {
    image: function image(value: IGatsbyImageData) {
      return <GatsbyImage image={value} alt="" />
    },
    code: function codeOutput(props) {
      console.log("code props", props)
      const {
        value: { code, language, highlightedLines },
      } = props
      return (
        <Refractor
          language={language}
          value={code}
          markers={highlightedLines}
          className="not-prose font-mono text-xs sm:text-sm md:text-base lg:text-md xl:text-lg 2xl:text-xl"
        />
      )
    },
  },
  marks: {
    "custom-iframe": function iframe({ value: { src }, text }) {
      return (
        <iframe
          src={src}
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
          name={text}
          title={text}
          style={{
            width: "100%",
            height: "28rem",
            border: "none",
          }}
        >
          See
          <a href={src}>{text}</a>
        </iframe>
      )
    },
    "apple-podcast": function podcastIFrame({ value: { src }, text }) {
      return (
        <iframe
          id="embedPlayer"
          src={src}
          height="175px"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *; clipboard-write"
          style={{
            width: "100%",
            maxWidth: "660px",
            overflow: "hidden",
            borderRadius: "10px",
            transform: "translateZ(0px)",
            animation: "2s ease 0s 6 normal none running loading-indicator",
            backgroundColor: "rgb(228, 228, 228)",
          }}
          title={text}
        >
          Listen to
          <a href={src}>{text}</a>
        </iframe>
      )
    },
  },
}

export default components
