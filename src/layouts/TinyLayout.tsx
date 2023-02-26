import * as React from "react"
import { Link } from "gatsby"
import { TSiteMetadata } from "../utils/types"
import Footer from "../components/Footer"

function TinyLayout({
  children,
  siteMetadata,
}: {
  children: React.ReactNode
  siteMetadata?: TSiteMetadata
}) {
  return (
    <>
      {siteMetadata && (
        <header className="md:py-1 lg:py-1.5 xl:py-2 max-w-screen-2xl mx-1 lg:mx-2 border-b-2 border-stone-500 border-double">
          <Link
            to="/"
            className="hover:underline hover:decoration-8 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white block"
            title="Home Page"
          >
            <h3 className="lowercase md:uppercase text-center font-serif font-medium sm:font-semibold md:font-bold lg:font-extrabold xl:font-black md:text-lg lg:text-xl xl:text-2xl">
              {siteMetadata.title}
            </h3>
          </Link>
        </header>
      )}
      {children}
      <Footer siteMetadata={siteMetadata} />
    </>
  )
}

export default TinyLayout
