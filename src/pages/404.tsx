import { graphql, type HeadProps, Link, type PageProps } from "gatsby"
import * as React from "react"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"

function Page404({ data }: PageProps<Queries.Page404Query>): JSX.Element {
  const siteMetadata = data.site?.siteMetadata

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="font-serif my-1 sm:my-2 md:my-3 lg:my-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <article
          className="prose prose-neutral prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl
          prose-a:underline prose-a:decoration-black prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:decoration-red-700 focus:prose-a:outline-none focus:prose-a:no-underline focus:prose-a:ring-4 focus:prose-a:ring-offset-2 focus:prose-a:ring-stone-900 focus:prose-a:bg-white"
        >
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
