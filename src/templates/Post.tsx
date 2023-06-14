import * as React from "react"
import { graphql, type HeadProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"

import Seo from "../components/Seo"
import portableTextComponents from "../utils/portableText"
import TinyLayout from "../layouts/TinyLayout"
import NoPosts from "../components/NoPosts"

function SinglePostLayout({
  data,
}: {
  data: Queries.SinglePostLayoutQuery
}): JSX.Element {
  const siteMetadata = data?.site?.siteMetadata
  const post = data?.sanityPost

  if (post == null) {
    return <NoPosts siteMetadata={siteMetadata} />
  }

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="font-serif my-1 sm:my-2 md:my-3 lg:my-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <article
          itemScope
          itemType="http://schema.org/Article"
          className="prose-primary"
        >
          {typeof post?.title === "string" && (
            <h1 itemProp="headline">{post.title}</h1>
          )}
          {post._rawContent != null && (
            <section itemProp="articleBody">
              <PortableText
                value={post._rawContent}
                components={portableTextComponents}
              />
            </section>
          )}
        </article>
      </main>
    </TinyLayout>
  )
}

export default SinglePostLayout

export function Head({
  data,
  location,
}: HeadProps<Queries.SinglePostLayoutQuery>): JSX.Element | null {
  const postTitle = data.sanityPost?.title ?? ""
  const postDescription = data.sanityPost?.description ?? ""

  const imageData = data.sanityPost?.mainImage?.asset?.gatsbyImageData
  let ogImage = null
  if (typeof imageData !== "undefined") {
    ogImage = getImage(imageData)
  }

  return (
    <Seo
      title={postTitle}
      description={postDescription}
      pathname={location.pathname}
      ogType="article"
      ogImage={ogImage?.images.fallback?.src ?? ""}
    />
  )
}

export const SinglePostLayoutQuery = graphql`
  query SinglePostLayout($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      id
      youtubeUrl
      title
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
      _rawContent
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
