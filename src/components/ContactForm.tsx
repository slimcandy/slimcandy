import React from "react"

function ContactForm({
  // eslint-disable-next-line react/prop-types
  className = "",
  ...props
}: React.HTMLAttributes<HTMLElement>): JSX.Element {
  return (
    <section
      className={`width-full mt-4 sm:mt-6 md:mt-8 lg:mt-10
      py-4 sm:py-6 md:py-8 lg:py-10
      print:hidden ${className}`}
      {...props}
    >
      <div
        className="bg-palette5-blue-50 border-2 border-palette5-blue-100
        dark:bg-palette5-blue-900 dark:border-palette5-blue-800
        width-80 min-padding-x
        py-4 sm:py-6 md:py-8 lg:py-10"
      >
        <h3 className="font-bold">Drop Me a Line</h3>
        <hr className="hr mb-4" />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
          className="flex flex-col gap-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="message">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Hi, I'd like to talk about..."
              className="input w-3/4"
            />
          </label>
          <button type="submit" className="button w-fit">
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
export default ContactForm
