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
    <aside
      className="width-full mt-4 sm:mt-6 md:mt-8 lg:mt-10
    bg-white
    border-t-4 border-palette5-blue-100
    py-4 sm:py-6 md:py-8 lg:py-10
    print:hidden"
    >
      <div className="width-80 min-padding-x">
        {result !== null && (
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3>{result.msg}</h3>
            <p>{result.result}</p>
          </div>
        )}
        <h3 className="font-black">Monthly Newsletter</h3>
        <hr className="hr mb-4" />
        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit}
          method="POST"
        >
          <label htmlFor="email">
            <span className="sr-only">Write an email:</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@company.org"
              className="input w-2/4"
              onChange={handleEmailChange}
            />
          </label>
          <button type="submit" className="button w-fit">
            Sign Up
          </button>
        </form>
      </div>
    </aside>
  )
}
export default NewsletterForm
