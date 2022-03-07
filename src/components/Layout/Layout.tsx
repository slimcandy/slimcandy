import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import Seo from '../Seo'
import Footer from '../Footer'
import Navigation from '../Navigation'

type LayoutPropsType = {
  children: JSX.Element | JSX.Element[]
  title?: string
  description?: string
  path?: string
  className?: string
}

const Layout = ({
  children,
  className = '',
  title = '',
  description = '',
  path,
}: LayoutPropsType) => {
  React.useEffect(() => {
    deckDeckGoHighlightElement()
  }, [])

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <div className='container'>
        <header className='lh-1' id='top'>
          <Navigation />
        </header>
      </div>
      <main className={`container ${className}`}>{children}</main>
      <footer className='py-4 text-center bg-light border-top text-dark d-flex flex-row flex-wrap justify-content-around align-items-center'>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
