import * as React from "react"
import { graphql, type HeadProps, Link, type PageProps } from "gatsby"

import Seo from "../components/Seo"
import NoPosts from "../components/NoPosts"

function IndexPage({ data }: PageProps<Queries.ArticlesQuery>): JSX.Element {
  const posts = data.allSanityPost.nodes

  return (
    <main className="mx-auto max-w-6xl p-4">
      <ol
        className="grid sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 md:gap-x-8"
        reversed
      >
        {(posts === null || posts.length === 0) && <NoPosts />}
        {posts.map(function showPost(post) {
          return (
            <li key={post.title}>
              <Link to={`/${post.slug?.current}`} className="link">
                <ArticlePreview article={post} />
              </Link>
            </li>
          )
        })}
      </ol>
    </main>
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

function ArticlePreview({ article }: { article: any }): JSX.Element {
  return (
    <article className="group w-full md:max-w-xl lg:max-w-4xl xl:max-w-6xl">
      <div className="py-4 mx-auto mb-4 w-72 rounded-2xl object-cover group-hover:ring-2 group-hover:ring-half-baked-300 group-hover:ring-offset-8">
        <h2 className="pb-4 font-display group-hover:text-half-baked-300">
          {article.title}
        </h2>
        <p className="bookish line-clamp-6 group-hover:text-gray-400">
          {article.description}
        </p>
      </div>
    </article>
  )
}
