import * as React from "react"
import { graphql, type HeadProps, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import { type TCategoryContext } from "../utils/types"
import NoPosts from "../components/NoPosts"

function PostsByCategory({
  data,
}: {
  children: React.ReactNode
  data: Queries.PostsByCategoryQuery
}): JSX.Element {
  const posts = data?.allSanityPost?.nodes
  const siteMetadata = data?.site?.siteMetadata

  if (posts === null || posts.length === 0) {
    return <NoPosts siteMetadata={siteMetadata} />
  }

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        {posts.map(post => (
          <article
            key={post.slug?.current ?? ""}
            className="border-[thin] border-black w-full 
            grid grid-cols-1 md:grid-cols-5"
          >
            {post.mainImage?.asset != null && (
              <GatsbyImage
                image={post.mainImage.asset.gatsbyImageData}
                alt={post.mainImage.asset.altText ?? post.title ?? ""}
                className="md:col-span-2"
                objectFit="contain"
              />
            )}
            <div
              className="md:col-span-3 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 
              font-serif 
              prose prose-neutral dark:prose-invert prose-base md:prose-lg lg:prose-xl xl:prose-2xl
          prose-a:underline 
          prose-a:decoration-black dark:prose-a:decoration-zinc-500
          prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:decoration-red-700 focus:prose-a:outline-none focus:prose-a:no-underline focus:prose-a:ring-4 focus:prose-a:ring-offset-2 focus:prose-a:ring-stone-900 dark:focus:prose-a:ring-zinc-500 focus:prose-a:bg-white dark:focus:prose-a:bg-zinc-800"
            >
              <small className="font-sans">{post.publishedAt}</small>
              <Link to={`/posts/${post.slug?.current as string}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.description}</p>
            </div>
          </article>
        ))}
      </main>
    </TinyLayout>
  )
}

export default PostsByCategory

export function Head({
  data,
  pageContext,
  location,
}: HeadProps<Queries.PostsByCategoryQuery, TCategoryContext>): JSX.Element {
  const category = pageContext.name ?? "Posts by Category"

  return <Seo title={category} pathname={location.pathname} />
}

export const PostsByCategoryQuery = graphql`
  query PostsByCategory($slug: String!) {
    allSanityPost(
      sort: { publishedAt: DESC }
      limit: 100
      filter: { category: { slug: { current: { eq: $slug } } } }
    ) {
      nodes {
        title
        slug {
          current
        }
        description
        mainImage {
          asset {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF, JPG, PNG]
              breakpoints: [750, 1080, 1366, 1920]
              fit: FILL
            )
            altText
          }
        }
        publishedAt(formatString: "MMMM DD, YYYY")
        readMore
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
