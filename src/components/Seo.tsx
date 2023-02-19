import * as React from "react"
import { graphql } from "gatsby"

function Seo({
  description,
  title,
  children,
  data,
}: {
  description?: string
  title: string
  children?: React.ReactNode
  data: Queries.siteMetaQuery
}) {
  const siteMetadata = data?.site?.siteMetadata

  const metaDescription = description || siteMetadata?.description || ""
  const defaultTitle = siteMetadata?.title

  return (
    <>
      <html lang="en" />
      <body className="text-stone-500 hyphens-auto transition-all" />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export const SeoQuery = graphql`
  query siteMeta {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        social {
          email
          github
          linkedin
          podcast
          rss
          youtube
        }
      }
    }
  }
`

export default Seo
