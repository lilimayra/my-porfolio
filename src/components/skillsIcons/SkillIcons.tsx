import { motion } from "framer-motion";

const SkillIcons = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Estado inicial: oculto y desplazado
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Tiempo de espera entre la aparición de cada ícono
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Estado inicial para cada ícono
    visible: { opacity: 1, y: 0 }, // Estado visible para cada ícono
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center mt-4"
      initial="hidden"
      whileInView="visible" // Activa la animación al entrar en la vista
      viewport={{ once: true, amount: 0.2 }} // Se ejecuta una vez cuando el 30% del componente está visible
      variants={containerVariants} // Aplica las variantes definidas arriba
    >
      <div className="flex flex-wrap justify-center space-x-4 md:space-x-12 lg:space-x-16">
        {/* Cada ícono tiene su animación individual */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <i className="bx bxl-css3 text-5xl md:text-6xl text-gray-600"></i>
          <p className="mt-2 text-sm text-gray-600">CSS3</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <i className="bx bxl-tailwind-css text-5xl md:text-6xl text-gray-600"></i>
          <p className="mt-2 text-sm text-gray-600">Tailwind</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <i className="bx bxl-bootstrap text-5xl md:text-6xl text-gray-600"></i>
          <p className="mt-2 text-sm text-gray-600">Bootstrap</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <i className="bx bxl-javascript text-5xl md:text-6xl text-gray-600"></i>
          <p className="mt-2 text-sm text-gray-600">JavaScript</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center mt-4 md:mt-0"
          variants={itemVariants}
        >
          <i className="bx bxl-react text-5xl md:text-6xl text-gray-600"></i>
          <p className="mt-2 text-sm text-gray-600">React</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center mt-4 md:mt-0"
          variants={itemVariants}
        >
          <i className="bx bxl-vuejs text-5xl md:text-6xl text-gray-600"></i>
          <p className="mt-2 text-sm text-gray-600">Vue.js</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center mt-4 md:mt-0"
          variants={itemVariants}
        >
          <i className="bx bxl-github text-5xl md:text-6xl text-gray-600"></i>
          <p className="mt-2 text-sm text-gray-600">GitHub</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillIcons;
