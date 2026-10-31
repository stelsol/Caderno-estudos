import Tags from "../Tags/Tags";
import { FaRegFileAlt } from "react-icons/fa";

export default function CardCaderno({ assunto, title, tag, data }) {
  return (
    <div className="flex flex-col flex-1 gap-2 items-start border-2 border-[#9B7EBD]/50 bg-[#9B7EBD]/10 rounded-2xl p-4 justify-between ">
      <span className=" flex gap-2 items-center text-[#9B7EBD]/90">
        <FaRegFileAlt /> {assunto}
      </span>
      <h3 className="font-bold">{title}</h3>
      <div className="flex gap-2 flex-wrap">
        {tag.map((tg) => (
          <Tags key={tg} tag={tg} />
        ))}
      </div>
      <p>{data}</p>
    </div>
  );
}
