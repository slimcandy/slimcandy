import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout, ShareLink } from '../components'
import { article } from '../styles/styles.module.scss'
import { PostType } from '../utils/shared-types'
import { ArrowLeft, GitHub, Twitter } from '../utils/icons'

const GITHUB_USERNAME = 'slimcandy'
const GITHUB_REPO_NAME = 'slimcandy'
const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
  document.URL
)}`

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

function SinglePost({ data }: any) {
  const post: PostType = data?.allMdx?.nodes[0]
  const [isBrowser, setIsBrowser] = React.useState(false)

  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/main/src/posts/${post.slug}.mdx`

  React.useEffect(() => {
    setIsBrowser(typeof window !== 'undefined')

    return () => setIsBrowser(false)
  }, [])

  if (!post) {
    return <p>Cannot find this post</p>
  }

  return (
    <Layout title={post.frontmatter.title} description={post.excerpt}>
      <div className="row position-relative border-top pt-4">
        <div className="col-12">
          <article className={`position-relative ${article}`} key={post.id}>
            <h1>{post.frontmatter.title}</h1>
            <small>
              {post.frontmatter.date}, {post.timeToRead} min read
            </small>
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
          <nav
            className="my-4 mt-5 d-flex flex-wrap flex-column flex-md-row justify-content-between gap-2 gap-md-0"
            aria-label="Pagination"
          >
            <div className="btn-group" role="group">
              <Link
                className="btn btn-outline-primary d-flex flex-row align-items-center gap-2"
                to="/"
              >
                <ArrowLeft /> Back to posts
              </Link>
              {isBrowser && (
                <ShareLink
                  url={document.URL}
                  title={post.frontmatter.title}
                  className="btn btn-outline-primary d-flex flex-row align-items-center gap-2"
                />
              )}
            </div>
            <div className="btn-group" role="group">
              <Link
                className="btn btn-outline-primary d-flex flex-row align-items-center gap-2"
                to={discussUrl}
              >
                <Twitter /> Discuss on Twitter
              </Link>
              <Link
                className="btn btn-outline-primary d-flex flex-row align-items-center gap-2"
                to={editUrl}
              >
                <GitHub /> Edit on GitHub
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </Layout>
  )
}

export default SinglePost
