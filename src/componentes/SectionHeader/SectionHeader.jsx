import { Outlet } from "react-router-dom";

export default function SectionHeader({ title, icon, LinkText }) {
  return (
    <div className="flex w-4xl   justify-between items-center  ">
      <h2>{title}</h2>

      <div className="flex items-center gap-2 border-2 border-transparent hover:border-[#9B7EBD]/70 rounded-2xl px-5 py-2 cursor-pointer">
        {" "}
        {icon}
        <p>{LinkText}</p>
      </div>
    </div>
  );
}
//   <div>
//     <p>Metas da semana</p>
//   </div>

//   <div className="flex items-center gap-2 border-2 border-transparent hover:border-[#9B7EBD]/70 rounded-2xl px-5 py-2 cursor-pointer">
//     {" "}
//     <LiaMapSolid />
//     <p>Ver trilha</p>
//   </div>
