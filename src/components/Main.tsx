"use client";
import ContactItems from "@/common/ContactItems";
import React from "react";

const mainData = {
  name: "Vinh",
  job: "A Full-Stack Web Developer",
  description:
    "Experienced full-stack developer with 2 years in web development. Proficient in front-end and back-end technologies, specializing in intuitive interfaces and optimizing front-end functionality. Continuously learning new technologies and best practices.",
};

const Main = () => {
  const { name, job, description } = mainData;

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justi fy-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest test-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>

          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[%5651e5] capitalize"> {name}</span>
          </h1>
          <h1 className="py-2 text-gray-700 capitalize">{job}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">{description}</p>

          <ContactItems />
        </div>
      </div>
    </div>
  );
};

export default Main;
