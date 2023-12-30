import React,{useEffect,useContext} from 'react'
import { StepperContext } from '@/app/context/StepperContext'
const Final = () => {
  const {userData,setUserData}=useContext(StepperContext)
  console.log("User-Data",userData);

useEffect(() => {
  setTimeout(function() {
    window.location.replace('/');
  }, 5000);
},[])

  return (
    <>
      <div className="flex items-center justify-center rounded">
  <div className="rounded-lg shadow-lg bg-gray-50 px-16 py-2">
    <div className="flex justify-center">
      <div className="rounded-full bg-green-200 p-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      </div>
    </div>
    <h3 className="my-2 text-center text-3xl font-semibold text-gray-700">Congratuation!!!</h3>
    <p className="text-center font-normal text-gray-600">Your request have been submitted our team will contact you soon</p>
    <button className="mx-auto mt-4 block rounded-xl border-4 border-transparent bg-orange-400 px-3 py-1 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">Back</button>
  </div>
</div>
    </>
  )
}

export default Final