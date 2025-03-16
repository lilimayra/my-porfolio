import miImagen from "@/assets/img/me.jpeg";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="SobreMi" className="mt-16">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">¿Quién soy?</h2>
      </div>

      <div className="relative flex flex-col md:flex-row items-center py-6 px-6 rounded-lg shadow-lg background-custom">
        <div className="absolute left-0 top-0 h-full w-1 border-left "></div>
        <div className="md:w-1/4 flex items-center justify-center self-center py-4 md:py-6">
          <img
            src={miImagen}
            className="rounded-full w-60 h-60 object-cover border-4 border-white shadow-md"
            alt="Yo"
          />
        </div>
        <div className="md:w-3/4 px-4">
          <h3 className="pb-4 text-xl font-bold">
            Una diseñadora y desarrolladora front-end impulsada por la
            curiosidad y la creatividad.
          </h3>
          <p className="mb-4">
            Mi trayectoria comenzó en ventas, pero mi pasión me llevó al mundo
            de la programación y el diseño web. Completé un máster en desarrollo
            front-end en IDECREA, donde reforcé mis habilidades técnicas y
            creativas.
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
            </a>{" "}
            , formé parte de un TrainingCamp IT, trabajando en equipo para
            desarrollar un proyecto complejo con metodologías usadas en la
            industria.
          </p>
          <p className="mb-4">
            Me especializo en crear interfaces atractivas y funcionales,
            combinando mis habilidades de diseño con conocimientos técnicos en
            React y Vue.js. Disfruto transformando conceptos creativos en
            experiencias web intuitivas y estéticamente agradables.
          </p>
          <p className="mb-4">
            Mi experiencia en diseño y desarrollo me permiten entender tanto la
            parte visual como la técnica de los proyectos, aportando una
            perspectiva integral al desarrollo frontend.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <motion.div
              className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Diseño UI/UX
            </motion.div>
            <motion.div
              className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              React
            </motion.div>
            <motion.div
              className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Vue.js
            </motion.div>
            <motion.div
              className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Figma
            </motion.div>
            <motion.div
              className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Responsive Design
            </motion.div>
          </div>

          <div className="mt-6 flex justify-end">
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gray-800 text-white font-medium rounded hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bx bx-download mr-2"></i>Descargar CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
