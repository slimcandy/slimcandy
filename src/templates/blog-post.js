import * as React from "react"
import { Link, graphql } from "gatsby"
import { PortableText } from "@portabletext/react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import portableTextComponents from "../components/portableTextComponents"

const BlogPostTemplate = ({
  data: { previous, next, site, sanityPost: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  console.log("post", post.author.name)
  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>{post.publishedAt}</p>
        </header>
        <section itemProp="articleBody">
          <PortableText
            value={post._rawContent}
            components={portableTextComponents}
          />
        </section>
        <hr />
        <footer>
          <Bio author={post.author.name}>
            <PortableText
              value={post.author.bio}
              components={portableTextComponents}
            />
          </Bio>
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={"/" + previous.slug.current} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={"/" + next.slug.current} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { sanityPost: post } }) => {
  return <Seo title={post.title} />
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      publishedAt(formatString: "DD MMMM YYYY")
      author {
        name
        bio {
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
      }
      _rawContent
      categories {
        description
        title
      }
    }

    previous: sanityPost(slug: { current: { eq: $previousPostSlug } }) {
      title
      slug {
        current
      }
    }
    next: sanityPost(slug: { current: { eq: $nextPostSlug } }) {
      title
      slug {
        current
      }
    }
  }
`
