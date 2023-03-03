import { graphql, HeadProps, Link, PageProps } from "gatsby"
import * as React from "react"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"

function AboutPage({ data }: PageProps<Queries.AboutPageQuery>) {
  const siteMetadata = data.site?.siteMetadata

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="font-serif my-1 sm:my-2 md:my-3 lg:my-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <article
          className="prose prose-neutral prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl
          prose-a:underline prose-a:decoration-black prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:decoration-red-700 focus:prose-a:outline-none focus:prose-a:no-underline focus:prose-a:ring-4 focus:prose-a:ring-offset-2 focus:prose-a:ring-stone-900 focus:prose-a:bg-white"
        >
          <h1>Alex</h1>
          <p>
            Join me on my journey to make $10k a month through coding. I share
            my tips and strategies on Github pet projects, semantic HTML, and JS
            performance, CSS tricks, and showcases. My personal blog is for web
            developers who also aspire to stand out in the tech industry.
          </p>
        </article>
      </main>
    </TinyLayout>
  )
}

export default AboutPage

export function Head({ data }: HeadProps<Queries.AboutPageQuery>) {
  const siteTitle = data.site?.siteMetadata?.title
  const siteDescription = data.site?.siteMetadata?.description || ``

  return (
    <Seo
      title={`Page not found | ${siteTitle}`}
      description={siteDescription}
    />
  )
}

export const AboutPageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
        motto
      }
    }
  }
`
