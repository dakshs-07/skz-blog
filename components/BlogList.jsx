import { blogdata } from '@/assets/assets'
import React from 'react'
import BlogItem from './BlogItem'

function BlogList() {
  return (
    <div className="px-5 py-3">
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogdata.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogList