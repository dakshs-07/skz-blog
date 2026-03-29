import Image from "next/image";
import React from "react";
import { assets } from "@/public/assets/assets";
import { ArrowRight } from "lucide-react";
import Links from "./Links";

function Header() {
  return (
    <div className="relative">
      <Links className="absolute left-0" />
      <Image src="/banner3.webp" alt="bg" fill className="object-cover -z-10" />
      <div className="relative py-30 md:px-12 lg:px-28">
        <div className="flex justify-between items-start">
          <a href="/">
            <Image
              src={assets.logo}
              alt="blog website logo"
              width="180"
              height="180"
              className="w-32.5 sm:w-auto"
            />
          </a>
          <div className="flex flex-col gap-5">
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#98b5b3] hover:cursor-pointer bg-white">
              Get Started
              <span>
                <ArrowRight />
              </span>
            </button>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#98b5b3] hover:cursor-pointer bg-white">
              Add a blog
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
