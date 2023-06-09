import React from "react"

function SignUpForm(): JSX.Element {
  return (
    <>
      <hr className="border-t-[thin] border-slate-400 my-4 sm:my-5.5 md:my-6 lg:my-7 xl:my-8" />

      <div className="flex items-end justify-center space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-8 xl:space-x-10">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-400">
          Monthly Newsletter
        </h3>
        <form
          className="flex items-end justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-32"
          action="https://app.convertkit.com/forms/5243543/subscriptions"
          method="POST"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-light py-4 text-slate-400">
              Write an email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@company.org"
              className="block w-full px-0.5 border-0 border-b-2 border-slate-400 hover:border-red-700 focus:border-red-700 focus:border-b-8 outline-none
            font-light"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-6
          bg-slate-400 text-white font-semibold
          hover:bg-red-700 focus:bg-red-700 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>

      <hr className="border-t-[thin] border-slate-400 my-4 sm:my-5.5 md:my-6 lg:my-7 xl:my-8" />
    </>
  )
}
export default SignUpForm
