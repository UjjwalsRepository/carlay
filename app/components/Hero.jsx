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
        <div className='w-screen h-96'>

      <img
          className='w-full h-full object-cover'
          src="/images/slider3.jpeg"
          alt="Third slide"
        />
        </div>

        <Carousel.Caption className='p-2 bg-white opacity-70'>
          <h1 className='text-2xl text-black font-bold'>Simple yet effective Passion (Philosophy)</h1>
          <p className='text-xl text-black'>
          To offer our customers a curated selection of premium pre-owned vehicles that exemplify quality,
reliability, and style. Each vehicle in our inventory undergoes a rigorous inspection process to ensure
it meets our high standards. This meticulous approach allows us to present you with vehicles that not
only look great but also perform exceptionally well.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className='w-screen h-96'>

      <img
          className='w-full	h-full object-cover'
          src="/images/slider4.jpeg"
          alt="Third slide"
        />
        </div>

        <Carousel.Caption className='p-2 bg-white opacity-70'>
          <h1 className='text-2xl text-black font-bold'>Our Services</h1>
          <p className='text-xl text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className='w-screen h-96'>

      <img
          className='w-full	h-full object-cover'
          src="/images/slider5.jpeg"
          alt="Third slide"
        />
        </div>

        <Carousel.Caption className='p-2 bg-white opacity-70'>
          <h1 className='text-2xl text-black font-bold'>Guaranteed Ownership Transfer</h1>
          <p className='text-xl text-black'>
          In order to protect owner interest and buyer confidence, CarLay provide Hassle free and guaranteed
ownership transfer. From document verification till new owner name RC book, we handle everything.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className='w-screen h-96'>

      <img
          className='w-full	h-full object-cover'
          src="/images/slider6.jpeg"
          alt="Third slide"
        />
         {/* <video id="video" muted autoplay="autoplay" loop="loop" preload="auto">
        <source src="https://www.youtube.com/shorts/sNkG8NbCXOw"></source>
      </video> */}
        </div>

        <Carousel.Caption className='p-2 bg-white opacity-70'>
          <h1 className='text-2xl text-black font-bold'>Fourth slide</h1>
          <p className='text-xl text-black'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default Hero;