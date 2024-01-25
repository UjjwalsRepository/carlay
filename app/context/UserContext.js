"use client"
import React,{createContext,useState} from 'react'

export const UserContext=createContext();

export const UserProvider=({children})=>{
    const [userInfo,setUserInfo]=useState({
        name: "",
        email: "",
        mobileNo: "",
        userType: "",
        message: ""
      })

    const updateUserInfo=(newUser)=>{
            setUserInfo(newUser)
    }
    return(
        <UserContext.Provider value={({userInfo,updateUserInfo})}>
            <div>{children}</div>
        </UserContext.Provider>
    )

}


