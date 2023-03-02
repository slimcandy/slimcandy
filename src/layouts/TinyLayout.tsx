import * as React from "react"
import { Link } from "gatsby"

import { TSiteMetadata } from "../utils/types"

function TinyLayout({
  children,
  siteMetadata,
}: {
  children: React.ReactNode
  siteMetadata?: TSiteMetadata
}) {
  return (
    <div className="px-2 sm:px-3 md:pb-4 md:pt-4 lg:pb-5 xl:pb-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
      {siteMetadata && (
        <header className="flex flex-col justify-center">
          {siteMetadata.title && (
            <Link
              to="/"
              className="underline decoration-black decoration-2 underline-offset-4 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-1.5 h-full w-full"
            >
              <h1 className="font-serif sm:text-md md:text-lg lg:text-xl xl:text-2xl uppercase font-bold sm:tracking-wide md:tracking-wider lg:tracking-widest">
                {siteMetadata.title}
              </h1>
            </Link>
          )}
          {siteMetadata.motto && (
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
  )
}

export default TinyLayout
