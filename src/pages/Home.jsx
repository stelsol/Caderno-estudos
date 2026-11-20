import { LiaMapSolid } from "react-icons/lia";
import { BsJournal } from "react-icons/bs";
import cadernos from "../data/cadernos.json";
import { LiaCircleSolid } from "react-icons/lia";
import PageSection from "../componentes/PageSection/PageSection";
import PageHeader from "../componentes/PageHeader/PageHeader";
import CardCaderno from "../componentes/CardCaderno/CardCaderno";
import CardMeta from "../componentes/CardMeta/CardMeta";
import weekdays from "../data/weekdays.json";

const Metas = [
  {
    id: 1,
    meta: "assunto",
    title: "Titulo1",
  },
  {
    id: 2,
    meta: "assunto",
    title: "Titulo1",
  },
  {
    id: 2,
    meta: "assunto",
    title: "Titulo1",
  },
  {
    id: 2,
    meta: "assunto",
    title: "Titulo1",
  },
  {
    id: 2,
    meta: "assunto",
    title: "Titulo1",
  },
];

export default function Home() {
  return (
    <section className=" flex  flex-col  gap-9  pt-2">
      {/* Section frequencia de uso */}

      <PageSection>
        {/* <div className="flex w-4xl  justify-between items-center">
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
        </div> */}
        <PageHeader
          title="Ola, Usuario"
          subtitle="Seja bem vindo de volta, vamos estudar ?"
          buttonText="Novo caderno"
        />
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
        {/* Card metas fica aqui ! */}

        {Metas.map((cont) => (
          <CardMeta key={cont.id} title={cont.title} meta={cont.meta} />
        ))}
      </PageSection>

      {/* Section Cadernos Recentes */}
      <PageSection
        title="Cadernos recentes"
        icon={<BsJournal />}
        LinkText="Ver mais"
      >
        <div className="w-full text-center  flex gap-5 rounded-2xl   ">
          {cadernos.slice(0, 3).map((card) => (
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
