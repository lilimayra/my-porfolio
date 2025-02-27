import { motion } from "framer-motion";
import { designProjects } from "@/data/projectsData";

const DesignProjects = () => {
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
        {designProjects.map((project) => (
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
              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-green-transparent text-green-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
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

export default DesignProjects;
