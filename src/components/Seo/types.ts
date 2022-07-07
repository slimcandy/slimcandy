export interface ISeoMeta {
  name: string
  content: string
}
export type SeoPropsType = {
  title: string
  description?: string
  path?: string
  lang?: string
  meta?: ISeoMeta[]
}

export type SiteMetaDataType = {
  allMdx: {
    edges: [
      {
        node: {
          frontmatter: {
            date: string
          }
        }
      }
    ]
  }
  site?: {
    siteMetadata?: {
      title: string
      description: string
      siteUrl: string
    }
  }
}
