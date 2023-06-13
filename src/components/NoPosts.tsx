import { Link } from "gatsby"
import React from "react"
import TinyLayout from "../layouts/TinyLayout"
import { type TSiteMetadata } from "../utils/types"

function NoPosts({
  children,
  siteMetadata,
}: {
  children?: React.ReactNode
  siteMetadata?: TSiteMetadata
}): JSX.Element {
  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="font-serif my-1 sm:my-2 md:my-3 lg:my-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <article
          className="prose prose-neutral dark:prose-invert prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl
          prose-a:underline 
          prose-a:decoration-black dark:prose-a:decoration-zinc-500
          prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:decoration-red-700 focus:prose-a:outline-none focus:prose-a:no-underline focus:prose-a:ring-4 focus:prose-a:ring-offset-2 focus:prose-a:ring-stone-900 dark:focus:prose-a:ring-zinc-500 focus:prose-a:bg-white dark:focus:prose-a:bg-zinc-800"
        >
          <h1>No blog posts found.</h1>
          <p>
            Check <Link to="/">the home page</Link>
          </p>
          {children}
        </article>
      </main>
    </TinyLayout>
  )
}

export default NoPosts
