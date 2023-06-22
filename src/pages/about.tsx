import { graphql, type HeadProps, type PageProps } from "gatsby"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"

function AboutPage({ data }: PageProps<Queries.AboutPageQuery>): JSX.Element {
  const siteMetadata = data.site?.siteMetadata

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="font-serif min-padding-y sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
        <article className="prose-primary">
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
            as="figure"
            loading="lazy"
          />

          <p>
            Welcome to my coding zone, where I share my journey towards earning
            $10k/month from coding. If you&apos;re into CSS, JS, or dreaming to
            code your way to success, stick around!
          </p>

          <h2>🚀 Ready to create awesome stuff together? Let&apos;s go!</h2>

          <h2>👨‍💻 Me in a Nutshell</h2>
          <p>
            I&apos;m a seasoned React Developer with 4 years of frontend
            experience, proud to have worked with big shots like Luxoft and
            Gazprombank.
          </p>

          <h2>🛠️ My Power Tools</h2>
          <p>
            I swing around JavaScript, React, Redux, GatsbyJS, TypeScript,
            Webpack, HTML/CSS, APIs, and Git/GitHub. I&apos;m a fan of designs
            that are responsive, accessible, and mobile-first.
          </p>

          <h2>🤝 Let&apos;s Chat!</h2>
          <p>
            I&apos;m all about teamwork and clear communication. If you&apos;re
            into tech, looking for a coder, or keen to create something awesome
            together, reach out to me. Let&apos;s make coding history together!
            🚀
          </p>
          {siteMetadata?.social != null && (
            <section className="mt-4">
              <menu className="flex flex-wrap items-center gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 md:text-lg xl:text-xl">
                <li>
                  <a
                    href={siteMetadata?.social?.youtube ?? ""}
                    className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
                  >
                    <AiFillYoutube /> youtube
                  </a>
                </li>
                <li>
                  <a
                    href={siteMetadata?.social?.github ?? ""}
                    className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
                  >
                    <AiFillGithub /> github
                  </a>
                </li>
                <li>
                  <a
                    href={siteMetadata?.social?.linkedin ?? ""}
                    className="underline decoration-black decoration-2 underline-offset-2 hover:decoration-red-700 focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-white flex items-center gap-x-2"
                  >
                    <AiFillLinkedin /> linkedin
                  </a>
                </li>
              </menu>
            </section>
          )}
          <hr />
          <h2>💼 GitHub Projects</h2>
          <p>
            Explore my diverse portfolio of open-source projects on GitHub, each
            bringing unique solutions to a range of domains:
            <ul>
              <li>
                Dive into 🗒️
                <a href="https://github.com/slimcandy/openNotes">openNotes</a>,
                your digital note-keeping ally
              </li>
              <li>
                Get a taste of Augmented Reality applications with 🕶️
                <a href="https://github.com/slimcandy/WhatARQuickLookCanDoToday">
                  WhatARQuickLookCanDoToday
                </a>
                &nbsp;and&nbsp;
                <a href="https://github.com/slimcandy/randomARt">randomARt</a>
              </li>
              <li>
                🔒
                <a href="https://github.com/slimcandy/MetaCleaner">
                  MetaCleaner
                </a>
                &nbsp;safeguards your privacy by quickly stripping EXIF data
                from your photos
              </li>
              <li>
                🏞️
                <a href="https://github.com/slimcandy/todorism">evency.space</a>
                &nbsp;is a user-friendly web app that helps hiking teams
                streamline spending and gear organization
              </li>
              <li>
                For budding bloggers, 📚
                <a href="https://github.com/slimcandy/typescript-gatsby-boilerplate">
                  typescript-gatsby-boilerplate
                </a>
                &nbsp;is an educational repository on setting up a personal blog
                with Gatsby and Sanity.io
              </li>
              <li>
                <a href="https://github.com/slimcandy/isit-hdr-ready">
                  isit-hdr-ready
                </a>
                &nbsp;is a handy NPM package, crafted in pure JavaScript, that
                checks for HDR support in your CSS
              </li>
            </ul>
            Get ready to immerse yourself in this playground of creativity and
            technical skill.
          </p>
        </article>
      </main>
    </TinyLayout>
  )
}

export default AboutPage

export function Head({
  data,
  location,
}: HeadProps<Queries.AboutPageQuery>): JSX.Element | null {
  const siteDescription = data.site?.siteMetadata?.description ?? ``

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
