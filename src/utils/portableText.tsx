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
        <h2 className="font-semibold sm:font-bold md:font-extrabold lg:font-black xl:font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-1 sm:my-2 md:my-3 lg:my-4 xl:my-5 py-1 sm:py-2 md:py-3lg:py-4 xl:py-5">
          {children}
        </h2>
      )
    },
    h3: function h3({ children }) {
      return (
        <h3 className="font-semibold sm:font-bold md:font-extrabold lg:font-black xl:font-black text-lg md:text-xl lg:text-2xl xl:text-3xl my-1 md:mb-2 md:mt-3 py-1 sm:pb-1 sm:pt-2 md:pb-2 md:pt-3 lg:pb-3 lg:pt-4 xl:pb-4 xl:pt-5">
          {children}
        </h3>
      )
    },
    h4: function h4({ children }) {
      return (
        <h4 className="font-semibold sm:font-bold md:font-extrabold lg:font-black xl:font-black md:text-lg lg:text-xl xl:text-2xl my-1 md:mb-2 md:mt-3 py-1 sm:pb-1 sm:pt-2 md:pb-2 md:pt-3 lg:pb-3 lg:pt-4 xl:pb-4 xl:pt-5">
          {children}
        </h4>
      )
    },
    normal: function p({ children }) {
      return (
        <p className="font-serif font-light md:font-normal xl:font-medium leading-normal lg:leading-relaxed text-base md:text-lg lg:text-xl xl:text-2xl">
          {children}
        </p>
      )
    },
  },
}

export default components
