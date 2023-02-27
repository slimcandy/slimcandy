import * as React from "react"
import { Link } from "gatsby"
import { AiFillTag } from "react-icons/ai"
import { BiCategoryAlt } from "react-icons/bi"

import { TCategories, TSiteMetadata, TTags } from "../utils/types"
import Footer from "../components/Footer"

function RichHeaderLayout({
  children,
  siteMetadata,
  tags,
  categories,
}: {
  children: React.ReactNode
  siteMetadata?: TSiteMetadata
  tags?: TTags
  categories?: TCategories
}) {
  return (
    <>
      {siteMetadata && (
        <header className="my-1 lg:my-2 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 mx-1 lg:mx-2 lg:my-1 items-stretch justify-center md:gap-y-2">
            <p className="hidden md:block border border-stone-500 px-4 py-2 text-xs md:text-sm text-center font-light first-line:tracking-widest first-line:uppercase">
              Subscribe to{" "}
              <a
                href={siteMetadata?.social?.rss || ""}
                className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
              >
                rss feed
              </a>
              ,{" "}
              <a
                href={siteMetadata?.social?.youtube || ""}
                className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
              >
                {" "}
                youtube channel
              </a>{" "}
              and{" "}
              <a
                href={siteMetadata?.social?.podcast || ""}
                className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
              >
                {" "}
                apple podcasts
              </a>
              .
            </p>
            <div className="text-center md:col-span-3 flex items-center justify-center">
              <Link
                to="/"
                className="hover:underline hover:decoration-8 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white inline-block"
              >
                {siteMetadata && (
                  <h1 className="uppercase font-serif font-black text-lg sm:text-xl md:text-2xl lg:text-4xl 2xl:text-6xl">
                    {siteMetadata.title}
                  </h1>
                )}
              </Link>
            </div>
            {siteMetadata && (
              <p className="hidden md:block border border-stone-500 px-4 py-2 text-xs md:text-sm text-center font-light first-line:tracking-widest first-line:uppercase">
                Discover my{" "}
                <a
                  href={siteMetadata?.social?.github || ""}
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
                >
                  Github
                </a>{" "}
                and explore my{" "}
                <a
                  href={siteMetadata?.social?.linkedin || ""}
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
                >
                  LinkedIn profile
                </a>
                .
              </p>
            )}
          </div>
          <hr className="md:hidden border-t-4 sm:border-t-2 border-double border-stone-500 mx-2 my-1 sm:my-2 md:my-3 lg:my-4" />
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 mx-2 my-1 sm:my-2 md:my-3 lg:my-4 items-stretch lowercase text-xs border-y-2 border-double border-stone-500 px-2 md:px-3 lg:px-4 py-1 md:py-2 gap-1">
            {tags && (
              <div className="col-span-1 md:col-span-2 flex gap-1 items-center">
                <AiFillTag />
                <ul className="flex flex-wrap items-center gap-1">
                  {tags.map(tag => (
                    <li key={tag?.slug?.current}>
                      <Link
                        to={`/tags/${tag?.slug?.current}`}
                        className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                      >
                        {tag.name}
                      </Link>
                      /
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {categories && categories[0]?.slug?.current && (
              <div className="col-span-1 md:col-span-3 flex gap-x-1 items-center uppercase">
                <BiCategoryAlt />
                <ul className="flex flex-wrap items-center gap-1">
                  {categories.map(category => (
                    <li key={category?.slug?.current}>
                      <Link
                        to={`/categories/${category?.slug?.current}`}
                        className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                        title={category.description || ""}
                      >
                        {category.name}
                      </Link>
                      /
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </header>
      )}
      {children}
      <Footer siteMetadata={siteMetadata} />
    </>
  )
}

export default RichHeaderLayout