import * as React from "react"
import { graphql, type HeadProps, Link, type PageProps } from "gatsby"

import Seo from "../components/Seo"
import RichHeaderLayout from "../layouts/RichHeaderLayout"
import NoPosts from "../components/NoPosts"
import SignUpForm from "../components/SignUpForm"

function IndexPage({ data }: PageProps<Queries.ArticlesQuery>): JSX.Element {
  const siteMetadata = data.site?.siteMetadata
  const categories = data.allSanityCategory.nodes
  const posts = data.allSanityPost.nodes
  const notFirstPosts = posts.slice(1)

  if (posts === null || posts.length === 0) {
    return <NoPosts siteMetadata={siteMetadata} />
  }
  return (
    <RichHeaderLayout siteMetadata={siteMetadata} categories={categories}>
      <main
        className="font-serif 
        my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 
        max-w-screen-2xl mx-auto 
        pt-4 sm:pt-2 md:pt-1 lg:pt-0 px-2 sm:px-4 md:px-2 lg:px-0
     "
      >
        <article
          className="mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 
         relative"
        >
          <div className="mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:text-lg xl:text-xl pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 px-4 sm:px-3 md:px-2 lg:px-1 xl:px-0 ">
            <small className="font-sans text-slate-600 dark:text-zinc-500">
              {posts[0].publishedAt}
            </small>
            <Link
              to={`/posts/${posts[0].slug?.current as string}`}
              className="
              underline decoration-black dark:decoration-zinc-500 decoration-4 underline-offset-4
               hover:decoration-red-700
               focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 dark:focus:ring-zinc-500 focus:bg-white dark:focus:bg-zinc-800  
               flex items-center gap-x-2"
            >
              <h2 className="font-medium sm:font-semibold md:font-bold lg:font-extrabold xl:font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:py-1 md:py-2 my-1 md:my-2">
                {posts[0].title}
              </h2>
            </Link>
            <p>{posts[0].description}</p>
          </div>
        </article>

        <div
          className="sm:mt-2.5 md:mt-3 lg:mt-3.5 xl:mt-4 
        mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6"
        >
          <div className="md:col-span-2 md:border-b-0 md:pr-6 lg:pr-7 xl:pr-8">
            <p
              className="uppercase text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5 font-sans font-thin
            text-slate-600 dark:text-zinc-500"
            >
              Fresh Harvest
            </p>
            <div
              className="flex flex-col flex-wrap
            gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5"
            >
              {notFirstPosts.map(function showPost(post) {
                return (
                  <article
                    className=" 
                    relative overflow-hidden"
                    key={post.title}
                  >
                    <div
                      className="mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 
                      md:text-lg xl:text-xl
                      px-4 sm:px-3 lg:px-4 xl:px-6"
                    >
                      <small className="font-sans text-slate-600 dark:text-zinc-500">
                        {post.publishedAt}
                      </small>
                      <Link
                        to={`/posts/${post.slug?.current as string}`}
                        className="underline decoration-black dark:decoration-zinc-500 decoration-2 underline-offset-4 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 dark:focus:ring-zinc-500 focus:bg-white dark:focus:bg-zinc-800 
                        flex items-center gap-x-2"
                      >
                        <h3
                          className="sm:font-medium md:font-semibold lg:font-bold xl:font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                        sm:py-1 md:py-2 
                        my-1 md:my-1.5"
                        >
                          {post.title}
                        </h3>
                      </Link>
                      <p>{post.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <SignUpForm />
      </main>
    </RichHeaderLayout>
  )
}

export default IndexPage

export function Head({
  data,
  location,
}: HeadProps<Queries.ArticlesQuery>): JSX.Element {
  const siteTitle = data.site?.siteMetadata?.title ?? ``
  const siteDescription = data.site?.siteMetadata?.description ?? ``

  return (
    <Seo
      title={`Home Page | ${siteTitle}`}
      description={siteDescription}
      pathname={location.pathname}
    />
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
    allSanityPost(sort: { publishedAt: DESC }, limit: 100) {
      nodes {
        title
        slug {
          current
        }
        description
        readMore
        publishedAt(formatString: "MMMM DD, YYYY")
      }
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
