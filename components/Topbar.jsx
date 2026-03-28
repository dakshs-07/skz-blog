import Link from "next/link";
import React from "react";

function Topbar() {
    const LinkStyle = "hover:cursor-pointer hover:underline hover:opacity-80";
  return (
    <div className="py-1 bg-blue-800 text-white">
      <div className="flex items-center justify-center gap-6">
        <Link href="/add-blog" className={LinkStyle}>All Blogs</Link>
        <Link href="/add-blog" className={LinkStyle}>Add A blog</Link>
        <Link href="/add-blog" className={LinkStyle}>Subscribe</Link>
      </div>
    </div>
  );
}

export default Topbar;
