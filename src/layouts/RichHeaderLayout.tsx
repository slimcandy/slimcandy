import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineBulb, AiOutlineMessage } from "react-icons/ai"

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
        border-b-2 border-palette5-blue-100
        print:hidden"
      >
        <div className="width-100 min-padding-x flex flex-col">
          {typeof siteMetadata?.author === "string" && (
            <h1 className="tracking-text text-xl sm:text-2xl md:text-4xl lg:text-6xl">
              {siteMetadata.author}
            </h1>
          )}
          <div className="grid grid-cols-4 gap-x-2 md:gap-x-4">
            <div className="col-start-1 col-end-5">
              <div className="font-serif prose-set">
                {typeof siteMetadata?.description === "string" && (
                  <p className="max-reading-w">{siteMetadata?.description}</p>
                )}
              </div>
              <menu
                className="flex flex-wrap flex-col md:flex-row items-baseline 
                gap-y-2 gap-x-1 md:gap-x-2
                label-text-size
                mt-4"
              >
                <li>
                  <Link
                    to="/contacts"
                    className="button w-fit flex items-center gap-x-2 whitespace-nowrap"
                  >
                    <AiOutlineMessage className="mr-1 text-palette5-blue-50" />
                    Contact me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="button button-secondary w-fit flex items-center gap-x-2 whitespace-nowrap"
                  >
                    <AiOutlineBulb className="mr-1 text-palette5-blue-400" />
                    Solutions for you
                  </Link>
                </li>
              </menu>
            </div>
            <StaticImage
              src="../../static/images/photo.jpeg"
              alt="Photo of me in Adidas tracksuit. I'm standing at the edge of a cliff – national park."
              className="col-start-5 col-end-6
                    w-32 sm:w-44 
                    h-fit
                    m-0 p-0
                    border-2 border-palette5-blue-100"
              width={256}
              height={256}
              placeholder="dominantColor"
              formats={["auto", "webp", "avif", "jpg", "png"]}
              objectFit="cover"
              as="figure"
              loading="lazy"
            />
          </div>
        </div>
      </header>
      <div className="bg-gradient-to-b from-palette5-blue-50 to-palette5-blue-100">
        {children}
      </div>
    </>
  )
}

export default RichHeaderLayout
