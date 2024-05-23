import Link from 'next/link';
import React from 'react'
import { MdEdit,MdOutlineAutoDelete } from "react-icons/md";

const Card = ({manufacturer,variant,regNo,id,deleteCars}) => {
    const onDelete=(id)=>{
        deleteCars(id)
    }
  return (
    <>
        <div className="flex flex-col justify-center items-center my-4 mx-2">
            <div className="!z-5 max-w-[250px] rounded bg-[#ebecee] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px]">
                <div className="h-full w-full">
                    <div className="relative w-full mb-4">
                        <img src="/images/front.png" alt=""/>
                       
                    </div>
                    <div className="flex items-center justify-between px-1 md:items-start">
                        <div className="">
                            <p className="text-lg font-bold text-navy-700">{manufacturer}&nbsp;-&nbsp;{variant}</p>
                            <p className="mt-1 text-sm font-bold text-blue-900 md:mt-2">{regNo}</p>
                        </div>
                        <div className='flex gap-1'>
                        <Link href={`/admin/${id}`} className='mt-2'>

                        <button className="cursor-pointer"><MdEdit size={30} className='border-2 border-blue-900 blue	rounded p-1'/></button>
                        </Link>
                        <button className="cursor-pointer" onClick={()=>{onDelete(id)}}><MdOutlineAutoDelete size={30} className='border-2 border-blue-900	rounded p-1'/></button>
                       </div>
                        {/* <div className="mb-2">
                            <button><MdEdit/></button>
                            <button><MdOutlineAutoDelete/></button>

                        </div> */}
                    </div>
                    {/* <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                          <button><MdEdit/></button>
                        </div> */}
                    {/* <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <div className="flex">
                            <p className="!mb-0 text-sm font-bold text-brand-500">Current Bid: 0.91 <span>ETH</span></p>
                        </div>
                        <button href="" className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
                    </div> */}
                </div>
            </div>
           
        </div>
    </>
  )
}

export default Card