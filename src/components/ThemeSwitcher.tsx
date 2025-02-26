import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import themeManager, { ThemeName } from "@/themes/themeManager";

/**
 * Componente que permite al usuario alternar entre los tres temas de color
 */
const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(
    themeManager.getCurrentThemeName()
  );

  useEffect(() => {
    // Actualizar el estado cuando cambie el tema
    const removeListener = themeManager.addThemeChangeListener(() => {
      setCurrentTheme(themeManager.getCurrentThemeName());
    });

    // Limpiar listener al desmontar
    return removeListener;
  }, []);

  const toggleTheme = () => {
    themeManager.toggleTheme();
  };

  // Determinar el estilo y el icono según el tema activo
  const getButtonStyle = () => {
    switch (currentTheme) {
      case ThemeName.GREEN:
        return {
          backgroundColor: "#3e5835",
          color: "white",
          icon: (
            <i className="bx bxs-leaf text-xl" title="Cambiar a modo claro"></i>
          ),
        };
      case ThemeName.LIGHT:
        return {
          backgroundColor: "#F5F2E9",
          color: "#3e5835",
          icon: (
            <i className="bx bxs-sun text-xl" title="Cambiar a modo oscuro"></i>
          ),
        };
      case ThemeName.DARK:
        return {
          backgroundColor: "#2D2D2D",
          color: "#B5FF99",
          icon: (
            <i
              className="bx bxs-moon text-xl"
              title="Cambiar a modo planta"
            ></i>
          ),
        };
      default:
        return {
          backgroundColor: "#3e5835",
          color: "white",
          icon: <i className="bx bxs-leaf text-xl" title="Cambiar de tema"></i>,
        };
    }
  };

  const buttonStyle = getButtonStyle();

  return (
    <div className="fixed right-5 bottom-5 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="p-3 rounded-full shadow-lg flex items-center justify-center"
        style={{
          backgroundColor: buttonStyle.backgroundColor,
          color: buttonStyle.color,
        }}
      >
        {buttonStyle.icon}
      </motion.button>
      <span className="sr-only">Cambiar tema</span>
    </div>
  );
};

export default ThemeSwitcher;
