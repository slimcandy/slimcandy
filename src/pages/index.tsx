import * as React from "react"
import { graphql, type HeadProps, Link, type PageProps } from "gatsby"

import Seo from "../components/Seo"
import RichHeaderLayout from "../layouts/RichHeaderLayout"
import NoPosts from "../components/NoPosts"

function IndexPage({ data }: PageProps<Queries.ArticlesQuery>): JSX.Element {
  const siteMetadata = data.site?.siteMetadata
  const posts = data.allSanityPost.nodes

  if (posts === null || posts.length === 0) {
    return <NoPosts siteMetadata={siteMetadata} />
  }
  return (
    <RichHeaderLayout siteMetadata={siteMetadata}>
      <main className="py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6">
        <h3
          className="tracking-text text-center text-palette5-blue-400
            py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5

            after:content-['~'] after:text-palette5-blue-100
            after:text-4xl
            after:block after:w-full after:text-center after:leading-3"
        >
          Article Index
        </h3>
        <div
          className="flex flex-col flex-wrap
            gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 
            width-100 px-4 md:px-0"
        >
          <ol
            className="list-outside list-none md:list-decimal
              flex flex-col flex-wrap
              font-serif
              marker:text-palette5-blue-200"
            reversed
          >
            {posts.map(function showPost(post) {
              return (
                <li key={post.title}>
                  <article className="grid grid-cols-5 items-baseline gap-x-4">
                    <div
                      className="col-start-1 col-end-3
                      font-black text-end
                      sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                    >
                      <Link
                        to={`/posts/${post.slug?.current as string}`}
                        className="link"
                      >
                        {post.title}
                      </Link>
                    </div>
                    <div className="col-start-3 col-end-6">
                      <div className="prose-set">
                        <p className="max-reading-w">{post.description}</p>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </main>
    </RichHeaderLayout>
  )
}

export default IndexPage

export function Head({
  data,
  location,
}: HeadProps<Queries.ArticlesQuery>): JSX.Element {
  const siteTitle = data.site?.siteMetadata?.title ?? ``
  const siteDescription = data.site?.siteMetadata?.description ?? ``

  return (
    <Seo
      title={`Home Page | ${siteTitle}`}
      description={siteDescription}
      pathname={location.pathname}
    />
  )
}

export const articlesQuery = graphql`
  query Articles {
    allSanityPost(sort: { publishedAt: DESC }, limit: 100) {
      nodes {
        title
        slug {
          current
        }
        description
        readMore
        publishedAt(formatString: "MMMM DD, YYYY")
      }
    }
    site {
      siteMetadata {
        author
        title
        description
        motto
        social {
          github
          linkedin
          youtube
        }
      }
    }
  }
`
