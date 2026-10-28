import { LiaMapSolid } from "react-icons/lia";
import { BsJournal } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { LiaCircleSolid } from "react-icons/lia";
import { IoCheckmark } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";

const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

export default function Home() {
  return (
    <section className=" flex  flex-col  gap-9  pt-13">
      {/* Section frequencia de uso */}
      <section className=" flex gap-5 flex-col ">
        <div className="flex w-4xl  justify-between items-center">
          {" "}
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl">Ola, Usuario </h1>
            <p>Seja bem vindo de volta, vamos estudar ?</p>
          </div>
          <button
            type="button"
            className="flex justify-center items-center gap-2 px-5 py-2 bg-[#9B7EBD] rounded-2xl cursor-pointer"
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
            {weekdays.map((day) => (
              <div key={day} className=" flex flex-col items-center">
                {" "}
                <LiaCircleSolid className="text-5xl" />
                <span>{day}</span>
              </div>
            ))}
          </div>
          <p className="text-[#9B7EBD]/70 ">0 de 7 dias estudados na semana</p>
        </div>
      </section>

      {/* Section Metas da semana */}
      <section className="flex  flex-col  gap-5">
        <div className="flex w-4xl   justify-between items-center  ">
          <div>
            <p>Metas da semana</p>
          </div>

          <div className="flex items-center gap-2 border-2 border-transparent hover:border-[#9B7EBD]/70 rounded-2xl px-5 py-2 cursor-pointer">
            {" "}
            <LiaMapSolid />
            <p>Ver trilha</p>
          </div>
        </div>
        <div className="w-full bg-[#9B7EBD]/10  border-2 border-[#9B7EBD]/50 text-center  flex gap-5 rounded-2xl  p-5 items-center ">
          <div>
            <label className="relative inline-flex ">
              <input type="checkbox" name="check" className="sr-only peer" />
              <span className="rounded-full  inline-block border-2 border-[#9B7EBD] w-6 h-6 peer-checked:bg-[#9B7EBD] peer-focus-visible:ring-2"></span>
              <IoCheckmark className=" absolute hidden peer-checked:block inset-0 m-auto w-5 h-5  text-[#eeeeee] " />
            </label>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg">Exemplo de meta </h3>
            <p className="text-[#9B7EBD]/50 ">Informações caso necessário</p>
          </div>
        </div>
      </section>
      <section className="flex  flex-col  gap-5">
        <div className="flex w-4xl   justify-between items-center  ">
          <div>
            <p>Cadernos recentes</p>
          </div>

          <div className="flex items-center gap-2 border-2 border-transparent hover:border-[#9B7EBD]/70 rounded-2xl px-5 py-2 cursor-pointer">
            {" "}
            <BsJournal />
            <p>Ver mais</p>
          </div>
        </div>
        <div className="w-full text-center  flex gap-5 rounded-2xl  items-start ">
          <div className="flex flex-col gap-2 items-start border-2 border-[#9B7EBD]/50 bg-[#9B7EBD]/10 rounded-2xl p-4 ">
            <span className=" flex gap-2 items-center text-[#9B7EBD]/90">
              <FaRegFileAlt /> Exemplo conteudo
            </span>
            <h3 className="font-bold">Titulo caderno</h3>
            <div className="flex gap-2">
              <p className="inline-block py-2 px-4 border-2 border-[#9B7EBD] bg-[#9B7EBD]/30 rounded-2xl">
                #Tags
              </p>
              <p className="inline-block py-2 px-4 border-2 border-[#9B7EBD] bg-[#9B7EBD]/30 rounded-2xl">
                #Tags
              </p>
              <p className="inline-block py-2 px-4 border-2 border-[#9B7EBD] bg-[#9B7EBD]/30 rounded-2xl">
                #Tags
              </p>
            </div>
            <p>xx /xx / xxxx</p>
          </div>
          <div className="flex flex-col gap-2 items-start border-2 border-[#9B7EBD]/50 bg-[#9B7EBD]/10 rounded-2xl p-4 ">
            <span className=" flex gap-2 items-center text-[#9B7EBD]/90">
              <FaRegFileAlt /> Exemplo conteudo
            </span>
            <h3 className="font-bold">Titulo caderno</h3>
            <div className="flex gap-2">
              <p className="inline-block py-2 px-4 border-2 border-[#9B7EBD] bg-[#9B7EBD]/30 rounded-2xl">
                #Tags
              </p>
              <p className="inline-block py-2 px-4 border-2 border-[#9B7EBD] bg-[#9B7EBD]/30 rounded-2xl">
                #Tags
              </p>
              <p className="inline-block py-2 px-4 border-2 border-[#9B7EBD] bg-[#9B7EBD]/30 rounded-2xl">
                #Tags
              </p>
            </div>
            <p>xx /xx / xxxx</p>
          </div>
          <div className="flex flex-col gap-2 items-start border-2 border-[#9B7EBD]/50 bg-[#9B7EBD]/10 rounded-2xl p-4 ">
            <span className=" flex gap-2 items-center text-[#9B7EBD]/90">
              <FaRegFileAlt /> Exemplo conteudo
            </span>
            <h3 className="font-bold">Titulo caderno</h3>
            <div className="flex gap-2">
              <p className="inline-block py-2 px-4 border-2 border-[#9B7EBD] bg-[#9B7EBD]/30 rounded-2xl">
                #Tags
              </p>
              <p className="inline-block py-2 px-4 border-2 border-[#9B7EBD] bg-[#9B7EBD]/30 rounded-2xl">
                #Tags
              </p>
              <p className="inline-block py-2 px-4 border-2 border-[#9B7EBD] bg-[#9B7EBD]/30 rounded-2xl">
                #Tags
              </p>
            </div>
            <p>xx /xx / xxxx</p>
          </div>
        </div>
      </section>
    </section>
  );
}
