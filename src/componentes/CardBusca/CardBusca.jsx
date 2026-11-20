import { PiPlaceholder } from "react-icons/pi";

export default function CardBusca({ icon }) {
  return (
    <div className="w-full flex gap-3">
      {/* <div className=" flex-2 bg-amber-500">Buscar</div>{" "} */}
      <label className="flex-2 relative  inline-flex items-center gap-2  ">
        <input
          type="search"
          id="busca"
          className="w-full border-2 border-[#9B7EBD]/50 rounded-2xl peer pr-5 pl-8 "
          placeholder="Buscar"
        />
        <span className="peer-placeholder-shown:block absolute left-3 top-1/2 -translate-y-1/2 hidden text-[#9B7EBD]/70">
          {icon}
        </span>
      </label>
      <div className="flex-1 bg-amber-900">Filtro</div>
    </div>
  );
}
