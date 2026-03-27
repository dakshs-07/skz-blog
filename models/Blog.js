import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
    title: String,
    description: String, 
    image: String,
    category: String,
    slug: String,
})

export default mongoose.model.Blog || mongoose.model("Blog", BlogSchema);