import { LiaMapSolid } from "react-icons/lia";
import { BsJournal } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { LiaCircleSolid } from "react-icons/lia";
import { IoCheckmark } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import PageSection from "../componentes/PageSection/PageSection";
import Tags from "../componentes/Tags/Tags";
import CardCaderno from "../componentes/CardCaderno/CardCaderno";

const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

const cadernos = [
  {
    id: 1,
    assunto: "assunto",
    title: "Titulo1",
    tag: ["React", "Tailwind"],
    data: "XX/XX/XXXX",
  },
  {
    id: 2,
    assunto: "assunto",
    title: "Titulo2",
    tag: ["Hacker", "Https", "Seguranca"],
    data: "XX/XX/XXXX",
  },
  {
    id: 3,
    assunto: "assunto",
    title: "Titulo3",
    tag: ["teste"],
    data: "XX/XX/XXXX",
  },
];

export default function Home() {
  return (
    <section className=" flex  flex-col  gap-9  pt-13">
      {/* Section frequencia de uso */}

      <PageSection>
        <div className="flex w-4xl  justify-between items-center">
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
      </PageSection>

      {/* Section Metas da semana */}
      <PageSection
        title="Metas da semana"
        icon={<LiaMapSolid />}
        LinkText="Ver trilha"
      >
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
      </PageSection>

      {/* Section Cadernos Recentes */}
      <PageSection
        title="Cadernos recentes"
        icon={<BsJournal />}
        LinkText="Ver mais"
      >
        <div className="w-full text-center  flex gap-5 rounded-2xl   ">
          {cadernos.map((card) => (
            <CardCaderno
              key={card.id}
              assunto={card.assunto}
              title={card.title}
              tag={card.tag}
              data={card.data}
            />
          ))}
        </div>
      </PageSection>
    </section>
  );
}
