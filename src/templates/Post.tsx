import * as React from "react"
import { graphql, Link, type HeadProps } from "gatsby"
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
  const prevPost = data?.prevPost
  const nextPost = data?.nextPost

  if (post == null) {
    return <NoPosts siteMetadata={siteMetadata} />
  }

  return (
    <TinyLayout>
      <main className="tufte-container font-serif my-1 sm:my-2 md:my-3 lg:my-4">
        <article
          itemScope
          itemType="http://schema.org/Article"
          className="tufte-article"
        >
          {typeof post?.title === "string" && (
            <h1 itemProp="headline">{post.title}</h1>
          )}
          <aside className="print:hidden">
            <menu className="hidden md:flex flex-col items-end">
              {prevPost != null && (
                <li>
                  <Link
                    to={`/posts/${prevPost.slug?.current as string}`}
                    className="link after:content-['←'] after:ml-1"
                    title={prevPost.description ?? "Previous post"}
                  >
                    {prevPost.title}
                  </Link>
                </li>
              )}
              {nextPost != null && (
                <li>
                  <Link
                    to={`/posts/${nextPost.slug?.current as string}`}
                    className="link after:content-['→'] after:ml-1"
                    title={nextPost.description ?? "Next post"}
                  >
                    {nextPost.title}
                  </Link>
                </li>
              )}
            </menu>
          </aside>
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
