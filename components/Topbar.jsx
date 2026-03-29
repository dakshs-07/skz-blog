'use client';
import { Moon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Topbar() {
    const LinkStyle = "hover:cursor-pointer hover:underline hover:opacity-80 text-sm";
    const [dark, setDark] = useState(false);
    useEffect(()=>{
        document.documentElement.classList.toggle("dark", dark)
    }, [dark]);
  return (
    <div className="py-1 bg-blue-800 text-white dark:bg-gray-100 dark:text-gray-900">
      <div className="flex items-center">
        <div className="flex-1 flex justify-center gap-6">
          <Link href="/" className={LinkStyle}>
            All Blogs
          </Link>
          <Link href="/add-blog" className={LinkStyle}>
            Add A blog
          </Link>
          <Link href="/" className={LinkStyle}>
            Subscribe
          </Link>
          <Link href="/about" className={LinkStyle}>
            About
          </Link>
        </div>
        <Moon onClick={() => setDark(!dark)} className="pr-1 cursor-pointer" />
      </div>
    </div>
  );
}

export default Topbar;
