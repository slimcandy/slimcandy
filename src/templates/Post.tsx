import * as React from "react"
import { graphql, HeadProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"

import Seo from "../components/Seo"
import portableTextComponents from "../utils/portableText"
import TinyLayout from "../layouts/TinyLayout"
import NoPosts from "../components/NoPosts"

function SinglePostLayout({ data }: { data: Queries.SinglePostLayoutQuery }) {
  const siteMetadata = data?.site?.siteMetadata
  const post = data?.sanityPost

  if (!post) {
    return <NoPosts siteMetadata={siteMetadata} />
  }

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="font-serif my-1 sm:my-2 md:my-3 lg:my-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <article
          className="prose prose-neutral prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl
          prose-a:underline prose-a:decoration-black prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:decoration-red-700 focus:prose-a:outline-none focus:prose-a:no-underline focus:prose-a:ring-4 focus:prose-a:ring-offset-2 focus:prose-a:ring-stone-900 focus:prose-a:bg-white"
        >
          {post?.title && <h1>{post.title}</h1>}
          {post._rawContent && (
            <PortableText
              value={post._rawContent}
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
}: HeadProps<Queries.SinglePostLayoutQuery>) {
  const postTitle = data.sanityPost?.title || ""
  const postDescription = data.sanityPost?.description || ""

  return (
    <Seo
      title={postTitle}
      description={postDescription}
      pathname={location.pathname}
      ogType="article"
    />
  )
}

export const SinglePostLayoutQuery = graphql`
  query SinglePostLayout($slug: String!) {
    allSanityCategory(limit: 3) {
      nodes {
        description
        name
        slug {
          current
        }
      }
    }
    sanityPost(slug: { current: { eq: $slug } }) {
      id
      youtubeUrl
      title
      description
      category {
        name
        slug {
          current
        }
        description
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
