import * as React from 'react'
import { ArrowUp, RSS } from '../../utils/icons'

function Footer() {
  return (
    <>
      <p>
        Bootstrap template by <a href="https://twitter.com/mdo">@mdo</a>.
      </p>
      <p>
        <a
          href="#top"
          className="btn btn-link d-flex flex-row align-items-center gap-2"
        >
          <ArrowUp /> Back to top
        </a>
      </p>
      <p>
        <a
          href="/rss.xml"
          className="btn btn-link d-flex flex-row align-items-center gap-2"
        >
          <RSS /> RSS Feed
        </a>
      </p>
    </>
  )
}

export default Footer
