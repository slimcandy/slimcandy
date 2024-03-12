import * as React from "react"
import { Link } from "gatsby"

function TinyLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <header className="bg-white border border-b">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
          <div className="flex items-center gap-x-6">
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home Page
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end gap-x-6">
            <a
              href="http://linkedin.com/in/aleksei-volkov-react/"
              className="ml-auto rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              Contact me
            </a>
          </div>
        </nav>
      </header>
      {children}
    </>
  )
}

export default TinyLayout
