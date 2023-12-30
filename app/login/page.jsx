"use client"
import React,{useState} from 'react'
import './login.css'
import SignIn from './SignIn';
import SignUp from './SignUp';


const Login = () => {

  const [isLoggedIn,setIsLoggedIn] =useState(true)

  return (
    <>
       
       <div class="flex flex-col login min-h-full">
      
           <div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
      <div class="flex items-center justify-center w-full pt-6 pb-20">
        
        <div className="bg-white rounded px-4 py-2" >

      {isLoggedIn?<SignIn/>:<SignUp/>}
      {/*  */}
      

<p className="text-center">Need an account? <span  className="text-blue-500 hover:text-blue-700 font-semibold">Sign Up</span></p>


</div>
      </div>
    </div>
        </div>
      
    </>
  )
}

export default Login