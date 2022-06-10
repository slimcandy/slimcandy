import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Layout } from '../components'
import { PostType } from '../utils/shared-types'
import { article } from '../styles/styles.module.scss'

function IndexPage() {
  const data = useStaticQuery(graphql`
    query FetchPostsQuery {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          id
          frontmatter {
            title
            date(fromNow: true)
            icon
            category
          }
          slug
          excerpt(pruneLength: 140, truncate: true)
          timeToRead
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const posts: PostType[] = data?.allMdx?.nodes || []
  const firstPost: PostType = posts[0] || null
  const lastTwoPosts: PostType[] = [posts[1], posts[2]] || []
  const restPosts: PostType[] = posts.slice(3) || []

  const siteTitle = data?.site?.siteMetadata?.title

  return (
    <Layout>
      {firstPost && (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">
              {firstPost.frontmatter.title}
            </h1>
            <p className="lead my-3">{firstPost.excerpt}</p>
            <p className="lead mb-0">
              <Link to={firstPost.slug} className="text-white fw-bold">
                Continue reading…
              </Link>
            </p>
          </div>
        </div>
      )}
      {lastTwoPosts && (
        <div className="row mb-2">
          {lastTwoPosts.map((post: PostType) => (
            <div className="col-md-6" key={post.id}>
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    {post.frontmatter.category}
                  </strong>
                  <h3 className="mb-0">{post.frontmatter.title}</h3>
                  <div className="mb-1 text-muted">
                    {post.frontmatter.date}, {post.timeToRead} min read
                  </div>
                  <p className="card-text mb-auto">{post.excerpt}</p>
                  <Link to={post.slug} className="stretched-link">
                    Continue reading
                  </Link>
                </div>
                {post.frontmatter.icon && (
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label={`${post.frontmatter.title}: Thumbnail`}
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>{post.frontmatter.title}</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text
                        x="50%"
                        y="50%"
                        fill="#eceeef"
                        dy=".3em"
                        fontSize="3em"
                        textAnchor="middle"
                      >
                        {post.frontmatter.icon}
                      </text>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="row">
        {restPosts && (
          <div className="col mb-5">
            {siteTitle && (
              <h3 className="pb-4 mb-4 fst-italic border-bottom">
                {siteTitle}
              </h3>
            )}
            <div className="row row-cols-1 row-cols-md-2 g-sm-5">
              {restPosts.map((post: PostType) => (
                <article
                  className={`blog-post position-relative border-start ${article}`}
                  key={post.id}
                >
                  <h2>{post.frontmatter.title}</h2>
                  <small>
                    {post.frontmatter.date}, {post.timeToRead} min read
                  </small>

                  <p>{post.excerpt}</p>
                  <Link to={post.slug} className="stretched-link">
                    Continue reading
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
