import { IoIosArrowDown } from "react-icons/io";
import cadernos from "../../data/cadernos.json";
import { useState } from "react";
export default function Filtro() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className=" flex w-30 relative  ">
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        className="border-2 px-3 w-full bg-[#9B7EBD] border-[#9B7EBD] absolute
         rounded-2xl"
      >
        <p className="text-[#ffff] flex items-center justify-between ">
          Todos <IoIosArrowDown />
        </p>
      </button>

      {aberto && (
        <div className="absolute top-full left-0 z-50 mt-2 border-2  bg-[#9B7EBD] border-[#9B7EBD] rounded-2xl ">
          {Array.from(new Set(cadernos.map((ass) => ass.assunto))).map(
            (assunto) => (
              <button
                key={assunto}
                type="button"
                className="block hover:bg-[#6c4897] w-full p-2 rounded-2xl "
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
