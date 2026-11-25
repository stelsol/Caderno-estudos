import { IoIosArrowDown } from "react-icons/io";
import cadernos from "../../data/cadernos.json";
import { useState } from "react";
export default function Filtro() {
  const [aberto, setAberto] = useState(false);
  const [opcoes, setOpcoes] = useState("Todas");

  function opcao(opcaoclhida) {
    setAberto(false);
    setOpcoes(opcaoclhida);
  }

  return (
    <div className=" flex w-30 relative  ">
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        className="border-2 px-3 w-full bg-[#9B7EBD] border-[#9B7EBD] absolute
         rounded-2xl"
      >
        <p className="text-[#ffff] flex items-center justify-between ">
          {opcoes}
          <IoIosArrowDown />
        </p>
      </button>

      {aberto && (
        <div className="absolute top-full left-0 z-50 mt-2 border-2  bg-[#9B7EBD] border-[#9B7EBD] rounded-2xl ">
          <button
            type="button"
            className=" hover:bg-[#6c4897] w-full p-2 rounded-2xl "
            onClick={() => {
              opcao("Todas");
            }}
          >
            Todas
          </button>
          {Array.from(new Set(cadernos.map((ass) => ass.assunto))).map(
            (assunto) => (
              <button
                key={assunto}
                type="button"
                className=" hover:bg-[#6c4897] w-full p-2 rounded-2xl "
                onClick={() => {
                  opcao(assunto);
                }}
              >
                {assunto}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}
