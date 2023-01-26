import * as React from "react"
import { Link, graphql } from "gatsby"
import { PortableText } from "@portabletext/react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import portableTextComponents from "../components/portableTextComponents"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allSanityPost.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title || post.slug.current

          return (
            <li key={post.slug.current}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.slug.current} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.publishedAt}</small>
                </header>
                <section>
                  <p itemProp="description">
                    <PortableText
                      value={post.description}
                      components={portableTextComponents}
                    />
                  </p>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allSanityPost(sort: { publishedAt: DESC }, limit: 1000) {
      totalCount
      nodes {
        title
        slug {
          current
        }
        description {
          _key
          _type
          children {
            _key
            _type
            marks
            text
          }
          list
          style
        }
        id
        publishedAt(formatString: "DD MMMM YYYY")
      }
    }
  }
`
