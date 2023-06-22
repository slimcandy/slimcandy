import { graphql, type HeadProps, Link, type PageProps } from "gatsby"
import * as React from "react"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"

function Page404({ data }: PageProps<Queries.Page404Query>): JSX.Element {
  const siteMetadata = data.site?.siteMetadata

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="font-serif min-padding-y sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <article className="prose-primary">
          <h1>Page not found</h1>
          <p>Sorry 😔, we couldn’t find what you were looking for.</p>
          <p>
            Check <Link to="/">the home page</Link>
          </p>
        </article>
      </main>
    </TinyLayout>
  )
}

export default Page404

export function Head({
  data,
  location,
}: HeadProps<Queries.Page404Query>): JSX.Element {
  const siteDescription = data.site?.siteMetadata?.description ?? ``

  return (
    <Seo
      title="Page not found"
      description={siteDescription}
      pathname={location.pathname}
    />
  )
}

export const Page404Query = graphql`
  query Page404 {
    site {
      siteMetadata {
        title
        description
        motto
      }
    }
  }
`
