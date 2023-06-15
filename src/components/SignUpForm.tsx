import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

type TResult = {
  msg: string
  result: string
} | null

function SignUpForm(): JSX.Element {
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
    <aside className="width-80 md:width-100 prose-secondary print:hidden">
      <hr className="hr" />

      {result !== null && (
        <div className="flex flex-col items-center justify-center space-y-2">
          <h3>{result.msg}</h3>
          <p>{result.result}</p>
        </div>
      )}
      <form
        className="flex flex-col md:flex-row md:items-end justify-center space-y-4 sm:space-y-5 md:space-x-6 lg:space-x-8 xl:space-x-10"
        onSubmit={handleSubmit}
        method="POST"
      >
        <h3>Monthly Newsletter</h3>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="py-4">
            Write an email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@company.org"
            className="input-field"
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>

      <hr className="hr print:hidden" />
    </aside>
  )
}
export default SignUpForm
