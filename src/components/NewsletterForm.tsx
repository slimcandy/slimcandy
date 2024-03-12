import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

type TResult = {
  msg: string
  result: string
} | null

function NewsletterForm(): JSX.Element {
  const [email, setEmail] = React.useState("")
  const [result, setResult] = React.useState<TResult>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    addToMailchimp(email)
      .then(function getResult(data: TResult) {
        setResult(data)
      })
      .catch(console.error)
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.currentTarget.value)
  }

  return (
    <>
      {result !== null && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                {result.msg}
              </h3>
              <div className="mt-2 text-sm text-green-700">
                <p>{result.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <aside className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">
              This material could have been in your mailbox.
            </h2>
          </div>
          <form
            className="w-full max-w-md lg:col-span-5 lg:pt-2"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                onChange={handleEmailChange}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </aside>
    </>
  )
}
export default NewsletterForm
