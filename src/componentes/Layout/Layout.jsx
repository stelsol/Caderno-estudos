import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className=" h-screen  w-auto flex flex-col  bg-[#290d48]   font-sans text-foreground box-border text-[#eeeeee]">
      <div className=" min-h-0 flex flex-1 gap-3  shrink p-3">
        <Sidebar />

        <div className=" no-scrollbar  overflow-y-auto min-h-0 flex-1 rounded-2xl flex justify-center ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
