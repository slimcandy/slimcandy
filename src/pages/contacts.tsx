import { type HeadProps } from "gatsby"
import * as React from "react"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import ContactForm from "../components/ContactForm"

function ContactsPage(): JSX.Element {
  return (
    <TinyLayout>
      <main className="my-1 sm:my-2 md:my-3 lg:my-4">
        <ContactForm />
      </main>
    </TinyLayout>
  )
}

export default ContactsPage

export function Head({ location }: HeadProps): JSX.Element {
  return <Seo title="Contact Me" pathname={location.pathname} />
}
