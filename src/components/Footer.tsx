"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [footer, setFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setFooter(true);
      } else {
        setFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="w-ful fixed bottom-0 w-[100%]"
      style={{ display: footer ? "block" : "none" }}
    >
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
