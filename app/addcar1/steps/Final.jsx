import React,{useContext} from 'react'
import { StepperContext } from '@/app/context/StepperContext'
const Final = () => {
  const {userData,setUserData}=useContext(StepperContext)
  console.log("User-Data",userData);
  return (
    <div>Final</div>
  )
}

export default Final