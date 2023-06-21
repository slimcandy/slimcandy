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
        <div
          className="width-80 min-padding-x
        flex flex-col"
        >
          <div
            className="font-serif prose prose-palette5 dark:prose-invert
            prose-base md:prose-lg xl:prose-xl 2xl:prose-2xl
            mt-0 mb-4 sm:mb-6 md:mb-8"
          >
            {typeof siteMetadata?.author === "string" && (
              <h1>{siteMetadata.author}</h1>
            )}
          </div>
          <div className="grid grid-cols-4 gap-x-2 md:gap-x-4">
            <div className="col-start-1 col-end-5">
              <div
                className="font-serif prose prose-palette5 dark:prose-invert
                prose-base md:prose-lg xl:prose-xl 2xl:prose-2xl"
              >
                {typeof siteMetadata?.description === "string" && (
                  <p>{siteMetadata?.description}</p>
                )}
              </div>
              <menu
                className="flex flex-col md:flex-row items-baseline 
                gap-2
                label-text-size
                mt-4"
              >
                <li>
                  <Link
                    to="/contacts"
                    className="button w-fit flex items-center gap-x-2"
                  >
                    <AiOutlineMessage className="mr-1 text-palette5-blue-50" />
                    Contact me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="button-secondary w-fit flex items-center gap-x-2"
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
