import { type HeadProps } from "gatsby"
import * as React from "react"
import { BsFillCheckSquareFill, BsFillLockFill, BsGithub } from "react-icons/bs"
import { BiCube, BiNotepad, BiLogoTypescript } from "react-icons/bi"
import { GiWaveSurfer } from "react-icons/gi"
import { MdHdrOn } from "react-icons/md"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import ContactForm from "../components/ContactForm"

function ContactsPage(): JSX.Element {
  return (
    <TinyLayout>
      <main className="min-padding-y width-100 min-padding-x">
        <div
          className="prose-set
          mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
        >
          <h1 className="flex items-center gap-x-4">
            <BsGithub className="text-palette5-blue-200 dark:text-palette5-blue-600" />
            GitHub Projects
          </h1>
          <p className="max-reading-w">
            Explore my diverse portfolio of open-source projects on GitHub, each
            bringing unique solutions to a range of domains.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
          <li
            className="min-padding-x min-padding-y 
          bg-white border border-palette5-blue-100
          dark:bg-palette5-blue-900 dark:border-palette5-blue-800"
          >
            <a
              href="https://github.com/slimcandy/openNotes"
              className="link flex items-center gap-x-4
              sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              <BiNotepad className="text-palette5-blue-200" /> open Notes
            </a>
            <div className="prose-set">
              <p className="max-reading-w">
                OpenNote is an open-source, offline-capable note-taking
                application, designed to capture and share your ideas freely and
                efficiently, anytime, anywhere. It was developed using React.
              </p>
            </div>
          </li>
          <li
            className="min-padding-x min-padding-y bg-white border border-palette5-blue-100
          dark:bg-palette5-blue-900 dark:border-palette5-blue-800"
          >
            <a
              href="https://github.com/slimcandy/WhatARQuickLookCanDoToday"
              className="link flex items-center gap-x-4
              sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              <BiCube className="text-palette5-blue-200" /> What ARQuickLook can
              do today?
            </a>
            <div className="prose-set">
              <p className="max-reading-w">AR Application Examples</p>
            </div>
          </li>
          <li
            className="min-padding-x min-padding-y bg-white border border-palette5-blue-100
          dark:bg-palette5-blue-900 dark:border-palette5-blue-800"
          >
            <a
              href="https://github.com/slimcandy/randomARt"
              className="link flex items-center gap-x-4
              sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              <GiWaveSurfer className="text-palette5-blue-200" /> random ARt
            </a>
            <div className="prose-set">
              <p className="max-reading-w">Surf the ocean of AR objects</p>
            </div>
          </li>
          <li
            className="min-padding-x min-padding-y bg-white border border-palette5-blue-100
          dark:bg-palette5-blue-900 dark:border-palette5-blue-800"
          >
            <a
              href="https://github.com/slimcandy/MetaCleaner"
              className="link flex items-center gap-x-4
              sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              <BsFillLockFill className="text-palette5-blue-200" /> Meta Cleaner
            </a>
            <div className="prose-set">
              <p className="max-reading-w">
                Easily remove metadata from your images with our online tool,
                MetaCleaner. Preserve your privacy by stripping out EXIF data
                from your photos in seconds.
              </p>
            </div>
          </li>
          <li
            className="min-padding-x min-padding-y bg-white border border-palette5-blue-100
          dark:bg-palette5-blue-900 dark:border-palette5-blue-800"
          >
            <a
              href="https://github.com/slimcandy/todorism"
              className="link flex items-center gap-x-4
              sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              <BsFillCheckSquareFill className="text-palette5-blue-200" />{" "}
              evency.space
            </a>
            <div className="prose-set">
              <p className="max-reading-w">
                A user-friendly web app that helps hiking teams streamline
                spending and gear organization
              </p>
            </div>
          </li>
          <li
            className="min-padding-x min-padding-y bg-white border border-palette5-blue-100
          dark:bg-palette5-blue-900 dark:border-palette5-blue-800"
          >
            <a
              href="https://github.com/slimcandy/typescript-gatsby-boilerplate"
              className="link flex items-center gap-x-4
              sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              <BiLogoTypescript className="text-palette5-blue-200" /> Typescript
              GatsbyJS boilerplate
            </a>
            <div className="prose-set">
              <p className="max-reading-w">
                Educational repository on setting up a personal blog with Gatsby
                and Sanity.io
              </p>
            </div>
          </li>
          <li
            className="min-padding-x min-padding-y bg-white border border-palette5-blue-100
          dark:bg-palette5-blue-900 dark:border-palette5-blue-800"
          >
            <a
              href="https://github.com/slimcandy/isit-hdr-ready"
              className="link flex items-center gap-x-4
              sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            >
              <MdHdrOn className="text-palette5-blue-200" /> is it HDR ready?
            </a>
            <div className="prose-set">
              <p className="max-reading-w">
                Educational repository on setting up a personal blog with Gatsby
                and Sanity.io
              </p>
            </div>
          </li>
        </ul>
        <ContactForm />
      </main>
    </TinyLayout>
  )
}

export default ContactsPage

export function Head({ location }: HeadProps): JSX.Element {
  return <Seo title="Contact Me" pathname={location.pathname} />
}
