import { assets } from "@/assets/assets";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
  const Socials = ({ children }) => (
    <button className="hover:opacity-90 cursor-pointer">{children}</button>
  );
  return (
    <div className="flex flex-col justify-around items-center gap-2 sm:flex-row bg-black text-white py-5">
      <Image src={assets.logo} alt="footer logo" width={200} height={200} />
      <p className="text-sm tracking-wide">
        All rights reserved, Stray Kids Blog 2026
      </p>
      <div className="flex gap-3">
        <Socials>
          <Facebook className="socials" />
        </Socials>
        <Socials>
          <Twitter className="socials" />
        </Socials>
        <Socials>
          <Instagram className="socials" />
        </Socials>
      </div>
    </div>
  );
}

export default Footer;
