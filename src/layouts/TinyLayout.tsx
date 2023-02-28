import * as React from "react"
import { Link } from "gatsby"
import {
  AiFillHome,
  AiFillGithub,
  AiTwotoneMail,
  AiFillLinkedin,
  AiOutlineHome,
} from "react-icons/ai"
import { BsFillPersonLinesFill, BsFillRssFill } from "react-icons/bs"
import { SiApplepodcasts } from "react-icons/si"

import { TCategories, TSiteMetadata } from "../utils/types"
import Footer from "../components/Footer"

function TinyLayout({
  children,
  siteMetadata,
  categories,
}: {
  children: React.ReactNode
  siteMetadata?: TSiteMetadata
  categories?: TCategories
}) {
  return (
    <>
      {siteMetadata && (
        <menu className="grid grid-cols-5 items-center justify-between mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl border-[thin] border-black my-1 sm:my-2 md:my-4 lg:my-5 xl:my-6 text-lg md:text-xl font-thin sm:font-extralight md:font-light lg:font-normal text-center capitalize">
          <li className="h-full border-r-[thin] border-black col-span-1 flex items-center justify-center">
            <Link
              to="/"
              className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5  flex justify-center items-center gap-1.5 h-full w-full"
            >
              <AiFillHome />
              Home page
            </Link>
          </li>
          {categories &&
            categories.map(category => (
              <li className="h-full border-r-[thin] border-black col-span-1 flex items-center justify-center">
                <Link
                  to={`/categories/${category?.slug?.current}`}
                  className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white  p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 block h-full w-full"
                  title={category.description || ""}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          <li className="h-full col-span-1 flex items-center justify-center">
            <Link
              to="/about"
              className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5  flex justify-center items-center gap-1.5 h-full w-full"
            >
              <BsFillPersonLinesFill />
              About me
            </Link>
          </li>
        </menu>
      )}
      {children}
      <Footer siteMetadata={siteMetadata} />
    </>
  )
}

export default TinyLayout
