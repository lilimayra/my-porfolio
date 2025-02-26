import primerProyecto from "@/assets/img/catalogo.png";
import joya from "@/assets/img/joya.png";
import veterinaria from "@/assets/img/veterinaria.png";
import work from "@/assets/img/work.png";
import billder from "@/assets/img/proyectoBillder.png";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Catálogo Handmade Design",
    image: primerProyecto,
    description:
      "Este proyecto fue parte de mi aprendizaje en IDECREA, utilizando HTML y SASS. Es un sitio web para personalizar hogares con piezas artesanales únicas, incluyendo plantas de esquejes que aportan un toque distintivo.",
    url: "https://handmadedesigns.netlify.app",
  },
  {
    id: 2,
    title: "Carrito de Compra Handmade Design",
    image: work,
    description:
      "Un carrito de compras intuitivo hecho con JavaScript y CSS. Facilita agregar productos con un solo clic y permite revisar y ajustar la selección antes de finalizar la compra, asegurando una experiencia rápida y fluida.",
    url: "https://handmadedesigns-cart.netlify.app",
  },
  {
    id: 3,
    title: "Joyas de Acero",
    image: joya,
    description:
      "Catálogo de joyas y accesorios únicos, creado con Vue y Bootstrap. Explora diseños elegantes y añade tus favoritos al carrito de compras.",
    url: "https://astonishing-tulumba-8c3592.netlify.app",
  },
  {
    id: 4,
    title: "Administrador de Pacientes",
    image: veterinaria,
    description:
      "Herramienta para veterinarias desarrollada en Vue y Tailwind. Facilita la gestión de registros, citas y tratamientos de pacientes.",
    url: "https://astonishing-tulumba-8c3592.netlify.app",
  },
  {
    id: 5,
    title: "Billder Fintech para albañiles",
    image: billder,
    description:
      "Proyecto del TrainindCamo IT de igrowker. Solución fintech para albañiles y trabajadores de la construcción, desarrollada con React, Vite, TypeScript y Tailwind. Innovación en el sector Tech for Labor.",
    url: "https://billder.netlify.app/auth/login",
  },
];

const ProjectGrid = () => {
  // Configuración para la animación de los proyectos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="backdrop-blur-sm bg-transparent rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg flex flex-col"
            variants={itemVariants}
          >
            <div className="relative h-80 md:h-96 overflow-hidden group rounded-t-lg p-4">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain rounded-t-lg transition-all duration-500 ease-in-out transform scale-95 group-hover:scale-100"
                  style={{
                    transformOrigin: "center center",
                  }}
                />
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-3 text-xl font-semibold text-center">
                {project.title}
              </h3>
              <p className="mb-5 text-sm flex-grow min-h-[100px]">
                {project.description}
              </p>
              <div className="flex justify-center mt-auto">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block button hover:bg-yellow-500 transition"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectGrid;
