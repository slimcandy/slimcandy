import * as React from "react"
import {
  AiFillYoutube,
  AiFillGithub,
  AiTwotoneMail,
  AiFillLinkedin,
} from "react-icons/ai"
import { BsFillRssFill } from "react-icons/bs"
import { SiApplepodcasts } from "react-icons/si"
import { FaRegCopyright } from "react-icons/fa"
import { TSiteMetadata } from "../utils/types"

function Footer({ siteMetadata }: { siteMetadata?: TSiteMetadata }) {
  return (
    <footer className="my-2 max-w-screen-2xl mx-auto">
      {siteMetadata && (
        <ul className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 border-y-2 border-double border-stone-500 py-2 text-sm">
          <li>
            <a
              href={siteMetadata?.social?.youtube || ""}
              className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiFillYoutube /> youtube
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.github || ""}
              className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiFillGithub /> github
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.rss || ""}
              className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <BsFillRssFill /> rss
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.podcast || ""}
              className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <SiApplepodcasts /> podcasts
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.email || ""}
              className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiTwotoneMail /> email
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.linkedin || ""}
              className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiFillLinkedin /> linkedin
            </a>
          </li>
        </ul>
      )}
      {siteMetadata?.author && (
        <ul className="flex flex-wrap items-center justify-between gap-x-2 py-1 px-4 text-xs">
          <li>All rights reserved</li>
          <li className="flex items-center gap-x-2">
            <FaRegCopyright /> {siteMetadata.author}
          </li>
          <li>{new Date().getFullYear().toString()}</li>
        </ul>
      )}
    </footer>
  )
}

export default Footer
