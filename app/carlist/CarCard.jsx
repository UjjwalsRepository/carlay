import React,{useState} from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";


import { Carousel } from "react-bootstrap";
import Link from "next/link";

const CarCard = ({variant,serial,mfg,km,transmission,fuel,id}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="max-w-sm bg-white m-2 px-4 pt-2 pb-2 rounded-lg shadow-lg transform">
      {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3> */}
      <div className="relative">
      <div className='w-screen h-40'>

<img
       className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition duration-500'
       src="/images/front.png"
       alt="Third slide"
   />
</div>
                             {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                                 <Carousel.Item >
                                     <div className='w-screen h-40'>

                                         <img
                                                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                                                src="/images/front.png"
                                                alt="Third slide"
                                            />
                                        </div>

                                        
                                    </Carousel.Item>
                                    <Carousel.Item >
                                        <div className='w-screen h-40'>

                                            <img
                                                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                                                src="/images/front.png"
                                                alt="Third slide"
                                            />
                                        </div>

                                    </Carousel.Item>
                                    <Carousel.Item >
                                        <div className='w-screen h-40'>

                                            <img
                                               className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                                                src="/images/front.png"
                                                alt="Third slide"
                                            />
                                        </div>

                                       
                                    </Carousel.Item>
                                    <Carousel.Item >
                                        <div className='w-screen h-40'>

                                            <img
                                               className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                                                src="/images/front.png"
                                                alt="Third slide"
                                            />
                                        </div>

                                    </Carousel.Item>
                                </Carousel> */}
       
      </div>
      <div className="flex flex-row">
        <div className="w-1/2">

      <h1 className="cursor-pointer uppercase my-2"><span className="font-bold">{variant}</span></h1>
        </div>
        <div className="flex flex-row justify-end w-1/2">
            <div className="flex flex-row gap-1 my-2 bg-blue-950 rounded-xl px-2 py-1 text-white text-xs">
            <AiOutlineSafetyCertificate color="orange" size="16"/>
            <h1 >Carlay Assured</h1>
            </div>
        </div>

      </div>
      
      <div className="flex gap-1 flex-wrap my-2">
        <p className="cursor-pointer uppercase text-sm"><span className="text-gray-500">REG.YEAR - </span><span className="font-bold">{mfg}</span> |&nbsp;</p>
        <p className="cursor-pointer uppercase text-sm"><span className="text-gray-500">KMS - </span><span className="font-bold">{km}</span> |&nbsp;</p>
        <p className="cursor-pointer uppercase text-sm"><span className="text-gray-500">FUEL TYPE - </span><span className="font-bold">{fuel}</span></p>
      </div>
      <div className="my-2 text-center">
      <Link href={`/carlist/${id}`}>
        <button className="mt-2 text-lg px-2 text-white bg-indigo-600  rounded-xl shadow-lg">Click For More details</button>
        </Link>
      </div>
    </div>
    );
}

export default CarCard;