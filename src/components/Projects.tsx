import Carrusel from "./carrusel/Carrusel";

const Projects = () => {
  return (
    <section id="Proyectos" className="mt-16">
      <div className="flex items-center my-6">
        <div
          className="flex-grow border-t boder-custom"
        ></div>
        <h2 className="px-4 text-2xl font-bold text-center">MIS PROYECTOS</h2>
        <div
          className="flex-grow border-t boder-custom"
        ></div>
      </div>
      <div className="row my-4 py-4 px-4 ">
        <h3 className="text-center text-xl font-bold">
          Una selección de cosas que he construido
        </h3>

        <Carrusel />
      </div>
    </section>
  );
};

export default Projects;
