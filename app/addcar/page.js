"use client"
import React,{useState} from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import CarDetails from './steps/CarDetails';
import PersonalDetails from './steps/PersonalDetails';
import Final from './steps/Final';
import { StepperContext } from '../context/StepperContext';

const Page = () => {
    const [currentStep, setCurrentStep]=useState(1);
    const [userData,setUserData]=useState('');
    const [finalData,setFinalData]=useState([]);

    const steps=[
        "Car Details",
        "Personal Details",
        "Complete"
    ];

    const displaySteps=(step)=>{
        switch(step){
            case 1:
                return <CarDetails/>
            case 2:
                return <PersonalDetails/>
            case 3:
                return <Final/>
            default:
        }
    }

    const handleClick=(direction)=>{
        if(currentStep==steps.length-1){
            alert("This is Final stem")
        }
        let newStep=currentStep;

        direction==="next"?newStep++:newStep--;
        newStep>0 && newStep <= steps.length && setCurrentStep(newStep);
    }

  return (
    <div className=''>
        <div className='container horizontal '>
            <Stepper steps={steps} currentStep={currentStep}/>
            <div className=' p-10'>
                <StepperContext.Provider value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData
                }}>
                    {displaySteps(currentStep)}
                </StepperContext.Provider>
            </div>
        </div>
        {currentStep !== steps.length &&
        <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}/>
        }
    </div>
  )
}

export default Page;