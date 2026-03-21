import { blogdata } from "@/assets/assets";
import Image from "next/image";
import React from "react";

async function page({ params }) {
  const { slug } = await params;
  const blog = blogdata.find((b) => b.slug === slug);
  if (!blog) return <div>Blog not found!</div>;
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={blog.image} alt={blog.title} height={400} width={400} />
        <h1 className="text-3xl tracking-wider">{blog.title}</h1>
        <p className="text-sm text-gray-500">{blog.description}</p>
      </div>
    </div>
  );
}

export default page;
