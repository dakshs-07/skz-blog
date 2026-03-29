import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getRandomImage } from "@/utils/randomImage";
import { slugify } from "@/utils/slugify";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find();
  return Response.json(blogs);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const { title, description, content, category } = body;
  if (!title || !description || !content || !category) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }
  const blog = await Blog.create({
    title,
    description,
    content,
    category,
    slug: slugify(title),
    image: getRandomImage(),
  });
  return Response.json(blog);
}
