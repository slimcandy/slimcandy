import * as React from "react"
import Refractor from "react-refractor"
import js from "refractor/lang/javascript"
import typescript from "refractor/lang/typescript"
import json from "refractor/lang/json"
import yaml from "refractor/lang/yaml"
import css from "refractor/lang/css"
import { GatsbyImage } from "gatsby-plugin-image"
import { type PortableTextComponents, PortableText } from "@portabletext/react"
import { getGatsbyImageData } from "gatsby-source-sanity"

Refractor.registerLanguage(js)
Refractor.registerLanguage(typescript)
Refractor.registerLanguage(json)
Refractor.registerLanguage(yaml)
Refractor.registerLanguage(css)

export const components: PortableTextComponents = {
  types: {
    image: function imageOutput(props) {
      const {
        value: {
          asset: { _ref },
        },
      } = props
      const sanityConfig = {
        projectId: "qtyf8bhl",
        dataset: "production",
      }

      const imageData = getGatsbyImageData(
        _ref,
        {
          height: 300,
          placeholder: "dominantColor",
          fit: "fillmax",
        },
        sanityConfig
      )
      if (imageData != null)
        return (
          <GatsbyImage
            image={imageData}
            alt=""
            objectFit="contain"
            as="figure"
            loading="lazy"
          />
        )
      else return <i>Image not found</i>
    },
    code: function codeOutput(props) {
      const {
        value: { code, language, highlightedLines },
      } = props
      return (
        <Refractor
          language={language ?? "javascript"}
          value={code}
          markers={highlightedLines}
          className="not-prose font-mono text-xs sm:text-sm md:text-base lg:text-md xl:text-lg 2xl:text-xl"
        />
      )
    },
    aside: function annotationOutput({ value }) {
      return (
        <aside>
          <PortableText value={value.content} />
        </aside>
      )
    },
  },
  block: {
    // aside: function annotationOutput({ value, children }) {
    //   return (
    //     <aside>
    //       block <br /> {toPlainText(value)}:{children}
    //     </aside>
    //   )
    // },
  },
  marks: {
    "custom-iframe": function iframe({ value: { src }, text }) {
      return (
        <iframe
          src={src}
          loading="lazy"
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
  },
}

export default components
