import { FiPlus } from "react-icons/fi";
export default function PageHeader({ title, subtitle, buttonText }) {
  return (
    <div className="flex w-4xl  justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl">{title} </h1>
        <p>{subtitle}</p>
      </div>
      <button
        type="button"
        className="flex justify-center items-center gap-2 px-5 py-2 bg-[#9B7EBD] rounded-2xl cursor-pointer"
      >
        {" "}
        <FiPlus />
        {buttonText}
      </button>{" "}
    </div>
  );
}

// <div className="flex w-4xl  justify-between items-center">
//   <div className="flex flex-col gap-1">
//     <h1 className="text-4xl">Ola, Usuario </h1>
//     <p>Seja bem vindo de volta, vamos estudar ?</p>
//   </div>
//   <button
//     type="button"
//     className="flex justify-center items-center gap-2 px-5 py-2 bg-[#9B7EBD] rounded-2xl cursor-pointer"
//   >
//     {" "}
//     <FiPlus />
//     Novo caderno
//   </button>{" "}
// </div>
