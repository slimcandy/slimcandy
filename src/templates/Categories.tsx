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
                objectFit="cover"
                as="figure"
                loading="lazy"
              />
            )}
            <div
              className="md:col-span-3 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 
              prose-primary"
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
