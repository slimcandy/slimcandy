import * as React from "react"
import { graphql, type HeadProps, Link, type PageProps } from "gatsby"

import Seo from "../components/Seo"
import RichHeaderLayout from "../layouts/RichHeaderLayout"
import NoPosts from "../components/NoPosts"
import SignUpForm from "../components/SignUpForm"

function IndexPage({ data }: PageProps<Queries.ArticlesQuery>): JSX.Element {
  const siteMetadata = data.site?.siteMetadata
  const posts = data.allSanityPost.nodes
  const notFirstPosts = posts.slice(1)

  if (posts === null || posts.length === 0) {
    return <NoPosts siteMetadata={siteMetadata} />
  }
  return (
    <RichHeaderLayout siteMetadata={siteMetadata}>
      <main className="clear-both">
        <article className="width-80 prose-primary">
          <Link to={`/posts/${posts[0].slug?.current as string}`}>
            <h2>{posts[0].title}</h2>
          </Link>
          <p className="first-letter">{posts[0].description}</p>
        </article>

        <div className="width-100">
          <span
            className="tracking-text
            py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5
            text-secondaryText dark:text-secondaryTextDark
        after:content-['⚘'] after:ml-0.5 after:opacity-50"
          >
            Fresh Harvest
          </span>
          <div
            className="flex flex-col flex-wrap
            gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 
            width-80"
          >
            {notFirstPosts.map(function showPost(post) {
              return (
                <article className="prose-primary" key={post.title}>
                  <Link to={`/posts/${post.slug?.current as string}`}>
                    <h3>{post.title}</h3>
                  </Link>
                  <p className="first-letter">{post.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </main>
      <SignUpForm />
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
