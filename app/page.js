"use client";
import BlogList from "@/components/BlogList";
import { LeftSidebar, RightSideBar } from "@/components/Sidebars";
import Subscription from "@/components/Subscription";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-1/10">
          <LeftSidebar />
        </div>
        <div className="flex-1">
          <Subscription />
          <BlogList />
        </div>
        <div className="w-1/10">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}
