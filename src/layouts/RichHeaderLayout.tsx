import * as React from "react"
import { Link } from "gatsby"
import {
  AiFillTag,
  AiFillYoutube,
  AiFillGithub,
  AiTwotoneMail,
  AiFillLinkedin,
} from "react-icons/ai"
import { BiCategoryAlt } from "react-icons/bi"
import { BsFillRssFill } from "react-icons/bs"
import { SiApplepodcasts } from "react-icons/si"

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
        <>
          <header className="grid grid-cols-1 justify-center items-center mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full lg:w-full">
            {siteMetadata.title && (
              <div className="order-1 md:order-2 text-center">
                <Link
                  to="/"
                  className="hover:underline hover:decoration-8 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white inline-block"
                >
                  <h2 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl uppercase font-bold py-1 sm:py-1.5 md:py-3 lg:py-3.5 xl:py-4 sm:tracking-wide md:tracking-wider lg:tracking-widest">
                    {siteMetadata.title}
                  </h2>
                </Link>
              </div>
            )}
            {siteMetadata.motto && (
              <div className="order-2 md:order-1 text-center">
                <h3 className="uppercase text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5">
                  {siteMetadata.motto}
                </h3>
              </div>
            )}
          </header>
          <menu className="grid grid-cols-4 md:grid-cols-6 items-center justify-between mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl border-[thin] border-black my-1 sm:my-2 md:my-4 lg:my-5 xl:my-6 text-lg md:text-xl font-thin sm:font-extralight md:font-light lg:font-normal text-center">
            {categories &&
              categories.map(category => (
                <li className="h-full border-r-[thin] border-black col-span-1 flex items-center justify-center">
                  <Link
                    to={`/categories/${category?.slug?.current}`}
                    className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white  p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 block h-full w-full"
                    title={category.description || ""}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            <li className="h-full md:border-r-[thin] md:border-black col-span-1 flex items-center justify-center">
              <Link
                to="/about"
                className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5  block h-full w-full"
              >
                About me
              </Link>
            </li>
            {siteMetadata && (
              <li className="col-span-4 md:col-span-2 border-t-[thin] border-black md:border-0">
                <ul className="h-full grid grid-cols-6 md:grid-cols-3 items-center justify-center py-1 md:gap-x-2">
                  <li>
                    <a
                      href={siteMetadata?.social?.youtube || ""}
                      className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 flex justify-center"
                    >
                      <AiFillYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteMetadata?.social?.github || ""}
                      className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 flex justify-center"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteMetadata?.social?.rss || ""}
                      className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 flex justify-center"
                    >
                      <BsFillRssFill />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteMetadata?.social?.podcast || ""}
                      className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 flex justify-center"
                    >
                      <SiApplepodcasts />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteMetadata?.social?.email || ""}
                      className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 flex justify-center"
                    >
                      <AiTwotoneMail />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteMetadata?.social?.linkedin || ""}
                      className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 flex justify-center"
                    >
                      <AiFillLinkedin />
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </menu>
        </>
      )}
      {children}
      <Footer siteMetadata={siteMetadata} />
    </>
  )
}

export default RichHeaderLayout
