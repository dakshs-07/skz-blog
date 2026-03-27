"use client"
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

  return (
    <form onSubmit={handleSubmit} className="bg-red-500 flex flex-col justify-center items-center">
      <input onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input
        type="text"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      required />
      <input
        type="text"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      required />
      <input
        type="text"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      required />
      <input
        type="text"
        onChange={(e) => setForm({ ...form, slug: e.target.value })}
      required />
      <button>Add Blog</button>
    </form>
  );
}
