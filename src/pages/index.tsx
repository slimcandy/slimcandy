import * as React from "react"
import { graphql, HeadProps, Link, PageProps } from "gatsby"
import { GrFormNextLink } from "react-icons/gr"
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import RichHeaderLayout from "../layouts/RichHeaderLayout"

function IndexPage({ data }: PageProps<Queries.ArticlesQuery>) {
  const siteMetadata = data.site?.siteMetadata
  const tags = data.allSanityTag.nodes
  const categories = data.allSanityCategory.nodes
  const posts = data.allSanityPost.nodes
  const postsWithoutFirstThree = posts.slice(3)

  if (posts.length === 0) {
    return (
      <TinyLayout siteMetadata={siteMetadata}>
        <p>No blog posts found.</p>
      </TinyLayout>
    )
  }
  return (
    <RichHeaderLayout
      siteMetadata={siteMetadata}
      tags={tags}
      categories={categories}
    >
      <main className="font-serif my-1 sm:my-2 md:my-3 lg:my-4 max-w-screen-2xl mx-auto">
        <Link
          to={`/posts/${posts[0].slug?.current}`}
          className="hover:underline hover:decoration-8 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white inline-block"
        >
          <h2 className="text-stone-700 font-medium sm:font-semibold md:font-bold lg:font-extrabold xl:font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:p-1 md:p-2 text-center my-1 md:my-2 px-1 md:px-2 lg:px-4">
            {posts[0].title}
          </h2>
        </Link>
        <div className="grid md:grid-cols-5 xl:grid-cols-4 gap-x-4 gap-y-2 items-stretch justify-center border-b-2 border-b-stone-900 border-double px-4 sm:px-3 md:px-2 lg:px-1 xl:px-0 text-justify">
          <div className="md:order-2 md:col-span-3 xl:col-span-2 flex flex-col items-center">
            <article className="font-light font-serif leading-normal max-w-xl md:font-normal text-base md:text-lg text-stone-700">
              {posts[0].mainImage && posts[0].mainImage.asset && (
                <GatsbyImage
                  image={posts[0].mainImage.asset.gatsbyImageData}
                  alt="a funnel. laptops go from the top.  dollar banknotes go out of it in the bottom"
                  className="block w-full max-h-40 sm:max-h-52 md:max-h-72 lg:max-h-80 object-cover mb-2 border-4 border-stone-900"
                />
              )}
              <p>{posts[0].description}</p>
              <Link
                to={`/posts/${posts[0].slug?.current}`}
                className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-4 border-double border-stone-900 flex items-center gap-x-2 my-2 px-4 py-2 text-xl"
              >
                <GrFormNextLink />
                {posts[0].readMore || "Read more…"}
              </Link>
            </article>
          </div>
          <div className="md:order-1 md:px-4 md:border-r-2 md:border-r-stone-900 md:border-double flex justify-center">
            <article className="font-light font-serif  leading-none max-w-xl md:font-normal text-sm md:text-base ">
              <Link
                to={`/posts/${posts[1].slug?.current}`}
                className="hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white inline-block"
              >
                <h3 className="font-semibold sm:font-bold md:font-extrabold lg:font-black xl:font-black text-lg md:text-xl lg:text-2xl xl:text-3xl my-1 md:mb-2 md:mt-3 py-1 sm:pb-1 sm:pt-2 md:pb-2 md:pt-3 lg:pb-3 lg:pt-4 xl:pb-4 xl:pt-5">
                  {posts[1].title}
                </h3>
              </Link>
              {posts[1].mainImage && posts[1].mainImage.asset && (
                <GatsbyImage
                  image={posts[1].mainImage.asset.gatsbyImageData}
                  alt="a funnel. laptops go from the top.  dollar banknotes go out of it in the bottom"
                  className="block w-full max-h-48 object-cover mb-2 border-2 border-stone-600"
                />
              )}
              <p>{posts[1].description}</p>
              <Link
                to={`/posts/${posts[1].slug?.current}`}
                className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-2 border-double border-stone-900 flex items-center gap-x-2 my-2 px-2 py-1"
              >
                <GrFormNextLink />
                {posts[1].readMore || "Read more…"}
              </Link>
            </article>
          </div>
          <div className="order-3 md:px-4 md:border-l-2 md:border-l-stone-900 md:border-double flex justify-center">
            <article className="font-light font-serif  leading-none max-w-xl md:font-normal text-sm md:text-base ">
              <Link
                to={`/posts/${posts[2].slug?.current}`}
                className="hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white inline-block"
              >
                <h3 className="font-semibold sm:font-bold md:font-extrabold lg:font-black xl:font-black text-lg md:text-xl lg:text-2xl xl:text-3xl my-1 md:mb-2 md:mt-3 py-1 sm:pb-1 sm:pt-2 md:pb-2 md:pt-3 lg:pb-3 lg:pt-4 xl:pb-4 xl:pt-5">
                  {posts[2].title}
                </h3>
              </Link>
              {posts[2].mainImage && posts[2].mainImage.asset && (
                <GatsbyImage
                  image={posts[2].mainImage.asset.gatsbyImageData}
                  alt="a funnel. laptops go from the top.  dollar banknotes go out of it in the bottom"
                  className="block w-full max-h-48 object-cover mb-2 border-2 border-stone-600"
                />
              )}
              <p>{posts[2].description}</p>
              <Link
                to={`/posts/${posts[2].slug?.current}`}
                className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-2 border-double border-stone-900 flex items-center gap-x-2 my-2 px-2 py-1"
              >
                <GrFormNextLink />
                {posts[2].readMore || "Read more…"}
              </Link>
            </article>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 items-stretch justify-center mx-auto px-4 py-2">
          {postsWithoutFirstThree.map(post => (
            <article className=" font-light font-serif leading-none max-w-xl md:font-normal text-sm md:text-base text-justify   mt-1 pt-2">
              <h3 className="font-semibold sm:font-bold md:font-extrabold lg:font-black xl:font-black text-lg md:text-xl lg:text-2xl xl:text-3xl my-1 md:mb-2 md:mt-3 py-1 sm:pb-1 sm:pt-2 md:pb-2 md:pt-3 lg:pb-3 lg:pt-4 xl:pb-4 xl:pt-5">
                {post.title}
              </h3>
              <p>{post.description}</p>
              <Link
                to={`/posts/${post.slug?.current}`}
                className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-2 border-double border-stone-900 flex items-center gap-x-2 my-2 px-2 py-1"
              >
                <GrFormNextLink />
                {post.readMore || "Read more…"}
              </Link>
            </article>
          ))}
        </div>
      </main>
    </RichHeaderLayout>
  )
}

export default IndexPage

export function Head({ data }: HeadProps<Queries.ArticlesQuery>) {
  const siteTitle = data.site?.siteMetadata?.title
  const siteDescription = data.site?.siteMetadata?.description || ``

  return (
    <Seo title={`Home Page | ${siteTitle}`} description={siteDescription} />
  )
}

export const articlesQuery = graphql`
  query Articles {
    allSanityCategory(limit: 3) {
      nodes {
        description
        name
        slug {
          current
        }
      }
    }
    allSanityTag(limit: 4) {
      nodes {
        name
        slug {
          current
        }
      }
    }
    allSanityPost(sort: { publishedAt: DESC }, limit: 100) {
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
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
      }
    }
    site {
      siteMetadata {
        title
        description
        motto
        footer
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
