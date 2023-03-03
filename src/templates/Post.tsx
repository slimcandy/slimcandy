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
          {post.mainImage && post.mainImage.asset && (
            <GatsbyImage
              image={post.mainImage.asset.gatsbyImageData}
              alt={post.mainImage.asset.altText || ""}
              className="block w-full max-h-40 sm:max-h-52 md:max-h-72 lg:max-h-80 object-cover mb-2"
            />
          )}

          <PortableText
            value={post._rawContent}
            components={portableTextComponents}
          />
        </article>
      </main>
    </TinyLayout>
  )
}

export default SinglePostLayout

export function Head({ data }: HeadProps<Queries.SinglePostLayoutQuery>) {
  const siteTitle = data.site?.siteMetadata?.title
  const postTitle = data.sanityPost?.title
  const postDescription = data.sanityPost?.description || ""

  return (
    <Seo title={`${postTitle} | ${siteTitle}`} description={postDescription} />
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
      tags {
        name
        slug {
          current
        }
      }
      mainImage {
        asset {
          gatsbyImageData
          altText
        }
      }
      applePodcastUrl
      author {
        name
        slug {
          current
        }
        bio {
          _key
          _type
          style
          list
          children {
            _type
            _key
            marks
            text
          }
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
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
        author
        siteUrl
        social {
          email
          github
          linkedin
          podcast
          rss
          youtube
        }
      }
    }
  }
`
