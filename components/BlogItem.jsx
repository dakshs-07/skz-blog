import { blogdata } from "@/public/assets/assets";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ blog }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white">
      <div className="relative w-full h-48 border border-black hover:shadow-[-7px_7px_0px_#000000] cursor-pointer">
        <Link href={blog?.slug ? `/blog/${blog.slug}` : "/"}>
          <Image
            src={blog.image || "/assets/skz-3.jpg"}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </Link>
      </div>
      <div className="cursor-pointer">
        <span className="bg-blue-900 text-white w-full h-3 p-1 text-sm">
          {blog.category}
        </span>
        <h1 className="text-xl py-2">{blog.title}</h1>
        <p className="text-gray-500 text-sm">{blog.description}</p>
        <div className="flex gap-2 items-center justify-end hover:opacity-90 cursor-pointer">
          <p className="text-blue-800">Read more</p>
          <ArrowRightIcon size={20} />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
