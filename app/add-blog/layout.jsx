import { LeftSidebar, RightSideBar } from "@/components/Sidebars";

export default function AddBlogLayout({ children }) {
  return (
    <div className="flex">
      <aside>
        <LeftSidebar />
      </aside>
      <div className="flex-1">{children}</div>
      <aside>
        <RightSideBar />
      </aside>
    </div>
  );
}
