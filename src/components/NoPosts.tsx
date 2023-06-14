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
      <main className="width-80">
        <article className="prose-primary">
          <h1>No blog posts found.</h1>
          <p>
            Check{" "}
            <Link to="/" className="link">
              the home page
            </Link>
          </p>
          {children}
        </article>
      </main>
    </TinyLayout>
  )
}

export default NoPosts
