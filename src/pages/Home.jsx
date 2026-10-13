import { Link } from "react-router-dom";
import icon1 from "../assets/pasta1/icon1.svg";
import icon2 from "../assets/pasta1/icon2.svg";
import icon3 from "../assets/pasta1/icon3.svg";
import icon4 from "../assets/pasta1/icon4.svg";
export default function Home() {
  return (
    <div className=" min-h-screen w-auto flex flex-col bg-[#3B1E54] font-sans text-foreground box-border text-[#eeeeee]">
      <div className="  flex flex-1 gap-3  shrink p-3">
        <div className="  bg-[#9B7EBD]/40  w-[100px] flex flex-col items-stretch rounded-2xl">
          <div className="flex grow-3">
            <img src="#" alt="Perfil" />
          </div>
          <div className=" flex flex-col items-stretch justify-around grow-7 p-1">
            <img src={icon1} alt="icon" />
            <img src={icon2} alt="icon" />
            <img src={icon3} alt="icon" />
            <img src={icon4} alt="icon" />
          </div>
          <div className="flex grow-2">
            <Link to="/Login">
              {" "}
              <img src="#" alt="Exit" />
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
