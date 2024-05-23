"use client"
import React, { useState,useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { FaTachometerAlt,FaCarCrash,FaCar,FaCity } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { GrManual } from "react-icons/gr";
import { BsFillFuelPumpFill,BsPersonPlus } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdPrecisionManufacturing,MdOutlineLocationOn,MdAppRegistration } from "react-icons/md";
import { GiCityCar } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";
import { Button } from 'react-bootstrap';
import ReservCarModal from '@/app/components/ReservCarModal';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import Loading from '@/app/components/Loading';
// import { useRouter } from 'next/navigation';


const Page = ({ params }) => {
    // const router = useRouter()
    // alert(params.id)
    let id=params.id;
    const [modalShow, setModalShow] = useState(false);
    const [data,setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading,setLoading] = useState(true)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const fetchData = async () => {
        await axios.get(`http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/GetSellCarDetail?detailId=${id}`)
           .then((res)=>{
                // console.log(res.data.sellaCarModelList[0])
               setData(res.data.sellaCarModelList[0]);
               setLoading(false)
            //    if(data.length>0){

            //        console.log("Data",data)
            //        setLoading(false)
            //    }

           }
           )
           .catch((error)=>{
               // console.log(error)
               console.error('Error:', error);
               if (error.response) {
                 console.error('Response data:', error.response.data);
                 console.error('Response status:', error.response.status);
                 console.error('Response headers:', error.response.headers);
               }
           })
      
     };
       
       useEffect(()=>{
          
           fetchData();
           
       },[])
    return (
        <>
        <div className="min-h-screen">
            {loading ?(
                <Box sx={{ width: '100%',height:'100%' }}>
                    <Loading/>
              </Box>
            ):(
                <div>
            <div className="w-full h-auto flex flex-row">
                <div className="w-1/3 m-4">
                    <h1 className="text-2xl font-bold text-blue-900">{data.manufacturerName}&nbsp;-&nbsp;{data.variantName}({data.yom})</h1>
                    <span className="text-2xl font-bold">{data.expected_Price}</span><span className='font-light opacity-50 text-sm italic'>&nbsp;EMI STARTS @000000</span>
                </div>
                <div className="w-1/3 m-2">
                    <p className='font-semibold  text-xs py-1'>REG. YEAR &nbsp;  : <span className='font-bold text-blue-900 italic'>{data.yom}</span></p>
                    <p className='font-semibold  text-xs py-1'>KMS&nbsp;  : <span className='font-bold text-blue-900 italic'>{data.kmReading}</span></p>
                    <p className='font-semibold  text-xs py-1'>FUEL TYPE&nbsp;  : <span className='font-bold text-blue-900 italic'>{data.fuel_Type}</span></p>
                    <p className='font-semibold  text-xs py-1'>REG. STATE&nbsp;  : <span className='font-bold text-blue-900 italic'>{data.state}</span></p>
                </div>
                {/* <div className="flex justify-end w-1/3 m-2">
                    <div className='flex flex-column justify-center'>
                        <Button className='bg-[#ffb118] border-none' as="a" onClick={() => setModalShow(true)}>Reserv This Car</Button>
                    </div>
                </div> */}
            </div>
            <div className="relative flex items-center">
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                    <img
                        className='w-[500px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                        src="/images/front.png"
                        alt="car front"
                    />
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div> 
          

            {/* Summary */}
            <div className="max-w-screen-xl mx-auto my-3 px-5 bg-white min-h-sceen">
                <div className="flex flex-col">
                    <h2 className="font-bold text-xl tracking-tight">
                        CAR SUMMARY
                    </h2>
                </div>
                <div className='flex flex-row flex-wrap flex-1'>
                    <div className='m-10'>
                        <MdPrecisionManufacturing size={40} className='border-2 border-black	rounded p-2'/>
                     
                        <p className='font-light'>Manufacturer </p>
                        <p className='font-bold	text-blue-900'>{data.manufacturerName}</p>
                    </div>
                    <div className='m-10'>
                        <GiCityCar size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Variant</p>
                        <p className='font-bold	text-blue-900'>{data.variantName}</p>
                    </div>
                    <div className='m-10'>
                        <FaRegCalendarCheck size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Mfg Year</p>
                        <p className='font-bold	text-blue-900'>{data.yom}</p>
                    </div>
                    <div className='m-10'>
                        <BsPersonPlus size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Ownership</p>
                        <p className='font-bold	text-blue-900'>{data.ownership}</p>
                    </div>
                    <div className='m-10'>
                        <MdAppRegistration size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Reg. No.</p>
                        <p className='font-bold	text-blue-900'>{data.reg_num}</p>
                    </div>
                    <div className='m-10'>
                        <MdOutlineLocationOn size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Location</p>
                        <p className='font-bold	text-blue-900'>{data.v_location}</p>
                    </div>
                    <div className='m-10'>
                        <FaCity size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Reg. State</p>
                        <p className='font-bold	text-blue-900'>{data.state}</p>
                    </div>
                    <div className='m-10'>
                        <BsFillFuelPumpFill size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Fuel Type</p>
                        <p className='font-bold	text-blue-900'>{data.fuel_Type}</p>
                    </div>
                    <div className='m-10'>
                        <GrManual size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Transmission </p>
                        <p className='font-bold	text-blue-900'>{data.transmission}</p>
                    </div>
                    <div className='m-10'>
                        <FaCarCrash size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Accidental </p>
                        <p className='font-bold	text-blue-900'>{data.accidental}</p>
                    </div>
                    <div className='m-10'>
                        <SiFsecure size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Insurance</p>
                        <p className='font-bold	text-blue-900'>{data.insurance}</p>
                    </div>
                    <div className='m-10'>
                        <FaTachometerAlt size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>KM Reading</p>
                        <p className='font-bold	text-blue-900'>{data.kmReading}&nbsp;Km</p>
                    </div>
                    <div className='m-10'>
                        <IoPricetagsOutline size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Expected Price</p>
                        <p className='font-bold	text-blue-900'>{data.expected_Price}</p>
                    </div>

                </div>
            </div>
             
            <ReservCarModal show={modalShow} onHide={() => setModalShow(false)}/>
            </div>
            )}
        </div>
            {/* {loading?
           ( 
        //    <div className="w-full h-full">
        //         <div style={{borderTopColor:"transparent"}}
        //         className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin">
        //         </div>
        //     </div>
        
            )
            :
            (
            )} */}
        </>
    );
}

export default Page;