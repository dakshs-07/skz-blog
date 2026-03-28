"use client";
import { useState } from "react";

export default function AddBlog() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    slug: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Added the blog, queennnnn slaaayyyy");
  };
  const inputStyle =
    "w-full px-4 py-2 border border-black-500/40 placeholder-gray-400 font-extralight focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-black-500 transition";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-white via-white to-blue-400/90">
      <h1 className="text-5xl font-semibold text-center tracking-wider mb-3">
        Add a Blog
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 backdrop-blur-3xl flex flex-col gap-4 cursor-pointer transition"
      >
        <input
          type="text"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className={inputStyle}
          placeholder="Name"
          required
        />
        <input
          type="text"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className={inputStyle}
          placeholder="Description"
          required
        />
        <input
          type="text"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className={inputStyle}
          placeholder="Category"
          required
        />
        <textarea
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className={`${inputStyle} min-h-[150px]`}
          placeholder="Blog Content"
          required
        />
        <input
          type="text"
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          className={inputStyle}
          placeholder="Slug"
          required
        />
        <button className="bg-black w-50 mx-auto p-2 text-white cursor-pointer hover:bg-black/50 hover:border">
          ADD BLOG
        </button>
      </form>
    </div>
  );
}
