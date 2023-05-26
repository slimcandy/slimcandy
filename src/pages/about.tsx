import { graphql, HeadProps, Link, PageProps } from "gatsby"
import * as React from "react"

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
          <h1>Hi, I&#39;m Alex!</h1>
          <p>
            Welcome to my blog, where I share tips and strategies on coding,
            Github projects, semantic HTML, JS performance, CSS tricks, and
            more. This space is for aspiring web developers looking to make
            their mark in the tech industry.
          </p>
          <p>Let&#39;s connect and create something amazing together!</p>
          <h2>About me</h2>
          <p>
            I&#39;m a <strong>React Developer</strong> with 4 years of
            experience, specializing in <strong>Frontend Development</strong>{" "}
            and <strong>Component-based Development</strong>. I&#39;ve worked
            with top companies like Luxoft and Gazprombank, contributing to
            various projects and honing my skills.
          </p>
          <p>
            My expertise includes <strong>JavaScript</strong>,{" "}
            <strong>React</strong>, <strong>Redux</strong>,{" "}
            <strong>GatsbyJS</strong>, <strong>TypeScript</strong>,{" "}
            <strong>Webpack</strong>, <strong>HTML/CSS</strong>,{" "}
            <strong>Agile methodologies</strong>,{" "}
            <strong>API consumption</strong>, and <strong>Git/GitHub</strong>.
            I&#39;m a strong advocate for <strong>Responsive Design</strong>,{" "}
            <strong>Mobile-first</strong> approach, and web accessibility
            standards (W3C/WCAG).
          </p>
          <p>
            I value effective collaboration and communication, having experience
            working in remote-first teams following Agile methodologies. I also
            have a keen interest in <strong>UX/UI Design</strong>, believing in
            the importance of user-friendly interfaces.
          </p>
        </article>
        {siteMetadata?.social && (
          <section>
            <h4 className="uppercase text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider sm:tracking-widest md:tracking-[0.2em] lg:tracking-[0.3em] xl:tracking-[0.4em] py-0.5 sm:py-1 md:py-2 lg:py-3 xl:py-3.5 font-sans font-thin">
              Follow me
            </h4>
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

export function Head({ data }: HeadProps<Queries.AboutPageQuery>) {
  const siteTitle = data.site?.siteMetadata?.title
  const siteDescription = data.site?.siteMetadata?.description || ``

  return (
    <Seo
      title={`Page not found | ${siteTitle}`}
      description={siteDescription}
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
