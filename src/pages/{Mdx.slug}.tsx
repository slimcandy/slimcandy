import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'
import AboutMe from '../components/AboutMe'
import { article } from '../styles/styles.module.scss'
import { PostType } from '../utils/shared-types'

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
      <div className='row position-relative border-top pt-4'>
        <div className='col-md-8'>
          <article className={`position-relative ${article}`} key={post.id}>
            <h1>{post.frontmatter.title}</h1>
            <small>
              {post.frontmatter.date}, {post.timeToRead} min read
            </small>
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
          <nav
            className='my-4 d-flex flex-wrap flex-row justify-content-between'
            aria-label='Pagination'>
            <Link className='btn btn-outline-primary rounded-pill' to='/'>
              ← Back to posts
            </Link>
            {isBrowser && (
              <>
                {window.navigator.canShare &&
                window.navigator.canShare({
                  title: post.frontmatter.title,
                  url: document.URL,
                }) ? (
                  <button
                    className='btn btn-outline-primary rounded-pill d-flex flex-row align-items-center gap-1'
                    onClick={() =>
                      shareUrl({
                        title: post.frontmatter.title,
                        url: document.URL,
                      })
                    }>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-box-arrow-up'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z'
                      />
                      <path
                        fill-rule='evenodd'
                        d='M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z'
                      />
                    </svg>
                    Share url
                  </button>
                ) : (
                  <button
                    className='btn btn-outline-primary rounded-pill d-flex flex-row align-items-center gap-1'
                    onClick={() => copyUrl(document.URL)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-clipboard'
                      viewBox='0 0 16 16'>
                      <path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z' />
                      <path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z' />
                    </svg>
                    Copy url
                  </button>
                )}
              </>
            )}
          </nav>
        </div>
        <aside className='col-md-4'>
          <AboutMe />
        </aside>
      </div>
    </Layout>
  )
}

export default SinglePost
