import * as React from "react"
import type { PageProps } from "gatsby"
import {
  AiFillTag,
  AiFillYoutube,
  AiFillGithub,
  AiTwotoneMail,
  AiFillLinkedin,
} from "react-icons/ai"
import { BiCategoryAlt } from "react-icons/bi"
import { GrFormNextLink } from "react-icons/gr"
import { BsFillRssFill } from "react-icons/bs"
import { SiApplepodcasts } from "react-icons/si"
import { FaRegCopyright } from "react-icons/fa"

function IndexPage(props: PageProps) {
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
        <a
          href="#category"
          className="hover:underline hover:decoration-8 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white inline-block"
        >
          <h2 className="text-xl sm:text-3xl md:text-5xl sm:p-1 md:p-2 text-center my-1 md:my-2 text-stone-900 px-1 md:px-2 lg:px-4">
            Turn Your Pet Projects into Profits and Become a Programming Pro: A
            Guide to Success
          </h2>
        </a>
        <div className="grid md:grid-cols-5 xl:grid-cols-4 gap-x-4 gap-y-2 items-stretch justify-center border-b-2 border-b-stone-900 border-double px-4 sm:px-3 md:px-2 lg:px-1 xl:px-0 text-justify">
          <div className="md:order-2 md:col-span-3 xl:col-span-2 flex flex-col items-center">
            <article className="font-light font-serif leading-normal max-w-xl md:font-normal text-base md:text-lg  text-stone-900">
              <img
                src="https://cdn.sanity.io/images/qtyf8bhl/production/f51dc2aeabea156f5d32dc1e4b0475e300910ff0-1024x1024.png?rect=0,312,1024,400&w=1024&h=400&auto=format"
                alt="logo"
                className="block w-full max-h-40 sm:max-h-52 md:max-h-72 lg:max-h-80 object-cover mb-2 border-4 border-stone-900"
              />
              <p>
                As a programmer, you are likely familiar with the excitement
                from pet projects. Whether it's a passion project or an
                experiment with new technologies, these projects can be
                rewarding. But what if you could turn your pet projects into
                profits and become a programming pro? This guide will show you
                how to do that.
              </p>

              <h3 className="text-xl md:text-3xl my-2">GitHub</h3>
              <p>
                The first step in turning your pet projects into profits is to
                make your GitHub repository contribution-ready. This means
                adding a license and contribution files to your repository.
              </p>
              <a
                href="#read"
                className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-4 border-double border-stone-900 flex items-center gap-x-2 my-2 px-4 py-2 text-xl"
              >
                <GrFormNextLink />
                Read more...
              </a>
            </article>
          </div>
          <div className="md:order-1 md:px-4 md:border-r-2 md:border-r-stone-900 md:border-double flex justify-center">
            <article className="font-light font-serif  leading-none max-w-xl md:font-normal text-sm md:text-base ">
              <a
                href="#category"
                className="hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white inline-block"
              >
                <h3 className="text-xl md:text-2xl mb-2 tracking-widest font-light">
                  My New MacBook Setup
                </h3>
              </a>
              <img
                src="https://cdn.sanity.io/images/qtyf8bhl/production/25b2e957914f6142695ab5bc8082f297489c8d1e-1024x1024.png?rect=0,312,1024,400&w=1024&h=400&auto=format"
                alt="logo"
                className="block w-full max-h-48 object-cover mb-2 border-2 border-stone-600"
              />
              <p>
                I have been using a MacBook Pro for about 3 years now. Here are
                all goes into setting up my own setup for a new MacBook Pro M2
                Max. Inspired by michaeluloth.com.
              </p>
              <h4 className="text-lg md:text-2xl my-2">Laptop</h4>
              <p>
                Is there a one command to escape problems with development on
                macs? Yes, it's Command Line Tools for Xcode.{" "}
                <code>xcode-select --install</code>
              </p>
              <a
                href="#read"
                className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-2 border-double border-stone-900 flex items-center gap-x-2 my-2 px-2 py-1"
              >
                <GrFormNextLink />
                Read more...
              </a>
            </article>
          </div>
          <div className="order-3 md:px-4 md:border-l-2 md:border-l-stone-900 md:border-double flex justify-center">
            <article className=" font-light font-serif leading-none max-w-xl md:font-normal text-sm md:text-base  ">
              <a
                href="#category"
                className="hover:underline hover:decoration-4 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white inline-block"
              >
                {" "}
                <h3 className="text-xl md:text-2xl mb-2 tracking-widest font-light">
                  HDR in CSS
                </h3>
              </a>
              <img
                src="https://cdn.sanity.io/images/qtyf8bhl/production/b5bddacb5423ebcf2280d6ae7e84e172d1bba877-777x892.png?w=654&h=751&auto=format"
                alt="logo"
                className="block w-full max-h-48 object-cover my-2 border-2 border-stone-600"
              />
              <p>
                The color gamut is a numerical value that specifies the visible
                range of colours on a certain device. CIE 1931 color space is a
                scientific map of possible colours values. Since 1996 sRGB or
                safe-web colours interpret colours for browser and monitors.
                Nowadays displays are able to show 50% more colours from sRGB.
              </p>
              <a
                href="#read"
                className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-2 border-double border-stone-900 flex items-center gap-x-2 my-2 px-2 py-1"
              >
                <GrFormNextLink />
                Read more...
              </a>
            </article>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 items-stretch justify-center mx-auto px-4 py-2">
          <article className=" font-light font-serif leading-none max-w-xl md:font-normal text-sm md:text-base text-justify   mt-1 pt-2">
            <h3 className="text-xl md:text-2xl mb-2 tracking-widest font-light">
              HDR in CSS
            </h3>
            <p>
              The color gamut is a numerical value that specifies the visible
              range of colours on a certain device. CIE 1931 color space is a
              scientific map of possible colours values. Since 1996 sRGB or
              safe-web colours interpret colours for browser and monitors.
              Nowadays displays are able to show 50% more colours from sRGB.
            </p>
            <a
              href="#read"
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-2 border-double border-stone-900 flex items-center gap-x-2 my-2 px-2 py-1"
            >
              <GrFormNextLink />
              Read more...
            </a>
          </article>
          <article className=" font-light font-serif leading-none max-w-xl md:font-normal text-sm md:text-base text-justify   mt-1 pt-2">
            <h3 className="text-xl md:text-2xl mb-2 tracking-widest font-light">
              HDR in CSS
            </h3>
            <p>
              The color gamut is a numerical value that specifies the visible
              range of colours on a certain device. CIE 1931 color space is a
              scientific map of possible colours values. Since 1996 sRGB or
              safe-web colours interpret colours for browser and monitors.
              Nowadays displays are able to show 50% more colours from sRGB.
            </p>
            <a
              href="#read"
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-2 border-double border-stone-900 flex items-center gap-x-2 my-2 px-2 py-1"
            >
              <GrFormNextLink />
              Read more...
            </a>
          </article>
          <article className=" font-light font-serif leading-none max-w-xl md:font-normal text-sm md:text-base text-justify   mt-1 pt-2">
            <h3 className="text-xl md:text-2xl mb-2 tracking-widest font-light">
              HDR in CSS
            </h3>
            <p>
              The color gamut is a numerical value that specifies the visible
              range of colours on a certain device. CIE 1931 color space is a
              scientific map of possible colours values. Since 1996 sRGB or
              safe-web colours interpret colours for browser and monitors.
              Nowadays displays are able to show 50% more colours from sRGB.
            </p>
            <a
              href="#read"
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white border-2 border-double border-stone-900 flex items-center gap-x-2 my-2 px-2 py-1"
            >
              <GrFormNextLink />
              Read more...
            </a>
          </article>
        </div>
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

export default IndexPage

export function Head() {
  return (
    <>
      <html lang="en" />
      <body className="text-stone-600 hyphens-auto transition-all" />
      <title>Home page | JS.Garden</title>
    </>
  )
}
