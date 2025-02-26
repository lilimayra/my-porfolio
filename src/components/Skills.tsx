import SkillIcons from "@/components/skillsIcons/SkillIcons";

const Skills = () => {
  return (
    <section id="Skills" className="mt-16">
      <div className="flex items-center my-6">
        <div className="flex-grow border-t boder-custom"></div>
        <h2 className="px-4 text-2xl font-bold text-center">SKILLS</h2>
        <div className="flex-grow border-t boder-custom"></div>
      </div>
      <div>
        <h3 className="pb-4 text-xl text-center font-bold">
          Habilidades y Tecnologías:
        </h3>
        <p className="mt-2 text-center">
          Te presento algunas de las habilidades, herramientas y tecnologías que
          utilizo para dar vida a mis proyectos.
        </p>
      </div>
      <SkillIcons />
    </section>
  );
};

export default Skills;
