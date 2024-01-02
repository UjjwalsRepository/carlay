import React from 'react'

const SignUp = () => {
  return (
    <div>
         <h1 className="text-2xl md:text-2xl font-bold text-center">Sign Up</h1>

<form className="mt-2" action="#" method="POST">
  <div>
    <label className="block text-gray-700">Email Address</label>
    <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
  </div>

  <div className="mt-2">
    <label className="block text-gray-700">Mobile</label>
    <input type="number" name="" id="" placeholder="Enter Mobile No." minlength="10" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required/>
  </div>
  <div className="mt-2">
    <label className="block text-gray-700">Password</label>
    <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required/>
  </div>


  <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-2 mt-4">Sign Up</button>
</form>

<hr className="my-2 border-gray-300 w-full"/>


    </div>
  )
}

export default SignUp