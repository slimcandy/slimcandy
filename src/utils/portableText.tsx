import * as React from "react"
import Refractor from "react-refractor"
import js from "refractor/lang/javascript"
import typescript from "refractor/lang/typescript"
import json from "refractor/lang/json"
import yaml from "refractor/lang/yaml"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { PortableTextReactComponents } from "@portabletext/react"

Refractor.registerLanguage(js)
Refractor.registerLanguage(typescript)
Refractor.registerLanguage(json)
Refractor.registerLanguage(yaml)

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: function image(value: IGatsbyImageData) {
      return <GatsbyImage image={value} alt="" />
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
  marks: {
    "custom-iframe": function iframe({ value: { src }, text }) {
      return (
        <iframe
          src={src}
          frameborder="0"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
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
          frameborder="0"
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
  block: {
    h2: function h2({ children }) {
      return (
        <h2 className="text-xl sm:text-3xl md:text-5xl sm:p-1 md:p-2 text-center my-1 md:my-2 text-stone-900 px-1 md:px-2 lg:px-4">
          {children}
        </h2>
      )
    },
    h3: function h3({ children }) {
      return <h3 className="text-xl md:text-3xl my-2">{children}</h3>
    },
    h4: function h4({ children }) {
      return <h4 className="text-lg md:text-2xl my-2">{children}</h4>
    },
  },
}

export default components
