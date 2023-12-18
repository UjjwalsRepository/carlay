import React,{useState} from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";


import { Carousel } from "react-bootstrap";

const CarCard = ({variant,serial,mfg,km,transmission,fuel}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="max-w-sm bg-white m-4 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3> */}
      <div className="relative">
                             <Carousel activeIndex={index} onSelect={handleSelect}>
                                 <Carousel.Item >
                                     <div className='w-screen h-40'>

                                         <img
                                                className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                                                src="/images/front.png"
                                                alt="Third slide"
                                            />
                                        </div>

                                        {/* <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption> */}
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
                                </Carousel>
        {/* <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" /> */}
        
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
      <div className="my-2">
       
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Click For More details</button>
      </div>
    </div>
    );
}

export default CarCard;