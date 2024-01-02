import React from 'react'
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div>
        <h1 className="text-2xl md:text-2xl font-bold text-center">Sign in</h1>

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

{/* <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300">
      <div className="flex items-center justify-center">
      <FcGoogle/>
      <span className="ml-4">
      Log in
      with
      Google</span>
      </div>
    </button> */}
    </div>
  )
}

export default SignIn