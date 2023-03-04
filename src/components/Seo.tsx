import * as React from "react"

function Seo({
  description = "",
  title = "",
  children,
}: {
  description?: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <>
      <html lang="en" />
      <body className="hyphens-auto transition-all" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </>
  )
}

export default Seo
