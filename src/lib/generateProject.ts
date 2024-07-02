const fs = require('fs');
const path = require('path');

const projectsPath = path.join(__dirname, '../../public/data/projects.json');
const projectData = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));

const srcPath = path.join(__dirname, '../../src/app');

function createProjectFolder({ projectKey, project }) {
    const projectFolderPath = path.join(srcPath, projectKey);
    if (!fs.existsSync(projectFolderPath)) {
        fs.mkdirSync(projectFolderPath);
    }

    // ${importImageData.join('\n')}
    // let importImageData = [];
    // if (project.imgData.length > 1) {
    //   project.imgData.map((img, index) => {
    //     importImageData.push(`import ${project.imgData[index].alt.replace(/\s+/g, '')} from '${project.imgData[index].src}';`);
    //   });
    // } else {
    //   importImageData.push(`import ${project.imgData[0].alt.replace(/\s+/g, '')} from '${project.imgData[0].src}';`);
    // }

    const pageContent = `
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
${project.imgData.length > 1 && `
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
`}

const imagesData = ${JSON.stringify(project.imgData, null, 2)};

const ${projectKey} = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        ${project.imgData.length > 1 ? `
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
        ` : `
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projImg}
          alt="/"
        />
        `}
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] text-white z-10">
          <h2 className="py-2">${project.title}</h2>
          <h3>${project.detail.position}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>${project.detail.description.overview}</p>

          <h3 className="pt-4">Responsibilities:</h3>
          ${project.detail.description.responsibilities.map(item=> 
            `<p className="text-gray-600 pt-2 flex items-center">
              <RiRadioButtonFill className="pr-2" />
              ${item}
            </p>`)
            .join('')}

          ${project.detail.linkTrial ? `
          <button className="px-8 py-2 mt-4 mr-8">
            <a target="_blank" href="${project.detail.linkTrial}" rel="noopener noreferrer">
              Trial
            </a>
          </button>` : ''}
          
          ${project.detail.linkCode ? `
          <button className="px-8 py-2 mt-4">
            <a target="_blank" href="${project.detail.linkCode}" rel="noopener noreferrer">
              Code
            </a>
          </button>` : ''}
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 underline">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              ${project.detail.technical.map(item => `
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" />
                ${item}
              </p>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${projectKey};
    `;

    fs.writeFileSync(path.join(projectFolderPath, 'page.tsx'), pageContent, 'utf-8');
}

Object.keys(projectData).forEach(key => {
    createProjectFolder({ projectKey: key, project: projectData[key] });
});

console.log('Projects generated successfully.');
