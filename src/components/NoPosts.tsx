import { Link } from "gatsby"
import React from "react"
import TinyLayout from "../layouts/TinyLayout"

function NoPosts({ children }: { children?: React.ReactNode }): JSX.Element {
  return (
    <TinyLayout>
      <main className="tufte-container font-serif min-padding-y">
        <article className="tufte-article">
          <h1>No blog posts found.</h1>
          <p>
            Check <Link to="/solutions">my solutions for business</Link>.
          </p>
          {children}
        </article>
      </main>
    </TinyLayout>
  )
}

export default NoPosts
