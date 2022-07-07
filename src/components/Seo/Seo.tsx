import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { SeoPropsType, SiteMetaDataType } from './types'

function Seo(props: SeoPropsType) {
  const data: SiteMetaDataType = useStaticQuery(graphql`
    query SiteMetaDataQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 1) {
        edges {
          node {
            frontmatter {
              date
            }
          }
        }
      }
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
  const { title, description, path, lang, meta = [] } = props

  const defaultTitle = data?.site?.siteMetadata?.title
  const url = new URL(path || '/', defaults?.siteUrl)
  const lastPostDate = data.allMdx.edges[0].node.frontmatter.date
  const personalImage =
    'https://raw.githubusercontent.com/slimcandy/slimcandy/master/images/alex.png'

  const ldJson = {
    '@context': 'http://schema.org',
    '@type': 'Blog',
    description,
    isFamilyFriendly: 'http://schema.org/True',
    url,
    dateModified: lastPostDate,
    inLanguage: 'en_GB',
    keywords: [
      'slimcandy',
      'react',
      'developer',
      'js',
      'typescript',
      'gatsby',
      'graphql',
      'javascript'
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    author: {
      '@type': 'Person',
      '@id': 'https://reactdeveloper.netlify.app/about',
      name: 'Alex',
      image: {
        '@type': 'ImageObject',
        contentUrl: personalImage,
        url: 'https://github.com/slimcandy'
      }
    }
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: 'description',
          content: description
        },

        //  Facebook Open Graph
        { property: 'og:url', content: url.toString() },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:locale', content: 'en_GB' },
        { property: 'og:image', content: personalImage },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '241' },
        { property: 'og:image:height', content: '241' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@slimcandy' },
        { name: 'twitter:creator', content: '@slimcandy' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description }
      ].concat(meta)}
    >
      <link rel="canonical" href={url.toString()} />
      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  )
}

export default Seo
