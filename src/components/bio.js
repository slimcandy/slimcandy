/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = ({ author, children }) => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author && (
        <p>
          Written by <strong>{author}</strong>
          {children}
        </p>
      )}
    </div>
  )
}

export default Bio
