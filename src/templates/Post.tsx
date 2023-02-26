import * as React from "react"
import { graphql, HeadProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"

import Seo from "../components/Seo"
import portableTextComponents from "../utils/portableText"
import TinyLayout from "../layouts/TinyLayout"

function SinglePostLayout({ data }: { data: Queries.SinglePostLayoutQuery }) {
  const siteMetadata = data?.site?.siteMetadata
  const post = data?.sanityPost

  if (!post) {
    return (
      <TinyLayout>
        <p>No blog post found.</p>
      </TinyLayout>
    )
  }

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="font-serif text-stone-700 my-1 sm:my-2 md:my-3 lg:my-4 max-w-screen-2xl mx-auto">
        {post?.title && (
          <h1 className="font-medium sm:font-semibold md:font-bold lg:font-extrabold xl:font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:p-1 md:p-2 text-center my-1 md:my-2 px-1 md:px-2 lg:px-4">
            {post.title}
          </h1>
        )}
        <div className="px-4 sm:px-3 md:px-2 lg:px-1 xl:px-0 text-justify flex flex-col items-center">
          {post.mainImage && post.mainImage.asset && (
            <GatsbyImage
              image={post.mainImage.asset.gatsbyImageData}
              alt={post.mainImage.asset.altText || ""}
              className="block w-full max-h-40 sm:max-h-52 md:max-h-72 lg:max-h-80 object-cover mb-2 border-4 border-stone-900"
            />
          )}
          <article className="sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:text-lg xl:text-xl pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8">
            <PortableText
              value={post.content}
              components={portableTextComponents}
            />
          </article>
        </div>
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
      content {
        _key
        _type
        list
        style
        children {
          _key
          _type
          marks
          text
        }
      }
    }
    site {
      siteMetadata {
        title
        description
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
