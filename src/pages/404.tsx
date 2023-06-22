import { type HeadProps, Link } from "gatsby"
import React from "react"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"

function Page404(): JSX.Element {
  return (
    <TinyLayout>
      <main className="tufte-container font-serif min-padding-y">
        <article className="tufte-article">
          <h1>😔 Page not found</h1>
          <p>Sorry, we couldn’t find what you were looking for.</p>
          <p>
            Check <Link to="/">the home page</Link>.
          </p>
        </article>
      </main>
    </TinyLayout>
  )
}

export default Page404

export function Head({ location }: HeadProps): JSX.Element {
  return <Seo title="Page not found" pathname={location.pathname} />
}
