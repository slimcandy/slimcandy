import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { appleImage } from './ContactForm.module.scss'

function ContactForm() {
  return <article
    className="d-flex flex-row flex-wrap justify-content-center rounded overflow-hidden align-items-center mb-4 h-md-250 shadow-sm border"
    itemScope
    itemType="https://schema.org/Person"
  >
    <picture className="">
      <StaticImage
        src="../../images/apple.png"
        alt="👨🏻‍💻"
        className={`img-fluid ${appleImage}`}
        placeholder="blurred"
        quality={100}
        objectFit="contain"
      />
    </picture>
    <div className="p-2 d-flex flex-column">
      <h3 itemProp="name">Alex</h3>
      <span className="mb-1 text-muted" itemProp="jobTitle">
        🚀 React developer.
        <br />
        👨🏻‍💻 Adore semantic html.
        <br />
        🕶 Care about privacy.
      </span>
    </div>
    <div className="flex-grow-1 p-2 d-flex flex-column">
      <form name="contact form" data-netlify="true" method="POST">
        <input type="hidden" name="form-name" value="contact form" />
        <legend className="visually-hidden">Contact</legend>
        <div className="mb-3">
          <label htmlFor="messageID" className="form-label visually-hidden">
            Message
          </label>
          <textarea
            className="form-control"
            id="messageID"
            rows={3}
            name="message"
            placeholder="Leave email or telegram so I could reply"
           />
        </div>
        <button type="submit" className="btn btn-sm btn-outline-secondary">
          Send message to Alex
        </button>
      </form>
    </div>
  </article>
}

export default ContactForm
