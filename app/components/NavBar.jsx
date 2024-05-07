"use client"
import Link from 'next/link'
import React,{useContext, useState} from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { IoHome } from "react-icons/io5";
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const NavBar = () => {
    const router=useRouter()
    const {userInfo,updateUserInfo}=useContext(UserContext);
//   var loginData = JSON.parse(localStorage.getItem('loginData'));
  var loginData = "";
  console.log("Login Data", userInfo);
    const logOut={
        name: "",
        email: "",
        mobileNo: "",
        userType: "Logged Out",
        message: ""
      }
    // console.log("Nav Bar",userInfo)
    const navlinks=[
        {title:"Home",link:"/"},
        {title:"About",link:"/about"},
        {title:"Upload",link:"/uploadForms"},
        {title:"Contact Us",link:"/contact"},
        {title:"Login",link:"/login"},
        
    ]
    const userlinks=[
        {title:"Home",link:"/"},
        {title:"About",link:"/about"},
        {title:"Contact Us",link:"/contact"},
        {title:"Logout",link:""},
        
    ]
    const adminlinks=[
        {title:"Home",link:"/"},
        {title:"About",link:"/about"},
        {title:"Contact Us",link:"/contact"},
        {title:"Admin",link:"/admin"},
        {title:"Logout",link:""},
        
    ]
    const [open,setOpen]=useState(false);
    const handleMenu=()=>{
        setOpen((prev)=>!prev)
    }

    const logOutHandler=()=>{
        // alert("Logout Clicked")
        localStorage.setItem('loginData',JSON.stringify(logOut));
         loginData = JSON.parse(localStorage.getItem('loginData'));
        // console.log("Login Data",loginData.userType);
        // localStorage.clear();
        updateUserInfo(loginData)
        toast.success("User Logged Out Successfully")
        router.push('/')
    } 
    
//   console.log("Login Data", loginData.userType);
        

  return (
    <div className='bg-blue-950 overflow-hidden'>
        <div className='m-auto px-6 sm:px-6 lg:px-8'>
            <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className='text-white'>
                            <span className='tracking-wide text-2xl font-bold' id="logo">CarLay</span><br/>
                            <span><i className='italic hover:bg-sky-500'>Nayi Nahi Par Nayi Jaisi</i></span>
                        </Link>
                   </div>
                    {/* NavLinks */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {userInfo?.userType==='User'?userlinks.map((link,index)=>(
                                <>
                                {link.link!==""?(
                                    <Link key={index}
                                    href={link.link}
                                    className='text-gray-300 transition-all duration-500 hover:text-[#ffb118] px-3 py-2 rounded-md text-md font-medium'>
                                        {link.title}
                                    </Link>
                                ):(
                                    <span onClick={logOutHandler} 
                                    className='text-gray-300 transition-all duration-500 hover:text-[#ffb118] px-3 py-2 rounded-md text-md font-medium cursor-pointer'>
                                    {link.title}
                                    </span>
                                )}
                                </>
                               
                            )):(userInfo?.userType==='Admin')?adminlinks.map((link,index)=>(
                                <>
                                {link.link!==""?(
                                    <Link key={index}
                                    href={link.link}
                                    className='text-gray-300 transition-all duration-500 hover:text-[#ffb118] px-3 py-2 rounded-md text-md font-medium'>
                                        {link.title}
                                    </Link>
                                ):(
                                    <span onClick={logOutHandler} 
                                    className='text-gray-300 transition-all duration-500 hover:text-[#ffb118] px-3 py-2 rounded-md text-md font-medium cursor-pointer'>
                                    {link.title}
                                    </span>
                                )}
                                </>
                            )):navlinks.map((link,index)=>(
                                <Link key={index}
                                href={link.link}
                                className='text-gray-300 transition-all duration-500 hover:text-[#ffb118] px-3 py-2 rounded-md text-md font-medium'>
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                     {/* hamburger button */}
                     <div className="-mr-2 flex md:hidden">
                        <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-offset-white'>
                                <span className='sr-only'></span>
                                {open===true?<FaTimes/>:<FaBars/>}
                        </button>
                    </div>
                   </div>
                </div>
                {/* mobile-menu */}
                {open?(
                    <div className="md:hidden">
                        <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-400">
                        
                            {userInfo?.userType==='User'?userlinks.map((link,index)=>(
                                <>
                                {link.link!==""?(
                                    <Link key={index}
                                    href={link.link}
                                    className='text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                                    >
                                        {link.title}
                                    </Link>
                                ):(
                                    <span onClick={logOutHandler} 
                                    className='text-gray-300 transition-all duration-500 hover:text-[#ffb118] px-3 py-2 rounded-md text-md font-medium cursor-pointer'>
                                    {link.title}
                                    </span>
                                )}
                                </>
                               
                            )):(userInfo?.userType==='Admin')?adminlinks.map((link,index)=>(
                                <>
                                {link.link!==""?(
                                    <Link key={index}
                                    href={link.link}
                                    className='text-gray-300 transition-all duration-500 hover:text-[#ffb118] px-3 py-2 rounded-md text-md font-medium'>
                                        {link.title}
                                    </Link>
                                ):(
                                    <span onClick={logOutHandler} 
                                    className='text-gray-300 transition-all duration-500 hover:text-[#ffb118] px-3 py-2 rounded-md text-md font-medium cursor-pointer'>
                                    {link.title}
                                    </span>
                                )}
                                </>
                            )):navlinks.map((link,index)=>(
                                <Link key={index}
                                href={link.link}
                                className='text-gray-300 transition-all duration-500 hover:text-[#ffb118] px-3 py-2 rounded-md text-md font-medium'>
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ):null}
            </div>
        
  )
}

export default NavBar