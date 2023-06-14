import * as React from "react"
import { Link } from "gatsby"

import { type TCategories, type TSiteMetadata } from "../utils/types"
import ContactForm from "../components/ContactForm"
import { StaticImage } from "gatsby-plugin-image"

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
      {siteMetadata != null && (
        <header
          className="mx-auto 
                sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl
                px-2 sm:px-4 md:px-2 lg:px-0"
        >
          {typeof siteMetadata.title === "string" && (
            <Link to="/" className="link-secondary">
              <h2
                className="font-serif sm:text-md md:text-lg lg:text-xl xl:text-2xl uppercase font-bold sm:tracking-wide md:tracking-wider lg:tracking-widest
                py-1 sm:py-2
                text-center"
              >
                {siteMetadata.title}
              </h2>
            </Link>
          )}
          {typeof siteMetadata?.description === "string" && (
            <section className="pb-1 sm:pb-1.5 md:pb-2 lg:pb-2.5 xl:pb-3">
              <p
                className="
                overflow-hidden
                prose-secondary"
              >
                <StaticImage
                  src="../../static/images/photo.jpeg"
                  alt="Photo of me in Adidas tracksuit. I'm standing at the edge of a cliff – national park."
                  className="block
                    float-left
                    rounded-full
                    w-16 sm:w-20 md:w-26 lg:w-32
                    h-16 sm:h-20 md:h-26 lg:h-32
                    max-w-full
                    mr-2 sm:mr-4 md:mr-6 lg:mr-8 xl:mr-10
                    border-[thin] border-secondaryText dark:border-secondaryTextDark"
                  width={288}
                  placeholder="dominantColor"
                  formats={["auto", "webp", "avif", "jpg", "png"]}
                  breakpoints={[576, 768, 992, 1200]}
                  objectFit="cover"
                />
                {siteMetadata.description} &nbsp;
                <Link to="/about">My projects.</Link>
                {siteMetadata?.social != null && (
                  <menu
                    className="flex flex-wrap items-center 
                    gap-2 sm:gap-2.5 md:gap-3 lg:gap-4"
                  >
                    {typeof siteMetadata?.social?.youtube === "string" &&
                      siteMetadata.social.youtube.length > 0 && (
                        <li>
                          <a href={siteMetadata.social.youtube}>YouTube</a>
                        </li>
                      )}
                    <li>
                      <a href={siteMetadata?.social?.github ?? ""}>GitHub</a>
                    </li>
                    <li>
                      <a href={siteMetadata?.social?.linkedin ?? ""}>
                        LinkedIn
                      </a>
                    </li>
                  </menu>
                )}
              </p>
            </section>
          )}
        </header>
      )}
      {children}
      <ContactForm
        className="mx-auto 
        sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
      />
    </>
  )
}

export default RichHeaderLayout
