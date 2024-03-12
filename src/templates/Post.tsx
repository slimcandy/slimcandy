import * as React from "react"
import { graphql, type HeadProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"

import Seo from "../components/Seo"
import portableTextComponents from "../utils/portableText"
import TinyLayout from "../layouts/TinyLayout"
import NoPosts from "../components/NoPosts"

function SinglePostLayout({
  data,
}: {
  data: Queries.SinglePostLayoutQuery
}): JSX.Element {
  const post = data?.sanityPost

  if (post == null) {
    return <NoPosts />
  }

  return (
    <TinyLayout>
      <main itemScope itemType="http://schema.org/Article">
        <article
          className="bookish tufte xs:prose-base prose prose-sm mx-auto text-justify text-inherit sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl"
          itemProp="articleBody"
        >
          <span className="text-gray-300 text-sm">
            {post.category?.name} / {post.publishedAt} / {post.author?.name}
          </span>
          {typeof post?.title === "string" && (
            <h1 itemProp="headline">{post.title}</h1>
          )}
          {post._rawContent != null && (
            <PortableText
              value={post._rawContent as unknown as PortableTextBlock[]}
              components={portableTextComponents}
            />
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
  query SinglePostLayout($slug: String!, $prevSlug: String, $nextSlug: String) {
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
      publishedAt(formatString: "DD.MM.YYYY")
      category {
        name
      }
      author {
        name
      }
      _rawContent
    }
    prevPost: sanityPost(slug: { current: { eq: $prevSlug } }) {
      slug {
        current
      }
      title
      description
    }
    nextPost: sanityPost(slug: { current: { eq: $nextSlug } }) {
      slug {
        current
      }
      title
      description
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
