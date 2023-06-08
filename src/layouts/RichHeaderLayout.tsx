import * as React from "react"
import { Link } from "gatsby"
import { BsFillPersonLinesFill } from "react-icons/bs"

import { type TCategories, type TSiteMetadata } from "../utils/types"
import ContactForm from "../components/ContactForm"

function RichHeaderLayout({
  children,
  siteMetadata,
  categories,
}: {
  children: React.ReactNode
  siteMetadata?: TSiteMetadata
  categories?: TCategories
}): JSX.Element {
  return (
    <>
      {siteMetadata != null && (
        <div className="px-2 sm:px-4 md:px-2 lg:px-0">
          <header className="grid grid-cols-1 justify-center items-center mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full lg:w-full">
            {typeof siteMetadata.title === "string" && (
              <div className="order-1 md:order-2 text-center">
                <h1
                  className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl uppercase font-bold py-1 sm:py-1.5 md:py-2.5 lg:py-3 xl:py-3.5 sm:tracking-wide md:tracking-wider lg:tracking-widest
                text-slate-600"
                >
                  {siteMetadata.title}
                </h1>
              </div>
            )}
            {typeof siteMetadata.motto === "string" && (
              <div className="order-2 md:order-1 text-center">
                <h3
                  className="uppercase text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5
                text-slate-600"
                >
                  {siteMetadata.motto}
                </h3>
              </div>
            )}
          </header>
          <menu
            className="
          grid grid-cols-4 
          items-center justify-between 
          mx-auto 
          my-1 sm:my-2 md:my-4 lg:my-5 xl:my-6 
          max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 
          border-[thin] border-slate-400 
          text-lg md:text-xl font-thin text-center capitalize tracking-wider
          text-slate-600"
          >
            {categories?.map(function renderCategory(category) {
              return (
                <li
                  className="h-full border-r-[thin] border-slate-400 col-span-1 flex items-center justify-center"
                  key={category.name}
                >
                  <Link
                    to={`/categories/${category?.slug?.current as string}`}
                    className="underline decoration-slate-600 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 block h-full w-full"
                    title={category.description ?? ""}
                  >
                    {category.name}
                  </Link>
                </li>
              )
            })}
            <li className="h-full col-span-1 flex items-center justify-center">
              <Link
                to="/about"
                className="underline decoration-slate-600 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5  flex justify-center items-center gap-1.5 h-full w-full"
              >
                <BsFillPersonLinesFill />
                About me
              </Link>
            </li>
          </menu>
        </div>
      )}
      {children}
      <ContactForm
        className="mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
        my-4 sm:my-8 md:my-12 lg:my-16"
      />
    </>
  )
}

export default RichHeaderLayout
