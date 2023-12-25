import React from 'react'

const StepperControl = ({handleClick,currentStep,steps}) => {
  return (
    <div className='container flex justify-end gap-4 mb-4'>
        <button className={`bg-blue-900 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-200 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep===1 ? "opacity-50 cursor-not-allowed":""}`}
        onClick={()=>handleClick()}>
            Back
        </button>
        <button className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'
        onClick={()=>handleClick("next")}>
           {currentStep===steps.length-1?"Submit":"Next"}
        </button>

    </div>
  )
}

export default StepperControl