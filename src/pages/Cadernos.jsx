import CardCaderno from "../componentes/CardCaderno/CardCaderno";
import PageHeader from "../componentes/PageHeader/PageHeader";
import PageSection from "../componentes/PageSection/PageSection";
import CardBusca from "../componentes/CardBusca/CardBusca";
import { CiSearch } from "react-icons/ci";

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
export default function Cadernos() {
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
          <CardBusca icon={<CiSearch className="text-2xl" />} text="Buscar" />
        </div>

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
