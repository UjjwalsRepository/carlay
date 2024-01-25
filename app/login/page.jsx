"use client"
import React,{useState} from 'react'
import './login.css'
import SignIn from './SignIn';
import SignUp from './SignUp';


const Login = () => {

  const [isLoggedIn,setIsLoggedIn] =useState(true)

  return (
    <>
       
       <div class="flex flex-col login h-screen">
      
           <div class="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
      <div class="flex items-center justify-center w-full pt-6 pb-20">
        
        <div className="bg-white opacity-90 rounded px-4 py-2 sm:w-1/2 md:w-1/3 lg:w-1/3" >

      {isLoggedIn?<SignIn/>:<SignUp/>}
      {/*  */}
      

<p className="text-center">{isLoggedIn?"Need an account?":"Already have an account?"} <span onClick={()=>{setIsLoggedIn(!isLoggedIn)}} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">{isLoggedIn?"Sign Up":"Sign In"}</span></p>


</div>
      </div>
    </div>
        </div>
      
    </>
  )
}

export default Login