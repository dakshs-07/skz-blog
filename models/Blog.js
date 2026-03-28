import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}, 
    image: {type:String, required: true},
    category: {type:String, required: true},
    slug: {type:String, required: true},
})

export default mongoose.model.Blog || mongoose.model("Blog", BlogSchema);