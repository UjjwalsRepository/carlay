"use client"
import React,{useState,useContext} from 'react'; 
import Hero from './components/Hero'
import Main from './components/Main'
import WhoWeWre from './components/WhoWeWre'
import Faq from './components/Faq'
import { UserContext } from './context/UserContext';
import Hero1 from './components/Hero1';

export default function Home() {
  const [isAdmin,setIsAdmin]=useState(false)
  const {userInfo,updateUserInfo}=useContext(UserContext);
  // console.log("Master Page",userInfo)
  return (
    <main className="overflow-hidden h-full">
          <div className="overflow-hidden">
            {/* <Hero1/> */}
          <Hero/>
          <Main/>
          <WhoWeWre/>
          <Faq/>
          </div>
    </main>
  )
}
