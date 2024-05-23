"use client"
import React,{useState} from "react";
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
import {ApiConfig} from '../../config';
import { Spinner } from "flowbite-react";     

import axios from "axios";
const SignUp = ({setIsLoggedIn,isLoggedIn}) => {
  const router=useRouter()

 const [loading,setLogin]=useState(false);


  const [signUpDetails,setSignUpDetails] =useState({
    loginEmail: "",
    loginMobile: "",
    password: "",
    loginResponse:""
  });

  const inputChangeHandler=(e)=>{
    const {name,value}=e.target
    setSignUpDetails({...signUpDetails,[name]:value});
    
  }

  const goToLogin=()=>{
    setIsLoggedIn(!isLoggedIn)
  }
  const signUpHandler=async(e)=>{
    e.preventDefault();
    try { 
      setLogin(true)        
      let result = await axios.post(ApiConfig.signUpUser,signUpDetails);
      toast.success(result.data.message)
      setLogin(false)
      goToLogin();
      router.push(`/login`)

    } catch (error) {
      console.error(error);
    }
    setSignUpDetails({
      loginEmail:"",
      loginMobile:"",
      password:"",
    })
  }
  return (
    <div>
      <h1 className="text-2xl md:text-2xl font-bold text-center">Sign Up</h1>

      <form className="mt-2" onSubmit={signUpHandler}>
        {/* <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name=""
          
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autofocus
            autocomplete
            required
          />
        </div> */}
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="loginEmail"
          
            value={signUpDetails.loginEmail}
            onChange={inputChangeHandler}
            placeholder="Enter Email Address"
            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autoFocus
            // autoComplete
            required
          />
        </div>

        <div className="mt-2">
          <label className="block text-gray-700">Mobile</label>
          <input
            type="number"
            name="loginMobile"
          
            value={signUpDetails.loginMobile}
            onChange={inputChangeHandler}
            placeholder="Enter Mobile No."
            minLength="10"
            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
            required
          />
        </div>
        <div className="mt-2">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
          
            value={signUpDetails.password}
            onChange={inputChangeHandler}
            placeholder="Enter Password"
            minLength="6"
            className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-2 mt-4"
        >
          Sign Up{loading && <Spinner/>}
        </button>
      </form>

      <hr className="my-2 border-gray-300 w-full" />
    </div>
  );
};

export default SignUp;
