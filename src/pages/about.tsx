import { graphql, HeadProps, Link, PageProps } from "gatsby"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"

function AboutPage({ data }: PageProps<Queries.AboutPageQuery>) {
  const siteMetadata = data.site?.siteMetadata

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="font-serif my-1 sm:my-2 md:my-3 lg:my-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <article
          className="prose prose-neutral prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl
          prose-a:underline prose-a:decoration-black prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:decoration-red-700 focus:prose-a:outline-none focus:prose-a:no-underline focus:prose-a:ring-4 focus:prose-a:ring-offset-2 focus:prose-a:ring-stone-900 focus:prose-a:bg-white"
        >
          <h1>👋 Hello, tech enthusiasts and future collaborators!</h1>
          <StaticImage
            src="../../static/images/photo.jpeg"
            alt="Photo of me in Adidas tracksuit. I'm standing at the edge of a cliff – national park."
            className="block
            w-40 sm:w-52 md:w-60 lg:w-72
            max-h-40 sm:max-h-52 md:max-h-60 lg:max-h-72
            mr-2 mb-2
            float-right"
            placeholder="dominantColor"
            formats={["auto", "webp", "avif", "jpg", "png"]}
            width={288}
            breakpoints={[576, 768, 992, 1200]}
            objectFit="contain"
          />

          <p>
            Welcome to my coding zone, where I share my journey towards earning
            $10k/month from coding. If you're into CSS, JS, or dreaming to code
            your way to success, stick around!
          </p>

          <h2>🚀 Ready to create awesome stuff together? Let's go!</h2>

          <h2>👨‍💻 Me in a Nutshell</h2>
          <p>
            I'm a seasoned React Developer with 4 years of frontend experience,
            proud to have worked with big shots like Luxoft and Gazprombank.
          </p>

          <h2>🛠️ My Power Tools</h2>
          <p>
            I swing around JavaScript, React, Redux, GatsbyJS, TypeScript,
            Webpack, HTML/CSS, APIs, and Git/GitHub. I'm a fan of designs that
            are responsive, accessible, and mobile-first.
          </p>

          <h2>🤝 Let's Chat!</h2>
          <p>
            I'm all about teamwork and clear communication. If you're into tech,
            looking for a coder, or keen to create something awesome together,
            reach out to me. Let's make coding history together! 🚀
          </p>
        </article>
        {siteMetadata?.social && (
          <section className="mt-4">
            <menu className="flex flex-wrap items-center gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 md:text-lg xl:text-xl">
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
                  href={siteMetadata?.social?.linkedin || ""}
                  className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
                >
                  <AiFillLinkedin /> linkedin
                </a>
              </li>
            </menu>
          </section>
        )}
      </main>
    </TinyLayout>
  )
}

export default AboutPage

export function Head({ data, location }: HeadProps<Queries.AboutPageQuery>) {
  const siteDescription = data.site?.siteMetadata?.description || ``

  return (
    <Seo
      title="Let's Move Code Mountains!"
      description={siteDescription}
      pathname={location.pathname}
    />
  )
}

export const AboutPageQuery = graphql`
  query AboutPage {
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
