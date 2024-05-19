import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const contactData = {
  linkedIn: "https://www.linkedin.com/in/khanhvinhnguyen/",
  github: "https://github.com/khanhvinhnguyen",
  email: "vinhnk.work@gmail.com",
};

const ContactItems = () => {
  const { linkedIn, github, email } = contactData;

  return (
    <div className="flex items-center justify-between m-auto py-4 max-w-[330px]">
      <Link
        href={linkedIn}
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={github}
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
      >
        <FaGithub />
      </Link>
      <Link
        href={`mailto:${email}`}
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
      >
        <AiOutlineMail />
      </Link>
      <Link
        href="/#contact"
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
      >
        <BsFillPersonLinesFill />
      </Link>
    </div>
  );
};

export default ContactItems;
