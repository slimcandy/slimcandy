import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Footer() {
  return <>
    <p>
      Bootstrap template by <a href="https://twitter.com/mdo">@mdo</a>.
    </p>
    <p>
      <a href="#top">↑ Back to top</a>
    </p>
    <p>
      <a href="/rss.xml" className="btn btn-link">
        <StaticImage
          src="./rss.svg"
          alt="rss feed"
          placeholder="blurred"
          quality={100}
          objectFit="contain"
        />
      </a>
    </p>
  </>
}

export default Footer
