"use client"
import React from "react";
import Link from "next/link";

const Header = () => {
   
    return (
        <>
        {/* <Link href={"/"}>
            <h1 className="flex items-center text-white tracking-[1em] text-4xl mt-4">CARLAY</h1>
            </Link> */}
            <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
               
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">CarLay</span>
            </a>
            
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 " aria-current="page">Home</a>
                    </li>
                   
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ">About Us</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
</header>
        
        </>
    );
}

export default Header;