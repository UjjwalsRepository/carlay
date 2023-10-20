import React,{useState} from "react";
import { Carousel } from "react-bootstrap";

const CarCard = ({variant,serial,mfg,km,transmission,fuel}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
     // console.log("XYZ",make)
    return (
        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3> */}
      <div className="relative">
                             <Carousel activeIndex={index} onSelect={handleSelect}>
                                 <Carousel.Item interval={500}>
                                     <div className='w-screen h-40'>

                                         <img
                                                className='w-full h-full object-cover'
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
                                    <Carousel.Item interval={500}>
                                        <div className='w-screen h-40'>

                                            <img
                                                className='w-full	h-full object-cover'
                                                src="/images/rear.png"
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
                                    <Carousel.Item interval={500}>
                                        <div className='w-screen h-40'>

                                            <img
                                                className='w-full	h-full object-cover'
                                                src="/images/bonnet.png"
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
                                    <Carousel.Item interval={500}>
                                        <div className='w-screen h-40'>

                                            <img
                                                className='w-full	h-full object-cover'
                                                src="/images/interrior.png"
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
                                </Carousel>
        {/* <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" /> */}
        
      </div>
      <h1 className="cursor-pointer uppercase">Variant Name-{variant}</h1>
      <p className="cursor-pointer uppercase">S. No.-{serial}</p>
      <p className="cursor-pointer uppercase">Manufacture Year-{mfg}</p>
      <p className="cursor-pointer uppercase">Kilometer-{km}</p>
      <p className="cursor-pointer uppercase">Transmission-{transmission}</p>
      <p className="cursor-pointer uppercase">Fuel Type-{fuel}</p>
      <div className="my-2">
        {/* <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p>1:34:23 Minutes</p>
        </div> */}
        {/* <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <p>3 Parts</p>
        </div> */}
        {/* <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </span>
          <p>Vanilla JS</p>
        </div> */}
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Click For More details</button>
      </div>
    </div>
    );
}

export default CarCard;