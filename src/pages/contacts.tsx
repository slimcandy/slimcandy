import { graphql, type HeadProps, type PageProps } from "gatsby"
import * as React from "react"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import ContactForm from "../components/ContactForm"

function AboutPage({ data }: PageProps<Queries.AboutPageQuery>): JSX.Element {
  return (
    <TinyLayout>
      <main className="my-1 sm:my-2 md:my-3 lg:my-4">
        <ContactForm />
      </main>
    </TinyLayout>
  )
}

export default AboutPage

export function Head({
  data,
  location,
}: HeadProps<Queries.AboutPageQuery>): JSX.Element | null {
  const siteDescription = data.site?.siteMetadata?.description ?? ``

  return (
    <Seo
      title="Let's Move Code Mountains!"
      description={siteDescription}
      pathname={location.pathname}
    />
  )
}

export const AboutPageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
        motto
        social {
          github
          linkedin
          youtube
        }
      }
    }
  }
`
