
    import React from 'react';
    import Image from 'next/image';
    import Link from 'next/link';
    import { RiRadioButtonFill } from 'react-icons/ri';
    // import projImg from '/public/assets/images/projects/lixiSocial.png';
    import projImg from '/public/assets/images/projects/lixiSocial.png';

    const abcPayWallet = () => {
      return (
        <div className="w-full">
          <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
            <Image
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={projImg}
              alt="/"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] text-white z-10">
              <h2 className="py-2">AbcPay Wallet</h2>
              <h3>Front-end Developer</h3>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
              <p>Project</p>
              <h2>Overview</h2>
              <p></p>

              <h3 className="pt-4">Responsibilities:</h3>
              <p className="text-gray-600 pt-2 flex items-center">
                  <RiRadioButtonFill className="pr-2" />
                  1
                </p>

              
              <button className="px-8 py-2 mt-4 mr-8">
                <a target="_blank" href="https://abcpay.cash/" rel="noopener noreferrer">
                  Trial
                </a>
              </button>
              
              
            </div>

            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="p-2">
                <p className="text-center font-bold pb-2 underline">Technologies</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                  
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-2" />
                    Angular
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-2" />
                    Ionic
                  </p>
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-2" />
                    MongoDB
                  </p>
                </div>
              </div>
            </div>
            <Link href="/#projects">
              <p className="underline cursor-pointer">Back</p>
            </Link>
          </div>
        </div>
      );
    };

    export default abcPayWallet;
    