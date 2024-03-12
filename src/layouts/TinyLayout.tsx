import * as React from "react"
import { Link } from "gatsby"
import { AiOutlineMessage } from "react-icons/ai"

function TinyLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <header
        className="flex flex-wrap items-center justify-between
        max-w-7xl mx-auto
        py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
        mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12
        print:hidden"
      >
        <Link to="/" className="link">
          Home Page
        </Link>
        <menu className="flex flex-wrap items-center justify-between gap-x-2 md:gap-x-4 lg:gap-x-6">
          <li>
            <Link
              to="/contacts"
              className="link flex flex-wrap items-center justify-between gap-x-1"
            >
              <AiOutlineMessage className="text-palette5-blue-300 hidden md:inline" />
              Contact me
            </Link>
          </li>
        </menu>
      </header>
      {children}
    </>
  )
}

export default TinyLayout
