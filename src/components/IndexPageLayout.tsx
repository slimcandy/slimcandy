import * as React from "react"
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
import { FaRegCopyright } from "react-icons/fa"

function IndexPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="my-1 lg:my-2 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 mx-1 lg:mx-2 lg:my-1 items-stretch justify-center md:gap-y-2">
          <p className="hidden md:block border border-stone-500 px-4 py-2 text-xs md:text-sm text-center font-light first-line:tracking-widest first-line:uppercase">
            Subscribe to{" "}
            <a
              href="#RSS"
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
            >
              rss feed
            </a>
            ,{" "}
            <a
              href="#YOUTUBE"
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
            >
              {" "}
              youtube channel
            </a>{" "}
            and{" "}
            <a
              href="#PODCAST"
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
            >
              {" "}
              apple podcasts
            </a>
            .
          </p>
          <div className=" text-center md:col-span-3 flex items-center justify-center">
            <a
              href="#category"
              className="hover:underline hover:decoration-8 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white inline-block"
            >
              <h1 className="uppercase font-serif font-black text-xl sm:text-2xl md:text-4xl lg:text-6xl">
                js.garden
              </h1>
            </a>
          </div>
          <p className="hidden md:block border border-stone-500 px-4 py-2 text-xs md:text-sm text-center font-light first-line:tracking-widest first-line:uppercase">
            Discover my{" "}
            <a
              href="#Github"
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
            >
              Github
            </a>{" "}
            and explore my{" "}
            <a
              href="#LinkedIn"
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white"
            >
              LinkedIn profile
            </a>
            .
          </p>
        </div>
        <hr className="md:hidden border-t-4 sm:border-t-2 border-double border-stone-500 mx-2 my-1 sm:my-2 md:my-3 lg:my-4" />
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 mx-2 my-1 sm:my-2 md:my-3 lg:my-4 items-stretch lowercase text-xs border-y-2 border-double border-stone-500 px-2 md:px-3 lg:px-4 py-1 md:py-2 gap-1">
          <div className="col-span-1 md:col-span-2 flex gap-1 items-center">
            <AiFillTag />
            <ul className="flex flex-wrap items-center gap-1">
              <li>
                <a
                  href="#tag1"
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                >
                  tag1
                </a>{" "}
                /
              </li>
              <li>
                <a
                  href="#tag1"
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                >
                  tag1
                </a>{" "}
                /
              </li>
              <li>
                <a
                  href="#tag1"
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                >
                  tag1
                </a>{" "}
                /
              </li>
              <li>
                <a
                  href="#tag1"
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                >
                  tag1
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-3 flex gap-x-1 items-center uppercase">
            <BiCategoryAlt />
            <ul className="flex flex-wrap items-center gap-1">
              <li>
                <a
                  href="#category"
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                >
                  css
                </a>
                /
              </li>
              <li>
                <a
                  href="#category"
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                >
                  html
                </a>
                /
              </li>
              <li>
                <a
                  href="#category"
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                >
                  life
                </a>
                /
              </li>
              <li>
                <a
                  href="#category"
                  className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white px-2 py-1"
                >
                  js
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="font-serif my-1 sm:my-2 md:my-3 lg:my-4 max-w-screen-2xl mx-auto">
        {children}
      </main>
      <footer className=" my-2 max-w-screen-2xl mx-auto">
        <ul className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 border-y-2 border-stone-500 py-2 text-sm">
          <li>
            <a
              href=""
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiFillYoutube /> youtube
            </a>
          </li>
          <li>
            <a
              href=""
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiFillGithub /> github
            </a>
          </li>
          <li>
            <a
              href=""
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <BsFillRssFill /> rss
            </a>
          </li>
          <li>
            <a
              href=""
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <SiApplepodcasts /> podcasts
            </a>
          </li>
          <li>
            <a
              href=""
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiTwotoneMail /> email
            </a>
          </li>
          <li>
            <a
              href=""
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiFillLinkedin /> linkedin
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center justify-between gap-x-2 py-1 px-4 text-xs">
          <li>All rights reserved</li>
          <li className="flex items-center gap-x-2">
            <FaRegCopyright /> Aleksei Volkov
          </li>
          <li>{new Date().getFullYear().toString()}</li>
        </ul>
      </footer>
    </>
  )
}

export default IndexPageLayout
