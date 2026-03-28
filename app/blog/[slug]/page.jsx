import { MoveLeft } from "lucide-react";
import Link from "next/link";

const { default: Image } = require("next/image");

export default async function Page({params}){
  const {slug} = await params;
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  })
  const blogs = await res.json();
  const blog = blogs.find((b)=>b.slug=== slug);


  if (!blog) return <div>Blog not found noooo!</div>;

  return (
    <div className="w-full flex flex-col px-4 pt-2 pb-20">
      <div className="flex items-center justify-start gap-1 left-0 my-2 mx-10">
        <MoveLeft size={20} />
        <Link href="/" className="underline hover:cursor-pointer hover:opacity-80">Back to blogs</Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/assets/do-it.jpg"
          alt={blog.title}
          width={400}
          height={400}
        />
        <h1 className="text-5xl tracking-wider">{blog.title}</h1>
        <p className="text-gray-700">{blog.description}</p>
        <p className="pt-10">{blog.content}</p>
      </div>
    </div>
  );
}