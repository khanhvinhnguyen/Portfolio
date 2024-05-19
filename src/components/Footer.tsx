import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      <div className="text-center p-4">
        <Link href="" className=" text-xs hover:underline">
          Privacy
        </Link>
        <span className="text-xs no-underline">|</span>
        <Link href="" className=" text-xs hover:underline">
          Terms
        </Link>
        <span className="text-xs no-underline">|</span>
        <Link
          href="mailto:vinhnk.work@gmail.com"
          className="text-xs hover:underline"
        >
          Contact
        </Link>
        <p className="text-xs">
          Copyright © {currentYear}, KhanhVinhNguyen. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
