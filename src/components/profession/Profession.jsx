import Roles from "./Roles";

// À adapter avec les vraies compétences de Maram
const rolesData = [
  {
    id: 1,
    title: "Développement Web",
    description:
      "Je conçois des applications web responsives et performantes avec des technologies modernes, en veillant à l'accessibilité, à l'évolutivité et à la maintenabilité du code.",
  },
  {
    id: 2,
    title: "Génie Logiciel & Conception",
    description:
      "J'analyse les besoins, modélise les solutions (UML, architecture) et applique les bonnes pratiques de développement pour livrer des logiciels fiables et bien structurés.",
  },
  {
    id: 3,
    title: "Bases de Données & Données",
    description:
      "Je conçois et exploite des bases de données, et j'apprends à transformer les données en informations utiles pour les projets et les décisions.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Mes compétences</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Étudiante en génie logiciel, je développe des applications robustes
            et je m'intéresse à chaque étape d'un projet, de la conception à la
            mise en production.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Mon approche allie rigueur technique et curiosité pour proposer des
            solutions fiables, claires et utiles pour les utilisateurs.
          </p>
        </div>
       <a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
>
  Me contacter
</a>

      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;