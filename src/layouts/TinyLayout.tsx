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
      <div
        className="
      after:content-['❦'] 
      after:block 
      after:w-full 
      after:text-center 
      after:text-6xl 
      after:text-palette5-blue-300 
      after:opacity-80"
      >
        {siteMetadata != null && (
          <header
            className="flex flex-col justify-center items-center mb-1 sm:mb-2 md:mb-3 lg:mb-4
          text-secondaryText dark:text-secondaryTextDark
          print:hidden"
          >
            <Link to="/" className="link-secondary">
              <h2 className="tracking-text" title="js.garden">
                Home Page
              </h2>
            </Link>
          </header>
        )}
        {children}
      </div>
      <ContactForm />
    </>
  )
}

export default TinyLayout
