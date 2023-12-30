import React from 'react'
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div>
        <h1 className="text-4xl md:text-4xl font-bold text-center">Log in</h1>

<form className="mt-2" action="#" method="POST">
  <div>
    <label className="block text-gray-700">Email Address</label>
    <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-2 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
  </div>

  <div className="mt-2">
    <label className="block text-gray-700">Password</label>
    <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-2 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required/>
  </div>

  <div className="text-right mt-2">
    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
  </div>

  <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-2 mt-2">Log In</button>
</form>

<hr className="my-2 border-gray-300 w-full"/>

<button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300">
      <div className="flex items-center justify-center">
      {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg> */}
      <FcGoogle/>
      <span className="ml-4">
      Log in
      with
      Google</span>
      </div>
    </button>
    </div>
  )
}

export default SignIn