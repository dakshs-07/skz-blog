const { default: Image } = require("next/image");

export default async function Page({params}){
  const {slug} = await params;
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  })
  const blogs = await res.json();
  const blog = blogs.find((b)=>b.slug=== slug);

  if (!blog) return <div>Blog not found noooo!</div>;

  return(
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center gap-2">
        <Image src="/assets/do-it.jpg" alt={blog.title} width={400} height={400} />
        <h1 className="text-5xl">{blog.title}</h1>
        <p>{blog.description}</p>
        <p>{blog.content}</p>
      </div>
    </div>
  )
}