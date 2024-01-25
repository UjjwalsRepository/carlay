"use client"
import Image from 'next/image';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
//activeIndex={index} interval={500}
  return (
    <div className='w-full flex items-center justify-center'>
    <Carousel   onSelect={handleSelect}>
      <Carousel.Item >
        <div className='w-screen'>
      <img
          className='w-full h-full object-cover'
          src="/images/slider4.jpg"
          alt="Third slide"
        />
        </div>
        <Carousel.Caption className='p-2 bg-white opacity-70'>
          <h1 className='text-xl text-blue-900 font-bold'>Our Values</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className='w-screen'>

      <img
          className='w-full	h-full object-cover'
          src="/images/slider5.jpg"
          alt="Third slide"
        />
        </div>

        <Carousel.Caption className='p-2 bg-white opacity-70'>
          <h1 className='text-xl text-blue-900 font-bold'>Satisfied Customers</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className='w-screen'>

      <img
          className='w-full	h-full object-cover'
          src="/images/slider3.jpg"
          alt="Third slide"
        />
        </div>

        <Carousel.Caption className='p-2 bg-white opacity-70'>
          <h1 className='text-xl text-blue-900 font-bold'>Guaranteed Quality Cars & Hassle free Documentation</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item interval={500}>
        <div className='w-screen'>

      <img
          className='w-full	h-full object-cover'
          src="/images/slider6.jpeg"
          alt="Third slide"
        />
        
        </div>

        <Carousel.Caption className='p-2 opacity-70'>
          <h1 className='text-xl text-blue-900 font-bold bg-white'>We Buy and We Sell</h1>
          
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>

    </div>
  );
}

export default Hero;