import { graphql, HeadProps } from "gatsby"
import * as React from "react"

import IndexPageLayout from "../templates/Index"
import Seo from "../components/Seo"

function Page404() {
  return (
    <IndexPageLayout>
      <h1 className="text-xl sm:text-3xl md:text-5xl sm:p-1 md:p-2 text-center my-1 md:my-2 text-stone-900 px-1 md:px-2 lg:px-4">
        Page not found
      </h1>
      <div className="grid md:grid-cols-5 xl:grid-cols-4 gap-x-4 gap-y-2 items-stretch justify-center border-b-2 border-b-stone-900 border-double px-4 sm:px-3 md:px-2 lg:px-1 xl:px-0 text-justify">
        <div className="md:order-2 md:col-span-3 xl:col-span-2 flex flex-col items-center">
          <article className="font-light font-serif leading-normal max-w-xl md:font-normal text-base md:text-lg text-stone-900">
            <p>Sorry 😔, we couldn’t find what you were looking for.</p>
          </article>
        </div>
      </div>
    </IndexPageLayout>
  )
}

export default Page404

export function Head({ data }: HeadProps<Queries.Page404Query>) {
  const siteTitle = data.site?.siteMetadata?.title
  const siteDescription = data.site?.siteMetadata?.description || ``

  return (
    <Seo
      title={`Page not found | ${siteTitle}`}
      description={siteDescription}
    />
  )
}

export const articlesQuery = graphql`
  query Page404 {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
