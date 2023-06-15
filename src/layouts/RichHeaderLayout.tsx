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
        <header className="width-80">
          {typeof siteMetadata.title === "string" && (
            <div className="text-center">
              <Link to="/" className="link-secondary">
                <h2
                  className="sm:text-md md:text-lg lg:text-xl xl:text-2xl uppercase font-bold sm:tracking-wide md:tracking-wider lg:tracking-widest
                py-1 sm:py-2"
                >
                  {siteMetadata.title}
                </h2>
              </Link>
            </div>
          )}
          {typeof siteMetadata?.description === "string" && (
            <section className="pb-1 sm:pb-1.5 md:pb-2 lg:pb-2.5 xl:pb-3">
              <StaticImage
                src="../../static/images/photo.jpeg"
                alt="Photo of me in Adidas tracksuit. I'm standing at the edge of a cliff – national park."
                className="block
                    float-left
                    rounded-full
                    w-16 sm:w-20 md:w-26 lg:w-32
                    h-16 sm:h-20 md:h-26 lg:h-32
                    max-w-full
                    m-0 p-0
                    mr-2 sm:mr-4 md:mr-6 lg:mr-8 xl:mr-10
                    border-[thin] border-secondaryText dark:border-secondaryTextDark"
                width={126}
                height={126}
                placeholder="dominantColor"
                formats={["auto", "webp", "avif", "jpg", "png"]}
                objectFit="cover"
                as="figure"
                loading="lazy"
              />
              <p className="prose-secondary">
                {siteMetadata.description} &nbsp;
                <Link to="/about">My projects.</Link>
              </p>
              {siteMetadata?.social != null && (
                <ul
                  className="
                  flex flex-wrap items-center 
                    gap-2 sm:gap-2.5 md:gap-3 lg:gap-4"
                >
                  {typeof siteMetadata?.social?.youtube === "string" &&
                    siteMetadata.social.youtube.length > 0 && (
                      <li>
                        <a
                          href={siteMetadata.social.youtube}
                          className="link-secondary"
                        >
                          YouTube
                        </a>
                      </li>
                    )}
                  <li>
                    <a
                      href={siteMetadata?.social?.github ?? ""}
                      className="link-secondary"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteMetadata?.social?.linkedin ?? ""}
                      className="link-secondary"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              )}
            </section>
          )}
        </header>
      )}
      {children}
      <ContactForm />
    </>
  )
}

export default RichHeaderLayout
