import { blogdata } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const BlogItem = ({ blog }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white">
      <div className="relative w-full h-48 border border-black hover:shadow-[-7px_7px_0px_#000000]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-xl py-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm">{blog.description}</p>
    </div>
  );
};

export default BlogItem;
