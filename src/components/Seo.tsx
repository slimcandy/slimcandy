import * as React from "react"
import { useSiteMetadata } from "../utils/useSiteMetadata"

function Seo({
  description = "",
  title = "",
  children,
  pathname = "",
  ogType = "website",
}: {
  description?: string
  title: string
  children?: React.ReactNode
  pathname?: string
  ogType?: "website" | "article"
}) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🤑</text></svg>"
      />
      <body className="hyphens-auto transition-all" />

      {children}
    </>
  )
}

export default Seo
