import { graphql, useStaticQuery } from "gatsby"
import { type TSiteMetadata } from "./types"

export function useSiteMetadata(): TSiteMetadata {
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
