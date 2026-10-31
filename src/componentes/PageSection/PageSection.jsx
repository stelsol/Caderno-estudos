import SectionHeader from "../Sectionheader/Sectionheader";

export default function PageSection({
  children = "Conteudo",
  title,
  icon,
  LinkText,
}) {
  return (
    <section className="flex  flex-col  gap-5">
      <SectionHeader title={title} icon={icon} LinkText={LinkText} />
      {children}
    </section>
  );
}
