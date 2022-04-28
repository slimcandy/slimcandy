import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'
import AboutMe from '../components/AboutMe'
import { article } from '../styles/styles.module.scss'
import { PostType } from '../utils/shared-types'
import ShareLink from '../components/ShareLink'

export const query = graphql`
  query FetchPostQuery($id: String!) {
    allMdx(filter: { id: { eq: $id } }) {
      nodes {
        id
        frontmatter {
          title
          date(fromNow: true)
          icon
          category
        }
        body
        slug
        excerpt(pruneLength: 100, truncate: true)
        timeToRead
      }
    }
  }
`

const SinglePost = ({ data }: any) => {
  const post: PostType = data?.allMdx?.nodes[0]
  const [isBrowser, setIsBrowser] = React.useState(false)
  React.useEffect(() => {
    setIsBrowser(typeof window !== 'undefined')

    return () => setIsBrowser(false)
  }, [])

  const copyUrl = async (url: string) => navigator.clipboard.writeText(url)
  const shareUrl = async ({ url, title }: { url: string; title: string }) =>
    await window.navigator.share({ url, title })

  if (!post) {
    return <p>Cannot find this post</p>
  }

  return (
    <Layout title={post.frontmatter.title} description={post.excerpt}>
      <div className="row position-relative border-top pt-4">
        <div className="col-md-8">
          <article className={`position-relative ${article}`} key={post.id}>
            <h1>{post.frontmatter.title}</h1>
            <small>
              {post.frontmatter.date}, {post.timeToRead} min read
            </small>
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
          <nav
            className="my-4 d-flex flex-wrap flex-row justify-content-between"
            aria-label="Pagination"
          >
            <Link className="btn btn-outline-primary rounded-pill" to="/">
              ← Back to posts
            </Link>
            {isBrowser && (
              <ShareLink
                url={document.URL}
                title={post.frontmatter.title}
                className="btn btn-outline-primary rounded-pill d-flex flex-row align-items-center gap-1"
              />
            )}
          </nav>
        </div>
        <aside className="col-md-4">
          <AboutMe />
        </aside>
      </div>
    </Layout>
  )
}

export default SinglePost
