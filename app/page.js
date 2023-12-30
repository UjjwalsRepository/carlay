"use client"
import React,{useState} from 'react'; 
import Hero from './components/Hero'
import Main from './components/Main'
import WhoWeWre from './components/WhoWeWre'
import Faq from './components/Faq'

export default function Home() {
  const [isAdmin,setIsAdmin]=useState(false)
  return (
    <main className="overflow-hidden">
      {
        isAdmin?(
          <div><p>This is admin page</p></div>
        ):(
          <>
          <Hero/>
          <Main/>
          <WhoWeWre/>
          <Faq/>
          </>
        )
      }
     
    </main>
  )
}
