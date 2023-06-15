import React, { useId } from "react"

function scrollToTop(): void {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
}

function ContactForm(): JSX.Element {
  const backToTopId = useId()
  return (
    <section className="width-80 prose-secondary print:hidden">
      <button
        onClick={scrollToTop}
        title="Go to top"
        className="mx-auto block text-center
        focus:outline-none focus:no-underline focus:ring-4 focus:ring-offset-2 focus:ring-stone-900 focus:bg-transparent dark:focus:ring-zinc-500
        px-8 py-4"
      >
        <span className="sr-only">Go to top</span>
        <svg
          preserveAspectRatio="none"
          data-bbox="72.5 20 55 160"
          viewBox="72.5 20 55 160"
          height="200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          role="img"
          aria-labelledby={backToTopId}
          className="w-2 sm:w-4 md:w-6 h-12 sm:h-14 md:h-16 lg:h-20
           fill-current text-gray-700 hover:text-black transition-colors duration-200
           dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          <title id={backToTopId}>Back to top</title>
          <g>
            <path d="M127.5 49.186L100 20 72.5 49.186l2.957 2.808 22.116-23.476V180h4.854V28.518l22.116 23.476 2.957-2.808z"></path>
          </g>
        </svg>
      </button>

      <h3>Drop Me a Line, Let Me Know What You Think</h3>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        className="flex flex-col space-y-4
        my-8"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="message" className="flex flex-col space-y-1">
          <span className="font-light py-4">Write message:</span>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Hi, I'd like to talk about..."
            className="block w-full px-0.5 border-0 border-b-2
            border-secondaryText dark:border-secondaryTextDark hover:border-red-700 focus:border-red-700
            bg-secondaryBackground dark:bg-secondaryBackgroundDark
            text-primaryText dark:text-primaryTextDark
            focus:border-b-8 outline-none
            p-0.5 sm:p-1 md:p-1.5 lg:p-2 xl:p-2.5"
          />
        </label>
        <button
          type="submit"
          className="my-8 px-8 py-6
          font-semibold
          hover:bg-red-700 focus:bg-red-700 focus:outline-none
          bg-secondaryBackground dark:bg-secondaryBackgroundDark
          text-primaryText dark:text-primaryTextDark"
        >
          Send
        </button>
      </form>
    </section>
  )
}
export default ContactForm
