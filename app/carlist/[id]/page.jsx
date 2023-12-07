"use client"
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { FaTachometerAlt,FaCarCrash,FaCar,FaCity } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { GrManual } from "react-icons/gr";
import { BsFillFuelPumpFill,BsPersonPlus } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiCityCar } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";
import { Button } from 'react-bootstrap';
import ReservCarModal from '@/app/components/ReservCarModal';

const Page = () => {


    const [modalShow, setModalShow] = useState(false);

    const [index, setIndex] = useState(0);

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

    return (
        <>
            <div className="w-full h-auto flex flex-row">
                <div className="w-1/3 m-4">
                    <h1 className="text-2xl font-bold">Year and Car Modal</h1>
                    <span className="text-2xl font-bold">45,00,000</span><span className='font-light opacity-50 text-sm'>&nbsp;EMI STARTS @000000</span>
                </div>
                <div className="w-1/3 m-2">
                    <p className='font-semibold  text-xs py-1'>REG. YEAR &nbsp;  : <span className='opacity-50'>2022</span></p>
                    <p className='font-semibold  text-xs py-1'>KMS&nbsp;  : <span className='opacity-50'>30,000</span></p>
                    <p className='font-semibold  text-xs py-1'>FUEL TYPE&nbsp;  : <span className='opacity-50'>Petrol</span></p>
                    <p className='font-semibold  text-xs py-1'>REG. STATE&nbsp;  : <span className='opacity-50'>Delhi</span></p>
                </div>
                <div className="flex justify-end w-1/3 m-2">
                    <div className='flex flex-column justify-center'>
                        <Button className='bg-black border-none' as="a" onClick={() => setModalShow(true)}>Reserv This Car</Button>
                    </div>
                </div>
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
                <div class="flex flex-col">
                    <h2 class="font-bold text-xl tracking-tight">
                        CAR SUMMARY
                    </h2>
                </div>
                <div className='flex flex-row flex-wrap w-full '>
                    <div className=' m-10'>
                        <MdPrecisionManufacturing size={40} className='border-2 border-black	rounded p-2'/>
                        {/* <span>Manufacturer<strong>Maruti</strong></span> */}
                        <p className='font-light'>Manufacturer </p>
                        <p className='font-bold	'>Maruti</p>
                    </div>
                    <div className=' m-10'>
                        <GiCityCar size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Variant</p>
                        <p className='font-bold	'>Baleno</p>
                    </div>
                    <div className=' m-10'>
                        <FaRegCalendarCheck size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Mfg Year</p>
                        <p className='font-bold	'>2020</p>
                    </div>
                    <div className=' m-10'>
                        <BsPersonPlus size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Ownership</p>
                        <p className='font-bold	'>2</p>
                    </div>
                    <div className=' m-10'>
                        <FaCity size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Reg. State</p>
                        <p className='font-bold	'>Delhi</p>
                    </div>
                    <div className=' m-10'>
                        <BsFillFuelPumpFill size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Fuel Type</p>
                        <p className='font-bold	'>Petrol</p>
                    </div>
                    <div className=' m-10'>
                        <GrManual size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Transmission </p>
                        <p className='font-bold	'>Manual</p>
                    </div>
                    <div className=' m-10'>
                        <FaCarCrash size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Accidental </p>
                        <p className='font-bold	'>No</p>
                    </div>
                    <div className=' m-10'>
                        <SiFsecure size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Insurance</p>
                        <p className='font-bold	'>Yes</p>
                    </div>
                    <div className=' m-10'>
                        <FaTachometerAlt size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>KM Reading</p>
                        <p className='font-bold	'>35000Km</p>
                    </div>
                    <div className=' m-10'>
                        <IoPricetagsOutline size={40} className='border-2 border-black	rounded p-2'/>
                        <p className='font-light'>Expected Price</p>
                        <p className='font-bold	'>550000</p>
                    </div>

                </div>
            </div>
            
            <ReservCarModal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );
}

export default Page;