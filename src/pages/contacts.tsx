import { type HeadProps } from "gatsby"
import * as React from "react"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"
import ContactForm from "../components/ContactForm"

function ContactsPage(): JSX.Element {
  return (
    <TinyLayout>
      <main className="min-padding-y">
        <ContactForm />
      </main>
    </TinyLayout>
  )
}

export default ContactsPage

export function Head({ location }: HeadProps): JSX.Element {
  return <Seo title="Contact Me" pathname={location.pathname} />
}
