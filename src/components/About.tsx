"use client";
import React from "react";
import Image from "next/image";

import aboutImg from "/public/assets/images/aboutImg.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I'm someone trying to become a professional developer
          </p>
          <p className="py-2 text-gray-600">
            Over the past two years, I've focused on honing my programming
            skills, particularly in full-stack development using ReactJS,
            NextJS, NodeJS, and NestJS.
          </p>
          <p className="py-2 text-gray-600">
            My journey began with diving into ReactJS and NextJS, exploring
            their scalability and customization in web development. I then
            delved into NodeJS and NestJS, captivated by their depth and
            flexibility. Working on full-stack projects, I've built user
            interfaces and backend systems, utilizing the features of these
            technologies to create robust web applications.
          </p>
          <Link
            href="/#projects"
            className="py-2 text-gray-600 underline cursor-pointer"
          >
            Check out some of my latest projects
          </Link>
        </div>
        <div className="ư-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={aboutImg} alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
