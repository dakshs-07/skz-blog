import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import { ArrowRight } from "lucide-react";

function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <a href="/">
          {" "}
          <Image
            src={assets.logo}
            alt="blog website logo"
            width="180"
            height="180"
            className="w-32.5 sm:w-auto"
          />
        </a>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:cursor-pointer">
          Get Started
          <span>
            <ArrowRight />
          </span>
        </button>
      </div>
      <div className="text-center mb-8">
        <p className="text-5xl tracking-wide font-medium">Latest Blogs</p>
        <p className="mt-10 max-w-185 m-auto text-xs sm:text-base ">Find all the info you need on Stray Kids - latest, past and what not all in one place here! Stray Kids everywhere aruond the world!</p>
        <form className="flex justify-between max-w-[500] scale-75 sm:scale-100 mx-auto mt-10 border border-black" action="">
            <input type="email" placeholder="Enter your email" className="pl-4 outline-none"/>
            <button type="submit" className="border border-black py-4 px-4 sm:px-8 active:bg-gray-500 active:text-white hover:bg-gray-300 cursor-pointer">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
