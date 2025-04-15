import { motion } from "framer-motion";

// Importación de imágenes UX/UI
import uxui1 from "@/assets/img/uxui1.png";
import uxui2 from "@/assets/img/uxui2.png";
import uxui3 from "@/assets/img/uxui3.png";
import uxui4 from "@/assets/img/uxui4.png";
import uxui5 from "@/assets/img/uxui5.png";
import uxui6 from "@/assets/img/uxui6.png";

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

  // Array de imágenes UX/UI para mostrar
  const uxuiImages = [uxui1, uxui2, uxui3, uxui4, uxui5, uxui6];

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="flex flex-col gap-10">
        {uxuiImages.map((image, index) => (
          <motion.div
            key={`uxui-${index}`}
            className="w-full overflow-hidden rounded-lg shadow-lg background-custom relative transition-all hover:shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={`Proyecto UX/UI ${index + 1}`}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DesignProjects;
