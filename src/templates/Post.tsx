import * as React from "react"
import {
  AiFillYoutube,
  AiFillGithub,
  AiTwotoneMail,
  AiFillLinkedin,
  AiFillHome,
} from "react-icons/ai"
import { BsFillRssFill } from "react-icons/bs"
import { SiApplepodcasts } from "react-icons/si"
import { FaRegCopyright } from "react-icons/fa"
import { graphql, HeadProps, Link } from "gatsby"
import Seo from "../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { PortableText } from "@portabletext/react"
import IndexPageLayout from "./Index"
import portableTextComponents from "../utils/portableText"

function SinglePostLayout({
  children,
  data,
}: {
  children: React.ReactNode
  data: Queries.SinglePostLayoutQuery
}) {
  const siteMetadata = data?.site?.siteMetadata
  const post = data?.sanityPost

  if (!post) {
    return (
      <IndexPageLayout>
        <p>No blog post found.</p>
      </IndexPageLayout>
    )
  }

  return (
    <>
      {siteMetadata && (
        <header className="md:py-1 lg:py-1.5 xl:py-2 max-w-screen-2xl mx-1 lg:mx-2 border-b-2 border-stone-500 border-double">
          <Link
            to="/"
            className="hover:underline hover:decoration-8 hover:underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white block"
            title="Home Page"
          >
            <h3 className="lowercase md:uppercase text-center font-serif font-medium sm:font-semibold md:font-bold lg:font-extrabold xl:font-black md:text-lg lg:text-xl xl:text-2xl">
              {siteMetadata.title}
            </h3>
          </Link>
        </header>
      )}
      <main className="font-serif text-stone-900 my-1 sm:my-2 md:my-3 lg:my-4 max-w-screen-2xl mx-auto">
        {post?.title && (
          <h1 className="font-medium sm:font-semibold md:font-bold lg:font-extrabold xl:font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:p-1 md:p-2 text-center my-1 md:my-2 px-1 md:px-2 lg:px-4">
            {post.title}
          </h1>
        )}
        <div className=" px-4 sm:px-3 md:px-2 lg:px-1 xl:px-0 text-justify flex flex-col items-center">
          {post.mainImage && post.mainImage.asset && (
            <GatsbyImage
              image={post.mainImage.asset.gatsbyImageData}
              alt={post.mainImage.asset.altText || ""}
              className="block w-full max-h-40 sm:max-h-52 md:max-h-72 lg:max-h-80 object-cover mb-2 border-4 border-stone-900"
            />
          )}
          <article className="max-w-xl md:text-lg xl:text-xl pb-4 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8">
            <PortableText
              value={post.content}
              components={portableTextComponents}
            />
          </article>
        </div>
      </main>
      <footer className="my-2 max-w-screen-2xl mx-auto">
        <ul className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 border-y-2 border-double border-stone-500 py-2 text-sm">
          <li>
            <a
              href={siteMetadata?.social?.youtube || ""}
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiFillYoutube /> youtube
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.github || ""}
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiFillGithub /> github
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.rss || ""}
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <BsFillRssFill /> rss
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.podcast || ""}
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <SiApplepodcasts /> podcasts
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.email || ""}
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiTwotoneMail /> email
            </a>
          </li>
          <li>
            <a
              href={siteMetadata?.social?.linkedin || ""}
              className="underline decoration-slate-500 decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
            >
              <AiFillLinkedin /> linkedin
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center justify-between gap-x-2 py-1 px-4 text-xs">
          <li>All rights reserved</li>
          <li className="flex items-center gap-x-2">
            <FaRegCopyright /> {siteMetadata?.author || ""}
          </li>
          <li>{new Date().getFullYear().toString()}</li>
        </ul>
      </footer>
    </>
  )
}

export default SinglePostLayout

export function Head({ data }: HeadProps<Queries.SinglePostLayoutQuery>) {
  const siteTitle = data.site?.siteMetadata?.title
  const postTitle = data.sanityPost?.title
  const postDescription = data.sanityPost?.description || ""

  return (
    <Seo title={`${postTitle} | ${siteTitle}`} description={postDescription} />
  )
}

export const SinglePostLayoutQuery = graphql`
  query SinglePostLayout($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      id
      youtubeUrl
      title
      description
      tags {
        name
        slug {
          current
        }
      }
      mainImage {
        asset {
          gatsbyImageData
          altText
        }
      }
      applePodcastUrl
      author {
        name
        slug {
          current
        }
        bio {
          _key
          _type
          style
          list
          children {
            _type
            _key
            marks
            text
          }
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      category {
        name
        slug {
          current
        }
        description
      }
      content {
        _key
        _type
        list
        style
        children {
          _key
          _type
          marks
          text
        }
      }
    }
    site {
      siteMetadata {
        title
        description
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
