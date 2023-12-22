"use client"
import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CarDetails from './steps/CarDetails';
import PersonalDetails from './steps/PersonalDetails';
import Final from './steps/Final';
import { StepperContext } from '../context/StepperContext';


// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const Page = () => {
    const [currentStep, setCurrentStep]=useState(1);
    const [userData,setUserData]=useState('');
    const [finalData,setFinalData]=useState([]);
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

   
  return (
    <div className='md:w-10/12 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
                <div className='container horizontal mt-5'>
                    <Stepper activeStep="1" orientation="horizontal">
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                    </Stepper>
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
  )
}

export default Page;

