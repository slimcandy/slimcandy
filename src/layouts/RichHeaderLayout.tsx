import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineMessage } from "react-icons/ai"
import { BsBriefcase } from "react-icons/bs"

import { type TCategories, type TSiteMetadata } from "../utils/types"

function RichHeaderLayout({
  children,
  siteMetadata,
}: {
  children: React.ReactNode
  siteMetadata?: TSiteMetadata
  categories?: TCategories
}): JSX.Element {
  return (
    <>
      <header
        className="py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12
        border-b-4 border-palette5-blue-300
        print:hidden"
      >
        <div
          className="grid grid-cols-4 items-center space-x-4
        width-80"
        >
          <div className="max-w-xl col-start-1 col-end-5">
            <div
              className="font-serif prose prose-palette5 dark:prose-invert
    prose-base md:prose-lg xl:prose-xl 2xl:prose-2xl"
            >
              {typeof siteMetadata?.author === "string" && (
                <h1>{siteMetadata.author}</h1>
              )}
              {typeof siteMetadata?.description === "string" && (
                <p>{siteMetadata?.description}</p>
              )}
            </div>
            <div className="flex flex-wrap items-center space-x-4 text-xl mt-4">
              <Link
                to="/contacts"
                className="button w-fit flex flex-wrap items-center justify-between space-x-4
              font-black"
              >
                <AiOutlineMessage className="mr-1 text-palette5-blue-50" />
                Contact me
              </Link>
              <Link
                to="/solutions"
                className="button-tertiary w-fit flex flex-wrap items-center justify-between space-x-4"
              >
                <BsBriefcase className="mr-1 text-palette5-blue-400" />
                Solutions for you
              </Link>
            </div>
          </div>
          <StaticImage
            src="../../static/images/photo.jpeg"
            alt="Photo of me in Adidas tracksuit. I'm standing at the edge of a cliff – national park."
            className="col-start-5 col-end-6
                    rounded-full
                    w-20 sm:w-24 md:w-32 lg:w-44
                    h-20 sm:h-24 md:h-32 lg:h-44
                    max-w-full
                    m-0 p-0
                    border-2 border-palette5-blue-400"
            width={256}
            height={256}
            placeholder="dominantColor"
            formats={["auto", "webp", "avif", "jpg", "png"]}
            objectFit="cover"
            as="figure"
            loading="lazy"
          />
        </div>
      </header>
      <div className="bg-gradient-to-b from-palette5-blue-50 to-palette5-blue-100">
        {children}
      </div>
    </>
  )
}

export default RichHeaderLayout
