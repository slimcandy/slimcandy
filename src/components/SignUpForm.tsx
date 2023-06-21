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
    <aside
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
        {result !== null && (
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3>{result.msg}</h3>
            <p>{result.result}</p>
          </div>
        )}
        <h3 className="font-black py-0 my-0 text-4xl">Monthly Newsletter</h3>
        <hr className="hr my-1 sm:my-2 md:my-4" />
        <form className="flex flex-col" onSubmit={handleSubmit} method="POST">
          <label
            htmlFor="email"
            className="grid grid-cols-4 items-baseline
        mt-4"
          >
            <span
              className=" col-start-1 col-end-2
              font-light"
            >
              Write an email:
            </span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@company.org"
              className="input col-start-2 col-end-5"
              onChange={handleEmailChange}
            />
          </label>
          <div className="grid grid-cols-4 items-baseline">
            <button type="submit" className="button col-start-2 col-end-3 mt-4">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </aside>
  )
}
export default SignUpForm
