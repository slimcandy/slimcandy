import * as React from "react"
import { GrFormNextLink } from "react-icons/gr"
import { graphql, HeadProps, Link } from "gatsby"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import { SiteMetadata, TCategoryContext } from "../utils/types"

function PostsByCategory({
  data,
}: {
  children: React.ReactNode
  data: Queries.PostsByCategoryQuery
}) {
  const posts = data?.allSanityPost?.nodes
  const siteMetadata = SiteMetadata(data?.site?.siteMetadata)

  if (!posts || posts.length === 0) {
    return (
      <TinyLayout siteMetadata={siteMetadata}>
        <p>No blog posts found.</p>
      </TinyLayout>
    )
  }

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main
        className="font-serif text-sto
      ne-700 my-1 sm:my-2 md:my-3 lg:my-4 max-w-screen-2xl mx-auto"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 items-stretch justify-center mx-auto px-4 py-2">
          {posts.map(post => (
            <article className=" font-light font-serif leading-none max-w-xl md:font-normal text-sm md:text-base text-justify   mt-1 pt-2">
              <h3 className="font-semibold sm:font-bold md:font-extrabold lg:font-black xl:font-black text-lg md:text-xl lg:text-2xl xl:text-3xl my-1 md:mb-2 md:mt-3 py-1 sm:pb-1 sm:pt-2 md:pb-2 md:pt-3 lg:pb-3 lg:pt-4 xl:pb-4 xl:pt-5">
                {post.title}
              </h3>
              <p>{post.description}</p>
              <Link
                to={`/posts/${post.slug?.current}`}
                className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-2 border-double border-stone-900 flex items-center gap-x-2 my-2 px-2 py-1"
              >
                <GrFormNextLink />
                {post.readMore || "Read more…"}
              </Link>
            </article>
          ))}
        </div>
      </main>
    </TinyLayout>
  )
}

export default PostsByCategory

export function Head({
  data,
  pageContext,
}: HeadProps<Queries.PostsByCategoryQuery, TCategoryContext>) {
  const siteTitle = data.site?.siteMetadata?.title
  const category = pageContext.name || "Posts by Category"

  return <Seo title={`${category} | ${siteTitle}`} />
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
              aspectRatio: 16.9
              height: 400
              placeholder: DOMINANT_COLOR
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF, JPG, PNG]
              breakpoints: [750, 1080, 1366, 1920]
              fit: FILL
            )
          }
        }
        readMore
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
