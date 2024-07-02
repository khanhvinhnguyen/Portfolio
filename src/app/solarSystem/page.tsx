
"use client"
import React from 'react';
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const imagesData = [
  {
    "src": "/assets/images/projects/solarSystemMain2.png",
    "alt": "Solar System Screen"
  },
  {
    "src": "/assets/images/projects/solarSystemDetail.png",
    "alt": "Solar System Detail"
  },
  {
    "src": "/assets/images/projects/solarSystemStructure.png",
    "alt": "Solar System Structure"
  }
];

const solarSystem = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        
        <Swiper
          className="home-slider-introduce"
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          onSwiper={() => {}}
          onSlideChange={() => {}}
        >
          {imagesData.map((item) => {
            return (
              <SwiperSlide>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={0}
                  height={0}
                  className="absolute z-1"
                  layout="fill"
                  objectFit="cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] text-white z-10">
          <h2 className="py-2">Solar System</h2>
          <h3>Front-end Developer</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>This web application provides an interactive 3D representation of the Solar System. Built with modern web technologies including ReactJS for the front-end, Three.js for 3D rendering, and React-Three-Fiber for integrating Three.js with React, the application offers an engaging and educational experience for users to explore our Solar System.</p>

          <h3 className="pt-4">Responsibilities:</h3>
          <p className="text-gray-600 pt-2 flex items-center">
              <RiRadioButtonFill className="pr-2" />
              Implemented features such as a simple solar system display
            </p><p className="text-gray-600 pt-2 flex items-center">
              <RiRadioButtonFill className="pr-2" />
              Focused on planets and displayed planet information in 3D
            </p><p className="text-gray-600 pt-2 flex items-center">
              <RiRadioButtonFill className="pr-2" />
              Developed the structure of the Earth
            </p><p className="text-gray-600 pt-2 flex items-center">
              <RiRadioButtonFill className="pr-2" />
              Created a slider to manage planetary rotation speed
            </p><p className="text-gray-600 pt-2 flex items-center">
              <RiRadioButtonFill className="pr-2" />
              Added multi-language support Updated package version
            </p>

          
          <button className="px-8 py-2 mt-4 mr-8">
            <a target="_blank" href="https://cs105-solar-system.vercel.app/" rel="noopener noreferrer">
              Trial
            </a>
          </button>
          
          
          <button className="px-8 py-2 mt-4">
            <a target="_blank" href="https://github.com/khanhvinhnguyen/CS105-solar-system" rel="noopener noreferrer">
              Code
            </a>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 underline">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                ThreeJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default solarSystem;
    