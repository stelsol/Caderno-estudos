import Filtro from "../Filtro/Filtro";

export default function CardBusca({ icon }) {
  return (
    <div className="w-full flex gap-3">
      {/* <div className=" flex-2 bg-amber-500">Buscar</div>{" "} */}
      <label className="flex-2 relative  inline-flex items-center gap-1  ">
        <input
          type="search"
          id="busca"
          className="w-full border-2 border-[#9B7EBD]/50 rounded-2xl peer pr-5 pl-8 "
          placeholder="Buscar"
        />
        <span className="peer-placeholder-shown:block absolute left-3 top-1/2 -translate-y-1/2 hidden text-[#ffff]/50 text-center">
          {icon}
        </span>
      </label>
      <Filtro />
    </div>
  );
}
