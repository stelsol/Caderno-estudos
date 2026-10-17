import { Link } from "react-router-dom";
import logo2 from "../assets/pasta1/Logo2.svg";
import { BsBoxArrowRight } from "react-icons/bs";
import { LiaMapSolid } from "react-icons/lia";
import { BsJournal } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import { LiaCircleSolid } from "react-icons/lia";
export default function Home() {
  return (
    <div className=" min-h-screen w-auto flex flex-col  bg-[#290d48]   font-sans text-foreground box-border text-[#eeeeee]">
      <div className="  flex flex-1 gap-3  shrink p-3">
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
        <div className="  flex-1 rounded-2xl flex justify-center ">
          <section className=" flex  flex-col items-center  pt-13">
            {/* Section frequencia de uso */}
            <section className=" flex gap-6 flex-col ">
              <div className="flex w-4xl  justify-between items-center">
                {" "}
                <div className="flex flex-col gap-1">
                  <h1 className="text-4xl">Ola, Usuario </h1>
                  <p>Seja bem vindo de volta, vamos estudar ?</p>
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center gap-2 px-5 py-2 bg-[#9B7EBD] rounded-2xl"
                >
                  {" "}
                  <FiPlus />
                  Novo caderno
                </button>{" "}
              </div>
              {/* section dias de atividade */}
              <div className=" bg-[#9B7EBD]/10  border-2 border-[#9B7EBD]/50 text-center  flex flex-col gap-5 rounded-2xl  p-5 ">
                {/* contendo os dias estudados */}
                <div className="flex justify-around">
                  {/* Dias da semana */}
                  <div className=" flex flex-col items-center">
                    {" "}
                    <LiaCircleSolid className="text-5xl" />
                    <span>Seg</span>
                  </div>{" "}
                  <div className=" flex flex-col items-center">
                    {" "}
                    <LiaCircleSolid className="text-5xl" />
                    <span>Ter</span>
                  </div>{" "}
                  <div className=" flex flex-col items-center">
                    {" "}
                    <LiaCircleSolid className="text-5xl" />
                    <span>Qua</span>
                  </div>{" "}
                  <div className=" flex flex-col items-center">
                    {" "}
                    <LiaCircleSolid className="text-5xl" />
                    <span>Qui</span>
                  </div>{" "}
                  <div className=" flex flex-col items-center">
                    {" "}
                    <LiaCircleSolid className="text-5xl" />
                    <span>Sex</span>
                  </div>{" "}
                  <div className=" flex flex-col items-center">
                    {" "}
                    <LiaCircleSolid className="text-5xl" />
                    <span>Sab</span>
                  </div>{" "}
                  <div className=" flex flex-col items-center">
                    {" "}
                    <LiaCircleSolid className="text-5xl" />
                    <span>Dom</span>
                  </div>{" "}
                </div>
                <p className="text-[#9B7EBD]/70 ">
                  0 de 7 dias estudados na semana
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
