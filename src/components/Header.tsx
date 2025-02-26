import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";

const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="mb-5">
      <Navbar />
      <section className="fondos flex flex-col items-center justify-start md:justify-center text-center p-10">
        <motion.div
          className="container w-full max-w-lg lg:max-w-3xl mx-auto translucent-bg mt-10"
          initial={{ opacity: 0, x: 100 }} // Comienza oculto y desplazado a la derecha
          animate={visible ? { opacity: 1, x: 0 } : {}} // Al mostrar, se anima a ser visible y en su posición original
          transition={{ duration: 0.5 }} // Duración de la animación
        >
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-shadow">
            ¡Hola!
          </h1>
          <p className="text-white text-sm md:text-lg lg:text-xl mb-2 text-shadow">
            Soy Mayra, mi camino está marcado por el aprendizaje y la búsqueda
            de retos que me impulsen a crecer
          </p>
        </motion.div>
      </section>
    </header>
  );
};

export default Header;
