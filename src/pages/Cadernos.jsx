import CardCaderno from "../componentes/CardCaderno/CardCaderno";
import cadernos from "../data/cadernos.json";
import PageHeader from "../componentes/PageHeader/PageHeader";
import PageSection from "../componentes/PageSection/PageSection";
import CardBusca from "../componentes/CardBusca/CardBusca";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

export default function Cadernos() {
  const [opcoes, setOpcoes] = useState("Todas");

  return (
    <section className=" flex  flex-col  gap-9  pt-2">
      <PageSection>
        <PageHeader
          title="Cadernos"
          subtitle="Aqui estão todos os seus cadernos !"
          buttonText="Novo caderno"
        />
        <div className=" bg-[#9B7EBD]/10  border-2 border-[#9B7EBD]/50 text-center  flex flex-col gap-5 rounded-2xl  p-5 ">
          {/* Contendo Busca e filtro */}
          <CardBusca
            icon={<IoSearch />}
            areaEscolhida={opcoes}
            mudarArea={setOpcoes}
          />
        </div>

        <div className="w-full text-center grid grid-cols-3 gap-5 rounded-2xl   ">
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
