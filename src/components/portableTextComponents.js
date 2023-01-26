import * as React from "react"
import Refractor from "react-refractor"
import js from "refractor/lang/javascript"
import typescript from "refractor/lang/typescript"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"

Refractor.registerLanguage(js)
Refractor.registerLanguage(typescript)

const components = {
  types: {
    image: function image({
      value: {
        asset: { _ref },
      },
    }) {
      const sanityConfig = {
        projectId: process.env.SANITY_PROJECT_ID || "qtyf8bhl",
        dataset: process.env.SANITY_DATASET || "production",
      }
      const imageAssetId = _ref

      const imageData = getGatsbyImageData(
        imageAssetId,
        {
          height: 300,
          placeholder: "dominantColor",
          formats: ["auto", "webp", "avif", "jpg", "png"],
          breakpoints: [750, 1080, 1366, 1920],
          fit: "fillmax",
        },
        sanityConfig
      )

      return <GatsbyImage image={imageData} />
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
}

export default components
