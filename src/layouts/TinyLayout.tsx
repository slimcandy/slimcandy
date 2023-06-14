import * as React from "react"
import { Link } from "gatsby"

import { type TSiteMetadata } from "../utils/types"
import ContactForm from "../components/ContactForm"

function TinyLayout({
  children,
  siteMetadata,
}: {
  children: React.ReactNode
  siteMetadata?: TSiteMetadata
}): JSX.Element {
  return (
    <>
      <div className="px-2 sm:px-3 md:pb-4 md:pt-4 lg:pb-5 xl:pb-6">
        {siteMetadata != null && (
          <header
            className="flex flex-col justify-center items-center mb-1 sm:mb-2 md:mb-3 lg:mb-4
          text-secondaryText dark:text-secondaryTextDark"
          >
            {typeof siteMetadata.title === "string" && (
              <Link to="/" className="link-secondary">
                <h2 className="font-serif sm:text-md md:text-lg lg:text-xl xl:text-2xl uppercase font-bold sm:tracking-wide md:tracking-wider lg:tracking-widest">
                  {siteMetadata.title}
                </h2>
              </Link>
            )}
            {typeof siteMetadata.motto === "string" && (
              <h3
                className="uppercase text-xs sm:text-sm md:text-md 
              xl:text-lg tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-0.5 md:py-1 lg:py-1.5 xl:py-2"
              >
                {siteMetadata.motto}
              </h3>
            )}
          </header>
        )}
        {children}
      </div>
      <hr className="border-t-[thin] border-slate-600 my-1 sm:my-1.5 md:my-2 lg:my-2.5 xl:my-3" />
      <ContactForm
        className="mx-auto 
        max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 
        px-2 sm:px-4 md:px-2 lg:px-0
        my-4 sm:my-8 md:my-12 lg:my-16"
      />
    </>
  )
}

export default TinyLayout
