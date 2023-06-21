import * as React from "react"
import { graphql, Link, type HeadProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"

import Seo from "../components/Seo"
import portableTextComponents from "../utils/portableText"
import TinyLayout from "../layouts/TinyLayout"
import NoPosts from "../components/NoPosts"
import NewsletterForm from "../components/NewsletterForm"

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
      <main
        className="tufte-container font-serif my-1 sm:my-2 md:my-3 lg:my-4
        after:content-['❦'] 
        after:block 
        after:w-full 
        after:text-center 
        sm:after:text-2xl md:after:text-4xl lg:after:text-6xl
        after:text-palette5-blue-300 
        after:opacity-80"
        itemScope
        itemType="http://schema.org/Article"
      >
        <article className="tufte-article" itemProp="articleBody">
          {typeof post?.title === "string" && (
            <h1 itemProp="headline">{post.title}</h1>
          )}
          <aside className="print:hidden">
            <menu className="hidden md:grid grid-cols-4 items-baseline gap-y-4">
              {prevPost != null && (
                <>
                  <span className="col-start-1 col-end-2 text-center">←</span>
                  <li className="col-start-2 col-end-5">
                    <Link
                      to={`/posts/${prevPost.slug?.current as string}`}
                      className="link"
                      title={prevPost.description ?? "Previous post"}
                    >
                      {prevPost.title}
                    </Link>
                  </li>
                </>
              )}
              {nextPost != null && (
                <>
                  <span className="col-start-1 col-end-2 text-center">→</span>
                  <li className="col-start-2 col-end-5">
                    <Link
                      to={`/posts/${nextPost.slug?.current as string}`}
                      className="link"
                      title={nextPost.description ?? "Next post"}
                    >
                      {nextPost.title}
                    </Link>
                  </li>
                </>
              )}
            </menu>
          </aside>
          {post._rawContent != null && (
            <PortableText
              value={post._rawContent}
              components={portableTextComponents}
            />
          )}
        </article>
      </main>

      <NewsletterForm />
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
