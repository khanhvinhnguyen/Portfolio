import React from "react";
import Image from "next/image";

import contactImg from "/public/assets/contactImg.jpg";
import ContactItems from "@/common/ContactItems";

const mainData = {
  name: "Nguyen Khanh Vinh",
  job: "A Full-Stack Web Developer",
  description:
    "I am available for freelance or full-time positions. Contact me and let's talk.",
};

const Contact = () => {
  const { name, job, description } = mainData;

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-20 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 capitalize">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">{name}</h2>
                <p>{job}</p>
                <p className="p">{description}</p>
              </div>
              <div>
                <p className="uppercase pt-8">Contact With Me</p>
                <ContactItems />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                {/* Name */}
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      autoComplete="off"
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phoneNum"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    autoComplete="off"
                  />
                </div>
                {/* Subject */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    autoComplete="off"
                  />
                </div>
                {/* Messenger */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Messenger</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    autoComplete="off"
                  ></textarea>
                </div>
                {/* Button */}
                <button className="w-full p-4 test-gray-100 mt-4">
                  Send Messenger
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5" />
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
