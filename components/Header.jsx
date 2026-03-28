import Image from "next/image";
import React from "react";
import { assets } from "@/public/assets/assets";
import { ArrowRight } from "lucide-react";
import Subscription from "./Subscription";

function Header() {
  return (
    <div className="py-2 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <a href="/">
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
    </div>
  );
}

export default Header;
