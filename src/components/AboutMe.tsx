import miImagen from "../assets/img/me.jpeg";

const AboutMe = () => {
  return (
    <section id="SobreMi" className="mt-16">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">¿Quién soy?</h2>
      </div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start py-6 px-6 rounded-lg shadow-lg background-custom">
        <div className="absolute left-0 top-0 h-full w-1 border-left "></div>
        <div className="md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={miImagen}
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-md"
            alt="Yo"
          />
        </div>
        <div className="md:w-3/4 px-4">
          <h3 className="pb-4 text-xl font-bold">
            Una desarrolladora front-end impulsada por la curiosidad y con
            habilidades de diseño.
          </h3>
          <p className="mb-4">
            Mi trayectoria comenzó en ventas, pero mi pasión me llevó al mundo
            de la programación y el diseño web. Completé un máster en desarrollo
            front-end en IDECREA, donde reforcé mis habilidades técnicas y
            creativas
          </p>
          <p className="mb-4">
            Además, en{" "}
            <a
              href="https://igrowker.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página de Igrowker"
              className="underline decoration-gold hover:text-gray-800"
            >
              Igrowker
            </a>
            , formé parte de un TrainingCamp IT, trabajando en equipo para
            desarrollar un proyecto complejo con metodologías usadas en la
            industria.
          </p>
          <p className="mb-4">
            Acompáñame en este viaje lleno de creatividad y aprendizaje.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
