import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className=" min-h-screen w-auto flex flex-col  bg-[#290d48]   font-sans text-foreground box-border text-[#eeeeee]">
      <div className="  flex flex-1 gap-3  shrink p-3">
        <Sidebar />

        <div className="  flex-1 rounded-2xl flex justify-center ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
