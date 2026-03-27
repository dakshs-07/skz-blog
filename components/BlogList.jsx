'use Client';
import { blogdata } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'

function BlogList() {
  const Button = ({children, onClick})=>(
    <button className='px-4 py-2 bg-black text-white hover:bg-gray-800 cursor-pointer transition' onClick={onClick}>{children}</button>
  )
  const [menu, setMenu] = useState("All");
  const [blogs, setBlog] = useState([]);
  useEffect(()=>{
    fetch('/api/blog').then(
      res=>res.json()
    ).then(data=>setBlog(data))
  }, [])
  return (
    <div className="px-5 py-3">
      <div className='flex justify-center gap-6 mb-10'>
        <Button onClick={()=>setMenu('All')}>All</Button>
        <Button onClick={()=>setMenu('Bang Chan')}>Bang Chan</Button>
        <Button onClick={()=>setMenu('Lee Know')}>Lee Know</Button>
        <Button onClick={()=>setMenu('Changbin')}>Changbin</Button>
        <Button onClick={()=>setMenu('Hyunjin')}>Hyunjin</Button>
        <Button onClick={()=>setMenu('Felix')}>Felix</Button>
      </div>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogs.filter((blog)=>menu==="All"?true: blog.category===menu).map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogList