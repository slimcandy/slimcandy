import { graphql, useStaticQuery } from "gatsby"

export function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          motto
          image
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}
