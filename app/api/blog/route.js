import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(){
    await connectDB();
    const blogs = await Blog.find();
    return Response.json(blogs);
}

export async function POST(req){
    await connectDB();
    const body = await req.json();
    const blog = await Blog.create(body);
    return Response.json(blog);
}