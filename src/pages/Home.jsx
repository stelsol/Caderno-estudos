import { Link } from "react-router-dom";
import icon1 from "../assets/pasta1/icon1.svg";
import icon2 from "../assets/pasta1/icon2.svg";
import icon3 from "../assets/pasta1/icon3.svg";
import icon4 from "../assets/pasta1/icon4.svg";
import { BsBoxArrowRight } from "react-icons/bs";
import { LiaMapSolid } from "react-icons/lia";
import { BsJournal } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi2";
export default function Home() {
  return (
    <div className=" min-h-screen w-auto flex flex-col bg-[#3B1E54] font-sans text-foreground box-border text-[#eeeeee]">
      <div className="  flex flex-1 gap-3  shrink p-3">
        <div className="  bg-[#9B7EBD]/40  w-[100px] flex flex-col items-stretch rounded-2xl">
          <div className="flex grow-3">
            <Link to="#">
              <HiOutlineUserCircle />
            </Link>
          </div>
          <div className=" flex flex-col items-stretch justify-around grow-7 p-1">
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
          <div className="flex grow-2">
            <Link to="/Login" className="text-4xl">
              {" "}
              <BsBoxArrowRight />
            </Link>
          </div>
        </div>
        <div className=" bg-[#9B7EBD]/40 flex-1 rounded-2xl flex justify-center items-center">
          2
        </div>
      </div>
    </div>
  );
}
