import * as React from "react"
import { graphql, type HeadProps, Link, type PageProps } from "gatsby"

import Seo from "../components/Seo"
import RichHeaderLayout from "../layouts/RichHeaderLayout"
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import NoPosts from "../components/NoPosts"
import { StaticImage } from "gatsby-plugin-image"
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
        className="font-serif my-2 sm:my-3 md:my-4 lg:my-5 xl:my-6 max-w-screen-2xl mx-auto pt-4 sm:pt-2 md:pt-1 lg:pt-0 px-2 sm:px-4 md:px-2 lg:px-0
      border-b-[thin] border-slate-400 dark:border-zinc-500"
      >
        <article
          className="mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl border-[thin] 
        border-slate-400 dark:border-zinc-500
         relative"
        >
          <div
            className="absolute -top-4 -left-1 
          bg-white dark:bg-zinc-800 
          border-[thin] border-slate-400 dark:border-zinc-500 
          h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 z-10 px-1 sm:px-2 md:px-3 lg:px-4 flex items-center justify-center"
          >
            <p
              className="uppercase text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5 font-sans font-thin
            text-slate-600 dark:text-zinc-500"
            >
              New
            </p>
          </div>
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

        <SignUpForm />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 sm:gap-y-3 md:gap-y-4 sm:mt-2.5 md:mt-3 lg:mt-3.5 xl:mt-4 mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6">
          <div className="md:col-span-2 border-b-[thin] border-b-slate-400 dark:border-b-zinc-500 md:border-b-0 md:pr-6 lg:pr-7 xl:pr-8">
            <p
              className="uppercase text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5 font-sans font-thin
            text-slate-600 dark:text-zinc-500"
            >
              Fresh Harvest
            </p>
            <div className="flex flex-col flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">
              {notFirstPosts.map(function showPost(post) {
                return (
                  <article
                    className="border-[thin] border-slate-400 dark:border-zinc-500 border-zinc-500relative overflow-hidden"
                    key={post.title}
                  >
                    <div className="mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl md:text-lg xl:text-xl pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 px-4 sm:px-3 lg:px-4 xl:px-6">
                      <small className="font-sans text-slate-600 dark:text-zinc-500">
                        {post.publishedAt}
                      </small>
                      <Link
                        to={`/posts/${post.slug?.current as string}`}
                        className="underline decoration-black dark:decoration-zinc-500 decoration-2 underline-offset-4 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 dark:focus:ring-zinc-500 focus:bg-white dark:focus:bg-zinc-800 
                        flex items-center gap-x-2"
                      >
                        <h3 className="sm:font-medium md:font-semibold lg:font-bold xl:font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:py-1 md:py-2 my-1 md:my-2">
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
          <div className="md:border-l-[thin] md:border-l-slate-600 dark:md:border-l-zinc-500 md:pl-6 lg:pl-7 xl:pl-8">
            {typeof siteMetadata?.description === "string" && (
              <section>
                <h4
                  className="uppercase text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5 font-sans font-thin
                text-slate-600 dark:text-zinc-500"
                >
                  Gardener
                </h4>
                <p
                  className="mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
                overflow-hidden"
                >
                  <StaticImage
                    src="../../static/images/photo.jpeg"
                    alt="Photo of me in Adidas tracksuit. I'm standing at the edge of a cliff – national park."
                    className="block
                    float-right lg:float-none
                    w-40 sm:w-52 md:w-60 lg:w-72
                    max-w-full
                    max-h-40 sm:max-h-52 md:max-h-60 lg:max-h-72
                    mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10
                    border-[thin] border-black dark:border-zinc-500"
                    width={288}
                    placeholder="dominantColor"
                    formats={["auto", "webp", "avif", "jpg", "png"]}
                    breakpoints={[576, 768, 992, 1200]}
                    objectFit="cover"
                  />
                  {siteMetadata.description}
                  <br />
                  <br />
                  <Link
                    to="/about"
                    className="underline decoration-black dark:decoration-zinc-500  decoration-2 underline-offset-2 
                    hover:decoration-red-700 
                    focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 dark:focus:ring-zinc-500 focus:bg-white dark:focus:bg-zinc-800 
                     flex items-center gap-x-2
                    after:content-['→']"
                  >
                    Check my projects
                  </Link>
                </p>
              </section>
            )}
            <hr
              className="border-t-[thin] border-slate-400 dark:border-zinc-500
            my-1 sm:my-1.5 md:my-2 lg:my-2.5 xl:my-3"
            />
            {siteMetadata?.social != null && (
              <section>
                <h4
                  className="uppercase text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5 font-sans font-thin
                text-slate-600 dark:text-zinc-500"
                >
                  Follow me
                </h4>
                <menu className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
                  {typeof siteMetadata?.social?.youtube === "string" &&
                    siteMetadata.social.youtube.length > 0 && (
                      <li>
                        <a
                          href={siteMetadata.social.youtube}
                          className="underline decoration-slate-600 dark:decoration-zinc-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 dark:focus:ring-zinc-500 focus:bg-white dark:focus:bg-zinc-800 
                      flex flex-col items-center gap-x-2 text-slate-600 dark:text-zinc-500"
                        >
                          <AiFillYoutube
                            className="w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20
                      h-8sm:h-10 md:h-12 lg:h-16 xl:h-20"
                          />
                          YouTube
                        </a>
                      </li>
                    )}
                  <li>
                    <a
                      href={siteMetadata?.social?.github ?? ""}
                      className="underline decoration-slate-600 dark:decoration-zinc-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 dark:focus:ring-zinc-500 focus:bg-white dark:focus:bg-zinc-800 
                      flex flex-col items-center gap-x-2 text-slate-600 dark:text-zinc-500"
                    >
                      <AiFillGithub
                        className="w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20
                      h-8sm:h-10 md:h-12 lg:h-16 xl:h-20"
                      />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteMetadata?.social?.linkedin ?? ""}
                      className="underline decoration-slate-600 dark:decoration-zinc-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 dark:focus:ring-zinc-500 focus:bg-white dark:focus:bg-zinc-800 
                      flex flex-col items-center gap-x-2
                      text-slate-600 dark:text-zinc-500"
                    >
                      <AiFillLinkedin
                        className="w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20
                      h-8sm:h-10 md:h-12 lg:h-16 xl:h-20"
                      />
                      LinkedIn
                    </a>
                  </li>
                </menu>
              </section>
            )}
          </div>
        </div>
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
