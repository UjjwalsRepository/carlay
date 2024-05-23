"use client"
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useRouter } from 'next/navigation';
import {ApiConfig} from '../../config'
import { Spinner } from "flowbite-react";     

// console.log("ApiConfig",ApiConfig)
const SignIn = () => {
  const router = useRouter()
  const {userInfo,updateUserInfo}=useContext(UserContext);
  // const user={
  //   name: "",
  //   email: "",
  //   mobileNo: "",
  //   userType: "",
  //   message: ""
  // }
 const [loading,setLogin]=useState(false);
  const [loginDetails,setLoginDetails] =useState({
    loginEmail: "",
    password: "",
  });

  const inputChangeHandler=(e)=>{
    const {name,value}=e.target
    setLoginDetails({...loginDetails,[name]:value});
    
  }
  
  const loginHandler=async(e)=>{
    e.preventDefault();
    try {   
      setLogin(true)      
      let result = await axios.post(ApiConfig.validateLogin,loginDetails);
      let userData = result.data;
      if(userData.message=="User successfully logged in"){

        // var testObject = { 'URL': 1, 'TITLE': 2 };
        localStorage.setItem('loginData', JSON.stringify(userData));
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        updateUserInfo(loginData);
      setLogin(false)      

        router.push('/')

        toast.success(userData.message);

      }else{
        toast.error(userData.message);
        return;
      }
    } catch (error) {
      console.error(error);
    }
    setLoginDetails({
      loginEmail:"",
      password:"",
    })
  }

  return (
    <div>
      <h1 className="text-2xl md:text-2xl font-bold text-center">Sign in</h1>

      <form className="mt-2" onSubmit={loginHandler}>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="loginEmail"
            value={loginDetails.loginEmail}
            onChange={inputChangeHandler}
            placeholder="Enter Email Address"
            className="w-full px-2 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autoFocus
            // autoComplete
            required
          />
        </div>

        <div className="mt-2">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={loginDetails.password}
            onChange={inputChangeHandler}

            placeholder="Enter Password"
            minLength="6"
            className="w-full px-2 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
            required
          />
        </div>

        {/* <div className="text-right mt-2">
    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
  </div> */}

        <button
          type="submit"
          className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-2 mt-4"
        >
          Log In {loading && <Spinner/>}
        </button>
        
      </form>

      <hr className="my-2 border-gray-300 w-full" />

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
  );
};

export default SignIn;
