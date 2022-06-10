import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { appleImage } from './ContactForm.module.scss'

function ContactForm() {
  return (
    <div className="col-md-10 mx-auto col-lg-5">
      <form
        className="p-4 p-md-5 border rounded-3 bg-light"
        name="contact form"
        data-netlify="true"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact form" />
        <aside className=" d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center">
          <StaticImage
            src="../../images/apple.png"
            alt="👨🏻‍💻"
            className={appleImage}
            placeholder="blurred"
            quality={100}
            objectFit="contain"
          />
          <small className="mb-1 text-muted" itemProp="jobTitle">
            🚀 React developer.
            <br />
            👨🏻‍💻 Adore semantic html.
            <br />
            🕶 Care about privacy.
          </small>
        </aside>
        <hr className="my-4" />
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            id="messageID"
            name="message"
            placeholder="Leave email or telegram so I could reply"
          />
          <label htmlFor="messageID">Message</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Send message to Alex
        </button>
      </form>
    </div>
  )
}

export default ContactForm
