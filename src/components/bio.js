/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Bio = ({ author, children, imageUrl }) => {
  return (
    <div className="bio">
      <GatsbyImage image={imageUrl} className="bio-avatar" />
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
