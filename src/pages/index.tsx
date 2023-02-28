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
    <RichHeaderLayout siteMetadata={siteMetadata} categories={categories}>
      <main className="font-serif my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 max-w-screen-2xl mx-auto pt-4 sm:pt-2 md:pt-1 lg:pt-0">
        <article className="mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl border-[thin] border-black px-4 sm:px-3 md:px-2 lg:px-1 xl:px-0 relative">
          <div className="absolute -top-4 -left-1 bg-white border-[thin] border-black h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 z-10 px-1 sm:px-2 md:px-3 lg:px-4 flex items-center justify-center">
            <p className="uppercase text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5 font-sans font-thin">
              Featured Article
            </p>
          </div>
          {posts[0].mainImage && posts[0].mainImage.asset && (
            <GatsbyImage
              image={posts[0].mainImage.asset.gatsbyImageData}
              alt="a funnel. laptops go from the top.  dollar banknotes go out of it in the bottom"
              className="block w-full max-h-16 sm:max-h-32 md:max-h-44 lg:max-h-52 object-cover mb-2"
            />
          )}
          <div className="mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:text-lg xl:text-xl pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8">
            <small className="font-sans">{posts[0].publishedAt}</small>
            <Link
              to={`/posts/${posts[0].slug?.current}`}
              className="underline decoration-black decoration-4 underline-offset-4 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <h2 className="font-medium sm:font-semibold md:font-bold lg:font-extrabold xl:font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:py-1 md:py-2 my-1 md:my-2">
                {posts[0].title}
              </h2>
            </Link>
            <p>{posts[0].description}</p>
          </div>
        </article>
        <div className="grid md:grid-cols-5 xl:grid-cols-4 gap-x-4 gap-y-2 items-stretch justify-center border-b-2 border-b-stone-900 border-double px-4 sm:px-3 md:px-2 lg:px-1 xl:px-0 text-justify">
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
        publishedAt(formatString: "MMMM DD, YYYY")
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
