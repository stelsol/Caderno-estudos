import { IoCheckmark } from "react-icons/io5";
export default function CardMeta({ title, meta }) {
  return (
    <div className="w-full bg-[#9B7EBD]/10  border-2 border-[#9B7EBD]/50 text-center  flex gap-5 rounded-2xl  p-5  ">
      <div>
        <label className="relative inline-flex ">
          <input type="checkbox" className="sr-only peer" />
          <span className="rounded-full  inline-block border-2 border-[#9B7EBD] w-6 h-6 peer-checked:bg-[#9B7EBD] peer-focus-visible:ring-2"></span>
          <IoCheckmark className=" absolute hidden peer-checked:block inset-0 m-auto w-5 h-5  text-[#eeeeee] " />
        </label>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="text-lg">{title} </h3>
        <p className="text-[#9B7EBD]/50 ">{meta}</p>
      </div>
    </div>
  );
}
