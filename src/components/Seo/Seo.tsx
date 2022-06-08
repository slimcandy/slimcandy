import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { SeoPropsType, SiteMetaDataType } from './types'

function Seo(props: SeoPropsType) {
  const data: SiteMetaDataType = useStaticQuery(graphql`
    query SiteMetaDataQuery {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `)

  const defaults = data?.site?.siteMetadata
  const { title = '', description = '', path = '' } = props
  const url = new URL(path || '/', defaults?.siteUrl)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.toString()} />

      <meta property="og:url" content={url.toString()} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  )
}

export default Seo
