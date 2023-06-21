import * as React from "react"
import { Link } from "gatsby"
import { AiOutlineBulb, AiOutlineMessage } from "react-icons/ai"
import { BsBriefcase } from "react-icons/bs"

import SignUpForm from "../components/SignUpForm"

function TinyLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <div
        className="
      after:content-['❦'] 
      after:block 
      after:w-full 
      after:text-center 
      after:text-6xl 
      after:text-palette5-blue-300 
      after:opacity-80"
      >
        <header
          className="flex flex-wrap items-center justify-between
            text-xl
            py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
            mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12
            print:hidden"
        >
          <div className="flex flex-wrap items-center justify-between space-x-4">
            <Link to="/" className="link font-black">
              Home Page
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-between space-x-4">
            <menu className="flex flex-wrap items-center justify-between space-x-4">
              <li>
                <Link
                  to="/solutions"
                  className="link flex flex-wrap items-center justify-between space-x-4"
                >
                  <AiOutlineBulb className="mr-1 text-palette5-blue-300" />
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="link flex flex-wrap items-center justify-between space-x-4"
                >
                  <BsBriefcase className="mr-1 text-palette5-blue-300" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="link flex flex-wrap items-center justify-between space-x-4"
                >
                  <AiOutlineMessage className="mr-1 text-palette5-blue-300" />
                  Contacts
                </Link>
              </li>
            </menu>
          </div>
        </header>
        {children}
      </div>
      <SignUpForm />
    </>
  )
}

export default TinyLayout
