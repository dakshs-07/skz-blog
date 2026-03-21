"use client";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Subscription from "@/components/Subscription";

export default function Home() {
  return (
    <>
      <Header />
      <Subscription />
      <BlogList />
      <Footer />
    </>
  );
}
