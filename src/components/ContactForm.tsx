import React from "react"

function ContactForm(): JSX.Element {
  return (
    <section
      className="width-full mt-4 sm:mt-6 md:mt-8 lg:mt-10
      bg-white
      border-t-4 border-palette5-blue-300
      py-4 sm:py-6 md:py-8 lg:py-10
      text-2xl
      print:hidden"
    >
      <div
        className="width-80 bg-palette5-blue-50
      px-12 py-8"
      >
        <h3 className="font-black py-0 my-0 text-4xl">Drop Me a Line</h3>
        <hr className="hr my-1 sm:my-2 md:my-4" />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
          className="flex flex-col"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label
            htmlFor="message"
            className="grid grid-cols-4 items-baseline
        mt-4"
          >
            <span
              className="col-start-1 col-end-2
              font-light"
            >
              Message
            </span>
            <textarea
              name="message"
              id="message"
              rows={3}
              placeholder="Hi, I'd like to talk about..."
              className="input col-start-2 col-end-5"
            />
          </label>
          <div className="grid grid-cols-4 items-baseline">
            <button
              type="submit"
              className="button 
              col-start-2 col-end-3 mt-4"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default ContactForm
