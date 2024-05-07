import React, { useState } from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";

import { Carousel } from "react-bootstrap";
import Link from "next/link";

const CarCard = ({ manufacturer, variant, mfg, km, fuel, id,assured}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="max-w-sm bg-white m-2 pb-2 rounded-lg shadow-lg transform">
      {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3> */}
      <div className="relative">
        <div className="w-screen h-40">
          <img
            className="absolute px-4 pt-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition duration-500"
            src="/images/front.png"
            alt="Car Image"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[70%] px-2 pt-2">
          <h1 className="cursor-pointer uppercase my-2">
            <span className="font-bold">
              {manufacturer}&nbsp;-&nbsp;{variant}
            </span>
          </h1>
          <div className="flex gap-1 flex-wrap my-2">
        <p className="cursor-pointer uppercase text-sm">
          <span className="text-gray-500">REG.YEAR - </span>
          <span className="font-bold">{mfg}</span> |&nbsp;
        </p>
        <p className="cursor-pointer uppercase text-sm">
          <span className="text-gray-500">KMS - </span>
          <span className="font-bold">{km}</span> |&nbsp;
        </p>
        <p className="cursor-pointer uppercase text-sm">
          <span className="text-gray-500">FUEL TYPE - </span>
          <span className="font-bold">{fuel}</span>
        </p>
      </div>
        </div>
        <div className=" my-4 w-[30%] ">
          <div className="flex flex-row gap-1 bg-blue-950 rounded-xl px-2 py-1 mr-2 text-white text-[10px]">
            {assured==="No"?(
              <>
              <FaRegCheckCircle color="orange" size="16" />
              <h1 className="my-auto">Park and Sell</h1>
              </>
            ):(
              <>
                <AiOutlineSafetyCertificate color="orange" size="16" />
                <h1>Carlay Assured</h1>
              </>
            )
            }
            
          </div>
        </div>
      </div>

     
      <div className="my-2 text-center">
        <Link href={`/carlist/${id}`}>
          {/* <button className="mt-2 text-lg px-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
            Click For More details
          </button> */}
          <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Click For More details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
