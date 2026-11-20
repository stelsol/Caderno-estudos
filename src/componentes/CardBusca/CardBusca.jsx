export default function CardBusca({ icon, text }) {
  return (
    <div className="w-full flex gap-3">
      {/* <div className=" flex-2 bg-amber-500">Buscar</div>{" "} */}
      <label className="flex-2 relative  inline-flex items-center gap-2  ">
        <input
          type="search"
          id="busca"
          className="w-full border-2 border-[#9B7EBD]/50 rounded-2xl px-3 py-1 cursor-pointer absolute "
        />
        {icon} {text}
      </label>
      <div className="flex-1 bg-amber-900">Filtro</div>
    </div>
  );
}
