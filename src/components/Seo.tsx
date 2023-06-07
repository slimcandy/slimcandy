import * as React from "react"
import { useSiteMetadata } from "../utils/useSiteMetadata"

function Seo({
  description = "",
  title = "",
  children,
  pathname = "",
  ogType = "website",
  ogImage = "",
}: {
  description?: string
  title: string
  children?: React.ReactNode
  pathname?: string
  ogType?: "website" | "article"
  ogImage?: string
}): JSX.Element {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: typeof title === "string" ? title : defaultTitle,
    description:
      typeof description === "string" ? description : defaultDescription,
    image:
      ogImage.length > 0 ? ogImage : `${siteUrl as string}${image as string}`,
    url: `${siteUrl as string}${typeof pathname === "string" ? pathname : ""}`,
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
      <meta property="og:image" content={seo.image} />
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
