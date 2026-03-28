import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find();
  return Response.json(blogs);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { title, description, content, category, slug } = body;
  if (!title || !description || !content || !category || !slug) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }
  const blog = await Blog.create({...body, image: "/assets/skz-2.jpg"});
  return Response.json(blog);
}
