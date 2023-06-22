import { type HeadProps } from "gatsby"
import * as React from "react"
import { BsFillBriefcaseFill, BsRocketTakeoff, BsSearch } from "react-icons/bs"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import ContactForm from "../components/ContactForm"

function SolutionsPage(): JSX.Element {
  return (
    <TinyLayout>
      <main className="my-1 sm:my-2 md:my-3 lg:my-4">
        <article
          className="flex flex-col md:flex-row
        gap-x-4 gap-y-4
        width-100 min-padding-x"
        >
          <section
            className="order-2 md:order-1 md:flex-initial
            border border-palette5-blue-300
            pt-4 lg:pt-6
            pb-6 lg:pb-8
            w-full md:w-1/3"
          >
            <div className="min-padding-x flex flex-col md:items-center md:justify-center">
              <small className="badge text-xs md:text-sm">
                <BsRocketTakeoff className="text-palette5-blue-50" />
              </small>
              <h2
                className="md:text-xl lg:text-2xl md:text-center
                font-bold
                py-1 md:py-2 lg:py-3"
              >
                JAMStack Blogs
              </h2>
            </div>
            <hr className="hr" />
            <div className="prose-set min-padding-x ">
              <p>
                <strong>Reinvent your blog</strong>
              </p>
              <p>React + GatsbyJS + TailwindCSS = magic.</p>
              <p>Fast, secure, free hosting, seamless integration.</p>
            </div>
            <div className="min-padding-x md:px-0 md:text-center">
              <a href="#contact" className="button">
                Create My Blog Now
              </a>
            </div>
          </section>
          <section
            className="order-1 
            border border-palette5-blue-300
            shadow-md

            md:order-2 md:flex-grow
            md:-mt-4 lg:-mt-6
            md:-mb-4 lg:-mb-6
            
            pt-2 lg:pt-4
            pb-4 lg:pb-6
            
            w-full md:w-1/3"
          >
            <div className="min-padding-x flex flex-col md:items-center md:justify-center">
              <small className="badge badge-teal text-xs md:text-sm">
                <BsSearch />
              </small>
              <h2
                className="md:text-xl lg:text-2xl md:text-center
                font-bold
                py-1 md:py-2 lg:py-3"
              >
                Google Dominance
              </h2>
            </div>
            <hr className="hr" />
            <div className="prose-set min-padding-x ">
              <p>
                <strong>Struggling in search results?</strong>
              </p>
              <p>
                I can fix it! Ace your Google Lighthouse score and soar up the
                rankings. Lightning-fast load times.
              </p>
            </div>
            <div className="min-padding-x md:px-0 md:text-center">
              <a href="#contact" className="button button-teal">
                Boost My Rankings
              </a>
            </div>
          </section>
          <section
            className="order-3 md:flex-initial
            border border-palette5-blue-300
            pt-4 lg:pt-6
            pb-6 lg:pb-8
            
            w-full md:w-1/3"
          >
            <div className="min-padding-x flex flex-col md:items-center md:justify-center">
              <small className="badge text-xs md:text-sm">
                <BsFillBriefcaseFill className="text-palette5-blue-50" />
              </small>
              <h2
                className="md:text-xl lg:text-2xl md:text-center
                font-bold
                py-1 md:py-2 lg:py-3"
              >
                Consultancy
              </h2>
            </div>
            <hr className="hr" />
            <div className="prose-set min-padding-x">
              <p>
                <strong>More Than Websites</strong>
              </p>
              <p>
                Unleash the true power of JAMStack. Cut costs on hosting, CMS,
                TSL, CI/CD. Optimize efficiency and performance.
              </p>
            </div>
            <div className="min-padding-x md:px-0 md:text-center">
              <a href="#contact" className="button">
                Dominate the Web
              </a>
            </div>
          </section>
        </article>
        <ContactForm id="contact" />
      </main>
    </TinyLayout>
  )
}

export default SolutionsPage

export function Head({ location }: HeadProps): JSX.Element {
  return <Seo title="Contact Me" pathname={location.pathname} />
}
