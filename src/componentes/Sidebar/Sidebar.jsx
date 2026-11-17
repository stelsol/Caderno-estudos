import { Link } from "react-router-dom";
import logo2 from "../../assets/pasta1/logo2.svg";
import { BsBoxArrowRight } from "react-icons/bs";
import { LiaMapSolid } from "react-icons/lia";
import { BsJournal } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <div className="  bg-[#9B7EBD]/50  w-[100px] flex flex-col  justify-center items-center rounded-2xl">
      <div className="flex flex-col items-center justify-start text-4xl gap-7  pt-4 grow-3">
        <img src={logo2} alt="Logo" />
        <Link to="#">
          <HiOutlineUserCircle />
        </Link>
      </div>
      <div className=" flex flex-col items-stretch text-3xl gap-7 grow-7 p-1">
        <Link to="#">
          <BiHomeAlt2 />
        </Link>
        <Link to="#">
          <TbLayoutDashboard />
        </Link>
        <Link to="#">
          <LiaMapSolid />
        </Link>
        <Link to="#">
          <BsJournal />
        </Link>
      </div>
      <div className="flex grow-2 items-end pb-9">
        <Link to="/Login" className="text-3xl">
          {" "}
          <BsBoxArrowRight />
        </Link>
      </div>
    </div>
  );
}
